import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Check,
  Compass,
  FileText,
  Layers,
  Moon,
  RotateCcw,
  Shield,
  ShieldOff,
  Sun,
  Target,
} from 'lucide-react';
import { BRAND } from './config/brand';
import { CODES_SAFES } from './data/codesSafes';
import { DISCOVERY_DROPS } from './data/discoveryLedger';
import { EASTER_EGGS } from './data/easterEggs';
import { MYTH_INVESTIGATIONS } from './data/mythBoard';
import { UNIQUE_GEAR } from './data/uniqueGear';
import { EasterEggCard } from './components/EasterEggCard';
import {
  FilterToolbar,
  type SortOption,
  type StatusFilter,
} from './components/FilterToolbar';
import { LedgerModal } from './components/LedgerModal';
import { LeonidaMap } from './components/LeonidaMap';
import { ModuleBlueprintModal } from './components/ModuleBlueprintModal';
import { useAtlasProgress } from './hooks/useAtlasProgress';
import {
  COMPLEXITY_META,
  LEONIDA_REGIONS,
  MODULE_REGISTRY,
  REGION_LIST,
} from './modules/registry';
import type {
  AtlasModuleDefinition,
  BaseDiscoveryEntry,
  EasterEggCategory,
  EasterEggEntry,
  LeonidaRegionId,
  TriggerComplexity,
} from './types/atlas';

const CodesSafesView = lazy(() =>
  import('./modules/codesSafes/CodesSafesView').then((m) => ({
    default: m.CodesSafesView,
  }))
);
const UniqueGearView = lazy(() =>
  import('./modules/uniqueGear/UniqueGearView').then((m) => ({
    default: m.UniqueGearView,
  }))
);
const MythBoardView = lazy(() =>
  import('./modules/mythBoard/MythBoardView').then((m) => ({
    default: m.MythBoardView,
  }))
);

type LiveModuleId = 'easter-eggs' | 'codes-vaults' | 'unique-gear' | 'mysteries';

function isLiveModuleId(id: string): id is LiveModuleId {
  return (
    id === 'easter-eggs' ||
    id === 'codes-vaults' ||
    id === 'unique-gear' ||
    id === 'mysteries'
  );
}

export function App() {
  const {
    state,
    toggleFound,
    toggleBookmark,
    toggleStepCompleted,
    markAllStepsAndFound,
    toggleSpoilerShield,
    toggleTheme,
    resetProgress,
  } = useAtlasProgress();

  const [activeModuleId, setActiveModuleId] =
    useState<LiveModuleId>('easter-eggs');
  const [selectedRegion, setSelectedRegion] = useState<LeonidaRegionId | 'all'>(
    'all'
  );
  const [selectedCategory, setSelectedCategory] = useState<
    EasterEggCategory | 'all'
  >('all');
  const [selectedComplexity, setSelectedComplexity] = useState<
    TriggerComplexity | 'all'
  >('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const [expandedIds, setExpandedIds] = useState<string[]>(() =>
    EASTER_EGGS[0] ? [EASTER_EGGS[0].id] : []
  );
  const [activeRadarEntryId, setActiveRadarEntryId] = useState<string | null>(
    () => EASTER_EGGS[0]?.id ?? null
  );
  const [previewModule, setPreviewModule] =
    useState<AtlasModuleDefinition | null>(null);
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);

  const latestDropId = DISCOVERY_DROPS[0]?.id ?? '';
  const [seenDropId, setSeenDropId] = useState<string>(() => {
    try {
      return (
        window.localStorage.getItem(`${BRAND.storageKeyPrefix}_seen_drop`) ?? ''
      );
    } catch {
      return '';
    }
  });
  const hasUnreadDrop = Boolean(latestDropId && seenDropId !== latestDropId);
  const latestDropCount = DISCOVERY_DROPS[0]?.addedEggs.length ?? 0;

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const jumpToEasterEgg = useCallback((slug: string) => {
    const target = EASTER_EGGS.find((item) => item.slug === slug);
    if (!target) return;

    setActiveModuleId('easter-eggs');
    setSelectedRegion('all');
    setSelectedCategory('all');
    setSelectedComplexity('all');
    setStatusFilter('all');
    setSearchQuery('');
    setExpandedIds((prev) =>
      prev.includes(target.id) ? prev : [...prev, target.id]
    );
    setActiveRadarEntryId(target.id);
    window.history.replaceState(null, '', `#egg-${target.slug}`);
    window.setTimeout(() => {
      document
        .getElementById(`egg-${target.slug}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, []);

  // Deep-link URL hash support (#egg-<slug>, #module-<id>, #ledger)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash === 'ledger') {
        setIsLedgerOpen(true);
        return;
      }
      if (hash.startsWith('module-')) {
        const modCandidate = hash.slice('module-'.length);
        if (isLiveModuleId(modCandidate)) {
          setActiveModuleId(modCandidate);
          setSelectedRegion('all');
        }
        return;
      }
      if (!hash.startsWith('egg-')) return;
      const slug = hash.slice(4);
      const target = EASTER_EGGS.find((item) => item.slug === slug);
      if (!target) return;

      setActiveModuleId('easter-eggs');
      setExpandedIds((prev) =>
        prev.includes(target.id) ? prev : [...prev, target.id]
      );
      setActiveRadarEntryId(target.id);
      window.setTimeout(() => {
        document
          .getElementById(`egg-${target.slug}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const moduleCounts: Record<LiveModuleId, number> = useMemo(
    () => ({
      'easter-eggs': EASTER_EGGS.length,
      'codes-vaults': CODES_SAFES.length,
      'unique-gear': UNIQUE_GEAR.length,
      mysteries: MYTH_INVESTIGATIONS.length,
    }),
    []
  );

  const currentModuleDataset: BaseDiscoveryEntry[] = useMemo(() => {
    switch (activeModuleId) {
      case 'codes-vaults':
        return CODES_SAFES;
      case 'unique-gear':
        return UNIQUE_GEAR;
      case 'mysteries':
        return MYTH_INVESTIGATIONS;
      case 'easter-eggs':
      default:
        return EASTER_EGGS;
    }
  }, [activeModuleId]);

  const allEntriesCountByRegion = useMemo(() => {
    const map = {} as Record<LeonidaRegionId, number>;
    for (const reg of REGION_LIST) {
      map[reg.id] = 0;
    }
    for (const entry of currentModuleDataset) {
      map[entry.regionId] = (map[entry.regionId] ?? 0) + 1;
    }
    return map;
  }, [currentModuleDataset]);

  const filteredEasterEggs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const list = EASTER_EGGS.filter((entry) => {
      if (selectedRegion !== 'all' && entry.regionId !== selectedRegion) {
        return false;
      }
      if (selectedCategory !== 'all' && entry.category !== selectedCategory) {
        return false;
      }
      if (selectedComplexity !== 'all' && entry.complexity !== selectedComplexity) {
        return false;
      }
      if (statusFilter === 'found' && !state.foundIds.includes(entry.id)) {
        return false;
      }
      if (statusFilter === 'unfound' && state.foundIds.includes(entry.id)) {
        return false;
      }
      if (statusFilter === 'bookmarked' && !state.bookmarkedIds.includes(entry.id)) {
        return false;
      }

      if (q) {
        const haystack = [
          entry.title,
          entry.subtitle,
          entry.subLocation,
          LEONIDA_REGIONS[entry.regionId].name,
          entry.referenceOrigin,
          entry.summary,
          entry.loreContext,
          ...entry.tags,
          ...entry.steps.map(
            (s) => `${s.title} ${s.instruction} ${s.landmarkCue ?? ''}`
          ),
          entry.requirements.specialCode?.value ?? '',
        ]
          .join(' ')
          .toLowerCase();

        if (!haystack.includes(q)) return false;
      }

      return true;
    });

    const sorted = [...list];
    if (sortBy === 'easiest') {
      sorted.sort(
        (a, b) =>
          COMPLEXITY_META[a.complexity].rank - COMPLEXITY_META[b.complexity].rank ||
          a.steps.length - b.steps.length
      );
    } else if (sortBy === 'complex') {
      sorted.sort(
        (a, b) =>
          COMPLEXITY_META[b.complexity].rank - COMPLEXITY_META[a.complexity].rank ||
          b.steps.length - a.steps.length
      );
    } else if (sortBy === 'region') {
      sorted.sort((a, b) =>
        LEONIDA_REGIONS[a.regionId].shortName.localeCompare(
          LEONIDA_REGIONS[b.regionId].shortName
        )
      );
    }

    return sorted;
  }, [
    searchQuery,
    selectedRegion,
    selectedCategory,
    selectedComplexity,
    statusFilter,
    sortBy,
    state.foundIds,
    state.bookmarkedIds,
  ]);

  const radarEntries: BaseDiscoveryEntry[] = useMemo(() => {
    if (activeModuleId === 'easter-eggs') {
      return filteredEasterEggs;
    }
    if (selectedRegion === 'all') {
      return currentModuleDataset;
    }
    return currentModuleDataset.filter((e) => e.regionId === selectedRegion);
  }, [activeModuleId, currentModuleDataset, filteredEasterEggs, selectedRegion]);

  const activeTotalCount = currentModuleDataset.length;
  const activeFoundCount = useMemo(
    () =>
      currentModuleDataset.filter((e) => state.foundIds.includes(e.id)).length,
    [currentModuleDataset, state.foundIds]
  );
  const activeBookmarkedCount = useMemo(
    () =>
      currentModuleDataset.filter((e) => state.bookmarkedIds.includes(e.id))
        .length,
    [currentModuleDataset, state.bookmarkedIds]
  );
  const activeCompletionPct =
    activeTotalCount > 0
      ? Math.round((activeFoundCount / activeTotalCount) * 100)
      : 0;

  const eggTotalCount = EASTER_EGGS.length;
  const eggFoundCount = useMemo(
    () => EASTER_EGGS.filter((e) => state.foundIds.includes(e.id)).length,
    [state.foundIds]
  );
  const eggBookmarkedCount = useMemo(
    () => EASTER_EGGS.filter((e) => state.bookmarkedIds.includes(e.id)).length,
    [state.bookmarkedIds]
  );

  const heroStats = useMemo(() => {
    const activeRegions = Object.values(allEntriesCountByRegion).filter(
      (c) => c > 0
    ).length;

    if (activeModuleId === 'codes-vaults') {
      const safeCount = CODES_SAFES.filter((c) =>
        c.codeType.startsWith('safe-')
      ).length;
      return {
        eyebrowNote: '18 combinations · 2 session solvers',
        headingPrefix: 'Safe codes, keypads, and ciphers across',
        headingAccent: 'Leonida',
        lead: 'Fixed combinations for wall safes, bunker keypads, terminal logins, and dialable phone numbers, plus calculators for randomized session puzzles.',
        trackerVerb: 'cracked',
        nextBtnLabel: 'Next uncracked code',
        stats: [
          { value: CODES_SAFES.length, label: 'Verified codes' },
          { value: safeCount, label: 'Wall & floor safes' },
          { value: 2, label: 'Cipher calculators' },
          { value: activeRegions, label: 'Leonida sectors' },
        ],
      };
    }

    if (activeModuleId === 'unique-gear') {
      const weaponsCount = UNIQUE_GEAR.filter(
        (g) => g.gearCategory === 'weapon'
      ).length;
      const ridesCount = UNIQUE_GEAR.filter(
        (g) => g.gearCategory === 'vehicle'
      ).length;
      return {
        eyebrowNote: '18 items · weapons, apparel, vehicles',
        headingPrefix: 'Unique weapons, apparel, and vehicles across',
        headingAccent: 'Leonida',
        lead: 'Fixed-spawn locations, protagonist eligibility, and safehouse locker or garage storage steps for collectible weapons, outfits, watches, and vehicles.',
        trackerVerb: 'collected',
        nextBtnLabel: 'Next uncollected item',
        stats: [
          { value: UNIQUE_GEAR.length, label: 'Cataloged items' },
          { value: weaponsCount, label: 'Weapons' },
          { value: ridesCount, label: 'Vehicles' },
          { value: activeRegions, label: 'Leonida sectors' },
        ],
      };
    }

    if (activeModuleId === 'mysteries') {
      const debunkedCount = MYTH_INVESTIGATIONS.filter(
        (m) => m.mythStatus === 'debunked'
      ).length;
      const totalEvidence = MYTH_INVESTIGATIONS.reduce(
        (sum, item) => sum + item.evidenceChain.length,
        0
      );
      return {
        eyebrowNote: '12 case files · clues and ruled-out hoaxes',
        headingPrefix: 'Myth investigations and hoax records across',
        headingAccent: 'Leonida',
        lead: 'Case files separating reproduced in-game clues and active community hypotheses from ruled-out forum rumors.',
        trackerVerb: 'reviewed',
        nextBtnLabel: 'Next unreviewed case',
        stats: [
          { value: MYTH_INVESTIGATIONS.length, label: 'Case files' },
          { value: totalEvidence, label: 'Logged clues' },
          { value: debunkedCount, label: 'Ruled-out hoaxes' },
          { value: activeRegions, label: 'Leonida sectors' },
        ],
      };
    }

    const totalSteps = EASTER_EGGS.reduce(
      (sum, item) => sum + item.steps.length,
      0
    );
    const multiStep = EASTER_EGGS.filter(
      (item) => item.complexity === 'multi-step'
    ).length;
    return {
      eyebrowNote: '34 verified entries · 7 sectors',
      headingPrefix: 'Easter eggs and field triggers across',
      headingAccent: 'Leonida',
      lead: BRAND.tagline,
      trackerVerb: 'found',
      nextBtnLabel: 'Next unfound entry',
      stats: [
        { value: EASTER_EGGS.length, label: 'Verified entries' },
        { value: activeRegions, label: 'Leonida sectors' },
        { value: totalSteps, label: 'Walkthrough steps' },
        { value: multiStep, label: 'Multi-step puzzles' },
      ],
    };
  }, [activeModuleId, allEntriesCountByRegion]);

  const hasActiveFilters =
    selectedRegion !== 'all' ||
    selectedCategory !== 'all' ||
    selectedComplexity !== 'all' ||
    statusFilter !== 'all' ||
    searchQuery.trim() !== '';

  const resetAllFilters = useCallback(() => {
    setSelectedRegion('all');
    setSelectedCategory('all');
    setSelectedComplexity('all');
    setStatusFilter('all');
    setSearchQuery('');
  }, []);

  const handleSelectModule = useCallback((mod: AtlasModuleDefinition) => {
    if (mod.status !== 'live' || !isLiveModuleId(mod.id)) {
      setPreviewModule(mod);
      return;
    }
    setActiveModuleId(mod.id);
    setSelectedRegion('all');
    window.history.replaceState(
      null,
      '',
      mod.id === 'easter-eggs' ? '#top' : `#module-${mod.id}`
    );
    const firstId =
      mod.id === 'codes-vaults'
        ? CODES_SAFES[0]?.id
        : mod.id === 'unique-gear'
          ? UNIQUE_GEAR[0]?.id
          : mod.id === 'mysteries'
            ? MYTH_INVESTIGATIONS[0]?.id
            : EASTER_EGGS[0]?.id;
    setActiveRadarEntryId(firstId ?? null);
  }, []);

  const handleToggleExpand = useCallback((entryId: string) => {
    setExpandedIds((prev) =>
      prev.includes(entryId)
        ? prev.filter((id) => id !== entryId)
        : [...prev, entryId]
    );
    setActiveRadarEntryId(entryId);
  }, []);

  const allFilteredExpanded =
    filteredEasterEggs.length > 0 &&
    filteredEasterEggs.every((entry) => expandedIds.includes(entry.id));

  const handleExpandAll = useCallback(() => {
    setExpandedIds((prev) => {
      const merged = new Set([...prev, ...filteredEasterEggs.map((e) => e.id)]);
      return Array.from(merged);
    });
  }, [filteredEasterEggs]);

  const handleCollapseAll = useCallback(() => {
    const filteredSet = new Set(filteredEasterEggs.map((e) => e.id));
    setExpandedIds((prev) => prev.filter((id) => !filteredSet.has(id)));
  }, [filteredEasterEggs]);

  const handleSelectEntryPin = useCallback(
    (entryId: string) => {
      setActiveRadarEntryId(entryId);
      if (activeModuleId === 'easter-eggs') {
        const target = EASTER_EGGS.find((item) => item.id === entryId);
        if (!target) return;
        setExpandedIds((prev) =>
          prev.includes(entryId) ? prev : [...prev, entryId]
        );
        window.setTimeout(() => {
          document
            .getElementById(`egg-${target.slug}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 40);
      } else {
        window.setTimeout(() => {
          document
            .getElementById(`entry-${entryId}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 40);
      }
    },
    [activeModuleId]
  );

  const handleLocateOnRadar = useCallback(
    (entry: BaseDiscoveryEntry) => {
      setActiveRadarEntryId(entry.id);
      showToast(`Radar pin: ${entry.subLocation}`);
      if (window.innerWidth <= 1080) {
        document
          .querySelector('.radar-card')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [showToast]
  );

  const handleActivateModuleRadarEntry = useCallback(
    (entryId: string) => {
      const target = currentModuleDataset.find((e) => e.id === entryId);
      setActiveRadarEntryId(entryId);
      if (target) {
        showToast(`Radar pin: ${target.subLocation}`);
      }
      if (window.innerWidth <= 1080) {
        document
          .querySelector('.radar-card')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [currentModuleDataset, showToast]
  );

  const handleCopyShareLink = useCallback(
    (entry: EasterEggEntry) => {
      const url = `${window.location.origin}${window.location.pathname}#egg-${entry.slug}`;
      window.history.replaceState(null, '', `#egg-${entry.slug}`);
      navigator.clipboard?.writeText(url).catch(() => {});
      showToast(`Link copied: ${entry.indexCode}`);
    },
    [showToast]
  );

  const handleCopyText = useCallback(
    (label: string, value: string) => {
      navigator.clipboard?.writeText(value).catch(() => {});
      showToast(`Copied ${label}: ${value}`);
    },
    [showToast]
  );

  const handleJumpNextUnfound = useCallback(() => {
    const nextUnfound = currentModuleDataset.find(
      (e) => !state.foundIds.includes(e.id)
    );
    if (!nextUnfound) {
      showToast('All entries in this module are marked complete.');
      return;
    }
    setSelectedRegion('all');
    setActiveRadarEntryId(nextUnfound.id);

    if (activeModuleId === 'easter-eggs') {
      resetAllFilters();
      setExpandedIds((prev) =>
        prev.includes(nextUnfound.id) ? prev : [...prev, nextUnfound.id]
      );
      window.setTimeout(() => {
        document
          .getElementById(`egg-${nextUnfound.slug}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    } else {
      window.setTimeout(() => {
        document
          .getElementById(`entry-${nextUnfound.id}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, [activeModuleId, currentModuleDataset, resetAllFilters, showToast, state.foundIds]);

  const totalTrackedAnyModule = state.foundIds.length + state.bookmarkedIds.length;

  return (
    <div>
      {/* Sticky Header + Multi-Module Navigation */}
      <header className="top-header">
        <div className="container-shell">
          <div className="header-inner">
            <a
              href="#top"
              className="brand-lockup"
              onClick={() => {
                setActiveModuleId('easter-eggs');
                setSelectedRegion('all');
              }}
            >
              <div className="brand-mark" aria-hidden="true">
                <Compass size={19} />
              </div>
              <div>
                <div className="brand-title">
                  <span>{BRAND.name}</span>
                  <span className="brand-code">{BRAND.shortCode}</span>
                </div>
                <span className="brand-sub">{BRAND.subtitle}</span>
              </div>
            </a>

            <div className="header-actions">
              <button
                type="button"
                className="utility-btn"
                onClick={() => {
                  setIsLedgerOpen(true);
                  if (latestDropId) {
                    setSeenDropId(latestDropId);
                    try {
                      window.localStorage.setItem(
                        `${BRAND.storageKeyPrefix}_seen_drop`,
                        latestDropId
                      );
                    } catch {
                      // Ignore storage restrictions
                    }
                  }
                }}
                title="Open discovery ledger and recent additions"
              >
                <FileText size={15} style={{ color: 'var(--accent-flamingo)' }} />
                <span>Ledger</span>
                {hasUnreadDrop && latestDropCount > 0 && (
                  <span className="module-pill-badge live">+{latestDropCount}</span>
                )}
              </button>

              <button
                type="button"
                className={`utility-btn ${state.spoilerShield ? 'active-shield' : ''}`}
                onClick={toggleSpoilerShield}
                title="Blur payoff text on unfound entries while keeping steps readable"
              >
                {state.spoilerShield ? <Shield size={15} /> : <ShieldOff size={15} />}
                <span>
                  Spoiler Shield: {state.spoilerShield ? 'On' : 'Off'}
                </span>
              </button>

              <button
                type="button"
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  state.theme === 'dark' ? 'light' : 'dark'
                } theme`}
                title={`Switch to ${state.theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {state.theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                <span>{state.theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>

          {/* Multi-Module Platform Switcher (4 Live Modules + 2 Planned) */}
          <nav className="module-strip" aria-label="Leonida Codex modules">
            {MODULE_REGISTRY.map((mod) => {
              const isLive = mod.status === 'live' && isLiveModuleId(mod.id);
              const isSelected = isLive && activeModuleId === mod.id;
              const liveCount = isLive && isLiveModuleId(mod.id) ? moduleCounts[mod.id] : 0;

              return (
                <button
                  key={mod.id}
                  type="button"
                  className={`module-pill ${isSelected ? 'is-live' : ''}`}
                  aria-current={isSelected ? 'page' : undefined}
                  onClick={() => handleSelectModule(mod)}
                >
                  <Layers size={13} />
                  <span>{mod.shortLabel}</span>
                  <span
                    className={`module-pill-badge ${
                      isSelected ? 'live' : isLive ? 'available' : 'planned'
                    }`}
                  >
                    {isLive ? liveCount : 'Planned'}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main id="top" className="container-shell">
        {/* Archive Module Overview & Local Progress Log */}
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-banner">
              <div>
                <div className="eyebrow-row">
                  <span className="eyebrow-chip">{BRAND.edition}</span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}
                  >
                    {heroStats.eyebrowNote}
                  </span>
                </div>

                <h1 className="hero-heading">
                  {heroStats.headingPrefix}{' '}
                  <span className="gradient-span">{heroStats.headingAccent}</span>
                </h1>

                <p className="hero-lead">{heroStats.lead}</p>
              </div>

              <div className="hero-stats-bar">
                {heroStats.stats.map((st, idx) => (
                  <div key={idx} className="stat-tile">
                    <div className="stat-value">{st.value}</div>
                    <div className="stat-label">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Log Card */}
            <div className="tracker-panel">
              <div>
                <div className="tracker-header">
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Local Field Log
                    </div>
                    <h2
                      className="font-display tabular"
                      style={{ margin: '0.2rem 0 0', fontSize: '1.22rem' }}
                    >
                      {activeFoundCount} of {activeTotalCount} {heroStats.trackerVerb}
                    </h2>
                  </div>
                  <div className="tracker-pct">{activeCompletionPct}%</div>
                </div>

                <div className="progress-track" style={{ marginTop: '0.85rem' }}>
                  <div
                    className="progress-fill"
                    style={{ width: `${activeCompletionPct}%` }}
                  />
                </div>

                <p
                  style={{
                    margin: '0.75rem 0 0',
                    fontSize: '0.83rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Checked steps, found markers, and pinned route entries persist in
                  browser storage (<code className="font-mono">leonida_codex_v1</code>)
                  across all four modules.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  type="button"
                  className="utility-btn active-shield"
                  onClick={handleJumpNextUnfound}
                >
                  <Target size={15} />
                  <span>{heroStats.nextBtnLabel}</span>
                </button>

                {totalTrackedAnyModule > 0 ? (
                  confirmReset ? (
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="status-btn"
                        style={{ color: 'var(--accent-flamingo)' }}
                        onClick={() => {
                          resetProgress();
                          setConfirmReset(false);
                          showToast('Local field log cleared.');
                        }}
                      >
                        Confirm reset
                      </button>
                      <button
                        type="button"
                        className="status-btn"
                        onClick={() => setConfirmReset(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="status-btn"
                      onClick={() => setConfirmReset(true)}
                    >
                      <RotateCcw size={13} />
                      Reset log
                    </button>
                  )
                ) : (
                  <span className="tabular" style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    {activeBookmarkedCount} pinned to route
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Interactive Split Layout: Sector Radar + Active Module View */}
        <div className="explorer-layout">
          <div className="sidebar-sticky">
            <LeonidaMap
              entries={radarEntries}
              allEntriesCountByRegion={allEntriesCountByRegion}
              selectedRegion={selectedRegion}
              activeEntryId={activeRadarEntryId}
              foundIds={state.foundIds}
              onSelectRegion={setSelectedRegion}
              onSelectEntryPin={handleSelectEntryPin}
            />

            <div className="sidebar-note-card">
              <div
                className="font-display"
                style={{
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem',
                  fontSize: '0.88rem',
                }}
              >
                Reference Controls
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                }}
              >
                <li>
                  Press <code className="font-mono">/</code> to focus the search input.
                </li>
                <li>
                  Select a county on the radar to filter all active module entries.
                </li>
                <li>
                  Toggle <strong>Spoiler Shield</strong> to mask payoffs on unfound
                  entries while keeping steps visible.
                </li>
              </ul>
            </div>
          </div>

          {activeModuleId === 'easter-eggs' && (
            <section aria-label="Easter Eggs Directory">
              <FilterToolbar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedComplexity={selectedComplexity}
                onComplexityChange={setSelectedComplexity}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                hasActiveFilters={hasActiveFilters}
                onResetFilters={resetAllFilters}
                filteredCount={filteredEasterEggs.length}
                totalCount={eggTotalCount}
                allFilteredExpanded={allFilteredExpanded}
                onExpandAll={handleExpandAll}
                onCollapseAll={handleCollapseAll}
                counts={{
                  found: eggFoundCount,
                  unfound: eggTotalCount - eggFoundCount,
                  bookmarked: eggBookmarkedCount,
                }}
              />

              {filteredEasterEggs.length === 0 ? (
                <div className="empty-state-card">
                  <h3 className="font-display" style={{ margin: '0 0 0.4rem' }}>
                    No matching entries in this sector
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      margin: '0 0 1.1rem',
                    }}
                  >
                    Clear one or more active region, category, or status filters.
                  </p>
                  <button
                    type="button"
                    className="utility-btn active-shield"
                    onClick={resetAllFilters}
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="cards-stack">
                  {filteredEasterEggs.map((entry) => (
                    <EasterEggCard
                      key={entry.id}
                      entry={entry}
                      isExpanded={expandedIds.includes(entry.id)}
                      isFound={state.foundIds.includes(entry.id)}
                      isBookmarked={state.bookmarkedIds.includes(entry.id)}
                      completedSteps={state.completedSteps[entry.id] ?? []}
                      globalSpoilerShield={state.spoilerShield}
                      onToggleExpand={handleToggleExpand}
                      onToggleFound={(id) => {
                        const willBeFound = !state.foundIds.includes(id);
                        toggleFound(id);
                        if (willBeFound) {
                          showToast(`Marked found: ${entry.indexCode}`);
                        }
                      }}
                      onToggleBookmark={toggleBookmark}
                      onToggleStep={toggleStepCompleted}
                      onCompleteAllSteps={(id, count) => {
                        markAllStepsAndFound(id, count);
                        showToast(`All steps checked: ${entry.indexCode}`);
                      }}
                      onLocateOnRadar={handleLocateOnRadar}
                      onCopyShareLink={handleCopyShareLink}
                      onCopyText={handleCopyText}
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          <Suspense
            fallback={
              <div className="empty-state-card" style={{ color: 'var(--text-secondary)' }}>
                Loading module…
              </div>
            }
          >
            {activeModuleId === 'codes-vaults' && (
              <CodesSafesView
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
                activeRadarEntryId={activeRadarEntryId}
                onActivateRadarEntry={handleActivateModuleRadarEntry}
                foundIds={state.foundIds}
                bookmarkedIds={state.bookmarkedIds}
                completedSteps={state.completedSteps}
                spoilerShield={state.spoilerShield}
                onToggleFound={toggleFound}
                onToggleBookmark={toggleBookmark}
                onToggleStep={toggleStepCompleted}
                onCompleteAllSteps={markAllStepsAndFound}
                onCopyText={handleCopyText}
                onJumpToEasterEgg={jumpToEasterEgg}
              />
            )}

            {activeModuleId === 'unique-gear' && (
              <UniqueGearView
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
                activeRadarEntryId={activeRadarEntryId}
                onActivateRadarEntry={handleActivateModuleRadarEntry}
                foundIds={state.foundIds}
                bookmarkedIds={state.bookmarkedIds}
                completedSteps={state.completedSteps}
                spoilerShield={state.spoilerShield}
                onToggleFound={toggleFound}
                onToggleBookmark={toggleBookmark}
                onToggleStep={toggleStepCompleted}
                onCompleteAllSteps={markAllStepsAndFound}
                onCopyText={handleCopyText}
                onJumpToEasterEgg={jumpToEasterEgg}
              />
            )}

            {activeModuleId === 'mysteries' && (
              <MythBoardView
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
                activeRadarEntryId={activeRadarEntryId}
                onActivateRadarEntry={handleActivateModuleRadarEntry}
                foundIds={state.foundIds}
                bookmarkedIds={state.bookmarkedIds}
                completedSteps={state.completedSteps}
                spoilerShield={state.spoilerShield}
                onToggleFound={toggleFound}
                onToggleBookmark={toggleBookmark}
                onToggleStep={toggleStepCompleted}
                onCompleteAllSteps={markAllStepsAndFound}
                onCopyText={handleCopyText}
                onJumpToEasterEgg={jumpToEasterEgg}
              />
            )}
          </Suspense>
        </div>
      </main>

      <footer className="site-footer">
        <div
          className="container-shell"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <strong className="font-display" style={{ color: 'var(--text-primary)' }}>
              {BRAND.name}
            </strong>{' '}
            · Unofficial GTA VI reference archive across 7 Leonida sectors. Progress
            stored locally in browser.
          </div>
          <div className="font-mono" style={{ fontSize: '0.75rem' }}>
            82 entries · 4 live modules
          </div>
        </div>
      </footer>

      <ModuleBlueprintModal
        module={previewModule}
        onClose={() => setPreviewModule(null)}
      />

      <LedgerModal
        isOpen={isLedgerOpen}
        onClose={() => setIsLedgerOpen(false)}
        onJumpToSlug={jumpToEasterEgg}
      />

      {toastMessage && (
        <div className="toast-banner" role="status" aria-live="polite">
          <Check size={15} style={{ color: 'var(--accent-lime)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Check,
  Compass,
  Layers,
  Moon,
  RotateCcw,
  Shield,
  ShieldOff,
  Sparkles,
  Sun,
  Target,
} from 'lucide-react';
import { BRAND } from './config/brand';
import { DISCOVERY_DROPS } from './data/discoveryLedger';
import { EASTER_EGGS } from './data/easterEggs';
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
  EasterEggCategory,
  EasterEggEntry,
  LeonidaRegionId,
  TriggerComplexity,
} from './types/atlas';

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

  const [selectedRegion, setSelectedRegion] = useState<LeonidaRegionId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<EasterEggCategory | 'all'>(
    'all'
  );
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
  const [previewModule, setPreviewModule] = useState<AtlasModuleDefinition | null>(
    null
  );
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  const latestDropId = DISCOVERY_DROPS[0]?.id ?? '';
  const [seenDropId, setSeenDropId] = useState<string>(() => {
    try {
      return window.localStorage.getItem(`${BRAND.storageKeyPrefix}_seen_drop`) ?? '';
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

  // Deep-link URL hash support (#egg-<slug>)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash.startsWith('egg-')) return;
      const slug = hash.slice(4);
      const target = EASTER_EGGS.find((item) => item.slug === slug);
      if (!target) return;

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

  const allEntriesCountByRegion = useMemo(() => {
    const map = {} as Record<LeonidaRegionId, number>;
    for (const reg of REGION_LIST) {
      map[reg.id] = 0;
    }
    for (const entry of EASTER_EGGS) {
      map[entry.regionId] = (map[entry.regionId] ?? 0) + 1;
    }
    return map;
  }, []);

  const filteredEntries = useMemo(() => {
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
          ...entry.steps.map((s) => `${s.title} ${s.instruction} ${s.landmarkCue ?? ''}`),
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

  const totalCount = EASTER_EGGS.length;
  const foundCount = useMemo(
    () => EASTER_EGGS.filter((e) => state.foundIds.includes(e.id)).length,
    [state.foundIds]
  );
  const bookmarkedCount = useMemo(
    () => EASTER_EGGS.filter((e) => state.bookmarkedIds.includes(e.id)).length,
    [state.bookmarkedIds]
  );
  const totalWalkthroughSteps = useMemo(
    () => EASTER_EGGS.reduce((sum, item) => sum + item.steps.length, 0),
    []
  );
  const multiStepCount = useMemo(
    () => EASTER_EGGS.filter((item) => item.complexity === 'multi-step').length,
    []
  );
  const activeRegionSectorsCount = useMemo(
    () =>
      Object.values(allEntriesCountByRegion).filter((count) => count > 0).length,
    [allEntriesCountByRegion]
  );

  const completionPct =
    totalCount > 0 ? Math.round((foundCount / totalCount) * 100) : 0;

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

  const handleToggleExpand = useCallback((entryId: string) => {
    setExpandedIds((prev) =>
      prev.includes(entryId)
        ? prev.filter((id) => id !== entryId)
        : [...prev, entryId]
    );
    setActiveRadarEntryId(entryId);
  }, []);

  const allFilteredExpanded =
    filteredEntries.length > 0 &&
    filteredEntries.every((entry) => expandedIds.includes(entry.id));

  const handleExpandAll = useCallback(() => {
    setExpandedIds((prev) => {
      const merged = new Set([...prev, ...filteredEntries.map((e) => e.id)]);
      return Array.from(merged);
    });
  }, [filteredEntries]);

  const handleCollapseAll = useCallback(() => {
    const filteredSet = new Set(filteredEntries.map((e) => e.id));
    setExpandedIds((prev) => prev.filter((id) => !filteredSet.has(id)));
  }, [filteredEntries]);

  const handleSelectEntryPin = useCallback((entryId: string) => {
    const target = EASTER_EGGS.find((item) => item.id === entryId);
    if (!target) return;
    setActiveRadarEntryId(entryId);
    setExpandedIds((prev) => (prev.includes(entryId) ? prev : [...prev, entryId]));
    window.setTimeout(() => {
      document
        .getElementById(`egg-${target.slug}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  }, []);

  const handleLocateOnRadar = useCallback(
    (entry: EasterEggEntry) => {
      setActiveRadarEntryId(entry.id);
      showToast(`Radar locked: ${entry.subLocation}`);
      if (window.innerWidth <= 1080) {
        document
          .querySelector('.radar-card')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [showToast]
  );

  const handleCopyShareLink = useCallback(
    (entry: EasterEggEntry) => {
      const url = `${window.location.origin}${window.location.pathname}#egg-${entry.slug}`;
      window.history.replaceState(null, '', `#egg-${entry.slug}`);
      navigator.clipboard?.writeText(url).catch(() => {});
      showToast(`Direct link copied for "${entry.title}"`);
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
    const nextUnfound = EASTER_EGGS.find((e) => !state.foundIds.includes(e.id));
    if (!nextUnfound) {
      showToast('You have found every verified Easter egg in the archive!');
      return;
    }
    resetAllFilters();
    setExpandedIds((prev) =>
      prev.includes(nextUnfound.id) ? prev : [...prev, nextUnfound.id]
    );
    setActiveRadarEntryId(nextUnfound.id);
    window.setTimeout(() => {
      document
        .getElementById(`egg-${nextUnfound.slug}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }, [resetAllFilters, showToast, state.foundIds]);

  return (
    <div>
      {/* Sticky Header + Extensible Module Bar */}
      <header className="top-header">
        <div className="container-shell">
          <div className="header-inner">
            <a href="#top" className="brand-lockup">
              <div className="brand-mark" aria-hidden="true">
                <Compass size={20} />
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
                title="See the latest Easter eggs added to the archive"
              >
                <Sparkles size={15} style={{ color: 'var(--accent-flamingo)' }} />
                <span>What’s New</span>
                {hasUnreadDrop && latestDropCount > 0 && (
                  <span className="module-pill-badge live">+{latestDropCount}</span>
                )}
              </button>

              <button
                type="button"
                className={`utility-btn ${state.spoilerShield ? 'active-shield' : ''}`}
                onClick={toggleSpoilerShield}
                title="Toggle Spoiler Shield for surprise payoffs while keeping walkthrough steps visible"
              >
                {state.spoilerShield ? <Shield size={15} /> : <ShieldOff size={15} />}
                <span>
                  Spoiler Shield: {state.spoilerShield ? 'ON' : 'OFF'}
                </span>
              </button>

              <button
                type="button"
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  state.theme === 'dark' ? 'light' : 'dark'
                } theme`}
                title={`Switch to ${
                  state.theme === 'dark' ? 'Daylight Field Guide' : 'Vice-Noir Night'
                } theme`}
              >
                {state.theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                <span>{state.theme === 'dark' ? 'Daylight' : 'Night'}</span>
              </button>
            </div>
          </div>

          {/* Multi-Module Platform Switcher (Easter Eggs live + Future Modules ready) */}
          <nav className="module-strip" aria-label="Leonida Codex Modules">
            {MODULE_REGISTRY.map((mod) => {
              const isLive = mod.status === 'live';
              return (
                <button
                  key={mod.id}
                  type="button"
                  className={`module-pill ${isLive ? 'is-live' : ''}`}
                  onClick={() => {
                    if (!isLive) {
                      setPreviewModule(mod);
                    }
                  }}
                >
                  <Layers size={13} />
                  <span>{mod.shortLabel}</span>
                  <span
                    className={`module-pill-badge ${isLive ? 'live' : 'planned'}`}
                  >
                    {isLive ? `${totalCount} Live` : 'Soon'}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main id="top" className="container-shell">
        {/* Hero Dossier & Personal Progress Tracker */}
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-banner">
              <div>
                <div className="eyebrow-row">
                  <span className="eyebrow-chip">
                    <Sparkles
                      size={12}
                      style={{ verticalAlign: 'middle', marginRight: '0.3rem' }}
                    />
                    {BRAND.edition}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}
                  >
                    100% Actionable In-Game Guides
                  </span>
                </div>

                <h1 className="hero-heading">
                  Every Verified{' '}
                  <span className="gradient-span">GTA VI Easter Egg</span>,
                  Explained Step by Step.
                </h1>

                <p className="hero-lead">{BRAND.tagline}</p>
              </div>

              <div className="hero-stats-bar">
                <div className="stat-tile">
                  <div className="stat-value">{totalCount}</div>
                  <div className="stat-label">Verified Secrets</div>
                </div>
                <div className="stat-tile">
                  <div className="stat-value">{activeRegionSectorsCount}</div>
                  <div className="stat-label">Leonida Sectors</div>
                </div>
                <div className="stat-tile">
                  <div className="stat-value">{totalWalkthroughSteps}</div>
                  <div className="stat-label">Walkthrough Steps</div>
                </div>
                <div className="stat-tile">
                  <div className="stat-value">{multiStepCount}</div>
                  <div className="stat-label">Multi-Step Puzzles</div>
                </div>
              </div>
            </div>

            {/* Field Hunt Progress Card */}
            <div className="tracker-panel">
              <div>
                <div className="tracker-header">
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Your Leonida Field Log
                    </div>
                    <h2
                      className="font-display"
                      style={{ margin: '0.2rem 0 0', fontSize: '1.2rem' }}
                    >
                      {foundCount} of {totalCount} Discovered
                    </h2>
                  </div>
                  <div className="tracker-pct">{completionPct}%</div>
                </div>

                <div className="progress-track" style={{ marginTop: '0.85rem' }}>
                  <div
                    className="progress-fill"
                    style={{ width: `${completionPct}%` }}
                  />
                </div>

                <p
                  style={{
                    margin: '0.75rem 0 0',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Expand any dossier below to check off individual in-game steps as
                  you hunt. Progress saves automatically in your browser.
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
                  <span>Next Unfound Egg</span>
                </button>

                {foundCount > 0 || bookmarkedCount > 0 ? (
                  confirmReset ? (
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button
                        type="button"
                        className="status-btn"
                        style={{ color: 'var(--accent-flamingo)' }}
                        onClick={() => {
                          resetProgress();
                          setConfirmReset(false);
                          showToast('Field progress reset');
                        }}
                      >
                        Confirm Reset
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
                      Reset Log
                    </button>
                  )
                ) : (
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {bookmarkedCount} pinned to route
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Interactive Split Layout: Tactical Map + Expandable Guides */}
        <div className="explorer-layout">
          <div className="sidebar-sticky">
            <LeonidaMap
              entries={filteredEntries}
              allEntriesCountByRegion={allEntriesCountByRegion}
              selectedRegion={selectedRegion}
              activeEntryId={activeRadarEntryId}
              foundIds={state.foundIds}
              onSelectRegion={setSelectedRegion}
              onSelectEntryPin={handleSelectEntryPin}
            />

            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '1rem 1.15rem',
                fontSize: '0.79rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem',
                  fontSize: '0.86rem',
                }}
              >
                Field Hunter Shortcuts
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
                  Press <code className="font-mono">/</code> anywhere to jump straight
                  to search.
                </li>
                <li>
                  Click any card’s <strong>How to Find</strong> button to expand its
                  step-by-step walkthrough.
                </li>
                <li>
                  Keep <strong>Spoiler Shield ON</strong> to follow steps without
                  seeing the final surprise until you arrive.
                </li>
              </ul>
            </div>
          </div>

          <section aria-label="Verified Easter Eggs Dossier List">
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
              filteredCount={filteredEntries.length}
              totalCount={totalCount}
              allFilteredExpanded={allFilteredExpanded}
              onExpandAll={handleExpandAll}
              onCollapseAll={handleCollapseAll}
              counts={{
                found: foundCount,
                unfound: totalCount - foundCount,
                bookmarked: bookmarkedCount,
              }}
            />

            {filteredEntries.length === 0 ? (
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '2.6rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <h3 className="font-display" style={{ margin: '0 0 0.4rem' }}>
                  No matching Easter eggs in this sector
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    margin: '0 0 1.1rem',
                  }}
                >
                  Try clearing one of your active region, category, or status filters.
                </p>
                <button
                  type="button"
                  className="utility-btn active-shield"
                  onClick={resetAllFilters}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="cards-stack">
                {filteredEntries.map((entry) => (
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
                        showToast(`Marked "${entry.title}" as Found!`);
                      }
                    }}
                    onToggleBookmark={toggleBookmark}
                    onToggleStep={toggleStepCompleted}
                    onCompleteAllSteps={(id, count) => {
                      markAllStepsAndFound(id, count);
                      showToast(`Completed all steps for "${entry.title}"!`);
                    }}
                    onLocateOnRadar={handleLocateOnRadar}
                    onCopyShareLink={handleCopyShareLink}
                    onCopyText={handleCopyText}
                  />
                ))}
              </div>
            )}
          </section>
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
            — Community-verified Grand Theft Auto VI field guide across the State of
            Leonida. Expanding soon with Collectibles, World Events, Safe Codes, and
            Myth Investigations.
          </div>
          <div className="font-mono" style={{ fontSize: '0.74rem' }}>
            State of Leonida • Interactive Field Dossier
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
        onJumpToSlug={(slug) => {
          const target = EASTER_EGGS.find((e) => e.slug === slug);
          if (!target) return;
          resetAllFilters();
          setExpandedIds((prev) =>
            prev.includes(target.id) ? prev : [...prev, target.id]
          );
          setActiveRadarEntryId(target.id);
          window.setTimeout(() => {
            document
              .getElementById(`egg-${target.slug}`)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
        }}
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

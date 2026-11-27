import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Bookmark,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronsDownUp,
  ChevronsUpDown,
  Clock,
  Copy,
  Crosshair,
  ExternalLink,
  FilterX,
  Footprints,
  Gift,
  KeyRound,
  Lock,
  MapPin,
  Phone,
  Search,
  Shuffle,
  Sparkles,
  Terminal,
  User,
  X,
} from 'lucide-react';
import { CODES_SAFES } from '../../data/codesSafes';
import { LEONIDA_REGIONS } from '../registry';
import type {
  CodeInputType,
  CodeVaultEntry,
  SharedModuleViewProps,
} from '../../types/atlas';
import { TenebraeLuxCalculator } from './TenebraeLuxCalculator';

type CodeStatusFilter = 'all' | 'uncracked' | 'cracked' | 'bookmarked';
type CodeSortOption = 'featured' | 'type' | 'region';

const CODE_TYPE_META: Record<
  CodeInputType,
  { label: string; shortLabel: string; colorVar: string }
> = {
  'safe-6': {
    label: '6-Digit Safe',
    shortLabel: '6-Digit Safe',
    colorVar: 'var(--accent-amber)',
  },
  'safe-5': {
    label: '5-Digit Safe',
    shortLabel: '5-Digit Safe',
    colorVar: 'var(--accent-amber)',
  },
  'safe-4': {
    label: '4-Digit Safe',
    shortLabel: '4-Digit Safe',
    colorVar: 'var(--accent-amber)',
  },
  keypad: {
    label: 'Door / Garage Keypad',
    shortLabel: 'Keypad',
    colorVar: 'var(--accent-teal)',
  },
  terminal: {
    label: 'PC / Laptop Login',
    shortLabel: 'Terminal',
    colorVar: 'var(--accent-sky)',
  },
  phone: {
    label: 'Phone Secret',
    shortLabel: 'Phone',
    colorVar: 'var(--accent-coral)',
  },
  sequence: {
    label: 'Switch Sequence',
    shortLabel: 'Sequence',
    colorVar: 'var(--accent-flamingo)',
  },
  'dynamic-cipher': {
    label: 'Session Cipher',
    shortLabel: 'Dynamic Cipher',
    colorVar: 'var(--accent-lime)',
  },
};

const CODE_TYPE_ORDER: CodeInputType[] = [
  'safe-6',
  'safe-5',
  'safe-4',
  'keypad',
  'terminal',
  'phone',
  'sequence',
  'dynamic-cipher',
];

function renderCodeTypeIcon(codeType: CodeInputType) {
  switch (codeType) {
    case 'terminal':
      return <Terminal size={12} />;
    case 'phone':
      return <Phone size={12} />;
    case 'dynamic-cipher':
      return <Shuffle size={12} />;
    case 'keypad':
      return <KeyRound size={12} />;
    default:
      return <Lock size={12} />;
  }
}

export function CodesSafesView(props: SharedModuleViewProps) {
  const {
    selectedRegion,
    onSelectRegion,
    activeRadarEntryId,
    onActivateRadarEntry,
    foundIds,
    bookmarkedIds,
    completedSteps,
    onToggleFound,
    onToggleBookmark,
    onToggleStep,
    onCompleteAllSteps,
    onCopyText,
    onJumpToEasterEgg,
  } = props;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCodeType, setSelectedCodeType] = useState<CodeInputType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<CodeStatusFilter>('all');
  const [sortBy, setSortBy] = useState<CodeSortOption>('featured');
  const [showCalculators, setShowCalculators] = useState(false);
  const [expandedIds, setExpandedIds] = useState<string[]>(() =>
    CODES_SAFES[0] ? [CODES_SAFES[0].id] : []
  );

  const searchInputRef = useRef<HTMLInputElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  // Keyboard "/" shortcut to jump to search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA' &&
        document.activeElement?.tagName !== 'SELECT'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-expand entry when activated from the Leonida Radar Map
  const [lastSyncedRadarId, setLastSyncedRadarId] = useState<string | null>(null);
  if (
    activeRadarEntryId &&
    activeRadarEntryId !== lastSyncedRadarId &&
    CODES_SAFES.some((entry) => entry.id === activeRadarEntryId)
  ) {
    setLastSyncedRadarId(activeRadarEntryId);
    if (!expandedIds.includes(activeRadarEntryId)) {
      setExpandedIds((prev) => [...prev, activeRadarEntryId]);
    }
  }

  const totalCount = CODES_SAFES.length;
  const crackedCount = useMemo(
    () => CODES_SAFES.filter((e) => foundIds.includes(e.id)).length,
    [foundIds]
  );
  const bookmarkedCount = useMemo(
    () => CODES_SAFES.filter((e) => bookmarkedIds.includes(e.id)).length,
    [bookmarkedIds]
  );

  const countsByCodeType = useMemo(() => {
    const counts = {} as Record<CodeInputType, number>;
    for (const t of CODE_TYPE_ORDER) {
      counts[t] = 0;
    }
    for (const entry of CODES_SAFES) {
      counts[entry.codeType] = (counts[entry.codeType] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const list = CODES_SAFES.filter((entry) => {
      if (selectedRegion !== 'all' && entry.regionId !== selectedRegion) {
        return false;
      }
      if (selectedCodeType !== 'all' && entry.codeType !== selectedCodeType) {
        return false;
      }
      if (statusFilter === 'cracked' && !foundIds.includes(entry.id)) {
        return false;
      }
      if (statusFilter === 'uncracked' && foundIds.includes(entry.id)) {
        return false;
      }
      if (statusFilter === 'bookmarked' && !bookmarkedIds.includes(entry.id)) {
        return false;
      }

      if (q) {
        const haystack = [
          entry.indexCode,
          entry.title,
          entry.subtitle,
          entry.subLocation,
          LEONIDA_REGIONS[entry.regionId].name,
          CODE_TYPE_META[entry.codeType].label,
          entry.codeDisplay,
          entry.summary,
          entry.rewardSummary,
          ...entry.tags,
          ...entry.steps.map(
            (s) => `${s.title} ${s.instruction} ${s.landmarkCue ?? ''}`
          ),
        ]
          .join(' ')
          .toLowerCase();

        if (!haystack.includes(q)) return false;
      }

      return true;
    });

    const sorted = [...list];
    if (sortBy === 'type') {
      sorted.sort(
        (a, b) =>
          CODE_TYPE_ORDER.indexOf(a.codeType) - CODE_TYPE_ORDER.indexOf(b.codeType) ||
          a.indexCode.localeCompare(b.indexCode)
      );
    } else if (sortBy === 'region') {
      sorted.sort(
        (a, b) =>
          LEONIDA_REGIONS[a.regionId].shortName.localeCompare(
            LEONIDA_REGIONS[b.regionId].shortName
          ) || a.indexCode.localeCompare(b.indexCode)
      );
    }

    return sorted;
  }, [
    searchQuery,
    selectedRegion,
    selectedCodeType,
    statusFilter,
    sortBy,
    foundIds,
    bookmarkedIds,
  ]);

  const hasActiveFilters =
    selectedRegion !== 'all' ||
    selectedCodeType !== 'all' ||
    statusFilter !== 'all' ||
    searchQuery.trim() !== '';

  const resetAllFilters = useCallback(() => {
    onSelectRegion('all');
    setSelectedCodeType('all');
    setStatusFilter('all');
    setSearchQuery('');
  }, [onSelectRegion]);

  const handleToggleExpand = useCallback(
    (entryId: string) => {
      setExpandedIds((prev) =>
        prev.includes(entryId)
          ? prev.filter((id) => id !== entryId)
          : [...prev, entryId]
      );
      onActivateRadarEntry(entryId);
    },
    [onActivateRadarEntry]
  );

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

  const openCalculatorDrawer = useCallback(() => {
    setShowCalculators(true);
    window.setTimeout(() => {
      calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  const handleCopyCardCode = useCallback(
    (entry: CodeVaultEntry) => {
      const copyVal = entry.requirements.specialCode?.value ?? entry.codeDisplay;
      onCopyText(entry.title, copyVal);
    },
    [onCopyText]
  );

  return (
    <section aria-label="Keypads, Safes and Phone Codes Directory">
      {/* Interactive Puzzle Calculators Drawer Toggle */}
      <div
        ref={calculatorRef}
        style={{
          marginBottom: '1.1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}
      >
        <div
          style={{
            background: 'var(--bg-card)',
            border: `1px solid ${showCalculators ? 'var(--border-active)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--r-lg)',
            padding: '0.95rem 1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--r-sm)',
                background: 'var(--accent-flamingo-soft)',
                border: '1px solid var(--border-active)',
                color: 'var(--accent-flamingo)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <Calculator size={18} />
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-primary)',
                }}
              >
                Session Cipher Calculators
              </div>
              <div style={{ fontSize: '0.79rem', color: 'var(--text-secondary)' }}>
                Compute randomized <strong>Tenebrae Lux</strong> 6-digit phone codes and{' '}
                <strong>South Point Alien Dream</strong> 4-bar keypads.
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`utility-btn ${showCalculators ? 'active-shield' : ''}`}
            onClick={() => setShowCalculators((prev) => !prev)}
            aria-expanded={showCalculators}
          >
            <Calculator size={15} />
            <span>
              {showCalculators ? 'Hide calculators' : 'Open calculators'}
            </span>
            <ChevronDown
              size={15}
              style={{
                transform: showCalculators ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform var(--dur-quiet) var(--ease-quiet)',
              }}
            />
          </button>
        </div>

        {showCalculators && <TenebraeLuxCalculator onCopyText={onCopyText} />}
      </div>

      {/* Filter & Search Toolbar */}
      <section className="filter-panel" aria-label="Search and filter codes and safes">
        <div className="search-row">
          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search codes (955214, CLEAVES), safes, keypads, rewards, or sectors…"
              className="search-input"
              aria-label="Search codes and safes"
            />
            {searchQuery ? (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            ) : (
              <span className="search-kbd">/</span>
            )}
          </div>

          <select
            className="select-control"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as CodeSortOption)}
            aria-label="Sort codes and safes"
          >
            <option value="featured">Sort: Vault index</option>
            <option value="type">Sort: Lock type</option>
            <option value="region">Sort: Sector</option>
          </select>
        </div>

        {/* CodeInputType Filter Pills */}
        <div className="pill-group" role="group" aria-label="Filter by code type">
          <button
            type="button"
            className={`filter-pill ${selectedCodeType === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCodeType('all')}
          >
            All lock types
          </button>
          {CODE_TYPE_ORDER.map((typeKey) => {
            const count = countsByCodeType[typeKey] ?? 0;
            if (count === 0) return null;
            return (
              <button
                key={typeKey}
                type="button"
                className={`filter-pill ${selectedCodeType === typeKey ? 'active' : ''}`}
                onClick={() =>
                  setSelectedCodeType(selectedCodeType === typeKey ? 'all' : typeKey)
                }
              >
                {renderCodeTypeIcon(typeKey)}
                <span>{CODE_TYPE_META[typeKey].shortLabel}</span>
                <span className="font-mono" style={{ opacity: 0.78, fontSize: '0.7rem' }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Tabs + Clear Filters */}
        <div className="filter-pills-row">
          <div className="pill-group" role="tablist" aria-label="Cracked status filter">
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'all'}
              className={`filter-pill ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              All ({totalCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'uncracked'}
              className={`filter-pill ${statusFilter === 'uncracked' ? 'active' : ''}`}
              onClick={() => setStatusFilter('uncracked')}
            >
              Uncracked ({totalCount - crackedCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'cracked'}
              className={`filter-pill ${statusFilter === 'cracked' ? 'active' : ''}`}
              onClick={() => setStatusFilter('cracked')}
            >
              Cracked ({crackedCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'bookmarked'}
              className={`filter-pill ${statusFilter === 'bookmarked' ? 'active' : ''}`}
              onClick={() => setStatusFilter('bookmarked')}
            >
              Pinned ({bookmarkedCount})
            </button>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="status-btn"
              onClick={resetAllFilters}
              style={{ color: 'var(--accent-flamingo)' }}
            >
              <FilterX size={14} />
              Reset filters
            </button>
          )}
        </div>
      </section>

      {/* Results Count + Bulk Expand/Collapse */}
      <div className="results-toolbar">
        <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
          Showing{' '}
          <strong style={{ color: 'var(--text-primary)' }}>{filteredEntries.length}</strong> of{' '}
          <strong>{totalCount}</strong> verified safes, keypads, and terminal codes
        </div>

        <button
          type="button"
          className="utility-btn"
          onClick={allFilteredExpanded ? handleCollapseAll : handleExpandAll}
          disabled={filteredEntries.length === 0}
        >
          {allFilteredExpanded ? (
            <>
              <ChevronsDownUp size={15} />
              Collapse all
            </>
          ) : (
            <>
              <ChevronsUpDown size={15} />
              Expand all
            </>
          )}
        </button>
      </div>

      {/* Empty State or Cards Stack */}
      {filteredEntries.length === 0 ? (
        <div className="empty-state-card">
          <h3 className="font-display" style={{ margin: '0 0 0.4rem' }}>
            No matching safes or codes in this sector
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              margin: '0 0 1.1rem',
            }}
          >
            Clear one or more active sector, lock-type, or status filters.
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
          {filteredEntries.map((entry) => {
            const isExpanded = expandedIds.includes(entry.id);
            const isCracked = foundIds.includes(entry.id);
            const isBookmarked = bookmarkedIds.includes(entry.id);
            const entryStepsDone = completedSteps[entry.id] ?? [];
            const typeMeta = CODE_TYPE_META[entry.codeType];
            const regionMeta = LEONIDA_REGIONS[entry.regionId];
            const panelId = `vault-panel-${entry.slug}`;

            return (
              <article
                key={entry.id}
                id={`entry-${entry.id}`}
                className={`egg-card ${isExpanded ? 'is-expanded' : ''} ${isCracked ? 'is-found' : ''}`}
              >
                <div className="egg-card-header">
                  {/* Top Badges & Cracked/Route Quick Actions */}
                  <div className="egg-meta-top">
                    <div className="egg-badges">
                      <span className="egg-index">{entry.indexCode}</span>

                      <span
                        className="badge-tag"
                        style={{
                          color: typeMeta.colorVar,
                          borderColor: 'var(--border-strong)',
                        }}
                      >
                        {renderCodeTypeIcon(entry.codeType)}
                        {typeMeta.label}
                      </span>

                      <span className="badge-tag" style={{ color: 'var(--text-secondary)' }}>
                        <MapPin size={12} style={{ color: 'var(--accent-flamingo)' }} />
                        {regionMeta.shortName}
                      </span>

                      {entry.isSessionRandomized && (
                        <span
                          className="badge-tag"
                          style={{
                            color: 'var(--accent-lime)',
                            background: 'var(--accent-lime-soft)',
                            borderColor: 'rgba(76, 232, 132, 0.4)',
                          }}
                        >
                          <Shuffle size={12} />
                          Session-Randomized
                        </span>
                      )}
                    </div>

                    <div className="egg-quick-actions">
                      <button
                        type="button"
                        className={`status-btn ${isBookmarked ? 'bookmark-active' : ''}`}
                        onClick={() => onToggleBookmark(entry.id)}
                        aria-pressed={isBookmarked}
                        title={isBookmarked ? 'Remove from Route' : 'Pin to Hunt Route'}
                      >
                        <Bookmark
                          size={13}
                          fill={isBookmarked ? 'currentColor' : 'none'}
                        />
                        <span>{isBookmarked ? 'Pinned' : 'Route'}</span>
                      </button>

                      <button
                        type="button"
                        className={`status-btn ${isCracked ? 'found-active' : ''}`}
                        onClick={() => onToggleFound(entry.id)}
                        aria-pressed={isCracked}
                      >
                        <CheckCircle2 size={14} />
                        <span>{isCracked ? 'Cracked' : 'Mark Cracked'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Title, Summary & Expand Trigger */}
                  <button
                    type="button"
                    className="egg-trigger-area"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => handleToggleExpand(entry.id)}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h2 className="egg-title">{entry.title}</h2>
                      <div className="egg-reference-line">
                        <span style={{ color: 'var(--accent-amber)' }}>
                          Reward: {entry.rewardSummary}
                        </span>
                      </div>
                      <p className="egg-summary">{entry.summary}</p>
                    </div>

                    <span className="expand-cta-pill">
                      <span>{isExpanded ? 'Hide guide' : 'Open guide'}</span>
                      <ChevronDown size={16} className="chevron-icon" />
                    </span>
                  </button>

                  {/* Always-Visible Code Vault Strip + One-Click Copy */}
                  <div className="code-callout" style={{ flexWrap: 'wrap' }}>
                    <div style={{ minWidth: 0 }}>
                      <div
                        className="font-mono"
                        style={{
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--accent-amber)',
                          fontWeight: 700,
                        }}
                      >
                        {entry.isSessionRandomized
                          ? 'Dynamic Formula / Common Rolls'
                          : 'Verified In-Game Code'}
                      </div>
                      <div
                        className="font-mono"
                        style={{
                          fontSize: '1.08rem',
                          fontWeight: 700,
                          letterSpacing: '0.07em',
                          color: 'var(--text-primary)',
                          wordBreak: 'break-word',
                        }}
                      >
                        {entry.codeDisplay}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {entry.isSessionRandomized && (
                        <button
                          type="button"
                          className="utility-btn active-shield"
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.76rem' }}
                          onClick={openCalculatorDrawer}
                        >
                          <Calculator size={13} />
                          Open Solver
                        </button>
                      )}
                      <button
                        type="button"
                        className="status-btn"
                        onClick={() => handleCopyCardCode(entry)}
                      >
                        <Copy size={13} />
                        Copy Code
                      </button>
                    </div>
                  </div>

                  {/* Bottom Metadata Row + Radar Pin & Linked Easter Egg Jump */}
                  <div className="egg-footer-chips">
                    <div className="condition-chips">
                      <span className="condition-item">
                        <Clock size={13} />
                        {entry.requirements.timeOfDay}
                      </span>
                      <span className="condition-item">
                        <User size={13} />
                        {entry.requirements.protagonist}
                      </span>
                      <span className="condition-item font-mono" style={{ fontSize: '0.73rem' }}>
                        <Footprints size={13} />
                        {entryStepsDone.length > 0
                          ? `${entryStepsDone.length}/${entry.steps.length} steps checked`
                          : `${entry.steps.length} steps`}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {entry.relatedEasterEggSlug && (
                        <button
                          type="button"
                          className="status-btn"
                          style={{
                            padding: '0.24rem 0.58rem',
                            fontSize: '0.72rem',
                            color: 'var(--accent-flamingo)',
                            borderColor: 'var(--border-active)',
                          }}
                          onClick={() => onJumpToEasterEgg(entry.relatedEasterEggSlug!)}
                        >
                          <Sparkles size={12} />
                          Open Full Easter Egg Guide
                        </button>
                      )}

                      <button
                        type="button"
                        className="status-btn"
                        style={{ padding: '0.24rem 0.55rem', fontSize: '0.72rem' }}
                        onClick={() => onActivateRadarEntry(entry.id)}
                      >
                        <Crosshair size={12} style={{ color: 'var(--accent-teal)' }} />
                        Radar Pin
                      </button>
                    </div>
                  </div>
                </div>

                {/* Smooth Expandable Walkthrough Drawer */}
                <div
                  id={panelId}
                  role="region"
                  aria-label={`Clue and location guide for ${entry.title}`}
                  className="egg-expand-wrapper"
                >
                  <div className="egg-expand-inner">
                    <div className="egg-dossier-body">
                      {/* Field Intel Grid */}
                      <div className="intel-strip">
                        <div>
                          <div className="intel-cell-label">Exact Sector &amp; Landmark</div>
                          <div className="intel-cell-val">
                            {regionMeta.shortName} — {entry.subLocation}
                          </div>
                        </div>
                        <div>
                          <div className="intel-cell-label">Time &amp; Character Window</div>
                          <div className="intel-cell-val">
                            {entry.requirements.timeOfDay} • {entry.requirements.protagonist}
                          </div>
                        </div>
                        <div>
                          <div className="intel-cell-label">Reward / Unlock</div>
                          <div
                            className="intel-cell-val"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                          >
                            <Gift size={14} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                            <span>{entry.rewardSummary}</span>
                          </div>
                        </div>
                        {(entry.requirements.equipment || entry.requirements.storyProgress) && (
                          <div>
                            <div className="intel-cell-label">Gear &amp; Story Notes</div>
                            <div className="intel-cell-val">
                              {[
                                entry.requirements.equipment,
                                entry.requirements.storyProgress,
                              ]
                                .filter(Boolean)
                                .join(' • ')}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Step-by-Step Clue & Safe Location Checklist */}
                      <div>
                        <div className="steps-section-header">
                          <h3 className="section-kicker">
                            <Footprints size={17} style={{ color: 'var(--accent-flamingo)' }} />
                            Step-by-Step Clue &amp; Container Guide
                          </h3>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              Check off steps as you crack it
                            </span>
                            {!isCracked && (
                              <button
                                type="button"
                                className="status-btn"
                                onClick={() =>
                                  onCompleteAllSteps(entry.id, entry.steps.length)
                                }
                              >
                                <Check size={13} />
                                Complete All
                              </button>
                            )}
                          </div>
                        </div>

                        <ol className="steps-list">
                          {entry.steps.map((step) => {
                            const isStepDone = entryStepsDone.includes(step.stepNumber);
                            return (
                              <li
                                key={step.stepNumber}
                                className={`step-item ${isStepDone ? 'step-done' : ''}`}
                              >
                                <button
                                  type="button"
                                  className="step-check-btn"
                                  onClick={() => onToggleStep(entry.id, step.stepNumber)}
                                  aria-label={`Mark step ${step.stepNumber} as ${
                                    isStepDone ? 'incomplete' : 'complete'
                                  }`}
                                  aria-pressed={isStepDone}
                                >
                                  {isStepDone ? (
                                    <Check size={14} strokeWidth={3} />
                                  ) : (
                                    step.stepNumber
                                  )}
                                </button>

                                <div className="step-content">
                                  <div className="step-title-row">
                                    <span className="step-title">{step.title}</span>
                                    {step.landmarkCue && (
                                      <span className="landmark-pill">
                                        {step.landmarkCue}
                                      </span>
                                    )}
                                  </div>
                                  <p className="step-instruction">{step.instruction}</p>
                                  {step.fieldTip && (
                                    <div className="step-tip">
                                      <strong style={{ color: 'var(--accent-amber)' }}>
                                        Field Tip:{' '}
                                      </strong>
                                      {step.fieldTip}
                                    </div>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ol>
                      </div>

                      {/* Sources & Cross-Module Link Footer */}
                      <div className="dossier-footer">
                        <div className="sources-row">
                          <span>Verified via:</span>
                          {entry.sources.map((src, idx) =>
                            src.url ? (
                              <a
                                key={idx}
                                href={src.url}
                                target="_blank"
                                rel="noreferrer"
                                className="source-chip"
                              >
                                <span>{src.community}</span>
                                <ExternalLink size={11} />
                              </a>
                            ) : (
                              <span key={idx} className="source-chip">
                                {src.community}: {src.label}
                              </span>
                            )
                          )}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                          {entry.relatedEasterEggSlug && (
                            <button
                              type="button"
                              className="utility-btn"
                              style={{ padding: '0.32rem 0.65rem', fontSize: '0.75rem' }}
                              onClick={() => onJumpToEasterEgg(entry.relatedEasterEggSlug!)}
                            >
                              <Sparkles size={13} style={{ color: 'var(--accent-flamingo)' }} />
                              Open Full Easter Egg Guide
                            </button>
                          )}
                          <button
                            type="button"
                            className="status-btn"
                            onClick={() => handleCopyCardCode(entry)}
                          >
                            <Copy size={13} />
                            Copy Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

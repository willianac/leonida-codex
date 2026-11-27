import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CheckCircle2,
  ChevronsDownUp,
  ChevronsUpDown,
  FilterX,
  HelpCircle,
  MapPin,
  Search,
  ShieldCheck,
  X,
  XCircle,
} from 'lucide-react';
import { MYTH_INVESTIGATIONS } from '../../data/mythBoard';
import { LEONIDA_REGIONS } from '../registry';
import type { MythStatus, SharedModuleViewProps } from '../../types/atlas';
import { MythCaseCard } from './MythCaseCard';
import './mythBoard.css';

type MythStatusFilter = 'all' | MythStatus;
type ReviewStatusFilter = 'all' | 'unreviewed' | 'reviewed' | 'bookmarked';
type MythSortOption = 'curated' | 'status' | 'evidence' | 'region';

const STATUS_PRIORITY: Record<MythStatus, number> = {
  'confirmed-clue': 1,
  'active-hypothesis': 2,
  debunked: 3,
};

export function MythBoardView({
  selectedRegion,
  onSelectRegion,
  activeRadarEntryId,
  onActivateRadarEntry,
  foundIds,
  bookmarkedIds,
  completedSteps,
  spoilerShield,
  onToggleFound,
  onToggleBookmark,
  onToggleStep,
  onCompleteAllSteps,
  onCopyText,
  onJumpToEasterEgg,
}: SharedModuleViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mythStatusFilter, setMythStatusFilter] = useState<MythStatusFilter>('all');
  const [reviewFilter, setReviewFilter] = useState<ReviewStatusFilter>('all');
  const [sortBy, setSortBy] = useState<MythSortOption>('curated');
  const [expandedIds, setExpandedIds] = useState<string[]>(() =>
    MYTH_INVESTIGATIONS[0] ? [MYTH_INVESTIGATIONS[0].id] : []
  );
  const [dismissedRadarId, setDismissedRadarId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Support `/` shortcut to focus search just like the main Easter Eggs view
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

  const isEntryExpanded = useCallback(
    (entryId: string) =>
      expandedIds.includes(entryId) ||
      (activeRadarEntryId === entryId && dismissedRadarId !== entryId),
    [activeRadarEntryId, dismissedRadarId, expandedIds]
  );

  const counts = useMemo(() => {
    let confirmed = 0;
    let hypothesis = 0;
    let debunked = 0;
    let reviewed = 0;
    let bookmarked = 0;

    for (const entry of MYTH_INVESTIGATIONS) {
      if (entry.mythStatus === 'confirmed-clue') confirmed += 1;
      else if (entry.mythStatus === 'active-hypothesis') hypothesis += 1;
      else debunked += 1;

      if (foundIds.includes(entry.id)) reviewed += 1;
      if (bookmarkedIds.includes(entry.id)) bookmarked += 1;
    }

    return {
      total: MYTH_INVESTIGATIONS.length,
      confirmed,
      hypothesis,
      debunked,
      reviewed,
      unreviewed: MYTH_INVESTIGATIONS.length - reviewed,
      bookmarked,
    };
  }, [foundIds, bookmarkedIds]);

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const list = MYTH_INVESTIGATIONS.filter((entry) => {
      if (selectedRegion !== 'all' && entry.regionId !== selectedRegion) {
        return false;
      }
      if (mythStatusFilter !== 'all' && entry.mythStatus !== mythStatusFilter) {
        return false;
      }
      if (reviewFilter === 'reviewed' && !foundIds.includes(entry.id)) {
        return false;
      }
      if (reviewFilter === 'unreviewed' && foundIds.includes(entry.id)) {
        return false;
      }
      if (reviewFilter === 'bookmarked' && !bookmarkedIds.includes(entry.id)) {
        return false;
      }

      if (q) {
        const haystack = [
          entry.indexCode,
          entry.title,
          entry.subtitle,
          entry.subLocation,
          LEONIDA_REGIONS[entry.regionId].name,
          entry.summary,
          entry.communityConsensus,
          entry.whatWasDebunked ?? '',
          entry.requirements.specialCode?.value ?? '',
          ...entry.tags,
          ...entry.evidenceChain.map((ev) => `${ev.title} ${ev.locationCue} ${ev.detail}`),
          ...entry.steps.map((s) => `${s.title} ${s.instruction} ${s.landmarkCue ?? ''}`),
        ]
          .join(' ')
          .toLowerCase();

        if (!haystack.includes(q)) return false;
      }

      return true;
    });

    const sorted = [...list];
    if (sortBy === 'status') {
      sorted.sort((a, b) => STATUS_PRIORITY[a.mythStatus] - STATUS_PRIORITY[b.mythStatus]);
    } else if (sortBy === 'evidence') {
      sorted.sort((a, b) => b.evidenceChain.length - a.evidenceChain.length);
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
    mythStatusFilter,
    reviewFilter,
    sortBy,
    foundIds,
    bookmarkedIds,
  ]);

  const hasActiveFilters =
    selectedRegion !== 'all' ||
    mythStatusFilter !== 'all' ||
    reviewFilter !== 'all' ||
    searchQuery.trim() !== '';

  const resetAllFilters = useCallback(() => {
    setSearchQuery('');
    setMythStatusFilter('all');
    setReviewFilter('all');
    if (selectedRegion !== 'all') {
      onSelectRegion('all');
    }
  }, [onSelectRegion, selectedRegion]);

  const handleToggleExpand = useCallback(
    (entryId: string) => {
      const currentlyExpanded = isEntryExpanded(entryId);
      if (currentlyExpanded) {
        setExpandedIds((prev) => prev.filter((id) => id !== entryId));
        if (activeRadarEntryId === entryId) {
          setDismissedRadarId(entryId);
        }
      } else {
        setExpandedIds((prev) => (prev.includes(entryId) ? prev : [...prev, entryId]));
        if (dismissedRadarId === entryId) {
          setDismissedRadarId(null);
        }
        onActivateRadarEntry(entryId);
      }
    },
    [activeRadarEntryId, dismissedRadarId, isEntryExpanded, onActivateRadarEntry]
  );

  const allFilteredExpanded =
    filteredEntries.length > 0 &&
    filteredEntries.every((entry) => isEntryExpanded(entry.id));

  const handleExpandAll = useCallback(() => {
    setDismissedRadarId(null);
    setExpandedIds((prev) => {
      const merged = new Set([...prev, ...filteredEntries.map((e) => e.id)]);
      return Array.from(merged);
    });
  }, [filteredEntries]);

  const handleCollapseAll = useCallback(() => {
    const filteredSet = new Set(filteredEntries.map((e) => e.id));
    setExpandedIds((prev) => prev.filter((id) => !filteredSet.has(id)));
    if (activeRadarEntryId && filteredSet.has(activeRadarEntryId)) {
      setDismissedRadarId(activeRadarEntryId);
    }
  }, [activeRadarEntryId, filteredEntries]);

  return (
    <section aria-label="Active Myth Investigations & Community Case Files">
      {/* Compact Myth Status KPI Strip */}
      <div className="myth-board-summary-strip">
        <button
          type="button"
          className={`myth-summary-tile ${
            mythStatusFilter === 'confirmed-clue' ? 'is-selected' : ''
          }`}
          onClick={() =>
            setMythStatusFilter((prev) =>
              prev === 'confirmed-clue' ? 'all' : 'confirmed-clue'
            )
          }
        >
          <div className="myth-summary-tile-top">
            <span className="myth-summary-count" style={{ color: 'var(--accent-lime)' }}>
              {counts.confirmed}
            </span>
            <ShieldCheck size={16} style={{ color: 'var(--accent-lime)' }} />
          </div>
          <span className="myth-summary-label">Confirmed Clues</span>
        </button>

        <button
          type="button"
          className={`myth-summary-tile ${
            mythStatusFilter === 'active-hypothesis' ? 'is-selected' : ''
          }`}
          onClick={() =>
            setMythStatusFilter((prev) =>
              prev === 'active-hypothesis' ? 'all' : 'active-hypothesis'
            )
          }
        >
          <div className="myth-summary-tile-top">
            <span className="myth-summary-count" style={{ color: 'var(--accent-amber)' }}>
              {counts.hypothesis}
            </span>
            <HelpCircle size={16} style={{ color: 'var(--accent-amber)' }} />
          </div>
          <span className="myth-summary-label">Active Hypotheses</span>
        </button>

        <button
          type="button"
          className={`myth-summary-tile ${
            mythStatusFilter === 'debunked' ? 'is-selected' : ''
          }`}
          onClick={() =>
            setMythStatusFilter((prev) => (prev === 'debunked' ? 'all' : 'debunked'))
          }
        >
          <div className="myth-summary-tile-top">
            <span className="myth-summary-count" style={{ color: 'var(--accent-flamingo)' }}>
              {counts.debunked}
            </span>
            <XCircle size={16} style={{ color: 'var(--accent-flamingo)' }} />
          </div>
          <span className="myth-summary-label">Debunked Dead Ends</span>
        </button>

        <button
          type="button"
          className={`myth-summary-tile ${reviewFilter === 'reviewed' ? 'is-selected' : ''}`}
          onClick={() =>
            setReviewFilter((prev) => (prev === 'reviewed' ? 'all' : 'reviewed'))
          }
        >
          <div className="myth-summary-tile-top">
            <span className="myth-summary-count" style={{ color: 'var(--accent-teal)' }}>
              {counts.reviewed}/{counts.total}
            </span>
            <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)' }} />
          </div>
          <span className="myth-summary-label">Cases Reviewed</span>
        </button>
      </div>

      {/* Filter & Search Panel */}
      <section className="filter-panel" aria-label="Search and filter Myth Board case files">
        <div className="search-row">
          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case files, ciphers, codes (7304, 085355), or clues…"
              className="search-input"
              aria-label="Search Myth Board case files"
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
            onChange={(e) => setSortBy(e.target.value as MythSortOption)}
            aria-label="Sort Myth Board case files"
          >
            <option value="curated">Sort: Case index</option>
            <option value="status">Sort: Confirmed first</option>
            <option value="evidence">Sort: Evidence count</option>
            <option value="region">Sort: Sector</option>
          </select>
        </div>

        {/* Distinct Color-Coded Myth Status Pills */}
        <div className="pill-group" role="group" aria-label="Filter by investigation status">
          <button
            type="button"
            className={`myth-status-pill is-all ${mythStatusFilter === 'all' ? 'active' : ''}`}
            onClick={() => setMythStatusFilter('all')}
          >
            All cases ({counts.total})
          </button>

          <button
            type="button"
            className={`myth-status-pill is-confirmed ${
              mythStatusFilter === 'confirmed-clue' ? 'active' : ''
            }`}
            onClick={() =>
              setMythStatusFilter((prev) =>
                prev === 'confirmed-clue' ? 'all' : 'confirmed-clue'
              )
            }
          >
            <ShieldCheck size={13} />
            Confirmed clues ({counts.confirmed})
          </button>

          <button
            type="button"
            className={`myth-status-pill is-hypothesis ${
              mythStatusFilter === 'active-hypothesis' ? 'active' : ''
            }`}
            onClick={() =>
              setMythStatusFilter((prev) =>
                prev === 'active-hypothesis' ? 'all' : 'active-hypothesis'
              )
            }
          >
            <HelpCircle size={13} />
            Active hypotheses ({counts.hypothesis})
          </button>

          <button
            type="button"
            className={`myth-status-pill is-debunked ${
              mythStatusFilter === 'debunked' ? 'active' : ''
            }`}
            onClick={() =>
              setMythStatusFilter((prev) => (prev === 'debunked' ? 'all' : 'debunked'))
            }
          >
            <XCircle size={13} />
            Ruled-out hoaxes ({counts.debunked})
          </button>
        </div>

        {/* Review Status Tabs + Active Region Chip + Clear */}
        <div className="filter-pills-row">
          <div className="pill-group" role="tablist" aria-label="Investigation progress filter">
            <button
              type="button"
              role="tab"
              aria-selected={reviewFilter === 'all'}
              className={`filter-pill ${reviewFilter === 'all' ? 'active' : ''}`}
              onClick={() => setReviewFilter('all')}
            >
              All ({counts.total})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={reviewFilter === 'unreviewed'}
              className={`filter-pill ${reviewFilter === 'unreviewed' ? 'active' : ''}`}
              onClick={() => setReviewFilter('unreviewed')}
            >
              Unreviewed ({counts.unreviewed})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={reviewFilter === 'reviewed'}
              className={`filter-pill ${reviewFilter === 'reviewed' ? 'active' : ''}`}
              onClick={() => setReviewFilter('reviewed')}
            >
              Reviewed ({counts.reviewed})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={reviewFilter === 'bookmarked'}
              className={`filter-pill ${reviewFilter === 'bookmarked' ? 'active' : ''}`}
              onClick={() => setReviewFilter('bookmarked')}
            >
              Pinned ({counts.bookmarked})
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            {selectedRegion !== 'all' && (
              <button
                type="button"
                className="region-chip active"
                onClick={() => onSelectRegion('all')}
                title="Clear Leonida region filter"
              >
                <MapPin size={12} />
                <span>{LEONIDA_REGIONS[selectedRegion].shortName}</span>
                <X size={12} />
              </button>
            )}

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
        </div>
      </section>

      {/* Results Count + Bulk Expand/Collapse Toolbar */}
      <div className="results-toolbar">
        <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
          Showing{' '}
          <strong style={{ color: 'var(--text-primary)' }}>{filteredEntries.length}</strong> of{' '}
          <strong>{counts.total}</strong> myth case files and ruled-out hoaxes
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
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
      </div>

      {/* Case File Stack or Empty State */}
      {filteredEntries.length === 0 ? (
        <div className="empty-state-card">
          <h3 className="font-display" style={{ margin: '0 0 0.4rem' }}>
            No matching myth case files in this sector
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              margin: '0 0 1.1rem',
            }}
          >
            Clear one or more active sector, status, or search filters.
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
          {filteredEntries.map((entry) => (
            <MythCaseCard
              key={entry.id}
              entry={entry}
              isExpanded={isEntryExpanded(entry.id)}
              isReviewed={foundIds.includes(entry.id)}
              isBookmarked={bookmarkedIds.includes(entry.id)}
              isRadarActive={activeRadarEntryId === entry.id}
              completedSteps={completedSteps[entry.id] ?? []}
              spoilerShield={spoilerShield}
              onToggleExpand={handleToggleExpand}
              onToggleReviewed={onToggleFound}
              onToggleBookmark={onToggleBookmark}
              onToggleStep={onToggleStep}
              onCompleteAllSteps={onCompleteAllSteps}
              onActivateRadar={onActivateRadarEntry}
              onCopyText={onCopyText}
              onJumpToEasterEgg={onJumpToEasterEgg}
            />
          ))}
        </div>
      )}
    </section>
  );
}

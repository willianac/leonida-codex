import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Car,
  ChevronsDownUp,
  ChevronsUpDown,
  FilterX,
  MapPin,
  PackageCheck,
  Search,
  Shirt,
  Swords,
  User,
  Watch,
  X,
} from 'lucide-react';
import { UNIQUE_GEAR } from '../../data/uniqueGear';
import { LEONIDA_REGIONS } from '../registry';
import type {
  SharedModuleViewProps,
  UniqueGearCategory,
  UniqueGearEntry,
} from '../../types/atlas';
import { GEAR_CATEGORY_META } from './gearMeta';
import { UniqueGearCard } from './UniqueGearCard';

type GearCategoryFilter = UniqueGearCategory | 'all';
type WearableFilter = UniqueGearEntry['wearableBy'] | 'all';
type LockerStatusFilter = 'all' | 'uncollected' | 'unlocked';
type GearSortOption = 'curated' | 'category' | 'region' | 'missable';

const CATEGORY_ORDER: Record<UniqueGearCategory, number> = {
  weapon: 1,
  apparel: 2,
  vehicle: 3,
  accessory: 4,
};

const WEARABLE_FILTERS: Array<{ value: WearableFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'Jason', label: 'Jason' },
  { value: 'Lucia', label: 'Lucia' },
  { value: 'Both', label: 'Both' },
  { value: 'Garage / Armory', label: 'Garage / Armory' },
];

const GEAR_CATEGORIES: UniqueGearCategory[] = [
  'weapon',
  'apparel',
  'vehicle',
  'accessory',
];

export function UniqueGearView({
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
}: SharedModuleViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<GearCategoryFilter>('all');
  const [selectedWearable, setSelectedWearable] =
    useState<WearableFilter>('all');
  const [lockerStatus, setLockerStatus] = useState<LockerStatusFilter>('all');
  const [sortBy, setSortBy] = useState<GearSortOption>('curated');

  const [expandedIds, setExpandedIds] = useState<string[]>(() =>
    UNIQUE_GEAR[0] ? [UNIQUE_GEAR[0].id] : []
  );
  const [prevRadarId, setPrevRadarId] = useState<string | null>(
    activeRadarEntryId
  );

  // Sync expansion when user clicks a Unique Gear pin on the left LeonidaMap
  if (activeRadarEntryId !== prevRadarId) {
    setPrevRadarId(activeRadarEntryId);
    if (
      activeRadarEntryId &&
      UNIQUE_GEAR.some((item) => item.id === activeRadarEntryId)
    ) {
      setExpandedIds((prev) =>
        prev.includes(activeRadarEntryId)
          ? prev
          : [...prev, activeRadarEntryId]
      );
    }
  }

  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const totalCount = UNIQUE_GEAR.length;
  const unlockedCount = useMemo(
    () => UNIQUE_GEAR.filter((item) => foundIds.includes(item.id)).length,
    [foundIds]
  );
  const uncollectedCount = totalCount - unlockedCount;
  const lockerCompletionPct =
    totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  const categoryCounts = useMemo(() => {
    const counts: Record<UniqueGearCategory, { total: number; unlocked: number }> = {
      weapon: { total: 0, unlocked: 0 },
      apparel: { total: 0, unlocked: 0 },
      vehicle: { total: 0, unlocked: 0 },
      accessory: { total: 0, unlocked: 0 },
    };
    for (const item of UNIQUE_GEAR) {
      counts[item.gearCategory].total += 1;
      if (foundIds.includes(item.id)) {
        counts[item.gearCategory].unlocked += 1;
      }
    }
    return counts;
  }, [foundIds]);

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const list = UNIQUE_GEAR.filter((entry) => {
      if (selectedRegion !== 'all' && entry.regionId !== selectedRegion) {
        return false;
      }
      if (selectedCategory !== 'all' && entry.gearCategory !== selectedCategory) {
        return false;
      }
      if (selectedWearable !== 'all' && entry.wearableBy !== selectedWearable) {
        return false;
      }
      const isUnlocked = foundIds.includes(entry.id);
      if (lockerStatus === 'unlocked' && !isUnlocked) {
        return false;
      }
      if (lockerStatus === 'uncollected' && isUnlocked) {
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
          entry.perkOrStats,
          entry.missableWarning ?? '',
          entry.wearableBy,
          GEAR_CATEGORY_META[entry.gearCategory].label,
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
    if (sortBy === 'category') {
      sorted.sort(
        (a, b) =>
          CATEGORY_ORDER[a.gearCategory] - CATEGORY_ORDER[b.gearCategory] ||
          a.indexCode.localeCompare(b.indexCode)
      );
    } else if (sortBy === 'region') {
      sorted.sort(
        (a, b) =>
          LEONIDA_REGIONS[a.regionId].shortName.localeCompare(
            LEONIDA_REGIONS[b.regionId].shortName
          ) || a.indexCode.localeCompare(b.indexCode)
      );
    } else if (sortBy === 'missable') {
      sorted.sort(
        (a, b) =>
          Number(Boolean(b.missableWarning)) -
            Number(Boolean(a.missableWarning)) ||
          a.indexCode.localeCompare(b.indexCode)
      );
    }

    return sorted;
  }, [
    searchQuery,
    selectedRegion,
    selectedCategory,
    selectedWearable,
    lockerStatus,
    sortBy,
    foundIds,
  ]);

  const hasActiveFilters =
    selectedRegion !== 'all' ||
    selectedCategory !== 'all' ||
    selectedWearable !== 'all' ||
    lockerStatus !== 'all' ||
    searchQuery.trim() !== '';

  const resetAllFilters = useCallback(() => {
    onSelectRegion('all');
    setSelectedCategory('all');
    setSelectedWearable('all');
    setLockerStatus('all');
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

  return (
    <section aria-label="Unique Gear, Weapons, Hats & Vehicles Locker">
      {/* Compact Locker Completion Summary Strip */}
      <div
        className="filter-panel"
        style={{
          gap: '0.75rem',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <PackageCheck size={19} style={{ color: 'var(--accent-lime)' }} />
            <div>
              <div
                className="font-display"
                style={{ fontSize: '1rem', lineHeight: 1.2 }}
              >
                Armory, Wardrobe &amp; Garage Inventory
              </div>
              <div className="tabular" style={{ fontSize: '0.79rem', color: 'var(--text-secondary)' }}>
                {unlockedCount} of {totalCount} items collected ({lockerCompletionPct}%)
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              flexWrap: 'wrap',
            }}
          >
            <span className="badge-tag" style={{ color: 'var(--accent-flamingo)' }}>
              <Swords size={12} />
              {categoryCounts.weapon.unlocked}/{categoryCounts.weapon.total} Weapons
            </span>
            <span className="badge-tag" style={{ color: 'var(--accent-teal)' }}>
              <Shirt size={12} />
              {categoryCounts.apparel.unlocked}/{categoryCounts.apparel.total} Apparel
            </span>
            <span className="badge-tag" style={{ color: 'var(--accent-amber)' }}>
              <Car size={12} />
              {categoryCounts.vehicle.unlocked}/{categoryCounts.vehicle.total} Vehicles
            </span>
            <span className="badge-tag" style={{ color: 'var(--accent-lime)' }}>
              <Watch size={12} />
              {categoryCounts.accessory.unlocked}/{categoryCounts.accessory.total} Accessories
            </span>
          </div>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${lockerCompletionPct}%` }}
          />
        </div>
      </div>

      {/* Search & Multi-Axis Locker Filters */}
      <section className="filter-panel" aria-label="Search and filter unique gear">
        <div className="search-row">
          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search weapons, apparel, vehicles, watches, codes, or landmarks…"
              className="search-input"
              aria-label="Search unique gear"
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
            onChange={(e) => setSortBy(e.target.value as GearSortOption)}
            aria-label="Sort unique gear"
          >
            <option value="curated">Sort: Inventory index</option>
            <option value="category">Sort: Category</option>
            <option value="region">Sort: Sector</option>
            <option value="missable">Sort: Caution items first</option>
          </select>
        </div>

        {/* Gear Category Pills */}
        <div className="pill-group" role="group" aria-label="Filter by gear category">
          <button
            type="button"
            className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All gear ({totalCount})
          </button>
          {GEAR_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? 'all' : cat)
              }
            >
              {GEAR_CATEGORY_META[cat].shortLabel} ({categoryCounts[cat].total})
            </button>
          ))}
        </div>

        {/* Protagonist / Storage Compatibility Pills */}
        <div
          className="pill-group"
          role="group"
          aria-label="Filter by protagonist or storage locker"
        >
          <span
            className="font-mono"
            style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.28rem',
              marginRight: '0.2rem',
            }}
          >
            <User size={12} />
            Slot:
          </span>
          {WEARABLE_FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`filter-pill ${selectedWearable === item.value ? 'active' : ''}`}
              onClick={() =>
                setSelectedWearable(
                  selectedWearable === item.value && item.value !== 'all'
                    ? 'all'
                    : item.value
                )
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Locker Status Tabs + Active Region Indicator + Reset */}
        <div className="filter-pills-row">
          <div className="pill-group" role="tablist" aria-label="Locker status filter">
            <button
              type="button"
              role="tab"
              aria-selected={lockerStatus === 'all'}
              className={`filter-pill ${lockerStatus === 'all' ? 'active' : ''}`}
              onClick={() => setLockerStatus('all')}
            >
              All ({totalCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={lockerStatus === 'uncollected'}
              className={`filter-pill ${lockerStatus === 'uncollected' ? 'active' : ''}`}
              onClick={() => setLockerStatus('uncollected')}
            >
              Uncollected ({uncollectedCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={lockerStatus === 'unlocked'}
              className={`filter-pill ${lockerStatus === 'unlocked' ? 'active' : ''}`}
              onClick={() => setLockerStatus('unlocked')}
            >
              Collected ({unlockedCount})
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            {selectedRegion !== 'all' && (
              <button
                type="button"
                className="status-btn"
                onClick={() => onSelectRegion('all')}
                title="Clear region filter"
                style={{
                  color: 'var(--accent-teal)',
                  borderColor: 'var(--border-teal)',
                }}
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

      {/* Results Count + Bulk Expand/Collapse */}
      <div className="results-toolbar">
        <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
          Showing{' '}
          <strong style={{ color: 'var(--text-primary)' }}>
            {filteredEntries.length}
          </strong>{' '}
          of <strong>{totalCount}</strong> cataloged gear items across Leonida
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

      {/* Empty State or Locker Cards Stack */}
      {filteredEntries.length === 0 ? (
        <div className="empty-state-card">
          <AlertTriangle
            size={26}
            style={{ color: 'var(--accent-amber)', marginBottom: '0.6rem' }}
          />
          <h3 className="font-display" style={{ margin: '0 0 0.4rem' }}>
            No matching gear items in this sector
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              margin: '0 0 1.1rem',
            }}
          >
            Clear one or more active sector, category, protagonist, or status filters.
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
            <UniqueGearCard
              key={entry.id}
              entry={entry}
              isExpanded={expandedIds.includes(entry.id)}
              isUnlocked={foundIds.includes(entry.id)}
              isBookmarked={bookmarkedIds.includes(entry.id)}
              completedSteps={completedSteps[entry.id] ?? []}
              onToggleExpand={handleToggleExpand}
              onToggleFound={onToggleFound}
              onToggleBookmark={onToggleBookmark}
              onToggleStep={onToggleStep}
              onCompleteAllSteps={onCompleteAllSteps}
              onActivateRadarEntry={onActivateRadarEntry}
              onCopyText={onCopyText}
              onJumpToEasterEgg={onJumpToEasterEgg}
            />
          ))}
        </div>
      )}
    </section>
  );
}

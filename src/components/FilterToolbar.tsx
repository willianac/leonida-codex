import { useEffect, useRef } from 'react';
import {
  ChevronsDownUp,
  ChevronsUpDown,
  FilterX,
  Search,
  X,
} from 'lucide-react';
import { CATEGORY_META } from '../modules/registry';
import type { EasterEggCategory, TriggerComplexity } from '../types/atlas';

export type StatusFilter = 'all' | 'unfound' | 'found' | 'bookmarked';
export type SortOption = 'featured' | 'easiest' | 'complex' | 'region';

interface FilterToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: EasterEggCategory | 'all';
  onCategoryChange: (cat: EasterEggCategory | 'all') => void;
  selectedComplexity: TriggerComplexity | 'all';
  onComplexityChange: (comp: TriggerComplexity | 'all') => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (status: StatusFilter) => void;
  sortBy: SortOption;
  onSortByChange: (sort: SortOption) => void;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
  filteredCount: number;
  totalCount: number;
  allFilteredExpanded: boolean;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  counts: {
    found: number;
    unfound: number;
    bookmarked: number;
  };
}

const CATEGORIES = Object.keys(CATEGORY_META) as EasterEggCategory[];

export function FilterToolbar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedComplexity,
  onComplexityChange,
  statusFilter,
  onStatusFilterChange,
  sortBy,
  onSortByChange,
  hasActiveFilters,
  onResetFilters,
  filteredCount,
  totalCount,
  allFilteredExpanded,
  onExpandAll,
  onCollapseAll,
  counts,
}: FilterToolbarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA' &&
        document.activeElement?.tagName !== 'SELECT'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section className="filter-panel" aria-label="Search and filter Easter eggs">
        <div className="search-row">
          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input
              ref={inputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search secrets, landmarks, codes, movies, or steps..."
              className="search-input"
              aria-label="Search Easter eggs"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '0.6rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <X size={16} />
              </button>
            ) : (
              <span className="search-kbd">/</span>
            )}
          </div>

          <select
            className="select-control"
            value={selectedComplexity}
            onChange={(e) =>
              onComplexityChange(e.target.value as TriggerComplexity | 'all')
            }
            aria-label="Filter by trigger complexity"
          >
            <option value="all">All Trigger Types</option>
            <option value="walk-up">Direct Walk-Up Sighting</option>
            <option value="conditional">Time / Weather Conditional</option>
            <option value="multi-step">Multi-Step Puzzle / Code</option>
          </select>

          <select
            className="select-control"
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as SortOption)}
            aria-label="Sort Easter eggs"
          >
            <option value="featured">Sort: Curated Field Order</option>
            <option value="easiest">Sort: Easiest to Find First</option>
            <option value="complex">Sort: Multi-Step Puzzles First</option>
            <option value="region">Sort: By Leonida Region</option>
          </select>
        </div>

        {/* Category Filter Pills */}
        <div className="pill-group" role="group" aria-label="Filter by Easter egg category">
          <button
            type="button"
            className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() =>
                onCategoryChange(selectedCategory === cat ? 'all' : cat)
              }
            >
              {CATEGORY_META[cat].shortLabel}
            </button>
          ))}
        </div>

        {/* Status Tabs + Clear Filters */}
        <div className="filter-pills-row">
          <div className="pill-group" role="tablist" aria-label="Hunt status filter">
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'all'}
              className={`filter-pill ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => onStatusFilterChange('all')}
            >
              All ({totalCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'unfound'}
              className={`filter-pill ${statusFilter === 'unfound' ? 'active' : ''}`}
              onClick={() => onStatusFilterChange('unfound')}
            >
              Unfound ({counts.unfound})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'found'}
              className={`filter-pill ${statusFilter === 'found' ? 'active' : ''}`}
              onClick={() => onStatusFilterChange('found')}
            >
              Found ({counts.found})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statusFilter === 'bookmarked'}
              className={`filter-pill ${statusFilter === 'bookmarked' ? 'active' : ''}`}
              onClick={() => onStatusFilterChange('bookmarked')}
            >
              Hunt Route ({counts.bookmarked})
            </button>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="status-btn"
              onClick={onResetFilters}
              style={{ color: 'var(--accent-flamingo)' }}
            >
              <FilterX size={14} />
              Reset All Filters
            </button>
          )}
        </div>
      </section>

      {/* Results Count + Bulk Expand/Collapse Controls */}
      <div className="results-toolbar">
        <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
          Showing{' '}
          <strong style={{ color: 'var(--text-primary)' }}>{filteredCount}</strong> of{' '}
          <strong>{totalCount}</strong> verified GTA VI Easter eggs with in-game guides
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <button
            type="button"
            className="utility-btn"
            onClick={allFilteredExpanded ? onCollapseAll : onExpandAll}
            disabled={filteredCount === 0}
          >
            {allFilteredExpanded ? (
              <>
                <ChevronsDownUp size={15} />
                Collapse All Guides
              </>
            ) : (
              <>
                <ChevronsUpDown size={15} />
                Expand All How-To Guides
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

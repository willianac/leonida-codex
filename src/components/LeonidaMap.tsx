import { useState } from 'react';
import { Compass, MapPin, RotateCcw } from 'lucide-react';
import { LEONIDA_REGIONS, REGION_LIST } from '../modules/registry';
import type { EasterEggEntry, LeonidaRegionId } from '../types/atlas';

interface LeonidaMapProps {
  entries: EasterEggEntry[];
  allEntriesCountByRegion: Record<LeonidaRegionId, number>;
  selectedRegion: LeonidaRegionId | 'all';
  activeEntryId: string | null;
  foundIds: string[];
  onSelectRegion: (region: LeonidaRegionId | 'all') => void;
  onSelectEntryPin: (entryId: string) => void;
}

const REGION_PATHS: Record<Exclude<LeonidaRegionId, 'offshore-waters'>, string> = {
  'mount-kalaga':
    'M 20,10 L 52,7 L 70,12 L 66,26 L 38,27 L 22,23 Z',
  'port-gellhorn':
    'M 12,25 L 38,28 L 42,52 L 35,63 L 17,59 L 10,43 Z',
  'leonard-county':
    'M 56,27 L 79,25 L 84,41 L 63,44 L 43,39 L 43,29 Z M 84,26 L 89,28 L 88,34 L 83,33 Z',
  'vice-city':
    'M 62,45 L 80,43 L 82,65 L 65,63 L 60,54 Z M 84,45 L 88,46 L 87,63 L 83,62 Z',
  grassrivers:
    'M 35,63 L 43,54 L 61,55 L 76,65 L 68,78 L 43,78 L 33,71 Z',
  'leonida-keys':
    'M 64,80 L 71,81 L 68,85 L 61,84 Z M 55,85 L 62,86 L 58,90 L 51,89 Z M 43,89 L 50,90 L 46,94 L 39,92 Z',
};

export function LeonidaMap({
  entries,
  allEntriesCountByRegion,
  selectedRegion,
  activeEntryId,
  foundIds,
  onSelectRegion,
  onSelectEntryPin,
}: LeonidaMapProps) {
  const [hoveredEntry, setHoveredEntry] = useState<EasterEggEntry | null>(null);

  const activeRegionMeta =
    selectedRegion !== 'all' ? LEONIDA_REGIONS[selectedRegion] : null;

  return (
    <aside className="radar-card" aria-label="State of Leonida Tactical Radar">
      <div className="radar-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Compass size={18} style={{ color: 'var(--accent-teal)' }} />
          <div>
            <div className="font-display" style={{ fontWeight: 700, fontSize: '0.93rem' }}>
              Leonida Tactical Radar
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Click a county to filter or a pin to open its guide
            </div>
          </div>
        </div>
        {selectedRegion !== 'all' && (
          <button
            type="button"
            className="status-btn"
            onClick={() => onSelectRegion('all')}
            title="Show all counties"
          >
            <RotateCcw size={13} />
            All
          </button>
        )}
      </div>

      <div className="radar-svg-wrap">
        <svg
          viewBox="0 0 100 100"
          className="radar-svg"
          role="img"
          aria-label="Stylized map of Leonida counties and Easter egg pins"
        >
          <defs>
            <pattern id="radarGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="var(--map-grid)"
                strokeWidth="0.35"
              />
            </pattern>
          </defs>

          {/* Tactical grid background */}
          <rect width="100" height="100" fill="url(#radarGrid)" />

          {/* Radar concentric rings */}
          <circle
            cx="52"
            cy="52"
            r="42"
            fill="none"
            stroke="var(--map-grid)"
            strokeDasharray="1.5 1.5"
            strokeWidth="0.4"
          />
          <circle
            cx="52"
            cy="52"
            r="26"
            fill="none"
            stroke="var(--map-grid)"
            strokeDasharray="1.5 1.5"
            strokeWidth="0.4"
          />

          {/* Overseas Highway Bridges connecting Keys */}
          <path
            d="M 67,78 L 66,82 L 58,87 L 46,91"
            fill="none"
            stroke="var(--map-stroke)"
            strokeWidth="0.65"
            strokeDasharray="1.2 0.8"
          />

          {/* Vice Beach & Little Hardin Causeways */}
          <line
            x1="80"
            y1="50"
            x2="84"
            y2="50"
            stroke="var(--map-stroke)"
            strokeWidth="0.7"
          />
          <line
            x1="80"
            y1="58"
            x2="84"
            y2="58"
            stroke="var(--map-stroke)"
            strokeWidth="0.7"
          />
          <line
            x1="80"
            y1="30"
            x2="84"
            y2="30"
            stroke="var(--map-stroke)"
            strokeWidth="0.55"
            strokeDasharray="1 0.8"
          />

          {/* Landmass Regions */}
          {(Object.keys(REGION_PATHS) as Array<Exclude<LeonidaRegionId, 'offshore-waters'>>).map(
            (regionId) => {
              const isSelected = selectedRegion === regionId;
              return (
                <path
                  key={regionId}
                  d={REGION_PATHS[regionId]}
                  className={`region-poly ${isSelected ? 'selected' : ''}`}
                  onClick={() =>
                    onSelectRegion(selectedRegion === regionId ? 'all' : regionId)
                  }
                >
                  <title>{LEONIDA_REGIONS[regionId].name}</title>
                </path>
              );
            }
          )}

          {/* Central Lake Leonida water body */}
          <ellipse
            cx="51"
            cy="47"
            rx="6.8"
            ry="5.2"
            fill="var(--map-water)"
            stroke="var(--map-stroke)"
            strokeWidth="0.55"
            pointerEvents="none"
          />

          {/* Offshore Deep Ocean Sector */}
          <rect
            x="82"
            y="68"
            width="15"
            height="16"
            rx="2"
            fill={
              selectedRegion === 'offshore-waters'
                ? 'rgba(30, 227, 207, 0.16)'
                : 'rgba(30, 227, 207, 0.04)'
            }
            stroke="var(--map-stroke)"
            strokeDasharray="1.5 1"
            strokeWidth="0.6"
            style={{ cursor: 'pointer' }}
            onClick={() =>
              onSelectRegion(
                selectedRegion === 'offshore-waters' ? 'all' : 'offshore-waters'
              )
            }
          >
            <title>{LEONIDA_REGIONS['offshore-waters'].name}</title>
          </rect>

          {/* Subtle Region Labels */}
          {REGION_LIST.map((reg) => (
            <text
              key={reg.id}
              x={reg.labelPos.x}
              y={reg.labelPos.y}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="2.65"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="600"
              pointerEvents="none"
              opacity={selectedRegion === 'all' || selectedRegion === reg.id ? 0.9 : 0.4}
            >
              {reg.shortName.toUpperCase()}
            </text>
          ))}

          {/* Interactive Easter Egg Pins */}
          {entries.map((entry) => {
            const isActive = activeEntryId === entry.id;
            const isFound = foundIds.includes(entry.id);
            const pinColor = isFound
              ? 'var(--accent-lime)'
              : isActive
                ? 'var(--accent-flamingo)'
                : 'var(--accent-teal)';

            return (
              <g
                key={entry.id}
                className="map-pin-group"
                transform={`translate(${entry.mapPin.x}, ${entry.mapPin.y})`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectEntryPin(entry.id);
                }}
                onMouseEnter={() => setHoveredEntry(entry)}
                onMouseLeave={() =>
                  setHoveredEntry((curr) => (curr?.id === entry.id ? null : curr))
                }
              >
                {isActive && <circle r="3.8" fill={pinColor} className="map-pin-pulse" />}
                <circle
                  r={isActive ? '2.35' : '1.8'}
                  fill={pinColor}
                  stroke="#080b11"
                  strokeWidth="0.6"
                />
              </g>
            );
          })}
        </svg>

        {/* Hover Pin HUD Overlay */}
        {hoveredEntry && (
          <div
            style={{
              position: 'absolute',
              left: '0.75rem',
              right: '0.75rem',
              bottom: '0.75rem',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-strong)',
              borderRadius: '10px',
              padding: '0.55rem 0.75rem',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                fontSize: '0.7rem',
              }}
              className="font-mono"
            >
              <span style={{ color: 'var(--accent-flamingo)', fontWeight: 700 }}>
                {hoveredEntry.indexCode}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>
                {hoveredEntry.subLocation}
              </span>
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: '0.82rem',
                color: 'var(--text-primary)',
                marginTop: '0.1rem',
              }}
            >
              {hoveredEntry.title}
            </div>
          </div>
        )}
      </div>

      {/* Active Region Brief */}
      {activeRegionMeta && (
        <div
          style={{
            padding: '0.75rem 1.1rem',
            background: 'var(--bg-inset)',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.78rem',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: 'var(--accent-flamingo)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginBottom: '0.2rem',
            }}
          >
            <MapPin size={13} />
            {activeRegionMeta.name}
          </div>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {activeRegionMeta.description}
          </div>
        </div>
      )}

      {/* Quick Region Filter Chips */}
      <div className="radar-legend">
        <button
          type="button"
          className={`region-chip ${selectedRegion === 'all' ? 'active' : ''}`}
          onClick={() => onSelectRegion('all')}
        >
          All Leonida
        </button>
        {REGION_LIST.map((reg) => {
          const count = allEntriesCountByRegion[reg.id] ?? 0;
          if (count === 0) return null;
          return (
            <button
              key={reg.id}
              type="button"
              className={`region-chip ${selectedRegion === reg.id ? 'active' : ''}`}
              onClick={() =>
                onSelectRegion(selectedRegion === reg.id ? 'all' : reg.id)
              }
            >
              <span>{reg.shortName}</span>
              <span className="font-mono" style={{ opacity: 0.75, fontSize: '0.68rem' }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

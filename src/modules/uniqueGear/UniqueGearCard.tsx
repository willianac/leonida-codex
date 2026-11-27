import {
  AlertTriangle,
  ArrowUpRight,
  Bookmark,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  Crosshair,
  ExternalLink,
  Footprints,
  MapPin,
  Shirt,
  Sparkles,
  Swords,
  User,
  Watch,
} from 'lucide-react';
import { LEONIDA_REGIONS } from '../registry';
import type { UniqueGearCategory, UniqueGearEntry } from '../../types/atlas';
import { GEAR_CATEGORY_META } from './gearMeta';

function CategoryIcon({
  category,
  size = 12,
}: {
  category: UniqueGearCategory;
  size?: number;
}) {
  switch (category) {
    case 'weapon':
      return <Swords size={size} />;
    case 'apparel':
      return <Shirt size={size} />;
    case 'vehicle':
      return <Car size={size} />;
    case 'accessory':
      return <Watch size={size} />;
  }
}

function getWearableBadgeColor(wearableBy: UniqueGearEntry['wearableBy']): string {
  switch (wearableBy) {
    case 'Jason':
      return 'var(--accent-sky)';
    case 'Lucia':
      return 'var(--accent-flamingo)';
    case 'Both':
      return 'var(--accent-teal)';
    case 'Garage / Armory':
      return 'var(--accent-amber)';
  }
}

interface UniqueGearCardProps {
  entry: UniqueGearEntry;
  isExpanded: boolean;
  isUnlocked: boolean;
  isBookmarked: boolean;
  completedSteps: number[];
  onToggleExpand: (entryId: string) => void;
  onToggleFound: (entryId: string) => void;
  onToggleBookmark: (entryId: string) => void;
  onToggleStep: (entryId: string, stepNumber: number) => void;
  onCompleteAllSteps: (entryId: string, totalSteps: number) => void;
  onActivateRadarEntry: (entryId: string) => void;
  onCopyText: (label: string, value: string) => void;
  onJumpToEasterEgg: (slug: string) => void;
}

export function UniqueGearCard({
  entry,
  isExpanded,
  isUnlocked,
  isBookmarked,
  completedSteps,
  onToggleExpand,
  onToggleFound,
  onToggleBookmark,
  onToggleStep,
  onCompleteAllSteps,
  onActivateRadarEntry,
  onCopyText,
  onJumpToEasterEgg,
}: UniqueGearCardProps) {
  const categoryInfo = GEAR_CATEGORY_META[entry.gearCategory];
  const regionInfo = LEONIDA_REGIONS[entry.regionId];
  const wearableColor = getWearableBadgeColor(entry.wearableBy);

  const doneStepsCount = completedSteps.length;
  const totalStepsCount = entry.steps.length;
  const panelId = `gear-panel-${entry.id}`;

  return (
    <article
      id={`entry-${entry.id}`}
      className={`egg-card ${isExpanded ? 'is-expanded' : ''} ${isUnlocked ? 'is-found' : ''}`}
    >
      <div className="egg-card-header">
        {/* Top Metadata Badges & Locker Actions */}
        <div className="egg-meta-top">
          <div className="egg-badges">
            <span className="egg-index">{entry.indexCode}</span>

            <span
              className="badge-tag"
              style={{
                color: categoryInfo.colorVar,
                borderColor: 'var(--border-strong)',
              }}
            >
              <CategoryIcon category={entry.gearCategory} size={12} />
              {categoryInfo.shortLabel}
            </span>

            <span
              className="badge-tag"
              style={{
                color: wearableColor,
              }}
            >
              <User size={12} />
              {entry.wearableBy}
            </span>

            <span className="badge-tag" style={{ color: 'var(--text-secondary)' }}>
              <MapPin size={12} style={{ color: 'var(--accent-flamingo)' }} />
              {regionInfo.shortName}
            </span>

            {entry.missableWarning && (
              <span
                className="badge-tag"
                style={{
                  color: 'var(--accent-coral)',
                  borderColor: 'rgba(255, 122, 89, 0.4)',
                }}
              >
                <AlertTriangle size={12} />
                Caution
              </span>
            )}
          </div>

          <div className="egg-quick-actions">
            <button
              type="button"
              className={`status-btn ${isBookmarked ? 'bookmark-active' : ''}`}
              onClick={() => onToggleBookmark(entry.id)}
              title={
                isBookmarked
                  ? 'Remove from Locker Hunt Route'
                  : 'Pin to Locker Hunt Route'
              }
              aria-pressed={isBookmarked}
            >
              <Bookmark size={13} fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>{isBookmarked ? 'Pinned' : 'Route'}</span>
            </button>

            <button
              type="button"
              className={`status-btn ${isUnlocked ? 'found-active' : ''}`}
              onClick={() => onToggleFound(entry.id)}
              aria-pressed={isUnlocked}
            >
              <CheckCircle2 size={14} />
              <span>{isUnlocked ? 'Collected' : 'Mark collected'}</span>
            </button>
          </div>
        </div>

        {/* Main Expandable Trigger */}
        <button
          type="button"
          className="egg-trigger-area"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => onToggleExpand(entry.id)}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 className="egg-title">{entry.title}</h2>
            <div className="egg-reference-line">
              <span>{entry.subtitle}</span>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                {entry.subLocation}
              </span>
            </div>
            <p className="egg-summary">{entry.summary}</p>
          </div>

          <span className="expand-cta-pill">
            <span>{isExpanded ? 'Hide guide' : 'Open guide'}</span>
            <ChevronDown size={16} className="chevron-icon" />
          </span>
        </button>

        {/* Bottom Scannable Condition Chips & Action Shortcuts */}
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
              {doneStepsCount > 0
                ? `${doneStepsCount}/${totalStepsCount} steps checked`
                : `${totalStepsCount} steps`}
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
                <span>View Parent Easter Egg</span>
                <ArrowUpRight size={12} />
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

      {/* Smooth Animated Expandable Locker Dossier */}
      <div
        id={panelId}
        role="region"
        aria-label={`Unlock guide for ${entry.title}`}
        className="egg-expand-wrapper"
      >
        <div className="egg-expand-inner">
          <div className="egg-dossier-body">
            {/* 1. Perk / Stats Callout */}
            <div
              className="lore-box"
              style={{
                borderLeft: `3px solid ${categoryInfo.colorVar}`,
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: categoryInfo.colorVar,
                  fontWeight: 700,
                  marginBottom: '0.32rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <CategoryIcon category={entry.gearCategory} size={13} />
                <span>Item Specs, Perks &amp; Storage</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.55,
                }}
              >
                {entry.perkOrStats}
              </p>
            </div>

            {/* 2. Missable / Storage Caution Alert (When Present) */}
            {entry.missableWarning && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.7rem',
                  padding: '0.8rem 1rem',
                  borderRadius: '11px',
                  background: 'rgba(255, 122, 89, 0.12)',
                  border: '1px solid rgba(255, 122, 89, 0.45)',
                  color: 'var(--text-primary)',
                  fontSize: '0.84rem',
                  lineHeight: 1.5,
                }}
              >
                <AlertTriangle
                  size={18}
                  style={{
                    color: 'var(--accent-coral)',
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}
                />
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--accent-coral)',
                      fontWeight: 700,
                      marginBottom: '0.15rem',
                    }}
                  >
                    Missable / Preservation Alert
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    {entry.missableWarning}
                  </div>
                </div>
              </div>
            )}

            {/* 3. Field Intel Grid */}
            <div className="intel-strip">
              <div>
                <div className="intel-cell-label">Exact Sector &amp; Spawn</div>
                <div className="intel-cell-val">
                  {regionInfo.shortName} — {entry.subLocation}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Locker Slot / Compatibility</div>
                <div className="intel-cell-val" style={{ color: wearableColor }}>
                  {entry.wearableBy} • {categoryInfo.label}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Time Window &amp; Trigger</div>
                <div className="intel-cell-val">
                  {entry.requirements.timeOfDay}
                  {entry.requirements.weather ? ` • ${entry.requirements.weather}` : ''}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Protagonist &amp; Loadout</div>
                <div className="intel-cell-val">
                  {entry.requirements.protagonist}
                  {entry.requirements.equipment ? ` • ${entry.requirements.equipment}` : ''}
                </div>
              </div>
              {entry.requirements.storyProgress && (
                <div>
                  <div className="intel-cell-label">Story Requirement</div>
                  <div className="intel-cell-val">{entry.requirements.storyProgress}</div>
                </div>
              )}
            </div>

            {/* Optional Keypad / Plate / Code Callout */}
            {entry.requirements.specialCode && (
              <div className="code-callout">
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      color: 'var(--accent-amber)',
                      fontWeight: 700,
                    }}
                  >
                    {entry.requirements.specialCode.label}
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {entry.requirements.specialCode.value}
                  </div>
                </div>
                <button
                  type="button"
                  className="status-btn"
                  onClick={() =>
                    onCopyText(
                      entry.requirements.specialCode!.label,
                      entry.requirements.specialCode!.value
                    )
                  }
                >
                  <Copy size={13} />
                  Copy
                </button>
              </div>
            )}

            {/* 4. Interactive Checkable Acquisition Steps */}
            <div>
              <div className="steps-section-header">
                <h3 className="section-kicker">
                  <Footprints size={17} style={{ color: 'var(--accent-flamingo)' }} />
                  Step-by-Step Acquisition &amp; Storage Checklist
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Select step numbers to mark progress
                  </span>
                  {!isUnlocked && (
                    <button
                      type="button"
                      className="status-btn"
                      onClick={() => onCompleteAllSteps(entry.id, totalStepsCount)}
                    >
                      <Check size={13} />
                      Check all
                    </button>
                  )}
                </div>
              </div>

              <ol className="steps-list">
                {entry.steps.map((step) => {
                  const isStepDone = completedSteps.includes(step.stepNumber);
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
                        {isStepDone ? <Check size={14} strokeWidth={3} /> : step.stepNumber}
                      </button>

                      <div className="step-content">
                        <div className="step-title-row">
                          <span className="step-title">{step.title}</span>
                          {step.landmarkCue && (
                            <span className="landmark-pill">{step.landmarkCue}</span>
                          )}
                        </div>
                        <p className="step-instruction">{step.instruction}</p>
                        {step.fieldTip && (
                          <div className="step-tip">
                            <strong style={{ color: 'var(--accent-amber)' }}>
                              Storage / Field Tip:{' '}
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

            {/* 5. Footer: Verification Sources & Parent Easter Egg Jump */}
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
                    style={{
                      padding: '0.35rem 0.68rem',
                      fontSize: '0.76rem',
                      borderColor: 'var(--border-active)',
                      color: 'var(--accent-flamingo)',
                    }}
                    onClick={() => onJumpToEasterEgg(entry.relatedEasterEggSlug!)}
                  >
                    <Sparkles size={13} />
                    <span>View Parent Easter Egg</span>
                    <ArrowUpRight size={13} />
                  </button>
                )}

                <button
                  type="button"
                  className="status-btn"
                  onClick={() => onActivateRadarEntry(entry.id)}
                >
                  <Crosshair size={13} style={{ color: 'var(--accent-teal)' }} />
                  Pin on Radar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

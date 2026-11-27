import { useState } from 'react';
import {
  Bookmark,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  Crosshair,
  ExternalLink,
  Eye,
  EyeOff,
  Footprints,
  Layers,
  MapPin,
  Share2,
  Tag,
  User,
} from 'lucide-react';
import {
  CATEGORY_META,
  COMPLEXITY_META,
  LEONIDA_REGIONS,
} from '../modules/registry';
import type { EasterEggEntry } from '../types/atlas';

interface EasterEggCardProps {
  entry: EasterEggEntry;
  isExpanded: boolean;
  isFound: boolean;
  isBookmarked: boolean;
  completedSteps: number[];
  globalSpoilerShield: boolean;
  onToggleExpand: (entryId: string) => void;
  onToggleFound: (entryId: string) => void;
  onToggleBookmark: (entryId: string) => void;
  onToggleStep: (entryId: string, stepNumber: number) => void;
  onCompleteAllSteps: (entryId: string, totalSteps: number) => void;
  onLocateOnRadar: (entry: EasterEggEntry) => void;
  onCopyShareLink: (entry: EasterEggEntry) => void;
  onCopyText: (label: string, value: string) => void;
}

export function EasterEggCard({
  entry,
  isExpanded,
  isFound,
  isBookmarked,
  completedSteps,
  globalSpoilerShield,
  onToggleExpand,
  onToggleFound,
  onToggleBookmark,
  onToggleStep,
  onCompleteAllSteps,
  onLocateOnRadar,
  onCopyShareLink,
  onCopyText,
}: EasterEggCardProps) {
  const [localRevealOverride, setLocalRevealOverride] = useState(false);

  const categoryInfo = CATEGORY_META[entry.category];
  const complexityInfo = COMPLEXITY_META[entry.complexity];
  const regionInfo = LEONIDA_REGIONS[entry.regionId];

  const isPayoffHidden = globalSpoilerShield && !localRevealOverride && !isFound;
  const doneStepsCount = completedSteps.length;
  const totalStepsCount = entry.steps.length;
  const panelId = `panel-${entry.slug}`;

  return (
    <article
      id={`egg-${entry.slug}`}
      className={`egg-card ${isExpanded ? 'is-expanded' : ''} ${isFound ? 'is-found' : ''}`}
    >
      <div className="egg-card-header">
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
              <Tag size={11} />
              {categoryInfo.shortLabel}
            </span>

            <span className="badge-tag" style={{ color: 'var(--text-secondary)' }}>
              <MapPin size={12} style={{ color: 'var(--accent-flamingo)' }} />
              {regionInfo.shortName}
            </span>

            <span
              className="badge-tag"
              title={complexityInfo.hint}
              style={{
                color:
                  entry.complexity === 'multi-step'
                    ? 'var(--accent-amber)'
                    : entry.complexity === 'conditional'
                      ? 'var(--accent-teal)'
                      : 'var(--text-secondary)',
              }}
            >
              <Layers size={11} />
              {complexityInfo.badgeText}
            </span>
          </div>

          <div className="egg-quick-actions">
            <button
              type="button"
              className={`status-btn ${isBookmarked ? 'bookmark-active' : ''}`}
              onClick={() => onToggleBookmark(entry.id)}
              title={isBookmarked ? 'Remove from pinned route' : 'Pin to route'}
              aria-pressed={isBookmarked}
            >
              <Bookmark size={13} fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>{isBookmarked ? 'Pinned' : 'Pin'}</span>
            </button>

            <button
              type="button"
              className={`status-btn ${isFound ? 'found-active' : ''}`}
              onClick={() => onToggleFound(entry.id)}
              aria-pressed={isFound}
            >
              <CheckCircle2 size={14} />
              <span>{isFound ? 'Found' : 'Mark found'}</span>
            </button>
          </div>
        </div>

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
              <span>Ref: {entry.referenceOrigin}</span>
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
                ? `${doneStepsCount}/${totalStepsCount} steps`
                : `${totalStepsCount} steps`}
            </span>
          </div>

          <button
            type="button"
            className="status-btn"
            onClick={() => onLocateOnRadar(entry)}
          >
            <Crosshair size={12} style={{ color: 'var(--accent-teal)' }} />
            Radar pin
          </button>
        </div>
      </div>

      <div
        id={panelId}
        role="region"
        aria-label={`Walkthrough for ${entry.title}`}
        className="egg-expand-wrapper"
      >
        <div className="egg-expand-inner">
          <div className="egg-dossier-body">
            <div className="intel-strip">
              <div>
                <div className="intel-cell-label">Sector &amp; Landmark</div>
                <div className="intel-cell-val">
                  {regionInfo.shortName} · {entry.subLocation}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Time &amp; Weather</div>
                <div className="intel-cell-val">
                  {entry.requirements.timeOfDay}
                  {entry.requirements.weather ? ` · ${entry.requirements.weather}` : ''}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Protagonist &amp; Gear</div>
                <div className="intel-cell-val">
                  {entry.requirements.protagonist}
                  {entry.requirements.equipment
                    ? ` · ${entry.requirements.equipment}`
                    : ''}
                </div>
              </div>
              {entry.requirements.storyProgress && (
                <div>
                  <div className="intel-cell-label">Story Window</div>
                  <div className="intel-cell-val">{entry.requirements.storyProgress}</div>
                </div>
              )}
            </div>

            {entry.requirements.specialCode && (
              <div className="code-callout" style={{ flexWrap: 'wrap' }}>
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      color: 'var(--accent-amber)',
                      fontWeight: 500,
                    }}
                  >
                    {entry.requirements.specialCode.label}
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '1.02rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: 'var(--text-primary)',
                      wordBreak: 'break-word',
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

            <div>
              <div className="steps-section-header">
                <h3 className="section-kicker">
                  <Footprints size={16} style={{ color: 'var(--accent-flamingo)' }} />
                  Walkthrough Steps
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    Select step numbers to mark progress
                  </span>
                  {!isFound && (
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
                        {isStepDone ? <Check size={14} strokeWidth={2.5} /> : step.stepNumber}
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
                              Note:{' '}
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

            <div className="lore-payoff-grid">
              <div className="lore-box">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.45rem',
                  }}
                >
                  <h4
                    className="font-display"
                    style={{ margin: 0, fontSize: '0.89rem', color: 'var(--accent-flamingo)' }}
                  >
                    In-Game Payoff
                  </h4>
                  {globalSpoilerShield && !isFound && localRevealOverride && (
                    <button
                      type="button"
                      className="status-btn"
                      onClick={() => setLocalRevealOverride(false)}
                    >
                      <EyeOff size={12} />
                      Mask
                    </button>
                  )}
                </div>

                <div className={`spoiler-shield-content ${isPayoffHidden ? 'blurred' : ''}`}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    {entry.payoffDescription}
                  </p>
                </div>

                {isPayoffHidden && (
                  <div className="spoiler-reveal-overlay">
                    <button
                      type="button"
                      className="reveal-btn"
                      onClick={() => setLocalRevealOverride(true)}
                    >
                      <Eye size={14} />
                      Reveal payoff
                    </button>
                    <span style={{ fontSize: '0.73rem', color: 'var(--text-secondary)' }}>
                      Masked by Spoiler Shield
                    </span>
                  </div>
                )}
              </div>

              <div className="lore-box">
                <h4
                  className="font-display"
                  style={{
                    margin: '0 0 0.45rem',
                    fontSize: '0.89rem',
                    color: 'var(--accent-teal)',
                  }}
                >
                  Reference &amp; Context
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                  }}
                >
                  {entry.loreContext}
                </p>
              </div>
            </div>

            <div className="dossier-footer">
              <div className="sources-row">
                <span>Sources:</span>
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <button
                  type="button"
                  className="status-btn"
                  onClick={() => onCopyShareLink(entry)}
                >
                  <Share2 size={13} />
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

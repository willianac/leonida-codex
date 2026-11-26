import { useState } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
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
  FileSearch,
  Footprints,
  HelpCircle,
  Link2,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  User,
  XCircle,
} from 'lucide-react';
import { LEONIDA_REGIONS } from '../registry';
import type { MythInvestigationEntry, MythStatus } from '../../types/atlas';

interface MythCaseCardProps {
  entry: MythInvestigationEntry;
  isExpanded: boolean;
  isReviewed: boolean;
  isBookmarked: boolean;
  isRadarActive: boolean;
  completedSteps: number[];
  spoilerShield: boolean;
  onToggleExpand: (entryId: string) => void;
  onToggleReviewed: (entryId: string) => void;
  onToggleBookmark: (entryId: string) => void;
  onToggleStep: (entryId: string, stepNumber: number) => void;
  onCompleteAllSteps: (entryId: string, totalSteps: number) => void;
  onActivateRadar: (entryId: string) => void;
  onCopyText: (label: string, value: string) => void;
  onJumpToEasterEgg: (slug: string) => void;
}

const STATUS_BADGE_CONFIG: Record<
  MythStatus,
  { label: string; badgeClass: string; icon: 'confirmed' | 'hypothesis' | 'debunked' }
> = {
  'confirmed-clue': {
    label: 'Confirmed Clue',
    badgeClass: 'myth-badge-confirmed',
    icon: 'confirmed',
  },
  'active-hypothesis': {
    label: 'Active Hypothesis',
    badgeClass: 'myth-badge-hypothesis',
    icon: 'hypothesis',
  },
  debunked: {
    label: 'Debunked Dead End',
    badgeClass: 'myth-badge-debunked',
    icon: 'debunked',
  },
};

export function MythCaseCard({
  entry,
  isExpanded,
  isReviewed,
  isBookmarked,
  isRadarActive,
  completedSteps,
  spoilerShield,
  onToggleExpand,
  onToggleReviewed,
  onToggleBookmark,
  onToggleStep,
  onCompleteAllSteps,
  onActivateRadar,
  onCopyText,
  onJumpToEasterEgg,
}: MythCaseCardProps) {
  const [localRevealConsensus, setLocalRevealConsensus] = useState(false);

  const regionInfo = LEONIDA_REGIONS[entry.regionId];
  const statusInfo = STATUS_BADGE_CONFIG[entry.mythStatus];
  const verifiedEvidenceCount = entry.evidenceChain.filter((item) => item.verified).length;
  const totalEvidenceCount = entry.evidenceChain.length;
  const doneStepsCount = completedSteps.length;
  const totalStepsCount = entry.steps.length;
  const panelId = `myth-panel-${entry.id}`;

  // Only shield solved consensus payoffs when Spoiler Shield is ON and user hasn't reviewed/revealed yet.
  // Never obscure "Debunked Dead End" warnings so players immediately see what not to chase.
  const shouldShieldConsensus =
    spoilerShield &&
    entry.mythStatus === 'confirmed-clue' &&
    !isReviewed &&
    !localRevealConsensus;

  return (
    <article
      id={`entry-${entry.id}`}
      className={`egg-card myth-case-card status-${entry.mythStatus} ${
        isExpanded ? 'is-expanded' : ''
      } ${isReviewed ? 'is-found' : ''}`}
      style={
        isRadarActive && !isExpanded
          ? { borderColor: 'var(--accent-teal)' }
          : undefined
      }
    >
      <div className="egg-card-header">
        {/* Top Metadata & Case Controls */}
        <div className="egg-meta-top">
          <div className="egg-badges">
            <span className="egg-index">{entry.indexCode}</span>

            <span className={`badge-tag ${statusInfo.badgeClass}`}>
              {statusInfo.icon === 'confirmed' && <ShieldCheck size={12} />}
              {statusInfo.icon === 'hypothesis' && <HelpCircle size={12} />}
              {statusInfo.icon === 'debunked' && <XCircle size={12} />}
              {statusInfo.label}
            </span>

            <span className="badge-tag" style={{ color: 'var(--text-secondary)' }}>
              <MapPin size={12} style={{ color: 'var(--accent-flamingo)' }} />
              {regionInfo.shortName}
            </span>

            <span
              className="badge-tag font-mono"
              style={{ color: 'var(--text-secondary)', fontSize: '0.69rem' }}
            >
              <Link2 size={11} style={{ color: 'var(--accent-teal)' }} />
              {verifiedEvidenceCount}/{totalEvidenceCount} Verified Clues
            </span>
          </div>

          <div className="egg-quick-actions">
            <button
              type="button"
              className={`status-btn ${isBookmarked ? 'bookmark-active' : ''}`}
              onClick={() => onToggleBookmark(entry.id)}
              title={
                isBookmarked
                  ? 'Remove case file from pinned route'
                  : 'Pin case file to your investigation route'
              }
              aria-pressed={isBookmarked}
            >
              <Bookmark size={13} fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>{isBookmarked ? 'Pinned' : 'Pin'}</span>
            </button>

            <button
              type="button"
              className={`status-btn ${isReviewed ? 'found-active' : ''}`}
              onClick={() => onToggleReviewed(entry.id)}
              aria-pressed={isReviewed}
            >
              <CheckCircle2 size={14} />
              <span>{isReviewed ? 'Case Reviewed' : 'Mark Reviewed'}</span>
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
            </div>
            <p className="egg-summary">{entry.summary}</p>
          </div>

          <span className="expand-cta-pill">
            <span>{isExpanded ? 'Hide Dossier' : 'Open Case File'}</span>
            <ChevronDown size={16} className="chevron-icon" />
          </span>
        </button>

        {/* Bottom Condition & Action Strip */}
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
                ? `${doneStepsCount}/${totalStepsCount} field checks`
                : `${totalStepsCount} field checks`}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            {entry.relatedEasterEggSlug && (
              <button
                type="button"
                className="status-btn"
                style={{
                  padding: '0.24rem 0.55rem',
                  fontSize: '0.72rem',
                  color: 'var(--accent-flamingo)',
                }}
                onClick={() => onJumpToEasterEgg(entry.relatedEasterEggSlug!)}
              >
                <ArrowUpRight size={12} />
                Open Related Easter Egg
              </button>
            )}

            <button
              type="button"
              className="status-btn"
              style={{
                padding: '0.24rem 0.55rem',
                fontSize: '0.72rem',
                borderColor: isRadarActive ? 'var(--accent-teal)' : undefined,
                color: isRadarActive ? 'var(--accent-teal)' : undefined,
              }}
              onClick={() => onActivateRadar(entry.id)}
            >
              <Crosshair size={12} style={{ color: 'var(--accent-teal)' }} />
              Radar Pin
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Investigation Dossier */}
      <div
        id={panelId}
        role="region"
        aria-label={`Investigation dossier for ${entry.title}`}
        className="egg-expand-wrapper"
      >
        <div className="egg-expand-inner">
          <div className="egg-dossier-body">
            {/* 1. Field Conditions Strip */}
            <div className="intel-strip">
              <div>
                <div className="intel-cell-label">Sector & Investigation Sites</div>
                <div className="intel-cell-val">
                  {regionInfo.shortName} — {entry.subLocation}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Time & Weather Window</div>
                <div className="intel-cell-val">
                  {entry.requirements.timeOfDay}
                  {entry.requirements.weather ? ` • ${entry.requirements.weather}` : ''}
                </div>
              </div>
              <div>
                <div className="intel-cell-label">Protagonist & Field Gear</div>
                <div className="intel-cell-val">
                  {entry.requirements.protagonist}
                  {entry.requirements.equipment ? ` • ${entry.requirements.equipment}` : ''}
                </div>
              </div>
              {entry.requirements.storyProgress && (
                <div>
                  <div className="intel-cell-label">Progression Window</div>
                  <div className="intel-cell-val">{entry.requirements.storyProgress}</div>
                </div>
              )}
            </div>

            {/* Optional Verified Code / Phone Callout */}
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
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
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

            {/* 2. Evidence Chain Board */}
            <section className="evidence-board" aria-label="Evidence Chain">
              <div className="evidence-board-header">
                <h3 className="section-kicker">
                  <FileSearch size={17} style={{ color: 'var(--accent-teal)' }} />
                  Evidence Chain Board
                </h3>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}
                >
                  {verifiedEvidenceCount} Verified •{' '}
                  {totalEvidenceCount - verifiedEvidenceCount} Unconfirmed Lead
                  {totalEvidenceCount - verifiedEvidenceCount === 1 ? '' : 's'}
                </span>
              </div>

              <ol className="evidence-chain-list">
                {entry.evidenceChain.map((clue) => (
                  <li key={clue.id} className="evidence-node">
                    <div
                      className={`evidence-node-dot ${
                        clue.verified ? 'is-verified' : 'is-unconfirmed'
                      }`}
                      aria-hidden="true"
                    >
                      {clue.verified ? (
                        <Check size={13} strokeWidth={3} />
                      ) : (
                        <AlertTriangle size={13} />
                      )}
                    </div>

                    <div className="evidence-node-card">
                      <div className="evidence-node-top">
                        <span className="evidence-node-title">{clue.title}</span>
                        <span
                          className={`evidence-verify-badge ${
                            clue.verified ? 'is-verified' : 'is-unconfirmed'
                          }`}
                        >
                          {clue.verified ? 'Verified' : 'Unconfirmed Lead'}
                        </span>
                      </div>

                      <div className="evidence-location-cue">
                        <MapPin size={11} />
                        <span>{clue.locationCue}</span>
                      </div>

                      <p className="evidence-detail">{clue.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* 3. Community Consensus & Ruled Out / Debunked Callouts */}
            <div
              className={`myth-analysis-grid ${entry.whatWasDebunked ? '' : 'single-col'}`}
            >
              <div className="myth-consensus-box">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.42rem',
                  }}
                >
                  <h4
                    className="myth-box-heading"
                    style={{ margin: 0, color: 'var(--accent-teal)' }}
                  >
                    <ShieldCheck size={15} />
                    Community Consensus
                  </h4>
                  {spoilerShield &&
                    entry.mythStatus === 'confirmed-clue' &&
                    !isReviewed &&
                    localRevealConsensus && (
                      <button
                        type="button"
                        className="status-btn"
                        style={{ padding: '0.16rem 0.45rem', fontSize: '0.7rem' }}
                        onClick={() => setLocalRevealConsensus(false)}
                      >
                        <EyeOff size={12} />
                        Hide
                      </button>
                    )}
                </div>

                <div
                  className={`spoiler-shield-content ${
                    shouldShieldConsensus ? 'blurred' : ''
                  }`}
                >
                  <p className="myth-box-copy">{entry.communityConsensus}</p>
                </div>

                {shouldShieldConsensus && (
                  <div className="spoiler-reveal-overlay">
                    <button
                      type="button"
                      className="reveal-btn"
                      onClick={() => setLocalRevealConsensus(true)}
                    >
                      <Eye size={14} />
                      Reveal Solved Consensus
                    </button>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      Spoiler Shield is ON — reveal to read confirmed payoffs
                    </span>
                  </div>
                )}
              </div>

              {entry.whatWasDebunked && (
                <div className="myth-debunked-box">
                  <h4
                    className="myth-box-heading"
                    style={{ color: 'var(--accent-flamingo)' }}
                  >
                    <ShieldAlert size={15} />
                    Ruled Out / Debunked (Save Your Time)
                  </h4>
                  <p className="myth-box-copy" style={{ color: 'var(--text-primary)' }}>
                    {entry.whatWasDebunked}
                  </p>
                </div>
              )}
            </div>

            {/* 4. Checkable Field Verification Steps */}
            <div>
              <div className="steps-section-header">
                <h3 className="section-kicker">
                  <Footprints size={17} style={{ color: 'var(--accent-flamingo)' }} />
                  Field Verification Checklist
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Check off clues as you verify them in Leonida
                  </span>
                  {!isReviewed && (
                    <button
                      type="button"
                      className="status-btn"
                      onClick={() => onCompleteAllSteps(entry.id, totalStepsCount)}
                    >
                      <Check size={13} />
                      Verify All
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
                        aria-label={`Mark field check ${step.stepNumber} as ${
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
                              Investigator Tip:{' '}
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

            {/* 5. Sources & Related Easter Egg Footer */}
            <div className="dossier-footer">
              <div className="sources-row">
                <span>Community Intel:</span>
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
                    className="myth-jump-btn"
                    onClick={() => onJumpToEasterEgg(entry.relatedEasterEggSlug!)}
                  >
                    <ArrowUpRight size={14} />
                    Open Related Easter Egg
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

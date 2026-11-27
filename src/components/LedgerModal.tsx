import { ArrowUpRight, Calendar, FileText, X } from 'lucide-react';
import { DISCOVERY_DROPS } from '../data/discoveryLedger';

interface LedgerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSlug: (slug: string) => void;
}

export function LedgerModal({ isOpen, onClose, onJumpToSlug }: LedgerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ledger-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-card"
        style={{ maxWidth: '620px', maxHeight: '84vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '0.85rem',
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--accent-flamingo)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <FileText size={14} />
              Discovery Ledger
            </div>
            <h2
              id="ledger-modal-title"
              className="font-display"
              style={{ margin: 0, fontSize: '1.36rem' }}
            >
              Verified Archive Additions
            </h2>
          </div>

          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close discovery ledger"
          >
            <X size={16} />
          </button>
        </div>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.88rem',
            margin: '0 0 1.15rem',
          }}
        >
          Chronological log of verified entries and walkthrough updates added to Leonida
          Codex. Select any entry to open its walkthrough.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {DISCOVERY_DROPS.map((drop) => (
            <div
              key={drop.id}
              style={{
                background: 'var(--bg-inset)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-md)',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.6rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.45rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.77rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Calendar size={13} style={{ color: 'var(--accent-teal)' }} />
                  {drop.dateLabel}
                </span>

                <span
                  className="badge-tag"
                  style={{ color: 'var(--accent-lime)' }}
                >
                  {drop.badgeLabel}
                </span>
              </div>

              <p
                style={{
                  margin: '0 0 0.7rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                }}
              >
                {drop.summary}
              </p>

              {drop.addedEggs.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.38rem',
                  }}
                >
                  {drop.addedEggs.map((egg) => (
                    <button
                      key={egg.slug}
                      type="button"
                      className="ledger-jump-btn"
                      onClick={() => {
                        onClose();
                        onJumpToSlug(egg.slug);
                      }}
                    >
                      <span>
                        <strong
                          className="font-mono"
                          style={{
                            color: 'var(--accent-flamingo)',
                            marginRight: '0.45rem',
                          }}
                        >
                          {egg.indexCode}
                        </strong>
                        {egg.title}
                        <span
                          style={{
                            color: 'var(--text-muted)',
                            marginLeft: '0.4rem',
                            fontSize: '0.75rem',
                          }}
                        >
                          · {egg.regionLabel}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        style={{ color: 'var(--accent-teal)', flexShrink: 0 }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

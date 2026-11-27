import { ArrowRight, CheckCircle2, Compass, X } from 'lucide-react';
import type { AtlasModuleDefinition } from '../types/atlas';

interface ModuleBlueprintModalProps {
  module: AtlasModuleDefinition | null;
  onClose: () => void;
}

export function ModuleBlueprintModal({ module, onClose }: ModuleBlueprintModalProps) {
  if (!module) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="module-modal-title"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--accent-teal)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Compass size={14} />
              Planned Module
            </div>
            <h2
              id="module-modal-title"
              className="font-display"
              style={{ margin: 0, fontSize: '1.38rem' }}
            >
              {module.label}
            </h2>
          </div>

          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.91rem',
            margin: '0 0 1.15rem',
          }}
        >
          {module.summary}
        </p>

        <div
          style={{
            background: 'var(--bg-inset)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--r-md)',
            padding: '1rem',
            marginBottom: '1.2rem',
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '0.6rem',
            }}
          >
            Planned Scope
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {module.plannedCapabilities.map((cap, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                }}
              >
                <CheckCircle2 size={15} style={{ color: 'var(--accent-lime)' }} />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Status: in verification before publication
          </span>

          <button
            type="button"
            className="utility-btn active-shield"
            onClick={onClose}
          >
            <span>Close</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

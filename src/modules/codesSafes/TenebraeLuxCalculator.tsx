import { useMemo, useState } from 'react';
import {
  Calculator,
  Copy,
  Radio,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface TenebraeLuxCalculatorProps {
  onCopyText: (label: string, value: string) => void;
}

const GREEK_OPTIONS: Array<{ symbol: string; name: string; value: number }> = [
  { symbol: 'α', name: 'Alpha', value: 1 },
  { symbol: 'β', name: 'Beta', value: 2 },
  { symbol: 'γ', name: 'Gamma', value: 3 },
  { symbol: 'δ', name: 'Delta', value: 4 },
  { symbol: 'ε', name: 'Epsilon', value: 5 },
];

const ROMAN_PRESETS = ['IV', 'VII', 'XII', 'XIII', 'XXII'];
const ALIEN_COMMON_CODES: Array<[number, number, number, number]> = [
  [2, 1, 3, 4],
  [2, 3, 1, 4],
  [2, 3, 4, 1],
];

const ROMAN_MAP: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function computeDigitalRoot(num: number): { root: number; trace: string } {
  const safe = Math.abs(Math.trunc(num));
  if (safe === 0) return { root: 0, trace: '0' };

  const steps: string[] = [String(safe)];
  let current = safe;

  while (current > 9) {
    const digits = String(current)
      .split('')
      .map((d) => Number(d));
    const next = digits.reduce((acc, d) => acc + d, 0);
    steps.push(`${digits.join('+')} = ${next}`);
    current = next;
  }

  return {
    root: current,
    trace: steps.length > 1 ? steps.join(' → ') : String(current),
  };
}

function parseRomanNumeral(raw: string): number | null {
  const cleaned = raw.trim().toUpperCase();
  if (!cleaned || !/^[IVXLCDM]+$/.test(cleaned)) return null;

  let total = 0;
  for (let i = 0; i < cleaned.length; i += 1) {
    const curr = ROMAN_MAP[cleaned[i]];
    const next = i + 1 < cleaned.length ? ROMAN_MAP[cleaned[i + 1]] : 0;
    if (curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total > 0 ? total : null;
}

function extractNumericDigits(raw: string): number | null {
  const onlyDigits = raw.replace(/\D/g, '');
  if (!onlyDigits) return null;
  return Number(onlyDigits);
}

export function TenebraeLuxCalculator({ onCopyText }: TenebraeLuxCalculatorProps) {
  // Tenebrae Lux 6-Clue State
  const [oct11People, setOct11People] = useState<string>('');
  const [oct14Tape, setOct14Tape] = useState<string>('');
  const [oct20Roman, setOct20Roman] = useState<string>('');
  const [oct23Rings, setOct23Rings] = useState<string>('');
  const [oct27Vinyl, setOct27Vinyl] = useState<string>('');
  const [oct30Greek, setOct30Greek] = useState<number | null>(null);

  // South Point Alien Dream 4-Bar Keypad State
  const [alienBars, setAlienBars] = useState<[number, number, number, number]>([2, 1, 3, 4]);

  const computed = useMemo(() => {
    // 1. Oct 11 Fallen Photo -> single digit (digital root if >=10)
    const pNum = extractNumericDigits(oct11People);
    const d1 = pNum === null ? null : pNum <= 9 ? pNum : computeDigitalRoot(pNum).root;

    // 2. Oct 14 Tape Player -> digital root
    const tNum = extractNumericDigits(oct14Tape);
    const tCalc = tNum === null ? null : computeDigitalRoot(tNum);

    // 3. Oct 20 Roman Numeral -> integer -> digital root
    const rInt = parseRomanNumeral(oct20Roman);
    const rInvalid = oct20Roman.trim().length > 0 && rInt === null;
    const rCalc = rInt === null ? null : computeDigitalRoot(rInt);

    // 4. Oct 23 Ringing Phone -> single digit
    const ringNum = extractNumericDigits(oct23Rings);
    const d4 = ringNum === null ? null : ringNum <= 9 ? ringNum : computeDigitalRoot(ringNum).root;

    // 5. Oct 27 Vinyl Record price -> digital root
    const vNum = extractNumericDigits(oct27Vinyl);
    const vCalc = vNum === null ? null : computeDigitalRoot(vNum);

    // 6. Oct 30 Engine Greek letter -> 1..5
    const d6 = oct30Greek;

    const digits: Array<number | null> = [
      d1,
      tCalc ? tCalc.root : null,
      rCalc ? rCalc.root : null,
      d4,
      vCalc ? vCalc.root : null,
      d6,
    ];

    const filledCount = digits.filter((d) => d !== null).length;
    const isComplete = filledCount === 6;
    const rawCode = digits.map((d) => (d === null ? '_' : String(d))).join('');
    const dialableCode = `${rawCode}#`;

    return {
      d1,
      tCalc,
      rInt,
      rInvalid,
      rCalc,
      d4,
      vCalc,
      d6,
      digits,
      filledCount,
      isComplete,
      rawCode,
      dialableCode,
    };
  }, [oct11People, oct14Tape, oct20Roman, oct23Rings, oct27Vinyl, oct30Greek]);

  const alienCode = alienBars.join('');

  const handleResetTenebrae = () => {
    setOct11People('');
    setOct14Tape('');
    setOct20Roman('');
    setOct23Rings('');
    setOct27Vinyl('');
    setOct30Greek(null);
  };

  const handleLoadExample = () => {
    setOct11People('4');
    setOct14Tape('33');
    setOct20Roman('XIII');
    setOct23Rings('5');
    setOct27Vinyl('85');
    setOct30Greek(2);
  };

  const updateAlienBar = (slotIndex: number, barCount: number) => {
    setAlienBars((prev) => {
      const next: [number, number, number, number] = [...prev];
      next[slotIndex] = barCount;
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* 1. Tenebrae Lux 6-Digit Bunker Code Calculator */}
      <section
        aria-label="Tenebrae Lux 6-Digit Bunker Code Calculator"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-active)',
          borderRadius: 'var(--r-lg)',
          padding: '1.25rem 1.35rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-flamingo)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Calculator size={13} />
              Session-Randomized Cipher Solver • CV-09
            </div>
            <h3
              className="font-display"
              style={{ margin: '0.2rem 0 0.25rem', fontSize: '1.12rem', color: 'var(--text-primary)' }}
            >
              Tenebrae Lux 6-Digit Bunker Code Calculator
            </h3>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Enter your six October looping-room anomalies in chronological calendar order to compute your unique bunker phone code + <code className="font-mono">#</code>.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="status-btn"
              onClick={handleLoadExample}
              title="Fill sample clues to inspect the digital-root calculation"
            >
              <Sparkles size={13} style={{ color: 'var(--accent-teal)' }} />
              Load sample
            </button>
            <button
              type="button"
              className="status-btn"
              onClick={handleResetTenebrae}
            >
              <RotateCcw size={13} />
              Clear
            </button>
          </div>
        </div>

        {/* Live Computed Code Output Banner */}
        <div
          className="code-callout"
          style={{
            flexWrap: 'wrap',
            background: computed.isComplete
              ? 'var(--accent-lime-soft)'
              : 'var(--accent-amber-soft)',
            borderColor: computed.isComplete
              ? 'var(--border-lime)'
              : 'var(--border-amber)',
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.69rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color: computed.isComplete ? 'var(--accent-lime)' : 'var(--accent-amber)',
              }}
            >
              {computed.isComplete
                ? 'Ready to Dial on Bunker Wall Phone'
                : `Computed Bunker Sequence (${computed.filledCount}/6 Clues Entered)`}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginTop: '0.3rem',
                flexWrap: 'wrap',
              }}
            >
              {computed.digits.map((digit, idx) => (
                <span
                  key={idx}
                  className="font-mono"
                  style={{
                    width: '32px',
                    height: '36px',
                    borderRadius: '8px',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    background: 'var(--bg-card)',
                    border: `1px solid ${digit !== null ? 'var(--accent-teal)' : 'var(--border-strong)'}`,
                    color: digit !== null ? 'var(--text-primary)' : 'var(--text-muted)',
                  }}
                >
                  {digit !== null ? digit : '–'}
                </span>
              ))}
              <span
                className="font-mono"
                style={{
                  width: '32px',
                  height: '36px',
                  borderRadius: '8px',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  background: 'var(--accent-flamingo-soft)',
                  border: '1px solid var(--border-active)',
                  color: 'var(--accent-flamingo)',
                }}
              >
                #
              </span>
            </div>
          </div>

          <button
            type="button"
            className={`utility-btn ${computed.isComplete ? 'active-shield' : ''}`}
            disabled={!computed.isComplete}
            style={{ opacity: computed.isComplete ? 1 : 0.55 }}
            onClick={() => onCopyText('Tenebrae Lux Bunker Code', computed.dialableCode)}
          >
            <Copy size={14} />
            <span>
              {computed.isComplete ? `Copy ${computed.dialableCode}` : 'Enter All 6 Clues'}
            </span>
          </button>
        </div>

        {/* 6 Chronological Clue Inputs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {/* Clue 1: Oct 11 Fallen Photo */}
          <div className="stat-tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span className="intel-cell-label" style={{ margin: 0, color: 'var(--accent-teal)' }}>
                1. Oct 11 — Fallen Photo
              </span>
              <span className="egg-index">
                Digit: {computed.d1 !== null ? computed.d1 : '—'}
              </span>
            </div>
            <label
              htmlFor="tl-oct11"
              style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}
            >
              Total people in photo (incl. background)
            </label>
            <input
              id="tl-oct11"
              type="text"
              inputMode="numeric"
              maxLength={2}
              value={oct11People}
              onChange={(e) => setOct11People(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 4"
              className="search-input font-mono"
              style={{ padding: '0.48rem 0.7rem', fontSize: '0.88rem' }}
            />
          </div>

          {/* Clue 2: Oct 14 Tape Player */}
          <div className="stat-tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span className="intel-cell-label" style={{ margin: 0, color: 'var(--accent-teal)' }}>
                2. Oct 14 — Tape Player
              </span>
              <span className="egg-index">
                Digit: {computed.tCalc ? computed.tCalc.root : '—'}
              </span>
            </div>
            <label
              htmlFor="tl-oct14"
              style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}
            >
              Altered number (auto digital root)
            </label>
            <input
              id="tl-oct14"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={oct14Tape}
              onChange={(e) => setOct14Tape(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 33 or 48"
              className="search-input font-mono"
              style={{ padding: '0.48rem 0.7rem', fontSize: '0.88rem' }}
            />
            {computed.tCalc && (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                Root: {computed.tCalc.trace}
              </div>
            )}
          </div>

          {/* Clue 3: Oct 20 Roman Numeral */}
          <div className="stat-tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span className="intel-cell-label" style={{ margin: 0, color: 'var(--accent-teal)' }}>
                3. Oct 20 — Roman Numeral
              </span>
              <span className="egg-index">
                Digit: {computed.rCalc ? computed.rCalc.root : '—'}
              </span>
            </div>
            <label
              htmlFor="tl-oct20"
              style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}
            >
              Pillar Roman numeral (e.g. XIII, IV, XXII)
            </label>
            <input
              id="tl-oct20"
              type="text"
              maxLength={10}
              value={oct20Roman}
              onChange={(e) => setOct20Roman(e.target.value.toUpperCase())}
              placeholder="e.g. XIII"
              className="search-input font-mono"
              style={{
                padding: '0.48rem 0.7rem',
                fontSize: '0.88rem',
                borderColor: computed.rInvalid ? 'var(--accent-flamingo)' : undefined,
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
              {ROMAN_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`region-chip ${oct20Roman.trim().toUpperCase() === preset ? 'active' : ''}`}
                  style={{ padding: '0.12rem 0.4rem', fontSize: '0.67rem' }}
                  onClick={() => setOct20Roman(preset)}
                >
                  {preset}
                </button>
              ))}
            </div>
            {computed.rInvalid ? (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--accent-flamingo)' }}>
                Use valid Roman letters (I, V, X, L, C, D, M)
              </div>
            ) : computed.rInt !== null && computed.rCalc ? (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                {oct20Roman.trim().toUpperCase()} = {computed.rInt} → {computed.rCalc.trace}
              </div>
            ) : null}
          </div>

          {/* Clue 4: Oct 23 Ringing Phone */}
          <div className="stat-tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span className="intel-cell-label" style={{ margin: 0, color: 'var(--accent-teal)' }}>
                4. Oct 23 — Ringing Phone
              </span>
              <span className="egg-index">
                Digit: {computed.d4 !== null ? computed.d4 : '—'}
              </span>
            </div>
            <label
              htmlFor="tl-oct23"
              style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}
            >
              Exact number of phone rings
            </label>
            <input
              id="tl-oct23"
              type="text"
              inputMode="numeric"
              maxLength={2}
              value={oct23Rings}
              onChange={(e) => setOct23Rings(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 5"
              className="search-input font-mono"
              style={{ padding: '0.48rem 0.7rem', fontSize: '0.88rem' }}
            />
          </div>

          {/* Clue 5: Oct 27 Vinyl Record Price */}
          <div className="stat-tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span className="intel-cell-label" style={{ margin: 0, color: 'var(--accent-teal)' }}>
                5. Oct 27 — Vinyl Record
              </span>
              <span className="egg-index">
                Digit: {computed.vCalc ? computed.vCalc.root : '—'}
              </span>
            </div>
            <label
              htmlFor="tl-oct27"
              style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}
            >
              Price tag digits (e.g. 85 or 50)
            </label>
            <input
              id="tl-oct27"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={oct27Vinyl}
              onChange={(e) => setOct27Vinyl(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 85"
              className="search-input font-mono"
              style={{ padding: '0.48rem 0.7rem', fontSize: '0.88rem' }}
            />
            {computed.vCalc && (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                Root: {computed.vCalc.trace}
              </div>
            )}
          </div>

          {/* Clue 6: Oct 30 Engine Greek Letter */}
          <div className="stat-tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span className="intel-cell-label" style={{ margin: 0, color: 'var(--accent-teal)' }}>
                6. Oct 30 — Engine Greek Letter
              </span>
              <span className="egg-index">
                Digit: {computed.d6 !== null ? computed.d6 : '—'}
              </span>
            </div>
            <div style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}>
              Select ending Greek letter (α=1 .. ε=5)
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {GREEK_OPTIONS.map((opt) => {
                const isSelected = oct30Greek === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    className={`filter-pill ${isSelected ? 'active' : ''}`}
                    style={{
                      flex: '1 1 42px',
                      justifyContent: 'center',
                      padding: '0.38rem 0.45rem',
                    }}
                    onClick={() => setOct30Greek(isSelected ? null : opt.value)}
                    title={`${opt.name} = ${opt.value}`}
                    aria-pressed={isSelected}
                  >
                    <span className="font-mono" style={{ fontSize: '0.92rem' }}>
                      {opt.symbol}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.68rem', opacity: 0.8 }}>
                      ={opt.value}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compact South Point Alien Dream 4-Bar Keypad Helper */}
      <section
        aria-label="South Point Alien Dream 4-Bar Keypad Helper"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--r-lg)',
          padding: '1.1rem 1.35rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
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
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.69rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-teal)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Radio size={13} />
              UFO Dream Console Helper • CV-10
            </div>
            <h3
              className="font-display"
              style={{ margin: '0.18rem 0 0', fontSize: '1.02rem', color: 'var(--text-primary)' }}
            >
              South Point Alien Dream 4-Bar Keypad Helper
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '1.12rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                padding: '0.3rem 0.72rem',
                borderRadius: 'var(--r-sm)',
                background: 'var(--accent-teal-soft)',
                border: '1px solid var(--border-teal)',
                color: 'var(--accent-teal)',
              }}
            >
              {alienCode}
            </span>
            <button
              type="button"
              className="utility-btn active-shield"
              onClick={() => onCopyText('South Point Bunker Keypad', alienCode)}
            >
              <Copy size={13} />
              Copy {alienCode}
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.6rem',
          }}
        >
          {alienBars.map((barCount, slotIdx) => (
            <div
              key={slotIdx}
              className="stat-tile"
              style={{
                padding: '0.65rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="intel-cell-label" style={{ margin: 0 }}>
                  Cluster #{slotIdx + 1}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--accent-teal)',
                    letterSpacing: '0.1em',
                  }}
                  aria-label={`${barCount} vertical bars`}
                >
                  {'|'.repeat(barCount)}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.24rem' }}>
                {[1, 2, 3, 4, 5, 6].map((n) => {
                  const active = barCount === n;
                  return (
                    <button
                      key={n}
                      type="button"
                      className={`filter-pill ${active ? 'active' : ''}`}
                      style={{
                        padding: '0.26rem 0',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                      }}
                      onClick={() => updateAlienBar(slotIdx, n)}
                      aria-label={`Set bar cluster ${slotIdx + 1} to ${n}`}
                      aria-pressed={active}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            flexWrap: 'wrap',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          <span>Count the vertical bars above the solar-system keypad from left to right.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
            <span>Common rolls:</span>
            {ALIEN_COMMON_CODES.map((preset) => {
              const label = preset.join('');
              return (
                <button
                  key={label}
                  type="button"
                  className={`region-chip font-mono ${alienCode === label ? 'active' : ''}`}
                  style={{ padding: '0.14rem 0.45rem', fontSize: '0.7rem' }}
                  onClick={() => setAlienBars(preset)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

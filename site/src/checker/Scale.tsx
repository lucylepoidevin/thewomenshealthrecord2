import type { Analyte, Range } from '../lib/types'
import { fmt, rangeText } from '../lib/format'
import { useWidth } from '../lib/useWidth'

const FEMALE = '#C2477A', MALE = '#8A7A2A', ACCENT = '#8B1E4B', INK = '#1C1A1B', INK2 = '#55504F', INK3 = '#827C7A'

/** Tick positions at a round step: about five across the axis. */
function ticks(lo: number, hi: number) {
  const raw = (hi - lo) / 5
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= raw) ?? raw
  const out: number[] = []
  for (let v = Math.ceil(lo / step - 1e-9) * step; v <= hi + step * 1e-6; v += step) out.push(Number(v.toPrecision(10)))
  return out
}

/** The axis range: the entry's default, widened to hold every interval and threshold shown for the selected sex, and the value entered. */
export function domain(a: Analyte, sex: 'female' | 'male', value?: number): [number, number] {
  let [lo, hi] = a.scale
  const lab = a.labRange[sex] ?? a.labRange.any
  const shown = [...(lab ?? []), ...(a.contested.band ?? []), a.sexSpecific.exists ? a.sexSpecific.female : null, a.sexSpecific.exists ? a.sexSpecific.male : null].filter((v): v is number => v !== null && v !== undefined)
  const top = Math.max(...shown, hi)
  if (top > hi) hi = top * 1.08
  const bottom = Math.min(...shown, lo)
  if (bottom < lo) lo = bottom >= 0 && bottom < (hi - lo) * 0.25 ? 0 : bottom
  // a value a little outside the axis extends it; a value far outside is drawn at the edge and labelled
  if (value !== undefined) {
    if (value > hi && value <= hi * 2.5) hi = value * 1.06
    if (value < lo && value >= 0) lo = Math.max(0, value - (hi - lo) * 0.06)
  }
  return [lo, hi]
}

/** Range plot. One row per quantity, so that no two labels share a line:
    laboratory reference interval · disputed interval · sex-specific thresholds · axis. The value entered is a vertical line through all rows. */
export default function Scale({ a, sex, value }: { a: Analyte; sex: 'female' | 'male'; value?: number }) {
  const { ref, w: W } = useWidth<HTMLDivElement>()
  const [lo, hi] = domain(a, sex, value)
  const L = 4, R = 4
  const x = (v: number) => L + ((Math.min(Math.max(v, lo), hi) - lo) / (hi - lo)) * (W - L - R)
  const lo_ = (r: Range) => r[0] ?? lo
  const hi_ = (r: Range) => r[1] ?? hi
  const lab = a.labRange[sex] ?? a.labRange.any
  const band = a.contested.band
  const sx = a.sexSpecific
  const f = sx.exists && sx.female !== null ? sx.female : null
  const m = sx.exists && sx.male !== null ? sx.male : null
  const who = sex === 'female' ? 'women' : 'men'

  // rows are laid out top to bottom; each takes 38px (13px label, 12px bar, spacing)
  let y = value !== undefined ? 30 : 8
  const rows: { key: string; label: string; top: number }[] = []
  const row = (key: string, label: string) => { rows.push({ key, label, top: y }); y += 38 }
  if (lab) row('lab', `Laboratory reference interval, ${who}: ${rangeText(lab)}`)
  if (band) row('band', `Disputed interval: ${rangeText(band)}`)
  if (f !== null || m !== null) row('thr', `Sex-specific threshold${f !== null && m !== null ? 's' : ''}: ${[f !== null ? `women ${fmt(f)}` : null, m !== null ? `men ${fmt(m)}` : null].filter(Boolean).join(', ')}`)
  const axisY = y + 4
  const H = axisY + 34
  const top = (k: string) => rows.find(r => r.key === k)!.top
  const off = value !== undefined && (value < lo || value > hi)
  const vx = value !== undefined ? x(value) : 0
  const anchor = (px: number): 'start' | 'middle' | 'end' => px < 70 ? 'start' : px > W - 70 ? 'end' : 'middle'
  const tk = ticks(lo, hi)

  return (
    <div ref={ref} className="w-full">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block" role="img" aria-label={`${a.name}: laboratory reference interval, disputed interval and sex-specific thresholds${value !== undefined ? `, with the value ${fmt(value)} ${a.canonicalUnit}` : ''}`}>
        <defs>
          <pattern id={`hatch-${a.id}`} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke={ACCENT} strokeWidth="1.4" />
          </pattern>
        </defs>
        {rows.map(r => <rect key={r.key} x={L} y={r.top + 17} width={W - L - R} height={12} fill="#F4F2EF" />)}
        {lab && <rect x={x(lo_(lab))} y={top('lab') + 17} width={Math.max(2, x(hi_(lab)) - x(lo_(lab)))} height={12} fill="#9A9390" />}
        {band && <>
          <rect x={x(lo_(band))} y={top('band') + 17} width={Math.max(2, x(hi_(band)) - x(lo_(band)))} height={12} fill="#fff" />
          <rect x={x(lo_(band))} y={top('band') + 17} width={Math.max(2, x(hi_(band)) - x(lo_(band)))} height={12} fill={`url(#hatch-${a.id})`} stroke={ACCENT} strokeWidth="1" />
        </>}
        {f !== null && <rect x={x(f) - 1.5} y={top('thr') + 14} width={3} height={18} fill={FEMALE} />}
        {m !== null && <rect x={x(m) - 1.5} y={top('thr') + 14} width={3} height={18} fill={MALE} />}
        {/* legend swatches inside the threshold label are not needed: women is drawn in rose, men in bronze, named in the caption */}
        <line x1={L} x2={W - R} y1={axisY} y2={axisY} stroke={INK} strokeWidth="1" />
        {tk.map((t, i) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={axisY} y2={axisY + 5} stroke={INK} strokeWidth="1" />
            <text x={x(t)} y={axisY + 18} fontSize="11.5" fill={INK2} textAnchor={i === 0 && x(t) < 14 ? 'start' : x(t) > W - 14 ? 'end' : 'middle'}>{fmt(t)}</text>
          </g>
        ))}
        <text x={W - R} y={axisY + 31} fontSize="11.5" fill={INK3} textAnchor="end">{a.canonicalUnit}</text>
        {value !== undefined && <line x1={vx} x2={vx} y1={20} y2={axisY} stroke={ACCENT} strokeWidth="2" />}
        {rows.map(r => <text key={r.key} x={L} y={r.top + 10} fontSize="12" fill={INK2} stroke="#fff" strokeWidth="5" strokeLinejoin="round" paintOrder="stroke">{r.label}</text>)}
        {value !== undefined && <g>
          <text x={vx} y={13} fontSize="13" fontWeight="600" fill={ACCENT} textAnchor={anchor(vx)}>{fmt(value)} {a.canonicalUnit}{off ? (value > hi ? ' (beyond the axis)' : ' (below the axis)') : ''}</text>
        </g>}
        {(f !== null || m !== null) && <text x={L} y={axisY + 31} fontSize="11.5" fill={INK3}>
          {f !== null && <><tspan fill={FEMALE}>▮</tspan> women{m !== null ? '  ' : ''}</>}{m !== null && <><tspan fill={MALE}> ▮</tspan> men</>}
        </text>}
      </svg>
    </div>
  )
}

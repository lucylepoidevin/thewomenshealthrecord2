import type { Analyte, Range } from '../lib/types'
import { fmt, rangeText } from '../lib/format'
import { useWidth } from '../lib/useWidth'

/** One horizontal scale: lab range as a grey band, contested band hatched, sex-specific thresholds as ticks, the reader's value as a marker.
    Rows, top to bottom: contested caption · threshold labels · the bar · range limits · range caption · the value. */
export default function Scale({ a, sex, value }: { a: Analyte; sex: 'female' | 'male'; value?: number }) {
  const lo = a.scale[0] as number, hi = a.scale[1] as number
  const lo_ = (r: Range) => r[0] ?? lo
  const hi_ = (r: Range) => r[1] ?? hi
  const { ref, w } = useWidth<HTMLDivElement>()
  const W = w, H = 118, L = 16, R = 16, y = 52
  const x = (v: number) => L + ((Math.min(Math.max(v, lo), hi) - lo) / (hi - lo)) * (W - L - R)
  const lab = a.labRange[sex] ?? a.labRange.any
  const band = a.contested.band
  const sx = a.sexSpecific
  const clipped = value !== undefined && (value < lo || value > hi)
  const f = sx.exists && sx.female !== null ? x(sx.female) : null
  const m = sx.exists && sx.male !== null ? x(sx.male) : null
  const close = f !== null && m !== null && Math.abs(f - m) < 56
  const near = (p: number, q: number) => Math.abs(p - q) < 24
  /** Labels anchor away from the edges so they are never clipped. */
  const anchor = (px: number, fallback: 'start' | 'middle' | 'end'): 'start' | 'middle' | 'end' => px < L + 36 ? 'start' : px > W - R - 36 ? 'end' : fallback
  return (
    <div ref={ref} className="w-full">
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block" role="img" aria-label={`${a.name} scale`}>
      <defs>
        <pattern id={`hatch-${a.id}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#E05A8A" strokeWidth="1.5" opacity="0.55" />
        </pattern>
      </defs>
      <line x1={L} x2={W - R} y1={y} y2={y} stroke="#EBD5DC" strokeWidth="1" />
      {lab && <rect x={x(lo_(lab))} y={y - 10} width={Math.max(1, x(hi_(lab)) - x(lo_(lab)))} height={20} fill="#EBD5DC" />}
      {band && <rect x={x(lo_(band))} y={y - 10} width={Math.max(1, x(hi_(band)) - x(lo_(band)))} height={20} fill={`url(#hatch-${a.id})`} />}
      {band && <text x={(x(lo_(band)) + x(hi_(band))) / 2} y={y - 30} fontSize="11" fill="#8B1E4B" textAnchor={anchor((x(lo_(band)) + x(hi_(band))) / 2, 'middle')}>contested {rangeText(band)}</text>}
      {f !== null && <g>
        <line x1={f} x2={f} y1={y - 14} y2={y + 14} stroke="#E05A8A" strokeWidth="2" />
        <text x={close && m !== null && f < m ? f - 4 : close ? f + 4 : f} y={y - 17} fontSize="10" fill="#E05A8A" textAnchor={anchor(f, close && m !== null ? (f < m ? 'end' : 'start') : 'middle')}>women {fmt(sx.female!)}</text>
      </g>}
      {m !== null && <g>
        <line x1={m} x2={m} y1={y - 14} y2={y + 14} stroke="#8A7A2A" strokeWidth="2" />
        <text x={close && f !== null && m < f ? m - 4 : close ? m + 4 : m} y={y - 17} fontSize="10" fill="#8A7A2A" textAnchor={anchor(m, close && f !== null ? (m < f ? 'end' : 'start') : 'middle')}>men {fmt(sx.male!)}</text>
      </g>}
      {lab && lab[0] !== null && <text x={x(lab[0])} y={y + 26} fontSize="11" fill="#5E4F58" textAnchor="middle">{fmt(lab[0])}</text>}
      {lab && lab[1] !== null && <text x={x(lab[1])} y={y + 26} fontSize="11" fill="#5E4F58" textAnchor="middle">{fmt(lab[1])}</text>}
      {lab && <text x={(x(lo_(lab)) + x(hi_(lab))) / 2} y={y + 40} fontSize="11" fill="#8C7A84" textAnchor="middle">laboratory range, {sex === 'female' ? 'women' : 'men'}</text>}
      {!(lab && lab[0] !== null && near(x(lab[0]), L)) && <text x={L} y={y + 26} fontSize="10" fill="#8C7A84" textAnchor="start">{fmt(lo)}</text>}
      {!(lab && lab[1] !== null && near(x(lab[1]), W - R)) && <text x={W - R} y={y + 26} fontSize="10" fill="#8C7A84" textAnchor="end">{fmt(hi)}</text>}
      {value !== undefined && <g>
        <line x1={x(value)} x2={x(value)} y1={y - 12} y2={y + 12} stroke="#8B1E4B" strokeWidth="2" />
        <polygon points={`${x(value) - 6},${y + 50} ${x(value) + 6},${y + 50} ${x(value)},${y + 43}`} fill="#8B1E4B" />
        <text x={x(value)} y={y + 63} fontSize="12" fontWeight="700" fill="#8B1E4B" textAnchor={anchor(x(value), 'middle')}>{clipped ? (value < lo ? 'below the scale, ' : 'above the scale, ') : ''}{fmt(value)} {a.canonicalUnit}</text>
      </g>}
    </svg>
    </div>
  )
}

import { Link } from 'react-router-dom'
import type { Analyte } from '../lib/types'
import { fmt, rangeText, inRange } from '../lib/format'
import Scale from './Scale'
import Cited from '../components/Cited'
import SourceList from '../components/SourceList'

const conf = { high: 'well documented', medium: 'partly documented', low: 'thinly documented' }

/** Where the value sits, stated as positions only: inside or outside the lab range, inside or outside the contested band. */
export function position(a: Analyte, sex: 'female' | 'male', v: number) {
  const lab = a.labRange[sex] ?? a.labRange.any
  const band = a.contested.band
  const parts: string[] = []
  const who = sex === 'female' ? 'women' : 'men'
  if (lab) parts.push(lab[0] !== null && v < lab[0] ? `Below the laboratory's range for ${who} (${rangeText(lab)} ${a.canonicalUnit}).` : lab[1] !== null && v > lab[1] ? `Above the laboratory's range for ${who} (${rangeText(lab)} ${a.canonicalUnit}).` : `Inside the laboratory's range for ${who} (${rangeText(lab)} ${a.canonicalUnit}).`)
  if (band) parts.push(inRange(band, v) ? `Inside the contested band (${rangeText(band)}).` : `Outside the contested band (${rangeText(band)}).`)
  const sx = a.sexSpecific
  if (sx.exists && sx.female !== null && sx.male !== null && sex === 'female') {
    const lowF = v > sx.female, lowM = v > sx.male
    if (lowF !== lowM) parts.push(`${lowF ? 'Above' : 'Below'} the threshold set for women (${fmt(sx.female)}) and ${lowM ? 'above' : 'below'} the one set for men (${fmt(sx.male)}): the two thresholds classify this value differently.`)
  }
  return parts
}

export default function ResultCard({ a, sex, value, unit, full = false, onRemove }: { a: Analyte; sex: 'female' | 'male'; value?: number; unit?: string; full?: boolean; onRemove?: () => void }) {
  const u = unit ? a.units.find(x => x.unit === unit) : undefined
  const canonical = value !== undefined ? value * (u?.toCanonical ?? 1) + (u?.offset ?? 0) : undefined
  const anchor = `src-${a.id}`
  const inBand = canonical !== undefined && a.contested.band ? inRange(a.contested.band, canonical) : false
  return (
    <article className="graphic-card p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="display text-xl sm:text-2xl font-medium leading-tight">{full ? a.name : <Link to={`/analyte/${a.id}`} className="hover:text-berry">{a.name}</Link>}</h3>
        <div className="flex items-center gap-3 text-sm text-ink-2">
          {canonical !== undefined && <span className="tabular-nums"><span className="font-semibold text-ink">{fmt(value!)} {unit}</span>{unit !== a.canonicalUnit && <span className="text-ink-3"> = {fmt(canonical)} {a.canonicalUnit}</span>}</span>}
          <span className="tag">{conf[a.confidence]}</span>
          {onRemove && <button type="button" onClick={onRemove} className="text-ink-3 hover:text-berry" aria-label={`Remove ${a.name}`}>remove</button>}
        </div>
      </div>
      <div className="mt-3"><Scale a={a} sex={sex} value={canonical} /></div>
      {canonical !== undefined && (
        <p className="mt-1 text-[15px] leading-relaxed text-ink">{position(a, sex, canonical).join(' ')}</p>
      )}
      <dl className="mt-5 grid gap-4 sm:grid-cols-[10rem_1fr] text-[15px] leading-relaxed">
        <dt className="eyebrow pt-0.5">Where the range came from</dt>
        <dd className="text-ink"><Cited text={a.origin} sources={a.sources} anchor={anchor} /></dd>
        <dt className="eyebrow pt-0.5">Sex-specific threshold</dt>
        <dd className="text-ink">{a.sexSpecific.exists ? <>{a.sexSpecific.what}{a.sexSpecific.female !== null && a.sexSpecific.male !== null ? ` Women ${fmt(a.sexSpecific.female)}, men ${fmt(a.sexSpecific.male)} ${a.canonicalUnit}.` : ''} <Cited text={a.sexSpecific.source} sources={a.sources} anchor={anchor} /></> : <>None in current guidelines. <Cited text={a.sexSpecific.source} sources={a.sources} anchor={anchor} /></>}</dd>
        <dt className="eyebrow pt-0.5">What is contested</dt>
        <dd className="text-ink"><Cited text={a.contested.summary} sources={a.sources} anchor={anchor} /></dd>
        <dt className="eyebrow pt-0.5">{inBand ? 'Guidance for a value in this band' : 'Guidance for a value in the band'}</dt>
        <dd className="text-ink"><Cited text={a.guidanceInBand} sources={a.sources} anchor={anchor} /></dd>
      </dl>
      <div className="mt-5 pt-4 border-t border-hairline">
        <p className="eyebrow mb-2">Sources</p>
        <SourceList sources={a.sources} anchor={anchor} />
      </div>
      {!full && <p className="mt-3 text-[13px]"><Link to={`/analyte/${a.id}`} className="text-berry underline underline-offset-2">Full entry for {a.short}</Link></p>}
    </article>
  )
}

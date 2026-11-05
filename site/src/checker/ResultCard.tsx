import { Link } from 'react-router-dom'
import type { Analyte } from '../lib/types'
import { fmt, rangeText, inRange, GRADE, GRADE_TITLE } from '../lib/format'
import Scale from './Scale'
import Cited from '../components/Cited'
import SourceList from '../components/SourceList'

/** The position of a value, stated as positions only: relative to the laboratory reference interval, the disputed interval and the sex-specific thresholds. */
export function position(a: Analyte, sex: 'female' | 'male', v: number) {
  const lab = a.labRange[sex] ?? a.labRange.any
  const band = a.contested.band
  const who = sex === 'female' ? 'women' : 'men'
  const u = a.canonicalUnit
  const parts: string[] = []
  if (lab) parts.push(`The value lies ${lab[0] !== null && v < lab[0] ? 'below' : lab[1] !== null && v > lab[1] ? 'above' : 'within'} the laboratory reference interval for ${who} (${rangeText(lab)} ${u}).`)
  if (band) parts.push(`It lies ${inRange(band, v) ? 'within' : 'outside'} the disputed interval (${rangeText(band)} ${u}).`)
  const sx = a.sexSpecific
  if (sx.exists && sx.female !== null && sx.male !== null) {
    const overF = v > sx.female, overM = v > sx.male
    if (overF !== overM) parts.push(`It is ${overF ? 'above' : 'at or below'} the threshold for women (${fmt(sx.female)} ${u}) and ${overM ? 'above' : 'at or below'} the threshold for men (${fmt(sx.male)} ${u}); the two thresholds classify the value differently.`)
  }
  return parts
}

export default function ResultCard({ a, sex, value, unit, full = false, figure, onRemove }: { a: Analyte; sex: 'female' | 'male'; value?: number; unit?: string; full?: boolean; figure?: number; onRemove?: () => void }) {
  const u = unit ? a.units.find(x => x.unit === unit) : undefined
  const canonical = value !== undefined ? value * (u?.toCanonical ?? 1) + (u?.offset ?? 0) : undefined
  const anchor = `ref-${a.id}`
  const sx = a.sexSpecific
  return (
    <article data-testid="result" data-analyte={a.id} data-canonical={canonical ?? ''} className="border-t-[1.5px] border-rule-strong pt-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
        <h3 className="text-[1.35rem] sm:text-2xl leading-tight">{full ? a.name : <Link to={`/analyte/${a.id}`} className="hover:text-accent">{a.name}</Link>}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {canonical !== undefined && <span className="mono text-[15px]"><span className="font-medium">{fmt(value!)} {unit}</span>{unit !== a.canonicalUnit && <span className="text-ink-3"> = {fmt(canonical)} {a.canonicalUnit}</span>}</span>}
          <span className="grade" title={GRADE_TITLE[a.confidence]}>{GRADE[a.confidence]}</span>
          {onRemove && <button type="button" data-testid="remove" onClick={onRemove} className="textbtn" aria-label={`Remove ${a.name}`}>Remove</button>}
        </div>
      </div>

      <figure className="mt-4">
        <Scale a={a} sex={sex} value={canonical} />
        <figcaption className="caption mt-2">
          <b>Figure{figure ? ` ${figure}` : ''}.</b> {a.short}{canonical !== undefined ? `, ${fmt(canonical)} ${a.canonicalUnit}, sex recorded as ${sex}.` : `: intervals and thresholds for ${sex === 'female' ? 'women' : 'men'}, in ${a.canonicalUnit}.`}{' '}
          {canonical !== undefined && <span data-testid="position" className="text-ink">{position(a, sex, canonical).join(' ')}</span>}
        </figcaption>
      </figure>

      {a.note && <p className="caption mt-3">Note. {a.note}</p>}

      <dl className="entry mt-5">
        <div><dt>Derivation of the reference interval</dt><dd><Cited text={a.origin} sources={a.sources} anchor={anchor} /></dd></div>
        <div><dt>Sex-specific threshold</dt><dd><Cited text={(sx.what || 'None identified in the guidelines consulted.').replace(/\s+$/, '') + (/\[[A-Z]+\d/.test(sx.what) || !sx.source ? '' : ` ${sx.source}`)} sources={a.sources} anchor={anchor} /></dd></div>
        <div><dt>Published evidence on the limit applied to women</dt><dd><Cited text={a.contested.summary} sources={a.sources} anchor={anchor} /></dd></div>
        <div><dt>Guideline statements</dt><dd><Cited text={a.guidanceInBand} sources={a.sources} anchor={anchor} /></dd></div>
      </dl>

      <div className="mt-5">
        <h4 className="label mb-2" style={{ fontFamily: 'var(--font-sans)' }}>References</h4>
        <SourceList sources={a.sources} anchor={anchor} />
      </div>
      {!full && <p className="mt-3 text-[13.5px]"><Link to={`/analyte/${a.id}`} className="link">Entry for {a.short}</Link></p>}
    </article>
  )
}

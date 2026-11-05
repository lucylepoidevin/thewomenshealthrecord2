import { Link } from 'react-router-dom'
import { useAnalytes } from '../lib/data'
import { fmt, rangeText, GRADE } from '../lib/format'

export default function Analytes() {
  const { data, error } = useAnalytes()
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <header className="max-w-[46rem]">
        <p className="meta">Table of intervals</p>
        <h1 className="mt-1.5 text-[1.6rem] sm:text-[2rem] leading-[1.2]">Laboratory reference intervals, sex-specific thresholds and disputed intervals, by test</h1>
      </header>
      {error && <p className="meta mt-6 text-accent">The table could not be loaded ({error}).</p>}
      {data && (
        <figure className="mt-8">
          <figcaption className="caption mb-2"><b>Table 1.</b> Values for non-pregnant adults in the unit shown. Reference intervals are those of the laboratory named in each entry. The sex-specific threshold is a decision threshold that differs by sex in a current guideline or assay specification. The disputed interval lies between the laboratory limit and the limit supported by the published evidence cited in the entry. A dash indicates that none was identified.</figcaption>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Unit</th>
                  <th>Reference interval, women</th>
                  <th>Reference interval, men</th>
                  <th>Sex-specific threshold<br /><span className="font-normal text-ink-3">women / men</span></th>
                  <th>Disputed interval</th>
                  <th>Documentation</th>
                </tr>
              </thead>
              <tbody>
                {data.analytes.map(a => {
                  const f = a.labRange.female ?? a.labRange.any, m = a.labRange.male ?? a.labRange.any
                  const sx = a.sexSpecific
                  return (
                    <tr key={a.id}>
                      <td><Link to={`/analyte/${a.id}`} className="link">{a.short}</Link><div className="text-[12px] text-ink-3">{a.group}</div></td>
                      <td className="mono text-[13px] text-ink-2">{a.canonicalUnit}</td>
                      <td className="mono text-[13px]">{f ? rangeText(f) : '–'}</td>
                      <td className="mono text-[13px]">{m ? rangeText(m) : '–'}</td>
                      <td className="mono text-[13px]">{sx.exists && sx.female !== null && sx.male !== null ? `${fmt(sx.female)} / ${fmt(sx.male)}` : sx.exists ? <span className="font-sans text-ink-2">see entry</span> : '–'}</td>
                      <td className="mono text-[13px]">{a.contested.band ? rangeText(a.contested.band) : '–'}</td>
                      <td className="text-ink-2 text-[13px]">{GRADE[a.confidence].replace('Documentation: ', '')}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="caption mt-2">Table compiled {data.generated}. Documentation grades are defined in <Link to="/methods" className="link">Methods</Link>.</p>
        </figure>
      )}
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useAnalytes } from '../lib/data'
import { fmt, rangeText } from '../lib/format'

export default function Analytes() {
  const { data, error } = useAnalytes()
  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 pb-16">
      <header className="max-w-[42rem]">
        <p className="eyebrow">The ranges</p>
        <h1 className="display mt-2 text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">Every test in the table, with its laboratory range, sex-specific threshold and contested band</h1>
        <p className="mt-4 text-[17px] text-ink-2 leading-relaxed">Values in the unit each laboratory reports. The contested band is the interval where published studies or guidelines disagree with the laboratory range for women.</p>
      </header>
      {error && <p className="mt-6 text-sm text-berry">Could not load the table: {error}</p>}
      {data && (
        <div className="table-wrap mt-8">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="text-[12px] font-semibold text-ink-3 text-left">
                <th className="py-2 pr-4">Test</th>
                <th className="py-2 pr-4">Unit</th>
                <th className="py-2 pr-4">Lab range, women</th>
                <th className="py-2 pr-4">Lab range, men</th>
                <th className="py-2 pr-4">Sex-specific threshold</th>
                <th className="py-2 pr-4">Contested band</th>
                <th className="py-2">Documentation</th>
              </tr>
            </thead>
            <tbody>
              {data.analytes.map(a => {
                const f = a.labRange.female ?? a.labRange.any, m = a.labRange.male ?? a.labRange.any
                return (
                  <tr key={a.id} className="border-t border-hairline/70 align-top">
                    <td className="py-2.5 pr-4"><Link to={`/analyte/${a.id}`} className="text-berry underline underline-offset-2">{a.name}</Link><div className="text-[11px] text-ink-3">{a.group}</div></td>
                    <td className="py-2.5 pr-4 text-ink-2">{a.canonicalUnit}</td>
                    <td className="py-2.5 pr-4 tabular-nums">{f ? rangeText(f) : '—'}</td>
                    <td className="py-2.5 pr-4 tabular-nums">{m ? rangeText(m) : '—'}</td>
                    <td className="py-2.5 pr-4 tabular-nums">{a.sexSpecific.exists ? (a.sexSpecific.female !== null && a.sexSpecific.male !== null ? `F ${fmt(a.sexSpecific.female)} / M ${fmt(a.sexSpecific.male)}` : 'yes') : 'none'}</td>
                    <td className="py-2.5 pr-4 tabular-nums">{a.contested.band ? rangeText(a.contested.band) : '—'}</td>
                    <td className="py-2.5 text-ink-2">{a.confidence === 'high' ? 'well documented' : a.confidence === 'medium' ? 'partly documented' : 'thinly documented'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

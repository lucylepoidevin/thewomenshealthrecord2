import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAnalytes } from '../lib/data'
import ResultCard from '../checker/ResultCard'
import type { Sex } from '../checker/Checker'

export default function AnalytePage() {
  const { id } = useParams()
  const { data, error } = useAnalytes()
  const [sex, setSex] = useState<Sex>('female')
  const [val, setVal] = useState('')
  const [unit, setUnit] = useState<string | null>(null)
  const a = data?.analytes.find(x => x.id === id)
  if (error) return <p className="mx-auto max-w-3xl px-4 pt-14 text-sm text-berry">Could not load the table: {error}</p>
  if (!data) return <p className="mx-auto max-w-3xl px-4 pt-14 text-sm text-ink-3">Loading…</p>
  if (!a) return <p className="mx-auto max-w-3xl px-4 pt-14 text-[15px]">No entry with that name. <Link to="/analytes" className="text-berry underline underline-offset-2">All tests</Link>.</p>
  const v = parseFloat(val.replace(',', '.'))
  const u = unit ?? a.canonicalUnit
  return (
    <div className="mx-auto max-w-4xl px-4 pt-14 pb-16">
      <p className="eyebrow"><Link to="/analytes" className="hover:text-berry">The ranges</Link> · {a.group}</p>
      <h1 className="display mt-2 text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">{a.name}</h1>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-[14px]">
        <span className="eyebrow">Enter a value</span>
        <input value={val} onChange={e => setVal(e.target.value)} inputMode="decimal" className="ctl w-28" placeholder="value" aria-label="Value" />
        <select value={u} onChange={e => setUnit(e.target.value)} className="ctl" aria-label="Unit">{a.units.map(x => <option key={x.unit} value={x.unit}>{x.unit}</option>)}</select>
        <span className="flex gap-3 ml-2">
          {(['female', 'male'] as Sex[]).map(s => <label key={s} className="flex items-center gap-1.5 cursor-pointer"><input type="radio" name="sex" checked={sex === s} onChange={() => setSex(s)} className="accent-[#8B1E4B]" />{s === 'female' ? 'Female' : 'Male'}</label>)}
        </span>
      </div>
      <div className="mt-6"><ResultCard a={a} sex={sex} value={Number.isFinite(v) ? v : undefined} unit={u} full /></div>
    </div>
  )
}

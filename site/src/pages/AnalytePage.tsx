import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAnalytes } from '../lib/data'
import ResultCard from '../checker/ResultCard'
import NotFound from './NotFound'
import type { Sex } from '../checker/Checker'

export default function AnalytePage() {
  const { id } = useParams()
  const { data, error } = useAnalytes()
  const [sex, setSex] = useState<Sex>('female')
  const [val, setVal] = useState('')
  const [unit, setUnit] = useState<string | null>(null)
  const a = data?.analytes.find(x => x.id === id)
  if (error) return <p className="mx-auto max-w-5xl px-5 pt-12 meta text-accent">The table could not be loaded ({error}).</p>
  if (!data) return <p className="mx-auto max-w-5xl px-5 pt-12 meta">Loading the reference table.</p>
  if (!a) return <NotFound what="No test with that identifier is in the table." />
  const v = parseFloat(val.replace(',', '.'))
  const u = unit ?? a.canonicalUnit
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <p className="meta"><Link to="/analytes" className="link">Table of intervals</Link> · {a.group}</p>
      <div className="mt-6 border border-rule bg-panel p-4 flex flex-wrap items-center gap-x-4 gap-y-3">
        <label className="label" htmlFor="value">Value for comparison</label>
        <input id="value" value={val} onChange={e => setVal(e.target.value)} inputMode="decimal" className="ctl mono w-24" placeholder="Value" aria-label="Value" />
        <select value={u} onChange={e => setUnit(e.target.value)} className="ctl" aria-label="Unit">{a.units.map(x => <option key={x.unit} value={x.unit}>{x.unit}</option>)}</select>
        <fieldset className="flex items-center gap-4 text-[15px]">
          <legend className="sr-only">Sex recorded on the laboratory report</legend>
          {(['female', 'male'] as Sex[]).map(s => <label key={s} className="flex items-center gap-1.5 cursor-pointer"><input type="radio" name="sex" value={s} checked={sex === s} onChange={() => setSex(s)} className="accent-[#8B1E4B]" />{s === 'female' ? 'Female' : 'Male'}</label>)}
        </fieldset>
      </div>
      <div className="mt-8">
        <h1 className="sr-only">{a.name}</h1>
        <ResultCard a={a} sex={sex} value={Number.isFinite(v) && v >= 0 ? v : undefined} unit={u} full />
      </div>
    </div>
  )
}

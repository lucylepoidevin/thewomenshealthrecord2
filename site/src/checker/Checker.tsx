import { useMemo, useState } from 'react'
import type { Analyte } from '../lib/types'
import { parseResults, type Entry } from './parse'
import ResultCard from './ResultCard'

export type Sex = 'female' | 'male'

export default function Checker({ analytes }: { analytes: Analyte[] }) {
  const [sex, setSex] = useState<Sex>('female')
  const [text, setText] = useState('')
  const [entries, setEntries] = useState<Entry[]>([])
  const [pick, setPick] = useState(analytes[0]?.id ?? '')
  const [val, setVal] = useState('')
  const [unit, setUnit] = useState(analytes[0]?.canonicalUnit ?? '')
  const [note, setNote] = useState<string | null>(null)
  const byId = useMemo(() => Object.fromEntries(analytes.map(a => [a.id, a])), [analytes])
  const picked = byId[pick]

  function addParsed() {
    const found = parseResults(text, analytes)
    if (found.length === 0) { setNote('No test name recognised. Each line needs a test name followed by a number, for example "Ferritin 22 ng/mL".'); return }
    const lines = text.split(/\n|;/).map(l => l.trim()).filter(Boolean).length
    setNote(found.length < lines ? `${found.length} of ${lines} lines recognised. The rest name tests the table does not yet cover, or have no number after the name.` : null)
    setEntries(e => [...found, ...e])
    setText('')
  }
  function addOne() {
    const v = parseFloat(val.replace(',', '.'))
    if (!picked || !Number.isFinite(v)) return
    setEntries(e => [{ key: `${picked.id}-${Date.now()}`, analyteId: picked.id, value: v, unit }, ...e])
    setVal('')
  }
  function choose(id: string) { setPick(id); setUnit(byId[id]?.canonicalUnit ?? '') }

  return (
    <section id="checker" className="mx-auto max-w-6xl px-4 pt-4">
      <div className="graphic-card p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <label htmlFor="paste" className="eyebrow block">Paste result lines</label>
            <textarea id="paste" value={text} onChange={e => setText(e.target.value)} rows={5} className="ctl mt-2 w-full font-mono text-[13px]" placeholder={'Ferritin 22 ng/mL\nHaemoglobin 11.9 g/dL\nTSH 4.2\nALT 34 U/L'} spellCheck={false} />
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button type="button" className="btn btn-solid" onClick={addParsed} disabled={!text.trim()}>Read the lines</button>
              <span className="text-[13px] text-ink-3">One test per line: name, then the number, then the unit if the report gives one.</span>
            </div>
            {note && <p className="mt-2 text-[13px] text-ink-2">{note}</p>}
          </div>
          <div>
            <p className="eyebrow">Or add one test</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <select value={pick} onChange={e => choose(e.target.value)} className="ctl min-w-[12rem]" aria-label="Test">
                {analytes.map(a => <option key={a.id} value={a.id}>{a.short}</option>)}
              </select>
              <input value={val} onChange={e => setVal(e.target.value)} inputMode="decimal" className="ctl w-28" placeholder="value" aria-label="Value" onKeyDown={e => { if (e.key === 'Enter') addOne() }} />
              <select value={unit} onChange={e => setUnit(e.target.value)} className="ctl" aria-label="Unit">
                {picked?.units.map(u => <option key={u.unit} value={u.unit}>{u.unit}</option>)}
              </select>
              <button type="button" className="btn" onClick={addOne} disabled={!val.trim()}>Add</button>
            </div>
            <div className="mt-5">
              <p className="eyebrow">Sex recorded on the report</p>
              <div className="mt-2 flex gap-4 text-[15px]">
                {(['female', 'male'] as Sex[]).map(s => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer"><input type="radio" name="sex" checked={sex === s} onChange={() => setSex(s)} className="accent-[#8B1E4B]" /> {s === 'female' ? 'Female' : 'Male'}</label>
                ))}
              </div>
              <p className="mt-2 text-[13px] text-ink-3">The laboratory range shown is the one labs apply to that sex. Nothing entered here leaves the browser.</p>
            </div>
          </div>
        </div>
      </div>

      {entries.length > 0 && (
        <div className="mt-6 space-y-5">
          <div className="flex items-baseline justify-between">
            <h2 className="display text-2xl font-medium">{entries.length === 1 ? 'One result' : `${entries.length} results`}</h2>
            <button type="button" className="text-[13px] text-ink-3 hover:text-berry" onClick={() => setEntries([])}>Clear all</button>
          </div>
          {entries.map(e => byId[e.analyteId] && (
            <ResultCard key={e.key} a={byId[e.analyteId]} sex={sex} value={e.value} unit={e.unit} onRemove={() => setEntries(x => x.filter(y => y.key !== e.key))} />
          ))}
          <p className="text-[13px] text-ink-3">Positions on a scale, not interpretations. A value inside or outside any band here is a reason to read the sources and to ask, not a diagnosis.</p>
        </div>
      )}
    </section>
  )
}

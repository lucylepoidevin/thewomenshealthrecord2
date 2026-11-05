import { useMemo, useState } from 'react'
import type { Analyte } from '../lib/types'
import { parseResults, type Entry } from './parse'
import ResultCard from './ResultCard'

export type Sex = 'female' | 'male'

/** The comparison tool: entries are read in the browser and each is placed against its documented intervals. */
export default function Checker({ analytes }: { analytes: Analyte[] }) {
  const [sex, setSex] = useState<Sex>('female')
  const [text, setText] = useState('')
  const [entries, setEntries] = useState<Entry[]>([])
  const [pick, setPick] = useState(analytes[0]?.id ?? '')
  const [val, setVal] = useState('')
  const [unit, setUnit] = useState(analytes[0]?.canonicalUnit ?? '')
  const [note, setNote] = useState<string | null>(null)
  const byId = useMemo(() => Object.fromEntries(analytes.map(a => [a.id, a])), [analytes])
  const groups = useMemo(() => [...new Set(analytes.map(a => a.group))], [analytes])
  const picked = byId[pick]

  function addParsed() {
    const { entries: found, lines } = parseResults(text, analytes)
    if (found.length === 0) { setNote(`0 of ${lines} ${lines === 1 ? 'line' : 'lines'} read. Each line requires the name of a test in the table followed by a numerical value, for example: Ferritin 22 ng/mL.`); return }
    setNote(found.length < lines ? `${found.length} of ${lines} lines read. The remaining lines name a test that is not in the table, a derived quantity such as a ratio, or carry no numerical value after the name.` : null)
    setEntries(e => [...e, ...found])
    setText('')
  }
  function addOne() {
    const v = parseFloat(val.replace(',', '.'))
    if (!picked || !Number.isFinite(v) || v < 0) return
    setEntries(e => [...e, { key: `${picked.id}-${Date.now()}`, analyteId: picked.id, value: v, unit }])
    setVal('')
  }
  function choose(id: string) { setPick(id); setUnit(byId[id]?.canonicalUnit ?? '') }

  return (
    <div id="checker">
      <div className="border border-rule bg-panel p-4 sm:p-6">
        <div className="grid gap-x-10 gap-y-6 lg:grid-cols-2">
          <div>
            <label htmlFor="paste" className="label block">Results, one per line</label>
            <textarea id="paste" value={text} onChange={e => setText(e.target.value)} rows={5} className="ctl mt-1.5 w-full" placeholder={'Ferritin 22 ng/mL\nHaemoglobin 11.9 g/dL\nTSH 4.2 mIU/L\nALT 34 U/L'} spellCheck={false} />
            <p className="meta mt-1.5">Format: name of the test, value, unit. Where no unit is given, the unit of the table is assumed. Reference intervals printed in brackets are ignored.</p>
            <div className="mt-3"><button type="button" data-testid="read-lines" className="btn btn-primary" onClick={addParsed} disabled={!text.trim()}>Compare</button></div>
            {note && <p data-testid="parse-note" className="meta mt-2 text-ink-2" role="status">{note}</p>}
          </div>
          <div>
            <p className="label">Single result</p>
            <div className="mt-1.5 flex flex-wrap gap-2">
              <select value={pick} onChange={e => choose(e.target.value)} className="ctl min-w-[13rem] flex-1" aria-label="Test">
                {groups.map(g => <optgroup key={g} label={g}>{analytes.filter(a => a.group === g).map(a => <option key={a.id} value={a.id}>{a.short}</option>)}</optgroup>)}
              </select>
              <input value={val} onChange={e => setVal(e.target.value)} inputMode="decimal" className="ctl mono w-24" placeholder="Value" aria-label="Value" onKeyDown={e => { if (e.key === 'Enter') addOne() }} />
              <select value={unit} onChange={e => setUnit(e.target.value)} className="ctl" aria-label="Unit">
                {picked?.units.map(u => <option key={u.unit} value={u.unit}>{u.unit}</option>)}
              </select>
              <button type="button" data-testid="add-one" className="btn" onClick={addOne} disabled={!val.trim()}>Add</button>
            </div>
            <fieldset className="mt-5">
              <legend className="label">Sex recorded on the laboratory report</legend>
              <div className="mt-1.5 flex gap-5 text-[15px]">
                {(['female', 'male'] as Sex[]).map(s => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer"><input type="radio" name="sex" value={s} checked={sex === s} onChange={() => setSex(s)} className="accent-[#8B1E4B]" /> {s === 'female' ? 'Female' : 'Male'}</label>
                ))}
              </div>
            </fieldset>
            <p className="meta mt-4">The laboratory reference interval shown is the one applied to the sex selected. Entries are processed in the browser; they are not transmitted or stored.</p>
          </div>
        </div>
      </div>

      {entries.length > 0 && (
        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <p className="label">{entries.length === 1 ? '1 result' : `${entries.length} results`}, in order of entry</p>
            <button type="button" data-testid="clear-all" className="textbtn" onClick={() => { setEntries([]); setNote(null) }}>Remove all</button>
          </div>
          <div className="mt-3 space-y-10">
            {entries.map((e, i) => byId[e.analyteId] && (
              <ResultCard key={e.key} a={byId[e.analyteId]} sex={sex} value={e.value} unit={e.unit} figure={i + 1} onRemove={() => setEntries(x => x.filter(y => y.key !== e.key))} />
            ))}
          </div>
          <p className="caption mt-8 border-t border-rule pt-3">The figures state the position of a value relative to published intervals. They do not constitute an interpretation of the result, and a position within a disputed interval is not a diagnosis.</p>
        </div>
      )}
    </div>
  )
}

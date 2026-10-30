import { Link } from 'react-router-dom'
import { useAnalytes } from '../lib/data'
import Checker from '../checker/Checker'

export default function Home() {
  const { data, error } = useAnalytes()
  const groups = data ? [...new Set(data.analytes.map(a => a.group))] : []
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-6">
        <div className="max-w-[42rem]">
          <h1 className="display text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">Normal for whom?</h1>
          <p className="mt-4 text-[17px] text-ink-2 leading-relaxed">
            A blood test report marks each result against a reference range. This page shows, for {data ? data.analytes.length : 'each of the'} common tests, where that range came from, whether a separate threshold exists for women, and where the published evidence says the female range is set wrong. Enter a result to see where it sits on each of those scales.
          </p>
        </div>
      </section>
      {error && <p className="mx-auto max-w-6xl px-4 text-sm text-berry">Could not load the reference table: {error}</p>}
      {!data && !error && <p className="mx-auto max-w-6xl px-4 text-sm text-ink-3">Loading the reference table…</p>}
      {data && <Checker analytes={data.analytes} />}

      <section className="mx-auto max-w-6xl px-4 pt-16 grid gap-x-12 gap-y-10 lg:grid-cols-2">
        <div>
          <h2 className="display text-2xl font-medium">Tests covered</h2>
          {groups.map(g => (
            <div key={g} className="mt-4">
              <p className="eyebrow">{g}</p>
              <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
                {data!.analytes.filter(a => a.group === g).map(a => <li key={a.id}><Link to={`/analyte/${a.id}`} className="text-berry underline underline-offset-2">{a.short}</Link></li>)}
              </ul>
            </div>
          ))}
          <p className="mt-5 text-[14px] text-ink-2 leading-relaxed">Table dated {data?.generated}. Each entry records the laboratory range as one major laboratory publishes it, the study or committee that set it, any sex-specific threshold in a current guideline, and the published evidence against the female range, with every source linked. <Link to="/methods" className="text-berry underline underline-offset-2">Methods</Link>.</p>
        </div>
        <div>
          <h2 className="display text-2xl font-medium">Quiz</h2>
          <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">Ten questions on who the reference ranges were measured on, each answered with the study that set the number. <Link to="/quiz" className="text-berry underline underline-offset-2">Take the quiz</Link>.</p>
          <h2 className="display text-2xl font-medium mt-10">What this page does not do</h2>
          <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">It does not interpret a result. It reports where a value sits relative to the published ranges and what the guidelines say about values in that position. The entries have not yet been reviewed by a clinical chemist or haematologist, and say so. A result that sits in a contested band is a reason to read the sources and raise them with a clinician, not a finding.</p>
        </div>
      </section>
    </div>
  )
}

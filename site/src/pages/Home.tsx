import { Link } from 'react-router-dom'
import { useAnalytes } from '../lib/data'
import Checker from '../checker/Checker'
import Section from '../components/Section'

const date = (iso?: string) => iso ? new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }) : ''

export default function Home() {
  const { data, error } = useAnalytes()
  const groups = data ? [...new Set(data.analytes.map(a => a.group))] : []
  const n = data?.analytes.length
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-4">
      <header className="max-w-[46rem]">
        <h1 className="text-[1.6rem] sm:text-[2rem] leading-[1.2]">Reference intervals for {n ?? ''} common blood tests: derivation, sex-specific thresholds and disputed limits in women</h1>
        <p className="meta mt-3">{data ? `Table of ${n} tests, compiled ${date(data.generated)}. Not peer reviewed; not yet reviewed by a clinical chemist or haematologist.` : ' '}</p>
      </header>

      <section className="mt-6 max-w-[46rem]" aria-labelledby="summary">
        <h2 id="summary" className="label">Summary</h2>
        <div className="prose mt-1.5">
          <p>
            A laboratory report compares each result with a reference interval, conventionally the central 95% of values in a reference population. For each test, this resource records the interval reported by a major clinical laboratory, the population from which it derives, any decision threshold that differs by sex, and the published evidence on the limit applied to women. The interval between the laboratory limit and the limit supported by that evidence is termed the disputed interval. The tool places a result on these scales and states its position; it does not interpret the result.
          </p>
        </div>
      </section>

      <Section n={1} title="Comparison of a result with its reference interval">
        {error && <p className="meta text-accent">The reference table could not be loaded ({error}).</p>}
        {!data && !error && <p className="meta">Loading the reference table.</p>}
        {data && <Checker analytes={data.analytes} />}
      </Section>

      <Section n={2} title="Tests in the table">
        <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(g => (
            <div key={g}>
              <h3 className="label" style={{ fontFamily: 'var(--font-sans)' }}>{g}</h3>
              <ul className="mt-1.5 space-y-0.5 text-[15px]">
                {data!.analytes.filter(a => a.group === g).map(a => <li key={a.id}><Link to={`/analyte/${a.id}`} className="link">{a.short}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="prose mt-6 max-w-[46rem]">The intervals, thresholds and disputed intervals for all tests are tabulated in the <Link to="/analytes">table of intervals</Link>. The fields recorded for each test and the procedure for compiling them are described in <Link to="/methods">Methods</Link>.</p>
      </Section>

      <Section n={3} title="Scope and limitations">
        <div className="prose max-w-[46rem]">
          <p>The resource reports the position of a value relative to published intervals and quotes the guideline statements that apply to values in that position. It does not state whether a result is normal or abnormal, and it does not replace clinical assessment. Reference intervals differ between laboratories and assays; the interval shown is that of the laboratory named in each entry, for non-pregnant adults.</p>
          <p>The entries were compiled from the primary sources listed under each one. They have not been reviewed by a clinical chemist, haematologist or endocrinologist. Each entry carries a documentation grade indicating how completely its sources were read.</p>
        </div>
      </Section>

      <Section n={4} title="Self-assessment">
        <p className="prose max-w-[46rem]">A set of ten multiple-choice questions on the provenance of common reference intervals, each answered with its source, is available under <Link to="/quiz">Self-assessment</Link>.</p>
      </Section>
    </div>
  )
}

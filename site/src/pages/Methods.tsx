import { Link } from 'react-router-dom'
import { useAnalytes } from '../lib/data'
import Section from '../components/Section'
import { GRADE_TITLE } from '../lib/format'

export default function Methods() {
  const { data } = useAnalytes()
  const n = data ? data.analytes.length : 30
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <header className="max-w-[46rem]">
        <p className="meta">Methods</p>
        <h1 className="mt-1.5 text-[1.6rem] sm:text-[2rem] leading-[1.2]">Compilation of the reference table and operation of the comparison tool</h1>
      </header>
      <div className="max-w-[46rem]">
        <Section n={1} title="Definitions">
          <dl className="entry">
            <div><dt>Reference interval</dt><dd>The interval between a lower and an upper reference limit, conventionally the 2.5th and 97.5th percentiles of values measured in a defined reference population. A reference interval describes a population; it is not a threshold for disease.</dd></div>
            <div><dt>Decision threshold</dt><dd>A value at which a guideline recommends a diagnosis or an action, set from clinical outcomes or from a defined percentile of a reference population (for example, the 99th-percentile upper reference limit of a troponin assay). A threshold is recorded as sex-specific where the guideline or assay specification gives different values for women and men.</dd></div>
            <div><dt>Disputed interval</dt><dd>The interval between the limit a laboratory reports for women and the limit supported by published studies or guidelines which argue that the laboratory limit rests on an unrepresentative population or is set at the wrong value. Each entry cites the studies, with their sample sizes and estimates.</dd></div>
            <div><dt>Documentation grade</dt><dd><b className="font-semibold">Full.</b> {GRADE_TITLE.high} <b className="font-semibold">Partial.</b> {GRADE_TITLE.medium} <b className="font-semibold">Limited.</b> {GRADE_TITLE.low}</dd></div>
          </dl>
        </Section>

        <Section n={2} title="Selection of tests">
          <div className="prose">
            <p>The table contains {n} tests in common use for which a sex-specific threshold, a dispute over the limit applied to women, or a documented sex difference in the reference distribution was identified. Tests for which no such evidence was found after a search of guidelines and reference-interval studies are included where they are routinely reported alongside the others (for example, mean corpuscular volume), and the entry states that no dispute was identified. Two tests examined (free triiodothyronine and serum folate) were omitted because their sources could not be documented to the standard of the remaining entries.</p>
          </div>
        </Section>

        <Section n={3} title="Fields recorded for each test">
          <div className="prose">
            <p>Each entry records four fields. The <em>laboratory reference interval</em> is the adult interval published by one major clinical laboratory (Mayo Clinic Laboratories, ARUP Laboratories, Labcorp, a hospital pathology handbook or, for troponin, the assay manufacturer), with separate values for women and men where the laboratory gives them. The <em>derivation</em> is the population and method from which that interval comes, as far as it could be traced: a reference-interval study, a manufacturer's package insert or an expert committee. Where the laboratory cites no derivation, the entry says so.</p>
            <p>The <em>sex-specific threshold</em> and the <em>disputed interval</em> are defined above. The evidence for each disputed interval is summarised with the study population, sample size, year and estimate. The <em>guideline statements</em> field quotes what current guidelines state about values in the disputed interval; quotations are verbatim and retain the spelling of the source.</p>
          </div>
        </Section>

        <Section n={4} title="Sources and verification">
          <div className="prose">
            <p>Sources were opened and read individually; numerical values were transcribed from the source text and not from secondary summaries, except where an entry states otherwise. Where a full text could not be obtained, the entry or its reference list records that an abstract or a secondary report was consulted. Each statement in an entry carries a numbered citation to the reference list beneath it.</p>
            <p>The entries were subsequently edited for register. An automated check confirms that every number and every citation present before editing is present afterwards, and that none was added. The compiled table is a single dated file; the research notes, the compilation scripts and the check are published in the <a href="https://github.com/lucylepoidevin/thewomenshealthrecord2" target="_blank" rel="noreferrer">project repository</a>.</p>
          </div>
        </Section>

        <Section n={5} title="Comparison procedure">
          <div className="prose">
            <p>A value entered in the tool is converted to the unit of the table and plotted against the laboratory reference interval for the sex selected, the disputed interval and the sex-specific thresholds. The caption states whether the value lies below, within or above the reference interval, whether it lies within the disputed interval, and whether the thresholds for women and men classify it differently. No further inference is drawn.</p>
            <p>Each line of pasted text is matched against the name of each test and a list of abbreviations and alternative spellings. The first number following the name is taken as the value; a unit is read if one follows, and otherwise the unit of the table is assumed. Reference intervals printed in brackets are discarded before the value is read. Lines that name a ratio or another derived quantity, a test absent from the table, or no numerical value are not read, and the number of unread lines is reported. Entries are processed in the browser and are neither transmitted nor stored.</p>
          </div>
        </Section>

        <Section n={6} title="Limitations">
          <div className="prose">
            <p>Reference intervals vary between laboratories, assays and populations; the interval shown may differ from the one printed on a given report, and for troponin the thresholds are specific to the assay. The figures show intervals for non-pregnant adults. Pregnancy-specific and age-specific intervals are described in the text of an entry where a guideline provides them but are not plotted.</p>
            <p>The entries have not been reviewed by a clinical chemist, haematologist or endocrinologist, and the documentation grades are those of the compiler. Several laboratory catalogues and guideline texts could not be retrieved in full; the affected entries are graded partial and state which sources were consulted in abstract or through secondary reports. The table is not a systematic review: the searches were not exhaustive and were not conducted to a registered protocol.</p>
          </div>
        </Section>

        <p className="prose mt-10">The intervals are tabulated in the <Link to="/analytes">table of intervals</Link>.</p>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useAnalytes } from '../lib/data'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-10 py-8 border-t border-hairline/70">
    <h2 className="eyebrow pt-1">{title}</h2>
    <div className="text-[17px] leading-[1.75] text-ink space-y-4">{children}</div>
  </section>
)

export default function Methods() {
  const { data } = useAnalytes()
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-16">
      <header className="pb-8">
        <p className="eyebrow">Methods</p>
        <h1 className="display mt-2 text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">How each range was documented</h1>
        <p className="mt-4 max-w-2xl text-[17px] text-ink-2 leading-relaxed">What was recorded for every test, where it came from, and what the tool does with a value.</p>
      </header>

      <Section title="The four fields">
        <p>Each test in the table carries four documented fields. The <strong>laboratory range</strong> is the interval one major clinical laboratory (Mayo Clinic Laboratories, ARUP, Quest, LabCorp or an NHS trust) publishes for adults, with the sex split where the laboratory makes one. The <strong>origin</strong> is the population and method behind that interval as far as it can be traced: a reference-interval study, a manufacturer's package insert, an expert committee, or a convention whose source could not be found, in which case the entry says so.</p>
        <p>The <strong>sex-specific threshold</strong> is any value in a current guideline that differs by sex for the same decision, such as the 99th percentile of a troponin assay or the haemoglobin cut-off for anaemia. The <strong>contested band</strong> is the interval between the laboratory's limit and the limit proposed by published studies or guidelines that argue the female range is set on the wrong population or at the wrong value. The summary for each band gives the studies, their sample sizes and the numbers they report.</p>
      </Section>

      <Section title="What the tool does with a value">
        <p>A value is converted to the table's unit and placed on a scale with the laboratory range, the contested band and the sex-specific thresholds. The text states its position: inside or outside the laboratory range for the sex selected, inside or outside the contested band, and whether the female and male thresholds classify it differently. It does not say whether the value is normal, abnormal or a reason for concern; it quotes what the relevant guideline says about values in that position and links the guideline.</p>
        <p>Values are read in the browser and are not transmitted, stored or logged. Reloading the page clears them.</p>
      </Section>

      <Section title="How the lines are read">
        <p>Each pasted line is matched against the test's name and a list of common abbreviations and alternative spellings (Hb, Hgb, haemoglobin, hemoglobin). The first number after the name is taken as the value, and a unit is read if one follows the number. Lines with no recognised name, or no number after it, are counted and reported as unread. Reference ranges printed in brackets on the report are ignored, since the tool compares against its own documented range.</p>
      </Section>

      <Section title="Limits">
        <p>The table covers {data ? data.analytes.length : 'about twenty'} tests, chosen because a sex-specific or contested threshold is documented for them. Laboratories differ: a range from another laboratory or another assay can be wider or narrower than the one shown, and for troponin the threshold is specific to the assay. Pregnancy, age under 18, and age-specific ranges are noted in the entries where a guideline gives them, but the scales show adult non-pregnant ranges only.</p>
        <p>The entries were compiled from the primary sources linked on each card and have not yet been reviewed by a clinical chemist, haematologist or endocrinologist. Until they have been, each entry's documentation grade (well, partly or thinly documented) is the compiler's own.</p>
      </Section>

      <Section title="Sources">
        <p>Every number on a card links to a numbered source under that card: the laboratory's published range, the originating study or committee report, the guideline that sets a sex-specific threshold, and the studies that contest the range. The compiled table is published as a single JSON file with a date stamp, and the <Link to="/analytes" className="text-berry underline underline-offset-2">ranges page</Link> lists every test with its four fields.</p>
      </Section>
    </div>
  )
}

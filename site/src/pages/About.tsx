import Section from '../components/Section'

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <header className="max-w-[46rem]">
        <p className="meta">About</p>
        <h1 className="mt-1.5 text-[1.6rem] sm:text-[2rem] leading-[1.2]">Purpose, rationale and authorship</h1>
      </header>
      <div className="max-w-[46rem]">
        <Section title="Purpose">
          <p className="prose">Normal for whom? documents the derivation of the reference intervals reported with common blood tests and the published evidence concerning the limits applied to women. It is a companion to The Women's Health Record, a series of analyses of public data on sex differences in the study, dosing and diagnosis of disease.</p>
        </Section>
        <Section title="Rationale">
          <div className="prose">
            <p>A reference interval depends on the population in which it was measured: who was included, when, and whether individuals with undetected deficiency or disease were excluded. For several common tests the interval in use was derived from populations that under-represent women or include women with untreated iron deficiency, or a single threshold is applied to both sexes although the distributions differ. In such cases a result may fall within the reported interval while lying in a range that current guidelines treat as an indication for further assessment.</p>
            <p>The published evidence on these points is dispersed across guidelines, reference-interval studies and laboratory catalogues. This resource assembles it by test and cites each statement.</p>
          </div>
        </Section>
        <Section title="Interpretation">
          <p className="prose">The resource does not provide medical advice. It reports the position of a value relative to published intervals and quotes guideline statements. A value within a disputed interval is a basis for consulting the cited sources and a clinician; it is not a finding.</p>
        </Section>
        <Section title="Authorship and review">
          <p className="prose">Compiled and written by Lucy LePoidevin. The entries await review by a clinical chemist and a haematologist. Corrections may be submitted through the <a href="https://github.com/lucylepoidevin/thewomenshealthrecord2/issues" target="_blank" rel="noreferrer">project repository</a>.</p>
        </Section>
      </div>
    </div>
  )
}

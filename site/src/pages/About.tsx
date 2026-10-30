const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-10 py-8 border-t border-hairline/70">
    <h2 className="eyebrow pt-1">{title}</h2>
    <div className="text-[17px] leading-[1.75] text-ink space-y-4">{children}</div>
  </section>
)

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-16">
      <header className="pb-8">
        <p className="eyebrow">About</p>
        <h1 className="display mt-2 text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">About this project</h1>
      </header>
      <Section title="What it is">
        <p>Normal for whom? documents where the reference ranges on a blood test report came from, and where the published evidence says the range applied to women is set wrong. It is a companion to The Women's Health Record, a series of analyses of public data on how medicine studies, doses and diagnoses women and men differently.</p>
      </Section>
      <Section title="Why">
        <p>A reference range is usually the central 95 percent of values from a reference population. Who was in that population, when, and whether anyone with an undetected deficiency was excluded, decides where "normal" falls. For several common tests those decisions were made on populations that do not represent women, or on a single threshold for both sexes where the distributions differ. The result is a report that reads "normal" for a value the guidelines themselves treat as a reason to investigate.</p>
      </Section>
      <Section title="How to read it">
        <p>Nothing on this site is medical advice. A result that sits inside a contested band is a reason to read the sources on the card and to raise them with a clinician. The site reports positions and quotes guidelines; it does not interpret.</p>
      </Section>
      <Section title="Who">
        <p>Compiled, built and written by Lucy LePoidevin. The entries await review by a clinical chemist and a haematologist, and corrections are welcome by email or through the repository.</p>
      </Section>
    </div>
  )
}

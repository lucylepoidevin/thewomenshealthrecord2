import type { ReactNode } from 'react'

/** A numbered section, as in a paper: "2  Tests in the table". */
export default function Section({ n, title, children, id }: { n?: number | string; title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mt-12">
      <h2 className="text-[1.45rem] leading-snug">{n !== undefined && <span className="section-no">{n}</span>}{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

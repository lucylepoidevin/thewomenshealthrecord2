import type { SourceRef } from '../lib/types'

/** Prose with [S1]-style citation tokens rendered as numbered superscript links to the analyte's source list. */
export default function Cited({ text, sources, anchor }: { text: string; sources: SourceRef[]; anchor: string }) {
  const parts = text.split(/(\[[A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*\])/g)
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[([A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*)\]$/)
        if (!m) return <span key={i}>{p}</span>
        const ids = m[1].split(/,\s*/)
        return (
          <sup key={i} className="cite ml-0.5">
            {ids.map((id, k) => {
              const n = sources.findIndex(s => s.id === id)
              return <a key={id} href={`#${anchor}-${id}`} title={sources[n]?.title ?? id}>{k > 0 ? ',' : ''}[{n >= 0 ? n + 1 : '?'}]</a>
            })}
          </sup>
        )
      })}
    </>
  )
}

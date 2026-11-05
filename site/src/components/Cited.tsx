import type { SourceRef } from '../lib/types'
import { jumpTo } from '../lib/format'

/** Prose with [S1]-style citation tokens rendered as numbered superscripts that scroll to the entry's reference list. */
export default function Cited({ text, sources, anchor }: { text: string; sources: SourceRef[]; anchor: string }) {
  const parts = text.split(/(\s*\[[A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*\])/g)
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\s*\[([A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*)\]$/)
        if (!m) return <span key={i}>{p}</span>
        const ids = m[1].split(/,\s*/)
        return (
          <sup key={i} className="cite">
            {ids.map((id, k) => {
              const n = sources.findIndex(s => s.id === id)
              return <span key={id}>{k > 0 ? ', ' : ''}<a href={`#${anchor}-${id}`} onClick={jumpTo(`${anchor}-${id}`)} title={sources[n]?.title ?? id}>{n >= 0 ? n + 1 : '?'}</a></span>
            })}
          </sup>
        )
      })}
    </>
  )
}

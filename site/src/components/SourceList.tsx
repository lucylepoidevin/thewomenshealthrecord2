import type { SourceRef } from '../lib/types'

/** Numbered reference list. Each item carries the id a citation scrolls to. */
export default function SourceList({ sources, anchor }: { sources: SourceRef[]; anchor: string }) {
  return (
    <ol className="space-y-1.5 text-[13.5px] leading-relaxed text-ink-2">
      {sources.map((s, i) => (
        <li key={s.id} id={`${anchor}-${s.id}`} className="flex gap-2.5 px-1 -mx-1">
          <span className="mono w-7 shrink-0 text-right text-ink-3 whitespace-nowrap">{i + 1}.</span>
          <span>
            <a href={s.url} target="_blank" rel="noreferrer" className="link">{s.title}</a>. {s.publisher}{s.year ? `, ${s.year}` : ''}.{s.note ? <span className="text-ink-3"> {s.note}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  )
}

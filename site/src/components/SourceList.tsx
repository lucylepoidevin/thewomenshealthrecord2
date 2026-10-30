import type { SourceRef } from '../lib/types'

export default function SourceList({ sources, anchor }: { sources: SourceRef[]; anchor: string }) {
  return (
    <ol className="text-[13px] text-ink-2 space-y-1.5 leading-relaxed">
      {sources.map((s, i) => (
        <li key={s.id} id={`${anchor}-${s.id}`} className="flex gap-2">
          <span className="w-5 shrink-0 text-right font-semibold text-berry">{i + 1}</span>
          <span><a href={s.url} target="_blank" rel="noreferrer" className="text-berry underline underline-offset-2">{s.title}</a> <span className="text-ink-3">— {s.publisher}{s.year ? `, ${s.year}` : ''}</span></span>
        </li>
      ))}
    </ol>
  )
}

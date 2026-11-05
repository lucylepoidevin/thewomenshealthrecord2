import { Link } from 'react-router-dom'
import { useQuizzes } from './data'

export default function QuizIndex() {
  const { data, error } = useQuizzes()
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <header className="max-w-[46rem]">
        <p className="meta">Self-assessment</p>
        <h1 className="mt-1.5 text-[1.6rem] sm:text-[2rem] leading-[1.2]">Multiple-choice questions on the provenance of reference intervals</h1>
        <p className="prose mt-4">Each set contains ten questions. The answer to each question is given with the study or document from which it derives.</p>
      </header>
      {error && <p className="meta mt-6 text-accent">The question sets could not be loaded ({error}).</p>}
      <ol className="mt-8 max-w-[46rem] border-t-[1.5px] border-rule-strong">
        {data?.map((q, i) => (
          <li key={q.slug} className="border-b border-rule py-4">
            <p className="meta">Set {i + 1} · {q.questions.length} questions</p>
            <h2 className="mt-0.5 text-xl leading-snug"><Link to={`/quiz/${q.slug}`} className="hover:text-accent">{q.title}</Link></h2>
            <p className="mt-1 text-[14.5px] text-ink-2 leading-relaxed">{q.dek}</p>
            <p className="mt-2 text-[14px]"><Link to={`/quiz/${q.slug}`} className="link">Begin set {i + 1}</Link></p>
          </li>
        ))}
      </ol>
    </div>
  )
}

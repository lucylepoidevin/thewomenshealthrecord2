import { Link } from 'react-router-dom'
import { useQuizzes } from './data'

export default function QuizIndex() {
  const { data, error } = useQuizzes()
  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 pb-16">
      <header className="max-w-[42rem]">
        <p className="eyebrow">Quiz</p>
        <h1 className="display mt-2 text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">What the textbooks say, against what the measurements found</h1>
        <p className="mt-4 text-[17px] text-ink-2 leading-relaxed">Ten questions each. Every answer names the study or document the number comes from.</p>
      </header>
      {error && <p className="mt-6 text-sm text-berry">Could not load the quizzes: {error}</p>}
      <ol className="mt-8 max-w-[42rem]">
        {data?.map((q, i) => (
          <li key={q.slug} className="border-t border-hairline py-4">
            <Link to={`/quiz/${q.slug}`} className="group block">
              <p className="text-sm text-ink-3">Quiz {i + 1} · {q.questions.length} questions</p>
              <h2 className="display mt-0.5 text-xl font-medium leading-snug text-ink group-hover:text-berry">{q.title}</h2>
              <p className="mt-1 text-[14px] text-ink-2 leading-relaxed">{q.dek}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

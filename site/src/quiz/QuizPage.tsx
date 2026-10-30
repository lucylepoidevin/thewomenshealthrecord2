import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuizzes } from './data'
import type { Quiz } from '../lib/types'

function Run({ quiz, n }: { quiz: Quiz; n: number }) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [copied, setCopied] = useState(false)
  const q = quiz.questions[i]
  const url = `https://lucylepoidevin.github.io/thewomenshealthrecord2/quiz/${quiz.slug}/`

  function pick(k: number) {
    if (picked !== null) return
    setPicked(k)
    if (k === q.answer) setScore(s => s + 1)
  }
  function next() {
    if (i + 1 >= quiz.questions.length) { setDone(true); return }
    setI(i + 1); setPicked(null)
  }
  async function copy() {
    const text = `${score} of ${quiz.questions.length} on "${quiz.title}", Normal for whom? ${url}`
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard unavailable */ }
  }

  if (done) {
    return (
      <div className="graphic-card p-6 sm:p-8">
        <p className="eyebrow">Result</p>
        <p className="display mt-2 text-4xl sm:text-5xl font-medium leading-none">{score} of {quiz.questions.length}</p>
        <p className="mt-4 text-[15px] text-ink-2 leading-relaxed">Each answer above links to the study or document the number comes from. The reference table behind the questions is on the <Link to="/" className="text-berry underline underline-offset-2">checker</Link>.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" className="btn btn-solid" onClick={copy}>{copied ? 'Copied' : 'Copy result'}</button>
          <a className="btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">Share on LinkedIn</a>
          <button type="button" className="btn" onClick={() => { setI(0); setPicked(null); setScore(0); setDone(false) }}>Again</button>
        </div>
      </div>
    )
  }
  return (
    <div className="graphic-card p-6 sm:p-8">
      <p className="eyebrow">Question {i + 1} of {quiz.questions.length} · Quiz {n}</p>
      <h2 className="display mt-2 text-xl sm:text-2xl font-medium leading-snug">{q.prompt}</h2>
      <div className="mt-5 space-y-2">
        {q.options.map((o, k) => {
          const cls = picked === null ? 'opt' : k === q.answer ? 'opt is-right' : k === picked ? 'opt is-wrong' : 'opt'
          return <button key={k} type="button" className={cls} disabled={picked !== null} onClick={() => pick(k)}>{o}</button>
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 pt-4 border-t border-hairline">
          <p className="text-[14px] font-semibold text-ink">{picked === q.answer ? 'Correct.' : `The answer is: ${q.options[q.answer]}`}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink">{q.explain}</p>
          <p className="mt-2 text-[13px] text-ink-2">Source: <a href={q.source.url} target="_blank" rel="noreferrer" className="text-berry underline underline-offset-2">{q.source.title}</a></p>
          <div className="mt-4"><button type="button" className="btn btn-solid" onClick={next}>{i + 1 >= quiz.questions.length ? 'See the result' : 'Next'}</button></div>
        </div>
      )}
    </div>
  )
}

export default function QuizPage() {
  const { slug } = useParams()
  const { data, error } = useQuizzes()
  const quiz = data?.find(q => q.slug === slug)
  const n = data ? data.findIndex(q => q.slug === slug) + 1 : 0
  return (
    <div className="mx-auto max-w-3xl px-4 pt-14 pb-16">
      {error && <p className="text-sm text-berry">Could not load the quiz: {error}</p>}
      {data && !quiz && <p className="text-[15px]">No quiz with that name. <Link to="/quiz" className="text-berry underline underline-offset-2">All quizzes</Link>.</p>}
      {quiz && (
        <>
          <p className="eyebrow"><Link to="/quiz" className="hover:text-berry">Quiz</Link></p>
          <h1 className="display mt-2 text-3xl sm:text-[2.5rem] font-medium leading-[1.15]">{quiz.title}</h1>
          <p className="mt-3 text-[16px] text-ink-2 leading-relaxed">{quiz.dek}</p>
          <div className="mt-8"><Run key={quiz.slug} quiz={quiz} n={n} /></div>
        </>
      )}
    </div>
  )
}

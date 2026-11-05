import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuizzes } from './data'
import NotFound from '../pages/NotFound'
import type { Quiz } from '../lib/types'

const KEYS = ['A', 'B', 'C', 'D', 'E']

function Run({ quiz, n }: { quiz: Quiz; n: number }) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [done, setDone] = useState(false)
  const [copied, setCopied] = useState(false)
  const q = quiz.questions[i]
  const total = quiz.questions.length
  const score = answers.filter((a, k) => a === quiz.questions[k].answer).length
  const url = `https://lucylepoidevin.github.io/thewomenshealthrecord2/quiz/${quiz.slug}/`

  function pick(k: number) { if (picked === null) { setPicked(k); setAnswers(a => [...a, k]) } }
  function next() { if (i + 1 >= total) setDone(true); else { setI(i + 1); setPicked(null) } }
  function restart() { setI(0); setPicked(null); setAnswers([]); setDone(false); setCopied(false) }
  async function copy() {
    const text = `Score: ${score} of ${total}. ${quiz.title} (Normal for whom? self-assessment ${n}). ${url}`
    try { await navigator.clipboard.writeText(text); setCopied(true); window.setTimeout(() => setCopied(false), 2000) } catch { setCopied(false) }
  }

  if (done) {
    return (
      <div className="border-t-[1.5px] border-rule-strong pt-5">
        <p className="label">Result</p>
        <p data-testid="score" className="serif mt-1 text-[2.4rem] leading-none font-semibold">{score} of {total}</p>
        <div className="table-wrap mt-6">
          <table className="data">
            <thead><tr><th>Question</th><th>Response</th><th>Reference</th></tr></thead>
            <tbody>
              {quiz.questions.map((qq, k) => (
                <tr key={qq.id}>
                  <td className="mono text-[13px]">{k + 1}</td>
                  <td>{answers[k] === qq.answer ? 'Correct' : <>Incorrect <span className="text-ink-3">(answer: {qq.options[qq.answer]})</span></>}</td>
                  <td><a href={qq.source.url} target="_blank" rel="noreferrer" className="link">{qq.source.title}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" data-testid="copy" className="btn btn-primary" onClick={copy}>{copied ? 'Copied' : 'Copy score and link'}</button>
          <a data-testid="linkedin" className="btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">Share on LinkedIn</a>
          <button type="button" data-testid="again" className="btn" onClick={restart}>Repeat the set</button>
        </div>
        <p className="prose mt-6">The intervals to which the questions refer are documented in the <Link to="/analytes">table of intervals</Link>.</p>
      </div>
    )
  }
  return (
    <div className="border-t-[1.5px] border-rule-strong pt-5">
      <p className="meta">Question {i + 1} of {total}</p>
      <h2 className="mt-1.5 text-[1.3rem] sm:text-[1.45rem] leading-snug font-medium">{q.prompt}</h2>
      <div className="mt-5 space-y-2" role="group" aria-label="Options">
        {q.options.map((o, k) => {
          const cls = picked === null ? 'opt' : k === q.answer ? 'opt is-right' : k === picked ? 'opt is-wrong' : 'opt'
          return <button key={k} type="button" data-testid={`opt-${k}`} className={cls} disabled={picked !== null} onClick={() => pick(k)}><span className="key">{KEYS[k]}</span><span>{o}</span></button>
        })}
      </div>
      {picked !== null && (
        <div data-testid="feedback" className="mt-6 border-t border-rule pt-4">
          <p className="label text-ink">{picked === q.answer ? 'Correct.' : `Incorrect. The correct answer is ${KEYS[q.answer]}: ${q.options[q.answer]}.`}</p>
          <p className="prose mt-2">{q.explain}</p>
          <p className="caption mt-2">Reference: <a href={q.source.url} target="_blank" rel="noreferrer" className="link">{q.source.title}</a></p>
          <div className="mt-4"><button type="button" data-testid="next" className="btn btn-primary" onClick={next}>{i + 1 >= total ? 'Show the result' : 'Next question'}</button></div>
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
  if (error) return <p className="mx-auto max-w-5xl px-5 pt-12 meta text-accent">The question set could not be loaded ({error}).</p>
  if (data && !quiz) return <NotFound what="No question set exists at this address." />
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      {quiz && (
        <div className="max-w-[46rem]">
          <p className="meta"><Link to="/quiz" className="link">Self-assessment</Link> · Set {n}</p>
          <h1 className="mt-1.5 text-[1.6rem] sm:text-[2rem] leading-[1.2]">{quiz.title}</h1>
          <p className="prose mt-3">{quiz.dek}</p>
          <div className="mt-8"><Run key={quiz.slug} quiz={quiz} n={n} /></div>
        </div>
      )}
    </div>
  )
}

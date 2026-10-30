import { useEffect, useState } from 'react'
import type { Quiz } from '../lib/types'

let cache: Quiz[] | null = null
export function useQuizzes() {
  const [data, setData] = useState<Quiz[] | null>(cache)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    if (cache) return
    fetch(`${import.meta.env.BASE_URL}data/quizzes.json`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() }).then(j => { cache = j as Quiz[]; setData(cache) }).catch(e => setError(String(e)))
  }, [])
  return { data, error }
}

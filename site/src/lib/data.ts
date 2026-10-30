import { useEffect, useState } from 'react'
import type { AnalyteFile } from './types'

let cache: AnalyteFile | null = null
let pending: Promise<AnalyteFile> | null = null

export function loadAnalytes(): Promise<AnalyteFile> {
  if (cache) return Promise.resolve(cache)
  if (!pending) pending = fetch(`${import.meta.env.BASE_URL}data/analytes.json`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() }).then(j => { cache = j as AnalyteFile; return cache })
  return pending
}

export function useAnalytes() {
  const [data, setData] = useState<AnalyteFile | null>(cache)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => { loadAnalytes().then(setData).catch(e => setError(String(e))) }, [])
  return { data, error }
}

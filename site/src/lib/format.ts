import type { Range } from './types'

/** Numbers as a laboratory report prints them: no trailing zeros, at most two decimals. */
export const fmt = (v: number) => Number.isInteger(v) ? String(v) : v.toFixed(Math.abs(v) < 10 ? 2 : 1).replace(/\.?0+$/, '')
/** "15 to 150", "39 or above", "up to 33", for an interval with an open end. */
export const rangeText = (r: Range) => r[0] !== null && r[1] !== null ? `${fmt(r[0])} to ${fmt(r[1])}` : r[0] !== null ? `${fmt(r[0])} or above` : r[1] !== null ? `up to ${fmt(r[1])}` : 'not stated'
/** True when v lies inside r, treating a null end as unbounded. */
export const inRange = (r: Range, v: number) => (r[0] === null || v >= r[0]) && (r[1] === null || v <= r[1])
export const GRADE = { high: 'Documentation: full', medium: 'Documentation: partial', low: 'Documentation: limited' } as const
export const GRADE_TITLE = { high: 'Primary sources read in full for the interval, the thresholds and the disputing studies.', medium: 'Some sources consulted as abstracts or secondary reports, or the derivation of the laboratory interval is not published.', low: 'Derivation not traced; entry rests on a single laboratory or manufacturer statement.' } as const

/** Scroll to an element by id without touching the address: the router owns the '#' fragment. */
export function jumpTo(id: string) {
  return (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    el.classList.add('is-target')
    window.setTimeout(() => el.classList.remove('is-target'), 1600)
  }
}

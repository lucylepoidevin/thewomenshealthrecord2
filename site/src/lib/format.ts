/** Numbers as a lab report prints them: no trailing zeros, at most two decimals. */
export const fmt = (v: number) => Number.isInteger(v) ? String(v) : v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, '')

/** "15 to 150", "above 39" or "below 33", for a range with an open end. */
export const rangeText = (r: [number | null, number | null]) => r[0] !== null && r[1] !== null ? `${fmt(r[0])} to ${fmt(r[1])}` : r[0] !== null ? `at or above ${fmt(r[0])}` : r[1] !== null ? `up to ${fmt(r[1])}` : 'not stated'
/** True when v lies inside r, treating a null end as unbounded. */
export const inRange = (r: [number | null, number | null], v: number) => (r[0] === null || v >= r[0]) && (r[1] === null || v <= r[1])

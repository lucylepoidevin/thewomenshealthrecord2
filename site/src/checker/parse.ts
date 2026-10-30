import type { Analyte } from '../lib/types'

export type Entry = { key: string; analyteId: string; value: number; unit: string }

const norm = (s: string) => s.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim()
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Longest alias first, so "free t4" wins over "t4" and "transferrin saturation" over "transferrin". */
function aliasTable(analytes: Analyte[]) {
  const rows: { alias: string; id: string }[] = []
  for (const a of analytes) for (const al of [a.name, a.short, ...a.aliases]) rows.push({ alias: norm(al), id: a.id })
  return rows.sort((x, y) => y.alias.length - x.alias.length)
}

const NUM = /(-?\d+(?:[.,]\d+)?)/

/** Read lines like "Ferritin 22 ng/mL (15-150)" or "Hb: 11.9 g/dL". Returns one entry per recognised line. */
export function parseResults(text: string, analytes: Analyte[]): Entry[] {
  const table = aliasTable(analytes)
  const byId = Object.fromEntries(analytes.map(a => [a.id, a]))
  const out: Entry[] = []
  const lines = text.split(/\n|;/).map(l => l.trim()).filter(Boolean)
  for (const raw of lines) {
    const line = norm(raw)
    let hit: { id: string; at: number; len: number } | null = null
    for (const r of table) {
      const re = new RegExp(`(^|[^a-z0-9])${escape(r.alias)}(?![a-z0-9])`)
      const m = line.match(re)
      if (m && m.index !== undefined) { const at = m.index + m[1].length; if (!hit || at < hit.at) hit = { id: r.id, at, len: r.alias.length }; }
    }
    if (!hit) continue
    const rest = line.slice(hit.at + hit.len)
    const n = rest.match(NUM)
    if (!n || n.index === undefined) continue
    const value = parseFloat(n[1].replace(',', '.'))
    if (!Number.isFinite(value)) continue
    const a = byId[hit.id]
    const after = rest.slice(n.index + n[1].length).trim()
    let unit = a.canonicalUnit
    for (const u of [...a.units].sort((x, y) => y.unit.length - x.unit.length)) {
      const re = new RegExp(`^${escape(norm(u.unit))}(?![a-z])`)
      if (re.test(norm(after))) { unit = u.unit; break }
    }
    out.push({ key: `${a.id}-${Date.now()}-${out.length}`, analyteId: a.id, value, unit })
  }
  return out
}

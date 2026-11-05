import type { Analyte } from '../lib/types'

export type Entry = { key: string; analyteId: string; value: number; unit: string }

const norm = (s: string) => s.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim()
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Units as typed: "umol/L", "mcmol/L" and "μmol/L" are all µmol/L; case is ignored. */
export const normUnit = (s: string) => s.toLowerCase().replace(/\s+/g, '').replace(/μ/g, 'µ').replace(/^(?:u|mc)(?=mol|g\/|iu|kat)/, 'µ')

/** Longest alias first, so "free t4" wins over "t4" and "hdl cholesterol" over "cholesterol". */
function aliasTable(analytes: Analyte[]) {
  const rows: { alias: string; id: string }[] = []
  for (const a of analytes) for (const al of new Set([a.name, a.short, ...a.aliases].map(norm))) rows.push({ alias: al, id: a.id })
  return rows.sort((x, y) => y.alias.length - x.alias.length)
}

/** A line that names a derived or different quantity is not read: ratios, and "non-HDL". */
const NOT_A_RESULT = [/\bratio\b/, /\bnon[- ]?hdl\b/]

/** Reference intervals printed beside a result, "(15-150)" or "[0.4 - 4.5]", are removed before the value is read. */
const stripRanges = (s: string) => s.replace(/[([]\s*(?:ref(?:erence)?\.?\s*(?:range|interval)?:?\s*)?[<>≤≥]?\s*\d[\d.,]*\s*(?:-|–|—|to)\s*\d[\d.,]*[^)\]]*[)\]]/g, ' ').replace(/[([]\s*[<>≤≥]\s*\d[\d.,]*[^)\]]*[)\]]/g, ' ')

/** "1,234" is one thousand two hundred and thirty-four; "11,8" is a decimal comma. */
function toNumber(raw: string) {
  if (/^\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(raw)) return parseFloat(raw.replace(/,/g, ''))
  return parseFloat(raw.replace(',', '.'))
}

export type ParseResult = { entries: Entry[]; lines: number }

/** Read lines such as "Ferritin 22 ng/mL (15-150)" or "Hb: 11,8 g/dL". One entry per recognised line. */
export function parseResults(text: string, analytes: Analyte[]): ParseResult {
  const table = aliasTable(analytes)
  const byId = Object.fromEntries(analytes.map(a => [a.id, a]))
  const out: Entry[] = []
  const lines = text.split(/\n|;/).map(l => l.trim()).filter(Boolean)
  for (const raw of lines) {
    const line = norm(stripRanges(raw))
    if (NOT_A_RESULT.some(re => re.test(line))) continue
    let hit: { id: string; at: number; len: number } | null = null
    for (const r of table) {
      const m = line.match(new RegExp(`(^|[^a-z0-9])${escape(r.alias)}(?![a-z0-9])`))
      if (m && m.index !== undefined) { const at = m.index + m[1].length; if (!hit || at < hit.at) hit = { id: r.id, at, len: r.alias.length } }
    }
    if (!hit) continue
    const a = byId[hit.id]
    if (a.exclude?.some(x => line.includes(norm(x)))) continue
    const rest = line.slice(hit.at + hit.len)
    const n = rest.match(/(-?)\s?(\d[\d,]*(?:\.\d+)?)/)
    if (!n || n.index === undefined) continue
    // "-5" directly after the name is a negative number, which no concentration can be; "- 22" is a separator.
    if (n[1] === '-' && !/-\s/.test(rest.slice(n.index, n.index + 2))) continue
    const value = toNumber(n[2])
    if (!Number.isFinite(value) || value < 0) continue
    // the unit follows the number, optionally after an abnormal flag ("H", "L", "*")
    const after = rest.slice(n.index + n[0].length).trim().replace(/^(?:\*+|[hl]|high|low)\s+/, '')
    const token = normUnit(after.split(/\s+/).slice(0, 2).join(''))
    let unit = a.canonicalUnit
    for (const u of [...a.units].sort((x, y) => y.unit.length - x.unit.length)) {
      const nu = normUnit(u.unit)
      if (token.startsWith(nu) && !/^[a-zµ]/.test(token.slice(nu.length))) { unit = u.unit; break }
    }
    out.push({ key: `${a.id}-${Date.now()}-${out.length}-${Math.random().toString(36).slice(2, 6)}`, analyteId: a.id, value, unit })
  }
  return { entries: out, lines: lines.length }
}

/** canonical = value × toCanonical + offset. The offset is for HbA1c, where mmol/mol to % is affine (NGSP = 0.09148 × IFCC + 2.152). */
export type Unit = { unit: string; toCanonical: number; offset?: number }
/** Either end may be null for an open-ended limit ('>39' or '<33'). */
export type Range = [number | null, number | null]
export type SourceRef = { id: string; title: string; publisher: string; year?: number; url: string }

export type Analyte = {
  id: string
  name: string
  short: string
  group: string
  aliases: string[]
  units: Unit[]
  canonicalUnit: string
  /** Display scale for the bar, in canonical units. */
  scale: Range
  labRange: { female: Range | null; male: Range | null; any: Range | null; source: string; url: string }
  origin: string
  sexSpecific: { exists: boolean; female: number | null; male: number | null; what: string; source: string }
  contested: { band: Range | null; summary: string; sources: string[] }
  guidanceInBand: string
  confidence: 'high' | 'medium' | 'low'
  sources: SourceRef[]
}

export type AnalyteFile = { generated: string; analytes: Analyte[] }

export type Question = {
  id: string
  prompt: string
  options: string[]
  answer: number
  explain: string
  source: { title: string; url: string }
}
export type Quiz = { slug: string; title: string; dek: string; questions: Question[] }

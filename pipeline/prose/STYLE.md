# Prose register for the analyte entries

The site reads as a scientific reference. Each entry has five prose fields (`origin`, `sexSpecificWhat`, `contestedSummary`, `guidanceInBand`, `labRangeSource`) and a source list. Rewrite the fields in the register below without changing any fact.

## Hard constraints (checked by `pipeline/verify_prose.py`)
1. Every number in a field stays in that field, with the same value and unit. No number is added. Thousands separators may change (1,126 or 1126); nothing else.
2. Every citation token (`[S1]`, `[H4, H6]`, `[T3]`) stays in the same field, attached to the same claim. None is added or dropped.
3. Direct quotations keep their exact words. Use typographic double quotation marks (“ ”) for all quotations; single quotation marks only for a quotation inside a quotation.
4. No fact is added. No fact is removed, except process notes (see below).

## Register
- Third person, declarative, past tense for study findings and present tense for what a guideline or laboratory states.
- State each finding as a measurement: population, sample size, year, value, source. Example: “In 7,498 non-pregnant women aged 15 to 49 (NHANES), haemoglobin began to decline below a ferritin of 25.2 µg/L (95% CI 24.2 to 26.2) [S5].”
- No second person, no first person, no rhetorical questions, no contractions, no metaphors, no evaluative adjectives (striking, alarming, remarkably), no “so a woman at X is normal at one lab and low at another” constructions written as anecdote; write “A value of X falls within the reference interval of laboratory A and below the limit of laboratory B.”
- Terminology: “reference interval”, “upper reference limit”, “lower reference limit”, “decision threshold”, “99th-percentile upper reference limit”, “laboratory” (not “lab”), “reports” (not “prints”), “assay”, “immunoassay”, “participants”, “women” and “men” for adults, “female” and “male” as adjectives.
- British spelling throughout (haemoglobin, anaemia, oestrogen stays “estradiol” where the source uses it; “centile” or “percentile” as the source has it). Quotations keep the source’s spelling.
- Ranges in running text: “19 to 25 U/L”, not “19-25”. Inside quotations leave as quoted. Units with a space: “30 ng/mL”.
- Study references in text: “Prati et al. (2002)” or “the High-STEACS trial”, followed by the citation token.
- Abbreviations expanded at first use in each field where not universally known (ACG: American College of Gastroenterology; BSG; ASH; IFCC; ESC; ATA).

## Process notes
The research text contains notes about how it was compiled: “not opened”, “in this pass”, “unverified”, “snippet only”, “(record only; full text not opened)”, “was not researched”. Replace each with a neutral statement of evidential status, keeping the citation: “reported in secondary sources only [S10]”, “abstract consulted; full text not verified”, “No study addressing X was identified.” Never present an unverified claim as verified.

## Source titles
Where a source title or publisher carries a process note (“(record only; full text not opened)”, “(secondary)”, “(abstract only)”), return a cleaned title and a short `note` such as “Abstract consulted.” or “Secondary report.” Otherwise leave the source untouched and do not list it.

## Output
One JSON file, an object keyed by analyte id:
```json
{
  "ferritin": {
    "origin": "...",
    "sexSpecificWhat": "...",
    "contestedSummary": "...",
    "guidanceInBand": "...",
    "labRangeSource": "...",
    "sources": { "S12": { "title": "cleaned title", "note": "Secondary report." } }
  }
}
```
`sources` holds only the entries that needed cleaning (may be `{}`). Keep each field within about 15 percent of its original length. `sexSpecificWhat` and `labRangeSource` are short labels: keep them one or two sentences.

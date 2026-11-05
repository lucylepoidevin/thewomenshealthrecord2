"""Merge the research batches (research/batch-*.md, each ending in a ```json block) into site/public/data/analytes.json.

Adds the fields the site needs beyond the research schema: short name, group, aliases for the line parser, and the display scale.
Entries listed in META are included; anything else in the batches is skipped with a note.

The prose of each entry is then replaced by the edited text in pipeline/prose/batch-*.json (same numbers and citations,
checked by pipeline/verify_prose.py), and the factual corrections in pipeline/prose/corrections.json are applied on top.
Run from the project folder:
    python3 pipeline/build_analytes.py
"""
import json, re, sys, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'site' / 'public' / 'data' / 'analytes.json'

# id -> (short, group, aliases, scale in canonical units, order)
META = {
    'ferritin':        ('Ferritin', 'Iron and blood count', ['ferritin', 'serum ferritin', 'ferr'], [0, 250]),
    'haemoglobin':     ('Haemoglobin', 'Iron and blood count', ['haemoglobin', 'hemoglobin', 'hb', 'hgb'], [8, 18]),
    'haematocrit':     ('Haematocrit', 'Iron and blood count', ['haematocrit', 'hematocrit', 'hct', 'pcv', 'packed cell volume'], [25, 55]),
    'transferrin_saturation': ('Transferrin saturation', 'Iron and blood count', ['transferrin saturation', 'tsat', 'iron saturation', 'transferrin sat', 'iron sat'], [0, 60]),
    'mcv':             ('MCV', 'Iron and blood count', ['mcv', 'mean corpuscular volume', 'mean cell volume'], [60, 110]),
    'troponin_i_hs_abbott': ('hs-troponin I (Abbott)', 'Heart and kidney', ['hs-troponin i', 'hs troponin i', 'troponin i', 'hs-ctni', 'hs ctni', 'ctni', 'high-sensitivity troponin i', 'high sensitivity troponin i', 'troponin'], [0, 60]),
    'troponin_t_hs_roche':  ('hs-troponin T (Roche)', 'Heart and kidney', ['hs-troponin t', 'hs troponin t', 'troponin t', 'hs-ctnt', 'hs ctnt', 'ctnt', 'high-sensitivity troponin t', 'high sensitivity troponin t'], [0, 60]),
    'troponin_i_hs_siemens': ('hs-troponin I (Siemens)', 'Heart and kidney', ['siemens troponin', 'atellica troponin', 'centaur troponin'], [0, 80]),
    'troponin_i_hs_beckman': ('hs-troponin I (Beckman)', 'Heart and kidney', ['beckman troponin', 'access troponin'], [0, 40]),
    'creatinine':      ('Creatinine', 'Heart and kidney', ['creatinine', 'creat', 'serum creatinine', 'cr'], [0.3, 1.8]),
    'nt_probnp':       ('NT-proBNP', 'Heart and kidney', ['nt-probnp', 'nt probnp', 'ntprobnp', 'pro-bnp', 'probnp', 'n-terminal pro b-type natriuretic peptide'], [0, 600]),
    'creatine_kinase': ('Creatine kinase', 'Heart and kidney', ['creatine kinase', 'ck', 'cpk', 'creatine phosphokinase'], [0, 500]),
    'uric_acid':       ('Uric acid', 'Heart and kidney', ['uric acid', 'urate', 'serum urate', 'ua'], [1, 10]),
    'alt':             ('ALT', 'Liver and metabolic', ['alt', 'alanine aminotransferase', 'alanine transaminase', 'sgpt'], [0, 80]),
    'ast':             ('AST', 'Liver and metabolic', ['ast', 'aspartate aminotransferase', 'aspartate transaminase', 'sgot'], [0, 80]),
    'ggt':             ('GGT', 'Liver and metabolic', ['ggt', 'gamma gt', 'gamma-gt', 'gamma-glutamyl transferase', 'gamma glutamyl transferase', 'gamma-glutamyltransferase'], [0, 100]),
    'alp':             ('ALP', 'Liver and metabolic', ['alp', 'alkaline phosphatase', 'alk phos'], [20, 160]),
    'hba1c':           ('HbA1c', 'Liver and metabolic', ['hba1c', 'a1c', 'glycated haemoglobin', 'glycated hemoglobin', 'haemoglobin a1c', 'hemoglobin a1c'], [4, 9]),
    'glucose_fasting': ('Fasting glucose', 'Liver and metabolic', ['fasting glucose', 'glucose', 'fasting plasma glucose', 'fpg', 'blood glucose'], [50, 160]),
    'total_cholesterol': ('Total cholesterol', 'Lipids', ['total cholesterol', 'cholesterol', 'chol', 'tc'], [100, 320]),
    'ldl':             ('LDL cholesterol', 'Lipids', ['ldl', 'ldl cholesterol', 'ldl-c', 'ldl c'], [30, 220]),
    'hdl':             ('HDL cholesterol', 'Lipids', ['hdl', 'hdl cholesterol', 'hdl-c', 'hdl c'], [20, 110]),
    'triglycerides':   ('Triglycerides', 'Lipids', ['triglycerides', 'triglyceride', 'tg', 'trig', 'trigs'], [30, 400]),
    'tsh':             ('TSH', 'Thyroid and hormones', ['tsh', 'thyroid stimulating hormone', 'thyroid-stimulating hormone', 'thyrotropin'], [0, 8]),
    'ft4':             ('Free T4', 'Thyroid and hormones', ['free t4', 'ft4', 'free thyroxine', 't4 free', 'thyroxine free', 't4, free', 'thyroxine, free'], [0.4, 2.4]),
    'vitamin_d':       ('Vitamin D', 'Thyroid and hormones', ['vitamin d', '25-hydroxyvitamin d', '25 hydroxyvitamin d', '25-oh vitamin d', '25(oh)d', '25 oh d', 'vit d', 'vitamin d3', 'vitamin d, 25-hydroxy'], [0, 80]),
    'testosterone_female': ('Testosterone (women)', 'Thyroid and hormones', ['testosterone', 'total testosterone', 'testo'], [0, 100]),
    'amh':             ('AMH', 'Thyroid and hormones', ['amh', 'anti-mullerian hormone', 'anti-müllerian hormone', 'antimullerian hormone', 'anti mullerian hormone'], [0, 8]),
    'prolactin':       ('Prolactin', 'Thyroid and hormones', ['prolactin', 'prl'], [0, 60]),
    'vitamin_b12':     ('Vitamin B12', 'Vitamins', ['vitamin b12', 'b12', 'cobalamin', 'vit b12'], [100, 1000]),
}

def blocks(md: str):
    for m in re.finditer(r'```json\s*(.*?)```', md, re.S):
        txt = m.group(1).strip()
        try:
            j = json.loads(txt)
        except json.JSONDecodeError as e:
            print('  bad json block:', e, file=sys.stderr); continue
        if isinstance(j, dict) and 'analytes' in j: j = j['analytes']
        if isinstance(j, dict): j = [j]
        for x in j: yield x

# Post-merge corrections. Creatinine's "sex-specific" values from the research are the CKD-EPI multiplier, not a threshold in mg/dL.
OVERRIDES = {
    'creatinine': {'sexSpecific.female': None, 'sexSpecific.male': None},
    # TSH's only sex-related threshold is the pregnancy upper limit; a tick labelled "women 4.0" would read as a non-pregnant threshold.
    'tsh': {'sexSpecific.female': None},
    # Testosterone's male lower limit (300) is off a female-range scale; AMH has no meaningful male range for this page.
    'testosterone_female': {'sexSpecific.female': None, 'sexSpecific.male': None},
    'amh': {'labRange.male': None},
}
# Phrases that mark a pasted line as a different test from the one its alias suggests.
EXCLUDE = {
    'testosterone_female': ['free testosterone', 'testosterone free', 'testosterone, free', 'bioavailable', 'dihydrotestosterone'],
    'ft4': ['total t4', 'total thyroxine'],
    'hdl': ['non-hdl', 'non hdl'],
    'total_cholesterol': ['hdl', 'ldl', 'vldl'],
    'haemoglobin': ['a1c', 'glycated', 'glycosylated', 'mean corpuscular', 'mch'],
    'creatinine': ['urine', 'urinary', 'clearance', 'ratio'],
    'glucose_fasting': ['urine', 'random', 'post', '2 h', '2h', '2-h'],
    'vitamin_d': ['1,25', 'dihydroxy'],
    'transferrin_saturation': [],
}
# A condition on the use of an entry, shown with it.
TROPONIN_NOTE = 'Troponin thresholds are specific to the assay. This entry applies to the assay named in its title; the assay in use is stated on the laboratory report or available from the laboratory.'
NOTES = {
    'troponin_i_hs_abbott': TROPONIN_NOTE + ' A line that names troponin I without an assay is assigned to this entry.',
    'troponin_t_hs_roche': TROPONIN_NOTE,
    'troponin_i_hs_siemens': TROPONIN_NOTE,
    'troponin_i_hs_beckman': TROPONIN_NOTE,
    'testosterone_female': 'The entry concerns total testosterone in women. With male selected, the male reference interval of the same laboratory is shown and the text of the entry does not apply.',
    'amh': 'Reference intervals for anti-Müllerian hormone are age-specific; the interval plotted is that for women aged 20 to 25 years. Intervals for other ages are listed under the derivation.',
    'hba1c': 'Values in mmol/mol are converted with the IFCC to NGSP master equation (NGSP % = 0.09148 × IFCC + 2.152).',
}

# Research ids that differ from the site's ids.
ID_ALIASES = {'transferrin-saturation': 'transferrin_saturation'}
# Entries the research marked thin; left out until they are researched properly.
DROP = {'ft3', 'folate'}

def fix_units(a):
    # Units must be numeric multipliers; HbA1c mmol/mol -> % is affine (NGSP = 0.09148 * IFCC + 2.152).
    for u in a.get('units', []):
        if u.get('toCanonical') is None:
            if a['id'] == 'hba1c' and 'mmol/mol' in u['unit']:
                u['toCanonical'] = 0.09148; u['offset'] = 2.152
            else:
                u['toCanonical'] = 1
    a.pop('conversionNote', None)

PROSE = {}
for pf in sorted((ROOT / 'pipeline' / 'prose').glob('batch-*.json')):
    PROSE.update(json.load(open(pf)))
CORRECTIONS = json.load(open(ROOT / 'pipeline' / 'prose' / 'corrections.json'))

def apply_prose(aid, a):
    """Replace the research prose with the edited text, clean flagged source titles, then apply the recorded corrections."""
    p = PROSE.get(aid)
    if not p: print('  no edited prose for', aid); return
    a['origin'] = p['origin']
    a['sexSpecific']['what'] = p['sexSpecificWhat']
    a['contested']['summary'] = p['contestedSummary']
    a['guidanceInBand'] = p['guidanceInBand']
    a['labRange']['source'] = p['labRangeSource']
    for sid, fix in (p.get('sources') or {}).items():
        for src in a['sources']:
            if src['id'] == sid:
                if fix.get('title'): src['title'] = fix['title']
                if fix.get('publisher'): src['publisher'] = fix['publisher']
                if fix.get('note'): src['note'] = fix['note']
    key = {'origin': ('origin',), 'contestedSummary': ('contested', 'summary'), 'guidanceInBand': ('guidanceInBand',), 'sexSpecificWhat': ('sexSpecific', 'what'), 'labRangeSource': ('labRange', 'source')}
    for c in CORRECTIONS:
        if c['id'] != aid: continue
        path = key[c['field']]
        d = a
        for part in path[:-1]: d = d[part]
        if c['find'] not in d[path[-1]]: raise SystemExit(f"correction not applicable: {aid}.{c['field']}: {c['find'][:60]}")
        d[path[-1]] = d[path[-1]].replace(c['find'], c['replace'])

def apply_overrides(aid, a):
    for k, v in OVERRIDES.get(aid, {}).items():
        d = a
        parts = k.split('.')
        for part in parts[:-1]: d = d[part]
        d[parts[-1]] = v

# Sources cited in prose but defined only in the research Markdown.
EXTRA_SOURCES = {
    'haemoglobin': [{'id': 'H10a', 'title': 'Responses to "Why should women have lower reference limits for haemoglobin and ferritin concentrations than men?" (Heath, Fairweather-Tait and Worwood; Morison and Ferguson)', 'publisher': 'BMJ 323:806', 'year': 2001, 'url': 'https://www.bmj.com/content/323/7316/806'}],
}

found = {}
for f in sorted((ROOT / 'research').glob('batch-*.md')):
    print('reading', f.name)
    batch = list(blocks(f.read_text()))
    # Source ids are shared within a batch file; an entry may cite one listed under a sibling entry.
    pool = {}
    for a in batch:
        for src in a.get('sources', []): pool.setdefault(src['id'], src)
    for a in batch:
        if 'id' not in a: continue
        a['id'] = ID_ALIASES.get(a['id'], a['id'])
        if a['id'] in DROP: print('   (dropped, thin)', a['id']); continue
        have = {src['id'] for src in a.get('sources', [])}
        prose = ' '.join([a.get('origin', ''), a['sexSpecific'].get('what', ''), a['sexSpecific'].get('source', ''), a['contested'].get('summary', ''), ' '.join(a['contested'].get('sources', [])), a.get('guidanceInBand', ''), a['labRange'].get('source', '')])
        for m in re.finditer(r'\[([A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*)\]', prose):
            for cid in re.split(r',\s*', m.group(1)):
                if cid not in have and cid in pool: a.setdefault('sources', []).append(pool[cid]); have.add(cid)
        for src in EXTRA_SOURCES.get(a['id'], []):
            if src['id'] not in have: a.setdefault('sources', []).append(src); have.add(src['id'])
        found[a['id']] = a
        print('  ', a['id'])

missing = [k for k in META if k not in found]
extra = [k for k in found if k not in META]
if missing: print('NOT in research yet:', missing)
if extra: print('in research but not in META (skipped):', extra)

out = []
for aid, (short, group, aliases, scale) in META.items():
    a = found.get(aid)
    if not a: continue
    a = dict(a)
    a.update(short=short, group=group, aliases=aliases, scale=scale)
    apply_overrides(aid, a)
    fix_units(a)
    apply_prose(aid, a)
    if EXCLUDE.get(aid): a['exclude'] = EXCLUDE[aid]
    if NOTES.get(aid): a['note'] = NOTES[aid]
    # the sexSpecific.source field holds citation tokens only; normalise '[S1], [S2]' to '[S1, S2]'
    a['sexSpecific']['source'] = '[' + ', '.join(re.findall(r'[A-Z]+\d+[a-z]?', a['sexSpecific'].get('source', ''))) + ']' if re.search(r'[A-Z]+\d', a['sexSpecific'].get('source', '')) else ''
    # tolerate missing optional fields
    a.setdefault('guidanceInBand', '')
    a.setdefault('confidence', 'low')
    a.setdefault('sources', [])
    for k in ('labRange', 'sexSpecific', 'contested'):
        if k not in a: raise SystemExit(f'{aid}: missing {k}')
    out.append(a)

# Citation integrity: every [X1]-style id in the prose must exist in that analyte's source list.
CITE = re.compile(r'\[([A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*)\]')
bad = 0
for a in out:
    ids = {s['id'] for s in a['sources']}
    prose = ' '.join([a['origin'], a['sexSpecific']['what'], a['sexSpecific']['source'], a['contested']['summary'], ' '.join(a['contested']['sources']), a['guidanceInBand'], a['labRange'].get('source', '')])
    for m in CITE.finditer(prose):
        for cid in re.split(r',\s*', m.group(1)):
            if cid not in ids: print(f'  unresolved citation {cid} in {a["id"]}'); bad += 1
print('unresolved citations:', bad)

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps({'generated': datetime.date.today().isoformat(), 'analytes': out}, indent=1, ensure_ascii=False))
print('wrote', OUT, len(out), 'analytes')

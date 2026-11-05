"""Check a prose rewrite against the snapshot: every number and every citation id in each field must survive, none may be added.

    python3 pipeline/verify_prose.py pipeline/prose/batch-a.json

Numbers are compared as multisets after removing thousands separators; citation ids as sets. Exit code 1 on any difference.
"""
import json, re, sys
from collections import Counter
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
base = json.load(open(ROOT / 'pipeline/prose/_base.json'))
FIELDS = ['origin', 'sexSpecificWhat', 'contestedSummary', 'guidanceInBand', 'labRangeSource']
CITE = re.compile(r'\[([A-Z]+\d+[a-z]?(?:,\s*[A-Z]+\d+[a-z]?)*)\]')

def nums(t):
    t = CITE.sub(' ', t)                       # citation ids are not numbers
    t = re.sub(r'(?<=\d),(?=\d{3}\b)', '', t)  # 1,126 -> 1126
    return Counter(re.findall(r'\d+(?:\.\d+)?', t))

def cites(t):
    return {c for m in CITE.finditer(t) for c in re.split(r',\s*', m.group(1))}

bad = 0
for f in sys.argv[1:]:
    new = json.load(open(f))
    for aid, fields in new.items():
        if aid not in base: print(f'{aid}: not in snapshot'); bad += 1; continue
        for k in FIELDS:
            if k not in fields: print(f'{aid}.{k}: missing'); bad += 1; continue
            b, n = base[aid][k], fields[k]
            nb, nn = nums(b), nums(n)
            if nb != nn:
                bad += 1
                print(f'{aid}.{k}: numbers differ  lost {dict(nb - nn)}  added {dict(nn - nb)}')
            cb, cn = cites(b), cites(n)
            if cb != cn:
                bad += 1
                print(f'{aid}.{k}: citations differ  lost {sorted(cb - cn)}  added {sorted(cn - cb)}')
            if re.search(r"\b(you|your|we|our|I)\b", n) and not re.search(r'[“"]', n):
                print(f'{aid}.{k}: first or second person outside a quotation?')
print('fields with differences:', bad)
sys.exit(1 if bad else 0)

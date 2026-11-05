"""Write site/public/data/quizzes.json. Each answer's reference is pulled from analytes.json by (analyte id, source id), so a question cannot cite a document the table does not hold."""
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
A = {a['id']: a for a in json.load(open(ROOT / 'site/public/data/analytes.json'))['analytes']}

def src(aid, sid):
    s = next(s for s in A[aid]['sources'] if s['id'] == sid)
    return {'title': s['title'], 'url': s['url']}

Q = [
 dict(id='hb-1968',
      prompt='The haemoglobin thresholds for anaemia in current international use, 120 g/L in non-pregnant women and 130 g/L in men, were first proposed in which year?',
      options=['1968', '1985', '2001', '2024'], answer=0,
      explain='The World Health Organization proposed both thresholds in 1968 on the basis of four published references and one set of unpublished observations, in populations of predominantly European ancestry. The 2024 revision retained both values; the guideline development group noted that the data for men were consistent with a threshold of 135 g/L.',
      source=src('haemoglobin', 'H4')),
 dict(id='ferritin-25',
      prompt='The WHO threshold for iron deficiency in adults is a serum ferritin below 15 µg/L. In an analysis of 7,498 non-pregnant women aged 15 to 49 years in the US National Health and Nutrition Examination Survey, haemoglobin concentration began to decline below a ferritin of approximately:',
      options=['15 µg/L', '25 µg/L', '45 µg/L', '70 µg/L'], answer=1,
      explain='Mei et al. (2021) estimated physiological thresholds of 25.2 µg/L from haemoglobin and 24.0 µg/L from soluble transferrin receptor. At this threshold the estimated prevalence of iron deficiency in premenopausal women in the United States rises from about 17% to about 30%.',
      source=src('ferritin', 'S5')),
 dict(id='ferritin-ash',
      prompt='In its 2026 guideline, the American Society of Hematology set the ferritin threshold for the diagnosis of iron deficiency in adults, including menstruating and pregnant women, at:',
      options=['15 ng/mL', '20 ng/mL', '30 ng/mL', '50 ng/mL'], answer=2,
      explain='The guideline is reported to specify 30 ng/mL or below irrespective of anaemia, and 50 ng/mL in groups at higher risk; these values were taken from secondary accounts of the guideline and were not verified against the full text. Labcorp reports a reference interval of 15 to 150 ng/mL for adult women and states that it applies 30 ng/mL as its threshold for iron deficiency.',
      source=src('ferritin', 'S11')),
 dict(id='troponin-2015',
      prompt='In 1,126 patients with suspected acute coronary syndrome, a contemporary troponin assay with a single threshold identified type 1 myocardial infarction in 11% of women and 19% of men. With a high-sensitivity assay and sex-specific thresholds, the proportion in women was:',
      options=['11%', '15%', '22%', '30%'], answer=2,
      explain='The proportion rose from 11% to 22% in women and from 19% to 21% in men (Shah et al., 2015). Of the 56 women reclassified, 25% had died or had a reinfarction at 12 months, and 2% had undergone coronary angiography.',
      source=src('troponin_i_hs_abbott', 'S1')),
 dict(id='troponin-83',
      prompt='In the High-STEACS trial (48,282 patients), 1,771 patients were reclassified as having myocardial injury when sex-specific thresholds for high-sensitivity troponin I replaced a single threshold. What proportion of the reclassified patients were women?',
      options=['25%', '50%', '67%', '83%'], answer=3,
      explain='Women accounted for 1,470 of the 1,771 reclassified patients (83%). The Fourth Universal Definition of Myocardial Infarction recommends sex-specific 99th-percentile upper reference limits for high-sensitivity assays. In the trial, implementation of the sex-specific thresholds was not associated with a lower rate of myocardial infarction or cardiovascular death at 1 year in the reclassified patients.',
      source=src('troponin_i_hs_abbott', 'S2')),
 dict(id='alt-acg',
      prompt='According to the 2017 guideline of the American College of Gastroenterology, a normal alanine aminotransferase (ALT) concentration in women lies below an upper limit of:',
      options=['19 to 25 U/L', '30 to 35 U/L', '40 to 45 U/L', '50 to 55 U/L'], answer=0,
      explain='The guideline gives 19 to 25 U/L for women and 29 to 33 U/L for men, following Prati et al. (2002), who derived limits from 6,835 screened blood donors. The laboratories consulted report upper reference limits of 33 to 50 U/L for women; a value of 30 U/L therefore falls within each laboratory interval and above the guideline range.',
      source=src('alt', 'S2')),
 dict(id='hdl-rejected',
      prompt='In 2001 the Adult Treatment Panel III of the US National Cholesterol Education Program considered a separate categorical threshold for low HDL cholesterol in women (below 50 mg/dL, against 40 mg/dL in men). What did the panel decide?',
      options=['It adopted the threshold as a categorical risk factor', 'It rejected the threshold, on the ground that many women at low risk would become eligible for lipid-lowering drugs', 'It left the choice of threshold to individual laboratories', 'It set a threshold of 35 mg/dL for both sexes'], answer=1,
      explain='The full report states that a sex-specific cut-point “was rejected because it would make many women who are otherwise at low risk eligible for LDL-lowering drugs”. A value below 50 mg/dL was retained for women as a “marginal risk factor” within the definition of the metabolic syndrome.',
      source=src('hdl', 'S23')),
 dict(id='tsh-85',
      prompt='The reference interval for thyroid-stimulating hormone (TSH) in common use, approximately 0.45 to 4.5 mIU/L, derives from the third US National Health and Nutrition Examination Survey (1988 to 1994). What proportion of its reference population had a TSH concentration below 2.5 mIU/L?',
      options=['50%', '65%', '85%', '95%'], answer=2,
      explain='About 85% of the reference population had values below 2.5 mIU/L. The distribution is right-skewed, which is the basis of proposals to lower the upper reference limit to 2.5 or 3.0 mIU/L. The interval was not derived separately by sex, although TSH concentrations were higher and thyroid antibodies more prevalent in women in the same survey.',
      source=src('tsh', 'S4')),
 dict(id='ntprobnp-women',
      prompt='The European Society of Cardiology gives an NT-proBNP concentration of 125 pg/mL as the upper limit of normal in the non-acute setting. In 18,356 adults without cardiovascular disease (Generation Scotland), what proportion of women under 30 years of age had a concentration at or above this value, against 1.4% of men of the same age?',
      options=['1%', '3%', '9.8%', '25%'], answer=2,
      explain='At or above 125 pg/mL were 9.8% of women and 1.4% of men under 30 years of age. The difference narrowed with age and reversed in the oldest group (76.5% of women and 81.0% of men aged 80 years or over). The authors recommended age- and sex-specific thresholds; the 2021 European guideline applies a single value to all adults.',
      source=src('nt_probnp', 'S20')),
 dict(id='amh-steiner',
      prompt='Anti-Müllerian hormone (AMH) is measured as a marker of ovarian reserve. In 750 women aged 30 to 44 years without a history of infertility who were attempting to conceive, the cumulative probability of conception by 12 cycles in women with AMH below 0.7 ng/mL was:',
      options=['40%', '55%', '75%', '84%'], answer=3,
      explain='The cumulative probability was 84% (95% CI 70 to 91) with AMH below 0.7 ng/mL and 75% (70 to 79) with AMH of 0.7 to 8.4 ng/mL; the adjusted hazard ratio was 1.19 (0.88 to 1.61) (Steiner et al., 2017). The American College of Obstetricians and Gynecologists advises against the use of a single AMH value to counsel women without infertility about time to pregnancy.',
      source=src('amh', 'S6')),
]
quizzes = [dict(slug='provenance-of-reference-intervals', title='Provenance of common reference intervals',
                dek='Ten multiple-choice questions on the populations, dates and studies behind the reference intervals and decision thresholds reported with common blood tests.', questions=Q)]
out = ROOT / 'site/public/data/quizzes.json'
out.write_text(json.dumps(quizzes, indent=1, ensure_ascii=False))
print('wrote', out, len(Q), 'questions')

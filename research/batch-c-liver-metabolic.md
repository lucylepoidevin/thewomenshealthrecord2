# Batch C: liver and metabolic analytes

Research notes for "Normal for whom?". Every number below was read from a source opened during this pass (WebFetch, or a PDF downloaded by WebFetch and read with pdftotext). Where a document could not be opened, that is said and the claim is marked **unverified**. Date of research: 29 October 2026.

Access notes that shape this file:
- Mayo Clinic Laboratories (mayocliniclabs.com and its testcatalog.org mirrors) returned HTTP 403 on every attempt, so no Mayo range is quoted.
- Quest Diagnostics' test directory is JavaScript-rendered and returned no content.
- The Circulation/JACC full texts of the 2018 AHA/ACC cholesterol guideline, the 2005 AHA/NHLBI metabolic syndrome statement and the 2009 "harmonizing" statement returned 403; only their PubMed/Europe PMC records were opened. Their numbers are therefore marked unverified where they are not also in the 2001 ATP III documents, which were opened in full.
- Labs that were opened: LabCorp (US), ARUP (US), Leeds Teaching Hospitals NHS Trust (UK NHS), Alfred Health Pathology (Australia, publishing the RCPA/AACB harmonised intervals), and the AACB harmonisation paper itself.

Unit conversions used throughout (standard factors; the paired values 126 mg/dL = 7.0 mmol/L and 6.5% = 48 mmol/mol were checked against the ADA 2026 tables [S18], and 30 U/L = 500 nkat/L against Prati 2002 [S1]):
- Enzymes: 1 U/L = 1 IU/L = 16.67 nkat/L = 0.01667 µkat/L.
- Glucose: mg/dL × 0.0555 = mmol/L.
- HbA1c: IFCC mmol/mol = (NGSP % − 2.15) × 10.929 (affine, not a simple factor).
- Cholesterol (total, LDL, HDL): mg/dL × 0.02586 = mmol/L.
- Triglycerides: mg/dL × 0.01129 = mmol/L.

---

### ALT (alanine aminotransferase)

- **Units**: U/L (= IU/L); SI µkat/L (U/L × 0.01667) or nkat/L (U/L × 16.67). Prati 2002 reports both: 30 U/L = 500 nkat/L, 19 U/L = 317 nkat/L [S1].

- **Typical lab reference range** (quoted exactly):
  - LabCorp (US), "New ALT Reference Intervals for Children and Adults" [S4]: Female 0–11 y "<29", 12–17 y "<25", ≥18 y "<33"; Male 0–11 y "<30", 12–17 y "<31", ≥18 y "<45" U/L. Sex-specific: **yes**. (LabCorp's live test page for ALT, order code 001545, lists no interval at all and refers users to the sample report [S5].)
  - ARUP (US), test 0020008 [S6]: reference interval "By report (reports may vary based on instrumentation)"; the February 2022 sample report for a 35-year-old male prints "5-50" U/L. Sex-specific: not evident on the sample report.
  - Leeds Teaching Hospitals NHS Trust (UK), Blood Sciences Reference Range Database v3.20 [S7]: adults ">19 yr ≤40" U/L, no sex split for adults; sex split only in adolescence ("12-14 yr F: ≤45 M: ≤70; 14-16 yr F: ≤45 M: ≤60; 16-19 yr F: ≤45 M: ≤55"). Source given as "Siemens IFU stated range based on Tietz Clinical Guide to Laboratory Tests, 4th ed. 2000." Sex-specific for adults: **no**.
  - Alfred Health (Australia), publishing the RCPA/AACB harmonised intervals [S8, S9]: adult "Male: < 40 U/L, Female: < 35 U/L", source "RCPA/AACB Harmonised Reference Intervals from 13/7/2015". The AACB table reads "Alanine Transaminase (no pyridoxal 5-phosphate): Male 5 – 40 U/L; Female 5 – 35 U/L" [S9]. Sex-specific: **yes**.

- **Where that range came from**:
  - The ACG 2017 guideline describes the general method: "Normal lab values are generally defined as the mean value of a healthy population±2 s.d.'s. This incorporates 95% of subjects. By definition, 2.5% of the population will be greater than the ULN of the reference population." It adds that establishing ALT ranges "have been problematic due to differences in the definition of healthy control populations" and that reference populations were assembled "apparently without consideration of factors such as BMI" [S2].
  - The same guideline reports a survey in which "67 reference laboratories within one state used different ALT ULN levels ranging from 31 to 72 U/l", with "40% utilizing manufacturer's recommendations and local healthy control testing, 38.5% only using the manufacturer's recommendations, 17% only using local healthy controls, and 8% using published normal levels from textbooks" (citing Dutta et al. 2009), and that laboratories serving the NASH Clinical Research Network used ULNs of "35–79 IU/l for men and 31–55 IU/l for women" [S2].
  - LabCorp states its current limits come from "an internal study of ALT reference intervals that included more than 260,000 male and female subjects" ("LabCorp internal data on file") and explicitly cites the Prati 2002 finding "as low as 30 U/L for males and 19 U/L for females" as part of its rationale for lowering [S4].
  - Leeds cites a manufacturer insert (Siemens) traced to a 2000 textbook [S7]. The Australasian harmonised intervals were confirmed against the "Aussie Normals" a priori study of "1876 male and female healthy adult Australians" and apply to methods without pyridoxal-5'-phosphate [S9].
  - The IFCC multicentre reference study (Ceriotti et al. 2010; 765 adults aged 18–85, 411 women, 354 men, Milan/Beijing/Bursa/Nordic samples, assays standardised to IFCC reference procedures) found ALT needed sex-specific intervals: women 8–41 U/L, men 9–59 U/L [S12]. This is the source labelled "IFCC 2010 study" in NHS documents.

- **Official sex-specific thresholds**:
  - ACG Clinical Guideline 2017 (Kwo, Cohen, Lim), summary statement 1: "A true healthy normal ALT level in prospectively studied populations without identifiable risk factors for liver disease ranges from 29 to 33 IU/l for males and 19 to 25 IU/l for females, and levels above this should be assessed by physicians." Also: "ALT levels are higher in males than females" (statement 5) and "AST and ALT ULN ranges can vary between different labs" (statement 6) [S2]. (These are summary statements; the graded recommendations 16–18 define the work-up by multiples of ULN.)
  - RCPA/AACB harmonised (Australia/NZ): male 5–40, female 5–35 U/L [S9].
  - LabCorp: female <33, male <45 U/L [S4].

- **What is contested**:
  - Prati et al. 2002, Ann Intern Med 137(1):1–10, DOI 10.7326/0003-4819-137-1-200207020-00006 [S1]. Retrospective cohort, Milan. 6,835 first-time blood donors (1995–1999) negative for anti-HCV; healthy ranges "computed from the population at lowest risk for liver disease" (ALT was independently related to BMI and to markers of abnormal lipid/carbohydrate metabolism). Proposed upper limits: **30 U/L (500 nkat/L) men, 19 U/L (317 nkat/L) women**, versus the then-current 40 U/L men and 30 U/L women. Validated in 209 anti-HCV-positive would-be donors (131 viraemic, 133 biopsied): sensitivity for HCV viraemia 76.3% (95% CI 69.1–83.6%) with the new limits vs 55% (46.4–63.5%) with the old; specificity 88.5% (79.2–94.6%) vs 97.4% (91–99.7%). Conclusion as quoted by PubMed: "In patients with chronic HCV infection or nonalcoholic fatty liver disease," revision of normal limits is advisable. The AAFP digest adds that the limits were the 95th percentile and that the whole-group median ALT was 12 U/L [S36].
  - Ruhl & Everhart 2012, Hepatology 55(2):447–454, DOI 10.1002/hep.24725 [S3]. NHANES 1999–2008; 259 HCV-RNA-positive adults vs 3,747 "low risk" adults (negative HCV RNA and HBsAg, low alcohol, no diabetes, normal BMI and waist). Maximum-correct-classification cut-offs: **men 29 IU/L** (88% sensitivity, 83% specificity), **women 22 IU/L** (89%, 82%); AUC 0.929 men, 0.915 women. Applying these to the whole US population would label 36.4% of men and 28.3% of women as elevated.
  - The ACG guideline's Table 2 lines these up: Neuschwander-Tetri 40/40 ("Gender not specified, not derived from data"); Piton 42/31 (BMI ≤23); Prati 30/19; Korean liver-donor study (1,105 donors with normal biopsies) 33/25; Ruhl and Everhart 29/22 [S2].
  - The size of the gap for a woman: guideline 19–25 U/L vs LabCorp 33, Alfred/RCPA 35, Leeds 40, ARUP 50 U/L. A woman with ALT 30 is "normal" at every lab opened here and above the ACG healthy range by 20–58%. Mortality signal in the band: ACG cites NHANES analyses in which ALT above 30 (men)/19 (women) was associated with liver-related mortality 11.2× and diabetes-related mortality 3.3×, and states "given the increased liver-related mortality demonstrated across multiple populations for ALT>33 IU/l for men and >25 IU/l for women ... a national effort should be undertaken to standardize ALT levels across all populations" [S2].
  - The counter-position, from laboratory medicine: Valenti, Pelusi, Prati and colleagues 2021 (Hepatol Commun, DOI 10.1002/hep4.1794) re-ran the 2002 approach with the IFCC-standardised (P-5-P) assay in 21,296 blood donors and found sex-specific 95th-percentile URLs of **42 U/L men, 30 U/L women**, "approximately 30% lower than those currently recommended by the IFCC" but higher than the 30/19 of 2002, because the IFCC method reads higher than the older non-standardised method; they warn that "The limited awareness that different techniques are still in use should be regarded as a possible source of medical errors" [S10]. The AACC/ADLM feature (2024) records that Panteghini and colleagues objected to the ACG/NASPGHAN limits on traceability grounds and that no laboratory professionals sat on those panels; the feature's own authors propose decision limits of 42 U/L men and 30 U/L women from an IFCC-standardised assay in over 21,296 healthy individuals [S11].
  - So the female "normal" is contested on two axes: (1) the reference population (early ranges included people with undiagnosed fatty liver; BMI-screened populations give 19–25 U/L), and (2) the assay (IFCC P-5-P methods read higher, so a 19 U/L limit from a 2002 non-standardised assay is not transferable).

- **What a reader with a value inside the contested band (women ~20–45 U/L) is told by the guidelines**:
  - ACG 2017: "A normal ALT should be <29–33 IU/l in males and 19–25 IU/l in females. Minimal elevations may be approached by a history and examination, discontinuation of hepatotoxic medicines and all alcohol consumption, in addition to an evaluation for hemochromatosis, fatty liver and viral hepatitis." [S2]
  - ACG 2017 defines "borderline AST and ALT elevation as <2X ULN, mild AST and ALT elevations as 2–5X ULN", and Recommendation 16: "In those with ALT and/or AST levels <5X ULN, the history and laboratory testing should assess for viral hepatitis B and C, alcoholic and NAFLD, hemochromatosis, Wilson's disease, alpha-1-anti-trypsin deficiency, autoimmune hepatitis and consider drugs/supplement related injury. (Strong recommendation, very low level of evidence)." Before any work-up: "one should repeat the lab panel and/or perform a clarifying test" [S2].
  - ACG also records the opposing view it rejected: "Some have argued against lowering of the ALT ULN due to major clinical and financial implications including increased health care costs and unnecessary evaluations, increased mental anguish and anxiety, and reducing the blood donation pool", citing a study of 235 asymptomatic workers in which 27% had abnormal tests under the lower ULN but only six had liver disease [S2].
  - LabCorp's own clinical algorithm for ALT/AST less than five times the upper limit: "History and Physical Examination ... Discontinue hepatotoxic medications" and "Repeat ALT and/or AST if observational approach is deemed appropriate" [S4].

- **Confidence**: **high**. The guideline, the two foundational studies, a large US lab's derivation document, an NHS trust database, the Australasian harmonised table and the IFCC reference study were all opened and quote the same numbers; the only gap is Mayo/Quest.

- **Sources**: S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S36 (full list at the end).

---

### AST (aspartate aminotransferase)

- **Units**: U/L (= IU/L); µkat/L = U/L × 0.01667.

- **Typical lab reference range**:
  - LabCorp test 001123 [S14]: no reference interval is printed on the test page ("Very high values, >500 units/L, usually suggest hepatitis" is interpretive, not a range); units IU/L, method kinetic. Sex-specific: not stated.
  - Leeds NHS [S7]: "<35" U/L, all adults, source "IFCC range based on 2010 study" (i.e. Ceriotti 2010 [S12]). Sex-specific: **no**.
  - Alfred Health / RCPA-AACB harmonised [S13, S9]: adult 18+ "Male <35 U/L, Female <30 U/L"; 13–<18 y male <33, female <27; 1–<13 y <56; 1 wk–<1 y <89; <1 wk <122. AACB table: "Aspartate Transaminase (no pyridoxal 5-phosphate): Male 5 – 35 U/L; Female 5 – 30 U/L". Sex-specific: **yes**.

- **Where that range came from**: the IFCC multicentre study (765 adults, 411 women) found the sex difference in AST upper limits was only 1.7 U/L, "so a single RI of 11–34 U/L (0.18–0.57 µkat/L) was defined" [S12]; Leeds adopts that as <35. The Australasian committee nonetheless adopted sex-specific AST intervals (5–35 M, 5–30 F) confirmed against the Aussie Normals study (n = 1,876) without stating a separate rationale [S9]. The ACG guideline notes that "establishing normal ranges for ALT and AST levels have been problematic due to differences in the definition of healthy control populations" [S2].

- **Official sex-specific thresholds**: none in a clinical guideline. ACG gives no healthy AST range and works in multiples of the local ULN; its summary statement 6 is "AST and ALT ULN ranges can vary between different labs" [S2]. The only sex-specific AST limits found are laboratory harmonisation limits (RCPA/AACB 35/30) [S9, S13].

- **What is contested**: less than for ALT. The two best-documented reference studies disagree on whether a sex split is warranted (IFCC: single 11–34 U/L because the sex gap was 1.7 U/L [S12]; AACB: 35 vs 30 [S9]). The ACG cites a German report that AST >18 U/L carried a 3× increase in all-cause mortality and a Korean study in which men with AST 30–39 IU/L had 8× the liver-related death risk of men with AST <20 [S2], which puts the top of every lab range inside a risk gradient, but these were not sex-specific analyses in the text read.

- **What a reader with a value inside the contested band (women ~30–35 U/L) is told**: the same ACG pathway as ALT. "A borderline AST and/or ALT elevation is defined as <2X ULN" and Recommendation 16 applies: assess "for viral hepatitis B and C, alcoholic and NAFLD, hemochromatosis, Wilson's disease, alpha-1-anti-trypsin deficiency, autoimmune hepatitis and consider drugs/supplement related injury" [S2]. A value of 32 U/L is flagged at Alfred (female ULN 30) and unflagged at Leeds (ULN 35).

- **Confidence**: **medium**. Lab ranges and the two reference studies were opened; there is no guideline-level sex-specific AST threshold and little published contestation specific to women.

- **Sources**: S2, S7, S9, S12, S13, S14.

---

### GGT (gamma-glutamyl transferase)

- **Units**: U/L (= IU/L); µkat/L = U/L × 0.01667 (Ceriotti reports both: women 6–40 U/L = 0.11–0.66 µkat/L; men 12–68 U/L = 0.20–1.13 µkat/L [S12]).

- **Typical lab reference range**:
  - LabCorp test 001958 [S15]: "Male: 0−65 IU/L; Female: 0−60 IU/L", method kinetic. Sex-specific: **yes** (but a 5 U/L gap).
  - Leeds NHS [S7]: "Female: 6-40, Male: 12-68" U/L, source "WYAAT RR Harmonisation 2024 based on IFCC 2010 study". Sex-specific: **yes**.
  - Alfred Health [S16]: "Males 5-50 U/L, Females 5 - 35 U/L", source "AACB Harmonised Reference Intervals in use as of 09/08/2026"; the AACB table reads "Gamma Glutamyl Transferase: Male 5 – 50 U/L; Female 5 – 35 U/L" [S9]. Sex-specific: **yes**.

- **Where that range came from**: The IFCC multicentre study (765 adults) produced women 6–40 and men 12–68 U/L after excluding the Nordic samples, whose upper limits were higher; the authors concluded a common GGT interval "applicable worldwide appears unlikely due to differences among populations" [S12]. The AACB committee wrote of GGT that "Most data sets show male activities are greater than for females" and "The data suggest gender-specific RIs and, ideally, health-associated limits" [S9]. LabCorp does not state the derivation of 0–65/0–60 on the test page [S15].

- **Official sex-specific thresholds**: no clinical-guideline threshold. ACG Recommendation 13: "An elevation of alkaline phosphatase should be confirmed with an elevation in GGT. Given its lack of specificity for liver disease, GGT should not be used as a screening test for underlying liver disease in the absence of other abnormal liver chemistries. (Strong recommendation, very low level of evidence)" [S2]. Sex-specific limits exist only at the laboratory/harmonisation level [S9, S12].

- **What is contested**: the width of the female range. Reference studies with screened populations put the female 97.5th percentile at 35–40 U/L [S9, S12], whereas LabCorp reports to 60 U/L [S15]; a woman at 50 U/L is "normal" at LabCorp and above the upper limit at Leeds and at every Australian lab using the harmonised table. The IFCC authors' own finding that GGT upper limits differ by region (Nordic samples excluded) [S12] means the "right" female limit is population-dependent. No guideline-level evidence that the female limit is set on the wrong population was found beyond this; mortality data on GGT were not opened in this pass (**unverified**).

- **What a reader with a value inside the contested band (women ~35–60 U/L) is told**: ACG treats GGT only as a confirmatory test ("should be confirmed with an elevation in GGT") and says it "should not be used as a screening test for underlying liver disease in the absence of other abnormal liver chemistries" [S2]. So an isolated GGT in this band with normal ALT/AST/ALP is, by the guideline, not a trigger for liver work-up.

- **Confidence**: **medium**. Lab ranges and the derivation studies were opened; the clinical significance of the band is thinly documented in the sources read.

- **Sources**: S2, S7, S9, S12, S15, S16.

---

### Alkaline phosphatase (ALP)

- **Units**: U/L (= IU/L); µkat/L = U/L × 0.01667.

- **Typical lab reference range**:
  - LabCorp test 001107 [S17], sex- and age-specific, IU/L: 13 y M 156−435 / F 78−227; 14 y 114−375 / 64−161; 15 y 88−279 / 56−134; 16 y 74−207 / 51−121; 17 y 63−161 / 47−113; 18–20 y 51−125 / 42−106; **21–50 y M 47−123 / F 41−116; 51–80 y M 47−123 / F 49−135**; >80 y 48−129 both. Children 0–12 y identical for both sexes (e.g. 12 m–6 y 158−369; 7–12 y 150−409). Sex-specific: **yes**, with the female upper limit rising above the male one after 50.
  - Leeds NHS [S7]: "Adult 30 - 130" U/L (Pathology Harmony); paediatric ranges by sex (e.g. 13–14 y F 62–288, M 130–534; 15–16 y F 54–131, M 90–377; 17–18 y F 48–96, M 59–168) adopted from "Beckman AU CALIPER reference ranges". The database notes "ALP changes quite markedly throughout life with peaks in childhood and puberty (and pregnancy)." Adult sex-specific: **no**.
  - AACB/RCPA harmonised (Australia/NZ) [S9]: "Alkaline Phosphatase 30 – 110 U/L", adults 18+, one interval. Sex-specific: **no**.

- **Where that range came from**: adult single-interval ranges come from harmonisation projects (UK Pathology Harmony 2011 for 30–130 [S7]; AACB 2014 endorsement for 30–110, confirmed against the Aussie Normals study of 1,876 adults [S9]). Paediatric sex/age ranges come from CALIPER [S7]. LabCorp does not state its derivation on the test page [S17]. ACG summary statement 7: "Clinicians may rely on local lab ULN ranges for alkaline phosphatase and bilirubin", and the text says that for ALP and bilirubin "establishing normal liver enzyme levels that can be replicated across different reference labs has not been reported as problematic" [S2].

- **Official sex-specific thresholds**: none in a guideline. ACG works in multiples of local ULN: evaluation pathways branch at "alkaline phosphatase 1-2x ULN" and "> 2x ULN", and Recommendations 13–15 require GGT confirmation, then anti-mitochondrial antibody for PBC and MR cholangiography/ERCP with IgG4 for PSC [S2].

- **What is contested**: little. The main sex-relevant facts are (1) LabCorp's own tables show the female upper limit exceeding the male one from age 51 (135 vs 123 IU/L) while single-interval labs apply one limit to everyone [S17 vs S7, S9]; and (2) physiological rises in pregnancy (placental ALP) noted by the NHS database [S7]. No published argument that the female adult ALP limit is set on the wrong population was found in this pass (**unverified**).

- **What a reader with a value inside a borderline band (just above local ULN) is told**: ACG: "An elevation of alkaline phosphatase should be confirmed with an elevation in GGT" [S2]; if confirmed and "1-2x ULN", the pathway says "consider" observation/evaluation, and if "> 2x ULN" with AMA negative, "consider liver" imaging/biopsy [S2]. (Where single-interval labs are used, the ACG's own statement is that local ULN is acceptable for ALP.)

- **Confidence**: **high** for the ranges and guideline text; **low** for any claim of sex-based mis-setting, because none was found.

- **Sources**: S2, S7, S9, S17.

---

### HbA1c and fasting glucose

- **Units**: HbA1c: NGSP % and IFCC mmol/mol; mmol/mol = (% − 2.15) × 10.929 (6.5% = 48 mmol/mol; 5.7% = 39 mmol/mol; 6.4% = 47 mmol/mol, all as printed in the ADA tables [S18]). Glucose: mg/dL × 0.0555 = mmol/L (126 mg/dL = 7.0 mmol/L; 100 mg/dL = 5.6 mmol/L [S18]).

- **Typical lab reference range**:
  - LabCorp HbA1c, test 001453 [S19]: "Hemoglobin (Hb) A1c: 4.8% to 5.6%; Prediabetes: 5.7% to 6.4%; Diabetes: ≥6.5%; Glycemic control for adults with diabetes: <7.0%". Method "Roche Tina Quant". Sex-specific: **no**.
  - LabCorp glucose, test 001032 [S20]: "70−99 mg/dL", enzymatic; "Blood should be drawn in the morning after an overnight fast"; IFG 100–125 mg/dL; diabetes above 125 mg/dL on more than one occasion. Sex-specific: **no**.
  - Leeds NHS [S7]: HbA1c "<42" mmol/mol; "Diabetes is defined by an HbA1c >48 mmol/mol and optimal glycaemic control by an HbA1c <59 mmol/mol", source "WHO Guidance 2011". Glucose (plasma) "fasting 3.5 - 6.0" mmol/L; "Impaired fasting glucose: 6.1 - 6.9 mmol/L; Diabetes: fasting glucose ≥7.0 mmol/L", source "WHO Definition and diagnosis of diabetes mellitus and intermediate hyperglycaemia ... WHO, Geneva, 2006". Sex-specific: **no**.

- **Where that range came from**: these are not population reference intervals but diagnostic decision limits set by the ADA and WHO. ADA Standards of Care 2026, Section 2 (Diabetes Care 2025;49(Suppl 1):S27–S49, DOI 10.2337/dc26-S002) [S18], Table 2.1: "A1C ≥6.5% (≥48 mmol/mol)", "FPG ≥126 mg/dL (≥7.0 mmol/L)", "2-h PG ≥200 mg/dL (≥11.1 mmol/L) during OGTT"; Table 2.2 prediabetes: "A1C 5.7–6.4% (39–47 mmol/mol)", "FPG 100 mg/dL (5.6 mmol/L) to 125 mg/dL (6.9 mmol/L) (IFG)"; "Fasting is defined as no caloric intake for at least 8 h." The ADA requires an NGSP-certified assay standardised to the DCCT (the Leeds note that the 48 mmol/mol limit derives from WHO 2011 is consistent). The Leeds HbA1c non-diabetic cut-off "<42 mmol/mol" (= 6.0%) is a UK convention, not the ADA's 5.7%.

- **Official sex-specific thresholds**: **none**. Neither the ADA 2026 Section 2 text read (first ~200,000 of 275,000 characters, covering the diagnostic criteria and the A1C limitations section) nor LabCorp nor Leeds gives a sex-specific HbA1c or fasting glucose threshold. The ADA does list ethnicity and red-cell conditions: "Black individuals have slightly higher A1C levels (approximately 0.3%)" than non-Hispanic White or Hispanic people; Recommendation 2.4 says that in conditions with an altered A1C–glycaemia relationship "plasma glucose criteria should be used to diagnose diabetes", listing some haemoglobin variants, pregnancy, G6PD deficiency, HIV, and conditions that alter red blood cell turnover; and the limitations section notes "inaccuracies in the presence of conditions such as increased or decreased red blood cell turnover" and "iron deficiency anemia (increases A1C)" [S18]. LabCorp lists "recent significant or chronic blood loss" and pregnancy among conditions that lower HbA1c [S19].

- **What is contested** (short, as requested): Holland et al. 2024, Diabetes Therapy 15(1):99–110, DOI 10.1007/s13300-023-01482-6, PMC10786809 [S21]. Cohort 1: 146,907 people with a single HbA1c ≤50 mmol/mol, one UK laboratory, 2012–2019; cohort 2: 938,678 people, six laboratories, 2019–2021. Under age 50, mean HbA1c was 34.4 ± 5.7 mmol/mol in women vs 36.0 ± 7.5 mmol/mol in men (difference 1.6 mmol/mol, p < 0.0001); at 50 and over the gap was 0.9 mmol/mol. Women's distribution "lagged" men's by up to 10 years. The authors model lowering the cut-off "from HbA1c of 48 to 46 mmol/mol for women under the age of 50" and estimate "an additional 17% of undiagnosed women under 50 in England and Wales" (34,953 women) would be reclassified; they write the threshold "may be too high by approximately 2 mmol/mol in women under the age of 50" and propose that "This may be due to menstruation and hence shorter erythrocyte survival", estimating menstrual loss at about 4% of circulating blood (~1.9 mmol/mol at an HbA1c of 48). This is an observational, single-country analysis and the mechanism is inferred, not measured; no guideline has adopted a sex-specific cut-off. Evidence on sex differences in fasting glucose was not researched in this pass (**unverified**).

- **What a reader with a value inside the contested band (HbA1c 46–47 mmol/mol, 6.4%) is told**: by the ADA she is in the prediabetes range, "A1C 5.7–6.4% (39–47 mmol/mol)" [S18]; by WHO/NHS convention (Leeds) she is above the "<42" non-diabetic range but below the "48" diabetes definition [S7]. LabCorp: "Prediabetes: 5.7% to 6.4%" and "patients with prediabetes should be retested yearly" [S19]. ADA Recommendation 2.1b requires a confirmatory test "in the absence of unequivocal hyperglycemia" [S18].

- **Confidence**: **high** for thresholds and for the Holland numbers (full text opened); **medium** for the mechanism claim, which the authors themselves present as a hypothesis.

- **Sources**: S7, S18, S19, S20, S21.

---

### Lipids: total cholesterol, LDL, HDL, triglycerides

- **Units**: mg/dL (US) and mmol/L (UK, Europe). Cholesterol fractions: mg/dL × 0.02586 = mmol/L (so 40 mg/dL ≈ 1.03 mmol/L, 50 mg/dL ≈ 1.29 mmol/L, 200 mg/dL ≈ 5.17 mmol/L). Triglycerides: mg/dL × 0.01129 = mmol/L (150 mg/dL ≈ 1.7 mmol/L; Leeds' 2.3 mmol/L ≈ 204 mg/dL).

- **Typical lab reference range** (all LabCorp, mg/dL, none sex-specific):
  - Total cholesterol, test 001065 [S26]: ">19 y: Acceptable <200 (or 100−199); Borderline 200−239; High ≥240"; 0–19 y acceptable <170, borderline 170−199, high ≥200. Enzymatic.
  - HDL cholesterol, test 001925 [S27]: ">39 mg/dL", one interval for all ages and sexes; enzymatic. The page says "HDL-C is especially apt to be low in male subjects who are obese and sedentary" but gives no female threshold. Sex-specific: **no**.
  - LDL cholesterol (direct), test 120295 [S28]: "0-19 y 0-109; >19 y 0-99", identical for male and female. Sex-specific: **no**.
  - Triglycerides, test 001172 [S29]: "Normal: <150 mg/dL; Borderline-high: 150−199 mg/dL; High: 200−499 mg/dL; Very high: >500 mg/dL". Sex-specific: **no**.
  - Leeds NHS [S7]: total cholesterol and HDL carry no reference range ("To interpret see published guidelines e.g. the risk tables at the rear of BNF, Q-risk online calculator"); LDL is calculated as "Total chol - HDL - (trigs/2.29)"; triglycerides "fasting <2.3" mmol/L from "European Atherosclerosis Societies recommendations (Europ Heart J 1987; 8: 77-88)". Sex-specific: **no**.
  - University of Washington Medicine (not on the requested list, included because it is the one lab opened that reports HDL by sex) [S30]: "Male ≥40", "Female ≥50" mg/dL; "Low in males: <40 mg/dL", "Low in females: <50 mg/dL".

- **Where that range came from**: these are decision limits, not reference intervals, and the LabCorp tables reproduce NCEP ATP III (2001) [S22] exactly. ATP III Executive Summary Table 2: LDL "<100 Optimal; 100-129 Near optimal/above optimal; 130-159 Borderline high; 160-189 High; ≥190 Very high"; total "<200 Desirable; 200-239 Borderline high; ≥240 High"; HDL "<40 Low; ≥60 High". Full report Table II.3–1: triglycerides ATP III "Normal <150 mg/dL; Borderline-high 150–199; High 200–499; Very high ≥500" (ATP II had used <200, 200–399, 400–1000, >1000) [S23]. ATP III states the panel "Raises categorical low HDL cholesterol from <35 mg/dL to <40 mg/dL because the latter is a better measure of a depressed HDL" [S22]. The ESC/EAS 2019 guideline [S31] replaces category tables with risk-based LDL-C goals and says "To date, no specific goals for HDL-C or TG levels have been determined in clinical trials."

- **Official sex-specific thresholds**:
  - **HDL-C, metabolic syndrome criteria**: ATP III Executive Summary Table 8, "Clinical Identification of the Metabolic Syndrome": "HDL cholesterol: Men <40 mg/dL; Women <50 mg/dL"; also "Triglycerides ≥150 mg/dL", waist "Men >102 cm (>40 in); Women >88 cm (>35 in)", blood pressure "≥130/≥85 mmHg", fasting glucose "≥110 mg/dL"; diagnosis "when three or more of the risk determinants shown in Table 8 are present" [S22]. The same sex-specific HDL values appear in the full report, Table II.3 region: "Women <50 mg/dL" [S23]. The 2005 AHA/NHLBI statement (Grundy et al., Circulation 112:2735–2752) and the 2009 harmonising statement (Alberti et al., Circulation 120:1640–1645) are widely cited as retaining <40/<50; their full texts returned 403 and only the bibliographic records were opened, so retention is **unverified** here [S34, S35].
  - **HDL-C as a risk factor for LDL goals**: ATP III deliberately did **not** make this sex-specific. Table 3 "Major Risk Factors": "Low HDL cholesterol (<40 mg/dL)" with the footnote "HDL cholesterol ≥60 mg/dL counts as a 'negative' risk factor" [S22]. The full report explains: "The level <40 mg/dL was set as a low HDL cholesterol, both in men and women. Women typically have higher HDL cholesterol levels than men, and a cutpoint of <40 mg/dL will identify more men than women with low HDL cholesterol, i.e., approximately one-third of men and about one-fifth of women in the general population. Setting a different cutpoint for categorical low HDL cholesterol for men and women was rejected because it would make many women who are otherwise at low risk eligible for LDL-lowering drugs. On the other hand ... a higher level of HDL cholesterol (<50 mg/dL) is defined as a marginal risk factor in women, which will mandate more intensive lifestyle therapies (weight reduction and increased physical activity)" [S23]. Elsewhere: "moderate (marginal) reductions of HDL-cholesterol levels are observed commonly in women with the syndrome; thus for women, HDL cholesterol <50 mg/dL counts as one indicator in the diagnosis of the metabolic syndrome" and "When triglyceride levels are greater than 150 mg/dL, HDL-cholesterol concentrations frequently are <40 mg/dL in men (or <50 mg/dL in women)" [S23]. ATP III also sets age as a risk factor at "men ≥45 years; women ≥55 years" because "the onset of CHD is delayed by some 10–15 years in women" [S22, S23].
  - **Current ACC/AHA**: the 2018 multisociety cholesterol guideline (Grundy et al., JACC 2019;73(24):e285–e350, DOI 10.1016/j.jacc.2018.11.003) [S32] could not be opened (403); its PubMed record was. According to the Circulation review by Agarwala et al. 2020 [S33], which was opened, the 2018 guideline "introduced the concept of risk-enhancing factors that are specific to women" and "The risk-enhancing factors mentioned in these guidelines were premature menopause and pre-eclampsia"; these are used in borderline/intermediate-risk adults to inform statin decisions. No sex-specific lipid threshold (LDL or HDL) in the 2018 guideline was verified; the LDL thresholds (≥190, 70–189 mg/dL) are not quoted here because the primary text was not opened (**unverified**).
  - **Current ESC/EAS 2019** [S31]: no sex-specific lipid thresholds were found in the ~300,000 characters read. The guideline says: for raising HDL-C "the currently available therapies do not reduce the risk of ASCVD"; at very high HDL-C "there appears to be an increased risk of ASCVD, so at such levels HDL-C cannot be used as a risk predictor"; "To date, no specific goals for HDL-C or TG levels have been determined in clinical trials." On women: "Risk estimates are lower in women than in men. However, risk is only deferred in women; the risk of a 60-year-old woman is similar to that of a 50-year-old man"; screening "should be considered in men >40 years old" and "in women >50 years of age or post-menopausal"; "women have not been adequately represented in statin trials"; and oestrogen replacement "cannot be recommended for CVD prevention in women"; "No lipid-lowering drugs should be administered during pregnancy and the period of breastfeeding."

- **What is contested**:
  - **The HDL "low" threshold for women is an admitted compromise.** ATP III's own text says a sex-specific categorical cut-point was "rejected because it would make many women who are otherwise at low risk eligible for LDL-lowering drugs" and that the <50 mg/dL female value is a "marginal risk factor" reserved for the metabolic syndrome definition [S23]. Labs then print one number: LabCorp ">39" for everyone [S27], UW "Female ≥50" [S30]. A woman at 45 mg/dL is therefore "normal" at LabCorp, "low" at UW, not a counted risk factor under ATP III Table 3, and one of five metabolic-syndrome criteria under ATP III Table 8.
  - **Menstrual-cycle variation** (Mumford et al. 2010, J Clin Endocrinol Metab 95(9):E80–E85, DOI 10.1210/jc.2010-0109; BioCycle Study) [S24]: 259 healthy, regularly menstruating women aged 18–44, up to two cycles each, up to eight visits per cycle. Medians (IQR), mg/dL: total cholesterol 160 (36) at menses, 166 (39) mid-follicular, 164 late follicular, 162 at ovulation, 161 early/mid-luteal, 157 (40.5) late luteal; HDL 48 (17) at menses rising to 52 at late follicular/ovulation/early luteal and 50 late luteal; LDL 98 at menses, 102 mid-follicular, 96 late luteal; triglycerides 51.5 at menses, 56 mid-follicular, 49 late luteal. Abstract: "HDL levels were highest around ovulation"; "Total and LDL cholesterol were lower during the luteal phase as compared with the follicular phase"; "More women were classified above the desirable range" when measured in the follicular phase. Within-woman mean change in total cholesterol over the cycle: 19% (27.7 mg/dL, SD 11.1); between-woman median changes: TC −3.0%, HDL +2.0%, LDL −4.9%. Classification above thresholds (cycle 1): TC ≥200 mg/dL in 14.3% of women at mid-follicular vs 7.9% at late luteal; LDL ≥130 mg/dL in 17.8% mid-follicular vs 10.5% late luteal; 51 women (19.7%) exceeded TC 200 at least once but only 13 (5%) at all eight visits. Authors: "lipoprotein cholesterol measurements should be appropriately timed to menstrual cycle phase" and "standardizing the timing of lipid measurements may improve the interpretability of results". The NICHD release adds: "It's more likely cholesterol levels will be elevated in women before ovulation" and that testing late in the cycle "might do away with the need for an additional test to confirm a high cholesterol reading" [S25]. No guideline opened in this pass instructs timing lipid tests to cycle phase.
  - **LDL, total cholesterol, triglycerides**: no sex-specific threshold exists in any document opened; the only sex-specific content is the cycle variation above and the age/menopause framing in ATP III and ESC [S22, S23, S31].

- **What a reader with a value inside the contested band (woman with HDL 40–49 mg/dL) is told**:
  - ATP III: not "Low HDL cholesterol (<40 mg/dL)" for risk-factor counting [S22]; but "for women, HDL cholesterol <50 mg/dL counts as one indicator in the diagnosis of the metabolic syndrome", a "marginal risk factor in women, which will mandate more intensive lifestyle therapies (weight reduction and increased physical activity)" [S23]; metabolic syndrome is diagnosed "when three or more of the risk determinants shown in Table 8 are present" [S22].
  - ESC/EAS 2019: no HDL goal; "the currently available therapies do not reduce the risk of ASCVD" by raising HDL-C [S31].
  - For total cholesterol 200–239 or LDL 130–159 mg/dL measured in the follicular phase: no guideline text addresses cycle timing; the BioCycle authors recommend timing and standardisation [S24, S25].

- **Confidence**: **high** for the origin of <40/<50 (ATP III executive summary and full report opened and quoted) and for the BioCycle numbers (PMC full text opened); **medium** for current ACC/AHA guidance (verified only through a Circulation review, not the guideline itself); **high** for ESC 2019 quotations.

- **Sources**: S7, S22, S23, S24, S25, S26, S27, S28, S29, S30, S31, S32, S33, S34, S35.

---

## Sources (all opened unless marked)

1. **S1** Prati D, Taioli E, Zanella A, et al. Updated definitions of healthy ranges for serum alanine aminotransferase levels. Ann Intern Med 2002;137(1):1–10. DOI 10.7326/0003-4819-137-1-200207020-00006. https://pubmed.ncbi.nlm.nih.gov/12093239/ (abstract opened)
2. **S2** Kwo PY, Cohen SM, Lim JK. ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries. Am J Gastroenterol 2017;112(1):18–35. DOI 10.1038/ajg.2016.517. PubMed https://pubmed.ncbi.nlm.nih.gov/27995906/; full PDF read from https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/0/123048/files/2023/07/AJG-Kwo-et-al-ACG-Liver-Chemistries-Guideline-2017.pdf
3. **S3** Ruhl CE, Everhart JE. Upper limits of normal for alanine aminotransferase activity in the United States population. Hepatology 2012;55(2):447–454. DOI 10.1002/hep.24725. https://pubmed.ncbi.nlm.nih.gov/21987480/
4. **S4** LabCorp. New ALT Reference Intervals for Children and Adults (technical bulletin, c. 2013; references accessed January 2013). https://labcorp.com/assets/5286
5. **S5** LabCorp. Alanine Aminotransferase (ALT), test 001545. https://www.labcorp.com/tests/001545/alanine-aminotransferase-alt
6. **S6** ARUP Laboratories. Alanine Aminotransferase, Serum or Plasma, test 0020008. https://ltd.aruplab.com/Tests/Pub/0020008 ; sample report (Feb 2022) https://www.aruplab.com/Testing-Information/resources/HotLines/Sample_Reports/Feb2022/0020008_Alanine_Aminotransferase_Serum_or_Plasma_ALT.pdf
7. **S7** Leeds Teaching Hospitals NHS Trust. Blood Sciences Reference Range Database, BSHC-REC-317a/b v3.20 (August 2026). https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf
8. **S8** Alfred Health Pathology Handbook. ALT (Alanine aminotransferase). https://pathology.alfred.org.au/handbook/?testid=543
9. **S9** Koerbin G, Tate JR, on behalf of the AACB Committee for Common Reference Intervals. Harmonising Adult Reference Intervals in Australia and New Zealand – the Continuing Story. Clin Biochem Rev 2016;37(3):121–129. PMID 27872506. https://pmc.ncbi.nlm.nih.gov/articles/PMC5111244
10. **S10** Valenti L, Pelusi S, Bianco C, ... Prati D. Definition of Healthy Ranges for Alanine Aminotransferase Levels: A 2021 Update. Hepatol Commun 2021. DOI 10.1002/hep4.1794. PDF read from https://discovery.ucl.ac.uk/id/eprint/10134833/1/Tsochatzis_Valenti%20healthy%20ALT%20range%20Hepatology%20communications%202021.pdf
11. **S11** Clinical Laboratory News (ADLM). The Quest to Standardize ALT Reference Intervals. Jan/Feb 2024. https://myadlm.org/cln/articles/2024/januaryfebruary/the-quest-to-standardize-alt-reference-intervals
12. **S12** Ceriotti F, Henny J, Queraltó J, et al. Common reference intervals for aspartate aminotransferase (AST), alanine aminotransferase (ALT) and γ-glutamyl transferase (GGT) in serum: results from an IFCC multicenter study. Clin Chem Lab Med 2010;48(11):1593–1601. DOI 10.1515/cclm.2010.315. PMID 21034260 (abstract opened via Europe PMC)
13. **S13** Alfred Health Pathology Handbook. AST (Aspartate AminoTransferase). https://pathology.alfred.org.au/handbook/?testid=345
14. **S14** LabCorp. Aspartate Aminotransferase (AST), test 001123. https://www.labcorp.com/tests/001123/aspartate-aminotransferase-ast
15. **S15** LabCorp. Gamma-Glutamyl Transferase (GGT), test 001958. https://www.labcorp.com/tests/001958/gamma-glutamyl-transferase-ggt
16. **S16** Alfred Health Pathology Handbook. gamma GT. https://pathology.alfred.org.au/handbook/?testid=409
17. **S17** LabCorp. Alkaline Phosphatase, test 001107. https://www.labcorp.com/tests/001107/alkaline-phosphatase
18. **S18** American Diabetes Association Professional Practice Committee. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026. Diabetes Care 2025;49(Suppl 1):S27–S49. DOI 10.2337/dc26-S002. https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183
19. **S19** LabCorp. Hemoglobin A1c, test 001453. https://www.labcorp.com/tests/001453/hemoglobin-a1c
20. **S20** LabCorp. Glucose, test 001032. https://www.labcorp.com/tests/001032/glucose
21. **S21** Holland D, Fryer AA, Stedman M, et al. Is the Current Cut Point for Glycated Haemoglobin (HbA1c) Correct for Diagnosing Diabetes Mellitus in Premenopausal Women? Evidence to Inform Discussion. Diabetes Ther 2024;15(1):99–110 (online 30 Sep 2023). DOI 10.1007/s13300-023-01482-6. PMC10786809 (full text opened via Europe PMC); erratum DOI 10.1007/s13300-023-01498-y
22. **S22** National Cholesterol Education Program. Third Report of the NCEP Expert Panel on Detection, Evaluation, and Treatment of High Blood Cholesterol in Adults (Adult Treatment Panel III), Executive Summary. NIH Publication No. 01-3670, May 2001. https://www.nhlbi.nih.gov/files/docs/guidelines/atp3xsum.pdf
23. **S23** NCEP ATP III Full Report (2002). https://www.nhlbi.nih.gov/files/docs/resources/heart/atp-3-cholesterol-full-report.pdf
24. **S24** Mumford SL, Schisterman EF, Siega-Riz AM, et al. A Longitudinal Study of Serum Lipoproteins in Relation to Endogenous Reproductive Hormones during the Menstrual Cycle: Findings from the BioCycle Study. J Clin Endocrinol Metab 2010;95(9):E80–E85. DOI 10.1210/jc.2010-0109. https://pmc.ncbi.nlm.nih.gov/articles/PMC2936053
25. **S25** NICHD news release, 10 Aug 2010. Women's Cholesterol Levels Vary with Phase of Menstrual Cycle. https://www.nichd.nih.gov/newsroom/releases/081010-womens-cholesterol-levels
26. **S26** LabCorp. Cholesterol, Total, test 001065. https://www.labcorp.com/tests/001065/cholesterol-total
27. **S27** LabCorp. High-density Lipoprotein Cholesterol (HDL-C), test 001925. https://www.labcorp.com/tests/001925/high-density-lipoprotein-cholesterol-hdl-c
28. **S28** LabCorp. LDL Cholesterol, Direct, test 120295. https://www.labcorp.com/tests/120295/ldl-cholesterol-direct
29. **S29** LabCorp. Triglycerides, test 001172. https://www.labcorp.com/tests/001172/triglycerides
30. **S30** University of Washington Medicine Laboratory Medicine. HDL Cholesterol. https://testguide.labmed.uw.edu/public/view/HDL
31. **S31** Mach F, Baigent C, Catapano AL, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J 2020;41(1):111–188. https://academic.oup.com/eurheartj/article/41/1/111/5556353
32. **S32** Grundy SM, Stone NJ, Bailey AL, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. J Am Coll Cardiol 2019;73(24):e285–e350. DOI 10.1016/j.jacc.2018.11.003. https://pubmed.ncbi.nlm.nih.gov/30423393/ (**record only; full text not opened, 403**)
33. **S33** Agarwala A, Michos ED, Samad Z, Ballantyne CM, Virani SS. The Use of Sex-Specific Factors in the Assessment of Women's Cardiovascular Risk. Circulation 2020;141(7):592–599. DOI 10.1161/CIRCULATIONAHA.119.043429. https://pmc.ncbi.nlm.nih.gov/articles/PMC7032610
34. **S34** Grundy SM, Cleeman JI, Daniels SR, et al. Diagnosis and management of the metabolic syndrome: an AHA/NHLBI Scientific Statement. Circulation 2005;112(17):2735–2752. DOI 10.1161/CIRCULATIONAHA.105.169404. PMID 16157765 (**record only; full text not opened, 403**)
35. **S35** Alberti KGMM, Eckel RH, Grundy SM, et al. Harmonizing the metabolic syndrome: a joint interim statement. Circulation 2009;120(16):1640–1645. DOI 10.1161/CIRCULATIONAHA.109.192644. https://pubmed.ncbi.nlm.nih.gov/19805654/ (abstract only; cut points not in abstract)
36. **S36** American Family Physician, Tips from Other Journals, 15 Nov 2002: digest of Prati et al. https://www.aafp.org/pubs/afp/issues/2002/1115/p1991.html

---

## JSON

```json
[
  {
    "id": "alt",
    "name": "ALT (alanine aminotransferase)",
    "units": [{"unit":"U/L","toCanonical":1},{"unit":"IU/L","toCanonical":1},{"unit":"ukat/L","toCanonical":60},{"unit":"nkat/L","toCanonical":0.06}],
    "canonicalUnit": "U/L",
    "labRange": {"female": [0, 33], "male": [0, 45], "any": null, "source": "LabCorp (female <33, male <45 U/L, adults 18+); ARUP prints 5-50 'by report'; Leeds NHS adults <=40 (no sex split); RCPA/AACB harmonised male 5-40, female 5-35", "url": "https://labcorp.com/assets/5286"},
    "origin": "Lab limits are conventionally the central 95% of a 'healthy' reference group, and for ALT those groups historically included people with undiagnosed fatty liver and were assembled without regard to BMI; a survey of 67 laboratories in one US state found ALT upper limits from 31 to 72 U/L, set variously from manufacturer inserts, local controls or textbooks [S2]. LabCorp derived its current female <33 / male <45 U/L from an internal study of more than 260,000 subjects and cites Prati 2002 as a reason for lowering [S4]; Leeds NHS uses a Siemens insert traced to a 2000 textbook [S7]; the Australasian harmonised 40/35 was confirmed against 1,876 healthy adults [S9].",
    "sexSpecific": {"exists": true, "female": 25, "male": 33, "what": "ACG 2017 'true healthy normal' upper limit of ALT (range quoted as 19-25 U/L women, 29-33 U/L men); values above should be assessed", "source": "[S2]"},
    "contested": {"band": [19, 50], "summary": "Prati 2002 (6,835 screened blood donors, Milan) set the 95th-percentile limit at 30 U/L men and 19 U/L women against the then-current 40/30, raising sensitivity for HCV viraemia from 55% to 76.3% [S1]. Ruhl & Everhart 2012 (NHANES, 3,747 low-risk vs 259 HCV-positive) found optimal cut-offs of 29 U/L men and 22 U/L women, which would label 28.3% of US women 'elevated' [S3]. ACG 2017 adopted 19-25 U/L for women, but laboratories still report 33-50 U/L, and the 2021 IFCC-standardised re-run of the Prati cohort (21,296 donors) gave 30 U/L for women because the standardised assay reads higher [S10, S11].", "sources": ["S1","S2","S3","S4","S10","S11","S12"]},
    "guidanceInBand": "ACG 2017: 'A normal ALT should be <29-33 IU/l in males and 19-25 IU/l in females. Minimal elevations may be approached by a history and examination, discontinuation of hepatotoxic medicines and all alcohol consumption, in addition to an evaluation for hemochromatosis, fatty liver and viral hepatitis.' A borderline elevation is '<2X ULN'; for levels <5X ULN the history and tests 'should assess for viral hepatitis B and C, alcoholic and NAFLD, hemochromatosis, Wilson's disease, alpha-1-anti-trypsin deficiency, autoimmune hepatitis and consider drugs/supplement related injury' (strong recommendation, very low level of evidence) [S2].",
    "confidence": "high",
    "sources": [
      {"id":"S1","title":"Updated definitions of healthy ranges for serum alanine aminotransferase levels","publisher":"Annals of Internal Medicine (Prati et al.)","year":2002,"url":"https://doi.org/10.7326/0003-4819-137-1-200207020-00006"},
      {"id":"S2","title":"ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries","publisher":"American Journal of Gastroenterology (Kwo, Cohen, Lim)","year":2017,"url":"https://doi.org/10.1038/ajg.2016.517"},
      {"id":"S3","title":"Upper limits of normal for alanine aminotransferase activity in the United States population","publisher":"Hepatology (Ruhl & Everhart)","year":2012,"url":"https://doi.org/10.1002/hep.24725"},
      {"id":"S4","title":"New ALT Reference Intervals for Children and Adults","publisher":"LabCorp","year":2013,"url":"https://labcorp.com/assets/5286"},
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S9","title":"Harmonising Adult Reference Intervals in Australia and New Zealand - the Continuing Story","publisher":"Clinical Biochemist Reviews (Koerbin & Tate, AACB)","year":2016,"url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC5111244"},
      {"id":"S10","title":"Definition of Healthy Ranges for Alanine Aminotransferase Levels: A 2021 Update","publisher":"Hepatology Communications (Valenti et al.)","year":2021,"url":"https://doi.org/10.1002/hep4.1794"},
      {"id":"S11","title":"The Quest to Standardize ALT Reference Intervals","publisher":"Clinical Laboratory News, ADLM","year":2024,"url":"https://myadlm.org/cln/articles/2024/januaryfebruary/the-quest-to-standardize-alt-reference-intervals"},
      {"id":"S12","title":"Common reference intervals for AST, ALT and GGT in serum: results from an IFCC multicenter study","publisher":"Clinical Chemistry and Laboratory Medicine (Ceriotti et al.)","year":2010,"url":"https://doi.org/10.1515/cclm.2010.315"}
    ]
  },
  {
    "id": "ast",
    "name": "AST (aspartate aminotransferase)",
    "units": [{"unit":"U/L","toCanonical":1},{"unit":"IU/L","toCanonical":1},{"unit":"ukat/L","toCanonical":60}],
    "canonicalUnit": "U/L",
    "labRange": {"female": [0, 30], "male": [0, 35], "any": [0, 35], "source": "RCPA/AACB harmonised via Alfred Health (male <35, female <30 U/L); Leeds NHS <35 all adults; LabCorp prints no interval on its test page", "url": "https://pathology.alfred.org.au/handbook/?testid=345"},
    "origin": "The IFCC multicentre reference study (765 adults, 411 women) found the sex difference in AST upper limits was only 1.7 U/L and so defined a single interval of 11-34 U/L [S12]; Leeds NHS adopts this as <35 [S7]. The Australasian harmonisation committee nevertheless adopted sex-specific limits, 5-35 U/L men and 5-30 U/L women, confirmed against 1,876 healthy adults [S9]. The ACG says AST and ALT ranges 'can vary between different labs' and works in multiples of the local upper limit [S2].",
    "sexSpecific": {"exists": true, "female": 30, "male": 35, "what": "Laboratory harmonised upper reference limit (RCPA/AACB, Australia/NZ); no clinical guideline sets a sex-specific AST threshold", "source": "[S9]"},
    "contested": {"band": [30, 35], "summary": "Reference studies disagree on whether AST needs a sex split: the IFCC study found a 1.7 U/L sex gap and used one interval, 11-34 U/L [S12], while RCPA/AACB adopted 35/30 [S9]. ACG cites a German cohort in which AST >18 U/L carried 3x all-cause mortality and a Korean cohort in which AST 30-39 IU/L carried 8x liver-related death risk versus <20, placing the top of every lab range inside a risk gradient [S2].", "sources": ["S2","S9","S12"]},
    "guidanceInBand": "ACG 2017: 'A borderline AST and/or ALT elevation is defined as <2X ULN'; for levels <5X ULN, 'the history and laboratory testing should assess for viral hepatitis B and C, alcoholic and NAFLD, hemochromatosis, Wilson's disease, alpha-1-anti-trypsin deficiency, autoimmune hepatitis and consider drugs/supplement related injury' [S2].",
    "confidence": "medium",
    "sources": [
      {"id":"S2","title":"ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries","publisher":"American Journal of Gastroenterology","year":2017,"url":"https://doi.org/10.1038/ajg.2016.517"},
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S9","title":"Harmonising Adult Reference Intervals in Australia and New Zealand - the Continuing Story","publisher":"Clinical Biochemist Reviews","year":2016,"url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC5111244"},
      {"id":"S12","title":"Common reference intervals for AST, ALT and GGT in serum: results from an IFCC multicenter study","publisher":"Clinical Chemistry and Laboratory Medicine","year":2010,"url":"https://doi.org/10.1515/cclm.2010.315"},
      {"id":"S13","title":"AST (Aspartate AminoTransferase) - Pathology Handbook","publisher":"Alfred Health","year":2026,"url":"https://pathology.alfred.org.au/handbook/?testid=345"},
      {"id":"S14","title":"Aspartate Aminotransferase (AST), test 001123","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001123/aspartate-aminotransferase-ast"}
    ]
  },
  {
    "id": "ggt",
    "name": "GGT (gamma-glutamyl transferase)",
    "units": [{"unit":"U/L","toCanonical":1},{"unit":"IU/L","toCanonical":1},{"unit":"ukat/L","toCanonical":60}],
    "canonicalUnit": "U/L",
    "labRange": {"female": [0, 60], "male": [0, 65], "any": null, "source": "LabCorp (female 0-60, male 0-65 IU/L); Leeds NHS female 6-40, male 12-68; RCPA/AACB harmonised female 5-35, male 5-50", "url": "https://www.labcorp.com/tests/001958/gamma-glutamyl-transferase-ggt"},
    "origin": "The IFCC multicentre study derived GGT intervals of 6-40 U/L in women and 12-68 U/L in men after excluding Nordic samples whose upper limits were higher, and concluded a worldwide common GGT interval 'appears unlikely due to differences among populations' [S12]; Leeds NHS uses exactly these [S7]. The Australasian committee found 'Most data sets show male activities are greater than for females' and set 5-50 men, 5-35 women [S9]. LabCorp's 0-65/0-60 derivation is not stated on its test page [S15].",
    "sexSpecific": {"exists": true, "female": 35, "male": 50, "what": "Laboratory harmonised upper reference limit (RCPA/AACB); IFCC study gives 40/68; no clinical guideline sets a sex-specific GGT threshold", "source": "[S9]"},
    "contested": {"band": [35, 60], "summary": "Screened reference populations put the female upper limit at 35-40 U/L [S9, S12], but LabCorp reports to 60 U/L with only a 5 U/L gap from men [S15], so a woman at 50 U/L is normal at LabCorp and above range in the NHS trust and Australian labs opened. The IFCC authors found GGT limits differ by region, so the female limit is population-dependent [S12].", "sources": ["S9","S12","S15","S7"]},
    "guidanceInBand": "ACG 2017, Recommendation 13: 'An elevation of alkaline phosphatase should be confirmed with an elevation in GGT. Given its lack of specificity for liver disease, GGT should not be used as a screening test for underlying liver disease in the absence of other abnormal liver chemistries. (Strong recommendation, very low level of evidence)' [S2].",
    "confidence": "medium",
    "sources": [
      {"id":"S2","title":"ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries","publisher":"American Journal of Gastroenterology","year":2017,"url":"https://doi.org/10.1038/ajg.2016.517"},
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S9","title":"Harmonising Adult Reference Intervals in Australia and New Zealand - the Continuing Story","publisher":"Clinical Biochemist Reviews","year":2016,"url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC5111244"},
      {"id":"S12","title":"Common reference intervals for AST, ALT and GGT in serum: results from an IFCC multicenter study","publisher":"Clinical Chemistry and Laboratory Medicine","year":2010,"url":"https://doi.org/10.1515/cclm.2010.315"},
      {"id":"S15","title":"Gamma-Glutamyl Transferase (GGT), test 001958","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001958/gamma-glutamyl-transferase-ggt"},
      {"id":"S16","title":"gamma GT - Pathology Handbook","publisher":"Alfred Health","year":2026,"url":"https://pathology.alfred.org.au/handbook/?testid=409"}
    ]
  },
  {
    "id": "alp",
    "name": "Alkaline phosphatase (ALP)",
    "units": [{"unit":"U/L","toCanonical":1},{"unit":"IU/L","toCanonical":1},{"unit":"ukat/L","toCanonical":60}],
    "canonicalUnit": "U/L",
    "labRange": {"female": [41, 116], "male": [47, 123], "any": [30, 130], "source": "LabCorp adults 21-50 y (female 41-116, male 47-123 IU/L; 51-80 y female 49-135, male 47-123); Leeds NHS adult 30-130 (Pathology Harmony); RCPA/AACB adult 30-110", "url": "https://www.labcorp.com/tests/001107/alkaline-phosphatase"},
    "origin": "Adult single intervals come from national harmonisation projects: UK Pathology Harmony 2011 (30-130 U/L, used by Leeds NHS) [S7] and the AACB 2014 endorsement (30-110 U/L, confirmed against 1,876 healthy adults) [S9]; paediatric sex- and age-specific ranges come from CALIPER [S7]. ACG says clinicians 'may rely on local lab ULN ranges for alkaline phosphatase and bilirubin' because replicating ALP ranges across labs 'has not been reported as problematic' [S2]. The NHS database notes ALP 'changes quite markedly throughout life with peaks in childhood and puberty (and pregnancy)' [S7].",
    "sexSpecific": {"exists": true, "female": 135, "male": 123, "what": "LabCorp upper limit at age 51-80 (female limit exceeds male after 50); laboratory table only, no guideline threshold", "source": "[S17]"},
    "contested": {"band": null, "summary": "No published argument that the adult female ALP limit is set on the wrong population was found in this pass. The sex-relevant facts are that LabCorp's female upper limit rises above the male one after age 50 (135 vs 123 IU/L) while single-interval labs apply one limit to everyone [S17 vs S7, S9], and that pregnancy raises ALP physiologically [S7].", "sources": ["S7","S9","S17"]},
    "guidanceInBand": "ACG 2017: 'An elevation of alkaline phosphatase should be confirmed with an elevation in GGT'; evaluation branches at 'alkaline phosphatase 1-2x ULN' versus '> 2x ULN', with anti-mitochondrial antibody testing for PBC and MR cholangiography/ERCP with IgG4 for PSC recommended for hepatic ALP elevation [S2].",
    "confidence": "high",
    "sources": [
      {"id":"S2","title":"ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries","publisher":"American Journal of Gastroenterology","year":2017,"url":"https://doi.org/10.1038/ajg.2016.517"},
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S9","title":"Harmonising Adult Reference Intervals in Australia and New Zealand - the Continuing Story","publisher":"Clinical Biochemist Reviews","year":2016,"url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC5111244"},
      {"id":"S17","title":"Alkaline Phosphatase, test 001107","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001107/alkaline-phosphatase"}
    ]
  },
  {
    "id": "hba1c",
    "name": "HbA1c (glycated haemoglobin)",
    "units": [{"unit":"%","toCanonical":1},{"unit":"mmol/mol","toCanonical":null}],
    "conversionNote": "Affine, not a factor: mmol/mol = (% - 2.15) * 10.929; % = mmol/mol / 10.929 + 2.15. Check pairs from ADA 2026: 6.5% = 48, 5.7% = 39, 6.4% = 47 mmol/mol [S18].",
    "canonicalUnit": "%",
    "labRange": {"female": null, "male": null, "any": [4.8, 5.6], "source": "LabCorp (4.8-5.6%; prediabetes 5.7-6.4%; diabetes >=6.5%); Leeds NHS <42 mmol/mol, diabetes >48 mmol/mol", "url": "https://www.labcorp.com/tests/001453/hemoglobin-a1c"},
    "origin": "These are diagnostic decision limits, not population reference intervals. ADA Standards of Care 2026 Table 2.1 sets diabetes at 'A1C >=6.5% (>=48 mmol/mol)' and Table 2.2 prediabetes at 'A1C 5.7-6.4% (39-47 mmol/mol)', requiring an NGSP-certified assay standardised to the DCCT [S18]; the NHS uses the WHO 2011 48 mmol/mol limit and a local non-diabetic cut-off of <42 mmol/mol [S7]. The ADA notes 'Black individuals have slightly higher A1C levels (approximately 0.3%)' and that in conditions with altered red cell turnover, pregnancy, some haemoglobin variants, G6PD deficiency and HIV, 'plasma glucose criteria should be used to diagnose diabetes' [S18].",
    "sexSpecific": {"exists": false, "female": null, "male": null, "what": "No guideline or lab opened sets a sex-specific HbA1c threshold", "source": "[S18]"},
    "contested": {"band": [6.35, 6.5], "summary": "Holland et al. 2024 (146,907 single-test UK adults, replicated in 938,678 from six laboratories) found women under 50 had mean HbA1c 34.4 vs 36.0 mmol/mol in men (1.6 mmol/mol lower, p<0.0001; 0.9 mmol/mol at 50+), modelled lowering the diagnostic cut-off from 48 to 46 mmol/mol (6.5% to 6.4%) for women under 50, estimated 34,953 additional women in England and Wales would be reclassified, and attributed the gap to 'menstruation and hence shorter erythrocyte survival' (about 4% of circulating blood, ~1.9 mmol/mol) [S21]. The mechanism is inferred and no guideline has adopted a sex-specific cut-off.", "sources": ["S21","S18"]},
    "guidanceInBand": "ADA 2026: prediabetes is 'A1C 5.7-6.4% (39-47 mmol/mol)' and diabetes 'A1C >=6.5% (>=48 mmol/mol)'; in the absence of unequivocal hyperglycaemia a confirmatory test is required [S18]. LabCorp: 'Prediabetes: 5.7% to 6.4%'; patients with prediabetes should be retested yearly [S19].",
    "confidence": "high",
    "sources": [
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S18","title":"2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2026","publisher":"Diabetes Care (American Diabetes Association)","year":2026,"url":"https://doi.org/10.2337/dc26-S002"},
      {"id":"S19","title":"Hemoglobin A1c, test 001453","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001453/hemoglobin-a1c"},
      {"id":"S21","title":"Is the Current Cut Point for Glycated Haemoglobin (HbA1c) Correct for Diagnosing Diabetes Mellitus in Premenopausal Women? Evidence to Inform Discussion","publisher":"Diabetes Therapy (Holland et al.)","year":2024,"url":"https://doi.org/10.1007/s13300-023-01482-6"}
    ]
  },
  {
    "id": "glucose_fasting",
    "name": "Fasting plasma glucose",
    "units": [{"unit":"mg/dL","toCanonical":1},{"unit":"mmol/L","toCanonical":18.0}],
    "canonicalUnit": "mg/dL",
    "labRange": {"female": null, "male": null, "any": [70, 99], "source": "LabCorp (70-99 mg/dL); Leeds NHS fasting 3.5-6.0 mmol/L", "url": "https://www.labcorp.com/tests/001032/glucose"},
    "origin": "Decision limits from the ADA: Table 2.1 diabetes 'FPG >=126 mg/dL (>=7.0 mmol/L)', Table 2.2 prediabetes 'FPG 100 mg/dL (5.6 mmol/L) to 125 mg/dL (6.9 mmol/L) (IFG)', with 'Fasting is defined as no caloric intake for at least 8 h' [S18]. The NHS uses WHO 2006: impaired fasting glucose 6.1-6.9 mmol/L, diabetes >=7.0 mmol/L [S7]. LabCorp notes fasting glucose 'tends to be higher in the morning than in the afternoon' [S20].",
    "sexSpecific": {"exists": false, "female": null, "male": null, "what": "No sex-specific fasting glucose threshold in ADA 2026, WHO-based NHS ranges, or LabCorp", "source": "[S18]"},
    "contested": {"band": null, "summary": "Evidence on sex differences in fasting glucose distributions was not researched in this pass (unverified). The only verified sex-related point is the ADA's instruction that in pregnancy and in conditions altering red cell turnover, plasma glucose rather than A1C should be used for diagnosis [S18].", "sources": ["S18"]},
    "guidanceInBand": "ADA 2026: 'FPG 100 mg/dL (5.6 mmol/L) to 125 mg/dL (6.9 mmol/L) (IFG)' is prediabetes; diabetes requires 'FPG >=126 mg/dL (>=7.0 mmol/L)' with confirmation absent unequivocal hyperglycaemia [S18].",
    "confidence": "high",
    "sources": [
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S18","title":"2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2026","publisher":"Diabetes Care (American Diabetes Association)","year":2026,"url":"https://doi.org/10.2337/dc26-S002"},
      {"id":"S20","title":"Glucose, test 001032","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001032/glucose"}
    ]
  },
  {
    "id": "total_cholesterol",
    "name": "Total cholesterol",
    "units": [{"unit":"mg/dL","toCanonical":1},{"unit":"mmol/L","toCanonical":38.67}],
    "canonicalUnit": "mg/dL",
    "labRange": {"female": null, "male": null, "any": [100, 199], "source": "LabCorp (>19 y: Acceptable <200 (or 100-199); Borderline 200-239; High >=240)", "url": "https://www.labcorp.com/tests/001065/cholesterol-total"},
    "origin": "Decision limits reproduced from NCEP ATP III (2001) Table 2: total cholesterol '<200 Desirable; 200-239 Borderline high; >=240 High' [S22]. ATP III is an expert-panel classification built on LDL as the primary target; the NHS trust database prints no range and refers to risk calculators [S7].",
    "sexSpecific": {"exists": false, "female": null, "male": null, "what": "No sex-specific total cholesterol threshold in ATP III, ESC/EAS 2019 or the labs opened", "source": "[S22]"},
    "contested": {"band": [157, 200], "summary": "BioCycle (259 women aged 18-44, up to 16 visits over two cycles) found median total cholesterol varied from 166 mg/dL mid-follicular to 157 late luteal, with a within-woman mean change of 19% (27.7 mg/dL) over the cycle; 14.3% of women were >=200 mg/dL at mid-follicular versus 7.9% late luteal, and 19.7% exceeded 200 at least once but only 5% at every visit [S24]. The authors say measurements 'should be appropriately timed to menstrual cycle phase' [S24]; no guideline opened addresses this.", "sources": ["S24","S25"]},
    "guidanceInBand": "ATP III: '200-239 Borderline high'; if non-fasting total cholesterol is >=200 mg/dL 'a followup lipoprotein profile is needed for appropriate management based on LDL' [S22]. No guideline text on cycle timing was found; the BioCycle authors recommend standardising the timing of lipid measurement [S24].",
    "confidence": "high",
    "sources": [
      {"id":"S22","title":"ATP III Executive Summary (NIH Publication 01-3670)","publisher":"National Cholesterol Education Program, NHLBI","year":2001,"url":"https://www.nhlbi.nih.gov/files/docs/guidelines/atp3xsum.pdf"},
      {"id":"S24","title":"A Longitudinal Study of Serum Lipoproteins in Relation to Endogenous Reproductive Hormones during the Menstrual Cycle: Findings from the BioCycle Study","publisher":"Journal of Clinical Endocrinology and Metabolism (Mumford et al.)","year":2010,"url":"https://doi.org/10.1210/jc.2010-0109"},
      {"id":"S25","title":"Women's Cholesterol Levels Vary with Phase of Menstrual Cycle","publisher":"NICHD news release","year":2010,"url":"https://www.nichd.nih.gov/newsroom/releases/081010-womens-cholesterol-levels"},
      {"id":"S26","title":"Cholesterol, Total, test 001065","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001065/cholesterol-total"}
    ]
  },
  {
    "id": "ldl",
    "name": "LDL cholesterol",
    "units": [{"unit":"mg/dL","toCanonical":1},{"unit":"mmol/L","toCanonical":38.67}],
    "canonicalUnit": "mg/dL",
    "labRange": {"female": null, "male": null, "any": [0, 99], "source": "LabCorp LDL direct (>19 y: 0-99, same for male and female)", "url": "https://www.labcorp.com/tests/120295/ldl-cholesterol-direct"},
    "origin": "ATP III Table 2: LDL '<100 Optimal; 100-129 Near optimal/above optimal; 130-159 Borderline high; 160-189 High; >=190 Very high', with treatment goals set by risk category [S22]. ESC/EAS 2019 replaces categories with risk-based LDL-C goals [S31]. The NHS trust calculates LDL as 'Total chol - HDL - (trigs/2.29)' with no range [S7].",
    "sexSpecific": {"exists": false, "female": null, "male": null, "what": "No sex-specific LDL threshold in ATP III, ESC/EAS 2019 or the labs opened; the 2018 AHA/ACC guideline adds women-specific risk enhancers (premature menopause, pre-eclampsia) rather than lipid thresholds, per a 2020 Circulation review [S33]", "source": "[S22]"},
    "contested": {"band": [96, 130], "summary": "BioCycle: median LDL 102 mg/dL mid-follicular versus 96 late luteal; 17.8% of women were >=130 mg/dL at mid-follicular versus 10.5% late luteal; 'Total and LDL cholesterol were lower during the luteal phase as compared with the follicular phase' [S24]. ESC/EAS notes 'women have not been adequately represented in statin trials' [S31].", "sources": ["S24","S31","S33"]},
    "guidanceInBand": "ATP III: '100-129 Near optimal/above optimal', '130-159 Borderline high'; for 0-1 risk factors the LDL goal is <160 mg/dL and lifestyle change starts at >=160 [S22]. ESC/EAS 2019 ties the LDL-C goal to estimated risk and recommends statins 'for primary prevention in high-risk women' with the same goals as in men [S31].",
    "confidence": "high",
    "sources": [
      {"id":"S22","title":"ATP III Executive Summary (NIH Publication 01-3670)","publisher":"National Cholesterol Education Program, NHLBI","year":2001,"url":"https://www.nhlbi.nih.gov/files/docs/guidelines/atp3xsum.pdf"},
      {"id":"S24","title":"A Longitudinal Study of Serum Lipoproteins ... Findings from the BioCycle Study","publisher":"Journal of Clinical Endocrinology and Metabolism (Mumford et al.)","year":2010,"url":"https://doi.org/10.1210/jc.2010-0109"},
      {"id":"S28","title":"LDL Cholesterol, Direct, test 120295","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/120295/ldl-cholesterol-direct"},
      {"id":"S31","title":"2019 ESC/EAS Guidelines for the management of dyslipidaemias","publisher":"European Heart Journal","year":2020,"url":"https://academic.oup.com/eurheartj/article/41/1/111/5556353"},
      {"id":"S33","title":"The Use of Sex-Specific Factors in the Assessment of Women's Cardiovascular Risk","publisher":"Circulation (Agarwala et al.)","year":2020,"url":"https://doi.org/10.1161/CIRCULATIONAHA.119.043429"}
    ]
  },
  {
    "id": "hdl",
    "name": "HDL cholesterol",
    "units": [{"unit":"mg/dL","toCanonical":1},{"unit":"mmol/L","toCanonical":38.67}],
    "canonicalUnit": "mg/dL",
    "labRange": {"female": null, "male": null, "any": [40, null], "source": "LabCorp (>39 mg/dL, one interval for all); UW Medicine prints Male >=40, Female >=50", "url": "https://www.labcorp.com/tests/001925/high-density-lipoprotein-cholesterol-hdl-c"},
    "origin": "NCEP ATP III (2001) raised 'categorical low HDL cholesterol from <35 mg/dL to <40 mg/dL because the latter is a better measure of a depressed HDL' and set it 'both in men and women' [S22, S23]. The panel explained that women 'typically have higher HDL cholesterol levels than men' so <40 catches 'approximately one-third of men and about one-fifth of women', and that 'Setting a different cutpoint for categorical low HDL cholesterol for men and women was rejected because it would make many women who are otherwise at low risk eligible for LDL-lowering drugs'; instead '<50 mg/dL' was made 'a marginal risk factor in women' used only in the metabolic syndrome definition [S23]. LabCorp's '>39' reproduces the ATP III categorical value for everyone [S27].",
    "sexSpecific": {"exists": true, "female": 50, "male": 40, "what": "Low HDL-C criterion for the metabolic syndrome (ATP III Table 8: Men <40 mg/dL, Women <50 mg/dL; three of five criteria make the diagnosis)", "source": "[S22]"},
    "contested": {"band": [40, 50], "summary": "ATP III itself records that the female cut-point was a policy compromise: <50 mg/dL was 'rejected' as a categorical risk factor to avoid making 'many women who are otherwise at low risk eligible for LDL-lowering drugs', and kept only as a 'marginal risk factor' in the metabolic syndrome criteria [S23]. Labs then print one number (LabCorp >39 for all [S27]; UW Female >=50 [S30]), so a woman at 45 mg/dL is normal at one lab and low at another. BioCycle shows HDL also moves with the cycle: median 48 mg/dL at menses to 52 at ovulation ('HDL levels were highest around ovulation') [S24]. Current ESC/EAS 2019 sets no HDL goal: 'To date, no specific goals for HDL-C or TG levels have been determined in clinical trials' and HDL-raising therapies 'do not reduce the risk of ASCVD' [S31]; the 2018 AHA/ACC guideline's women-specific additions are risk enhancers (premature menopause, pre-eclampsia), not an HDL threshold, per Agarwala et al. 2020 [S33] (guideline full text not opened).", "sources": ["S22","S23","S24","S27","S30","S31","S33"]},
    "guidanceInBand": "ATP III: not a counted risk factor ('Low HDL cholesterol (<40 mg/dL)') [S22], but 'for women, HDL cholesterol <50 mg/dL counts as one indicator in the diagnosis of the metabolic syndrome', 'a marginal risk factor in women, which will mandate more intensive lifestyle therapies (weight reduction and increased physical activity)' [S23]; metabolic syndrome is diagnosed 'when three or more of the risk determinants shown in Table 8 are present' [S22]. ESC/EAS 2019: no HDL-C goal [S31].",
    "confidence": "high",
    "sources": [
      {"id":"S22","title":"ATP III Executive Summary (NIH Publication 01-3670)","publisher":"National Cholesterol Education Program, NHLBI","year":2001,"url":"https://www.nhlbi.nih.gov/files/docs/guidelines/atp3xsum.pdf"},
      {"id":"S23","title":"ATP III Full Report","publisher":"National Cholesterol Education Program, NHLBI","year":2002,"url":"https://www.nhlbi.nih.gov/files/docs/resources/heart/atp-3-cholesterol-full-report.pdf"},
      {"id":"S24","title":"A Longitudinal Study of Serum Lipoproteins ... Findings from the BioCycle Study","publisher":"Journal of Clinical Endocrinology and Metabolism (Mumford et al.)","year":2010,"url":"https://doi.org/10.1210/jc.2010-0109"},
      {"id":"S27","title":"High-density Lipoprotein Cholesterol (HDL-C), test 001925","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001925/high-density-lipoprotein-cholesterol-hdl-c"},
      {"id":"S30","title":"HDL Cholesterol","publisher":"University of Washington Medicine Laboratory Medicine","year":2026,"url":"https://testguide.labmed.uw.edu/public/view/HDL"},
      {"id":"S31","title":"2019 ESC/EAS Guidelines for the management of dyslipidaemias","publisher":"European Heart Journal","year":2020,"url":"https://academic.oup.com/eurheartj/article/41/1/111/5556353"},
      {"id":"S32","title":"2018 AHA/ACC Multisociety Guideline on the Management of Blood Cholesterol (record only; full text not opened)","publisher":"Journal of the American College of Cardiology","year":2019,"url":"https://doi.org/10.1016/j.jacc.2018.11.003"},
      {"id":"S33","title":"The Use of Sex-Specific Factors in the Assessment of Women's Cardiovascular Risk","publisher":"Circulation (Agarwala et al.)","year":2020,"url":"https://doi.org/10.1161/CIRCULATIONAHA.119.043429"},
      {"id":"S34","title":"Diagnosis and management of the metabolic syndrome: AHA/NHLBI Scientific Statement (record only; full text not opened)","publisher":"Circulation (Grundy et al.)","year":2005,"url":"https://doi.org/10.1161/CIRCULATIONAHA.105.169404"},
      {"id":"S35","title":"Harmonizing the metabolic syndrome: a joint interim statement (abstract only)","publisher":"Circulation (Alberti et al.)","year":2009,"url":"https://doi.org/10.1161/CIRCULATIONAHA.109.192644"}
    ]
  },
  {
    "id": "triglycerides",
    "name": "Triglycerides",
    "units": [{"unit":"mg/dL","toCanonical":1},{"unit":"mmol/L","toCanonical":88.57}],
    "canonicalUnit": "mg/dL",
    "labRange": {"female": null, "male": null, "any": [0, 149], "source": "LabCorp (Normal <150; Borderline-high 150-199; High 200-499; Very high >500 mg/dL); Leeds NHS fasting <2.3 mmol/L", "url": "https://www.labcorp.com/tests/001172/triglycerides"},
    "origin": "ATP III lowered the triglyceride categories from ATP II: 'Normal <150 mg/dL; Borderline-high 150-199; High 200-499; Very high >=500' (ATP II: <200, 200-399, 400-1000, >1000) 'to give more attention to moderate elevations' [S22, S23]; >=150 mg/dL is also one of the five metabolic syndrome criteria [S22]. The NHS trust's fasting <2.3 mmol/L comes from 1987 European Atherosclerosis Society recommendations [S7].",
    "sexSpecific": {"exists": false, "female": null, "male": null, "what": "No sex-specific triglyceride threshold in ATP III, ESC/EAS 2019 or the labs opened", "source": "[S22]"},
    "contested": {"band": null, "summary": "BioCycle: median triglycerides 56 mg/dL mid-follicular versus 49 late luteal, lowest just before menstruation [S24, S25]; the within-woman magnitude is small relative to the 150 mg/dL cut-off. ATP III notes that when triglycerides exceed 150 mg/dL, HDL 'frequently are <40 mg/dL in men (or <50 mg/dL in women)' [S23]. No evidence that the female threshold is mis-set was found.", "sources": ["S23","S24"]},
    "guidanceInBand": "ATP III: '150-199 Borderline-high'; the panel 'Recommends treatment beyond LDL lowering for persons with triglycerides >=200 mg/dL' and for the metabolic syndrome stresses 'weight reduction and increased physical activity' [S22]. ESC/EAS 2019: no specific TG goal has been determined in clinical trials [S31].",
    "confidence": "high",
    "sources": [
      {"id":"S7","title":"Blood Sciences Reference Range Database v3.20","publisher":"Leeds Teaching Hospitals NHS Trust","year":2026,"url":"https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf"},
      {"id":"S22","title":"ATP III Executive Summary (NIH Publication 01-3670)","publisher":"National Cholesterol Education Program, NHLBI","year":2001,"url":"https://www.nhlbi.nih.gov/files/docs/guidelines/atp3xsum.pdf"},
      {"id":"S23","title":"ATP III Full Report","publisher":"National Cholesterol Education Program, NHLBI","year":2002,"url":"https://www.nhlbi.nih.gov/files/docs/resources/heart/atp-3-cholesterol-full-report.pdf"},
      {"id":"S24","title":"A Longitudinal Study of Serum Lipoproteins ... Findings from the BioCycle Study","publisher":"Journal of Clinical Endocrinology and Metabolism (Mumford et al.)","year":2010,"url":"https://doi.org/10.1210/jc.2010-0109"},
      {"id":"S29","title":"Triglycerides, test 001172","publisher":"LabCorp","year":2026,"url":"https://www.labcorp.com/tests/001172/triglycerides"},
      {"id":"S31","title":"2019 ESC/EAS Guidelines for the management of dyslipidaemias","publisher":"European Heart Journal","year":2020,"url":"https://academic.oup.com/eurheartj/article/41/1/111/5556353"}
    ]
  }
]
```

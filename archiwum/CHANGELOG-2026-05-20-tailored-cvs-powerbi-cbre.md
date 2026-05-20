# Changelog — 2026-05-20

## Podsumowanie

Sesja CV pod 2 oferty z REK (Power BI IT Analyst + CBRE Senior Finance Analyst). 3 generatory tailored (EN + EN + PL z layout compaction). Cleanup duplikatu `_photo_300.jpg` — generatory teraz referują `../ada2.jpg` bezpośrednio.

**Build:** N/A (CV PDFs generowane przez Playwright)
**Pliki nowe:** 3 generatory + 3 PDF (gitignored)
**Commit:** `ce8ddd1`

---

## Zmiany

### 1. Analiza dopasowania ofert z REK
**Problem:** User dostał 4 oferty job descriptions, prosi o ocenę dopasowania.

**Werdykty:**
| Oferta | Score | Werdykt |
|--------|-------|---------|
| U.S. Bank/Elavon TPRM Data & Reporting | 4/10 | ❌ NIE remote (3 dni biuro) + Tableau/SAS gap |
| Grupa Elenger Analityk Danych | 7/10 | ⚠️ Pod-rola (mid akceptuje studia w trakcie) |
| Power BI IT Analyst (firma nieznana) | 9/10 | ✅ Match niemal idealny |
| CBRE BSO Senior Finance Analyst | 9/10 | ✅ Identyczna ścieżka jak Trustwave |

### 2. Tailored CV — Power BI IT Analyst (EN)
**Plik:** `cv/generate-cv-powerbi-it-analyst.js` → `AG_Power_BI_IT_Analyst.pdf`

| Sekcja | Kluczowe |
|--------|----------|
| Tytuł | "Power BI IT Analyst · Semantic Models & Business Analytics" |
| Summary | 8+ lat, Power BI ekspert 5+ lat, semantic models + DAX, SQL Advanced (LabMasters 2025), Alteryx, multi-source (Clarity/GPDM/Cognos), requirements/training/governance |
| Stat tiles | 8+ Years BI / 5+ Years Power BI / ~40 IT Projects / 14 Departments |
| Trustwave bullets | Power BI semantic models, DAX, hierarchie, relationships, drill-through, ETL Alteryx, training |
| HSBC bullets | Integration 3 enterprise sources, IT architecture collaboration, release management |
| Iteracja: usunięto z summary "~40 IT projects, $15M people-cost pool" + zmniejszone stat tiles by impact HSBC mieścił się na page 1 |

### 3. Tailored CV — CBRE BSO Senior Finance Analyst (EN)
**Plik:** `cv/generate-cv-cbre-senior-finance.js` → `AG_CBRE_Senior_Finance_Analyst.pdf`

| Sekcja | Kluczowe |
|--------|----------|
| Tytuł | "Senior Finance Analyst · Financial Reporting & Transformation" |
| Angle | ISS Facility Services jako real-estate-adjacent (CBRE = largest commercial RE services firm) |
| Stat tiles | 8+ Years Financial Analysis / $15M / ~40 IT / 14 Depts |
| Trustwave bullets | Iteracja: usunięto "reconciliation across cost centers: GL adjustments" → "Building dashboards for business and CFO"; usunięto bullet o "Translation of complex financial data into actionable recommendations" |
| HSBC bullets | Forecast vs actuals, reconciliation, variance investigation, GL adjustments |
| ISS bullets | Cost budgeting, forecasting, pharma client, banking client invoice flow, P&L control |
| Toolbox | Finance/Excel-PowerPoint/BI/ETL/Transformation/Business sectors |

### 4. Tailored CV — Power BI IT Analyst (PL)
**Plik:** `cv/generate-cv-powerbi-it-analyst-pl.js` → `AG_Power_BI_IT_Analyst_PL.pdf`

**Konwencje PL zachowane:**
- Imperfekt: Projektowałam, Tworzyłam, Wspierałam, Integrowałam, Raportowałam, Stworzyłam, Szkoliłam, Automatyzowałam, Zarządzałam
- Brak em dashy (`—`) — wszędzie `-` lub `:`
- Brak mieszania EN/PL (zachowane tylko nazwy produktów: Power BI, SQL, DAX, Alteryx, Power Query, Power Automate, PowerApps, SharePoint, Performance Management, Global Business Support, Continuous Improvement, Novatorium, Management Trainee)
- Daty PL: paź 2024 - mar 2026, lip 2022 - kwi 2024, cze 2021 - cze 2022, wrz 2018 - maj 2021, lut 2016 - sie 2018
- Klauzula RODO PL pełna (ustawa 10 maja 2018 + GDPR 2016/679)
- Sekcje: Profil / Doświadczenie zawodowe / Narzędzia / Kontakt / Kompetencje kluczowe / Języki / Wykształcenie / Certyfikaty / Podejście
- "Polski / Ojczysty" + "Angielski / Biegły" + "Włoski / Podstawowy" (bez C1/A2 prefixów per memory)
- HSBC: "pula 15M USD people-cost" (truthful per [[feedback_hsbc_people_cost]])
- Impact tag: "Efekt ·" (PL odpowiednik "Impact ·")

**Layout compaction (3 iteracje na żądanie user):**
- Iteracja 1: stat tiles 22pt→17pt, padding 10→6px, by HSBC impact mieścił się na page 1
- Iteracja 2: cert font 8.4pt→7.5pt (RETURN to 8.4pt po feedback — user wolał oryginalny rozmiar)
- Iteracja 3: toolbox font h4 7.6pt→6.8pt, p 8.6pt→7.4pt, line-height 1.45→1.35, gap 10/14→8/12px (by 6 kategorii narzędzi mieściło się w siatce 3×2)
- Dodatkowo: .main padding-top 44→32px, h2 margin 18/10→12/8px, job margin-bottom 13→9px, bullet line-height 1.45→1.38, impact margin-top 5→4px

**Summary tweak:** Po dopisaniu "(głównie dział Project Management)" przy ISS Facility Services.

### 5. Cleanup duplikatu zdjęcia
**Problem:** Najnowszy archived template (`generate-cv-bi-analyst-european.js`) używał `_photo_300.jpg` jako lokalnego pliku w `cv/` — 3 MB duplikat `ada2.jpg`.

**Rozwiązanie:** Wszystkie 3 nowe generatory używają `path.resolve(__dirname, '..', 'ada2.jpg')` zamiast `_photo_300.jpg`. Plik `_photo_300.jpg` usunięty. Stary konwencja z `generate-cv-mecs-powerbi.js` (i wcześniejszych) była poprawna.

**Memory:** Dodano `cvanalityk/feedback_no_duplicate_photo_file.md` żeby pattern propagował się na przyszłe generatory.

### 6. Pliki

| Plik | Zmiana |
|------|--------|
| `cv/generate-cv-powerbi-it-analyst.js` | NEW — generator EN Power BI IT Analyst |
| `cv/generate-cv-cbre-senior-finance.js` | NEW — generator EN CBRE Senior Finance Analyst |
| `cv/generate-cv-powerbi-it-analyst-pl.js` | NEW — generator PL Power BI IT Analyst (compact layout) |
| `cv/archiwum/` | NEW — 28 starych generatorów + 22 starych PDF przeniesione |
| `cv/AG_Power_BI_IT_Analyst.pdf` | NEW — gitignored, 3.6 MB |
| `cv/AG_CBRE_Senior_Finance_Analyst.pdf` | NEW — gitignored, 3.6 MB |
| `cv/AG_Power_BI_IT_Analyst_PL.pdf` | NEW — gitignored, 3.8 MB |

### 7. Tracker REK
Po stronie repo `rek/`: dodane pozycje #23 (Elenger) + #24 (CBRE) jako Applied 2026-05-20. Stats: 19 → 21 Applied.

---

## Powiązane

- [[cv-analityk]] (memory) — workflow tailored CV
- [[feedback_hsbc_people_cost]] (memory) — People-Cost Pool labeling
- [[feedback_no_em_dashes]] (memory) — brak em dashy
- [[feedback_no_english_in_polish_cv]] (memory) — brak EN w PL CV
- [[feedback_no_duplicate_photo_file]] (memory, NEW) — używaj `../ada2.jpg`
- [[feedback_archive_cv_files]] (memory) — przed nowym generowaniem archiwizuj

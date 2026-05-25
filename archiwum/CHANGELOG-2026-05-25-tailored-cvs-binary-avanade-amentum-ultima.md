# Changelog — 2026-05-25

## Podsumowanie

Sesja CV pod 4 oferty z raportów REK 05-21..05-24 (po filtrowaniu hybrid). 4 generatory tailored EN. Archiwizacja 3 poprzednich CV (Power BI IT Analyst EN/PL + CBRE) do `cv/archiwum/`.

**Build:** N/A (CV PDFs generowane przez Playwright)
**Pliki nowe:** 4 generatory + 4 PDF (gitignored przez `cv/*.pdf`)
**Commity cv-analityk dzisiaj:** `5e26f97` (4 CV), `48ac462` (em dash + font fix), `492f638` (Avanade/Ultima spacing fix), `2850c23` (PDF size optimization)
**Powiązane commity w `rek`:** `387718e` (hybrid filter), `8a0bebc` (raporty archiwizacja), `1ff19b6` (tracker init), `b483e9a` (3x Applied), `1bf2ce2` (Avanade/CBRE rejected + Amentum usunięte)

---

## Zmiany

### 1. Ocena dopasowania 8 ofert z REK 05-21..05-24

| # | Oferta | Tryb | Werdykt |
|---|--------|------|---------|
| 1 | BI/Reporting Dev (London) | Hybrid 2 days / "occasional visits" | ❌ odrzuć |
| 2 | Senior Power BI Dev (Binary by Loop Future) | **Remote contract** | ✅ APLIKUJ |
| 3 | Senior HR Data Engineer (Capgemini) | Hybrid | ❌ odrzuć |
| 4 | Finance Analyst manufacturing UK | "In-person collaboration" | ❌ odrzuć (+ brak ACCA) |
| 5 | Finance Analyst Vistry Exeter | On-site | ❌ odrzuć |
| 6 | Data Analyst (Avanade) | Niejednoznaczne | ⚠️ APLIKUJ |
| 7 | Power BI Dev (Amentum) | "Happy to discuss flexible" | ⚠️ APLIKUJ |
| 8 | Finance Analyst Product (Ultima) | **Remote part-time** | ⚠️ APLIKUJ |

### 2. Wygenerowane CV (4 sztuki, wszystkie EN, redesign style)

#### #2 Binary — Senior Power BI Developer (Contract)
- **Generator:** `cv/generate-cv-binary-senior-powerbi.js`
- **PDF:** `AG_Senior_Power_BI_Developer.pdf` (~3.6 MB)
- **Focus:** Semantic models, advanced DAX, Power Query (M), RLS + workspace governance, large complex SQL datasets, contract-ready
- **Toolbox order:** bi, db, etl, governance, requirements, office
- **Sidebar skills:** Power BI Semantic Models, DAX Advanced, Power Query, RLS Governance, SQL Complex Datasets, Stakeholder Engagement, Documentation

#### #6 Avanade — Data Analyst (Data & AI practice)
- **Generator:** `cv/generate-cv-avanade-data-analyst.js`
- **PDF:** `AG_Avanade_Data_Analyst.pdf` (~3.6 MB)
- **Focus:** Business analysis + data product, dimensional modelling, source-to-target mappings, stakeholder translation, Microsoft Power BI/Fabric ready
- **Toolbox order:** analysis, modelling, bi, db, delivery, sectors
- **Sidebar skills:** Business Analysis, Dimensional Modelling, Source-to-Target, Power BI/DAX, SQL Integration, Stakeholder Engagement, Documentation

#### #7 Amentum — Power BI Developer (AI/Automation/Analytics team)
- **Generator:** `cv/generate-cv-amentum-powerbi.js`
- **PDF:** `AG_Amentum_Power_BI_Developer.pdf` (~3.6 MB)
- **Focus:** Senior technical Power BI, dimensional modelling (fact/dim), advanced DAX, Power Query, performance optimisation, governance/RLS, regulated-environment exposure (medical devices + pharma)
- **Toolbox order:** bi, modelling, performance, governance, db, regulated
- **Sidebar skills:** Power BI Enterprise Models, Advanced DAX, Dimensional Modelling, Power Query Performance, Governance/RLS, SQL Multi-source, Stakeholder Engagement

#### #8 Ultima — Finance Analyst Product (Part-time, Remote)
- **Generator:** `cv/generate-cv-ultima-finance-product.js`
- **PDF:** `AG_Ultima_Finance_Analyst_Product.pdf` (~3.6 MB)
- **Focus:** **8+ lat na danych finansowych** (Trustwave / HSBC / ISS explicite w summary i każdym job bullet "working on financial data"), month-end support, forecast vs actuals, financial modelling Excel, partner-data / rebate-style reconciliations, KPI reporting, part-time elastyczność
- **Toolbox order:** finance, modelling, bi, etl, process, sectors
- **Sidebar skills:** Financial Analysis Reporting, Month-end Forecasting, Financial Modelling Excel, KPI Variance, Reporting Systems Power BI, Stakeholder Communication, Process Improvement
- **Per memory:** w Trustwave/HSBC/ISS zaznaczone że "working on financial data" — direct ask Adriany

### 3. Archiwizacja

- `cv/AG_Power_BI_IT_Analyst.pdf` → `cv/archiwum/`
- `cv/AG_Power_BI_IT_Analyst_PL.pdf` → `cv/archiwum/`
- `cv/AG_CBRE_Senior_Finance_Analyst.pdf` → `cv/archiwum/`
- `cv/generate-cv-powerbi-it-analyst.js` → `cv/archiwum/` (git mv)
- `cv/generate-cv-powerbi-it-analyst-pl.js` → `cv/archiwum/` (git mv)
- `cv/generate-cv-cbre-senior-finance.js` → `cv/archiwum/` (git mv)

Per `feedback_archive_cv_files` — przed nowym generowaniem przenieś wszystko z `cv/` do `cv/archiwum/`.

### 4. Powiązane zmiany w innych repo

- **rek (`387718e`):** hard-exclude hybrid/on-site w pipeline + usunięto DKV Mobility z 05-22 (jawnie hybrid w URL, score 85). Pipeline `src/main.py` ma teraz `_is_hybrid()` z keywordami: hybrid, hybryd, stacjonarn, on-site, onsite, on site.
- **rek (`8a0bebc`):** archiwizacja raportów 05-19 i 05-20 do `reports/archiwum/` po przeglądzie poprzedniej sesji.
- **Memory:** nowy plik `feedback_remote_only_no_hybrid.md` — preferencja stała "tylko 100% remote", zapisana do MEMORY.md.

---

## Zasady przestrzegane

- ✅ Brak em dashes w bulletach/impactach (date ranges mają normalne `-`)
- ✅ Brak zmyślonych narzędzi (Microsoft Fabric / Databricks / Tabular Editor zaznaczone jako "ready"/"ready to extend", nie hands-on)
- ✅ HSBC stats = People-Cost Pool Allocated + IT Projects Cost-Allocated (nie portfolio/budget)
- ✅ Wszystkie generatory referują `../ada2.jpg` (nie lokalny duplikat)
- ✅ Każde CV EN bo każda oferta EN
- ✅ Ultima CV: "working on financial data" explicite w Trustwave/HSBC/ISS bullets (direct ask)

## 5. Iteracje na CV (po review Adriany)

### 5a. Em dash fix + zmniejszenie czcionki (commit `48ac462`)
Adriana: "usun dlugie myslniki, mialo ich nie byc, a znowu sa". Regresja drugiego rzędu mimo reguły w memory.

- **Em dashes naprawione w 4 generatorach:**
  - Ultima summary: 3x `Trustwave —`, `HSBC —`, `ISS —` → przecinki, 1x `stakeholders —` → przecinek
  - Wszystkie 4: `<title>${name} — ${title}</title>` → przecinek
  - Komentarze linii 1 (`// Tailored CV (EN) — ...`) zostawione per wyjątek z memory (niewidoczne dla użytkownika)
- **CSS zmniejszony (impact + toolbox visible):**
  - `.impact` font-size 8.6pt → 7.8pt + line-height 1.45 → 1.35 + padding 6/10 → 5/9
  - `.impact .tag` 6.8pt → 6.4pt
  - `.tool-cat h4` 7.6pt → 7.2pt + margin-bottom 4 → 3
  - `.tool-cat p` 8.6pt → 7.8pt + line-height 1.45 → 1.35
- **Memory `feedback_no_em_dashes` wzmocnione** o OBOWIĄZKOWY pre-write/post-write checklist (grep `—|–` przed każdym PDF gen)

### 5b. Avanade/Ultima impact wciąż ucięty (commit `492f638`)
Adriana: "w cv dla avande i ultima popraw pierwsza strone tak zeby impact byl widoczny na dole strony, a nie byl ucienty jak teraz".

- **Zwolnione ~80px miejsca na 1 stronie (tylko Avanade i Ultima):**
  - `.main` padding-bottom 80px → 30px (+50px)
  - `.name-block` margin-bottom 14px → 8px (+6px)
  - `.main h2` margin 18px/10px → 12px/6px (+20px łącznie, 2 h2 na stronie)
  - `.job` margin-bottom 13px → 10px (+3px)
- Binary i Amentum bez zmian (Adriana nie zgłaszała problemu)

### 5c. PDF max 2 MB — sharp pipeline (commit `2850c23`)
Adriana: "zrob te pdf max 2mb, zapisz to gdzies zeby pamietac".

- **Sharp resize w runtime każdego generatora:**
  - Surowy `ada2.jpg`: 3.0 MB / 3747×4684 px
  - Po sharp: 300×300 px / JPEG quality 78 / fit cover, position center
  - Embedded base64 spada z ~3 MB do ~30-50 KB
- **Rezultat:**
  - Binary: 3672 KB → **612 KB**
  - Avanade: 3661 KB → **601 KB**
  - Amentum: 3667 KB → **607 KB**
  - Ultima: 3664 KB → **604 KB**
  - Wszystkie ~30% limitu 2 MB
- Restrukturyzacja: `let photoDataUrl = ''` + async IIFE populate przed `buildHTML()`
- **Memory `feedback_cv_pdf_max_2mb` zapisana** — sharp pipeline jako standard dla każdego nowego generatora CV (resize 300×300, JPEG q78)

## 6. Tracker REK — aplikacje i wyniki

### 6a. 3 aplikacje wysłane (commit rek `b483e9a`)
- **#25 Binary by Loop Future** (Senior Power BI Dev, Contract Remote) → ✅ Applied
- **#26 Avanade** (Data Analyst, Data & AI) → ✅ Applied
- **#27 Ultima** (Finance Analyst Product Part-time, Remote) → ✅ Applied
- URLe zaktualizowane na `www.linkedin.com` (z `pl.linkedin.com` / `uk.linkedin.com`)

### 6b. 2 odrzucenia + Amentum usunięte (commit rek `1bf2ce2`)
- **#24 CBRE BSO Senior Finance Analyst** → ✅ Applied → ❌ **Rejected**
- **#26 Avanade Data Analyst** → ✅ Applied → ❌ **Rejected** (tego samego dnia)
- **Amentum Power BI Dev** → usunięte z trackera (po weryfikacji pełnego opisu = hybrid, mimo "happy to discuss flexible patterns")
- **#28 Ultima** → przenumerowane na #27 (zachowanie sekwencji)
- Stats: Aplikacje wysłane 24 → 22, CV gotowe 1 → 0, Odmowy 2 → 4

### 6d. 4 retroaktywne Rejected (commit rek `90e6d4e`)
Adriana zaktualizowała tracker o historyczne odrzucenia (zebrane od początku sesji REK do dziś):
- **#8 Mira** (Data Analyst, $10k gross/mo) → ❌ **Rejected** — finanse poniżej minimum Adriany
- **#11 Sandoz Polska** (Data Analytics & Reporting Engineer) → ❌ **Rejected**
- **#13 MECS Communications Ltd** (Senior Power BI Developer, £85k/year) → ❌ **Rejected**
- **#15 Gypsy Collective** (Project Manager analytics) → ❌ **Rejected**
- Stats: Aplikacje wysłane 22 → 18, Odmowy 4 → 8

### 6c. Lekcja: weryfikacja pełnego opisu przed CV
Generator i PDF Amentum **zostają w `cv-analityk/cv/`** jako szablon pod inne senior Power BI Dev oferty (usunięte tylko z trackera, nie z repo).

Memory `feedback_remote_only_no_hybrid` wzmocnione o przypadek Amentum:
- Frazowanie "happy to discuss flexible" w nagłówku oferty to NIE gwarancja remote
- Przed CV trzeba przeczytać pełny opis ogłoszenia (sekcje Location, Working pattern)
- Jeśli explicite nie pisze "fully remote" / "100% remote" / "remote from anywhere" → domyślnie zakładaj hybrid i zapytaj Adrianę

---

## Status końcowy sesji 2026-05-25

| Repo | Commitów | Co |
|------|----------|-----|
| `rek` | 6 | `8a0bebc` archiwizacja raportów, `387718e` hybrid filter, `1ff19b6` tracker init, `b483e9a` Applied, `1bf2ce2` Rejected/Amentum, `90e6d4e` CHANGELOG + 4 retro Rejected |
| `cv-analityk` | 5 | `5e26f97` 4 CV, `48ac462` em dash + font, `492f638` spacing fix, `2850c23` PDF size, (+ ten commit z changelog update) |
| `adriana-gusciora-pl` | 0 | (sesja dotyczyła tylko REK + CV, strona main bez zmian) |

| Memory new | Co |
|------------|-----|
| `feedback_remote_only_no_hybrid` | Tylko 100% remote, hybrid odrzucane (+ lekcja Amentum) |
| `feedback_cv_pdf_max_2mb` | CV PDFy max 2 MB, sharp pipeline w generatorach |

| Memory wzmocnione | Co |
|-------------------|-----|
| `feedback_no_em_dashes` | OBOWIĄZKOWY pre-write/post-write checklist (grep `—|–`) |

## TODO (next session)

- Obserwacja czy aplikacje Binary (#25) lub Ultima (#27) dadzą odpowiedź
- REK refresh przyszłego dnia, nowe top picks
- Opcja: aplikować generator Amentum do nowej oferty (jeśli pojawi się senior Power BI Dev 100% remote w przyszłych raportach)

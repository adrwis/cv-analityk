# Changelog — 2026-05-25

## Podsumowanie

Sesja CV pod 4 oferty z raportów REK 05-21..05-24 (po filtrowaniu hybrid). 4 generatory tailored EN. Archiwizacja 3 poprzednich CV (Power BI IT Analyst EN/PL + CBRE) do `cv/archiwum/`.

**Build:** N/A (CV PDFs generowane przez Playwright)
**Pliki nowe:** 4 generatory + 4 PDF (gitignored przez `cv/*.pdf`)
**Powiązany commit w `adriana-gusciora-pl/rek`:** `387718e` (hybrid filter w pipeline)

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

## TODO (next session)

- Aplikacje do #2 Binary + #8 Ultima (oba 100% remote)
- Weryfikacja trybu pracy #6 Avanade + #7 Amentum (otworzyć linki, sprawdzić full description)
- Tracker REK update — 4 nowe oferty → Applied list

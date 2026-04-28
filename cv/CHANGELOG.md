# Changelog - CV PDF Generator

## 2026-04-28 — Sesja 6: Sanderson BI Developer (Santander? remote UK)

### Nowe CV
| Generator | Oferta | Firma | PDF |
|-----------|--------|-------|-----|
| `generate-cv-sanderson-bi.js` | BI Developer (Power BI / DAX / Data Modelling), £440/day, 5 mies contract | Sanderson Recruitment | AG_BI Developer_Sanderson_EN.pdf |
| `generate-cv-360-data-analyst.js` | Data Analyst (Alteryx/SSRS, SQL), £40-43k + bonus, permanent remote | 360 Resourcing (Kitchen & Bathroom Manufacturer) | AG_Data Analyst Alteryx_360 Resourcing_EN.pdf (NOT submitted - low salary) |

### Tailoring — Sanderson BI Developer (9/10 fit)
- Tytul: BI Developer / Power BI Developer
- Summary: financial services + star schema dimensional modelling, advanced DAX time intelligence (CALCULATE, SUMX, SAMEPERIODLASTYEAR, DATEADD), Power Query (M), SQL troubleshooting, semantic models WITHOUT formal DW layer
- Job bullets: emfaza na hands-on semantic models bez DW, source-to-report reconciliation, Excel-Power BI connected reporting, operational reporting (QA/incident/complaints)
- Skills: Power BI Development → SQL & Data Investigation → Operational Reporting & Modelling → Stakeholder Engagement → Tools/Methodology

### Tailoring — 360 Resourcing Data Analyst (9.5/10 fit, ostatecznie nie aplikowane)
- Tytul: Data Analyst (Alteryx / SQL / Power BI)
- Summary: Alteryx ETL hands-on, regional performance reporting, manufacturing context (BOSCH automotive + Zimmer Biomet medical devices)
- Job bullets: Alteryx workflows w Trustwave (multi-source consolidation), Zimmer = Medical Devices Manufacturing, BOSCH = Automotive Manufacturing
- Skills: Alteryx & ETL (Strong) na pierwszej pozycji, SQL bez CTEs (na prosbe), Manufacturing & Operational Context jako osobna grupa

### Analiza dopasowania
- Sanderson: 9/10 — full Power BI/DAX/SQL/star schema/semantic stack, Financial Services = HSBC fit, gap = brak
- 360 Resourcing: 9.5/10 — Alteryx hands-on rzadki skill, manufacturing fit (BOSCH/Zimmer), gap = brak techniczny, ale stawka £40-43k za niska wzgledem Sanderson £440/day, dlatego nie wyslane

### Tracker
- #14 dodane: Sanderson Recruitment, BI Developer, £440/day, remote UK, ✅ Applied
- #15 NIE dodane (360 Resourcing) — niska stawka

---

## 2026-04-27 — Sesja 5: 2 oferty UK (MECS Power BI + Additional Resources BA)

### Nowe CV
| Generator | Oferta | Firma | PDF |
|-----------|--------|-------|-----|
| `generate-cv-mecs-powerbi.js` | Senior Power BI Developer (£85k/y, remote, Slough) | MECS Communications Ltd | AG_Senior Power BI Developer_MECS_EN.pdf |
| `generate-cv-additional-resources-ba.js` | Business Analyst - Process Improvement (£400-500/d, remote, biotech) | Additional Resources | AG_Business Analyst Process Improvement_Additional Resources_EN.pdf |

### Tailoring — MECS Power BI
- Tytul: Senior Power BI Developer / BI Lead
- Summary: enterprise BI, advanced DAX (CALCULATE/SUMX/time intelligence), star schema, performance tuning, mentoring, Microsoft Fabric familiarity
- Job bullets: emfaza na semantic models, ETL via Power Query M, training/coaching, BI governance
- Skills: Power BI Expert (RLS, Paginated Reports awareness) → SQL/T-SQL → BI Strategy & Stakeholder Engagement → Tools/Methodology

### Tailoring — Additional Resources BA
- Tytul: Business Analyst / Process Improvement
- Summary: process mapping, regulated environments, Lean Six Sigma + PRINCE2, sensitive data handling, compliance alignment
- Job bullets: workflow mapping, data flows/validation points/escalation routes, requirements gathering, banking ≈ regulated env (HSBC, ISS banking client, Zimmer medical devices)
- Skills: Business Analysis & Process → Methodologies → Regulated Environment Experience → Stakeholder Engagement → Data & Tools (deprioritized)
- Certs przegrupowane: PRINCE2 + Six Sigma na poczatku

### Analiza dopasowania
- MECS: 9/10 — full Power BI/DAX/SQL/Power Query stack, gap = formalny "Lead" tytul + Microsoft Fabric production experience
- Additional Resources: 7/10 — Lean Six Sigma + PRINCE2 + regulated env = solid fit, gap = healthcare/biotech specifics (oznaczone jako "advantageous", nie hard req)

---

## 2026-03-19 — Sesja 4: Konsultant BI (OneX Group)

### Nowe CV
| Generator | Oferta | Firma | PDF |
|-----------|--------|-------|-----|
| `_write_bi_consultant.py` | Konsultant BI (Power BI / Fabric) | OneX Group | AG_BI Consultant_EN.pdf, AG_Konsultant BI_PL.pdf |

### Tailoring
- Summary: BI consulting focus, Power BI + DAX + SQL + ETL pipelines, full project lifecycle
- Bullets przerobione na jezyk konsultancki (delivering solutions, gathering requirements, client-facing)
- Skills: 5 grup dopasowanych do oferty (Power BI & Data Modelling, SQL & Databases, ETL & Data Pipelines, Microsoft Stack, Project & Stakeholder Management)
- Dodane: data warehouse concepts (star schema), stored procedures, row-level security
- PL wersja ze zdjeciem w headerze

### Analiza dopasowania
- Dopasowanie ~75% — Power BI, SQL, ETL, komunikacja z klientem = pelne pokrycie
- Gap: Microsoft Fabric (oferta mowi "mile widziane", nie hard requirement)
- Oferta #2 (CBRE BI Director) odrzucona — za wysoki level (Director), Tableau nie Power BI

---

## 2026-03-16 — Sesja 3: 4 nowe CV dopasowane do ofert

### Nowe CV
| Generator | Oferta | Firma | PDF |
|-----------|--------|-------|-----|
| `_write_emea.py` | Regional Finance Manager EMEA | - | AG_Regional Finance Manager EMEA_EN.pdf |
| `_write_jazz.py` | Data Analyst, Finance Ops & Analytics | Jazz Pharmaceuticals | AG_Data Analyst_Jazz Pharmaceuticals_EN.pdf |
| `_write_mira.py` | Data Analyst, FP&A, E-commerce | Mira | AG_Data Analyst_Mira_EN.pdf |
| `_write_finanalyst.py` | Financial Analyst, FP&A, Process Improvement | - | AG_Financial Analyst_EN.pdf |

### Zmiany w generowaniu
- Nowy pattern: Python helper (`_write_*.py`) generuje JS, Node.js generuje PDF (unika problemow z escapowaniem template literals)
- Wszystkie CV bez em dashes (feedback Adriany)
- Summary: "Finance Professional" (nie "Finance Manager"), nacisk na process improvements i BI tools

### Odrzucone oferty (analiza dopasowania)
- Jazz Pharmaceuticals Data Analyst: oferta w UK, nie mozna aplikowac z Polski
- GoMining Senior Data Analyst: brak Python, crypto/Web3, product analytics
- Hach BI Architect: rola BI Admin/Engineer, brak Fabric, Azure, enterprise security

---

## 2026-03-12 — Sesja 2: Data Analytics & Technical Support Specialist

### Nowe CV
| Generator | Oferta | Język | PDF |
|-----------|--------|-------|-----|
| `generate-cv-data-analytics.js` | Data Analytics & Technical Support Specialist | EN | AG_Data Analytics and Technical Support Specialist_EN.pdf |

### Tailoring
- Summary: dashboarding, monitoring, knowledge management (SharePoint, Confluence), współpraca z PM-ami i konsultantami
- Bullets: KPI identification, monitoring systems, process optimization, centralized knowledge repository, collaboration platforms
- Skills: 5 grup — Dashboarding & BI, Data & Monitoring, Knowledge & Collaboration, Project Management, Process Optimization
- Page break przed ISS (BI Developer & Project Manager) → czysta 2. strona

### Konwencja: nazwisko w EN
- **W wersjach EN używamy polskich znaków: `Adriana Guściora`** (nie "Gusciora")

---

## 2026-03-11 — Sesja 1: System generowania CV + pierwsze aplikacje

### System
- Stworzono system generowania CV w PDF (Node.js + Playwright)
- Szablon HTML/CSS: Inter font, A4, kolory #1b2a4a/#2d5aa0, justified summary
- Konwencje: krotkie myslniki, `|` w PL tytule, zdjecie tylko w PL, firma w osobnej linijce
- Tracker aplikacji (`tracker.md`) do sledzenia wyslanych CV

### Wygenerowane CV (5 generatorow, 8 PDF-ow)
| Generator | Oferta | Jezyk | PDF |
|-----------|--------|-------|-----|
| `generate-cv.js` | IT Finance Reporting & Analytics PM - Link Group | EN+PL | AG_IT Finance Reporting and Analytics PM_EN.pdf, AG_Kierownik Projektu - Raportowanie Finansowe IT i Analityka_PL.pdf |
| `generate-cv-vantive.js` | Senior Costing Analyst - Vantive | EN+PL | AG_Senior Costing Analyst_EN.pdf, AG_Starszy Analityk Finansowy_PL.pdf |
| `generate-cv-bi-developer.js` | BI Developer - Essential Employment | EN | AG_Business Intelligence Developer_EN.pdf |
| `generate-cv-data-platform.js` | Data Platform / Reporting Analyst - Forward Role | EN | AG_Data Platform Reporting Analyst_EN.pdf |
| `generate-cv-monitoring-analyst.js` | Analityk Raportowania - IT Squad (~100 FTE) | PL | AG_Analityk Raportowania_PL.pdf |

### Tracker: 4 aplikacje wyslane
| # | Firma | Stanowisko | Stawka | Umowa |
|---|-------|-----------|--------|-------|
| 1 | Essential Employment | BI Developer | 538 GBP/h | B2B |
| 2 | Vantive | Senior Costing Analyst | - | - |
| 3 | Link Group | IT Finance Reporting & Analytics PM | 200 PLN/h | B2B |
| 4 | IT Squad | Power BI Developer | 200 PLN+VAT/h | B2B |

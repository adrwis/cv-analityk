# Changelog - CV PDF Generator

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

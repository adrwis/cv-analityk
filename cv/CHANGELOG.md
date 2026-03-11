# Changelog - CV PDF Generator

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

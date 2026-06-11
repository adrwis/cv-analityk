# CHANGELOG — 2026-06-11: tailored CV Elitmind (Data & Business Analytics Consultant, Controlling)

## Kontekst
Ocena 8 ofert z LinkedIn (digest Adriany), profil Data/BI/Business Analyst, zasada tylko 100% remote.
Wynik oceny: 1 pewna aplikacja (Elitmind), reszta odrzucona (4x tryb pracy on-site/hybryda, 3x luki techniczne).

## Ocena 8 ofert (skrot)
| # | Firma / Stanowisko | Tryb | Fit | Werdykt |
|---|---|---|---|---|
| 1 | MSD Polska — Business Analyst (Automation/Analytics/AI) | hybryda | 7/10 | odrzucona (hybryda) |
| 2 | MD Finance — Analyst | on-site Ukraina | 7.5/10 | odrzucona (lokalizacja) |
| 3 | Helprise — Finance Business Partner | remote/hybryda | 6/10 | stretch, nie wybrana |
| 4 | Exadel — Senior Data Engineer (Power BI) | elastyczny | 3/10 | odrzucona (Databricks/Azure/RLS/Embedded) |
| 5 | Sunly — Financial Analyst | on-site | 3.5/10 | odrzucona (DCF/VBA/project finance) |
| 6 | Spait Infotech — Data Analyst | on-site Londyn | 6/10 | odrzucona (Python + entry-level) |
| 7 | NATEK — Power BI Developer (0.5-0.75 FTE) | on-site | 8/10 | odrzucona (on-site) |
| 8 | **Elitmind — Data & Business Analytics Consultant (Controlling)** | **100% remote** | **8/10** | **APLIKUJ** |

## Nowy generator (cv/)
`generate-cv-elitmind-analytics-consultant.js` -> `AG_Elitmind_Analytics_Consultant.pdf` (499 KB, 2 strony)

### Targetowanie pod oferte
- **Tytul:** Data & Business Analytics Consultant — Controlling
- **Profile + bullety:** analiza biznesowo-systemowa, zbieranie i tlumaczenie wymagan biznes->tech, mapowanie procesow i przeplywow danych, modelowanie danych, Power BI/Excel, konsultacyjny stakeholder management
- **Tytuly rol przeformulowane** pod analize: "Business / Data Analyst at HSBC", "System Analyst / Smartsheet & PowerApps Developer" (Zimmer), "BI / Data Analyst — Controlling support" (ISS)
- **Controlling/finanse:** HSBC (pula kosztowa $15M, budget vs actuals), ISS (budzetowanie/forecast/rekoncyliacja pharma, regulowane srodowisko), Trustwave (raportowanie dla CFO)
- **Sidebar core skills:** Business & System Analysis -> Requirements to Spec -> Data Modeling & Flows -> Power BI/DAX -> SQL -> Controlling -> Stakeholder/Consulting
- **Toolbox (6):** Business & System Analysis, Process & Data Flows, Controlling & Finance, Data Modeling & SQL, Power BI & Reporting, Tools & Background
- **Method:** "Listen, then map the process", "Requirements to clear spec", "Consultative stakeholder work"

## Prawdziwosc (zgodnie z pamiecia)
- BEZ Python / Databricks / RLS / DWH-star-schema / VBA (komentarz-guard na gorze generatora, nie wpisane)
- HSBC stats = People-Cost Pool $15M + ~40 IT Projects (nie portfolio/budget)
- Foto `../ada2.jpg` (sharp resize 300x300 q78), bez lokalnego duplikatu
- PDF 499 KB (limit 2 MB OK)
- Bez em dashy
- Typografia: Fraunces (display) + IBM Plex Sans (body)

## Archiwizacja
Przed generowaniem: `cv/*` -> `cv/archiwum/` (poprzedni: `AG_Sphera_Data_Analyst.pdf` + `generate-cv-sphera-data-analyst.js`).

## Weryfikacja fit
`SHOT=1 node generate-cv-elitmind-analytics-consultant.js` -> screenshot potwierdzil zapas bialej przestrzeni na obu stronach (zero przyciecia, toolbox 6 kategorii mieszczacy sie). Screenshot usuniety, blok SHOT zostawiony jako gated helper.

## Tracker REK
Dodano #34 Elitmind, status Applied, stawka **25k PLN brutto/mies B2B** (oferta podaje 100-150 PLN/h B2B; 25k/mc ~ 149 PLN/h = gorny przedzial). Aplikacje 23 -> 24. Dopisana sekcja "Ocenione, NIE aplikuje (2026-06-11)" z 6 odrzuconymi.

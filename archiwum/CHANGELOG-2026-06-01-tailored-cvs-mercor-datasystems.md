# CHANGELOG — 2026-06-01: 3 tailored CV (Mercor x2 + Data Systems Analyst) + refresh typografii

## Kontekst
Ocena 8 ofert z profilu Adriany (Data/BI/Financial Analyst, tylko 100% remote). Rekomendacja: 3 oferty warte CV. Dodatkowo prośba o poprawę czytelności czcionek (feedback recenzenta: za drobne, Cormorant Garamond cienki).

## Refresh typografii (wszystkie 3 CV)
Zmiana systemu fontów dla czytelności:
- **Display:** Cormorant Garamond -> **Fraunces** (imie, tytuly stanowisk, edukacja, statystyki) — charakterny ale solidny, dobrze czytelny przy malych rozmiarach
- **Body:** Inter -> **IBM Plex Sans** — bardziej czytelny w druku, wiecej charakteru
- Podbite rozmiary: profile 9.4->10pt, bullety 9->9.5pt, impact/toolbox 7.8->8.4pt, GDPR 6.4->7pt, statystyki/etykiety w gore
- Wiekszy line-height, ciezsze wagi w kluczowych miejscach, lepszy kontrast tekstu w sidebarze (navy)
- Dodana numeracja stron 01/02
- Skill: frontend-design (Fraunces + IBM Plex Sans pairing)

## 3 nowe generatory (cv/)
1. `generate-cv-mercor-financial-analyst.js` -> `AG_Mercor_Financial_Analyst.pdf`
   - Oferta #2 Mercor Financial Analyst (kontrakt remote, $80-160/h, ocena dokumentow finansowych do treningu AI)
   - Akcent: analiza/raportowanie finansowe, modelowanie w Excelu, review accuracy/quality, structured feedback, AI (Claude agents)
2. `generate-cv-mercor-corporate-finance.js` -> `AG_Mercor_Corporate_Finance_Expert.pdf`
   - Oferta #8 Mercor Corporate Finance Expert (kontrakt remote, $100/h)
   - Akcent: rzetelnosc raportowania finansowego, cost forecasting/allocation, benchmarki + feedback dla zespolow AI
3. `generate-cv-data-systems-analyst.js` -> `AG_Data_Systems_Analyst.pdf`
   - Oferta #4 Data Systems Analyst (£50-55k, 12-18mc FTC, remote)
   - Akcent: data quality/validation, integracja multi-source (Clarity/GPDM/Cognos), SQL, reporting na data health, audyt, regulowane srodowiska
   - Uczciwie: bez overclaimu Visio/GDPR-cert — narracja transferowalna (data handling pod kontrolami compliance w banku/pharma)

## Prawdziwosc (zgodnie z pamiecia)
- BEZ Python/RLS/DWH/dimensional modelling/HTML-CSS-JS (nie wpisane)
- HSBC stats = People-Cost Pool $15M + ~40 IT Projects (nie portfolio/budget)
- Foto `../ada2.jpg` (sharp resize 300x300 q78), bez lokalnego duplikatu
- PDFy ~465-483 KB (limit 2 MB OK)
- Bez em dashy

## Archiwizacja
Przed generowaniem: `cv/*` -> `cv/archiwum/` (3 generatory + 3 PDFy: Auctus, Eneba, Adriana Guściora_CV).

# CHANGELOG 2026-05-27 - 3 dopasowane CV: Lumicode (PL) + Eneba (EN) + Auctus (EN)

## Kontekst
Adriana przeslala 6 ofert (Greencore x2 = duplikat, Lumicode, Auctus, Eneba, TJX).
Po ocenie dopasowania wybrala do CV: **#2 Lumicode, #4 Eneba, #3 Auctus**.
Greencore odrzucone (brak remote + ACCA + FMCG), TJX wstrzymane ("Home Office Watford" = centrala, nie remote).

## Archiwizacja
Zgodnie z zasada "przed nowym generowaniem przenies cv/ -> cv/archiwum/":
- 4 generatory (amentum, avanade, binary-senior-powerbi, ultima) -> `cv/archiwum/` (git mv)
- 4 PDFy (Amentum, Avanade, Senior Power BI, Ultima) -> `cv/archiwum/` (mv, sa gitignored)

## Nowe generatory (baza: estetyka binary-senior-powerbi, navy + gold, 2 strony A4)

### 1. `generate-cv-lumicode-powerbi-pl.js` -> `AG_Lumicode_Programista_Power_BI_PL.pdf` (717.7 KB)
- **Jezyk: polski** (polski pracodawca Pentacomp, opis po polsku)
- Czasowniki imperfekt (Projektowalam, Tworzylam, Integrowalam, Szkolilam, Zarzadzalam)
- Brak dlugich myslnikow, brak angielskich wtracen (tool-name jak Power BI/SQL/DAX/RLS/ETL/Python zostaja)
- Akcent pod oferte: modele semantyczne, zaawansowany DAX, Power Query (M), RLS,
  optymalizacja wydajnosci, hurtownie danych + ETL (Alteryx/Power Query), SQL Advanced,
  Python (uczciwie: poziom podstawowy, projekt REK - requests/BeautifulSoup pipeline),
  dashboardy zarzadcze, healthcare = plus (Zimmer wyroby medyczne + ISS klient farmaceutyczny)
- Toolbox 6 kategorii (Rozwoj Power BI, Bazy/SQL, ETL, Bezpieczenstwo/nadzor, Wymagania, Python/automatyzacja)
- Klauzula RODO PL

### 2. `generate-cv-eneba-data-analyst.js` -> `AG_Eneba_Data_Analyst.pdf` (594.9 KB)
- **Jezyk: angielski** (wymagaja CV po EN)
- USP pod oferte: **hands-on AI adoption** - codzienne uzycie Claude, budowa AI agents,
  scheduled tasks i automation pipelines we wlasnych projektach (uczciwie jako "independent projects":
  Python job-market data pipeline = REK, relational assistant chatbot, daily-content agent = serynna)
- SQL + data modeling, single source of truth (HSBC 3 zrodla), dashboards/scorecards,
  stakeholder storytelling, praca z ambiguity
- Psychologia kliniczna (SWPS) jako atut do People/Talent Analytics + "empathetic, adaptable"
- Toolbox 6 kategorii (Analytics & Dashboards, SQL & Data Modeling, Data Pipelines, AI & Automation, Stakeholder & Insight, People & Behavioral)

### 3. `generate-cv-auctus-bi-team-lead.js` -> `AG_Auctus_Reporting_BI_Team_Lead.pdf` (598.3 KB)
- **Jezyk: angielski** (firma US), CV typu STRETCH
- Akcent pod oferte: leadership (zarzadzanie zespolami 4-15 os. w ISS + audyty wewnetrzne + mentoring),
  reporting standards/dokumentacja/QA, Power BI/SQL/Excel, process automation (Power Automate/Alteryx),
  operational KPIs, exposure healthcare-adjacent (Zimmer med-devices + ISS pharma)
- **Uczciwie**: brak medical billing/RCM - profil mowi wprost "ready to deepen revenue-cycle and
  medical-billing domain knowledge", bez udawania doswiadczenia w domenie
- Stat "15 Team Members Led (peak)" = oparte na realnym "teams of 4-15" z ISS
- Toolbox 6 kategorii (Reporting Leadership, BI & Dashboards, SQL & Data, Automation & Process, Stakeholder & Delivery, Operational & Regulated)

## Wspolne / zasady przestrzegane
- **Zero dlugich myslnikow** (em dash) - daty przez `-`, separatory przez `·`
- **Zero zmyslania** - Python tylko jako podstawy (realny REK), AI agents jako projekty wlasne, brak medical billing
- **Mieszczenie na stronie zweryfikowane** zrzutami PNG (tymczasowy tryb SHOT=1, potem usuniety):
  wszystkie 3 CV - str. 1 (profil + 4 statystyki + 2 stanowiska z impactem), str. 2 (3 stanowiska + 6 kategorii toolbox + RODO), nic nie uciete
- **Foto**: `../ada2.jpg` resize sharp 300x300 q78 (PDFy <2 MB, zasada cv_pdf_max_2mb)
- Tracker REK zaktualizowany (#28-#30 CV ready) + sekcja "Ocenione, NIE aplikuje"

# Changelog — 2026-04-27 — REK raport + 2 nowe CV pod oferty UK

## Podsumowanie

Sesja z REK (refresh raportu, tracker update) i CV (2 nowe wersje pod oferty UK). Raport REK 04-27 wygenerowany ręcznym workflow_dispatch po Actions niedopałce — wynikowo pusty (0 ofert) mimo że 36 nowych unikalnych wpisów weszło do `seen.json` (1069 → 1104). Tracker zaktualizowany: Booksy → Rejected, +2 nowe aplikacje (MECS Senior Power BI Developer, Additional Resources BA Process Improvement). Stworzone 2 dopasowane CV w PDF dla obu ofert UK z iteracjami poprawek (em dashy, page-break, usunięte konkretne bullety).

---

### 1. REK — refresh raportu 04-27

**Stan początkowy:**
- Najnowszy raport: 2026-04-26 (20 ofert, top 55 pkt, źródła LinkedIn 16 / Adzuna 3 / Remotive 1)
- Cron miał odpalić o 7:00 CET (6:00 UTC), o 9:56 nadal brak commita 04-27
- Bez `gh` CLI lokalnie, bez tokena — niemożliwe odpalenie z linii poleceń
- API GitHub zwraca 404 (repo prywatne, brak auth)

**Akcja Adriany:** ręczny `workflow_dispatch` przez https://github.com/adrwis/rek/actions/workflows/daily-search.yml → "Run workflow". Sukces z warningiem o Node.js 20 deprecation (do września 2026).

**Wynik (`reports/2026-04-27.md`):**

| Metryka | Wartość |
|---------|---------|
| Znaleziono | 0 ofert |
| Nowe dziś | 0 |
| Odfiltrowane (widziane wcześniej) | 408 |
| Zablokowane regionalnie | 0 |
| Łącznie w bazie | 1104 (+35 od wczoraj) |

**Bug zaobserwowany:** rozbieżność między "Nowe dziś: 0" a wzrostem `seen.json` o 36 unikalnych wpisów (m.in. ETL Engineer Scalo, Data Cloud Analyst Seargin, Collection/Portfolio Analyst UniCredit Polska, FinCrime/Quant Analyst Revolut, Financial Analyst NetRolynx.ai, Senior Commercial Data Analyst Moss). Nowe wpisy fizycznie w `seen.json` ale nie w raporcie. Hipoteza: bug w accountingu między `dedup` a `filter_region_blocked` lub `score_all`. **Nie naprawione w tej sesji** — do follow-upu.

**Warning Actions (do follow-upu):**
> Node.js 20 actions are deprecated. The following actions are running on Node.js 20 and may not work as expected: actions/checkout@v4, actions/setup-python@v5, stefanzweifel/git-auto-commit-action@v5. Actions will be forced to run with Node.js 24 by default starting June 2nd, 2026.

Niegroźne, działa do września 2026.

---

### 2. REK — tracker update

Plik: `C:\Users\adria\OneDrive\Dokumenty\GitHub\rek\tracker.md`

**Zmiana statusu:**
| # | Firma | Stanowisko | Przed | Po |
|---|-------|-----------|-------|-----|
| 10 | Booksy | Global Partner, Strategic Initiatives | ✅ Applied | ❌ Rejected |

**Nowe wpisy (status: ✅ Applied per feedback `tracker_only_applied.md`):**

| # | Data | Firma | Stanowisko | Stawka | Source | Notatki |
|---|------|-------|-----------|--------|--------|---------|
| 13 | 2026-04-27 | MECS Communications Ltd | Senior Power BI Developer | £85k/year | Adzuna | remote, Slough Berkshire |
| 14 | 2026-04-27 | Additional Resources | Business Analyst - Process Improvement | £400-500/day | cv-library | remote, City of Westminster, biotech, kontrakt 6m |

**Stats:**
- Aplikacje wysłane: 11 → 12
- Odmowy: 0 → 1

**Pytanie otwarte:** Adriana wspomniała o Danone — nie ma w trackerze, zignorowane na jej polecenie ("zapomnij jak nie jest wpisany").

**Commit:** `tracker: Booksy rejected, +2 nowe aplikacje (MECS Power BI, Additional Resources BA)` → push (po rebase, bo Actions popchnął commit `📊 Daily job report` w międzyczasie).

---

### 3. Ocena 3 ofert pracy

| # | Oferta | Match | Pipeline score | Werdykt |
|---|--------|-------|----------------|---------|
| 1+2 | Business Analyst (biotech UK, £400-500/d, 6 mies.) | 7/10 | ~55 | Aplikuj — solidny fit, transferable skills |
| 3 | Senior/Lead Power BI Dev (mecscomms, UK) | 9/10 | ~150 | **Priorytet — apply ASAP** |

**Oferta 1+2 (Business Analyst biotech):**
- Identyczne (duplikat) — oceniona jedna
- Pasuje: title, process mapping, workflow analysis, regulated env, remote, stawka
- Brakuje: healthcare/biotech background, ISO 15189, genomic/clinical data (ale wszystkie "advantageous", nie "essential")

**Oferta 3 (MECS Senior Power BI):**
- Pasuje: ALL 3 must-have (Power BI/SQL/Excel) + 3 nice-to-have (DAX/Power Query/ETL)
- Wątpliwe: formalna seniority "Senior/Lead", Microsoft Fabric (desirable), Center of Excellence experience
- Ostrzeżenia: brak info o lokalizacji/remote/salary w opisie agencji — przed aplikacją zapytać o 100% remote i UK residency requirement

---

### 4. CV — 2 nowe wersje PDF pod oferty UK

Lokalizacja: `C:\Users\adria\OneDrive\Dokumenty\GitHub\cv-analityk\cv\`

**Wzorzec:** Node.js + Playwright (chromium) → render HTML → PDF, na bazie `generate-cv-powerbi-nix.js` (N-iX Senior Power BI). Używa `node_modules/@playwright/test` z głównego repo `adriana-gusciora-pl`.

#### CV 1 — MECS Senior Power BI Developer

| | |
|---|---|
| Skrypt | `generate-cv-mecs-powerbi.js` |
| PDF | `AG_Senior Power BI Developer_MECS_EN.pdf` |
| Tytuł | Senior Power BI Developer / BI Lead |
| Język | EN |
| Akcent | Power BI Expert, advanced DAX (CALCULATE, SUMX), star schema, Power Query M, performance tuning, mentoring, BI strategy, self-service adoption |

**Iteracje poprawek (sesja):**
- Usunięte: `time intelligence` (z DAX), `T-SQL`, `Microsoft Fabric` (ze skills i summary)
- Usunięty bullet HSBC: "Developed and maintained Power BI dashboards and paginated reports for budget tracking, variance analysis, and trend monitoring across ~40 projects ($15M portfolio)"
- Usunięty bullet HSBC: "Partnered with Central Finance Controlling to standardise reporting templates, semantic definitions, and data governance"
- Zmieniony bullet Zimmer: "Led reporting for Global Transition Process across 14 departments" → "Created reporting for Global Transition Process across 14 departments, trained end users on it and implemented it across the organisation"
- Page-break przed sekcją "BI Developer & Analyst" (ISS) — zaczyna od nowej strony (dodany `pageBreak: true` flag + CSS klasa `.job-page-break` z `page-break-before: always`)
- Wszystkie em dashes (—) i en dashes (–) zamienione na zwykłe (-) lub przecinki (per `feedback_no_em_dashes.md`)

#### CV 2 — Additional Resources Business Analyst Process Improvement

| | |
|---|---|
| Skrypt | `generate-cv-additional-resources-ba.js` |
| PDF | `AG_Business Analyst Process Improvement_Additional Resources_EN.pdf` |
| Tytuł | Business Analyst / Process Improvement |
| Język | EN |
| Akcent | Process mapping end-to-end, regulated environments (banking/medical), Lean Six Sigma + PRINCE2, sensitive data handling, workflow analysis, requirements gathering |

**Iteracje poprawek (sesja):**
- Usunięty bullet HSBC: "Mapped and improved finance processes across ~40 projects worth $15M in a heavily regulated banking environment (HSBC): budgeting, forecasting, resource allocation"
- Usunięty bullet HSBC: "Partnered with Central Finance Controlling to standardise reporting templates, semantic definitions, and process governance"
- Wszystkie em dashes (—) i en dashes (–) zamienione na zwykłe (-) lub przecinki

**Skills przegrupowane (pod profil BA, nie BI):** Business Analysis & Process → Methodologies (Lean Six Sigma + PRINCE2) → Regulated Environment Experience → Stakeholder Engagement → Data & Tools (zdeprorytetyzowane).

**Certs przegrupowane:** PRINCE2 + Six Sigma na początku (przed SQL/Power BI).

---

### 5. Commits + pushes

#### cv-analityk repo
- Commit 1: `feat: 2 nowe CV pod oferty UK (MECS Power BI Dev, Additional Resources BA)`
  - 5 files: 2× generate scripts, 2× PDFs, CHANGELOG.md (Sesja 5 + przy okazji domknięta Sesja 4 OneX Group, modyfikacja z poprzedniej sesji bez commita)
  - Commit hash: `b193023`
- **Iteracje poprawek po commicie nie zostały scommitowane** — pliki w working tree są nowsze niż remote. Adriana zaakceptowała wizualnie, ale prosi o "zapisz wszystko w changelogu" — czyli changelog tak, ale commit poprawek osobno (pending — nie scommitowane w tej sesji).

#### rek repo
- Commit: `tracker: Booksy rejected, +2 nowe aplikacje (MECS Power BI, Additional Resources BA)`
- Hash: `1259880`
- Push wymagał `git pull --rebase` (Actions popchnął `📊 Daily job report` 04-27 w międzyczasie)

---

### Status sesji

| Obszar | Status |
|--------|--------|
| REK raport 04-27 | ✅ Wygenerowany (pusty — bug do follow-upu) |
| REK tracker | ✅ Updated + pushed |
| 2× CV PDF | ✅ Wygenerowane + iteracje poprawek zaakceptowane |
| cv-analityk commit z poprawkami CV | ⚠️ Pending — Adriana nie poprosiła o re-commit po poprawkach |
| Bug REK pipeline (0 ofert mimo 36 nowych) | ⚠️ Do follow-upu |
| Node.js 20 deprecation w Actions | ⚠️ Do follow-upu (działa do września 2026) |
| Danone w trackerze | ⚠️ Adriana nie pamięta gdzie i jak — odpuszczone |

### Pliki dotknięte tej sesji

| Repo | Plik | Zmiana |
|------|------|--------|
| rek | `tracker.md` | Booksy → Rejected, +2 wpisy, stats |
| rek | `reports/2026-04-27.md` | Auto-gen (Actions) |
| rek | `seen.json` | +35 wpisów (Actions) |
| cv-analityk | `cv/CHANGELOG.md` | Sesja 5 entry + zaległa Sesja 4 |
| cv-analityk | `cv/generate-cv-mecs-powerbi.js` | Nowy + iteracje poprawek |
| cv-analityk | `cv/generate-cv-additional-resources-ba.js` | Nowy + iteracje poprawek |
| cv-analityk | `cv/AG_Senior Power BI Developer_MECS_EN.pdf` | Nowy (regenerowany 2x) |
| cv-analityk | `cv/AG_Business Analyst Process Improvement_Additional Resources_EN.pdf` | Nowy (regenerowany 2x) |
| adriana-gusciora-pl | `archiwum/CHANGELOG-2026-04-27.md` | Ten plik |

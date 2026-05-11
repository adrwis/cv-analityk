# Changelog — 2026-04-30

## Podsumowanie

Analiza dwóch ofert PM/Delivery Manager z folderu REK (Software Mind: Delivery Manager FinTech, ServiceNow PM) względem CV Analityk. Stworzone tailored CV pod ofertę Delivery Manager (FinTech / Financial Services) — EN+PL z dopisanymi Jira/Confluence/Agile w HSBC i P&L responsibility w ISS.

**Build:** N/A (CV PDFs generowane przez Playwright)
**Pliki nowe:** 3 (1 generator JS + 2 PDF)

---

## Zmiany

### 1. Analiza dopasowania ofert REK
**Problem:** User pyta czy CV Analityk pasuje do dwóch ofert PM/Delivery Manager.

**Rozwiązanie:** Tabele pasuje/nie pasuje + ocena 0-10:
- Oferta 1 (Delivery Manager FinTech, Software Mind): **4/10** — domena finansowa pasuje, ale brak profilu delivery w software house, brak Agile cert, brak Jira/Azure DevOps, brak P&L, brak fintech (PSD2/Open Banking)
- Oferta 2 (PM ServiceNow): **2/10** — odpada bez ServiceNow ITSM hands-on (CORE wymóg)

**Rekomendacja:** żadna nie jest dobrym fitem; profil Adrianny to bardziej Senior Financial Analyst / BI Manager / Reporting Lead w fintech/banking.

### 2. Tailored CV pod Delivery Manager FinTech
**Problem:** User chce mimo to zaaplikować na ofertę 1, prosi o dopisanie:
1. Do HSBC — Jira, Confluence, Agile
2. Do ISS — P&L responsibility za przypisany customer

**Rozwiązanie:** Nowy generator `generate-cv-delivery-manager.js` (EN+PL):

| Sekcja | Co zostało dopisane / zmienione |
|--------|--------------------------------|
| Tytuł | "Delivery Manager \| Financial Services & FinTech" |
| Summary | Akcent na 8+ lat IT delivery, ~40 projektów IT, $15M budżet, P&L, Agile + PRINCE2, C-level stakeholders |
| HSBC bullets | + "Worked in Agile/Scrum environment: sprint planning, backlog grooming, stand-ups, release planning" + "Day-to-day collaboration in Jira and Confluence: deliverables, dependencies, RAID logs, stakeholder docs" |
| HSBC bullet zmieniony | "managed finance processes" → "owned **people cost allocation** for ~40 IT projects with $15M annual budget: headcount planning, resource cost forecasting, burn rate, variance" (po korekcie usera: 40, nie 15) |
| ISS bullets | + "P&L responsibility for assigned customer account: revenue tracking, cost control, margin optimization" + "End-to-end delivery: scope, timeline, budget, financial forecasting, monthly settlements, invoice reconciliation" |
| Trustwave & Zimmer | Tytuły: "+ Delivery Coordination" / "+ Project Coordinator", bullets w stronę burn rate / capacity / delivery |
| Skills nowe grupy | "Delivery & Project Management" (Agile/Scrum, PRINCE2, roadmap, RAID), "PM Tools" (Jira, Confluence, Smartsheet, SharePoint), "Financial & Commercial" (P&L, burn rate, margin, monthly settlements) |
| Certyfikaty | PRINCE2 i PM przesunięte na pierwsze miejsce |

### 3. Edukacja przy okazji — przykłady "delivery software"
**Problem:** User pyta co to znaczy "delivery software end-to-end" w kontekście oferty.

**Rozwiązanie:** Wyjaśnienie na 5 przykładach (wdrożenie systemu bankowego, modernizacja chmurowa, integracja PSD2, WealthTech, custom CRM) + diagnostyka: ISS była PM-em, ale Facility Services to nie software, więc to nie liczy się jako delivery software w software house.

### 4. Pliki

| Plik | Zmiana |
|------|--------|
| `cv-analityk/cv/generate-cv-delivery-manager.js` | Nowy generator EN+PL pod ofertę Delivery Manager FinTech |
| `cv-analityk/cv/AG_Delivery Manager_FinTech_EN.pdf` | Wygenerowany PDF EN |
| `cv-analityk/cv/AG_Delivery Manager_FinTech_PL.pdf` | Wygenerowany PDF PL |

### 5. Iteracje na liczbie projektów HSBC
1. Pierwsza wersja: ~40 projektów, $15M budżet
2. User: zmień na "people cost allocation for 15 projects with $15M"
3. Edycja: 15/$15M
4. User: "źle powiedziałam, 40 projektów było"
5. Finalna wersja: ~40 projektów, $15M (framing "people cost allocation" zostaje)

---

## Tracker
**Nie dodawane** — zgodnie z feedback memory tracker zawiera tylko oferty na które Adriana faktycznie aplikuje. Te dwie oferty były tylko analizowane, ale ich dopasowanie jest niskie (4/10 i 2/10) — decyzja o aplikacji po stronie Adrianny.

# Plan CV Analityk (`/cvanalityk`) — v4 DONE

> Wyciąg z `archiwum/plan_cv.md`

## Status: DONE — audyt WCAG + design zamknięty, print redesign, zdjęcie dodane

### Zmiany w rundzie 2 (2026-02-28)
1. [x] Polskie nazwy miast: Warsaw→Warszawa, Cracow→Kraków, Lisbon→Lizbona
2. [x] Polskie stanowiska (PL): Senior Finance Analyst→Starszy Analityk Finansowy, etc.
3. [x] Kraków / zdalnie (PL), Cracow / remote (EN)
4. [x] Usunięty link do GitHuba
5. [x] Zmiana exp1_b4: "za pomocą Power Query" → "za pomocą np. Power Query czy Alteryx"
6. [x] i18n dla opisów firm (exp*_company) — PL/EN
7. [x] i18n dla nazw szkół (edu*_school) — PL/EN
8. [x] Polskie nazwy szkół: SGH, Uniwersytet SWPS, Politechnika Warszawska
9. [x] Tło: kwiatowe → binary rain (Matrix-style, canvas, gęsto na górze → rozrzedzone na dole)
10. [x] Per-column speed, brightness, maxDepth dla naturalnego efektu głębi
11. [x] Przyciemnione cyfry binary rain (opacity dark 0.7→0.35, light 0.1→0.05, kolor 122,179,232→91,155,213)
12. [x] Polskie nazwy miesięcy (paź, lip, cze, wrz, lut, sie, kwi, maj) z i18n PL/EN (exp*_period)

### Zmiany w rundzie 1 (2026-02-28)
1. [x] AI skills oparte tylko o 3 projekty: strona psychologa, Kamcia, chatbot
2. [x] Trustwave: dodane Alteryx (ETL, aplikacje) i Power Query automation
3. [x] 5+ lat → 7+ lat doświadczenia
4. [x] Tło kwiatowe (jak cvpsycholog, via getImage)
5. [x] "Polska / zdalnie" → "remote / part-time"
6. [x] Usunięte długie myślniki (em/en dash → : lub -)
7. [x] Kolor: fioletowy → niebieski/granatowy (#1e56a0 light, #5b9bd5 dark)
8. [x] Ładniejsze kafelki: left accent border, zaokrąglenia 8px, bez hover transform
9. [x] Usunięte Python, HTML/CSS/JS z umiejętności
10. [x] Terminal: Claude Code workflow zamiast Python
11. [x] Typing phrases bez Python
12. [x] Sekcja AI z 3 kartami projektów (adriana.gusciora.pl, Kamcia, Chatbot)
13. [x] Excel: "zaawansowany (formuły, Power Query)" (nie visualizations)
14. [x] WCAG: aria-labelledby, aria-hidden, type="button", focus-visible, prefers-reduced-motion
15. [x] Inline onclick → addEventListener w script block
16. [x] Topbar divider: dedykowany element zamiast inline style

### Estetyka (finalna)
- Paleta: niebieski/granatowy (#0d2137 → #1e56a0 → #2a6fc8)
- Dark mode: granatowe tła (#0a1628, #0f1d32, #132238), akcenty #5b9bd5
- Font: Inter + JetBrains Mono (Google Fonts)
- Tło: binary rain (Matrix-style, canvas) — gęsto na górze, rozrzedzone na dole
- Light mode: subtelne niebieskie cyfry (rgba 30,86,160)
- Dark mode: jaśniejsze niebieskie cyfry (rgba 122,179,232)
- Per-column: speed (0.15-0.7), brightness (0.4-1.0), maxDepth (0.3-1.0)
- Kafelki z lewą granatową krawędzią (3px accent border)
- Usunięte color-mix() — statyczne rgba() fallbacki
- Print styles z href display

### Dane (finalne)
**Doświadczenie:** Trustwave (+Alteryx, +PQ automation), HSBC/Alten, Zimmer Biomet, ISS, JM+BOSCH
**AI Skills (z projektów):** Claude Code (90%), Prompt Engineering (85%), AI Chatbot Dev (80%), Power Automate (80%)
**AI Projekty:** adriana.gusciora.pl, Kamcia Portfolio, AI Chatbot
**BI:** Power BI (95%), DAX/Power Query (90%), Excel zaawansowany (95%)
**Data & ETL:** SQL (80%), Alteryx (75%), + tagi: Jira, Confluence, Smartsheet, Cognos, SharePoint, PowerApps

### TODO
- [x] Review z użytkownikiem (runda 1)
- [x] Review z użytkownikiem (runda 2)
- [x] Audyt WCAG (po rundzie 2) — 2026-02-28
- [x] Audyt design (po rundzie 2) — 2026-02-28
- [x] Poprawki po audytach — 2026-02-28 (16 fixów WCAG+design)
- [x] Dodanie zdjęcia ada2.jpg w hero (okrągłe, jak cvpsycholog) — 2026-02-28
- [x] Print/PDF redesign — profesjonalne 2 strony A4 — 2026-02-28

### Audyt WCAG — wyniki (2026-02-28)
| # | Severity | Issue | Status |
|---|----------|-------|--------|
| W1 | CRITICAL | Dark mode active toggle: white on #5b9bd5 = 2.96:1 | ✅ Override #2563a8 (6.12:1) |
| W2 | HIGH | Dark name gradient start #1e3a5f on #0a1628 = 1.58:1 | ✅ Zmieniono na #3a7ab2 (3.98:1) |
| W3 | HIGH | Touch targets ~26-29px (need 44px) | ✅ min-height: 44px |
| W4 | MEDIUM | Safari VoiceOver list semantics lost | ✅ role="list" na 5× <ul> |
| W5 | MEDIUM | Contact links bez underline (1.4.1) | ✅ text-decoration: underline |
| W6 | MEDIUM | Theme toggle aria-label zawsze EN | ✅ i18n PL/EN |
| W7 | LOW | Skip link nie hidden w print | ✅ display: none !important |

### Audyt design — wyniki (2026-02-28)
| # | Severity | Issue | Status |
|---|----------|-------|--------|
| D1 | HIGH | .cv-analyst__gdpr bez CSS rules | ✅ Dodano styling |
| D2 | HIGH | Skill bars print at 0% width | ✅ CSS print rules + JS force widths |
| D3 | HIGH | Terminal bez rozróżnienia kolorów w print | ✅ font-weight/style differentiation |
| D4 | MEDIUM | Brak body margin reset | ✅ body { margin: 0 } |
| D5 | MEDIUM | last-child mismatch w AI skill bars | ✅ last-of-type |
| D6 | MEDIUM | Zbyt duży padding na 320px | ✅ Responsive padding |
| D7 | MEDIUM | Brak prefers-color-scheme auto | ✅ JS wykrywa system dark mode |
| D8 | LOW | Brak color fallback na gradient name | ✅ color: var(--ca-accent) |
| D9 | LOW | Inline style na tags (2×) | ✅ CSS modifier classes |

---

## Pliki
| Plik | Status |
|------|--------|
| `src/pages/cvanalityk.astro` | v4 (audyt + zdjęcie) |
| `src/styles/cv-analityk.css` | v3 (audyt) |
| `src/assets/ada2.jpg` | Zdjęcie profilowe (z zdjecia/) |

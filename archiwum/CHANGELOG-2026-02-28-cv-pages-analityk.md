# Changelog — CV Analityk: od draftu do v4 (2026-02-28)

> Wyciąg z `CHANGELOG-2026-02-28-cv-pages.md` — sekcje dotyczące CV Analityk

## Nowe pliki
- `src/pages/cvanalityk.astro` — standalone CV analityka danych (draft, noindex)
- `src/styles/cv-analityk.css` — style CV analityka (dark/light, PL/EN)

## CV Analityk (`/cvanalityk`) — draft
- Dark/light mode toggle
- PL/EN toggle (data-i18n + JS)
- Canvas particle background (dark mode)
- Typing animation, animated skill bars
- Terminal code snippet (AI workflow)
- Sekcja AI & Automation z highlight
- "Built with AI — Claude Code" badge
- Czeka na review użytkownika

---

## Sesja 2 — CV Analityk redesign v2

### Podsumowanie
Gruntowny redesign CV analityka: zmiana kolorów (fioletowy → niebieski/granatowy), tło kwiatowe, aktualizacja treści (AI skills oparte o 3 projekty, Trustwave + Alteryx, 7+ lat, remote/part-time), zróżnicowane animacje skill barów, fixy z audytów WCAG i design.

### CV Analityk — redesign v2
**Problem:** 8 punktów od użytkownika: AI skills, Trustwave, 7+ lat, kwiatki, remote, myślniki, kolory, kafelki
**Rozwiązanie:** Kompletny rewrite obu plików
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | Nowa treść: AI skills z 3 projektów, Trustwave +Alteryx +PQ, 7+ lat, remote/part-time, polskie diakrytyki, terminal Claude Code, h4 projekty, progressbar roles, aria-pressed, skip link, prefers-reduced-motion w JS |
| `src/styles/cv-analityk.css` | Paleta niebieski/granatowy (#1e56a0/#5b9bd5), tło kwiatowe, left accent border na kartach, 3 poziomy skill barów (expert/advanced/proficient), kontrast fixy, skip link, @page print, terminal print colors, reduced motion, transition performance |

### Audyty WCAG + Design — fixy
**Problem:** 30 issues z audytu WCAG + 21 z design review
**Rozwiązanie:** Naprawiono wszystkie HIGH i MEDIUM
| Kategoria | Fixy |
|-----------|------|
| Kontrast | `--ca-text-muted` light→#4a5a6a, dark→#9cb2c8; terminal comment→#7a9ab4; dark tag→#a8d4ff; skill track→#d5dde5/#1e3350 |
| ARIA | `aria-pressed` na PL/EN, dynamic `aria-label` na theme, `role="progressbar"` na skill bars |
| Motion | `prefers-reduced-motion` w CSS + JS (typing, particles, pulse, skill bars) |
| Print | @page A4, terminal light colors, section break-after, hero padding |
| Semantyka | Skip link, h4 dla projektów AI, i18n na BI/Data headings |
| Responsive | AI projects 640-767px → 2 kolumny |

---

## Sesja 3 — CV Analityk runda 2

### Podsumowanie
CV Analityk: polskie nazwy miast/stanowisk/szkół z i18n PL/EN, Kraków/zdalnie, usunięty GitHub, zmiana Power Query bullet, tło kwiatowe → binary rain (Matrix-style canvas, gęsto na górze, rozrzedzone w dół).

### CV Analityk — polskie nazwy i i18n
**Problem:** Angielskie nazwy miast/stanowisk w polskiej wersji
**Rozwiązanie:** data-i18n dla firm (exp*_company), szkół (edu*_school), polskie role
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | 5 exp_company + 4 edu_school z data-i18n; polskie stanowiska: Starszy Analityk Finansowy, Analityk Finansowy w HSBC, Deweloper Smartsheet, Programista BI i Analityk, Młodszy Kierownik Projektu; Kraków/zdalnie; Warszawa; SGH, Uniwersytet SWPS, Politechnika Warszawska; usunięty GitHub; zmiana exp1_b4 |

### CV Analityk — binary rain (Matrix-style)
**Problem:** Kwiatowe tło nieadekwatne do CV analityka
**Rozwiązanie:** Canvas z opadającym kodem binarnym (01) w stylu Matrix
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | Usunięty getImage/kwiat import; nowy canvas rain-canvas; JS: binary rain z per-column speed/brightness/maxDepth, yFade (gęsto góra → rzadko dół), theme-aware (light=subtelne, dark=wyraźne) |
| `src/styles/cv-analityk.css` | Usunięte .cv-analyst__bg i __particles; nowe .cv-analyst__binary-rain; updated print/reduced-motion |

### Plan zaktualizowany
| Plik | Zmiana |
|------|--------|
| `archiwum/plan_cv.md` | Runda 2: 10 zmian, nowa estetyka binary rain |

### CV Analityk — przyciemnienie binary rain
**Problem:** Cyfry za jasne
**Rozwiązanie:** Zmniejszona opacity (dark 0.7→0.35, light 0.1→0.05), ciemniejszy kolor (122,179,232→91,155,213)
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | Zmiana opacity i koloru w draw() |

### CV Analityk — polskie nazwy miesięcy
**Problem:** Angielskie skróty miesięcy (Oct, Jul, Jun, Sep, Feb, Aug, Apr, May)
**Rozwiązanie:** data-i18n exp*_period z polskimi skrótami (paź, lip, cze, wrz, lut, sie, kwi, maj)
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | 5x data-i18n exp*_period w HTML + PL/EN translations |

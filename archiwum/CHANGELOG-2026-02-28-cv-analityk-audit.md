# Changelog — CV Analityk: audyt WCAG + design + print redesign + zdjęcie

> **Data:** 2026-02-28
> **Sesja:** ~24
> **Pliki:** `src/pages/cvanalityk.astro`, `src/styles/cv-analityk.css`, `src/assets/ada2.jpg`
> **Build:** 28 stron OK

---

## Zdjęcie profilowe

- Dodano `ada2.jpg` (NIKON D810, 3747×4684) → `src/assets/ada2.jpg`
- Astro optymalizuje: 3MB → 3-7KB WebP (+ 934KB retina)
- Okrągłe zdjęcie 140px w hero z border accent (jak cvpsycholog)
- Mniejsze w print (72pt)

---

## Audyt WCAG — 7 fixów

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| W1 | CRITICAL | Dark mode active toggle: white na #5b9bd5 = 2.96:1 | Override #2563a8 (6.12:1) |
| W2 | HIGH | Dark name gradient start #1e3a5f na #0a1628 = 1.58:1 | Zmieniono na #3a7ab2 (3.98:1) |
| W3 | HIGH | Touch targets ~26-29px (potrzebne 44px) | min-height: 44px na toggle-btn i print-btn |
| W4 | MEDIUM | Safari VoiceOver traci semantykę list (list-style:none) | role="list" na 5× `<ul>` |
| W5 | MEDIUM | Linki kontaktowe nierozróżnialne od tekstu (1.4.1) | text-decoration: underline |
| W6 | MEDIUM | Theme toggle aria-label zawsze po angielsku | i18n PL/EN w zależności od currentLang |
| W7 | LOW | Skip link nie ukryty w print | display: none !important |

## Audyt design — 9 fixów

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| D1 | HIGH | .cv-analyst__gdpr bez CSS rules | Dedykowane style (font, spacing, max-width) |
| D2 | HIGH | Skill bars print at 0% width | CSS print rules per data-width + JS force widths |
| D3 | HIGH | Terminal bez rozróżnienia kolorów w print | font-weight/style differentiation |
| D4 | MEDIUM | Brak body margin reset | body { margin: 0 } |
| D5 | MEDIUM | last-child mismatch w AI skill bars | last-of-type |
| D6 | MEDIUM | Zbyt duży padding kart na 320px | Responsive padding w @media |
| D7 | MEDIUM | Brak prefers-color-scheme auto | JS wykrywa system dark mode |
| D8 | LOW | Brak color fallback na gradient name | color: var(--ca-accent) |
| D9 | LOW | Inline style na tags (2×) | CSS modifier classes (--spaced, --certs) |

---

## Print/PDF redesign — kompletny redesign layoutu

**Cel:** profesjonalne CV na max 2 stronach A4

### Ukryte elementy (web-only)
- Topbar (PL/EN + dark/light toggle)
- Binary rain canvas
- Terminal mockup
- Hero badge ("Otwarta na nowe możliwości")
- Print button, AI badge, skip link, typing animation

### Nowy layout print
- **Hero:** grid 72pt foto + imię/tagline/kontakt obok, navy accent bar na dole
- **Sekcje:** nagłówki uppercase z podkreśleniem, ikony 14pt
- **Doświadczenie:** gęste karty bez tła, lewa krawędź 2pt navy, kompaktowe bullet points
- **Skills:** 2-kolumnowy grid, skill bars 4pt z wymuszonym width%, AI projects 3-kolumnowe
- **Edukacja:** compact list z lewą krawędzią navy
- **Certyfikaty:** małe pill tags z border
- **Języki:** 4-kolumnowy grid, minimalne padding
- **Footer:** GDPR 7pt, border-top, wycentrowane
- **Fonty:** 9.5pt base, tight line-height 1.45
- **Marginesy:** 1.2cm góra/dół, 1.5cm boki

### Wynik
- Strona 1: Hero + pełne Doświadczenie zawodowe (5 stanowisk)
- Strona 2: Skills + Edukacja + Certyfikaty + Języki + GDPR
- Profesjonalny, editorial minimal, navy accents

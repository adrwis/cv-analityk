# Changelog — CV Analityk: number rain + hero redesign (2026-02-28)

> Wyciąg z `CHANGELOG-2026-02-28-cv-psycholog-update.md` (Sesja 2)

## Podsumowanie

Deszcz numerków 0-9 zamiast binary w CV Analityka. Przebudowa hero w CV Analityka — zdjęcie po prawej stronie imienia i opisu.

**Build:** ✅ OK (28 stron, 3.47s)

---

### Deszcz numerków w CV Analityka
**Problem:** Binary rain pokazywał tylko `01`, user chciał pełne cyfry.
**Rozwiązanie:** Zmiana `var chars = '01'` na `'0123456789'` — efekt "data analyst" z pełnymi cyframi.
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | `chars = '0123456789'` |

### Zdjęcie po prawej w hero CV Analityka
**Problem:** Zdjęcie było wycentrowane nad imieniem, user chciał je po prawej.
**Rozwiązanie:** Hero przebudowany na flex layout: nowy wrapper `.cv-analyst__hero-content` po lewej (badge, imię, tagline, typing, kontakt), zdjęcie po prawej. Na mobile (≤640px) — column-reverse (zdjęcie nad tekstem).
| Plik | Zmiana |
|------|--------|
| `src/pages/cvanalityk.astro` | Wrapper `div.cv-analyst__hero-content`, `Image` przeniesiony na koniec hero |
| `src/styles/cv-analityk.css` | Hero `display: flex`, photo `flex-shrink: 0`, tagline/contact `margin: 0`, responsive column-reverse |

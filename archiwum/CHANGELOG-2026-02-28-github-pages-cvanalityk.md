# Changelog — 2026-02-28 (GitHub Pages — CV Analityk)

> Wyciąg z `CHANGELOG-2026-02-28-github-pages.md`

## Podsumowanie

Wydzielono CV Analityk z monorepo `adriana-gusciora-pl` do osobnego repozytorium `adrwis/cv-analityk` na GitHubie, z hostingiem na GitHub Pages.

**Build:** statyczny HTML, bez builda
**Pliki nowe:** ~4 (w osobnym repozytorium)

---

## Repo cv-analityk — statyczny HTML
**Problem:** CV Analityk hostowane w monorepo, potrzeba osobnego repo na GitHub Pages
**Rozwiązanie:** Skonwertowano z Astro do statycznego HTML, bez żadnych zależności

| Plik | Zmiana |
|------|--------|
| `index.html` | Konwersja z `cvanalityk.astro`: usunięto frontmatter, `<Image>` → `<img>`, inline favicon SVG |
| `cv-analityk.css` | Skopiowany bez zmian (1268 linii) |
| `ada2.jpg` | Zdjęcie profilowe skopiowane |
| `.github/workflows/deploy.yml` | Dodany w drugiej sesji — upload-pages-artifact z root |

**Commity:** `7ff4cd2` — `feat: CV Analityk on GitHub Pages`, `ee9fa59` — `feat: add GitHub Actions deploy workflow for Pages`
**URL:** https://adrwis.github.io/cv-analityk/

## Debugowanie 404 — cv-analityk
**Problem:** Po pushu strona zwracała 404
**Rozwiązanie:** Pages ustawione na "GitHub Actions" ale brak workflow → dodano `deploy.yml` workflow

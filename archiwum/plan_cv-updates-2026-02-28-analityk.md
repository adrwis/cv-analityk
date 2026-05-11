# Plan: CV Analityk standalone — poprawki tła + tłumaczenia + UI
**Data:** 2026-02-28 / aktualizacja 2026-03-01

> Wyciąg z `archiwum/plan_cv-updates-2026-02-28.md` (kroki 2-6)

## Krok 1: CV Analityk standalone — poprawa tła (deszcz numerków)
**Plik:** `C:\Users\adria\OneDrive\Dokumenty\GitHub\cv-analityk\index.html`

**Co jest teraz:** Canvas z animacją deszczu numerków 0-9, ale:
- W trybie jasnym numerki prawie niewidoczne (max opacity ~0.05)
- Kolory pasują do palety (blue/navy) ✓
- Animacja działa (requestAnimationFrame) ✓

**Co poprawić:**
- Zwiększyć widoczność numerków w trybie jasnym (opacity 0.05 → ~0.12-0.15)
- Ewentualnie lekko zwiększyć prędkość spadania
- Zmniejszyć trail fade (żeby numerki były wyraźniejsze, nie „znikały" zbyt szybko)

---

## Krok 2: CV Analityk standalone — weryfikacja tłumaczeń PL
**Plik:** `C:\Users\adria\OneDrive\Dokumenty\GitHub\cv-analityk\index.html`

**Status po przeglądzie:**
- Wszystkie 80+ kluczy `data-i18n` mają tłumaczenia PL i EN ✓
- Treść tłumaczeń po polsku — poprawna gramatycznie i merytorycznie ✓
- Certyfikaty w sekcji „Certyfikaty i szkolenia" — NIE mają data-i18n (nazwy certyfikatów to nazwy własne, zostawiamy po angielsku)
- Skip link „Przejdź do treści" — hardcoded po polsku, brak EN wersji → DODAĆ data-i18n
- Drobne: w PL `bi_title` = 'BI & Analityka' ale w HTML default 'BI & Analytics' → OK, PL nadpisze

**Do poprawy:**
- Dodać `data-i18n="skip"` na skip link + klucze w translations

---

## Krok 3: CV Analityk standalone — poprawki treści i UI (2026-03-01)
**Pliki:** `cv-analityk/index.html`, `cv-analityk/cv-analityk.css`

**Zmiany:**
1. „injection" → „atakami" w `proj3_desc` (PL)
2. „Kamcia Portfolio" → „Portfolio Portretów" (PL) / „Portrait Portfolio" (EN) — HTML + oba obiekty translations
3. Zdjęcie: 140px → 180px, `margin-top: 2rem`, `align-self: flex-start`
4. „remote / part-time" → „zdalnie / niepełny etat" (PL), EN bez zmian
5. Topbar: dodany `<span class="cv-analyst__topbar-title">` z i18n + spacer flex, ukryty na mobile (<640px)
6. CSS: `.cv-analyst__topbar-title` (font-weight 600, ellipsis) + `.cv-analyst__topbar-spacer` (flex: 1)

## Krok 4: Changelog + commit
- Commit do obu repozytoriów:
  - `adriana-gusciora-pl`: zmiana w cvpsycholog — ✅ `a881aaa`
  - `cv-analityk`: tło + tłumaczenia — ✅ `914523b`
- Aktualizacja changelog i plan
- Commit + push cv-analityk + adriana-gusciora-pl (changelog)

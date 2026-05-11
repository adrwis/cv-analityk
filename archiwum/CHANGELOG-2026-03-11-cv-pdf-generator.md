# Changelog 2026-03-11 - CV PDF Generator

## Sesja: Tailored CV PDF generation

### Zmiany na produkcji (adriana.gusciora.pl)
- Usunięto `/cvanalityk` z produkcji (`src/pages/cvanalityk.astro` usunięty)
- CV Analityk dostępne wyłącznie na standalone GitHub Pages (`adrwis.github.io/cv-analityk/`)

### CV PDF Generator (`cv-analityk/cv/generate-cv.js`)
Stworzony skrypt Node.js + Playwright do generowania tailored CV w PDF:

| Funkcja | Opis |
|---------|------|
| Dwujęzyczność | PL + EN, osobne pliki |
| Zdjęcie | PL wersja ma okrągłe zdjęcie w headerze (base64) |
| Layout | Czytelny 2-stronnicowy A4, ATS-friendly, Inter font |
| Sekcje | Summary, Experience, Skills, Education, Certs, Languages, GDPR |
| Tailoring | Bullet points i skills dostosowane pod konkretny job description |
| Daty | Spójne - słownie (EN: Oct, Jul / PL: paź, lip) |
| Stanowiska PL | Lokalne nazwy (Deweloper Smartsheet, Analityk BI i Kierownik Projektu) |
| Summary | Wyjustowany, z info o rozwoju i usprawnianiu procesów |

### Pierwszy JD: IT Finance Reporting & Analytics Project Manager
Pliki wygenerowane:
- `AG_IT Finance Reporting and Analytics PM_EN.pdf`
- `AG_Kierownik Projektu - Raportowanie Finansowe IT i Analityka_PL.pdf`

### Workflow na przyszłość
1. User podaje job description
2. Modyfikujemy `generate-cv.js` - tytuł, summary, bullet points, skills pod JD
3. Generujemy PDF (EN + PL) komendą `node generate-cv.js`
4. Iterujemy poprawki aż do finału

### Commity
- `c7493d9` - chore: usunięcie /cvanalityk z produkcji

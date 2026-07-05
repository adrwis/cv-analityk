# CV Analityk — 5 propozycji designu + research (2026-06-30)

## Co powstało
5 dwustronicowych propozycji CV (A4) generowanych z jednego skryptu, ta sama treść — różni je tylko layout/kolor/typografia. Do dalszego dopracowania.

| # | Plik | Kierunek | Tło / kolor | Zdjęcie | ATS |
|---|------|----------|-------------|:--:|:--:|
| 1 | `cv/CV_Analityk_01_ATS_Clean.pdf` | Czysta jedna kolumna, IBM Plex Sans | białe / granat | nie | najbezpieczniejszy |
| 2 | `cv/CV_Analityk_02_Slate_Sidebar.pdf` | Ciemny lewy sidebar, chipsy skilli | slate + teal | tak | ryzyko parsowania |
| 3 | `cv/CV_Analityk_03_Teal_Editorial.pdf` | Editorial, serif Fraunces, dużo światła | jasne / teal | nie | dobry |
| 4 | `cv/CV_Analityk_04_Data_KPI.pdf` | Pasek nagłówka + 4 metryki KPI, mono cyfry | grafit / amber | nie | dobry |
| 5 | `cv/CV_Analityk_05_Warm_Professional.pdf` | Ciepły papier, serif Spectral, ❧ | kremowe / głęboka zieleń | tak | dobry |

## Jak regenerować
```
cd cv
node generate-analyst-proposals.js
```
- Skrypt: `cv/generate-analyst-proposals.js` (treść + 5 szablonów + render)
- Zdjęcie miniatura: `cv/ada_thumb.jpg` (360×360, wycięte z góry)
- Playwright współdzielony z `adriana-gusciora-pl/node_modules/@playwright/test` (konwencja projektu)
- Output: 5 PDF-ów w `cv/`, każdy 2 strony A4, full-bleed (margin 0 + padding wewnątrz)

## Research — CV analityka 2026 (kluczowe wnioski)
- **Format:** odwrotnie-chronologiczny standard; gęstość treści + mierzalne wyniki (liczby, $, %).
- **Układ:** jedna kolumna z mocną hierarchią bije dwukolumnowe szablony o 25–75 pkt proc. skuteczności ATS. Lewe sidebary = największa przyczyna błędów parsowania pól → ładne dla człowieka, ryzykowne dla ATS.
- **Kolory:** granat, grafit/slate, teal, stonowana zieleń, burgund. Akcent na imię/nagłówki/linie; treść = ciemny tekst na jasnym tle. Kolor oszczędnie.
- **Tło:** jasne/białe dla czytelności i ATS; ciężkie tła obniżają parsowalność.
- **Zdjęcie:** odradzane w wersjach US/ATS; w EU bywa OK. 1–2 strony. Słowa kluczowe z ogłoszenia.

Źródła: enhancv.com, resumeoptimizerpro.com (modern-resume-template, ATS 2026), scale.jobs, resumeup.ai (best resume colors), resumeworded.com.

## Uwaga merytoryczna (zgodność z zasadami)
Trzymano się zasady: bez Pythona / DWH / RLS / ręcznego kodowania. Strona i chatbot opisane jako „built with Claude Code".

## Otwarte pytania do Adriany
1. Który układ/-y dopracowujemy?
2. Język: zostawić EN czy zrobić też PL?
3. Zdjęcie tak/nie, korekty kolorów/czcionek.

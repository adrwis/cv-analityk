const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

const cvData = {
  pl: {
    fileName: 'AG_Analityk Raportowania_PL.pdf',
    photo: true,
    name: 'Adriana Gusciora',
    title: 'Analityk Raportowania | Power BI & SQL',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Zdalnie',
    summary: 'Analityczka z 8+ latami doswiadczenia w tworzeniu i utrzymaniu raportow, dashboardow Power BI oraz pracy z bazami danych SQL. Sprawdzone umiejetnosci w monitorowaniu poprawnosci danych, identyfikacji nieprawidlowosci, dokumentowaniu procesow raportowych i wspolpracy z zespolami technicznymi oraz biznesowymi. Samodzielna, dokladna, z dobrą organizacją pracy i umiejetnoscia szybkiego rozwiazywania problemow. Zalezy mi na ciąglym rozwoju, usprawnianiu procesow oraz zdobywaniu nowych kompetencji i narzedzi.',
    sections: {
      experience: 'DOSWIADCZENIE ZAWODOWE',
      skills: 'KLUCZOWE UMIEJETNOSCI',
      education: 'WYKSZTALCENIE',
      certifications: 'CERTYFIKATY I SZKOLENIA',
      languages: 'JEZYKI',
    },
    jobs: [
      {
        role: 'Starszy Analityk Finansowy',
        company: 'Trustwave Sp. z o.o. - Performance Management - Warszawa / Zdalnie',
        period: 'paz 2024 - obecnie',
        bullets: [
          'Tworzenie i utrzymanie dashboardow Power BI (DAX, Power Query) - budżet vs wykonanie, prognoza, analiza odchylen - zapewnienie poprawnosci i dostepnosci raportow dla uzytkownikow',
          'Monitorowanie i aktualizacja raportow finansowych zgodnie z harmonogramem - weryfikacja aktualnosci i zgodnosci danych z oczekiwaniami',
          'Budowa zautomatyzowanych pipeline\'ow danych w Power Query i Alteryx - identyfikacja nieprawidlowosci, zglaszanie problemow i wspolpraca z zespolem technicznym',
          'Dokumentacja procesow raportowych i standardow danych - zapewnienie spojnosci i powtarzalnosci raportow',
          'Automatyzacja powtarzalnych zadan raportowych za pomoca Power Query i Power Automate',
        ],
      },
      {
        role: 'Analityk Finansowy w HSBC',
        company: 'Alten Polska Sp. z o.o. - Krakow / Zdalnie',
        period: 'lip 2022 - kwi 2024',
        bullets: [
          'Przygotowywanie dashboardow i wizualizacji Power BI (DAX) z wielu zrodel danych (Clarity, GPDM, Cognos) - sledzenie budzetu, analiza odchylen i trendow dla ~40 projektow (15M$)',
          'Weryfikacja aktualnosci danych i analiza przyrostow w raportach pod katem zgodnosci z trendami',
          'Koordynacja zespolu 5 analitykow - zapewnienie jakosci danych, terminowosci i zgodnosci raportow',
          'Komunikacja z uzytkownikami i roznymi dzialami w celu wyjasnienia problemow lub zmian w raportach',
          'Prowadzenie warsztatow szkoleniowych z narzedzi (Excel, Power Query, Power BI) dla uzytkownikow technicznych i biznesowych',
        ],
      },
      {
        role: 'Deweloper Smartsheet',
        company: 'Zimmer Biomet Polska - Global Business Support - Warszawa',
        period: 'cze 2021 - cze 2022',
        bullets: [
          'Monitorowanie i raportowanie w procesie Global Transition dla 14 departamentow - tworzenie dokumentacji i standardow raportowych',
          'Budowa aplikacji Continuous Improvement w PowerApps do sledzenia zmian procesowych',
          'Prowadzenie warsztatow szkoleniowych dla globalnych uzytkownikow',
        ],
      },
      {
        role: 'Analityk BI i Kierownik Projektu',
        company: 'ISS Facility Services - Project Management - Warszawa',
        period: 'wrz 2018 - maj 2021',
        bullets: [
          'Tworzenie dashboardow i wizualizacji Power BI laczacych wiele zbiorow danych - raporty dla Zarzadu i interesariuszy',
          'Zapewnienie dostepnosci i poprawnosci dzialania raportow - identyfikacja nieprawidlowosci i wspolpraca z zespolem technicznym',
          'Automatyzacja procesow raportowych end-to-end: Power Automate, SharePoint, Power BI',
          'Dokumentacja przeplywow danych i zapewnienie zgodnosci ze standardami korporacyjnymi',
          'Projekt Novatorium: wdrozenie usprawnien procesowych z wykorzystaniem Power Platform',
        ],
      },
      {
        role: 'Mlodszy Kierownik Projektu - Management Trainee',
        company: 'Jeronimo Martins (Lizbona i Warszawa) - Robert BOSCH (Warszawa)',
        period: 'lut 2016 - sie 2018',
        bullets: [
          'Miedzynarodowe doswiadczenie (Portugalia i Polska): koordynacja interesariuszy, komunikacja z roznymi dzialami',
          'Inicjatywy usprawniania procesow w organizacji macierzowej',
        ],
      },
    ],
    skillGroups: [
      { name: 'Power BI & Raportowanie', items: 'Power BI (dashboardy, wizualizacje, DAX, publikowanie) - Zaawansowany Excel (Power Pivot, zlozone formuly) - Power Query (transformacje, automatyczne pipeline\'y danych) - Monitorowanie i aktualizacja raportow' },
      { name: 'SQL & Dane', items: 'SQL (zaawansowane zapytania, joiny, CTE, walidacja danych) - Alteryx (workflow ETL, czyszczenie danych) - Weryfikacja poprawnosci i zgodnosci danych - Analiza przyrostow i trendow' },
      { name: 'Automatyzacja', items: 'Power Automate (automatyzacja workflow) - PowerApps - SharePoint - Cognos - Smartsheet' },
      { name: 'Dokumentacja & Jakosc', items: 'Dokumentacja procesow raportowych - Identyfikacja nieprawidlowosci w danych - Lean Management - Six Sigma (certyfikat SGH) - PRINCE2 Foundation' },
      { name: 'Wspolpraca', items: 'Komunikacja z zespolami technicznymi i biznesowymi - Prowadzenie warsztatow - Samodzielnosc i dokladnosc - Szybka identyfikacja problemow' },
    ],
    education: [
      { year: '2020-2021', title: 'Studia podyplomowe: Menedzer Jakosci', school: 'Szkola Glowna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012-2016', title: 'Inzynier: Zarzadzanie i Inzynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'Business Analytics in Power BI - LabMasters, 2022',
      'SQL Basics & Intermediate, 2023',
      'Metoda Six Sigma w zarzadzaniu jakoscia - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polski (ojczysty) - Angielski (biegly) - Portugalski (sredniozaawansowany, CELPE-Bras) - Wloski (podstawowy)',
    gdpr: 'Wyrazam zgode na przetwarzanie moich danych osobowych w celu rekrutacji.',
  },
};

function buildHTML(data) {
  const jobsHTML = data.jobs.map(j => `
    <div class="job">
      <div class="job-header">
        <span class="job-role">${j.role}</span>
        <span class="job-period">${j.period}</span>
      </div>
      <div class="job-company">${j.company}</div>
      <ul>${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  `).join('');
  const skillsHTML = data.skillGroups.map(g => `
    <div class="skill-group">
      <span class="skill-name">${g.name}:</span> ${g.items}
    </div>
  `).join('');
  const eduHTML = data.education.map(e => `
    <div class="edu-item">
      <span class="edu-year">${e.year}</span>
      <div>
        <span class="edu-title">${e.title}</span> - <span class="edu-school">${e.school}</span>
        ${e.desc ? `<span class="edu-desc"> · ${e.desc}</span>` : ''}
      </div>
    </div>
  `).join('');
  const certsHTML = data.certs.map(c => `<span class="cert-tag">${c}</span>`).join('');

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', 'Segoe UI', sans-serif; font-size: 9.5pt; line-height: 1.45; color: #1a1a2e; padding: 32px 36px; max-width: 210mm; }
  .header { border-bottom: 2.5px solid #1b2a4a; padding-bottom: 12px; margin-bottom: 14px; display: flex; align-items: center; gap: 18px; }
  .header-photo { width: 90px; height: 90px; border-radius: 50%; object-fit: cover; border: 2px solid #ccd5e0; flex-shrink: 0; }
  .header-text { flex: 1; }
  .header h1 { font-size: 20pt; font-weight: 700; color: #1b2a4a; letter-spacing: -0.5px; margin-bottom: 2px; }
  .header .title { font-size: 11pt; font-weight: 600; color: #2d5aa0; margin-bottom: 4px; }
  .header .contact { font-size: 8.5pt; color: #555; }
  .summary { background: #f0f4fa; border-left: 3px solid #2d5aa0; padding: 9px 12px; margin-bottom: 14px; font-size: 9pt; color: #333; text-align: justify; }
  .section-title { font-size: 10pt; font-weight: 700; color: #1b2a4a; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1.5px solid #ccd5e0; padding-bottom: 3px; margin-top: 13px; margin-bottom: 8px; }
  .job { margin-bottom: 10px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
  .job-role { font-weight: 700; font-size: 9.5pt; color: #1b2a4a; }
  .job-company { font-size: 8.5pt; color: #555; margin-bottom: 3px; }
  .job-period { font-size: 8.5pt; color: #2d5aa0; font-weight: 500; white-space: nowrap; }
  ul { padding-left: 16px; margin-top: 2px; }
  li { margin-bottom: 1.5px; font-size: 9pt; }
  li::marker { color: #2d5aa0; }
  .skill-group { margin-bottom: 5px; font-size: 9pt; }
  .skill-name { font-weight: 700; color: #1b2a4a; }
  .edu-item { display: flex; gap: 10px; margin-bottom: 4px; font-size: 9pt; }
  .edu-year { font-weight: 600; color: #2d5aa0; min-width: 70px; font-size: 8.5pt; }
  .edu-title { font-weight: 600; }
  .edu-school { color: #555; }
  .edu-desc { color: #666; font-style: italic; }
  .certs-grid { display: flex; flex-wrap: wrap; gap: 5px; }
  .cert-tag { background: #e8eef6; border: 1px solid #ccd5e0; border-radius: 3px; padding: 2px 7px; font-size: 8.5pt; color: #1b2a4a; }
  .languages { font-size: 9pt; margin-top: 4px; }
  .gdpr { font-size: 7.5pt; color: #888; margin-top: 16px; text-align: center; font-style: italic; }
  @page { size: A4; margin: 12mm 14mm; }
</style></head><body>
<div class="header">
  ${data.photo ? `<img src="${photoDataUrl}" alt="${data.name}" class="header-photo">` : ''}
  <div class="header-text">
    <h1>${data.name}</h1>
    <div class="title">${data.title}</div>
    <div class="contact">${data.contact}</div>
  </div>
</div>
<div class="summary">${data.summary}</div>
<div class="section-title">${data.sections.experience}</div>
${jobsHTML}
<div class="section-title">${data.sections.skills}</div>
${skillsHTML}
<div class="section-title">${data.sections.education}</div>
${eduHTML}
<div class="section-title">${data.sections.certifications}</div>
<div class="certs-grid">${certsHTML}</div>
<div class="section-title">${data.sections.languages}</div>
<div class="languages">${data.languages}</div>
<div class="gdpr">${data.gdpr}</div>
</body></html>`;
}

(async () => {
  const data = cvData.pl;
  const html = buildHTML(data);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(outputDir, data.fileName), format: 'A4', printBackground: true,
    margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' },
  });
  await browser.close();
  console.log(`Generated: ${data.fileName}`);
})();

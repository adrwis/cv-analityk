"""Helper to write the BI Consultant (Microsoft Fabric / Power BI) CV generator script."""
import pathlib

JS_PATH = pathlib.Path(__file__).parent / 'generate-cv-bi-consultant.js'

DATA_PART = r'''const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_BI Consultant_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'BI Consultant \u00b7 Power BI \u00b7 SQL \u00b7 ETL',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote (EU-based)',
    summary: 'BI Consultant with 8+ years of experience designing and delivering data-driven solutions in financial services. Deep expertise in Power BI (data modelling, DAX, interactive reports) and SQL (complex queries, optimisation, multi-source integration). Proven track record of building ETL pipelines (Alteryx, Power Query) and translating business requirements into scalable BI solutions. Experienced in managing the full project lifecycle - from stakeholder analysis through implementation to training and adoption. Strong communicator who bridges the gap between technical and business teams.',
    sections: {
      experience: 'WORK EXPERIENCE',
      skills: 'KEY SKILLS',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS & TRAINING',
      languages: 'LANGUAGES',
    },
    jobs: [
      {
        role: 'Senior Finance Analyst \u00b7 BI Solutions',
        company: 'Trustwave Sp. z o.o. \u00b7 Performance Management \u00b7 Warsaw / Remote',
        period: 'Oct 2024 \u2013 present',
        bullets: [
          'Designing and delivering Power BI dashboards and data models for Financial Directors and CFO - intuitive visualisations enabling data-driven decisions',
          'Building and maintaining ETL pipelines in Alteryx and Power Query, integrating data from multiple sources into a single reporting layer',
          'SQL-based data analysis and modelling supporting strategic business decisions',
          'Translating complex financial data into actionable recommendations for non-technical stakeholders',
          'Collaborating directly with business users to gather requirements and iterate on BI solutions',
        ],
      },
      {
        role: 'Finance Analyst at HSBC \u00b7 Team Coordinator',
        company: 'Alten Polska Sp. z o.o. \u00b7 Cracow / Remote',
        period: 'Jul 2022 \u2013 Apr 2024',
        bullets: [
          'Coordinating a team of 5 analysts in a global bank (HSBC) - task planning, quality oversight, stakeholder communication',
          'Designing BI reports and dashboards using SQL, Power Query, Power BI, and Cognos across multiple data sources',
          'Managing data integration for ~40 IT projects worth $15M: budgeting, forecasting, resource allocation',
          'Automating reporting workflows from disparate data sources using Power Query - reducing manual effort',
          'Training teams on Power BI, Power Query, and Excel - ensuring adoption and self-service analytics',
        ],
      },
      {
        role: 'Smartsheet Developer \u00b7 Global Reporting',
        company: 'Zimmer Biomet Polska \u00b7 Global Business Support \u00b7 Warsaw',
        period: 'Jun 2021 \u2013 Jun 2022',
        bullets: [
          'Standardising reporting and dashboards across 14 departments during Global Transition',
          'Training global users and developers on reporting tools - driving adoption of unified data practices',
          'Developing Continuous Improvement tracking application (PowerApps)',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services \u00b7 Project Management \u00b7 Warsaw',
        period: 'Sep 2018 \u2013 May 2021',
        bullets: [
          'Full-cycle BI solution delivery: requirements gathering, data modelling, Power BI dashboard development, and board-level reporting',
          'Integrating data from multiple sources (SharePoint, ERP, Excel) into unified reporting views',
          'Automating business processes with Power Automate, SharePoint, and Power BI - replacing manual workflows',
          'Managing teams (4-15 people) and collaborating with a global banking client on invoice flow analysis and process optimisation',
          'Innovation project (Novatorium): implementing Power Platform solutions for internal process improvement',
        ],
      },
      {
        role: 'Junior Project Manager \u00b7 Management Trainee',
        company: 'Jeronimo Martins (Lisbon) \u00b7 Robert BOSCH (Warsaw)',
        period: 'Feb 2016 \u2013 Aug 2018',
        bullets: [
          'International experience across Portugal & Poland: KPI reporting, process analysis, stakeholder coordination',
        ],
      },
    ],
    skillGroups: [
      { name: 'Power BI & Data Modelling', items: 'Power BI (dashboards, reports, data models, row-level security) \u00b7 DAX (advanced measures, calculated columns, time intelligence) \u00b7 Power Query / M (data transformations, multi-source integration)' },
      { name: 'SQL & Databases', items: 'Advanced SQL (complex queries, joins, CTEs, window functions) \u00b7 Query optimisation \u00b7 Multi-source data integration \u00b7 Stored procedures' },
      { name: 'ETL & Data Pipelines', items: 'Alteryx (ETL workflows, data cleansing, scheduling) \u00b7 Power Query (automated consolidation) \u00b7 Data warehouse concepts (star schema, fact/dimension tables)' },
      { name: 'Microsoft Stack & Automation', items: 'Power Automate \u00b7 PowerApps \u00b7 SharePoint \u00b7 Cognos \u00b7 Smartsheet \u00b7 Advanced Excel (macros, Power Pivot, pivot tables)' },
      { name: 'Project & Stakeholder Management', items: 'Full project lifecycle (requirements \u2013 implementation \u2013 training) \u00b7 Client-facing communication \u00b7 Team coordination \u00b7 PRINCE2 Foundation \u00b7 Six Sigma \u00b7 Lean' },
    ],
    education: [
''' + """      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'SQL Basics & Intermediate, 2023',
      'Business Analytics in Power BI - LabMasters, 2022',
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],""" + r'''
    languages: 'Polish (native) \u00b7 English (fluent) \u00b7 Portuguese (intermediate, CELPE-Bras) \u00b7 Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
  pl: {
    fileName: 'AG_Konsultant BI_PL.pdf',
    name: 'Adriana Gu\u015Bciora',
    title: 'Konsultant BI \u00b7 Power BI \u00b7 SQL \u00b7 ETL',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Praca zdalna (UE)',
    summary: 'Konsultant BI z ponad 8-letnim do\u015Bwiadczeniem w projektowaniu i wdra\u017Caniu rozwi\u0105za\u0144 opartych na danych w sektorze finansowym. Zaawansowana znajomo\u015B\u0107 Power BI (modelowanie danych, DAX, raporty interaktywne) oraz SQL (z\u0142o\u017Cone zapytania, optymalizacja, integracja wielu \u017Ar\u00F3de\u0142). Udokumentowane do\u015Bwiadczenie w budowaniu pipeline\u00F3w ETL (Alteryx, Power Query) i przekszta\u0142caniu wymaga\u0144 biznesowych w skalowalne rozwi\u0105zania BI. Do\u015Bwiadczenie w zarz\u0105dzaniu pe\u0142nym cyklem projektu - od analizy wymaga\u0144 przez wdro\u017Cenie po szkolenia i adopcj\u0119. Skuteczna komunikacja mi\u0119dzy zespo\u0142ami technicznymi a biznesowymi.',
    sections: {
      experience: 'DO\u015AWIADCZENIE ZAWODOWE',
      skills: 'UMIEJ\u0118TNO\u015ACI',
      education: 'WYKSZTA\u0141CENIE',
      certifications: 'CERTYFIKATY I SZKOLENIA',
      languages: 'J\u0118ZYKI',
    },
    jobs: [
      {
        role: 'Starszy Analityk Finansowy \u00b7 Rozwi\u0105zania BI',
        company: 'Trustwave Sp. z o.o. \u00b7 Performance Management \u00b7 Warszawa / Zdalnie',
        period: 'pa\u017A 2024 - obecnie',
        bullets: [
          'Projektowanie i dostarczanie dashboard\u00F3w Power BI i modeli danych dla Dyrektor\u00F3w Finansowych i CFO - intuicyjne wizualizacje wspieraj\u0105ce decyzje',
          'Budowanie i utrzymywanie pipeline\u00F3w ETL w Alteryx i Power Query, integracja danych z wielu \u017Ar\u00F3de\u0142 w jedn\u0105 warstw\u0119 raportow\u0105',
          'Analizy SQL i modelowanie danych wspieraj\u0105ce strategiczne decyzje biznesowe',
          'Translacja z\u0142o\u017Conych danych finansowych na rekomendacje dla niertechnicznych stakeholder\u00F3w',
          'Bezpo\u015Brednia wsp\u00F3\u0142praca z u\u017Cytkownikami biznesowymi: zbieranie wymaga\u0144, iteracyjne doskonalenie rozwi\u0105za\u0144 BI',
        ],
      },
      {
        role: 'Analityk Finansowy w HSBC \u00b7 Koordynator Zespo\u0142u',
        company: 'Alten Polska Sp. z o.o. \u00b7 Krak\u00F3w / Zdalnie',
        period: 'lip 2022 - kwi 2024',
        bullets: [
          'Koordynacja zespo\u0142u 5 analityk\u00F3w w globalnym banku (HSBC) - planowanie zada\u0144, kontrola jako\u015Bci, komunikacja ze stakeholderami',
          'Projektowanie raport\u00F3w i dashboard\u00F3w BI w SQL, Power Query, Power BI i Cognos z wielu \u017Ar\u00F3de\u0142 danych',
          'Zarz\u0105dzanie integracj\u0105 danych dla ~40 projekt\u00F3w IT o warto\u015Bci 15M$: bud\u017Cetowanie, prognozowanie, alokacja zasob\u00F3w',
          'Automatyzacja workflow\u00F3w raportowych z rozproszonych \u017Ar\u00F3de\u0142 danych w Power Query - redukcja pracy manualnej',
          'Szkolenia zespo\u0142\u00F3w z Power BI, Power Query i Excel - zapewnienie adopcji i self-service analytics',
        ],
      },
      {
        role: 'Deweloper Smartsheet \u00b7 Raportowanie Globalne',
        company: 'Zimmer Biomet Polska \u00b7 Global Business Support \u00b7 Warszawa',
        period: 'cze 2021 - cze 2022',
        bullets: [
          'Standaryzacja raportowania i dashboard\u00F3w w 14 departamentach podczas Global Transition',
          'Szkolenia globalnych u\u017Cytkownik\u00F3w i deweloper\u00F3w z narz\u0119dzi raportowych - adopcja ujednoliconych praktyk',
          'Stworzenie aplikacji Continuous Improvement (PowerApps)',
        ],
      },
      {
        role: 'Programista BI i Kierownik Projektu',
        company: 'ISS Facility Services \u00b7 Project Management \u00b7 Warszawa',
        period: 'wrz 2018 - maj 2021',
        bullets: [
          'Pe\u0142ny cykl dostarczania rozwi\u0105za\u0144 BI: zbieranie wymaga\u0144, modelowanie danych, budowa dashboard\u00F3w Power BI, raporty dla Zarz\u0105du',
          'Integracja danych z wielu \u017Ar\u00F3de\u0142 (SharePoint, ERP, Excel) w ujednolicone widoki raportowe',
          'Automatyzacja proces\u00F3w biznesowych: Power Automate, SharePoint, Power BI - zast\u0105pienie workflow\u00F3w manualnych',
          'Zarz\u0105dzanie zespo\u0142ami (4-15 os\u00F3b) i wsp\u00F3\u0142praca z globalnym klientem bankowym nad analiz\u0105 przep\u0142ywu faktur',
          'Projekt innowacyjny (Novatorium): wdro\u017Cenie rozwi\u0105za\u0144 Power Platform',
        ],
      },
      {
        role: 'M\u0142odszy Kierownik Projektu \u00b7 Management Trainee',
        company: 'Jeronimo Martins (Lizbona) \u00b7 Robert BOSCH (Warszawa)',
        period: 'lut 2016 - sie 2018',
        bullets: [
          'Do\u015Bwiadczenie mi\u0119dzynarodowe (Portugalia i Polska): raportowanie KPI, analiza proces\u00F3w, koordynacja stakeholder\u00F3w',
        ],
      },
    ],
    skillGroups: [
      { name: 'Power BI i modelowanie danych', items: 'Power BI (dashboardy, raporty, modele danych, row-level security) \u00b7 DAX (zaawansowane miary, kolumny obliczane, time intelligence) \u00b7 Power Query / M (transformacje danych, integracja wielu \u017Ar\u00F3de\u0142)' },
      { name: 'SQL i bazy danych', items: 'Zaawansowany SQL (z\u0142o\u017Cone zapytania, JOIN, CTE, funkcje okienkowe) \u00b7 Optymalizacja zapyta\u0144 \u00b7 Integracja wielu \u017Ar\u00F3de\u0142 \u00b7 Procedury sk\u0142adowane' },
      { name: 'ETL i pipeline danych', items: 'Alteryx (ETL, czyszczenie danych, harmonogramowanie) \u00b7 Power Query (automatyczna konsolidacja) \u00b7 Koncepcje hurtowni danych (schemat gwiazdy, tabele fakt\u00F3w/wymiar\u00F3w)' },
      { name: 'Microsoft Stack i automatyzacja', items: 'Power Automate \u00b7 PowerApps \u00b7 SharePoint \u00b7 Cognos \u00b7 Smartsheet \u00b7 Zaawansowany Excel (makra, Power Pivot, tabele przestawne)' },
      { name: 'Zarz\u0105dzanie projektami i stakeholderami', items: 'Pe\u0142ny cykl projektu (wymagania - wdro\u017Cenie - szkolenia) \u00b7 Komunikacja z klientem \u00b7 Koordynacja zespo\u0142u \u00b7 PRINCE2 Foundation \u00b7 Six Sigma \u00b7 Lean' },
    ],
    education: [
      { year: '2020-2021', title: 'Studia podyplomowe: Mened\u017Cer Jako\u015Bci', school: 'Szko\u0142a G\u0142\u00F3wna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012-2016', title: 'In\u017Cynier: Zarz\u0105dzanie i In\u017Cynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'SQL Basics & Intermediate, 2023',
      'Business Analytics in Power BI - LabMasters, 2022',
      'Metoda Six Sigma w zarz\u0105dzaniu jako\u015Bci\u0105 - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polski (ojczysty) \u00b7 Angielski (zaawansowany) \u00b7 Portugalski (\u015Brednio zaawansowany, CELPE-Bras) \u00b7 W\u0142oski (podstawowy)',
    gdpr: 'Wyra\u017Cam zgod\u0119 na przetwarzanie moich danych osobowych w celu rekrutacji.',
  },
};

const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;
'''

content = []
content.append(DATA_PART)

build_html = r"""function buildHTML(data) {
  const jobsHTML = data.jobs.map((j, idx) => `
    <div class="job${idx === data.jobs.length - 1 ? ' page-break' : ''}">
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
        ${e.desc ? `<span class="edu-desc"> \u00b7 ${e.desc}</span>` : ''}
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
  .header-text { flex: 1; }
  .header h1 { font-size: 20pt; font-weight: 700; color: #1b2a4a; letter-spacing: -0.5px; margin-bottom: 2px; }
  .header .title { font-size: 11pt; font-weight: 600; color: #2d5aa0; margin-bottom: 4px; }
  .header .contact { font-size: 8.5pt; color: #555; }
  .summary { background: #f0f4fa; border-left: 3px solid #2d5aa0; padding: 9px 12px; margin-bottom: 14px; font-size: 9pt; color: #333; text-align: justify; }
  .section-title { font-size: 10pt; font-weight: 700; color: #1b2a4a; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1.5px solid #ccd5e0; padding-bottom: 3px; margin-top: 13px; margin-bottom: 8px; }
  .job { margin-bottom: 10px; }
  .page-break { page-break-before: always; }
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
<div class="header"><div class="header-text"><h1>${data.name}</h1><div class="title">${data.title}</div><div class="contact">${data.contact}</div></div></div>
<div class="summary">${data.summary}</div>
<div class="section-title">${data.sections.experience}</div>${jobsHTML}
<div class="section-title">${data.sections.skills}</div>${skillsHTML}
<div class="section-title">${data.sections.education}</div>${eduHTML}
<div class="section-title">${data.sections.certifications}</div><div class="certs-grid">${certsHTML}</div>
<div class="section-title">${data.sections.languages}</div><div class="languages">${data.languages}</div>
<div class="gdpr">${data.gdpr}</div>
</body></html>`;
}
"""
content.append(build_html)

content.append(r"""function buildHTMLWithPhoto(data) {
  // PL version gets a photo in the header
  const base = buildHTML(data);
  const photoTag = `<img src="${photoDataUrl}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;">`;
  return base.replace(
    '<div class="header"><div class="header-text">',
    '<div class="header">' + photoTag + '<div class="header-text">'
  );
}

async function generatePDF() {
  const browser = await chromium.launch();

  // EN version (no photo)
  const enData = cvData.en;
  const enPage = await browser.newPage();
  await enPage.setContent(buildHTML(enData), { waitUntil: 'networkidle' });
  const enPath = path.join(outputDir, enData.fileName);
  await enPage.pdf({ path: enPath, format: 'A4', printBackground: true, margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' } });
  console.log('Generated: ' + enPath);

  // PL version (with photo)
  const plData = cvData.pl;
  const plPage = await browser.newPage();
  await plPage.setContent(buildHTMLWithPhoto(plData), { waitUntil: 'networkidle' });
  const plPath = path.join(outputDir, plData.fileName);
  await plPage.pdf({ path: plPath, format: 'A4', printBackground: true, margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' } });
  console.log('Generated: ' + plPath);

  await browser.close();
}

(async () => { await generatePDF(); console.log('Done!'); })();
""")

JS_PATH.write_text('\n'.join(content), encoding='utf-8')
print(f'Written {JS_PATH}')

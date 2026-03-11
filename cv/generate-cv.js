const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

// Tailored CV data for: IT Finance Reporting & Analytics Project Manager
const cvData = {
  en: {
    fileName: 'AG_IT Finance Reporting and Analytics PM_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'IT Finance Reporting & Analytics Project Manager',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Remote',
    summary: 'Finance & analytics professional with 8+ years of experience in IT finance reporting, budgeting, forecasting, and process automation. Proven track record of coordinating cross-functional teams, standardizing reporting templates, and delivering Power BI dashboards for C-level stakeholders. Combining financial expertise with advanced Excel/Power Query automation and project management skills (PRINCE2) to drive cost optimization and data-driven decision-making. Passionate about continuous improvement, streamlining processes, and expanding competencies through learning new tools and methodologies.',
    sections: {
      experience: 'WORK EXPERIENCE',
      skills: 'KEY SKILLS',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS & TRAINING',
      languages: 'LANGUAGES',
    },
    jobs: [
      {
        role: 'Senior Finance Analyst',
        company: 'Trustwave Sp. z o.o. · Performance Management · Warsaw / Remote',
        period: 'Oct 2024 – present',
        bullets: [
          'Owned the IT finance reporting cycle: built and maintained financial dashboards in Power BI for Financial Directors and CFO, covering budget vs actuals, forecast, and variance analysis',
          'Automated financial reporting pipelines using Power Query and Alteryx - replaced manual consolidation with robust, multi-source data flows',
          'Designed and maintained standardized Excel reporting templates with Power Query transformations for automated data pulls',
          'Built and maintained ETL workflows in Alteryx for data cleansing, manipulation, and consolidated dataset creation',
          'Drove process improvements: transitioned manual reporting to automated solutions, reducing cycle time and error rates',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. · Cracow / Remote',
        period: 'Jul 2022 – Apr 2024',
        bullets: [
          'Coordinated a team of 5 financial controllers on deliverables, data quality, and reporting deadlines',
          'Managed finance processes for ~40 IT projects ($15M budget in 2023): budgeting, forecasting, and resource cost allocation',
          'Built Power BI dashboards and Excel reports for budget tracking, variance analysis, and trend monitoring',
          'Automated data consolidation using Power Query with multiple data sources (Clarity, GPDM, Cognos)',
          'Facilitated training workshops on financial processes and tools (Excel, Power Query, Power BI) for stakeholders',
          'Aligned reporting standards with Central Finance Controlling and improved ways of working across teams',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska · Global Business Support · Warsaw',
        period: 'Jun 2021 – Jun 2022',
        bullets: [
          'Led reporting for Global Transition Process across 14 departments - scope/timeline planning, milestones tracking, stakeholder updates',
          'Organized and facilitated training workshops for global end users and Smartsheet developers',
          'Built a Continuous Improvement tracking application using PowerApps to standardize process change management',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services · Project Management · Warsaw',
        period: 'Sep 2018 – May 2021',
        bullets: [
          'Managed cross-functional teams (4–15 people) and conducted internal audits across projects',
          'Delivered financial analysis (budgeting, forecasting) and operational dashboards using Power BI and SharePoint',
          'Automated processes end-to-end using Power Automate, SharePoint, and Power BI - reducing manual effort',
          'Prepared executive-ready Board reports with Power BI, translating complex data into actionable insights',
          'Led Novatorium innovation project: implemented process improvements using the Power Platform suite',
        ],
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        period: 'Feb 2016 – Aug 2018',
        bullets: [
          'International project experience (Portugal & Poland): Employer Branding, Store Excellence, Logistics',
          'Stakeholder coordination and workshop facilitation in matrix organizational setups',
        ],
      },
    ],
    skillGroups: [
      { name: 'BI & Reporting', items: 'Power BI (dashboards, data models, DAX measures, publishing) · Advanced Excel (Power Pivot, complex formulas, dashboarding, scenario analysis) · Power Query (robust transformations, automated multi-source consolidation)' },
      { name: 'Data & ETL', items: 'SQL (advanced queries, joins, CTEs) · Alteryx (ETL workflows, data cleansing) · Cognos · SharePoint' },
      { name: 'Finance', items: 'IT P&L structure · Cost allocation logic · Budgeting & forecasting · Variance & trend analysis · Cost optimization' },
      { name: 'Project Management', items: 'PRINCE2 Foundation · Scope/timeline/milestone planning · RAID tracking · Stakeholder coordination · Workshop facilitation · Change & adoption management' },
      { name: 'AI & Automation', items: 'Power Automate · Claude Code (AI-assisted development) · Prompt Engineering · PowerApps' },
    ],
    education: [
      { year: '2020–2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012–2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012–2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009–2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'SQL Basics & Intermediate, 2023',
      'Business Analytics in Power BI - LabMasters, 2022',
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) · English (fluent) · Portuguese (intermediate, CELPE-Bras) · Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
  pl: {
    fileName: 'AG_Kierownik Projektu - Raportowanie Finansowe IT i Analityka_PL.pdf',
    photo: true,
    name: 'Adriana Gusciora',
    title: 'Kierownik Projektu | Raportowanie Finansowe IT i Analityka',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Zdalnie',
    summary: 'Specjalistka ds. finansów i analityki z 8+ latami doświadczenia w raportowaniu finansowym IT, budżetowaniu, prognozowaniu i automatyzacji procesów. Udokumentowane osiągnięcia w koordynacji zespołów międzyfunkcyjnych, standaryzacji szablonów raportowych i dostarczaniu dashboardów Power BI dla kadry zarządzającej. Łączę wiedzę finansową z zaawansowaną automatyzacją Excel/Power Query i umiejętnościami zarządzania projektami (PRINCE2), wspierając optymalizację kosztów i podejmowanie decyzji opartych na danych. Zależy mi na ciągłym rozwoju, usprawnianiu procesów oraz zdobywaniu nowych kompetencji i narzędzi.',
    sections: {
      experience: 'DOŚWIADCZENIE ZAWODOWE',
      skills: 'KLUCZOWE UMIEJĘTNOŚCI',
      education: 'WYKSZTAŁCENIE',
      certifications: 'CERTYFIKATY I SZKOLENIA',
      languages: 'JĘZYKI',
    },
    jobs: [
      {
        role: 'Starszy Analityk Finansowy',
        company: 'Trustwave Sp. z o.o. · Performance Management · Warszawa / Zdalnie',
        period: 'paź 2024 – obecnie',
        bullets: [
          'Prowadzenie cyklu raportowania finansowego IT: budowa i utrzymanie dashboardów w Power BI dla Financial Directors i CFO - budżet vs wykonanie, prognoza, analiza odchyleń',
          'Automatyzacja pipeline\'ów raportowania finansowego za pomocą Power Query i Alteryx - zastąpienie ręcznej konsolidacji zautomatyzowanymi przepływami danych z wielu źródeł',
          'Projektowanie i utrzymanie zestandaryzowanych szablonów raportowych Excel z transformacjami Power Query',
          'Budowa i utrzymanie workflow ETL w Alteryx: czyszczenie danych, manipulacja i tworzenie skonsolidowanych zbiorów',
          'Wdrażanie usprawnień procesowych: przejście z raportowania manualnego na automatyzację',
        ],
      },
      {
        role: 'Analityk Finansowy w HSBC',
        company: 'Alten Polska Sp. z o.o. · Kraków / Zdalnie',
        period: 'lip 2022 – kwi 2024',
        bullets: [
          'Koordynacja zespołu 5 kontrolerów finansowych: dostarczanie wyników, jakość danych, terminy raportowe',
          'Zarządzanie procesami finansowymi dla ~40 projektów IT (15M$ budżetu w 2023): budżetowanie, prognozowanie, alokacja zasobów',
          'Budowa dashboardów Power BI i raportów Excel: śledzenie budżetu, analiza odchyleń, monitoring trendów',
          'Automatyzacja konsolidacji danych za pomocą Power Query z wielu źródeł (Clarity, GPDM, Cognos)',
          'Prowadzenie warsztatów szkoleniowych z procesów finansowych i narzędzi (Excel, Power Query, Power BI)',
          'Harmonizacja standardów raportowania z Central Finance Controlling i usprawnianie sposobu pracy',
        ],
      },
      {
        role: 'Deweloper Smartsheet',
        company: 'Zimmer Biomet Polska · Global Business Support · Warszawa',
        period: 'cze 2021 – cze 2022',
        bullets: [
          'Prowadzenie raportowania w procesie Global Transition dla 14 departamentów - planowanie zakresu/harmonogramu, śledzenie kamieni milowych, aktualizacje interesariuszy',
          'Organizacja i prowadzenie warsztatów szkoleniowych dla globalnych użytkowników i deweloperów Smartsheet',
          'Budowa aplikacji Continuous Improvement w PowerApps do standaryzacji zarządzania zmianami procesowymi',
        ],
      },
      {
        role: 'Analityk BI i Kierownik Projektu',
        company: 'ISS Facility Services · Project Management · Warszawa',
        period: 'wrz 2018 – maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi (4–15 osób) i przeprowadzanie audytów wewnętrznych',
          'Analizy finansowe (budżetowanie, prognozowanie) i dashboardy operacyjne: Power BI, SharePoint',
          'Automatyzacja procesów end-to-end: Power Automate, SharePoint, Power BI',
          'Przygotowywanie raportów dla Zarządu w Power BI - tłumaczenie złożonych danych na rekomendacje',
          'Projekt Novatorium: implementacja innowacji procesowych z wykorzystaniem Power Platform',
        ],
      },
      {
        role: 'Młodszy Kierownik Projektu · Management Trainee',
        company: 'Jeronimo Martins (Lizbona i Warszawa) · Robert BOSCH (Warszawa)',
        period: 'lut 2016 – sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie projektowe (Portugalia i Polska): Employer Branding, Store Excellence, Logistyka',
          'Koordynacja interesariuszy i prowadzenie warsztatów w organizacji macierzowej',
        ],
      },
    ],
    skillGroups: [
      { name: 'BI & Raportowanie', items: 'Power BI (dashboardy, modele danych, miary DAX, publikowanie) · Zaawansowany Excel (Power Pivot, złożone formuły, dashboarding, analiza scenariuszy) · Power Query (zaawansowane transformacje, automatyczna konsolidacja wieloźródłowa)' },
      { name: 'Dane & ETL', items: 'SQL (zaawansowane zapytania, joiny, CTE) · Alteryx (workflow ETL, czyszczenie danych) · Cognos · SharePoint' },
      { name: 'Finanse', items: 'Struktura IT P&L · Logika alokacji kosztów · Budżetowanie i prognozowanie · Analiza odchyleń i trendów · Optymalizacja kosztów' },
      { name: 'Zarządzanie Projektami', items: 'PRINCE2 Foundation · Planowanie zakresu/harmonogramu/kamieni milowych · Śledzenie RAID · Koordynacja interesariuszy · Prowadzenie warsztatów · Zarządzanie zmianą i adopcją' },
      { name: 'AI & Automatyzacja', items: 'Power Automate · Claude Code (rozwój wspomagany AI) · Prompt Engineering · PowerApps' },
    ],
    education: [
      { year: '2020–2021', title: 'Studia podyplomowe: Menedżer Jakości', school: 'Szkoła Główna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012–2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012–2016', title: 'Inżynier: Zarządzanie i Inżynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009–2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'SQL Basics & Intermediate, 2023',
      'Business Analytics in Power BI - LabMasters, 2022',
      'Metoda Six Sigma w zarządzaniu jakością - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polski (ojczysty) · Angielski (biegły) · Portugalski (średniozaawansowany, CELPE-Bras) · Włoski (podstawowy)',
    gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji.',
  },
};

// Load photo as base64 for PL version
const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

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
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-size: 9.5pt;
    line-height: 1.45;
    color: #1a1a2e;
    padding: 32px 36px;
    max-width: 210mm;
  }

  /* Header */
  .header {
    border-bottom: 2.5px solid #1b2a4a;
    padding-bottom: 12px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .header-photo {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccd5e0;
    flex-shrink: 0;
  }
  .header-text { flex: 1; }
  .header h1 {
    font-size: 20pt;
    font-weight: 700;
    color: #1b2a4a;
    letter-spacing: -0.5px;
    margin-bottom: 2px;
  }
  .header .title {
    font-size: 11pt;
    font-weight: 600;
    color: #2d5aa0;
    margin-bottom: 4px;
  }
  .header .contact {
    font-size: 8.5pt;
    color: #555;
  }

  /* Summary */
  .summary {
    background: #f0f4fa;
    border-left: 3px solid #2d5aa0;
    padding: 9px 12px;
    margin-bottom: 14px;
    font-size: 9pt;
    color: #333;
    text-align: justify;
  }

  /* Section headers */
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    color: #1b2a4a;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1.5px solid #ccd5e0;
    padding-bottom: 3px;
    margin-top: 13px;
    margin-bottom: 8px;
  }

  /* Jobs */
  .job { margin-bottom: 10px; }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }
  .job-role {
    font-weight: 700;
    font-size: 9.5pt;
    color: #1b2a4a;
  }
  .job-company {
    font-size: 8.5pt;
    color: #555;
    margin-bottom: 3px;
  }
  .job-period {
    font-size: 8.5pt;
    color: #2d5aa0;
    font-weight: 500;
    white-space: nowrap;
  }
  ul {
    padding-left: 16px;
    margin-top: 2px;
  }
  li {
    margin-bottom: 1.5px;
    font-size: 9pt;
  }
  li::marker { color: #2d5aa0; }

  /* Skills */
  .skill-group {
    margin-bottom: 5px;
    font-size: 9pt;
  }
  .skill-name {
    font-weight: 700;
    color: #1b2a4a;
  }

  /* Education */
  .edu-item {
    display: flex;
    gap: 10px;
    margin-bottom: 4px;
    font-size: 9pt;
  }
  .edu-year {
    font-weight: 600;
    color: #2d5aa0;
    min-width: 70px;
    font-size: 8.5pt;
  }
  .edu-title { font-weight: 600; }
  .edu-school { color: #555; }
  .edu-desc { color: #666; font-style: italic; }

  /* Certs */
  .certs-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .cert-tag {
    background: #e8eef6;
    border: 1px solid #ccd5e0;
    border-radius: 3px;
    padding: 2px 7px;
    font-size: 8.5pt;
    color: #1b2a4a;
  }

  /* Languages & GDPR */
  .languages {
    font-size: 9pt;
    margin-top: 4px;
  }
  .gdpr {
    font-size: 7.5pt;
    color: #888;
    margin-top: 16px;
    text-align: center;
    font-style: italic;
  }

  /* Print: keep it tight for 2-page A4 */
  @page {
    size: A4;
    margin: 12mm 14mm;
  }
</style>
</head>
<body>

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

</body>
</html>`;
}

async function generatePDF(lang) {
  const data = cvData[lang];
  const html = buildHTML(data);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });

  const pdfPath = path.join(outputDir, data.fileName);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' },
  });

  await browser.close();
  console.log(`Generated: ${pdfPath}`);
}

(async () => {
  await generatePDF('en');
  await generatePDF('pl');
  console.log('Done!');
})();

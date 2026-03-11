const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

// Tailored CV data for: Vantive - Senior Costing Analyst
const cvData = {
  en: {
    fileName: 'AG_Senior Costing Analyst_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Senior Costing Analyst',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Warsaw',
    summary: 'Finance professional with 8+ years of experience in financial analysis, cost allocation, budgeting, forecasting, and process automation across international organizations. Proven ability to coordinate with multiple finance partners, deliver standardized reporting, and drive continuous improvement using Lean and Six Sigma methodologies. Strong analytical skills combined with advanced Excel, Power Query, and Power BI expertise to handle large datasets efficiently and support data-driven decision-making. Passionate about streamlining processes, expanding competencies, and learning new tools and methodologies.',
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
        company: 'Trustwave Sp. z o.o. - Performance Management - Warsaw / Remote',
        period: 'Oct 2024 - present',
        bullets: [
          'Owned the finance reporting cycle: built and maintained dashboards in Power BI covering budget vs actuals, forecast, cost variance analysis, and spending trends for Financial Directors and CFO',
          'Automated financial data consolidation using Power Query and Alteryx - replaced manual cost roll-ups with robust, multi-source data flows across reporting cycles',
          'Designed and maintained standardized Excel reporting templates with Power Query transformations for automated cost data pulls and element-level tracking',
          'Built and maintained ETL workflows in Alteryx for data cleansing, cost data manipulation, and consolidated dataset creation',
          'Drove process improvements: transitioned manual reporting to automated solutions, reducing cycle time and error rates',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. - Cracow / Remote',
        period: 'Jul 2022 - Apr 2024',
        bullets: [
          'Coordinated a team of 5 financial controllers on deliverables, data quality, and reporting deadlines across multiple business units',
          'Managed finance processes for ~40 projects ($15M budget in 2023): budgeting, forecasting, cost allocation, and variance analysis',
          'Built Power BI dashboards and Excel reports for budget tracking, cost element analysis, and trend monitoring',
          'Automated data consolidation using Power Query with multiple data sources (Clarity, GPDM, Cognos) - handling large datasets under strict deadlines',
          'Facilitated training workshops on financial processes and tools (Excel, Power Query, Power BI) for cross-regional stakeholders',
          'Aligned reporting standards with Central Finance Controlling and improved ways of working across global teams',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska - Global Business Support - Warsaw',
        period: 'Jun 2021 - Jun 2022',
        bullets: [
          'Led reporting and tracking for Global Transition Process across 14 departments in a global manufacturing organization - scope/timeline planning, milestones tracking, stakeholder updates',
          'Organized and facilitated training workshops for global end users and developers',
          'Built a Continuous Improvement tracking application using PowerApps to standardize process change management',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services - Project Management - Warsaw',
        period: 'Sep 2018 - May 2021',
        bullets: [
          'Managed cross-functional teams (4-15 people) and conducted internal audits across projects',
          'Delivered financial analysis (budgeting, forecasting, cost tracking) and operational dashboards using Power BI and SharePoint',
          'Automated processes end-to-end using Power Automate, SharePoint, and Power BI - reducing manual effort in reporting cycles',
          'Prepared executive-ready Board reports with Power BI, translating complex cost and operational data into actionable insights',
          'Led Novatorium innovation project: implemented process improvements using Lean methodology and Power Platform',
        ],
      },
      {
        role: 'Junior Project Manager - Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) - Robert BOSCH (Warsaw)',
        period: 'Feb 2016 - Aug 2018',
        bullets: [
          'International experience in supply chain and logistics operations (Portugal & Poland)',
          'Stakeholder coordination and process improvement initiatives in matrix organizational setups',
        ],
      },
    ],
    skillGroups: [
      { name: 'Finance & Costing', items: 'Cost allocation logic - Budgeting & forecasting - Variance & trend analysis - Cost element tracking - P&L structure - Standard cost management' },
      { name: 'BI & Reporting', items: 'Power BI (dashboards, data models, DAX measures, publishing) - Advanced Excel (Power Pivot, complex formulas, dashboarding, scenario analysis) - Power Query (robust transformations, automated multi-source consolidation)' },
      { name: 'Data & ERP', items: 'SQL (advanced queries, joins, CTEs) - Alteryx (ETL workflows, data cleansing) - Cognos - Clarity - GPDM - SharePoint' },
      { name: 'Process Improvement', items: 'Six Sigma (SGH certified) - Lean Management - Kaizen - PRINCE2 Foundation - Continuous Improvement tracking' },
      { name: 'Collaboration', items: 'Multi-site finance coordination - Global stakeholder management - Workshop facilitation - Cross-regional team leadership' },
    ],
    education: [
      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'SQL Advanced - LabMasters, 2025',
      'Business Analytics in Power BI - LabMasters, 2022',
      'SQL Basics & Intermediate, 2023',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) - English (fluent) - Portuguese (intermediate, CELPE-Bras) - Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
  pl: {
    fileName: 'AG_Starszy Analityk Finansowy_PL.pdf',
    photo: true,
    name: 'Adriana Gusciora',
    title: 'Starszy Analityk Finansowy',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Warszawa',
    summary: 'Specjalistka ds. finansów z 8+ latami doświadczenia w analizie finansowej, alokacji kosztów, budżetowaniu, prognozowaniu i automatyzacji procesów w organizacjach międzynarodowych. Udokumentowane osiągnięcia w koordynacji z wieloma partnerami finansowymi, dostarczaniu zestandaryzowanego raportowania i wdrażaniu ciągłego doskonalenia z wykorzystaniem metodologii Lean i Six Sigma. Silne umiejętności analityczne w połączeniu z zaawansowanym Excel, Power Query i Power BI do efektywnej pracy z dużymi zbiorami danych. Zależy mi na ciągłym rozwoju, usprawnianiu procesów oraz zdobywaniu nowych kompetencji i narzędzi.',
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
        company: 'Trustwave Sp. z o.o. - Performance Management - Warszawa / Zdalnie',
        period: 'paź 2024 - obecnie',
        bullets: [
          'Prowadzenie cyklu raportowania finansowego: budowa i utrzymanie dashboardów w Power BI - budżet vs wykonanie, prognoza, analiza odchyleń kosztowych i trendy wydatków dla Financial Directors i CFO',
          'Automatyzacja konsolidacji danych finansowych za pomocą Power Query i Alteryx - zastąpienie ręcznych zestawień kosztów zautomatyzowanymi przepływami danych z wielu źródeł',
          'Projektowanie i utrzymanie zestandaryzowanych szablonów raportowych Excel z transformacjami Power Query do automatycznego pobierania danych kosztowych',
          'Budowa i utrzymanie workflow ETL w Alteryx: czyszczenie danych, manipulacja danymi kosztowymi i tworzenie skonsolidowanych zbiorów',
          'Wdrażanie usprawnień procesowych: przejście z raportowania manualnego na automatyzację',
        ],
      },
      {
        role: 'Analityk Finansowy w HSBC',
        company: 'Alten Polska Sp. z o.o. - Kraków / Zdalnie',
        period: 'lip 2022 - kwi 2024',
        bullets: [
          'Koordynacja zespołu 5 kontrolerów finansowych: dostarczanie wyników, jakość danych, terminy raportowe w wielu jednostkach biznesowych',
          'Zarządzanie procesami finansowymi dla ~40 projektów (15M$ budżetu w 2023): budżetowanie, prognozowanie, alokacja kosztów i analiza odchyleń',
          'Budowa dashboardów Power BI i raportów Excel: śledzenie budżetu, analiza elementów kosztowych, monitoring trendów',
          'Automatyzacja konsolidacji danych za pomocą Power Query z wielu źródeł (Clarity, GPDM, Cognos) - obsługa dużych zbiorów danych w ścisłych terminach',
          'Prowadzenie warsztatów szkoleniowych z procesów finansowych i narzędzi (Excel, Power Query, Power BI) dla interesariuszy międzyregionalnych',
          'Harmonizacja standardów raportowania z Central Finance Controlling i usprawnianie sposobu pracy w globalnych zespołach',
        ],
      },
      {
        role: 'Deweloper Smartsheet',
        company: 'Zimmer Biomet Polska - Global Business Support - Warszawa',
        period: 'cze 2021 - cze 2022',
        bullets: [
          'Prowadzenie raportowania i śledzenia w procesie Global Transition dla 14 departamentów w globalnej organizacji produkcyjnej - planowanie zakresu/harmonogramu, śledzenie kamieni milowych',
          'Organizacja i prowadzenie warsztatów szkoleniowych dla globalnych użytkowników i deweloperów',
          'Budowa aplikacji Continuous Improvement w PowerApps do standaryzacji zarządzania zmianami procesowymi',
        ],
      },
      {
        role: 'Analityk BI i Kierownik Projektu',
        company: 'ISS Facility Services - Project Management - Warszawa',
        period: 'wrz 2018 - maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi (4-15 osób) i przeprowadzanie audytów wewnętrznych',
          'Analizy finansowe (budżetowanie, prognozowanie, śledzenie kosztów) i dashboardy operacyjne: Power BI, SharePoint',
          'Automatyzacja procesów end-to-end: Power Automate, SharePoint, Power BI - redukcja pracy manualnej w cyklach raportowych',
          'Przygotowywanie raportów dla Zarządu w Power BI - tłumaczenie złożonych danych kosztowych na rekomendacje',
          'Projekt Novatorium: implementacja usprawnień procesowych z wykorzystaniem metodologii Lean i Power Platform',
        ],
      },
      {
        role: 'Młodszy Kierownik Projektu - Management Trainee',
        company: 'Jeronimo Martins (Lizbona i Warszawa) - Robert BOSCH (Warszawa)',
        period: 'lut 2016 - sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie w operacjach łańcucha dostaw i logistyki (Portugalia i Polska)',
          'Koordynacja interesariuszy i inicjatywy usprawniania procesów w organizacji macierzowej',
        ],
      },
    ],
    skillGroups: [
      { name: 'Finanse & Koszty', items: 'Logika alokacji kosztów - Budżetowanie i prognozowanie - Analiza odchyleń i trendów - Śledzenie elementów kosztowych - Struktura P&L - Zarządzanie kosztami standardowymi' },
      { name: 'BI & Raportowanie', items: 'Power BI (dashboardy, modele danych, miary DAX, publikowanie) - Zaawansowany Excel (Power Pivot, złożone formuły, dashboarding, analiza scenariuszy) - Power Query (zaawansowane transformacje, automatyczna konsolidacja wieloźródłowa)' },
      { name: 'Dane & ERP', items: 'SQL (zaawansowane zapytania, joiny, CTE) - Alteryx (workflow ETL, czyszczenie danych) - Cognos - Clarity - GPDM - SharePoint' },
      { name: 'Usprawnianie Procesów', items: 'Six Sigma (certyfikat SGH) - Lean Management - Kaizen - PRINCE2 Foundation - Śledzenie Continuous Improvement' },
      { name: 'Współpraca', items: 'Koordynacja finansów wielu lokalizacji - Zarządzanie globalnymi interesariuszami - Prowadzenie warsztatów - Liderowanie zespołami międzyregionalnymi' },
    ],
    education: [
      { year: '2020-2021', title: 'Studia podyplomowe: Menedżer Jakości', school: 'Szkoła Główna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012-2016', title: 'Inżynier: Zarządzanie i Inżynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'Metoda Six Sigma w zarządzaniu jakością - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'SQL Advanced - LabMasters, 2025',
      'Business Analytics in Power BI - LabMasters, 2022',
      'SQL Basics & Intermediate, 2023',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polski (ojczysty) - Angielski (biegły) - Portugalski (średniozaawansowany, CELPE-Bras) - Włoski (podstawowy)',
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

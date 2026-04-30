const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

// Tailored CV data for: Delivery Manager - Financial Services / FinTech (Software Mind)
const cvData = {
  en: {
    fileName: 'AG_Delivery Manager_FinTech_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Delivery Manager | Financial Services & FinTech',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Remote',
    summary: 'Delivery and project leader with 8+ years of experience in IT delivery, financial services and FinTech (HSBC, Trustwave). Proven track record of managing cross-functional teams up to 15 people, owning people cost allocation for ~40 IT projects with $15M annual budget, and orchestrating end-to-end delivery for international clients. Combining hands-on Agile/Scrum experience (Jira, Confluence) with PRINCE2 governance, P&L responsibility for assigned client accounts, and stakeholder management at C-level. Skilled in roadmap planning, capacity management, financial forecasting and risk mitigation across regulated banking and software environments.',
    sections: {
      experience: 'WORK EXPERIENCE',
      skills: 'KEY SKILLS',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS & TRAINING',
      languages: 'LANGUAGES',
    },
    jobs: [
      {
        role: 'Senior Finance Analyst | Delivery Coordination',
        company: 'Trustwave Sp. z o.o. · Performance Management · Warsaw / Remote',
        period: 'Oct 2024 – present',
        bullets: [
          'Owning IT finance delivery cycle: budget vs actuals tracking, forecasting, variance analysis and burn rate monitoring for executive stakeholders (Financial Directors, CFO)',
          'Building Power BI dashboards and Alteryx ETL pipelines used in monthly financial reviews and capacity planning',
          'Driving process improvements: replacing manual consolidation with automated multi-source data flows, reducing reporting cycle time and error rates',
          'Coordinating cross-functional collaboration between finance, IT, and business stakeholders on standardized reporting templates',
        ],
      },
      {
        role: 'Project Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. · Cracow / Remote',
        period: 'Jul 2022 – Apr 2024',
        bullets: [
          'Coordinated a team of 5 analysts and owned people cost allocation for ~40 IT projects with $15M annual budget: headcount planning, resource cost forecasting, burn rate tracking and variance analysis',
          'Worked in Agile/Scrum environment with global delivery teams: sprint planning, backlog grooming, daily stand-ups and release planning ceremonies',
          'Day-to-day collaboration in Jira and Confluence: tracking project deliverables, dependencies, RAID logs and stakeholder documentation',
          'Built Power BI dashboards and Excel reports for budget tracking, profitability analysis, variance reporting and trend monitoring',
          'Automated multi-source data consolidation (Clarity, GPDM, Cognos) using Power Query',
          'Aligned reporting standards with Central Finance Controlling and ran training workshops for stakeholders',
        ],
      },
      {
        role: 'Smartsheet Developer | Project Coordinator',
        company: 'Zimmer Biomet Polska · Global Business Support · Warsaw',
        period: 'Jun 2021 – Jun 2022',
        bullets: [
          'Led delivery for Global Transition Process across 14 departments - scope/timeline planning, milestone tracking, stakeholder updates',
          'Organized and facilitated training workshops for global end users and Smartsheet developers',
          'Built a Continuous Improvement tracking application using PowerApps to standardize process change management',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services · Project Management · Warsaw',
        period: 'Sep 2018 – May 2021',
        bullets: [
          'Managed cross-functional delivery teams (4–15 people) and held P&L responsibility for an assigned customer account: revenue tracking, cost control, margin optimization',
          'End-to-end delivery for the assigned client: scope, timeline, budget, financial forecasting, monthly settlements and invoice reconciliation',
          'Conducted internal audits and risk reviews across active engagements',
          'Delivered executive-ready Board reports with Power BI, translating complex data into actionable insights',
          'Automated processes end-to-end using Power Automate, SharePoint, and Power BI - reducing manual effort across teams',
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
      { name: 'Delivery & Project Management', items: 'PRINCE2 Foundation · Agile/Scrum (sprint planning, backlog grooming, release planning) · Roadmap planning · Capacity & resource management · RAID tracking · Risk & dependency mitigation · Change & adoption management' },
      { name: 'PM Tools', items: 'Jira · Confluence · Smartsheet · SharePoint · Power Automate · MS Project (basics)' },
      { name: 'Financial & Commercial', items: 'IT P&L responsibility · Budget management ($15M+) · Cost estimation & burn rate tracking · Financial forecasting · Margin & profitability optimization · Monthly settlements & invoice reconciliation' },
      { name: 'BI & Reporting', items: 'Power BI (executive dashboards, DAX, data models) · Advanced Excel (Power Pivot, complex formulas) · Power Query (multi-source consolidation) · SQL · Alteryx · Cognos' },
      { name: 'AI & Automation', items: 'Power Automate · Claude Code (AI-assisted development) · Prompt Engineering · PowerApps' },
    ],
    education: [
      { year: '2020–2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012–2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012–2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009–2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
      'Six Sigma Quality Management - SGH, 2020',
      'SQL Advanced - LabMasters, 2025',
      'Business Analytics in Power BI - LabMasters, 2022',
    ],
    languages: 'Polish (native) · English (fluent, C1) · Portuguese (intermediate, CELPE-Bras) · Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
  pl: {
    fileName: 'AG_Delivery Manager_FinTech_PL.pdf',
    photo: true,
    name: 'Adriana Guściora',
    title: 'Delivery Manager | Usługi Finansowe i FinTech',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Zdalnie',
    summary: 'Liderka dostarczania projektów z 8+ latami doświadczenia w IT, usługach finansowych i FinTech (HSBC, Trustwave). Udokumentowane osiągnięcia w zarządzaniu zespołami międzyfunkcyjnymi do 15 osób, alokacji kosztów osobowych dla ~40 projektów IT z budżetem rocznym 15M$ oraz dostarczaniu rozwiązań end-to-end dla klientów międzynarodowych. Łączę praktyczne doświadczenie Agile/Scrum (Jira, Confluence) z metodyką PRINCE2, odpowiedzialnością P&L za przypisany account klienta i zarządzaniem interesariuszami na poziomie C-level. Specjalizuję się w planowaniu roadmap, zarządzaniu pojemnością zespołów, prognozowaniu finansowym i mitygacji ryzyk w regulowanym środowisku bankowym i softwarehouse.',
    sections: {
      experience: 'DOŚWIADCZENIE ZAWODOWE',
      skills: 'KLUCZOWE UMIEJĘTNOŚCI',
      education: 'WYKSZTAŁCENIE',
      certifications: 'CERTYFIKATY I SZKOLENIA',
      languages: 'JĘZYKI',
    },
    jobs: [
      {
        role: 'Starszy Analityk Finansowy | Koordynacja Delivery',
        company: 'Trustwave Sp. z o.o. · Performance Management · Warszawa / Zdalnie',
        period: 'paź 2024 – obecnie',
        bullets: [
          'Prowadzenie cyklu finansowego delivery IT: budżet vs wykonanie, prognozowanie, analiza odchyleń i monitoring burn rate dla kadry zarządzającej (Financial Directors, CFO)',
          'Budowa dashboardów Power BI i pipeline\'ów ETL w Alteryx wykorzystywanych w miesięcznych przeglądach finansowych i planowaniu pojemności',
          'Wdrażanie usprawnień procesowych: zastąpienie ręcznej konsolidacji zautomatyzowanymi przepływami wieloźródłowymi - skrócenie cyklu raportowego i redukcja błędów',
          'Koordynacja współpracy międzyfunkcyjnej (finanse, IT, biznes) nad standaryzowanymi szablonami raportowymi',
        ],
      },
      {
        role: 'Analityk Finansowy Projektów w HSBC',
        company: 'Alten Polska Sp. z o.o. · Kraków / Zdalnie',
        period: 'lip 2022 – kwi 2024',
        bullets: [
          'Koordynacja zespołu 5 analityków i odpowiedzialność za alokację kosztów osobowych dla ~40 projektów IT z budżetem rocznym 15M$: planowanie headcount, prognozowanie kosztów zasobów, śledzenie burn rate i analiza odchyleń',
          'Praca w środowisku Agile/Scrum z globalnymi zespołami delivery: sprint planning, backlog grooming, daily stand-up, release planning',
          'Codzienna praca w Jira i Confluence: śledzenie deliverables, zależności, logów RAID i dokumentacji dla interesariuszy',
          'Budowa dashboardów Power BI i raportów Excel: śledzenie budżetu, analiza rentowności, raporty odchyleń i monitoring trendów',
          'Automatyzacja konsolidacji wieloźródłowej (Clarity, GPDM, Cognos) za pomocą Power Query',
          'Harmonizacja standardów raportowania z Central Finance Controlling i prowadzenie warsztatów szkoleniowych',
        ],
      },
      {
        role: 'Deweloper Smartsheet | Koordynator Projektów',
        company: 'Zimmer Biomet Polska · Global Business Support · Warszawa',
        period: 'cze 2021 – cze 2022',
        bullets: [
          'Prowadzenie delivery procesu Global Transition dla 14 departamentów - planowanie zakresu/harmonogramu, śledzenie kamieni milowych, aktualizacje interesariuszy',
          'Organizacja i prowadzenie warsztatów szkoleniowych dla globalnych użytkowników i deweloperów Smartsheet',
          'Budowa aplikacji Continuous Improvement w PowerApps do standaryzacji zarządzania zmianami procesowymi',
        ],
      },
      {
        role: 'Analityk BI i Kierownik Projektu',
        company: 'ISS Facility Services · Project Management · Warszawa',
        period: 'wrz 2018 – maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi (4–15 osób) oraz odpowiedzialność P&L za przypisany account klienta: śledzenie przychodów, kontrola kosztów, optymalizacja marży',
          'Delivery end-to-end dla przypisanego klienta: zakres, harmonogram, budżet, prognozowanie finansowe, miesięczne rozliczenia i uzgadnianie faktur',
          'Przeprowadzanie audytów wewnętrznych i przeglądów ryzyk w aktywnych projektach',
          'Przygotowywanie raportów dla Zarządu w Power BI - tłumaczenie złożonych danych na rekomendacje',
          'Automatyzacja procesów end-to-end: Power Automate, SharePoint, Power BI',
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
      { name: 'Delivery i Zarządzanie Projektami', items: 'PRINCE2 Foundation · Agile/Scrum (sprint planning, backlog grooming, release planning) · Planowanie roadmap · Zarządzanie pojemnością i zasobami · Śledzenie RAID · Mitygacja ryzyk i zależności · Zarządzanie zmianą i adopcją' },
      { name: 'Narzędzia PM', items: 'Jira · Confluence · Smartsheet · SharePoint · Power Automate · MS Project (podstawy)' },
      { name: 'Finanse i Komercja', items: 'Odpowiedzialność P&L · Zarządzanie budżetem (15M$+) · Estymacja kosztów i burn rate · Prognozowanie finansowe · Optymalizacja marży i rentowności · Miesięczne rozliczenia i uzgadnianie faktur' },
      { name: 'BI i Raportowanie', items: 'Power BI (dashboardy executive, DAX, modele danych) · Zaawansowany Excel (Power Pivot, złożone formuły) · Power Query (konsolidacja wieloźródłowa) · SQL · Alteryx · Cognos' },
      { name: 'AI i Automatyzacja', items: 'Power Automate · Claude Code (rozwój wspomagany AI) · Prompt Engineering · PowerApps' },
    ],
    education: [
      { year: '2020–2021', title: 'Studia podyplomowe: Menedżer Jakości', school: 'Szkoła Główna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012–2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012–2016', title: 'Inżynier: Zarządzanie i Inżynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009–2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
      'Metoda Six Sigma w zarządzaniu jakością - SGH, 2020',
      'SQL Advanced - LabMasters, 2025',
      'Business Analytics in Power BI - LabMasters, 2022',
    ],
    languages: 'Polski (ojczysty) · Angielski (biegły, C1) · Portugalski (średniozaawansowany, CELPE-Bras) · Włoski (podstawowy)',
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

  .summary {
    background: #f0f4fa;
    border-left: 3px solid #2d5aa0;
    padding: 9px 12px;
    margin-bottom: 14px;
    font-size: 9pt;
    color: #333;
    text-align: justify;
  }

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

  .skill-group {
    margin-bottom: 5px;
    font-size: 9pt;
  }
  .skill-name {
    font-weight: 700;
    color: #1b2a4a;
  }

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

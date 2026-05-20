// Tailored CVs in the navy+gold redesign aesthetic.
// Source layout: generate-cv-delivery-manager-redesign.js (Claude Design handoff).
// Produces 7 PDFs (4 Delivery Manager + 3 Data Analyst variants), one per REK offer.
// Content mirrors generate-tailored-cvs.js with these corrections:
//   - DM Zimmer bullet: "standardize change management" -> "capture new solutions and process improvements"
//   - Stat tile labels reflect people-cost allocation scope (not budget ownership)
//   - "Open to FinTech & Banking" sidebar line removed

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const photoPath = path.resolve(__dirname, '..', '..', 'adriana-gusciora-pl', 'zdjecia', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

const GDPR_EN = 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR).';
const GDPR_PL = 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).';

// ============================================================
// PROFILE: Delivery Manager (EN + PL)
// ============================================================
const dmProfile = {
  en: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    location: 'Remote · Poland',
    sectionLabels: {
      profile: 'Profile',
      experience: 'Work Experience',
      continued: 'continued',
      toolbox: 'Toolbox',
      contact: 'Contact',
      coreSkills: 'Core Skills',
      languages: 'Languages',
      education: 'Education',
      certifications: 'Certifications',
      method: 'Method',
    },
    sidebarSkills: [
      { name: 'Delivery & PM', lvl: 'Expert', pct: 95 },
      { name: 'Stakeholder Mgmt', lvl: 'Expert', pct: 92 },
      { name: 'Financial Forecasting', lvl: 'Expert', pct: 90 },
      { name: 'Agile / Scrum', lvl: 'Advanced', pct: 85 },
      { name: 'Risk Management', lvl: 'Advanced', pct: 82 },
      { name: 'Power BI / DAX', lvl: 'Advanced', pct: 88 },
      { name: 'SQL / Alteryx', lvl: 'Proficient', pct: 75 },
    ],
    languages: [
      { lang: 'Polish', lvl: 'Native' },
      { lang: 'English', lvl: 'Fluent' },
      { lang: 'Portuguese', lvl: 'CELPE-BRAS' },
      { lang: 'Italian', lvl: 'Basic' },
    ],
    stats: [
      { num: '8+', lbl: 'Years<br>Experience' },
      { num: '$15M', lbl: 'People-Cost<br>Pool Allocated' },
      { num: '~40', lbl: 'IT Projects<br>Cost-Allocated' },
      { num: '15', lbl: 'Team<br>Members Led' },
    ],
    jobs: [
      {
        title: 'Senior Finance Analyst',
        meta: 'Trustwave Sp. z o.o. — Delivery Coordination · Performance Mgmt · Warsaw / Remote',
        period: 'Oct 2024 — Present',
        bullets: [
          'Analyse IT financial processes and deliver dashboards: <b>high-level views for CFO &amp; Financial Directors</b>, detailed cuts for department heads.',
          'Build <b>Power BI</b> dashboards and <b>Alteryx</b> ETL pipelines used in monthly financial reviews.',
          'Coordinate cross-functional collaboration between finance, IT and business stakeholders on standardised reporting templates.',
        ],
        impact: 'Re-engineered FP&amp;A and Performance Management end-to-end: diagnosed monthly-reporting bottlenecks, designed and implemented improvements, produced before/after documentation and trained the team across the full toolset (Excel, Power Query, Alteryx, SQL, Power BI).',
      },
      {
        title: 'Project Finance Analyst',
        meta: 'Alten Polska Sp. z o.o. — HSBC engagement · Cracow / Remote',
        period: 'Jul 2022 — Apr 2024',
        bullets: [
          'Coordinated a team of <b>5 analysts</b>; owned people-cost allocation across <b>~40 IT projects, $15M annual budget</b> — headcount planning, resource forecasting, spend monitoring, variance analysis.',
          'Operated in Agile / Scrum with global teams: sprint planning, backlog grooming, daily stand-ups; ran day-to-day work in <b>Jira and Confluence</b> with full RAID logs.',
          'Built Power BI dashboards and Excel models for budget &amp; forecast; aligned reporting standards with Central Finance Controlling and ran stakeholder training.',
        ],
        impact: "Audited each analyst's workflow, diagnosed inefficiencies, rolled out streamlined processes and produced new documentation; trained the team to operate the upgraded toolset (Excel, Power Query) confidently.",
      },
      {
        title: 'Smartsheet Developer',
        meta: 'Zimmer Biomet Polska — Project Coordinator · Global Business Support · Warsaw',
        period: 'Jun 2021 — Jun 2022',
        bullets: [
          'Led delivery of the <b>Global Transition Process</b> across <b>14 departments</b>: scope, timeline, milestones and stakeholder progress reporting.',
          'Organised and facilitated training workshops for global end-users and Smartsheet developers.',
          'Built a <b>Continuous Improvement</b> tracker in PowerApps to capture new solutions and process improvements.',
        ],
        impact: 'Designed and rolled out a new generation of dashboards reporting Global Transition migration progress for 14 departments, owned change communication around each release and trained both maintainers and end-users.',
      },
      {
        title: 'BI Developer &amp; Project Manager',
        meta: 'ISS Facility Services — Project Management · Warsaw',
        period: 'Sep 2018 — May 2021',
        bullets: [
          'Managed cross-functional delivery teams of <b>4–15</b> people with full <b>P&amp;L responsibility</b> for an assigned customer account: revenue tracking, cost control, margin optimisation.',
          'End-to-end project execution: scope, timeline, budget, financial forecasting, monthly settlements and invoice reconciliation.',
          'Conducted internal audits and risk reviews; delivered executive Board reports in Power BI translating data into business recommendations.',
        ],
        impact: 'Led the project to streamline invoice flow for a global banking client: designed, implemented and documented the new process, then trained internal team and client stakeholders for adoption (Power Automate, SharePoint, Excel). In parallel led the <b>Novatorium</b> initiative, an internal workflow for capturing new ideas across customer accounts (Power Automate, PowerApps, Power BI, SharePoint).',
      },
      {
        title: 'Junior Project Manager',
        meta: 'Jeronimo Martins (Lisbon &amp; Warsaw) · Robert Bosch (Warsaw) — Management Trainee',
        period: 'Feb 2016 — Aug 2018',
        bullets: [
          'International project experience across <b>Portugal &amp; Poland</b>: Employer Branding, Store Excellence, Logistics.',
          'Stakeholder coordination and workshop facilitation in matrix organizations.',
        ],
        impact: '',
      },
    ],
    education: [
      { yr: '2020 — 2021', deg: 'Postgraduate · Quality Manager', inst: 'SGH Warsaw School of Economics<br><em>Lean Management · Six Sigma · Kaizen</em>' },
      { yr: '2012 — 2017', deg: 'MA · Clinical Psychology', inst: 'SWPS University of Social Sciences and Humanities' },
      { yr: '2012 — 2016', deg: 'Eng. · Management &amp; Production Engineering', inst: 'Warsaw University of Technology' },
      { yr: '2009 — 2010', deg: 'Rotary Youth Exchange · Brazil', inst: 'ANGLO High School, Penápolis' },
    ],
    certs: [
      { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
      { name: 'Six Sigma Quality Management', org: 'SGH', yr: '2020' },
      { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
      { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
      { name: 'Project Management', org: 'INCODO', yr: '2016' },
    ],
    method: ['PRINCE2 Foundation', 'Agile / Scrum delivery', 'Risk &amp; RAID management', 'Change &amp; adoption', 'Lean / Six Sigma'],
    toolbox: {
      delivery: { title: 'Project Mgmt', items: 'Jira · Confluence · Smartsheet · MS Project · SharePoint' },
      financial: { title: 'Finance &amp; P&amp;L', items: 'IT P&amp;L · Cost allocation · Forecasting · Invoice reconciliation' },
      bi: { title: 'BI &amp; Reporting', items: 'Power BI · DAX · Power Query · Excel Power Pivot · SQL · Alteryx · Cognos' },
      automation: { title: 'Power Platform', items: 'Power Automate · PowerApps · SharePoint workflows' },
      ai: { title: 'AI &amp; Modern', items: 'Claude Code · Prompt Engineering' },
      frameworks: { title: 'Frameworks', items: 'PRINCE2 · Agile / Scrum · Lean · Six Sigma · Kaizen' },
    },
    gdpr: GDPR_EN,
    nameContinued: 'Adriana Guściora — <em>continued</em>',
  },
  pl: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    location: 'Zdalnie · Polska',
    sectionLabels: {
      profile: 'Profil',
      experience: 'Doświadczenie zawodowe',
      continued: 'cd.',
      toolbox: 'Narzędzia',
      contact: 'Kontakt',
      coreSkills: 'Kluczowe umiejętności',
      languages: 'Języki',
      education: 'Wykształcenie',
      certifications: 'Certyfikaty',
      method: 'Metoda',
    },
    sidebarSkills: [
      { name: 'Realizacja i PM', lvl: 'Ekspert', pct: 95 },
      { name: 'Interesariusze', lvl: 'Ekspert', pct: 92 },
      { name: 'Prognozowanie fin.', lvl: 'Ekspert', pct: 90 },
      { name: 'Agile / Scrum', lvl: 'Zaawansowany', pct: 85 },
      { name: 'Zarz. ryzykiem', lvl: 'Zaawansowany', pct: 82 },
      { name: 'Power BI / DAX', lvl: 'Zaawansowany', pct: 88 },
      { name: 'SQL / Alteryx', lvl: 'Biegły', pct: 75 },
    ],
    languages: [
      { lang: 'Polski', lvl: 'Ojczysty' },
      { lang: 'Angielski', lvl: 'Biegły' },
      { lang: 'Portugalski', lvl: 'CELPE-BRAS' },
      { lang: 'Włoski', lvl: 'Podstawowy' },
    ],
    stats: [
      { num: '8+', lbl: 'Lat<br>Doświadczenia' },
      { num: '15M$', lbl: 'Pula Kosztów<br>Osobowych' },
      { num: '~40', lbl: 'Projektów IT<br>Alokowanych' },
      { num: '15', lbl: 'Członków<br>Zespołu' },
    ],
    jobs: [
      {
        title: 'Starszy Analityk Finansowy',
        meta: 'Trustwave Sp. z o.o. — Koordynacja realizacji · Performance Mgmt · Warszawa / Zdalnie',
        period: 'paź 2024 — obecnie',
        bullets: [
          'Analiza procesów finansowych w obszarze IT i przygotowywanie dashboardów: <b>wysokopoziomowych dla CFO i dyrektorów finansowych</b> oraz szczegółowych dla kierowników działowych.',
          'Budowa dashboardów <b>Power BI</b> i przepływów ETL w <b>Alteryx</b> wykorzystywanych w miesięcznych przeglądach finansowych.',
          'Koordynacja współpracy międzyfunkcyjnej (finanse, IT, biznes) nad standaryzowanymi szablonami raportowymi.',
        ],
        impact: 'Analizowałam procesy FP&amp;A i Performance Management: diagnozowałam wąskie gardła w raportowaniu miesięcznym, projektowałam i wdrażałam usprawnienia, tworzyłam dokumentację przed i po zmianach oraz szkoliłam zespół z pełnego zestawu narzędzi (Excel, Power Query, Alteryx, SQL, Power BI).',
      },
      {
        title: 'Analityk Finansowy Projektów',
        meta: 'Alten Polska Sp. z o.o. — projekt HSBC · Kraków / Zdalnie',
        period: 'lip 2022 — kwi 2024',
        bullets: [
          'Koordynacja zespołu <b>5 analityków</b>; odpowiedzialność za alokację kosztów osobowych dla <b>~40 projektów IT z budżetem rocznym 15M$</b>: planowanie obsady, prognozowanie zasobów, monitoring wydatków, analiza odchyleń.',
          'Praca w środowisku Agile / Scrum z globalnymi zespołami: planowanie sprintu, doprecyzowanie backlogu, daily stand-up; codzienna praca w <b>Jira i Confluence</b> z pełnymi logami RAID.',
          'Budowa dashboardów Power BI i raportów Excel: budżet, forecast; harmonizacja standardów raportowania z Central Finance Controlling, prowadzenie warsztatów szkoleniowych.',
        ],
        impact: 'Analizowałam procesy finansowe każdego specjalisty w koordynowanym zespole, diagnozowałam nieefektywności, wdrażałam usprawnione procesy, tworzyłam dokumentację oraz szkoliłam zespół z nowego zestawu narzędzi (Excel, Power Query).',
      },
      {
        title: 'Deweloper Smartsheet',
        meta: 'Zimmer Biomet Polska — Koordynator Projektów · Global Business Support · Warszawa',
        period: 'cze 2021 — cze 2022',
        bullets: [
          'Prowadzenie realizacji <b>procesu Global Transition</b> dla <b>14 departamentów</b>: planowanie zakresu i harmonogramu, śledzenie kamieni milowych, raportowanie postępów do interesariuszy.',
          'Organizacja i prowadzenie warsztatów szkoleniowych dla globalnych użytkowników i deweloperów Smartsheet.',
          'Budowa aplikacji <b>Continuous Improvement</b> w PowerApps do gromadzenia nowych rozwiązań i usprawnień procesowych.',
        ],
        impact: 'Tworzyłam nową generację dashboardów raportujących postęp migracji Global Transition dla 14 departamentów, odpowiadałam za komunikację każdej zmiany oraz szkoliłam deweloperów (utrzymanie i rozwój) i użytkowników końcowych (Smartsheet).',
      },
      {
        title: 'Analityk BI i Kierownik Projektu',
        meta: 'ISS Facility Services — Project Management · Warszawa',
        period: 'wrz 2018 — maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi <b>4–15 osób</b> z pełną odpowiedzialnością za <b>rachunek zysków i strat</b> przypisanego klienta: śledzenie przychodów, kontrola kosztów, optymalizacja marży.',
          'Kompleksowa realizacja projektów: zakres, harmonogram, budżet, prognozowanie finansowe, miesięczne rozliczenia i uzgadnianie faktur.',
          'Audyty wewnętrzne i przeglądy ryzyk; raporty dla Zarządu w Power BI, tłumaczenie złożonych danych na rekomendacje biznesowe.',
        ],
        impact: 'Prowadziłam projekt usprawnienia obiegu faktur dla globalnego klienta z sektora bankowego: projektowałam, wdrażałam i dokumentowałam nowy proces, szkoliłam zespół wewnętrzny i klienta (Power Automate, SharePoint, Excel). Równolegle prowadziłam projekt <b>Novatorium</b>, obieg pomysłów innowacyjnych i sprawdzonych rozwiązań w polskim oddziale firmy (Power Automate, PowerApps, Power BI, SharePoint).',
      },
      {
        title: 'Młodszy Kierownik Projektu',
        meta: 'Jeronimo Martins (Lizbona i Warszawa) · Robert Bosch (Warszawa) — Management Trainee',
        period: 'lut 2016 — sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie projektowe w <b>Portugalii i Polsce</b>: Employer Branding, Store Excellence, logistyka.',
          'Koordynacja interesariuszy i prowadzenie warsztatów w organizacji macierzowej.',
        ],
        impact: '',
      },
    ],
    education: [
      { yr: '2020 — 2021', deg: 'Studia podyplomowe · Menedżer Jakości', inst: 'Szkoła Główna Handlowa (SGH)<br><em>Lean Management · Six Sigma · Kaizen</em>' },
      { yr: '2012 — 2017', deg: 'Magister · Psychologia Kliniczna', inst: 'Uniwersytet SWPS' },
      { yr: '2012 — 2016', deg: 'Inżynier · Zarządzanie i Inżynieria Produkcji', inst: 'Politechnika Warszawska' },
      { yr: '2009 — 2010', deg: 'Rotary Youth Exchange · Brazylia', inst: 'Liceum ANGLO, Penápolis' },
    ],
    certs: [
      { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
      { name: 'Six Sigma w zarządzaniu jakością', org: 'SGH', yr: '2020' },
      { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
      { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
      { name: 'Project Management', org: 'INCODO', yr: '2016' },
    ],
    method: ['PRINCE2 Foundation', 'Agile / Scrum', 'Zarządzanie ryzykiem i RAID', 'Zmiana i adopcja', 'Lean / Six Sigma'],
    toolbox: {
      delivery: { title: 'Narzędzia PM', items: 'Jira · Confluence · Smartsheet · MS Project · SharePoint' },
      financial: { title: 'Finanse i P&amp;L', items: 'Rachunek zysków i strat · Alokacja kosztów · Forecast · Rozliczenia faktur' },
      bi: { title: 'BI i Raportowanie', items: 'Power BI · DAX · Power Query · Excel Power Pivot · SQL · Alteryx · Cognos' },
      automation: { title: 'Power Platform', items: 'Power Automate · PowerApps · SharePoint workflows' },
      ai: { title: 'AI i Nowoczesne', items: 'Claude Code · Prompt Engineering' },
      frameworks: { title: 'Metodyki', items: 'PRINCE2 · Agile / Scrum · Lean · Six Sigma · Kaizen' },
    },
    gdpr: GDPR_PL,
    nameContinued: 'Adriana Guściora — <em>cd.</em>',
  },
};

// ============================================================
// PROFILE: Data Analyst (EN + PL) — same career history, analyst-leaning framing
// ============================================================
const analystProfile = {
  en: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    location: 'Remote · Poland',
    sectionLabels: dmProfile.en.sectionLabels,
    sidebarSkills: [
      { name: 'Power BI / DAX', lvl: 'Expert', pct: 95 },
      { name: 'SQL / Alteryx', lvl: 'Advanced', pct: 88 },
      { name: 'Excel · Power Query', lvl: 'Expert', pct: 95 },
      { name: 'Data Modeling', lvl: 'Advanced', pct: 85 },
      { name: 'Financial Analytics', lvl: 'Advanced', pct: 88 },
      { name: 'Reporting Automation', lvl: 'Advanced', pct: 85 },
      { name: 'Stakeholder Comms', lvl: 'Expert', pct: 90 },
    ],
    languages: dmProfile.en.languages,
    stats: [
      { num: '8+', lbl: 'Years<br>Experience' },
      { num: '$15M', lbl: 'People-Cost<br>Pool Allocated' },
      { num: '~40', lbl: 'IT Projects<br>Cost-Allocated' },
      { num: '15', lbl: 'Team<br>Members Led' },
    ],
    jobs: [
      {
        title: 'Senior Finance Analyst',
        meta: 'Trustwave Sp. z o.o. — Performance Management · Warsaw / Remote',
        period: 'Oct 2024 — Present',
        bullets: [
          'Design financial dashboards in Power BI for <b>CFO and Financial Directors</b>.',
          'Translate complex financial data into actionable business recommendations for stakeholders.',
          'Automate financial reporting with <b>Power Query and Alteryx</b>; build SQL analytics and ETL pipelines.',
        ],
        impact: 'Owned the analytical redesign of FP&amp;A and Performance Management reporting: built Power BI dashboards on consolidated multi-source data (Excel, Power Query, Alteryx, SQL), delivered training to enable self-service analytics for the finance team.',
      },
      {
        title: 'Finance Analyst at HSBC',
        meta: 'Alten Polska Sp. z o.o. — Cracow / Remote',
        period: 'Jul 2022 — Apr 2024',
        bullets: [
          'Coordinated a team of <b>5 analysts</b> at a global bank (HSBC); managed financial processes for <b>~40 IT projects, $15M scope</b>: budgeting, forecasting, resource allocation.',
          'Designed BI reports and dashboards in <b>SQL, Power Query, Power BI, Cognos</b>; presented findings and recommended optimisation actions.',
          'Automated multi-source reporting (Clarity, GPDM, Cognos) with Power Query; trained teams on analytical tools.',
        ],
        impact: 'Mapped financial processes across the analyst team, diagnosed inefficiencies and built upgraded reporting workflows. Documentation and training enabled the team to self-serve analytics confidently (Excel, Power Query).',
      },
      {
        title: 'Smartsheet Developer',
        meta: 'Zimmer Biomet Polska — Global Business Support · Warsaw',
        period: 'Jun 2021 — Jun 2022',
        bullets: [
          'Reporting for the <b>Global Transition Process</b> across <b>14 departments</b>.',
          'Tool training for global end-users and Smartsheet developers.',
          'Built a <b>Continuous Improvement</b> tracker in PowerApps to capture new solutions and process improvements.',
        ],
        impact: 'Designed a new generation of dashboards reporting migration progress for 14 departments, trained both developers and end-users, owned iterative improvements and change communication (Smartsheet).',
      },
      {
        title: 'BI Developer &amp; Analyst',
        meta: 'ISS Facility Services — Project Management · Warsaw',
        period: 'Sep 2018 — May 2021',
        bullets: [
          'Managed cross-functional teams of <b>4–15</b> people; conducted internal audits and risk reviews.',
          'Built executive Board dashboards in <b>Power BI and SharePoint</b>; end-to-end process automation with Power Automate.',
          'Budgeting, forecasting and non-financial analysis for an assigned customer account; led the <b>Novatorium</b> innovation rollout (Power Platform suite).',
        ],
        impact: 'Owned the analytical redesign of invoice flow for a global banking client: streamlined the process, built dashboards and trained both internal and client teams for adoption (Power Automate, SharePoint, Excel).',
      },
      {
        title: 'Junior Project Manager',
        meta: 'Jeronimo Martins (Lisbon &amp; Warsaw) · Robert Bosch (Warsaw) — Management Trainee',
        period: 'Feb 2016 — Aug 2018',
        bullets: [
          'International project experience across <b>Portugal &amp; Poland</b>: Employer Branding, Store Excellence, Logistics.',
        ],
        impact: '',
      },
    ],
    education: dmProfile.en.education,
    certs: [
      { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
      { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
      { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
      { name: 'Six Sigma Quality Management', org: 'SGH', yr: '2020' },
      { name: 'Project Management', org: 'INCODO', yr: '2016' },
    ],
    method: ['Self-service analytics', 'Multi-source consolidation', 'Pipeline design (ETL)', 'Stakeholder reporting', 'Lean / Six Sigma'],
    toolbox: {
      bi: { title: 'BI &amp; Analytics', items: 'Power BI · DAX (advanced) · Power Query (M) · Data modeling · Cohort analysis' },
      data: { title: 'Data &amp; ETL', items: 'SQL · Alteryx · Cognos · Multi-source consolidation · Pipeline design' },
      financial: { title: 'Financial Analytics', items: 'P&amp;L analysis · Budgeting · Forecasting · Variance analysis · Spend monitoring' },
      automation: { title: 'Power Platform', items: 'Power Automate · PowerApps · SharePoint workflows' },
      ai: { title: 'AI &amp; Modern', items: 'Claude Code · Prompt Engineering' },
      tools: { title: 'Tools', items: 'Jira · Confluence · Smartsheet · SharePoint · Excel' },
    },
    gdpr: GDPR_EN,
    nameContinued: 'Adriana Guściora — <em>continued</em>',
  },
  pl: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    location: 'Zdalnie · Polska',
    sectionLabels: dmProfile.pl.sectionLabels,
    sidebarSkills: [
      { name: 'Power BI / DAX', lvl: 'Ekspert', pct: 95 },
      { name: 'SQL / Alteryx', lvl: 'Zaawansowany', pct: 88 },
      { name: 'Excel · Power Query', lvl: 'Ekspert', pct: 95 },
      { name: 'Modelowanie danych', lvl: 'Zaawansowany', pct: 85 },
      { name: 'Analityka finansowa', lvl: 'Zaawansowany', pct: 88 },
      { name: 'Automatyzacja raportów', lvl: 'Zaawansowany', pct: 85 },
      { name: 'Komunikacja z biznesem', lvl: 'Ekspert', pct: 90 },
    ],
    languages: dmProfile.pl.languages,
    stats: [
      { num: '8+', lbl: 'Lat<br>Doświadczenia' },
      { num: '15M$', lbl: 'Pula Kosztów<br>Osobowych' },
      { num: '~40', lbl: 'Projektów IT<br>Alokowanych' },
      { num: '15', lbl: 'Członków<br>Zespołu' },
    ],
    jobs: [
      {
        title: 'Starszy Analityk Finansowy',
        meta: 'Trustwave Sp. z o.o. — Performance Management · Warszawa / Zdalnie',
        period: 'paź 2024 — obecnie',
        bullets: [
          'Projektowanie dashboardów finansowych w Power BI dla <b>CFO i dyrektorów finansowych</b>.',
          'Tłumaczenie złożonych danych finansowych na rekomendacje biznesowe dla interesariuszy.',
          'Automatyzacja raportowania w <b>Power Query i Alteryx</b>; analizy SQL i utrzymanie pipeline\'ów ETL.',
        ],
        impact: 'Odpowiadałam za analityczne przeprojektowanie raportowania FP&amp;A i Performance Management: budowałam dashboardy Power BI w oparciu o dane wieloźródłowe (Excel, Power Query, Alteryx, SQL), szkoliłam zespół finansowy z self-service analityki.',
      },
      {
        title: 'Analityk Finansowy w HSBC',
        meta: 'Alten Polska Sp. z o.o. — Kraków / Zdalnie',
        period: 'lip 2022 — kwi 2024',
        bullets: [
          'Koordynacja zespołu <b>5 analityków</b> w globalnym banku (HSBC); zarządzanie procesami finansowymi dla <b>~40 projektów IT z budżetem 15M$</b>: budżetowanie, prognozowanie alokacji zasobów.',
          'Projektowanie raportów i dashboardów BI: <b>SQL, Power Query, Power BI, Cognos</b>; prezentacja wyników i rekomendowanie działań optymalizacyjnych.',
          'Automatyzacja raportowania wieloźródłowego (Clarity, GPDM, Cognos) z Power Query; szkolenia zespołów z narzędzi analitycznych.',
        ],
        impact: 'Mapowałam procesy finansowe całego zespołu analityków, diagnozowałam nieefektywności i budowałam ulepszone workflow raportowe. Dokumentacja i szkolenia pozwoliły zespołowi swobodnie korzystać z analityki self-service (Excel, Power Query).',
      },
      {
        title: 'Deweloper Smartsheet',
        meta: 'Zimmer Biomet Polska — Global Business Support · Warszawa',
        period: 'cze 2021 — cze 2022',
        bullets: [
          'Raportowanie w <b>procesie Global Transition</b> dla <b>14 departamentów</b>.',
          'Szkolenia narzędziowe dla globalnych użytkowników i deweloperów Smartsheet.',
          'Stworzenie aplikacji <b>Continuous Improvement</b> w PowerApps do gromadzenia nowych rozwiązań i usprawnień procesowych.',
        ],
        impact: 'Projektowałam nową generację dashboardów raportujących postęp migracji dla 14 departamentów, szkoliłam deweloperów i użytkowników końcowych, prowadziłam iteracyjny rozwój oraz komunikację zmiany (Smartsheet).',
      },
      {
        title: 'Programista BI i Analityk',
        meta: 'ISS Facility Services — Project Management · Warszawa',
        period: 'wrz 2018 — maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi <b>4–15 osób</b>; audyty wewnętrzne i przeglądy ryzyk.',
          'Budowa raportów dla Zarządu w <b>Power BI i SharePoint</b>; kompleksowa automatyzacja procesów (Power Automate).',
          'Budżetowanie, prognozowanie i analizy niefinansowe dla przypisanego klienta; projekt <b>Novatorium</b>: wdrożenie innowacji w Power Platform.',
        ],
        impact: 'Odpowiadałam za analityczne przeprojektowanie obiegu faktur dla globalnego klienta z sektora bankowego: usprawnienie procesu, budowa dashboardów oraz szkolenia zespołu wewnętrznego i klienta (Power Automate, SharePoint, Excel).',
      },
      {
        title: 'Młodszy Kierownik Projektu',
        meta: 'Jeronimo Martins (Lizbona i Warszawa) · Robert Bosch (Warszawa) — Management Trainee',
        period: 'lut 2016 — sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie projektowe w <b>Portugalii i Polsce</b>: Employer Branding, Store Excellence, logistyka.',
        ],
        impact: '',
      },
    ],
    education: dmProfile.pl.education,
    certs: [
      { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
      { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
      { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
      { name: 'Six Sigma w zarządzaniu jakością', org: 'SGH', yr: '2020' },
      { name: 'Project Management', org: 'INCODO', yr: '2016' },
    ],
    method: ['Self-service analityka', 'Konsolidacja wieloźródłowa', 'Projektowanie pipeline\'ów ETL', 'Raportowanie dla biznesu', 'Lean / Six Sigma'],
    toolbox: {
      bi: { title: 'BI i Analityka', items: 'Power BI · DAX (zaawansowany) · Power Query (M) · Modelowanie danych · Analiza kohortowa' },
      data: { title: 'Dane i ETL', items: 'SQL · Alteryx · Cognos · Konsolidacja wieloźródłowa · Pipeline\'y' },
      financial: { title: 'Analityka finansowa', items: 'Analiza P&amp;L · Budżetowanie · Prognozowanie · Analiza odchyleń · Monitoring wydatków' },
      automation: { title: 'Power Platform', items: 'Power Automate · PowerApps · SharePoint workflows' },
      ai: { title: 'AI i Nowoczesne', items: 'Claude Code · Prompt Engineering' },
      tools: { title: 'Narzędzia', items: 'Jira · Confluence · Smartsheet · SharePoint · Excel' },
    },
    gdpr: GDPR_PL,
    nameContinued: 'Adriana Guściora — <em>cd.</em>',
  },
};

// ============================================================
// 7 OFFERS
// ============================================================
const offers = [
  {
    fileName: 'AG_Lead_PM_DWH_BI_EN.pdf',
    profile: 'dm', lang: 'en',
    title: 'Lead Project Manager · DWH &amp; BI Delivery',
    summary: 'Proven Project / Lead PM with <strong>8+ years</strong> leading cross-functional teams (4–15) on IT delivery in financial services and FinTech. End-to-end ownership of project goals, scope, timelines, priorities and risk mitigation; daily collaboration in Jira, Confluence and Git-tracked environments. Hands-on Agile / Scrum (sprint planning, backlog grooming, release planning) combined with PRINCE2 governance and SDLC awareness. Skilled at facilitating C-level discussions, balancing multiple workstreams and continuously improving processes and team practices in DWH / BI delivery.',
    skillOrder: ['delivery', 'bi', 'financial', 'automation', 'ai', 'frameworks'],
  },
  {
    fileName: 'AG_Executive_Data_Analyst_FinTech_EN.pdf',
    profile: 'analyst', lang: 'en',
    title: 'Executive Data Analyst · Financial Services &amp; FinTech',
    summary: 'Senior data analyst with <strong>8+ years</strong> in financial services and FinTech (HSBC, Trustwave). Owning the end-to-end analytical lifecycle: revenue, cost structures, margins and unit economics; budgeting, forecasting and scenario modelling; executive dashboards (Power BI, Cognos) and structured presentations for CFO and leadership stakeholders. Strong SQL and Power Query, multi-source data consolidation (Clarity, GPDM, Cognos), reporting automation and translation of complex transactional data into clear business narratives.',
    skillOrder: ['bi', 'data', 'financial', 'automation', 'ai', 'tools'],
  },
  {
    fileName: 'AG_Process_Business_PM_EN.pdf',
    profile: 'dm', lang: 'en',
    title: 'Process &amp; Business Project Manager',
    summary: 'Business-focused Project Manager with <strong>8+ years</strong> in process design, modelling, analysis and optimisation across global initiatives in financial services and FinTech. Skilled link between strategic partners, regional PMs, internal stakeholders and change management teams. Demonstrated stakeholder management with C-level executives, conflict resolution and assertive decision-making. PRINCE2 + Six Sigma + Postgraduate Quality Management foundation paired with hands-on experience of process improvement, training delivery and adoption. Tool fluency: MS Project, SharePoint, Teams, Jira, Confluence. Business-fluent English (C1).',
    skillOrder: ['delivery', 'financial', 'automation', 'ai', 'bi', 'frameworks'],
  },
  {
    fileName: 'AG_Process_Automation_Lead_PL.pdf',
    profile: 'dm', lang: 'pl',
    title: 'Lider Zespołu Automatyzacji · Power Platform &amp; AI',
    summary: 'Liderka realizacji z <strong>8+ latami</strong> doświadczenia w prowadzeniu zespołów i projektów automatyzacji procesów biznesowych. Praktyczna znajomość Power Automate, Power BI, SQL i PowerApps wykorzystana m.in. w projekcie Novatorium (ISS) i Continuous Improvement (Zimmer Biomet). Mentoruję analityków, prowadzę warsztaty z całego toolchainu (Excel, Power Query, Alteryx, SQL, Power BI), wspieram zespoły w identyfikacji obszarów do usprawnień i wdrażaniu rozwiązań technicznych. Inżynier Zarządzania i Inżynierii Produkcji (PW) + Studia Podyplomowe Menedżer Jakości (SGH) z Lean / Six Sigma / Kaizen jako fundament procesowy.',
    skillOrder: ['automation', 'ai', 'bi', 'delivery', 'financial', 'frameworks'],
  },
  {
    fileName: 'AG_Power_Platform_Consultant_PL.pdf',
    profile: 'dm', lang: 'pl',
    title: 'Konsultant Power Platform · M365',
    summary: 'Konsultantka z <strong>8+ latami</strong> doświadczenia we wdrażaniu narzędzi Microsoft 365 (SharePoint, Teams, Outlook) i Power Platform (Power Apps, Power Automate, Power BI) w dużych organizacjach (HSBC, Bosch, Jeronimo Martins, Zimmer Biomet, ISS). Bezpośrednia praca z użytkownikami biznesowymi: kierownikami, inżynierami i kadrą zarządzającą; budowa prostych aplikacji i automatyzacji w Low Code, raportów i dashboardów w Power BI. Wysokie kompetencje miękkie wynikające z wykształcenia w psychologii klinicznej i mediacji. SharePoint na poziomie administracyjnym (zarządzanie stronami, uprawnieniami, zespołami).',
    skillOrder: ['automation', 'ai', 'bi', 'delivery', 'financial', 'frameworks'],
  },
  {
    fileName: 'AG_PowerBI_Developer_PL.pdf',
    profile: 'analyst', lang: 'pl',
    title: 'Power BI Developer · DAX &amp; Semantic Models',
    summary: 'Developer Power BI z <strong>8+ latami</strong> doświadczenia w projektowaniu i rozwoju dashboardów oraz raportów dla kadry zarządzającej (HSBC, Trustwave, ISS). Praktyczna znajomość modelowania danych (schemat gwiazdy, miary, relacje), DAX, Power Query (M) i pracy z hurtowniami danych. Przekładam wymagania biznesowe na czytelne metryki i KPI. Optymalizacja raportów pod kątem wydajności i UX, walidacja wyników, dbałość o dokładność danych. SQL Advanced (LabMasters 2025), Business Analytics w Power BI (LabMasters 2022).',
    skillOrder: ['bi', 'data', 'financial', 'automation', 'ai', 'tools'],
  },
  {
    fileName: 'AG_PowerBI_Solutions_Specialist_EN.pdf',
    profile: 'analyst', lang: 'en',
    title: 'Power BI Solutions Specialist · Senior Individual Contributor',
    summary: 'Senior Power BI practitioner with <strong>8+ years</strong> in BI requirements gathering, solution design, data modelling and quality assurance for executive stakeholders (HSBC, Trustwave, ISS, Zimmer Biomet). Hands-on with advanced DAX, complex data models, Power Query (M) and the Microsoft data stack. Strong communicator translating technical concepts for non-technical audiences; experience mentoring analysts and running training workshops. Comfortable owning multiple concurrent projects with high attention to detail. Practical exposure to Power Automate, AI assistants (Claude Code) and Power Platform innovation rollouts (Novatorium, Continuous Improvement).',
    skillOrder: ['bi', 'data', 'automation', 'ai', 'financial', 'tools'],
  },
];

// ============================================================
// SHARED CSS (lifted from generate-cv-delivery-manager-redesign.js)
// ============================================================
const CSS = `
  :root{
    --navy: oklch(0.28 0.06 258);
    --navy-deep: oklch(0.22 0.06 258);
    --navy-soft: oklch(0.42 0.05 258);
    --gold: oklch(0.72 0.12 80);
    --gold-deep: oklch(0.62 0.13 75);
    --gold-soft: oklch(0.92 0.05 85);
    --ink: oklch(0.22 0.02 260);
    --ink-soft: oklch(0.38 0.015 260);
    --ink-mute: oklch(0.55 0.012 260);
    --rule: oklch(0.86 0.01 260);
    --rule-soft: oklch(0.92 0.008 260);
    --paper: oklch(0.992 0.003 85);
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:oklch(0.90 0.01 260);color:var(--ink);font-family:"Inter",-apple-system,Helvetica,sans-serif;}
  body{padding:32px 16px;display:flex;flex-direction:column;align-items:center;gap:24px;}

  .page{
    width: 794px; height: 1123px;
    background: var(--paper); color: var(--ink);
    box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 24px 60px -20px rgba(20,30,60,.18);
    position: relative; overflow: hidden;
    display: grid; grid-template-columns: 250px 1fr;
  }

  .side{ background: var(--navy); color: oklch(0.94 0.01 240); padding: 44px 30px 44px 38px; font-size: 9pt; line-height: 1.5; position: relative; }
  .side::before{ content:""; position:absolute; top:0; left:0; right:0; height: 4px; background: var(--gold); }

  .photo{ width: 150px; height: 150px; border-radius: 50%; background: oklch(0.45 0.04 258); margin: 6px auto 22px auto; border: 3px solid var(--gold); box-shadow: 0 0 0 6px oklch(0.32 0.06 258); position: relative; overflow: hidden; }
  .photo img{ width: 100%; height: 100%; object-fit: cover; display: block; }

  .side h3{ font-family:"Inter", sans-serif; font-weight: 600; font-size: 9.5pt; text-transform: uppercase; letter-spacing: 0.22em; color: var(--gold); margin: 0 0 10px 0; padding-bottom: 8px; border-bottom: 1px solid oklch(0.45 0.05 258); position: relative; }
  .side h3::after{ content:""; position:absolute; left:0; bottom:-1px; width: 28px; height: 1px; background: var(--gold); }
  .side section{ margin-bottom: 22px; }
  .side section:last-child{ margin-bottom:0; }

  .contact-row{ display:grid; grid-template-columns: 14px 1fr; gap: 10px; align-items: start; padding: 5px 0; color: oklch(0.92 0.01 240); font-size: 8.6pt; line-height: 1.45; word-break: break-word; }
  .contact-row a{ color:inherit; text-decoration:none; }
  .contact-row .ico{ color: var(--gold); font-size: 10pt; line-height: 1; margin-top: 1px; }

  .skill{ margin-bottom: 9px; }
  .skill-name{ font-size: 8.8pt; color: oklch(0.94 0.01 240); margin-bottom: 4px; display:flex; justify-content: space-between; font-weight: 400; }
  .skill-name b{ font-weight: 500; }
  .skill-name .lvl{ color: var(--gold); font-size: 7.5pt; letter-spacing: 0.08em; text-transform: uppercase; }
  .bar{ height: 3px; background: oklch(0.40 0.05 258); border-radius: 2px; overflow:hidden; position: relative; }
  .bar > span{ display:block; height: 100%; background: linear-gradient(90deg, var(--gold-deep), var(--gold)); }

  .lang-row{ display:grid; grid-template-columns: 1fr auto; gap: 8px; align-items: baseline; padding: 4px 0; border-bottom: 1px dotted oklch(0.45 0.05 258); font-size: 8.8pt; color: oklch(0.94 0.01 240); }
  .lang-row:last-child{ border-bottom:none; }
  .lang-row .lvl{ color: var(--gold); font-size: 7.4pt; letter-spacing: 0.06em; text-transform: uppercase; }

  .edu-side .edu-item{ margin-bottom: 12px; }
  .edu-side .edu-item:last-child{ margin-bottom:0; }
  .edu-side .yr{ font-size: 7.3pt; letter-spacing: 0.12em; color: var(--gold); text-transform: uppercase; font-weight: 500; margin-bottom: 2px; }
  .edu-side .deg{ font-family:"Cormorant Garamond", serif; font-size: 11pt; font-weight: 500; color: oklch(0.96 0.005 240); line-height: 1.2; margin-bottom: 1px; }
  .edu-side .inst{ font-size: 8.3pt; color: oklch(0.82 0.01 240); line-height: 1.35; }

  .cert-side .item{ font-size: 8.4pt; color: oklch(0.90 0.01 240); line-height: 1.35; margin-bottom: 7px; padding-left: 10px; position: relative; }
  .cert-side .item::before{ content:""; position:absolute; left:0; top: 0.55em; width:4px; height:4px; background: var(--gold); transform: rotate(45deg); }
  .cert-side .item b{ color: oklch(0.96 0.005 240); font-weight:500; }
  .cert-side .item .yr{ color: var(--gold); font-weight:500; font-size: 7.4pt; letter-spacing: 0.06em; margin-left: 4px; }

  .main{ padding: 44px 44px 38px 42px; color: var(--ink); font-size: 9.5pt; line-height: 1.5; overflow: hidden; }

  .name-block{ margin-bottom: 14px; }
  .name{ font-family:"Cormorant Garamond", serif; font-weight: 500; font-size: 38pt; line-height: 1.0; letter-spacing: -0.005em; color: var(--navy-deep); margin: 0; }
  .name .last{ font-style: italic; color: var(--navy); font-weight: 500; }
  .role-line{ display:flex; align-items:center; gap: 12px; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--rule); }
  .role-line::before{ content:""; width: 28px; height: 2px; background: var(--gold); display:block; }
  .role{ font-family:"Inter", sans-serif; font-weight: 500; font-size: 10pt; text-transform: uppercase; letter-spacing: 0.20em; color: var(--navy); }

  .main h2{ font-family:"Inter", sans-serif; font-weight: 600; font-size: 10pt; text-transform: uppercase; letter-spacing: 0.24em; color: var(--navy); margin: 18px 0 10px 0; padding-bottom: 6px; position: relative; display:flex; align-items:center; gap: 10px; }
  .main h2::after{ content:""; flex: 1; height: 1px; background: var(--rule); }
  .main h2 .ico{ width: 16px; height: 16px; display:inline-flex; align-items:center; justify-content:center; color: var(--gold); font-size: 12pt; line-height: 1; }

  .profile{ font-size: 9.4pt; line-height: 1.55; color: var(--ink); margin: 0; }
  .profile strong{ color: var(--navy-deep); font-weight: 600; }

  .job{ margin-bottom: 13px; page-break-inside: avoid; break-inside: avoid; }
  .job:last-child{ margin-bottom: 0; }
  .job-head{ display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 14px; margin-bottom: 4px; }
  .job-title{ font-family:"Cormorant Garamond", serif; font-weight: 600; font-size: 12.5pt; color: var(--navy-deep); line-height: 1.25; letter-spacing: -0.005em; padding-right: 2px; }
  .job-date{ font-family:"Inter", sans-serif; font-size: 7.4pt; letter-spacing: 0.12em; color: var(--gold-deep); white-space: nowrap; text-transform: uppercase; font-weight: 600; }
  .job-meta{ font-size: 8.8pt; color: var(--ink-soft); margin-top: 2px; margin-bottom: 4px; font-style: italic; font-family:"Cormorant Garamond", serif; font-weight: 500; letter-spacing: 0.01em; }
  .job ul{ margin: 3px 0 0 0; padding: 0; list-style: none; }
  .job li{ position: relative; padding-left: 14px; margin-bottom: 2px; color: var(--ink); font-size: 9pt; line-height: 1.45; }
  .job li::before{ content: ""; position: absolute; left: 0; top: 0.55em; width: 5px; height: 5px; border: 1px solid var(--gold); border-radius: 50%; background: transparent; }
  .job li b{ font-weight: 600; color: var(--navy-deep); }

  .impact{ margin-top: 5px; padding: 6px 10px; background: var(--gold-soft); border-left: 2px solid var(--gold); font-size: 8.6pt; line-height: 1.45; color: var(--ink-soft); }
  .impact .tag{ display: inline; font-family:"Inter", sans-serif; font-size: 6.8pt; letter-spacing: 0.20em; text-transform: uppercase; color: var(--gold-deep); margin-right: 4px; font-weight: 700; }

  .pgnum{ position: absolute; bottom: 18px; right: 36px; font-family:"Inter", sans-serif; font-size: 7.5pt; letter-spacing: 0.18em; color: var(--ink-mute); text-transform: uppercase; }
  .pgnum b{ color: var(--navy); font-weight: 600; }

  .gdpr{ margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--rule-soft); font-size: 6.4pt; color: var(--ink-mute); line-height: 1.5; letter-spacing: 0.005em; font-family:"Inter",sans-serif; }

  .page2 .side{ padding-top: 38px; }
  .page2 .main{ padding-top: 38px; }
  .page2-name{ font-family:"Cormorant Garamond", serif; font-style: italic; font-size: 14pt; color: var(--navy); margin: 0 0 4px 0; }
  .page2-tag{ font-size: 7.4pt; letter-spacing: 0.20em; text-transform: uppercase; color: var(--gold-deep); font-weight: 600; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--rule); }

  .tools-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px 14px; margin-top: 4px; }
  .tool-cat h4{ font-family:"Inter", sans-serif; font-weight: 600; font-size: 7.6pt; letter-spacing: 0.16em; text-transform: uppercase; color: var(--navy); margin: 0 0 4px 0; }
  .tool-cat p{ font-size: 8.6pt; color: var(--ink-soft); margin: 0; line-height: 1.45; }

  .stat-row{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 6px; margin-bottom: 8px; }
  .stat{ text-align: center; padding: 10px 6px; background: oklch(0.97 0.008 250); border-top: 2px solid var(--gold); }
  .stat .num{ font-family:"Cormorant Garamond", serif; font-size: 22pt; font-weight: 600; color: var(--navy-deep); line-height: 1; }
  .stat .lbl{ margin-top: 4px; font-size: 7pt; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute); line-height: 1.3; }

  @media print{
    @page{ size: A4; margin: 0; }
    html,body{ background:#fff; padding:0; margin:0; }
    body{ padding:0; gap:0; align-items:flex-start; }
    .page{ box-shadow:none; width: 210mm; height: 297mm; page-break-after: always; break-after: page; }
    .page:last-child{ page-break-after: auto; }
  }
`;

// ============================================================
// HTML BUILDERS
// ============================================================
function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const last = parts.pop();
  return { first: parts.join(' '), last };
}

function renderSidebarSkills(skills) {
  return skills.map(s => `
    <div class="skill">
      <div class="skill-name"><b>${s.name}</b><span class="lvl">${s.lvl}</span></div>
      <div class="bar"><span style="width:${s.pct}%"></span></div>
    </div>`).join('');
}

function renderJobs(jobs) {
  return jobs.map(j => `
    <article class="job">
      <div class="job-head">
        <div class="job-title">${j.title}</div>
        <div class="job-date">${j.period}</div>
      </div>
      <div class="job-meta">${j.meta}</div>
      <ul>${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      ${j.impact ? `<div class="impact"><span class="tag">Impact ·</span>${j.impact}</div>` : ''}
    </article>`).join('');
}

function renderToolbox(toolbox, order) {
  const ordered = order.map(k => toolbox[k]).filter(Boolean);
  const seen = new Set(order);
  const rest = Object.keys(toolbox).filter(k => !seen.has(k)).map(k => toolbox[k]);
  return [...ordered, ...rest].map(c => `
    <div class="tool-cat">
      <h4>${c.title}</h4>
      <p>${c.items}</p>
    </div>`).join('');
}

function buildHTML(data, offer) {
  const { first, last } = splitName(data.name);
  const lbl = data.sectionLabels;
  return `<!doctype html>
<html lang="${offer.lang}">
<head>
<meta charset="utf-8" />
<title>${data.name} — ${offer.title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>

<div class="page page1">
  <aside class="side">
    <div class="photo"><img src="${photoDataUrl}" alt="${data.name}"></div>

    <section>
      <h3>${lbl.contact}</h3>
      <div class="contact-row"><span class="ico">&#9993;</span><a href="mailto:${data.email}">${data.email}</a></div>
      <div class="contact-row"><span class="ico">in</span><a href="https://${data.linkedin}">${data.linkedin}</a></div>
      <div class="contact-row"><span class="ico">&#9678;</span>${data.location}</div>
    </section>

    <section>
      <h3>${lbl.coreSkills}</h3>
      ${renderSidebarSkills(data.sidebarSkills)}
    </section>

    <section>
      <h3>${lbl.languages}</h3>
      ${data.languages.map(l => `<div class="lang-row"><span>${l.lang}</span><span class="lvl">${l.lvl}</span></div>`).join('')}
    </section>
  </aside>

  <main class="main">
    <div class="name-block">
      <h1 class="name">${first} <span class="last">${last}</span></h1>
      <div class="role-line">
        <span class="role">${offer.title}</span>
      </div>
    </div>

    <h2><span class="ico">&#9612;</span>${lbl.profile}</h2>
    <p class="profile">${offer.summary}</p>

    <div class="stat-row">
      ${data.stats.map(s => `<div class="stat"><div class="num">${s.num}</div><div class="lbl">${s.lbl}</div></div>`).join('')}
    </div>

    <h2><span class="ico">&#9612;</span>${lbl.experience}</h2>
    ${renderJobs(data.jobs.slice(0, 2))}
  </main>

  <div class="pgnum"><b>01</b> &nbsp;/&nbsp; 02</div>
</div>


<div class="page page2">
  <aside class="side">

    <section>
      <h3>${first}</h3>
      <div class="contact-row" style="margin-top:-4px"><span class="ico">&#9993;</span><a href="mailto:${data.email}">${data.email}</a></div>
      <div class="contact-row"><span class="ico">in</span><a href="https://${data.linkedin}">${data.linkedin}</a></div>
    </section>

    <section class="edu-side">
      <h3>${lbl.education}</h3>
      ${data.education.map(e => `
        <div class="edu-item">
          <div class="yr">${e.yr}</div>
          <div class="deg">${e.deg}</div>
          <div class="inst">${e.inst}</div>
        </div>`).join('')}
    </section>

    <section class="cert-side">
      <h3>${lbl.certifications}</h3>
      ${data.certs.map(c => `<div class="item"><b>${c.name}</b> · ${c.org}<span class="yr">${c.yr}</span></div>`).join('')}
    </section>

    <section>
      <h3>${lbl.method}</h3>
      ${data.method.map(m => `<div class="contact-row"><span class="ico">&#9670;</span>${m}</div>`).join('')}
    </section>

  </aside>

  <main class="main">
    <div class="page2-name">${data.nameContinued}</div>
    <div class="page2-tag">${offer.title}</div>

    <h2><span class="ico">&#9612;</span>${lbl.experience} <span style="font-family:'Cormorant Garamond',serif;font-style:italic;text-transform:none;letter-spacing:0;color:var(--ink-mute);font-size:9pt;font-weight:400;margin-left:6px">${lbl.continued}</span></h2>

    ${renderJobs(data.jobs.slice(2))}

    <h2><span class="ico">&#9612;</span>${lbl.toolbox}</h2>
    <div class="tools-grid">${renderToolbox(data.toolbox, offer.skillOrder)}</div>

    <p class="gdpr">${data.gdpr}</p>
  </main>

  <div class="pgnum"><b>02</b> &nbsp;/&nbsp; 02</div>
</div>

</body>
</html>`;
}

// ============================================================
// MAIN
// ============================================================
async function generatePDF(browser, offer) {
  const profile = offer.profile === 'analyst' ? analystProfile : dmProfile;
  const data = profile[offer.lang];
  const html = buildHTML(data, offer);

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });

  const pdfPath = path.join(outputDir, offer.fileName);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    preferCSSPageSize: true,
  });
  await page.close();
  console.log(`Generated: ${offer.fileName}`);
}

(async () => {
  const browser = await chromium.launch();
  for (const offer of offers) {
    await generatePDF(browser, offer);
  }
  await browser.close();
  console.log(`Done — ${offers.length} tailored CVs generated.`);
})();

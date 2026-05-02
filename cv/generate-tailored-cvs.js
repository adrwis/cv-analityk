// Tailored CV generator: produces one PDF per job offer.
// Uses two profiles:
//   - "dm" (Delivery Manager) — base content from generate-cv-delivery-manager.js
//   - "analyst" (Data Analyst) — base content tuned for analytical / BI roles
// Each offer overrides title, summary and (optionally) skill ordering.

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const photoPath = path.resolve(__dirname, '..', '..', 'adriana-gusciora-pl', 'zdjecia', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

const GDPR_EN = 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).';

const GDPR_PL = 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).';

// ============================================================
// PROFILE: Delivery Manager
// ============================================================
const dmProfile = {
  en: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    linkedinUrl: 'https://www.linkedin.com/in/adriana-gu',
    location: 'Remote · Poland',
    sections: { experience: 'Work Experience', skills: 'Key Skills', education: 'Education', certifications: 'Certifications', languages: 'Languages' },
    successLabel: 'Success story',
    jobs: [
      {
        role: 'Senior Finance Analyst | Delivery Coordination',
        company: 'Trustwave Sp. z o.o. · Performance Management',
        location: 'Warsaw / Remote',
        period: 'Oct 2024 - present',
        bullets: [
          'Analysing IT financial processes and producing dashboards: high-level for CFO and Financial Directors, and detailed views for department heads',
          'Building Power BI dashboards and Alteryx ETL pipelines used in monthly financial reviews',
          'Coordinating cross-functional collaboration between finance, IT and business stakeholders on standardized reporting templates',
        ],
        successStory: 'Analysed FP&A and Performance Management processes for the finance team: diagnosed bottlenecks in monthly reporting, designed and implemented improvements, produced before/after process documentation and delivered hands-on training across the full toolset (Excel, Power Query, Alteryx, SQL, Power BI).',
      },
      {
        role: 'Project Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o.',
        location: 'Cracow / Remote',
        period: 'Jul 2022 - Apr 2024',
        bullets: [
          'Coordinated a team of 5 analysts and owned people cost allocation for ~40 IT projects with $15M annual budget: headcount planning, resource cost forecasting, spend monitoring, variance analysis',
          'Worked in Agile/Scrum environment with global teams: sprint planning, backlog grooming, daily stand-ups',
          'Day-to-day collaboration in Jira and Confluence: tracking project tasks, dependencies and RAID logs (risks, assumptions, issues, dependencies)',
          'Built Power BI dashboards and Excel reports: budget, forecast',
          'Aligned reporting standards with Central Finance Controlling, ran training workshops for stakeholders',
        ],
        successStory: 'Analysed financial processes of every analyst in the coordinated team, diagnosed inefficiencies, proposed and implemented streamlined workflows, produced new process documentation and trained the team to confidently operate the upgraded toolset (Excel, Power Query).',
      },
      {
        role: 'Smartsheet Developer | Project Coordinator',
        company: 'Zimmer Biomet Polska · Global Business Support',
        location: 'Warsaw',
        period: 'Jun 2021 - Jun 2022',
        bullets: [
          'Led delivery of Global Transition Process across 14 departments: scope and timeline planning, milestone tracking, stakeholder progress reporting',
          'Organized and facilitated training workshops for global end users and Smartsheet developers',
          'Built a Continuous Improvement tracking application using PowerApps to standardize process change management',
        ],
        successStory: 'Designed and rolled out a new generation of dashboards reporting Global Transition migration progress for 14 departments, trained Smartsheet developers and end users, drove iterative dashboard improvements and owned change communication around each release (Smartsheet).',
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services · Project Management',
        location: 'Warsaw',
        period: 'Sep 2018 - May 2021',
        bullets: [
          'Managed cross-functional delivery teams (4-15 people) and held P&L responsibility for an assigned customer account: revenue tracking, cost control, margin optimization',
          'Comprehensive end-to-end project execution for the assigned client: scope, timeline, budget, financial forecasting, monthly settlements, invoice reconciliation',
          'Conducted internal audits and risk reviews across active engagements',
          'Delivered executive Board reports with Power BI, translating complex data into business recommendations',
        ],
        successStory: 'Owned the project to streamline invoice flow for a global banking client: designed and proposed the new process, implemented it end-to-end, produced documentation and trained both internal team and client stakeholders (Power Automate, SharePoint, Excel). In parallel led the Novatorium initiative: rollout of an internal workflow for capturing new ideas across customer accounts in the Polish branch (Power Automate, PowerApps, Power BI, SharePoint, Excel).',
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        location: '',
        period: 'Feb 2016 - Aug 2018',
        bullets: [
          'International project experience (Portugal & Poland): Employer Branding, Store Excellence, Logistics',
          'Stakeholder coordination and workshop facilitation in matrix organizational setups',
        ],
      },
    ],
    skillGroups: {
      delivery: { name: 'Delivery & PM', items: ['PRINCE2 Foundation', 'Agile / Scrum', 'Risk management', 'Change & adoption management'] },
      tools: { name: 'PM Tools', items: ['Jira', 'Confluence', 'Smartsheet', 'SharePoint', 'Power Automate', 'MS Project'] },
      financial: { name: 'Financial & Commercial', items: ['IT P&L', 'Budget up to $15M', 'Cost estimation', 'Spend monitoring', 'Financial forecasting', 'Margin optimization', 'Invoice reconciliation'] },
      bi: { name: 'BI & Reporting', items: ['Power BI', 'DAX', 'Power Query', 'Excel (Power Pivot)', 'SQL', 'Alteryx', 'Cognos'] },
      automation: { name: 'AI & Automation', items: ['Power Automate', 'PowerApps', 'Claude Code', 'Prompt Engineering'] },
    },
    education: [
      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'PRINCE2 Foundation, AXELOS, 2020',
      'Project Management, INCODO, 2016',
      'Six Sigma Quality Management, SGH, 2020',
      'SQL Advanced, LabMasters, 2025',
      'Business Analytics in Power BI, LabMasters, 2022',
    ],
    languages: [
      { lang: 'Polish', level: 'Native' },
      { lang: 'English', level: 'C1 fluent' },
      { lang: 'Portuguese', level: 'CELPE-Bras' },
      { lang: 'Italian', level: 'A2 basic' },
    ],
    gdpr: GDPR_EN,
  },
  pl: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    linkedinUrl: 'https://www.linkedin.com/in/adriana-gu',
    location: 'Zdalnie · Polska',
    sections: { experience: 'Doświadczenie zawodowe', skills: 'Kluczowe umiejętności', education: 'Wykształcenie', certifications: 'Certyfikaty', languages: 'Języki' },
    successLabel: 'Success story',
    jobs: [
      {
        role: 'Starszy Analityk Finansowy · Koordynacja Delivery',
        company: 'Trustwave Sp. z o.o. · Performance Management',
        location: 'Warszawa / Zdalnie',
        period: 'paź 2024 - obecnie',
        bullets: [
          'Analiza procesów finansowych w obszarze IT oraz przygotowywanie dashboardów: wysokopoziomowych dla CFO i dyrektorów finansowych oraz szczegółowych dla kierowników działowych',
          'Budowa dashboardów Power BI i przepływów ETL w Alteryx wykorzystywanych w miesięcznych przeglądach finansowych',
          'Koordynacja współpracy międzyfunkcyjnej (finanse, IT, biznes) nad standaryzowanymi szablonami raportowymi',
        ],
        successStory: 'Analizowałam procesy działów Financial Planning & Analysis oraz Performance Management dla zespołu finansowego: zdiagnozowałam wąskie gardła w raportowaniu miesięcznym, zaprojektowałam i wdrożyłam usprawnienia, stworzyłam dokumentację procesu w wersji przed i po zmianach oraz przeprowadziłam szkolenia z pełnego zestawu narzędzi (Excel, Power Query, Alteryx, SQL, Power BI).',
      },
      {
        role: 'Analityk Finansowy Projektów w HSBC',
        company: 'Alten Polska Sp. z o.o.',
        location: 'Kraków / Zdalnie',
        period: 'lip 2022 - kwi 2024',
        bullets: [
          'Koordynacja zespołu 5 analityków oraz odpowiedzialność za alokację kosztów osobowych dla ~40 projektów IT z budżetem rocznym 15 milionów dolarów: planowanie obsady etatowej, prognozowanie kosztów zasobów, monitoring wydatków, analiza odchyleń',
          'Praca w środowisku Agile/Scrum z globalnymi zespołami: planowanie sprintu, doprecyzowanie backlogu, daily stand-up',
          'Codzienna praca w Jira i Confluence: śledzenie zadań projektowych, zależności i logów RAID (ryzyka, założenia, problemy, zależności)',
          'Budowa dashboardów Power BI i raportów Excel: budżet, forecast',
          'Harmonizacja standardów raportowania z Central Finance Controlling, prowadzenie warsztatów szkoleniowych',
        ],
        successStory: 'Analizowałam procesy finansowe każdego specjalisty w koordynowanym zespole, zdiagnozowałam nieefektywności, zaproponowałam i wdrożyłam usprawnienia, stworzyłam dokumentację usprawnionego procesu oraz przeszkoliłam zespół do swobodnego korzystania z nowego zestawu narzędzi (Excel, Power Query).',
      },
      {
        role: 'Deweloper Smartsheet · Koordynator Projektów',
        company: 'Zimmer Biomet Polska · Global Business Support',
        location: 'Warszawa',
        period: 'cze 2021 - cze 2022',
        bullets: [
          'Prowadzenie realizacji procesu Global Transition dla 14 departamentów: planowanie zakresu i harmonogramu, śledzenie kamieni milowych, raportowanie postępów do interesariuszy',
          'Organizacja i prowadzenie warsztatów szkoleniowych dla globalnych użytkowników i deweloperów Smartsheet',
          'Budowa aplikacji Continuous Improvement w PowerApps do standaryzacji zarządzania zmianami procesowymi',
        ],
        successStory: 'Stworzyłam nową wersję dashboardów raportujących postęp migracji Global Transition dla 14 departamentów, przeszkoliłam deweloperów Smartsheet (utrzymanie i rozwój) oraz użytkowników końcowych (uzupełnianie i odczyt danych), prowadziłam iteracyjny rozwój dashboardów oraz komunikację każdej wprowadzanej zmiany (Smartsheet).',
      },
      {
        role: 'Analityk BI i Kierownik Projektu',
        company: 'ISS Facility Services · Project Management',
        location: 'Warszawa',
        period: 'wrz 2018 - maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi (4-15 osób) oraz odpowiedzialność za rachunek zysków i strat przypisanego klienta: śledzenie przychodów, kontrola kosztów, optymalizacja marży',
          'Kompleksowa realizacja projektów dla przypisanego klienta: zakres, harmonogram, budżet, prognozowanie finansowe, miesięczne rozliczenia, uzgadnianie faktur',
          'Przeprowadzanie audytów wewnętrznych i przeglądów ryzyk w aktywnych projektach',
          'Przygotowywanie raportów dla Zarządu w Power BI: tłumaczenie złożonych danych na rekomendacje biznesowe',
        ],
        successStory: 'Odpowiadałam za projekt usprawnienia obiegu faktur dla globalnego klienta z sektora bankowego: zaplanowałam i zaproponowałam nowy proces, wdrożyłam go kompleksowo, stworzyłam dokumentację oraz przeszkoliłam zespół wewnętrzny i klienta do efektywnego korzystania z procesu (Power Automate, SharePoint, Excel). Równolegle prowadziłam projekt Novatorium: wdrożenie obiegu pomysłów innowacyjnych i sprawdzonych rozwiązań w polskim oddziale firmy, komunikację procesu oraz szkolenia pracowników (Power Automate, PowerApps, Power BI, SharePoint, Excel).',
      },
      {
        role: 'Młodszy Kierownik Projektu · Management Trainee',
        company: 'Jeronimo Martins (Lizbona i Warszawa) · Robert BOSCH (Warszawa)',
        location: '',
        period: 'lut 2016 - sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie projektowe (Portugalia i Polska): Employer Branding, Store Excellence, logistyka',
          'Koordynacja interesariuszy i prowadzenie warsztatów w organizacji macierzowej',
        ],
      },
    ],
    skillGroups: {
      delivery: { name: 'Delivery i PM', items: ['PRINCE2 Foundation', 'Agile / Scrum', 'Zarządzanie ryzykiem', 'Zarządzanie zmianą i adopcją'] },
      tools: { name: 'Narzędzia PM', items: ['Jira', 'Confluence', 'Smartsheet', 'SharePoint', 'Power Automate', 'MS Project'] },
      financial: { name: 'Finanse i Commercial', items: ['Rachunek zysków i strat', 'Budżet do 15 mln $', 'Estymacja kosztów', 'Monitoring wydatków', 'Prognozowanie', 'Optymalizacja marży', 'Rozliczenia faktur'] },
      bi: { name: 'BI i Raportowanie', items: ['Power BI', 'DAX', 'Power Query', 'Excel (Power Pivot)', 'SQL', 'Alteryx', 'Cognos'] },
      automation: { name: 'AI i Automatyzacja', items: ['Power Automate', 'PowerApps', 'Claude Code', 'Prompt Engineering'] },
    },
    education: [
      { year: '2020-2021', title: 'Studia podyplomowe: Menedżer Jakości', school: 'Szkoła Główna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012-2016', title: 'Inżynier: Zarządzanie i Inżynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'PRINCE2 Foundation, AXELOS, 2020',
      'Project Management, INCODO, 2016',
      'Six Sigma w zarządzaniu jakością, SGH, 2020',
      'SQL Advanced, LabMasters, 2025',
      'Business Analytics in Power BI, LabMasters, 2022',
    ],
    languages: [
      { lang: 'Polski', level: 'Ojczysty' },
      { lang: 'Angielski', level: 'C1 biegły' },
      { lang: 'Portugalski', level: 'CELPE-Bras' },
      { lang: 'Włoski', level: 'A2 podstawowy' },
    ],
    gdpr: GDPR_PL,
  },
};

// ============================================================
// PROFILE: Data Analyst (analyst variant of same career history)
// ============================================================
const analystProfile = {
  en: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    linkedinUrl: 'https://www.linkedin.com/in/adriana-gu',
    location: 'Remote · Poland',
    sections: { experience: 'Work Experience', skills: 'Key Skills', education: 'Education', certifications: 'Certifications', languages: 'Languages' },
    successLabel: 'Success story',
    jobs: [
      {
        role: 'Senior Finance Analyst',
        company: 'Trustwave Sp. z o.o. · Performance Management',
        location: 'Warsaw / Remote',
        period: 'Oct 2024 - present',
        bullets: [
          'Designing financial dashboards for Financial Directors and CFO: delivering "at-a-glance" insights in Power BI',
          'Translating complex financial data into actionable business recommendations for stakeholders',
          'Automating financial reporting (Power Query, Alteryx): reducing manual workload',
          'SQL analytics and data modeling supporting strategic decision-making',
          'Building and maintaining ETL pipelines in Alteryx',
        ],
        successStory: 'Owned the analytical redesign of FP&A and Performance Management reporting: built Power BI dashboards on top of consolidated multi-source data (Excel, Power Query, Alteryx, SQL), delivered hands-on training to enable self-service analytics for the finance team.',
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o.',
        location: 'Cracow / Remote',
        period: 'Jul 2022 - Apr 2024',
        bullets: [
          'Coordinated a team of 5 analysts at a global bank (HSBC)',
          'Managed financial processes for ~40 IT projects with $15M budget: budgeting, forecasting, resource allocation',
          'Designed BI reports and dashboards: SQL, Power Query, Power BI, Cognos',
          'Presented analytical findings to stakeholders and recommended optimization actions',
          'Automated multi-source reporting (Clarity, GPDM, Cognos) using Power Query',
          'Trained teams on analytical tools (Power BI, Power Query, Excel)',
        ],
        successStory: 'Mapped financial processes across the analyst team, diagnosed inefficiencies and built upgraded reporting workflows. Documentation and training enabled the team to self-serve analytics confidently (Excel, Power Query).',
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska · Global Business Support',
        location: 'Warsaw',
        period: 'Jun 2021 - Jun 2022',
        bullets: [
          'Reporting for Global Transition Process across 14 departments',
          'Tool training for global end users and Smartsheet developers',
          'Built a Continuous Improvement tracking application using PowerApps',
        ],
        successStory: 'Designed a new generation of dashboards reporting migration progress for 14 departments, trained both developers and end users, owned iterative improvements and change communication (Smartsheet).',
      },
      {
        role: 'BI Developer & Analyst',
        company: 'ISS Facility Services · Project Management',
        location: 'Warsaw',
        period: 'Sep 2018 - May 2021',
        bullets: [
          'Managed cross-functional teams (4-15 people) and conducted internal audits',
          'Built Board-level dashboards and reports in Power BI and SharePoint',
          'Process automation end-to-end: Power Automate, SharePoint, Power BI',
          'Budgeting, forecasting and non-financial analysis for an assigned customer account',
          'Novatorium Project: innovation rollout using Power Platform suite',
        ],
        successStory: 'Owned the analytical redesign of invoice flow for a global banking client: streamlined the process, built dashboards and trained both internal and client teams for adoption (Power Automate, SharePoint, Excel).',
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        location: '',
        period: 'Feb 2016 - Aug 2018',
        bullets: [
          'International experience (Portugal & Poland): Employer Branding, Store Excellence, Logistics',
        ],
      },
    ],
    skillGroups: {
      bi: { name: 'BI & Analytics', items: ['Power BI', 'DAX (advanced)', 'Power Query (M)', 'Excel (Power Pivot)', 'Data modeling', 'Cohort & segmentation analysis'] },
      data: { name: 'Data & ETL', items: ['SQL', 'Alteryx (ETL)', 'Cognos', 'Multi-source consolidation', 'Pipeline design'] },
      financial: { name: 'Financial Analytics', items: ['P&L analysis', 'Budgeting & forecasting', 'Variance analysis', 'Spend monitoring', 'Margin optimization', 'Revenue & cost modeling'] },
      automation: { name: 'AI & Automation', items: ['Power Automate', 'PowerApps', 'Claude Code', 'Prompt Engineering'] },
      tools: { name: 'Tools', items: ['Jira', 'Confluence', 'Smartsheet', 'SharePoint', 'PowerApps'] },
    },
    education: [
      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced, LabMasters, 2025',
      'Business Analytics in Power BI, LabMasters, 2022',
      'PRINCE2 Foundation, AXELOS, 2020',
      'Six Sigma Quality Management, SGH, 2020',
      'Project Management, INCODO, 2016',
    ],
    languages: [
      { lang: 'Polish', level: 'Native' },
      { lang: 'English', level: 'C1 fluent' },
      { lang: 'Portuguese', level: 'CELPE-Bras' },
      { lang: 'Italian', level: 'A2 basic' },
    ],
    gdpr: GDPR_EN,
  },
  pl: {
    name: 'Adriana Guściora',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    linkedinUrl: 'https://www.linkedin.com/in/adriana-gu',
    location: 'Zdalnie · Polska',
    sections: { experience: 'Doświadczenie zawodowe', skills: 'Kluczowe umiejętności', education: 'Wykształcenie', certifications: 'Certyfikaty', languages: 'Języki' },
    successLabel: 'Success story',
    jobs: [
      {
        role: 'Starszy Analityk Finansowy',
        company: 'Trustwave Sp. z o.o. · Performance Management',
        location: 'Warszawa / Zdalnie',
        period: 'paź 2024 - obecnie',
        bullets: [
          'Projektowanie dashboardów finansowych dla Financial Directors i CFO: dostarczanie insightów "at-a-glance" w Power BI',
          'Translacja złożonych danych finansowych na rekomendacje biznesowe dla stakeholderów',
          'Automatyzacja raportowania (Power Query, Alteryx): redukcja pracy manualnej',
          'Analizy SQL i modelowanie danych wspierające decyzje strategiczne',
          'Budowanie i utrzymywanie pipeline\'ów ETL w Alteryx',
        ],
        successStory: 'Odpowiadałam za analityczne przeprojektowanie raportowania FP&A i Performance Management: zbudowałam dashboardy Power BI w oparciu o skonsolidowane dane wieloźródłowe (Excel, Power Query, Alteryx, SQL), przeprowadziłam szkolenia umożliwiające self-service zespołu finansowego.',
      },
      {
        role: 'Analityk Finansowy w HSBC',
        company: 'Alten Polska Sp. z o.o.',
        location: 'Kraków / Zdalnie',
        period: 'lip 2022 - kwi 2024',
        bullets: [
          'Koordynacja zespołu 5 analityków w globalnym banku (HSBC)',
          'Zarządzanie procesami finansowymi dla ~40 projektów IT z budżetem 15M$: budżetowanie, prognozowanie, alokacja zasobów',
          'Projektowanie raportów i dashboardów BI: SQL, Power Query, Power BI, Cognos',
          'Prezentacja wyników analiz stakeholderom i rekomendowanie działań optymalizacyjnych',
          'Automatyzacja raportowania wieloźródłowego (Clarity, GPDM, Cognos) za pomocą Power Query',
          'Szkolenia zespołów z narzędzi analitycznych (Power BI, Power Query, Excel)',
        ],
        successStory: 'Zmapowałam procesy finansowe całego zespołu analityków, zdiagnozowałam nieefektywności i zbudowałam ulepszone workflow raportowe. Dokumentacja i szkolenia pozwoliły zespołowi swobodnie korzystać z analityki self-service (Excel, Power Query).',
      },
      {
        role: 'Deweloper Smartsheet',
        company: 'Zimmer Biomet Polska · Global Business Support',
        location: 'Warszawa',
        period: 'cze 2021 - cze 2022',
        bullets: [
          'Raportowanie w procesie Global Transition dla 14 departamentów',
          'Szkolenia narzędziowe dla globalnych użytkowników i developerów Smartsheet',
          'Stworzenie aplikacji Continuous Improvement (PowerApps)',
        ],
        successStory: 'Zaprojektowałam nową generację dashboardów raportujących progres migracji dla 14 departamentów, przeszkoliłam deweloperów oraz end userów, prowadziłam iteracyjny rozwój i komunikację każdej zmiany (Smartsheet).',
      },
      {
        role: 'Programista BI i Analityk',
        company: 'ISS Facility Services · Project Management',
        location: 'Warszawa',
        period: 'wrz 2018 - maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi (4-15 osób) oraz audyty wewnętrzne',
          'Budowa raportów dla Zarządu: Power BI i SharePoint',
          'Automatyzacja procesów end-to-end: Power Automate, SharePoint, Power BI',
          'Budżetowanie, prognozowanie i analizy niefinansowe dla przypisanego klienta',
          'Projekt Novatorium: wdrożenie innowacji za pomocą Power Platform',
        ],
        successStory: 'Odpowiadałam za analityczne przeprojektowanie przepływu faktur dla globalnego klienta z segmentu bankowego: usprawnienie procesu, budowa dashboardów oraz szkolenia zespołu wewnętrznego i klienta (Power Automate, SharePoint, Excel).',
      },
      {
        role: 'Młodszy Kierownik Projektu · Management Trainee',
        company: 'Jeronimo Martins (Lizbona i Warszawa) · Robert BOSCH (Warszawa)',
        location: '',
        period: 'lut 2016 - sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie (Portugalia i Polska): Employer Branding, Store Excellence, Logistyka',
        ],
      },
    ],
    skillGroups: {
      bi: { name: 'BI i Analityka', items: ['Power BI', 'DAX (zaawansowany)', 'Power Query (M)', 'Excel (Power Pivot)', 'Modelowanie danych', 'Analiza kohortowa'] },
      data: { name: 'Dane i ETL', items: ['SQL', 'Alteryx (ETL)', 'Cognos', 'Konsolidacja wieloźródłowa', 'Projektowanie pipeline\'ów'] },
      financial: { name: 'Analityka finansowa', items: ['Analiza P&L', 'Budżetowanie i prognozowanie', 'Analiza odchyleń', 'Monitoring wydatków', 'Optymalizacja marży', 'Modelowanie przychodów i kosztów'] },
      automation: { name: 'AI i Automatyzacja', items: ['Power Automate', 'PowerApps', 'Claude Code', 'Prompt Engineering'] },
      tools: { name: 'Narzędzia', items: ['Jira', 'Confluence', 'Smartsheet', 'SharePoint', 'PowerApps'] },
    },
    education: [
      { year: '2020-2021', title: 'Studia podyplomowe: Menedżer Jakości', school: 'Szkoła Główna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012-2016', title: 'Inżynier: Zarządzanie i Inżynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced, LabMasters, 2025',
      'Business Analytics in Power BI, LabMasters, 2022',
      'PRINCE2 Foundation, AXELOS, 2020',
      'Six Sigma w zarządzaniu jakością, SGH, 2020',
      'Project Management, INCODO, 2016',
    ],
    languages: [
      { lang: 'Polski', level: 'Ojczysty' },
      { lang: 'Angielski', level: 'C1 biegły' },
      { lang: 'Portugalski', level: 'CELPE-Bras' },
      { lang: 'Włoski', level: 'A2 podstawowy' },
    ],
    gdpr: GDPR_PL,
  },
};

// ============================================================
// 7 OFFERS — title + summary + skill priority + lang
// ============================================================
const offers = [
  {
    fileName: 'AG_Lead_PM_DWH_BI_EN.pdf',
    profile: 'dm',
    lang: 'en',
    title: 'Lead Project Manager · DWH & BI Delivery',
    summary: 'Proven Project / Lead PM with 8+ years of experience leading cross-functional teams (4-15 people) on IT delivery in financial services and FinTech. End-to-end ownership of project goals, scope, timelines, priorities and risk mitigation; daily collaboration in Jira, Confluence and Git-tracked environments. Hands-on Agile/Scrum (sprint planning, backlog grooming, release planning) combined with PRINCE2 governance and SDLC awareness. Skilled at facilitating C-level discussions, driving decision-making, balancing multiple workstreams and continuously improving processes and team practices in DWH/BI delivery.',
    skillOrder: ['delivery', 'tools', 'bi', 'financial', 'automation'],
  },
  {
    fileName: 'AG_Executive_Data_Analyst_FinTech_EN.pdf',
    profile: 'analyst',
    lang: 'en',
    title: 'Executive Data Analyst · Financial Services & FinTech',
    summary: 'Senior data analyst with 8+ years of experience in financial services and FinTech (HSBC, Trustwave). Owning end-to-end analytical lifecycle: revenue, cost structures, margins and unit economics; budgeting, forecasting and scenario modeling; executive dashboards (Power BI, Cognos) and structured presentations for CFO and leadership stakeholders. Strong SQL and Power Query skills, multi-source data consolidation (Clarity, GPDM, Cognos), automation of recurring reporting pipelines and translation of complex transactional data into clear business narratives. P&L analysis across products, regions and business units; communication tailored to non-technical audiences.',
    skillOrder: ['bi', 'data', 'financial', 'automation', 'tools'],
  },
  {
    fileName: 'AG_Process_Business_PM_EN.pdf',
    profile: 'dm',
    lang: 'en',
    title: 'Process & Business Project Manager',
    summary: 'Business-focused Project Manager with 8+ years of experience in process design, modeling, analysis and optimization across global initiatives in financial services and FinTech. Skilled link between strategic partners, regional PMs, internal stakeholders and change management teams. Demonstrated stakeholder management with C-level executives, conflict resolution and assertive decision-making. PRINCE2 + Six Sigma + Postgraduate Quality Management foundation paired with hands-on experience of process improvement, training delivery and adoption. Tool fluency: MS Project, SharePoint, Teams, Jira, Confluence. Business-fluent English (C1).',
    skillOrder: ['delivery', 'tools', 'financial', 'automation', 'bi'],
  },
  {
    fileName: 'AG_Process_Automation_Lead_PL.pdf',
    profile: 'dm',
    lang: 'pl',
    title: 'Lider Zespołu Automatyzacji · Power Platform & AI',
    summary: 'Liderka delivery z 8+ latami doświadczenia w prowadzeniu zespołów i projektów automatyzacji procesów biznesowych. Praktyczna znajomość Power Automate, Power BI, SQL oraz PowerApps wykorzystana m.in. w projekcie Novatorium (ISS) i Continuous Improvement (Zimmer Biomet). Mentoruję analityków, prowadzę warsztaty szkoleniowe z całego toolchainu (Excel, Power Query, Alteryx, SQL, Power BI), wspieram zespoły w identyfikacji obszarów do usprawnień i wdrażaniu rozwiązań technicznych. Inżynier Zarządzania i Inżynierii Produkcji (PW) + Studia Podyplomowe Menedżer Jakości (SGH) z Lean / Six Sigma / Kaizen jako fundament procesowy. Doświadczenie z systemami IT wspierającymi procesy biznesowe oraz znajomość metodyk zarządzania projektami (PRINCE2, Agile/Scrum).',
    skillOrder: ['automation', 'bi', 'delivery', 'tools', 'financial'],
  },
  {
    fileName: 'AG_Power_Platform_Consultant_PL.pdf',
    profile: 'dm',
    lang: 'pl',
    title: 'Konsultant Power Platform · M365',
    summary: 'Konsultantka z 8+ latami doświadczenia we wdrażaniu narzędzi Microsoft 365 (SharePoint, Teams, Outlook) oraz Power Platform (Power Apps, Power Automate, Power BI) w dużych organizacjach (HSBC, Bosch, Jeronimo Martins, Zimmer Biomet, ISS). Bezpośrednia praca z użytkownikami biznesowymi: kierownikami, inżynierami i kadrą zarządzającą; budowa prostych aplikacji i automatyzacji w Low Code, raportów i dashboardów w Power BI. Wysokie kompetencje miękkie wynikające z wykształcenia w psychologii klinicznej i mediacji: skuteczne facylitowanie warsztatów, odbieranie wymagań i prowadzenie szkoleń end-userów. SharePoint na poziomie administracyjnym (zarządzanie stronami, uprawnieniami, zespołami).',
    skillOrder: ['automation', 'tools', 'bi', 'delivery', 'financial'],
  },
  {
    fileName: 'AG_PowerBI_Developer_PL.pdf',
    profile: 'analyst',
    lang: 'pl',
    title: 'Power BI Developer · DAX & Semantic Models',
    summary: 'Developer Power BI z 8+ latami doświadczenia w projektowaniu i rozwoju dashboardów oraz raportów dla kadry zarządzającej (HSBC, Trustwave, ISS). Praktyczna znajomość modelowania danych (star schema, measures, relationships), DAX, Power Query (M) oraz pracy z hurtowniami danych. Przekładam wymagania biznesowe na czytelne metryki i KPI; współpracuję z inżynierami danych przy zapewnianiu spójności i gotowości danych do analizy. Optymalizacja raportów pod kątem wydajności i UX, walidacja wyników, dbałość o dokładność danych. SQL Advanced (LabMasters 2025), Business Analytics w Power BI (LabMasters 2022).',
    skillOrder: ['bi', 'data', 'financial', 'automation', 'tools'],
  },
  {
    fileName: 'AG_PowerBI_Solutions_Specialist_EN.pdf',
    profile: 'analyst',
    lang: 'en',
    title: 'Power BI Solutions Specialist · Senior Individual Contributor',
    summary: 'Senior Power BI practitioner with 8+ years of experience in BI requirements gathering, solution design, data modeling and quality assurance for executive stakeholders (HSBC, Trustwave, ISS, Zimmer Biomet). Hands-on with advanced DAX, complex data models, Power Query (M) and the Microsoft data stack. Strong communicator translating technical concepts for non-technical audiences; experience mentoring analysts and running training workshops on the full toolchain. Comfortable owning multiple concurrent projects with high attention to detail and data accuracy. Practical exposure to Power Automate, AI assistants (Claude Code) and Power Platform innovation rollouts (Novatorium, Continuous Improvement).',
    skillOrder: ['bi', 'data', 'automation', 'financial', 'tools'],
  },
];

// ============================================================
// HTML BUILDER (shared between profiles)
// ============================================================
function generateRainSVG(width, height) {
  // Static matrix-style numbers in subtle blue, fading toward bottom
  const fontSize = 14;
  const cols = Math.floor(width / fontSize);
  const elems = [];
  for (let col = 0; col < cols; col++) {
    const depth = 0.25 + Math.random() * 0.75;
    const bright = 0.35 + Math.random() * 0.65;
    const startOffset = Math.floor(Math.random() * 8);
    const endRow = Math.floor((depth * height) / fontSize);
    for (let row = startOffset; row < endRow; row++) {
      const y = row * fontSize + fontSize;
      const yRatio = y / height;
      const yFade = Math.max(0, 1 - yRatio * 1.15);
      if (yFade < 0.02) continue;
      const opacity = (0.32 * bright * yFade).toFixed(3);
      const ch = Math.floor(Math.random() * 10);
      elems.push('<text x="' + (col * fontSize) + '" y="' + y + '" fill="rgba(30,58,110,' + opacity + ')" font-family="JetBrains Mono, ui-monospace, monospace" font-size="' + fontSize + '">' + ch + '</text>');
    }
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;">' + elems.join('') + '</svg>';
}

function buildHTML(data, title, summary, skillOrder) {
  const orderedSkills = skillOrder.map(k => data.skillGroups[k]).filter(Boolean);
  const otherSkills = Object.keys(data.skillGroups).filter(k => !skillOrder.includes(k)).map(k => data.skillGroups[k]);
  const allSkills = [...orderedSkills, ...otherSkills];

  const jobsHTML = data.jobs.map(j => `
    <article class="job">
      <header class="job-head">
        <div>
          <h3 class="job-role">${j.role}</h3>
          <div class="job-company">${j.company}${j.location ? ` · <span class="job-loc">${j.location}</span>` : ''}</div>
        </div>
        <span class="job-period">${j.period}</span>
      </header>
      <ul class="job-bullets">${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      ${j.successStory ? `<div class="success-story"><span class="success-tag">★ ${data.successLabel}</span> ${j.successStory}</div>` : ''}
    </article>
  `).join('');

  const skillsHTML = allSkills.map(g => `
    <div class="skill-group">
      <div class="skill-name">${g.name}</div>
      <div class="skill-tags">${g.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>
  `).join('');

  const eduHTML = data.education.map(e => `
    <div class="edu-item">
      <div class="edu-year">${e.year}</div>
      <div class="edu-body">
        <div class="edu-title">${e.title}</div>
        <div class="edu-school">${e.school}${e.desc ? ` · <em>${e.desc}</em>` : ''}</div>
      </div>
    </div>
  `).join('');

  const certsHTML = data.certs.map(c => `<li class="cert-item">${c}</li>`).join('');
  const langsHTML = data.languages.map(l => `<li class="lang-item"><span class="lang-name">${l.lang}</span><span class="lang-level">${l.level}</span></li>`).join('');

  const mailIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;
  const linkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const pinIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${data.name}, ${title}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --ink: #1a2332; --ink-soft: #4a5568; --ink-muted: #718096;
    --accent: #1e56a0; --accent-soft: #2a6fc8;
    --accent-bg: #eaf1fb; --accent-bg-soft: #f4f8fd;
    --border: #dce3eb; --border-soft: #eef1f5;
    --gold: #b88a2c; --success-bg: #f7f4ec;
  }
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--ink); line-height: 1.55; font-size: 9.6pt; background: white;
  }
  body { position: relative; min-height: 297mm; }
  .rain-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
  .page { position: relative; z-index: 1; max-width: 210mm; margin: 0 auto; padding: 14mm 14mm 10mm; background: rgba(255, 255, 255, 0.86); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .job, .skill-group, .summary, .edu-item, .cert-list, .lang-list { position: relative; z-index: 2; }
  .header {
    display: grid; grid-template-columns: 96px 1fr; gap: 16px;
    align-items: center; padding-bottom: 14px;
    border-bottom: 2.5px solid var(--accent); margin-bottom: 14px;
  }
  .header-photo {
    width: 96px; height: 96px; border-radius: 50%;
    object-fit: cover; border: 3px solid white;
    box-shadow: 0 0 0 1.5px var(--accent), 0 4px 10px rgba(30,86,160,0.15);
  }
  .header-text h1 {
    font-size: 22pt; font-weight: 800; color: var(--ink);
    letter-spacing: -0.6px; line-height: 1.05; margin-bottom: 3px;
  }
  .header-title {
    font-size: 11.5pt; font-weight: 600; color: var(--accent); margin-bottom: 8px;
  }
  .header-contact {
    display: flex; flex-wrap: wrap; gap: 10px 14px;
    font-size: 8.8pt; color: var(--ink-soft);
  }
  .header-contact a {
    color: var(--ink-soft); text-decoration: none;
    display: inline-flex; align-items: center; gap: 5px;
  }
  .header-contact a:hover { color: var(--accent); }
  .header-contact .contact-static { display: inline-flex; align-items: center; gap: 5px; }

  .summary {
    background: linear-gradient(to right, var(--accent-bg-soft), white);
    border-left: 3px solid var(--accent);
    padding: 11px 14px; margin-bottom: 16px;
    text-align: justify; font-size: 9.4pt;
    color: var(--ink-soft); line-height: 1.6;
  }

  .body-grid {
    display: grid; grid-template-columns: minmax(0, 62%) minmax(0, 38%); gap: 18px;
  }

  .section-title {
    font-size: 9.5pt; font-weight: 700; color: var(--accent);
    text-transform: uppercase; letter-spacing: 1.5px;
    padding-bottom: 4px; margin-top: 4px; margin-bottom: 10px;
    border-bottom: 1.5px solid var(--border);
    display: flex; align-items: center; gap: 8px;
  }
  .section-title::before {
    content: ''; display: inline-block; width: 3px; height: 11px;
    background: var(--accent); border-radius: 1px;
  }
  .col-right .section-title { margin-top: 0; }
  .col-right .section-title:not(:first-child) { margin-top: 14px; }

  .job { margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px dashed var(--border-soft); }
  .job:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
  .job-head {
    display: flex; justify-content: space-between; align-items: flex-start;
    gap: 10px; margin-bottom: 5px;
  }
  .job-role { font-size: 10pt; font-weight: 700; color: var(--ink); line-height: 1.3; }
  .job-company { font-size: 8.8pt; color: var(--ink-soft); margin-top: 1px; }
  .job-loc { color: var(--ink-muted); font-style: italic; }
  .job-period {
    font-size: 8.5pt; color: var(--accent); font-weight: 600; white-space: nowrap;
    background: var(--accent-bg); padding: 2px 8px; border-radius: 10px; flex-shrink: 0;
  }
  .job-bullets { padding-left: 16px; margin-top: 4px; }
  .job-bullets li {
    margin-bottom: 3px; font-size: 9.2pt; color: var(--ink-soft);
    text-align: justify; line-height: 1.5;
  }
  .job-bullets li::marker { color: var(--accent); }

  .success-story {
    margin-top: 8px; padding: 8px 11px;
    background: var(--success-bg); border-left: 3px solid var(--gold);
    border-radius: 0 4px 4px 0; font-size: 8.8pt; color: var(--ink);
    line-height: 1.5; text-align: justify;
  }
  .success-tag {
    display: inline; font-weight: 700; color: var(--gold);
    margin-right: 4px; text-transform: uppercase;
    letter-spacing: 0.5px; font-size: 7.8pt;
  }

  .skill-group { margin-bottom: 9px; }
  .skill-name {
    font-size: 8.8pt; font-weight: 700; color: var(--ink);
    margin-bottom: 4px; letter-spacing: 0.2px;
  }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 3px 4px; }
  .skill-tag {
    background: var(--accent-bg); color: var(--accent);
    border-radius: 3px; padding: 2px 7px; font-size: 8.1pt; font-weight: 500;
  }

  .edu-item {
    display: grid; grid-template-columns: 70px 1fr;
    gap: 10px; margin-bottom: 7px; align-items: baseline;
  }
  .edu-year { font-size: 8.4pt; color: var(--accent); font-weight: 600; }
  .edu-title { font-size: 9.2pt; font-weight: 600; color: var(--ink); line-height: 1.35; }
  .edu-school { font-size: 8.6pt; color: var(--ink-soft); line-height: 1.35; margin-top: 1px; }

  .cert-list { list-style: none; }
  .cert-item {
    font-size: 8.5pt; color: var(--ink-soft);
    padding: 4px 0 4px 14px; border-bottom: 1px solid var(--border-soft);
    position: relative; line-height: 1.4;
  }
  .cert-item:last-child { border-bottom: none; }
  .cert-item::before {
    content: '✓'; position: absolute; left: 0; top: 4px;
    color: var(--accent); font-weight: 700; font-size: 9pt;
  }

  .lang-list { list-style: none; }
  .lang-item {
    display: flex; justify-content: space-between; align-items: baseline;
    padding: 4px 0; border-bottom: 1px solid var(--border-soft); font-size: 8.6pt;
  }
  .lang-item:last-child { border-bottom: none; }
  .lang-name { font-weight: 600; color: var(--ink); }
  .lang-level { color: var(--accent); font-weight: 500; }

  .gdpr {
    margin-top: 18px; padding-top: 10px; border-top: 1px solid var(--border-soft);
    font-size: 6.8pt; color: var(--ink-muted); text-align: justify;
    line-height: 1.45; font-style: italic;
  }
  @page { size: A4; margin: 0; }
</style>
</head>
<body>
<div class="rain-bg">${generateRainSVG(794, 1123)}</div>
<div class="page">
  <header class="header">
    <img src="${photoDataUrl}" alt="${data.name}" class="header-photo">
    <div class="header-text">
      <h1>${data.name}</h1>
      <div class="header-title">${title}</div>
      <div class="header-contact">
        <a href="mailto:${data.email}">${mailIcon}${data.email}</a>
        <a href="${data.linkedinUrl}">${linkIcon}${data.linkedin}</a>
        <span class="contact-static">${pinIcon}${data.location}</span>
      </div>
    </div>
  </header>
  <div class="summary">${summary}</div>
  <div class="body-grid">
    <div class="col-left">
      <h2 class="section-title">${data.sections.experience}</h2>
      ${jobsHTML}
      <h2 class="section-title" style="margin-top: 14px;">${data.sections.education}</h2>
      ${eduHTML}
    </div>
    <div class="col-right">
      <h2 class="section-title">${data.sections.skills}</h2>
      ${skillsHTML}
      <h2 class="section-title">${data.sections.certifications}</h2>
      <ul class="cert-list">${certsHTML}</ul>
      <h2 class="section-title">${data.sections.languages}</h2>
      <ul class="lang-list">${langsHTML}</ul>
    </div>
  </div>
  <div class="gdpr">${data.gdpr}</div>
</div>
</body>
</html>`;
}

// ============================================================
// MAIN: render all 7 PDFs
// ============================================================
async function generatePDF(browser, offer) {
  const profile = offer.profile === 'analyst' ? analystProfile : dmProfile;
  const data = profile[offer.lang];
  const html = buildHTML(data, offer.title, offer.summary, offer.skillOrder);

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });

  const pdfPath = path.join(outputDir, offer.fileName);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
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
  console.log('Done! 7 tailored CVs generated.');
})();

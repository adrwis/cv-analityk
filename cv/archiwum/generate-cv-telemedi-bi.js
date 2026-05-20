// Tailored CV — Analityk BI · Telemedi (medtech, PL).
// Layout: navy+gold redesign (zgodne z generate-cv-data-process-specialist-pl).
// Profil: BI Analyst z naciskiem na Power BI, SQL, ETL, KPI/cohort analytics + medtech context (Zimmer Biomet, psychologia kliniczna SWPS).

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const photoPath = path.resolve(__dirname, '..', '..', 'adriana-gusciora-pl', 'zdjecia', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

const GDPR_PL = 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).';

const data = {
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
    method: 'Podejście',
  },
  sidebarSkills: [
    { name: 'Power BI · DAX', lvl: 'Ekspert', pct: 95 },
    { name: 'SQL · Power Query (M)', lvl: 'Zaawansowany', pct: 88 },
    { name: 'Excel · Google Sheets', lvl: 'Ekspert', pct: 92 },
    { name: 'ETL · Alteryx · Modelowanie', lvl: 'Zaawansowany', pct: 85 },
    { name: 'Analiza KPI · Kohortowa', lvl: 'Zaawansowany', pct: 82 },
    { name: 'Integracje API · AI', lvl: 'Średniozaawans.', pct: 75 },
    { name: 'Komunikacja z biznesem', lvl: 'Ekspert', pct: 92 },
  ],
  languages: [
    { lang: 'Polski', lvl: 'Ojczysty' },
    { lang: 'Angielski', lvl: 'Biegły (C1)' },
    { lang: 'Portugalski', lvl: 'CELPE-BRAS' },
    { lang: 'Włoski', lvl: 'Podstawowy' },
  ],
  stats: [
    { num: '8+', lbl: 'Lat<br>Doświadczenia BI' },
    { num: '~40', lbl: 'Projektów IT<br>Alokacja Kosztów' },
    { num: '14', lbl: 'Departamentów<br>Global Transition' },
    { num: '$15M', lbl: 'Wartość<br>Portfela HSBC' },
  ],
  jobs: [
    {
      title: 'Starszy Analityk · BI i Performance Management',
      meta: 'Trustwave Sp. z o.o. · Cybersecurity · Warszawa / Zdalnie',
      period: 'paź 2024 - mar 2026',
      bullets: [
        'Projektowanie dashboardów <b>Power BI</b> dla CFO i Financial Directors: monitoring KPI w jednym widoku oraz analizy wydajności biznesowej.',
        'Analiza dużych i złożonych zbiorów danych: <b>SQL</b>, modelowanie semantyczne, automatyzacja raportowania w <b>Power Query i Alteryx (ETL)</b>.',
        'Translacja danych finansowych na rekomendacje biznesowe dla stakeholderów; współpraca międzydziałowa z Finance, Operations, IT.',
      ],
      impact: 'Zastąpiłam manualne raporty Excel zautomatyzowanymi przepływami ETL i dashboardami Power BI: skrócenie cyklu raportowego.',
    },
    {
      title: 'Analityk BI w HSBC',
      meta: 'Alten Polska Sp. z o.o. · Bankowość · Kraków / Zdalnie',
      period: 'lip 2022 - kwi 2024',
      bullets: [
        'Koordynacja zespołu <b>5 analityków</b> w globalnym banku HSBC; <b>alokacja kosztów personalnych</b> dla ~40 projektów IT o wartości <b>$15M</b>.',
        'Projektowanie raportów i dashboardów BI: <b>SQL, Power Query, Power BI</b>; integracja danych z 3 systemów źródłowych (Clarity, GPDM, Cognos).',
        'Budżetowanie, prognozowanie, alokacja zasobów; prezentacje wyników dla stakeholderów C-level i rekomendowanie działań optymalizacyjnych.',
        'Szkolenia zespołów z narzędzi BI (Power BI, Power Query, Excel).',
      ],
      impact: 'Zaudytowałam pracę zespołu 5 analityków, zdiagnozowałam fragmentację procesów i zbudowałam zintegrowane przepływy wieloźródłowe; dokumentacja i szkolenia pozwoliły przejść od manualnej konsolidacji do samodzielnej pracy z danymi.',
    },
    {
      title: 'Deweloper Smartsheet',
      meta: 'Zimmer Biomet Polska · Global Business Support · Warszawa',
      period: 'cze 2021 - cze 2022',
      bullets: [
        'Raportowanie postępu <b>Global Transition</b> dla <b>14 departamentów</b>: dashboardy KPI, definicje semantyczne, struktura danych.',
        'Budowa aplikacji <b>Continuous Improvement</b> w PowerApps: gromadzenie usprawnień procesowych, integracja z SharePoint.',
        'Szkolenia narzędziowe dla globalnych użytkowników i deweloperów Smartsheet.',
      ],
      impact: 'Zaprojektowałam i wdrożyłam aplikację Continuous Improvement w PowerApps, która zastąpiła rozproszone arkusze Excel jako pojedyncze źródło zgłaszania usprawnień procesowych dla 14 departamentów. Iteracyjny rozwój, komunikacja zmiany i szkolenia użytkowników (Smartsheet, PowerApps).',
    },
    {
      title: 'Programista BI i Analityk',
      meta: 'ISS Facility Services · Project Management · Warszawa',
      period: 'wrz 2018 - maj 2021',
      bullets: [
        'Dashboardy i raporty dla <b>Zarządu</b>: Power BI i SharePoint; KPI biznesowe i operacyjne.',
        'Automatyzacja procesów: Power Automate, SharePoint, Power BI; obieg faktur dla globalnego klienta z sektora bankowego.',
        'Budżetowanie, prognozowanie i analizy niefinansowe; zarządzanie zespołami <b>4-15 osób</b> i audyty wewnętrzne.',
        'Projekt <b>Novatorium</b>: implementacja innowacji za pomocą Power Platform.',
      ],
      impact: 'Pełna automatyzacja obiegu faktur dla klienta bankowego: integracja Power Automate + SharePoint + Excel zastąpiła manualne przepływy.',
    },
    {
      title: 'Młodszy Kierownik Projektu',
      meta: 'Jeronimo Martins (Lizbona i Warszawa) · Robert Bosch (Warszawa) · Management Trainee',
      period: 'lut 2016 - sie 2018',
      bullets: [
        'Międzynarodowe doświadczenie projektowe w <b>Portugalii i Polsce</b>: Employer Branding, Store Excellence, Customer Service, logistyka.',
      ],
      impact: '',
    },
  ],
  education: [
    { yr: '2020-2021', deg: 'Studia podyplomowe · Menedżer Jakości', inst: 'Szkoła Główna Handlowa (SGH)<br><em>Lean Management · Six Sigma · Kaizen</em>' },
    { yr: '2012-2017', deg: 'Magister · Psychologia Kliniczna', inst: 'Uniwersytet SWPS<br><em>Profilowanie behawioralne, statystyka, metodologia badawcza</em>' },
    { yr: '2012-2016', deg: 'Inżynier · Zarządzanie i Inżynieria Produkcji', inst: 'Politechnika Warszawska' },
    { yr: '2009-2010', deg: 'Rotary Youth Exchange · Brazylia', inst: 'Liceum ANGLO, Penápolis' },
  ],
  certs: [
    { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
    { name: 'SQL Basics & Intermediate', org: 'LabMasters', yr: '2023' },
    { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
    { name: 'User Experience I + II', org: 'USWPS', yr: '2017' },
    { name: 'Six Sigma w zarządzaniu jakością', org: 'SGH', yr: '2020' },
    { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
  ],
  method: ['Analiza KPI i kohortowa', 'Dashboardy Power BI dla C-level', 'SQL i modelowanie danych', 'ETL i integracje wieloźródłowe', 'Profilowanie zachowań użytkowników', 'Automatyzacja raportowania'],
  toolbox: {
    bi: { title: 'BI i Raportowanie', items: 'Power BI · DAX (zaawansowany) · Dashboardy KPI · Modelowanie semantyczne · Excel Power Pivot · Cognos' },
    db: { title: 'Bazy Danych i SQL', items: 'SQL Advanced (LabMasters 2025) · Power Query (M) · gotowość do MySQL i BigQuery · modelowanie danych · hurtownie' },
    etl: { title: 'ETL i Integracje', items: 'Alteryx · Power Query · konsolidacja wieloźródłowa (Clarity, GPDM, Cognos, SharePoint, Excel) · API' },
    office: { title: 'Office i Produktywność', items: 'Excel zaawansowany (formuły, Power Query, Power Pivot) · Google Sheets · MS Office Suite · SharePoint' },
    behavior: { title: 'Analiza Zachowań', items: 'KPI · analizy kohortowe · profilowanie klientów · UX I+II (USWPS) · metodologia badawcza' },
    automation: { title: 'Automatyzacja i AI', items: 'Power Automate · PowerApps · Smartsheet · Claude Code · Prompt Engineering · AI Chatbot (REST API)' },
  },
  gdpr: GDPR_PL,
  nameContinued: 'Adriana Guściora, <em>cd.</em>',
};

const offer = {
  fileName: 'AG_Telemedi_Analityk_BI.pdf',
  lang: 'pl',
  title: 'Analityk BI · MedTech &amp; Operacje Telemedyczne',
  summary: 'Analityczka BI z <strong>8+ latami</strong> doświadczenia w analizie danych dla sektorów regulowanych: bankowości (HSBC, $15M portfela), <strong>medycznego (Zimmer Biomet)</strong> i cybersecurity (Trustwave). Ekspert <strong>Power BI i DAX</strong>, projektuję dashboardy KPI w jednym widoku dla CFO i Financial Directors. <strong>SQL Advanced</strong> (LabMasters 2025) z gotowością do MySQL i BigQuery; ETL w Alteryx i Power Query, integracja wieloźródłowa (Clarity, GPDM, Cognos, SharePoint). <strong>Magister psychologii klinicznej (SWPS)</strong>, metodologia badawcza, profilowanie behawioralne i analiza kohortowa pacjentów / klientów. UX I+II (USWPS). Współpraca międzydziałowa z Finance, Operations, IT i prezentacje C-level.',
  skillOrder: ['bi', 'db', 'etl', 'office', 'behavior', 'automation'],
};

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

  .main{ padding: 44px 44px 80px 42px; color: var(--ink); font-size: 9.5pt; line-height: 1.5; overflow: hidden; }

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
  .impact b{ font-weight: 600; color: var(--navy-deep); }

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

function buildHTML() {
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

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(buildHTML(), { waitUntil: 'networkidle' });
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
  await browser.close();
  console.log(`Generated: ${offer.fileName}`);
})();

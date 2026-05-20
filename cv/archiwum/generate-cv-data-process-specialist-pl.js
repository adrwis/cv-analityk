// Tailored CV — Specjalista ds. Procesów Danych (audyt + ETL + automatyzacja).
// Layout: navy+gold redesign (Claude Design handoff).
// Pojedyncza oferta, PL, profil analityka z naciskiem na process redesign / ETL / rescue mode.

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
    method: 'Metoda',
  },
  sidebarSkills: [
    { name: 'ETL · Pipeline\'y danych', lvl: 'Ekspert', pct: 95 },
    { name: 'Audyt procesów · Six Sigma', lvl: 'Ekspert', pct: 92 },
    { name: 'Power BI · DAX', lvl: 'Ekspert', pct: 92 },
    { name: 'SQL · Power Query (M)', lvl: 'Zaawansowany', pct: 88 },
    { name: 'Automatyzacja · Power Platform', lvl: 'Zaawansowany', pct: 85 },
    { name: 'Modelowanie danych', lvl: 'Zaawansowany', pct: 85 },
    { name: 'Komunikacja z biznesem', lvl: 'Ekspert', pct: 90 },
  ],
  languages: [
    { lang: 'Polski', lvl: 'Ojczysty' },
    { lang: 'Angielski', lvl: 'Biegły' },
    { lang: 'Portugalski', lvl: 'CELPE-BRAS' },
    { lang: 'Włoski', lvl: 'Podstawowy' },
  ],
  stats: [
    { num: '8+', lbl: 'Lat<br>Doświadczenia' },
    { num: '~40', lbl: 'Procesów IT<br>Usprawnionych' },
    { num: '14', lbl: 'Departamentów<br>w Migracji' },
    { num: '15', lbl: 'Członków<br>Zespołu' },
  ],
  jobs: [
    {
      title: 'Starszy Analityk Finansowy',
      meta: 'Trustwave Sp. z o.o. · Performance Management · Warszawa / Zdalnie',
      period: 'paź 2024 - obecnie',
      bullets: [
        'Diagnozowałam wąskie gardła w miesięcznym raportowaniu finansowym; projektowałam i wdrażałam <b>zautomatyzowane przepływy ETL</b> w Alteryx zastępujące manualną pracę w Excelu.',
        'Konsolidacja danych z wielu źródeł (Excel, SQL, Alteryx) i budowa <b>dashboardów Power BI</b> dla CFO i dyrektorów finansowych.',
        'Tworzenie dokumentacji "przed i po" oraz szkolenia zespołu z pełnego zestawu narzędzi (Excel, Power Query, Alteryx, SQL, Power BI).',
      ],
      impact: 'Kompleksowo przeprojektowałam procesy FP&amp;A i Performance Management: zdiagnozowałam manualne kroki, wdrożyłam przepływy ETL i dashboardy zastępujące kopiowanie z Excela, przygotowałam dokumentację i szkolenia.',
    },
    {
      title: 'Analityk Finansowy w HSBC',
      meta: 'Alten Polska Sp. z o.o. · Kraków / Zdalnie',
      period: 'lip 2022 - kwi 2024',
      bullets: [
        'Integracja danych z <b>3 systemów źródłowych</b> (Clarity, GPDM, Cognos) za pomocą Power Query i SQL, eliminacja manualnego konsolidowania raportów.',
        'Mapowanie procesów finansowych zespołu <b>5 analityków</b>: identyfikacja nieefektywności, projektowanie usprawnionych przepływów raportowych.',
        'Projektowanie raportów i dashboardów BI w SQL, Power Query, Power BI i Cognos; harmonizacja standardów raportowania z Central Finance Controlling.',
      ],
      impact: 'Zaudytowałam pracę zespołu 5 analityków, zdiagnozowałam fragmentację procesów i zbudowałam zintegrowane przepływy wieloźródłowe; dokumentacja i szkolenia pozwoliły przejść od manualnej konsolidacji do samodzielnej pracy z danymi.',
    },
    {
      title: 'Deweloper Smartsheet',
      meta: 'Zimmer Biomet Polska · Global Business Support · Warszawa',
      period: 'cze 2021 - cze 2022',
      bullets: [
        'Raportowanie postępu <b>procesu Global Transition</b> dla <b>14 departamentów</b>: dashboardy, definicje KPI, struktura semantyczna.',
        'Budowa aplikacji <b>Continuous Improvement</b> w PowerApps do gromadzenia nowych rozwiązań i usprawnień procesowych.',
        'Szkolenia narzędziowe dla globalnych użytkowników i deweloperów Smartsheet; promowanie standardów raportowania.',
      ],
      impact: 'Zaprojektowałam i wdrożyłam aplikację Continuous Improvement w PowerApps, która zastąpiła rozproszone arkusze Excel jako pojedyncze źródło zgłaszania usprawnień procesowych dla 14 departamentów. Iteracyjny rozwój, komunikacja zmiany i szkolenia użytkowników (Smartsheet, PowerApps).',
    },
    {
      title: 'Programista BI i Kierownik Projektu',
      meta: 'ISS Facility Services · Project Management · Warszawa',
      period: 'wrz 2018 - maj 2021',
      bullets: [
        'Projekt <b>Novatorium</b>, prowadzony samodzielnie: obieg pomysłów innowacyjnych w Power Automate, PowerApps, Power BI i SharePoint.',
        'Kompleksowa automatyzacja obiegu faktur dla globalnego klienta z sektora bankowego: Power Automate, SharePoint, Excel.',
        'Audyty wewnętrzne i przeglądy ryzyk; raporty dla Zarządu w Power BI i SharePoint; zarządzanie zespołami międzyfunkcyjnymi <b>4-15 osób</b>.',
      ],
      impact: 'Prowadziłam <b>projekt naprawczy</b> usprawnienia obiegu faktur: zdiagnozowałam manualne punkty styku, zaprojektowałam i wdrożyłam zautomatyzowany proces, utworzyłam dokumentację i przeszkoliłam zespół wewnętrzny oraz klienta. Równolegle odpowiadałam za projekt Novatorium prowadzony samodzielnie od zera.',
    },
    {
      title: 'Młodszy Kierownik Projektu',
      meta: 'Jeronimo Martins (Lizbona i Warszawa) · Robert Bosch (Warszawa) · Management Trainee',
      period: 'lut 2016 - sie 2018',
      bullets: [
        'Międzynarodowe doświadczenie projektowe w <b>Portugalii i Polsce</b>: Employer Branding, Store Excellence, logistyka.',
      ],
      impact: '',
    },
  ],
  education: [
    { yr: '2020-2021', deg: 'Studia podyplomowe · Menedżer Jakości', inst: 'Szkoła Główna Handlowa (SGH)<br><em>Lean Management · Six Sigma · Kaizen</em>' },
    { yr: '2012-2017', deg: 'Magister · Psychologia Kliniczna', inst: 'Uniwersytet SWPS' },
    { yr: '2012-2016', deg: 'Inżynier · Zarządzanie i Inżynieria Produkcji', inst: 'Politechnika Warszawska' },
    { yr: '2009-2010', deg: 'Rotary Youth Exchange · Brazylia', inst: 'Liceum ANGLO, Penápolis' },
  ],
  certs: [
    { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
    { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
    { name: 'Six Sigma w zarządzaniu jakością', org: 'SGH', yr: '2020' },
    { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
    { name: 'Project Management', org: 'INCODO', yr: '2016' },
  ],
  method: ['Audyt procesów (Lean / Six Sigma)', 'Eliminacja pracy manualnej', 'Pipeline\'y ETL od podstaw', 'Dokumentacja procesów', 'Szkolenia i adopcja'],
  toolbox: {
    etl: { title: 'ETL i Pipeline\'y', items: 'Alteryx · Power Query (M) · SQL · Konsolidacja wieloźródłowa · Integracja API' },
    bi: { title: 'BI i Raportowanie', items: 'Power BI · DAX (zaawansowany) · Dashboardy · Modelowanie · Excel Power Pivot' },
    automation: { title: 'Power Platform', items: 'Power Automate · PowerApps · obiegi SharePoint · Smartsheet' },
    audit: { title: 'Audyt i Procesy', items: 'Lean · Six Sigma · Kaizen · Audyty wewnętrzne · RAID · Diagnostyka' },
    ai: { title: 'AI i Nowoczesne', items: 'Claude Code · Prompt Engineering' },
    tools: { title: 'Narzędzia', items: 'Jira · Confluence · SharePoint · Excel · MS Project' },
  },
  gdpr: GDPR_PL,
  nameContinued: 'Adriana Guściora, <em>cd.</em>',
};

const offer = {
  fileName: 'AG_Data_Process_Specialist_PL.pdf',
  lang: 'pl',
  title: 'Specjalista ds. Procesów Danych · Automatyzacja &amp; ETL',
  summary: 'Analityczka z <strong>8+ latami</strong> doświadczenia w audycie procesów danych, projektowaniu przepływów ETL i eliminowaniu pracy manualnej (HSBC, Trustwave, ISS, Zimmer Biomet). Praktyk Lean / Six Sigma (Studia Podyplomowe SGH); diagnozuję wąskie gardła, projektuję zautomatyzowane przepływy w Alteryx, Power Query i SQL, integruję dane z wielu źródeł (Clarity, GPDM, Cognos, Excel, SharePoint) i buduję dashboardy Power BI. Specjalność: <strong>porządkowanie zaniedbanych procesów</strong>, samodzielnie prowadzone projekty (Novatorium w ISS, Continuous Improvement w Zimmer). SQL Advanced, Business Analytics w Power BI, PRINCE2 Foundation.',
  skillOrder: ['etl', 'bi', 'automation', 'audit', 'ai', 'tools'],
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

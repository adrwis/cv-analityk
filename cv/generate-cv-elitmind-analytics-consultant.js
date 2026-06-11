// Tailored CV (EN) - Data & Business Analytics Consultant, Controlling (Elitmind).
// Focus: Business/System Analysis on Data & Analytics projects, controlling/finance projects,
// translating business needs into technical requirements, data flows & business-process diagrams,
// data modeling, Power BI/Excel, stakeholder consulting. Native Polish + fluent English.
// Truthful: NO Python / Databricks / RLS / star-schema-DWH / VBA (not claimed).
// Typography: Fraunces (display) + IBM Plex Sans (body).

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const sharp = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const photoPath = path.resolve(__dirname, '..', 'ada2.jpg');
let photoDataUrl = '';

const GDPR_EN = 'I hereby give consent for my personal data included in this document to be processed for the purposes of recruitment, in accordance with the Personal Data Protection Act of 10 May 2018 (Journal of Laws of 2018, item 1000) and the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 (GDPR).';

const data = {
  name: 'Adriana Guściora',
  email: 'Gusciora.Ada@gmail.com',
  linkedin: 'linkedin.com/in/adriana-gu',
  location: 'Remote · Poland / Europe',
  sectionLabels: {
    profile: 'Profile',
    experience: 'Professional Experience',
    continued: 'continued',
    toolbox: 'Toolbox',
    contact: 'Contact',
    coreSkills: 'Core Skills',
    languages: 'Languages',
    education: 'Education',
    certifications: 'Certifications',
    method: 'Approach',
  },
  sidebarSkills: [
    { name: 'Business & System Analysis', lvl: 'Expert', pct: 90 },
    { name: 'Requirements to Technical Spec', lvl: 'Expert', pct: 90 },
    { name: 'Data Modeling & Data Flows', lvl: 'Advanced', pct: 88 },
    { name: 'Power BI · DAX', lvl: 'Expert', pct: 90 },
    { name: 'Advanced SQL', lvl: 'Advanced', pct: 88 },
    { name: 'Controlling & Finance Reporting', lvl: 'Advanced', pct: 86 },
    { name: 'Stakeholder · Consulting', lvl: 'Expert', pct: 88 },
  ],
  languages: [
    { lang: 'Polish', lvl: 'Native' },
    { lang: 'English', lvl: 'Fluent (C1)' },
    { lang: 'Portuguese', lvl: 'CELPE-BRAS' },
    { lang: 'Italian', lvl: 'Basic' },
  ],
  stats: [
    { num: '8+', lbl: 'Years Data<br>& Analysis' },
    { num: '$15M', lbl: 'Cost Pool<br>Controlled (HSBC)' },
    { num: '3', lbl: 'Enterprise Sources<br>Integrated (HSBC)' },
    { num: '14', lbl: 'Departments<br>Mapped (Zimmer)' },
  ],
  jobs: [
    {
      title: 'Senior Analyst · BI and Performance Management',
      meta: 'Trustwave Sp. z o.o. · Cybersecurity · Warsaw / Remote',
      period: 'Oct 2024 - Mar 2026',
      bullets: [
        'Acted as the <b>analyst between Finance and the business</b>: gathered requirements from the CFO and Directors and translated them into <b>clear metric definitions, data flows and report specifications</b>.',
        'Designed and built reporting on top of <b>SQL, advanced Excel / Power Query (M) and Power BI (DAX)</b>: financial and KPI dashboards used daily at C-level.',
        'Documented logic, definitions and acceptance criteria; owned <b>data validation and quality</b> to keep the controlling numbers trustworthy.',
        'Trained business users on self-service analytics, acting as an internal <b>consultant</b> for data and reporting questions.',
      ],
      impact: 'Replaced fragmented Excel reports with a single, validated controlling layer adopted directly at C-level.',
    },
    {
      title: 'Business / Data Analyst at HSBC',
      meta: 'Alten Polska Sp. z o.o. · Banking · Krakow / Remote',
      period: 'Jul 2022 - Apr 2024',
      bullets: [
        'Ran <b>requirements and data-flow analysis</b> across <b>3 enterprise sources</b> (Clarity, GPDM, Cognos) and modeled them into a <b>single source of truth</b> for a 5-analyst team using SQL, Power Query and DAX.',
        'Owned the <b>controlling view of a $15M people-cost pool and ~40 IT projects</b>: budget vs actuals, drivers, trends and outliers surfaced for finance stakeholders.',
        'Produced <b>documentation, data definitions and training</b> that moved the team to self-service, consultative reporting.',
      ],
      impact: "Consolidated five analysts' inputs into integrated, reusable models that cut manual reporting work.",
    },
    {
      title: 'System Analyst / Smartsheet & PowerApps Developer',
      meta: 'Zimmer Biomet Polska · Medical Devices · Warsaw',
      period: 'Jun 2021 - Jun 2022',
      bullets: [
        'Mapped <b>business processes and data flows across 14 departments</b> for a Global Transition: shared data definitions, KPI dashboards and structured data governance.',
        'Translated business needs into <b>technical solutions</b>: built a Continuous Improvement PowerApps app with SharePoint integration and validated data across global teams.',
        'Onboarded and trained global users and developers; set tooling and data-quality standards as the analytical point of contact.',
      ],
      impact: 'Replaced scattered spreadsheets with a single source of truth and clear process maps across 14 departments.',
    },
    {
      title: 'BI / Data Analyst · Controlling support',
      meta: 'ISS Facility Services · Project Management · Warsaw',
      period: 'Sep 2018 - May 2021',
      bullets: [
        '<b>Cost budgeting, forecasting and reconciliation</b> for a regulated <b>pharmaceutical client</b>: controlling reporting, variance analysis and internal audits; managed teams of 4-15.',
        'Built <b>Power BI</b> and SharePoint dashboards for the <b>Board</b>: operational and cost KPIs across service lines.',
        '<b>Analyzed and automated</b> invoice-flow data for a global banking client (Power Automate + SharePoint + Power BI), removing manual steps and improving data accuracy.',
      ],
      impact: 'Service-budget forecasting and invoice-flow automation removed recurring manual effort.',
    },
    {
      title: 'Junior Project Manager',
      meta: 'Jeronimo Martins (Lisbon and Warsaw) · Robert Bosch (Warsaw) · Management Trainee',
      period: 'Feb 2016 - Aug 2018',
      bullets: [
        'International project experience in <b>Portugal and Poland</b>: Employer Branding, Store Excellence, Customer Service and logistics.',
      ],
      impact: '',
    },
  ],
  education: [
    { yr: '2020-2021', deg: 'Postgraduate Studies · Quality Manager', inst: 'Warsaw School of Economics (SGH)<br><em>Lean Management · Six Sigma · Kaizen</em>' },
    { yr: '2012-2017', deg: "Master's · Clinical Psychology", inst: 'SWPS University<br><em>behavioral profiling, statistics, research methodology</em>' },
    { yr: '2012-2016', deg: 'Engineering · Management and Production Engineering', inst: 'Warsaw University of Technology' },
    { yr: '2009-2010', deg: 'Rotary Youth Exchange · Brazil', inst: 'ANGLO High School, Penápolis' },
  ],
  certs: [
    { name: 'Using AI in Business Development', org: 'Google / SGH', yr: '2026' },
    { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
    { name: 'SQL Basics & Intermediate', org: 'LabMasters', yr: '2023' },
    { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
    { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
    { name: 'Six Sigma in Quality Management', org: 'SGH', yr: '2020' },
    { name: 'User Experience I + II', org: 'SWPS University', yr: '2017' },
  ],
  method: [
    'Listen, then map the process',
    'Requirements to clear spec',
    'Validated, documented data',
    'Controlling numbers you can trust',
    'Self-service enablement',
    'Consultative stakeholder work',
  ],
  toolbox: {
    analysis: { title: 'Business & System Analysis', items: 'requirements gathering and elicitation · translating business needs into technical specs · acceptance criteria · stakeholder workshops · UAT support · consulting mindset' },
    process: { title: 'Process & Data Flows', items: 'business-process mapping · data-flow analysis · source-to-report logic · process diagrams · data governance and definitions · documentation' },
    controlling: { title: 'Controlling & Finance', items: 'budget vs actuals · forecasting and reconciliation · cost-pool and project controlling · variance analysis · finance reporting for senior stakeholders' },
    modeling: { title: 'Data Modeling & SQL', items: 'advanced SQL (certified) · multi-source joins and queries · data models from multiple sources · Power Query (M) · data validation and quality' },
    reporting: { title: 'Power BI & Reporting', items: 'Power BI dashboards and scorecards · DAX measures · KPI, trend and variance reporting · self-service reporting and training' },
    domain: { title: 'Tools & Background', items: 'SQL · Power BI · Power Query (M) · Alteryx · Cognos · SharePoint · PowerApps · Power Automate · PRINCE2 · Lean / Six Sigma · psychology (statistics, research methodology)' },
  },
  gdpr: GDPR_EN,
  nameContinued: 'Adriana Guściora, <em>cont.</em>',
};

const offer = {
  fileName: 'AG_Elitmind_Analytics_Consultant.pdf',
  lang: 'en',
  title: 'Data & Business Analytics Consultant · Controlling',
  summary: 'Business and data analyst with <strong>8+ years on Data, Analytics and controlling projects</strong> across banking, cybersecurity, medical devices and facilities (HSBC, Trustwave, Zimmer Biomet, ISS). I sit between business and technology: I <strong>gather requirements, map business processes and data flows, and translate business needs into clear technical specifications and metric definitions</strong>. With <strong>advanced SQL, expert Excel / Power Query and Power BI (DAX)</strong> I model multi-source data and build the controlling and KPI reporting that finance and senior stakeholders rely on, backed by rigorous <strong>data validation, documentation and governance</strong>. I work in a <strong>consultative way</strong>, diagnosing client needs and enabling self-service. <strong>Native Polish</strong> and fluent English; comfortable in dynamic, shifting-priority environments.',
  skillOrder: ['analysis', 'process', 'controlling', 'modeling', 'reporting', 'domain'],
};

const CSS = `
  :root{
    --navy: oklch(0.28 0.06 258);
    --navy-deep: oklch(0.21 0.06 258);
    --navy-soft: oklch(0.42 0.05 258);
    --gold: oklch(0.74 0.12 80);
    --gold-deep: oklch(0.60 0.13 72);
    --gold-soft: oklch(0.93 0.05 85);
    --ink: oklch(0.20 0.02 260);
    --ink-soft: oklch(0.34 0.015 260);
    --ink-mute: oklch(0.50 0.012 260);
    --rule: oklch(0.84 0.01 260);
    --rule-soft: oklch(0.91 0.008 260);
    --paper: oklch(0.992 0.003 85);
    --side-text: oklch(0.95 0.01 240);
    --side-mute: oklch(0.86 0.012 240);
    --font-display: "Fraunces", Georgia, "Times New Roman", serif;
    --font-body: "IBM Plex Sans", -apple-system, "Segoe UI", Helvetica, sans-serif;
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:oklch(0.90 0.01 260);color:var(--ink);font-family:var(--font-body);-webkit-font-smoothing:antialiased;}
  body{padding:32px 16px;display:flex;flex-direction:column;align-items:center;gap:24px;}

  .page{
    width: 794px; height: 1123px;
    background: var(--paper); color: var(--ink);
    box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 24px 60px -20px rgba(20,30,60,.18);
    position: relative; overflow: hidden;
    display: grid; grid-template-columns: 250px 1fr;
  }

  .side{ background: var(--navy); color: var(--side-text); padding: 40px 28px 40px 34px; font-size: 8.4pt; line-height: 1.45; position: relative; }
  .side::before{ content:""; position:absolute; top:0; left:0; right:0; height: 4px; background: var(--gold); }

  .photo{ width: 138px; height: 138px; border-radius: 50%; background: oklch(0.45 0.04 258); margin: 4px auto 18px auto; border: 3px solid var(--gold); box-shadow: 0 0 0 5px oklch(0.32 0.06 258); position: relative; overflow: hidden; }
  .photo img{ width: 100%; height: 100%; object-fit: cover; display: block; }

  .side h3{ font-family:var(--font-body); font-weight: 600; font-size: 8.4pt; text-transform: uppercase; letter-spacing: 0.14em; color: var(--gold); margin: 0 0 9px 0; padding-bottom: 7px; border-bottom: 1px solid oklch(0.45 0.05 258); position: relative; }
  .side h3::after{ content:""; position:absolute; left:0; bottom:-1px; width: 28px; height: 1px; background: var(--gold); }
  .side section{ margin-bottom: 18px; }
  .side section:last-child{ margin-bottom:0; }

  .contact-row{ display:grid; grid-template-columns: 14px 1fr; gap: 9px; align-items: start; padding: 4px 0; color: var(--side-text); font-size: 8.3pt; line-height: 1.4; word-break: break-word; }
  .contact-row a{ color:inherit; text-decoration:none; }
  .contact-row .ico{ color: var(--gold); font-size: 9.5pt; line-height: 1; margin-top: 1px; }

  .skill{ margin-bottom: 8px; }
  .skill-name{ font-size: 8.3pt; color: var(--side-text); margin-bottom: 4px; display:flex; justify-content: space-between; align-items: baseline; gap: 8px; font-weight: 400; }
  .skill-name b{ font-weight: 500; }
  .skill-name .lvl{ color: var(--gold); font-size: 7pt; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap; }
  .bar{ height: 3px; background: oklch(0.40 0.05 258); border-radius: 2px; overflow:hidden; position: relative; }
  .bar > span{ display:block; height: 100%; background: linear-gradient(90deg, var(--gold-deep), var(--gold)); }

  .lang-row{ display:grid; grid-template-columns: 1fr auto; gap: 8px; align-items: baseline; padding: 4px 0; border-bottom: 1px dotted oklch(0.45 0.05 258); font-size: 8.6pt; color: var(--side-text); }
  .lang-row:last-child{ border-bottom:none; }
  .lang-row .lvl{ color: var(--gold); font-size: 7.2pt; letter-spacing: 0.06em; text-transform: uppercase; }

  .edu-side .edu-item{ margin-bottom: 11px; }
  .edu-side .edu-item:last-child{ margin-bottom:0; }
  .edu-side .yr{ font-size: 7pt; letter-spacing: 0.12em; color: var(--gold); text-transform: uppercase; font-weight: 600; margin-bottom: 2px; }
  .edu-side .deg{ font-family:var(--font-display); font-size: 10.5pt; font-weight: 500; color: oklch(0.97 0.005 240); line-height: 1.2; margin-bottom: 2px; }
  .edu-side .inst{ font-size: 8pt; color: var(--side-mute); line-height: 1.35; }
  .edu-side .inst em{ color: oklch(0.80 0.012 240); }

  .cert-side .item{ font-size: 8.2pt; color: var(--side-text); line-height: 1.35; margin-bottom: 6px; padding-left: 12px; position: relative; }
  .cert-side .item::before{ content:""; position:absolute; left:0; top: 0.5em; width:5px; height:5px; background: var(--gold); transform: rotate(45deg); }
  .cert-side .item b{ color: oklch(0.97 0.005 240); font-weight:500; }
  .cert-side .item .yr{ color: var(--gold); font-weight:600; font-size: 7.2pt; letter-spacing: 0.06em; margin-left: 4px; }

  .main{ padding: 36px 40px 52px 40px; color: var(--ink); font-size: 9.2pt; line-height: 1.45; overflow: hidden; }

  .name-block{ margin-bottom: 11px; }
  .name{ font-family:var(--font-display); font-weight: 500; font-size: 30pt; line-height: 1.02; letter-spacing: -0.01em; color: var(--navy-deep); margin: 0; }
  .name .last{ font-style: italic; color: var(--navy); font-weight: 500; }
  .role-line{ display:flex; align-items:center; gap: 12px; margin-top: 9px; padding-top: 9px; border-top: 1px solid var(--rule); }
  .role-line::before{ content:""; width: 28px; height: 2px; background: var(--gold); display:block; }
  .role{ font-family:var(--font-body); font-weight: 600; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.12em; color: var(--navy); }

  .main h2{ font-family:var(--font-body); font-weight: 600; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.14em; color: var(--navy); margin: 13px 0 8px 0; padding-bottom: 5px; position: relative; display:flex; align-items:center; gap: 10px; }
  .main h2::after{ content:""; flex: 1; height: 1px; background: var(--rule); }
  .main h2 .ico{ width: 15px; height: 15px; display:inline-flex; align-items:center; justify-content:center; color: var(--gold-deep); font-size: 11pt; line-height: 1; }

  .profile{ font-size: 9.1pt; line-height: 1.46; color: var(--ink); margin: 0; }
  .profile strong{ color: var(--navy-deep); font-weight: 600; }

  .job{ margin-bottom: 10px; page-break-inside: avoid; break-inside: avoid; }
  .job:last-child{ margin-bottom: 0; }
  .job-head{ display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 14px; margin-bottom: 3px; }
  .job-title{ font-family:var(--font-display); font-weight: 600; font-size: 11.8pt; color: var(--navy-deep); line-height: 1.2; letter-spacing: -0.005em; padding-right: 2px; }
  .job-date{ font-family:var(--font-body); font-size: 7.2pt; letter-spacing: 0.1em; color: var(--gold-deep); white-space: nowrap; text-transform: uppercase; font-weight: 600; }
  .job-meta{ font-size: 8.4pt; color: var(--ink-soft); margin-top: 2px; margin-bottom: 4px; font-style: italic; font-family:var(--font-body); font-weight: 400; letter-spacing: 0.005em; }
  .job ul{ margin: 3px 0 0 0; padding: 0; list-style: none; }
  .job li{ position: relative; padding-left: 14px; margin-bottom: 2px; color: var(--ink); font-size: 8.8pt; line-height: 1.4; }
  .job li::before{ content: ""; position: absolute; left: 0; top: 0.5em; width: 4.5px; height: 4.5px; border: 1.5px solid var(--gold-deep); border-radius: 50%; background: transparent; }
  .job li b{ font-weight: 600; color: var(--navy-deep); }

  .impact{ margin-top: 5px; padding: 5px 9px; background: var(--gold-soft); border-left: 3px solid var(--gold); font-size: 7.8pt; line-height: 1.36; color: var(--ink-soft); }
  .impact .tag{ display: inline; font-family:var(--font-body); font-size: 6.4pt; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-deep); margin-right: 4px; font-weight: 700; }
  .impact b{ font-weight: 600; color: var(--navy-deep); }

  .pgnum{ position: absolute; bottom: 16px; right: 34px; font-family:var(--font-body); font-size: 7.2pt; letter-spacing: 0.16em; color: var(--ink-mute); text-transform: uppercase; }
  .pgnum b{ color: var(--navy); font-weight: 600; }

  .gdpr{ margin-top: 11px; padding-top: 8px; border-top: 1px solid var(--rule-soft); font-size: 6.6pt; color: var(--ink-mute); line-height: 1.45; letter-spacing: 0.005em; font-family:var(--font-body); }

  .page2 .side{ padding-top: 34px; }
  .page2 .main{ padding-top: 34px; }
  .page2-name{ font-family:var(--font-display); font-style: italic; font-size: 13pt; color: var(--navy); margin: 0 0 4px 0; }
  .page2-tag{ font-size: 7.2pt; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-deep); font-weight: 600; margin-bottom: 12px; padding-bottom: 7px; border-bottom: 1px solid var(--rule); }

  .tools-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 9px 14px; margin-top: 4px; }
  .tool-cat h4{ font-family:var(--font-body); font-weight: 600; font-size: 7.2pt; letter-spacing: 0.12em; text-transform: uppercase; color: var(--navy); margin: 0 0 3px 0; }
  .tool-cat p{ font-size: 8pt; color: var(--ink-soft); margin: 0; line-height: 1.36; }

  .stat-row{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-top: 4px; margin-bottom: 5px; }
  .stat{ text-align: center; padding: 6px 4px; background: oklch(0.97 0.008 250); border-top: 2px solid var(--gold); }
  .stat .num{ font-family:var(--font-display); font-size: 16pt; font-weight: 600; color: var(--navy-deep); line-height: 1; }
  .stat .lbl{ margin-top: 2px; font-size: 6.6pt; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-mute); line-height: 1.3; }

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
<title>${data.name}, ${offer.title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
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
  <div class="pgnum"><b>01</b> / 02</div>
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

    <h2><span class="ico">&#9612;</span>${lbl.experience} <span style="font-family:var(--font-display);font-style:italic;text-transform:none;letter-spacing:0;color:var(--ink-mute);font-size:9.5pt;font-weight:400;margin-left:6px">${lbl.continued}</span></h2>

    ${renderJobs(data.jobs.slice(2))}

    <h2><span class="ico">&#9612;</span>${lbl.toolbox}</h2>
    <div class="tools-grid">${renderToolbox(data.toolbox, offer.skillOrder)}</div>

    <p class="gdpr">${data.gdpr}</p>
  </main>
  <div class="pgnum"><b>02</b> / 02</div>
</div>

</body>
</html>`;
}

(async () => {
  const photoBuffer = await sharp(photoPath)
    .resize(300, 300, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 78 })
    .toBuffer();
  photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(buildHTML(), { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  if (process.env.SHOT) {
    await page.screenshot({ path: path.join(outputDir, '_fit_check.png'), fullPage: true });
  }
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
  const stat = fs.statSync(pdfPath);
  console.log(`Generated: ${offer.fileName} (${(stat.size/1024).toFixed(1)} KB)`);
})();

// Tailored CV (EN) - Data Systems Analyst (remote, 12-18mo FTC).
// Focus: data quality & validation, data integration across multi-system estates, SQL, reporting/dashboards on
// data health & compliance, stakeholder work across IT & Finance, internal audit support, regulated-environment
// data handling. Honest framing: no Visio/GDPR-cert overclaim; transferable data-quality/integration narrative.
// Typography refresh: Fraunces (display) + IBM Plex Sans (body) for legibility (reviewer feedback).

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
  location: 'Remote · Europe',
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
    { name: 'Data Quality · Validation', lvl: 'Advanced', pct: 90 },
    { name: 'SQL · Data Interrogation', lvl: 'Advanced', pct: 88 },
    { name: 'Data Integration · Multi-source', lvl: 'Advanced', pct: 90 },
    { name: 'Reporting · Dashboards', lvl: 'Expert', pct: 92 },
    { name: 'Stakeholder (IT + Finance)', lvl: 'Advanced', pct: 88 },
    { name: 'Audit · Compliance Support', lvl: 'Advanced', pct: 80 },
    { name: 'Process Automation', lvl: 'Advanced', pct: 80 },
  ],
  languages: [
    { lang: 'Polish', lvl: 'Native' },
    { lang: 'English', lvl: 'Fluent (C1)' },
    { lang: 'Portuguese', lvl: 'CELPE-BRAS' },
    { lang: 'Italian', lvl: 'Basic' },
  ],
  stats: [
    { num: '8+', lbl: 'Years Data<br>& Systems' },
    { num: '3', lbl: 'Sources Unified<br>(HSBC)' },
    { num: '14', lbl: 'Departments<br>Governed' },
    { num: '5+', lbl: 'Years<br>Reporting & BI' },
  ],
  jobs: [
    {
      title: 'Senior Analyst · BI and Performance Management',
      meta: 'Trustwave Sp. z o.o. · Cybersecurity · Warsaw / Remote',
      period: 'Oct 2024 - Mar 2026',
      bullets: [
        'Connected and transformed data from <b>multiple systems</b> with <b>SQL, Power Query (M) and Alteryx</b>; optimised refresh cycles for timely, consistent reporting.',
        'Designed <b>KPI definitions, data models and acceptance criteria</b>; documented metric logic to keep outputs accurate and auditable.',
        'Proactively <b>flagged data-quality issues</b> and inconsistencies across sources; ran training on Power BI and self-service analytics.',
        'Delivered <b>dashboards and scorecards</b> for the CFO and Financial Directors on KPIs and data health.',
      ],
      impact: 'Replaced fragmented Excel reports with a governed semantic layer and one consistent, validated set of KPIs.',
    },
    {
      title: 'BI Developer at HSBC',
      meta: 'Alten Polska Sp. z o.o. · Banking · Krakow / Remote',
      period: 'Jul 2022 - Apr 2024',
      bullets: [
        'Built a <b>single source of truth</b> for a 5-analyst team by integrating <b>3 enterprise data sources</b> (Clarity, GPDM, Cognos) into one model with <b>SQL, Power Query and DAX</b>.',
        'Traced and resolved <b>data breaks and inconsistencies</b> across systems, working with IT architecture and data-platform teams.',
        'Delivered reporting on <b>cost allocation and data health</b> across a $15M pool and ~40 IT projects; enabled self-service through documentation and training.',
      ],
      impact: "Consolidated five analysts' fragmented inputs into integrated, reusable, validated data models.",
    },
    {
      title: 'Smartsheet Developer · PowerApps',
      meta: 'Zimmer Biomet Polska · Medical Devices · Warsaw',
      period: 'Jun 2021 - Jun 2022',
      bullets: [
        '<b>Global Transition</b> reporting across <b>14 departments</b> with shared definitions and <b>structured data governance</b>.',
        'Built a <b>Continuous Improvement</b> PowerApps app with SharePoint integration and workflow automation.',
        'Trained global teams and Smartsheet developers; managed tooling rollout across regions.',
      ],
      impact: 'Single governed source of truth for process data across 14 departments.',
    },
    {
      title: 'BI Developer / Analyst · Facility Manager',
      meta: 'ISS Facility Services · Project Management · Warsaw',
      period: 'Sep 2018 - May 2021',
      bullets: [
        '<b>Power BI</b> and SharePoint dashboards for the <b>Board</b>: business and operational KPIs and data health across service lines.',
        'Cost budgeting, forecasting and <b>financial reconciliation</b> for a <b>pharmaceutical client</b> in a regulated environment.',
        '<b>Automated</b> reconciliation and the invoice flow for a global banking client (Power Automate + SharePoint + Power BI).',
        'Managed teams of 4-15 people and <b>internal audits</b>; ran the <b>Novatorium</b> innovation project on the Power Platform.',
      ],
      impact: 'Automated reconciliation and invoice flows removed recurring manual effort and reduced error.',
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
    { name: 'Business Analytics in Power BI', org: 'LabMasters', yr: '2022' },
    { name: 'SQL Advanced', org: 'LabMasters', yr: '2025' },
    { name: 'SQL Basics & Intermediate', org: 'LabMasters', yr: '2023' },
    { name: 'PRINCE2 Foundation', org: 'AXELOS', yr: '2020' },
    { name: 'Six Sigma in Quality Management', org: 'SGH', yr: '2020' },
    { name: 'User Experience I + II', org: 'SWPS University', yr: '2017' },
  ],
  method: [
    'Data quality and validation',
    'Single source of truth',
    'SQL and data interrogation',
    'Audit and compliance support',
    'Process automation',
    'Stakeholder storytelling',
  ],
  toolbox: {
    quality: { title: 'Data Quality & Validation', items: 'validation rules and checks · monitoring data health · tracing breaks and inconsistencies across systems · metric logic and acceptance criteria' },
    integration: { title: 'Data Integration & SQL', items: 'consolidating multiple enterprise systems into a single source of truth (Clarity, GPDM, Cognos, SharePoint, ERP) · SQL (Advanced) · Power Query (M) · Alteryx' },
    reporting: { title: 'Reporting & Dashboards', items: 'Power BI dashboards on data health, KPIs and compliance status · executive and Board reporting · documentation of data flows' },
    compliance: { title: 'Compliance & Audit', items: 'regulated environments (banking, pharma, cybersecurity) · sensitive personal and financial data under data-protection controls · internal audit support' },
    stakeholder: { title: 'Stakeholder & Process', items: 'cross-functional work with IT architecture, data-platform and Finance teams · process improvement · automated reconciliation and invoice flows' },
    domain: { title: 'Tools & Background', items: 'Power BI · SQL · Power Automate · SharePoint · PowerApps · engineering and clinical-psychology background · self-directed' },
  },
  gdpr: GDPR_EN,
  nameContinued: 'Adriana Guściora, <em>cont.</em>',
};

const offer = {
  fileName: 'AG_Data_Systems_Analyst.pdf',
  lang: 'en',
  title: 'Data Systems Analyst · Data Quality & Governance',
  summary: 'Data and systems analyst with <strong>8+ years</strong> making business data accurate, consistent and trustworthy across <strong>multi-system environments</strong> (HSBC, Trustwave, Zimmer Biomet, ISS). I <strong>integrate data across multiple enterprise systems</strong> into a single source of truth (at HSBC: Clarity, GPDM and Cognos), design <strong>data-quality checks and validation</strong>, and trace <strong>breaks and inconsistencies</strong> as data moves between systems, working with IT and data-platform teams to resolve them. I write and interpret <strong>SQL (Advanced)</strong> to interrogate data, document <strong>data flows, metric logic and acceptance criteria</strong>, and build <strong>reporting and dashboards on data health and KPIs</strong> for senior stakeholders and the Board. I have worked in <strong>regulated environments</strong> (banking, pharma, cybersecurity), handling sensitive personal and financial data under <strong>data-protection and compliance controls</strong>, and have supported <strong>internal audits</strong>. Self-directed and comfortable operating without a pre-built framework.',
  skillOrder: ['quality', 'integration', 'reporting', 'compliance', 'stakeholder', 'domain'],
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

  .side{ background: var(--navy); color: var(--side-text); padding: 44px 30px 44px 38px; font-size: 9pt; line-height: 1.5; position: relative; }
  .side::before{ content:""; position:absolute; top:0; left:0; right:0; height: 4px; background: var(--gold); }

  .photo{ width: 150px; height: 150px; border-radius: 50%; background: oklch(0.45 0.04 258); margin: 6px auto 22px auto; border: 3px solid var(--gold); box-shadow: 0 0 0 6px oklch(0.32 0.06 258); position: relative; overflow: hidden; }
  .photo img{ width: 100%; height: 100%; object-fit: cover; display: block; }

  .side h3{ font-family:var(--font-body); font-weight: 600; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.16em; color: var(--gold); margin: 0 0 11px 0; padding-bottom: 8px; border-bottom: 1px solid oklch(0.45 0.05 258); position: relative; }
  .side h3::after{ content:""; position:absolute; left:0; bottom:-1px; width: 28px; height: 1px; background: var(--gold); }
  .side section{ margin-bottom: 22px; }
  .side section:last-child{ margin-bottom:0; }

  .contact-row{ display:grid; grid-template-columns: 14px 1fr; gap: 10px; align-items: start; padding: 5px 0; color: var(--side-text); font-size: 9pt; line-height: 1.45; word-break: break-word; }
  .contact-row a{ color:inherit; text-decoration:none; }
  .contact-row .ico{ color: var(--gold); font-size: 10pt; line-height: 1; margin-top: 1px; }

  .skill{ margin-bottom: 10px; }
  .skill-name{ font-size: 9pt; color: var(--side-text); margin-bottom: 5px; display:flex; justify-content: space-between; align-items: baseline; gap: 8px; font-weight: 400; }
  .skill-name b{ font-weight: 500; }
  .skill-name .lvl{ color: var(--gold); font-size: 7.4pt; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap; }
  .bar{ height: 4px; background: oklch(0.40 0.05 258); border-radius: 2px; overflow:hidden; position: relative; }
  .bar > span{ display:block; height: 100%; background: linear-gradient(90deg, var(--gold-deep), var(--gold)); }

  .lang-row{ display:grid; grid-template-columns: 1fr auto; gap: 8px; align-items: baseline; padding: 5px 0; border-bottom: 1px dotted oklch(0.45 0.05 258); font-size: 9.4pt; color: var(--side-text); }
  .lang-row:last-child{ border-bottom:none; }
  .lang-row .lvl{ color: var(--gold); font-size: 7.6pt; letter-spacing: 0.06em; text-transform: uppercase; }

  .edu-side .edu-item{ margin-bottom: 13px; }
  .edu-side .edu-item:last-child{ margin-bottom:0; }
  .edu-side .yr{ font-size: 7.4pt; letter-spacing: 0.12em; color: var(--gold); text-transform: uppercase; font-weight: 600; margin-bottom: 3px; }
  .edu-side .deg{ font-family:var(--font-display); font-size: 11.5pt; font-weight: 500; color: oklch(0.97 0.005 240); line-height: 1.2; margin-bottom: 2px; }
  .edu-side .inst{ font-size: 8.6pt; color: var(--side-mute); line-height: 1.4; }
  .edu-side .inst em{ color: oklch(0.80 0.012 240); }

  .cert-side .item{ font-size: 8.8pt; color: var(--side-text); line-height: 1.4; margin-bottom: 8px; padding-left: 12px; position: relative; }
  .cert-side .item::before{ content:""; position:absolute; left:0; top: 0.5em; width:5px; height:5px; background: var(--gold); transform: rotate(45deg); }
  .cert-side .item b{ color: oklch(0.97 0.005 240); font-weight:500; }
  .cert-side .item .yr{ color: var(--gold); font-weight:600; font-size: 7.6pt; letter-spacing: 0.06em; margin-left: 4px; }

  .main{ padding: 42px 44px 76px 42px; color: var(--ink); font-size: 10pt; line-height: 1.5; overflow: hidden; }

  .name-block{ margin-bottom: 14px; }
  .name{ font-family:var(--font-display); font-weight: 500; font-size: 34pt; line-height: 1.02; letter-spacing: -0.01em; color: var(--navy-deep); margin: 0; }
  .name .last{ font-style: italic; color: var(--navy); font-weight: 500; }
  .role-line{ display:flex; align-items:center; gap: 12px; margin-top: 11px; padding-top: 11px; border-top: 1px solid var(--rule); }
  .role-line::before{ content:""; width: 28px; height: 2px; background: var(--gold); display:block; }
  .role{ font-family:var(--font-body); font-weight: 600; font-size: 10pt; text-transform: uppercase; letter-spacing: 0.14em; color: var(--navy); }

  .main h2{ font-family:var(--font-body); font-weight: 600; font-size: 9.5pt; text-transform: uppercase; letter-spacing: 0.16em; color: var(--navy); margin: 18px 0 11px 0; padding-bottom: 6px; position: relative; display:flex; align-items:center; gap: 10px; }
  .main h2::after{ content:""; flex: 1; height: 1px; background: var(--rule); }
  .main h2 .ico{ width: 16px; height: 16px; display:inline-flex; align-items:center; justify-content:center; color: var(--gold-deep); font-size: 12pt; line-height: 1; }

  .profile{ font-size: 10pt; line-height: 1.55; color: var(--ink); margin: 0; }
  .profile strong{ color: var(--navy-deep); font-weight: 600; }

  .job{ margin-bottom: 13px; page-break-inside: avoid; break-inside: avoid; }
  .job:last-child{ margin-bottom: 0; }
  .job-head{ display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 14px; margin-bottom: 4px; }
  .job-title{ font-family:var(--font-display); font-weight: 600; font-size: 13pt; color: var(--navy-deep); line-height: 1.22; letter-spacing: -0.005em; padding-right: 2px; }
  .job-date{ font-family:var(--font-body); font-size: 7.6pt; letter-spacing: 0.1em; color: var(--gold-deep); white-space: nowrap; text-transform: uppercase; font-weight: 600; }
  .job-meta{ font-size: 9pt; color: var(--ink-soft); margin-top: 2px; margin-bottom: 5px; font-style: italic; font-family:var(--font-body); font-weight: 400; letter-spacing: 0.005em; }
  .job ul{ margin: 4px 0 0 0; padding: 0; list-style: none; }
  .job li{ position: relative; padding-left: 15px; margin-bottom: 3px; color: var(--ink); font-size: 9.5pt; line-height: 1.48; }
  .job li::before{ content: ""; position: absolute; left: 0; top: 0.5em; width: 5px; height: 5px; border: 1.5px solid var(--gold-deep); border-radius: 50%; background: transparent; }
  .job li b{ font-weight: 600; color: var(--navy-deep); }

  .impact{ margin-top: 6px; padding: 6px 10px; background: var(--gold-soft); border-left: 3px solid var(--gold); font-size: 8.4pt; line-height: 1.4; color: var(--ink-soft); }
  .impact .tag{ display: inline; font-family:var(--font-body); font-size: 6.6pt; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-deep); margin-right: 4px; font-weight: 700; }
  .impact b{ font-weight: 600; color: var(--navy-deep); }

  .pgnum{ position: absolute; bottom: 18px; right: 36px; font-family:var(--font-body); font-size: 7.6pt; letter-spacing: 0.16em; color: var(--ink-mute); text-transform: uppercase; }
  .pgnum b{ color: var(--navy); font-weight: 600; }

  .gdpr{ margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--rule-soft); font-size: 7pt; color: var(--ink-mute); line-height: 1.5; letter-spacing: 0.005em; font-family:var(--font-body); }

  .page2 .side{ padding-top: 38px; }
  .page2 .main{ padding-top: 38px; }
  .page2-name{ font-family:var(--font-display); font-style: italic; font-size: 15pt; color: var(--navy); margin: 0 0 4px 0; }
  .page2-tag{ font-size: 7.6pt; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-deep); font-weight: 600; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--rule); }

  .tools-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px 16px; margin-top: 4px; }
  .tool-cat h4{ font-family:var(--font-body); font-weight: 600; font-size: 7.6pt; letter-spacing: 0.12em; text-transform: uppercase; color: var(--navy); margin: 0 0 4px 0; }
  .tool-cat p{ font-size: 8.4pt; color: var(--ink-soft); margin: 0; line-height: 1.42; }

  .stat-row{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 4px; margin-bottom: 6px; }
  .stat{ text-align: center; padding: 7px 4px; background: oklch(0.97 0.008 250); border-top: 2px solid var(--gold); }
  .stat .num{ font-family:var(--font-display); font-size: 18pt; font-weight: 600; color: var(--navy-deep); line-height: 1; }
  .stat .lbl{ margin-top: 3px; font-size: 7pt; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-mute); line-height: 1.3; }

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

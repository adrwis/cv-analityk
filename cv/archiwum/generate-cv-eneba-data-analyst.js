// Tailored CV (EN) - Data Analyst (Eneba, embedded with Talent Acquisition / People Ops, remote).
// Focus: SQL + data modeling, dashboards/scorecards, multi-source single source of truth, hands-on AI adoption (Claude agents, scheduled tasks, automation), clinical-psychology background for people/talent analytics.

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
    { name: 'SQL · Data Modeling', lvl: 'Advanced', pct: 90 },
    { name: 'Dashboards · Scorecards', lvl: 'Expert', pct: 92 },
    { name: 'Multi-source Pipelines', lvl: 'Advanced', pct: 88 },
    { name: 'AI Tools · Claude Agents', lvl: 'Advanced', pct: 85 },
    { name: 'Stakeholder Storytelling', lvl: 'Expert', pct: 90 },
    { name: 'Behavioral / People Insight', lvl: 'Advanced', pct: 82 },
    { name: 'Process Automation', lvl: 'Advanced', pct: 80 },
  ],
  languages: [
    { lang: 'Polish', lvl: 'Native' },
    { lang: 'English', lvl: 'Fluent (C1)' },
    { lang: 'Portuguese', lvl: 'CELPE-BRAS' },
    { lang: 'Italian', lvl: 'Basic' },
  ],
  stats: [
    { num: '8+', lbl: 'Years Data<br>& Analytics' },
    { num: '5+', lbl: 'Years<br>Dashboards & BI' },
    { num: '3', lbl: 'Sources Unified<br>(HSBC)' },
    { num: '14', lbl: 'Departments<br>KPI Reporting' },
  ],
  jobs: [
    {
      title: 'Senior Analyst · BI and Performance Management',
      meta: 'Trustwave Sp. z o.o. · Cybersecurity · Warsaw / Remote',
      period: 'Oct 2024 - Mar 2026',
      bullets: [
        'Built and maintained <b>dashboards, scorecards and KPI reporting</b> for the CFO and Financial Directors: semantic models, <b>DAX measures</b>, drill-through and trend views leadership relied on daily.',
        'Connected and transformed data from multiple sources using <b>Power Query (M), Alteryx and SQL</b>; optimised refresh cycles to keep reporting timely and consistent.',
        'Translated ambiguous business questions into <b>clear KPI definitions, data models and insight</b>; documented metric logic and acceptance criteria.',
        'Proactively flagged data-quality issues and improvement opportunities; ran training on Power BI and <b>self-service analytics</b> for business users.',
      ],
      impact: 'Replaced fragmented Excel reports with a governed semantic layer and a single, consistent set of KPIs adopted directly at C-level.',
    },
    {
      title: 'BI Developer at HSBC',
      meta: 'Alten Polska Sp. z o.o. · Banking · Krakow / Remote',
      period: 'Jul 2022 - Apr 2024',
      bullets: [
        'Built a <b>single source of truth</b> for a 5-analyst team at global bank HSBC: integrated <b>3 enterprise data sources</b> (Clarity, GPDM, Cognos) into one unified data model with <b>SQL, Power Query and DAX</b>.',
        'Delivered dashboards for people-cost forecasting and allocation across a <b>$15M pool and ~40 IT projects</b>; surfaced trends and outliers for decision-makers.',
        'Partnered with IT architecture and data platform teams; documentation and user training enabled the shift to self-service reporting.',
      ],
      impact: 'Diagnosed fragmentation across 5 analysts and consolidated their inputs into integrated, reusable models that cut manual reporting work.',
    },
    {
      title: 'Smartsheet Developer · PowerApps',
      meta: 'Zimmer Biomet Polska · Medical Devices · Warsaw',
      period: 'Jun 2021 - Jun 2022',
      bullets: [
        'Reporting <b>Global Transition</b> progress across <b>14 departments</b>: KPI dashboards, shared definitions and structured data governance.',
        'Built a <b>Continuous Improvement</b> PowerApps app: process-improvement capture, SharePoint integration and workflow automation.',
        'Trained global teams and Smartsheet developers; managed tooling rollout across regions.',
      ],
      impact: 'Replaced scattered spreadsheets with a single PowerApps source of truth for process improvements across 14 departments.',
    },
    {
      title: 'BI Developer / Analyst · Facility Manager',
      meta: 'ISS Facility Services · Project Management · Warsaw',
      period: 'Sep 2018 - May 2021',
      bullets: [
        '<b>Power BI</b> and SharePoint dashboards for the <b>Board</b>: business and operational KPIs across multiple service lines.',
        'Cost budgeting, forecasting and financial reconciliation for a <b>pharmaceutical client</b> in a regulated environment.',
        '<b>Automated</b> the invoice flow for a global banking client with Power Automate + SharePoint + Power BI, replacing manual steps.',
        'Managed teams of 4-15 people and internal audits; ran the <b>Novatorium</b> innovation project on the Power Platform.',
      ],
      impact: 'Full invoice-flow automation for the banking client and service budget forecasting for the pharma client removed recurring manual effort.',
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
    'Single source of truth',
    'SQL and data modeling',
    'Dashboards and scorecards',
    'AI agents and automation',
    'Stakeholder storytelling',
    'Proactive insight',
  ],
  toolbox: {
    analytics: { title: 'Analytics & Dashboards', items: 'Power BI semantic models · scorecards · KPI design · funnel and trend analysis · executive reporting · self-service analytics · data visualisation' },
    sql: { title: 'SQL & Data Modeling', items: 'SQL Advanced (LabMasters 2025) · joins and transformations across multiple systems · Power BI data models · relationships and measures · query optimisation' },
    pipelines: { title: 'Data Pipelines & Integration', items: 'multi-source consolidation into a single source of truth (Clarity, GPDM, Cognos, SharePoint, Excel, ERP) · Alteryx · Power Query (M) · recurring reporting' },
    ai: { title: 'AI & Automation', items: 'daily hands-on use of LLM tools (Claude) · building AI agents, scheduled tasks and automation workflows in independent projects (job-market data pipeline, relational assistant chatbot, daily-content agent) · Power Automate' },
    comms: { title: 'Stakeholder & Insight', items: 'turning ambiguous requests into clear, business-friendly insight · stakeholder workshops · storytelling for leadership · proactive issue and opportunity spotting' },
    domain: { title: 'People & Behavioral', items: 'clinical psychology background (behavioral profiling, statistics, research methodology) · empathy and adaptability · cross-functional collaboration · fast ramp-up in new domains' },
  },
  gdpr: GDPR_EN,
  nameContinued: 'Adriana Guściora, <em>cont.</em>',
};

const offer = {
  fileName: 'AG_Eneba_Data_Analyst.pdf',
  lang: 'en',
  title: 'Data Analyst · Analytics & AI Automation',
  summary: 'Data analyst with <strong>8+ years in BI, reporting and analytics</strong> across international environments (HSBC, Trustwave, Zimmer Biomet, ISS). Strong <strong>SQL and data modeling</strong>: I connect, join and transform data from multiple systems into a <strong>single source of truth</strong>, then turn it into <strong>dashboards, scorecards and recurring reporting</strong> that leadership actually uses. <strong>Hands-on AI adopter</strong>: I use LLM tools (Claude) daily and build <strong>AI agents, scheduled tasks and automation pipelines</strong> in my own projects: a job-market data pipeline, a relational assistant chatbot and a daily-content agent. Comfortable with ambiguity and <strong>stakeholder storytelling</strong>, with a <strong>clinical psychology</strong> background (SWPS) that brings genuine affinity for people and talent analytics. Proactive about spotting bottlenecks and improvement opportunities, not just answering questions.',
  skillOrder: ['analytics', 'sql', 'pipelines', 'ai', 'comms', 'domain'],
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

  .impact{ margin-top: 5px; padding: 5px 9px; background: var(--gold-soft); border-left: 2px solid var(--gold); font-size: 7.8pt; line-height: 1.35; color: var(--ink-soft); }
  .impact .tag{ display: inline; font-family:"Inter", sans-serif; font-size: 6.4pt; letter-spacing: 0.20em; text-transform: uppercase; color: var(--gold-deep); margin-right: 4px; font-weight: 700; }
  .impact b{ font-weight: 600; color: var(--navy-deep); }

  .pgnum{ position: absolute; bottom: 18px; right: 36px; font-family:"Inter", sans-serif; font-size: 7.5pt; letter-spacing: 0.18em; color: var(--ink-mute); text-transform: uppercase; }
  .pgnum b{ color: var(--navy); font-weight: 600; }

  .gdpr{ margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--rule-soft); font-size: 6.4pt; color: var(--ink-mute); line-height: 1.5; letter-spacing: 0.005em; font-family:"Inter",sans-serif; }

  .page2 .side{ padding-top: 38px; }
  .page2 .main{ padding-top: 38px; }
  .page2-name{ font-family:"Cormorant Garamond", serif; font-style: italic; font-size: 14pt; color: var(--navy); margin: 0 0 4px 0; }
  .page2-tag{ font-size: 7.4pt; letter-spacing: 0.20em; text-transform: uppercase; color: var(--gold-deep); font-weight: 600; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--rule); }

  .tools-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px 14px; margin-top: 4px; }
  .tool-cat h4{ font-family:"Inter", sans-serif; font-weight: 600; font-size: 7.2pt; letter-spacing: 0.16em; text-transform: uppercase; color: var(--navy); margin: 0 0 3px 0; }
  .tool-cat p{ font-size: 7.8pt; color: var(--ink-soft); margin: 0; line-height: 1.35; }

  .stat-row{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 4px; margin-bottom: 6px; }
  .stat{ text-align: center; padding: 6px 4px; background: oklch(0.97 0.008 250); border-top: 2px solid var(--gold); }
  .stat .num{ font-family:"Cormorant Garamond", serif; font-size: 17pt; font-weight: 600; color: var(--navy-deep); line-height: 1; }
  .stat .lbl{ margin-top: 2px; font-size: 6.4pt; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-mute); line-height: 1.25; }

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

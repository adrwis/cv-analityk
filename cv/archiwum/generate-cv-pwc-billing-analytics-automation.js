/* Tailored CV for PwC Polska
   Role: Billing Analytics & Automation Specialist (Remote).
   JD core: Power BI dashboards/reports, advanced Excel, data modelling, Power Query (M),
            pattern/trend analysis, business-process analysis from a data angle,
            data storytelling, KPI recommendations, fluent English.
   JD nice-to-have: AI-based solutions, SQL, business-process optimization, reporting/ops automation.
   Surfaces her TRUE stack toward analytics + automation + process:
     - Power BI (DAX), Power Query (M), advanced Excel  [all roles]
     - Power Automate / PowerApps / SharePoint          [ISS/Zimmer/Trustwave]
     - SQL / Alteryx / Cognos                            [Trustwave/HSBC]
     - Lean Six Sigma process optimization              [SGH]
     - AI tools (Claude agents) + Google AI cert         [USP]
   No invented experience. No Python/VBA/Databricks/star-schema claims. No em-dashes in prose.
   Format = Template 3 "Teal Editorial".
   Run from this cv/ folder: SHOT=1 node generate-cv-pwc-billing-analytics-automation.js  */
const { chromium } = require('C:/Users/adria/AppData/Roaming/npm/node_modules/playwright');
const fs = require('fs');

const OUT_DIR = __dirname + '/';
const OUT_FILE = 'AG_PwC_Billing_Analytics_Automation.pdf';

const C = {
  name: 'Adriana Guściora',
  title: 'BI & Automation Analyst · Power BI / Power Query',
  email: 'gusciora.ada@gmail.com',
  phone: '+48 728 884 506',
  loc: 'Poland · Remote · EU citizen',
  linkedin: 'linkedin.com/in/adriana-gu',
  summary: 'Analyst with 8+ years turning messy operational and financial data into Power BI dashboards, automated reporting and cleaner processes. I build data models and reports in Power BI (DAX, Power Query / M) and advanced Excel, analyse workflows from a data angle to spot where automation pays off, and translate findings into KPIs and clear narratives for non-technical and executive stakeholders. I automate repetitive reporting and billing-style workflows with Power Query, Power Automate and PowerApps, and I use AI tools (Claude agents) to speed up SQL, documentation and analysis. Lean Six Sigma trained, PRINCE2 certified, English C1.',
  exp: [
    { role: 'Senior Business / Data Analyst, Performance Management', org: 'Trustwave Sp. z o.o. · Cybersecurity', loc: 'Warsaw / Remote', date: 'Oct 2024 - Mar 2026', b: [
      'Built performance and finance dashboards and reports for Financial Directors and the CFO using Power Query (M) and DAX in Power BI, translating their requirements into KPI views that answered real questions.',
      'Analysed the finance team\'s reporting processes end to end, mapped as-is workflows, found bottlenecks and root causes and redesigned the to-be process.',
      'Consolidated and reconciled data from multiple source systems into one validated reporting layer using SQL (Alteryx) and Power Query (Excel).',
      'Standardised KPI and metric definitions, then ran hands-on training across the full toolset.',
      'Automated repetitive month-end and reporting work with Power Query and Power Automate, improving turnaround and scalability.',
    ] },
    { role: 'Data Analyst at HSBC', org: 'Alten Polska Sp. z o.o. · Banking', loc: 'Kraków / Remote', date: 'Jul 2022 - Apr 2024', b: [
      'Owned the controlling view of a $15M people-cost pool across ~40 projects: budgeting, forecasting, budget vs actuals and cost allocation.',
      'Reconciled 3 enterprise source systems (Clarity, GPDM, Cognos) into one source of truth with SQL, Power Query and Power BI.',
      'Ran trainings on Power Query solutions in Excel and Power BI dashboard creation and created the documentation.',
      'Maintained data definitions and reporting standards, keeping portfolio reporting consistent and self-service.',
    ] },
    { role: 'Project Data Analyst and BI Developer, Global Transition', org: 'Zimmer Biomet Polska · Medical Devices', loc: 'Warsaw / Remote', date: 'Jun 2021 - Jun 2022', b: [
      'Supported a global transition programme across 14 departments and three regions: gathered reporting needs, built portfolio dashboards and managed stakeholder expectations.',
      'Owned Smartsheet dashboard creation and maintaining, and trained developers and end users on data input and consumption.',
      'Built a PowerApps application for organisation-wide idea and improvement-proposal intake.',
    ] },
    { role: 'BI Developer / PMO, Project & Facility Manager', org: 'ISS Facility Services · Services', loc: 'Warsaw · On-site / Remote', date: 'Sep 2018 - May 2021', b: [
      'Ran budgeting, forecasting and financial reconciliation for a regulated pharmaceutical client, managing four services and field teams of 7-15.',
      'Owned the project to streamline invoice flow for a global banking client: designed and documented the new process end to end, implemented it and trained internal and client stakeholders (Power Automate, SharePoint, Excel).',
      'In the Project Management Office created dashboards in Power BI and built workflows using Microsoft tools.',
    ] },
    { role: 'Junior Project Manager, Management Trainee', org: 'Jeronimo Martins (Lisbon & Warsaw) · Robert Bosch (Warsaw)', loc: 'Portugal / Poland', date: 'Feb 2016 - Aug 2018', b: [
      'International project and operations experience across retail and logistics (Store Excellence, Customer Service, Employer Branding).',
      'At Robert Bosch worked in logistics and customer service, operating in SAP.',
    ] },
  ],
  skills: [
    { g: 'BI & Reporting', items: ['Power BI', 'DAX', 'Power Query (M)', 'Advanced Excel & Google Sheets', 'Data modelling', 'Data storytelling'] },
    { g: 'Automation & Process', items: ['Power Automate', 'PowerApps', 'SharePoint', 'Process analysis & optimization', 'KPI design', 'Lean Six Sigma'] },
    { g: 'Data', items: ['SQL', 'Alteryx', 'Cognos', 'ETL', 'Data reconciliation & validation', 'Trend & pattern analysis'] },
    { g: 'AI & Delivery', items: ['AI tools (Claude agents)', 'PRINCE2', 'Agile / Scrum', 'Documentation & training', 'Stakeholder management'] },
  ],
  edu: [
    { d: 'Postgraduate · Quality Manager', s: 'SGH Warsaw School of Economics', y: '2020-2021', x: 'Lean Management, Six Sigma, Kaizen' },
    { d: 'MSc · Clinical Psychology', s: 'SWPS University', y: '2012-2017', x: '' },
    { d: 'BEng · Production Management & Engineering', s: 'Warsaw University of Technology', y: '2012-2016', x: '' },
    { d: 'Rotary Youth Exchange', s: 'Brazil, Liceum ANGLO, Penápolis', y: '2009-2010', x: '' },
  ],
  certs: ['Using AI in Business Development, Google / SGH, 2026', 'Advanced Business Analytics in Power BI, LabMasters, 2026', 'SQL Advanced, LabMasters, 2025', 'Business Analytics in Power BI, LabMasters, 2022', 'PRINCE2 Foundation, AXELOS, 2020', 'Six Sigma, SGH, 2020'],
  langs: [ ['Polish', 'Native'], ['English', 'Fluent · C1'], ['Portuguese', 'Upper-Intermediate · CELPE-Bras'], ['Italian', 'Basic'] ],
};

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

function tpl3() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
  @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
  :root{--ink:#23312f;--teal:#0f6e6e;--muted:#6a7a78;--rule:#dce6e4;--bg:#fbfcfb}
  body{font-family:'Source Sans 3',sans-serif;color:var(--ink);font-size:9.6pt;line-height:1.55;background:var(--bg)}
  .page{padding:1.15cm 1.6cm}
  .name{font-family:'Fraunces';font-weight:600;font-size:24pt;line-height:1;letter-spacing:-.01em;color:var(--ink)}
  .title{font-family:'Fraunces';font-style:italic;font-weight:400;font-size:12pt;color:var(--teal);margin-top:.1cm}
  .rule{height:2pt;background:var(--teal);width:1.4cm;margin:.35cm 0}
  .contact{font-size:8.8pt;color:var(--muted);display:flex;flex-wrap:wrap;gap:.1cm .5cm}
  .summary{margin-top:.3cm;font-size:9.8pt;line-height:1.55;color:#33433f;max-width:17cm}
  h2{font-family:'Fraunces';font-weight:600;font-size:13pt;color:var(--teal);margin:.4cm 0 .2cm;display:flex;align-items:baseline;gap:.3cm;break-after:avoid}
  h2 .n{font-family:'Source Sans 3';font-size:8pt;color:var(--muted);letter-spacing:.15em;font-weight:600}
  .job{margin-top:.26cm;display:grid;grid-template-columns:3.3cm 1fr;gap:.5cm;break-inside:avoid}
  .job.brk{break-before:page;margin-top:0}
  .skill-row,.edu-item,.cert-item{break-inside:avoid}
  .when{font-size:8.6pt;color:var(--muted);padding-top:.05cm}
  .role{font-weight:600;font-size:10.4pt}
  .org{font-size:9pt;color:var(--teal);font-weight:600;margin-top:.02cm}
  ul{list-style:none;margin-top:.12cm}
  li{position:relative;padding-left:.4cm;margin-top:.06cm}
  li::before{content:'·';position:absolute;left:0;color:var(--teal);font-weight:700}
  .two{display:grid;grid-template-columns:1fr 1fr;gap:.3cm 1cm;margin-top:.1cm}
  .skill-row b{font-family:'Fraunces';color:var(--ink);font-weight:600;font-size:10pt}
  .edu-item{margin-top:.14cm}.edu-item .d{font-weight:600}.edu-item .s{color:var(--muted);font-size:8.8pt}
  .cert-item{margin-top:.08cm;font-size:9pt;color:#33433f}
  .meta-line{font-size:9.2pt;color:#33433f;margin-top:.12cm}
  .langs{font-size:9.4pt}.langs b{font-family:'Fraunces'}
  </style></head><body><div class="page">
    <div class="name">${esc(C.name)}</div>
    <div class="title">${esc(C.title)}</div>
    <div class="rule"></div>
    <div class="contact"><span>${esc(C.email)}</span><span>${esc(C.phone)}</span><span>${esc(C.loc)}</span><span>${esc(C.linkedin)}</span></div>
    <p class="summary">${esc(C.summary)}</p>
    <h2>Experience <span class="n">01</span></h2>
    ${C.exp.map(e=>`<div class="job${e.brk?' brk':''}"><div class="when">${esc(e.date)}<br>${esc(e.loc)}</div><div><div class="role">${esc(e.role)}</div><div class="org">${esc(e.org)}</div><ul>${e.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div>`).join('')}
    <h2>Skills <span class="n">02</span></h2>
    <div class="two">${C.skills.map(s=>`<div class="skill-row"><b>${esc(s.g)}</b><div class="meta-line">${s.items.map(esc).join(' · ')}</div></div>`).join('')}</div>
    <h2>Education <span class="n">03</span></h2>
    <div class="two">${C.edu.map(e=>`<div class="edu-item"><div class="d">${esc(e.d)}</div><div class="s">${esc(e.s)} · ${esc(e.y)}</div></div>`).join('')}</div>
    <h2>Certifications <span class="n">04</span></h2>
    <div class="two">${C.certs.map(c=>`<div class="cert-item">${esc(c)}</div>`).join('')}</div>
    <h2>Languages <span class="n">05</span></h2>
    <div class="langs meta-line">${C.langs.map(l=>`<b>${esc(l[0])}</b> ${esc(l[1])}`).join('  ·  ')}</div>
  </div></body></html>`;
}

module.exports = { tpl3, C };

if (require.main === module)
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(tpl3(), { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.pdf({ path: OUT_DIR + OUT_FILE, format: 'A4', printBackground: true, margin: { top: '0', bottom: '0', left: '0', right: '0' } });
  if (process.env.SHOT) {
    await page.setViewportSize({ width: 794, height: 1123 });
    await page.screenshot({ path: OUT_DIR + '_fit_check.png', fullPage: true });
  }
  console.log('saved', OUT_FILE);
  await browser.close();
})();

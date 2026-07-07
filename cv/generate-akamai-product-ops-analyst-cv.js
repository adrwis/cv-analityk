/* Tailored CV for Akamai "Product Operations Analyst II" (Cracow, FlexBase / remote-friendly).
   Content = shared canonical data (C), retargeted to operational reporting, business analysis,
             ROI / business cases, KPI frameworks, process optimisation. No Python claimed.
   Format  = Template 3 "Teal Editorial".
   Run: node generate-akamai-product-ops-analyst-cv.js  (outputs into this cv/ folder) */
const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const fs = require('fs');

const OUT_DIR = __dirname + '/';
const OUT_FILE = 'AG_Akamai_Product_Operations_Analyst.pdf';

/* ---------------- Content: canonical data, retargeted to the offer ---------------- */
const C = {
  name: 'Adriana Guściora',
  title: 'Product & Operations Analyst · BI Developer',
  email: 'gusciora.ada@gmail.com',
  phone: '+48 728 884 506',
  loc: 'Warsaw, Poland · Remote',
  linkedin: 'linkedin.com/in/adriana-gu',
  summary: 'Operations and BI analyst with 8+ years turning cross-functional data into recommendations leaders act on. I lead operational reporting, analytics and business insight across finance, product and operations, build dashboards and KPI frameworks in Power BI, SQL and advanced Excel and Google Sheets, and translate ambiguous business questions into ROI analyses and business cases. Certified in Lean Six Sigma and PRINCE2, I optimise processes and drive cross-functional execution, and I build practical AI and automation tools (Claude agents) that accelerate reporting. A background in engineering and psychology gives me a rare blend of analytical rigour and stakeholder empathy.',
  exp: [
    { role: 'Senior Data Analyst, Performance Management', org: 'Trustwave Sp. z o.o. · Cybersecurity', loc: 'Warsaw / Remote', date: 'Oct 2024 - Mar 2026', b: [
      'Led operational and performance reporting for Financial Directors and the CFO, building dashboards and KPI views in Power BI using Power Query (M) and DAX.',
      'Consolidated and validated data from multiple sources and systems into one reliable reporting layer (advanced Excel, Power Query, SQL, Power BI).',
      'Automated repetitive reporting work with Power Query and Power Automate.',
      'Mapped existing processes and produced clear before and after documentation, identifying improvement opportunities.',
      'Implemented process improvements by building ETL workflows in SQL (Alteryx) and Power Query (Excel).',
      'Trained colleagues to build their own Power Query improvements into monthly tasks.',
    ] },
    { role: 'Data Analyst at HSBC, Cost Controlling', org: 'Alten Polska Sp. z o.o. · Banking', loc: 'Kraków / Remote', date: 'Jul 2022 - Apr 2024', b: [
      'Owned the controlling and analytics view of a $15M people-cost pool across ~40 projects: budget vs actuals, forecasting and allocation, partnering directly with project leaders.',
      'Built a single source of truth by reconciling 3 enterprise systems (Clarity, GPDM, Cognos) with SQL, Power Query and Power BI.',
      'Ran trainings on Power Query solutions in Excel and Power BI dashboard creation and created the documentation.',
      'Led the team of 5: reviewed each analyst’s workflow, streamlined processes and upskilled the team on the upgraded toolset.',
    ] },
    { role: 'Project Data Analyst and BI Developer, Global Transition', org: 'Zimmer Biomet Polska · Medical Devices', loc: 'Warsaw / Remote', date: 'Jun 2021 - Jun 2022', b: [
      'Supported the Global Transition programme across 14 departments and three regions (LATAM, Asia and Europe), building and maintaining dashboards and training end users.',
      'Handled Smartsheet dashboard creation and maintenance and trained other developers to build dashboards.',
      'Built a PowerApps application where employees across the organisation submitted new ideas and improvement proposals.',
    ] },
    { role: 'BI Developer, Project and Facility Manager', org: 'ISS Facility Services · Services', loc: 'Warsaw · On-site / Remote', date: 'Sep 2018 - May 2021', b: [
      'Managed budget and forecasting for a regulated pharmaceutical client, running four services and leading field-service teams of 7-15.',
      'Automated the invoice workflow for a global banking client.',
      'Built Novatorium, a PowerApps application that collected and shared employee good practices and improvement ideas.',
      'In the Project Management Office (PMO) built dashboards in Power BI and workflows using Microsoft tools.',
    ] },
    { role: 'Junior Project Manager, Management Trainee', org: 'Jeronimo Martins (Lisbon & Warsaw) · Robert Bosch (Warsaw)', loc: 'Portugal / Poland', date: 'Feb 2016 - Aug 2018', b: [
      'At Jeronimo Martins: international project and operations experience in Portugal and Poland (Store Excellence, Customer Service, logistics and Employer Branding).',
      'At Robert Bosch: worked in logistics and customer service, operating in SAP.',
    ] },
  ],
  skills: [
    { g: 'Analytics & BI', items: ['Power BI', 'DAX', 'Advanced Excel & Google Sheets', 'SQL', 'Dashboards'] },
    { g: 'Business Analysis', items: ['KPI frameworks', 'ROI & business cases', 'Requirement gathering', 'Variance analysis'] },
    { g: 'Process & Delivery', items: ['Lean Six Sigma', 'PRINCE2', 'Process optimisation', 'Stakeholder management'] },
    { g: 'Automation & AI', items: ['Power Automate', 'Power Query', 'Claude AI agents', 'Google AI (cert.)'] },
    { g: 'Platforms', items: ['SAP', 'Cognos', 'Clarity', 'Smartsheet', 'Jira', 'Confluence', 'SharePoint', 'PowerApps'] },
  ],
  edu: [
    { d: 'Postgraduate · Quality Manager', s: 'SGH Warsaw School of Economics', y: '2020-2021', x: 'Lean Management, Six Sigma, Kaizen' },
    { d: 'MSc · Clinical Psychology', s: 'SWPS University', y: '2012-2017', x: '' },
    { d: 'BEng · Production Management & Engineering', s: 'Warsaw University of Technology', y: '2012-2016', x: '' },
    { d: 'Rotary Youth Exchange', s: 'Brazil, Liceum ANGLO, Penápolis', y: '2009-2010', x: '' },
  ],
  certs: ['Advanced Business Analytics in Power BI, LabMasters, 2026', 'Using AI in Business Development, Google / SGH, 2026', 'SQL Advanced, LabMasters, 2025', 'Business Analytics in Power BI, LabMasters, 2022', 'Six Sigma, SGH, 2020', 'PRINCE2 Foundation, AXELOS, 2020', 'Project Management, INCODO, 2016'],
  langs: [ ['Polish', 'Native'], ['English', 'Advanced'], ['Portuguese', 'Upper-Intermediate · CELPE-Bras'], ['Italian', 'Basic'] ],
};

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

/* ============================================================
   TEMPLATE 3 — "Teal Editorial": serif display, airy, single col
   ============================================================ */
function tpl3() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
  @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
  :root{--ink:#23312f;--teal:#0f6e6e;--muted:#6a7a78;--rule:#dce6e4;--bg:#fbfcfb}
  body{font-family:'Source Sans 3',sans-serif;color:var(--ink);font-size:9.6pt;line-height:1.55;background:var(--bg)}
  .page{padding:1.5cm 1.7cm}
  .name{font-family:'Fraunces';font-weight:600;font-size:30pt;line-height:1;letter-spacing:-.01em;color:var(--ink)}
  .title{font-family:'Fraunces';font-style:italic;font-weight:400;font-size:13pt;color:var(--teal);margin-top:.12cm}
  .rule{height:2pt;background:var(--teal);width:1.4cm;margin:.35cm 0}
  .contact{font-size:8.8pt;color:var(--muted);display:flex;flex-wrap:wrap;gap:.1cm .5cm}
  .summary{margin-top:.4cm;font-size:10.2pt;line-height:1.6;color:#33433f;max-width:17cm}
  h2{font-family:'Fraunces';font-weight:600;font-size:13pt;color:var(--teal);margin:.6cm 0 .25cm;display:flex;align-items:baseline;gap:.3cm}
  h2 .n{font-family:'Source Sans 3';font-size:8pt;color:var(--muted);letter-spacing:.15em;font-weight:600}
  .job{margin-top:.34cm;display:grid;grid-template-columns:3.3cm 1fr;gap:.5cm;break-inside:avoid}
  .when{font-size:8.6pt;color:var(--muted);padding-top:.05cm}
  .role{font-weight:600;font-size:10.4pt}
  .org{font-size:9pt;color:var(--teal);font-weight:600;margin-top:.02cm}
  ul{list-style:none;margin-top:.12cm}
  li{position:relative;padding-left:.4cm;margin-top:.09cm}
  li::before{content:'·';position:absolute;left:0;color:var(--teal);font-weight:700}
  .two{display:grid;grid-template-columns:1fr 1fr;gap:.5cm 1cm;margin-top:.1cm}
  .skill-row b{font-family:'Fraunces';color:var(--ink);font-weight:600;font-size:10pt}
  .edu-item{margin-top:.14cm}.edu-item .d{font-weight:600}.edu-item .s{color:var(--muted);font-size:8.8pt}
  .cert-item{margin-top:.14cm;font-size:9pt;color:#33433f}
  .meta-line{font-size:9.2pt;color:#33433f;margin-top:.12cm}
  .langs{font-size:9.4pt}.langs b{font-family:'Fraunces'}
  </style></head><body><div class="page">
    <div class="name">${esc(C.name)}</div>
    <div class="title">${esc(C.title)}</div>
    <div class="rule"></div>
    <div class="contact"><span>${esc(C.email)}</span><span>${esc(C.phone)}</span><span>${esc(C.loc)}</span><span>${esc(C.linkedin)}</span></div>
    <p class="summary">${esc(C.summary)}</p>
    <h2>Experience <span class="n">01</span></h2>
    ${C.exp.map(e=>`<div class="job"><div class="when">${esc(e.date)}<br>${esc(e.loc)}</div><div><div class="role">${esc(e.role)}</div><div class="org">${esc(e.org)}</div><ul>${e.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div>`).join('')}
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

if (require.main === module)
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(tpl3(), { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.pdf({ path: OUT_DIR + OUT_FILE, format: 'A4', printBackground: true, margin: { top: '0', bottom: '0', left: '0', right: '0' } });
  console.log('saved', OUT_FILE);
  await browser.close();
})();

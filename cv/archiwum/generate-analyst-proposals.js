/* Generate 5 distinct analyst-CV design proposals as A4 PDFs.
   Run: node generate-analyst-proposals.js  (outputs into this cv/ folder)
   Playwright is shared from the adriana-gusciora-pl toolchain (project convention). */
const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const fs = require('fs');
const path = require('path');

const OUT_DIR = __dirname + '/template/';
const PHOTO = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'ada2_thumb.jpg')).toString('base64');

/* ---------------- Shared real content ---------------- */
const C = {
  name: 'Adriana Guściora',
  title: 'Senior Data Analyst & BI Developer',
  email: 'gusciora.ada@gmail.com',
  phone: '+48 786 241 121',
  loc: 'Warsaw, Poland · Remote',
  linkedin: 'linkedin.com/in/adriana-gu',
  summary: 'Data analyst and BI developer with 8+ years turning financial and operational data into decisions leaders act on. I build and automate reporting using tools like Power BI, SQL, Power Query and Alteryx, design ETL workflows and dashboards, and have led teams of up to 15 at HSBC and ISS. A background in engineering and psychology gives me a rare blend of analytical rigour and stakeholder empathy.',
  kpis: [
    { n: '8+', l: 'years in analytics & BI' },
    { n: '$15M', l: 'across ~40 projects modelled' },
    { n: '15', l: 'people led at peak' },
    { n: '95%', l: 'Power BI proficiency' },
  ],
  exp: [
    { role: 'Senior Finance Data Analyst, Performance Management', org: 'Trustwave Sp. z o.o. · Cybersecurity', loc: 'Warsaw / Remote', date: 'Oct 2024 - Mar 2026', b: [
      'Consolidated and reconciled financial and cost data from multiple sources into one validated reporting layer used daily by Financial Directors and the CFO (advanced Excel, Power Query, SQL, Power BI).',
      'Automated repetitive month-end and reporting work with Power Query and Power Automate.',
      'Mapped existing finance processes and produced clear before and after documentation.',
      'Implemented process improvements by building ETL workflows in SQL (Alteryx) and Power Query (Excel).',
      'Trained colleagues to build their own improvements into monthly tasks using Power Query in Excel.',
    ] },
    { role: 'Finance Data Analyst at HSBC, Cost Controlling', org: 'Alten Polska Sp. z o.o. · Banking', loc: 'Kraków / Remote', date: 'Jul 2022 - Apr 2024', b: [
      'Owned the controlling view of a $15M people-cost pool across ~40 projects: headcount and cost budget vs actuals, forecasting, allocation, trends and outliers.',
      'Built a single source of truth by reconciling 3 enterprise systems (Clarity, GPDM, Cognos) with SQL, Power Query and Power BI.',
      'Maintained data definitions, documentation and training, keeping the monthly close consistent and self-service.',
      'Led the team of 5: reviewed each analyst’s workflow, implemented streamlined processes and upskilled the team on the upgraded toolset.',
    ] },
    { role: 'Smartsheet Developer and Data Analyst, Global Transition', org: 'Zimmer Biomet Polska · Medical Devices', loc: 'Warsaw / Remote', date: 'Jun 2021 - Jun 2022', b: [
      'Created and maintained Smartsheet dashboards and trained end users to work with them across 14 departments and three regions (LATAM, Asia and Europe) for the Global Transition programme.',
      'Trained other developers to use Smartsheet and build dashboards.',
      'Built a PowerApps application where employees across the organisation submitted new ideas and improvement proposals.',
    ] },
    { role: 'BI Developer, Project and Facility Manager', org: 'ISS Facility Services · Services', loc: 'Warsaw · On-site / Remote', date: 'Sep 2018 - May 2021', b: [
      'Cost budgeting, forecasting and financial reconciliation for a regulated pharmaceutical client: controlling reporting, variance analysis and internal audits; managed teams of 4-15 across various services.',
      'Automated the invoice workflow for a global banking client.',
      'Built Novatorium, a PowerApp and workflow that captured and shared employee innovations and good practices.',
      'Worked in the Project Management Office (PMO): produced documentation, ensured other project managers followed health and safety rules and controlled financial settlements.',
    ] },
    { role: 'Junior Project Manager, Management Trainee', org: 'Jeronimo Martins (Lisbon & Warsaw) · Robert Bosch (Warsaw)', loc: 'Portugal / Poland', date: 'Feb 2016 - Aug 2018', b: [
      'At Jeronimo Martins: international project and operations experience in Portugal and Poland (Store Excellence, Customer Service, logistics and Employer Branding).',
      'At Robert Bosch: worked in logistics and customer service, operating in SAP.',
    ] },
  ],
  skills: [
    { g: 'BI & Analytics', items: ['Power BI', 'DAX', 'Power Query / M', 'Advanced Excel'] },
    { g: 'Data & ETL', items: ['SQL', 'Alteryx', 'Power Automate'] },
    { g: 'AI & Automation', items: ['Claude Code', 'Prompt Engineering', 'AI chatbot development'] },
    { g: 'Platforms', items: ['Jira', 'Confluence', 'Smartsheet', 'Cognos', 'SharePoint', 'PowerApps'] },
  ],
  edu: [
    { d: 'Postgraduate · Quality Manager', s: 'SGH Warsaw School of Economics', y: '2020-2021', x: 'Lean Management, Six Sigma, Kaizen' },
    { d: 'MSc · Clinical Psychology', s: 'SWPS University', y: '2012-2017', x: '' },
    { d: 'BEng · Production Management & Engineering', s: 'Warsaw University of Technology', y: '2012-2016', x: '' },
    { d: 'Rotary Youth Exchange', s: 'Brazil, Liceum ANGLO, Penápolis', y: '2009-2010', x: '' },
  ],
  certs: ['Advanced Business Analytics in Power BI, LabMasters, 2026', 'Using AI in Business Development, Google / SGH, 2026', 'SQL Advanced, LabMasters, 2025', 'Business Analytics in Power BI, LabMasters, 2022', 'Six Sigma, SGH, 2020', 'PRINCE2 Foundation, AXELOS, 2020', 'Project Management, INCODO, 2016'],
  langs: [ ['Polish', 'Native'], ['English', 'Advanced'], ['Portuguese', 'Upper-Intermediate · CELPE-Bras'], ['Italian', 'Basic'] ],
  projects: 'Bilingual psychology site (WCAG AA, 3 themes) built with Claude Code · AI relational chatbot with crisis detection and knowledge base.',
};

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

/* ============================================================
   TEMPLATE 1 — "ATS Clean": single column, navy, IBM Plex Sans
   ============================================================ */
function tpl1() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap" rel="stylesheet">
  <style>
  @page{size:A4;margin:0}
  *{margin:0;padding:0;box-sizing:border-box}
  :root{--ink:#1a2230;--navy:#1f3a5f;--muted:#5a6472;--rule:#d7dce3}
  body{font-family:'IBM Plex Sans',sans-serif;color:var(--ink);font-size:9.6pt;line-height:1.5;background:#fff}
  .page{padding:1.3cm 1.5cm}
  .name{font-size:23pt;font-weight:700;color:var(--navy);letter-spacing:-.01em}
  .title{font-size:11pt;font-weight:500;color:var(--ink);margin-top:.1cm}
  .contact{margin-top:.25cm;font-size:8.6pt;color:var(--muted);display:flex;flex-wrap:wrap;gap:.1cm .45cm}
  .contact b{color:var(--navy);font-weight:600}
  .summary{margin-top:.4cm;font-size:9.6pt;color:#33404f;text-align:justify;text-justify:inter-word}
  h2{font-size:10pt;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.08em;margin:.55cm 0 .2cm;padding-bottom:.08cm;border-bottom:1.5pt solid var(--navy);break-after:avoid}
  .job{break-inside:avoid}
  .job.brk{break-before:page;page-break-before:always}
  .cert-item{margin-top:.14cm;font-size:9.2pt}
  .job{margin-top:.32cm}
  .job-h{display:flex;justify-content:space-between;align-items:baseline;gap:.5cm}
  .role{font-weight:700;font-size:10.2pt}
  .date{font-size:8.4pt;color:var(--muted);white-space:nowrap;font-weight:500}
  .org{font-size:9pt;color:var(--navy);font-weight:500;margin-top:.02cm}
  ul{list-style:none;margin-top:.12cm}
  li{position:relative;padding-left:.42cm;margin-top:.08cm}
  li::before{content:'▪';position:absolute;left:.05cm;color:var(--navy);font-size:7pt;top:.04cm}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:.1cm .8cm}
  .skill-row{margin-top:.12cm;font-size:9.2pt}
  .skill-row b{color:var(--navy);font-weight:600}
  .edu-item{margin-top:.16cm;font-size:9.2pt}
  .edu-item .d{font-weight:600}
  .edu-item .s{color:var(--muted)}
  .inline-list{font-size:9pt;color:#33404f;margin-top:.1cm}
  .langs{display:flex;gap:.7cm;flex-wrap:wrap;font-size:9pt;margin-top:.1cm}
  .langs b{color:var(--navy)}
  </style></head><body><div class="page">
    <div class="name">${esc(C.name)}</div>
    <div class="title">${esc(C.title)}</div>
    <div class="contact"><span><b>✉</b> ${esc(C.email)}</span><span><b>☎</b> ${esc(C.phone)}</span><span><b>⌖</b> ${esc(C.loc)}</span><span><b>in</b> ${esc(C.linkedin)}</span></div>
    <p class="summary">${esc(C.summary)}</p>
    <h2>Experience</h2>
    ${C.exp.map((e,i)=>`<div class="job${i===C.exp.length-1?' brk':''}"><div class="job-h"><span class="role">${esc(e.role)}</span><span class="date">${esc(e.date)}</span></div><div class="org">${esc(e.org)} · ${esc(e.loc)}</div><ul>${e.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
    <h2>Technical Skills</h2>
    ${C.skills.map(s=>`<div class="skill-row"><b>${esc(s.g)}:</b> ${s.items.map(esc).join(' · ')}</div>`).join('')}
    <h2>Education</h2>
    <div class="grid2">${C.edu.map(e=>`<div class="edu-item"><div class="d">${esc(e.d)}</div><div class="s">${esc(e.s)} · ${esc(e.y)}</div></div>`).join('')}</div>
    <h2>Certifications</h2>
    <div class="grid2">${C.certs.map(c=>`<div class="cert-item">${esc(c)}</div>`).join('')}</div>
    <h2>Languages</h2>
    <div class="langs">${C.langs.map(l=>`<span><b>${esc(l[0])}</b> - ${esc(l[1])}</span>`).join('')}</div>
  </div></body></html>`;
}

/* ============================================================
   TEMPLATE 2 — "Slate Sidebar": dark left rail, teal accent, photo
   ============================================================ */
function tpl2() {
  const jobHtml = e => `<div class="job"><div class="role">${esc(e.role)}</div><div class="meta"><span class="o">${esc(e.org)}</span><span>${esc(e.date)} · ${esc(e.loc)}</span></div><ul>${e.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
  @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
  :root{--slate:#1f2833;--slate2:#2c3744;--teal:#2bb3a3;--ink:#22272e;--muted:#5d6772;--line:#e2e6ea}
  body{font-family:'Public Sans',sans-serif;color:var(--ink);font-size:9.3pt;line-height:1.46}
  .sheet{width:210mm;height:297mm;display:grid;grid-template-columns:62mm 1fr;overflow:hidden}
  .sheet.brk{page-break-before:always}
  /* sidebar */
  .side{background:var(--slate);color:#cfd6dd;padding:1.05cm .8cm;position:relative}
  .side::after{content:'';position:absolute;top:0;right:0;width:3pt;height:100%;background:var(--teal)}
  .photo{width:3.5cm;height:3.5cm;border-radius:50%;object-fit:cover;object-position:top;display:block;margin:.1cm auto .45cm;border:2.5pt solid var(--teal);box-shadow:0 0 0 4pt rgba(43,179,163,.12)}
  .s-name{font-family:'Archivo';font-weight:800;font-size:17pt;color:#fff;line-height:1.04;text-align:center;letter-spacing:-.01em}
  .s-title{font-size:8.6pt;color:var(--teal);text-align:center;margin-top:.15cm;font-weight:600;letter-spacing:.03em;text-transform:uppercase}
  .s-h{font-family:'Archivo';font-weight:700;font-size:8.6pt;color:#fff;text-transform:uppercase;letter-spacing:.14em;margin:.5cm 0 .2cm;padding-bottom:.1cm;border-bottom:1pt solid rgba(255,255,255,.16)}
  .s-row{font-size:8.4pt;margin-top:.13cm;color:#c7cfd7;word-break:break-word;line-height:1.35}
  .s-row b{color:var(--teal);font-weight:600;letter-spacing:.04em;font-size:7.6pt}
  .chip{display:inline-block;background:var(--slate2);color:#dde3e9;border:.6pt solid rgba(255,255,255,.1);border-radius:3pt;padding:.06cm .19cm;font-size:7.8pt;margin:.09cm .08cm 0 0}
  .lang{display:flex;justify-content:space-between;gap:.2cm;font-size:8.4pt;margin-top:.14cm}
  .lang b{color:#e8edf1;font-weight:600}
  .lang span:last-child{color:var(--teal);text-align:right}
  .side-run{margin-bottom:.15cm}
  .run-name{font-family:'Archivo';font-weight:800;font-size:13pt;color:#fff;line-height:1.05}
  .run-title{font-size:7.6pt;color:var(--teal);text-transform:uppercase;letter-spacing:.06em;margin-top:.06cm}
  .stat{margin-top:.24cm}
  .stat-n{font-family:'Archivo';font-weight:800;font-size:15pt;color:var(--teal);display:block;line-height:1}
  .stat-l{font-size:7.6pt;color:#b7c0c9;display:block;margin-top:.03cm;line-height:1.3}
  .cert{font-size:8.2pt;color:#cbd3db;margin-top:.18cm;padding-left:.32cm;position:relative;line-height:1.34}
  .cert::before{content:'▹';position:absolute;left:0;color:var(--teal)}
  /* decorative data-motif anchoring the sidebar bottom */
  .side-deco{position:absolute;left:.8cm;right:1cm;bottom:1cm;display:flex;align-items:flex-end;gap:3.5pt;height:1.7cm;opacity:.45}
  .side-deco span{flex:1;background:linear-gradient(180deg,var(--teal),rgba(43,179,163,.15));border-radius:2pt 2pt 0 0}
  /* main */
  .main{padding:1.05cm 1cm}
  .summary{font-size:9.6pt;color:#3a434e;line-height:1.55;text-align:justify;text-justify:inter-word}
  h2{font-family:'Archivo';font-weight:700;font-size:10.5pt;color:var(--slate);text-transform:uppercase;letter-spacing:.06em;margin:.55cm 0 .24cm;display:flex;align-items:center;gap:.25cm}
  .main>h2:first-child{margin-top:.15cm}
  h2::after{content:'';flex:1;height:1.5pt;background:var(--teal)}
  .job{margin-top:.42cm;padding-left:.45cm;border-left:2pt solid var(--line);position:relative;break-inside:avoid}
  .job::before{content:'';position:absolute;left:-3.2pt;top:.06cm;width:5pt;height:5pt;border-radius:50%;background:var(--teal)}
  .role{font-weight:700;font-size:10pt;color:var(--ink)}
  .meta{display:flex;justify-content:space-between;gap:.4cm;font-size:8.4pt;color:var(--muted);margin-top:.03cm}
  .meta .o{color:var(--teal);font-weight:600}
  ul{list-style:none;margin-top:.12cm}
  li{position:relative;padding-left:.4cm;margin-top:.1cm;font-size:9.3pt;line-height:1.5}
  li::before{content:'▸';position:absolute;left:0;color:var(--teal)}
  .edu-item{margin-top:.2cm;font-size:9.2pt}
  .edu-item .d{font-weight:600}.edu-item .s{color:var(--muted);font-size:8.6pt}
  </style></head><body>
    <section class="sheet">
      <aside class="side">
        <img class="photo" src="${PHOTO}" alt="">
        <div class="s-name">${esc(C.name)}</div>
        <div class="s-title">${esc(C.title)}</div>
        <div class="s-h">Contact</div>
        <div class="s-row"><b>EMAIL</b><br>${esc(C.email)}</div>
        <div class="s-row"><b>PHONE</b><br>${esc(C.phone)}</div>
        <div class="s-row"><b>LOCATION</b><br>${esc(C.loc)}</div>
        <div class="s-row"><b>LINKEDIN</b><br>${esc(C.linkedin)}</div>
        <div class="s-h">Core Skills</div>
        <div>${C.skills.flatMap(s=>s.items).map(i=>`<span class="chip">${esc(i)}</span>`).join('')}</div>
        <div class="s-h">Languages</div>
        ${C.langs.map(l=>`<div class="lang"><b>${esc(l[0])}</b><span>${esc(l[1].replace('Upper-Intermediate · CELPE-Bras','Upper-Int.'))}</span></div>`).join('')}
        <div class="side-deco">${[40,68,52,88,62,96,74,58].map(h=>`<span style="height:${h}%"></span>`).join('')}</div>
      </aside>
      <main class="main">
        <p class="summary">${esc(C.summary)}</p>
        <h2>Experience</h2>
        ${C.exp.slice(0,3).map(jobHtml).join('')}
      </main>
    </section>
    <section class="sheet brk">
      <aside class="side">
        <div class="side-run"><div class="run-name">${esc(C.name)}</div><div class="run-title">${esc(C.title)}</div></div>
        <div class="s-h">Highlights</div>
        ${[C.kpis[0], C.kpis[2]].map(k=>`<div class="stat"><span class="stat-n">${esc(k.n)}</span><span class="stat-l">${esc(k.l)}</span></div>`).join('')}
        <div class="s-h">Certifications</div>
        ${C.certs.map(c=>`<div class="cert">${esc(c)}</div>`).join('')}
        <div class="side-deco">${[55,80,60,92,70,50,84,66].map(h=>`<span style="height:${h}%"></span>`).join('')}</div>
      </aside>
      <main class="main">
        <h2>Experience (cont.)</h2>
        ${C.exp.slice(3).map(jobHtml).join('')}
        <h2>Education</h2>
        ${C.edu.map(e=>`<div class="edu-item"><span class="d">${esc(e.d)}</span> <span class="s">· ${esc(e.s)} · ${esc(e.y)}</span></div>`).join('')}
      </main>
    </section>
  </body></html>`;
}

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
  .job{margin-top:.34cm;display:grid;grid-template-columns:3.3cm 1fr;gap:.5cm}
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

/* ============================================================
   TEMPLATE 4 — "Data KPI": charcoal + amber, mono numerals, KPI band
   ============================================================ */
function tpl4() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Mono:wght@500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
  @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
  :root{--char:#1c2128;--amber:#e08a1e;--ink:#222831;--muted:#697180;--line:#e6e9ee}
  body{font-family:'Inter',sans-serif;color:var(--ink);font-size:9.4pt;line-height:1.48}
  .head{background:var(--char);color:#fff;padding:1.05cm 1.4cm .95cm}
  .name{font-family:'Sora';font-weight:800;font-size:24pt;letter-spacing:-.02em}
  .title{font-family:'IBM Plex Mono';font-size:9.5pt;color:var(--amber);margin-top:.1cm;letter-spacing:.02em}
  .contact{margin-top:.28cm;font-size:8.4pt;color:#b9c0cb;display:flex;flex-wrap:wrap;gap:.1cm .5cm}
  .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:.5cm;margin-top:.5cm}
  .kpi{border-left:2pt solid var(--amber);padding-left:.3cm}
  .kpi .n{font-family:'IBM Plex Mono';font-weight:600;font-size:16pt;color:#fff;line-height:1}
  .kpi .l{font-size:7.6pt;color:#aab2bf;margin-top:.08cm;line-height:1.25}
  .page{padding:.85cm 1.4cm 1.2cm}
  .summary{font-size:9.6pt;color:#39414c}
  h2{font-family:'Sora';font-weight:700;font-size:9.5pt;color:var(--char);text-transform:uppercase;letter-spacing:.1em;margin:.5cm 0 .2cm;padding-bottom:.1cm;border-bottom:1.5pt solid var(--char)}
  .job{margin-top:.3cm}
  .job-h{display:flex;justify-content:space-between;align-items:baseline;gap:.5cm}
  .role{font-family:'Sora';font-weight:600;font-size:10.2pt}
  .date{font-family:'IBM Plex Mono';font-size:8pt;color:var(--muted);white-space:nowrap}
  .org{font-size:8.8pt;color:var(--amber);font-weight:500;margin-top:.02cm;font-family:'IBM Plex Mono'}
  ul{list-style:none;margin-top:.12cm}
  li{position:relative;padding-left:.42cm;margin-top:.08cm}
  li::before{content:'›';position:absolute;left:.05cm;color:var(--amber);font-weight:700}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:.05cm .8cm}
  .skill-row{margin-top:.12cm;font-size:9.2pt}
  .skill-row b{font-family:'Sora';color:var(--char);font-weight:600;font-size:8.8pt;text-transform:uppercase;letter-spacing:.04em}
  .edu-item{margin-top:.14cm;font-size:9.2pt}.edu-item .d{font-weight:600}.edu-item .s{color:var(--muted);font-size:8.6pt}
  .row{font-size:9pt;color:#39414c;margin-top:.1cm}
  .langs b{font-family:'IBM Plex Mono';color:var(--char)}
  </style></head><body>
    <div class="head">
      <div class="name">${esc(C.name)}</div>
      <div class="title">${esc(C.title)}</div>
      <div class="contact"><span>${esc(C.email)}</span><span>${esc(C.phone)}</span><span>${esc(C.loc)}</span><span>${esc(C.linkedin)}</span></div>
      <div class="kpis">${C.kpis.map(k=>`<div class="kpi"><div class="n">${esc(k.n)}</div><div class="l">${esc(k.l)}</div></div>`).join('')}</div>
    </div>
    <div class="page">
      <p class="summary">${esc(C.summary)}</p>
      <h2>Experience</h2>
      ${C.exp.map(e=>`<div class="job"><div class="job-h"><span class="role">${esc(e.role)}</span><span class="date">${esc(e.date)}</span></div><div class="org">${esc(e.org)} · ${esc(e.loc)}</div><ul>${e.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
      <h2>Technical Skills</h2>
      ${C.skills.map(s=>`<div class="skill-row"><b>${esc(s.g)}</b> &nbsp;${s.items.map(esc).join(' · ')}</div>`).join('')}
      <h2>Education</h2>
      <div class="grid2">${C.edu.map(e=>`<div class="edu-item"><div class="d">${esc(e.d)}</div><div class="s">${esc(e.s)} · ${esc(e.y)}</div></div>`).join('')}</div>
      <h2>Certifications & Languages</h2>
      <div class="row">${C.certs.map(esc).join('  ·  ')}</div>
      <div class="row langs">${C.langs.map(l=>`<b>${esc(l[0])}</b> ${esc(l[1])}`).join('  ·  ')}</div>
    </div>
  </body></html>`;
}

/* ============================================================
   TEMPLATE 5 — "Warm Professional": warm paper, deep green, serif heads, photo
   ============================================================ */
function tpl5() {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,500;0,600;0,700;1,400&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
  @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
  :root{--paper:#faf7f1;--green:#274b3a;--green2:#356048;--ink:#2a2c26;--muted:#6a6a5f;--rule:#e3ddd0}
  body{font-family:'Source Sans 3',sans-serif;color:var(--ink);font-size:9.5pt;line-height:1.5;background:var(--paper)}
  html,body{background:var(--paper)}
  .top{display:grid;grid-template-columns:1fr 2.7cm;gap:.6cm;align-items:center;padding:1.3cm 1.5cm .5cm;border-bottom:2.5pt solid var(--green)}
  .name{font-family:'Spectral';font-weight:700;font-size:25pt;color:var(--green);line-height:1.02}
  .title{font-family:'Spectral';font-style:italic;font-size:12pt;color:var(--green2);margin-top:.08cm}
  .contact{margin-top:.22cm;font-size:8.6pt;color:var(--muted);display:flex;flex-wrap:wrap;gap:.05cm .45cm}
  .photo{width:2.7cm;height:2.7cm;border-radius:50%;object-fit:cover;object-position:top;border:2pt solid var(--green)}
  .page{padding:.5cm 1.5cm 1.2cm}
  .summary{margin-top:.35cm;font-size:9.8pt;color:#3a3c34}
  h2{font-family:'Spectral';font-weight:600;font-size:12pt;color:var(--green);margin:.55cm 0 .2cm;padding-bottom:.1cm;border-bottom:1pt solid var(--rule);display:flex;align-items:center;gap:.25cm}
  h2::before{content:'❧';color:var(--green2);font-size:11pt}
  .job{margin-top:.3cm}
  .job-h{display:flex;justify-content:space-between;align-items:baseline;gap:.5cm}
  .role{font-family:'Spectral';font-weight:600;font-size:11pt}
  .date{font-size:8.4pt;color:var(--muted);font-style:italic;white-space:nowrap}
  .org{font-size:9pt;color:var(--green2);font-weight:600;margin-top:.02cm}
  ul{list-style:none;margin-top:.1cm}
  li{position:relative;padding-left:.4cm;margin-top:.08cm}
  li::before{content:'•';position:absolute;left:.05cm;color:var(--green2)}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:.05cm .9cm}
  .skill-row{margin-top:.12cm;font-size:9.2pt}.skill-row b{font-family:'Spectral';color:var(--green);font-weight:600}
  .edu-item{margin-top:.14cm;font-size:9.2pt}.edu-item .d{font-weight:600}.edu-item .s{color:var(--muted);font-size:8.6pt}
  .row{font-size:9pt;color:#3a3c34;margin-top:.1cm}.row b{font-family:'Spectral';color:var(--green)}
  </style></head><body>
    <div class="top">
      <div><div class="name">${esc(C.name)}</div><div class="title">${esc(C.title)}</div>
      <div class="contact"><span>${esc(C.email)}</span><span>${esc(C.phone)}</span><span>${esc(C.loc)}</span><span>${esc(C.linkedin)}</span></div></div>
      <img class="photo" src="${PHOTO}" alt="">
    </div>
    <div class="page">
      <p class="summary">${esc(C.summary)}</p>
      <h2>Experience</h2>
      ${C.exp.map(e=>`<div class="job"><div class="job-h"><span class="role">${esc(e.role)}</span><span class="date">${esc(e.date)}</span></div><div class="org">${esc(e.org)} · ${esc(e.loc)}</div><ul>${e.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
      <h2>Technical Skills</h2>
      ${C.skills.map(s=>`<div class="skill-row"><b>${esc(s.g)}:</b> ${s.items.map(esc).join(' · ')}</div>`).join('')}
      <h2>Education</h2>
      <div class="grid2">${C.edu.map(e=>`<div class="edu-item"><div class="d">${esc(e.d)}</div><div class="s">${esc(e.s)} · ${esc(e.y)}</div></div>`).join('')}</div>
      <h2>Certifications & Languages</h2>
      <div class="row">${C.certs.map(esc).join('  ·  ')}</div>
      <div class="row">${C.langs.map(l=>`<b>${esc(l[0])}</b> ${esc(l[1])}`).join('  ·  ')}</div>
    </div>
  </body></html>`;
}

const templates = [
  ['CV_Analityk_01_ATS_Clean.pdf', tpl1],
  ['CV_Analityk_02_Slate_Sidebar.pdf', tpl2],
  ['CV_Analityk_03_Teal_Editorial.pdf', tpl3],
  ['CV_Analityk_04_Data_KPI.pdf', tpl4],
  ['CV_Analityk_05_Warm_Professional.pdf', tpl5],
];

module.exports = { templates, OUT_DIR };

if (require.main === module)
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const [file, fn] of templates) {
    await page.setContent(fn(), { waitUntil: 'networkidle', timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);
    await page.pdf({ path: OUT_DIR + file, format: 'A4', printBackground: true, margin: { top: '0', bottom: '0', left: '0', right: '0' } });
    console.log('saved', file);
  }
  await browser.close();
})();

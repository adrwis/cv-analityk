// Delivery Manager (FinTech) — navy + gold two-column redesign.
// Source: Claude Design handoff (CV - Adriana Gusciora.html, 2026-05-02).
// Photo: ../adriana-gusciora-pl/zdjecia/ada2.jpg embedded as base64 data URL.

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const outputFile = 'AG_Delivery Manager_FinTech_Redesign_EN.pdf';

const photoPath = path.resolve(__dirname, '..', '..', 'adriana-gusciora-pl', 'zdjecia', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Adriana Guściora — Delivery Manager · FinTech</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
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
    --side: oklch(0.965 0.008 85);
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:oklch(0.90 0.01 260);color:var(--ink);font-family:"Inter",-apple-system,Helvetica,sans-serif;}
  body{padding:32px 16px;display:flex;flex-direction:column;align-items:center;gap:24px;}

  .page{
    width: 794px;
    height: 1123px;
    background: var(--paper);
    box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 24px 60px -20px rgba(20,30,60,.18);
    color: var(--ink);
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 250px 1fr;
  }

  .side{
    background: var(--navy);
    color: oklch(0.94 0.01 240);
    padding: 38px 26px 38px 32px;
    font-size: 9pt;
    line-height: 1.5;
    position: relative;
  }
  .side::before{
    content:"";
    position:absolute; top:0; left:0; right:0; height: 4px;
    background: var(--gold);
  }

  .photo{
    width: 150px; height: 150px;
    border-radius: 50%;
    background: oklch(0.45 0.04 258);
    margin: 6px auto 22px auto;
    border: 3px solid var(--gold);
    box-shadow: 0 0 0 6px oklch(0.32 0.06 258);
    position: relative;
    overflow: hidden;
  }
  .photo img{
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }

  .side h3{
    font-family:"Inter", sans-serif;
    font-weight: 600;
    font-size: 9.5pt;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--gold);
    margin: 0 0 10px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid oklch(0.45 0.05 258);
    position: relative;
  }
  .side h3::after{
    content:"";
    position:absolute;
    left:0; bottom:-1px;
    width: 28px; height: 1px;
    background: var(--gold);
  }
  .side section{ margin-bottom: 22px; }
  .side section:last-child{ margin-bottom:0; }

  .contact-row{
    display:grid;
    grid-template-columns: 14px 1fr;
    gap: 10px;
    align-items: start;
    padding: 5px 0;
    color: oklch(0.92 0.01 240);
    font-size: 8.6pt;
    line-height: 1.45;
    word-break: break-word;
  }
  .contact-row a{ color:inherit; text-decoration:none; }
  .contact-row .ico{
    color: var(--gold);
    font-size: 10pt;
    line-height: 1;
    margin-top: 1px;
  }

  .skill{ margin-bottom: 9px; }
  .skill-name{
    font-size: 8.8pt;
    color: oklch(0.94 0.01 240);
    margin-bottom: 4px;
    display:flex;
    justify-content: space-between;
    font-weight: 400;
  }
  .skill-name b{ font-weight: 500; }
  .skill-name .lvl{
    color: var(--gold);
    font-size: 7.5pt;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .bar{
    height: 3px;
    background: oklch(0.40 0.05 258);
    border-radius: 2px;
    overflow:hidden;
    position: relative;
  }
  .bar > span{
    display:block; height: 100%;
    background: linear-gradient(90deg, var(--gold-deep), var(--gold));
  }

  .lang-row{
    display:grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: baseline;
    padding: 4px 0;
    border-bottom: 1px dotted oklch(0.45 0.05 258);
    font-size: 8.8pt;
    color: oklch(0.94 0.01 240);
  }
  .lang-row:last-child{ border-bottom:none; }
  .lang-row .lvl{
    color: var(--gold);
    font-size: 7.4pt;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .edu-side .edu-item{ margin-bottom: 12px; }
  .edu-side .edu-item:last-child{ margin-bottom:0; }
  .edu-side .yr{
    font-size: 7.3pt;
    letter-spacing: 0.12em;
    color: var(--gold);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 2px;
  }
  .edu-side .deg{
    font-family:"Cormorant Garamond", serif;
    font-size: 11pt;
    font-weight: 500;
    color: oklch(0.96 0.005 240);
    line-height: 1.2;
    margin-bottom: 1px;
  }
  .edu-side .inst{
    font-size: 8.3pt;
    color: oklch(0.82 0.01 240);
    line-height: 1.35;
  }

  .cert-side .item{
    font-size: 8.4pt;
    color: oklch(0.90 0.01 240);
    line-height: 1.35;
    margin-bottom: 7px;
    padding-left: 10px;
    position: relative;
  }
  .cert-side .item::before{
    content:"";
    position:absolute; left:0; top: 0.55em;
    width:4px; height:4px;
    background: var(--gold);
    transform: rotate(45deg);
  }
  .cert-side .item b{ color: oklch(0.96 0.005 240); font-weight:500; }
  .cert-side .item .yr{
    color: var(--gold); font-weight:500;
    font-size: 7.4pt; letter-spacing: 0.06em;
    margin-left: 4px;
  }

  .main{
    padding: 38px 38px 30px 36px;
    color: var(--ink);
    font-size: 9.5pt;
    line-height: 1.5;
    overflow: hidden;
  }

  .name-block{ margin-bottom: 14px; }
  .name{
    font-family:"Cormorant Garamond", serif;
    font-weight: 500;
    font-size: 38pt;
    line-height: 1.0;
    letter-spacing: -0.005em;
    color: var(--navy-deep);
    margin: 0;
  }
  .name .last{ font-style: italic; color: var(--navy); font-weight: 500; }
  .role-line{
    display:flex;
    align-items:center;
    gap: 12px;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--rule);
  }
  .role-line::before{
    content:"";
    width: 28px; height: 2px; background: var(--gold);
    display:block;
  }
  .role{
    font-family:"Inter", sans-serif;
    font-weight: 500;
    font-size: 10pt;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--navy);
  }

  .main h2{
    font-family:"Inter", sans-serif;
    font-weight: 600;
    font-size: 10pt;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--navy);
    margin: 18px 0 10px 0;
    padding-bottom: 6px;
    position: relative;
    display:flex; align-items:center; gap: 10px;
  }
  .main h2::after{
    content:"";
    flex: 1;
    height: 1px;
    background: var(--rule);
  }
  .main h2 .ico{
    width: 16px; height: 16px;
    display:inline-flex;
    align-items:center; justify-content:center;
    color: var(--gold);
    font-size: 12pt;
    line-height: 1;
  }

  .profile{
    font-size: 9.4pt;
    line-height: 1.55;
    color: var(--ink);
    margin: 0;
  }
  .profile strong{ color: var(--navy-deep); font-weight: 600; }

  .job{
    margin-bottom: 13px;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .job:last-child{ margin-bottom: 0; }

  .job-head{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    gap: 14px;
    margin-bottom: 4px;
  }
  .job-title{
    font-family:"Cormorant Garamond", serif;
    font-weight: 600;
    font-size: 12.5pt;
    color: var(--navy-deep);
    line-height: 1.25;
    letter-spacing: -0.005em;
    padding-right: 2px;
  }
  .job-date{
    font-family:"Inter", sans-serif;
    font-size: 7.4pt;
    letter-spacing: 0.12em;
    color: var(--gold-deep);
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 600;
  }
  .job-meta{
    font-size: 8.8pt;
    color: var(--ink-soft);
    margin-top: 2px;
    margin-bottom: 4px;
    font-style: italic;
    font-family:"Cormorant Garamond", serif;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  .job ul{
    margin: 3px 0 0 0;
    padding: 0;
    list-style: none;
  }
  .job li{
    position: relative;
    padding-left: 14px;
    margin-bottom: 2px;
    color: var(--ink);
    font-size: 9pt;
    line-height: 1.45;
  }
  .job li::before{
    content: "";
    position: absolute;
    left: 0; top: 0.55em;
    width: 5px; height: 5px;
    border: 1px solid var(--gold);
    border-radius: 50%;
    background: transparent;
  }
  .job li b{ font-weight: 600; color: var(--navy-deep); }

  .impact{
    margin-top: 5px;
    padding: 6px 10px;
    background: var(--gold-soft);
    border-left: 2px solid var(--gold);
    font-size: 8.6pt;
    line-height: 1.45;
    color: var(--ink-soft);
  }
  .impact .tag{
    display: inline;
    font-family:"Inter", sans-serif;
    font-size: 6.8pt;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--gold-deep);
    margin-right: 4px;
    font-weight: 700;
  }

  .pgnum{
    position: absolute;
    bottom: 18px; right: 36px;
    font-family:"Inter", sans-serif;
    font-size: 7.5pt;
    letter-spacing: 0.18em;
    color: var(--ink-mute);
    text-transform: uppercase;
  }
  .pgnum b{ color: var(--navy); font-weight: 600; }

  .gdpr{
    margin-top: 14px;
    padding-top: 10px;
    border-top: 1px solid var(--rule-soft);
    font-size: 6.4pt;
    color: var(--ink-mute);
    line-height: 1.5;
    letter-spacing: 0.005em;
    font-family:"Inter",sans-serif;
  }

  .page2 .side{ padding-top: 32px; }
  .page2 .main{ padding-top: 32px; }
  .page2-name{
    font-family:"Cormorant Garamond", serif;
    font-style: italic;
    font-size: 14pt;
    color: var(--navy);
    margin: 0 0 4px 0;
  }
  .page2-tag{
    font-size: 7.4pt;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--gold-deep);
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--rule);
  }

  .tools-grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 14px;
    margin-top: 4px;
  }
  .tool-cat h4{
    font-family:"Inter", sans-serif;
    font-weight: 600;
    font-size: 7.6pt;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--navy);
    margin: 0 0 4px 0;
  }
  .tool-cat p{
    font-size: 8.6pt;
    color: var(--ink-soft);
    margin: 0;
    line-height: 1.45;
  }

  .stat-row{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 6px;
    margin-bottom: 8px;
  }
  .stat{
    text-align: center;
    padding: 10px 6px;
    background: oklch(0.97 0.008 250);
    border-top: 2px solid var(--gold);
  }
  .stat .num{
    font-family:"Cormorant Garamond", serif;
    font-size: 22pt;
    font-weight: 600;
    color: var(--navy-deep);
    line-height: 1;
  }
  .stat .lbl{
    margin-top: 4px;
    font-size: 7pt;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-mute);
    line-height: 1.3;
  }

  @media print{
    @page{ size: A4; margin: 0; }
    html,body{ background:#fff; padding:0; margin:0; }
    body{ padding:0; gap:0; align-items:flex-start; }
    .page{
      box-shadow:none;
      width: 210mm;
      height: 297mm;
      page-break-after: always;
      break-after: page;
    }
    .page:last-child{ page-break-after: auto; }
  }
</style>
</head>
<body>

<div class="page page1">
  <aside class="side">
    <div class="photo"><img src="${photoDataUrl}" alt="Adriana Guściora"></div>

    <section>
      <h3>Contact</h3>
      <div class="contact-row"><span class="ico">&#9993;</span><a href="mailto:Gusciora.Ada@gmail.com">Gusciora.Ada@gmail.com</a></div>
      <div class="contact-row"><span class="ico">in</span><a href="https://linkedin.com/in/adriana-gu">linkedin.com/in/adriana-gu</a></div>
      <div class="contact-row"><span class="ico">&#9678;</span>Remote · Poland</div>
      <div class="contact-row"><span class="ico">&#9872;</span>Open to FinTech &amp; Banking</div>
    </section>

    <section>
      <h3>Core Skills</h3>
      <div class="skill">
        <div class="skill-name"><b>Delivery &amp; PM</b><span class="lvl">Expert</span></div>
        <div class="bar"><span style="width:95%"></span></div>
      </div>
      <div class="skill">
        <div class="skill-name"><b>Stakeholder Mgmt</b><span class="lvl">Expert</span></div>
        <div class="bar"><span style="width:92%"></span></div>
      </div>
      <div class="skill">
        <div class="skill-name"><b>Financial Forecasting</b><span class="lvl">Expert</span></div>
        <div class="bar"><span style="width:90%"></span></div>
      </div>
      <div class="skill">
        <div class="skill-name"><b>Agile / Scrum</b><span class="lvl">Advanced</span></div>
        <div class="bar"><span style="width:85%"></span></div>
      </div>
      <div class="skill">
        <div class="skill-name"><b>Risk Management</b><span class="lvl">Advanced</span></div>
        <div class="bar"><span style="width:82%"></span></div>
      </div>
      <div class="skill">
        <div class="skill-name"><b>Power BI / DAX</b><span class="lvl">Advanced</span></div>
        <div class="bar"><span style="width:88%"></span></div>
      </div>
      <div class="skill">
        <div class="skill-name"><b>SQL / Alteryx</b><span class="lvl">Proficient</span></div>
        <div class="bar"><span style="width:75%"></span></div>
      </div>
    </section>

    <section>
      <h3>Languages</h3>
      <div class="lang-row"><span>Polish</span><span class="lvl">Native</span></div>
      <div class="lang-row"><span>English</span><span class="lvl">C1 · Fluent</span></div>
      <div class="lang-row"><span>Portuguese</span><span class="lvl">CELPE-BRAS</span></div>
      <div class="lang-row"><span>Italian</span><span class="lvl">A2</span></div>
    </section>
  </aside>

  <main class="main">
    <div class="name-block">
      <h1 class="name">Adriana <span class="last">Guściora</span></h1>
      <div class="role-line">
        <span class="role">Delivery Manager · Financial Services &amp; FinTech</span>
      </div>
    </div>

    <h2><span class="ico">&#9612;</span>Profile</h2>
    <p class="profile">
      Delivery and project leader with <strong>8+ years</strong> across IT delivery, financial services and FinTech (HSBC, Trustwave). Managed cross-functional teams of <strong>up to 15</strong> and owned people-cost allocation across <strong>~40 IT projects with a $15M annual budget</strong>. Combine PRINCE2 and Agile / Scrum with full P&amp;L responsibility for client accounts and stakeholder management at executive level. Skilled in financial forecasting, spend monitoring and risk mitigation across regulated banking and software environments.
    </p>

    <div class="stat-row">
      <div class="stat"><div class="num">8+</div><div class="lbl">Years<br>Delivery</div></div>
      <div class="stat"><div class="num">$15M</div><div class="lbl">Annual<br>Budget Owned</div></div>
      <div class="stat"><div class="num">~40</div><div class="lbl">IT Projects<br>Coordinated</div></div>
      <div class="stat"><div class="num">15</div><div class="lbl">Team<br>Members Led</div></div>
    </div>

    <h2><span class="ico">&#9612;</span>Work Experience</h2>

    <article class="job">
      <div class="job-head">
        <div class="job-title">Senior Finance Analyst</div>
        <div class="job-date">Oct 2024 — Present</div>
      </div>
      <div class="job-meta">Trustwave Sp. z o.o. — Delivery Coordination · Performance Mgmt · Warsaw / Remote</div>
      <ul>
        <li>Analyse IT financial processes and deliver dashboards: <b>high-level views for CFO &amp; Financial Directors</b>, detailed cuts for department heads.</li>
        <li>Build <b>Power BI</b> dashboards and <b>Alteryx</b> ETL pipelines used in monthly financial reviews.</li>
        <li>Coordinate cross-functional collaboration between finance, IT and business stakeholders on standardised reporting templates.</li>
      </ul>
      <div class="impact">
        <span class="tag">Impact ·</span>Re-engineered FP&amp;A and Performance Management end-to-end: diagnosed monthly-reporting bottlenecks, designed and implemented improvements, produced before/after documentation and trained the team across the full toolset (Excel, Power Query, Alteryx, SQL, Power BI).
      </div>
    </article>

    <article class="job">
      <div class="job-head">
        <div class="job-title">Project Finance Analyst</div>
        <div class="job-date">Jul 2022 — Apr 2024</div>
      </div>
      <div class="job-meta">Alten Polska Sp. z o.o. — HSBC engagement · Cracow / Remote</div>
      <ul>
        <li>Coordinated a team of <b>5 analysts</b>; owned people-cost allocation across <b>~40 IT projects, $15M annual budget</b> — headcount planning, resource forecasting, spend monitoring, variance analysis.</li>
        <li>Operated in Agile / Scrum with global teams: sprint planning, backlog grooming, daily stand-ups; ran day-to-day work in <b>Jira and Confluence</b> with full RAID logs.</li>
        <li>Built Power BI dashboards and Excel models for budget &amp; forecast; aligned reporting standards with Central Finance Controlling and ran stakeholder training.</li>
      </ul>
      <div class="impact">
        <span class="tag">Impact ·</span>Audited each analyst's workflow, diagnosed inefficiencies, rolled out streamlined processes and produced new documentation; trained the team to operate the upgraded toolset (Excel, Power Query) confidently.
      </div>
    </article>
  </main>

  <div class="pgnum"><b>01</b> &nbsp;/&nbsp; 02</div>
</div>


<div class="page page2">
  <aside class="side">

    <section>
      <h3>Adriana</h3>
      <div class="contact-row" style="margin-top:-4px"><span class="ico">&#9993;</span><a href="mailto:Gusciora.Ada@gmail.com">Gusciora.Ada@gmail.com</a></div>
      <div class="contact-row"><span class="ico">in</span><a href="https://linkedin.com/in/adriana-gu">linkedin.com/in/adriana-gu</a></div>
    </section>

    <section class="edu-side">
      <h3>Education</h3>
      <div class="edu-item">
        <div class="yr">2020 — 2021</div>
        <div class="deg">Postgraduate · Quality Manager</div>
        <div class="inst">SGH Warsaw School of Economics<br><em>Lean Management · Six Sigma · Kaizen</em></div>
      </div>
      <div class="edu-item">
        <div class="yr">2012 — 2017</div>
        <div class="deg">MA · Clinical Psychology</div>
        <div class="inst">SWPS University of Social Sciences and Humanities</div>
      </div>
      <div class="edu-item">
        <div class="yr">2012 — 2016</div>
        <div class="deg">Eng. · Management &amp; Production Engineering</div>
        <div class="inst">Warsaw University of Technology</div>
      </div>
      <div class="edu-item">
        <div class="yr">2009 — 2010</div>
        <div class="deg">Rotary Youth Exchange · Brazil</div>
        <div class="inst">ANGLO High School, Penápolis</div>
      </div>
    </section>

    <section class="cert-side">
      <h3>Certifications</h3>
      <div class="item"><b>PRINCE2 Foundation</b> · AXELOS<span class="yr">2020</span></div>
      <div class="item"><b>Six Sigma Quality Management</b> · SGH<span class="yr">2020</span></div>
      <div class="item"><b>Business Analytics in Power BI</b> · LabMasters<span class="yr">2022</span></div>
      <div class="item"><b>SQL Advanced</b> · LabMasters<span class="yr">2025</span></div>
      <div class="item"><b>Project Management</b> · INCODO<span class="yr">2016</span></div>
    </section>

    <section>
      <h3>Method</h3>
      <div class="contact-row"><span class="ico">&#9670;</span>PRINCE2 Foundation</div>
      <div class="contact-row"><span class="ico">&#9670;</span>Agile / Scrum delivery</div>
      <div class="contact-row"><span class="ico">&#9670;</span>Risk &amp; RAID management</div>
      <div class="contact-row"><span class="ico">&#9670;</span>Change &amp; adoption</div>
      <div class="contact-row"><span class="ico">&#9670;</span>Lean / Six Sigma</div>
    </section>

  </aside>

  <main class="main">
    <div class="page2-name">Adriana Guściora — <em>continued</em></div>
    <div class="page2-tag">Delivery Manager · Financial Services &amp; FinTech</div>

    <h2><span class="ico">&#9612;</span>Work Experience <span style="font-family:'Cormorant Garamond',serif;font-style:italic;text-transform:none;letter-spacing:0;color:var(--ink-mute);font-size:9pt;font-weight:400;margin-left:6px">continued</span></h2>

    <article class="job">
      <div class="job-head">
        <div class="job-title">Smartsheet Developer</div>
        <div class="job-date">Jun 2021 — Jun 2022</div>
      </div>
      <div class="job-meta">Zimmer Biomet Polska — Project Coordinator · Global Business Support · Warsaw</div>
      <ul>
        <li>Led delivery of the <b>Global Transition Process</b> across <b>14 departments</b>: scope, timeline, milestones and stakeholder progress reporting.</li>
        <li>Organised and facilitated training workshops for global end-users and Smartsheet developers.</li>
        <li>Built a <b>Continuous Improvement</b> tracker in PowerApps to standardise process change management.</li>
      </ul>
      <div class="impact">
        <span class="tag">Impact ·</span>Designed and rolled out a new generation of dashboards reporting Global Transition migration progress for 14 departments, owned change communication around each release and trained both maintainers and end-users.
      </div>
    </article>

    <article class="job">
      <div class="job-head">
        <div class="job-title">BI Developer &amp; Project Manager</div>
        <div class="job-date">Sep 2018 — May 2021</div>
      </div>
      <div class="job-meta">ISS Facility Services — Project Management · Warsaw</div>
      <ul>
        <li>Managed cross-functional delivery teams of <b>4–15</b> people with full <b>P&amp;L responsibility</b> for an assigned customer account: revenue tracking, cost control, margin optimisation.</li>
        <li>End-to-end project execution: scope, timeline, budget, financial forecasting, monthly settlements and invoice reconciliation.</li>
        <li>Conducted internal audits and risk reviews; delivered executive Board reports in Power BI translating data into business recommendations.</li>
      </ul>
      <div class="impact">
        <span class="tag">Impact ·</span>Led the project to streamline invoice flow for a global banking client — designed, implemented and documented the new process, then trained internal team and client stakeholders for adoption (Power Automate, SharePoint, Excel). In parallel led the <b>Novatorium</b> initiative — an internal workflow for capturing new ideas across customer accounts (Power Automate, PowerApps, Power BI, SharePoint).
      </div>
    </article>

    <article class="job">
      <div class="job-head">
        <div class="job-title">Junior Project Manager</div>
        <div class="job-date">Feb 2016 — Aug 2018</div>
      </div>
      <div class="job-meta">Jeronimo Martins (Lisbon &amp; Warsaw) · Robert Bosch (Warsaw) — Management Trainee</div>
      <ul>
        <li>International project experience across <b>Portugal &amp; Poland</b>: Employer Branding, Store Excellence, Logistics.</li>
        <li>Stakeholder coordination and workshop facilitation in matrix organisations.</li>
      </ul>
    </article>

    <h2><span class="ico">&#9612;</span>Toolbox</h2>
    <div class="tools-grid">
      <div class="tool-cat">
        <h4>Project Mgmt</h4>
        <p>Jira · Confluence · Smartsheet · MS Project · SharePoint</p>
      </div>
      <div class="tool-cat">
        <h4>Finance &amp; P&amp;L</h4>
        <p>IT P&amp;L · Cost allocation · Forecasting · Invoice reconciliation</p>
      </div>
      <div class="tool-cat">
        <h4>BI &amp; Reporting</h4>
        <p>Power BI · DAX · Power Query · Excel Power Pivot · SQL · Alteryx · Cognos</p>
      </div>
      <div class="tool-cat">
        <h4>Power Platform</h4>
        <p>Power Automate · PowerApps · SharePoint workflows</p>
      </div>
      <div class="tool-cat">
        <h4>AI &amp; Modern</h4>
        <p>Claude Code · Prompt Engineering</p>
      </div>
      <div class="tool-cat">
        <h4>Frameworks</h4>
        <p>PRINCE2 · Agile / Scrum · Lean · Six Sigma · Kaizen</p>
      </div>
    </div>

    <p class="gdpr">
      I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR).
    </p>
  </main>

  <div class="pgnum"><b>02</b> &nbsp;/&nbsp; 02</div>
</div>

</body>
</html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });

  const pdfPath = path.join(outputDir, outputFile);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`Generated: ${pdfPath}`);
})();

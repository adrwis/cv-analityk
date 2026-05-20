const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

// Tailored CV data for: Manager Data Analytics (Global Fintech)
const cvData = {
  en: {
    fileName: 'AG_Manager Data Analytics_Global Fintech_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Data Analytics Manager',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote',
    summary: 'Data Analytics Manager with 8+ years of experience in Financial Services, including 5+ years of hands-on work in banking and fintech environments (HSBC, Trustwave). Proven ability to bridge complex data landscapes and executive-level decision-making: designing Power BI dashboards for C-level stakeholders, leading analytical teams, and translating raw data into actionable growth strategies. Strong SQL and BI expertise combined with process automation skills. Experienced in managing cross-functional teams up to 15 people and presenting findings to Financial Directors, CFOs, and Board members.',
    sections: {
      experience: 'WORK EXPERIENCE',
      skills: 'KEY SKILLS',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS & TRAINING',
      languages: 'LANGUAGES',
    },
    jobs: [
      {
        role: 'Senior Finance Analyst',
        company: 'Trustwave Sp. z o.o. · Performance Management · Warsaw',
        period: 'Oct 2024 – present',
        bullets: [
          'Designing financial dashboards for Financial Directors and CFO: delivering "at-a-glance" insights in Power BI for executive decision-making',
          'Translating complex financial data into actionable business recommendations for stakeholders',
          'Automating financial reporting pipelines: Power Query, Alteryx: reducing manual workload and cycle time',
          'SQL analytics and data modeling supporting strategic decision-making',
          'Building and maintaining ETL pipelines in Alteryx for data cleansing and consolidated reporting',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. · Cracow / Remote',
        period: 'Jul 2022 – Apr 2024',
        bullets: [
          'Coordinating a team of 5 analysts at a global bank (HSBC)',
          'Managing finance processes for ~40 projects worth $15M: budgeting, forecasting, resource allocation',
          'Designing BI reports and dashboards: SQL, Power Query, Power BI, Cognos',
          'Presenting analytical findings to stakeholders and recommending optimization actions',
          'Automating multi-source reporting: Power Query',
          'Training teams on analytical tools (Power BI, Power Query, Excel)',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska · Global Business Support · Warsaw',
        period: 'Jun 2021 – Jun 2022',
        bullets: [
          'Reporting for Global Transition Process across 14 departments: scope/timeline planning, stakeholder updates',
          'Tool training for global end users and Smartsheet developers',
          'Creating Continuous Improvement tracking app: PowerApps',
        ],
      },
      {
        role: 'BI Developer & Analyst',
        company: 'ISS Facility Services · Project Management · Warsaw',
        period: 'Sep 2018 – May 2021',
        bullets: [
          'Managing cross-functional teams (4–15 people) and conducting internal audits',
          'Global collaboration with a banking sector client: invoice flow process analysis, planning and implementing process improvements',
          'Dashboards and board-level reports: Power BI and SharePoint',
          'Process automation: Power Automate, SharePoint, Power BI',
          'Budgeting, forecasting and non-financial analysis',
        ],
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        period: 'Feb 2016 – Aug 2018',
        bullets: [
          'International experience (Portugal & Poland): Employer Branding, Store Excellence, Logistics',
          'Stakeholder coordination in matrix organizational setups',
        ],
      },
    ],
    skillGroups: [
      { name: 'BI & Visualization', items: 'Power BI (dashboards, data models, DAX measures, executive reporting) · Advanced Excel (Power Pivot, complex formulas, scenario analysis) · Power Query (robust transformations, automated multi-source consolidation)' },
      { name: 'Data & SQL', items: 'SQL (advanced queries, joins, CTEs, data modeling) · Alteryx (ETL workflows, data cleansing) · Cognos · SharePoint' },
      { name: 'Leadership & Stakeholder Management', items: 'Team coordination (up to 15 people) · C-level presentation & reporting · Cross-functional collaboration · Training & knowledge transfer · PRINCE2 Foundation' },
      { name: 'Financial Analytics', items: 'Budgeting & forecasting · Variance & trend analysis · Cost allocation · P&L reporting · ROI analysis' },
      { name: 'AI & Automation', items: 'Power Automate · Claude Code (AI-assisted development) · Prompt Engineering · PowerApps' },
    ],
    education: [
      { year: '2020–2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012–2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012–2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009–2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'SQL Basics & Intermediate, 2023',
      'Business Analytics in Power BI - LabMasters, 2022',
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) · English (advanced) · Portuguese (intermediate, CELPE-Bras) · Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
};

// Load photo as base64
const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

function buildHTML(data) {
  const jobsHTML = data.jobs.map(j => `
    <div class="job">
      <div class="job-header">
        <span class="job-role">${j.role}</span>
        <span class="job-period">${j.period}</span>
      </div>
      <div class="job-company">${j.company}</div>
      <ul>${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  `).join('');

  const skillsHTML = data.skillGroups.map(g => `
    <div class="skill-group">
      <span class="skill-name">${g.name}:</span> ${g.items}
    </div>
  `).join('');

  const eduHTML = data.education.map(e => `
    <div class="edu-item">
      <span class="edu-year">${e.year}</span>
      <div>
        <span class="edu-title">${e.title}</span> - <span class="edu-school">${e.school}</span>
        ${e.desc ? `<span class="edu-desc"> · ${e.desc}</span>` : ''}
      </div>
    </div>
  `).join('');

  const certsHTML = data.certs.map(c => `<span class="cert-tag">${c}</span>`).join('');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-size: 9.5pt;
    line-height: 1.45;
    color: #1a1a2e;
    padding: 32px 36px;
    max-width: 210mm;
  }

  /* Header */
  .header {
    border-bottom: 2.5px solid #1b2a4a;
    padding-bottom: 12px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .header-text { flex: 1; }
  .header h1 {
    font-size: 20pt;
    font-weight: 700;
    color: #1b2a4a;
    letter-spacing: -0.5px;
    margin-bottom: 2px;
  }
  .header .title {
    font-size: 11pt;
    font-weight: 600;
    color: #2d5aa0;
    margin-bottom: 4px;
  }
  .header .contact {
    font-size: 8.5pt;
    color: #555;
  }

  /* Summary */
  .summary {
    background: #f0f4fa;
    border-left: 3px solid #2d5aa0;
    padding: 9px 12px;
    margin-bottom: 14px;
    font-size: 9pt;
    color: #333;
    text-align: justify;
  }

  /* Section headers */
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    color: #1b2a4a;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1.5px solid #ccd5e0;
    padding-bottom: 3px;
    margin-top: 13px;
    margin-bottom: 8px;
  }

  /* Jobs */
  .job { margin-bottom: 10px; }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }
  .job-role {
    font-weight: 700;
    font-size: 9.5pt;
    color: #1b2a4a;
  }
  .job-company {
    font-size: 8.5pt;
    color: #555;
    margin-bottom: 3px;
  }
  .job-period {
    font-size: 8.5pt;
    color: #2d5aa0;
    font-weight: 500;
    white-space: nowrap;
  }
  ul {
    padding-left: 16px;
    margin-top: 2px;
  }
  li {
    margin-bottom: 1.5px;
    font-size: 9pt;
  }
  li::marker { color: #2d5aa0; }

  /* Skills */
  .skill-group {
    margin-bottom: 5px;
    font-size: 9pt;
  }
  .skill-name {
    font-weight: 700;
    color: #1b2a4a;
  }

  /* Education */
  .edu-item {
    display: flex;
    gap: 10px;
    margin-bottom: 4px;
    font-size: 9pt;
  }
  .edu-year {
    font-weight: 600;
    color: #2d5aa0;
    min-width: 70px;
    font-size: 8.5pt;
  }
  .edu-title { font-weight: 600; }
  .edu-school { color: #555; }
  .edu-desc { color: #666; font-style: italic; }

  /* Certs */
  .certs-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .cert-tag {
    background: #e8eef6;
    border: 1px solid #ccd5e0;
    border-radius: 3px;
    padding: 2px 7px;
    font-size: 8.5pt;
    color: #1b2a4a;
  }

  /* Languages & GDPR */
  .languages {
    font-size: 9pt;
    margin-top: 4px;
  }
  .gdpr {
    font-size: 7.5pt;
    color: #888;
    margin-top: 16px;
    text-align: center;
    font-style: italic;
  }

  /* Print: keep it tight for 2-page A4 */
  @page {
    size: A4;
    margin: 12mm 14mm;
  }
</style>
</head>
<body>

<div class="header">
  <div class="header-text">
    <h1>${data.name}</h1>
    <div class="title">${data.title}</div>
    <div class="contact">${data.contact}</div>
  </div>
</div>

<div class="summary">${data.summary}</div>

<div class="section-title">${data.sections.experience}</div>
${jobsHTML}

<div class="section-title">${data.sections.skills}</div>
${skillsHTML}

<div class="section-title">${data.sections.education}</div>
${eduHTML}

<div class="section-title">${data.sections.certifications}</div>
<div class="certs-grid">${certsHTML}</div>

<div class="section-title">${data.sections.languages}</div>
<div class="languages">${data.languages}</div>

<div class="gdpr">${data.gdpr}</div>

</body>
</html>`;
}

async function generatePDF() {
  const data = cvData.en;
  const html = buildHTML(data);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });

  const pdfPath = path.join(outputDir, data.fileName);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' },
  });

  await browser.close();
  console.log(`Generated: ${pdfPath}`);
}

(async () => {
  await generatePDF();
  console.log('Done!');
})();

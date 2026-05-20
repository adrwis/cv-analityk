const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_Business Intelligence Developer_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Business Intelligence Developer',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote',
    summary: 'BI Developer & Data Analyst with 8+ years of experience in data transformation, automation, and delivering actionable insights through Power BI, Power Query, and SQL. Proven track record of designing data pipelines, building semantic models, and automating repetitive processes using Power Automate, Alteryx, and Power Platform. Experienced in collaborating with technical and non-technical stakeholders, documenting data flows, and ensuring data quality through rigorous testing and governance. Passionate about continuous improvement, streamlining processes, and expanding competencies through learning new tools and methodologies.',
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
        company: 'Trustwave Sp. z o.o. - Performance Management - Warsaw / Remote',
        period: 'Oct 2024 - present',
        bullets: [
          'Designed and maintained Power BI dashboards combining multiple data sets - budget vs actuals, forecast, variance analysis - providing organisational insight for Financial Directors and CFO',
          'Built automated data pipelines using Power Query and Alteryx - ingesting data from multiple sources, transforming and consolidating into clean, reliable data models',
          'Designed standardized reporting templates with Power Query transformations for automated data pulls, ensuring reusability of data flows and consistent documentation',
          'Maintained ETL workflows in Alteryx: data cleansing, transformation, testing, and consolidated dataset creation for downstream analytics',
          'Drove process automation: replaced manual, repetitive reporting tasks with automated solutions using Power Query and Power Automate, improving efficiency and data quality',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. - Cracow / Remote',
        period: 'Jul 2022 - Apr 2024',
        bullets: [
          'Coordinated a team of 5 analysts on deliverables, data quality standards, and reporting governance',
          'Built Power BI dashboards and Excel reports joining multiple data sources for budget tracking, variance analysis, and trend monitoring across ~40 projects ($15M)',
          'Automated data consolidation pipelines using Power Query with multiple sources (Clarity, GPDM, Cognos) - handling large datasets under strict deadlines',
          'Facilitated training workshops on data tools (Excel, Power Query, Power BI) for technical and non-technical stakeholders',
          'Aligned reporting standards with Central Finance Controlling - designed governance and control processes for data consistency',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska - Global Business Support - Warsaw',
        period: 'Jun 2021 - Jun 2022',
        bullets: [
          'Led reporting and data tracking for Global Transition Process across 14 departments - designed data flows and documentation standards',
          'Organized and facilitated training workshops for global end users and developers',
          'Built a Continuous Improvement tracking application using PowerApps - automating rule-based process change management',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services - Project Management - Warsaw',
        period: 'Sep 2018 - May 2021',
        bullets: [
          'Designed and built Power BI dashboards and visualisations combining multiple data sets to provide organisational insight to Board and stakeholders',
          'Automated end-to-end processes using Power Automate, SharePoint, and Power BI - streamlining repetitive tasks and releasing capacity',
          'Managed cross-functional teams (4-15 people) and conducted internal data quality audits',
          'Led Novatorium innovation project: implemented process automation improvements using Power Platform (Power Automate, PowerApps, Power BI)',
          'Analysed and documented data flows ensuring corporate standards were met and recorded in a consistent manner',
        ],
      },
      {
        role: 'Junior Project Manager - Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) - Robert BOSCH (Warsaw)',
        period: 'Feb 2016 - Aug 2018',
        bullets: [
          'International experience (Portugal & Poland): stakeholder coordination across technical and non-technical teams',
          'Process improvement initiatives in matrix organisational setups - Employer Branding, Store Excellence, Logistics',
        ],
      },
    ],
    skillGroups: [
      { name: 'BI & Data Modelling', items: 'Power BI (dashboards, semantic models, DAX measures, visualisations, publishing) - Advanced Excel (Power Pivot, complex formulas, dashboarding) - Power Query (data transformations, automated multi-source pipelines)' },
      { name: 'Automation & Integration', items: 'Power Automate (workflow automation, rule-based tasks) - PowerApps - Alteryx (ETL workflows, data cleansing) - SharePoint' },
      { name: 'Data & SQL', items: 'SQL (advanced queries, joins, CTEs) - Data pipeline design - Data warehouse concepts - Data quality & testing - UAT processes' },
      { name: 'Process & Governance', items: 'Data flow documentation - Governance & control processes - Lean Management - Six Sigma (SGH certified) - PRINCE2 Foundation' },
      { name: 'AI & Emerging Tech', items: 'AI/ML awareness - Claude Code (AI-assisted development) - Prompt Engineering - Cognos - Smartsheet' },
    ],
    education: [
      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'Business Analytics in Power BI - LabMasters, 2022',
      'SQL Basics & Intermediate, 2023',
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) - English (fluent) - Portuguese (intermediate, CELPE-Bras) - Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
};

// Photo not used for EN version
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
  .header {
    border-bottom: 2.5px solid #1b2a4a;
    padding-bottom: 12px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .header-photo {
    width: 90px; height: 90px; border-radius: 50%;
    object-fit: cover; border: 2px solid #ccd5e0; flex-shrink: 0;
  }
  .header-text { flex: 1; }
  .header h1 {
    font-size: 20pt; font-weight: 700; color: #1b2a4a;
    letter-spacing: -0.5px; margin-bottom: 2px;
  }
  .header .title { font-size: 11pt; font-weight: 600; color: #2d5aa0; margin-bottom: 4px; }
  .header .contact { font-size: 8.5pt; color: #555; }
  .summary {
    background: #f0f4fa; border-left: 3px solid #2d5aa0;
    padding: 9px 12px; margin-bottom: 14px; font-size: 9pt; color: #333;
    text-align: justify;
  }
  .section-title {
    font-size: 10pt; font-weight: 700; color: #1b2a4a;
    text-transform: uppercase; letter-spacing: 1px;
    border-bottom: 1.5px solid #ccd5e0; padding-bottom: 3px;
    margin-top: 13px; margin-bottom: 8px;
  }
  .job { margin-bottom: 10px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
  .job-role { font-weight: 700; font-size: 9.5pt; color: #1b2a4a; }
  .job-company { font-size: 8.5pt; color: #555; margin-bottom: 3px; }
  .job-period { font-size: 8.5pt; color: #2d5aa0; font-weight: 500; white-space: nowrap; }
  ul { padding-left: 16px; margin-top: 2px; }
  li { margin-bottom: 1.5px; font-size: 9pt; }
  li::marker { color: #2d5aa0; }
  .skill-group { margin-bottom: 5px; font-size: 9pt; }
  .skill-name { font-weight: 700; color: #1b2a4a; }
  .edu-item { display: flex; gap: 10px; margin-bottom: 4px; font-size: 9pt; }
  .edu-year { font-weight: 600; color: #2d5aa0; min-width: 70px; font-size: 8.5pt; }
  .edu-title { font-weight: 600; }
  .edu-school { color: #555; }
  .edu-desc { color: #666; font-style: italic; }
  .certs-grid { display: flex; flex-wrap: wrap; gap: 5px; }
  .cert-tag {
    background: #e8eef6; border: 1px solid #ccd5e0; border-radius: 3px;
    padding: 2px 7px; font-size: 8.5pt; color: #1b2a4a;
  }
  .languages { font-size: 9pt; margin-top: 4px; }
  .gdpr { font-size: 7.5pt; color: #888; margin-top: 16px; text-align: center; font-style: italic; }
  @page { size: A4; margin: 12mm 14mm; }
</style>
</head>
<body>
<div class="header">
  ${data.photo ? `<img src="${photoDataUrl}" alt="${data.name}" class="header-photo">` : ''}
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
    path: pdfPath, format: 'A4', printBackground: true,
    margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' },
  });
  await browser.close();
  console.log(`Generated: ${pdfPath}`);
}

generatePDF();

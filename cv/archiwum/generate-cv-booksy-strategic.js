const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

// Tailored CV data for: Global Partner, Strategic Initiatives @ Booksy
const cvData = {
  en: {
    fileName: 'AG_Global Partner Strategic Initiatives_Booksy_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Strategic Initiatives & Analytics',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Warsaw / Remote',
    summary: 'Analytical professional with 8+ years of experience driving data-informed strategic initiatives across Financial Services and global organizations (HSBC, Trustwave, Zimmer Biomet). Skilled at translating high-level strategies into structured workplans, building executive-ready dashboards and business cases, and managing cross-functional workstreams from planning to handover. Advanced Excel and Power BI expertise combined with SQL proficiency, scenario modeling, and process automation. Proven ability to coordinate teams up to 15 people, maintain reporting cadences for C-level stakeholders, and ensure data integrity across complex project portfolios. Quality Manager (SGH) with Six Sigma and PRINCE2 foundations.',
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
          'Building executive-ready financial dashboards (Power BI) for Financial Directors and CFO, enabling data-driven strategic decisions',
          'Performing scenario analyses and financial modeling to project impact of operational initiatives',
          'Automating reporting pipelines (Power Query, Alteryx), reducing manual workload and ensuring data integrity across reporting tools',
          'Serving as single source of truth for performance data: maintaining ETL pipelines, validating data hygiene, resolving discrepancies before they reach leadership',
          'Translating complex financial data into actionable business cases and briefing materials for senior stakeholders',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. - Cracow / Remote',
        period: 'Jul 2022 - Apr 2024',
        bullets: [
          'Coordinating a team of 5 analysts: task delegation, performance oversight, onboarding new team members',
          'Managing finance processes for ~40 projects worth $15M: budgeting, forecasting, resource allocation',
          'Establishing consistent reporting cadences: weekly progress updates, variance analysis, milestone tracking for project stakeholders',
          'Building auditable financial models in Excel (Power Query, Pivot Tables, scenario modeling) from messy multi-source data',
          'Designing BI dashboards (SQL, Power BI, Cognos) that provided early-warning visibility into project health and budget variances',
          'Training cross-functional teams on analytical tools and financial processes, creating documentation for long-term sustainability',
          'Facilitating project handovers to functional teams with structured transition materials',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska - Global Business Support - Warsaw / Remote',
        period: 'Jun 2021 - Jun 2022',
        bullets: [
          'Managing Global Transition reporting for 14 departments: scope/timeline planning, executive progress updates, stakeholder alignment',
          'Building and maintaining project tracking tools, ensuring data consistency and serving as central point of contact for cross-functional teams',
          'Training global end users and developers; creating documentation and training materials for tool adoption',
          'Developing Continuous Improvement tracking application (PowerApps) to support strategic process initiatives',
        ],
      },
      {
        role: 'BI Developer & Analyst',
        company: 'ISS Facility Services - Project Management - Warsaw',
        period: 'Sep 2018 - May 2021',
        pageBreak: true,
        bullets: [
          'Managing cross-functional teams (4-15 people), conducting internal audits, and coordinating workstreams within larger initiatives',
          'Designing board-level dashboards and executive reports (Power BI, SharePoint) tracking initiative progress and KPIs',
          'Process mapping and automation (Power Automate, SharePoint, Power BI), aligning technical execution with strategic vision',
          'Leading innovation project (Novatorium): gathering stakeholder requirements, building business case, managing execution through PowerApps/Power Platform',
          'Budgeting, forecasting, and non-financial analysis supporting management decisions',
        ],
      },
      {
        role: 'Junior Project Manager - Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) - Robert BOSCH (Warsaw)',
        period: 'Feb 2016 - Aug 2018',
        bullets: [
          'International rotational program (Portugal & Poland): Employer Branding, Store Excellence, Customer Service, Logistics',
          'Cross-functional stakeholder coordination in complex matrix organizations',
        ],
      },
    ],
    skillGroups: [
      { name: 'Strategic Initiatives & Project Mgmt', items: 'Workplan development - Initiative tracking & milestone management - Reporting cadences (stand-ups, progress reports) - Project handover & documentation - PRINCE2 Foundation - Six Sigma' },
      { name: 'Advanced Excel & Modeling', items: 'Complex auditable models from scratch - Pivot Tables - Scenario modeling - Power Query (multi-source consolidation) - Power Pivot - Advanced formulas' },
      { name: 'Data & Visualization', items: 'Power BI (executive dashboards, DAX) - SQL (advanced queries, joins, CTEs, pre-aggregation) - Alteryx (ETL, data cleansing) - Cognos - Visual storytelling for leadership' },
      { name: 'Stakeholder Management', items: 'Executive briefing materials & presentations - Cross-functional communication (all seniority levels) - Training & knowledge transfer - Team coordination (up to 15 people)' },
      { name: 'Process & Automation', items: 'Process mapping - Power Automate - PowerApps - SharePoint - Smartsheet - Continuous improvement (Lean, Kaizen)' },
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
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) - English (advanced) - Portuguese (intermediate, CELPE-Bras) - Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
};

function buildHTML(data) {
  const jobsHTML = data.jobs.map(j => `
    <div class="job${j.pageBreak ? ' page-break' : ''}">
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
        ${e.desc ? `<span class="edu-desc"> - ${e.desc}</span>` : ''}
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
  .job.page-break { page-break-before: always; }
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

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_Senior Power BI Developer_N-iX_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Senior Power BI Developer',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote',
    summary: 'Senior BI professional with 8+ years of experience designing, developing, and deploying Power BI dashboards and reports for C-level stakeholders in financial services and global corporations. Deep expertise in DAX, Power Query (M), data modeling, and SQL. Proven ability to connect diverse data sources, build efficient ETL pipelines (Alteryx, Power Query), and translate complex business requirements into clean, executive-ready visualizations. Strong communicator experienced in presenting insights to non-technical audiences and training teams on BI tools.',
    sections: {
      experience: 'WORK EXPERIENCE',
      skills: 'KEY SKILLS',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS & TRAINING',
      languages: 'LANGUAGES',
    },
    jobs: [
      {
        role: 'Senior Finance Analyst / Power BI Developer',
        company: 'Trustwave Sp. z o.o. · Performance Management · Warsaw / Remote',
        period: 'Oct 2024 – present',
        bullets: [
          'Design and deploy financial dashboards in Power BI for Financial Directors and CFO: budget vs actuals, variance analysis, forecast tracking with at-a-glance insights',
          'Build and maintain DAX measures and data models optimized for performance and scalability across multiple financial datasets',
          'Automate data pipelines using Power Query and Alteryx: multi-source ETL replacing manual consolidation',
          'Translate complex financial data into actionable business recommendations for senior stakeholders',
          'Maintain data integrity across reporting models: validation checks, source reconciliation, standardized definitions',
        ],
      },
      {
        role: 'Finance Analyst / BI Developer at HSBC',
        company: 'Alten Polska Sp. z o.o. · Cracow / Remote',
        period: 'Jul 2022 – Apr 2024',
        bullets: [
          'Developed and maintained Power BI dashboards and reports for budget tracking, variance analysis, and trend monitoring across ~40 projects ($15M portfolio)',
          'Connected and transformed data from multiple sources (Clarity, GPDM, Cognos) using Power Query and SQL',
          'Coordinated team of 5 analysts on data quality, reporting standards, and delivery timelines',
          'Automated data consolidation workflows: Power Query transformations replacing manual Excel processes',
          'Delivered training workshops on Power BI, Power Query, and Excel to stakeholders across functions',
          'Collaborated with Central Finance Controlling to standardize reporting templates and data definitions',
        ],
      },
      {
        role: 'Smartsheet Developer & Reporting Lead',
        company: 'Zimmer Biomet Polska · Global Business Support · Warsaw / Remote',
        period: 'Jun 2021 – Jun 2022',
        bullets: [
          'Led reporting for Global Transition Process across 14 departments: scope/timeline tracking, milestone dashboards, stakeholder updates',
          'Facilitated training workshops for global end users and developers on reporting tools',
          'Built Continuous Improvement tracking application using PowerApps',
        ],
      },
      {
        role: 'BI Developer & Analyst',
        company: 'ISS Facility Services · Project Management · Warsaw / Remote',
        period: 'Sep 2018 – May 2021',
        bullets: [
          'Designed and delivered Power BI dashboards and reports for the Board: translating complex operational data into executive-ready visualizations',
          'Built automated reporting solutions using Power BI, SharePoint, and Power Automate end-to-end',
          'Managed cross-functional teams (4-15 people) and conducted internal audits',
          'Led global collaboration with banking client: analyzed invoice flow process, designed and implemented data-driven improvements',
          'Led Novatorium innovation project: process improvements using Power Platform suite',
        ],
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        period: 'Feb 2016 – Aug 2018',
        bullets: [
          'International project experience (Portugal & Poland): Employer Branding, Store Excellence, Logistics',
          'Cross-functional stakeholder coordination in matrix organizations',
        ],
      },
    ],
    skillGroups: [
      { name: 'Power BI', items: 'Dashboard design & deployment · DAX measures & calculated columns · Data modeling (star schema, relationships) · Power Query (M) transformations · Report optimization & performance tuning · Publishing & workspace management' },
      { name: 'Data & SQL', items: 'SQL (advanced queries, joins, CTEs, aggregations) · Alteryx (ETL workflows, data cleansing, blending) · Power Query (multi-source consolidation) · Cognos · Data validation & reconciliation' },
      { name: 'Visualization & Communication', items: 'Visual storytelling for C-level audiences · Executive-ready reports & presentations · Training & knowledge transfer · Stakeholder management across seniority levels' },
      { name: 'Tools & Methodology', items: 'SharePoint · PowerApps · Power Automate · Smartsheet · PRINCE2 Foundation · Agile/Scrum familiarity · Six Sigma (SGH)' },
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
      'User Experience I & II - USWPS, 2017',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) · English (fluent) · Portuguese (intermediate, CELPE-Bras) · Italian (basic)',
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

  .header {
    border-bottom: 2.5px solid #1b2a4a;
    padding-bottom: 12px;
    margin-bottom: 14px;
  }
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

  .summary {
    background: #f0f4fa;
    border-left: 3px solid #2d5aa0;
    padding: 9px 12px;
    margin-bottom: 14px;
    font-size: 9pt;
    color: #333;
    text-align: justify;
  }

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

  .skill-group {
    margin-bottom: 5px;
    font-size: 9pt;
  }
  .skill-name {
    font-weight: 700;
    color: #1b2a4a;
  }

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
  <h1>${data.name}</h1>
  <div class="title">${data.title}</div>
  <div class="contact">${data.contact}</div>
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

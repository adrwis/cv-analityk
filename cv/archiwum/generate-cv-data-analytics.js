const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

// Tailored CV data for: Data Analytics & Technical Support Specialist
const cvData = {
  en: {
    fileName: 'AG_Data Analytics and Technical Support Specialist_EN.pdf',
    name: 'Adriana Guściora',
    title: 'Data Analytics & Technical Support Specialist',
    contact: 'Gusciora.Ada@gmail.com | linkedin.com/in/adriana-gu | Remote',
    summary: 'Data analytics professional with 8+ years of experience in dashboarding, reporting, process optimization, and knowledge management. Proven track record of building Power BI dashboards for executive stakeholders, setting up monitoring systems for project performance, and streamlining workflows to reduce manual effort. Experienced in managing centralized documentation repositories (SharePoint, Confluence) and collaborating with cross-functional teams of project managers and consultants. Combining strong analytical skills with project management expertise (PRINCE2) and a passion for continuous improvement and data-driven decision-making.',
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
        company: 'Trustwave Sp. z o.o. · Performance Management · Warsaw / Remote',
        period: 'Oct 2024 – present',
        bullets: [
          'Developed and maintained Power BI dashboards to visualize key performance metrics, budget vs actuals, and variance analysis for Financial Directors and CFO',
          'Set up monitoring systems to track project financial performance across multiple data sources (Clarity, Cognos, internal databases)',
          'Automated reporting pipelines using Power Query and Alteryx - replacing manual consolidation with robust, multi-source data flows',
          'Designed standardized Excel reporting templates with Power Query transformations for automated data pulls and trend monitoring',
          'Drove process optimization: transitioned manual reporting to automated solutions, reducing cycle time and error rates',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. · Cracow / Remote',
        period: 'Jul 2022 – Apr 2024',
        bullets: [
          'Collaborated with stakeholders to identify relevant KPIs and created insightful Power BI dashboards and Excel reports for budget tracking and resource allocation',
          'Monitored and analyzed project performance for ~40 IT projects ($15M budget): identifying trends, anomalies, and improvement opportunities',
          'Coordinated a team of 5 financial controllers on deliverables, data quality, and reporting deadlines',
          'Automated data consolidation using Power Query with multiple data sources (Clarity, GPDM, Cognos)',
          'Facilitated training workshops on analytical tools and processes (Excel, Power Query, Power BI) for project managers and consultants',
          'Maintained documentation and reporting standards aligned with Central Finance Controlling',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska · Global Business Support · Warsaw',
        period: 'Jun 2021 – Jun 2022',
        bullets: [
          'Led reporting and monitoring for Global Transition Process across 14 departments - scope/timeline planning, milestones tracking, stakeholder updates',
          'Maintained centralized knowledge repository: organized resources, curated content, and ensured easy access for global team members',
          'Organized and facilitated training workshops for global end users and developers on collaboration platforms',
          'Built a Continuous Improvement tracking application using PowerApps to standardize process change management',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services · Project Management · Warsaw',
        period: 'Sep 2018 – May 2021',
        pageBreak: true,
        bullets: [
          'Delivered operational dashboards in Power BI and SharePoint for project progress tracking and resource utilization monitoring',
          'Analyzed existing workflows and implemented process enhancements using Power Automate, SharePoint, and Power BI - reducing manual effort',
          'Managed knowledge management initiatives: centralized documentation in SharePoint, maintained best practices repository',
          'Managed cross-functional teams (4-15 people) and participated in internal projects to deliver efficient ways of working',
          'Prepared executive-ready Board reports translating complex data into actionable insights',
        ],
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        period: 'Feb 2016 – Aug 2018',
        bullets: [
          'International project experience (Portugal & Poland): Employer Branding, Store Excellence, Logistics',
          'Stakeholder coordination and workshop facilitation in matrix organizational setups',
        ],
      },
    ],
    skillGroups: [
      { name: 'Dashboarding & BI', items: 'Power BI (dashboards, data models, DAX measures, KPI visualization, publishing) · Advanced Excel (Power Pivot, complex formulas, scenario analysis) · Power Query (robust transformations, automated multi-source consolidation)' },
      { name: 'Data & Monitoring', items: 'SQL (advanced queries, joins, CTEs) · Alteryx (ETL workflows, data cleansing) · Cognos · Data trend analysis · Anomaly detection' },
      { name: 'Knowledge & Collaboration', items: 'SharePoint (document management, knowledge repositories) · Confluence · Smartsheet · Microsoft 365 · Process documentation' },
      { name: 'Project Management', items: 'PRINCE2 Foundation · Scope/timeline/milestone planning · RAID tracking · Stakeholder coordination · Workshop facilitation · Change management' },
      { name: 'Process Optimization', items: 'Power Automate (workflow automation) · PowerApps · Six Sigma · Lean Management · Continuous improvement methodologies' },
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
    languages: 'Polish (native) · English (fluent) · Portuguese (intermediate, CELPE-Bras) · Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
};

// Load photo (not used for EN, but keeping for consistency)
const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

function buildHTML(data) {
  const jobsHTML = data.jobs.map(j => `
    <div class="job"${j.pageBreak ? ' style="page-break-before: always;"' : ''}>
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
  .header-photo {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccd5e0;
    flex-shrink: 0;
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

async function generatePDF(lang) {
  const data = cvData[lang];
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
  await generatePDF('en');
  console.log('Done!');
})();

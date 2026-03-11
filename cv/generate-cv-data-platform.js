const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;
const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

const cvData = {
  en: {
    fileName: 'AG_Data Platform Reporting Analyst_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Data Platform / Reporting Analyst',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote',
    summary: 'Reporting Analyst & BI Developer with 8+ years of experience building Power BI dashboards, writing SQL queries, and migrating reporting solutions across data platforms. Proven track record of rebuilding and repointing reports between data sources, validating data outputs for accuracy, and maintaining high-quality reporting during platform transitions. Hands-on experience with data warehouses, ETL pipelines, and DAX measures. Strong attention to detail with a structured approach to testing, documentation, and data governance. Passionate about continuous improvement and expanding competencies through learning new tools and cloud technologies.',
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
          'Built and maintained Power BI dashboards combining multiple datasets - budget vs actuals, forecast, variance analysis - ensuring data accuracy through structured testing and validation',
          'Migrated reporting pipelines from manual consolidation to automated Power Query and Alteryx flows - repointing reports to new data sources while maintaining data integrity',
          'Designed standardized reporting templates with DAX measures and Power Query transformations, ensuring reusability and consistent documentation across the reporting layer',
          'Maintained ETL workflows in Alteryx: data cleansing, transformation, testing, and consolidated dataset creation for downstream Power BI dashboards',
          'Drove reporting automation: replaced manual, repetitive tasks with Power Query and Power Automate solutions, improving data quality and reducing cycle time',
        ],
      },
      {
        role: 'Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o. - Cracow / Remote',
        period: 'Jul 2022 - Apr 2024',
        bullets: [
          'Built Power BI dashboards and Excel reports with DAX measures, joining multiple data sources (Clarity, GPDM, Cognos) for budget tracking, variance analysis, and trend monitoring across ~40 projects ($15M)',
          'Migrated and automated data consolidation - rebuilt reporting pipelines using Power Query to repoint from legacy sources to new consolidated datasets',
          'Validated and tested dashboards to ensure data accuracy and quality - handled large datasets under strict deadlines with strong attention to detail',
          'Coordinated a team of 5 analysts on deliverables, data quality standards, and reporting governance',
          'Facilitated training workshops on Power BI, Power Query, and Excel for technical and non-technical stakeholders',
        ],
      },
      {
        role: 'Smartsheet Developer',
        company: 'Zimmer Biomet Polska - Global Business Support - Warsaw',
        period: 'Jun 2021 - Jun 2022',
        bullets: [
          'Led reporting and data tracking for Global Transition Process across 14 departments - designed data flows and documentation standards',
          'Built a Continuous Improvement tracking application using PowerApps - automating rule-based processes',
          'Organized training workshops for global end users and developers on reporting tools',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services - Project Management - Warsaw',
        period: 'Sep 2018 - May 2021',
        bullets: [
          'Designed and built Power BI dashboards and visualisations combining multiple datasets from SharePoint and internal data warehouse to provide organisational insight to Board and stakeholders',
          'Supported reporting migrations: rebuilt and repointed dashboards when data sources changed, validating outputs to ensure accuracy during transitions',
          'Automated end-to-end reporting processes using Power Automate, SharePoint, and Power BI - streamlining repetitive tasks and releasing capacity',
          'Analysed and documented data flows ensuring corporate standards were met - strong governance and control processes for reporting consistency',
          'Led Novatorium innovation project: implemented process improvements using Power Platform',
        ],
      },
      {
        role: 'Junior Project Manager - Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) - Robert BOSCH (Warsaw)',
        period: 'Feb 2016 - Aug 2018',
        bullets: [
          'International experience (Portugal & Poland): stakeholder coordination across technical and non-technical teams',
          'Process improvement initiatives in matrix organisational setups',
        ],
      },
    ],
    skillGroups: [
      { name: 'Power BI & Reporting', items: 'Power BI (dashboards, DAX measures, semantic models, visualisations, publishing) - Advanced Excel (Power Pivot, complex formulas, dashboarding) - Power Query (data transformations, automated multi-source pipelines) - Report migration & repointing' },
      { name: 'SQL & Data Platforms', items: 'SQL (advanced queries, joins, CTEs, data validation) - Data warehouse concepts - ETL pipeline design - Data quality & testing - UAT processes - Cloud platform awareness (Azure)' },
      { name: 'Automation & Tools', items: 'Alteryx (ETL workflows, data cleansing) - Power Automate (workflow automation) - PowerApps - SharePoint - Cognos - Smartsheet' },
      { name: 'Testing & Governance', items: 'Data validation & accuracy checking - Structured testing approach - Data flow documentation - Governance & control processes - Lean Management - Six Sigma (SGH certified)' },
      { name: 'Collaboration', items: 'Technical & non-technical stakeholder communication - Cross-team collaboration - Workshop facilitation - PRINCE2 Foundation' },
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
<html><head><meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', 'Segoe UI', sans-serif; font-size: 9.5pt; line-height: 1.45; color: #1a1a2e; padding: 32px 36px; max-width: 210mm; }
  .header { border-bottom: 2.5px solid #1b2a4a; padding-bottom: 12px; margin-bottom: 14px; display: flex; align-items: center; gap: 18px; }
  .header-photo { width: 90px; height: 90px; border-radius: 50%; object-fit: cover; border: 2px solid #ccd5e0; flex-shrink: 0; }
  .header-text { flex: 1; }
  .header h1 { font-size: 20pt; font-weight: 700; color: #1b2a4a; letter-spacing: -0.5px; margin-bottom: 2px; }
  .header .title { font-size: 11pt; font-weight: 600; color: #2d5aa0; margin-bottom: 4px; }
  .header .contact { font-size: 8.5pt; color: #555; }
  .summary { background: #f0f4fa; border-left: 3px solid #2d5aa0; padding: 9px 12px; margin-bottom: 14px; font-size: 9pt; color: #333; text-align: justify; }
  .section-title { font-size: 10pt; font-weight: 700; color: #1b2a4a; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1.5px solid #ccd5e0; padding-bottom: 3px; margin-top: 13px; margin-bottom: 8px; }
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
  .cert-tag { background: #e8eef6; border: 1px solid #ccd5e0; border-radius: 3px; padding: 2px 7px; font-size: 8.5pt; color: #1b2a4a; }
  .languages { font-size: 9pt; margin-top: 4px; }
  .gdpr { font-size: 7.5pt; color: #888; margin-top: 16px; text-align: center; font-style: italic; }
  @page { size: A4; margin: 12mm 14mm; }
</style></head><body>
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
</body></html>`;
}

(async () => {
  const data = cvData.en;
  const html = buildHTML(data);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(outputDir, data.fileName), format: 'A4', printBackground: true,
    margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' },
  });
  await browser.close();
  console.log(`Generated: ${data.fileName}`);
})();

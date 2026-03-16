const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_Financial Analyst_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Financial Analyst \u00b7 FP&A \u00b7 Process Improvement',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote (EU-based)',
    summary: 'Financial Analyst with 8+ years of experience who genuinely enjoys bringing order to chaos. Proven track record of building budgets, forecasts, and financial models from scratch, not just maintaining existing ones. Hands-on experience turning messy data into structured reports and clear visualisations that make sense to both leadership and non-financial colleagues. Advanced Excel power user (pivot tables, macros, complex formulas, large datasets) with additional skills in Power BI, SQL, and Alteryx. Passionate about streamlining processes and implementing improvements that actually stick.',
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
        company: 'Trustwave Sp. z o.o. \u00b7 Performance Management \u00b7 Warsaw / Remote',
        period: 'Oct 2024 \u2013 present',
        bullets: [
          'Building budgets, forecasts, and management reports for Financial Directors and CFO, turning raw data into clear executive presentations',
          'Plan-vs-actual analysis: variance tracking by department, flagging deviations, presenting root causes and recommendations',
          'Streamlining reporting processes with Power Query and Alteryx, replacing manual workflows with automated pipelines',
          'Designing Power BI dashboards and data visualisations that help non-financial stakeholders understand the numbers',
        ],
      },
      {
        role: 'Finance Analyst at HSBC \u00b7 Team Coordinator',
        company: 'Alten Polska Sp. z o.o. \u00b7 Cracow / Remote',
        period: 'Jul 2022 \u2013 Apr 2024',
        bullets: [
          'Managing financial data for ~40 IT projects worth $15M: budgeting, forecasting, plan-vs-actual analysis',
          'Building financial models and ad hoc analyses: cost breakdowns, resource allocation, ROI evaluation',
          'Improving and standardising reporting processes across the team, not just doing things "as always"',
          'Preparing management reports and presentations for senior leadership; translating complex findings into simple language',
          'Training teams on Excel, Power BI, and Power Query; creating documentation so improvements actually stick',
        ],
      },
      {
        role: 'Smartsheet Developer \u00b7 Global Reporting',
        company: 'Zimmer Biomet Polska \u00b7 Global Business Support \u00b7 Warsaw',
        period: 'Jun 2021 \u2013 Jun 2022',
        bullets: [
          'Bringing structure to unorganised reporting across 14 departments: building dashboards, standardising metrics, tracking milestones',
          'Implementing process improvements in global reporting workflows; training end users to ensure adoption',
          'Developing Continuous Improvement tracking application (PowerApps)',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services \u00b7 Project Management \u00b7 Warsaw',
        period: 'Sep 2018 \u2013 May 2021',
        bullets: [
          'Budgeting, forecasting, and P&L reporting for a pharmaceutical client; building financial models for regional operations',
          'Analysing large datasets (invoice flows, cost data) to identify patterns and implement process improvements',
          'Building Power BI dashboards and board-level reports that made complex data accessible to non-financial audiences',
          'Automating reporting with Power Automate and SharePoint, replacing manual processes with scalable solutions',
        ],
      },
      {
        role: 'Junior Project Manager \u00b7 Management Trainee',
        company: 'Jeronimo Martins (Lisbon) \u00b7 Robert BOSCH (Warsaw)',
        period: 'Feb 2016 \u2013 Aug 2018',
        bullets: [
          'International experience across Portugal & Poland: KPI reporting, budget tracking, stakeholder coordination in matrix structures',
        ],
      },
    ],
    skillGroups: [
      { name: 'Financial Analysis & Modelling', items: 'Budgeting & forecasting \u00b7 Plan-vs-actual analysis \u00b7 Variance tracking & root cause \u00b7 P&L reporting \u00b7 ROI & investment evaluation \u00b7 Cost analysis \u00b7 Financial modelling' },
      { name: 'Excel & Spreadsheets', items: 'Advanced Excel (pivot tables, macros, Power Pivot, complex formulas, large datasets) \u00b7 Google Sheets \u00b7 Power Query (automated data consolidation)' },
      { name: 'BI & Data Visualisation', items: 'Power BI (dashboards, DAX, data models) \u00b7 Clear presentations for non-financial audiences \u00b7 Cognos \u00b7 PowerPoint' },
      { name: 'Automation & SQL', items: 'SQL (advanced queries, joins, CTEs) \u00b7 Alteryx (ETL, data cleansing) \u00b7 Power Automate \u00b7 PowerApps \u00b7 SharePoint' },
      { name: 'Process Improvement', items: 'Streamlining messy processes into structured workflows \u00b7 Six Sigma \u00b7 Lean Management \u00b7 Kaizen \u00b7 PRINCE2 Foundation \u00b7 Training & documentation for lasting adoption' },
    ],
    education: [
      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'SQL Advanced - LabMasters, 2025',
      'SQL Basics & Intermediate, 2023',
      'Business Analytics in Power BI - LabMasters, 2022',
      'Six Sigma Quality Management - SGH, 2020',
      'PRINCE2 Foundation - AXELOS, 2020',
      'Project Management - INCODO, 2016',
    ],
    languages: 'Polish (native) \u00b7 English (fluent) \u00b7 Portuguese (intermediate, CELPE-Bras) \u00b7 Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
};

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
        ${e.desc ? `<span class="edu-desc"> \u00b7 ${e.desc}</span>` : ''}
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
<div class="header"><div class="header-text"><h1>${data.name}</h1><div class="title">${data.title}</div><div class="contact">${data.contact}</div></div></div>
<div class="summary">${data.summary}</div>
<div class="section-title">${data.sections.experience}</div>${jobsHTML}
<div class="section-title">${data.sections.skills}</div>${skillsHTML}
<div class="section-title">${data.sections.education}</div>${eduHTML}
<div class="section-title">${data.sections.certifications}</div><div class="certs-grid">${certsHTML}</div>
<div class="section-title">${data.sections.languages}</div><div class="languages">${data.languages}</div>
<div class="gdpr">${data.gdpr}</div>
</body></html>`;
}

async function generatePDF() {
  const data = cvData.en;
  const html = buildHTML(data);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  const pdfPath = path.join(outputDir, data.fileName);
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '12mm', right: '14mm', bottom: '12mm', left: '14mm' } });
  await browser.close();
  console.log('Generated: ' + pdfPath);
}

(async () => { await generatePDF(); console.log('Done!'); })();

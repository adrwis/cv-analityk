"""Helper to write the Jazz Pharmaceuticals Data Analyst CV generator script."""
import pathlib

JS_PATH = pathlib.Path(__file__).parent / 'generate-cv-jazz-data-analyst.js'

DATA_PART = r'''const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_Data Analyst_Jazz Pharmaceuticals_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Data Analyst \u00b7 Finance Operations & Analytics',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote (EU-based)',
    summary: 'Data Analyst with 8+ years of experience in finance operations, BI reporting, and process automation. Proven track record of designing Power BI dashboards, building Alteryx ETL pipelines, and delivering executive presentations that drive decision-making. Experienced in working with finance data (budgeting, forecasting, P&L, cost allocation) across global organisations including HSBC and Trustwave. Passionate about identifying process improvements and leveraging automation (Alteryx, Power Automate, Power Query) to standardise and streamline reporting. Strong collaborator who enjoys training users on BI tools and translating non-technical requirements into scalable analytical solutions.',
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
          'Designing Power BI dashboards and scorecards for Financial Directors and CFO, delivering KPI tracking and performance insights',
          'Building and maintaining Alteryx ETL pipelines for data cleansing, transformation, and consolidated multi-source reporting',
          'Automating financial reporting workflows (Power Query, Alteryx), reducing manual workload and improving data accuracy',
          'Analysing complex financial datasets to identify trends, patterns, and actionable recommendations for senior stakeholders',
          'Creating standardised templates and processes for recurring reports and executive presentations',
        ],
      },
      {
        role: 'Finance Analyst at HSBC \u00b7 Team Coordinator',
        company: 'Alten Polska Sp. z o.o. \u00b7 Cracow / Remote',
        period: 'Jul 2022 \u2013 Apr 2024',
        bullets: [
          'Designing BI dashboards and automated reports (Power BI, SQL, Power Query, Cognos) for cross-regional stakeholders',
          'Managing finance data for ~40 IT projects worth $15M: KPI tracking, forecasting, trending, variance analysis',
          'Training teams on Power BI dashboards and analytical tools; maintaining training documentation and user guides',
          'Collaborating cross-functionally to translate business requirements into technical reporting solutions',
          'Leading monthly and quarterly data reviews, presenting findings and recommendations to senior leadership',
        ],
      },
      {
        role: 'Smartsheet Developer \u00b7 Global Reporting',
        company: 'Zimmer Biomet Polska \u00b7 Global Business Support \u00b7 Warsaw',
        period: 'Jun 2021 \u2013 Jun 2022',
        bullets: [
          'Building metrics dashboards for Global Transition Process across 14 departments: milestone tracking, stakeholder updates',
          'Training global end users on reporting tools and maintaining training plans and documentation',
          'Developing Continuous Improvement tracking application (PowerApps) to support operational excellence',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services \u00b7 Project Management \u00b7 Warsaw',
        period: 'Sep 2018 \u2013 May 2021',
        bullets: [
          'Building Power BI dashboards and board-level reports for business performance tracking and strategic decisions',
          'Analysing invoice flow data for a banking sector client: identifying patterns, implementing process improvements',
          'Automating reporting processes with Power Automate and SharePoint, improving data accuracy and cycle time',
          'Collaborating with cross-functional teams (4-15 people) to define data sources, design analyses, and publish metrics',
        ],
      },
      {
        role: 'Junior Project Manager \u00b7 Management Trainee',
        company: 'Jeronimo Martins (Lisbon) \u00b7 Robert BOSCH (Warsaw)',
        period: 'Feb 2016 \u2013 Aug 2018',
        bullets: [
          'International experience across Portugal & Poland: data-driven project tracking, KPI reporting, stakeholder coordination',
        ],
      },
    ],
    skillGroups: [
      { name: 'BI & Data Visualization', items: 'Power BI (dashboards, scorecards, DAX measures, data models, publishing) \u00b7 Advanced Excel (Power Pivot, complex formulas, scenario analysis) \u00b7 PowerPoint (executive presentations) \u00b7 Cognos \u00b7 SharePoint' },
      { name: 'Data Transformation & Automation', items: 'Alteryx (ETL workflows, data cleansing, blending) \u00b7 Power Query (automated multi-source consolidation) \u00b7 Power Automate (workflow automation) \u00b7 PowerApps' },
      { name: 'Data Analysis & SQL', items: 'SQL (advanced queries, joins, CTEs, data modeling) \u00b7 Trend analysis \u00b7 Forecasting \u00b7 Pattern identification in complex datasets \u00b7 KPI definition & tracking' },
      { name: 'Finance Data', items: 'Budgeting & forecasting \u00b7 P&L reporting \u00b7 Cost allocation \u00b7 Variance analysis \u00b7 Invoice processing & audit' },
      { name: 'Collaboration & Training', items: 'Stakeholder management \u00b7 Cross-functional collaboration \u00b7 User training on BI tools \u00b7 Requirements translation (non-technical to technical) \u00b7 Documentation & knowledge sharing' },
    ],
    education: [
''' + """      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
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
    ],""" + r'''
    languages: 'Polish (native) \u00b7 English (fluent) \u00b7 Portuguese (intermediate, CELPE-Bras) \u00b7 Italian (basic)',
    gdpr: 'I consent to the processing of my personal data for recruitment purposes.',
  },
};

const photoPath = path.join(__dirname, '..', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;
'''

content = []
content.append(DATA_PART)

build_html = r"""function buildHTML(data) {
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
"""
content.append(build_html)

content.append(r"""async function generatePDF() {
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
""")

JS_PATH.write_text('\n'.join(content), encoding='utf-8')
print(f'Written {JS_PATH}')

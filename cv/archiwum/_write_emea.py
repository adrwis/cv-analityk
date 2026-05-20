"""Helper to write the EMEA Finance Manager CV generator script."""
import pathlib

JS_PATH = pathlib.Path(__file__).parent / 'generate-cv-emea-finance-manager.js'

# Split into data part + template part to avoid escaping issues
DATA_PART = r'''const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_Regional Finance Manager EMEA_EN.pdf',
    name: 'Adriana Gusciora',
    title: 'Regional Finance Manager \u00b7 FP&A \u00b7 EMEA',
    contact: 'Gusciora.Ada@gmail.com | +48 728 884 506 | linkedin.com/in/adriana-gu | Remote (EU-based)',
    summary: 'Finance Professional with 8+ years of experience across multinational environments spanning EMEA, including finance leadership in banking (HSBC) and IT services (Trustwave, ISS). Track record of managing regional finance teams, overseeing multi-million-dollar budgets (~$15M), and delivering executive-level reporting to CFOs and Financial Directors. Strong expertise in budgeting, forecasting, invoicing governance, and building scalable financial processes. Experienced in leading cross-functional teams of up to 15 people. Passionate about identifying process improvements and leveraging BI tools (Power BI, SQL, Alteryx) to automate reporting and streamline financial operations. Comfortable presenting to senior leadership and driving change in fast-paced, high-growth settings.',
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
          'Designing financial dashboards and executive reporting for Financial Directors and CFO, delivering "at-a-glance" insights for strategic decision-making',
          'Owning budgeting and forecasting cycles for IT finance: variance analysis, cost allocation, P&L reporting',
          'Automating financial reporting pipelines (Power Query, Alteryx), reducing manual workload and improving cycle time',
          'Building and maintaining ETL pipelines in Alteryx for data cleansing and consolidated multi-source reporting',
          'Translating complex financial and operational data into actionable business recommendations for senior stakeholders',
        ],
      },
      {
        role: 'Finance Analyst at HSBC \u00b7 Team Coordinator',
        company: 'Alten Polska Sp. z o.o. \u00b7 Cracow / Remote',
        period: 'Jul 2022 \u2013 Apr 2024',
        bullets: [
          'Coordinating a team of 5 Financial Analysts at a global bank (HSBC): workload planning, quality reviews, onboarding',
          'Managing end-to-end finance processes for ~40 IT projects worth $15M: budgeting, forecasting, invoicing, resource allocation',
          'Designing BI dashboards and automated reports (Power BI, SQL, Power Query, Cognos) for cross-regional stakeholders',
          'Leading quarterly budget cycles and monthly financial reviews, presenting findings and recommendations to senior leadership',
          'Training teams on analytical tools (Power BI, Power Query, Excel) and standardising reporting processes',
        ],
      },
      {
        role: 'Smartsheet Developer \u00b7 Global Reporting',
        company: 'Zimmer Biomet Polska \u00b7 Global Business Support \u00b7 Warsaw',
        period: 'Jun 2021 \u2013 Jun 2022',
        bullets: [
          'Reporting for Global Transition Process across 14 departments: scope/timeline planning, milestone tracking, stakeholder updates',
          'Partnering with global stakeholders to ensure alignment on project deliverables and cost models',
          'Training global end users and developers on reporting tools; creating Continuous Improvement tracking app (PowerApps)',
        ],
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services \u00b7 Project Management \u00b7 Warsaw',
        period: 'Sep 2018 \u2013 May 2021',
        bullets: [
          'Managing cross-functional teams (4-15 people) across departments; conducting internal audits and governance reviews',
          'Global collaboration with a banking sector client: invoice flow process analysis, implementing process improvements aligned with SLAs',
          'Budgeting, forecasting, and non-financial analysis for regional operations',
          'Building dashboards and board-level reports (Power BI, SharePoint) to support strategic decisions',
          'Process automation: Power Automate, SharePoint, improving financial controls and documentation',
        ],
      },
      {
        role: 'Junior Project Manager \u00b7 Management Trainee',
        company: 'Jeronimo Martins (Lisbon) \u00b7 Robert BOSCH (Warsaw)',
        period: 'Feb 2016 \u2013 Aug 2018',
        bullets: [
          'International experience across Portugal & Poland: Employer Branding, Store Excellence, Logistics, working in multinational matrix structures',
          'Stakeholder coordination across functions and geographies; budget tracking for project deliverables',
        ],
      },
    ],
    skillGroups: [
      { name: 'FP&A & Financial Governance', items: 'Budgeting & forecasting (annual/quarterly cycles) \u00b7 Variance & trend analysis \u00b7 Cost allocation \u00b7 P&L reporting \u00b7 Invoicing oversight & audit \u00b7 Financial controls & documentation \u00b7 Business continuity planning' },
      { name: 'BI & Reporting', items: 'Power BI (executive dashboards, data models, DAX, publishing) \u00b7 Advanced Excel (Power Pivot, scenario analysis, complex formulas) \u00b7 Power Query (automated multi-source consolidation) \u00b7 Cognos \u00b7 SharePoint' },
      { name: 'Data & Automation', items: 'SQL (advanced queries, joins, CTEs) \u00b7 Alteryx (ETL workflows, data cleansing) \u00b7 Power Automate (workflow automation) \u00b7 PowerApps' },
      { name: 'Leadership & Stakeholder Management', items: 'Team leadership (up to 15 people, incl. analysts & specialists) \u00b7 C-level presentation & reporting \u00b7 Cross-functional & cross-regional collaboration \u00b7 Training & knowledge transfer \u00b7 Change management' },
      { name: 'Process Improvement', items: 'Six Sigma \u00b7 Lean Management \u00b7 Kaizen \u00b7 PRINCE2 Foundation \u00b7 Continuous improvement mindset' },
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

TEMPLATE_PART = '''function buildHTML(data) {
  const jobsHTML = data.jobs.map(j => `
    <div class="job">
      <div class="job-header">
        <span class="job-role">${j.role}</span>
        <span class="job-period">${j.period}</span>
      </div>
      <div class="job-company">${j.company}</div>
      <ul>${j.bullets.map(b => `<li>${b}</li>`).join(\\'\\')}</ul>
    </div>
  `).join(\\'\\');

  const skillsHTML = data.skillGroups.map(g => `
    <div class="skill-group">
      <span class="skill-name">${g.name}:</span> ${g.items}
    </div>
  `).join(\\'\\');

  const eduHTML = data.education.map(e => `
    <div class="edu-item">
      <span class="edu-year">${e.year}</span>
      <div>
        <span class="edu-title">${e.title}</span> - <span class="edu-school">${e.school}</span>
        ${e.desc ? `<span class="edu-desc"> \\u00b7 ${e.desc}</span>` : \\'\\'}
      </div>
    </div>
  `).join(\\'\\');

  const certsHTML = data.certs.map(c => `<span class="cert-tag">${c}</span>`).join(\\'\\');
'''

# This is getting too complex with escaping. Let me just read the old fintech file pattern.
# Actually, let me write it differently.

# Build the full JS content properly
content = []

# Data section (no backticks needed)
content.append(DATA_PART)

# buildHTML function - needs backticks for template literals
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

# Main execution
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

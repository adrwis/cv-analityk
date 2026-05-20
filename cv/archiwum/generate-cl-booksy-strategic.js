const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');

const outputDir = __dirname;

const clData = {
  fileName: 'AG_Cover Letter_Global Partner Strategic Initiatives_Booksy_EN.pdf',
  name: 'Adriana Gusciora',
  contact: 'Gusciora.Ada@gmail.com | +48 728 884 506',
  application: 'Application: Global Partner, Strategic Initiatives | Booksy | Warsaw / Remote',
};

function buildHTML(data) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-size: 10.5pt;
    line-height: 1.6;
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
  .header .contact {
    font-size: 8.5pt;
    color: #555;
    margin-bottom: 4px;
  }
  .header .application {
    font-size: 9.5pt;
    font-weight: 500;
    color: #2d5aa0;
  }

  .letter-body {
    margin-top: 24px;
    text-align: justify;
  }
  .letter-body p {
    margin-bottom: 1em;
  }
  .letter-body ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 1em;
  }
  .letter-body ul li {
    margin-bottom: 8px;
    padding-left: 16px;
    position: relative;
  }
  .letter-body ul li::before {
    content: '\\2022';
    color: #2d5aa0;
    position: absolute;
    left: 0;
  }
  .letter-body b {
    font-weight: 600;
    color: #1b2a4a;
  }

  .signoff {
    margin-top: 2em;
    font-size: 10.5pt;
  }
  .signoff p {
    margin-bottom: 0.3em;
  }

  @page {
    size: A4;
    margin: 15mm;
  }
</style>
</head>
<body>

<div class="header">
  <h1>${data.name}</h1>
  <div class="contact">${data.contact}</div>
  <div class="application">${data.application}</div>
</div>

<div class="letter-body">

<p>Dear Booksy Hiring Team,</p>

<p>I have spent 8+ years building financial models, running reporting cadences, and coordinating cross-functional teams across HSBC, Trustwave, and Zimmer Biomet. Three things stand out:</p>

<ul>
  <li><b>Initiative management:</b> Finance processes for ~40 HSBC projects ($15M) - budgeting, forecasting, milestone tracking, and weekly executive updates.</li>
  <li><b>Data to decisions:</b> At Trustwave, I build Power BI dashboards for the CFO, run scenario analyses, and serve as single source of truth for performance data.</li>
  <li><b>Execution and handover:</b> At Zimmer Biomet, Global Transition reporting across 14 departments - from project tracking tools to training materials ensuring long-term adoption.</li>
</ul>

<p>Six Sigma, PRINCE2, and a Quality Management postgraduate (SGH) back up the structured approach. Happy to discuss how this fits Booksy's needs.</p>

</div>

<div class="signoff">
<p>Sincerely,</p>
<p><b>Adriana Gusciora</b></p>
</div>

</body>
</html>`;
}

async function generatePDF() {
  const html = buildHTML(clData);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });

  const pdfPath = path.join(outputDir, clData.fileName);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' },
  });

  await browser.close();
  console.log(`Generated: ${pdfPath}`);
}

(async () => {
  await generatePDF();
  console.log('Done!');
})();

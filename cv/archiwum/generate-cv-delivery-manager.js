const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const path = require('path');
const fs = require('fs');

const outputDir = __dirname;

const cvData = {
  en: {
    fileName: 'AG_Delivery Manager_FinTech_EN.pdf',
    name: 'Adriana Guściora',
    title: 'Delivery Manager · Financial Services & FinTech',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    linkedinUrl: 'https://www.linkedin.com/in/adriana-gu',
    location: 'Remote · Poland',
    summary: 'Delivery and project leader with 8+ years in IT delivery, financial services and FinTech (HSBC, Trustwave). Managed cross-functional teams up to 15 people and owned people cost allocation for ~40 IT projects with $15M annual budget. Combining PRINCE2 and Agile/Scrum with P&L responsibility for assigned client accounts and stakeholder management at executive level.',
    sections: {
      experience: 'Work Experience',
      skills: 'Key Skills',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
      contact: 'Contact',
    },
    jobs: [
      {
        role: 'Senior Finance Analyst · Delivery Coordination',
        company: 'Trustwave Sp. z o.o. · Performance Management',
        location: 'Warsaw / Remote',
        period: 'Oct 2024 — present',
        bullets: [
          'IT financial process analysis; dashboards for CFO, Financial Directors and department heads',
          'Power BI dashboards and Alteryx ETL pipelines for monthly financial reviews',
          'Cross-functional coordination across finance, IT and business reporting standards',
        ],
        successStory: 'Redesigned FP&A and Performance Management reporting end-to-end and trained the team across the full toolset: Excel, Power Query, Alteryx, SQL, Power BI.',
      },
      {
        role: 'Project Finance Analyst at HSBC',
        company: 'Alten Polska Sp. z o.o.',
        location: 'Cracow / Remote',
        period: 'Jul 2022 — Apr 2024',
        bullets: [
          'Coordinated team of 5 analysts; owned people cost allocation for ~40 IT projects ($15M annual budget)',
          'Agile / Scrum with global teams: sprint planning, backlog, daily stand-ups',
          'Daily Jira and Confluence: tasks, dependencies, RAID logs',
          'Power BI and Excel reporting (budget, forecast); aligned standards with Central Finance Controlling',
        ],
        successStory: 'Mapped financial processes across the analyst team, proposed and implemented streamlined workflows, and trained the team on Excel and Power Query.',
      },
      {
        role: 'Smartsheet Developer · Project Coordinator',
        company: 'Zimmer Biomet Polska · Global Business Support',
        location: 'Warsaw',
        period: 'Jun 2021 — Jun 2022',
        bullets: [
          'Led Global Transition delivery across 14 departments: scope, timeline, milestone tracking',
          'Training workshops for global end users and Smartsheet developers',
          'Continuous Improvement tracking app in PowerApps',
        ],
        successStory: 'Designed migration-progress dashboards for 14 departments, trained developers and end users in Smartsheet, owned iterative improvements and change communication.',
      },
      {
        role: 'BI Developer & Project Manager',
        company: 'ISS Facility Services · Project Management',
        location: 'Warsaw',
        period: 'Sep 2018 — May 2021',
        bullets: [
          'Cross-functional delivery teams (4–15 people); P&L responsibility for assigned customer account',
          'End-to-end project execution: scope, timeline, budget, monthly settlements, reconciliation',
          'Internal audits and risk reviews across active engagements',
          'Executive Board reports in Power BI translating data into business recommendations',
        ],
        successStory: 'Streamlined invoice flow for a global banking client (Power Automate, SharePoint, Excel) and led the Novatorium initiative — innovation workflow rollout for the Polish branch (Power Automate, PowerApps, Power BI, SharePoint).',
      },
      {
        role: 'Junior Project Manager · Management Trainee',
        company: 'Jeronimo Martins (Lisbon & Warsaw) · Robert BOSCH (Warsaw)',
        location: '',
        period: 'Feb 2016 — Aug 2018',
        bullets: [
          'International experience (Portugal, Poland): Employer Branding, Store Excellence, Logistics',
          'Stakeholder coordination and workshop facilitation in matrix organisations',
        ],
      },
    ],
    skillGroups: [
      { icon: '◆', name: 'Project execution & Project Management', items: ['PRINCE2 Foundation', 'Agile / Scrum', 'Risk management', 'Change & adoption management'] },
      { icon: '◆', name: 'PM Tools', items: ['Jira', 'Confluence', 'Smartsheet', 'SharePoint', 'Power Automate', 'MS Project'] },
      { icon: '◆', name: 'Finance & financial result', items: ['IT P&L', 'People cost allocation', 'Cost estimation', 'Spend monitoring', 'Financial forecasting', 'Invoice reconciliation'] },
      { icon: '◆', name: 'Business Intelligence & reporting', items: ['Power BI', 'DAX', 'Power Query', 'Excel (Power Pivot)', 'SQL', 'Alteryx', 'Cognos'] },
      { icon: '◆', name: 'Power Platform & AI', items: ['Power Automate', 'PowerApps', 'Claude Code', 'Prompt Engineering'] },
    ],
    education: [
      { year: '2020-2021', title: 'Postgraduate: Quality Manager', school: 'SGH Warsaw School of Economics', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: "Master's in Clinical Psychology", school: 'University of Social Sciences and Humanities (SWPS)', desc: '' },
      { year: '2012-2016', title: 'Engineering: Management & Production Engineering', school: 'Warsaw University of Technology', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazil', school: 'ANGLO High School, Penapolis', desc: '' },
    ],
    certs: [
      'PRINCE2 Foundation, AXELOS, 2020',
      'Project Management, INCODO, 2016',
      'Six Sigma Quality Management, SGH, 2020',
      'SQL Advanced, LabMasters, 2025',
      'Business Analytics in Power BI, LabMasters, 2022',
    ],
    languages: [
      { lang: 'Polish', level: 'Native' },
      { lang: 'English', level: 'C1 fluent' },
      { lang: 'Portuguese', level: 'CELPE-Bras' },
      { lang: 'Italian', level: 'A2 basic' },
    ],
    gdpr: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
    successLabel: 'Success story',
  },
  pl: {
    fileName: 'AG_Delivery Manager_FinTech_PL.pdf',
    name: 'Adriana Guściora',
    title: 'Delivery Manager · Usługi Finansowe i FinTech',
    email: 'Gusciora.Ada@gmail.com',
    linkedin: 'linkedin.com/in/adriana-gu',
    linkedinUrl: 'https://www.linkedin.com/in/adriana-gu',
    location: 'Zdalnie · Polska',
    summary: 'Liderka dostarczania projektów z 8+ latami doświadczenia w IT, usługach finansowych i FinTech (HSBC, Trustwave). Zarządzałam zespołami międzyfunkcyjnymi do 15 osób i odpowiadałam za alokację kosztów osobowych dla ~40 projektów IT z budżetem rocznym 15 milionów dolarów. Łączę certyfikat PRINCE2 i metodyki zwinne (Jira, Confluence) z odpowiedzialnością za rachunek zysków i strat przypisanych klientów oraz zarządzaniem interesariuszami na poziomie zarządu. Specjalizuję się w prognozowaniu finansowym, monitoringu wydatków i zarządzaniu ryzykiem w regulowanym środowisku bankowym i firm software house.',
    sections: {
      experience: 'Doświadczenie zawodowe',
      skills: 'Kluczowe umiejętności',
      education: 'Wykształcenie',
      certifications: 'Certyfikaty',
      languages: 'Języki',
      contact: 'Kontakt',
    },
    jobs: [
      {
        role: 'Starszy Analityk Finansowy | Koordynacja Delivery',
        company: 'Trustwave Sp. z o.o. · Performance Management',
        location: 'Warszawa / Zdalnie',
        period: 'paź 2024 - obecnie',
        bullets: [
          'Analiza procesów finansowych w obszarze IT oraz przygotowywanie dashboardów: wysokopoziomowych dla CFO i dyrektorów finansowych oraz szczegółowych dla kierowników działowych',
          'Budowa dashboardów Power BI i pipeline\'ów ETL w Alteryx wykorzystywanych w miesięcznych przeglądach finansowych i planowaniu pojemności',
          'Koordynacja współpracy międzyfunkcyjnej (finanse, IT, biznes) nad standaryzowanymi szablonami raportowymi',
        ],
        successStory: 'Przeanalizowałam procesy FP&A i Performance Management dla zespołu finansowego, zdiagnozowałam wąskie gardła w raportowaniu miesięcznym, zaprojektowałam i wdrożyłam usprawnienia end-to-end, stworzyłam dokumentację procesu nieefektywnego i usprawnionego oraz przeprowadziłam szkolenia z całego toolchainu (Excel, Power Query, Alteryx, SQL, Power BI).',
      },
      {
        role: 'Analityk Finansowy Projektów w HSBC',
        company: 'Alten Polska Sp. z o.o.',
        location: 'Kraków / Zdalnie',
        period: 'lip 2022 - kwi 2024',
        bullets: [
          'Koordynacja zespołu 5 analityków oraz odpowiedzialność za alokację kosztów osobowych dla ~40 projektów IT z budżetem rocznym 15 milionów dolarów: planowanie obsady etatowej, prognozowanie kosztów zasobów, monitoring wydatków, analiza odchyleń',
          'Praca w środowisku Agile/Scrum z globalnymi zespołami: planowanie sprintu, doprecyzowanie backlogu, daily stand-up',
          'Codzienna praca w Jira i Confluence: śledzenie zadań projektowych, zależności i logów RAID (ryzyka, założenia, problemy, zależności)',
          'Budowa dashboardów Power BI i raportów Excel: budżet, forecast',
          'Harmonizacja standardów raportowania z Central Finance Controlling i prowadzenie warsztatów szkoleniowych',
        ],
        successStory: 'Analizowałam procesy finansowe każdego specjalisty w koordynowanym zespole, zdiagnozowałam nieefektywności, zaproponowałam i wdrożyłam usprawnienia, stworzyłam dokumentację usprawnionego procesu i przeszkoliłam zespół do swobodnego korzystania z nowego zestawu narzędzi (Excel, Power Query).',
      },
      {
        role: 'Deweloper Smartsheet | Koordynator Projektów',
        company: 'Zimmer Biomet Polska · Global Business Support',
        location: 'Warszawa',
        period: 'cze 2021 - cze 2022',
        bullets: [
          'Prowadzenie realizacji procesu Global Transition dla 14 departamentów: planowanie zakresu i harmonogramu, śledzenie kamieni milowych, raportowanie postępów do interesariuszy',
          'Organizacja i prowadzenie warsztatów szkoleniowych dla globalnych użytkowników i deweloperów Smartsheet',
          'Budowa aplikacji Continuous Improvement w PowerApps do standaryzacji zarządzania zmianami procesowymi',
        ],
        successStory: 'Stworzyłam nową wersję dashboardów raportujących postęp migracji Global Transition dla 14 departamentów, przeszkoliłam deweloperów Smartsheet (utrzymanie i rozwój) oraz użytkowników końcowych (uzupełnianie i odczyt danych), prowadziłam iteracyjny rozwój dashboardów oraz komunikację każdej wprowadzanej zmiany (Smartsheet).',
      },
      {
        role: 'Analityk BI i Kierownik Projektu',
        company: 'ISS Facility Services · Project Management',
        location: 'Warszawa',
        period: 'wrz 2018 - maj 2021',
        bullets: [
          'Zarządzanie zespołami międzyfunkcyjnymi (4-15 osób) oraz odpowiedzialność za rachunek zysków i strat przypisanego klienta: śledzenie przychodów, kontrola kosztów, optymalizacja marży',
          'Kompleksowa realizacja projektów dla przypisanego klienta: zakres, harmonogram, budżet, prognozowanie finansowe, miesięczne rozliczenia, uzgadnianie faktur',
          'Przeprowadzanie audytów wewnętrznych i przeglądów ryzyk w aktywnych projektach',
          'Przygotowywanie raportów dla Zarządu w Power BI: tłumaczenie złożonych danych na rekomendacje biznesowe',
        ],
        successStory: 'Odpowiadałam za projekt usprawnienia obiegu faktur dla globalnego klienta z sektora bankowego: zaplanowałam i zaproponowałam nowy proces, wdrożyłam go kompleksowo, stworzyłam dokumentację oraz przeszkoliłam zespół wewnętrzny i klienta do efektywnego korzystania z procesu (Power Automate, SharePoint, Excel). Równolegle prowadziłam projekt Novatorium: wdrożenie obiegu pomysłów innowacyjnych i sprawdzonych rozwiązań w polskim oddziale firmy, komunikację procesu oraz szkolenia pracowników (Power Automate, PowerApps, Power BI, SharePoint, Excel).',
      },
      {
        role: 'Młodszy Kierownik Projektu · Management Trainee',
        company: 'Jeronimo Martins (Lizbona i Warszawa) · Robert BOSCH (Warszawa)',
        location: '',
        period: 'lut 2016 - sie 2018',
        bullets: [
          'Międzynarodowe doświadczenie projektowe (Portugalia i Polska): Employer Branding, Store Excellence, Logistyka',
          'Koordynacja interesariuszy i prowadzenie warsztatów w organizacji macierzowej',
        ],
      },
    ],
    skillGroups: [
      { icon: '◆', name: 'Realizacja projektów i Project Management', items: ['PRINCE2 Foundation', 'Agile / Scrum', 'Zarządzanie ryzykiem', 'Zarządzanie zmianą i adopcją'] },
      { icon: '◆', name: 'Narzędzia PM', items: ['Jira', 'Confluence', 'Smartsheet', 'SharePoint', 'Power Automate', 'MS Project'] },
      { icon: '◆', name: 'Finanse i wynik finansowy', items: ['Rachunek zysków i strat', 'Alokacja kosztów osobowych', 'Estymacja kosztów', 'Monitoring wydatków', 'Prognozowanie', 'Rozliczenia faktur'] },
      { icon: '◆', name: 'Business Intelligence i raportowanie', items: ['Power BI', 'DAX', 'Power Query', 'Excel (Power Pivot)', 'SQL', 'Alteryx', 'Cognos'] },
      { icon: '◆', name: 'Power Platform i AI', items: ['Power Automate', 'PowerApps', 'Claude Code', 'Prompt Engineering'] },
    ],
    education: [
      { year: '2020-2021', title: 'Studia podyplomowe: Menedżer Jakości', school: 'Szkoła Główna Handlowa (SGH)', desc: 'Lean Management, Six Sigma, Kaizen' },
      { year: '2012-2017', title: 'Magister Psychologii Klinicznej', school: 'Uniwersytet SWPS', desc: '' },
      { year: '2012-2016', title: 'Inżynier: Zarządzanie i Inżynieria Produkcji', school: 'Politechnika Warszawska', desc: '' },
      { year: '2009-2010', title: 'Rotary Youth Exchange: Brazylia', school: 'Liceum ANGLO, Penapolis', desc: '' },
    ],
    certs: [
      'PRINCE2 Foundation, AXELOS, 2020',
      'Project Management, INCODO, 2016',
      'Six Sigma w zarządzaniu jakością, SGH, 2020',
      'SQL Advanced, LabMasters, 2025',
      'Business Analytics in Power BI, LabMasters, 2022',
    ],
    languages: [
      { lang: 'Polski', level: 'Ojczysty' },
      { lang: 'Angielski', level: 'C1 biegły' },
      { lang: 'Portugalski', level: 'CELPE-Bras' },
      { lang: 'Włoski', level: 'A2 podstawowy' },
    ],
    gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
    successLabel: 'Success story',
  },
};

const photoPath = path.resolve(__dirname, '..', '..', 'adriana-gusciora-pl', 'zdjecia', 'ada2.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUrl = `data:image/jpeg;base64,${photoBase64}`;

function generateRainSVG(width, height) {
  // Static matrix-style numbers in subtle blue, fading toward bottom
  const fontSize = 14;
  const cols = Math.floor(width / fontSize);
  const elems = [];
  for (let col = 0; col < cols; col++) {
    const depth = 0.25 + Math.random() * 0.75;
    const bright = 0.35 + Math.random() * 0.65;
    const startOffset = Math.floor(Math.random() * 8);
    const endRow = Math.floor((depth * height) / fontSize);
    for (let row = startOffset; row < endRow; row++) {
      const y = row * fontSize + fontSize;
      const yRatio = y / height;
      const yFade = Math.max(0, 1 - yRatio * 1.15);
      if (yFade < 0.02) continue;
      const opacity = (0.32 * bright * yFade).toFixed(3);
      const ch = Math.floor(Math.random() * 10);
      elems.push('<text x="' + (col * fontSize) + '" y="' + y + '" fill="rgba(30,58,110,' + opacity + ')" font-family="JetBrains Mono, ui-monospace, monospace" font-size="' + fontSize + '">' + ch + '</text>');
    }
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;">' + elems.join('') + '</svg>';
}

function buildHTML(data) {
  const jobsHTML = data.jobs.map(j => `
    <article class="exp-row">
      <div class="job-content">
        <header class="job-head">
          <div class="job-title">
            <h3 class="job-role">${j.role}</h3>
            <div class="job-company">${j.company}${j.location ? ` · <span class="job-loc">${j.location}</span>` : ''}</div>
          </div>
          <span class="job-period">${j.period}</span>
        </header>
        <ul class="job-bullets">${j.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
      <div class="success-content">
        ${j.successStory ? `<div class="success-story"><span class="success-tag">★ ${data.successLabel}</span> ${j.successStory}</div>` : ''}
      </div>
    </article>
  `).join('');

  const skillsHTML = data.skillGroups.map(g => `
    <div class="skill-group">
      <div class="skill-name">${g.name}</div>
      <div class="skill-tags">${g.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>
  `).join('');

  const eduHTML = data.education.map(e => `
    <div class="edu-item">
      <div class="edu-year">${e.year}</div>
      <div class="edu-body">
        <div class="edu-title">${e.title}</div>
        <div class="edu-school">${e.school}${e.desc ? ` · <em>${e.desc}</em>` : ''}</div>
      </div>
    </div>
  `).join('');

  const skillsHTMLForGrid = data.skillGroups.map(g => `
    <div class="skill-group">
      <div class="skill-name">${g.name}</div>
      <div class="skill-tags">${g.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>
  `).join('');

  const certsHTML = data.certs.map(c => `<li class="cert-item">${c}</li>`).join('');
  const langsHTML = data.languages.map(l => `<li class="lang-item"><span class="lang-name">${l.lang}</span><span class="lang-level">${l.level}</span></li>`).join('');

  const mailIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;
  const linkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const pinIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

  return `<!DOCTYPE html>
<html lang="${data === cvData.pl ? 'pl' : 'en'}">
<head>
<meta charset="UTF-8">
<title>${data.name},${data.title}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --ink: #0f1d35;
    --ink-soft: #3a4a64;
    --ink-mid: #56657c;
    --ink-muted: #7c8aa1;
    --accent: #1e56a0;
    --accent-soft: #2a6fc8;
    --accent-bg: #eaf1fb;
    --accent-bg-soft: #f6f9fd;
    --rule: #d8dee8;
    --rule-soft: #ebeef4;
    --gold: #b88a2c;
    --gold-soft: #d4a851;
    --gold-bg: #faf6ec;
    --serif: 'Fraunces', 'Cormorant Garamond', Georgia, serif;
    --sans: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  html, body {
    font-family: var(--sans);
    color: var(--ink);
    line-height: 1.5;
    font-size: 9.1pt;
    background: white;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "ss01", "cv11";
  }

  body { position: relative; min-height: 297mm; }
  .rain-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
  .page {
    position: relative;
    z-index: 1;
    max-width: 210mm;
    margin: 0 auto;
    padding: 11mm 13mm 8mm;
    background: rgba(255, 255, 255, 0.92);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ---- Header (editorial masthead) ---- */
  .header {
    display: grid;
    grid-template-columns: 96px 1fr;
    gap: 20px;
    align-items: center;
    padding-bottom: 14px;
    margin-bottom: 16px;
    border-bottom: 0.75pt solid var(--rule);
    position: relative;
  }
  .header::after {
    content: '';
    position: absolute;
    left: 0; bottom: -1.5pt;
    width: 72pt; height: 2pt;
    background: var(--accent);
  }
  .header-photo {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 2pt solid white;
    box-shadow: 0 0 0 0.75pt var(--accent), 0 3px 12px rgba(15,29,53,0.10);
  }
  .header-text h1 {
    font-family: var(--serif);
    font-size: 26pt;
    font-weight: 600;
    color: var(--ink);
    letter-spacing: -0.6px;
    line-height: 1.0;
    font-variation-settings: "opsz" 144, "SOFT" 30;
    margin-bottom: 4px;
  }
  .header-title {
    font-family: var(--serif);
    font-style: italic;
    font-size: 11.5pt;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.05px;
    margin-bottom: 8px;
  }
  .header-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    font-size: 8.6pt;
    color: var(--ink-mid);
    font-weight: 500;
  }
  .header-contact a {
    color: var(--ink-mid);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .header-contact a:hover { color: var(--accent); }
  .header-contact .contact-static {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  /* ---- Summary (editorial pull-quote) ---- */
  .summary {
    position: relative;
    padding: 11px 16px 11px 18px;
    margin-bottom: 18px;
    text-align: justify;
    hyphens: auto;
    font-size: 9.4pt;
    color: var(--ink-soft);
    line-height: 1.62;
    font-weight: 400;
    border-left: 2pt solid var(--accent);
    background: linear-gradient(to right, var(--accent-bg-soft), transparent 70%);
  }

  /* ---- Section titles (editorial small-caps) ---- */
  .section-title {
    font-family: var(--serif);
    font-style: italic;
    font-size: 11.5pt;
    font-weight: 600;
    color: var(--ink);
    margin-top: 4px;
    margin-bottom: 11px;
    padding-bottom: 4px;
    border-bottom: 0.75pt solid var(--rule);
    letter-spacing: 0.01em;
    position: relative;
  }
  .section-title::after {
    content: '';
    position: absolute;
    left: 0; bottom: -1.25pt;
    width: 32pt; height: 1.5pt;
    background: var(--accent);
  }

  /* ---- Experience rows: job left, success right ---- */
  .exp-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
    align-items: start;
    margin-bottom: 13px;
    padding-bottom: 11px;
    border-bottom: 0.5pt solid var(--rule-soft);
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .exp-row:last-of-type { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
  .job-content, .success-content { position: relative; z-index: 2; }

  .job-content {
    padding-left: 12px;
    border-left: 1.5pt solid var(--accent);
  }
  .job-head { margin-bottom: 6px; }
  .job-role {
    font-family: var(--serif);
    font-size: 11pt;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.2;
    letter-spacing: -0.1px;
    margin-bottom: 2px;
  }
  .job-company {
    font-size: 8.6pt;
    color: var(--ink-mid);
    font-weight: 500;
    line-height: 1.35;
  }
  .job-loc {
    color: var(--ink-muted);
    font-weight: 400;
  }
  .job-period {
    display: inline-block;
    font-size: 7.8pt;
    color: var(--accent);
    font-weight: 600;
    white-space: nowrap;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background: var(--accent-bg);
    padding: 2px 8px;
    border-radius: 2pt;
    margin-bottom: 7px;
    font-variant-numeric: tabular-nums;
  }
  .job-bullets {
    padding-left: 14px;
    margin-top: 4px;
    list-style: none;
  }
  .job-bullets li {
    position: relative;
    margin-bottom: 4px;
    font-size: 8.9pt;
    color: var(--ink-soft);
    line-height: 1.5;
    padding-left: 2px;
  }
  .job-bullets li::before {
    content: '';
    position: absolute;
    left: -10px; top: 6.5px;
    width: 5px; height: 1.25pt;
    background: var(--accent);
  }

  /* ---- Success story (gold-accented narrative) ---- */
  .success-content { padding-top: 16pt; }
  .success-story {
    position: relative;
    padding: 12px 14px 12px 16px;
    background: var(--gold-bg);
    border-left: 1.5pt solid var(--gold);
    border-radius: 0;
    font-size: 8.8pt;
    color: var(--ink-soft);
    line-height: 1.6;
    text-align: justify;
    hyphens: auto;
  }
  .success-tag {
    display: block;
    font-family: var(--serif);
    font-style: italic;
    font-weight: 600;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 7.6pt;
    margin-bottom: 5px;
  }

  /* ---- Page 2 ---- */
  .page-2 {
    page-break-before: always;
    break-before: page;
    padding-top: 4mm;
  }
  .page-2 .section-title:first-child { margin-top: 0; }

  /* ---- Education (full width, refined list) ---- */
  .edu-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 22px;
    margin-bottom: 14px;
  }
  .edu-item {
    display: grid;
    grid-template-columns: 64pt 1fr;
    gap: 10px;
    align-items: baseline;
    padding: 5px 0;
    border-bottom: 0.5pt solid var(--rule-soft);
  }
  .edu-item:last-child,
  .edu-item:nth-last-child(2) { border-bottom: none; }
  .edu-year {
    font-family: var(--serif);
    font-style: italic;
    font-size: 8.6pt;
    color: var(--accent);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
  .edu-title {
    font-size: 9.2pt;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.3;
  }
  .edu-school {
    font-size: 8.4pt;
    color: var(--ink-mid);
    line-height: 1.35;
    margin-top: 1px;
  }
  .edu-school em { color: var(--ink-muted); font-style: italic; }

  /* ---- Skills grid (4 groups, 2x2) ---- */
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 22px;
    margin-bottom: 16px;
  }
  .skill-group {
    border-top: 1.25pt solid var(--accent);
    padding-top: 7px;
  }
  .skill-name {
    font-family: var(--serif);
    font-style: italic;
    font-size: 9.4pt;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 5px;
    letter-spacing: 0.01em;
  }
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 5px;
  }
  .skill-tag {
    color: var(--ink-soft);
    font-size: 8.3pt;
    font-weight: 500;
    line-height: 1.45;
    padding: 1.5px 0;
  }
  .skill-tag:not(:last-child)::after {
    content: '·';
    margin-left: 6px;
    color: var(--ink-muted);
  }

  /* ---- Certs (full width, 2-col list) ---- */
  .cert-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 22px;
    margin-bottom: 14px;
    list-style: none;
  }
  .cert-item {
    font-size: 8.5pt;
    color: var(--ink-soft);
    padding: 4px 0 4px 16px;
    position: relative;
    line-height: 1.4;
    border-bottom: 0.5pt solid var(--rule-soft);
  }
  .cert-item:last-child,
  .cert-item:nth-last-child(2) { border-bottom: none; }
  .cert-item::before {
    content: '';
    position: absolute;
    left: 0; top: 8px;
    width: 7px; height: 7px;
    border: 1pt solid var(--accent);
    border-radius: 50%;
    background: var(--accent-bg);
  }

  /* ---- Languages (4-col elegant cards) ---- */
  .lang-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 12px;
    list-style: none;
  }
  .lang-item {
    text-align: center;
    padding: 8px 6px;
    border: 0.5pt solid var(--rule);
    border-radius: 3pt;
    background: rgba(255, 255, 255, 0.5);
  }
  .lang-name {
    display: block;
    font-family: var(--serif);
    font-style: italic;
    font-size: 9.6pt;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 1px;
  }
  .lang-level {
    display: block;
    font-size: 7.6pt;
    color: var(--accent);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* ---- GDPR ---- */
  .gdpr {
    margin-top: 14px;
    padding-top: 10px;
    border-top: 0.5pt solid var(--rule-soft);
    font-size: 6.6pt;
    color: var(--ink-muted);
    text-align: justify;
    line-height: 1.5;
    font-style: italic;
    hyphens: auto;
  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    .page { padding: 12mm 14mm 8mm; }
  }
</style>
</head>
<body>
<div class="rain-bg">${generateRainSVG(794, 1123)}</div>
<div class="page">

  <header class="header">
    <img src="${photoDataUrl}" alt="${data.name}" class="header-photo">
    <div class="header-text">
      <h1>${data.name}</h1>
      <div class="header-title">${data.title}</div>
      <div class="header-contact">
        <a href="mailto:${data.email}">${mailIcon}${data.email}</a>
        <a href="${data.linkedinUrl}">${linkIcon}${data.linkedin}</a>
        <span class="contact-static">${pinIcon}${data.location}</span>
      </div>
    </div>
  </header>

  <div class="summary">${data.summary}</div>

  <h2 class="section-title">${data.sections.experience}</h2>
  ${jobsHTML}

  <div class="page-2">
    <h2 class="section-title">${data.sections.education}</h2>
    <div class="edu-list">${eduHTML}</div>

    <h2 class="section-title">${data.sections.skills}</h2>
    <div class="skills-grid">${skillsHTMLForGrid}</div>

    <h2 class="section-title">${data.sections.certifications}</h2>
    <ul class="cert-grid">${certsHTML}</ul>

    <h2 class="section-title">${data.sections.languages}</h2>
    <ul class="lang-grid">${langsHTML}</ul>

    <div class="gdpr">${data.gdpr}</div>
  </div>

</div>
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
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`Generated: ${pdfPath}`);
}

(async () => {
  await generatePDF('en');
  console.log('Done!');
})();

// Senior Data Analyst | BI Developer — mirrors the live cv-analityk site (index.html).
// Same dark "Matrix" aesthetic (blue/navy, binary rain, Inter + JetBrains Mono, skill bars,
// terminal, AI-project cards, success stories) as the other cv/ generators.
// Builds: site_web_preview.html (full web CV), the 2-page PDF (<=2MB, role title links to the
// cv-analityk site) and a short webm of the moving background.
// Content is copied 1:1 from the published site: role = "Senior Data Analyst | BI Developer",
// cost-controlling / reconciliation / FP&A framing, finance-ops terminal.

const { chromium } = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/@playwright/test');
const sharp = require('C:/Users/adria/OneDrive/Dokumenty/GitHub/adriana-gusciora-pl/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const repoRoot = path.resolve(__dirname, '..');
const outputDir = __dirname;
const CSS = fs.readFileSync(path.join(repoRoot, 'cv-analityk.css'), 'utf-8');
const photoPath = path.join(repoRoot, 'ada2.jpg');

const WEB_PREVIEW = path.join(outputDir, 'site_web_preview.html');
const RENDER_HTML = path.join(outputDir, '_site_render.html');
const PDF_FILE = path.join(outputDir, 'AG_Senior_Data_Analyst_BI_Developer.pdf');
const VIDEO_FILE = path.join(outputDir, 'AG_Senior_Data_Analyst_BI_Developer_CV_background.webm');

const WEB_URL = 'https://adrwis.github.io/cv-analityk/';
const ROLE = 'Senior Data Analyst | BI Developer';
const HEADLINE = '$15M people-cost pool reconciled across ~40 projects — budget vs actuals, <span style="white-space:nowrap">audit-ready</span>.';
const GDPR_EN = 'I consent to the processing of my personal data for recruitment purposes (GDPR, Regulation (EU) 2016/679).';

function skillBar(name, pct, level) {
  return `<div class="cv-analyst__skill-bar">
    <div class="cv-analyst__skill-label"><span>${name}</span><span>${pct}%</span></div>
    <div class="cv-analyst__skill-track"><div class="cv-analyst__skill-fill" data-width="${pct}" data-level="${level}" style="width:${pct}%"></div></div>
  </div>`;
}
function job(role, period, company, bullets, success) {
  return `<div class="cv-analyst__exp-card">
    <div class="cv-analyst__exp-header"><h3 class="cv-analyst__exp-role">${role}</h3><span class="cv-analyst__exp-period">${period}</span></div>
    <p class="cv-analyst__exp-company">${company}</p>
    <ul class="cv-analyst__exp-bullets" role="list">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    ${success ? `<p class="cv-analyst__exp-success"><span class="cv-analyst__success-tag">★ Success story</span>${success}</p>` : ''}
  </div>`;
}

function buildHTML(photoDataUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>CV — Adriana Guściora · Senior Data Analyst | BI Developer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>${CSS}</style>
<style>
  /* lighter navy base; full-bleed -> kill the 1.2cm white @page margins from cv-analityk.css */
  @page { margin: 0 !important; }
  html, body { background: #1a2f52 !important; }
  .cv-analyst, .cv-analyst[data-mode="dark"]{ --ca-bg:#1a2f52; background:#1a2f52 !important; }
  .cv-analyst__topbar { position: static; }
  .cv-analyst__success-tag{ display:inline-block; color:var(--ca-accent-light); font-weight:700; font-size:.78rem; letter-spacing:.02em; margin-right:6px; }

  /* role line under the name -> links to the cv-analityk site */
  .cv-analyst__role-link{ display:inline-flex; align-items:center; gap:.5rem; margin:.35rem 0 .15rem;
    font-family: var(--ca-font-mono); font-weight:500; font-size:.95rem; color: var(--ca-accent-light);
    text-decoration:none; border-bottom:1px dashed rgba(122,179,232,.55); padding-bottom:2px; }
  .cv-analyst__role-link::before{ content:"▸"; color: var(--ca-accent); }
  .cv-analyst__role-link:hover{ color:#cfe6ff; border-bottom-color:#cfe6ff; }

  /* one concrete, finished headline (replaces the typing line in the PDF) */
  .cv-analyst__headline{ font-family:var(--ca-font-mono); font-size:.86rem; color:#bcd6f2;
    margin:.5rem 0 .2rem; padding-left:.85rem; border-left:2px solid var(--ca-accent); }

  /* success story per role */
  .cv-analyst__exp-success{ margin-top:7px; padding:5px 10px; font-size:.82rem; line-height:1.35;
    color:#cfe6ff; background:rgba(91,155,213,.12); border-left:2px solid var(--ca-accent); border-radius:4px; }
  .cv-analyst__exp-success span{ color:var(--ca-accent); font-weight:700; margin-right:5px; }

  /* ===== HERO readability: calm darker panel behind the hero so text separates from the rain ===== */
  .cv-analyst__hero{ position:relative; z-index:1; }
  .cv-analyst__hero::before{ content:""; position:absolute; z-index:-1;
    inset:-14px -22px -16px -22px; border-radius:18px;
    background: linear-gradient(160deg, rgba(13,24,46,.92) 0%, rgba(16,30,56,.88) 55%, rgba(20,38,70,.82) 100%);
    border:1px solid rgba(132,182,234,.30);
    box-shadow: 0 10px 34px rgba(6,14,30,.45), inset 0 1px 0 rgba(160,200,245,.10);
    pointer-events:none; }
  /* hero text pops over the (now darker) panel */
  .cv-analyst__name{ text-shadow:0 1px 14px rgba(5,12,26,.6); }
  .cv-analyst__role-link, .cv-analyst__headline, .cv-analyst__tagline,
  .cv-analyst__contact-item, .cv-analyst__hero-badge{ text-shadow:0 1px 6px rgba(5,12,26,.55); }
  .cv-analyst__tagline{ color:#dcebff !important; }
  .cv-analyst__tagline strong{ color:#eaf3ff; }

  /* readability: faint, EVEN rain + light veil; cards get a visible edge so they don't blend */
  .cv-analyst__container{ position:relative; z-index:1; }
  .cv-analyst__container::before{ content:""; position:absolute; inset:0; z-index:-1;
    background: linear-gradient(180deg, rgba(20,36,64,.16), rgba(20,36,64,.26)); pointer-events:none; }
  .cv-analyst__exp-card, .cv-analyst__skill-group, .cv-analyst__terminal,
  .cv-analyst__lang-card, .cv-analyst__edu-item{
    background: rgba(33,54,90,.82) !important; border:1px solid rgba(140,185,235,.22) !important; }

  /* ===== COMPACT mode (only for the 2-page PDF) ===== */
  .cv-analyst.compact{ font-size:7.4pt !important; line-height:1.26 !important; }
  .cv-analyst.compact .cv-analyst__container{ max-width:800px !important; padding:6px 26px 12px !important; }
  .cv-analyst.compact .cv-analyst__hero{ padding:2px 0 8px !important; gap:14px !important; margin-bottom:4px !important; }
  .cv-analyst.compact .cv-analyst__name{ font-size:21pt !important; line-height:1.04 !important; }
  .cv-analyst.compact .cv-analyst__role-link{ font-size:8.4pt !important; margin:2px 0 !important; }
  .cv-analyst.compact .cv-analyst__headline{ font-size:8pt !important; margin:4px 0 3px !important; }
  .cv-analyst.compact .cv-analyst__tagline{ font-size:8pt !important; line-height:1.3 !important; margin:3px 0 !important; max-width:68ch !important; }
  .cv-analyst.compact .cv-analyst__typing{ display:none !important; }
  .cv-analyst.compact .cv-analyst__hero-badge{ font-size:6.8pt !important; padding:2px 8px !important; margin-bottom:3px !important; }
  .cv-analyst.compact .cv-analyst__photo{ width:92px !important; height:92px !important; }
  .cv-analyst.compact .cv-analyst__contact{ gap:3px 14px !important; font-size:7.4pt !important; margin-top:5px !important; }
  .cv-analyst.compact .cv-analyst__contact-item svg{ width:12px !important; height:12px !important; }
  .cv-analyst.compact #target-role{ display:none !important; }
  .cv-analyst.compact .cv-analyst__section{ margin:7px 0 !important; padding:0 !important; }
  .cv-analyst.compact .cv-analyst__section-header{ margin-bottom:4px !important; gap:7px !important; }
  .cv-analyst.compact .cv-analyst__section-title{ font-size:8.6pt !important; }
  .cv-analyst.compact .cv-analyst__section-icon{ width:20px !important; height:20px !important; }
  .cv-analyst.compact .cv-analyst__section-icon svg{ width:12px !important; height:12px !important; }
  .cv-analyst.compact .cv-analyst__exp-card{ margin-bottom:5px !important; padding:6px 10px !important; break-inside:avoid; page-break-inside:avoid; }
  .cv-analyst.compact .cv-analyst__exp-header{ margin-bottom:1px !important; }
  .cv-analyst.compact .cv-analyst__exp-role{ font-size:8.8pt !important; }
  .cv-analyst.compact .cv-analyst__exp-period{ font-size:6.9pt !important; }
  .cv-analyst.compact .cv-analyst__exp-company{ font-size:7.3pt !important; margin:1px 0 2px !important; }
  .cv-analyst.compact .cv-analyst__exp-bullets li{ font-size:7.4pt !important; line-height:1.26 !important; margin-bottom:1px !important; padding-left:14px !important; }
  .cv-analyst.compact .cv-analyst__exp-success{ font-size:7.1pt !important; padding:3px 8px !important; margin-top:4px !important; }
  .cv-analyst.compact .cv-analyst__skills-grid{ gap:8px !important; }
  .cv-analyst.compact .cv-analyst__skill-group{ padding:7px 10px !important; break-inside:avoid; }
  .cv-analyst.compact .cv-analyst__skill-group h3{ font-size:8pt !important; margin-bottom:4px !important; }
  .cv-analyst.compact .cv-analyst__skill-bar{ margin-bottom:3px !important; }
  .cv-analyst.compact .cv-analyst__skill-label{ font-size:7.1pt !important; margin-bottom:1px !important; }
  .cv-analyst.compact .cv-analyst__skill-track{ height:3.5px !important; }
  .cv-analyst.compact .cv-analyst__ai-projects{ display:grid !important; grid-template-columns:1fr 1fr 1fr !important; gap:6px !important; margin-top:7px !important; }
  .cv-analyst.compact .cv-analyst__ai-project{ padding:5px 7px !important; }
  .cv-analyst.compact .cv-analyst__ai-project-name{ font-size:7.2pt !important; }
  .cv-analyst.compact .cv-analyst__ai-project-desc{ font-size:6.5pt !important; line-height:1.25 !important; }
  .cv-analyst.compact .cv-analyst__terminal{ margin-top:8px !important; }
  .cv-analyst.compact .cv-analyst__terminal-header{ padding:4px 8px !important; }
  .cv-analyst.compact .cv-analyst__terminal-title{ font-size:7pt !important; }
  .cv-analyst.compact .cv-analyst__terminal-body{ padding:7px 10px !important; font-size:6.6pt !important; line-height:1.45 !important; }
  .cv-analyst.compact .cv-analyst__edu-list{ gap:5px !important; }
  .cv-analyst.compact .cv-analyst__edu-item{ margin-bottom:0 !important; padding:5px 8px !important; }
  .cv-analyst.compact .cv-analyst__edu-title{ font-size:8pt !important; }
  .cv-analyst.compact .cv-analyst__edu-school,.cv-analyst.compact .cv-analyst__edu-desc{ font-size:7pt !important; }
  .cv-analyst.compact .cv-analyst__tag{ font-size:7pt !important; padding:2px 6px !important; }
  .cv-analyst.compact .cv-analyst__lang-card{ padding:4px 8px !important; }
  .cv-analyst.compact .cv-analyst__lang-name{ font-size:7.6pt !important; }
  .cv-analyst.compact .cv-analyst__lang-level{ font-size:6.9pt !important; }
  .cv-analyst.compact .cv-analyst__footer{ margin-top:7px !important; padding-top:6px !important; }
  .cv-analyst.compact .cv-analyst__gdpr{ font-size:6.2pt !important; }
  .cv-analyst.compact .cv-analyst__ai-badge{ font-size:6.8pt !important; }

  /* ---- balance: fill ~two A4 pages (tuned) ---- */
  .cv-analyst.compact{ font-size:8.3pt !important; line-height:1.34 !important; }
  .cv-analyst.compact .cv-analyst__container{ padding:9px 30px 12px !important; }
  .cv-analyst.compact .cv-analyst__hero{ padding:3px 0 9px !important; gap:16px !important; margin-bottom:4px !important; }
  .cv-analyst.compact .cv-analyst__name{ font-size:24pt !important; }
  .cv-analyst.compact .cv-analyst__role-link{ font-size:9.4pt !important; margin:4px 0 !important; }
  .cv-analyst.compact .cv-analyst__headline{ font-size:8.8pt !important; margin:6px 0 4px !important; }
  .cv-analyst.compact .cv-analyst__tagline{ font-size:8.6pt !important; line-height:1.38 !important; margin:5px 0 !important; }
  .cv-analyst.compact .cv-analyst__hero-badge{ font-size:7.3pt !important; padding:3px 9px !important; margin-bottom:5px !important; }
  .cv-analyst.compact .cv-analyst__photo{ width:106px !important; height:106px !important; }
  .cv-analyst.compact .cv-analyst__contact{ gap:5px 16px !important; font-size:8pt !important; margin-top:8px !important; }
  .cv-analyst.compact .cv-analyst__contact-item svg{ width:13px !important; height:13px !important; }
  .cv-analyst.compact .cv-analyst__section{ margin:8px 0 !important; }
  .cv-analyst.compact .cv-analyst__section-header{ margin-bottom:7px !important; gap:9px !important; }
  .cv-analyst.compact .cv-analyst__section-title{ font-size:9.8pt !important; }
  .cv-analyst.compact .cv-analyst__section-icon{ width:24px !important; height:24px !important; }
  .cv-analyst.compact .cv-analyst__section-icon svg{ width:14px !important; height:14px !important; }
  .cv-analyst.compact .cv-analyst__exp-card{ margin-bottom:8px !important; padding:9px 13px !important; }
  .cv-analyst.compact .cv-analyst__exp-header{ margin-bottom:2px !important; }
  .cv-analyst.compact .cv-analyst__exp-role{ font-size:10pt !important; }
  .cv-analyst.compact .cv-analyst__exp-period{ font-size:7.8pt !important; }
  .cv-analyst.compact .cv-analyst__exp-company{ font-size:8.2pt !important; margin:2px 0 4px !important; }
  .cv-analyst.compact .cv-analyst__exp-bullets li{ font-size:8.4pt !important; line-height:1.34 !important; margin-bottom:2px !important; padding-left:16px !important; }
  .cv-analyst.compact .cv-analyst__exp-success{ font-size:8.1pt !important; padding:5px 10px !important; margin-top:6px !important; }
  .cv-analyst.compact .cv-analyst__skills-grid{ gap:10px !important; }
  .cv-analyst.compact .cv-analyst__skill-group{ padding:10px 13px !important; }
  .cv-analyst.compact .cv-analyst__skill-group h3{ font-size:9pt !important; margin-bottom:7px !important; }
  .cv-analyst.compact .cv-analyst__skill-bar{ margin-bottom:6px !important; }
  .cv-analyst.compact .cv-analyst__skill-label{ font-size:8.1pt !important; margin-bottom:3px !important; }
  .cv-analyst.compact .cv-analyst__skill-track{ height:4.5px !important; }
  .cv-analyst.compact .cv-analyst__ai-projects{ gap:8px !important; margin-top:9px !important; }
  .cv-analyst.compact .cv-analyst__ai-project{ padding:7px 9px !important; }
  .cv-analyst.compact .cv-analyst__ai-project-name{ font-size:8.2pt !important; }
  .cv-analyst.compact .cv-analyst__ai-project-desc{ font-size:7.4pt !important; line-height:1.32 !important; }
  .cv-analyst.compact .cv-analyst__terminal{ margin-top:10px !important; }
  .cv-analyst.compact .cv-analyst__terminal-header{ padding:6px 11px !important; }
  .cv-analyst.compact .cv-analyst__terminal-body{ padding:10px 13px !important; font-size:7.9pt !important; line-height:1.5 !important; }
  .cv-analyst.compact .cv-analyst__edu-list{ gap:7px !important; }
  .cv-analyst.compact .cv-analyst__edu-item{ padding:8px 11px !important; }
  .cv-analyst.compact .cv-analyst__edu-title{ font-size:8.8pt !important; }
  .cv-analyst.compact .cv-analyst__edu-school,.cv-analyst.compact .cv-analyst__edu-desc{ font-size:7.8pt !important; }
  .cv-analyst.compact .cv-analyst__tag{ font-size:7.9pt !important; padding:4px 10px !important; }
  .cv-analyst.compact .cv-analyst__lang-card{ padding:8px 11px !important; }
  .cv-analyst.compact .cv-analyst__lang-name{ font-size:8.8pt !important; }
  .cv-analyst.compact .cv-analyst__lang-level{ font-size:7.9pt !important; }
  .cv-analyst.compact .cv-analyst__footer{ margin-top:8px !important; padding-top:8px !important; }
  .cv-analyst.compact .cv-analyst__gdpr{ font-size:7pt !important; }
  .cv-analyst.compact #core-skills{ break-before:page !important; page-break-before:always !important; }
  .cv-analyst.compact .cv-analyst__success-tag{ font-size:6.9pt !important; display:block !important; margin:0 0 1px !important; }

  /* fit page 1 (hero + experience) within a single page so the break is clean */
  .cv-analyst.compact .cv-analyst__hero{ padding:2px 0 7px !important; gap:14px !important; margin-bottom:3px !important; }
  .cv-analyst.compact .cv-analyst__name{ font-size:21pt !important; }
  .cv-analyst.compact .cv-analyst__photo{ width:90px !important; height:90px !important; }
  .cv-analyst.compact .cv-analyst__headline{ font-size:8pt !important; margin:4px 0 3px !important; }
  .cv-analyst.compact .cv-analyst__tagline{ font-size:7.8pt !important; line-height:1.3 !important; margin:4px 0 !important; }
  .cv-analyst.compact .cv-analyst__contact{ font-size:7.4pt !important; margin-top:6px !important; gap:4px 14px !important; }
  .cv-analyst.compact .cv-analyst__exp-card{ margin-bottom:6px !important; padding:7px 11px !important; }
  .cv-analyst.compact .cv-analyst__exp-role{ font-size:9.4pt !important; }
  .cv-analyst.compact .cv-analyst__exp-company{ font-size:7.6pt !important; margin:1px 0 3px !important; }
  .cv-analyst.compact .cv-analyst__exp-bullets li{ font-size:7.5pt !important; line-height:1.28 !important; margin-bottom:1.5px !important; }
  .cv-analyst.compact .cv-analyst__exp-success{ font-size:6.9pt !important; line-height:1.3 !important; padding:4px 9px !important; margin-top:4px !important; }
  /* shrink the page-2 cluster (skills + terminal + edu + certs + langs) to fit one page */
  .cv-analyst.compact #core-skills{ margin-top:0 !important; }
  .cv-analyst.compact .cv-analyst__skill-group{ padding:8px 11px !important; }
  .cv-analyst.compact .cv-analyst__skill-group h3{ margin-bottom:6px !important; }
  .cv-analyst.compact .cv-analyst__skill-bar{ margin-bottom:3px !important; }
  .cv-analyst.compact .cv-analyst__skill-track{ height:4px !important; }
  .cv-analyst.compact .cv-analyst__ai-projects{ margin-top:6px !important; gap:7px !important; }
  .cv-analyst.compact .cv-analyst__ai-project{ padding:6px 8px !important; }
  .cv-analyst.compact .cv-analyst__terminal{ margin-top:6px !important; }
  .cv-analyst.compact .cv-analyst__terminal-body{ padding:7px 12px !important; font-size:7.7pt !important; line-height:1.32 !important; }
  .cv-analyst.compact .cv-analyst__edu-item{ padding:5px 10px !important; }
  .cv-analyst.compact .cv-analyst__lang-card{ padding:5px 10px !important; }
  .cv-analyst.compact section.cv-analyst__section{ margin:5px 0 !important; }
  .cv-analyst.compact .cv-analyst__footer{ margin-top:5px !important; padding-top:6px !important; }
  .cv-analyst.compact .cv-analyst__certs .cv-analyst__tag, .cv-analyst.compact .cv-analyst__tags--certs .cv-analyst__tag{ margin:2px 3px 0 0 !important; }

  /* hero backdrop panel sized for the compact PDF layout */
  .cv-analyst.compact .cv-analyst__hero{ padding:10px 0 11px !important; }
  .cv-analyst.compact .cv-analyst__hero::before{ inset:0 -16px 2px -16px !important; border-radius:14px !important; }
</style>
</head>
<body>
<div class="cv-analyst" id="cv-analyst" data-mode="dark">
  <canvas class="cv-analyst__binary-rain" id="rain-canvas" aria-hidden="true"></canvas>

  <nav class="cv-analyst__topbar" aria-label="bar">
    <span class="cv-analyst__topbar-title">Adriana Guściora | Senior Data Analyst | BI Developer</span>
    <span class="cv-analyst__topbar-spacer" aria-hidden="true"></span>
    <button type="button" class="cv-analyst__toggle-btn cv-analyst__toggle-btn--active">EN</button>
  </nav>

  <main class="cv-analyst__container">

    <section class="cv-analyst__hero">
      <div class="cv-analyst__hero-content">
        <div class="cv-analyst__hero-badge"><span class="pulse" aria-hidden="true"></span><span>Open to new opportunities · Remote · CET</span></div>
        <h1 id="cv-name" class="cv-analyst__name">Adriana Guściora</h1>
        <a class="cv-analyst__role-link" href="${WEB_URL}" target="_blank" rel="noopener">${ROLE}</a>
        <p class="cv-analyst__headline" id="headline">${HEADLINE}</p>
        <p class="cv-analyst__tagline">8+ years in <strong>cost controlling, reconciliation and FP&amp;A</strong> across banking, cybersecurity and facilities (HSBC, Trustwave, ISS). I turn messy, multi-source financial data into <strong>validated, decision-ready reporting</strong> — and automate the repetitive.</p>
        <div class="cv-analyst__typing" id="typing-area" aria-live="polite"></div>

        <div class="cv-analyst__contact">
          <span class="cv-analyst__contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:Gusciora.Ada@gmail.com">Gusciora.Ada@gmail.com</a></span>
          <span class="cv-analyst__contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg><a href="tel:+48728884506">+48 728 884 506</a></span>
          <span class="cv-analyst__contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Remote · Poland / Europe (CET)</span></span>
          <span class="cv-analyst__contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 016 14v1H2v-1a6 6 0 016-6z"/><circle cx="12" cy="7" r="4"/></svg><a href="https://www.linkedin.com/in/adriana-gu/">LinkedIn</a></span>
        </div>
      </div>
      <img src="${photoDataUrl}" alt="Adriana Guściora" class="cv-analyst__photo" width="180" height="180">
    </section>

    <section class="cv-analyst__section" id="target-role">
      <div class="cv-analyst__section-header"><div class="cv-analyst__section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><h2 class="cv-analyst__section-title">Target role · Senior Analyst, Finance Operations (Cost Controlling)</h2></div>
      <p style="color:var(--ca-text-muted);max-width:72ch">Strong fit on <strong>cost controlling, reconciliation and FP&amp;A</strong> in a multinational, fully-remote setup (CET). Advanced Excel/Sheets, process improvement (Lean / Six Sigma) and automation; Power BI for the reporting layer. Source-system experience (Cognos, Clarity, GPDM) maps directly onto ERP-style consolidation.</p>
    </section>

    <section class="cv-analyst__section">
      <div class="cv-analyst__section-header"><div class="cv-analyst__section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg></div><h2 class="cv-analyst__section-title">Work Experience</h2></div>
      ${job('Senior Finance Analyst · Performance Management', 'Oct 2024 – Mar 2026', 'Trustwave Sp. z o.o. · Cybersecurity · Warsaw / Remote', [
        'Consolidated and <strong>reconciled financial and cost data from multiple sources</strong> into one validated reporting layer used daily by Financial Directors and the CFO (advanced Excel / Power Query, SQL, Power BI).',
        'Owned recurring <strong>cost, KPI and budget-vs-actuals reporting</strong>; safeguarded data accuracy through validation, reconciliation and discrepancy checks.',
        '<strong>Automated repetitive month-end and reporting work</strong> with Power Query, Power Automate and AI tools.',
      ], 'Analysed FP&amp;A and Performance Management processes for the finance team: diagnosed bottlenecks in monthly reporting, designed and implemented improvements, produced before/after process documentation and delivered hands-on training across the full toolset (Excel, Power Query, Alteryx, SQL, Power BI).')}
      ${job('Finance Analyst at HSBC · Cost Controlling', 'Jul 2022 – Apr 2024', 'Alten Polska Sp. z o.o. · Banking · Cracow / Remote', [
        'Owned the controlling view of a <strong>$15M people-cost pool across ~40 projects</strong>: headcount and cost <strong>budget vs actuals</strong>, forecasting, allocation, trends and outliers.',
        'Built a <strong>single source of truth</strong> for a 5-analyst team by reconciling <strong>3 enterprise systems</strong> (Clarity, GPDM, Cognos) with SQL, Power Query and Power BI.',
        'Maintained <strong>data definitions, documentation and training</strong>, keeping the close consistent and self-service.',
      ], 'Analysed financial processes of every analyst in the coordinated team, diagnosed inefficiencies, proposed and implemented streamlined workflows, produced new process documentation and trained the team to confidently operate the upgraded toolset (Excel, Power Query).')}
      ${job('Operations / Data Analyst · Global Transition', 'Jun 2021 – Jun 2022', 'Zimmer Biomet Polska · Medical Devices · Warsaw / Remote', [
        '<strong>Reconciled data flows across 14 departments</strong> into shared definitions, structured data governance and KPI dashboards.',
        'Built spreadsheet- and SharePoint-based workflows (PowerApps + Power Automate); validated data across global teams.',
      ], 'Designed and rolled out a new generation of dashboards reporting Global Transition migration progress for 14 departments, trained Smartsheet developers (maintenance &amp; roadmap) and end users (data input &amp; consumption), drove iterative dashboard improvements and owned change communication around each release (Smartsheet).')}
      ${job('BI / Finance Analyst · Controlling &amp; Operations', 'Sep 2018 – May 2021', 'ISS Facility Services · Project Management · Warsaw · On-site / Remote', [
        '<strong>Cost budgeting, forecasting and financial reconciliation</strong> for a regulated pharmaceutical client: controlling reporting, variance analysis and internal audits; <strong>managed teams of 4–15</strong>.',
        'Board-level <strong>cost and operational KPI dashboards</strong> (Power BI + SharePoint); <strong>automated</strong> invoice-flow data for a global banking client.',
      ], 'Owned the project to streamline invoice flow for a global banking client: designed and proposed the new process, implemented it end-to-end, produced full process documentation and trained both internal team and client stakeholders for efficient adoption (Power Automate, SharePoint, Excel). In parallel led the Novatorium initiative across the Polish branch — owning communication and employee training (PowerApps, Power BI, SharePoint, Excel).')}
      ${job('Junior Project Manager · Operations · Management Trainee', 'Feb 2016 – Aug 2018', 'Jeronimo Martins (Lisbon &amp; Warsaw) · Robert Bosch (Warsaw)', [
        'International operations experience in <strong>Portugal and Poland</strong>: Store Excellence, Customer Service, logistics and Employer Branding.',
      ], '')}
    </section>

    <section class="cv-analyst__section" id="core-skills">
      <div class="cv-analyst__section-header"><div class="cv-analyst__section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><h2 class="cv-analyst__section-title">Core Skills</h2></div>
      <div class="cv-analyst__skills-grid">
        <div class="cv-analyst__skill-group cv-analyst__skill-group--ai">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>Finance &amp; Controlling</span></h3>
          ${skillBar('Cost Controlling &amp; Reconciliation', 92, 'expert')}
          ${skillBar('Budgeting &amp; Forecasting (FP&amp;A)', 88, 'advanced')}
          ${skillBar('Month-end Close &amp; Variance Analysis', 86, 'advanced')}
          ${skillBar('Advanced Excel / Google Sheets', 95, 'expert')}
          <div class="cv-analyst__ai-projects">
            <a href="https://adriana.gusciora.pl" target="_blank" rel="noopener" class="cv-analyst__ai-project cv-analyst__ai-project--link"><h4 class="cv-analyst__ai-project-name">adriana.gusciora.pl</h4><p class="cv-analyst__ai-project-desc">Bilingual site, 3 themes, WCAG AA, SEO. Built with Claude Code.</p></a>
            <a href="https://adrwis.github.io/polskatsanddogs/" target="_blank" rel="noopener" class="cv-analyst__ai-project cv-analyst__ai-project--link"><h4 class="cv-analyst__ai-project-name">Portrait Portfolio</h4><p class="cv-analyst__ai-project-desc">Art portfolio: gallery, order form, responsive.</p></a>
            <a href="https://adriana.gusciora.pl/asystent/" target="_blank" rel="noopener" class="cv-analyst__ai-project cv-analyst__ai-project--link"><h4 class="cv-analyst__ai-project-name">AI Chatbot</h4><p class="cv-analyst__ai-project-desc">Assistant: crisis detection, injection protection, KB.</p></a>
          </div>
        </div>
        <div class="cv-analyst__skill-group">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 20V10M12 20V4M6 20v-6"/></svg><span>BI &amp; Analytics</span></h3>
          ${skillBar('Power BI', 95, 'expert')}
          ${skillBar('Power Query (M)', 90, 'expert')}
          ${skillBar('SQL', 80, 'advanced')}
        </div>
        <div class="cv-analyst__skill-group">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5"/></svg><span>Automation &amp; AI</span></h3>
          ${skillBar('Process Improvement (Lean / Six Sigma)', 88, 'advanced')}
          ${skillBar('Power Automate · Power Platform', 80, 'advanced')}
          ${skillBar('AI Tools (Claude) for reporting', 85, 'advanced')}
          <div class="cv-analyst__tags cv-analyst__tags--spaced" style="margin-top:.6rem">
            <span class="cv-analyst__tag">Cognos</span><span class="cv-analyst__tag">Clarity</span><span class="cv-analyst__tag">Alteryx</span><span class="cv-analyst__tag">SharePoint</span><span class="cv-analyst__tag">PowerApps</span>
          </div>
        </div>
      </div>

      <div class="cv-analyst__terminal">
        <div class="cv-analyst__terminal-header"><span class="cv-analyst__terminal-dot cv-analyst__terminal-dot--red" aria-hidden="true"></span><span class="cv-analyst__terminal-dot cv-analyst__terminal-dot--yellow" aria-hidden="true"></span><span class="cv-analyst__terminal-dot cv-analyst__terminal-dot--green" aria-hidden="true"></span><span class="cv-analyst__terminal-title">finance-ops</span></div>
        <div class="cv-analyst__terminal-body">
          <div><span class="prompt">$</span> <span class="function">close</span> <span class="string">"month-end reconciliation"</span></div>
          <div><span class="comment">&gt; Consolidating 3 source systems...</span></div>
          <div><span class="comment">&gt; Matching budget vs actuals...</span></div>
          <div><span class="output">&#10003; $15M people-cost pool reconciled</span></div>
          <div><span class="output">&#10003; Validated, audit-ready numbers</span></div>
          <div><span class="output">&gt;&gt;&gt; close-ready pack delivered</span></div>
        </div>
      </div>
    </section>

    <section class="cv-analyst__section">
      <div class="cv-analyst__section-header"><div class="cv-analyst__section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg></div><h2 class="cv-analyst__section-title">Education</h2></div>
      <div class="cv-analyst__edu-list">
        <div class="cv-analyst__edu-item"><span class="cv-analyst__edu-year">2020 – 2021</span><div><p class="cv-analyst__edu-title">Postgraduate · Quality Manager</p><p class="cv-analyst__edu-school">SGH Warsaw School of Economics</p><p class="cv-analyst__edu-desc">Lean Management · Six Sigma · Kaizen</p></div></div>
        <div class="cv-analyst__edu-item"><span class="cv-analyst__edu-year">2012 – 2017</span><div><p class="cv-analyst__edu-title">Master's · Clinical Psychology</p><p class="cv-analyst__edu-school">SWPS University</p><p class="cv-analyst__edu-desc">statistics · research methodology</p></div></div>
        <div class="cv-analyst__edu-item"><span class="cv-analyst__edu-year">2012 – 2016</span><div><p class="cv-analyst__edu-title">Engineering · Management &amp; Production Eng.</p><p class="cv-analyst__edu-school">Warsaw University of Technology</p></div></div>
      </div>
    </section>

    <section class="cv-analyst__section">
      <div class="cv-analyst__section-header"><div class="cv-analyst__section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg></div><h2 class="cv-analyst__section-title">Certifications</h2></div>
      <div class="cv-analyst__tags cv-analyst__tags--certs">
        <span class="cv-analyst__tag">Using AI in Business Development · Google / SGH, 2026</span>
        <span class="cv-analyst__tag">SQL Advanced · LabMasters, 2025</span>
        <span class="cv-analyst__tag">Business Analytics in Power BI · LabMasters, 2022</span>
        <span class="cv-analyst__tag">Six Sigma · SGH, 2020</span>
        <span class="cv-analyst__tag">PRINCE2 Foundation · AXELOS, 2020</span>
      </div>
    </section>

    <section class="cv-analyst__section">
      <div class="cv-analyst__section-header"><div class="cv-analyst__section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div><h2 class="cv-analyst__section-title">Languages</h2></div>
      <div class="cv-analyst__lang-grid">
        <div class="cv-analyst__lang-card"><div class="cv-analyst__lang-name">Polish</div><div class="cv-analyst__lang-level">native</div></div>
        <div class="cv-analyst__lang-card"><div class="cv-analyst__lang-name">English</div><div class="cv-analyst__lang-level">fluent (C1)</div></div>
        <div class="cv-analyst__lang-card"><div class="cv-analyst__lang-name">Portuguese</div><div class="cv-analyst__lang-level">intermediate</div></div>
        <div class="cv-analyst__lang-card"><div class="cv-analyst__lang-name">Italian</div><div class="cv-analyst__lang-level">basic</div></div>
      </div>
    </section>

    <footer class="cv-analyst__footer">
      <div class="cv-analyst__ai-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg><span>Built with AI: Claude Code</span></div>
      <p class="cv-analyst__gdpr">${GDPR_EN}</p>
    </footer>

  </main>
</div>

<script>
(function(){
  var canvas = document.getElementById('rain-canvas');
  var ctx = canvas.getContext('2d');
  var fontSize = 16, scale = 1;
  var columns, drops, speeds, brightness, maxDepth, W, H;
  var chars = '0123456789';
  function init(fullHeight, res){
    scale = res || 1;
    W = Math.floor(window.innerWidth * scale);
    H = Math.floor((fullHeight ? document.documentElement.scrollHeight : window.innerHeight) * scale);
    canvas.width = W; canvas.height = H;
    if (fullHeight){ canvas.style.position='absolute'; canvas.style.width=window.innerWidth+'px'; canvas.style.height=document.documentElement.scrollHeight+'px'; }
    columns = Math.floor(W / fontSize);
    drops=[];speeds=[];brightness=[];maxDepth=[];
    for(var i=0;i<columns;i++){ drops.push(Math.random()*H/fontSize); speeds.push(0.15+Math.random()*0.5); brightness.push(0.4+Math.random()*0.6); maxDepth.push(0.5+Math.random()*0.5); }
    ctx.fillStyle='#1a2f52'; ctx.fillRect(0,0,W,H);
  }
  function step(fade){
    if(fade){ ctx.fillStyle='rgba(26,47,82,0.06)'; ctx.fillRect(0,0,W,H); }
    ctx.font = fontSize+'px "JetBrains Mono", monospace';
    for(var i=0;i<columns;i++){
      var ch=chars[Math.floor(Math.random()*chars.length)];
      var x=i*fontSize, y=Math.floor(drops[i])*fontSize, b=brightness[i];
      var yFade=Math.max(0.4, 1-(y/H)*0.45);
      if(y>=0 && y<=H){ ctx.fillStyle='rgba(110,170,225,'+(0.22*b*yFade).toFixed(3)+')'; ctx.fillText(ch,x,y); }
      drops[i]+=speeds[i];
      if(drops[i]*fontSize>H*maxDepth[i] && Math.random()>0.95){ drops[i]=Math.random()*-15; speeds[i]=0.15+Math.random()*0.5; brightness[i]=0.4+Math.random()*0.6; maxDepth[i]=0.5+Math.random()*0.5; }
    }
  }
  var raf;
  window.__startRain = function(){ init(false,1); (function loop(){ step(true); raf=requestAnimationFrame(loop); })(); };
  window.__renderRainStatic = function(frames){ if(raf) cancelAnimationFrame(raf); init(true,0.6); for(var f=0; f<frames; f++) step(false); };
  window.__startRain();
})();
// typing line (web only); PDF replaces it with a static finished headline
(function(){
  var el = document.getElementById('typing-area');
  var phrases = ['Cost controlling & reconciliation','$15M people-cost pool reconciled','Budget vs actuals, audit-ready','Advanced Excel + Power Query','I automate the repetitive'];
  var pi=0, ci=0, del=false, t;
  function tick(){
    var p=phrases[pi];
    if(!del){ ci++; el.innerHTML=p.substring(0,ci)+'<span class="cursor"></span>'; if(ci===p.length){ t=setTimeout(function(){del=true;tick();},1600); return; } t=setTimeout(tick,55+Math.random()*40); }
    else { ci--; el.innerHTML=p.substring(0,ci)+'<span class="cursor"></span>'; if(ci===0){ del=false; pi=(pi+1)%phrases.length; t=setTimeout(tick,350); return; } t=setTimeout(tick,25); }
  }
  window.__stopTyping = function(){ clearTimeout(t); el.style.display='none'; };
  tick();
})();
</script>
</body>
</html>`;
}

(async () => {
  const photoBuffer = await sharp(photoPath).resize(300, 300, { fit: 'cover', position: 'center' }).jpeg({ quality: 72 }).toBuffer();
  const photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;
  const html = buildHTML(photoDataUrl);

  fs.writeFileSync(WEB_PREVIEW, html, 'utf-8');
  fs.writeFileSync(RENDER_HTML, html, 'utf-8');
  const fileUrl = 'file:///' + RENDER_HTML.replace(/\\/g, '/');

  const browser = await chromium.launch();

  // PDF — 2-page, dark, even light rain, static headline
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'screen' });
  await page.evaluate(() => {
    document.querySelector('.cv-analyst__topbar').style.display = 'none';
    document.getElementById('cv-analyst').classList.add('compact');
    if (window.__stopTyping) window.__stopTyping();
  });
  await page.waitForTimeout(400);
  const fill = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`fill: scrollHeight=${fill}px (~${(fill/1123).toFixed(2)} A4 pages; target ~1.85-2.0)`);
  await page.evaluate(() => window.__renderRainStatic(420));
  await page.waitForTimeout(150);
  if (process.env.SHOT) await page.screenshot({ path: path.join(outputDir, '_site_check.png'), fullPage: true });
  const pdfOpts = { format: 'A4', printBackground: true, margin: { top:'0', right:'0', bottom:'0', left:'0' } };
  let pdfTarget = PDF_FILE;
  try { await page.pdf({ path: PDF_FILE, ...pdfOpts }); }
  catch (e) { if (/EBUSY|locked|EPERM/i.test(e.code + e.message)) { pdfTarget = PDF_FILE.replace(/\.pdf$/, '_NEW.pdf'); await page.pdf({ path: pdfTarget, ...pdfOpts }); } else throw e; }
  await page.close();
  const pdfMB = (fs.statSync(pdfTarget).size / 1048576).toFixed(2);
  const pageCount = (fs.readFileSync(pdfTarget).toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;

  // Video — moving background (full look)
  const tmpVideoDir = path.join(outputDir, '_vid_tmp_site');
  const ctx = await browser.newContext({ viewport: { width: 1000, height: 1414 }, recordVideo: { dir: tmpVideoDir, size: { width: 1000, height: 1414 } } });
  const vpage = await ctx.newPage();
  await vpage.goto(fileUrl, { waitUntil: 'networkidle' });
  await vpage.waitForTimeout(7000);
  await vpage.close(); await ctx.close(); await browser.close();
  const recorded = fs.readdirSync(tmpVideoDir).find(f => f.endsWith('.webm'));
  if (recorded) {
    try { fs.copyFileSync(path.join(tmpVideoDir, recorded), VIDEO_FILE); }
    catch { fs.copyFileSync(path.join(tmpVideoDir, recorded), VIDEO_FILE.replace(/\.webm$/, '_NEW.webm')); }
    fs.rmSync(tmpVideoDir, { recursive: true, force: true });
  }
  fs.rmSync(RENDER_HTML, { force: true });

  console.log(`LINK : ${WEB_URL}`);
  console.log(`PDF  : ${path.basename(pdfTarget)} — ${pdfMB} MB, ${pageCount} pages`);
})();

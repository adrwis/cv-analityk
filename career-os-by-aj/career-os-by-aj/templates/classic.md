# Classic Template

Conservative, professional template. Works for any industry and career level. Safe choice for corporate, finance, consulting, manufacturing.

## Resume CSS

```css
body { font-family: Calibri, Arial, sans-serif; line-height: 1.5; color: #333; }
.container { max-width: 850px; margin: 30px auto; padding: 40px; background: #fff; border: 1px solid #ddd; }
h1 { font-size: 3.2em; color: #2c3e50; text-align: center; letter-spacing: 3px; margin-top: 0; margin-bottom: 8px; }
.contact-info { text-align: center; font-size: 0.95em; color: #555; margin-bottom: 8px; }
.contact-info a { color: #3498db; text-decoration: none; }
h2.section-title { font-size: 1.3em; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 8px; margin-top: 28px; margin-bottom: 14px; }
.summary p { font-size: 1.05em; text-align: justify; }
.competencies ul { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px 20px; }
.competencies ul li { font-size: 0.95em; padding: 4px 0; border-bottom: 1px solid #eee; }
.job { margin-bottom: 20px; }
.job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
.job-title { font-size: 1.15em; font-weight: bold; color: #34495e; }
.job-dates { font-size: 0.9em; color: #666; flex-shrink: 0; margin-left: 12px; }
.job-meta { font-size: 0.95em; font-style: italic; color: #555; margin-bottom: 8px; }
.job ul { list-style-type: disc; padding-left: 20px; margin-top: 8px; }
.job li { margin-bottom: 8px; text-align: justify; }
@media print {
  @page { size: A4; margin: 15mm; }
  body { font-size: 11pt; line-height: 1.4; }
  .container { border: none; margin: 0; padding: 0; max-width: 100%; }
  .job { break-inside: auto; }
  .job-title, .job-meta { break-after: avoid; }
  .job li { margin-bottom: 4px; }
}
```

## Resume Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resume - [Name]</title>
<style>[CSS above]</style>
</head>
<body>
<div class="container">

<h1>[NAME IN CAPS]</h1>
<div class="contact-info">
  <a href="tel:[phone]">[phone]</a> | <a href="mailto:[email]">[email]</a>
</div>

<div style="border-bottom: 2px solid #3498db; margin: 12px 0 20px 0;"></div>

<div class="summary">
<p>[Summary text - no label, no heading]</p>
</div>

<h2 class="section-title">Core Competencies</h2>
<div class="competencies">
<ul>
  <li>[Competency 1]</li>
  <!-- 12 items total, max 4 words each -->
</ul>
</div>

<h2 class="section-title">Professional Experience</h2>

<div class="job">
  <div class="job-header">
    <span class="job-title">[Title]</span>
    <span class="job-dates">[Start] - [End]</span>
  </div>
  <div class="job-meta">[Company]</div>
  <ul>
    <li>[Achievement bullet]</li>
  </ul>
</div>

<h2 class="section-title">Education & Certifications</h2>
<ul style="list-style: none; padding-left: 0;">
  <li><b>[Certification/Degree]</b> - [Institution] ([Year])</li>
</ul>

</div>
</body>
</html>
```

## Cover Letter CSS

```css
body { font-family: Calibri, Arial, sans-serif; line-height: 1.6; color: #333; }
.container { max-width: 850px; margin: 40px auto; padding: 50px; background: #fff; border: 1px solid #ddd; }
h1 { font-size: 3.2em; color: #2c3e50; text-align: center; letter-spacing: 3px; margin-top: 0; margin-bottom: 8px; }
.contact-info { text-align: center; font-size: 0.95em; color: #555; margin-bottom: 8px; }
.contact-info a { color: #3498db; text-decoration: none; }
.application-line { text-align: center; font-size: 1em; color: #34495e; margin-bottom: 4px; }
.letter-body { font-size: 1.05em; text-align: justify; }
.letter-body p { margin-bottom: 1.2em; }
.letter-body ul { list-style-type: disc; padding-left: 30px; margin-bottom: 1.2em; }
.letter-body ul li { margin-bottom: 10px; text-align: justify; }
.letter-body b { font-weight: bold; color: #2c3e50; }
.signoff { margin-top: 2em; font-size: 1.05em; }
@media print {
  @page { size: A4; margin: 15mm; }
  body { font-size: 10.5pt; line-height: 1.35; }
  .container { border: none; margin: 0; padding: 0; max-width: 100%; }
  h1 { margin-bottom: 4px; }
  .letter-body p { margin-bottom: 0.6em; }
  .letter-body ul { margin-bottom: 0.6em; }
  .letter-body ul li { margin-bottom: 3px; }
  .signoff { margin-top: 1.2em; }
}
```

## Cover Letter Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cover Letter - [Name]</title>
<style>[CSS above]</style>
</head>
<body>
<div class="container">

<h1>[NAME IN CAPS]</h1>
<div class="contact-info">
  <a href="tel:[phone]">[phone]</a> | <a href="mailto:[email]">[email]</a>
</div>
<div class="application-line">Application: [Role Title] | [Company] | [Location]</div>

<div style="border-bottom: 2px solid #3498db; margin: 12px 0 36px 0;"></div>

<div class="letter-body">

<p>Dear [Company] Hiring Team,</p>

<p>[Hook paragraph]</p>

<p>Three aspects of my background are directly relevant to this role:</p>

<ul>
  <li><b>[Strength 1]:</b> [Evidence + metric]</li>
  <li><b>[Strength 2]:</b> [Evidence + metric]</li>
  <li><b>[Strength 3]:</b> [Evidence + metric]</li>
</ul>

<p>[Gap acknowledgment if needed]</p>

<p>[Closing - availability, relocation, call to action]</p>

</div>

<div class="signoff">
<p>Sincerely,</p>
<p><b>[Name]</b></p>
</div>

</div>
</body>
</html>
```

## Key Rules
- No tagline or strategic title
- No "Professional Summary" label
- Contact line: phone and email ONLY (clickable links)
- Blue divider after contact (resume) or after application line (cover letter)
- Core Competencies: max 4 words per label
- Job header: flex row (title left, dates right)
- Cover letter sign-off: name only, no phone/email repeated
- No em-dashes (use hyphens)
- Accent color: #3498db (blue)
- Header color: #2c3e50 (dark slate)

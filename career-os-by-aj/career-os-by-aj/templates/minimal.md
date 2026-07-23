# Minimal Template

Maximum whitespace, clean typography, no decorative elements. Lets content speak. Good for senior executives, consultants, and roles where understated confidence matters.

## Resume CSS

```css
body { font-family: 'Georgia', 'Times New Roman', serif; line-height: 1.6; color: #222; }
.container { max-width: 800px; margin: 30px auto; padding: 40px; background: #fff; border: none; }
h1 { font-size: 2.4em; color: #111; text-align: center; letter-spacing: 2px; margin-top: 0; margin-bottom: 4px; font-weight: normal; }
.contact-info { text-align: center; font-size: 0.85em; color: #777; margin-bottom: 16px; letter-spacing: 0.5px; }
.contact-info a { color: #555; text-decoration: none; }
h2.section-title { font-size: 0.85em; color: #999; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-top: 32px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 2px; font-weight: normal; }
.summary p { font-size: 0.95em; text-align: justify; color: #333; }
.competencies ul { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px 24px; }
.competencies ul li { font-size: 0.85em; padding: 3px 0; color: #444; }
.job { margin-bottom: 22px; }
.job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
.job-title { font-size: 1em; font-weight: bold; color: #222; }
.job-dates { font-size: 0.85em; color: #999; flex-shrink: 0; margin-left: 12px; font-style: italic; }
.job-meta { font-size: 0.9em; font-style: italic; color: #666; margin-bottom: 8px; }
.job ul { list-style-type: none; padding-left: 0; margin-top: 8px; }
.job li { margin-bottom: 6px; text-align: justify; font-size: 0.93em; line-height: 1.5; }
@media print {
  @page { size: A4; margin: 18mm; }
  body { font-size: 10.5pt; line-height: 1.45; }
  .container { border: none; margin: 0; padding: 0; max-width: 100%; }
  .job { break-inside: auto; }
  .job-title, .job-meta { break-after: avoid; }
  .job li { margin-bottom: 3px; }
}
```

## Resume Structure
Same HTML skeleton as Classic with these differences:
- No blue divider line (replaced with spacing)
- Divider element: `<div style="border-bottom: 1px solid #ddd; margin: 12px 0 20px 0;"></div>`
- Section titles are understated (small caps, light gray)
- No bullet symbols - clean list items without markers
- Serif font (Georgia) for a more editorial feel
- Narrower container (800px vs 850px)
- More generous margins in print

## Cover Letter CSS

```css
body { font-family: 'Georgia', 'Times New Roman', serif; line-height: 1.7; color: #222; }
.container { max-width: 800px; margin: 40px auto; padding: 50px; background: #fff; border: none; }
h1 { font-size: 2.4em; color: #111; text-align: center; letter-spacing: 2px; margin-top: 0; margin-bottom: 4px; font-weight: normal; }
.contact-info { text-align: center; font-size: 0.85em; color: #777; margin-bottom: 8px; letter-spacing: 0.5px; }
.contact-info a { color: #555; text-decoration: none; }
.application-line { text-align: center; font-size: 0.9em; color: #666; margin-bottom: 4px; font-style: italic; }
.letter-body { font-size: 0.95em; text-align: justify; }
.letter-body p { margin-bottom: 1.3em; }
.letter-body ul { list-style-type: none; padding-left: 0; margin-bottom: 1.3em; }
.letter-body ul li { margin-bottom: 12px; text-align: justify; padding-left: 20px; position: relative; }
.letter-body ul li::before { content: '\2014'; color: #999; position: absolute; left: 0; }
.letter-body b { font-weight: bold; color: #222; }
.signoff { margin-top: 2.5em; font-size: 0.95em; }
@media print {
  @page { size: A4; margin: 18mm; }
  body { font-size: 10.5pt; line-height: 1.45; }
  .container { border: none; margin: 0; padding: 0; max-width: 100%; }
  h1 { margin-bottom: 4px; }
  .letter-body p { margin-bottom: 0.7em; }
  .letter-body ul { margin-bottom: 0.7em; }
  .letter-body ul li { margin-bottom: 4px; }
  .signoff { margin-top: 1.5em; }
}
```

## Key Differences from Classic
- Serif font (Georgia) - more literary, confident feel
- No color accents - monochromatic (blacks, grays)
- Thinner dividers (1px instead of 2px)
- No bullet markers - clean undecorated lists
- Cover letter uses em-dash markers instead of bullets
- More generous line height and whitespace
- Section headers are small, uppercase, light gray - they guide the eye without shouting
- Narrower container for better readability

## Rules
Same structural rules as Classic:
- No tagline, no "Professional Summary" label
- Phone and email only in contact
- Max 4 words per competency label
- Flex-row job headers
- Cover letter sign-off: name only
- Divider: thin gray line (not blue)

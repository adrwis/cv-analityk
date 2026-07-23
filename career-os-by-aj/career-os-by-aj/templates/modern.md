# Modern Template

Slightly more visual template with a left sidebar accent. Good for tech, product, digital, and creative-adjacent roles.

## Resume CSS

```css
body { font-family: 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.5; color: #2d2d2d; }
.container { max-width: 850px; margin: 30px auto; padding: 40px; background: #fff; border: 1px solid #e0e0e0; border-left: 4px solid #0077b6; }
h1 { font-size: 2.8em; color: #023047; text-align: left; letter-spacing: 1px; margin-top: 0; margin-bottom: 4px; }
.contact-info { text-align: left; font-size: 0.9em; color: #666; margin-bottom: 8px; }
.contact-info a { color: #0077b6; text-decoration: none; }
h2.section-title { font-size: 1.2em; color: #023047; border-bottom: none; border-left: 3px solid #0077b6; padding-left: 10px; padding-bottom: 0; margin-top: 28px; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 1px; font-size: 0.95em; }
.summary p { font-size: 1em; text-align: justify; color: #444; }
.competencies ul { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px 16px; }
.competencies ul li { font-size: 0.9em; padding: 4px 8px; background: #f0f7fb; border-radius: 3px; color: #023047; }
.job { margin-bottom: 20px; }
.job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
.job-title { font-size: 1.1em; font-weight: 600; color: #023047; }
.job-dates { font-size: 0.85em; color: #888; flex-shrink: 0; margin-left: 12px; }
.job-meta { font-size: 0.9em; font-style: normal; color: #0077b6; margin-bottom: 8px; font-weight: 500; }
.job ul { list-style-type: none; padding-left: 0; margin-top: 8px; }
.job li { margin-bottom: 8px; text-align: justify; padding-left: 16px; position: relative; }
.job li::before { content: '\2022'; color: #0077b6; position: absolute; left: 0; }
@media print {
  @page { size: A4; margin: 15mm; }
  body { font-size: 10.5pt; line-height: 1.4; }
  .container { border: none; border-left: 3px solid #0077b6; margin: 0; padding: 0 0 0 15px; max-width: 100%; }
  .job { break-inside: auto; }
  .job-title, .job-meta { break-after: avoid; }
  .job li { margin-bottom: 4px; }
  .competencies ul li { background: none; border: 1px solid #ddd; }
}
```

## Resume Structure
Same HTML structure as Classic template with these differences:
- h1 is left-aligned (not centered)
- Contact info is left-aligned
- Divider replaced with container's left border accent
- Section titles use left border accent instead of bottom border
- Competency items have light blue background chips
- Bullet points use custom styled dots in accent color

## Cover Letter CSS

```css
body { font-family: 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #2d2d2d; }
.container { max-width: 850px; margin: 40px auto; padding: 50px; background: #fff; border: 1px solid #e0e0e0; border-left: 4px solid #0077b6; }
h1 { font-size: 2.8em; color: #023047; text-align: left; letter-spacing: 1px; margin-top: 0; margin-bottom: 4px; }
.contact-info { text-align: left; font-size: 0.9em; color: #666; margin-bottom: 8px; }
.contact-info a { color: #0077b6; text-decoration: none; }
.application-line { text-align: left; font-size: 0.95em; color: #023047; margin-bottom: 4px; font-weight: 500; }
.letter-body { font-size: 1em; text-align: justify; }
.letter-body p { margin-bottom: 1.2em; }
.letter-body ul { list-style-type: none; padding-left: 0; margin-bottom: 1.2em; }
.letter-body ul li { margin-bottom: 10px; text-align: justify; padding-left: 16px; position: relative; }
.letter-body ul li::before { content: '\2022'; color: #0077b6; position: absolute; left: 0; }
.letter-body b { font-weight: 600; color: #023047; }
.signoff { margin-top: 2em; font-size: 1em; }
@media print {
  @page { size: A4; margin: 15mm; }
  body { font-size: 10.5pt; line-height: 1.35; }
  .container { border: none; border-left: 3px solid #0077b6; margin: 0; padding: 0 0 0 15px; max-width: 100%; }
  h1 { margin-bottom: 4px; }
  .letter-body p { margin-bottom: 0.6em; }
  .letter-body ul { margin-bottom: 0.6em; }
  .letter-body ul li { margin-bottom: 3px; }
  .signoff { margin-top: 1.2em; }
}
```

## Key Differences from Classic
- Left-aligned header and contact (not centered)
- Left border accent on container and section headers (not bottom border)
- Competency items displayed as chips with background color
- Accent color: #0077b6 (ocean blue)
- Header color: #023047 (dark navy)
- Font: Segoe UI / Roboto (more modern feel)
- Custom bullet styling with accent-colored dots

## Rules
Same structural rules as Classic:
- No tagline, no "Professional Summary" label
- Phone and email only in contact
- Max 4 words per competency label
- Flex-row job headers
- Cover letter sign-off: name only
- No em-dashes

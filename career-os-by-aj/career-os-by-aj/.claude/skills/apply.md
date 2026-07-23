# Apply - 6-Phase Application Workflow

Generate a complete, tailored application (resume + cover letter) for a specific role.

## Arguments
- Company name or path to an existing application folder with role_description.md and fit_analysis.md

## Prerequisites
- `profile.md` must exist. If not, tell user to run `/profile` first.
- `role_description.md` and `fit_analysis.md` should exist for this role (created by `/screen`). If not, ask user for the job posting and create them first.
- Read `preferences.md` for style preference and language setting.

## Process

### Phase 1: Gap Analysis
1. Reverse-engineer the JD against profile.md
2. Present **Fit Analysis Scorecard** (update fit_analysis.md if created by /screen, or create new):
   - Requirement | Fit | Evidence | Strategy
3. **ATS Keyword Inventory:** List the top 12-15 keywords/phrases from the JD that an ATS would filter on.
4. Ask **Clarifying Questions** to bridge gaps. These may include:
   - "The JD mentions [X]. Do you have any experience with this, even indirectly?"
   - "How would you describe your ownership level on [project]?"
   - "Any metrics or outcomes you can share for [achievement]?"
5. If new information surfaces, **update profile.md** with it.
6. **Stop and await input.**

### Phase 2: Strategic Draft
1. Draft **Professional Summary** tailored to this role (plain text)
2. Draft **Rewritten Bullet Points** - select and reframe relevant experience from profile.md
3. Select **Core Competencies** (12 items, max 4 words each) aligned to JD keywords
4. Frame experience accurately per ownership level from profile
5. When selecting stories, check stories.md for pre-built STAR examples
6. **Stop and await approval.**

### Phase 3: Content Generation
1. Pre-flight check:
   - Contact details correct?
   - Visa/work authorization flagged if needed?
   - Language confirmed (English/Polish/other)?
2. **ATS Check:** Confirm at least 10 of the 12-15 keywords from Phase 1 appear naturally in the resume. Adjust if gaps.
3. Present full text for:
   - **Resume** - all sections
   - **Cover Letter** - hook, three strengths, closing
4. **Stop for feedback.**

### Phase 4: Red Team Audit
Adopt the Hiring Manager persona. Provide brutally honest critique:

1. **30-second test:** Would this resume survive the first pass? What jumps out (good and bad)?
2. **Red flags:** What would make you hesitate? What questions would you prepare?
3. **Strengths:** What's genuinely compelling?
4. **Competing candidates:** Who else is likely applying? Where does this candidate rank?
5. **Interview prediction:** % chance of getting an interview. Justify the number.
6. **Suggested changes:** Specific, actionable improvements.

**Stop for feedback.**

### Phase 5: Humanity Check
1. Read through all text looking for:
   - AI-generated patterns (banned phrase list from CLAUDE.md)
   - Overly polished or corporate language
   - Sentences that no human professional would actually say
   - Repetitive sentence structures
   - Generic statements that could apply to anyone
2. Rewrite flagged passages to sound like a pragmatic human professional
3. Check cover letter especially - it should sound like the user wrote it, not a bot
4. **Stop for final approval.**

### Phase 6: HTML Production
1. Read the user's style preference from preferences.md
2. Generate two HTML files using the selected template style:
   - `Resume - [Name] - [Company].html`
   - `Cover Letter - [Name] - [Company].html`
3. Save to the application folder
4. Update pipeline.md: add role with status "Materials Ready"
5. Tell user: "Files are ready to print to PDF. After you apply, tell me and I'll update the pipeline."

## Cover Letter Structure

```
[NAME]
[Phone] | [Email]
Application: [Role Title] | [Company] | [Location]
[divider]

Dear [Company] Hiring Team,

[Hook: 1-2 sentences. Something specific the candidate knows. Contrarian or insightful opening preferred.]

[Bridge: 1 sentence connecting the hook to candidate's fit.]

Three aspects of my background are directly relevant to this role:

- [Strength 1 in bold]: Evidence + metric.
- [Strength 2 in bold]: Evidence + metric.
- [Strength 3 in bold]: Evidence + metric.

[Honest gap acknowledgment if significant - 1 sentence, framed constructively]

[Closing: 1-2 sentences. Relocation note if applicable. Availability. Call to action.]

Sincerely,

[Name]
```

## Resume Structure

```
[NAME]
[Phone] | [Email]
[divider]

[Summary paragraph - no label, no "Professional Summary" heading]

Core Competencies
[3-column grid, 12 items, max 4 words each]

Professional Experience
[Reverse chronological, tailored bullets, flex-row headers]

Education & Certifications
[Degrees and certs]
```

## Rules
- Every bullet must be defensible in an interview
- Ownership language must match profile ownership levels
- No em-dashes (use hyphens)
- Contact line: phone and email only (no location, no LinkedIn)
- Cover letter sign-off: name only (no phone/email repeated)
- When in doubt about a claim, ask the user rather than guessing
- If the user provides new information during any phase, update profile.md

# Profile Builder

Build or update a professional profile for Career OS.

## Arguments
- None (interactive skill)

## Process

### Step 1: Check for Existing Data
1. Check if `profile.md` exists in the working directory
2. Check if `preferences.md` exists (may have been created by `/discover`)
3. Look for `<!-- source: discover session -->` tag in either file to detect discover-sourced data

**If profile.md exists (no discover data):**
- Ask: "You already have a profile. Do you want to (a) update it, (b) rebuild from scratch, or (c) just review it?"

**If discover data found (profile.md and/or preferences.md with discover tag):**
- Read both files and summarize what's already known
- Tell the user: "I see you've already been through a career discovery session. I have your career history, values, and preferences from that session. I'll skip what we've already covered and focus on the structured details I need for your applications - things like exact dates, metrics, contact info, and ownership levels."
- Proceed to Step 3 in **discover-aware mode** (see below)

**If nothing exists:**
- Proceed to Step 2

### Step 2: Resume Ingestion
1. Ask: "Do you have any existing resumes (PDF, DOC, DOCX) you'd like me to start from? If yes, provide the file path(s). If not, we'll build from scratch."
2. If files provided:
   - Read each file
   - Extract: name, contact, work history, education, skills, certifications
   - Present a summary: "Here's what I found in your resume(s). I'll use this as our starting point."
3. If no files: proceed directly to interview

Note: If discover data exists, still offer resume ingestion - resumes contain structured details (exact dates, titles, metrics) that discovery sessions typically don't capture.

### Step 3: Core Interview

**Discover-aware mode:** Before asking each question below, check if the answer already exists in profile.md or preferences.md from the discover session.
- If answer exists and is complete: confirm it briefly ("From our earlier session, I have [X]. Still correct?") and move on
- If answer is partial: state what's known, ask only for the gap ("You mentioned working at [Company] as [Role]. Can you give me the exact dates and 2-3 key achievements with numbers?")
- If answer is missing: ask the full question as written below

**Standard mode:** Ask these questions in order. Skip any already answered from resume ingestion.

**Identity & Contact:**
1. Full name (as it should appear on applications)
2. Phone number
3. Email address
4. Current location (city, country)
5. LinkedIn URL (optional)

**Current Situation:**
6. Current job title and company (or "not currently employed")
7. How long have you been in this role?
8. Notice period (if currently employed)
9. Are you actively job searching, passively open, or exploring?

**Career Level Assessment:**
10. How many years of professional experience do you have?
11. Do you manage people? If yes, how many (direct + indirect)?
12. Do you manage a budget? If yes, approximate size?

Based on answers 10-12, classify the user's career level:
- **Entry** (0-3 years, no reports, no budget)
- **Mid** (3-7 years, may have small team, limited budget)
- **Senior** (7-15 years, team management, budget responsibility)
- **Director+** (15+ years, large teams, significant budget, strategic scope)

Tell the user: "Based on your experience, I'm classifying you as [level]. This affects how detailed your profile will be. Does that feel right?"

**Career History:**
13. Walk me through your career in reverse order (most recent first). For each role, tell me:
    - Company name and what they do
    - Your title
    - Dates (start - end)
    - What you were responsible for
    - 2-3 key achievements or projects (with numbers if possible)

For **Senior/Director+** users, add for each role:
    - What did you fully own vs. coordinate vs. contribute to?
    - What was your budget/team size?
    - What was the organizational context? (startup, turnaround, steady-state, growth)

14. Are there any gaps in your employment history? If yes, what were you doing? (We need to know so we can frame it appropriately, not to judge.)

**Education & Certifications:**
15. Highest education level, field, institution, year
16. Any professional certifications? (List them)
17. Any ongoing learning or personal projects relevant to your career?

**Languages:**
18. What languages do you speak and at what level? (Native, Fluent, Professional, Conversational, Basic)

### Step 4: Career Preferences

**If preferences.md already exists from discover:**
- Show current preferences to the user
- Ask: "These preferences came from your discovery session. Anything to adjust?"
- Then ask only the questions NOT covered by discover (typically: screening threshold and document style)

**If no preferences exist:**
Create `preferences.md` with:

19. What kind of roles are you looking for? (title, function, industry)
20. What locations are you open to? (list cities/countries/remote)
21. Compensation target: What's your minimum and ideal? (specify currency and contract type: salary, B2B, contract)
22. What's your screening threshold? "I'll score each job posting as a % fit. What's your cutoff for pursuing a role? Most users pick 50-60%. Below this, I'll recommend passing." Let user decide.
23. Deal-breakers: Anything that automatically disqualifies a role? (e.g., "no contract roles", "no travel >20%", "must sponsor visa")
24. Which HTML style do you prefer for your application documents?
    - **Classic** - clean, conservative, works everywhere (Calibri/Arial, subtle blue accents)
    - **Modern** - slightly more visual, good for tech/creative roles
    - **Minimal** - maximum whitespace, very clean, lets content speak

### Step 5: Build Profile
1. Compile all answers into `profile.md` using the schema below
2. Create `preferences.md` with targets, locations, threshold, deal-breakers
3. Create empty `pipeline.md`, `passed_roles.md`, and `stories.md` from templates
4. Present the profile summary to the user for review
5. Ask: "Does this look accurate? Anything you'd like to change or add?"

### Step 6: Wrap Up
Tell the user:
- "Your profile is ready. You can now use `/screen` to evaluate job postings or `/apply` to start an application."
- "Your profile will evolve over time. When I spot gaps during applications, I'll ask clarifying questions and update your profile."
- "You can always run `/profile` again to update your information."

## Profile Schema (profile.md)

```markdown
# Professional Profile: [Full Name]
**Last Updated:** [date]
**Career Level:** [Entry / Mid / Senior / Director+]

## Contact
- Phone: [number]
- Email: [email]
- Location: [city, country]
- LinkedIn: [url] (optional)
- Notice Period: [period]

## Current Role
[Title] at [Company] (since [date])
[Brief description of scope and responsibilities]

## Career History

### [Company Name] | [Start] - [End]
**Title:** [title]
**Scope:** [description]
**Key Achievements:**
- [achievement with metric]
- [achievement with metric]

#### Project Inventory (Senior/Director+ only)
**Fully Owned:**
- [Project]: [what you owned, numbers, safe to claim]

**Led/Coordinated:**
- [Project]: [your role, what others did]

**Contributed To:**
- [Project]: [your part]

### [Previous Company] | [Start] - [End]
...

## Education & Certifications
- [Degree], [Field] - [Institution] ([Year])
- [Certification] - [Issuer] ([Year])

## Languages
- [Language] ([Level])

## Skills & Technologies
[Extracted from career history - technologies, methodologies, tools mentioned]

## Key Narrative Themes
[Identified patterns: e.g., "turnaround specialist", "builder", "bridge between business and IT"]
[These are suggested by the system based on career analysis, confirmed by user]
```

## Rules
- Never fabricate or embellish information
- If something is unclear, ask - don't assume
- Use the user's own words where possible
- Flag any inconsistencies between resume and interview answers
- The profile is a living document - update it whenever new information emerges during applications

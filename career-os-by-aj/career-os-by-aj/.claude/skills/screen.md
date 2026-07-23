# Job Screening

Screen one or more job postings and produce structured role assessments.

## Arguments
- One or more job URLs (LinkedIn, company career page, etc.), or a pasted job description

## Prerequisites
- `profile.md` must exist. If not, tell user to run `/profile` first.
- Read `profile.md` and `preferences.md` before screening.

## Process

For each role provided:

1. **Fetch the posting** via WebFetch (if URL provided) or parse the pasted text
2. **Check posting age** - flag postings older than 1 week. Still screen them but note staleness.
3. **Check passed_roles.md** - skip if this exact role (same company + same title + same location) was already passed. Different roles at the same company are fine.
4. **Extract structured data** and save to a new application folder:
   - Folder: `applications/[YYYYMMDD] [Company] - [Role Title]/`
   - File: `role_description.md`
   - Contents: Company info (name, industry, HQ, size), Role info (title, location, reports to, type, seniority), Source URL, Key responsibilities, Requirements, Tech stack, Compensation (stated or market benchmark estimate), Notes

5. **Score fit** against profile.md:
   - Produce a scorecard table: Requirement | Evidence from Profile | Strength (Strong/Moderate/Weak)
   - Calculate overall fit % and shortlist %
   - List key strengths (with specific evidence from profile)
   - List key gaps (be honest - never claim experience that doesn't exist)
   - Save as `fit_analysis.md` in the application folder

6. **Location check:** Compare role location against user's location preferences in preferences.md. If not on list, ask user before passing or pursuing.

7. **Visa/work authorization check:** If role is in a different country from user's current location, flag any known visa requirements.

8. **Compensation check:** Compare against targets in preferences.md. Flag if below minimum.

9. **Deal-breaker check:** Check against deal-breakers listed in preferences.md.

10. **Output a summary table:**

| Company | Role | Location | Fit | Shortlist | Comp | Flag |
|---|---|---|---|---|---|---|

11. **Decision:** Compare fit % against user's screening threshold (from preferences.md).
    - Above threshold: "This role scores above your [X]% threshold. Want to proceed to application?"
    - Below threshold: "This role scores below your [X]% threshold. Recommend passing. Want to pursue anyway?"
    - Let the user decide in all cases.

12. **If passed:** Add to `passed_roles.md` with company, role, location, link, and pass reason.

13. **Progressive profile building:** If during screening you identify information gaps in the profile that would help score this or future roles better, ask the user targeted questions and update profile.md.

## Fit Scoring Guidelines

**Strong (contributes positively to fit %):**
- Direct experience matching the requirement
- Specific metrics or outcomes that demonstrate capability
- Same industry or closely adjacent

**Moderate (neutral to slight positive):**
- Adjacent or transferable experience
- Exposure without deep hands-on work
- Related but different context

**Weak (contributes negatively to fit %):**
- No relevant experience
- Requirement is in a domain the user hasn't touched
- Hard requirement the user doesn't meet (certification, language, etc.)

## Rules
- Always include the source URL in role_description.md
- Never auto-reject based on location alone - always ask the user
- Be honest about gaps - the user needs accurate assessments to make good decisions
- When screening multiple roles in batch, present the summary table at the end covering all roles
- Keep fit_analysis.md files even for passed roles (they're useful reference if the user reconsiders)

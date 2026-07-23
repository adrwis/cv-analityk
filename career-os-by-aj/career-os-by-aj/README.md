# Career OS by AJ v0.2

Open-source job application system powered by Claude. Turns your career history into targeted, high-quality job applications.

## What It Does

- **Builds your professional profile** from existing resumes + interactive interview
- **Screens job postings** against your profile with honest fit scoring
- **Generates tailored applications** (resume + cover letter) through a 6-phase quality process
- **Tracks your pipeline** across all active applications
- **Debriefs interviews** and prepares you for the next round

## Quick Start

1. Install [Claude Desktop](https://claude.ai/download) (requires Pro or Max subscription)
2. Download this folder to your computer
3. Open Claude Desktop, click the **Code** tab, select this folder as your working directory
4. Type `/profile` to build your professional profile
5. Type `/screen [job-url]` to start screening roles

Alternative: use the **Cowork** tab for a more hands-off experience (describe tasks in plain language instead of slash commands).

See [docs/installation-guide.md](docs/installation-guide.md) for detailed setup instructions.

## Commands

| Command | Description |
|---------|-------------|
| `/discover` | Guided career exploration - figure out what you want (Ikigai, values, career paths) |
| `/profile` | Build or update your professional profile |
| `/screen` | Score job postings against your profile |
| `/apply` | 6-phase workflow: Gap Analysis, Strategic Draft, Content Gen, Red Team, Humanity Check, HTML Production |
| `/debrief` | Post-interview capture and next-round prep |
| `/pipeline` | View and manage active applications |

## How It Works

### Two Entry Points

**Know what you want?** Start with `/profile` to build your professional profile, then `/screen` to find roles.

**Not sure yet?** Start with `/discover` for a guided career exploration session. It uses frameworks like Ikigai and Schein Career Anchors to help you identify your strengths, values, and potential directions. The output feeds directly into your Career OS preferences.

### Profile Building
Start by importing your existing resume (PDF/DOC). Career OS extracts your history and then interviews you to fill gaps. Your profile evolves over time - every application adds depth.

### Screening
Paste job URLs and get an honest fit score. Career OS tells you where you're strong, where the gaps are, and whether to pursue or pass. You set your own threshold.

### 6-Phase Application Process
1. **Gap Analysis** - score fit, identify ATS keywords, ask clarifying questions
2. **Strategic Draft** - tailor summary, select bullets, frame experience for this specific role
3. **Content Generation** - full resume and cover letter text
4. **Red Team** - hiring manager persona tears it apart
5. **Humanity Check** - remove AI-sounding language
6. **HTML Production** - generate printable documents in your chosen style

You approve each phase before moving to the next. Nothing ships without your sign-off.

### Document Styles
Three built-in templates:
- **Classic** - conservative, professional, works everywhere
- **Modern** - left accent bar, competency chips, contemporary feel
- **Minimal** - serif font, maximum whitespace, editorial confidence

## Core Principles

- **Never claim experience that doesn't exist.** If there's a gap, name it honestly and propose a mitigation strategy.
- **Accuracy over impression.** "Led" vs "coordinated" vs "contributed to" are not interchangeable.
- **No AI-speak.** Applications should sound like a human professional wrote them.
- **The user decides.** Career OS recommends; you choose.

## File Structure

```
career-os-by-aj/
  CLAUDE.md              # System instructions (don't edit)
  README.md              # This file
  profile.md             # Your profile (created by /profile)
  preferences.md         # Your preferences (created by /profile)
  pipeline.md            # Application tracker (auto-maintained)
  passed_roles.md        # Passed roles history
  stories.md             # STAR story bank
  .claude/skills/        # Skill definitions
  templates/             # HTML document templates
  docs/                  # Guides and documentation
  applications/          # One folder per application
```

## License

Open source. Created by Arek Janik.

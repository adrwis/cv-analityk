# Career OS by AJ v0.2 - Installation Guide

How to set up Career OS on a fresh Windows machine.

## What You Need

- A computer running Windows 10 or later (macOS also works)
- A Claude Pro or Claude Max subscription (https://claude.ai)
- Your most recent resume in PDF or DOC format (optional but recommended)

---

## Part 1: Install Claude Desktop

### Step 1: Download and Install
1. Go to https://claude.ai/download
2. Download the Windows installer
3. Run the installer and follow the prompts
4. Launch Claude Desktop when installation finishes

### Step 2: Sign In
1. Open Claude Desktop
2. Sign in with your Anthropic account (you need a Pro or Max subscription)
3. You should see the main Claude interface with tabs at the top

---

## Part 2: Set Up Career OS

### Step 1: Download Career OS
1. Download the Career OS folder (ZIP file from the shared link or GitHub)
2. Extract it to a location on your computer, for example:
   - `C:\Users\YourName\Documents\career-os`
   - or your Desktop, Google Drive, OneDrive - anywhere you can find it

### Step 2: Open Career OS in Claude Desktop
1. In Claude Desktop, click the **Code** tab at the top of the window
2. You'll see a prompt area with a **"Select folder"** button (or folder icon)
3. Click it and browse to the `career-os-by-aj` folder you extracted
4. Select the folder and confirm

**What happens next:** Claude automatically reads the CLAUDE.md file and loads all Career OS skills (the slash commands). You'll see a terminal-like interface where you can type commands and chat with Claude.

> **Note:** If Claude asks you to install Git, go to https://git-scm.com/download/win, install it with default settings, then restart Claude Desktop.

### Step 3: Verify Skills Are Loaded
Type `/` in the prompt area. You should see a list of available commands including:
- `/profile` - build your professional profile
- `/screen` - screen job postings
- `/apply` - create application materials
- `/debrief` - post-interview capture
- `/pipeline` - view your application tracker

If you see these, Career OS is ready.

### Step 4: Get Started

**If you know what kind of roles you're looking for**, type:
```
/profile
```

**If you're not sure what you want to do yet**, type:
```
/discover
```
This starts a guided career exploration session. It will help you figure out your strengths, values, and potential directions through a structured conversation. At the end, it sets up your Career OS preferences so you can start searching.

#### About `/profile`

Career OS will:
1. Ask if you have an existing resume to import (PDF or DOC)
2. If yes: read your resume and extract your career history automatically
3. Interview you with targeted questions to fill gaps and add context
4. Ask about your job search preferences (target roles, locations, compensation, etc.)
5. Create your personal profile files

**This takes 15-30 minutes.** Have your resume file path ready (e.g., `C:\Users\YourName\Documents\my-resume.pdf`).

After this step, you're ready to start screening and applying.

---

## Part 3: Alternative Setup - Cowork Tab

Claude Desktop also has a **Cowork** tab designed for autonomous multi-step workflows. You can use Career OS through Cowork instead of the Code tab:

### How Cowork Works
1. Click the **Cowork** tab in Claude Desktop
2. Create a new **Project** and name it "Job Search" (or similar)
3. Add custom instructions by pasting the content from CLAUDE.md
4. Upload your reference files (resume, templates) to the project's knowledge base
5. Describe what you want: "Screen this job posting: [url]" or "Help me build my professional profile"

### When to Use Cowork vs Code Tab

| Use Case | Code Tab | Cowork Tab |
|----------|----------|------------|
| Slash commands (/profile, /screen) | Yes | No |
| Automatic file reading/writing | Yes | Yes |
| Non-technical users | Good | Easier |
| Multi-step autonomous workflows | Manual approval per step | Runs autonomously |
| Best for | Power users who want control | Users who want to describe a task and let Claude handle it |

**Recommendation:** Start with the **Code tab** for the full Career OS experience with slash commands. Try **Cowork** if you prefer a more hands-off approach.

---

## Part 4: Daily Workflow

### Typical Session
1. Open Claude Desktop and click the **Code** tab
2. Make sure the career-os folder is selected as your working directory
3. Type `/pipeline` to see where things stand
4. Screen new job postings: `/screen [paste LinkedIn URL here]`
5. Apply to promising roles: `/apply [company name]`
6. After interviews: `/debrief [company name]`

### Screening Jobs
Paste one or more job URLs:
```
/screen https://www.linkedin.com/jobs/view/1234567890/
```
You can paste multiple URLs at once. Career OS scores each one and recommends pursue or pass.

### Applying to a Role
```
/apply CompanyName
```
This runs through 6 phases - you approve each one before moving to the next:
1. **Gap Analysis** - how well you match the role
2. **Strategic Draft** - tailored summary and bullet points
3. **Content Generation** - full resume and cover letter text
4. **Red Team** - brutal hiring manager critique
5. **Humanity Check** - removes robotic-sounding language
6. **HTML Production** - generates printable files

### Printing Your Documents
After Career OS generates your HTML resume and cover letter:
1. Find the HTML file in your career-os applications folder
2. Right-click the file > **Open with** > **Chrome** (or Edge)
3. Press **Ctrl+P** to open print dialog
4. Set destination to **Save as PDF**
5. Paper size: **A4**
6. Margins: **Default**
7. Scale: **100%** (not "fit to page")
8. Click **Save**

---

## Part 5: Troubleshooting

### "I don't see the Code tab"
- Make sure you have a Claude Pro or Max subscription (free tier doesn't include Code)
- Update Claude Desktop to the latest version (Help > Check for Updates)

### "Skills / slash commands not showing up"
- Make sure you selected the `career-os-by-aj` folder (the one containing CLAUDE.md)
- Try closing and reopening the Code tab
- Type `/` and check if the skill list appears

### "Claude asks me to install Git"
- Go to https://git-scm.com/download/win
- Install with all default settings
- Restart Claude Desktop after installation

### "Can't read my PDF resume"
- Make sure the file path is correct
- Try dragging the file into the chat, or provide the full path: `C:\Users\YourName\Documents\resume.pdf`

### "HTML files look wrong when printed"
- Use Chrome or Edge for printing (best CSS support)
- Set scale to 100% (not "fit to page")
- Set paper size to A4
- Set margins to Default

### "I made a mistake in my profile"
- Type `/profile` again and choose "update" to edit specific sections
- Or open `profile.md` directly and ask Claude to help you edit it

---

## Quick Reference Card

| What you want to do | What to type |
|---------------------|-------------|
| Figure out your career direction | `/discover` |
| Build your profile | `/profile` |
| Screen a job posting | `/screen [url]` |
| Screen multiple postings | `/screen [url1] [url2] [url3]` |
| Apply to a role | `/apply [company]` |
| Check your pipeline | `/pipeline` |
| Debrief after interview | `/debrief [company]` |
| Get help | Ask Claude: "how does Career OS work?" |

---

*Career OS by AJ - Open Source*
*Created by Arek Janik*

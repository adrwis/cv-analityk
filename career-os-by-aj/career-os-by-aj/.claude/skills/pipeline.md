# Pipeline Tracker

View and manage the active application pipeline.

## Arguments
- None (displays current state)
- Optional: "update [company] [new status]" to manually update a status

## Prerequisites
- `pipeline.md` must exist in working directory

## Process

### Default: Show Pipeline
1. Read pipeline.md
2. Display a formatted summary grouped by stage:
   - **Interviewing** - active interview rounds with next actions
   - **Applied** - awaiting response
   - **Materials Ready** - ready to submit
   - **Passed** - recently passed roles (last 5)
   - **Closed** - recently closed (last 5)
3. Highlight any stale items (applied 3+ weeks ago with no response)
4. Suggest follow-up actions where appropriate

### Update: Change Status
If user provides an update:
1. Find the role in pipeline.md
2. Update status and date
3. If moved to "Applied": record application date
4. If moved to "Interview": record round number, interviewer if known
5. If moved to "Rejected" or "Withdrawn": move to Closed section
6. If moved to "Offer": flag for negotiation discussion

### Cleanup
Periodically (every ~5 updates), check for:
- Duplicate entries
- Stale "Applied" entries (3+ weeks, suggest follow-up or archive)
- Roles that should be moved to Closed

## Pipeline.md Schema

```markdown
# Application Pipeline
**Last Updated:** [date]

## Interviewing
| Company | Role | Stage | Next Action | Comp | Notes |
|---|---|---|---|---|---|

## Applied - Awaiting Response
| Company | Role | Applied Date | Fit | Comp | Notes |
|---|---|---|---|---|---|

## Materials Ready
| Company | Role | Priority | Notes |
|---|---|---|---|

## Recently Closed
| Company | Role | Outcome | Notes |
|---|---|---|---|

## Compensation Reference
| Company | Type | Amount | Notes |
|---|---|---|---|
```

## Rules
- Always update the "Last Updated" date when making changes
- Never delete entries - move them between sections
- Keep the pipeline under 100 lines by archiving old closed entries
- Compensation Reference section tracks all stated/discussed comp figures for negotiation leverage

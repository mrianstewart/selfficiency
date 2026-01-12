# Selfficiency PRD — Decision-Centred Life OS

## 1. Product definition
Selfficiency is a private Life OS that reduces mental load by:
- capturing life **decisions**
- helping the user decide (AI support)
- tracking decision **states** over time
- surfacing patterns and lightweight follow-ups (later)

**Primary unit of value:** a **Decision**  
Interpretation (emails/letters/messages) is an input into a decision (Phase 2).  
Rules/simplifications are outputs of repeated decisions (Phase 2).

## 2. Target user
Individuals with high cognitive load (parents, carers, busy professionals, people in transitions) who:
- feel overwhelmed
- struggle to prioritise
- want calm clarity, not another productivity system

## 3. Core promise
“Put the heavy thing in. Get a clear decision and next step out. Keep it somewhere that remembers.”

## 4. MVP success criteria
### User outcomes
- Capture a decision in < 60 seconds.
- Receive a structured, usable recommendation (not generic).
- See open vs deferred vs closed at a glance.
- Revisit a decision later without re-explaining from scratch.

### Metrics (define now, implement later)
- Activation: create 1 decision and view dashboard.
- Repeat: return within 7 days and open an existing decision.
- Close-loop rate: % decisions marked closed or deferred with a review date.
- Time-to-value: first AI response delivered within 30 seconds after submit.

## 5. Scope

### Phase 1 (MVP) — must-have
1) Decision capture
- Title (auto-suggest allowed)
- Context text (“what’s weighing on you?”)
- Category: Work | Family | Money | Admin | Health | Other
- Optional: Stakes (low/med/high), Deadline date

2) AI decision processing
Return a consistent structure:
- Focus now (1–3 bullets)
- Defer (1–3 bullets)
- Ignore (1–2 bullets; explicit permission)
- Next step (one action, <= 10 minutes)
- Optional: trade-offs if there are clearly two viable options
- Confidence + rationale

3) Decision dashboard
States:
- Needs decision
- Decided
- Deferred
- Closed

4) Decision detail
- Show AI output + history
- Actions: Accept (mark decided), Add note, Defer (set review date), Close

5) Light memory
- Store decisions, AI outputs, and user notes

### Phase 1 (nice-to-have)
- Search (title + context)
- Filter by category and state
- Pin up to 3 decisions

### Explicitly out of scope (Phase 1)
- Email ingestion / Gmail connection
- File upload parsing
- Push notifications
- Full “Life Context” profile wizard
- Tasks/habits/calendar management
- Sharing/collaboration
- Payments/subscriptions (stub allowed)

## 6. Phase 2 (planned)
- Interpretation mode: “Explain this like I’m stressed” (paste/upload)
- Rules engine: “Make this a rule” + rule library
- Gentle follow-ups (email/push) with strict controls
- Transition packs (paid)
- Deeper personalization from stored context

## 7. UX
### Navigation (MVP)
- Dashboard
- New Decision
- Archive (Closed)

### Dashboard layout
- Quick capture bar: “What’s weighing on you right now?”
- Sections:
  - Needs decision
  - Deferred (with review dates)
  - Recently closed

### Decision detail
- Title + category + status
- AI output blocks
- History (notes + status changes)
- Actions: Accept, Defer, Close, Add note

## 8. Pricing (not implemented in MVP)
- Free: limited decisions/month, no advanced features
- Paid: unlimited + future interpretation + rules + follow-ups
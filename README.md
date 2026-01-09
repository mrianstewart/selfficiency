# selfficiency

SELFFICIENCY

Less to manage. More space to live.

What this product is

Selfficiency is a calm, AI-assisted product that reduces mental load by helping users remove unnecessary decisions, systems, and expectations.

It does not help users do more.
It helps them carry less.

⸻

What this product is NOT

Selfficiency is not:
	•	a productivity tool
	•	a task manager
	•	a habit tracker
	•	a journaling app
	•	a therapy product
	•	a dashboard

If a feature resembles any of the above, it should not exist.

⸻

Core Product Philosophy (non-negotiable)
	1.	Reduction beats optimisation
	2.	Permission before structure
	3.	One decision at a time
	4.	Calm over clever
	5.	Nothing ships that increases mental load

This repo exists to enforce those principles.

⸻

Product Arc (locked)

Users move through three phases, in order.

Phase 1 — Relief
	•	Immediate reduction of mental load
	•	3-minute experience
	•	Output: permission + a clear boundary

Phase 2 — Stability
	•	Prevents repeated pressure
	•	Output: personal rules

Phase 3 — Simplification
	•	Removes root causes
	•	Output: system removal or consolidation

⚠️ Later phases must not be visible before the user is ready.

⸻

Phase 1: Relief (MVP core)

Primary action

“Reduce the load”

This is the default CTA everywhere.

⸻

Relief Flow (3 minutes max)
	1.	Select a life area
	•	Work
	•	Home
	•	Parenting
	•	Money
	•	Relationships
	•	Personal energy
	2.	Answer 2–3 short prompts
	•	Single sentence responses
	•	No therapy language
	•	No long writing
	3.	Receive a Decision Card
Each card MUST contain:
	•	Let go — one specific thing to stop
	•	Simplify — one reduction or constraint
	•	Rule — one reusable personal boundary

Decision Cards must be:
	•	concise
	•	declarative
	•	calm
	•	structured
	•	non-conversational

This card is the product.

⸻

Phase 2: Stability

Unlocked only after repeated use.

Features
	•	Rules Library (saved rules)
	•	Weekly Focus (choose one rule to reinforce)
	•	Optional reminders

Explicit exclusions
	•	No streaks
	•	No metrics
	•	No progress scores

⸻

Phase 3: Simplification

Unlocked only when patterns repeat or user requests deeper change.

Purpose

Remove:
	•	unnecessary systems
	•	duplicated processes
	•	recurring decisions
	•	inherited expectations

Output

Every session must produce:
	1.	One thing to remove or collapse
	2.	One replacement (or intentional absence)
	3.	One reinforcing rule

No task lists.
No plans.
No optimisation language.

⸻

Language & Tone Rules

Allowed
	•	calm
	•	neutral
	•	permission-based
	•	adult

Forbidden
	•	productivity jargon
	•	hustle language
	•	motivational slogans
	•	therapy-speak
	•	gamification language

When in doubt: remove words.

⸻

UX Rules
	•	One meaningful decision per screen
	•	Minimal UI
	•	No dashboards
	•	No charts
	•	No streaks
	•	No gamified feedback
	•	Prefer whitespace to controls

If a screen feels “busy”, it’s wrong.

⸻

Monetisation

Free
	•	Limited Relief sessions
	•	Decision Cards saved but locked
	•	No editing
	•	No weekly focus

Paid
	•	Unlimited Relief
	•	Editable rules
	•	Weekly focus
	•	Simplification sessions

Tone must feel supportive, never sales-driven.

⸻

Non-Negotiable Test

Before committing any feature, ask:

“Does this reduce mental load — or does it manage it?”

If it manages it, delete it.


CODING CHECKLIST (KEEP THIS OPEN)

Use this checklist before, during, and after vibe coding sessions.

⸻

A. Before writing code
	•	What phase does this feature belong to? (Relief / Stability / Simplification)
	•	Is the user emotionally overloaded at this point?
	•	What single decision is the user making on this screen?
	•	What does this feature remove or simplify?

If you can’t answer clearly, stop.

⸻

B. When Cursor suggests features

Reject anything that introduces:
	•	tasks
	•	goals
	•	habits
	•	streaks
	•	metrics
	•	progress bars
	•	dashboards
	•	motivational copy

Cursor will default to productivity patterns.
You must actively resist this.

⸻

C. UI sanity check (every screen)
	•	Is there more than one primary action?
	•	Are there more than ~3 interactive elements?
	•	Is anything trying to “encourage” the user?
	•	Could this screen exist with less text?

If yes to any → simplify.

⸻

D. Copy lint check

Scan all text and remove:
	•	“improve”
	•	“optimize”
	•	“boost”
	•	“maximize”
	•	“stay on track”
	•	“keep going”
	•	“progress”

Replace with:
	•	stop
	•	remove
	•	pause
	•	let go
	•	simplify
	•	choose not to

⸻

E. Decision Card quality check

Every Decision Card must:
	•	Be understandable in under 10 seconds
	•	Contain exactly one Let go
	•	Contain exactly one Simplify
	•	Contain exactly one Rule
	•	Feel personal, not generic
	•	Not explain itself

If it feels like advice, rewrite it.

⸻

F. Phase gating check

Before showing a new feature:
	•	Has the user earned this phase through use?
	•	Is this solving a repeated problem?
	•	Could this overwhelm a first-time user?

If unsure → hide it.

⸻

G. Final commit question

Before pushing code, ask:

“If someone is already tired, will this make them feel lighter — or like there’s something else to manage?”

Only ship if the answer is lighter.

⸻

Final reminder (read this often)

Selfficiency wins by what it removes, not what it adds.

If the product ever starts to feel “feature-rich”, you’ve already lost the thread.

⸻

If you want next, the most valuable follow-ups would be:
	•	Decision Card generation rules (to keep AI outputs high-quality and non-generic)
	•	Homepage copy written line-by-line to exactly match this philosophy
	•	Phase-transition trigger logic (when and how the app reveals more)
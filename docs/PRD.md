PRODUCT REQUIREMENTS DOCUMENT (PRD)

Project: Selfficiency

⸻

1. Product Overview

Product name

Selfficiency

Tagline

Less to manage. More space to live.

Product summary

Selfficiency is a calm, AI-assisted product that reduces mental load by helping users remove unnecessary decisions, systems, and expectations from their lives.

It does not help users do more.
It helps them carry less.

⸻

2. Problem Statement

Capable adults are overwhelmed not because they lack productivity, but because they are carrying:
	•	too many decisions
	•	too many systems
	•	too many inherited expectations

Existing tools:
	•	add tasks
	•	add structure
	•	add optimisation pressure

Selfficiency solves the opposite problem:

How do I remove what doesn’t need to be here?

⸻

3. Target User

Primary user
	•	Age: 30–55
	•	Role: parents, professionals, carers, knowledge workers
	•	Traits:
	•	capable
	•	conscientious
	•	overloaded
	•	not interested in hustle culture

User is NOT:
	•	looking for therapy
	•	looking for motivation
	•	looking for productivity metrics

⸻

4. Core Product Philosophy (Non-Negotiable)
	1.	Reduction beats optimisation
	2.	Permission before structure
	3.	One decision at a time
	4.	No guilt, no pressure, no gamification
	5.	Calm over clever

Any feature that violates these principles must be removed.

⸻

5. Product Arc (Locked)

Users progress through three phases, sequentially.

Phase 1 — Relief
	•	Purpose: immediate reduction of mental load
	•	Duration: minutes
	•	Output: permission + a clear boundary

Phase 2 — Stability
	•	Purpose: prevent recurring pressure
	•	Duration: days to weeks
	•	Output: personal rules

Phase 3 — Simplification
	•	Purpose: remove root causes
	•	Duration: weeks to months
	•	Output: structural change

Later phases must not be visible prematurely.

⸻

6. Core Features (by Phase)

⸻

PHASE 1: RELIEF (MVP CORE)

Primary CTA
“Reduce the load”

Used on:
	•	homepage
	•	app home
	•	primary navigation

⸻

Relief Flow (3 minutes max)

Step 1: Life Area Selection
User selects one:
	•	Work
	•	Home
	•	Parenting
	•	Money
	•	Relationships
	•	Personal energy

(No custom areas in MVP.)

⸻

Step 2: Prompts
User answers 2–3 short prompts.

Rules:
	•	single sentence answers
	•	one prompt per screen or clearly separated
	•	no therapeutic language

Example prompts:
	•	“What feels heavier than it should?”
	•	“What are you doing mostly out of obligation?”
	•	“What would happen if this stopped for a week?”

⸻

Step 3: Decision Card (Core Output)
Each Relief session MUST produce exactly:
	1.	Let go – one specific thing to stop
	2.	Simplify – one reduction or constraint
	3.	Rule – one reusable personal boundary

Rules:
	•	concise
	•	declarative
	•	calm
	•	no advice tone
	•	no explanations longer than one line

This card is the product.

⸻

Phase 1 Success Criteria
User feels immediate relief and cognitive clarity.

⸻

PHASE 2: STABILITY

Unlock Conditions
	•	Multiple Relief sessions completed
OR
	•	User revisits saved Decision Cards

Must not appear on first use.

⸻

Features
Rules Library
	•	Displays saved rules
	•	Filterable by life area
	•	Editable (paid)

Weekly Focus
	•	User selects one rule for the week
	•	Optional reminder
	•	No streaks
	•	No scoring

Language examples:
	•	“Which boundary matters most this week?”
	•	“What are you choosing not to do?”

⸻

Phase 2 Success Criteria
User experiences fewer repeated stress triggers.

⸻

PHASE 3: SIMPLIFICATION

Unlock Conditions
	•	Repeated rules in same area
OR
	•	Explicit user action (“This keeps happening”)

⸻

Simplification Session
Purpose:
Identify and remove:
	•	unnecessary systems
	•	duplicated processes
	•	recurring decisions
	•	inherited expectations

Output MUST include:
	1.	One thing to remove or collapse
	2.	One replacement (or intentional absence)
	3.	One reinforcing rule

Rules:
	•	no task lists
	•	no roadmaps
	•	no optimisation language

⸻

Phase 3 Success Criteria
Lasting reduction in complexity.

⸻

7. Data Model (Conceptual)

Core entities
	•	User
	•	Session
	•	type: relief | simplification
	•	PromptResponse
	•	DecisionCard
	•	Rule
	•	LifeArea
	•	WeeklyFocus

Rules are the central object.
Everything else feeds into them.

⸻

8. Monetisation

Free Tier
	•	Limited Relief sessions
	•	Decision Cards saved but locked
	•	No rule editing
	•	No weekly focus

Paid Tier
	•	Unlimited Relief sessions
	•	Editable Rules Library
	•	Weekly Focus
	•	Simplification Sessions

Tone:
Supportive, never pushy.

Example:

“You’ve created clarity. Keep it.”

⸻

9. Homepage Requirements

Purpose

Make users feel:
	•	seen
	•	safe
	•	unpressured

⸻

Structure

Hero
	•	Headline: Less to manage. More space to live.
	•	Subtext: “Selfficiency helps you reduce mental load by removing unnecessary decisions and systems.”
	•	Primary CTA: Reduce the load

⸻

Problem Section
Short statements only:
	•	“Too many decisions.”
	•	“Too many systems.”
	•	“Too much to hold in your head.”

⸻

How It Works
Three steps:
	1.	Reduce the load
	2.	Set boundaries
	3.	Simplify what’s causing it

⸻

Tone
	•	calm
	•	adult
	•	minimal
	•	no metrics
	•	no testimonials initially

⸻

10. Language & Tone Rules

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

11. UX Rules
	•	No dashboards
	•	No charts
	•	No streaks
	•	No multi-column layouts early
	•	One meaningful action per screen

⸻

12. Build Order (Strict)
	1.	Homepage
	2.	Phase 1 Relief flow
	3.	Decision Card generation
	4.	Save / view Rules
	5.	Paywall
	6.	Phase 2 features
	7.	Phase 3 features

⸻

13. Non-Negotiable Test

Before shipping any feature:

“Does this reduce mental load — or manage it?”

If it manages it, it does not ship.
# Architecture (Next.js + Supabase)

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase:
  - Auth (email magic link or Google)
  - Postgres DB
- Server route for AI calls: /api/decide
- Runtime validation: zod

## Pages
- / (marketing or redirect to /app)
- /app (dashboard)
- /app/new (new decision)
- /app/decisions/[id] (decision detail)
- /app/archive (closed decisions)
- /login (auth)

## Data model
### decisions
- id uuid pk default gen_random_uuid()
- user_id uuid not null
- title text not null
- context_text text not null
- category text not null
- stakes text null
- deadline_date date null
- status text not null
- review_date date null
- ai_summary jsonb null
- created_at timestamptz default now()
- updated_at timestamptz default now()

### decision_events (append-only history)
- id uuid pk default gen_random_uuid()
- decision_id uuid references decisions(id) on delete cascade
- user_id uuid not null
- type text not null
- payload jsonb null
- created_at timestamptz default now()

## RLS
- Enable RLS on both tables.
- Policies:
  - user can select/insert/update/delete only their rows (user_id = auth.uid()).

## API routes
### POST /api/decide
Input:
- context_text, title?, category, stakes?, deadline_date?
Output:
- AI_SPEC-compliant JSON

## Validation + typing
- Define zod schemas for:
  - decide request
  - AI response JSON
- Always validate AI output before saving.

## Privacy
- No third-party analytics in MVP.
- Provide delete data endpoint (Phase 1.5 OK).
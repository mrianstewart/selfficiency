# Build checklist (MVP)

## Setup
- [ ] Create Next.js app (App Router, TS)
- [ ] Add Tailwind
- [ ] Add @supabase/supabase-js, @supabase/ssr
- [ ] Add zod

## Supabase
- [ ] Create project
- [ ] Create tables: decisions, decision_events
- [ ] Enable RLS and add policies
- [ ] Create auth providers (email magic link + optional Google)

## App
- [ ] Auth flow: /login, session handling, protected routes
- [ ] Dashboard page (/app)
  - [ ] quick capture
  - [ ] lists by status
- [ ] New Decision (/app/new)
  - [ ] form
  - [ ] submit -> API -> save -> redirect
- [ ] Decision Detail (/app/decisions/[id])
  - [ ] show AI output
  - [ ] add note
  - [ ] accept -> status=decided
  - [ ] defer -> status=deferred + review date
  - [ ] close -> status=closed
  - [ ] event log rendering
- [ ] Archive (/app/archive) for closed decisions

## AI
- [ ] POST /api/decide
- [ ] prompt + schema validation
- [ ] handle clarification flow (optional)

## QA
- [ ] Empty states
- [ ] Error handling for API failures
- [ ] Basic accessibility (labels, focus)
- [ ] Deploy to Vercel
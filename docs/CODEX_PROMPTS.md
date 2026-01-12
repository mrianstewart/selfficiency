# Codex prompts

## Global guardrails (include in every prompt)
- Use Next.js App Router + TypeScript.
- Use Tailwind for styling, minimal UI.
- Use Supabase Auth + Postgres with RLS.
- Do not invent environment variables; update .env.example if needed.
- Validate API inputs and AI outputs with zod.
- Keep components small and readable.
- No heavy state libraries unless necessary.

---

## Mega-prompt (scaffold + wiring)
You are working in an existing repo. Implement the Selfficiency MVP described in /docs/PRD.md using:
- Next.js App Router + TypeScript + Tailwind
- Supabase (auth + postgres)
- zod validation
- API route POST /api/decide that calls OpenAI and returns structured JSON per /docs/AI_SPEC.md

Tasks:
1) Add required dependencies.
2) Create Supabase client helpers for server and client usage using @supabase/ssr.
3) Implement auth flow:
   - /login page
   - protected /app routes (redirect to /login when not authed)
4) Implement pages:
   - /app dashboard: lists decisions by status + quick capture bar
   - /app/new: decision form
   - /app/decisions/[id]: decision detail + actions (accept, defer, close, add note)
   - /app/archive: closed decisions list
5) Implement DB access layer functions (create decision, update status, insert event, list decisions by status, fetch decision + events).
6) Implement POST /api/decide:
   - zod validate request
   - call OpenAI
   - zod validate response JSON
   - return JSON
7) Add clean error states and empty states.

Constraints:
- Minimal design; focus on clarity.
- No payments.
- No file uploads.
- No external analytics.
- Add .env.example updates if required.
- Add brief README section "Local setup" with env vars and Supabase setup notes.

Proceed file-by-file with clean commits if possible (but just modify files directly).
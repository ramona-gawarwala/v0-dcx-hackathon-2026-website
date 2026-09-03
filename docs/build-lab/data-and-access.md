# Data & access

## Level 4 — Data with Neon Postgres

*Intermediate · 40 min · after level 3*

> **By the end of this level**
> - Real Postgres, provisioned in about a minute, with env vars injected automatically.
> - Zod contracts that the form, the database, and later the AI all share.
> - Server actions writing real rows.

> **Naming note**
> "Vercel Postgres" no longer exists as a separate product — existing databases moved to **Neon** in December 2024, and Neon is now the Postgres option in the Vercel Marketplace. If a tutorial tells you to install `@vercel/postgres`, it predates the change.

**1. Provision the database.** Vercel dashboard → **Storage** → **Marketplace** → Neon. Connect it to your project and the connection strings land in your environment automatically. Pull them locally:

```bash
vercel env pull .env.local
pnpm add drizzle-orm @neondatabase/serverless
pnpm add -D drizzle-kit
```

**2. Write the contracts first.** One schema per boundary. This file is the reason your form, your database, and your AI output can never disagree about a shape.

```ts
// lib/contracts/feedback.ts
import { z } from 'zod';

export const FeedbackInput = z.object({
  body:   z.string().min(10).max(5000),
  source: z.enum(['email', 'support', 'review', 'survey', 'in-app']),
  email:  z.string().email().optional(),
});

// The AI will be forced to return exactly this in level 7.
export const Classification = z.object({
  sentiment: z.enum(['positive', 'neutral', 'negative']),
  theme:     z.string().max(40),
  severity:  z.number().int().min(1).max(5),
  rationale: z.string(),
  confidence: z.number().min(0).max(1),
});

export type FeedbackInput = z.infer<typeof FeedbackInput>;
export type Classification = z.infer<typeof Classification>;
```

**3. Let v0 build the rest.**

```text
Build the persistence layer from lib/contracts/feedback.ts. Follow AGENTS.md exactly.

Drizzle schema and migrations:
- orgs, users, memberships (role: member | admin)
- feedback: id, org_id, body, source, email, sentiment, theme, severity, rationale,
  model_id, prompt_version, confidence, created_at. AI columns nullable — classification
  happens later and must never block submission.
- Index on (org_id, created_at desc) and on (org_id, theme).

Access layer:
- lib/db/scoped.ts exports withOrg(scope) returning the ONLY query interface in the app.
  Do not export the raw client. Type it so a query without an org scope fails at compile time.
- Add an ESLint rule banning imports of @neondatabase/serverless anywhere else.

Server action submit-feedback.action.ts: parse with FeedbackInput, insert, revalidate.
Replace the mock data on the inbox page with real queries.
Add a seed script: one org, two users, forty feedback items across all sources.

Done when: the inbox renders seeded rows, submitting adds one, and there is no code path
that reaches the database without an org scope.
```

> **Check it worked**
> Run `grep -r "@neondatabase/serverless" --include="*.ts" .` — it should match exactly one file. That's the whole tenancy guarantee.

> **Further reading**
> - [Postgres on Vercel](https://vercel.com/docs/postgres) — the current state of Postgres on the platform.
> - [Neon on the Vercel Marketplace](https://vercel.com/marketplace/neon) — branching, autoscaling, scale-to-zero, point-in-time recovery.
> - [Vercel Postgres transition guide](https://neon.com/docs/guides/vercel-postgres-transition-guide) — read this if you inherit a codebase using @vercel/postgres.
> - [Vercel Storage overview](https://vercel.com/docs/storage) — Blob, Global Config, Marketplace databases.
> - [Zod](https://zod.dev) — the contracts layer. Pay attention to `.brand()` and discriminated unions.

---

## Level 5 — Auth and multi-tenancy

*Intermediate · 30 min · after level 4*

> **By the end of this level**
> - Real sign-in with organisations and roles.
> - Middleware protecting routes, and server-side authorisation that doesn't trust the UI.
> - A public submission route that's safe to expose.

> **The rule worth internalising**
> Hiding a button is presentation. **Authorisation is a server-side predicate evaluated per action.** If your only protection is that the button isn't rendered, you don't have protection — you have a suggestion. Test it by calling the server action directly as the wrong role.

**1. Add auth.**

```text
Add authentication with organisation support.

- Middleware protecting everything except /sign-in and the public route /f/[orgSlug].
  Unauthenticated requests redirect with the original path preserved as a return URL.
- Derive OrgScope from the session on the server. Never accept an org id from the client —
  not from a query param, a header, or a form field.
- Role-aware nav: admins see Settings, members do not. Hiding it is presentation only;
  the route must also authorise server-side and render a forbidden state, not a redirect loop.
- lib/domain/authz.ts: pure predicates like canManageOrg(role) and canDeleteFeedback(role, item).
  No I/O. Unit test them.
- A public feedback form at /f/[orgSlug] with no auth — anyone can submit, nobody can read.

Done when: a member hitting /settings sees the forbidden state; calling an admin server action
as a member throws; and the public form writes to the correct org without any client-supplied id.
```

> **Check it worked**
> Sign in as a member, open devtools, and call the admin server action directly. It must throw. If it succeeds, your authorisation lives in the UI and you have a real bug.

> **Further reading**
> - [Next.js documentation](https://nextjs.org/docs) — middleware, server actions, and the App Router data model.
> - [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) — chapter 4 (access control) is the checklist behind this level.
> - [Neon RLS](https://neon.com/docs/guides/neon-rls) — row-level security as your second layer. Never your first.

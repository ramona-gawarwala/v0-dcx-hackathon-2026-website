# Foundations

## Level 0 — Setup, and the map of the territory

*Beginner · 15 min · no prerequisites*

> **By the end of this level**
> - You'll know what each Vercel product actually does, and when you'd reach for it.
> - You'll have accounts, a CLI, and a working local environment.
> - You'll know what app you're building for the next nine hours.

### The app: Signal

A product-feedback intelligence tool. People submit feedback, an AI classifies and clusters it, and an agent investigates a theme on demand — pulling related items, running analysis, and drafting a proposal that a human approves before anything is published. Every product below has a genuine reason to exist inside it, so you never learn a tool in the abstract.

### The map

Nine products, one line each. You don't need to remember these now — you'll meet each one at the level where it earns its place.

| Role | Product | What it does |
|---|---|---|
| Generate | v0 | Prompt-to-app. Sandbox runtime, imports your GitHub repo, opens real PRs. |
| Application | AI SDK v7 | The TypeScript layer for agents, tools, structured output, and typed UI streaming. |
| Route | AI Gateway | One key, hundreds of models, automatic fallback across providers. |
| Run | Fluid compute | The runtime under everything. You pay for CPU while code runs, not while it waits. |
| Execute | Sandbox | Disposable isolated VMs for code your model wrote and you don't trust. |
| Orchestrate | Workflows | `'use workflow'` — durable, resumable, retryable multi-step runs. |
| Store | Neon + Blob | Postgres via the Vercel Marketplace; Blob for files and images. |
| Protect | BotID | Invisible bot detection on the endpoints that cost you money. |
| Operate | Vercel Agent | Reviews your PRs against your repo's rules; investigates production anomalies. |

**1. Create the accounts.** A Vercel account (Hobby is fine for levels 0–7), a GitHub account, and access to [v0.app](https://v0.app). Sign into v0 with the same identity as Vercel so the projects link automatically.

**2. Install the tooling.**

```bash
node --version        # need 22 or later
npm i -g pnpm vercel  # package manager + Vercel CLI
vercel login
```

**3. Turn on AI Gateway.** In the Vercel dashboard, open **AI Gateway** and create a key. **Set a spend cap immediately** — before you write a single prompt. Every AI call in this lab routes through this one key, which means one bill, one dashboard, and automatic failover when a provider has a bad afternoon.

> **Check it worked**
> `vercel whoami` returns your username, and your AI Gateway dashboard shows a key with a spend limit attached. That's the whole of level 0.

> **Further reading**
> - [The AI Cloud: a unified platform for AI workloads](https://vercel.com/blog/the-ai-cloud-a-unified-platform-for-ai-workloads) — Vercel's own framing of how these products fit together.
> - [Vercel AI product index](https://vercel.com/ai) — the current surface area, in one page.
> - [AI SDK documentation](https://ai-sdk.dev) — the reference you'll keep open for levels 6 through 11.

---

## Level 1 — Your first v0 build

*Beginner · 20 min · after level 0*

> **By the end of this level**
> - You'll have generated a working UI from a prompt.
> - You'll know the six-part prompt structure that separates good output from re-rolls.
> - You'll know when to prompt and when to click instead.

### First, the wrong way — deliberately

Open v0 and type this. Actually do it; the contrast is the lesson.

```text
build a feedback dashboard, make it look modern
```

You'll get something. It will be plausible, generic, and different every time you run it — because you asked v0 to invent your data shape, your component choices, your empty states, and your definition of "modern".

### Now the same ask, specified

Six blocks: **data, layout, components, states, constraints, done-when**. Every prompt in this lab uses them.

```text
Build the feedback inbox for a product manager. In five seconds they must answer:
"what are people complaining about this week?"

DATA — the page receives exactly this:
type Feedback = {
  id: string
  body: string
  source: "email" | "support" | "review" | "survey"
  sentiment: "positive" | "neutral" | "negative"
  theme: string | null
  severity: 1 | 2 | 3 | 4 | 5
  createdAt: string   // ISO
}

LAYOUT — App Router page. Left: a filter rail (source, sentiment, severity range).
Centre: the feedback list. Right: a theme summary panel showing the top five themes
by volume with a count and a sentiment split bar.

COMPONENTS — shadcn/ui only: Card, Badge, Button, Input, Separator, ScrollArea, Skeleton, Alert.
Severity renders as a Badge with both a number and a word, never colour alone.

STATES — loading (skeleton cards matched to real card height), empty ("No feedback matches
these filters" plus a reset button), error (inline Alert with a retry), and 5,000 items
(virtualise the list, do not paginate).

CONSTRAINTS — no new dependencies. Tailwind theme tokens only, no hex values. Dates via
Intl.RelativeTimeFormat. Every control keyboard reachable with a visible focus ring.

DONE WHEN — filters actually filter, the theme panel recomputes from the filtered set,
all three states render from a prop I can toggle, and the build has zero TypeScript errors.
```

> **The 30-second rule**
> If writing the prompt took longer than thirty seconds, you did it right. That prompt is also your ticket, your PR description, and your test plan — nothing about it is wasted effort.

### Then stop prompting

Use **Design Mode** — the select tool — for anything visual: spacing, colour, copy, sizing. Prompting a padding change costs tokens, takes fifteen seconds, and risks v0 regenerating code that was already correct. Prompt for logic and structure; click for looks. This one habit will save you more time than any other in this lab.

> **Check it worked**
> Your filters change the list, the theme panel recomputes, and you can toggle the empty state. Now use Design Mode to change one badge colour without writing a prompt — that's the muscle memory you want.

> **Further reading**
> - [How to prompt v0](https://vercel.com/blog/how-to-prompt-v0) — Vercel's official prompting guidance; the six-block structure formalises this.
> - [v0 docs: Text Prompting](https://v0.app/docs/text-prompting) — canonical reference for what v0 does with your words.
> - [Maximizing outputs with v0](https://vercel.com/blog/maximizing-outputs-with-v0-from-ui-generation-to-code-creation) — Design Mode, iteration strategy, and when clicking beats prompting.
> - [v0 FAQs](https://v0.app/docs/faqs) — limits, billing, and the behaviours that surprise people in their first hour.

---

## Level 2 — Repo, pull requests, and your first deploy

*Beginner · 25 min · after level 1*

> **By the end of this level**
> - Your v0 work will live in a real GitHub repo with a real PR.
> - You'll have a live preview URL you can send to someone.
> - You'll understand the mental model that makes v0 safe to use on real code.

> **The mental model**
> **One v0 chat is one branch with a conversation attached.** Treat it exactly as you'd treat a feature branch — small scope, one concern, reviewable diff, then merge it or throw it away. Long chats accumulate contradictory instructions and produce diffs that argue with themselves.

**1. Push v0's output to GitHub.** In v0, open the **Git panel**. Create a repository, then create a branch for this chat. v0's sandbox runtime means what you're pushing has actually run — this isn't a preview snapshot, it's code that built.

**2. Clone and run it locally.**

```bash
git clone https://github.com/YOU/signal && cd signal
pnpm install
pnpm dev          # http://localhost:3000
```

**3. Link it to Vercel and deploy.**

```bash
vercel link       # connect this folder to a Vercel project
vercel            # deploy a preview
vercel --prod     # deploy to production
```

Or connect the GitHub repo in the Vercel dashboard, which is what you'll actually want: every push builds, every PR gets its own preview URL, and merging to main deploys production.

**4. Make one change through a PR.** Back in v0, ask for a small change — add a source filter for `"in-app"`. Then use the Git panel to **open a pull request** rather than pushing to main. Look at the diff. Look at the preview URL attached to the PR. This is the loop you'll use for the rest of the lab.

> **Never do this**
> Don't paste a credential into a prompt to "help it connect". Use Vercel's environment variable integration — v0 pulls env vars from the linked project automatically. A secret in a prompt is a secret in a chat history.

> **Check it worked**
> You have a PR open with its own preview URL, and opening that URL on your phone shows your app. Send it to someone. That's the moment this stops being a tutorial.

> **Further reading**
> - [Introducing the new v0](https://vercel.com/blog/introducing-the-new-v0) — sandbox runtime, GitHub import, the Git panel, and database integrations.
> - [Vercel CLI reference](https://vercel.com/docs/cli) — every command, including the ones worth aliasing.
> - [Environment variables](https://vercel.com/docs/environment-variables) — how env vars flow between the dashboard, the CLI, and v0.
> - [Deployment protection](https://vercel.com/docs/deployment-protection) — turn this on before you share a preview URL outside your team.

---

## Level 3 — Skills and the context layer

*Beginner · 30 min · highest leverage in the lab*

> **By the end of this level**
> - You'll have an `AGENTS.md` that every AI tool reads on every request.
> - You'll have built your first Skill — a design system that loads only when UI is being written.
> - Your prompts will get shorter and your output more consistent, permanently.

This is the level that changes everything downstream. Without it, every prompt has to re-specify your conventions, and you forget one under pressure. With it, the constraints live in the repo and every generation inherits them.

### Instructions vs Skills — the distinction that matters

| Type | Loaded | So it should be |
|---|---|---|
| AGENTS.md | Always, on every request | **Short.** Under ~200 lines. Stack, hard rules, definition of done. |
| Skill | On demand, when relevant | **As big as it needs to be.** Tokens, reference files, examples, scripts. |
| v0 instructions | Every v0 generation | Generation behaviour only — what to ask about, what never to touch. |

**1. Write AGENTS.md at the repo root.**

```md
# Signal — Agent Instructions

## Stack
Next.js App Router · TypeScript strict · Tailwind · shadcn/ui · Neon Postgres
AI SDK v7 via Vercel AI Gateway · Deployed on Vercel

## Architecture
- Layers: presentation → contracts → application → domain → persistence.
  A layer may only import from the layer below it.
- `lib/contracts/**` holds Zod schemas. Every boundary uses one. Never redeclare a shape inline.
- `lib/domain/**` is pure — no I/O, no framework imports.
- Server Components by default. Add "use client" only when a hook or handler requires it.

## Hard rules
1. TENANCY — all data access goes through `lib/db/scoped.ts`, which requires an org scope.
   Never import the database driver anywhere else.
2. WRITES — every mutation takes an idempotency key and runs in one transaction.
3. AI — model output is advisory. Store model id, prompt version, and confidence with every result.
4. RESILIENCE — every external call has a timeout, a bounded retry, and a documented degraded path.
5. DESIGN — no raw hex or arbitrary pixel values in components. Load the design-system skill
   before writing any UI.
6. A11Y — keyboard reachable, labelled, visible focus ring, 4.5:1 contrast, never colour alone.
7. SECRETS — never inline, never log, never echo back.

## Conventions
Files kebab-case · components PascalCase · server actions `*.action.ts`
Currency and dates via Intl · numerics right-aligned with tabular-nums
Every list surface implements loading, empty, error, and forbidden states.

## Definition of done
`pnpm typecheck && pnpm lint && pnpm build` all pass, every boundary has a Zod contract,
every new surface has all four states.

## When unsure
Ask before adding a dependency, changing the schema, or weakening a rule above.
Never silently work around a rule.
```

**2. Build your first Skill.** A skill is a folder. `SKILL.md` is the entry point; the rest loads only when the agent decides it needs the detail. This is how you keep 400 lines of design tokens out of every unrelated request.

```text
.claude/skills/design-system/
  SKILL.md              # entry point: when to use it, the rules, an index of the rest
  tokens.css            # the full token set - copy verbatim into globals.css
  components.md         # per-component conventions
  examples/
    feedback-card.tsx   # the canonical implementation everything else imitates
```

```md
---
name: design-system
description: Signal's design system — semantic tokens, type scale, density, component
  conventions, and accessibility rules. Use whenever creating or editing any UI: pages,
  components, styles, layouts, tables, forms, dialogs, or empty and error states.
---

# Signal Design System

## When to use
Any task that renders pixels. If you are writing JSX or CSS, this applies.

## Non-negotiables
1. Semantic tokens only. Never a raw hex or arbitrary pixel value in a component.
   Wrong: `className="bg-[#0a0a0a] p-[13px]"`   Right: `className="bg-surface p-3"`
2. One accent colour, used only for interactive and selected states — never decoration.
3. State is never colour alone. Pair every colour signal with a glyph or a label.
4. Density is a token: lists use --row-compact (36px), forms use --row-comfortable (44px).
5. Motion: 120ms for state, 200ms for surfaces, always behind a prefers-reduced-motion guard.
6. Focus is always visible: 2px ring in --focus, offset 2px.
7. Every surface has a designed loading, empty, error, and forbidden state.

## Reference files
- `tokens.css` — copy verbatim into app/globals.css. Change values here, never inline.
- `components.md` — read before building any component.
- `examples/feedback-card.tsx` — the canonical implementation. Match its structure.

## Before calling UI done
- [ ] Zero hardcoded colours or spacing
- [ ] Renders correctly in light and dark
- [ ] Keyboard reachable with a visible focus ring at every stop
- [ ] All four states implemented
- [ ] Contrast ≥ 4.5:1, touch targets ≥ 44px
- [ ] No layout shift when async content resolves
```

**3. Add v0 project instructions.**

```text
Read AGENTS.md at the repo root before every task and follow it exactly.
Load the design-system skill before writing any UI.

- One concern per chat. Do not refactor files unrelated to the request.
- Prefer editing existing files over creating new ones. No README unless asked.
- Use shadcn/ui primitives already in the repo. No new dependency without asking.
- After every change, run the build and fix type errors before reporting back.
- Ask first when a request is ambiguous about the data model, security, or an
  irreversible action. Everywhere else, pick the sensible default and say what you chose.
- End every response with two lines: what changed, and what I should verify.

Never without approval: change the schema, add an external service, touch auth or middleware.
```

> **Check it worked**
> Ask v0: *"Summarise the hard rules in AGENTS.md and tell me which skills you can see."* If it can't recite the tenancy rule and name the design-system skill, your context layer isn't loading — fix that before level 4.

> **Further reading**
> - [AGENTS.md — the open standard](https://agents.md/) — a cross-tool format stewarded by the Agentic AI Foundation under the Linux Foundation.
> - [agentsmd/agents.md on GitHub](https://github.com/agentsmd/agents.md) — the spec, plus real examples.
> - [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) — the SKILL.md format, frontmatter, and progressive disclosure.
> - [anthropics/skills](https://github.com/anthropics/skills) — open-source reference skills worth reading before writing your own.

# Production

## Level 12 — Runtimes, edge, and caching

*Advanced · 35 min · after level 11*

> **By the end of this level**
> - What actually changed with Edge, and what most tutorials still get wrong.
> - How to choose a runtime in 2026.
> - Caching that makes your public pages fast without going stale.

> **The thing most tutorials still get wrong**
> Standalone **Edge Functions were retired in June 2025**. The Edge runtime now runs on Vercel Functions under Fluid compute — same regions, same pricing model, without the old Web-API-only restrictions. Vercel's current guidance is to **migrate from Edge to Node for most workloads**. If a blog post tells you to add `export const runtime = 'edge'` to your AI route for speed, it's out of date.

### Choosing a runtime

| Runtime | Reach for it when | Trade-off |
|---|---|---|
| Node | **The default.** Full npm ecosystem, native modules, filesystem, longer-running work. Everything in this lab. | Slightly higher cold start than an isolate |
| Edge | Startup latency genuinely beats library support — lightweight redirects, geolocation, header rewriting, A/B assignment | Web-standard APIs only; many npm packages won't run |
| Middleware | Runs before every matched request: auth checks, redirects, rewrites. Keep it tiny — it's on every request's critical path. | Cost of slowness is multiplied by all traffic |

> **Why the calculus changed**
> Fluid compute's **Active CPU pricing** bills CPU while your code runs, not while it waits on I/O. Since agent work is mostly waiting on model responses, the cost argument that used to favour Edge largely evaporated. Choose your runtime on capability now, not on price.

```text
Add a caching strategy. Be explicit about every choice and comment why.

- Public /f/[orgSlug] form: fully static, revalidate every hour. It changes rarely and is
  hit by strangers.
- Public theme summary /themes/[slug]: ISR with revalidate 300, plus on-demand
  revalidateTag('themes') whenever a classification writes a theme. Fresh when it matters,
  cached when it doesn't.
- Authenticated inbox: never cached. Use noStore() explicitly rather than relying on
  a dynamic API accidentally opting you out — implicit is a bug waiting for a refactor.
- Middleware: auth check and org resolution only. Nothing that touches the database.
- Add Suspense boundaries so the shell streams immediately and slow panels fill in,
  each with a skeleton matched to real dimensions so nothing shifts.

Done when: the public page serves from cache and shows it in response headers; publishing a
theme busts its tag within seconds; and the authenticated inbox never serves stale data
to the wrong org.
```

> **Check it worked**
> Load the public page twice and check for a cache HIT in the response headers. Then classify a new item into that theme and confirm the page updates within seconds — cached and correct at the same time.

> **Further reading**
> - [Vercel Functions runtimes](https://vercel.com/docs/functions/runtimes) — the current, authoritative comparison.
> - [Edge runtime](https://vercel.com/docs/functions/runtimes/edge) — what it still does well, and its API surface.
> - [Fluid compute](https://vercel.com/docs/fluid-compute) — concurrency, instance reuse, and why cold starts stopped being the main story.
> - [Introducing Active CPU pricing](https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute) — the change that reframed Edge vs Node.
> - [Next.js caching](https://nextjs.org/docs/app/guides/caching) — the four caching layers and how they interact.

---

## Level 13 — Hardening, observability, and cost

*Advanced · 40 min · after level 12*

> **By the end of this level**
> - Bot protection and rate limits on the endpoints that cost you money.
> - Tracing where the run id *is* the trace id.
> - Cost attribution good enough to answer "why was Tuesday expensive?"

You have a public form that triggers an LLM call. That is a stranger's ability to spend your money, and it will be found.

```text
Harden the entry points.

ABUSE
- BotID on the public feedback form and sign-up. Invisible to real users.
- Rate limits: public form 5/min per IP, 100/day per org. Research runs 20/hour per org.
  Return 429 with a Retry-After header and render a clear inline message, not a toast
  that vanishes before it is read.

MODELS AND COST
- MODEL_TIERS config object, not inline strings scattered through the codebase:
    fast:  a small cheap model — classification, extraction, summarising
    smart: the frontier model — research synthesis, report drafting
- AI Gateway fallback chain: on 5xx or timeout, fall back to an equivalent model from a
  different provider. Log which model actually served each call.
- Record a usage_event per LLM call: model, inputTokenDetails split into cache-read and
  cache-write, outputTokenDetails, latency, org_id, run_id.
- Hard per-org monthly budget with a warning at 80%. Enforce it BETWEEN steps of a workflow,
  never only at the end.

OBSERVABILITY
- OpenTelemetry across workflow steps and LLM calls. Make run_id the trace id so a support
  ticket becomes a one-click lookup.
- Structured logs carrying org_id and run_id on every line. Scrub anything credential-shaped
  from logs and from stored prompts.

Then show me one SQL query that answers: cost per org, per model, for the last 7 days.
```

> **The cache-token split is not a detail**
> Cache reads can be an order of magnitude cheaper than cache writes. If your usage table lumps them together you cannot tell an expensive week from a badly-cached one. Store them separately from day one — you cannot backfill it.

> **Check it worked**
> Hit your public form eleven times in a minute and confirm you get a 429 with `Retry-After`. Then run the cost query and get real numbers back. If the numbers surprise you, that's the level doing its job.

> **Further reading**
> - [BotID](https://vercel.com/docs/botid) and [BotID: get started](https://vercel.com/docs/botid/get-started) — invisible bot protection; the integration is about ten lines.
> - [Bot management](https://vercel.com/docs/bot-management) — the wider picture, including the verified bot directory.
> - [Functions usage and pricing](https://vercel.com/docs/functions/usage-and-pricing) — Active CPU, provisioned memory, invocations.
> - [OpenTelemetry](https://opentelemetry.io/docs/) — traces, spans, and semantic conventions.

---

## Level 14 — Evals, and shipping it

*Advanced · 45 min · the last one*

> **By the end of this level**
> - An eval suite that turns "it feels worse" into a diff.
> - Vercel Agent reviewing your PRs against your own rules.
> - A production checklist and a runbook.

Without evals, every prompt change is a vibe and every model upgrade is a coin flip. This is the level that makes the previous fourteen maintainable.

```text
Build an eval suite for the classifier and the research agent.

FIXTURES — evals/fixtures/, 15 cases across three bands:
  easy         unambiguous complaints and unambiguous praise
  ambiguous    mixed sentiment, sarcasm, feature request phrased as a complaint
  adversarial  non-English, prompt injection ("ignore previous instructions and..."),
               10,000-character rants, empty-ish input, a duplicate of another fixture

GRADING — for each case:
  deterministic   schema validity, severity within range, theme length, cited ids exist
  judged          is the theme reusable? does the rationale quote the actual text?
                  is severity defensible? Use a DIFFERENT model as judge than the one
                  under test — a model grading itself is not an eval.

OUTPUT — a markdown scorecard with per-case pass/fail, a diff against the previous run,
and the token cost of the suite itself.

WIRING — a script I can run locally, plus a GitHub Action on any PR touching
lib/ai/, lib/agents/, lib/tools/, or prompts.

Done when: I can change one line of the classification prompt and see, in one command,
exactly which cases improved and which regressed.
```

**Turn on Vercel Agent.** In your project settings, enable **Vercel Agent** code review. It reads your repository's coding guidelines — including the `AGENTS.md` you wrote in level 3 — and reviews PRs against them, validating proposed fixes with your builds, tests, and linters. It also runs investigations on failed deployments, runtime errors, and cost anomalies. The same file that shaped your generations now powers your reviews.

### The production checklist

| Check | Verify in 30 seconds |
|---|---|
| Tenancy | `grep` for the DB driver import — exactly one file |
| Contracts | Every `z.object` lives in `lib/contracts` |
| Authorisation | Call one admin action as a member — it throws |
| Degradation | Break the Gateway key — submission still works |
| Approval | External recipient always gates; denial logs as normal |
| Sandbox | No VMs running after a failed analysis |
| Durability | Deploy mid-run — the run finishes |
| Budget | Cap enforced between steps, not after |
| Design | `grep` for `#` and `bg-[` outside globals — nothing |
| A11y | Unplug the mouse; submit feedback end to end |
| Tracing | Paste a run id into your tracer, get the full run |
| Secrets | Nothing credential-shaped in logs or stored prompts |

```text
Final pass, then report honestly.

1. Set deployment protection on preview environments. Confirm no route exposes a secret
   client-side.
2. Write docs/runbook.md covering the four most likely production failures: model provider
   outage, sandbox timeout storm, budget exhaustion mid-workflow, and classification backlog.
   For each: how it presents, how to confirm it, and the first action to take.
3. Write a threat model section: what an attacker gains by putting instructions inside a
   feedback submission, and what stops them — tool allowlist, no credentials in agent context,
   sandbox isolation, approval gate on anything that leaves the system.
4. Run typecheck, lint, tests, evals, and build. Fix everything that fails.
5. Open the PR. The description lists what changed, which AGENTS.md rules it exercises,
   what is explicitly not done, and five manual verification steps.

Then tell me plainly: what did you compromise on, and what would you fix first?
```

> **That last question**
> Models are consistently good at naming their own shortcuts when asked directly and given permission to. It's the cheapest code review available, and it usually surfaces the two things you'd otherwise discover in production.

> **You're done**
> You started by typing one sentence into v0. You now have a multi-tenant, authenticated, agentic application with sandboxed execution, durable workflows, human approval gates, evals in CI, cost attribution, and a runbook — running in production. That's the whole stack.

> **Further reading**
> - [Vercel Agent](https://vercel.com/docs/agent) — code review, investigations, and approved actions.
> - [Vercel Agent: code review](https://vercel.com/docs/agent/pr-review) — how it picks up your repository guidelines.
> - [Vercel Agent: investigations](https://vercel.com/docs/agent/investigation) — root-cause analysis on anomalies, failed deployments, and cost spikes.
> - [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) — the threat-model vocabulary security reviewers already know.

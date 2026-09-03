# Cheat sheet

## Cheat sheet

### Commands worth memorising

```bash
vercel env pull .env.local        # sync env vars from the linked project
vercel --prod                     # deploy to production
npx @ai-sdk/devtools@latest       # inspect every LLM call → localhost:4983
npx @ai-sdk/codemod upgrade v7    # migrate an older AI SDK project
```

### API changes that break old tutorials

| Old (pre-v5) | Current (AI SDK v7) |
|---|---|
| `useCompletion` from `'ai/react'` | `useChat` from `'@ai-sdk/react'` |
| `toDataStreamResponse()` | `createUIMessageStreamResponse({ stream: toUIMessageStream(...) })` |
| `openai('gpt-4o-mini')` | `'provider/model'` via AI Gateway |
| `generateObject()` | `Output.object()` on `generateText` / an agent |
| hand-rolled tool loop | `ToolLoopAgent` |
| `stopWhen: stepCountIs(n)` | `stopWhen: isStepCount(n)` |
| `useChat({ api })` | `useChat({ transport: new DefaultChatTransport({ api }) })` |
| `@vercel/postgres` | Neon via the Vercel Marketplace |
| `runtime = 'edge'` for speed | Node by default; both on Fluid compute |

### The six habits that made the difference

- **Six-block prompts** — data, layout, components, states, constraints, done-when. Every time.
- **Context layer first** — `AGENTS.md` and skills before code. It's why the prompts stayed short.
- **Contracts before code** — one Zod schema per boundary. The form, the DB, and the model cannot disagree.
- **`toModelOutput` always** — rich data to your app, cheap tokens to the model.
- **Design the failure** — every external call: timeout, retry, documented degraded path. Then test it.
- **Deterministic in code** — the model decides what to do. Never what a number is.

### Reference index

Primary sources only. The ecosystem changed enough between 2024 and 2026 that secondary material is often confidently out of date — when something here disagrees with a blog post, trust these.

**Generation — v0**
- [Introducing the new v0](https://vercel.com/blog/introducing-the-new-v0)
- [How to prompt v0](https://vercel.com/blog/how-to-prompt-v0)
- [v0 docs: Text Prompting](https://v0.app/docs/text-prompting)
- [Maximizing outputs with v0](https://vercel.com/blog/maximizing-outputs-with-v0-from-ui-generation-to-code-creation)

**Context layer — instructions and skills**
- [AGENTS.md](https://agents.md/)
- [agentsmd/agents.md](https://github.com/agentsmd/agents.md)
- [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [anthropics/skills](https://github.com/anthropics/skills)

**Application layer — AI SDK v7**
- [AI SDK introduction](https://ai-sdk.dev/docs/introduction) — the current release and its core surfaces.
- [Agents](https://ai-sdk.dev/docs/agents) · [Building agents](https://ai-sdk.dev/docs/agents/building-agents)
- [Tools and tool calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling)
- [Generating structured data](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data)
- [MCP tools](https://ai-sdk.dev/docs/ai-sdk-core/mcp-tools)
- [DevTools](https://ai-sdk.dev/docs/ai-sdk-core/devtools) · [Middleware](https://ai-sdk.dev/docs/ai-sdk-core/middleware)
- [Migration guides](https://ai-sdk.dev/docs/migration-guides)

**Platform — routing, runtime, execution**
- [AI Gateway](https://vercel.com/docs/ai-gateway) · [model list](https://vercel.com/ai-gateway/models)
- [Fluid compute](https://vercel.com/docs/fluid-compute) · [Active CPU pricing](https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute)
- [Runtimes](https://vercel.com/docs/functions/runtimes) · [Edge runtime](https://vercel.com/docs/functions/runtimes/edge)
- [Sandbox](https://vercel.com/sandbox)
- [Workflows](https://vercel.com/docs/workflows) · [durable agents](https://useworkflow.dev/docs/ai)
- [Functions usage and pricing](https://vercel.com/docs/functions/usage-and-pricing)

**Data, protection, operations**
- [Postgres on Vercel](https://vercel.com/docs/postgres) · [Neon](https://vercel.com/marketplace/neon) · [transition guide](https://neon.com/docs/guides/vercel-postgres-transition-guide)
- [Storage overview](https://vercel.com/docs/storage)
- [BotID](https://vercel.com/docs/botid) · [get started](https://vercel.com/docs/botid/get-started) · [bot management](https://vercel.com/docs/bot-management)
- [Deployment protection](https://vercel.com/docs/deployment-protection) · [environment variables](https://vercel.com/docs/environment-variables)
- [Vercel Agent](https://vercel.com/docs/agent) · [code review](https://vercel.com/docs/agent/pr-review) · [investigations](https://vercel.com/docs/agent/investigation)

**Correctness and security**
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
- [Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use)
- [Next.js caching](https://nextjs.org/docs/app/guides/caching) · [Zod](https://zod.dev) · [OpenTelemetry](https://opentelemetry.io/docs/)

*Progress in the original lab was stored per-browser. Every block above is copy-pasteable.*

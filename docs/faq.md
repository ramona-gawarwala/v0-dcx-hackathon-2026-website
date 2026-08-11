# FAQ

Quick answers, grouped by topic. Jump to a question below.

## Contents

**Getting started**
1. [Do I need to know how to code?](#1-do-i-need-to-know-how-to-code)
2. [Who is this for? Do I need to be a developer?](#2-who-is-this-for-do-i-need-to-be-a-developer)
3. [Do I need a team, or can I go solo?](#3-do-i-need-a-team-or-can-i-go-solo)
4. [What does it cost?](#4-what-does-it-cost)
5. [It's part-time over 2 weeks — how much time should I spend?](#5-its-part-time-over-2-weeks--how-much-time-should-i-spend)
6. [How finished does my project need to be?](#6-how-finished-does-my-project-need-to-be)

**Understanding the concepts**
7. [How does a generative AI app fit together?](#7-how-does-a-generative-ai-app-fit-together)
8. [What's a foundation model, and why are there different ones for images, video, and speech?](#8-whats-a-foundation-model-and-why-are-there-different-ones-for-images-video-and-speech)
9. [What makes something an "AI agent" (not just a chatbot)?](#9-what-makes-something-an-ai-agent-not-just-a-chatbot)
10. [What's the difference between an agent and a skill?](#10-whats-the-difference-between-an-agent-and-a-skill)
11. [What's a deterministic agent, and how is it different from an autonomous one?](#11-whats-a-deterministic-agent-and-how-is-it-different-from-an-autonomous-one)

**Building your app**
12. [Which AI model should I use?](#12-which-ai-model-should-i-use)
13. [Do I have to use the AI SDK?](#13-do-i-have-to-use-the-ai-sdk)
14. [If I use Vercel and v0, can I still use OpenAI, Anthropic, Google…?](#14-if-i-use-vercel-and-v0-can-i-still-use-openai-anthropic-google)
15. [Do I have to use Next.js or React?](#15-do-i-have-to-use-nextjs-or-react)
16. [Can I use GitHub Copilot or other AI tools to build?](#16-can-i-use-github-copilot-or-other-ai-tools-to-build)
17. [Can I ground the AI in my own documents or data?](#17-can-i-ground-the-ai-in-my-own-documents-or-data)
18. [How do I reduce the model's hallucinations?](#18-how-do-i-reduce-the-models-hallucinations)

**Rules & logistics**
19. [Can I start early or reuse an existing project?](#19-can-i-start-early-or-reuse-an-existing-project)
20. [Do I have to attend live or present in person?](#20-do-i-have-to-attend-live-or-present-in-person)

**Troubleshooting & deployment**
21. [My AI calls fail. Why?](#21-my-ai-calls-fail-why)
22. [My app works locally but breaks when deployed.](#22-my-app-works-locally-but-breaks-when-deployed)
23. [Can I host on GitHub Pages?](#23-can-i-host-on-github-pages)
24. [Why won't Vercel connect my company repo?](#24-why-wont-vercel-connect-my-company-repo)

---

## Getting started

### 1. Do I need to know how to code?

No. Start on **[v0.dev](https://v0.dev)** — describe your app and deploy it. See the [Beginner guide](beginner-guide.md).

### 2. Who is this for? Do I need to be a developer?

Everyone in the capability — not just engineers. Consultants, designers, product people, and domain experts all add value; the point is pairing *your* expertise with AI, not hand-writing code. Mixed teams (not all developers) tend to build the best products. New to it all? Start with the [Beginner guide](beginner-guide.md).

### 3. Do I need a team, or can I go solo?

Teams of **2–5** are encouraged — solo is allowed, but a team is more fun and usually ships more. No team yet? Post what you want to build and what you bring (dev, design, product, domain) in the team-forming channel, or we'll help group you at kickoff. See [How it works](how-it-works.md).

### 4. What does it cost?

**Nothing to take part**, and you can build a full project without paying — but it helps to know where money *could* come in.

Two separate meters:

- **Hosting** (running your app) — Vercel's free **Hobby** tier is plenty for a hackathon; mind its [limits](deployment-guide.md#recommended-vercel).
- **Model usage** (each AI call) — hosted models charge per **token** (roughly ¾ of a word), for both the text you send *in* and the text they generate *out*. Longer prompts and longer answers cost more.

Every major provider gives you a free way to start, then a pay-as-you-go paid tier:

| Option | Free to start? | How paid usage works |
|---|---|---|
| **[Vercel AI Gateway](https://vercel.com/docs/ai-gateway/pricing)** (the default here) | Yes — free credits + a [free-tier model list](https://vercel.com/ai-gateway/models?freeTier=true), rate-limited (`429` when you hit the cap) | pay the provider's list price with **zero markup** once you buy credits |
| **[Google Gemini API](https://ai.google.dev/gemini-api/docs/pricing)** | Yes — a genuinely free tier via [AI Studio](https://aistudio.google.com/) with generous limits | per-token once you upgrade (e.g. a `flash`-class model is cents per million tokens) |
| **[OpenAI](https://openai.com/api/pricing/)** | The **ChatGPT app** has a free tier; the **API** does not — it's **pay-as-you-go per token** (new accounts may get starter credits) | billed per model, per input/output token |

**Free / run-it-yourself alternatives** — open-weight models you can run locally at **no per-token cost** (you just need a capable machine):

- **[Ollama](https://ollama.com)** — one command to run open models like Llama, Gemma, or Mistral on your own laptop.
- **[Llama](https://www.llama.com)** (Meta) and **Gemma** (Google) — free, open-weight model families you can download and self-host.

Rule of thumb: **start on a free tier**, keep prompts lean (see [Which AI model should I use?](#12-which-ai-model-should-i-use)), and only add billing if you outgrow the free limits. Pricing changes often — always check the official pages linked above.

### 5. It's part-time over 2 weeks — how much time should I spend?

Whatever fits around your job. Deploy something small early, then improve it across the two weeks (1–14 September).

### 6. How finished does my project need to be?

Not very. A working demo of a small slice wins over an unfinished big idea — see [Judging](judging.md).

## Understanding the concepts

### 7. How does a generative AI app fit together?

**Generative AI** is the whole field — AI that *creates* content (text, images, audio, video). A gen AI app is built in layers, each relying on the one below:

| # | Layer | What it is | Example |
|---|---|---|---|
| 5 | **Application** | what users actually touch | ChatGPT, Copilot, **your hackathon app** |
| 4 | **Agent** | an LLM given **tools** and a **loop** so it can *do* things, not just talk | coding agent, research agent |
| 3 | **Platform** | serves, secures, and connects models to your app | **Vercel AI Gateway**, Vertex AI, Bedrock |
| 2 | **Model (LLM)** | the "brain" that predicts text from its training data | Gemini, GPT, Claude |
| 1 | **Infrastructure** | the raw compute the model runs on | GPUs / TPUs, servers, hosting |

Two things devs mix up:

- **Model vs brand** — Gemini, GPT, and Claude are all LLMs, just different brands. Swap between them with a one-line change via the [AI Gateway](https://vercel.com/docs/ai-gateway).
- **Agent vs model** — a model only *talks*; an agent *acts*. It's an app wrapped around a model with tools and a loop — the AI SDK calls agents ["LLMs that use tools in a loop"](https://ai-sdk.dev/docs/agents/overview).

**Where Vercel and v0 come in:** you only build the top. **Vercel** owns the bottom of the stack — hosting and compute (layer 1) plus model access through the AI Gateway (layers 2–3) — and **[v0](https://v0.dev)** turns your prompt straight into the application (layer 5). That frees you to focus on layers 4–5: the agent logic and the experience (see [You only build the top bit](beginner-guide.md#you-only-build-the-top-bit)).

### 8. What's a foundation model, and why are there different ones for images, video, and speech?

A **foundation model** is trained on a huge, broad dataset so it can be *adapted* to many tasks instead of one — the term was [coined by Stanford's CRFM](https://hai.stanford.edu/news/introducing-center-research-foundation-models-crfm) ("trained on broad data… that can be adapted to a wide range of downstream tasks"). **ChatGPT (GPT)**, **Gemini**, and **Claude** are all foundation models of the *large language model* kind — general-purpose text engines.

But no single model does everything well. Providers train **specialised models** for a specific input→output job, and you pick the one whose output matches your task. OpenAI's line-up is a clear example:

| You want | Model family | The job |
|---|---|---|
| Text in → text out (chat, reasoning, code) | **GPT** | general-purpose LLM |
| Text → **image** | **DALL·E / GPT Image** | generate or edit pictures from a description |
| Text → **video** | **Sora** | generate short video clips from a prompt |
| Speech → text | **Whisper** | transcribe audio |
| Text → speech | **TTS** | read text aloud in a natural voice |
| Text → **vector** | **Embeddings** | turn text into numbers for search & RAG |

Two takeaways: **match the model to the output you need** (don't ask a text model for a video), and the [AI SDK](https://ai-sdk.dev/docs/foundations/providers-and-models) / [AI Gateway](https://vercel.com/docs/ai-gateway) let you call these different model *types* through one interface. Full catalogue: [OpenAI models](https://platform.openai.com/docs/models).

### 9. What makes something an "AI agent" (not just a chatbot)?

Two things: a **reasoning loop** (it observes, plans, acts, then checks the result and repeats) and **tools** (actions it can take — search, query a database, call an API). A chatbot just replies; an agent decides what to do and does it. That's the 🍂 Harvest level in [Challenges](challenges.md). More: [AI SDK Agents](https://ai-sdk.dev/docs/agents/overview).

### 10. What's the difference between an agent and a skill?

An **agent** is the *who* — the AI that reasons and calls tools to reach a goal. A **skill** is the *how* — a reusable, self-contained set of steps the agent follows for one job, so it stays consistent. One agent can delegate to several skills. Files like `.agent.md` and `SKILL.md` are **coding-assistant customizations**: they shape tools like GitHub Copilot *while you build*, and aren't part of the app you ship. Official docs: [custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents) and [agent skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).

### 11. What's a deterministic agent, and how is it different from an autonomous one?

The difference is **who decides the steps** — your code, or the model.

- **Deterministic (a "workflow")** — you hard-code the path: step 1 → step 2 → step 3, with the model doing narrow jobs along the way. Same input, same route, so it's **predictable, consistent, and easy to test and debug** — but rigid. Reach for it when **rules and correctness matter**: enforcing constraints (a payment must be **ACID**-safe — all-or-nothing), or forcing the agent to answer **only from your approved documents**.
- **Autonomous (a "true agent")** — the model **decides its own next step and which tools to call, in a loop**, until the task is done. **Flexible** and great for open-ended work — drafting an email, researching a topic, exploring data — but **less predictable, pricier, and harder to trace**.

Anthropic draws the same line: *workflows* orchestrate models through predefined code paths, while *agents* let the model dynamically direct its own process → [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). The real trade-off is **control vs flexibility** → [AI SDK Workflow Patterns](https://ai-sdk.dev/docs/agents/workflows).

**Mix them in a multi-agent system.** Use the right style per job: a *deterministic* agent handles the **payment** (exact, auditable, rule-bound), while a *natural-language* agent **drafts the follow-up email** (tone and wording, where there's no single right answer).

You can also make each answer *more* deterministic by lowering the model's temperature — see [How do I reduce the model's hallucinations?](#18-how-do-i-reduce-the-models-hallucinations).

## Building your app

### 12. Which AI model should I use?

Match the model to the task — that's how you keep quality high and token cost low. Every model is a one-line swap via the **[AI Gateway](https://vercel.com/docs/ai-gateway)**, so start cheap and only move up if the output isn't good enough.

| Your task | Reach for | Why |
|---|---|---|
| Classify, extract, route, short rewrites, summarise | a **small / fast** model (`mini` · `flash` · `haiku` tier) | cheapest per token, near-instant — plenty for simple jobs |
| General chat, drafting, Q&A over your docs (RAG) | a **mid** model (`sonnet` · `flash-pro` · `gpt-mid` tier) | good quality at moderate cost |
| Hard reasoning, multi-step agents, tricky coding | a **frontier / reasoning** model (`opus` · `gpt-max` · `gemini-pro` tier) | strongest, but slowest and priciest — use only where it pays off |

Token-saving habits:

- **Plan with a strong model, then build with a cheaper one** — let a top reasoning model research the problem and lock a solid plan, then switch to a faster, cheaper model to implement it. This split is a proven pattern: see Aider's [Architect/Editor](https://aider.chat/2024/09/26/architect.html) and Cline's [Plan & Act](https://docs.cline.bot/features/plan-and-act).
- **Reasoning models "think" in extra tokens** — reserve them for genuinely hard problems.
- **Keep context lean** — pass only the relevant chunks (that's what RAG is for) and use prompt caching if your model supports it.

Model line-ups change monthly, so check a live comparison for current context windows, pricing, and strengths: [Artificial Analysis](https://artificialanalysis.ai/models) (intelligence vs cost vs speed, plus a training-data openness index) and [LLM Stats](https://llm-stats.com/models/compare) (side-by-side compare, filter by task).

### 13. Do I have to use the AI SDK?

No — it's the smoothest path, not a requirement. **[v0](https://v0.dev)** generates [AI SDK](https://ai-sdk.dev) code out of the box, and it pairs with the [AI Gateway](https://vercel.com/docs/ai-gateway) so you get one API across every provider and one-line model swaps. That portability is its main win.

If you'd rather go another way:

| Instead of the AI SDK | What it is | Trade-off |
|---|---|---|
| **Provider SDKs** (OpenAI, Anthropic, Google) | each provider's own official library | more direct control, but you're tied to that provider's API — swapping models means rewriting calls |
| **Raw `fetch` / REST** | call the provider's HTTP API yourself | zero dependencies, most boilerplate |
| **Orchestration frameworks** (LangChain.js, LlamaIndex.TS, Mastra) | heavier RAG / agent scaffolding | powerful, usually overkill for a hackathon slice |
| **Python SDKs** | the providers' Python libs (or the beta [Python AI SDK](https://ai-python.dev/)) | use if your backend is Python |

Rule of thumb: stick with the AI SDK for the cheap model-swapping, and only go direct if you need a specific provider feature the SDK doesn't expose yet.

### 14. If I use Vercel and v0, can I still use OpenAI, Anthropic, Google…?

Yes — they're not mutually exclusive, because they sit at different layers. **[v0](https://v0.dev)** builds your app and **Vercel** hosts it; neither is a model provider. Any provider (OpenAI, Anthropic, Google, and others) is just the *model* you plug in.

You've got three ways to use a given provider — OpenAI as the example:

1. **Through the [AI Gateway](https://vercel.com/docs/ai-gateway)** (default, cleanest) — set the model string (e.g. `openai/gpt-...`) and the Gateway routes to that provider. One key, and you swap providers with a one-line change.
2. **Bring Your Own Key (BYOK)** — plug your own provider key into the Gateway, [no markup](https://vercel.com/docs/ai-gateway/pricing).
3. **Call the provider directly** — skip the Gateway and use the provider's own SDK/API (you lose the easy model-swapping).

Bottom line: Vercel + v0 is the *build & host* layer; the provider is the *model* layer — using one doesn't rule out the other.

### 15. Do I have to use Next.js or React?

No, but it's the smoothest path. [v0](https://v0.dev) generates a **Next.js + React** app and [Vercel](https://vercel.com) hosts it with zero config, so going with the grain saves you setup. You can bring another framework if you host it somewhere that runs server-side code — you'll just do more of the plumbing yourself and lose some v0/Vercel shortcuts. For a two-week part-time build, stick with the default unless you have a strong reason.

### 16. Can I use GitHub Copilot or other AI tools to build?

Yes — it's encouraged. [GitHub Copilot](https://github.com/features/copilot) and similar assistants (Cursor, or just chatting with ChatGPT/Claude) help you write and understand code faster — that's separate from the AI *inside* your app. Learning to build this way is a core goal of the hackathon. One rule: keep confidential client data out of any external tool.

### 17. Can I ground the AI in my own documents or data?

Yes — that's the 🌿 Sprout level. A few related pieces work together:

- **RAG (retrieval-augmented generation)** — the core pattern: fetch the parts of *your* content relevant to a question and pass them to the model as context, so it answers from your data, not general knowledge. → [AI SDK RAG guide](https://ai-sdk.dev/docs/guides/rag-chatbot)
- **Guardrails** — keep it on the rails: a system prompt like *"only answer from the provided context; if it's not there, say 'I don't know'"*, schema-validated (Zod) outputs, and approval before any sensitive tool runs. → [Constrain agent behavior](https://ai-sdk.dev/docs/agents/building-agents) · [Tool approvals](https://ai-sdk.dev/docs/agents/tool-approvals)
- **Callbacks** — hook into each step (tool started/finished, step end) to log, check, or stop the run — handy for observability and catching bad output. → [Lifecycle callbacks](https://ai-sdk.dev/docs/ai-sdk-core/lifecycle-callbacks)

See also *Ask My Docs* and *Live Lookup* in [Challenges](challenges.md).

### 18. How do I reduce the model's hallucinations?

A **hallucination** is when the model states something false as if it were true — confident, plausible, and wrong. LLMs are *pattern predictors, not fact-checkers*: with no built-in "truth database" and no live sources, a vague prompt invites them to fill the gaps by guessing. You can't remove this entirely, but you can cut it sharply. The two biggest levers are **ground it** and **prompt it well**, plus verifying the result — Google's docs walk through the highest-impact one, [grounding](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview).

**1. Ground it in real sources — the biggest win.** [Grounding connects the model's output to verifiable data](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview) so it answers from facts instead of inventing them, and hands back citations you can check. In your app:

- **RAG** — retrieve the relevant chunks of your *own* content and pass them as context → [AI SDK RAG guide](https://ai-sdk.dev/docs/guides/rag-chatbot).
- **Live data via tools** — give the agent a tool (web search or an API) so it fetches *current* facts at question time instead of leaning on its training data, which may be out of date. Google offers this as [Grounding with Google Search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview); in the AI SDK you add it as a [tool](https://ai-sdk.dev/docs/foundations/tools).
- **Guardrails** — *"answer only from the provided context; if it's not there, say 'I don't know'"*, and schema-validate the output → [Constrain agent behavior](https://ai-sdk.dev/docs/agents/building-agents).
- **Callbacks** — hook each step to log, flag, or stop a bad answer before the user sees it → [Lifecycle callbacks](https://ai-sdk.dev/docs/ai-sdk-core/lifecycle-callbacks).

More on wiring this up: [Can I ground the AI in my own documents or data?](#17-can-i-ground-the-ai-in-my-own-documents-or-data)

**2. Prompt it well — free, do it every time.** [Prompt engineering](https://cloud.google.com/discover/what-is-prompt-engineering/) steers the model toward accurate answers. The techniques that most cut hallucination:

| Technique | Example |
|---|---|
| **Add constraints** | "Only answer if you're certain; cite a source where possible." |
| **Give it a role** | "You are a careful fact-checking assistant." |
| **Fix the output format** | "List each claim with the source it came from." |
| **Restrict to your data** | "Answer using only the document below." |
| **Say what to avoid** | "Don't guess or invent details — if unsure, say so." |
| **Add context + examples** | include the facts, plus a short example of a good answer (few-shot). |

**3. Tune the randomness to the task.** A model's **temperature** setting trades creativity for consistency:

- **Low temperature (near 0)** — focused, repeatable, more deterministic. Use it for facts, extraction, classification, and anything that must be reliable.
- **Higher temperature** — more varied and inventive, but more prone to drift. Use it for brainstorming, naming, or creative copy — where there's no single "right" answer.

For factual, client-facing answers, keep it low.

**4. Keep a human in the loop.** For finance, health, legal, or anything client-facing, treat AI output as a *draft to verify*, not gospel. Grounding and good prompts raise reliability; your judgement is the final check.

## Rules & logistics

### 19. Can I start early or reuse an existing project?

Build during the hackathon window (**1–14 September**) — it keeps things fair and it's where the learning happens. Bringing an idea, sketches, or a problem you want to solve is fine; starting from a codebase you wrote earlier isn't. Open-source libraries, templates, and v0's starters are fair game — everyone has those.

### 20. Do I have to attend live or present in person?

It's **part-time**, so you don't need to be online the whole time — build around your day job. Do try to catch the kickoff, and you'll share a short demo at the end: a screen recording works (see [Submit](submission.md)), with a demo day for anyone who can join live (see [Judging](judging.md)). Full schedule in [How it works](how-it-works.md).

## Troubleshooting & deployment

### 21. My AI calls fail. Why?

Work through the common causes in order:

- **Missing or wrong key** (the usual culprit) — confirm `AI_GATEWAY_API_KEY` is set in your env / Vercel project settings. See [AI SDK guide](ai-sdk-guide.md#get-a-model-key).
- **Bad model name** — the model string must match one the provider offers; check the [AI Gateway model list](https://vercel.com/docs/ai-gateway).
- **Rate limit or no credit** (HTTP 429) — you've hit the provider's free-tier cap; slow down or add billing.
- **Request too big** — too many tokens for the model's context window; trim the prompt or send fewer chunks.

Read the actual error the SDK throws — it tells you which of these it is. Wrap calls in `try/catch` per the [AI SDK error handling](https://ai-sdk.dev/docs/ai-sdk-core/error-handling) guide, and browse the [AI SDK troubleshooting](https://ai-sdk.dev/docs/troubleshooting) pages.

**If you call a provider directly** (e.g. OpenAI) instead of through the Gateway, use *their* docs — each has its own how-to-call guide and error reference, like [OpenAI's error codes](https://platform.openai.com/docs/guides/error-codes).

### 22. My app works locally but breaks when deployed.

Env vars aren't set on the host. Add them in the platform dashboard, then redeploy.

### 23. Can I host on GitHub Pages?

No — it's static only and can't run server-side AI routes. Use Vercel or another host in the [Deployment guide](deployment-guide.md).

### 24. Why won't Vercel connect my company repo?

The free **Hobby** plan can't connect to Git-org repos. Use a personal repo or a paid Team. See [Deployment guide](deployment-guide.md).

Didn't find your answer? See [Help](help.md).

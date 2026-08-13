# Challenges

Pick one. These are starting points, not rules — a scoped idea beats a big vague one.

Not sure what kind of thing to make? Start with [Project types](project-types.md).

Each challenge works for **any** project type — an app, an agent, a workflow, a dashboard, or an experience. It just needs to solve the problem and be demoable.

## Choose your runtime AI level (optional)

🌱 **Seed**, 🌿 **Sprout**, and 🍂 **Harvest** describe AI that runs inside your finished app. They are not an industry taxonomy, a maturity score, or judging bands. Choose the simplest level that solves the problem well — a sharp Seed beats a broken Harvest.

If AI helped you design, code, test, or deploy the project but the finished app makes no model call, that is still a valid **AI-assisted build**. Skip this ladder and say so in your demo.

| Level | Scope | What it means |
|---|---|---|
| 1 · 🌱 **Seed** | One prompt produces one useful response | A direct model call answers, summarises, rewrites, or generates. |
| 2 · 🌿 **Sprout** | It grounds a response or calls a tool | Approved documents, data, or an API provide real-world context. |
| 3 · 🍂 **Harvest** | It runs a bounded multi-step process | A code-controlled workflow or model-directed agent reaches a result. |

Start where you're comfortable. Move up only when the problem needs it and the simpler version already works.

### Add a modality (optional)

Voice, images, and video are input or output choices you can add at *any* level. They do not raise the level or score by themselves, so use one only when it improves the experience:

- 🎙️ **Voice** — accept spoken input or return a spoken response.
- 🖼️ **Images** — understand or create an image, screenshot, or diagram.
- 🎬 **Video** — analyse a clip, find key moments, or create a short video.

A text-only project can be stronger than a multimodal one. Pick what serves the user and the problem.

### See it in practice

The same idea grows as the AI does more. Take a **language-learning helper**:

| Level | What it does | The system is… |
|---|---|---|
| 🌱 Seed | Generates example sentences from a word | …returning one model response |
| 🌿 Sprout | Quizzes you on *your* vocab list | …grounding responses in supplied data |
| 🍂 Harvest | Plans a lesson, quizzes you, tracks progress | …running a bounded multi-step process |

Add a modality to any row — for example, speak your answers aloud — when it improves the experience.

## Quality bar for every level

Complexity is optional. Evidence, safe behaviour, and a working outcome are not.

- **Prove the outcome.** Demo one representative task from input to a result you can verify.
- **Test more than the happy path.** Try at least three cases, including one edge or failure case, and share what happened.
- **Make failure visible.** Show uncertainty, missing evidence, and tool errors instead of guessing or silently continuing.
- **Keep people in control.** Use public, dummy, or approved data and require approval before consequential actions.

## 🌱 Seed — AI answers or creates

You prompt it, it responds. The fastest way to a working demo, and perfect for first-timers. A sharp text tool belongs here proudly.

**Rewrite Helper**
**Problem:** A message, summary, or note takes too long to get right.
**Build:** An assistant that summarises, rewrites, translates, or reformats text.
**Done when:**
- [ ] It completes one clear job on a representative example.
- [ ] A first-time user can provide input and understand the result without extra instructions.

**Draft It**
**Problem:** Starting from a blank page is the hardest part.
**Build:** Generate a first draft — an email, a plan, a snippet — from a short brief.
**Done when:**
- [ ] A one-line brief produces a draft with the requested purpose, audience, and format.
- [ ] Changing one detail in the brief changes the draft in the expected way.

## 🌿 Sprout — AI uses evidence or a tool

Ground the model in approved documents or data, or let it call a tool/API for real-world context. Grounding and tool calling are different implementations, but both move beyond the model's general knowledge.

**Ask My Docs**
**Problem:** The answer is buried in documents nobody wants to read.
**Build:** Point it at your own docs and ask questions grounded in them.
**Done when:**
- [ ] Each answer cites or links to the source passage it used.
- [ ] It declines when the answer is not supported by the supplied content.

**Live Lookup**
**Problem:** A useful answer needs current or approved data the model does not have.
**Build:** Give the AI a tool — an API, a search, a database — it can call to fetch what it needs.
**Done when:**
- [ ] It calls an approved data source and shows when the result was retrieved.
- [ ] A failed or empty lookup produces a clear fallback instead of a made-up answer.

## 🍂 Harvest — AI completes a process

A bounded multi-step workflow or agent reaches a result, with visible progress, failure handling, and approval points where actions have consequences.

- In a **workflow**, code controls the path. Use one when the steps and branches are known in advance; it is easier to predict and test.
- In an **agent**, the model chooses the next action from runtime context. Under the [AI SDK definition](https://ai-sdk.dev/docs/agents/overview), it combines a model, tools, and a loop with stopping conditions.

Choose the workflow when it can solve the problem. Use an agent only when the route cannot be known in advance. Use multiple agents only when distinct tools, knowledge, security boundaries, or parallel work make one agent less reliable — not because more agents sound more advanced.

Whichever design you choose, cap steps, time, or retries; surface errors; and require explicit approval before the system sends, changes, deletes, spends, or publishes anything.

**Do It For Me**
**Problem:** A repetitive, multi-step task eats time that could go elsewhere.
**Build:** An agent or workflow that completes the task end to end.
**Done when:**
- [ ] One representative task reaches the intended result and exposes the steps taken.
- [ ] The run has a completion condition and a hard step, time, or retry limit.
- [ ] A failed step is reported and stops or follows a defined fallback.
- [ ] Any action that sends, changes, deletes, spends, or publishes waits for explicit approval.

**The Team Play**
**Problem:** One component cannot reliably finish a task that needs distinct skills, tools, or boundaries.
**Build:** A workflow or small set of specialised agents that hand off or combine work toward one result.

See the Multi-Agent [project type](project-types.md) for an architecture overview.
**Done when:**
- [ ] Each agent or step has a distinct responsibility with a defined input and output.
- [ ] The demo shows at least one handoff and how a failed handoff is handled.
- [ ] You can explain why one agent or a simpler workflow would be less reliable.
- [ ] The full run has a completion condition and a hard step, time, or retry limit.

## Tips that make it land

- **Pick a problem worth solving.** Go for a task that's slow *and* painful, not just frequent — a high-effort job often beats a high-volume trivial one. That's where the impact is.
- **Plan for when the AI is unsure.** Decide what happens if it can't answer: say "I don't know", offer a fallback, or hand off to a human. Don't let it guess.
- **Use data responsibly.** Demo with dummy or public data — never paste real customer data, secrets, or personal information into prompts or logs.

## Architecture references

- [AI SDK: Agents](https://ai-sdk.dev/docs/agents/overview), [workflow patterns](https://ai-sdk.dev/docs/agents/workflows), and [tool approvals](https://ai-sdk.dev/docs/agents/tool-approvals)
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Microsoft Azure Architecture Center: AI agent orchestration patterns](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns)
- [AWS Prescriptive Guidance: Agentic AI patterns and workflows](https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-patterns/introduction.html)

## Bring your own

Have a better idea? Go for it. Pick a level, keep it small enough to demo by Mon 14 Sep, and check it against the [judging criteria](judging.md).

## Why it's worth it

Everyone who takes part gets a **certificate of participation** and **personal feedback recorded on your SuccessFactors** — real evidence of your commitment to building and growing your skills.

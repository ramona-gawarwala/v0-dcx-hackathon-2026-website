# What to build

Not sure what to build? Pick a **type** first. It answers "what kind of thing am I making?" so you don't get stuck choosing tools.

These are simple patterns, not strict rules. Start from the one closest to your idea, then scope it small enough to demo.

## Two valid ways to use AI

**1. Build with AI — the shared baseline.** Use [v0](https://v0.app), GitHub Copilot, or another approved assistant to shape the idea, design, code, test, and deploy it. That is enough to participate. Your finished app may run entirely on normal code and data, with **no model key or model API call**.

**2. Build AI into the experience — optional.** Your running app can also call a model, ground responses in data, invoke tools, or run an agent. Add it only when it genuinely improves the experience — it is never required, and it does not measure how much AI helped you build.

This distinction appears in other official events:

- The [World's Largest Hackathon presented by Bolt](https://worldslargesthackathon.devpost.com/rules) required projects to be built primarily with Bolt.new; embedded voice or video AI belonged to optional challenge prizes.
- [NASA Space Apps](https://www.spaceappschallenge.org/resources/project-submission-guide/) permits AI tools to accelerate creation and asks teams to disclose their use, while judging the resulting project's impact, creativity, validity, relevance, and presentation.
- Product-specific events can set a different rule: Google's [Gemini API Developer Competition](https://ai.google.dev/competition) required apps built with the Gemini API, while Microsoft's [AI Agents Hackathon](https://microsoft.github.io/AI_Agents_Hackathon/) required an agent.

This hackathon supports **both** approaches.

Each type gives you three quick views — enough to start, not enough to overwhelm:

1. **User journey** — who the user is and what they're doing (for POs, BAs, designers).
2. **Solution architecture** — the major pieces (for developers, architects).
3. **Build checklist** — what you actually create (for everyone).

---

## Product Builder

**Goal:** solve a user problem with an app.

**Examples:** internal productivity tool · learning platform · accessibility solution · sustainability dashboard.

**1. User journey**

```
User → has a problem → uses the app → gets value
```

**2. Solution architecture**

```
User → Frontend → API → Database
```

**3. Build checklist**

- [ ] UI
- [ ] Business logic
- [ ] Data storage
- [ ] Deployment

**Tools:** v0 · Vercel · Supabase · AI SDK (optional).
**Good for:** Product Owners · BAs · Designers · Full-stack developers.

---

## AI Agent

**Goal:** an AI assistant that performs tasks.

This is a **conversational** agent: a model can use tools in a bounded loop to accomplish a task. A one-shot chatbot without tools is still a valid app, but it is not an agent under the AI SDK definition.

**Examples:** knowledge assistant · meeting assistant · documentation assistant · support chatbot.

**1. User journey**

```
User → asks for a result → agent chooses and uses tools → agent responds
```

**2. Solution architecture**

```
User → Agent → LLM → Tools / APIs
```

**3. Build checklist**

- [ ] Chat UI
- [ ] Model
- [ ] Prompt
- [ ] Tool(s)
- [ ] Deployment

**Tools:** v0 · AI SDK · AI Gateway (models from providers such as OpenAI, Anthropic, and Google).
**Good for:** Developers · AI enthusiasts.

---

## Workflow Automation

**Goal:** automate a business process.

This is a **deterministic workflow**: an event triggers predefined steps leading to an output. It can use ordinary rules, an AI step, or both; no conversation or model-directed loop is required.

**Examples:** ticket triage · email classification · report generation · approval workflows.

**1. User journey**

```
Trigger → process starts → rule or AI decision → action taken
```

**2. Solution architecture**

```
Trigger → Workflow → Rules / optional model → Action
```

**3. Build checklist**

- [ ] Trigger
- [ ] Workflow
- [ ] Rules or AI step
- [ ] Output action

**Tools:** v0 · Vercel · APIs · AI SDK (optional).
**Good for:** Developers · BAs · Process specialists.

---

## Multi-Agent System

**Goal:** multiple agents collaborate.

**Examples:** Product Owner Agent · Architect Agent · Developer Agent · Tester Agent.

**1. User journey**

```
User → task → specialists collaborate → result
```

**2. Solution architecture**

```
        Coordinator Agent
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
    Agent    Agent    Agent
```

**3. Build checklist**

- [ ] Coordinator
- [ ] Specialist agents
- [ ] Shared context
- [ ] Final response

**Good for:** advanced participants.
**Warning:** more complex than most teams expect — keep scope small.

---

## Data & Insights

**Goal:** help users understand data.

**Examples:** dashboards · analytics · AI insights · forecasting.

**1. User journey**

```
User → views dashboard → finds insight → makes decision
```

**2. Solution architecture**

```
Data Source → Processing → Dashboard
```

**3. Build checklist**

- [ ] Data source
- [ ] Processing
- [ ] Visualisation
- [ ] Deployment

**Tools:** React · Charts · Supabase · AI SDK (optional).
**Good for:** anyone working with data.

---

## Experience & Creativity

**Goal:** create something engaging.

**Examples:** games · interactive stories · visualisations · AI-powered experiences.

**1. User journey**

```
User → engages → interacts → enjoys / shares
```

**2. Solution architecture**

```
User → Interactive UI → Content / optional model
```

**3. Build checklist**

- [ ] Interactive UI
- [ ] Content or AI engine
- [ ] Content or assets
- [ ] Deployment

**Good for:** designers and anyone who wants to have fun with it.

---

## Industry inspiration

Every idea is stronger when it's rooted in a real problem. Each Capgemini industry campus on Degreed is full of segments you can borrow from — pick one, shrink it to a single useful slice, and build that.

Browse the [industry campuses on Degreed](https://capgemini.degreed.com/) for sparks.

## Quality bar

Complexity is optional. Evidence, safe behaviour, and a working outcome are not.

- **Prove the outcome.** Demo one representative task from input to a result you can verify.
- **Test more than the happy path.** Try at least three cases, including one edge or failure case, and share what happened.
- **Make failure visible.** Show uncertainty, missing evidence, and tool errors instead of guessing or silently continuing.
- **Keep people in control.** Use public, dummy, or approved data and require approval before consequential actions.

## Bring your own

Have a better idea? Go for it. Keep it small enough to demo and check it against the [judging criteria](judging.md).

## Why it's worth it

Everyone who takes part gets a **certificate of participation** and **personal feedback recorded on your SuccessFactors** — real evidence of your commitment to building and growing your skills.

---

Picked a type? Start with the [Quick Start](quick-start.md).

# Project types

Not sure what to build? Pick a **type** first. It answers "what kind of thing am I making?" so you don't get stuck choosing tools.

These are simple patterns, not strict rules. Start from the one closest to your idea, then scope it small enough to demo.

## Two valid ways to use AI

**1. Build with AI — the shared baseline.** Use [v0](https://v0.app), GitHub Copilot, or another approved assistant to shape the idea, design, code, test, and deploy it. That is enough to participate. Your finished app may run entirely on normal code and data, with **no model key or model API call**.

**2. Build AI into the experience — optional.** Your running app can also call a model, ground responses in data, invoke tools, or run an agent. The [Seed, Sprout, and Harvest](challenges.md#choose-your-runtime-ai-level-optional) labels describe only this runtime AI depth. They do not measure how much AI helped you build.

This distinction appears in other official events:

- The [World's Largest Hackathon presented by Bolt](https://worldslargesthackathon.devpost.com/rules) required projects to be built primarily with Bolt.new; embedded voice or video AI belonged to optional challenge prizes.
- [NASA Space Apps](https://www.spaceappschallenge.org/resources/project-submission-guide/) permits AI tools to accelerate creation and asks teams to disclose their use, while judging the resulting project's impact, creativity, validity, relevance, and presentation.
- Product-specific events can set a different rule: Google's [Gemini API Developer Competition](https://ai.google.dev/competition) required apps built with the Gemini API, while Microsoft's [AI Agents Hackathon](https://microsoft.github.io/AI_Agents_Hackathon/) required an agent.

This hackathon supports **both** approaches. The idea ladders below say when runtime AI is core, optional, or unnecessary.

Each type gives you three quick views — enough to start, not enough to overwhelm:

1. **User journey** — who the user is and what they're doing (for POs, BAs, designers).
2. **Solution architecture** — the major pieces (for developers, architects).
3. **Build checklist** — what you actually create (for everyone).

---

## 🚀 Product Builder

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

**Idea ladder**

| Stage | Idea | Runtime AI |
|---|---|---|
| Start simple | **Handoff board** — Pass work between teammates with an owner, status, next action, and due date. | No model call needed |
| Go further | **Accessibility rehearsal** — Choose a user need, then walk through a task with focused checks and prompts. | Runtime AI optional |
| Creative stretch | **Reverse onboarding** — New joiners capture confusing moments; teams turn repeated friction into trackable fixes. | Runtime AI optional |

---

## 🤖 AI Agent

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

**Idea ladder**

| Stage | Idea | Runtime AI |
|---|---|---|
| Start simple | **Source scout** — Search approved sources, answer with citations, and stop when evidence is missing. | Runtime AI core |
| Go further | **Meeting follow-through agent** — Read sample notes, check a mock task board, ask for missing details, and draft updates for approval. | Runtime AI core |
| Creative stretch | **Scenario rehearsal agent** — Role-play a stakeholder, use a scoring tool to adapt to choices, then run a rubric-based debrief. | Runtime AI core |

---

## 🔄 Workflow Automation

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

**Idea ladder**

| Stage | Idea | Runtime AI |
|---|---|---|
| Start simple | **Request-to-brief** — Validate a form, format the answers into a standard brief, and store the result. | No model call needed |
| Go further | **Triage with confidence** — Classify sample requests, route confident matches, and send uncertain ones to a person. | Runtime AI core |
| Creative stretch | **Meeting-to-momentum** — Turn sample notes into decisions and actions, pause for approval, then publish a digest. | Runtime AI core |

---

## 🤖🤖 Multi-Agent System

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

**Idea ladder**

| Stage | Idea | Runtime AI |
|---|---|---|
| Start simple | **Maker + checker** — One agent drafts with a template tool; another checks a clear rubric; the loop stops after two revisions. | Runtime AI core |
| Go further | **Research desk** — A source finder, analyst, and fact-checker hand off work to produce one cited briefing. | Runtime AI core |
| Creative stretch | **Incident rehearsal room** — Specialist agents inspect mock logs and status tools under human direction, then create a postmortem. | Runtime AI core |

---

## 📊 Data & Insights

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

**Idea ladder**

| Stage | Idea | Runtime AI |
|---|---|---|
| Start simple | **Team pulse explorer** — Load sample survey data, filter groups, and chart how responses change over time. | No model call needed |
| Go further | **What changed?** — Compare two periods, reveal the largest shifts, and let users annotate likely causes. | Runtime AI optional |
| Creative stretch | **Decision replay** — Scrub through a project timeline and reveal only the signals available at each moment. | Runtime AI optional |

---

## 🎨 Experience & Creativity

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

**Idea ladder**

| Stage | Idea | Runtime AI |
|---|---|---|
| Start simple | **One-minute quiz show** — Use AI while building the questions and visual assets, then run a polished interactive game. | No model call needed |
| Go further | **Choice-reactive story** — Let decisions reshape the scene, sound, characters, and ending in real time. | Runtime AI optional |
| Creative stretch | **Future postcard wall** — Visitors add text, sketches, or voice; the experience remixes them into a shared live exhibit. | Runtime AI optional |

---

Picked a type? Turn it into a scoped idea in [Challenges](challenges.md), then start with the [Beginner guide](beginner-guide.md).

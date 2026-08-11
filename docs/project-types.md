# Project types

Not sure what to build? Pick a **type** first. It answers "what kind of thing am I making?" so you don't get stuck choosing tools.

These are simple patterns, not strict rules. Start from the one closest to your idea, then scope it small enough to demo.

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

---

## 🤖 AI Agent

**Goal:** an AI assistant that performs tasks.

This is a **conversational** agent: it understands what you ask, reasons about it, and replies — calling a tool when it needs to fetch or do something.

**Examples:** knowledge assistant · meeting assistant · documentation assistant · support chatbot.

**1. User journey**

```
User → asks a question → agent reasons → agent responds
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

**Tools:** v0 · Vercel AI SDK · AI Gateway (OpenAI, Anthropic, Google…).
**Good for:** Developers · AI enthusiasts.

---

## 🔄 AI Workflow Automation

**Goal:** automate a business process.

This is a **workflow** agent: an event triggers it, and it runs a set series of steps to an output — no conversation needed.

**Examples:** ticket triage · email classification · report generation · approval workflows.

**1. User journey**

```
Trigger → process starts → AI decision → action taken
```

**2. Solution architecture**

```
Trigger → Workflow → LLM → Action
```

**3. Build checklist**

- [ ] Trigger
- [ ] Workflow
- [ ] AI step
- [ ] Output action

**Tools:** AI SDK · Vercel · APIs.
**Good for:** Developers · BAs · Process specialists.

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

**Tools:** React · Charts · AI SDK · Supabase.
**Good for:** anyone working with data.

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
User → Interactive UI → AI / Content Engine
```

**3. Build checklist**

- [ ] Interactive UI
- [ ] AI / content engine
- [ ] Content or assets
- [ ] Deployment

**Good for:** designers and anyone who wants to have fun with it.

---

Picked a type? Turn it into a scoped idea in [Challenges](challenges.md), then start with the [Beginner guide](beginner-guide.md).

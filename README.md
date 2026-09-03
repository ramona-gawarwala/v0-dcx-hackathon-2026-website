# DCX AI Playground Hackathon 2026

Build and ship an app with AI over **2 weeks (7 September – 21 September 2026)**, part-time, using **[v0](https://v0.app)** + **[Vercel](https://vercel.com)**. Open to everyone — engineers, POs, BAs, designers, and first-timers.

Every team uses AI to help shape, design, code, test, or deploy the project. Putting AI inside the finished app is optional — you do not need a model key or model API call to participate.

**New here? Start with [How it works](docs/how-it-works.md).**

Quick links: [How it works](docs/how-it-works.md) · [What to build](docs/project-types.md) · [Submit](docs/submission.md) · [Judging](docs/judging.md) · [FAQ](docs/faq.md)

This repo holds **both** the hackathon documentation and the event website (a Next.js app deployed on Vercel). See [The website](#the-website) below.

---

## Start building in 5 minutes

No local install needed for the browser-based path.

1. Go to **[v0.app](https://v0.app)** and describe what you want to build.
2. Click **Deploy**, complete any account prompts, and open the resulting Vercel URL.
3. Keep iterating in v0 (or open in your editor) until it's demo-ready.

That's your working app. Everything else is optional.

## Run locally (optional)

Only if you want to edit code directly.

```bash
git clone https://github.com/ramona-gawarwala/v0-dcx-hackathon-2026-website.git
cd v0-dcx-hackathon-2026-website
pnpm install
cp .env.example .env.local   # add your keys
pnpm dev                     # http://localhost:3000
```

You need [Node.js 20.9+](https://nodejs.org) and [pnpm](https://pnpm.io) to run this website. The current AI SDK v7 quickstart requires Node.js 22+. Never commit `.env.local`.

---

## Not sure what to build?

Pick a **project type** first — it answers "what kind of thing am I making?" so you don't get stuck choosing tools. Full patterns, tools, and who each suits: **[Project types](docs/project-types.md)**.

| Type | Goal | Good for |
|---|---|---|
| Product Builder | Solve a user problem with an app | POs, BAs, designers, full-stack devs |
| AI Agent | An assistant that performs tasks | Developers, AI enthusiasts |
| Workflow Automation | Automate a business process | Developers, BAs, process specialists |
| Multi-Agent System | Multiple agents collaborate | Advanced participants |
| Data & Insights | Help users understand data | Anyone working with data |
| Experience & Creativity | Build something engaging | Designers, anyone having fun |

---

## Everything you need

| I want to… | Go to |
|---|---|
| Understand the format, teams, and schedule | [How it works](docs/how-it-works.md) |
| Build my first app (no experience) | [Quick Start](docs/quick-start.md) |
| Pick something to build | [What to build](docs/project-types.md) |
| Add runtime AI to my app (optional) | [AI SDK guide](docs/ai-sdk-guide.md) |
| Get my app live | [Deployment guide](docs/deployment-guide.md) |
| Browse curated links | [Resources](resources/README.md) |
| Submit my project | [Submit](docs/submission.md) |
| Know how I'll be scored | [Judging](docs/judging.md) |
| Get unstuck | [FAQ](docs/faq.md) · [Resources](resources/README.md) |

Be kind: [Code of Conduct](docs/CODE_OF_CONDUCT.md).

Browse the full, organised **[documentation index](docs/README.md)**.

---

## The website

The event website lives in this same repo — a [Next.js](https://nextjs.org) app built with [v0](https://v0.app) and deployed on Vercel. It renders the content above for participants.

- **App code:** [`app/`](app/), [`components/`](components/), [`lib/`](lib/)
- **Content source:** [`lib/content.ts`](lib/content.ts) and [`lib/faq.ts`](lib/faq.ts) — keep these in sync with the markdown in [`docs/`](docs/).

### Develop the site

```bash
pnpm install
pnpm dev     # http://localhost:3000
```

This repository is linked to a [v0](https://v0.app) project. Use the current Git controls in that project to sync changes with this repo. Because this Vercel project tracks `main` as its production branch, merges to `main` create production deployments.

[Continue working on v0 →](https://v0.app/chat/projects/prj_9agUHEjhrViIr4wKEDmNnUbpgnTE)

For organizers maintaining the docs, see [CONTRIBUTING](docs/CONTRIBUTING.md).

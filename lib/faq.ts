import type { FaqGroup } from '@/components/faq-accordion'

// Links to the full guides, served on-site under /guides.
const doc = (slug: string) => `/guides/${slug}`

export const faqGroups: FaqGroup[] = [
  {
    group: 'Getting started',
    items: [
      {
        q: 'Do I need to know how to code?',
        a:
          'No. Start on [v0.dev](https://v0.dev) — describe your app and deploy it. The [Beginner guide](' +
          doc('beginner-guide') +
          ') walks you through your first live app before you write real code.',
      },
      {
        q: 'Who can join? Do I need to be a developer?',
        a:
          'Every DCX staff member is welcome — whatever your role, you don\u2019t need to be a developer or have an AI background. Consultants, designers, product, delivery, and domain experts all add value; the point is pairing your expertise with AI, not hand-writing code, and mixed teams tend to build the best products. New to it all? Start with the [Beginner guide](' +
          doc('beginner-guide') +
          ').',
      },
      {
        q: 'Do I need to register, and by when?',
        a: 'Yes — sign up before the kickoff on 1 September. Registration closes when the hackathon starts, so anyone who registers after 1 September rolls into the next hackathon we run, not this one. Grab your spot early, and if you don\u2019t have a team yet, post in the team-forming channel (see [How it works](/how-it-works)).',
      },
      {
        q: 'Do I need a team, or can I go solo?',
        a: 'Teams of 2–5 are encouraged — solo is allowed, but a team is more fun and usually ships more. No team yet? Post what you want to build and what you bring in the team-forming channel, or we’ll help group you at kickoff. See [How it works](/how-it-works).',
      },
      {
        q: 'What does it cost?',
        a: 'Nothing to take part — it\u2019s free to join whether you enter solo or as a team (2–5 people), and you can build a full project without paying. Hosting is free on Vercel\u2019s [Hobby tier](https://vercel.com/docs/limits). Model usage is charged per token, but every major provider has a free tier to start on — the [Vercel AI Gateway](https://vercel.com/docs/ai-gateway/pricing) (free credits, zero markup) and [Google\u2019s Gemini API](https://ai.google.dev/gemini-api/docs/pricing), or run open models free with [Ollama](https://ollama.com). Keep prompts lean and only add billing if you outgrow the limits.',
      },
      {
        q: 'What sort of time commitment would it need?',
        a: 'It\u2019s part-time and self-paced — there\u2019s no minimum number of hours and no full days blocked out. Fit it around your job across the two weeks (1–14 September): deploy something small early, then improve it in the spare time you have. Even a few focused hours can produce a demoable app. The only fixed moments are the kickoff and the final demo.',
      },
      {
        q: 'How finished does my project need to be?',
        a: 'Not very. A working demo of a small slice wins over an unfinished big idea. Aim to demo ~25% of the big idea, done well. See [Judging](/judging).',
      },
    ],
  },
  {
    group: 'Understanding the concepts',
    items: [
      {
        q: 'How does a generative AI app fit together?',
        a: 'It is built in layers: infrastructure (compute), the model (the LLM brain), the platform that serves it (e.g. the [AI Gateway](https://vercel.com/docs/ai-gateway)), an optional agent layer (a model given tools and a loop — the AI SDK calls these ["LLMs that use tools in a loop"](https://ai-sdk.dev/docs/agents/overview)), and the application users touch. With [Vercel](https://vercel.com) + [v0](https://v0.dev) you only build the top — the agent logic and the experience.',
      },
      {
        q: 'What\u2019s a foundation model, and why are there different ones for images, video, and speech?',
        a: 'A foundation model is trained on broad data so it can be adapted to many tasks. No single model does everything well, so providers train specialised models per input→output job (text, image, video, speech-to-text, text-to-speech, embeddings). Match the model to the output you need, and call them all through one interface with the [AI SDK](https://ai-sdk.dev/docs/foundations/providers-and-models) / [AI Gateway](https://vercel.com/docs/ai-gateway). Full catalogue: [OpenAI models](https://platform.openai.com/docs/models).',
      },
      {
        q: 'What makes something an "AI agent" (not just a chatbot)?',
        a: 'Two things: a reasoning loop (observe, plan, act, check, repeat) and tools (actions it can take — search, query a database, call an API). A chatbot just replies; an agent decides what to do and does it. That’s the Harvest level in [Challenges](/challenges). More: [AI SDK Agents](https://ai-sdk.dev/docs/agents/overview).',
      },
      {
        q: 'What\u2019s the difference between an agent and a skill?',
        a: 'An agent is the who — the AI that reasons and calls tools to reach a goal. A skill is the how — a reusable, self-contained set of steps the agent follows for one job. One agent can delegate to several skills. Files like `.agent.md` and `SKILL.md` are coding-assistant customizations: see [custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents) and [agent skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).',
      },
      {
        q: 'What\u2019s a deterministic agent, and how is it different from an autonomous one?',
        a: 'The difference is who decides the steps. A deterministic "workflow" hard-codes the path — predictable, consistent, easy to test — great when rules and correctness matter. An autonomous "true agent" lets the model choose its own next step and tools in a loop — flexible for open-ended work, but less predictable and pricier. Anthropic draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents); see also [AI SDK Workflow Patterns](https://ai-sdk.dev/docs/agents/workflows). Mix them per job in a multi-agent system.',
      },
    ],
  },
  {
    group: 'Building your app',
    items: [
      {
        q: 'Which AI model should I use?',
        a: 'Match the model to the task. Use a small/fast model (mini · flash · haiku) for classify, extract, and short rewrites; a mid model (sonnet · flash-pro) for chat, drafting, and RAG; and a frontier/reasoning model (opus · gpt-max · gemini-pro) only for hard reasoning and multi-step agents. Every model is a one-line swap via the [AI Gateway](https://vercel.com/docs/ai-gateway), so start cheap and climb only if needed. Compare current models on [Artificial Analysis](https://artificialanalysis.ai/models) and [LLM Stats](https://llm-stats.com/models/compare).',
      },
      {
        q: 'Do I have to use the AI SDK?',
        a: 'No — it\u2019s the smoothest path, not a requirement. [v0](https://v0.dev) generates [AI SDK](https://ai-sdk.dev) code out of the box and it pairs with the [AI Gateway](https://vercel.com/docs/ai-gateway) for one-line model swaps. Alternatives include provider SDKs, raw fetch/REST, orchestration frameworks ([LangChain](https://js.langchain.com), [LlamaIndex](https://ts.llamaindex.ai), [Mastra](https://mastra.ai)), or Python SDKs.',
      },
      {
        q: 'If I use Vercel and v0, can I still use OpenAI, Anthropic, Google…?',
        a: 'Yes. [v0](https://v0.dev) builds your app and [Vercel](https://vercel.com) hosts it; neither is a model provider. Any provider is just the model you plug in — through the [AI Gateway](https://vercel.com/docs/ai-gateway) (default), [bring-your-own-key](https://vercel.com/docs/ai-gateway/pricing), or by calling the provider directly.',
      },
      {
        q: 'Do I have to use Next.js or React?',
        a: 'No, but it\u2019s the smoothest path. [v0](https://v0.dev) generates a Next.js + React app and [Vercel](https://vercel.com) hosts it with zero config. You can bring another framework if you host it somewhere that runs server-side code — you\u2019ll just do more plumbing yourself.',
      },
      {
        q: 'Can I use GitHub Copilot or other AI tools to build?',
        a: 'Yes — it\u2019s encouraged. [GitHub Copilot](https://github.com/features/copilot) and similar assistants help you write and understand code faster; that\u2019s separate from the AI inside your app. One rule: keep confidential client data out of any external tool.',
      },
      {
        q: 'Is there a starter template or repo I can build from?',
        a: 'Yes — you rarely need a blank page. Either describe your app to [v0](https://v0.dev) and it generates a working Next.js + AI SDK app, or clone an open-source template. Vercel\u2019s [Chatbot](https://vercel.com/templates/next.js/chatbot) ([source](https://github.com/vercel/chatbot)) is the flagship: free, open-source, Next.js + AI SDK + AI Gateway, one-click deploy with chat history and auth built in. For "chat with our docs" ideas, use the [Internal Knowledge Base (RAG)](https://vercel.com/templates/next.js/ai-sdk-internal-knowledge-base) template. More in the [AI SDK guide](' +
          doc('ai-sdk-guide') +
          ') and the [full gallery](https://vercel.com/templates?type=ai).',
      },
      {
        q: 'What do I need to get set up?',
        a: 'Not much. Sign in to [v0](https://v0.dev) and [Vercel](https://vercel.com) with your GitHub account, and create an AI Gateway key for model access. You can build and deploy entirely in the browser with v0 — nothing to install. To work locally instead, you need Node 20+ and pnpm, then `pnpm install` and `pnpm dev`. Full walkthrough: [AI SDK guide](' +
          doc('ai-sdk-guide') +
          ') and [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'Can I ground the AI in my own documents or data?',
        a: 'Yes — that’s the Sprout level. Use [RAG](https://ai-sdk.dev/docs/guides/rag-chatbot) to fetch the relevant parts of your content and pass them as context, add [guardrails](https://ai-sdk.dev/docs/agents/building-agents) ("only answer from the provided context; if it’s not there, say I don’t know"), and use [callbacks](https://ai-sdk.dev/docs/ai-sdk-core/lifecycle-callbacks) to log or stop bad output. See Ask My Docs and Live Lookup in [Challenges](/challenges).',
      },
      {
        q: 'How do I reduce the model\u2019s hallucinations?',
        a: 'The biggest wins: [ground it](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview) in real sources ([RAG](https://ai-sdk.dev/docs/guides/rag-chatbot) or live-data tools) so it answers from facts and can cite them; [prompt it well](https://cloud.google.com/discover/what-is-prompt-engineering/) (add constraints, give it a role, fix the output format, say what to avoid); tune the temperature down for factual tasks; and keep a human in the loop for anything client-facing.',
      },
    ],
  },
  {
    group: 'Rules & logistics',
    items: [
      {
        q: 'How is it structured — do I join a daily session, or am I with my team all day?',
        a: 'Neither. There\u2019s no daily meeting to attend and no all-day commitment. You and your team work in your own time across the two weeks, at whatever pace suits you. The only shared moments are the kickoff (team formation and a quick brief) and the demo at the end; in between, mentors are on hand in the team channel whenever you get stuck. Coordinate with your teammates however you like — a short daily check-in helps, but it\u2019s up to you.',
      },
      {
        q: 'Who owns what I build?',
        a: 'You and your team keep your work and can carry on building after the event — that\u2019s encouraged. Treat what you ship as a learning prototype: anything you\u2019d take further for real client or production use still goes through your normal company review. Standard DCX IP and confidentiality policies apply to anything work-related.',
      },
      {
        q: 'Can I use real client or company data?',
        a: 'No — use sample, synthetic, or public data instead. Keep confidential client information and personal data (PII) out of your prompts, your app, and any external AI tool. To make the AI answer from your content, use a small, non-sensitive sample with [RAG](https://ai-sdk.dev/docs/guides/rag-chatbot). When in doubt, leave it out.',
      },
      {
        q: 'Are my prompts used to train the AI models?',
        a: 'Through the [AI Gateway](https://vercel.com/docs/ai-gateway) you can [disallow prompt training](https://vercel.com/docs/ai-gateway/security-and-compliance/disallow-prompt-training) so your inputs aren\u2019t used to train providers\u2019 models. Even so, don\u2019t paste confidential or client data into prompts — treat AI tools like any other external service.',
      },
      {
        q: 'Is there a code of conduct?',
        a: 'Yes. Be respectful, inclusive, and supportive — this is a welcoming space for people trying AI for the first time. Read the full [Code of conduct](/code-of-conduct), and if something isn\u2019t right, raise it with the organisers.',
      },
      {
        q: 'Can I start early or reuse an existing project?',
        a: 'Build during the hackathon window (1–14 September) — it keeps things fair. Bringing an idea, sketches, or a problem is fine; starting from a codebase you wrote earlier isn\u2019t. Open-source libraries, templates, and v0 starters are fair game.',
      },
      {
        q: 'Do I have to attend live or present in person?',
        a: 'It\u2019s part-time, so you don\u2019t need to be online the whole time. Try to catch the kickoff, and share a short [demo](/submit) at the end — a screen recording works, with a demo day for anyone who can join live (see [Judging](/judging)). You submit through a form — we post the link in the Submissions channel on the morning of Monday 14 September — with your repo, live app URL, project type, and video. There are two ways to be recognised: judges\u2019 awards from the demo, and People\u2019s Choice, voted by everyone.',
      },
    ],
  },
  {
    group: 'Troubleshooting & deployment',
    items: [
      {
        q: 'My AI calls fail. Why?',
        a: 'Work through the causes in order: a missing or wrong key (confirm `AI_GATEWAY_API_KEY` is set), a bad model name (check the [AI Gateway model list](https://vercel.com/docs/ai-gateway)), a rate limit or no credit (HTTP 429), or a request that\u2019s too big for the model\u2019s context window. Read the actual error the SDK throws, and wrap calls per the [AI SDK error handling](https://ai-sdk.dev/docs/ai-sdk-core/error-handling) guide.',
      },
      {
        q: 'My app works locally but breaks when deployed.',
        a: 'Env vars aren\u2019t set on the host \u2014 add them in the platform dashboard, then redeploy. Locally, the file must be named `.env.local` and you need to restart `pnpm dev` after changing it. If `pnpm dev` itself errors, run `pnpm install` again and check you\u2019re on Node 20+.',
      },
      {
        q: 'Can I host on GitHub Pages?',
        a:
          'No — it\u2019s static only and can\u2019t run server-side AI routes. Use [Vercel](https://vercel.com) or another host that runs server-side code — see the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'Why won\u2019t Vercel connect my company repo?',
        a:
          'The free Hobby plan can\u2019t connect to Git-org repos. Use a personal repo or a paid Team. Need Vercel Enterprise? We can support that for the hackathon \u2014 talk to the organisers or ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel. See the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'What if I only have the free tier on Vercel?',
        a:
          'That\u2019s all you need. Vercel\u2019s free [Hobby plan](https://vercel.com/docs/plans/hobby) publishes and runs a real app, server-side AI routes included \u2014 just deploy from a personal (non-commercial) repo and keep to sample or synthetic data. Build with free tools you already have: [VS Code](https://code.visualstudio.com) + [GitHub Copilot](https://github.com/features/copilot)\u2019s free tier, [Cursor](https://cursor.com/pricing), or [Gemini CLI](https://github.com/google-gemini/gemini-cli). Free-tier limits are in the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'How do I share my project so judges can see it?',
        a:
          'Judges need two things: a public live URL (no login wall, so it opens in an incognito window) and your code \u2014 a public GitHub repo or your v0 project link. You can build either way, and the [Start building](/start-building) page walks through both: start in v0 and Push to GitHub, or build locally and connect the repo to Vercel. For the exact deploy steps, see the [Deployment guide](' +
          doc('deployment-guide') +
          '). When you\u2019re ready, enter everything in the submission form (posted in the Submissions channel on Monday 14 September) \u2014 the full checklist lives on the [Submit page](/submit).',
      },
      {
        q: 'How do we save our work and collaborate as a team with version control?',
        a:
          'Use GitHub \u2014 one habit that gives you version control, a backup, and team collaboration at once. Connect your v0/Vercel project to a GitHub repo so every change is saved with full history: in v0 click Push to GitHub, or run `git commit` and `git push` often if you build locally. Don\u2019t rely on a single browser tab. GitHub lets you go back to any earlier version, and Vercel keeps every deployment so you can [instantly roll back](https://vercel.com/docs/deployments/managing-deployments) if a change breaks the app.\n\nTo work as a team, share one repo: each person builds on their own branch and opens a pull request, Vercel gives every branch its own preview URL to test safely, and merging to `main` deploys to production \u2014 keep commits small and frequent to avoid clashes (merge conflicts). One catch: Vercel\u2019s free Hobby plan is a personal account with no team members, so either make the GitHub repo public and let one teammate\u2019s account do the deploys (GitHub still handles everyone collaborating), or use a Vercel Pro Team for private org repos and multiple members.\n\nNew to Git? Start with [GitHub Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world) and [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow), see how pushes deploy in [Vercel Git](https://vercel.com/docs/git) and [Vercel environments](https://vercel.com/docs/deployments/environments), and follow the step-by-step [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'v0 says GitHub is connected but the pull or sync fails.',
        a:
          'A stale token can still look “connected” while it no longer authenticates, so the pull can’t run.\n\nFirst, fully disconnect and reconnect (not just re-open): in v0 open Settings → Git, disconnect the GitHub account/repo, then reconnect and explicitly grant access to your repo.\n\nNext, check the GitHub App authorization — on GitHub go to Settings → Applications → Authorized GitHub Apps → Vercel/v0 and confirm your repo is in the allowed list, since repo access can be revoked separately from the connection.\n\nThen use v0’s built-in Pull changes action in Settings → Git; it runs through v0’s own Git flow and can succeed (and refresh the token) even when a terminal pull can’t. Retry the pull once it reconnects.\n\nIf the sandbox still won’t pick up your latest pushes, start a fresh chat in the same v0 project — an old chat’s sandbox can get stuck, and a new chat spins up a clean sandbox that re-syncs the current repo state, so you can create and merge the PR and publish; keep just one active chat per project to avoid file-sync clashes.\n\nStill failing? Post in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel with a screenshot of the error.',
      },
      {
        q: 'I have several repos and the pull keeps failing on the wrong one.',
        a:
          'Each v0 chat/project is bound to one specific Git repo, and the sandbox always authenticates against that bound repo — not whichever repo you last reconnected.\n\nIf you have similarly named repos (say `…-site` and `…-website`) and you reconnect GitHub to the wrong one, you get the same auth failure because the project still points at the original repo.\n\nFix it by lining them up: in v0 Settings → Git, check exactly which repo the project is connected to, then grant GitHub access to that same repo — if you only want this project’s latest code, that’s all you need before you pull. If you actually want to work from the other repo, retarget the project to it in Settings → Git first, then pull.\n\nWhen in doubt, compare the full owner/repo name character for character — a one-word difference (like `-site` vs `-website`) is enough to point the sandbox at a repo your account can’t access.',
      },
    ],
  },
]

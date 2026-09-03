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
          'No. Start in [v0](https://v0.app) — describe your app and deploy it. The [Quick Start](' +
          doc('quick-start') +
          ') walks you through your first live app before you write real code.',
      },
      {
        q: 'Who can join? Do I need to be a developer?',
        a:
          'Every DCX staff member is welcome — whatever your role, you don\u2019t need to be a developer or have an AI background. Consultants, designers, product, delivery, and domain experts all add value; the point is pairing your expertise with AI, not hand-writing code, and mixed teams bring complementary perspectives. New to it all? Start with the [Quick Start](' +
          doc('quick-start') +
          ').',
      },
      {
        q: 'Do I need to register, and by when?',
        a: 'Yes — sign up before the kickoff at 09:00 BST on Monday 7 September. Registration closes when this hackathon starts, and late registrations are not included in this event. Grab your spot early, and if you don’t have a team yet, post in the team-forming channel (see [How it works](/how-it-works)).',
      },
      {
        q: 'Do I need a team, or can I go solo?',
        a: 'Teams of 2–5 are encouraged — solo is allowed, but a team is more fun and usually ships more. No team yet? Post what you want to build and what you bring in the team-forming channel, or we’ll help group you at kickoff. See [How it works](/how-it-works).',
      },
      {
        q: 'What does it cost?',
        a: 'Joining the hackathon is free. Hosting and model services have their own plan rules: Vercel\u2019s [Hobby plan](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) is for personal, non-commercial use, so use the organiser-approved Vercel setup for this company event or ask which plan to use. The [AI Gateway](https://vercel.com/docs/ai-gateway/pricing) starts with rate-limited free credits for a subset of models; purchased credits unlock the full catalogue at provider list price with no token markup. The [Gemini API](https://ai.google.dev/gemini-api/docs/pricing) also has a free tier, but Google says free-tier content is used to improve its products. Do not assume an [OpenAI API](https://platform.openai.com/docs/pricing) free allowance; check its live usage pricing. Running models locally with [Ollama](https://ollama.com) has no per-token fee, but uses your hardware and each model has its own licence. Never use client or company data.',
      },
      {
        q: 'How much time do I need to commit?',
        a: 'It’s part-time and self-paced — there’s no daily meeting, minimum number of hours, or full day blocked out. Fit it around your job across the two weeks (7–21 September): deploy something small early, then improve it when you can. The only shared moments are the kickoff and final demo; coordinate with your team however you like.',
      },
      {
        q: 'How finished does my project need to be?',
        a: 'It should be **working, not finished**. Build one useful flow that can be opened from a public link, then record a short 2–3 minute screen video showing it in action. Runtime AI is optional. You do not need slides, production polish, or a long feature list. Keep the scope realistic, learn something new, meet people, and share what you discovered — beginners and non-engineers can win too. See [Judging](/judging) and the [submission checklist](/submit).',
      },
    ],
  },
  {
    group: 'Understanding the concepts',
    items: [
      {
        q: 'How does a generative AI app fit together?',
        a: 'Think in layers: a model provider runs the model and its compute; a platform such as the [AI Gateway](https://vercel.com/docs/ai-gateway) gives your code one route to supported models; [Vercel](https://vercel.com) hosts the app; and [v0](https://v0.app) helps you build the experience. An optional agent layer adds tools and a loop — the AI SDK defines agents as [LLMs that use tools in a loop](https://ai-sdk.dev/docs/agents/overview). For the hackathon, you mainly build the application and, when useful, its workflow or agent logic.',
      },
      {
        q: 'What\u2019s a foundation model, and why are there different ones for images, video, and speech?',
        a: 'A foundation model is trained on broad data at scale so it can be adapted to many tasks. Some current models are multimodal, while others are specialised for jobs such as text, image, video, speech, or embeddings. Choose a model that explicitly supports your input, output, quality, latency, and cost needs. The [AI SDK](https://ai-sdk.dev/docs/foundations/providers-and-models) provides common interfaces across providers, and the [AI Gateway model catalogue](https://vercel.com/ai-gateway/models) shows the models and capabilities it currently supports.',
      },
      {
        q: 'What makes something an "AI agent" (not just a chatbot)?',
        a: 'The [AI SDK definition](https://ai-sdk.dev/docs/agents/overview) is an LLM that uses tools in a loop to accomplish a task. Tools let it search, query a database, or call an API; the loop manages context and stopping conditions while the model chooses the next action. A simple chatbot may answer once without tools, while an agent can take several tool-backed steps. That\u2019s the Harvest level in [Challenges](/challenges).',
      },
      {
        q: 'What\u2019s the difference between an agent and a skill?',
        a: 'An agent combines a model, instructions, tools, and a loop to pursue a goal. In coding assistants such as GitHub Copilot, a skill is an on-demand folder of instructions, scripts, and resources for a specialised job; one agent can load several skills when relevant. Files such as `.agent.md` and `SKILL.md` customise the assistant you build with, not the app you ship. See [custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents) and [agent skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).',
      },
      {
        q: 'What are the main types of AI agent: deterministic, generative, and hybrid?',
        a:
          'These are useful design labels rather than one universal industry taxonomy. The practical difference is how much control belongs to code and how much belongs to the model.\n\n' +
          '**Deterministic workflow** — code defines the sequence, branches, and allowed actions. Given the same input and state, it follows the same path, although live data or an LLM used inside one step can still vary. Traditional phone menus are a familiar example. Use this style for validation, approvals, and auditable business rules.\n\n' +
          '**Generative agent** — an LLM interprets intent and chooses its next tool or action within a bounded loop. It handles open-ended language well, but is non-deterministic, harder to test, and needs stopping conditions and safeguards. Use it for chat, drafting, research, and exploratory tasks.\n\n' +
          '**Hybrid system** — combines model-directed decisions with deterministic validation, workflows, approvals, and limits. For example, the model can understand and classify a request, then code runs the approved action. This is often the best fit for a real product.\n\n' +
          'Anthropic\u2019s [workflows-versus-agents distinction](https://www.anthropic.com/engineering/building-effective-agents) is a useful conceptual reference, although that article now notes its 2024 tooling examples are dated. For current implementation guidance, use the AI SDK\u2019s [structured workflow patterns](https://ai-sdk.dev/docs/agents/workflows) and [tool-using agents](https://ai-sdk.dev/docs/agents/overview).',
        diagram: `flowchart LR
  U["Your request"] --> Q{"Which agent style?"}
  Q -->|Deterministic| D["Fixed coded path — predictable, auditable"]
  Q -->|Generative| G["LLM chooses steps — flexible, natural"]
  Q -->|Hybrid| H["Generative reasoning + deterministic workflow"]`,
      },
    ],
  },
  {
    group: 'Building your app',
    items: [
      {
        q: 'Which AI model should I use?',
        a: 'Choose from the task, not the brand name. Start with a fast, lower-cost model for classification, extraction, routing, and short rewrites; use a more capable general model for chat, drafting, and RAG; and pay for a frontier or reasoning model only when tests show the task needs it. Compare current capabilities, latency, and pricing in the [AI Gateway model catalogue](https://vercel.com/ai-gateway/models), then test two or three candidates with representative prompts. Gateway models often swap by changing the model ID, but capabilities and supported settings differ, so they are not always drop-in equivalents.',
      },
      {
        q: 'Do I have to use the AI SDK?',
        a: 'No — it is the recommended TypeScript path here, not a requirement. [AI SDK](https://ai-sdk.dev) gives you common model, tool, streaming, and UI primitives, and its default [AI Gateway](https://vercel.com/docs/ai-gateway) integration makes supported models easier to compare and switch. Provider capabilities still vary. Alternatives include a provider\u2019s own SDK, raw fetch/REST, orchestration frameworks such as [LangChain](https://docs.langchain.com/oss/javascript/langchain/overview), [LlamaIndex](https://developers.llamaindex.ai/typescript/framework/), or [Mastra](https://mastra.ai), and Python SDKs.',
      },
      {
        q: 'Can I use GPT, Claude, or Gemini models with Vercel and v0?',
        a: 'Yes. [v0](https://v0.app) helps you build the app and [Vercel](https://vercel.com) hosts it; neither locks you to one model family. GPT, Claude, and Gemini are model families offered by OpenAI, Anthropic, and Google. The [AI Gateway](https://vercel.com/docs/ai-gateway/models-and-providers) gives you one API for hundreds of models from multiple providers, selected with a `creator/model-name` ID. You can also [bring your own provider key](https://vercel.com/docs/ai-gateway/authentication-and-byok/byok) after purchasing AI Gateway credits, or call a provider\u2019s SDK directly. Start with AI Gateway unless you need a provider-specific feature.',
      },
      {
        q: 'Do I have to use Next.js or React?',
        a: 'No. This starter path uses Next.js and React because they work smoothly with [v0](https://v0.app), the AI SDK, and Vercel. [Vercel supports many other frameworks](https://vercel.com/docs/frameworks), and you can use another host or backend as long as it can run the server-side code that protects your AI keys. For a short hackathon, keep the default unless another stack clearly helps your team.',
      },
      {
        q: 'Do I need AI inside my app, or can it just help me build?',
        a: 'Both approaches are valid. **Build with AI:** use [v0](https://v0.app), [GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot), or another approved assistant to shape, design, code, test, and deploy your project. That is enough to participate; the finished app can use normal code and data with no model key or model API call. **Build AI into the experience (optional):** let the running app call a model, use data or tools, or run an agent. [Seed, Sprout, and Harvest](/challenges) measure only that runtime AI depth. This follows the build-tool pattern used by the [Bolt hackathon](https://worldslargesthackathon.devpost.com/rules) and the AI-assistance disclosure used by [NASA Space Apps](https://www.spaceappschallenge.org/resources/project-submission-guide/). Keep confidential client and company data out of external tools.',
      },
      {
        q: 'Is there a starter template or repo I can build from?',
        a: 'Yes — you rarely need a blank page. Either describe your app to [v0](https://v0.app), start with the smaller [AI Gateway Demo](https://vercel.com/templates/next.js/vercel-ai-gateway-demo), or use Vercel\u2019s full [Chatbot](https://vercel.com/templates/next.js/chatbot) ([source](https://github.com/vercel/chatbot)) when you need persistence and authentication. For "chat with our docs" ideas, follow the official [RAG Agent guide](https://ai-sdk.dev/resources/recipes/guides/rag-chatbot), but verify package versions before copying older guide code. More in the [AI SDK guide](' +
          doc('ai-sdk-guide') +
          ') and the [full gallery](https://vercel.com/templates?type=ai).',
      },
      {
        q: 'What do I need to get set up?',
        a: 'Not much. Create [v0](https://v0.app) and [Vercel](https://vercel.com) accounts; connect GitHub when you want version control and team collaboration. You can build and deploy in the browser with no local install. Vercel deployments can authenticate to AI Gateway automatically with OIDC, while local or non-Vercel development needs an `AI_GATEWAY_API_KEY`. To run this Next.js 16 website locally, use Node 20.9+ and pnpm; the current AI SDK v7 quickstart requires Node 22+. Full walkthrough: [AI SDK guide](' +
          doc('ai-sdk-guide') +
          ') and [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'Can I ground the AI in my own documents or data?',
        a: 'Yes — that\u2019s the Sprout level. Use [RAG](https://ai-sdk.dev/resources/recipes/guides/rag-chatbot) to retrieve relevant, non-sensitive content and pass it to the model as context. Add clear instructions for missing evidence, validate structured outputs, require approval for sensitive tools, and set loop limits with [agent controls](https://ai-sdk.dev/docs/agents/building-agents). Use [lifecycle callbacks](https://ai-sdk.dev/docs/ai-sdk-core/lifecycle-callbacks) for logging and observability; callbacks do not block or stop a run. See Ask My Docs and Live Lookup in [Challenges](/challenges).',
      },
      {
        q: 'How do I reduce the model\u2019s hallucinations?',
        a: 'You cannot eliminate hallucinations, but you can reduce and detect them: ground answers in retrieved or live sources, return those sources so users can verify them, tell the model to say when evidence is missing, validate structured outputs, and test the app with known-answer cases. Use [RAG](https://ai-sdk.dev/resources/recipes/guides/rag-chatbot) or tools for current data, and keep a human review step for high-impact or client-facing output. If a model supports temperature, lowering it may make answers more consistent, but it does not make unsupported claims true.',
      },
    ],
  },
  {
    group: 'Rules & logistics',
    items: [
      {
        q: 'Who owns what I build?',
        a: 'You and your team keep your work and can carry on building after the event — that\u2019s encouraged. Treat what you ship as a learning prototype: anything you\u2019d take further for real client or production use still goes through your normal company review. Standard DCX IP and confidentiality policies apply to anything work-related.',
      },
      {
        q: 'Can I use real client or company data?',
        a: 'No — use sample, synthetic, or public data instead. Keep confidential client information and personal data (PII) out of your prompts, your app, and any external AI tool. To make the AI answer from your content, use a small, non-sensitive sample with [RAG](https://ai-sdk.dev/resources/recipes/guides/rag-chatbot). When in doubt, leave it out.',
      },
      {
        q: 'Are my prompts used to train the AI models?',
        a: 'Vercel says AI Gateway does not use prompts or responses for training. Provider routing is different: blocking provider training is not the default, so set `disallowPromptTraining: true` as documented in [Disallow Prompt Training](https://vercel.com/docs/ai-gateway/security-and-compliance/disallow-prompt-training). That filter does not apply to BYOK requests, which follow your agreement with the provider. If you call Gemini directly, Google says its free-tier content is used to improve its products. Regardless of settings, do not paste confidential or client data into prompts.',
      },
      {
        q: 'Is there a code of conduct?',
        a: 'Yes. Be respectful, inclusive, and supportive — this is a welcoming space for people trying AI for the first time. Read the full [Code of conduct](/code-of-conduct), and if something isn\u2019t right, raise it with the organisers.',
      },
      {
        q: 'Can I start early or reuse an existing project?',
        a: 'Build during the hackathon window (7–21 September) — it keeps things fair. Bringing an idea, sketches, or a problem is fine; starting from a codebase you wrote earlier isn’t. Open-source libraries, templates, and v0 starters are fair game.',
      },
      {
        q: 'Do I have to attend live or present in person?',
        a: 'It’s part-time, so you don’t need to be online the whole time. Try to catch the kickoff, and share a short [demo](/submit) at the end — a screen recording works, with a demo day for anyone who can join live (see [Judging](/judging)). You submit through a form — we post the link in the Submissions channel on the morning of Monday 21 September — with your repo, live app URL, project type, and video. There are two ways to be recognised: judges’ awards from the demo, and People’s Choice, voted by everyone.',
      },
    ],
  },
  {
    group: 'Troubleshooting & deployment',
    items: [
      {
        q: 'My AI calls fail. Why?',
        a: 'Read the exact status and error first. Common causes are missing authentication (local development usually needs `AI_GATEWAY_API_KEY`; Vercel can use OIDC), an invalid or unavailable model ID (check the [AI Gateway model list](https://vercel.com/ai-gateway/models)), a `429` rate limit, a billing or credit error, or a request beyond the model\u2019s context limit. Handle regular and streaming failures using the [AI SDK error handling](https://ai-sdk.dev/docs/ai-sdk-core/error-handling) guide.',
      },
      {
        q: 'My app works locally but breaks when deployed.',
        a: 'Check the first deployment error. A common cause is a missing environment variable: add it to the correct Vercel environment, then create a new deployment because variable changes do not affect old deployments. For local Next.js development, keep secrets in `.env.local` and restart `pnpm dev` after changes. Never commit that file. If the dev command fails, run `pnpm install` and confirm you are using Node 20.9+.',
      },
      {
        q: 'Can I host on GitHub Pages?',
        a:
          'Not by itself for a typical AI SDK app. [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) hosts static HTML, CSS, and JavaScript, so it cannot run the server-side route that keeps your AI key secret. You could host a static frontend there only if the backend runs elsewhere. The simplest path is [Vercel](https://vercel.com) or another full-stack host — see the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'Why won\u2019t Vercel connect my company repo?',
        a:
          'Vercel Hobby cannot connect a project to a Git repository owned by a GitHub organisation, GitLab group, or Bitbucket workspace. Use a personal repo only when company policy permits it, or use the organiser-approved Pro/Enterprise setup. Do not change company repo visibility without approval. Ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel and see [Vercel limits](https://vercel.com/docs/limits#connecting-a-project-to-a-git-repository) plus the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'What if I only have the free tier on Vercel?',
        a:
          'Hobby technically supports full-stack apps and server-side routes, but Vercel restricts it to [personal, non-commercial use](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage); its definition can include work by a paid employee or consultant. Do not assume a personal repo makes a company-hackathon deployment eligible. Use the organiser-approved Vercel account or ask whether you should use Pro/Enterprise. You can still use free development tools such as [VS Code](https://code.visualstudio.com), [GitHub Copilot Free](https://github.com/features/copilot/plans), or [Gemini CLI](https://github.com/google-gemini/gemini-cli). Plan limits are in the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'How do I share my project so judges can see it?',
        a:
          'Judges need two things: a public live URL (no login wall, so it opens in an incognito window) and your code \u2014 a public GitHub repo or your v0 project link. Never commit `.env.local`, API keys, or secrets to the repo. The [Start building](/start-building) page covers both routes: start in v0 and push to GitHub, or build locally and connect the repo to Vercel. For exact deploy steps, see the [Deployment guide](' +
          doc('deployment-guide') +
          '). When you\u2019re ready, enter everything in the submission form (posted in the Submissions channel on Monday 21 September) \u2014 the full checklist lives on the [Submit page](/submit).',
      },
      {
        q: 'How do we save our work and collaborate as a team with version control?',
        a:
          'Use GitHub for version history, backup, and collaboration. Connect the project to one repo, commit and push small changes often, and never store secrets in Git. GitHub preserves commit history; Vercel also keeps deployments. On Hobby, [Instant Rollback](https://vercel.com/docs/instant-rollback) can restore only the immediately previous production deployment, while Pro and Enterprise can choose any eligible production deployment.\n\nFor teamwork, use a branch and pull request for each change. After the first deployment, pushing a non-production branch creates a preview deployment; merging to the configured production branch (usually `main`) creates production. Hobby has no additional Vercel team members, and private organisation repos require Pro; use the organiser-approved setup for deployment while keeping code review and history in GitHub.\n\nNew to Git? Start with [GitHub Hello World](https://docs.github.com/en/get-started/using-github/hello-world) and [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow), then read [Vercel Git](https://vercel.com/docs/git), [Vercel environments](https://vercel.com/docs/deployments/environments), and the [Deployment guide](' +
          doc('deployment-guide') +
          ').',
      },
      {
        q: 'v0 says GitHub is connected but the pull or sync fails.',
        a:
          'First confirm the exact `owner/repo` connected in the project\u2019s Git settings, especially if you have similarly named repos. Then disconnect and reconnect the intended repo. On GitHub, manage repository access under **Settings → Applications → Installed GitHub Apps → Vercel → Configure → Repository access**; for an organisation-owned repo, an organisation owner may need to configure the app. This is different from **Authorized GitHub Apps**, which does not control repository selection. Retry after saving access. If the current v0 UI differs or syncing still fails, capture the error and ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel. See GitHub\u2019s guide to [modifying installed app access](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).',
      },
    ],
  },
]

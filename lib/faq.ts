import type { FaqGroup } from '@/components/faq-accordion'

export const faqGroups: FaqGroup[] = [
  {
    group: 'Getting started',
    items: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. Start on v0.dev — describe your app and deploy it. The Beginner guide walks you through your first live app before you write real code.',
      },
      {
        q: 'Who is this for? Do I need to be a developer?',
        a: 'Everyone — not just engineers. Consultants, designers, product people, and domain experts all add value. The point is pairing your expertise with AI, not hand-writing code. Mixed teams tend to build the best products.',
      },
      {
        q: 'Do I need a team, or can I go solo?',
        a: 'Teams of 2–5 are encouraged — solo is allowed, but a team is more fun and usually ships more. No team yet? Post what you want to build and what you bring in the team-forming channel, or we\u2019ll help group you at kickoff.',
      },
      {
        q: 'What does it cost?',
        a: 'Nothing to take part, and you can build a full project without paying. Hosting is free on Vercel\u2019s Hobby tier. Model usage is charged per token, but every major provider has a free tier to start on — keep prompts lean and only add billing if you outgrow the limits.',
      },
      {
        q: 'It\u2019s part-time over 2 weeks — how much time should I spend?',
        a: 'Whatever fits around your job. Deploy something small early, then improve it across the two weeks (1–14 September).',
      },
      {
        q: 'How finished does my project need to be?',
        a: 'Not very. A working demo of a small slice wins over an unfinished big idea. Aim to demo ~25% of the big idea, done well.',
      },
    ],
  },
  {
    group: 'Understanding the concepts',
    items: [
      {
        q: 'How does a generative AI app fit together?',
        a: 'It is built in layers: infrastructure (compute), the model (the LLM brain), the platform that serves it (e.g. the AI Gateway), an optional agent layer (a model given tools and a loop), and the application users touch. With Vercel + v0 you only build the top — the agent logic and the experience.',
      },
      {
        q: 'What\u2019s a foundation model, and why are there different ones for images, video, and speech?',
        a: 'A foundation model is trained on broad data so it can be adapted to many tasks. No single model does everything well, so providers train specialised models per input→output job (text, image, video, speech-to-text, text-to-speech, embeddings). Match the model to the output you need, and call them all through one interface with the AI SDK / AI Gateway.',
      },
      {
        q: 'What makes something an "AI agent" (not just a chatbot)?',
        a: 'Two things: a reasoning loop (observe, plan, act, check, repeat) and tools (actions it can take — search, query a database, call an API). A chatbot just replies; an agent decides what to do and does it. That\u2019s the Harvest level.',
      },
      {
        q: 'What\u2019s the difference between an agent and a skill?',
        a: 'An agent is the who — the AI that reasons and calls tools to reach a goal. A skill is the how — a reusable, self-contained set of steps the agent follows for one job. One agent can delegate to several skills.',
      },
      {
        q: 'What\u2019s a deterministic agent, and how is it different from an autonomous one?',
        a: 'The difference is who decides the steps. A deterministic "workflow" hard-codes the path — predictable, consistent, easy to test — great when rules and correctness matter. An autonomous "true agent" lets the model choose its own next step and tools in a loop — flexible for open-ended work, but less predictable and pricier. Mix them per job in a multi-agent system.',
      },
    ],
  },
  {
    group: 'Building your app',
    items: [
      {
        q: 'Which AI model should I use?',
        a: 'Match the model to the task. Use a small/fast model (mini · flash · haiku) for classify, extract, and short rewrites; a mid model (sonnet · flash-pro) for chat, drafting, and RAG; and a frontier/reasoning model (opus · gpt-max · gemini-pro) only for hard reasoning and multi-step agents. Every model is a one-line swap via the AI Gateway, so start cheap and climb only if needed.',
      },
      {
        q: 'Do I have to use the AI SDK?',
        a: 'No — it\u2019s the smoothest path, not a requirement. v0 generates AI SDK code out of the box and it pairs with the AI Gateway for one-line model swaps. Alternatives include provider SDKs, raw fetch/REST, orchestration frameworks (LangChain, LlamaIndex, Mastra), or Python SDKs.',
      },
      {
        q: 'If I use Vercel and v0, can I still use OpenAI, Anthropic, Google…?',
        a: 'Yes. v0 builds your app and Vercel hosts it; neither is a model provider. Any provider is just the model you plug in — through the AI Gateway (default), bring-your-own-key, or by calling the provider directly.',
      },
      {
        q: 'Do I have to use Next.js or React?',
        a: 'No, but it\u2019s the smoothest path. v0 generates a Next.js + React app and Vercel hosts it with zero config. You can bring another framework if you host it somewhere that runs server-side code — you\u2019ll just do more plumbing yourself.',
      },
      {
        q: 'Can I use GitHub Copilot or other AI tools to build?',
        a: 'Yes — it\u2019s encouraged. Copilot and similar assistants help you write and understand code faster; that\u2019s separate from the AI inside your app. One rule: keep confidential client data out of any external tool.',
      },
      {
        q: 'Can I ground the AI in my own documents or data?',
        a: 'Yes — that\u2019s the Sprout level. Use RAG to fetch the relevant parts of your content and pass them as context, add guardrails ("only answer from the provided context; if it\u2019s not there, say I don\u2019t know"), and use callbacks to log or stop bad output.',
      },
      {
        q: 'How do I reduce the model\u2019s hallucinations?',
        a: 'The biggest wins: ground it in real sources (RAG or live-data tools) so it answers from facts and can cite them; prompt it well (add constraints, give it a role, fix the output format, say what to avoid); tune the temperature down for factual tasks; and keep a human in the loop for anything client-facing.',
      },
    ],
  },
  {
    group: 'Rules & logistics',
    items: [
      {
        q: 'Can I start early or reuse an existing project?',
        a: 'Build during the hackathon window (1–14 September) — it keeps things fair. Bringing an idea, sketches, or a problem is fine; starting from a codebase you wrote earlier isn\u2019t. Open-source libraries, templates, and v0 starters are fair game.',
      },
      {
        q: 'Do I have to attend live or present in person?',
        a: 'It\u2019s part-time, so you don\u2019t need to be online the whole time. Try to catch the kickoff, and share a short demo at the end — a screen recording works, with a demo day for anyone who can join live.',
      },
    ],
  },
  {
    group: 'Troubleshooting & deployment',
    items: [
      {
        q: 'My AI calls fail. Why?',
        a: 'Work through the causes in order: a missing or wrong key (confirm AI_GATEWAY_API_KEY is set), a bad model name, a rate limit or no credit (HTTP 429), or a request that\u2019s too big for the model\u2019s context window. Read the actual error the SDK throws — it tells you which one it is.',
      },
      {
        q: 'My app works locally but breaks when deployed.',
        a: 'Env vars aren\u2019t set on the host. Add them in the platform dashboard, then redeploy.',
      },
      {
        q: 'Can I host on GitHub Pages?',
        a: 'No — it\u2019s static only and can\u2019t run server-side AI routes. Use Vercel or another host that runs server-side code.',
      },
      {
        q: 'Why won\u2019t Vercel connect my company repo?',
        a: 'The free Hobby plan can\u2019t connect to Git-org repos. Use a personal repo or a paid Team.',
      },
    ],
  },
]

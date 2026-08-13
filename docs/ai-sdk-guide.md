# AI SDK guide

The [AI SDK](https://ai-sdk.dev) is a TypeScript toolkit for building AI applications and agents. This guide follows AI SDK v7. For a new local project, use **Node.js 22+** and pnpm, matching the current [Next.js App Router quickstart](https://ai-sdk.dev/docs/getting-started/nextjs-app-router).

## Get a model key

Use the **[Vercel AI Gateway](https://vercel.com/docs/ai-gateway)** — one API gives you access to supported models from multiple providers.

1. For local or non-Vercel development, create an **AI Gateway API key**.
2. Add it to `.env.local`: `AI_GATEWAY_API_KEY=...`.

Vercel deployments can authenticate automatically through `VERCEL_OIDC_TOKEN`; local development still needs the API key. Never commit keys or `.env.local`. See [Authentication & BYOK](https://vercel.com/docs/ai-gateway/authentication-and-byok).

## Minimal chatbot (Next.js App Router)

```bash
pnpm create next-app@latest      # App Router + Tailwind
pnpm add ai @ai-sdk/react zod
```

Server route — `app/api/chat/route.ts`:

```ts
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: 'xai/grok-4.5',
    messages: await convertToModelMessages(messages),
  });
  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
```

Client — `app/page.tsx` uses the `useChat` hook from `@ai-sdk/react`.

Run it: `pnpm dev` → http://localhost:3000.

## Add a tool (makes it useful)

Give the model an action it can call, defined with a Zod schema:

```ts
import { tool } from 'ai';
import { z } from 'zod';

const weather = tool({
  description: 'Get the weather for a city',
  inputSchema: z.object({ city: z.string() }),
  execute: async ({ city }) => ({ city, tempC: 21 }),
});
```

Pass `tools: { weather }` to `streamText`. For multi-step calls, import `isStepCount` from `ai` and add `stopWhen: isStepCount(5)`. See [Tool calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling).

## Starter templates

Don't start from a blank file — get something running, then make it yours.

**Copy-paste examples** — one small, working thing you can read in minutes:

- [Next.js App Router quickstart](https://ai-sdk.dev/docs/getting-started/nextjs-app-router) — current end-to-end chat and tools tutorial.
- [Call tools in Next.js](https://ai-sdk.dev/resources/recipes/next/call-tools) — a focused tool-calling example.
- [RAG Agent guide](https://ai-sdk.dev/resources/recipes/guides/rag-chatbot) — retrieve from a knowledge base and use the result as context.
- [AI SDK recipes](https://ai-sdk.dev/resources/recipes) — runnable examples across supported frameworks and use cases.

**Full starter apps** — clone a whole app and swap in your idea ([full gallery](https://vercel.com/templates?type=ai)):

| Template | Good for |
|---|---|
| **[AI Gateway Demo](https://vercel.com/templates/next.js/vercel-ai-gateway-demo)** | A smaller open-source chatbot using Next.js, AI SDK, and AI Gateway |
| **[AI Chatbot](https://github.com/vercel/chatbot)** | Full-featured chat with persistence and authentication; follow its database and environment setup |
| **[RAG Agent guide](https://ai-sdk.dev/resources/recipes/guides/rag-chatbot)** | "Chat with our docs" ideas; verify package versions before copying older guide code |

### Use a template in 5 steps

Take the following steps to go from template to live app:

1. Pick the example or template above that's closest to your idea.
2. Clone it, or click **Deploy** on its page to get your own copy.
3. Follow the starter's environment-variable instructions. Local AI Gateway calls need `AI_GATEWAY_API_KEY` — see [Get a model key](#get-a-model-key).
4. Run it with `pnpm install` then `pnpm dev`, and open http://localhost:3000.
5. Deploy it and open the live URL — see the [Deployment guide](deployment-guide.md).

Then replace the template's content with your idea, one piece at a time.

Use only public, synthetic, or explicitly approved sample data in prompts, uploads, logs, and vector stores. Never use client data, personal information, or company secrets in a hackathon demo.

## Let your AI assistant help

Paste **[ai-sdk.dev/llms.txt](https://ai-sdk.dev/llms.txt)** into Copilot/your assistant so it gives accurate, current AI SDK answers.

More: [AI SDK docs](https://ai-sdk.dev/docs) · [Next.js quickstart](https://ai-sdk.dev/docs/getting-started/nextjs-app-router).

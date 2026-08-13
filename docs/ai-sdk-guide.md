# AI SDK guide

The [AI SDK](https://ai-sdk.dev) is the TypeScript toolkit for talking to AI models. This is the fast path.

## Get a model key

Use the **[Vercel AI Gateway](https://vercel.com/docs/ai-gateway)** — one key works with many models (OpenAI, Anthropic, Google, xAI, and more).

1. In your Vercel project, create an **AI Gateway** key.
2. Add it to your env: `AI_GATEWAY_API_KEY=...` (on Vercel it's set automatically).

Never commit keys. Local keys go in `.env.local`.

## Minimal chatbot (Next.js App Router)

```bash
pnpm create next-app@latest      # App Router + Tailwind
pnpm add ai @ai-sdk/react zod
```

Server route — `app/api/chat/route.ts`:

```ts
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: 'openai/gpt-4.1',            // any model via AI Gateway
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
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

Pass `tools: { weather }` to `streamText`, and add `stopWhen` for multi-step calls.

## Starter templates

Don't start from a blank file — get something running, then make it yours.

**Copy-paste examples** — one small, working thing you can read in minutes:

- [AI SDK — Getting Started](https://ai-sdk.dev/docs/getting-started) — build a working chatbot in about 5 minutes.
- [Node HTTP server example](https://github.com/vercel/ai/tree/main/examples/node-http-server) — no framework, just a model call.
- [Express example](https://github.com/vercel/ai/tree/main/examples/express) — the same idea inside a familiar server.
- [All AI SDK examples](https://github.com/vercel/ai/tree/main/examples) — Next.js, Nuxt, SvelteKit, and more.

**Full starter apps** — clone a whole app and swap in your idea ([full gallery](https://vercel.com/templates?type=ai)):

| Template | Good for |
|---|---|
| **[AI Chatbot](https://github.com/vercel/chatbot)** | Most teams — chat + persistence, multimodal |
| **[Internal Knowledge Base (RAG)](https://vercel.com/templates/next.js/nextjs-openai-doc-search-starter)** | "Chat with our docs" ideas |
| **Natural Language → PostgreSQL** | Querying data in plain English |
| **Multi-Modal / Semantic Image Search** | Image input or search |

### Use a template in 5 steps

Take the following steps to go from template to live app:

1. Pick the example or template above that's closest to your idea.
2. Clone it, or click **Deploy** on its page to get your own copy.
3. Add your `AI_GATEWAY_API_KEY` to `.env.local` — see [Get a model key](#get-a-model-key).
4. Run it with `pnpm install` then `pnpm dev`, and open http://localhost:3000.
5. Deploy it and open the live URL — see the [Deployment guide](deployment-guide.md).

Then replace the template's content with your idea, one piece at a time.

## Let your AI assistant help

Paste **[ai-sdk.dev/llms.txt](https://ai-sdk.dev/llms.txt)** into Copilot/your assistant so it gives accurate, current AI SDK answers.

More: [AI SDK docs](https://ai-sdk.dev/docs) · [Next.js quickstart](https://ai-sdk.dev/docs/getting-started/nextjs-app-router).

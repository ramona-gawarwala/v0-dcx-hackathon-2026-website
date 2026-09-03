# AI features

## Level 6 — Your first AI feature

*Intermediate · 35 min · after level 5*

> **By the end of this level**
> - Streaming text from a model into your UI.
> - Why every call goes through AI Gateway rather than a provider SDK.
> - How to see exactly what your app sends to the model.

**1. Install and make one call.**

```bash
pnpm add ai @ai-sdk/react zod
```

```ts
// app/api/summarise/route.ts
import { streamText, toUIMessageStream, createUIMessageStreamResponse } from 'ai';

export async function POST(req: Request) {
  const { items } = await req.json();

  const result = streamText({
    // A plain string routes through AI Gateway — no provider SDK, no provider key.
    model: 'anthropic/claude-sonnet-4.5',
    system: 'Summarise product feedback for a PM. Be specific. Cite item ids.',
    prompt: items.map((i: any) => `[${i.id}] ${i.body}`).join('\n'),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
```

> **If you're copying from an older tutorial**
> `useCompletion` from `ai/react` and `toDataStreamResponse()` are pre-v5 APIs and will not work. In v7: import `useChat` from `@ai-sdk/react`, and build the response with `createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: result.stream }) })`. Upgrading an existing project? Run `npx @ai-sdk/codemod upgrade v7`.

**2. Why Gateway instead of a provider SDK.**

| Without Gateway | With Gateway |
|---|---|
| A key per provider | One key, hundreds of models |
| Provider outage is your outage | Automatic fallback to another provider |
| Model swap is a refactor | Model swap is a string change |
| Spend scattered across bills | One dashboard, one cap |

**3. Turn on DevTools and actually look.**

```ts
// lib/ai/devtools.ts — import this once, in local dev only.
import { registerTelemetry } from 'ai';
import { DevToolsTelemetry } from '@ai-sdk/devtools';

// Requires AI SDK v7. Captures every generateText/streamText/generateObject/streamObject call.
if (process.env.DEBUG_AI) registerTelemetry(DevToolsTelemetry());

// then, in a second terminal:
//   npx @ai-sdk/devtools@latest   →   http://localhost:4983
```

Open it and look at one real call: the exact prompt sent, the tokens in and out, the latency, the raw provider payload. Most people's first reaction is surprise at how much context they were sending. That surprise is the point.

> **DevTools stores prompts and responses locally in plaintext (`.devtools/`).** Local development only — never enable it in production, and keep `.devtools` in `.gitignore`.

> **Check it worked**
> Text streams into your UI token by token, and DevTools shows the call. Now change the model string to a different provider's model and confirm it still works — that's Gateway earning its place in one edit.

> **Further reading**
> - [AI Gateway documentation](https://vercel.com/docs/ai-gateway) — routing, fallbacks, provider options, observability.
> - [Browse AI Gateway models](https://vercel.com/ai-gateway/models) — the current model list with pricing.
> - [AI SDK introduction (v7)](https://ai-sdk.dev/docs/introduction) — the current release and its core surfaces.
> - [AI SDK migration guides](https://ai-sdk.dev/docs/migration-guides) — what breaks between versions, and what the codemod handles.
> - [AI SDK DevTools](https://ai-sdk.dev/docs/ai-sdk-core/devtools) — setup and what each panel shows you.

---

## Level 7 — Structured output: from text to typed data

*Intermediate · 30 min · after level 6*

> **By the end of this level**
> - Model output validated against the same Zod schema your database uses.
> - Classification that stores its own attribution and confidence.
> - A degraded path so a model outage never blocks a user.

Streaming prose into a div is a demo. Streaming a *typed object* into your database is a feature. This level is the shortest distance between the two.

```ts
// lib/ai/classify.ts
import { generateText, Output } from 'ai';
import { Classification } from '@/lib/contracts/feedback';

export const PROMPT_VERSION = 'classify-v1';

export async function classify(body: string) {
  try {
    const { output, usage } = await generateText({
      model: 'anthropic/claude-sonnet-4.5',
      temperature: 0.2,
      abortSignal: AbortSignal.timeout(15_000),
      system: `Classify one piece of product feedback.
- severity 5 means data loss, security, or a blocked workflow. Reserve it.
- theme must be 1-3 words and reusable across many items ("billing errors", not
  "the invoice on tuesday was wrong").
- rationale must quote the specific words that drove your judgement.
- lower confidence when the text is ambiguous. Do not guess to seem decisive.`,
      prompt: body,
      // Same schema the database column set was generated from.
      output: Output.object({ schema: Classification }),
    });
    return { ok: true as const, output, usage };
  } catch (e) {
    // Never throw into the request path — classification is enhancement, not gate.
    return { ok: false as const, reason: String(e) };
  }
}
```

```text
Wire classification into submission.

- Submission writes the row and returns immediately. Classification runs after, never inline —
  a slow model must never make the form feel slow.
- On success, update the row with sentiment, theme, severity, rationale, confidence, AND
  model_id plus prompt_version. Attribution is not optional.
- On failure, leave the AI columns null and set a classification_failed flag. The inbox shows
  "Not yet classified" with a retry button. The item is still fully usable.
- In the inbox, render AI fields in a visually distinct container with the model name and
  confidence shown, plus an override control that writes a human value and records who changed it.

Done when: submitting with an invalid AI Gateway key still succeeds and shows the unclassified
state; a successful classification stores model_id and prompt_version; and overriding preserves
both the model's value and the human's.
```

> **Why store the prompt version**
> In three months you'll change the classification prompt and someone will ask why old items are tiered differently. Without `prompt_version` on the row, that's an unanswerable question. With it, it's a `WHERE` clause.

> **Check it worked**
> Break your Gateway key deliberately and submit feedback. The submission succeeds, the item appears unclassified with a retry, and nothing crashes. That behaviour — not the happy path — is what makes an AI feature shippable.

> **Further reading**
> - [Generating structured data](https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data) — `Output.object`, `.array`, `.choice`, `.json`, `.text`, and when each is right.
> - [AI SDK middleware](https://ai-sdk.dev/docs/ai-sdk-core/middleware) — where to put logging, caching, guardrails.
> - [Standard JSON Schema](https://standardschema.dev/json-schema) — AI SDK v7 accepts any library implementing this, so you're not locked to Zod.

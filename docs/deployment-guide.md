# Deployment guide

Your app needs to run **server-side code with a secret API key** (that's how AI calls work). Static-only hosts can't do this.

## Recommended: Vercel

The default path. Deploy straight from v0, or connect a Git repo and every push ships automatically with a preview URL.

- One-click deploy from v0 or a template.
- Set env vars (like `AI_GATEWAY_API_KEY`) in **Project → Settings → Environment Variables**.
- Watch for the free-tier limits below.

> **Heads up on the AI key:** the [AI SDK](https://ai-sdk.dev/docs) reads `AI_GATEWAY_API_KEY` automatically. On Vercel, deployments can also authenticate with zero setup via the built-in `VERCEL_OIDC_TOKEN` — but for **local development** you'll still need to set `AI_GATEWAY_API_KEY` in `.env.local`.

**Free (Hobby) limits that can bite:**

| Limit | Value |
|---|---|
| Function duration (Fluid Compute, now the default) | 300s (5 min) default and max on Hobby |
| Function duration (older projects **without** Fluid Compute) | 10s default, 60s max |
| Deploys per day | 100 |
| Build time per deployment | 45 min |
| Git org repos on Hobby | Not supported — use a personal repo or a paid Team |

> **Note:** Fluid Compute is enabled by default for projects created after April 2025, which is why the function timeout is now 5 minutes (not the old 10s/60s). Only legacy projects that opted out still hit the shorter limit.

> **Need Vercel Enterprise?** We can support that for the hackathon — talk to the organisers or ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel.

## Won't work: GitHub Pages

Static files only — no server, no secret keys. **It can't host an AI SDK backend.** Don't use it for this hackathon.

## Golden rules

- **Back up your work as you go.** Connect the project to a GitHub repo (in v0: **Push to GitHub**) so every change is saved, or export/download the code periodically. Don't rely on a single browser tab — that's how work gets lost.
- Never commit `.env.local` or keys — set them in the platform's dashboard.
- Test the deployed URL in a private window before you call it done.

## Learn more

Official docs for the recommended stack, if you want to go deeper or get unstuck:

- [Deploying on Vercel](https://vercel.com/docs/deployments) — how deploys and preview URLs work.
- [Vercel environment variables](https://vercel.com/docs/environment-variables) — where to put `AI_GATEWAY_API_KEY`.
- [AI Gateway: authentication](https://vercel.com/docs/ai-gateway/authentication) — getting and using your AI key.
- [AI SDK docs](https://ai-sdk.dev/docs) — adding chat, tools, and streaming to your app.

Stuck on a deploy? See the [FAQ](faq.md), or ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel.

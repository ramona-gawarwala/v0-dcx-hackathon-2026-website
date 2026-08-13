# Deployment guide

A typical AI app needs server-side code so provider keys and privileged tools stay off the client. Static-only hosting can serve a frontend, but the AI backend must run somewhere else.

## Recommended: Vercel

The default path. Deploy from v0, or connect a Git repo so non-production branches create previews and the configured production branch creates production deployments.

- Deploy from v0 or a supported template.
- Set env vars (like `AI_GATEWAY_API_KEY`) in **Project → Settings → Environment Variables**.
- Watch for the free-tier limits below.

> **Heads up on the AI key:** the [AI SDK](https://ai-sdk.dev/docs) reads `AI_GATEWAY_API_KEY` automatically. On Vercel, deployments can also authenticate with zero setup via the built-in `VERCEL_OIDC_TOKEN` — but for **local development** you'll still need to set `AI_GATEWAY_API_KEY` in `.env.local`.

**Free (Hobby) limits that can bite:**

| Limit | Value |
|---|---|
| Function duration (Fluid Compute, now the default) | 300s (5 min) default and max on Hobby |
| Function duration (older projects **without** Fluid Compute) | 10s default, 60s max |
| Deployment rate limits | 60 per 5 min, 100 per hour, and 100 per day |
| Build time per deployment | 45 min |
| Git organisation repos on Hobby | Cannot be connected — use an approved personal repo or a Pro/Enterprise team |

> **Note:** Fluid Compute is enabled by default for projects created after April 2025, which is why the function timeout is now 5 minutes (not the old 10s/60s). Only legacy projects that opted out still hit the shorter limit.

> **Need Vercel Enterprise?** We can support that for the hackathon — talk to the organisers or ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel.

## Won't work: GitHub Pages

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) serves static files. It cannot run an AI SDK backend or protect a server-side key. It is only viable if your backend is hosted elsewhere; for this hackathon, use the recommended full-stack path.

## Golden rules

- **Back up your work as you go.** Use the current Git controls in v0 to connect the intended GitHub repo, or export/download the code periodically. Don't rely on a single browser tab.
- Never commit `.env.local` or keys — set them in the platform's dashboard.
- Test the deployed URL in a private window before you call it done.

## Learn more

Official docs for the recommended stack, if you want to go deeper or get unstuck:

- [Deploying on Vercel](https://vercel.com/docs/deployments) — how deploys and preview URLs work.
- [Vercel environment variables](https://vercel.com/docs/environment-variables) — where to put `AI_GATEWAY_API_KEY`.
- [AI Gateway: Authentication & BYOK](https://vercel.com/docs/ai-gateway/authentication-and-byok) — API keys, OIDC, and provider credentials.
- [AI SDK docs](https://ai-sdk.dev/docs) — adding chat, tools, and streaming to your app.

Stuck on a deploy? See the [FAQ](faq.md), or ask in the [🆘 Help](https://teams.microsoft.com/l/channel/19%3A04b6a2068e4248bd85e0c34288a4d4e5%40thread.tacv2/%F0%9F%86%98%20Help?groupId=e292c5cf-9c44-4ee6-ace4-bc4bbfa60d6c&tenantId=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61) channel.

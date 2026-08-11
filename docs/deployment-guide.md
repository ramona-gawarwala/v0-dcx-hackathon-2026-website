# Deployment guide

Your app needs to run **server-side code with a secret API key** (that's how AI calls work). Static-only hosts can't do this.

## Recommended: Vercel

The default path. Deploy straight from v0, or connect a Git repo and every push ships automatically with a preview URL.

- One-click deploy from v0 or a template.
- Set env vars (like `AI_GATEWAY_API_KEY`) in **Project → Settings → Environment Variables**.
- Watch for the free-tier limits below.

**Free (Hobby) limits that can bite:**

| Limit | Value |
|---|---|
| Function timeout | 10s default, 60s max |
| Deploys per day | 100 |
| Git org repos on Hobby | Not supported — use a personal repo or a paid Team |

## Alternatives (all run server-side AI routes)

| Platform | Notes |
|---|---|
| **Netlify** | Similar to Vercel; credit-based free tier. |
| **Azure Static Web Apps** | Good for Azure shops — static hosting + managed Functions API, supports Next.js. |
| **Azure App Service / Railway / Render** | Work fine but add container/config setup — only if you already know them. |

## Won't work: GitHub Pages

Static files only — no server, no secret keys. **It can't host an AI SDK backend.** Don't use it for this hackathon.

## Golden rules

- Never commit `.env.local` or keys — set them in the platform's dashboard.
- Test the deployed URL in a private window before you call it done.

Stuck on a deploy? See [Help](help.md) and the [FAQ](faq.md).

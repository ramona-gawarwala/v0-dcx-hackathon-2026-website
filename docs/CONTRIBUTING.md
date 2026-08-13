# Contributing

For **organizers** maintaining this repo (participants don't need this).

## Edit the docs

- Keep it short. Busy people skim — lead with the action.
- One idea per section. Use lists and tables over paragraphs.
- Replace every `[placeholder]` before the event goes live.
- The `docs/` markdown is the source of truth. When you change it, update the matching website content in [`lib/content.ts`](../lib/content.ts) and [`lib/faq.ts`](../lib/faq.ts) so the site and docs stay in sync.

## Placeholders to fill in

Search the repo for `[` and replace: dates, links (submission portal, chat, repo URL), challenge details, and contact info.

## Make a change

1. Create a branch.
2. Edit the relevant file in `docs/` or the `README.md`.
3. Open a pull request.

## Before launch

Run this checklist before the event goes live, then re-check weekly during the 2 weeks:

- [ ] **Placeholders** — search the repo for `[` and resolve every one (dates, channels, repo URL, contacts).
- [ ] **Links** — confirm internal `docs/` links and external links (v0, Vercel, AI SDK) all resolve.
- [ ] **Docs ↔ site in sync** — verify `lib/content.ts` and `lib/faq.ts` match the `docs/` markdown.
- [ ] **5-minute path** — actually follow the README quick start end to end; it must work.
- [ ] **Owner** — one organizer owns the docs; all changes land via PR to avoid drift.
- [ ] **Community profile** — check GitHub's Community Standards checklist (README, CODE_OF_CONDUCT, LICENSE, CONTRIBUTING).

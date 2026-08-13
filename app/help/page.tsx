import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  KeyRound,
  Wrench,
  Brain,
  Lightbulb,
  LifeBuoy,
  Activity,
  type LucideIcon,
} from 'lucide-react'
import { PULSE_CHECK_URL, TEAMS_HELP_URL } from '@/lib/content'

const description =
  "Stuck? Work through these steps first — figure out what kind of blocker you're hitting and the quick things to try yourself. If you're still stuck after that, we'll set up a 1:1."

export const metadata: Metadata = {
  title: 'Help · DCX AI Hackathon 2026',
  description,
}

type Blocker = {
  icon: LucideIcon
  kind: string
  feels: string
  steps: string[]
}

const blockers: Blocker[] = [
  {
    icon: KeyRound,
    kind: 'Tool access',
    feels: "\u201CIt won\u2019t let me in.\u201D You can\u2019t log in to v0, Vercel, GitHub, or Teams, or you don\u2019t have a licence.",
    steps: [
      'Check you\u2019re using the right account (work vs personal) — sign out and back in.',
      'Try a different browser or an incognito window in case a cached login is stuck.',
      'Confirm you were added to the workspace/repo, and that a VPN or device policy isn\u2019t blocking it.',
    ],
  },
  {
    icon: Wrench,
    kind: 'Tool know-how',
    feels: "\u201CI\u2019m in, but I don\u2019t know how.\u201D You have access, but you\u2019re not sure how to prompt v0, push to GitHub, or deploy to Vercel.",
    steps: [
      'Skim the relevant guide — Beginner, AI SDK, or Deployment — they walk each tool step by step.',
      'Follow the tool\u2019s own quickstart (v0, Vercel, GitHub docs) for the exact button you\u2019re looking for.',
      'Ask v0 or an AI assistant to explain the step in plain language — \u201Chow do I deploy this to Vercel?\u201D',
    ],
  },
  {
    icon: Brain,
    kind: 'Technical knowledge',
    feels: "\u201CThe code or concept isn\u2019t clicking.\u201D There\u2019s an error you don\u2019t understand, or you\u2019re not sure how something works.",
    steps: [
      'Read the exact error message — it usually names the file and line, and the first error is the real one.',
      'Paste the error into an AI assistant and ask it to explain what it means and how to fix it.',
      'Check the FAQ, and try describing the problem out loud — half the time you\u2019ll spot it yourself.',
    ],
  },
  {
    icon: Lightbulb,
    kind: 'Idea or scope',
    feels: "\u201CI don\u2019t know what to build, or it feels too big.\u201D You\u2019re stuck on the what, not the how.",
    steps: [
      'Browse the Challenges and Project types pages for concrete, beginner-friendly ideas.',
      'Cut it down to the smallest version that would still be cool — you can always add more later.',
      'Start from a template so you\u2019re editing something that already runs instead of a blank page.',
    ],
  },
]

const quickFixes: Array<{ problem: string; fix: string }> = [
  { problem: 'App won\u2019t deploy', fix: 'Open the Vercel build logs and fix the first error shown.' },
  { problem: 'AI calls fail', fix: 'Check your API key / AI Gateway is set in the project\u2019s env vars.' },
  { problem: 'Local pnpm dev errors', fix: 'Run pnpm install again and make sure you\u2019re on Node 20+.' },
  { problem: 'Env vars not working', fix: 'The file must be .env.local — save it and restart the dev server.' },  { problem: 'v0 can’t pull — GitHub looks connected but fails', fix: 'In v0 Settings → Git, fully disconnect and reconnect GitHub, re-grant repo access, then use Pull changes.' },]

function BlockerCard({ blocker }: Readonly<{ blocker: Blocker }>) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <blocker.icon className="size-5" />
        </span>
        <h3 className="font-display text-lg font-semibold">{blocker.kind}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{blocker.feels}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-harvest">Try this yourself</p>
      <ul className="mt-2 space-y-2">
        {blocker.steps.map((step) => (
          <li key={step} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <ArrowRight className="mt-1 size-3.5 shrink-0 text-primary" />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function HelpPage() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 md:pt-20">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-harvest/60" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
              Support
            </p>
          </div>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Stuck? Start here
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Getting stuck is part of building &mdash; everyone does. The fastest way out is to first
            work out <span className="font-medium text-foreground">what kind</span> of blocker
            you&rsquo;re hitting, then try a couple of quick things yourself. You&rsquo;ll often be
            unblocked in minutes, and when you do ask for help you&rsquo;ll get a much better answer.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-10 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">1. What kind of blocker is it?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Find the one that sounds most like you, then work through the steps.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {blockers.map((blocker) => (
              <BlockerCard key={blocker.kind} blocker={blocker} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-8 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">2. Quick fixes for common issues</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            {quickFixes.map((row, i) => (
              <div
                key={row.problem}
                className={`grid grid-cols-1 gap-1 p-4 sm:grid-cols-[1fr_2fr] sm:gap-4 ${
                  i > 0 ? 'border-t border-border' : ''
                }`}
              >
                <p className="font-medium">{row.problem}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{row.fix}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Can&rsquo;t see your issue here? Skim the{' '}
            <Link href="/faq" className="font-medium text-primary underline-offset-4 hover:underline">FAQ</Link> for
            more answers, and check the official docs &mdash;{' '}
            <a href="https://v0.dev/docs" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">v0</a>,{' '}
            <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">Vercel</a>, and the{' '}
            <a href="https://ai-sdk.dev/docs" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">AI SDK</a>. Still stuck after that? Ask for help below.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-8 sm:px-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LifeBuoy className="size-5" />
              </span>
              <h2 className="font-display text-xl font-semibold">3. Still stuck? Ask for help</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you&rsquo;ve worked through the steps above and you&rsquo;re still stuck, don&rsquo;t
              sit on it. Post in the Help channel with a screenshot of the error and one line on what
              you&rsquo;ve already tried &mdash; that&rsquo;s the fastest way to a good answer. No
              question is too basic.
            </p>
            <a
              href={TEAMS_HELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september group mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Ask in the Help channel
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
          <div className="rounded-2xl border border-harvest/30 bg-harvest/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-harvest/15 text-harvest">
                <Activity className="size-5" />
              </span>
              <h2 className="font-display text-xl font-semibold">4. Let us know how it&rsquo;s going</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              At the end of Week&nbsp;1, take 30 seconds for the Pulse Check. It helps us spot where
              people are stuck and get support to you &mdash; anonymous unless you add your name.
            </p>
            <a
              href={PULSE_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september group mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Open the Pulse Check
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Looking for tools and links instead? See{' '}
            <Link href="/resources" className="group font-medium text-primary underline-offset-4 hover:underline">
              Resources
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

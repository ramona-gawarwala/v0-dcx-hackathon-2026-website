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
import { CopyButton } from '@/components/copy-button'

const description =
  "Stuck? Classify the problem, capture the useful evidence, and try the smallest relevant fix. If you're still blocked, post a clear report in the Help channel."

export const metadata: Metadata = {
  title: 'Help · DCX AI Playground Hackathon 2026',
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
      'Record the service, exact sign-in message, account used, and time of the failure.',
      'Check the service-status links below before changing local settings.',
      'Use a private window only to test whether cookies are the cause; do not bypass company SSO, VPN, or device policy.',
      'If the error remains, confirm workspace or repository membership and ask the relevant owner to check access.',
    ],
  },
  {
    icon: Wrench,
    kind: 'Tool know-how',
    feels: "\u201CI\u2019m in, but I don\u2019t know how.\u201D You have access, but you\u2019re not sure how to prompt v0, push to GitHub, or deploy to Vercel.",
    steps: [
      'Choose one guide that matches your stack and complete its smallest working path before combining examples.',
      'Check the installed package and runtime versions before copying code from a tutorial.',
      'Ask an AI assistant with the relevant file, command, versions, expected result, and actual result — then review its diff and run the checks yourself.',
    ],
  },
  {
    icon: Brain,
    kind: 'Technical knowledge',
    feels: "\u201CThe code or concept isn\u2019t clicking.\u201D There\u2019s an error you don\u2019t understand, or you\u2019re not sure how something works.",
    steps: [
      'Reproduce it once and classify where it fails: install, build, browser, runtime/API, or Git.',
      'Capture the exact command or URL, actionable error, status code, timestamp, and request ID where available.',
      'Change one thing, then rerun the same check. If needed, reduce the problem to the smallest failing input or file.',
      'Before sharing logs with an AI or teammate, remove keys, tokens, cookies, personal data, and client information.',
    ],
  },
  {
    icon: Lightbulb,
    kind: 'Idea or scope',
    feels: "\u201CI don\u2019t know what to build, or it feels too big.\u201D You\u2019re stuck on the what, not the how.",
    steps: [
      'Define one user, one problem, one outcome, and one happy-path demo.',
      'Stub or remove integrations that are not needed to prove that path; use public or synthetic sample data.',
      'Start from a current quickstart or template, then add one differentiating feature and one graceful failure case.',
    ],
  },
]

type QuickFix = { problem: string; start: string; deeper: string }

const quickFixes: QuickFix[] = [
  {
    problem: 'Deployment build fails',
    start: 'Open the failed deployment\u2019s Build logs. The final “command exited” line is often only a summary — look just above it for the first actionable error, then run the same build command locally.',
    deeper: 'Compare the deployed commit, root directory, framework preset, Node version, package manager, and lockfile. Retry without build cache only when the evidence points to stale cache.',
  },
  {
    problem: 'Live app errors or stays blank',
    start: 'Reproduce it once, note the time, then inspect the browser Network/Console and Vercel Runtime Logs. Match the route, HTTP status, deployment, and request ID.',
    deeper: 'Narrow the log time window; filter by environment, branch, deployment, route, and status; then search the request ID. Compare Preview and Production configuration and inspect failed outgoing requests.',
  },
  {
    problem: 'AI calls fail',
    start: 'Capture the status and sanitized error from the browser Network panel, Runtime Logs, or AI Gateway request logs. Check authentication, model ID, rate or credit limits, and request size.',
    deeper: 'Handle both thrown errors and streamed `error` or `tool-error` parts. Use the Gateway request log and provider routing details to isolate the app, Gateway, or model provider.',
  },
  {
    problem: 'Local dev command fails',
    start: 'Run `node -v` and `pnpm -v`, then `pnpm install` and the exact project script. Follow that project\u2019s documented versions; the current AI SDK v7 quickstart requires Node 22+.',
    deeper: 'Run the production build and tests too. Keep the lockfile, and do not delete dependencies or caches until the error points there.',
  },
  {
    problem: 'Environment variable missing',
    start: 'For local Next.js secrets, use `.env.local` and restart the dev server. In Vercel, add the variable to the correct Development, Preview, or Production scope and create a new deployment.',
    deeper: 'Verify the variable name and deployment scope — never share its value. `vercel env pull` can sync Development variables for local use.',
  },
  {
    problem: 'v0 Git sync fails',
    start: 'Confirm the exact `owner/repo`, reconnect the intended repository, and check repository access under GitHub\u2019s Installed GitHub Apps. An organisation owner may need to configure access.',
    deeper: 'Compare the Git remote, branch, commit SHA, and Vercel production branch. The Authorized GitHub Apps screen does not control repository selection.',
  },
  {
    problem: 'AI output is wrong or inconsistent',
    start: 'Use a small input with a known answer. Inspect the prompt, retrieved chunks, tool inputs/results, and whether missing evidence is handled explicitly.',
    deeper: 'Create a repeatable evaluation set and change one variable at a time: model, prompt, retrieval, tool, or temperature. Compare results before keeping the change.',
  },
]

const helpRequestTemplate = `Expected result:
Actual result:
Where it fails: access / install / build / browser / runtime API / Git
URL or exact command:
Error text + HTTP status / request ID:
Environment: local / preview / production
Last working commit or last change:
What I already tried:

Remove all keys, tokens, cookies, personal data, and client information.`

const officialReferences = [
  { label: 'v0 documentation', href: 'https://v0.app/docs' },
  { label: 'Vercel build failures', href: 'https://vercel.com/docs/deployments/troubleshoot-a-build' },
  { label: 'Vercel runtime logs', href: 'https://vercel.com/docs/logs/runtime' },
  { label: 'Vercel environment variables', href: 'https://vercel.com/docs/environment-variables' },
  { label: 'AI SDK error handling', href: 'https://ai-sdk.dev/docs/ai-sdk-core/error-handling' },
  { label: 'AI Gateway request logs', href: 'https://vercel.com/docs/ai-gateway/observability-and-spend/observability' },
  { label: 'GitHub App repository access', href: 'https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps' },
  { label: 'VS Code AI security', href: 'https://code.visualstudio.com/docs/copilot/security' },
  { label: 'Vercel & v0 status', href: 'https://www.vercel-status.com/' },
  { label: 'GitHub status', href: 'https://www.githubstatus.com/' },
]

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
        <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-harvest/60" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
              Support
            </p>
          </div>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Stuck? Start here
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground">
            Getting stuck is part of building. A useful first step is to
            work out <span className="font-medium text-foreground">what kind</span> of blocker
            you&rsquo;re hitting, capture the evidence, then try the smallest relevant fix. That makes
            self-service faster and gives a teammate enough context to help when you escalate.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 pb-2 pt-8 sm:px-6">
          <div className="rounded-lg border border-harvest/30 bg-harvest/5 p-5 sm:p-6">
            <h2 className="font-display text-lg font-semibold">A 60-second triage before you change anything</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-harvest">1 · Locate it</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Is it access, install, build, browser, runtime/API, or Git?</p>
              </div>
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-harvest">2 · Capture it</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Keep the exact command or URL, error, status, timestamp, and request ID.</p>
              </div>
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-harvest">3 · Isolate it</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Change one thing and rerun the same check so you know what helped.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 pb-4 pt-8 sm:px-6">
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
        <div className="mx-auto max-w-5xl px-4 pb-4 pt-8 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">2. Quick fixes for common issues</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Start with the middle column. The deeper check is there when the obvious fix does not explain the failure.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            {quickFixes.map((row, i) => (
              <div
                key={row.problem}
                className={`grid grid-cols-1 gap-3 p-4 md:grid-cols-[0.8fr_1.4fr_1.4fr] md:gap-5 ${
                  i > 0 ? 'border-t border-border' : ''
                }`}
              >
                <p className="font-display font-semibold leading-snug">{row.problem}</p>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-harvest">Start here</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.start}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary dark:text-harvest">Go deeper</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.deeper}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="font-display text-base font-semibold">Official references used on this page</h3>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {officialReferences.map((reference) => (
                <li key={reference.href}>
                  <a
                    href={reference.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline dark:text-harvest"
                  >
                    {reference.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Can&rsquo;t see your issue? Check the <Link href="/faq" className="font-medium text-primary underline-offset-4 hover:underline dark:text-harvest">FAQ</Link>, then use the template below to ask for help.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LifeBuoy className="size-5" />
              </span>
              <h2 className="font-display text-xl font-semibold">3. Still stuck? Ask for help</h2>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Post the smallest useful report, not a screenshot alone. Include what you expected,
              where it failed, the sanitized error, environment, last change, and what you tried.
              Redact keys, tokens, cookies, personal data, and client information before sharing.
              No question is too basic.
            </p>
            <div className="relative mt-5">
              <CopyButton text={helpRequestTemplate} label="Copy help template" className="absolute right-3 top-3" />
              <pre className="overflow-x-auto rounded-lg border border-border bg-background/70 p-5 pt-12 font-mono text-xs leading-relaxed text-foreground">
                <code>{helpRequestTemplate}</code>
              </pre>
            </div>
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
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
          <div className="rounded-2xl border border-harvest/30 bg-harvest/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-harvest/15 text-harvest">
                <Activity className="size-5" />
              </span>
              <h2 className="font-display text-xl font-semibold">4. Let us know how it&rsquo;s going</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              At the end of Week&nbsp;1, take 30 seconds for the Pulse Check. It helps us spot where
              people are stuck and improve support. Its Microsoft Forms identity settings are
              managed by the organisers, so do not include sensitive information.
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

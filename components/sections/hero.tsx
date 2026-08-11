import { ArrowRight, Calendar, Users, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { REPO_URL } from '@/lib/content'

const facts = [
  { icon: Calendar, label: 'When', value: '1–14 Sep 2026' },
  { icon: Users, label: 'Teams', value: '2–5 people' },
  { icon: Sparkles, label: 'Cost', value: 'Free to join' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          DCX AI Hackathon · 2 weeks · part-time
        </div>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Build and ship an <span className="text-primary">AI-powered app</span> in two weeks.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Part-time, around your day job, using v0 + Vercel. Open to everyone — engineers, POs, BAs,
          designers, and first-timers. Done beats perfect.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start building in 5 minutes
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            How it works
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            Repo
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-card p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</dt>
                <dd className="font-display text-lg font-semibold">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

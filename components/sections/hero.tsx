import Link from 'next/link'
import { Calendar, Users, Sparkles, ArrowUpRight, ArrowRight } from 'lucide-react'
import { V0_COMMUNITY_URL, REGISTER_URL } from '@/lib/content'
import { CelebrateLink } from '@/components/celebrate-link'

const facts = [
  { icon: Calendar, label: 'When', value: '23 Sep – 7 Oct 2026', tone: 'bg-primary/15 text-primary' },
  { icon: Users, label: 'Teams', value: 'Solo or 2–5', tone: 'bg-accent/15 text-accent-foreground' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-14 sm:px-6 md:pt-28 md:pb-16">
        <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">DCX AI Hackathon</span>
          <span className="block bg-gradient-to-r from-harvest via-primary to-sprout bg-clip-text text-transparent">
            2026
          </span>
        </h1>

        <div className="mt-6 max-w-2xl space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            AI is reshaping how we deliver value for clients and the pace of change is fast. Those who
            thrive in the future won&rsquo;t be those who simply use AI, they&rsquo;ll be those who know how
            to combine their expertise with AI to solve problems, innovate faster, and create better
            outcomes.
          </p>
          <p>The capabilities of the latest tools are ever evolving and it can be hard to keep up.</p>
          <p>
            That&rsquo;s why we&rsquo;re launching the DCX AI Hackathon. A lightweight two-week sprint
            designed to create momentum and give you a chance to wrestle with some of the latest tooling,
            experiment with AI without worrying about running out of tokens for client work, and without
            needing to request time off of account work.
          </p>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${f.tone}`}>
                <f.icon className="size-5" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</dt>
                <dd className="font-display text-lg font-semibold">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CelebrateLink
            href={REGISTER_URL}
            className="btn-september group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Register
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CelebrateLink>
          <a
            href={V0_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-september-outline group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold"
          >
            <Sparkles className="size-4 text-primary" />
            See what&rsquo;s possible
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            href="/how-to-build"
            className="btn-september-outline group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold"
          >
            How to build
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Sparkles, LayoutTemplate, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { startSteps, V0_COMMUNITY_URL, VERCEL_TEMPLATES_URL } from '@/lib/content'

export function StartBuilding() {
  return (
    <section id="start-building" className="scroll-mt-16 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Start in 5 minutes"
          title="No setup. No local install. Just build."
          description="Describe what you want, deploy it, and get a live URL instantly. Everything else is optional."
        />

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {startSteps.map((s) => (
            <li key={s.step} className="relative">
              <span className="font-mono text-4xl font-bold text-primary/25">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-l-2 border-primary pl-5 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-primary">The one rule:</span> deploy early and often. A
          live URL that does one thing beats a perfect app on your laptop. Ship something small in
          week 1, then improve it in week 2.
        </div>

        <div className="mt-10">
          <p className="text-sm font-medium text-muted-foreground">
            Need a spark? Browse real builds and ready-made starters before you begin.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={V0_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Sparkles className="size-4" />
              See what&rsquo;s possible
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={VERCEL_TEMPLATES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september-outline group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold"
            >
              <LayoutTemplate className="size-4 text-primary" />
              Choose a template
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

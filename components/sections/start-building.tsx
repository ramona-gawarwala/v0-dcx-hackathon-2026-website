import { SectionHeading } from '@/components/section-heading'
import { startSteps } from '@/lib/content'

export function StartBuilding() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Start in 5 minutes"
          title="No setup. No local install. Just build."
          description="Describe what you want, deploy it, and get a live URL instantly. Everything else is optional."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {startSteps.map((s) => (
            <li key={s.step} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-4xl font-bold text-primary/25">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-primary">The one rule:</span> deploy early and often. A
          live URL that does one thing beats a perfect app on your laptop. Ship something small in
          week 1, then improve it in week 2.
        </div>
      </div>
    </section>
  )
}

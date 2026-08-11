import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projectTypes } from '@/lib/content'

export function ProjectTypes() {
  return (
    <section id="project-types" className="scroll-mt-16 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Project types"
          title="Not sure what to build? Pick a type first."
          description="It answers &ldquo;what kind of thing am I making?&rdquo; so you don't get stuck choosing tools. Start from the one closest to your idea, then scope it small enough to demo."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((t) => (
            <article
              key={t.title}
              className="card-september flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <t.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-1.5 text-sm font-medium text-foreground">{t.goal}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.examples}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {t.checklist.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <Check className="size-3 text-primary" />
                    {c}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Good for: </span>
                {t.goodFor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

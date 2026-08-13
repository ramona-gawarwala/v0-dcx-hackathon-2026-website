import { SectionHeading } from '@/components/section-heading'
import { benefits } from '@/lib/content'

export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Why take part"
          title="What you get out of it"
          description="Whether you win or not, everyone walks away with something — recognition, real skills, and evidence of your growth."
        />

        <div className="reveal-stagger mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article key={b.title} className="flex flex-col">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

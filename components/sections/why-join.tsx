import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { whyJoinIntro, whyJoinReasons } from '@/lib/content'

export function WhyJoin() {
  return (
    <section id="why-join" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Why join"
          title="Two weeks that actually move you forward"
          description={whyJoinIntro}
        />

        <div className="reveal-stagger mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {whyJoinReasons.map((r) => (
            <article key={r.title} className="flex flex-col">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-lg font-semibold">Want the full breakdown of what you get?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Certificates, awards, feedback, and more — laid out in detail.
            </p>
          </div>
          <Link
            href="/benefits"
            className="btn-september group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            See what you get
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

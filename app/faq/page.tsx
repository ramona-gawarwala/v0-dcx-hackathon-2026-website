import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/faq-accordion'
import { faqGroups } from '@/lib/faq'

export const metadata: Metadata = {
  title: 'FAQ · DCX AI Hackathon 2026',
  description:
    'Quick answers about the DCX AI Hackathon 2026 — getting started, key AI concepts, building your app, rules, and deployment.',
}

export default function FaqPage() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Help
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Quick answers, grouped by topic. Still stuck? Grab a mentor or drop your question in the
            team channel with a screenshot of the error.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <FaqAccordion groups={faqGroups} />
        </div>
      </section>
    </main>
  )
}

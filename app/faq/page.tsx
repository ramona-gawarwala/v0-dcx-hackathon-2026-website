import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FaqAccordion } from '@/components/faq-accordion'
import { faqGroups } from '@/lib/faq'

export const metadata: Metadata = {
  title: 'FAQ · DCX AI Hackathon 2026',
  description:
    'Quick answers about the DCX AI Hackathon 2026 — getting started, key AI concepts, building your app, rules, and deployment.',
}

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>
            <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
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
      <SiteFooter />
    </>
  )
}

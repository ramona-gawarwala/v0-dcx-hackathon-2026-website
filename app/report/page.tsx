import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { REPORT_URL } from '@/lib/content'

const description =
  "Report harassment, unsafe behaviour, or anything that doesn't feel right. We don't track your name, so the form is anonymous — sharing your name is optional."

export const metadata: Metadata = {
  title: 'Report a problem · DCX AI Hackathon 2026',
  description,
}

export default function ReportPage() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 md:pt-20">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-harvest/60" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
              Community
            </p>
          </div>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Report a problem
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Something felt off? Please tell us. You won&rsquo;t be overreacting, and you won&rsquo;t be
            causing trouble &mdash; if you see or experience harassment, feel unsafe, or something just
            doesn&rsquo;t sit right, we want to know so we can help.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <p>
              The form is <span className="font-medium text-foreground">anonymous</span> &mdash; we
              don&rsquo;t record your name. You only share your name and email if you&rsquo;d like us to
              follow up with you. Every report is handled confidentially and taken seriously.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">Fill in the report form</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              It takes a couple of minutes. Tell us what happened in your own words &mdash; add as
              much or as little detail as you&rsquo;re comfortable with. Leave your name and email only
              if you&rsquo;d like a reply.
            </p>
            <a
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september group mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Report a problem
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Opens a secure Microsoft Form in a new tab.</p>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Not sure what counts? See the{' '}
            <Link href="/code-of-conduct" className="font-medium text-primary underline-offset-4 hover:underline">
              Code of Conduct
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

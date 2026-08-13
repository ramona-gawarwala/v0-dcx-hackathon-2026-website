import type { Metadata } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Markdown } from '@/components/markdown'

const description = 'How we treat each other during the hackathon — be kind, be respectful, be safe.'

export const metadata: Metadata = {
  title: 'Code of Conduct · DCX AI Hackathon 2026',
  description,
}

// Drops the leading H1 so the page renders its own title.
function getContent(): string {
  const raw = fs.readFileSync(path.join(process.cwd(), 'docs', 'CODE_OF_CONDUCT.md'), 'utf8')
  return raw.replace(/^#[^\n]*\r?\n+/, '')
}

export default function CodeOfConductPage() {
  const content = getContent()

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
            Code of Conduct
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-12 sm:px-6">
          <Markdown content={content} />

          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">Need to report something?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Use the anonymous report form &mdash; we don&rsquo;t record your name, and you only
              share it if you&rsquo;d like us to follow up.
            </p>
            <Link
              href="/report"
              className="btn-september group mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Report a problem
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

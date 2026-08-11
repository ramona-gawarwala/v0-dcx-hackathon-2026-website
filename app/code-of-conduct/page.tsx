import type { Metadata } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { Markdown } from '@/components/markdown'

const description = 'How we treat each other during the hackathon — be kind, be respectful, be safe.'

export const metadata: Metadata = {
  title: 'Code of Conduct · DCX AI Hackathon 2026',
  description,
}

// Drops the leading H1 so the page renders its own title.
function getContent(): string {
  const raw = fs.readFileSync(path.join(process.cwd(), 'CODE_OF_CONDUCT.md'), 'utf8')
  return raw.replace(/^#[^\n]*\r?\n+/, '')
}

export default function CodeOfConductPage() {
  const content = getContent()

  return (
    <main>
      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Community
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Code of Conduct
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Markdown content={content} />
        </div>
      </section>
    </main>
  )
}

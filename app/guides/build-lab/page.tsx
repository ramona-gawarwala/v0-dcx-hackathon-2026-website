import type { Metadata } from 'next'
import Link from 'next/link'
import { Markdown } from '@/components/markdown'
import { buildLab, buildLabChapters } from '@/lib/build-lab'
import { getBuildLabIntro } from '@/lib/build-lab-content'

export const metadata: Metadata = {
  title: `${buildLab.title} · DCX AI Hackathon 2026`,
  description: buildLab.description,
}

export default function BuildLabOverviewPage() {
  const intro = getBuildLabIntro()

  return (
    <main>
      <section>
        <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 md:pt-20">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-harvest/60" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
              Guides
            </p>
          </div>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {buildLab.title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {buildLab.description}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-2 pt-10 sm:px-6">
          <Markdown content={intro} />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight">Chapters</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Six chapters, in order. Each stands on its own, but they build on the same app.
          </p>

          <ol className="mt-6 space-y-4">
            {buildLabChapters.map((chapter, index) => (
              <li key={chapter.slug}>
                <Link
                  href={`/guides/build-lab/${chapter.slug}`}
                  className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold">
                      <span className="text-muted-foreground">{index + 1}. </span>
                      {chapter.title}
                    </h3>
                    <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {chapter.levels}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {chapter.summary}
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span className="rounded bg-muted px-2 py-0.5">{chapter.difficulty}</span>
                    <span>{chapter.time}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <Link
            href={`/guides/build-lab/${buildLabChapters[0].slug}`}
            className="btn-september group mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Start with {buildLabChapters[0].title}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

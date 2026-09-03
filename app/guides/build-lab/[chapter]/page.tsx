import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BuildLabChapterSelect } from '@/components/build-lab-chapter-select'
import { Markdown } from '@/components/markdown'
import {
  buildLab,
  buildLabChapters,
  getAdjacentChapters,
  getBuildLabChapter,
} from '@/lib/build-lab'
import { getBuildLabChapterContent } from '@/lib/build-lab-content'

type Params = { params: Promise<{ chapter: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return buildLabChapters.map((chapter) => ({ chapter: chapter.slug }))
}

export async function generateMetadata({ params }: Readonly<Params>): Promise<Metadata> {
  const { chapter } = await params
  const current = getBuildLabChapter(chapter)
  if (!current) return {}
  return {
    title: `${current.title} · ${buildLab.title} · DCX AI Hackathon 2026`,
    description: current.summary,
  }
}

export default async function BuildLabChapterPage({ params }: Readonly<Params>) {
  const { chapter } = await params
  const current = getBuildLabChapter(chapter)
  if (!current) notFound()

  const content = getBuildLabChapterContent(chapter)
  const index = buildLabChapters.findIndex((entry) => entry.slug === chapter)
  const { prev, next } = getAdjacentChapters(chapter)

  return (
    <main>
      <section>
        <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 md:pt-20">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
            <Link
              href="/guides/build-lab"
              className="uppercase tracking-[0.2em] text-harvest hover:underline"
            >
              Build lab
            </Link>
            <span aria-hidden="true">·</span>
            <span>
              Chapter {index + 1} of {buildLabChapters.length}
            </span>
            <span aria-hidden="true">·</span>
            <span>{current.levels}</span>
          </div>
          <div className="mt-4 flex flex-col gap-2 rounded-xl border border-harvest/30 bg-harvest/5 p-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
              Jump to section
            </span>
            <BuildLabChapterSelect current={current.slug} />
          </div>
          <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {current.title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {current.summary}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6">
          <Markdown content={content} />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <nav
            aria-label="Chapter navigation"
            className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/guides/build-lab/${prev.slug}`}
                className="group rounded-xl border-2 border-harvest/30 bg-harvest/5 p-5 transition-colors hover:border-harvest hover:bg-harvest/10"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest transition-transform group-hover:-translate-x-0.5">
                  ← Previous
                </span>
                <span className="mt-2 block font-display text-lg font-semibold">{prev.title}</span>
              </Link>
            ) : (
              <Link
                href="/guides/build-lab"
                className="group rounded-xl border-2 border-harvest/30 bg-harvest/5 p-5 transition-colors hover:border-harvest hover:bg-harvest/10"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest transition-transform group-hover:-translate-x-0.5">
                  ← Overview
                </span>
                <span className="mt-2 block font-display text-lg font-semibold">Build lab</span>
              </Link>
            )}
            {next && (
              <Link
                href={`/guides/build-lab/${next.slug}`}
                className="group rounded-xl border-2 border-harvest/30 bg-harvest/5 p-5 text-right transition-colors hover:border-harvest hover:bg-harvest/10 sm:col-start-2"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest transition-transform group-hover:translate-x-0.5">
                  Next →
                </span>
                <span className="mt-2 block font-display text-lg font-semibold">{next.title}</span>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </main>
  )
}

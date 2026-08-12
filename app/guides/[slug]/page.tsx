import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/markdown'
import { guides, getGuide, getGuideContent } from '@/lib/guides'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Readonly<Params>): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return {
    title: `${guide.title} · DCX AI Hackathon 2026`,
    description: guide.description,
  }
}

export default async function GuidePage({ params }: Readonly<Params>) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const content = getGuideContent(slug)

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
            {guide.title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {guide.description}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 pb-14 pt-12 sm:px-6">
          <Markdown content={content} />
        </div>
      </section>
    </main>
  )
}


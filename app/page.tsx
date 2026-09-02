import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { BenefitsBanner } from '@/components/sections/benefits-banner'

const steps = [
  {
    n: '01',
    title: 'Pick an idea',
    body: 'Choose a project type and one useful problem. Add AI inside the app only if it improves the experience.',
  },
  {
    n: '02',
    title: 'Build and ship',
    body: 'Use v0 + Vercel to build a working slice and deploy it to a live URL, with no local setup required.',
  },
  {
    n: '03',
    title: 'Demo it',
    body: 'Show your app doing one thing well, then submit by 23:59 BST on 7 October. Done beats perfect.',
  },
]

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BenefitsBanner />

      <section className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            How it works, in three steps
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A part-time, two-week sprint. Here&rsquo;s the whole journey.
          </p>

          <ol className="reveal-stagger mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="font-mono text-4xl font-bold text-primary/25">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-to-build"
              className="btn-september group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              How to build
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="btn-september-outline group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold"
            >
              See how it works
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Sparkles, LayoutTemplate, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { startSteps, V0_COMMUNITY_URL, VERCEL_TEMPLATES_URL } from '@/lib/content'

export function StartBuilding() {
  return (
    <section id="start-building" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Start in 5 minutes"
          title="No local install. Just build."
          description="Describe what you want, deploy it, and open the live URL. Complete any account prompts along the way."
        />

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {startSteps.map((s) => (
            <li key={s.step} className="relative">
              <span className="font-mono text-4xl font-bold text-primary/25">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-l-2 border-primary pl-5 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-primary">The one rule:</span> deploy early and often. A
          live URL that does one thing beats a perfect app on your laptop. Ship something small in
          week 1, then improve it in week 2.
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-semibold">Two ways to build</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Both are welcome &mdash; pick whichever feels comfortable.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-display text-base font-semibold">All on v0 + Vercel &mdash; no local setup</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Describe your app in v0, refine it in the browser, and deploy it for a live URL.
                Best if you want to do the whole build and deploy on Vercel and have enough v0
                credits.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Want to go further after the event? The{' '}
                <Link
                  href="/guides/build-lab"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Build lab
                </Link>{' '}
                walks the whole v0 + Vercel AI stack, step by step.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="font-display text-base font-semibold">Start on v0, refine locally</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Generate the app in v0, connect the intended GitHub repository, then pull it to
                your machine to refine in your own editor &mdash; this needs a local setup &mdash;
                and publish from Vercel when you&rsquo;re ready. Best if you want more control.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Either way, make your repo public and deploy a live URL before you submit. Full deploy
            steps are in the{' '}
            <Link
              href="/guides/deployment-guide"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Deployment guide
            </Link>
            , and what to hand in is on the{' '}
            <Link
              href="/submit"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Submit page
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm font-medium text-muted-foreground">
            Need a spark? Browse real builds and ready-made starters before you begin.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={V0_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Sparkles className="size-4" />
              See what&rsquo;s possible
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={VERCEL_TEMPLATES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september-outline group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold"
            >
              <LayoutTemplate className="size-4 text-primary" />
              Choose a template
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

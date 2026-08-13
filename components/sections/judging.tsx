import { Trophy, Scale } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { CriteriaDonut, criteriaDotColors } from '@/components/criteria-donut'
import { CountUp } from '@/components/count-up'
import { ReactionCluster } from '@/components/reaction-cluster'
import { judgingCriteria, awards } from '@/lib/content'

export function Judging() {
  return (
    <section id="judging" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Judging"
          title="Working demos win — not slides"
          description="Two ways to win: judges score each team's 2–3 minute demo, and every participant votes for a People's Choice. Beginners and non-engineers can win too."
        />

        <div className="reveal-stagger mt-12 space-y-6">
          <div className="rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Scale className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">How each demo is scored</h3>
                <p className="text-sm text-muted-foreground">100 points, split across five criteria.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
              <div className="w-44 shrink-0">
                <CriteriaDonut />
              </div>
              <ul className="w-full space-y-4">
                {judgingCriteria.map((c, i) => (
                  <li key={c.criterion}>
                    <p className="flex items-center gap-2 font-display font-semibold">
                      <span
                        aria-hidden="true"
                        className={`size-2.5 shrink-0 rounded-full ${criteriaDotColors[i % criteriaDotColors.length]}`}
                      />
                      {c.criterion}
                      <CountUp
                        end={c.weight}
                        suffix="%"
                        className="font-mono text-sm font-semibold text-primary"
                      />
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{c.question}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-harvest/15 text-harvest">
                <Trophy className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">Awards</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple awards — you don&apos;t need a finished product to win.
                </p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((a) => (
                <li
                  key={a}
                  className="card-september flex items-center gap-2.5 rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm font-medium"
                >
                  <Trophy className="size-4 shrink-0 text-harvest" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              People&apos;s Choice is voted by participants — share your app in the Submissions
              channel to enter. React with 👍 to every project you&apos;d love to try; most
              reactions wins. One post per team.
            </p>
            <ReactionCluster />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { judgingCriteria, awards } from '@/lib/content'

export function Judging() {
  return (
    <section id="judging" className="scroll-mt-16 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Judging"
          title="Working demos win — not slides"
          description="Two ways to win: judges score each team's 2–3 minute demo, and every participant votes for a People's Choice. Beginners and non-engineers can win too."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="font-display text-lg font-semibold">Criteria</h3>
            <ul className="mt-6 space-y-6">
              {judgingCriteria.map((c) => (
                <li key={c.criterion}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-display font-semibold">{c.criterion}</p>
                    <span className="font-mono text-sm font-semibold text-primary">{c.weight}%</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.question}</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${c.weight}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">Weights are a guide — adjust to your event goal.</p>
          </div>

          <div>
            <span className="flex size-11 items-center justify-center rounded-xl bg-harvest/15 text-harvest">
              <Trophy className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">Awards</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Multiple awards — you don't need a finished product to win.
            </p>
            <ul className="mt-5 space-y-3">
              {awards.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm font-medium">
                  <Trophy className="size-4 shrink-0 text-harvest" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              People&apos;s Choice is voted by participants — share your app in the Submissions
              channel to enter. React with 👍 to every project you&apos;d love to try; most
              reactions wins. One post per team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Users, Clock, Target, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { schedule } from '@/lib/content'

const basics = [
  { icon: Users, title: 'Teams', body: '2–5 people. Solo is allowed, but a team is more fun — and mixed teams tend to build better products.' },
  { icon: Clock, title: 'Duration', body: 'Two weeks, 1–14 September. Part-time — build around your day job, no need to drop everything.' },
  { icon: Target, title: 'Goal', body: 'Ship a working, demoable AI app. Aim to finish ~25% of your big idea — small enough to demo.' },
  { icon: Wrench, title: 'Tools', body: 'v0 + Vercel. Use any AI model available via the AI Gateway.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="The format, the schedule, the goal"
          description="A part-time, two-week sprint. Pick a challenge, build a slice, and demo it."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {basics.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-semibold">Schedule</h3>
            <ol className="mt-4">
              {schedule.map((s, i) => (
                <li
                  key={s.when}
                  className="flex gap-4 border-l-2 border-primary/20 pl-4 pb-5 last:pb-0"
                >
                  <div className="relative -ml-[21px] mt-1 size-3 shrink-0 rounded-full border-2 border-primary bg-background" />
                  <div className="-mt-0.5">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                      {s.when}
                    </p>
                    <p className="text-sm text-foreground">{s.what}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

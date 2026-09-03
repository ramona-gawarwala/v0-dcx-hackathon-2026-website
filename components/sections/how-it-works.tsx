import { Users, Clock, Target, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { schedule } from '@/lib/content'

const basics = [
  { icon: Users, title: 'Teams', body: 'Enter solo or as a team of 2–5 — both are free to join. A team can bring complementary skills and perspectives.' },
  { icon: Clock, title: 'Duration', body: 'Two weeks, 7–21 September. Part-time and self-paced — no daily session and no full days blocked. Work with your team around your day job.' },
  { icon: Target, title: 'Goal', body: 'Ship a working, demoable app built with AI. Runtime AI is optional. Aim to finish ~25% of your big idea.' },
  { icon: Wrench, title: 'Tools', body: 'Build with v0 and deploy on Vercel. Use AI Gateway only if your finished app needs model calls.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="The format, the schedule, the goal"
          description="A part-time, two-week sprint. Pick an idea, build a slice, and demo it."
        />

        <div className="reveal-stagger mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {basics.map((b) => (
            <div key={b.title}>
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <b.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-base font-semibold">Two-week timeline</h3>
          <ol className="reveal-stagger mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
            {schedule.map((s, i) => (
              <li key={s.when} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {i < schedule.length - 1 && (
                    <span aria-hidden="true" className="hidden h-0.5 flex-1 rounded-full bg-primary/20 lg:block" />
                  )}
                </div>
                <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
                  {s.when}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{s.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

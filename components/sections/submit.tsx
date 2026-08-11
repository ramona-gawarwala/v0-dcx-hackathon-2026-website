import { Check, ArrowRight, CalendarClock } from 'lucide-react'
import { submitChecklist } from '@/lib/content'

const readmeTemplate = `# [Project name]

[One-line pitch — what it does, for whom.]

- Live app: [your Vercel URL]
- Demo video: [link]
- Challenge: [which one]
- Team: [names]`

export function Submit() {
  return (
    <section id="submit" className="scroll-mt-16 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">Submit</p>
          <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-harvest/40 bg-harvest/10 px-4 py-1.5 text-sm font-medium text-harvest">
            <CalendarClock className="size-4" />
            Deadline
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Sunday 14 September 2026
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-background/70">
            Late = not judged, so submit early and update if needed. Record your video early — tech
            fails at the last minute.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-lg font-semibold">Submission checklist</h3>
            <ul className="mt-5 space-y-3">
              {submitChecklist.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-harvest/20 text-harvest">
                    <Check className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-0.5 text-sm text-background/60">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Add this to your repo</h3>
            <p className="mt-1 text-sm text-background/60">
              Drop a short README at the top of your project so judges find everything fast.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-5 font-mono text-xs leading-relaxed text-background/90">
              <code>{readmeTemplate}</code>
            </pre>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed">
              <p className="font-semibold text-harvest">Before you submit</p>
              <p className="mt-1 text-background/70">
                Test your live link in an incognito window — a broken link means judges can&apos;t
                score you. Show the app doing the thing; skip the intro slides.
              </p>
            </div>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Deploy your app
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

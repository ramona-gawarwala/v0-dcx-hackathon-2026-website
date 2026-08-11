import { Check, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { submitChecklist } from '@/lib/content'

const readmeTemplate = `# [Project name]

[One-line pitch — what it does, for whom.]

- Live app: [your Vercel URL]
- Demo video: [link]
- Challenge: [which one]
- Team: [names]`

export function Submit() {
  return (
    <section id="submit" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Submit"
          title="Deadline: Sun 14 Sep 2026"
          description="Late = not judged, so submit early and update if needed. Record your video early — tech fails at the last minute."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-lg font-semibold">Submission checklist</h3>
            <ul className="mt-5 space-y-3">
              {submitChecklist.map((item) => (
                <li key={item.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Add this to your repo</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Drop a short README at the top of your project so judges find everything fast.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-border bg-foreground p-5 font-mono text-xs leading-relaxed text-background">
              <code>{readmeTemplate}</code>
            </pre>
            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground">
              <p className="font-semibold text-primary">Before you submit</p>
              <p className="mt-1 text-muted-foreground">
                Test your live link in an incognito window — a broken link means judges can't score
                you. Show the app doing the thing; skip the intro slides.
              </p>
            </div>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
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

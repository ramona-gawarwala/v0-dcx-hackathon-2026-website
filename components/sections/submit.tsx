import { Check, ArrowUpRight, CalendarClock, Trophy } from 'lucide-react'
import { submitChecklist, TEAMS_SUBMISSIONS_URL } from '@/lib/content'
import { CelebrateLink } from '@/components/celebrate-link'
import { CopyButton } from '@/components/copy-button'
import { Countdown } from '@/components/countdown'

const readmeTemplate = `# [Project name]

[One-line pitch — what it does, for whom.]

- Live app (public): [your live URL]
- Demo video: [link]
- Project type: [which one]
- AI-assisted build: [how AI helped you build]
- Runtime AI: [None / Seed / Sprout / Harvest]
- Team: [names]`

const peoplesChoicePost = `🚀 [Project name] — [one-line pitch]

👉 Try it: [live app URL]
🎬 Demo (2–3 min): [video link]
🧩 Project type: [which one] · Runtime AI: [None / Seed / Sprout / Harvest]
👥 Team: [names]

React with 👍 to every project you'd love to try — most reactions wins. One post per team; give others a look, not just your own.`

export function Submit() {
  return (
    <section id="submit" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-harvest/60" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">Submit</p>
          </div>
          <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-harvest/40 bg-harvest/10 px-4 py-1.5 text-sm font-medium text-harvest">
            <CalendarClock className="size-4" />
            Deadline
          </div>
          <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Monday 14 September 2026, 23:59 BST
          </h1>
          <Countdown />
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            On the morning of Monday 14 September we&apos;ll post the submission form in the
            Submissions channel — much like the registration form. Fill it in with your public
            repo, live app URL, project type, and demo video; that form is your official entry,
            and judges score from it. Both the repo and the URL must be public — no password or
            login wall. Late = not judged, so submit early and update the form if you need to.
            Want the People&apos;s Choice award too? Also share your app in the channel so other
            participants can vote.
          </p>
          <CelebrateLink
            href={TEAMS_SUBMISSIONS_URL}
            className="btn-september group mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Trophy className="size-4" />
            Open the Submissions channel
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CelebrateLink>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-lg font-semibold">Submission checklist</h3>
            <ul className="mt-5 space-y-4">
              {submitChecklist.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-harvest/15 text-harvest">
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
            <div className="relative mt-5">
              <CopyButton text={readmeTemplate} label="Copy README" className="absolute right-3 top-3" />
              <pre className="overflow-x-auto rounded-xl border border-border bg-muted p-5 pt-12 font-mono text-xs leading-relaxed text-foreground">
                <code>{readmeTemplate}</code>
              </pre>
            </div>
            <div className="mt-5 border-l-2 border-harvest pl-5 text-sm leading-relaxed">
              <p className="font-semibold text-harvest">Before you submit</p>
              <p className="mt-1 text-muted-foreground">
                Test your live link in an incognito window — a broken link means judges can&apos;t
                score you. Show the app doing the thing; skip the intro slides.
              </p>
            </div>
            <a
              href="/guides/deployment-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-september group mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Deploy your app
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Trophy className="size-5 shrink-0 text-harvest" />
            <h3 className="font-display text-lg font-semibold">Share for People&apos;s Choice</h3>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Optional, but it&apos;s how the participant-voted award works. Post your app in the
            Submissions channel using this format so people can try it and vote with a
            reaction. One post per team.
          </p>
          <div className="relative mt-5">
            <CopyButton
              text={peoplesChoicePost}
              label="Copy post"
              className="absolute right-3 top-3"
            />
            <pre className="overflow-x-auto rounded-xl border border-border bg-muted p-5 pt-12 font-mono text-xs leading-relaxed text-foreground">
              <code>{peoplesChoicePost}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

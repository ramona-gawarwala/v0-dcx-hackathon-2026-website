import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { levels, flavours, growthExample, challenges, type Challenge } from '@/lib/content'

const levelStyles: Record<
  Challenge['level'],
  { chip: string; accent: string; ring: string }
> = {
  Seed: { chip: 'bg-seed/10 text-seed border-seed/30', accent: 'text-seed', ring: 'hover:border-seed/40' },
  Sprout: { chip: 'bg-sprout/10 text-sprout border-sprout/30', accent: 'text-sprout', ring: 'hover:border-sprout/40' },
  Harvest: { chip: 'bg-harvest/10 text-harvest border-harvest/30', accent: 'text-harvest', ring: 'hover:border-harvest/40' },
}

export function Challenges() {
  return (
    <section id="challenges" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Challenges"
          title="Choose your level — Seed, Sprout, or Harvest"
          description="Your level is about how much the AI does for you, not how technical it looks. A sharp Seed beats a broken Harvest. Start where you're comfortable and climb if you have time."
        />

        {/* Levels */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {levels.map((l) => (
            <div key={l.name} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className={`flex size-12 items-center justify-center rounded-xl ${l.chipClass} border`}>
                  <l.icon className="size-6" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Level {l.n}
                </span>
              </div>
              <h3 className={`mt-5 font-display text-2xl font-bold ${l.colorClass}`}>{l.name}</h3>
              <p className="mt-1 text-sm font-medium text-foreground">{l.does}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.meaning}</p>
              <p className="mt-4 inline-flex rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {l.codeword}
              </p>
            </div>
          ))}
        </div>

        {/* Flavours + growth example */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-secondary/50 p-6">
            <h3 className="font-display text-lg font-semibold">Add a flavour (optional)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Modality — voice, images, or video — is a flavour you can add at any level, not a
              level of its own. A great way to stand out.
            </p>
            <ul className="mt-5 space-y-3">
              {flavours.map((f) => (
                <li key={f.name} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-sm">
                    <f.icon className="size-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{f.name}</span> — {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold">See it grow</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The same idea — a language-learning helper — grows as the AI does more.
            </p>
            <div className="mt-5 space-y-3">
              {growthExample.map((g) => (
                <div
                  key={g.level}
                  className="grid grid-cols-[80px_1fr] items-start gap-3 rounded-xl border border-border p-4"
                >
                  <span
                    className={`inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs font-semibold ${levelStyles[g.level as Challenge['level']].chip}`}
                  >
                    {g.level}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{g.what}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">The AI is {g.ai}.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge cards */}
        <h3 className="mt-16 font-display text-xl font-semibold">Starter challenges</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick one — a scoped idea beats a big vague one. Each works for any project type.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => {
            const s = levelStyles[c.level]
            return (
              <article
                key={c.title}
                className={`flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors ${s.ring}`}
              >
                <span className={`inline-flex w-fit items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${s.chip}`}>
                  {c.level}
                </span>
                <h4 className="mt-3 font-display text-lg font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Problem: </span>
                  {c.problem}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Build: </span>
                  {c.build}
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Done when</p>
                  <ul className="mt-2 space-y-2">
                    {c.done.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className={`mt-0.5 size-4 shrink-0 ${s.accent}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-8 rounded-xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Bring your own idea?</span> Go for it. Pick
          a level, keep it small enough to demo, and check it against the judging criteria. Everyone
          who takes part gets a certificate of participation and personal feedback on SuccessFactors.
        </p>
      </div>
    </section>
  )
}

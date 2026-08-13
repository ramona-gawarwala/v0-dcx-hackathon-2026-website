import { SectionHeading } from '@/components/section-heading'
import { GrowIt } from '@/components/grow-it'
import { ChallengeFilter } from '@/components/challenge-filter'
import { levels, flavours, type Challenge } from '@/lib/content'

const levelStyles: Record<
  Challenge['level'],
  { chip: string; accent: string; band: string }
> = {
  Seed: {
    chip: 'bg-seed/15 text-harvest border-seed/40',
    accent: 'text-harvest',
    band: 'bg-seed text-seed-foreground',
  },
  Sprout: {
    chip: 'bg-sprout/12 text-sprout border-sprout/30',
    accent: 'text-sprout',
    band: 'bg-sprout text-sprout-foreground',
  },
  Harvest: {
    chip: 'bg-harvest/10 text-harvest border-harvest/30',
    accent: 'text-harvest',
    band: 'bg-harvest text-harvest-foreground',
  },
}

const barHeights = ['h-2.5', 'h-4', 'h-6']

function GrowthMeter({ level }: Readonly<{ level: number }>) {
  return (
    <div className="flex items-end gap-1.5" aria-hidden="true">
      {barHeights.map((h, i) => (
        <span
          key={h}
          className={`w-2.5 rounded-sm ${h} ${i < level ? 'bg-current' : 'bg-current/25'}`}
        />
      ))}
    </div>
  )
}

export function Challenges() {
  return (
    <section id="challenges" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Challenges"
          title="Choose your level — Seed, Sprout, or Harvest"
          description="Your level is about how much the AI does for you, not how technical it looks. A sharp Seed beats a broken Harvest. Start where you're comfortable and climb if you have time."
        />

        {/* Levels */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {levels.map((l) => {
            const s = levelStyles[l.name as Challenge['level']]
            return (
              <div
                key={l.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className={`flex items-center justify-between px-6 py-4 ${s.band}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-current/15">
                      <l.icon className="size-6" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-widest opacity-80">
                        Level {l.n}
                      </p>
                      <h3 className="font-display text-2xl font-bold leading-tight">{l.name}</h3>
                    </div>
                  </div>
                  <GrowthMeter level={l.n} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold text-foreground">{l.does}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{l.meaning}</p>
                  <p className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${s.chip}`}>
                    {l.codeword}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Flavours + growth example */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
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

          <GrowIt />
        </div>

        {/* Challenge cards */}
        <h3 className="mt-16 font-display text-xl font-semibold">Starter challenges</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick one — a scoped idea beats a big vague one. Each works for any project type.
        </p>
        <ChallengeFilter />

        <p className="mt-8 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Bring your own idea?</span> Go for it. Pick
          a level, keep it small enough to demo, and check it against the judging criteria. Everyone
          who takes part gets a certificate of participation and personal feedback on SuccessFactors.
        </p>
      </div>
    </section>
  )
}

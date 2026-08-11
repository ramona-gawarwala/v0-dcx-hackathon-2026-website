import { Calendar, Users, Sparkles } from 'lucide-react'

const facts = [
  { icon: Calendar, label: 'When', value: '1–14 Sep 2026', tone: 'bg-seed/20 text-harvest' },
  { icon: Users, label: 'Teams', value: 'Solo or 2–5', tone: 'bg-sprout/15 text-sprout' },
  { icon: Sparkles, label: 'Cost', value: 'Free to join', tone: 'bg-primary/12 text-primary' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-border) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(120% 90% at 50% 0%, black 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, black 30%, transparent 78%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 size-[32rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'conic-gradient(from 140deg at 50% 50%, var(--color-seed), var(--color-sprout), var(--color-harvest), var(--color-seed))',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          DCX AI Hackathon · 2 weeks · part-time
        </div>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Build and ship an{' '}
          <span className="bg-gradient-to-r from-harvest via-primary to-sprout bg-clip-text text-transparent">
            AI-powered app
          </span>{' '}
          in two weeks.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Part-time, around your day job, using v0 + Vercel. Open to everyone — engineers, POs, BAs,
          designers, and first-timers. Done beats perfect.
        </p>

        <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-card p-5">
              <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${f.tone}`}>
                <f.icon className="size-5" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</dt>
                <dd className="font-display text-lg font-semibold">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

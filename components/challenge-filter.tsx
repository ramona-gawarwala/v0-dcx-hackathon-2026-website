'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { challenges, type Challenge } from '@/lib/content'

const levelStyles: Record<Challenge['level'], { chip: string; accent: string }> = {
  Seed: { chip: 'bg-seed/15 text-harvest border-seed/40', accent: 'text-harvest' },
  Sprout: { chip: 'bg-sprout/12 text-sprout border-sprout/30', accent: 'text-sprout' },
  Harvest: { chip: 'bg-harvest/10 text-harvest border-harvest/30', accent: 'text-harvest' },
}

const FILTERS = ['All', 'Seed', 'Sprout', 'Harvest'] as const
type Filter = (typeof FILTERS)[number]

const filterHint: Record<Filter, string> = {
  All: 'Every challenge',
  Seed: 'One model response',
  Sprout: 'Uses evidence or a tool',
  Harvest: 'Runs bounded steps',
}

export function ChallengeFilter() {
  const [active, setActive] = useState<Filter>('All')
  const shown = active === 'All' ? challenges : challenges.filter((c) => c.level === active)

  return (
    <>
      <fieldset className="mt-5 flex flex-wrap items-center gap-2 border-0 p-0">
        <legend className="sr-only">Filter challenges by level</legend>
        {FILTERS.map((f) => {
          const isActive = f === active
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              title={filterHint[f]}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {f}
            </button>
          )
        })}
        <span className="ml-1 text-xs text-muted-foreground">{filterHint[active]}</span>
      </fieldset>

      <div className="reveal-stagger mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => {
          const s = levelStyles[c.level]
          return (
            <article
              key={c.title}
              className="card-september flex flex-col rounded-2xl border border-border bg-card p-6"
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
    </>
  )
}

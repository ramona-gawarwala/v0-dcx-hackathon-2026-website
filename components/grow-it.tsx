'use client'

import { useState } from 'react'
import { growthIdeas, type GrowthIdea } from '@/lib/content'

const levelChip: Record<GrowthIdea['steps'][number]['level'], string> = {
  Seed: 'bg-seed/15 text-harvest border-seed/40',
  Sprout: 'bg-sprout/12 text-sprout border-sprout/30',
  Harvest: 'bg-harvest/10 text-harvest border-harvest/30',
}

export function GrowIt() {
  const [active, setActive] = useState(0)
  const idea = growthIdeas[active]

  return (
    <div>
      <h3 className="font-display text-lg font-semibold">See it grow</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Start with a Seed you can demo, then add features as you find time — the same idea grows as
        the AI does more.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {growthIdeas.map((g, i) => (
          <button
            key={g.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              i === active
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:bg-muted'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm font-medium text-foreground">{idea.tagline}</p>
      <div className="mt-3 space-y-4">
        {idea.steps.map((s) => (
          <div key={s.level} className="grid grid-cols-[80px_1fr] items-start gap-3">
            <span
              className={`inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs font-semibold ${levelChip[s.level]}`}
            >
              {s.level}
            </span>
            <p className="text-sm text-foreground">{s.what}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

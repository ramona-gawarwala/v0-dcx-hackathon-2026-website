'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Lightbulb } from 'lucide-react'
import type { ProjectType } from '@/lib/content'

export function ProjectTypeCard({ type: t }: Readonly<{ type: ProjectType }>) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="[perspective:1200px]">
      <div
        className={`relative grid transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front */}
        <article
          aria-hidden={flipped}
          className={`card-september flex h-full flex-col rounded-2xl border border-border bg-card p-6 [backface-visibility:hidden] [grid-area:1/1] ${
            flipped ? 'pointer-events-none' : ''
          }`}
        >
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <t.icon className="size-6" />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
          <p className="mt-1.5 text-sm font-medium text-foreground">{t.goal}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.examples}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {t.checklist.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
              >
                <Check className="size-3 text-primary" />
                {c}
              </span>
            ))}
          </div>

          <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Good for: </span>
            {t.goodFor}
          </p>

          <button
            type="button"
            onClick={() => setFlipped(true)}
            tabIndex={flipped ? -1 : 0}
            className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Lightbulb className="size-3.5 text-primary" />
            See idea starters
          </button>
        </article>

        {/* Back */}
        <article
          aria-hidden={!flipped}
          className={`flex h-full flex-col rounded-2xl border border-primary/30 bg-card p-6 [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)] ${
            flipped ? '' : 'pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="size-4 text-primary" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
              Idea starters
            </p>
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold">{t.title}</h3>

          <ul className="mt-4 flex-1 space-y-2.5">
            {t.ideas.map((idea) => (
              <li key={idea} className="flex items-start gap-2 text-sm text-foreground">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {idea}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-muted-foreground">
            Scope one to a Seed you can demo, then grow it.
          </p>

          <button
            type="button"
            onClick={() => setFlipped(false)}
            tabIndex={flipped ? 0 : -1}
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-3.5" />
            Back
          </button>
        </article>
      </div>
    </div>
  )
}

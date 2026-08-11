'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type FaqItem = { q: string; a: string }
export type FaqGroup = { group: string; items: FaqItem[] }

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-display text-base font-medium">{item.q}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
      )}
    </div>
  )
}

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-10">
      {groups.map((g) => (
        <div key={g.group}>
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {g.group}
          </h2>
          <div className="mt-3 rounded-2xl border border-border bg-card px-6">
            {g.items.map((item) => (
              <FaqRow key={item.q} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

'use client'

import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export type FaqItem = { q: string; a: string }
export type FaqGroup = { group: string; items: FaqItem[] }

// Renders inline markdown links [text](url) and `code` from answer strings.
function renderCode(text: string, keyBase: number): ReactNode[] {
  const nodes: ReactNode[] = []
  const parts = text.split(/`([^`]+)`/)
  parts.forEach((part, i) => {
    if (part === '') return
    if (i % 2 === 1) {
      nodes.push(
        <code key={`${keyBase}-c${i}`} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">
          {part}
        </code>,
      )
    } else {
      nodes.push(part)
    }
  })
  return nodes
}

function renderAnswer(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  let cursor = 0
  while (cursor < text.length) {
    const open = text.indexOf('[', cursor)
    if (open === -1) break
    const close = text.indexOf(']', open)
    if (close === -1 || text[close + 1] !== '(') {
      cursor = open + 1
      continue
    }
    const end = text.indexOf(')', close + 2)
    if (end === -1) {
      cursor = open + 1
      continue
    }
    const label = text.slice(open + 1, close)
    const href = text.slice(close + 2, end)
    if (open > last) nodes.push(...renderCode(text.slice(last, open), key++))
    const external = href.startsWith('http://') || href.startsWith('https://')
    nodes.push(
      <a
        key={`l${key++}`}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {label}
      </a>,
    )
    last = end + 1
    cursor = end + 1
  }
  if (last < text.length) nodes.push(...renderCode(text.slice(last), key++))
  return nodes
}

function FaqRow({ item }: Readonly<{ item: FaqItem }>) {
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
        <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{renderAnswer(item.a)}</p>
      )}
    </div>
  )
}

export function FaqAccordion({ groups }: Readonly<{ groups: FaqGroup[] }>) {
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

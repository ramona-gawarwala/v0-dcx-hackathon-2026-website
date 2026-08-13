'use client'

import { useMemo, useState, type ReactNode } from 'react'
import { ChevronDown, ChevronsDownUp, ChevronsUpDown } from 'lucide-react'
import { MermaidDiagram } from '@/components/mermaid-diagram'

export type FaqItem = { q: string; a: string; diagram?: string }
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

// Renders **bold** and `code` within a plain-text slice (no links).
function renderFormatting(text: string, keyBase: number): ReactNode[] {
  const nodes: ReactNode[] = []
  const parts = text.split(/\*\*([^*]+)\*\*/)
  parts.forEach((part, i) => {
    if (part === '') return
    if (i % 2 === 1) {
      nodes.push(
        <strong key={`${keyBase}-b${i}`} className="font-semibold text-foreground">
          {renderCode(part, keyBase * 100 + i)}
        </strong>,
      )
    } else {
      nodes.push(...renderCode(part, keyBase * 100 + i))
    }
  })
  return nodes
}

// Renders inline markdown links [text](url), **bold**, and `code` within a single paragraph.
function renderInline(text: string): ReactNode[] {
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
    if (open > last) nodes.push(...renderFormatting(text.slice(last, open), key++))
    const external = href.startsWith('http://') || href.startsWith('https://')
    nodes.push(
      <a
        key={`l${key++}`}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="font-medium text-primary underline underline-offset-2 hover:text-primary/80 dark:text-harvest dark:hover:text-harvest/80"
      >
        {label}
      </a>,
    )
    last = end + 1
    cursor = end + 1
  }
  if (last < text.length) nodes.push(...renderFormatting(text.slice(last), key++))
  return nodes
}

// Splits an answer into paragraphs on blank lines so long answers can breathe.
function renderAnswer(text: string): ReactNode[] {
  return text
    .split(/\n{2,}/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => <p key={para.slice(0, 32)}>{renderInline(para)}</p>)
}


function FaqRow({ item, id, open, onToggle }: Readonly<{ item: FaqItem; id: string; open: boolean; onToggle: (id: string) => void }>) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-4 rounded-lg py-5 text-left"
      >
        <span
          className={`min-w-0 font-display text-[17px] font-semibold leading-6 transition-colors sm:text-lg sm:leading-7 ${
            open
              ? 'text-primary dark:text-harvest'
              : 'text-foreground group-hover:text-primary dark:group-hover:text-harvest'
          }`}
        >
          {item.q}
        </span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 transition-[color,transform] duration-200 sm:mt-1 ${
            open
              ? 'rotate-180 text-primary dark:text-harvest'
              : 'text-muted-foreground group-hover:text-primary dark:group-hover:text-harvest'
          }`}
        />
      </button>
      {open && (
        <div className="mx-auto max-w-[84ch] space-y-3.5 pb-6 text-[15px] leading-7 text-muted-foreground">
          {renderAnswer(item.a)}
          {item.diagram && (
            <div className="pt-1">
              <MermaidDiagram chart={item.diagram} breakout={false} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function FaqAccordion({ groups }: Readonly<{ groups: FaqGroup[] }>) {
  const allIds = useMemo(
    () => groups.flatMap((g) => g.items.map((item) => `${g.group}::${item.q}`)),
    [groups],
  )
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())
  const allOpen = openIds.size === allIds.length

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const toggleAll = () => setOpenIds(allOpen ? new Set() : new Set(allIds))

  return (
    <div className="space-y-10">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={toggleAll}
          aria-expanded={allOpen}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline dark:text-harvest"
        >
          {allOpen ? <ChevronsDownUp className="size-4" /> : <ChevronsUpDown className="size-4" />}
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      {groups.map((g) => (
        <div key={g.group}>
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-harvest">
            {g.group}
          </h2>
          <div className="mt-3 rounded-2xl border border-border bg-card px-5 sm:px-6">
            {g.items.map((item) => {
              const id = `${g.group}::${item.q}`
              return <FaqRow key={id} id={id} item={item} open={openIds.has(id)} onToggle={toggle} />
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

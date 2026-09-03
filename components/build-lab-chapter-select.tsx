'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Check, ChevronDown } from 'lucide-react'
import { buildLabChapters } from '@/lib/build-lab'
import { cn } from '@/lib/utils'

/**
 * Jump-to-chapter picker. Uses a custom menu rather than a native <select> so
 * the dropdown surface follows the site theme — native option popups are drawn
 * by the OS and can't be restyled in dark mode.
 */
export function BuildLabChapterSelect({ current }: Readonly<{ current: string }>) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const currentIndex = buildLabChapters.findIndex((chapter) => chapter.slug === current)
  const currentChapter = buildLabChapters[currentIndex]

  useEffect(() => {
    if (!open) return
    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(() => {
    if (open) itemRefs.current[Math.max(currentIndex, 0)]?.focus()
  }, [open, currentIndex])

  function close(focusButton = true) {
    setOpen(false)
    if (focusButton) buttonRef.current?.focus()
  }

  function onItemKeyDown(event: React.KeyboardEvent, index: number) {
    const count = buildLabChapters.length
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      itemRefs.current[(index + 1) % count]?.focus()
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      itemRefs.current[(index - 1 + count) % count]?.focus()
    } else if (event.key === 'Home') {
      event.preventDefault()
      itemRefs.current[0]?.focus()
    } else if (event.key === 'End') {
      event.preventDefault()
      itemRefs.current[count - 1]?.focus()
    } else if (event.key === 'Escape') {
      close()
    }
  }

  return (
    <div ref={containerRef} className="relative sm:flex-1">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault()
            setOpen(true)
          }
        }}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg bg-card px-4 py-2.5 text-left text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-harvest/40"
      >
        <span className="truncate">
          {currentIndex + 1}. {currentChapter?.title} · {currentChapter?.levels}
        </span>
        <ChevronDown
          className={cn('size-4 shrink-0 text-muted-foreground transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Jump to chapter"
          className="absolute left-0 top-full z-20 mt-2 w-full min-w-max overflow-hidden rounded-lg border border-border bg-popover/90 py-1 text-popover-foreground shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-black/80 dark:text-white sm:w-auto"
        >
          {buildLabChapters.map((chapter, index) => {
            const isCurrent = chapter.slug === current
            return (
              <Link
                key={chapter.slug}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
                href={`/guides/build-lab/${chapter.slug}`}
                role="menuitem"
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => close(false)}
                onKeyDown={(event) => onItemKeyDown(event, index)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 text-sm outline-none transition-colors hover:bg-foreground/5 focus:bg-foreground/5 dark:hover:bg-white/10 dark:focus:bg-white/10',
                  isCurrent ? 'font-semibold text-harvest' : 'text-popover-foreground/90 dark:text-white/90',
                )}
              >
                <Check
                  className={cn('size-4 shrink-0', isCurrent ? 'opacity-100' : 'opacity-0')}
                  aria-hidden="true"
                />
                <span>
                  {index + 1}. {chapter.title} · {chapter.levels}
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

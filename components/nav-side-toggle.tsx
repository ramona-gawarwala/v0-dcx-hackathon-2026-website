'use client'

import { useEffect, useState } from 'react'
import { PanelLeft, PanelRight } from 'lucide-react'
import { applyNavSide, nextNavSide, NAV_SIDE_STORAGE_KEY, type NavSide } from '@/lib/nav-side'

export function NavSideToggle() {
  const [side, setSide] = useState<NavSide>('left')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setSide(document.documentElement.classList.contains('nav-right') ? 'right' : 'left')
    setMounted(true)
  }, [])

  function toggle() {
    const next = nextNavSide(side)
    applyNavSide(next, document.documentElement)
    try {
      localStorage.setItem(NAV_SIDE_STORAGE_KEY, next)
    } catch {
      /* storage unavailable — side still applies for this session */
    }
    setSide(next)
  }

  const label = side === 'right' ? 'Move navigation to the left' : 'Move navigation to the right'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="hidden size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
    >
      {/* Icon reflects the menu's current side; the label describes the toggle action. */}
      {mounted && side === 'right' ? <PanelRight className="size-5" /> : <PanelLeft className="size-5" />}
      <span className="sr-only">{label}</span>
    </button>
  )
}

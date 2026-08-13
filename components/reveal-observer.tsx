'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Progressive enhancement: elements marked with `.reveal` / `.reveal-stagger`
// stay fully visible without JS. Once mounted, anything below the fold is hidden
// and fades up as it scrolls into view; anything already on screen is shown at once.
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger'),
    )
    if (els.length === 0) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('reveal-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.remove('reveal-hidden')
          entry.target.classList.add('reveal-in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    els.forEach((el) => {
      if (el.classList.contains('reveal-in')) return
      const top = el.getBoundingClientRect().top
      if (top < window.innerHeight * 0.92) {
        // Already in view on load — show immediately, no flash.
        el.classList.add('reveal-in')
      } else {
        el.classList.add('reveal-hidden')
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [pathname])

  return null
}

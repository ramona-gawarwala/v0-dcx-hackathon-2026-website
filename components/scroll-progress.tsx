'use client'

import { useEffect, useState } from 'react'

/** Thin progress bar pinned to the top of the viewport that tracks page scroll. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const value = scrollable > 0 ? doc.scrollTop / scrollable : 0
      setProgress(Math.min(1, Math.max(0, value)))
    }
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-seed via-harvest to-sprout transition-transform duration-150 ease-out"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}

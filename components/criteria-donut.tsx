'use client'

import { useEffect, useRef, useState } from 'react'
import { judgingCriteria } from '@/lib/content'

// Literal class names so Tailwind generates them; index-aligned with the criteria order.
const strokeColors = ['stroke-primary', 'stroke-harvest', 'stroke-brand-blue', 'stroke-sprout', 'stroke-seed']
export const criteriaDotColors = ['bg-primary', 'bg-harvest', 'bg-brand-blue', 'bg-sprout', 'bg-seed']

const R = 56
const CIRCUMFERENCE = 2 * Math.PI * R

export function CriteriaDonut() {
  const ref = useRef<SVGSVGElement>(null)
  // How much of the ring is drawn, in stroke units (0 → full circumference).
  const [drawn, setDrawn] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDrawn(CIRCUMFERENCE)
      return
    }

    let raf = 0
    let start = 0
    const DURATION = 1100
    const tick = (t: number) => {
      if (!start) start = t
      const p = Math.min(1, (t - start) / DURATION)
      const eased = 1 - Math.pow(1 - p, 3)
      setDrawn(eased * CIRCUMFERENCE)
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(tick)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  let acc = 0
  const segments = judgingCriteria.map((c, i) => {
    const len = (c.weight / 100) * CIRCUMFERENCE
    const startAcc = acc
    acc += len
    // Segments fill in order as the draw sweeps clockwise past their start.
    const visible = Math.max(0, Math.min(len, drawn - startAcc))
    return { ...c, startAcc, visible, stroke: strokeColors[i % strokeColors.length] }
  })

  return (
    <svg
      ref={ref}
      viewBox="0 0 140 140"
      className="mx-auto w-full max-w-[8rem] -rotate-90"
      role="img"
      aria-label="How the judging weight is split across the five criteria"
    >
      <circle cx="70" cy="70" r={R} fill="none" className="stroke-muted" strokeWidth="15" />
      {segments.map((s) => (
        <circle
          key={s.criterion}
          cx="70"
          cy="70"
          r={R}
          fill="none"
          className={s.stroke}
          strokeWidth="15"
          strokeDasharray={`${s.visible} ${CIRCUMFERENCE - s.visible}`}
          strokeDashoffset={-s.startAcc}
        />
      ))}
    </svg>
  )
}


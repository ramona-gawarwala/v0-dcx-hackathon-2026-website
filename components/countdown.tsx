'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CalendarClock } from 'lucide-react'

// The hackathon kicks off on 7 September 2026, 09:00 and submissions close end of
// day on Monday 21 September 2026 (UK / BST = UTC+1).
const START = new Date('2026-09-07T09:00:00+01:00').getTime()
const DEADLINE = new Date('2026-09-21T23:59:00+01:00').getTime()

type Parts = { days: number; hours: number; minutes: number; seconds: number; done: boolean }

function partsFrom(target: number, ms: number): Parts {
  const diff = Math.max(0, target - ms)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  }
}

function useCountdown(target: number): Parts | null {
  const [parts, setParts] = useState<Parts | null>(null)
  useEffect(() => {
    const tick = () => setParts(partsFrom(target, Date.now()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [target])
  return parts
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown({ variant = 'full' }: Readonly<{ variant?: 'full' | 'compact' }>) {
  // Header pill counts down to the kickoff; the Submit page counts to the deadline.
  const parts = useCountdown(variant === 'compact' ? START : DEADLINE)

  if (variant === 'compact') {
    // Avoid a hydration mismatch: render nothing until the client clock is ready.
    if (!parts || parts.done) return null
    return (
      <Link
        href="/how-it-works"
        className="hidden items-center gap-1.5 rounded-full border border-harvest/40 bg-harvest/10 px-3 py-1.5 text-xs font-semibold text-harvest transition-colors hover:bg-harvest/15 lg:inline-flex"
        title="Time until the hackathon starts"
      >
        <CalendarClock className="size-3.5" />
        <span className="tabular-nums">
          {parts.days}d {parts.hours}h {pad(parts.minutes)}m to start
        </span>
      </Link>
    )
  }

  if (parts?.done) {
    return (
      <p className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm font-semibold text-muted-foreground">
        <CalendarClock className="size-4" />
        Submissions are closed.
      </p>
    )
  }

  const units = [
    { label: 'Days', value: parts ? String(parts.days) : '—' },
    { label: 'Hours', value: parts ? pad(parts.hours) : '—' },
    { label: 'Minutes', value: parts ? pad(parts.minutes) : '—' },
    { label: 'Seconds', value: parts ? pad(parts.seconds) : '—' },
  ]

  return (
    <div className="mt-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-harvest">
        Time left to submit
      </p>
      <div className="mt-3 flex flex-wrap gap-3" role="timer" aria-live="off">
        {units.map((u) => (
          <div
            key={u.label}
            className="min-w-[68px] rounded-xl border border-border bg-secondary/40 px-4 py-3 text-center"
          >
            <div className="font-display text-2xl font-bold tabular-nums">{u.value}</div>
            <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

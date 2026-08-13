'use client'

import type { MouseEvent } from 'react'
import { useState } from 'react'
import { sproutBurst } from '@/components/sprout-burst'

const BUBBLES = ['🔥', '🌱', '✨', '🚀']

// A playful preview of how People's Choice voting feels: bobbing reactions plus
// a 👍 you can actually tap, which ticks up and sprays thumbs.
export function ReactionCluster() {
  const [count, setCount] = useState(12)

  function react(e: MouseEvent<HTMLButtonElement>) {
    setCount((c) => c + 1)
    sproutBurst(e.clientX, e.clientY, 10, ['👍'])
  }

  return (
    <div className="mt-4 flex items-center gap-2">
      <div aria-hidden="true" className="flex items-center gap-2">
        {BUBBLES.map((emoji, i) => (
          <span
            key={emoji}
            className="reaction-bob inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-lg shadow-sm"
            style={{ animationDelay: `${i * 160}ms` }}
          >
            {emoji}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={react}
        className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-harvest/40 bg-harvest/10 px-3 py-1.5 text-sm font-semibold text-harvest transition-transform hover:bg-harvest/15 active:scale-95"
        aria-label="React with a thumbs up"
      >
        👍 <span className="tabular-nums">{count}</span>
      </button>
    </div>
  )
}

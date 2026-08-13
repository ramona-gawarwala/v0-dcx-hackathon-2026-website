'use client'

import type { MouseEvent, ReactNode } from 'react'
import { sproutBurst } from '@/components/sprout-burst'

type CelebrateLinkProps = Readonly<{
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}>

function handleClick(e: MouseEvent<HTMLAnchorElement>) {
  sproutBurst(e.clientX, e.clientY)
}

// An external link that spits a little sprout-burst from the cursor on click.
export function CelebrateLink({
  href,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
}: CelebrateLinkProps) {
  return (
    <a href={href} target={target} rel={rel} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

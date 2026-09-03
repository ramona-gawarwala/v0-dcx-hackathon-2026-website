import type { Metadata } from 'next'
import { HowToBuild } from '@/components/sections/how-to-build'

export const metadata: Metadata = {
  title: 'How to build · DCX AI Playground Hackathon 2026',
  description: 'Build in the browser with no local install — describe what you want, deploy it, and open the live URL.',
}

export default function HowToBuildPage() {
  return (
    <main>
      <HowToBuild />
    </main>
  )
}

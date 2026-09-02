import type { Metadata } from 'next'
import { WhatToBuild } from '@/components/sections/what-to-build'

export const metadata: Metadata = {
  title: 'What to build · DCX AI Hackathon 2026',
  description: 'Pick a project type, then take inspiration from a real Capgemini industry. Keep it small enough to demo.',
}

export default function WhatToBuildPage() {
  return (
    <main>
      <WhatToBuild />
    </main>
  )
}

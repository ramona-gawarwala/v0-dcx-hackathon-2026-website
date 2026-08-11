import type { Metadata } from 'next'
import { StartBuilding } from '@/components/sections/start-building'

export const metadata: Metadata = {
  title: 'Start building · DCX AI Hackathon 2026',
  description: 'No setup, no local install — describe what you want, deploy it, and get a live URL.',
}

export default function StartBuildingPage() {
  return (
    <main>
      <StartBuilding />
    </main>
  )
}

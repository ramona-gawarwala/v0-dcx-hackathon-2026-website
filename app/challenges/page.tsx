import type { Metadata } from 'next'
import { Challenges } from '@/components/sections/challenges'

export const metadata: Metadata = {
  title: 'Challenges · DCX AI Hackathon 2026',
  description: 'Seed, Sprout, and Harvest challenges — pick the level that matches where you are.',
}

export default function ChallengesPage() {
  return (
    <main>
      <Challenges />
    </main>
  )
}

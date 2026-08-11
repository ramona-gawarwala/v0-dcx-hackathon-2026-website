import type { Metadata } from 'next'
import { HowItWorks } from '@/components/sections/how-it-works'

export const metadata: Metadata = {
  title: 'How it works · DCX AI Hackathon 2026',
  description: 'The format, the schedule, and the goal — a part-time, two-week AI build sprint.',
}

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorks />
    </main>
  )
}

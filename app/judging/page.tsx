import type { Metadata } from 'next'
import { Judging } from '@/components/sections/judging'

export const metadata: Metadata = {
  title: 'Judging · DCX AI Playground Hackathon 2026',
  description: 'Working demos win — not slides. How teams are judged and what wins.',
}

export default function JudgingPage() {
  return (
    <main>
      <Judging />
    </main>
  )
}

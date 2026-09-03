import type { Metadata } from 'next'
import { WhyJoin } from '@/components/sections/why-join'

export const metadata: Metadata = {
  title: 'Why join · DCX AI Playground Hackathon 2026',
  description: 'A low-risk, part-time way to try AI on a real project, ship something live, and pick up skills that carry into your day job.',
}

export default function WhyJoinPage() {
  return (
    <main>
      <WhyJoin />
    </main>
  )
}

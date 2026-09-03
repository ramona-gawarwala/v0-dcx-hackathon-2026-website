import type { Metadata } from 'next'
import { Benefits } from '@/components/sections/benefits'

export const metadata: Metadata = {
  title: 'What you get · DCX AI Playground Hackathon 2026',
  description: 'Recognition, real skills, and evidence of your growth — win or not.',
}

export default function BenefitsPage() {
  return (
    <main>
      <Benefits />
    </main>
  )
}

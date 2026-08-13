import type { Metadata } from 'next'
import { Resources } from '@/components/sections/resources'

export const metadata: Metadata = {
  title: 'Resources · DCX AI Hackathon 2026',
  description:
    'Join the DCX AI Hackathon 2026 space on Microsoft Teams, submit your project, and find the tools and docs you need to build and ship.',
}

export default function ResourcesPage() {
  return (
    <main>
      <Resources />
    </main>
  )
}

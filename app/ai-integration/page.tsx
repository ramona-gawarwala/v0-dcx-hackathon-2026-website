import type { Metadata } from 'next'
import { AiIntegration } from '@/components/sections/ai-integration'

export const metadata: Metadata = {
  title: 'AI Integration · DCX AI Playground Hackathon 2026',
  description:
    'Seed, Sprout, and Harvest describe the runtime AI level inside your app — pick the level that matches what you are building.',
}

export default function AiIntegrationPage() {
  return (
    <main>
      <AiIntegration />
    </main>
  )
}

import type { Metadata } from 'next'
import { Submit } from '@/components/sections/submit'

export const metadata: Metadata = {
  title: 'Submit · DCX AI Hackathon 2026',
  description: 'The submission deadline, checklist, and README template for your project.',
}

export default function SubmitPage() {
  return (
    <main>
      <Submit />
    </main>
  )
}

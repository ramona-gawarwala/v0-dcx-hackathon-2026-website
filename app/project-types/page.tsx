import type { Metadata } from 'next'
import { ProjectTypes } from '@/components/sections/project-types'

export const metadata: Metadata = {
  title: 'Project types · DCX AI Hackathon 2026',
  description: 'Not sure what to build? Pick a project type first, then scope it small enough to demo.',
}

export default function ProjectTypesPage() {
  return (
    <main>
      <ProjectTypes />
    </main>
  )
}

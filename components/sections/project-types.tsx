'use client'

import { SectionHeading } from '@/components/section-heading'
import { ProjectTypeCard } from '@/components/project-type-card'
import { projectTypes } from '@/lib/content'

export function ProjectTypes() {
  return (
    <section id="project-types" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Project types"
          title="Not sure what to build? Pick a type first."
          description="It answers &ldquo;what kind of thing am I making?&rdquo; so you don't get stuck choosing tools. Start from the one closest to your idea, then flip a card for idea starters."
        />

        <div className="reveal-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((t) => (
            <ProjectTypeCard key={t.title} type={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

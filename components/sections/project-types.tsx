'use client'

import { Bot, Code2 } from 'lucide-react'
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
          description="It answers &ldquo;what kind of thing am I making?&rdquo; Start from the one closest to your idea, then flip a card for a simple-to-creative idea ladder."
        />

        <div className="mt-12 border-y border-border py-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Two valid ways to use AI
          </p>
          <div className="mt-5 grid gap-7 md:grid-cols-2 md:gap-0">
            <div className="md:pr-8">
              <div className="flex items-center gap-3">
                <Code2 className="size-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Build with AI</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Use v0, Copilot, or another approved assistant to shape the idea, design, code, test,
                and deploy it. This is enough to participate: the finished app can run entirely on
                normal code and data, with no model key or model API call.
              </p>
            </div>
            <div className="border-border md:border-l md:pl-8">
              <div className="flex items-center gap-3">
                <Bot className="size-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Build AI into the experience</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Optionally let the shipped app call a model, use your data, invoke tools, or run an
                agent. Seed, Sprout, and Harvest describe only this runtime AI depth; they do not
                measure how much AI helped you build.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal-stagger mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((t) => (
            <ProjectTypeCard key={t.title} type={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

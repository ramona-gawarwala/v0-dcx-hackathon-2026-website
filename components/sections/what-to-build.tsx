import { Bot, Code2, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ProjectTypeCard } from '@/components/project-type-card'
import { projectTypes, industryInspirations, DEGREED_CAMPUSES_URL } from '@/lib/content'

export function WhatToBuild() {
  return (
    <section id="what-to-build" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="What to build"
          title="Pick a type, then make it yours"
          description="Start from the project type closest to your idea, then draw inspiration from a real Capgemini industry. Keep it small enough to demo."
        />

        {/* Two ways to use AI */}
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
                agent. Add it only when it genuinely improves the experience — it is never required.
              </p>
            </div>
          </div>
        </div>

        {/* Project types */}
        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold">Six project types</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Answering &ldquo;what kind of thing am I making?&rdquo; Start from the one closest to your idea.
          </p>
          <div className="reveal-stagger mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((t) => (
              <ProjectTypeCard key={t.title} type={t} />
            ))}
          </div>
        </div>

        {/* Industry inspiration */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold">Industry inspiration</h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every idea below is drawn from a real Capgemini industry campus on Degreed. Use them as a
            spark — pick a segment, shrink it to one useful slice, and build that.
          </p>
          <ul className="reveal-stagger mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryInspirations.map((item) => (
              <li
                key={`${item.campus}-${item.segment}`}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
                    {item.campus}
                  </span>
                  <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {item.segment}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
          <a
            href={DEGREED_CAMPUSES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-september-outline group mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold"
          >
            Explore the industry campuses on Degreed
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="mt-12 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Bring your own idea?</span> Go for it. Keep
          it small enough to demo and check it against the judging criteria. Everyone who takes part
          gets a certificate of participation and personal feedback on SuccessFactors.
        </p>
      </div>
    </section>
  )
}

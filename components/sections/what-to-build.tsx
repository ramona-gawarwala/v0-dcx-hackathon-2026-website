import { Bot, Code2, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projectTypes, industryInspirations, DEGREED_CAMPUSES_URL } from '@/lib/content'

export function WhatToBuild() {
  return (
    <section id="what-to-build" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading eyebrow="What to build" title="What to build?" />

        {/* Idea guidance */}
        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold">Have your own idea?</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Go for it. But keep it small enough to demo and remember that half finished projects are
            common at the end of a hackathon so start with an MVP and go from there.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold">If you don&apos;t have an idea?</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            While we&apos;d love to see apps that can add value to your BU or your account from day
            one, a project that simply explores the capabilities of Vercel combined with an exploration of an Industry
            Campus is also valid. Use this page to consider the kinds of project you might want to
            build. Explore the Capgemini Industry Campuses for inspiration.
          </p>
        </div>

        {/* Project types */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold">Consider the following project types</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Answering &ldquo;what kind of thing am I making?&rdquo; Start from the one closest to your idea.
          </p>
          <div className="reveal-stagger mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((t) => (
              <div key={t.title} className="flex items-start gap-4">
                <t.icon className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h4 className="font-display text-base font-semibold leading-tight">{t.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry inspiration */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-balance">
            Draw upon Capgemini Industry Campuses for inspiration
          </h3>
          <div className="mt-3 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Unsure what to build? Don&apos;t have an obvious idea for an app that would benefit your
              account? No worries at all! There are{' '}
              <a
                href={DEGREED_CAMPUSES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                10 Industry Campuses
              </a>{' '}
              on Degreed specifically designed to elevate you as an industry expert in 10 focus
              industries for Capgemini.
            </p>
            <p>
              Pick an Industry and a segment that interests you, and explore on Degreed — what you
              build can be more of a learning exercise or an exploration of the capabilities of AI;
              we don&apos;t want people to be held back or put off for lack of an idea that adds
              explicit value to a client tomorrow.
            </p>
          </div>

          <ul className="reveal-stagger mt-10 divide-y divide-border border-y border-border">
            {industryInspirations.map((item) => (
              <li
                key={`${item.campus}-${item.segment}`}
                className="flex items-start gap-4 py-5 sm:gap-5"
              >
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-display text-base font-semibold">{item.campus}</span>
                    <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                      {item.segment}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
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

        {/* How to use AI */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold">How to use AI?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Two valid ways to use AI in your project.</p>
          <div className="mt-8 grid gap-7 md:grid-cols-2 md:gap-0">
            <div className="md:pr-8">
              <div className="flex items-center gap-3">
                <Code2 className="size-5 text-primary" aria-hidden="true" />
                <h4 className="font-display text-lg font-semibold">Build with AI</h4>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Use v0, Copilot, or another approved assistant to shape the idea, design, code, test,
                and deploy it. This is enough to participate: the finished app can run entirely on
                normal code and data, with no model key or model API call.
              </p>
            </div>
            <div className="border-border md:border-l md:pl-8">
              <div className="flex items-center gap-3">
                <Bot className="size-5 text-primary" aria-hidden="true" />
                <h4 className="font-display text-lg font-semibold">Build AI into the experience</h4>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Optionally let the shipped app call a model, use your data, invoke tools, or run an
                agent. Add it only when it genuinely improves the experience — it is never required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

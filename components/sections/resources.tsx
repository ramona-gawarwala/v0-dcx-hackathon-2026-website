import Link from 'next/link'
import {
  Users,
  UserPlus,
  Megaphone,
  LifeBuoy,
  Trophy,
  Rocket,
  BookOpen,
  LayoutTemplate,
  Sparkles,
  ArrowUpRight,
  Code2,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import {
  REPO_URL,
  V0_COMMUNITY_URL,
  VERCEL_TEMPLATES_URL,
  TEAMS_TEAM_URL,
  TEAMS_TEAM_FORMATION_URL,
  TEAMS_ANNOUNCEMENTS_URL,
  TEAMS_HELP_URL,
  TEAMS_SUBMISSIONS_URL,
} from '@/lib/content'

type ResourceLink = {
  icon: LucideIcon
  label: string
  desc: string
  href: string
}

const connect: ResourceLink[] = [
  {
    icon: Users,
    label: 'Join the hackathon Team',
    desc: 'See your team, add members, and follow every channel in one place.',
    href: TEAMS_TEAM_URL,
  },
  {
    icon: UserPlus,
    label: 'Team Formation',
    desc: "No team yet? Post what you want to build and what you bring, then team up.",
    href: TEAMS_TEAM_FORMATION_URL,
  },
  {
    icon: Megaphone,
    label: 'Announcements',
    desc: 'Key updates, reminders, and deadlines from the organisers.',
    href: TEAMS_ANNOUNCEMENTS_URL,
  },
  {
    icon: LifeBuoy,
    label: 'Ask for help',
    desc: 'Stuck? Drop your question with a screenshot — no question is too basic.',
    href: TEAMS_HELP_URL,
  },
]

const submit: ResourceLink[] = [
  {
    icon: Trophy,
    label: 'Submissions',
    desc: 'Post your finished project here before the deadline.',
    href: TEAMS_SUBMISSIONS_URL,
  },
]

const build: ResourceLink[] = [
  { icon: Rocket, label: 'v0.dev', desc: 'Describe your app in plain language and get a working build.', href: 'https://v0.dev' },
  { icon: Sparkles, label: 'v0 Community', desc: 'Browse real builds for inspiration and starting points.', href: V0_COMMUNITY_URL },
  { icon: LayoutTemplate, label: 'Vercel templates', desc: 'Ready-made starters you can deploy in a click.', href: VERCEL_TEMPLATES_URL },
  { icon: BookOpen, label: 'AI SDK docs', desc: 'Add chat, tools, and streaming to your app.', href: 'https://ai-sdk.dev/docs' },
  { icon: Code2, label: 'GitHub repo', desc: 'The source for this site and all the docs.', href: REPO_URL },
]

function ResourceRow({ item }: Readonly<{ item: ResourceLink }>) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 border-t border-border py-4 first:border-t-0 first:pt-0"
    >
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <item.icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 font-display font-semibold">
          {item.label}
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">{item.desc}</span>
      </span>
    </a>
  )
}

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Resources"
          title="Everything you need, in one place"
          description="Join the Microsoft Teams space to connect with other participants, then use the tools and docs below to build and ship."
        />

        <div className="mt-12 space-y-14">
          <div>
            <h3 className="font-display text-lg font-semibold">Join &amp; connect</h3>
            <p className="mt-1 text-sm text-muted-foreground">The Innovation Hackathon 2026 Team on Microsoft Teams.</p>
            <div className="mt-6">
              {connect.map((item) => (
                <ResourceRow key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Submit your project</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              When you&rsquo;re ready, post your project in the Submissions channel. See the{' '}
              <Link href="/submit" className="font-medium text-primary underline-offset-4 hover:underline">
                submission checklist
              </Link>{' '}
              first.
            </p>
            <div className="mt-6">
              {submit.map((item) => (
                <ResourceRow key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Build &amp; ship</h3>
            <p className="mt-1 text-sm text-muted-foreground">The tools and docs you&rsquo;ll actually use.</p>
            <div className="mt-6">
              {build.map((item) => (
                <ResourceRow key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

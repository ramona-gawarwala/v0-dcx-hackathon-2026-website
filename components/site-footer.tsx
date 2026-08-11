import Link from 'next/link'
import { Sprout, LifeBuoy } from 'lucide-react'
import { REPO_URL, navLinks } from '@/lib/content'
import { GithubIcon } from '@/components/github-icon'

export function SiteFooter() {
  return (
    <footer id="help" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sprout className="size-5" />
              </span>
              DCX AI Hackathon 2026
            </div>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Build and ship an AI-powered app over two weeks, part-time, using v0 + Vercel. Open to
              everyone — engineers, POs, BAs, designers, and first-timers.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Get unstuck</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <LifeBuoy className="mt-0.5 size-4 shrink-0 text-primary" />
                Ask a mentor — no question is too basic.
              </li>
              <li>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="size-4" />
                  View the repo &amp; docs
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  Read the FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>Be kind — follow the Code of Conduct. Done beats perfect.</p>
          <p>1–14 September 2026 · Built with v0 + Vercel</p>
        </div>
      </div>
    </footer>
  )
}

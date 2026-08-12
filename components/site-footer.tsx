import Link from 'next/link'
import { Sprout } from 'lucide-react'
import { REGISTER_URL, PULSE_CHECK_URL, TEAMS_TEAM_URL } from '@/lib/content'

const linkClass = 'text-muted-foreground transition-colors hover:text-primary'

export function SiteFooter() {
  return (
    <footer id="help" className="relative border-t border-border">
      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-seed via-harvest to-sprout" />
      <div className="bg-gradient-to-b from-secondary/40 to-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-sm">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Register
            </a>
            <a href={TEAMS_TEAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Join the Team
            </a>
            <a href={PULSE_CHECK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Pulse Check
            </a>
            <Link href="/report" className={linkClass}>
              Report a problem
            </Link>
            <Link href="/code-of-conduct" className={linkClass}>
              Code of Conduct
            </Link>
          </nav>

          <div aria-hidden="true" className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-2 font-display text-base font-bold">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sprout className="size-5" />
                </span>
                <span className="text-brand-blue">DCX</span> AI Hackathon 2026
              </div>
              <span aria-hidden="true" className="h-5 w-px bg-border" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Capgemini-logo.svg" alt="Capgemini" className="h-6 w-auto" />
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
              <span className="font-medium uppercase tracking-[0.18em]">Powered by</span>
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display font-semibold">
                <li className="text-harvest">v0</li>
                <li aria-hidden="true" className="size-1 rounded-full bg-border" />
                <li className="flex items-center gap-1.5 text-foreground/80">
                  <span aria-hidden="true">▲</span>Vercel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


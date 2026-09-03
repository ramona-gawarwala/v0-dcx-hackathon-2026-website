import Link from 'next/link'

const linkClass = 'text-muted-foreground transition-colors hover:text-primary'

export function SiteFooter() {
  return (
    <footer id="help" className="relative z-40 border-t border-border bg-background">
      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-seed via-harvest to-sprout" />
      <div className="bg-gradient-to-b from-secondary/40 to-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-2 font-display text-sm font-semibold">
                <span>© 2026 DCX AI Playground Hackathon</span>
              </div>
              <span aria-hidden="true" className="h-5 w-px bg-border" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/capgemini-logo.svg" alt="Capgemini" className="h-6 w-auto" />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link href="/report" className={linkClass}>
                  Report a problem
                </Link>
                <Link href="/code-of-conduct" className={linkClass}>
                  Code of Conduct
                </Link>
              </nav>
              <span aria-hidden="true" className="hidden h-5 w-px bg-border sm:block" />
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
      </div>
    </footer>
  )
}


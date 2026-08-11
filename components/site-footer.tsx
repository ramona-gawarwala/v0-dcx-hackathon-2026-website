import Link from 'next/link'
import { Sprout, Sparkles } from 'lucide-react'
import { navLinks } from '@/lib/content'
import { guides } from '@/lib/guides'

export function SiteFooter() {
  return (
    <footer id="help" className="relative border-t border-border">
      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-seed via-harvest to-sprout" />
      <div className="bg-gradient-to-b from-secondary/50 to-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-x-8 gap-y-8 md:grid-cols-[1.1fr_1.5fr_1fr]">
            <div>
              <div className="flex items-center gap-2 font-display text-lg font-bold">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sprout className="size-5" />
                </span>
                <span className="text-brand-blue">DCX</span> AI Hackathon 2026
              </div>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-harvest/40 bg-harvest/10 px-3 py-1 text-xs font-medium text-harvest">
                <Sparkles className="size-3.5" />
                1–14 Sep 2026 · free to join
              </span>
              <div className="mt-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  An initiative by
                </p>
                <div className="mt-2 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Capgemini-logo.svg" alt="Capgemini" className="h-6 w-auto" />
                  <span aria-hidden="true" className="h-5 w-px bg-border" />
                  <span className="relative top-[-2px] font-display text-lg font-bold leading-none tracking-tight text-brand-blue">DCX</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold text-harvest">Explore</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold text-sprout">Guides</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p>
              Be kind — follow the{' '}
              <Link href="/code-of-conduct" className="font-medium text-foreground transition-colors hover:text-primary">
                Code of Conduct
              </Link>
              .
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-medium uppercase tracking-[0.18em]">Powered by</span>
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display font-semibold">
                <li className="text-harvest">v0</li>
                <li aria-hidden="true" className="size-1 rounded-full bg-border" />
                <li className="flex items-center gap-1.5 text-foreground/80">
                  <span aria-hidden="true">▲</span>Vercel
                </li>
                <li aria-hidden="true" className="size-1 rounded-full bg-border" />
                <li className="text-sprout">DCX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

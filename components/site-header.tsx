'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navMenu, isNavGroup } from '@/lib/content'
import { isNavLinkActive } from '@/lib/nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { NavSideToggle } from '@/components/nav-side-toggle'
import { ScrollProgress } from '@/components/scroll-progress'
import { Countdown } from '@/components/countdown'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <ScrollProgress />
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight">
          <span className="flex h-8 items-center justify-center rounded-md bg-white px-2 shadow-sm ring-1 ring-black/5">
            <img
              src="/capgemini-logo.svg"
              alt="Capgemini"
              width={96}
              height={22}
              className="h-[18px] w-auto"
            />
          </span>
          <span>
            <span className="text-brand-blue">DCX</span> AI Hackathon 2026
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Countdown variant="compact" />
          <NavSideToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col px-4 py-3 sm:px-6">
            {navMenu.map((entry) => {
              if (isNavGroup(entry)) {
                return (
                  <div key={entry.label} className="py-1">
                    <p className="px-2 pb-1 pt-3 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {entry.label}
                    </p>
                    {entry.items.map((item) => {
                      const itemActive = isNavLinkActive(item.href, pathname, null)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={itemActive ? 'true' : undefined}
                          className={`block rounded-lg px-2 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                            itemActive ? 'text-foreground' : 'text-muted-foreground'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                )
              }
              const isActive = isNavLinkActive(entry.href, pathname, null)
              return (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-lg px-2 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {entry.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

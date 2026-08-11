'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navMenu, isNavGroup, type NavLeaf } from '@/lib/content'
import { isNavLinkActive } from '@/lib/nav'

function SidebarLink({ item, active }: Readonly<{ item: NavLeaf; active: boolean }>) {
  return (
    <Link
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
        active
          ? 'border-primary font-medium text-foreground'
          : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
      }`}
    >
      {item.label}
    </Link>
  )
}

export function SiteSidebar() {
  const pathname = usePathname()

  const isActive = (leaf: NavLeaf): boolean =>
    isNavLinkActive(leaf.href, pathname, null)

  return (
    <aside id="site-sidebar" className="fixed bottom-0 left-0 top-16 z-40 hidden w-60 overflow-y-auto border-r border-border bg-background px-6 py-8 md:block">
      <nav aria-label="Site" className="flex flex-col gap-7">
        {navMenu.map((entry) => {
          if (isNavGroup(entry)) {
            return (
              <div key={entry.label}>
                <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {entry.label}
                </p>
                <ul className="space-y-0.5 border-l border-border">
                  {entry.items.map((item) => (
                    <li key={item.href}>
                      <SidebarLink item={item} active={isActive(item)} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
          return (
            <ul key={entry.href} className="space-y-0.5 border-l border-border">
              <li>
                <SidebarLink item={entry} active={isActive(entry)} />
              </li>
            </ul>
          )
        })}
      </nav>
    </aside>
  )
}

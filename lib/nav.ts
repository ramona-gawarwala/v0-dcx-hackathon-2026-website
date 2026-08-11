/**
 * Extract the on-page section id a nav href points to, or null when the link
 * targets a different page (e.g. "/" or "/faq") rather than an anchor.
 */
export function sectionIdFromHref(href: string): string | null {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return null
  const id = href.slice(hashIndex + 1)
  return id.length > 0 ? id : null
}

/** True when the href is a same-page anchor link (e.g. "/#challenges"). */
export function isAnchorHref(href: string): boolean {
  return href.startsWith('/#')
}

/**
 * Decide whether a nav link should be marked active. Anchor links are only
 * active on the home page and when their section is the one in view; route
 * links are active when the current path matches exactly.
 */
export function isNavLinkActive(
  href: string,
  pathname: string,
  activeSection: string | null,
): boolean {
  if (isAnchorHref(href)) {
    return pathname === '/' && sectionIdFromHref(href) === activeSection
  }
  return pathname === href
}

import { describe, expect, it } from 'vitest'
import { sectionIdFromHref, isAnchorHref, isNavLinkActive } from '@/lib/nav'
import { navMenu, isNavGroup, type NavLeaf } from '@/lib/content'

describe('sectionIdFromHref', () => {
  it('extracts the anchor id from a same-page link', () => {
    expect(sectionIdFromHref('/#challenges')).toBe('challenges')
    expect(sectionIdFromHref('/#how-it-works')).toBe('how-it-works')
  })

  it('returns null for links to other routes', () => {
    expect(sectionIdFromHref('/faq')).toBeNull()
    expect(sectionIdFromHref('/')).toBeNull()
  })

  it('returns null for an empty hash', () => {
    expect(sectionIdFromHref('/#')).toBeNull()
  })
})

describe('isAnchorHref', () => {
  it('is true for same-page anchor links', () => {
    expect(isAnchorHref('/#judging')).toBe(true)
  })

  it('is false for route links', () => {
    expect(isAnchorHref('/faq')).toBe(false)
    expect(isAnchorHref('/guides/beginner-guide')).toBe(false)
    expect(isAnchorHref('/')).toBe(false)
  })
})

describe('isNavLinkActive', () => {
  it('marks an anchor active only on home when its section is in view', () => {
    expect(isNavLinkActive('/#judging', '/', 'judging')).toBe(true)
    expect(isNavLinkActive('/#judging', '/', 'benefits')).toBe(false)
  })

  it('never marks an anchor active on a different route', () => {
    expect(isNavLinkActive('/#judging', '/guides/beginner-guide', 'judging')).toBe(false)
    expect(isNavLinkActive('/#start-building', '/faq', 'start-building')).toBe(false)
  })

  it('marks a route link active on an exact path match', () => {
    expect(isNavLinkActive('/faq', '/faq', null)).toBe(true)
    expect(isNavLinkActive('/guides/beginner-guide', '/guides/beginner-guide', null)).toBe(true)
  })

  it('does not mark a route link active on a different path', () => {
    expect(isNavLinkActive('/faq', '/guides/beginner-guide', null)).toBe(false)
    expect(isNavLinkActive('/code-of-conduct', '/', 'submit')).toBe(false)
  })
})

describe('navMenu structure', () => {
  const leaves: NavLeaf[] = navMenu.flatMap((entry) =>
    isNavGroup(entry) ? entry.items : [entry],
  )

  it('every leaf has a non-empty label and href', () => {
    for (const leaf of leaves) {
      expect(leaf.label.length).toBeGreaterThan(0)
      expect(leaf.href.length).toBeGreaterThan(0)
    }
  })

  it('every href is either a same-page anchor or an absolute route path', () => {
    for (const leaf of leaves) {
      expect(isAnchorHref(leaf.href) || leaf.href.startsWith('/')).toBe(true)
    }
  })

  it('has no duplicate hrefs', () => {
    const hrefs = leaves.map((l) => l.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
  })

  it('groups always contain at least one item', () => {
    for (const entry of navMenu) {
      if (isNavGroup(entry)) expect(entry.items.length).toBeGreaterThan(0)
    }
  })
})

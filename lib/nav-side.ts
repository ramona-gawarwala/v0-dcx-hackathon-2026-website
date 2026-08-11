export type NavSide = 'left' | 'right'

export const NAV_SIDE_STORAGE_KEY = 'nav-side'

/** Resolve the nav side to apply on first paint from a stored value. */
export function resolveInitialNavSide(stored: string | null): NavSide {
  return stored === 'right' ? 'right' : 'left'
}

export function nextNavSide(current: NavSide): NavSide {
  return current === 'right' ? 'left' : 'right'
}

/** Toggle the `nav-right` class on the document element. Browser-only. */
export function applyNavSide(side: NavSide, root: HTMLElement): void {
  root.classList.toggle('nav-right', side === 'right')
}

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

/** Resolve the theme to apply on first paint from a stored value + system preference. */
export function resolveInitialTheme(stored: string | null, prefersDark: boolean): Theme {
  if (stored === 'dark' || stored === 'light') return stored
  return prefersDark ? 'dark' : 'light'
}

export function nextTheme(current: Theme): Theme {
  return current === 'dark' ? 'light' : 'dark'
}

/** Set the theme class on the document element. Safe to call only in the browser. */
export function applyTheme(theme: Theme, root: HTMLElement): void {
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

/** Like applyTheme, but briefly animates the colour change (unless motion is reduced). */
export function applyThemeWithTransition(theme: Theme, root: HTMLElement): void {
  const reduce =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reduce) {
    root.classList.add('theme-anim')
    root.getBoundingClientRect() // force reflow so the class swap actually transitions
    window.setTimeout(() => root.classList.remove('theme-anim'), 360)
  }

  applyTheme(theme, root)
}

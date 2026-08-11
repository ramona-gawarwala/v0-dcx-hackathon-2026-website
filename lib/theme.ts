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

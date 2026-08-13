'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { applyThemeWithTransition, nextTheme, THEME_STORAGE_KEY, type Theme } from '@/lib/theme'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
    setMounted(true)
  }, [])

  function toggle() {
    const next = nextTheme(theme)
    applyThemeWithTransition(next, document.documentElement)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
    setTheme(next)
  }

  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
      <span className="sr-only">{label}</span>
    </button>
  )
}

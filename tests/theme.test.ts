import { describe, expect, it } from 'vitest'
import { nextTheme, resolveInitialTheme } from '@/lib/theme'

describe('resolveInitialTheme', () => {
  it('honours a stored dark preference', () => {
    expect(resolveInitialTheme('dark', false)).toBe('dark')
  })

  it('honours a stored light preference over a system dark preference', () => {
    expect(resolveInitialTheme('light', true)).toBe('light')
  })

  it('falls back to the system preference when nothing is stored', () => {
    expect(resolveInitialTheme(null, true)).toBe('dark')
    expect(resolveInitialTheme(null, false)).toBe('light')
  })

  it('ignores unrecognised stored values', () => {
    expect(resolveInitialTheme('purple', true)).toBe('dark')
    expect(resolveInitialTheme('', false)).toBe('light')
  })
})

describe('nextTheme', () => {
  it('toggles between light and dark', () => {
    expect(nextTheme('dark')).toBe('light')
    expect(nextTheme('light')).toBe('dark')
  })
})

import { describe, it, expect } from 'vitest'
import {
  applyNavSide,
  nextNavSide,
  resolveInitialNavSide,
  NAV_SIDE_STORAGE_KEY,
} from '@/lib/nav-side'

describe('nav-side preference', () => {
  it('defaults to left when nothing is stored', () => {
    expect(resolveInitialNavSide(null)).toBe('left')
  })

  it('defaults to left for unknown values', () => {
    expect(resolveInitialNavSide('sideways')).toBe('left')
  })

  it('honours a stored right preference', () => {
    expect(resolveInitialNavSide('right')).toBe('right')
  })

  it('toggles between the two sides', () => {
    expect(nextNavSide('left')).toBe('right')
    expect(nextNavSide('right')).toBe('left')
  })

  it('exposes a stable storage key', () => {
    expect(NAV_SIDE_STORAGE_KEY).toBe('nav-side')
  })

  it('adds the nav-right class only when the side is right', () => {
    const el = document.createElement('div')
    applyNavSide('right', el)
    expect(el.classList.contains('nav-right')).toBe(true)
    applyNavSide('left', el)
    expect(el.classList.contains('nav-right')).toBe(false)
  })
})

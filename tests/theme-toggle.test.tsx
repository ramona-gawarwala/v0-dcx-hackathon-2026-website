import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { ThemeToggle } from '@/components/theme-toggle'

afterEach(() => {
  cleanup()
  document.documentElement.classList.remove('light', 'dark')
  localStorage.clear()
})

describe('ThemeToggle', () => {
  it('reflects the active dark theme and switches to light on click', () => {
    document.documentElement.classList.add('dark')
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /switch to light theme/i })
    fireEvent.click(button)

    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('switches from light to dark and persists the choice', () => {
    document.documentElement.classList.add('light')
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /switch to dark theme/i })
    fireEvent.click(button)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.classList.contains('light')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})

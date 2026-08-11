import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { BenefitsBanner } from '@/components/sections/benefits-banner'
import { benefitHighlights } from '@/lib/content'

afterEach(cleanup)

describe('BenefitsBanner', () => {
  it('renders the heading', () => {
    render(<BenefitsBanner />)
    expect(screen.getByText('What everyone walks away with')).toBeInTheDocument()
  })

  it('renders every benefit highlight', () => {
    render(<BenefitsBanner />)
    for (const h of benefitHighlights) {
      expect(screen.getByText(h.label)).toBeInTheDocument()
    }
  })

  it('gives each card a staggered reveal delay', () => {
    const { container } = render(<BenefitsBanner />)
    const cards = container.querySelectorAll<HTMLElement>('.benefit-card')
    expect(cards).toHaveLength(benefitHighlights.length)
    cards.forEach((card, i) => {
      expect(card.style.animationDelay).toBe(`${i * 90}ms`)
    })
  })
})

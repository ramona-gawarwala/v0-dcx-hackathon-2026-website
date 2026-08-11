import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { BenefitsBanner } from '@/components/sections/benefits-banner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BenefitsBanner />
      <HowItWorks />
    </main>
  )
}

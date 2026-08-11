import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { StartBuilding } from '@/components/sections/start-building'
import { HowItWorks } from '@/components/sections/how-it-works'
import { ProjectTypes } from '@/components/sections/project-types'
import { Challenges } from '@/components/sections/challenges'
import { Judging } from '@/components/sections/judging'
import { Submit } from '@/components/sections/submit'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StartBuilding />
        <HowItWorks />
        <ProjectTypes />
        <Challenges />
        <Judging />
        <Submit />
      </main>
      <SiteFooter />
    </>
  )
}

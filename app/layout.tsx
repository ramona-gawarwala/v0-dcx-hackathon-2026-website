import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Atkinson_Hyperlegible } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteSidebar } from '@/components/site-sidebar'
import { SiteFooter } from '@/components/site-footer'
import { PageDecor } from '@/components/page-decor'
import { RevealObserver } from '@/components/reveal-observer'
import { EasterEgg } from '@/components/easter-egg'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

// Atkinson Hyperlegible ships only regular + bold (not variable).
const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DCX AI Hackathon 2026',
  description:
    'Build and ship an AI-powered app over two weeks (1–14 September 2026), part-time, using v0 + Vercel. Open to everyone — engineers, POs, BAs, designers, and first-timers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#c26a2a',
}

// Runs before paint to set the theme + nav-side classes, avoiding a flash of the wrong layout.
const themeScript = `!function(){try{var c=document.documentElement.classList,s=localStorage.getItem('theme'),m=matchMedia('(prefers-color-scheme: dark)').matches,d=s==='dark'||(s!=='light'&&m);c.remove('light','dark');c.add(d?'dark':'light');localStorage.getItem('nav-side')==='right'?c.add('nav-right'):c.remove('nav-right')}catch(e){}}()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${manrope.variable} ${atkinson.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <SiteHeader />
        <SiteSidebar />
        <div className="site-main relative flex min-h-[calc(100dvh-4rem)] flex-col">
          <PageDecor />
          <div className="flex-1">{children}</div>
        </div>
        <SiteFooter />
        <RevealObserver />
        <EasterEgg />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

'use client'

import { useEffect, useId, useState } from 'react'
import { ZoomableFigure } from '@/components/zoomable-figure'

// Renders a ```mermaid code fence into an inline SVG. Client-only: mermaid touches the DOM.
// `breakout` lets wide diagrams extend past the text column; disable it in narrow containers.
export function MermaidDiagram({ chart, breakout = true }: Readonly<{ chart: string; breakout?: boolean }>) {
  const rawId = useId()
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`
  const [svg, setSvg] = useState('')
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function render() {
      const mermaid = (await import('mermaid')).default
      const isDark = document.documentElement.classList.contains('dark')
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: isDark ? 'dark' : 'neutral',
        fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif',
      })
      try {
        const result = await mermaid.render(id, chart.trim())
        if (!cancelled) {
          setSvg(result.svg)
          setFailed(false)
        }
      } catch {
        if (!cancelled) setFailed(true)
      }
    }

    render()

    // Re-render when the light/dark class on <html> changes.
    const observer = new MutationObserver(render)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [chart, id])

  if (failed) {
    return (
      <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
        {chart}
      </pre>
    )
  }

  return (
    <ZoomableFigure label="diagram" className={breakout ? 'my-8 lg:-mx-10 xl:-mx-24' : 'my-8'}>
      {/* mermaid renders with securityLevel 'strict', so the SVG string is sanitized. */}
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </ZoomableFigure>
  )
}

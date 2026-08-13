'use client'

import { useRef, type ReactNode } from 'react'
import { Maximize2, X } from 'lucide-react'

type ZoomableFigureProps = Readonly<{
  children: ReactNode
  label?: string
  className?: string
}>

// Shared rules so the figure scales identically inline and inside the dialog.
const svgFit = '[&>div]:w-full [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-full!'

// Wraps a diagram/chart with an "Expand" control that opens it in a full-screen dialog.
export function ZoomableFigure({ children, label = 'figure', className = '' }: ZoomableFigureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  return (
    <figure className={className}>
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={open}
          aria-label={`Expand ${label} to full screen`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/80 px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
        >
          <Maximize2 className="size-3.5" aria-hidden="true" />
          Expand
        </button>
      </div>

      <div className={`overflow-x-auto ${svgFit}`}>{children}</div>

      {/* Native dialog gives Escape-to-close and focus trapping for free. */}
      <dialog
        ref={dialogRef}
        aria-label={`${label}, full screen`}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-background/90 backdrop:backdrop-blur-sm"
      >
        <div className="relative grid min-h-full place-items-center p-4 sm:p-8">
          {/* Full-size backdrop: click outside the figure to close. */}
          <button
            type="button"
            tabIndex={-1}
            aria-label={`Close ${label}`}
            onClick={close}
            className="absolute inset-0 z-0 h-full w-full cursor-default"
          />
          <button
            type="button"
            onClick={close}
            aria-label={`Close ${label}`}
            className="fixed right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            <X className="size-4" aria-hidden="true" />
            Close
          </button>
          <div className={`relative z-10 w-full max-w-6xl overflow-auto p-3 [&_svg]:max-h-[86vh] ${svgFit} sm:p-5`}>
            {children}
          </div>
        </div>
      </dialog>
    </figure>
  )
}

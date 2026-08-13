'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

type CopyButtonProps = Readonly<{
  text: string
  label?: string
  className?: string
}>

// Copies `text` to the clipboard and briefly confirms with a "Copied!" state.
export function CopyButton({ text, label = 'Copy', className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — nothing to do */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied to clipboard' : label}
      className={`inline-flex items-center gap-1.5 rounded-md border border-border bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur transition-colors ${
        copied ? 'text-harvest' : 'text-muted-foreground hover:text-foreground'
      } ${className ?? ''}`}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? 'Copied!' : label}
    </button>
  )
}

import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Link from 'next/link'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { resolveDocHref } from '@/lib/guides'

function extractText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: ReactNode } }).props.children)
  }
  return ''
}

function slugify(node: ReactNode): string {
  return extractText(node)
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/^-|-$/g, '')
}

const components: Components = {
  h1: ({ children }) => (
    <h1 id={slugify(children)} className="mt-10 scroll-mt-24 font-display text-3xl font-bold tracking-tight text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 id={slugify(children)} className="mt-10 scroll-mt-24 font-display text-2xl font-bold tracking-tight text-foreground first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 id={slugify(children)} className="mt-8 scroll-mt-24 text-lg font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-4 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-primary">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 marker:text-muted-foreground">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  hr: () => <hr className="my-10 border-border" />,
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-2 border-primary/40 pl-4 italic">{children}</blockquote>
  ),
  a: ({ href = '', children }) => {
    const resolved = resolveDocHref(href)
    const className = 'font-medium text-primary underline-offset-4 hover:underline'
    if (/^https?:\/\//.test(resolved)) {
      return (
        <a href={resolved} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      )
    }
    if (resolved.startsWith('#')) {
      return (
        <a href={resolved} className={className}>
          {children}
        </a>
      )
    }
    return (
      <Link href={resolved} className={className}>
        {children}
      </Link>
    )
  },
  pre: ({ children }) => (
    <pre className="md-codeblock mt-4 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const isBlock = /language-/.test(className ?? '')
    if (isBlock) {
      return (
        <code className={`font-mono text-sm ${className ?? ''}`} {...props}>
          {children}
        </code>
      )
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground" {...props}>
        {children}
      </code>
    )
  },
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/60">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-border px-4 py-2.5 text-left font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-border px-4 py-2.5 align-top">{children}</td>,
}

export function Markdown({ content }: Readonly<{ content: string }>) {
  return (
    <div className="text-pretty text-base leading-relaxed text-muted-foreground">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

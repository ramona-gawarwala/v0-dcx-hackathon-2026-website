import fs from 'node:fs'
import path from 'node:path'

const DOCS_DIR = path.join(process.cwd(), 'docs')

export type Guide = {
  slug: string
  title: string
  description: string
}

// The docs served as on-site pages, in reading order.
export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Beginner guide',
    description: "Never built an AI app? Start here and ship a live app before you write real code.",
  },
  {
    slug: 'ai-sdk-guide',
    title: 'AI SDK guide',
    description: 'The fast path to talking to AI models — keys, a minimal chatbot, tools, and starter templates.',
  },
  {
    slug: 'deployment-guide',
    title: 'Deployment guide',
    description: 'Where and how to deploy an app that runs server-side AI calls.',
  },
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

// Reads a guide's markdown, dropping the leading H1 (the page renders its own title).
export function getGuideContent(slug: string): string {
  const raw = fs.readFileSync(path.join(DOCS_DIR, `${slug}.md`), 'utf8')
  return raw.replace(/^#[^\n]*\r?\n+/, '')
}

// Where each docs/*.md file lives on the site.
const DOC_ROUTES: Record<string, string> = {
  'beginner-guide': '/guides/beginner-guide',
  'ai-sdk-guide': '/guides/ai-sdk-guide',
  'deployment-guide': '/guides/deployment-guide',
  challenges: '/what-to-build',
  'how-it-works': '/how-it-works',
  judging: '/judging',
  'project-types': '/what-to-build',
  submission: '/submit',
  faq: '/faq',
  README: '/',
}

// Rewrites an in-repo markdown link (e.g. "ai-sdk-guide.md#get-a-model-key") to its on-site route.
export function resolveDocHref(href: string): string {
  const match = /^([\w-]+)\.md(#.*)?$/.exec(href)
  if (!match) return href
  const [, name, hash = ''] = match
  const base = DOC_ROUTES[name] ?? '/'
  // Keep the anchor only when the destination is a guide page, where those headings exist.
  return base.startsWith('/guides/') ? base + hash : base
}

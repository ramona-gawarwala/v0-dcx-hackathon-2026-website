export type BuildLabChapter = {
  slug: string
  title: string
  summary: string
  levels: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Reference'
  time: string
}

export const buildLab = {
  slug: 'build-lab',
  title: 'Build lab',
  description:
    'Optional deep dive: build one app end to end and learn the whole Vercel AI stack, updated for AI SDK v7.',
}

// Ordered — the reading order and the source of Prev/Next navigation.
export const buildLabChapters: BuildLabChapter[] = [
  {
    slug: 'foundations',
    title: 'Foundations',
    levels: 'Levels 0–3',
    difficulty: 'Beginner',
    time: '~90 min',
    summary:
      'Set up the tooling, generate your first app from a prompt, ship it through a PR, and build the context layer every later step depends on.',
  },
  {
    slug: 'data-and-access',
    title: 'Data & access',
    levels: 'Levels 4–5',
    difficulty: 'Intermediate',
    time: '~70 min',
    summary:
      'Real Postgres with shared Zod contracts, then auth, organisations, and server-side authorisation you can trust.',
  },
  {
    slug: 'ai-features',
    title: 'AI features',
    levels: 'Levels 6–7',
    difficulty: 'Intermediate',
    time: '~65 min',
    summary:
      'Stream your first model response through AI Gateway, then turn text into typed, validated, stored data.',
  },
  {
    slug: 'agents',
    title: 'Agents & tools',
    levels: 'Levels 8–11',
    difficulty: 'Advanced',
    time: '~2.5 hrs',
    summary:
      'Build a real agent loop, gate risky actions behind human approval, run model-written code in a sandbox, and make runs durable.',
  },
  {
    slug: 'production',
    title: 'Production',
    levels: 'Levels 12–14',
    difficulty: 'Advanced',
    time: '~2 hrs',
    summary:
      'Runtimes and caching, hardening and cost observability, and an eval suite that makes the whole thing maintainable.',
  },
  {
    slug: 'cheat-sheet',
    title: 'Cheat sheet',
    levels: 'Reference',
    difficulty: 'Reference',
    time: '5 min',
    summary:
      'Commands, the API changes that break old tutorials, the habits that mattered, and a primary-source reference index.',
  },
]

export function getBuildLabChapter(slug: string): BuildLabChapter | undefined {
  return buildLabChapters.find((chapter) => chapter.slug === slug)
}

export function getAdjacentChapters(slug: string): {
  prev?: BuildLabChapter
  next?: BuildLabChapter
} {
  const index = buildLabChapters.findIndex((chapter) => chapter.slug === slug)
  if (index === -1) return {}
  return {
    prev: index > 0 ? buildLabChapters[index - 1] : undefined,
    next: index < buildLabChapters.length - 1 ? buildLabChapters[index + 1] : undefined,
  }
}

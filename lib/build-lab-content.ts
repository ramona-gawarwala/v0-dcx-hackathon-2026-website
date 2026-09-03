import fs from 'node:fs'
import path from 'node:path'

const CHAPTERS_DIR = path.join(process.cwd(), 'docs', 'build-lab')

// Reads the overview intro shown above the chapter cards.
export function getBuildLabIntro(): string {
  return fs.readFileSync(path.join(CHAPTERS_DIR, 'index.md'), 'utf8')
}

// Reads a chapter's markdown, dropping the leading H1 (the page renders its own title).
export function getBuildLabChapterContent(slug: string): string {
  const raw = fs.readFileSync(path.join(CHAPTERS_DIR, `${slug}.md`), 'utf8')
  return raw.replace(/^#[^\n]*\r?\n+/, '')
}

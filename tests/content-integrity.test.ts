import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  awards,
  judgingCriteria,
  projectTypes,
  schedule,
  submitChecklist,
} from '@/lib/content'

const root = process.cwd()
const contentRoots = ['README.md', 'app', 'components', 'docs', 'lib', 'resources']

function contentFiles(): string[] {
  const files: string[] = []

  function visit(relativePath: string) {
    const absolutePath = path.join(root, relativePath)
    const stat = fs.statSync(absolutePath)
    if (stat.isDirectory()) {
      for (const entry of fs.readdirSync(absolutePath)) visit(path.join(relativePath, entry))
      return
    }
    if (/\.(md|ts|tsx)$/.test(relativePath)) files.push(relativePath)
  }

  for (const contentRoot of contentRoots) visit(contentRoot)
  return files
}

function headingIds(markdown: string): Set<string> {
  return new Set(
    [...markdown.matchAll(/^#{1,6}\s+(.+)$/gm)].map(([, heading]) =>
      heading
        .toLowerCase()
        .replace(/<[^>]+>/g, '')
        .replace(/[’'"`*_]/g, '')
        .replace(/[^\p{L}\p{N}\s-]/gu, '')
        .trim()
        .replace(/\s+/g, '-'),
    ),
  )
}

const normalizeText = (value: string) => value.replaceAll('’', "'").replaceAll('–', '-')

function markdownSection(markdown: string, heading: string): string {
  return markdown.split(`## ${heading}`)[1]?.split(/\n## /)[0] ?? ''
}

describe('site content integrity', () => {
  const files = contentFiles()

  it('contains no retired domains, links, or launch placeholders', () => {
    const retiredPatterns = [
      /v0\.dev/,
      /v0-dcx-hackathon-2026-website\.vercel\.app/,
      /v0-DCX-hackathon-2026/,
      /nextjs-openai-doc-search-starter/,
      /ai-sdk\.dev\/cookbook/,
      /\[time\]/,
      /\[Add your own\]/,
      /Demo \(2 min\)/,
      /Mon 1 Sep/,
      /14 September/,
      /1[–-]14 September/,
      /Seed \/ Sprout \/ Harvest/,
      /AI Playground Hackathon/,
      /Innovation Hackathon 2026/,
      /next hackathon/,
      /public organisation repo can work/,
    ]

    const findings = files.filter((file) => file !== 'docs/CONTRIBUTING.md').flatMap((file) => {
      const content = fs.readFileSync(path.join(root, file), 'utf8')
      return retiredPatterns
        .filter((pattern) => pattern.test(content))
        .map((pattern) => `${file}: ${pattern.source}`)
    })

    expect(findings).toEqual([])
  })

  it('resolves relative Markdown links and their heading anchors', () => {
    const broken: string[] = []

    for (const file of files.filter((candidate) => candidate.endsWith('.md'))) {
      const source = fs.readFileSync(path.join(root, file), 'utf8')
      for (const [, href] of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
        if (/^(https?:|mailto:|\/)/.test(href)) continue

        const [relativeTarget, anchor] = href.split('#')
        const target = relativeTarget
          ? path.resolve(root, path.dirname(file), relativeTarget)
          : path.resolve(root, file)

        if (!fs.existsSync(target)) {
          broken.push(`${file}: ${href}`)
          continue
        }

        if (anchor && target.endsWith('.md')) {
          const ids = headingIds(fs.readFileSync(target, 'utf8'))
          if (!ids.has(anchor)) broken.push(`${file}: ${href}`)
        }
      }
    }

    expect(broken).toEqual([])
  })

  it('keeps schedule dates aligned with the participant guide', () => {
    const howItWorks = fs.readFileSync(path.join(root, 'docs/how-it-works.md'), 'utf8')
    const scheduleRows = markdownSection(howItWorks, 'Schedule')
      .split('\n')
      .filter((line) => /^\| (?!When|---)/.test(line))
      .map((line) => line.split('|')[1].trim())

    expect(scheduleRows).toEqual(schedule.map((item) => item.when))
  })

  it('keeps project types aligned with their guide', () => {
    const projectGuide = fs.readFileSync(path.join(root, 'docs/project-types.md'), 'utf8')

    for (const projectType of projectTypes) {
      expect(projectGuide).toContain(`## ${projectType.title}`)
      expect(normalizeText(projectGuide).toLowerCase()).toContain(
        normalizeText(projectType.goal).toLowerCase(),
      )
    }
  })

  it('keeps judging criteria, awards, and submission fields aligned', () => {
    const judging = fs.readFileSync(path.join(root, 'docs/judging.md'), 'utf8')
    const submission = fs.readFileSync(path.join(root, 'docs/submission.md'), 'utf8')

    for (const item of judgingCriteria) {
      expect(judging).toContain(`| ${item.criterion} | ${item.weight}% | ${item.question} |`)
    }
    for (const award of awards) {
      const label = award.replace(/ \(.*\)$/, '')
      expect(normalizeText(judging)).toContain(normalizeText(label))
    }
    for (const item of submitChecklist) {
      expect(normalizeText(submission)).toContain(`**${normalizeText(item.title)}**`)
    }
  })
})

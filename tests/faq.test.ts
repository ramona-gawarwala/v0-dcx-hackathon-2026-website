import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { faqGroups } from '@/lib/faq'

const markdown = fs.readFileSync(path.join(process.cwd(), 'docs/faq.md'), 'utf8')

const normalizeQuestion = (question: string) =>
  question.replaceAll('’', "'").replaceAll('…', '...')

const headingSlug = (number: number, question: string) =>
  `${number}. ${question}`
    .toLowerCase()
    .replace(/[’'"]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')

describe('FAQ sources', () => {
  const websiteQuestions = faqGroups.flatMap((group) => group.items.map((item) => item.q))
  const markdownQuestions = [...markdown.matchAll(/^### \d+\. (.+)$/gm)].map((match) => match[1])
  const contentsEntries = [...markdown.matchAll(/^\d+\. \[(.+)\]\((#[^)]+)\)$/gm)].map(
    ([, label, href]) => ({ label, href }),
  )

  it('keeps website questions and Markdown headings in the same order', () => {
    expect(markdownQuestions.map(normalizeQuestion)).toEqual(
      websiteQuestions.map(normalizeQuestion),
    )
  })

  it('keeps every Markdown contents link aligned with its heading', () => {
    expect(contentsEntries).toHaveLength(markdownQuestions.length)

    contentsEntries.forEach((entry, index) => {
      expect(normalizeQuestion(entry.label)).toBe(normalizeQuestion(markdownQuestions[index]))
      expect(entry.href).toBe(`#${headingSlug(index + 1, markdownQuestions[index])}`)
    })
  })

  it('keeps every FAQ group non-empty', () => {
    expect(faqGroups.every((group) => group.items.length > 0)).toBe(true)
  })
})
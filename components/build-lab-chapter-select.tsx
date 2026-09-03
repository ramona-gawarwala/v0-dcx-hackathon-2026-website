'use client'

import { useRouter } from 'next/navigation'
import { buildLabChapters } from '@/lib/build-lab'

/** Jump-to-chapter picker so readers can skip straight to any chapter. */
export function BuildLabChapterSelect({ current }: Readonly<{ current: string }>) {
  const router = useRouter()

  return (
    <label className="block">
      <span className="sr-only">Jump to chapter</span>
      <select
        value={current}
        onChange={(event) => router.push(`/guides/build-lab/${event.target.value}`)}
        className="w-full cursor-pointer rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 focus:border-primary focus:outline-none sm:w-auto"
      >
        {buildLabChapters.map((chapter, index) => (
          <option key={chapter.slug} value={chapter.slug}>
            {index + 1}. {chapter.title} · {chapter.levels}
          </option>
        ))}
      </select>
    </label>
  )
}

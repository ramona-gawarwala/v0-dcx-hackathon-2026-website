import type { ProjectType } from '@/lib/content'

export function ProjectTypeCard({ type: t }: Readonly<{ type: ProjectType }>) {
  return (
    <article className="card-september flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <t.icon className="size-6" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.goal}</p>
    </article>
  )
}

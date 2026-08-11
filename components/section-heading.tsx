export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="h-px w-6 bg-primary/60" />
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      </div>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

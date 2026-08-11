import { benefitHighlights } from '@/lib/content'

export function BenefitsBanner() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <p className="text-center font-display text-sm font-semibold uppercase tracking-wide text-primary">
            What everyone walks away with
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefitHighlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="size-5" />
                </span>
                <span className="text-sm font-medium leading-snug">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

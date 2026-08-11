import { benefitHighlights } from '@/lib/content'

export function BenefitsBanner() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div aria-hidden="true" className="benefit-sheen absolute inset-x-0 top-0 h-1" />
          <p className="text-center font-display text-sm font-semibold uppercase tracking-wide">
            <span className="benefit-heading bg-gradient-to-r from-harvest via-primary to-sprout bg-clip-text text-transparent">
              What everyone walks away with
            </span>
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefitHighlights.map((h, i) => (
              <div
                key={h.label}
                className="benefit-card flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                style={{ animationDelay: `${i * 90}ms` }}
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

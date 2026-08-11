// Shared decorative top-corner glow + dot texture used on every page.
export function PageDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(var(--color-border) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(120% 90% at 50% 0%, black 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, black 30%, transparent 78%)',
        }}
      />
      <div
        className="animate-spin-slow absolute -right-24 -top-40 size-[32rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'conic-gradient(from 140deg at 50% 50%, var(--color-seed), var(--color-sprout), var(--color-harvest), var(--color-seed))',
        }}
      />
    </div>
  )
}

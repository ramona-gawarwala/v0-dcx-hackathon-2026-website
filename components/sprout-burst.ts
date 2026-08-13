// Fires a short burst of emoji particles from a screen point. Client-only.
// No-op when the user prefers reduced motion.
const SPROUTS = ['🌱', '🌿', '🍃', '✨', '🌾']

export function sproutBurst(
  x: number,
  y: number,
  count = 16,
  emojis: readonly string[] = SPROUTS,
): void {
  if (typeof document === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span')
    el.textContent = emojis[i % emojis.length]
    el.setAttribute('aria-hidden', 'true')
    el.style.cssText = `position:fixed;left:${x}px;top:${y}px;z-index:9999;pointer-events:none;user-select:none;font-size:${14 + Math.random() * 14}px;will-change:transform,opacity;`
    document.body.appendChild(el)

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5)
    const dist = 60 + Math.random() * 90
    const dx = Math.cos(angle) * dist
    const dy = Math.sin(angle) * dist - 40 // bias the spray upward
    const rot = (Math.random() - 0.5) * 360

    const anim = el.animate(
      [
        { transform: 'translate(-50%,-50%) translate(0,0) rotate(0deg) scale(0.6)', opacity: 1 },
        {
          transform: `translate(-50%,-50%) translate(${dx}px,${dy}px) rotate(${rot}deg) scale(1)`,
          opacity: 1,
          offset: 0.7,
        },
        {
          transform: `translate(-50%,-50%) translate(${dx * 1.15}px,${dy + 90}px) rotate(${rot}deg) scale(0.9)`,
          opacity: 0,
        },
      ],
      { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(0.2,0.6,0.2,1)' },
    )
    const cleanup = () => el.remove()
    anim.onfinish = cleanup
    anim.oncancel = cleanup
  }
}

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  children: ReactNode
  /** classi del binario scorrevole (flex, gap, padding…) */
  className?: string
  /** colore delle frecce: chiaro su sfondo scuro, scuro su sfondo chiaro */
  tone?: 'light' | 'dark'
}

/**
 * Riga orizzontale scorrevole con frecce sinistra/destra: si vede subito che
 * si può scorrere, e su desktop si può farlo anche senza touchpad.
 * Le frecce compaiono solo quando c'è davvero qualcosa da scorrere.
 */
export function HScroll({ children, className = '', tone = 'dark' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      setCanLeft(el.scrollLeft > 8)
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [children])

  const go = (dir: 1 | -1) => {
    const el = ref.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const btn =
    tone === 'light'
      ? 'bg-cream text-ink shadow-xl hover:bg-gold'
      : 'bg-ink text-cream shadow-xl hover:bg-red'

  return (
    <div className="relative">
      <div ref={ref} className={`no-scrollbar overflow-x-auto ${className}`}>
        {children}
      </div>
      <button
        onClick={() => go(-1)}
        aria-label="Scorri a sinistra"
        className={`absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition md:left-4 ${btn} ${
          canLeft ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Scorri a destra"
        className={`absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition md:right-4 ${btn} ${
          canRight ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}

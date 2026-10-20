import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { Lightbox } from '../ui/Lightbox'

// Due file di piatti che scorrono in direzioni opposte seguendo lo scroll:
// tante foto in poco spazio verticale (ideale su mobile).
const rowA = [
  { src: '/images/fish/scoglio-gamberoni-sm.webp', label: 'Spaghetti allo scoglio' },
  { src: '/images/fish/orata-acqua-pazza-sm.webp', label: "Orata all'acqua pazza" },
  { src: '/images/fish/frittura-cestino-sm.webp', label: 'Frittura nel cestino' },
  { src: '/images/fish/grigliata-mare-sm.webp', label: 'Grigliata di mare' },
  { src: '/images/fish/insalata-mare-sm.webp', label: 'Insalata di mare' },
  { src: '/images/fish/branzino-griglia-sm.webp', label: 'Branzino alla brace' },
]
const rowB = [
  { src: '/images/meat/fiorentina-sm.webp', label: 'Fiorentina' },
  { src: '/images/fish/spiedini-calamari-sm.webp', label: 'Spiedini di calamari' },
  { src: '/images/meat/bresaola-sm.webp', label: 'Bresaola, rucola e grana' },
  { src: '/images/contorni/verdure-grigliate-sm.webp', label: 'Verdure alla griglia' },
  { src: '/images/meat/braciola-sm.webp', label: 'Braciola alla brace' },
  { src: '/images/dessert/torta-pistacchio-sm.webp', label: 'Torta al pistacchio' },
]

// tutte le foto, a grandezza piena, per sfogliarle nel lightbox
const allDishes = [...rowA, ...rowB].map((d) => ({ src: d.src.replace('-sm.webp', '.webp'), alt: d.label }))

function Tile({ src, label, onOpen }: { src: string; label: string; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      aria-label={`Apri foto: ${label}`}
      className="group relative h-44 w-36 shrink-0 overflow-hidden rounded-2xl text-left shadow-warm sm:h-56 sm:w-48 md:h-72 md:w-60"
    >
      <img src={src} alt={label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-3 pb-2.5 pt-8 text-sm font-medium text-cream">
        {label}
      </span>
    </button>
  )
}

export function DishStrip() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const xA = useTransform(scrollYProgress, [0, 1], ['0%', '-35%'])
  const xB = useTransform(scrollYProgress, [0, 1], ['-35%', '0%'])
  const [active, setActive] = useState<number | null>(null)
  const open = (label: string) => setActive(allDishes.findIndex((d) => d.alt === label))

  return (
    <section ref={ref} className="overflow-hidden py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <SectionHeading eyebrow="Appena uscito dalla cucina" title="I piatti della casa" className="mb-8 md:mb-14" />
      </div>
      <div className="space-y-3 md:space-y-5">
        <motion.div style={{ x: xA }} className="flex w-max gap-3 md:gap-5">
          {[...rowA, ...rowA.slice(0, 3)].map((d, i) => <Tile key={i} {...d} onOpen={() => open(d.label)} />)}
        </motion.div>
        <motion.div style={{ x: xB }} className="flex w-max gap-3 md:gap-5">
          {[...rowB, ...rowB.slice(0, 3)].map((d, i) => <Tile key={i} {...d} onOpen={() => open(d.label)} />)}
        </motion.div>
      </div>
      <div className="mt-10 text-center">
        <Link to="/menu" className="inline-flex rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-red">
          Scopri tutto il menu
        </Link>
      </div>
      <Lightbox items={allDishes} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </section>
  )
}

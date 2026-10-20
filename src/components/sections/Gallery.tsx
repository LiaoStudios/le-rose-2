import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Lightbox } from '../ui/Lightbox'
import { gallery, galleryCategories, type GalleryFilter } from '../../data/gallery'

// Quante foto mostrare prima del pulsante "Mostra tutte le immagini" — tiene
// la pagina scorrevole su mobile invece di un'unica colonna lunghissima.
const INITIAL_COUNT = 6

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>('Tutte')
  const [active, setActive] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const items = useMemo(
    () => (filter === 'Tutte' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  )

  // Torna alla vista ridotta ogni volta che si cambia filtro.
  useEffect(() => {
    setShowAll(false)
  }, [filter])

  const visibleItems = showAll ? items : items.slice(0, INITIAL_COUNT)
  const hasMore = !showAll && items.length > INITIAL_COUNT

  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-4 py-16 md:px-12 md:py-28">
      <SectionHeading eyebrow="Uno sguardo da noi" title="Gallery" className="mb-8" />

      <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:px-0">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition ${
              filter === c ? 'bg-red text-cream shadow-warm' : 'bg-white text-ink/70 hover:bg-beige'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-4">
        {visibleItems.map((img, i) => (
          <motion.button
            key={img.src}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            onClick={() => setActive(i)}
            className="group block aspect-square w-full overflow-hidden rounded-xl shadow-warm md:rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3 text-sm font-bold uppercase tracking-widest text-ink/80 shadow-warm transition hover:bg-beige"
          >
            Mostra tutte le immagini <ChevronDown size={16} />
          </button>
        </div>
      )}

      <Lightbox items={visibleItems} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </section>
  )
}

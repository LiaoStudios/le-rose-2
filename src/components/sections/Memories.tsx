import { motion } from 'framer-motion'
import { memories } from '../../data/memories'
import { HScroll } from '../ui/HScroll'

/** "Ricordi a tavola": foto di ospiti, amici e personaggi famosi passati da Le Rose 2. */
export function Memories() {
  if (memories.length === 0) return null
  return (
    <section id="ricordi" className="overflow-hidden bg-beige texture-paper py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 text-center md:px-12">
        <span className="font-retro text-sm uppercase tracking-[0.3em] text-red">L'album di famiglia</span>
        <h2 className="mt-2 font-serif text-4xl md:text-6xl">Ricordi a tavola</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/60">Ospiti, amici e volti noti passati da Le Rose 2 negli anni.</p>
      </div>

      <HScroll className="mx-auto mt-10 flex max-w-[1440px] snap-x snap-mandatory gap-5 px-6 pb-6 pt-2 md:gap-8 md:px-12 lg:justify-center">
        {memories.map((m, i) => (
          <motion.figure
            key={m.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
            className="w-[62vw] max-w-[260px] shrink-0 snap-center"
          >
            <img src={m.src} alt={m.caption} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-warm" />
            <figcaption className="mt-3 text-center leading-tight">
              <span className="block font-serif text-lg italic text-ink">{m.caption}</span>
              {m.sub && <span className="mt-0.5 block text-xs text-ink/55">{m.sub}</span>}
            </figcaption>
          </motion.figure>
        ))}
      </HScroll>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wine as WineIcon } from 'lucide-react'
import { wines, type Wine } from '../../data/wines'
import { HScroll } from '../ui/HScroll'

const filters = ['Tutti', 'Bollicine', 'Bianco', 'Rosso'] as const
type Filter = (typeof filters)[number]

const dot: Record<Wine['type'], string> = {
  Bollicine: 'bg-gold',
  Bianco: 'bg-[#E8DFA8]',
  Rosso: 'bg-red',
}

export function Cantina() {
  const [filter, setFilter] = useState<Filter>('Tutti')
  const list = filter === 'Tutti' ? wines : wines.filter((w) => w.type === filter)

  return (
    <section id="cantina" className="bg-ink texture-wood py-16 text-cream md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-retro mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold">
              <WineIcon size={16} /> La cantina
            </span>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">Un calice dal Sud</h2>
            <p className="mt-3 max-w-lg font-light text-cream/70">
              Dalla costiera amalfitana alla Sicilia, fino al Pignoletto di casa nostra: etichette scelte per
              accompagnare il pesce e la brace.
            </p>
          </div>
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  filter === f ? 'border-gold bg-gold text-ink' : 'border-cream/20 text-cream/80 hover:border-cream/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
      <HScroll tone="light" className="mx-auto flex max-w-[1440px] snap-x snap-mandatory scroll-px-4 gap-4 px-4 pb-2 md:scroll-px-12 md:gap-6 md:px-12">
        {list.map((w, i) => (
          <motion.article
            key={w.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.08 }}
            className="w-[58vw] max-w-[250px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-cream text-ink shadow-2xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={w.image} alt={`${w.name} — ${w.producer}`} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream backdrop-blur">
                <span className={`h-2 w-2 rounded-full ${dot[w.type]}`} /> {w.type}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg font-bold leading-snug">{w.name}</h3>
              <p className="text-xs uppercase tracking-wider text-ink/50">{w.producer} · {w.origin}</p>
              <p className="mt-2 text-sm text-ink/70">{w.note}</p>
              <p className="mt-2 text-xs text-red-deep"><span className="font-bold">Con:</span> {w.pairing}</p>
            </div>
          </motion.article>
        ))}
      </HScroll>
      </div>
      <p className="mx-auto mt-6 max-w-[1440px] px-4 text-sm text-cream/50 md:px-12">
        Carta dei vini completa e vino della casa disponibili in sala.
      </p>
    </section>
  )
}

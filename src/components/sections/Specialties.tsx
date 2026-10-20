import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { HScroll } from '../ui/HScroll'
import { fadeUp, inView, stagger } from '../../lib/motion'

const specialties = [
  { title: 'Cucina di mare', to: '/menu#pesce', img: '/images/fish/grigliata-pesce.webp', text: 'Frittura del Golfo, orata, branzino e crudi.' },
  { title: 'Primi di mare', to: '/menu#primi', img: '/images/fish/scoglio-piatto.webp', text: 'Spaghetti allo scoglio, astice e vongole veraci.' },
  { title: 'La nostra pizza', to: '/menu#pizze', img: '/images/pizza/mista.webp', text: 'Bordo alto e cotta nel forno, come da tradizione.' },
  { title: 'Secondi di terra', to: '/menu#griglia', img: '/images/meat/fiorentina.webp', text: 'Fiorentina, braciola e tagliata alla brace.' },
]

export function Specialties() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <SectionHeading eyebrow="Le nostre specialità" title="Cosa si mangia da noi" className="mb-8 md:mb-14" />
      </div>

      {/* su mobile: carosello orizzontale a scatto (niente colonna lunghissima) */}
      <HScroll className="mx-auto max-w-[1440px] snap-x snap-mandatory scroll-px-4 px-4 pb-4 md:px-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="flex gap-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4"
      >
        {specialties.map((s) => (
          <motion.div key={s.title} variants={fadeUp} className="w-[72vw] max-w-[300px] shrink-0 snap-center md:w-auto md:max-w-none">
            <Link to={s.to} className="group relative block aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-warm">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                <h3 className="font-serif text-2xl italic">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-snug text-cream/80">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                  Vedi nel menu <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      </HScroll>
    </section>
  )
}

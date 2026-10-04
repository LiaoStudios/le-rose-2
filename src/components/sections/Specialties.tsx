import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { fadeUp, inView, stagger } from '../../lib/motion'

const specialties = [
  { title: 'Cucina di mare', to: '/menu#pesce', img: '/images/fish/spaghetti-scoglio.webp', text: 'Pesce fresco, frutti di mare e primi che sanno di Mediterraneo.' },
  { title: 'La nostra pizza', to: '/menu#pizze', img: '/images/pizza/diavola.webp', text: 'Impasto a lunga lievitazione e ingredienti scelti.' },
  { title: 'Griglia di carne', to: '/menu#griglia', img: '/images/meat/grigliata-mista.webp', text: 'Tagli selezionati e grigliate miste cotte alla brace.' },
  { title: 'Primi della tradizione', to: '/menu#primi', img: '/images/pasta/tortellini-panna.webp', text: 'Pasta fresca e classici di terra fatti come una volta.' },
]

export function Specialties() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Le nostre specialità" title="Il cuore de Le Rose 2" className="mb-16" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {specialties.map((s) => (
          <motion.div key={s.title} variants={fadeUp}>
            <Link to={s.to} className="card-organic group block overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7 text-center">
                <h3 className="mb-3 font-serif text-2xl italic">{s.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-ink/60">{s.text}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-red transition group-hover:text-red-deep">
                  Scopri di più →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import { ScrollWords } from '../ui/ScrollWords'

const stats = [
  { value: '20+', label: 'anni a tavola' },
  { value: '4,1★', label: '2.000+ recensioni' },
  { value: '7/7', label: 'aperti tutti i giorni' },
]

export function Story() {
  return (
    <section id="storia" className="relative overflow-hidden bg-ink texture-wood text-cream">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-12 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="font-retro mb-4 block text-sm uppercase tracking-[0.3em] text-gold">La nostra storia</span>
          <ScrollWords
            text="Una trattoria di una volta, con la cucina del Sud nel cuore e la tavola sempre apparecchiata."
            className="font-serif text-3xl leading-tight md:text-5xl"
          />
          <Reveal>
            <p className="mt-6 text-base font-light leading-relaxed text-cream/75 md:text-lg">
              Da oltre vent'anni a Castel Maggiore la ricetta è sempre la stessa: pesce fresco, pasta tirata a mano,
              la brace accesa e il forno della pizza. Tovaglie bianche, il murale in ceramica della costiera e il
              calore di una famiglia che ti accoglie come a casa.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-cream/10 pt-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className="font-retro block text-3xl text-gold md:text-4xl">{s.value}</span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-cream/60">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* una sola foto: l'insegna della trattoria */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <img
            src="/images/facade/insegna.webp"
            alt="L'insegna Trattoria Pizzeria Le Rose 2"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[2rem] lg:aspect-[4/5] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

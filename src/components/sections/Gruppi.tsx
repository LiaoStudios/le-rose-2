import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { gruppiMenus } from '../../data/gruppi'
import { siteInfo } from '../../data/siteInfo'

/** Menù fissi per pranzi e cene aziendali / prefestivi, impaginati come il biglietto stampato. */
export function Gruppi() {
  const [active, setActive] = useState(gruppiMenus[0].id)
  const m = gruppiMenus.find((g) => g.id === active) ?? gruppiMenus[0]

  return (
    <section id="gruppi" className="mx-auto max-w-3xl px-4 pb-4 pt-6 md:px-8">
      <div className="rounded-[2rem] bg-white px-5 py-9 text-center shadow-warm ring-1 ring-ink/5 md:p-12">
        <span className="font-retro text-sm uppercase tracking-[0.3em] text-red">Pranzi e cene aziendali · prefestivi</span>
        <h2 className="mt-2 font-script text-5xl text-red-deep md:text-7xl">Menu per gruppi</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
          Compleanni, cerimonie, pranzi di lavoro: un menù completo a prezzo fisso, bevande incluse.
        </p>

        <div className="mt-6 flex justify-center gap-2">
          {gruppiMenus.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === g.id ? 'bg-red text-cream shadow-cta' : 'bg-beige text-ink/70 hover:bg-beige/70'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <div className="mx-auto mb-6 flex max-w-xs items-center gap-3 text-red/50" aria-hidden>
              <span className="h-px flex-1 bg-current" /> ❦ <span className="h-px flex-1 bg-current" />
            </div>
            <div className="space-y-5">
              {m.courses.map((c) => (
                <div key={c.label}>
                  <span className="font-retro text-xs uppercase tracking-[0.3em] text-red">{c.label}</span>
                  <ul className="mt-1.5 space-y-0.5 font-serif text-[17px] italic text-ink/80">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex flex-col items-center rounded-2xl border-2 border-dashed border-red/40 px-8 py-3">
              <span className="font-retro text-4xl text-red">{m.price}</span>
              <span className="text-xs uppercase tracking-widest text-ink/50">a testa</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 border-t border-ink/10 pt-6">
          <p className="font-script text-3xl text-red-deep md:text-4xl">Il buon umore mette appetito!</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
            Siamo sempre a vostra disposizione per organizzare pranzi e cene di lavoro, compleanni, feste per cerimonie
            religiose e tutto ciò che potremo valutare insieme per rendere speciale e unico il vostro evento alle Rose 2.
          </p>
          <a
            href={siteInfo.phoneHref}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-red"
          >
            <Phone size={16} /> Prenota il tuo evento
          </a>
        </div>
      </div>
    </section>
  )
}

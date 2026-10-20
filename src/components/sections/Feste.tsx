import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Sparkles } from 'lucide-react'
import { festeMenus } from '../../data/feste'
import { siteInfo } from '../../data/siteInfo'

export function Feste() {
  const [active, setActive] = useState(festeMenus[0].id)
  const menu = festeMenus.find((m) => m.id === active) ?? festeMenus[0]

  return (
    <section id="feste" className="gingham relative py-10 md:py-24">
      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <div className="rounded-[2rem] bg-cream px-5 py-8 shadow-2xl ring-1 ring-ink/5 md:p-12">
          <div className="text-center">
            <span className="font-retro inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-red">
              <Sparkles size={16} /> Le feste da noi
            </span>
            <h2 className="mt-2 font-script text-5xl text-red-deep md:text-7xl">Menù delle Feste</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
              Vigilia, Natale e Capodanno a Le Rose 2: menù completi, bevande incluse.
            </p>
          </div>

          <div className="no-scrollbar mt-6 flex justify-start gap-2 overflow-x-auto sm:justify-center">
            {festeMenus.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === m.id ? 'bg-red text-cream shadow-cta' : 'bg-beige text-ink/70 hover:bg-beige/70'
                }`}
              >
                {m.short}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-center"
            >
              <h3 className="font-serif text-2xl italic md:text-3xl">{menu.title}</h3>
              <span className="text-xs uppercase tracking-widest text-ink/45">{menu.date}</span>
              <div className="mt-5 space-y-4">
                {menu.courses.map((c) => (
                  <div key={c.label}>
                    <span className="font-retro text-xs uppercase tracking-[0.3em] text-red">{c.label}</span>
                    <ul className="mt-1.5 space-y-0.5 font-serif text-[17px] italic text-ink/80">
                      {c.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              {menu.note && <p className="mt-6 font-script text-2xl text-red-deep">{menu.note}</p>}
              <div className="mt-7 inline-flex flex-col items-center rounded-2xl border-2 border-dashed border-red/40 px-8 py-3">
                <span className="font-retro text-4xl text-red">{menu.price}</span>
                <span className="text-xs uppercase tracking-widest text-ink/50">a persona · bevande incluse</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-ink/10 pt-6 text-center">
            <a href={siteInfo.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-red">
              <Phone size={16} /> Prenota le feste
            </a>
            <span className="text-xs text-ink/45">Prezzi dell'ultima edizione: chiamaci per il menù di quest'anno.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

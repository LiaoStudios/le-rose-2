import { Reveal } from '../ui/Reveal'

export function Story() {
  return (
    <section id="storia" className="relative overflow-hidden bg-ink texture-wood py-24 text-cream md:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-gold">La nostra storia</span>
          <h2 className="text-4xl leading-tight md:text-6xl">
            Un angolo di Sud, nel cuore di Castel Maggiore.
          </h2>
          <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-cream/80">
            <p>
              «Le Rose 2» nasce dall'amore per la cucina del Sud e per l'accoglienza, quella vera, di casa.
              Il murale in ceramica della costiera amalfitana che vi accoglie racconta le nostre radici.
            </p>
            <p>
              Pesce fresco, carne alla griglia, pasta fatta come una volta e la nostra pizza: porzioni
              abbondanti, prodotti scelti e il giusto rapporto qualità-prezzo, ogni giorno.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <img
              src="/images/brand/famiglia.webp"
              alt="Lo staff de Le Rose 2"
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-full border-2 border-gold object-cover"
            />
            <div>
              <span className="block font-serif text-2xl">La famiglia Le Rose 2</span>
              <span className="italic font-light text-gold">L'anima della cucina</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <img
              src="/images/interior/sala-legno.webp"
              alt="La sala interna del ristorante Le Rose 2"
              loading="lazy"
              className="relative z-20 aspect-[4/5] w-full rounded-[3rem] object-cover shadow-2xl"
            />
            <div className="absolute -left-6 -top-6 z-10 h-full w-full rounded-[3rem] border-2 border-gold/30" />
            {/* il murale in ceramica della costiera amalfitana come dettaglio firma */}
            <div className="absolute -bottom-8 -right-6 z-30 h-32 w-32 overflow-hidden rounded-full border-4 border-cream shadow-warm">
              <img src="/images/brand/murale-amalfi.webp" alt="Murale in ceramica Le Rose Due" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

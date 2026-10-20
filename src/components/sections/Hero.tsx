import { motion } from 'framer-motion'
import { UtensilsCrossed, CalendarHeart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LogoBadge } from '../ui/LogoBadge'
import { siteInfo } from '../../data/siteInfo'

export function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-cream pt-[14svh] md:pt-0">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fish/hero.webp"
          alt="Spaghetti allo scoglio de Le Rose 2"
          className="h-full w-full -translate-y-[15svh] object-cover [mask-image:linear-gradient(to_bottom,#000_62%,transparent_100%)] md:translate-y-0 md:[mask-image:none] md:object-[50%_42%]"
        />
        {/* overall darken for legibility */}
        <div className="absolute inset-0 bg-ink/45" />
        {/* focused scrim behind the title */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(65% 55% at 50% 42%, rgba(36,26,21,0.6), rgba(36,26,21,0) 72%)' }}
        />
        {/* bottom fade: blends seamlessly into the cream section below */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream via-cream/80 to-transparent md:h-2/5" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-ink/20 px-4 py-1.5 text-xs italic md:mb-6 md:px-5 md:py-2 md:text-sm text-cream backdrop-blur-sm"
        >
          <LogoBadge className="h-6 w-6" />
          Ristorante &amp; Pizzeria · Castel Maggiore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-script leading-[0.95] text-cream drop-shadow-[0_3px_24px_rgba(0,0,0,0.65)] text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          Le Rose Due
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-4 max-w-xs text-[13px] font-light leading-snug md:mt-6 md:max-w-xl md:text-lg md:leading-normal text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
        >
          Pesce fresco, carne alla griglia e la vera pizza: il sapore del mare e il calore della cucina di casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 md:gap-4"
        >
          <Link
            to="/menu"
            className="btn-organic inline-flex items-center gap-2 bg-red px-8 py-3 text-xs font-bold uppercase tracking-wider md:px-10 md:py-4 md:text-sm text-cream shadow-cta"
          >
            <UtensilsCrossed size={18} /> Scopri il Menu
          </Link>
          <a
            href={siteInfo.bookingUrl}
            className="btn-organic inline-flex items-center gap-2 border border-cream/60 bg-ink/30 px-8 py-3 text-xs font-bold uppercase tracking-wider md:px-10 md:py-4 md:text-sm text-cream backdrop-blur-md hover:bg-ink/45"
          >
            <CalendarHeart size={18} /> Prenota un tavolo
          </a>
        </motion.div>
      </div>

      {/* il wrapper centra; l'animazione sta sullo span (framer-motion sovrascriverebbe il translate di Tailwind) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center text-ink/50 md:bottom-8">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="pl-[0.3em] text-xs uppercase tracking-[0.3em]"
        >
          Scorri
        </motion.span>
      </div>
    </section>
  )
}

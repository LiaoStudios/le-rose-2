import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Phone, X } from 'lucide-react'
import { useBooking } from '../../lib/booking'
import { useScrollLock } from '../../lib/useScrollLock'
import { siteInfo } from '../../data/siteInfo'

/**
 * Finestra con il modulo di prenotazione Accomodati incorporato: il cliente
 * prenota senza lasciare il sito. L'iframe viene caricato solo all'apertura.
 */
export function BookingModal() {
  const { open, closeBooking } = useBooking()
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeBooking()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, closeBooking])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[130] flex items-end justify-center bg-ink/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBooking}
          role="dialog"
          aria-modal="true"
          aria-label="Prenota un tavolo"
        >
          <motion.div
            className="flex max-h-[94svh] w-full max-w-[480px] flex-col overflow-hidden rounded-t-[1.75rem] bg-cream shadow-2xl sm:rounded-[1.75rem]"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-5 py-4">
              <div>
                <h2 className="font-serif text-xl leading-tight">Prenota un tavolo</h2>
                <p className="text-xs text-ink/55">Le Rose 2 · Castel Maggiore</p>
              </div>
              <button onClick={closeBooking} aria-label="Chiudi" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-warm transition hover:bg-beige">
                <X size={20} />
              </button>
            </div>

            <iframe
              src={siteInfo.bookingWidgetUrl}
              title="Prenota un tavolo a Le Rose 2"
              className="min-h-[560px] w-full flex-1 border-0 bg-cream"
              style={{ height: 'min(760px, 72svh)' }}
            />

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ink/10 px-5 py-3 text-xs text-ink/60">
              <a href={siteInfo.onlineBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold hover:text-red">
                <ExternalLink size={13} /> Apri in una nuova scheda
              </a>
              <a href={siteInfo.phoneHref} className="inline-flex items-center gap-1.5 font-semibold hover:text-red">
                <Phone size={13} /> Oppure chiama {siteInfo.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

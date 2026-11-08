import type { ReactNode } from 'react'
import { useBooking } from '../../lib/booking'
import { hasOnlineBooking, siteInfo } from '../../data/siteInfo'

/** Pulsante "Prenota": apre il modulo online; senza prenotazione online chiama il locale. */
export function BookButton({ className, children }: { className?: string; children: ReactNode }) {
  const { openBooking } = useBooking()
  if (!hasOnlineBooking) {
    return (
      <a href={siteInfo.phoneHref} className={className}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  )
}

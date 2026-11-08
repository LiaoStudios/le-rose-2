import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface BookingCtx {
  open: boolean
  openBooking: () => void
  closeBooking: () => void
}

const Ctx = createContext<BookingCtx | null>(null)

/** Stato condiviso del modulo di prenotazione: qualunque pulsante "Prenota" lo apre. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openBooking = useCallback(() => setOpen(true), [])
  const closeBooking = useCallback(() => setOpen(false), [])
  const value = useMemo(() => ({ open, openBooking, closeBooking }), [open, openBooking, closeBooking])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useBooking() {
  const c = useContext(Ctx)
  if (!c) throw new Error('useBooking va usato dentro BookingProvider')
  return c
}

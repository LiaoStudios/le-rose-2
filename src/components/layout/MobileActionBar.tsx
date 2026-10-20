import { useEffect, useState } from 'react'
import { Phone, UtensilsCrossed, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/siteInfo'

/** Barra fissa in basso su telefono: chiama, menu, indicazioni sempre a portata di pollice. */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const item = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold uppercase tracking-wider'

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-[80] flex overflow-hidden rounded-2xl bg-ink/95 text-cream shadow-2xl ring-1 ring-cream/10 backdrop-blur-md transition-all duration-300 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
      }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={siteInfo.phoneHref} className={`${item} bg-red`}>
        <Phone size={18} /> Chiama
      </a>
      <Link to="/menu" className={item}>
        <UtensilsCrossed size={18} /> Menu
      </Link>
      <a href={siteInfo.mapsDirections} target="_blank" rel="noopener noreferrer" className={item}>
        <Navigation size={18} /> Mappa
      </a>
    </div>
  )
}

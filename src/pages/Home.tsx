import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { Story } from '../components/sections/Story'
import { DishStrip } from '../components/sections/DishStrip'
import { Cantina } from '../components/sections/Cantina'
import { Memories } from '../components/sections/Memories'
import { Gallery } from '../components/sections/Gallery'
import { Reviews } from '../components/sections/Reviews'
import { Contact } from '../components/sections/Contact'
import { siteInfo } from '../data/siteInfo'

function scrollToId(id: string) {
  if (id === 'home') return window.scrollTo({ top: 0 })
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export function Home() {
  const location = useLocation()

  // Handle navigation from another route (state.scrollTo) or a #hash on load.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    const hash = location.hash.replace('#', '')
    const id = target || hash
    if (id) {
      // small delay so the sections are laid out before scrolling
      const t = setTimeout(() => scrollToId(id), 100)
      return () => clearTimeout(t)
    }
  }, [location])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Le Rose 2',
    servesCuisine: ['Pesce', 'Pizza', 'Italiana', 'Grigliata', 'Napoletana'],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.address,
      postalCode: siteInfo.cap,
      addressLocality: siteInfo.city,
      addressRegion: siteInfo.province,
      addressCountry: 'IT',
    },
    telephone: siteInfo.phone,
    hasMenu: '/menu',
    openingHours: 'Mo-Su 12:00-14:30, Mo-Su 19:00-23:30',
    sameAs: [siteInfo.social.facebook],
  }

  return (
    <>
      <Helmet>
        <title>Le Rose 2 | Ristorante e Pizzeria a Castel Maggiore</title>
        <meta
          name="description"
          content="Le Rose 2, ristorante e pizzeria a Castel Maggiore (BO): pesce fresco, carne alla griglia, primi della tradizione e pizza napoletana. Porzioni abbondanti e ottimo rapporto qualità-prezzo."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Hero />
      <Specialties />
      <Story />
      <DishStrip />
      <Cantina />
      <Memories />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  )
}

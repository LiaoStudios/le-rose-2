// Unica fonte per contatti / orari / social.
// Dati reali di "Le Rose 2" (Ristorante Pizzeria, Castel Maggiore — BO),
// verificati da schede ufficiali (Virgilio, PagineBianche, Sluurpy) e Facebook.
export const siteInfo = {
  name: 'Le Rose 2',
  tagline: 'Ristorante & Pizzeria',

  phone: '+39 051 712502',
  phoneHref: 'tel:+39051712502',
  email: '',
  address: 'Via della Costituzione, 1/E',
  city: 'Castel Maggiore',
  province: 'BO',
  cap: '40013',
  country: 'Italia',

  mapsEmbed:
    'https://www.google.com/maps?q=Le+Rose+2+Via+della+Costituzione+1+Castel+Maggiore&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Le+Rose+2+Via+della+Costituzione+1+Castel+Maggiore+BO',

  // Orari da scheda Sluurpy: tutti i giorni 12:00–14:30 e 19:00–23:30.
  hours: [
    { days: 'Lunedì', value: '12:00 – 14:30 · 19:00 – 23:30' },
    { days: 'Martedì', value: '12:00 – 14:30 · 19:00 – 23:30' },
    { days: 'Mercoledì', value: '12:00 – 14:30 · 19:00 – 23:30' },
    { days: 'Giovedì', value: '12:00 – 14:30 · 19:00 – 23:30' },
    { days: 'Venerdì', value: '12:00 – 14:30 · 19:00 – 23:30' },
    { days: 'Sabato', value: '12:00 – 14:30 · 19:00 – 23:30' },
    { days: 'Domenica', value: '12:00 – 14:30 · 19:00 – 23:30' },
  ],

  // La prenotazione avviene telefonicamente.
  bookingUrl: 'tel:+39051712502',

  social: {
    instagram: '',
    facebook: 'https://www.facebook.com/p/Le-Rose-Due-Officialpage-100067163235512/',
    google:
      'https://www.google.com/search?q=Ristorante+Pizzeria+Le+Rose+2+Castel+Maggiore+Recensioni',
  },
} as const

export type SiteInfo = typeof siteInfo

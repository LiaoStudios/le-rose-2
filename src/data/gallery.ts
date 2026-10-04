export interface GalleryImage {
  src: string
  category: 'Pizza' | 'Cucina' | 'Pesce' | 'Carne' | 'Locale'
  alt: string
}

export const galleryCategories = ['Tutte', 'Pizza', 'Cucina', 'Pesce', 'Carne', 'Locale'] as const
export type GalleryFilter = (typeof galleryCategories)[number]

export const gallery: GalleryImage[] = [
  { src: '/images/pizza/pomodorini.webp', category: 'Pizza', alt: 'Pizza margherita con pomodorini' },
  { src: '/images/pizza/diavola.webp', category: 'Pizza', alt: 'Pizza diavola con salame piccante' },
  { src: '/images/pizza/melanzane.webp', category: 'Pizza', alt: 'Pizza con melanzane grigliate' },
  { src: '/images/pizza/prosciutto.webp', category: 'Pizza', alt: 'Pizza prosciutto' },
  { src: '/images/pizza/margherita.webp', category: 'Pizza', alt: 'Pizza ai formaggi' },
  { src: '/images/pizza/gourmet.webp', category: 'Pizza', alt: 'Pizza speciale della casa' },

  { src: '/images/fish/spaghetti-scoglio.webp', category: 'Pesce', alt: 'Spaghetti allo scoglio' },
  { src: '/images/fish/spaghetti-astice.webp', category: 'Pesce', alt: 'Spaghetti all’astice' },
  { src: '/images/fish/pasta-mare.webp', category: 'Pesce', alt: 'Pasta ai frutti di mare' },
  { src: '/images/fish/gnocchi-vongole.webp', category: 'Pesce', alt: 'Gnocchetti con vongole' },
  { src: '/images/fish/grigliata-pesce.webp', category: 'Pesce', alt: 'Pesce fresco alla griglia' },
  { src: '/images/fish/pesce-al-forno.webp', category: 'Pesce', alt: 'Orata all’acqua pazza' },
  { src: '/images/fish/cozze.webp', category: 'Pesce', alt: 'Cozze alla marinara' },
  { src: '/images/fish/antipasto-mare.webp', category: 'Pesce', alt: 'Antipasto di mare' },

  { src: '/images/meat/tagliata.webp', category: 'Carne', alt: 'Tagliata di manzo' },
  { src: '/images/meat/grigliata-mista.webp', category: 'Carne', alt: 'Grigliata mista di carne' },
  { src: '/images/meat/bistecca.webp', category: 'Carne', alt: 'Bistecca alla griglia' },

  { src: '/images/pasta/tagliatelle-funghi.webp', category: 'Cucina', alt: 'Tagliatelle ai funghi' },
  { src: '/images/pasta/tortellini-panna.webp', category: 'Cucina', alt: 'Tortellini alla panna' },
  { src: '/images/pasta/tortellini-brodo.webp', category: 'Cucina', alt: 'Tortellini in brodo' },
  { src: '/images/antipasti/prosciutto-bufala.webp', category: 'Cucina', alt: 'Prosciutto crudo e bufala' },
  { src: '/images/antipasti/fritto-misto.webp', category: 'Cucina', alt: 'Fritto misto' },
  { src: '/images/dessert/dolce.webp', category: 'Cucina', alt: 'Dolce della casa' },
  { src: '/images/dessert/cheesecake.webp', category: 'Cucina', alt: 'Cheesecake ai frutti di bosco' },

  { src: '/images/brand/murale-amalfi.webp', category: 'Locale', alt: 'Murale in ceramica «Le Rose Due» — costiera amalfitana' },
  { src: '/images/facade/esterno-giorno.webp', category: 'Locale', alt: 'Esterno del locale con veranda' },
  { src: '/images/facade/insegna.webp', category: 'Locale', alt: 'Insegna Trattoria Pizzeria Le Rose 2' },
  { src: '/images/interior/sala.webp', category: 'Locale', alt: 'Sala interna del ristorante' },
  { src: '/images/interior/veranda.webp', category: 'Locale', alt: 'Veranda con vista sul giardino' },
  { src: '/images/interior/banchetto.webp', category: 'Locale', alt: 'Sala allestita per un banchetto' },
]

export interface GalleryImage {
  src: string
  category: 'Pizza' | 'Cucina' | 'Pesce' | 'Carne' | 'Locale'
  alt: string
}

export const galleryCategories = ['Tutte', 'Pesce', 'Pizza', 'Carne', 'Cucina', 'Locale'] as const
export type GalleryFilter = (typeof galleryCategories)[number]

// Le prime 6 sono quelle visibili subito: le foto più forti in apertura.
export const gallery: GalleryImage[] = [
  { src: '/images/fish/scoglio-gamberoni.webp', category: 'Pesce', alt: 'Spaghetti allo scoglio con gamberoni' },
  { src: '/images/fish/frittura-nido.webp', category: 'Pesce', alt: 'Frittura di calamari e gamberi su nido di spaghetti' },
  { src: '/images/pizza/mista.webp', category: 'Pizza', alt: 'Pizza metà ortolana e metà salsiccia e funghi' },
  { src: '/images/meat/fiorentina.webp', category: 'Carne', alt: 'Fiorentina alla brace' },
  { src: '/images/fish/branzino-griglia.webp', category: 'Pesce', alt: 'Branzino alla griglia con radicchio e zucchine' },
  { src: '/images/interior/sala.webp', category: 'Locale', alt: 'Sala interna del ristorante' },

  { src: '/images/fish/orata-acqua-pazza.webp', category: 'Pesce', alt: 'Orata all’acqua pazza con gamberoni' },
  { src: '/images/fish/frittura-cestino.webp', category: 'Pesce', alt: 'Frittura mista nel cestino di pizza' },
  { src: '/images/fish/grigliata-mare.webp', category: 'Pesce', alt: 'Grigliata di mare: orata, spada e gamberone' },
  { src: '/images/fish/scoglio-piatto.webp', category: 'Pesce', alt: 'Spaghetti allo scoglio' },
  { src: '/images/fish/spaghetti-astice.webp', category: 'Pesce', alt: 'Spaghetti all’astice' },
  { src: '/images/fish/insalata-mare.webp', category: 'Pesce', alt: 'Insalata di mare con alici e salmone' },
  { src: '/images/fish/spiedini-calamari.webp', category: 'Pesce', alt: 'Spiedini di calamari gratinati' },
  { src: '/images/fish/orata-griglia.webp', category: 'Pesce', alt: 'Orata alla griglia' },
  { src: '/images/fish/cozze.webp', category: 'Pesce', alt: 'Cozze alla marinara' },
  { src: '/images/fish/gnocchi-vongole.webp', category: 'Pesce', alt: 'Gnocchetti con vongole' },

  { src: '/images/pizza/pomodorini.webp', category: 'Pizza', alt: 'Pizza margherita con pomodorini' },
  { src: '/images/pizza/diavola.webp', category: 'Pizza', alt: 'Pizza diavola con salame piccante' },
  { src: '/images/pizza/melanzane.webp', category: 'Pizza', alt: 'Pizza con melanzane grigliate' },
  { src: '/images/pizza/gourmet.webp', category: 'Pizza', alt: 'Pizza speciale della casa' },

  { src: '/images/meat/braciola.webp', category: 'Carne', alt: 'Braciola di maiale alla brace' },
  { src: '/images/meat/bresaola.webp', category: 'Carne', alt: 'Bresaola, rucola, grana e zucchine grigliate' },
  { src: '/images/meat/tagliata.webp', category: 'Carne', alt: 'Tagliata di manzo' },
  { src: '/images/meat/grigliata-mista.webp', category: 'Carne', alt: 'Grigliata mista di carne' },

  { src: '/images/contorni/verdure-grigliate.webp', category: 'Cucina', alt: 'Verdure grigliate e cotte' },
  { src: '/images/pasta/tagliatelle-funghi.webp', category: 'Cucina', alt: 'Tagliatelle ai funghi' },
  { src: '/images/pasta/tortellini-brodo.webp', category: 'Cucina', alt: 'Tortellini in brodo' },
  { src: '/images/antipasti/prosciutto-bufala.webp', category: 'Cucina', alt: 'Prosciutto crudo e bufala' },
  { src: '/images/dessert/torta-pistacchio.webp', category: 'Cucina', alt: 'Torta al pistacchio' },
  { src: '/images/dessert/torta-nocciola.webp', category: 'Cucina', alt: 'Torta alla nocciola' },
  { src: '/images/dessert/frutta.webp', category: 'Cucina', alt: 'Spiedini di frutta fresca' },

  { src: '/images/brand/murale-amalfi.webp', category: 'Locale', alt: 'Murale in ceramica «Le Rose Due» — costiera amalfitana' },
  { src: '/images/facade/esterno-giorno.webp', category: 'Locale', alt: 'Esterno del locale con veranda' },
  { src: '/images/interior/veranda.webp', category: 'Locale', alt: 'Veranda con vista sul giardino' },
  { src: '/images/interior/banchetto.webp', category: 'Locale', alt: 'Sala allestita per un banchetto' },
]

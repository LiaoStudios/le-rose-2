// La cantina: etichette fotografate in sala (foto del cliente, ottobre 2026).
// TODO(cliente): aggiungere i prezzi a bottiglia se si vogliono mostrare.

export interface Wine {
  name: string
  producer: string
  origin: string
  type: 'Bollicine' | 'Bianco' | 'Rosso'
  note: string
  pairing: string
  image: string
}

export const wines: Wine[] = [
  {
    name: 'Prosecco DOC Extra Dry',
    producer: 'Villa Sala',
    origin: 'Treviso',
    type: 'Bollicine',
    note: 'Millesimato, fresco e fruttato.',
    pairing: 'Aperitivo, crudi e antipasti di mare',
    image: '/images/wine/prosecco.webp',
  },
  {
    name: 'Blanc de Blancs Brut',
    producer: "Ca' Ernesto",
    origin: 'Chardonnay spumante',
    type: 'Bollicine',
    note: 'Secco, elegante, perlage fine.',
    pairing: 'Frittura e brindisi di festa',
    image: '/images/wine/blanc-de-blancs.webp',
  },
  {
    name: 'Pignoletto Frizzante',
    producer: 'Borgo degli Imbeni · Chiarli 1860',
    origin: 'Emilia',
    type: 'Bollicine',
    note: 'Il frizzante di casa nostra, leggero e beverino.',
    pairing: 'Tortellini, salumi e pizza',
    image: '/images/wine/pignoletto.webp',
  },
  {
    name: 'Falanghina del Sannio DOC',
    producer: 'Mastroberardino',
    origin: 'Campania',
    type: 'Bianco',
    note: 'Sapido, profumi di agrumi e fiori bianchi.',
    pairing: 'Spaghetti allo scoglio e pesce alla griglia',
    image: '/images/wine/falanghina.webp',
  },
  {
    name: "Costa d'Amalfi Bianco DOC",
    producer: 'Ettore Sammarco · Terre Saracene',
    origin: 'Costiera amalfitana',
    type: 'Bianco',
    note: 'Minerale e luminoso, come la costiera.',
    pairing: 'Orata, branzino e crudi',
    image: '/images/wine/amalfi-bianco.webp',
  },
  {
    name: "Costa d'Amalfi Rosso DOC",
    producer: 'Ettore Sammarco · Terre Saracene',
    origin: 'Costiera amalfitana',
    type: 'Rosso',
    note: 'Morbido, frutti rossi e macchia mediterranea.',
    pairing: 'Primi al ragù e carne alla brace',
    image: '/images/wine/amalfi-rosso.webp',
  },
  {
    name: "Nero d'Avola DOC",
    producer: 'Terre di Zagara',
    origin: 'Sicilia',
    type: 'Rosso',
    note: 'Pieno e speziato, caldo come il Sud.',
    pairing: 'Fiorentina e grigliata mista',
    image: '/images/wine/nero-davola.webp',
  },
]

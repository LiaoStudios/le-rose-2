// "Ricordi a tavola": foto ricordo con ospiti, amici e personaggi passati da Le Rose 2.
// Per aggiungere una foto con un personaggio famoso: mettere il JPG in FotoCliente/,
// aggiungerlo a scripts/optimize-images.mjs (cat: 'memories') e inserire qui una voce.
// TODO(cliente): indicare chi è l'ospite della foto "ospite-frittura" (nome da mostrare).

export interface Memory {
  src: string
  caption: string
  /** didascalia piccola sotto, es. anno o occasione */
  sub?: string
}

export const memories: Memory[] = [
  { src: '/images/memories/torta-20-anni.webp', caption: 'Auguri, Le Rose 2!', sub: 'La torta dei nostri 20 anni' },
  { src: '/images/memories/ospite-frittura.webp', caption: 'Promosso a pieni voti', sub: 'Frittura del Golfo per due' },
  { src: '/images/brand/famiglia.webp', caption: 'La squadra', sub: "Dietro le quinte, l'anima del locale" },
  { src: '/images/brand/murale-amalfi.webp', caption: 'Il nostro murale', sub: 'Ceramica della costiera amalfitana' },
]

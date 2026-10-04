// Recensioni reali degli ospiti (Google / Sluurpy).
export interface Review {
  author: string
  rating: number
  text: string
  source?: 'Google' | 'Facebook' | 'TripAdvisor'
}

export const reviews: Review[] = [
  {
    author: 'Alessandro',
    rating: 5,
    text: 'Menu vario, personale gentile e veloce, ottima pizza e piatti abbondanti. Prezzo imbattibile.',
    source: 'Google',
  },
  {
    author: 'Kiwy',
    rating: 5,
    text: 'Locale molto alla mano dove si mangia egregiamente sia la pizza che il ristorante carne e pesce.',
    source: 'Google',
  },
  {
    author: 'Maurizio',
    rating: 4,
    text: 'Buon rapporto qualità-prezzo. Staff disponibile, servizio celere, buon menu con porzioni giuste.',
    source: 'Google',
  },
]

export const reviewSummary = { average: 3.8, count: 2556 }

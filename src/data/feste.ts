// Menù delle feste trascritti dai volantini del locale (ultima edizione).
// TODO(cliente): aggiornare piatti e prezzi a ogni nuova stagione delle feste.

export interface FestaCourse {
  label: string
  items: string[]
}

export interface FestaMenu {
  id: string
  title: string
  /** etichetta breve per il selettore */
  short: string
  date: string
  price: string
  note?: string
  courses: FestaCourse[]
}

export const festeMenus: FestaMenu[] = [
  {
    id: 'vigilia',
    title: 'Vigilia di Natale',
    short: 'Vigilia',
    date: '24 dicembre',
    price: '€50',
    courses: [
      { label: 'Antipasti', items: ['Sauté di cozze', 'Cocktail di gamberi'] },
      { label: 'Primi', items: ['Paccheri mare e monti (cozze, vongole, porcini)', 'Risotto ai frutti di mare'] },
      { label: 'Secondi', items: ['Frittura del Golfo', 'Gamberoni alla griglia', 'Contorni vari'] },
      { label: 'Dulcis in fundo', items: ['Sorbetto', 'Frutta secca e fresca', 'Panettone e spumante', 'Caffè e limoncello'] },
    ],
  },
  {
    id: 'natale',
    title: 'Pranzo di Natale',
    short: 'Natale',
    date: '25 dicembre',
    price: '€45',
    courses: [
      { label: 'Antipasti', items: ['Tagliere di affettati con Parmigiano Reggiano e verdure in pastella'] },
      { label: 'Primi', items: ['Tortellini in brodo di cappone', 'Tagliatelle di pasta fresca al ragù di carne'] },
      { label: 'Secondi', items: ['Tagliata di manzo rucola e grana', 'Filetto di maiale ai funghi porcini'] },
      { label: 'Contorni', items: ['Patate al forno e insalata mista'] },
      { label: 'Dulcis in fundo', items: ['Sorbetto', 'Frutta secca e fresca', 'Caffè e limoncello'] },
    ],
  },
  {
    id: 'capodanno',
    title: 'Festa di Capodanno',
    short: 'Capodanno',
    date: '31 dicembre',
    price: '€65',
    note: 'Con musica dal vivo, per festeggiare insieme il nuovo anno!',
    courses: [
      { label: 'Antipasto', items: ['Fantasia di antipasto freddo di mare', 'Cozze alla marinara', 'Moscardini alla luciana con crostini'] },
      { label: 'Primi', items: ['Risotto alla pescatora', 'Rigatoni alla partenopea (pesce, cozze e gamberoni)'] },
      { label: 'Secondi', items: ['Misto di pesce alla brace (spada, gamberoni e spiedini)', 'Frittura alla partenopea (calamari, gamberi e paranza)', 'Contorni vari'] },
      { label: 'Per brindare', items: ['Panettone, spumante, frutta fresca e secca', 'Caffè e limoncello'] },
    ],
  },
]

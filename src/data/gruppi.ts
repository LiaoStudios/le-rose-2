// Menù fissi per pranzi e cene aziendali / prefestivi (volantini del cliente, novembre 2026).

export interface GruppoMenu {
  id: string
  title: string
  courses: { label: string; items: string[] }[]
  price: string
}

const drinks = 'Acqua, vino della casa, bevande, caffè, limoncello, spumante'

export const gruppiMenus: GruppoMenu[] = [
  {
    id: 'carne',
    title: 'Menu Carne',
    price: '€40',
    courses: [
      { label: 'Antipasto', items: ['Mortadella I.G.P. Bologna e parmigiano con crescentine e alghe di mare'] },
      { label: 'Primi', items: ['Pappardelle speck e porcini', 'Gramigna alla salsiccia', 'Tortellini mignon alla crema di Parmigiano', 'Sorbetto'] },
      { label: 'Secondo', items: ['Tagliata di manzo con rucola, pomodorini e glassa al balsamico', 'Patate fritte, misticanza, patate al forno'] },
      { label: 'Da bere', items: [drinks] },
    ],
  },
  {
    id: 'pesce',
    title: 'Menu Pesce',
    price: '€40',
    courses: [
      { label: 'Antipasti', items: ['Cozze gratinate', 'Antipasto di mare con cocktail di gamberetti in salsa rosa', 'Pizza fritta e alghe di mare'] },
      { label: 'Primi', items: ['Risotto al profumo di mare (sgusciato) con frutti di mare', 'Linguine scampi e datterini', 'Paccheri amalfitani', 'Sorbetto'] },
      { label: 'Secondi', items: ['Fritto misto partenopeo con paranza', 'Gamberoni alla griglia', 'Spiedini di pesce romagnoli', 'Patate fritte, misticanza, patate al forno'] },
      { label: 'Da bere', items: [drinks] },
    ],
  },
]

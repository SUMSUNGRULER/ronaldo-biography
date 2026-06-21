// All images sourced from Wikimedia Commons under Creative Commons licenses.
// Attribution is required. See sourceUrl for each image's license details.

export type KenBurnsVariant =
  | 'kb-zoom-center'
  | 'kb-pan-right'
  | 'kb-zoom-right'
  | 'kb-zoom-out'
  | 'kb-zoom-left'
  | 'kb-pan-up'

export interface GalleryImage {
  id: string
  imageUrl: string
  alt: string
  caption: string
  author: string
  license: string
  licenseUrl: string
  sourceUrl: string
  year: string
  kenBurns: KenBurnsVariant
  objectPosition: string
}

export const heroGallery: GalleryImage[] = [
  {
    id: 'man-utd-2006',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cristiano_Ronaldo_%28cropped%29.jpg',
    alt: 'Cristiano Ronaldo at Old Trafford, Manchester United, 2006',
    caption: 'Manchester United era — Old Trafford, December 2006',
    author: 'Austin Osuide',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_(cropped).jpg',
    year: '2006',
    kenBurns: 'kb-zoom-center',
    objectPosition: 'center top',
  },
  {
    id: 'real-madrid-header-2009',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Salto_de_Cristiano_Ronaldo.jpg',
    alt: 'Cristiano Ronaldo heading the ball at the Bernabéu, Real Madrid vs Marseille, 2009',
    caption: 'Real Madrid vs Olympique Marseille — Bernabéu, Champions League 2009',
    author: 'Alejandro Ramos (Jan S0L0)',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Salto_de_Cristiano_Ronaldo.jpg',
    year: '2009',
    kenBurns: 'kb-pan-right',
    objectPosition: 'center 30%',
  },
  {
    id: 'euro-2012',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Cristiano_Ronaldo_20120609.jpg',
    alt: 'Cristiano Ronaldo for Portugal vs Germany, UEFA Euro 2012',
    caption: 'Portugal vs Germany — UEFA Euro 2012, Lviv, June 9 2012',
    author: 'Ilya Khokhlov / football.ua',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_20120609.jpg',
    year: '2012',
    kenBurns: 'kb-zoom-left',
    objectPosition: 'center 20%',
  },
  {
    id: 'wc-2022',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg',
    alt: 'Cristiano Ronaldo at the 2022 FIFA World Cup in Qatar',
    caption: '2022 FIFA World Cup — Lusail Stadium, Qatar, December 2022',
    author: 'Hossein Zohrevand / Tasnim News Agency',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_WC2022_-_01.jpg',
    year: '2022',
    kenBurns: 'kb-zoom-right',
    objectPosition: 'center 15%',
  },
  {
    id: 'portugal-2025',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Cristiano_Ronaldo_2275_%28cropped%29.jpg',
    alt: 'Cristiano Ronaldo playing for Portugal in 2025 World Cup qualifier',
    caption: 'Portugal vs Armenia — 2026 World Cup Qualifier, September 2025',
    author: 'Asatur Yesayants / YantsImages',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_2275_(cropped).jpg',
    year: '2025',
    kenBurns: 'kb-zoom-out',
    objectPosition: 'center top',
  },
  {
    id: 'al-nassr-2023',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Cristiano_Ronaldo_in_2023.jpg',
    alt: 'Cristiano Ronaldo playing for Al Nassr vs Persepolis, 2023',
    caption: 'Al Nassr FC vs Persepolis — Azadi Stadium, Tehran, September 2023',
    author: 'Mehdi Marizad / Farsnews',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_in_2023.jpg',
    year: '2023',
    kenBurns: 'kb-pan-up',
    objectPosition: 'center top',
  },
]

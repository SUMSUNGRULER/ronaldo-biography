// All photos are sourced from Wikimedia Commons under Creative Commons licenses.
// Attribution is required for all photos.

export interface Photo {
  url: string
  alt: string
  caption: string
  author: string
  license: string
  licenseUrl: string
  sourceUrl: string
  year: string
}

// CC BY 4.0 — Hossein Zohrevand / Tasnim News Agency
export const photoWC2022: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg',
  alt: 'Cristiano Ronaldo at the 2022 FIFA World Cup in Qatar',
  caption: 'Ronaldo at Lusail Stadium during the 2022 FIFA World Cup',
  author: 'Hossein Zohrevand / Tasnim News Agency',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_WC2022_-_01.jpg',
  year: '2022',
}

// CC BY 4.0 — Mehdi Marizad / Farsnews
export const photoAlNassr2023: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Cristiano_Ronaldo_in_2023.jpg',
  alt: 'Cristiano Ronaldo with Al Nassr in 2023',
  caption: 'Ronaldo playing for Al Nassr vs Persepolis FC, Azadi Stadium, Tehran, September 2023',
  author: 'Mehdi Marizad / Farsnews',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_in_2023.jpg',
  year: '2023',
}

// CC BY-SA 4.0 — Asatur Yesayants / YantsImages
export const photoPortugal2025: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Cristiano_Ronaldo_2275_%28cropped%29.jpg',
  alt: 'Cristiano Ronaldo playing for Portugal in 2025',
  caption: 'Ronaldo in the Armenia vs Portugal 2026 World Cup qualifier, September 2025',
  author: 'Asatur Yesayants / YantsImages',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_2275_(cropped).jpg',
  year: '2025',
}

// CC BY 2.0 — Anish Morarji
export const photoBallonDor2014: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/C._Ronaldo_-_Ballon_d%27Or_2014.jpg',
  alt: 'Cristiano Ronaldo with the 2014 Ballon d\'Or at Bernabéu',
  caption: 'Ronaldo presents the 2014 Ballon d\'Or at the Bernabéu, January 2015',
  author: 'Anish Morarji',
  license: 'CC BY 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  sourceUrl: "https://commons.wikimedia.org/wiki/File:C._Ronaldo_-_Ballon_d'Or_2014.jpg",
  year: '2015',
}

// CC BY 2.0 — Austin Osuide
export const photoManUtd2006: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cristiano_Ronaldo_%28cropped%29.jpg',
  alt: 'Cristiano Ronaldo at Manchester United, Old Trafford, 2006',
  caption: 'Ronaldo at Old Trafford during his Manchester United years, December 2006',
  author: 'Austin Osuide',
  license: 'CC BY 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_(cropped).jpg',
  year: '2006',
}

// CC BY-SA 4.0 — Simo Räsänen (Ximonic)
export const photoFunchalStatue: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cliffs_and_houses_of_the_coast_of_Faial%2C_Santana%2C_Madeira%2C_2023_May.jpg',
  alt: 'Aerial view of dramatic cliffs and colourful houses on the coast of Faial, Santana, Madeira',
  caption: 'Cliffs and houses of the coast of Faial, Santana, Madeira — the island where Ronaldo was born',
  author: 'Simo Räsänen (Ximonic)',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cliffs_and_houses_of_the_coast_of_Faial,_Santana,_Madeira,_2023_May.jpg',
  year: '2023',
}

// CC BY-SA 4.0 — Threeohsix
export const photoSportingJersey: Photo = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Camisola_28_de_Cristiano_Ronaldo_no_Museu_Sporting.jpg',
  alt: "Cristiano Ronaldo's #28 jersey at Sporting CP Museum, Lisbon",
  caption: "Ronaldo's #28 jersey at Museu Sporting, Lisbon — worn before Man Utd gave him #7",
  author: 'Threeohsix',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Camisola_28_de_Cristiano_Ronaldo_no_Museu_Sporting.jpg',
  year: '2023',
}

export const allPhotos: Photo[] = [
  photoWC2022,
  photoAlNassr2023,
  photoPortugal2025,
  photoBallonDor2014,
  photoManUtd2006,
  photoFunchalStatue,
  photoSportingJersey,
]

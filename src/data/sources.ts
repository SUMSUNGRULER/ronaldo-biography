export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  type: 'article' | 'official' | 'book' | 'documentary' | 'database';
  year?: string;
}

export const sourcesData: Source[] = [
  {
    id: 's1',
    title: 'Cristiano Ronaldo — Official Profile',
    publisher: 'UEFA.com',
    url: 'https://www.uefa.com/uefachampionsleague/history/rankings/players/goals_scored/',
    type: 'official',
    year: '2024',
  },
  {
    id: 's2',
    title: 'Cristiano Ronaldo Career Statistics',
    publisher: 'Transfermarkt',
    url: 'https://www.transfermarkt.com/cristiano-ronaldo/profil/spieler/8198',
    type: 'database',
    year: '2024',
  },
  {
    id: 's3',
    title: 'Ronaldo: Career Goals and Records',
    publisher: 'FIFA.com',
    url: 'https://www.fifa.com/fifaplus/en/articles/ronaldo-world-cup-history-goals-stats-quotes',
    type: 'official',
    year: '2022',
  },
  {
    id: 's4',
    title: 'Cristiano Ronaldo Ballon d\'Or History',
    publisher: 'France Football / Ballon d\'Or',
    url: 'https://www.francefoot ball.fr/',
    type: 'official',
    year: '2017',
  },
  {
    id: 's5',
    title: 'The £12.24m Signing That Changed British Football',
    publisher: 'The Guardian',
    url: 'https://www.theguardian.com/football/2013/aug/12/cristiano-ronaldo-manchester-united-10-years',
    type: 'article',
    year: '2013',
  },
  {
    id: 's6',
    title: 'Real Madrid Complete Record €94m Ronaldo Signing',
    publisher: 'BBC Sport',
    url: 'https://news.bbc.co.uk/sport2/hi/football/transfers/8078602.stm',
    type: 'article',
    year: '2009',
  },
  {
    id: 's7',
    title: 'Euro 2016: Ronaldo coaches Portugal from touchline after injury',
    publisher: 'BBC Sport',
    url: 'https://www.bbc.co.uk/sport/football/36710901',
    type: 'article',
    year: '2016',
  },
  {
    id: 's8',
    title: 'Portugal win Euro 2016: How Ronaldo led from the sideline',
    publisher: 'Sky Sports',
    url: 'https://www.skysports.com/football/news/11835/10536267/portugal-win-euro-2016',
    type: 'article',
    year: '2016',
  },
  {
    id: 's9',
    title: 'Ronaldo becomes first player to score at five World Cups',
    publisher: 'ESPN',
    url: 'https://www.espn.com/soccer/story/_/id/34905842/ronaldo-becomes-first-player-score-five-world-cups',
    type: 'article',
    year: '2022',
  },
  {
    id: 's10',
    title: 'Cristiano Ronaldo joins Al Nassr in Saudi Arabia',
    publisher: 'BBC Sport',
    url: 'https://www.bbc.com/sport/football/64162013',
    type: 'article',
    year: '2023',
  },
  {
    id: 's11',
    title: 'Ronaldo biography — Sporting CP years',
    publisher: 'Sporting CP Official Website',
    url: 'https://www.sporting.pt/',
    type: 'official',
    year: '2003',
  },
  {
    id: 's12',
    title: 'Cristiano Ronaldo: The Biography',
    publisher: 'Guillem Balagué, Orion Books',
    url: 'https://www.orionbooks.co.uk/',
    type: 'book',
    year: '2015',
  },
  {
    id: 's13',
    title: 'Ronaldo (Documentary Film)',
    publisher: 'Universal Pictures / Anthony Wonke',
    url: 'https://www.imdb.com/title/tt4270492/',
    type: 'documentary',
    year: '2015',
  },
  {
    id: 's14',
    title: 'All-time Champions League top scorer records',
    publisher: 'UEFA Statistics',
    url: 'https://www.uefa.com/uefachampionsleague/history/rankings/players/goals_scored/',
    type: 'database',
    year: '2024',
  },
  {
    id: 's15',
    title: 'Portugal National Team — Cristiano Ronaldo',
    publisher: 'Federação Portuguesa de Futebol',
    url: 'https://www.fpf.pt/',
    type: 'official',
    year: '2024',
  },
];

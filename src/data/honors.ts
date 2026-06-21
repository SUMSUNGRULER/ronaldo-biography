export interface Honor {
  id: string;
  title: string;
  detail: string;
  year?: string;
  isGold?: boolean;
}

export interface HonorCategory {
  id: string;
  category: string;
  icon: string;
  honors: Honor[];
}

export const honorsData: HonorCategory[] = [
  {
    id: 'individual',
    category: 'Individual Awards',
    icon: '🏆',
    honors: [
      { id: 'bd1', title: 'Ballon d\'Or', detail: 'World\'s Best Player', year: '2008', isGold: true },
      { id: 'bd2', title: 'Ballon d\'Or', detail: 'World\'s Best Player', year: '2013', isGold: true },
      { id: 'bd3', title: 'Ballon d\'Or', detail: 'World\'s Best Player', year: '2014', isGold: true },
      { id: 'bd4', title: 'Ballon d\'Or', detail: 'World\'s Best Player', year: '2016', isGold: true },
      { id: 'bd5', title: 'Ballon d\'Or', detail: 'World\'s Best Player', year: '2017', isGold: true },
      { id: 'fifa1', title: 'FIFA Best Men\'s Player', detail: 'FIFA World Player Award', year: '2008, 2011, 2015, 2016, 2017' },
      { id: 'uefa1', title: 'UEFA Best Player in Europe', detail: 'UEFA Men\'s Player of the Year', year: '2014, 2016, 2017' },
      { id: 'egs1', title: 'European Golden Shoe', detail: 'Top scorer in European leagues', year: '2008, 2011, 2014, 2015' },
      { id: 'pl1', title: 'PFA Players\' Player of the Year', detail: 'Premier League best player', year: '2007, 2008' },
      { id: 'pl2', title: 'Premier League Golden Boot', detail: 'Top scorer in the Premier League', year: '2008' },
      { id: 'la1', title: 'La Liga Best Player', detail: 'Top individual award in Spain', year: '2012, 2014, 2015' },
      { id: 'sa1', title: 'Serie A MVP', detail: 'Most Valuable Player in Italian football', year: '2020' },
      { id: 'ucl1', title: 'UEFA Champions League Top Scorer', detail: 'All-time record 8 seasons', year: 'Multiple' },
    ],
  },
  {
    id: 'club',
    category: 'Club Trophies',
    icon: '⚽',
    honors: [
      { id: 'uclt', title: 'UEFA Champions League', detail: 'Man Utd (2008), Real Madrid (2014, 2016, 2017, 2018)', year: '×5' },
      { id: 'plt', title: 'Premier League', detail: 'Manchester United', year: '2007, 2008, 2009' },
      { id: 'llt', title: 'La Liga', detail: 'Real Madrid', year: '2012, 2017' },
      { id: 'sat', title: 'Serie A', detail: 'Juventus', year: '2019, 2020' },
      { id: 'fat', title: 'FA Cup', detail: 'Manchester United', year: '2004' },
      { id: 'lct', title: 'League Cup', detail: 'Manchester United', year: '2006, 2009' },
      { id: 'cst', title: 'Community Shield', detail: 'Manchester United', year: '2007, 2008' },
      { id: 'cdt', title: 'Copa del Rey', detail: 'Real Madrid', year: '2011, 2014' },
      { id: 'ssc', title: 'Spanish Super Cup', detail: 'Real Madrid', year: '2012, 2014, 2017, 2020' },
      { id: 'cwc', title: 'FIFA Club World Cup', detail: 'Real Madrid', year: '2014, 2016, 2018' },
      { id: 'esc', title: 'UEFA Super Cup', detail: 'Real Madrid', year: '2014, 2016' },
      { id: 'ci', title: 'Coppa Italia', detail: 'Juventus', year: '2021' },
      { id: 'si', title: 'Supercoppa Italiana', detail: 'Juventus', year: '2018' },
    ],
  },
  {
    id: 'international',
    category: 'International Trophies',
    icon: '🌍',
    honors: [
      { id: 'euro', title: 'UEFA Euro 2016', detail: 'Captain of Portugal\'s first major trophy win. Injured in the final but guided his team from the touchline.', year: '2016', isGold: true },
      { id: 'unl', title: 'UEFA Nations League', detail: 'Won the inaugural edition with Portugal in their home country.', year: '2019' },
      { id: 'u20', title: 'FIFA World Youth Championship', detail: 'Won with Portugal Under-20 team', year: '2001' },
    ],
  },
  {
    id: 'records',
    category: 'All-Time Records',
    icon: '📊',
    honors: [
      { id: 'r1', title: 'All-Time UCL Goals', detail: '140+ goals in the UEFA Champions League — a record that may never be broken', year: '140+', isGold: true },
      { id: 'r2', title: 'All-Time International Goals', detail: 'Most goals ever scored in international football — surpassing Ali Daei\'s record in 2021', year: '130+', isGold: true },
      { id: 'r3', title: 'Most European Caps', detail: 'Most international appearances ever made by a European player', year: '200+' },
      { id: 'r4', title: 'Goals at 5 World Cups', detail: 'First and only player in history to score at five consecutive FIFA World Cups (2006–2022)', year: '2006–2022' },
      { id: 'r5', title: 'Real Madrid All-Time Top Scorer', detail: 'Holds the record for most goals scored for Real Madrid with 450 goals', year: '450' },
      { id: 'r6', title: 'Most Instagram Followers', detail: 'Most followed human being on Instagram with over 600 million followers', year: '600M+' },
      { id: 'r7', title: 'Most Hat-Tricks in UCL', detail: 'Holds the record for most hat-tricks in UEFA Champions League history', year: '8' },
    ],
  },
];

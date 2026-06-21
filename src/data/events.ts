export interface MajorEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  icon: string;
  accentColor: string;
}

export const eventsData: MajorEvent[] = [
  {
    id: 'man-utd-signing',
    year: '2003',
    title: 'Sir Alex\'s Discovery',
    subtitle: 'Signed by Manchester United — Age 18',
    description:
      'In August 2003, Manchester United played a pre-season friendly at Sporting CP\'s Estádio José Alvalade. A teenage Ronaldo tore United\'s defence apart so completely that several United players went to manager Sir Alex Ferguson at half-time and demanded he sign the boy on the spot. Ferguson obliged, paying a then-British record £12.24 million. He was handed the famous #7 shirt — previously worn by George Best, Bryan Robson, and Eric Cantona.',
    impact: 'The signing that changed football history. Ronaldo would spend six years at Old Trafford transforming from an exciting winger into the world\'s best player.',
    icon: '🔴',
    accentColor: 'border-accent',
  },
  {
    id: 'first-ballon-dor',
    year: '2008',
    title: 'The First Crown',
    subtitle: 'Ballon d\'Or & Champions League Winner',
    description:
      'The 2007–08 season was a transcendent one. Ronaldo scored 42 goals in all competitions, won the Premier League, and then scored in the Champions League final in Moscow against Chelsea — a match decided on penalties. He converted his penalty. Manchester United won. Ronaldo won the Ballon d\'Or by a landslide, ending the era of Ronaldinho and making a declaration to the world: a new king had arrived.',
    impact: 'The 2008 Ballon d\'Or was the opening shot in a decade-long rivalry with Lionel Messi that defined an era of football and split the world in two.',
    icon: '🏆',
    accentColor: 'border-gold',
  },
  {
    id: 'real-madrid-transfer',
    year: '2009',
    title: 'The €94 Million Man',
    subtitle: 'World-Record Transfer to Real Madrid',
    description:
      'On July 1, 2009, Cristiano Ronaldo signed for Real Madrid for €94 million — shattering the world transfer record. The Bernabéu unveiled him to 80,000 fans in white. The message was clear: this was the most expensive footballer in history arriving at the biggest club in the world. He was given the #7 shirt — the same number he wore at United. Real Madrid had bought the future.',
    impact: 'The €94M fee was more than triple the previous record. It announced to the world that football had entered a new financial stratosphere — and that Ronaldo was worth every cent.',
    icon: '⚽',
    accentColor: 'border-accent',
  },
  {
    id: 'el-clasico-resilience',
    year: '2012',
    title: 'El Clásico & Resilience',
    subtitle: 'Scored Against Barcelona — Then Cried',
    description:
      'In March 2012, with Real Madrid and Barcelona locked in their eternal rivalry, Ronaldo scored the winning goal in El Clásico at the Bernabéu. Yet what made headlines was what happened after: he wept. "I\'m sad," he said, "because the people don\'t love me." Despite being the world\'s best player, 94% of a Spanish TV poll had voted against him as their favourite. He carried that weight in silence — and kept scoring.',
    impact: 'A defining moment in the CR7 legend — showing that beneath the bravado was a man of deep emotion, using rejection as fuel rather than reason to quit.',
    icon: '💪',
    accentColor: 'border-accent2',
  },
  {
    id: 'euro-2016',
    year: '2016',
    title: 'The Captain\'s Finest Hour',
    subtitle: 'Portugal Win UEFA Euro 2016',
    description:
      'In the final of Euro 2016 against France in Paris, Ronaldo — Portugal\'s captain and talisman — was forced off injured after just 25 minutes. What happened next has become football folklore: he didn\'t sit in the dressing room. He paced the touchline in his tracksuit, gesticulating, encouraging, coaching. Portugal won 1–0 in extra time with a goal from Eder. Ronaldo wept. His players carried him. Portugal had their first major trophy.',
    impact: 'The image of Ronaldo in tears on the pitch, cradling his knee but screaming encouragement at his teammates, became one of the most iconic in football history.',
    icon: '🇵🇹',
    accentColor: 'border-gold',
  },
  {
    id: 'juventus-overhead-kick',
    year: '2018',
    title: 'The Bicycle Kick Heard Round the World',
    subtitle: 'Overhead Kick vs. Juventus — Then Signed for Them',
    description:
      'In April 2018, Ronaldo scored a stunning overhead kick for Real Madrid against Juventus in the Champions League quarter-finals. The Juventus fans in Turin rose to give him a standing ovation — a moment almost unprecedented in football. Three months later, Ronaldo signed for Juventus for €112 million. The club whose fans had applauded him had become his next destination.',
    impact: 'The Juventus fans\' standing ovation for a rival player encapsulates Ronaldo\'s power to transcend tribalism — something reserved for only the very greatest athletes.',
    icon: '🌟',
    accentColor: 'border-accent',
  },
  {
    id: 'world-cup-2022',
    year: '2022',
    title: 'Five World Cups',
    subtitle: 'First Player to Score at 5 Consecutive World Cups',
    description:
      'At the 2022 FIFA World Cup in Qatar, Ronaldo scored against Ghana, becoming the first player in the history of football to score at five consecutive World Cups (2006, 2010, 2014, 2018, 2022). It was a record that had stood beyond every legend who came before him — Pelé, Maradona, Zidane. None had managed five. Ronaldo had. Portugal ultimately fell in the quarter-finals, and Ronaldo\'s final World Cup ended with tears on the pitch.',
    impact: 'No other player in 92 years of World Cup history had scored at five consecutive tournaments. This record belongs to Ronaldo alone.',
    icon: '🌍',
    accentColor: 'border-gold',
  },
  {
    id: 'al-nassr',
    year: '2023',
    title: 'The New Frontier',
    subtitle: 'Al Nassr & the Saudi Revolution',
    description:
      'In January 2023, Ronaldo signed for Al Nassr on a reported €200 million per year contract — the largest in sports history. Critics called it a retirement tour. Instead, he scored 50+ goals in his debut season and triggered a migration of global superstars to the Saudi Pro League, including Karim Benzema, N\'Golo Kanté, and Neymar. At 38, he continues to score, lead, and inspire — making the Saudi league a global conversation.',
    impact: 'Ronaldo\'s move single-handedly elevated the Saudi Pro League to global consciousness. By 2024, the league had spent over $1 billion on player transfers, all following his path.',
    icon: '🇸🇦',
    accentColor: 'border-yellow-500',
  },
];

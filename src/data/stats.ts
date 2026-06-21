export interface StatCard {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  color: string;
}

export const statsData: StatCard[] = [
  {
    id: 'total-goals',
    label: 'Career Goals',
    value: 900,
    suffix: '+',
    description: 'Total goals across club and international football',
    color: 'text-gold',
  },
  {
    id: 'cl-goals',
    label: 'UCL Goals',
    value: 140,
    suffix: '+',
    description: 'All-time UEFA Champions League record',
    color: 'text-gold',
  },
  {
    id: 'international-goals',
    label: 'International Goals',
    value: 130,
    suffix: '+',
    description: 'All-time world record for international goals',
    color: 'text-accent',
  },
  {
    id: 'international-caps',
    label: 'International Caps',
    value: 200,
    suffix: '+',
    description: 'Most caps by a European player ever',
    color: 'text-accent',
  },
  {
    id: 'ballon-dor',
    label: 'Ballon d\'Or',
    value: 5,
    suffix: '',
    description: 'World Player of the Year award wins',
    color: 'text-gold',
  },
  {
    id: 'cl-titles',
    label: 'UCL Titles',
    value: 5,
    suffix: '',
    description: 'UEFA Champions League winner medals',
    color: 'text-gold',
  },
  {
    id: 'golden-boots',
    label: 'Golden Boots',
    value: 4,
    suffix: '',
    description: 'European Golden Shoe top scorer awards',
    color: 'text-accent2',
  },
  {
    id: 'world-cups',
    label: 'World Cups',
    value: 5,
    suffix: '',
    description: 'Consecutive World Cups with goals scored',
    color: 'text-accent2',
  },
  {
    id: 'clubs',
    label: 'Clubs',
    value: 6,
    suffix: '',
    description: 'Professional clubs represented across 4 countries',
    color: 'text-muted',
  },
];

export interface KeyFact {
  id: string;
  label: string;
  value: string;
}

export const keyFacts: KeyFact[] = [
  { id: 'born', label: 'Born', value: 'February 5, 1985' },
  { id: 'birthplace', label: 'Birthplace', value: 'Funchal, Madeira, Portugal' },
  { id: 'height', label: 'Height', value: '187 cm (6 ft 2 in)' },
  { id: 'position', label: 'Position', value: 'Forward / Winger' },
  { id: 'jersey', label: 'Jersey Number', value: '#7' },
  { id: 'foot', label: 'Preferred Foot', value: 'Right' },
  { id: 'debut', label: 'International Debut', value: 'August 20, 2003 vs Kazakhstan' },
  { id: 'instagram', label: 'Instagram Followers', value: '600M+ (most followed human)' },
];

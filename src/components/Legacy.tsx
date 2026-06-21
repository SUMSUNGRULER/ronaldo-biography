interface LegacyPillar {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  details: string[]
  icon: string
  color: string
}

const legacyPillars: LegacyPillar[] = [
  {
    id: 'discipline',
    number: '01',
    title: 'Training & Discipline',
    subtitle: 'The Machine Behind the Magic',
    description:
      'Ronaldo\'s physical conditioning is the result of obsessive, scientific self-management. Unlike any footballer before him, he treats his body as the primary instrument of his career — and invests in it accordingly.',
    details: [
      '5am daily workouts — even on rest days',
      'Ice baths and cryotherapy chambers in his homes',
      'Strictly regulated 3,500 calorie diet, optimised by nutritionists',
      'Five 90-minute sleep sessions per day instead of traditional 8-hour sleep (per sleep coach Nick Littlehales)',
      'Reportedly spends €50,000 per year on his body maintenance',
      'Has the body fat percentage of a professional Olympic sprinter (7%) at age 38+',
    ],
    icon: '💪',
    color: 'from-accent to-accent/50',
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Empire',
    subtitle: 'The CR7 Brand',
    description:
      'Beyond football, Ronaldo has built one of the most valuable personal brands in the history of sport. The CR7 logo is recognised globally, rivalling established sportswear brands.',
    details: [
      'Nike lifetime contract reportedly worth ~$1 billion — one of the largest in sports history',
      'CR7 brand: underwear, fragrance, footwear, and apparel line',
      'Pestana CR7 hotel chain with properties in Lisbon, Madrid, New York, and Marrakech',
      'Georgina Rodriguez: his partner and brand partner with her own Netflix documentary',
      'Soccer Schools — CR7 Craque Academies across Portugal',
      'Total estimated net worth: $500M+ (Forbes)',
    ],
    icon: '💰',
    color: 'from-gold to-gold/50',
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Dominance',
    subtitle: 'The Most Followed Human Being',
    description:
      'No human being on Earth has more Instagram followers than Cristiano Ronaldo. He didn\'t just play football — he became a global media phenomenon who redefined how athletes connect with fans.',
    details: [
      '600M+ Instagram followers — the most of any human being in history',
      '100M+ YouTube subscribers on his official channel',
      'Each sponsored Instagram post earns an estimated $3–5 million',
      'His social media reach dwarfs most national broadcasting channels',
      'First person to reach 100M, 200M, 300M, 400M, 500M and 600M followers on Instagram',
      'His social media presence is estimated to be worth $500M+ in brand value',
    ],
    icon: '📱',
    color: 'from-accent2 to-accent2/50',
  },
  {
    id: 'global-impact',
    number: '04',
    title: 'Global Football Impact',
    subtitle: 'Changing the Game, Beyond the Game',
    description:
      'Ronaldo\'s influence on football itself — on how the game is played, watched, and valued — extends far beyond goals and trophies. He has physically and commercially reshaped the sport on multiple continents.',
    details: [
      'Inspired an entire generation of Portuguese players (Bruno Fernandes, Bernardo Silva, João Felix all cite him)',
      'Raised the Saudi Pro League from regional obscurity to global viewership in under two years',
      'His €200M deal triggered a $1B+ spending spree by Saudi clubs on global talent',
      'Helped drive European club transfer records to previously unimaginable heights (his own €94M fee was a world record in 2009)',
      'CR7 Museum in Funchal, Madeira attracts hundreds of thousands of visitors annually',
      'Named a UNICEF Goodwill Ambassador; has donated to causes including earthquake relief in Morocco and Portugal children\'s hospitals',
    ],
    icon: '🌍',
    color: 'from-purple-600 to-purple-600/50',
  },
]

export default function Legacy() {
  return (
    <section id="legacy" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 field-silhouette pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/4 rounded-full blur-3xl pointer-events-none" />

      {/* Giant 7 */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[24rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
        7
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="accent-line mb-4" />
          <h2 className="section-heading">The Legacy</h2>
          <p className="section-subheading">
            What Cristiano Ronaldo leaves behind goes far beyond goals. Four pillars of an unprecedented legacy.
          </p>
        </div>

        {/* Legacy pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legacyPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="card-base group hover:border-white/10 hover:shadow-2xl transition-all duration-300 reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Number and icon */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-5xl font-black text-white/5 leading-none select-none">
                    {pillar.number}
                  </span>
                </div>
                <div className="text-3xl">{pillar.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-textPrimary mb-1">{pillar.title}</h3>
              <p className="text-sm text-accent font-medium mb-4">{pillar.subtitle}</p>

              {/* Gradient divider */}
              <div className={`h-0.5 w-12 bg-gradient-to-r ${pillar.color} mb-5 group-hover:w-24 transition-all duration-500 rounded-full`} />

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6">{pillar.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {pillar.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color} mt-1.5`} />
                    <span className="text-muted/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div className="mt-20 reveal">
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-gold/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="text-6xl font-black text-accent/10 leading-none mb-4 select-none">"</div>
              <blockquote className="text-xl md:text-2xl font-light text-textPrimary leading-relaxed max-w-3xl mx-auto mb-6">
                Your love makes me strong, your hate makes me unstoppable.
              </blockquote>
              <div className="text-muted text-sm font-medium">
                — Cristiano Ronaldo
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-white/10" />
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-black text-white text-sm">7</div>
                <div className="h-px w-16 bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

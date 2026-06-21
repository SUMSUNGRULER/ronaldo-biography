import { photoManUtd2006, photoBallonDor2014, photoAlNassr2023, photoFunchalStatue, photoSportingJersey } from '../data/photos'
import type { Photo } from '../data/photos'

interface BiographySection {
  id: string
  title: string
  content: string[]
  photo?: Photo
  photoPosition?: 'top' | 'center'
}

const biographySections: BiographySection[] = [
  {
    id: 'early-life',
    title: 'Early Life in Madeira',
    photo: photoFunchalStatue,
    photoPosition: 'center' as const,
    content: [
      'Cristiano Ronaldo dos Santos Aveiro was born on February 5, 1985, in Funchal, the capital of the Portuguese island of Madeira. He was the youngest of four children born to José Dinis Aveiro, a kit man at local club Andorinha, and Maria Dolores dos Santos Aveiro, a cook.',
      'Growing up in modest conditions on Madeira, football was Ronaldo\'s constant companion. His father José — who would tragically die of an alcohol-related liver condition in 2005 — took a young Cristiano to the local stadium for Andorinha matches and encouraged his earliest steps in the game. Those years in Funchal, where money was scarce but ambition was boundless, formed the bedrock of who Ronaldo would become.',
      'At age seven, Ronaldo joined local club Andorinha, where his father worked. At eight, he moved to Nacional da Madeira. His prodigious talent was already undeniable. At twelve, in 1997, he left Madeira alone for the first time to join Sporting CP\'s academy in Lisbon — an ocean away from everything he knew.',
    ],
  },
  {
    id: 'sporting-rise',
    title: 'Sporting CP & The Road to Manchester',
    photo: photoSportingJersey,
    photoPosition: 'center' as const,
    content: [
      'Life in Lisbon was not easy. Arriving at Sporting CP\'s academy, the young boy from Madeira was teased about his island accent. He responded the only way he knew: by working harder than everyone else. He trained twice daily when others trained once. He stayed on the pitch when others went home. The discipline forged in those years never left him.',
      'In 2002, aged 17, Ronaldo signed his first professional contract with Sporting CP. His debut for the first team came on October 7, 2002, against Moreirense — he scored twice. His performances that season caught the attention of the biggest clubs in Europe.',
      'Then came the match that changed everything. In the summer of 2003, Sporting hosted Manchester United in a pre-season friendly at the Estádio José Alvalade. A 18-year-old Ronaldo ran United\'s experienced defence ragged for 90 minutes. By half-time, several United players had gone to Sir Alex Ferguson and told him he needed to sign this boy. Ferguson agreed. A British record £12.24 million fee was agreed, and Cristiano Ronaldo was given the number 7 shirt — previously worn by George Best, Bryan Robson, Eric Cantona, and David Beckham.',
    ],
  },
  {
    id: 'man-utd-era',
    title: 'Manchester United: The Making of a Champion',
    photo: photoManUtd2006,
    photoPosition: 'top' as const,
    content: [
      'The six years at Old Trafford transformed Ronaldo from an exciting, occasionally inconsistent winger into the most complete footballer on the planet. Under Sir Alex Ferguson\'s guidance, he learned when to shoot and when to pass; when to dribble and when to move the ball. He won his first Premier League title in 2006–07, and the following season delivered one of the greatest individual campaigns in English football history: 42 goals across all competitions.',
      'The 2008 Champions League final in Moscow against Chelsea is still remembered as one of the sport\'s greatest occasions. Ronaldo scored in normal time, and though he missed a penalty in the shootout — before Edwin van der Sar saved Nicolas Anelka\'s kick to win the trophy — the memory of that night and the Ballon d\'Or that followed cemented his status as the world\'s best.',
      'He left United in 2009 for Real Madrid in a world-record deal worth €94 million. Ferguson later said selling Ronaldo was the most difficult decision of his managerial career. "He was our best player," he wrote in his autobiography. "He wanted Real Madrid. I couldn\'t stand in his way."',
    ],
  },
  {
    id: 'real-madrid-era',
    title: 'Real Madrid: Records, Rivalry & the Ballon d\'Or Throne',
    photo: photoBallonDor2014,
    photoPosition: 'center' as const,
    content: [
      'At Real Madrid, Ronaldo achieved the truly extraordinary. In nine seasons, he scored 450 goals in 438 appearances — better than a goal per game for the biggest club in the world. He won four Champions League titles (2014, 2016, 2017, 2018), two La Liga titles, two Copa del Rey trophies, and four Ballon d\'Or awards (2013, 2014, 2016, 2017).',
      'His rivalry with Lionel Messi — who won the Ballon d\'Or in 2009, 2010, 2011, 2012 during Ronaldo\'s early Madrid years — defined an era. The two men pushed each other to heights that no players before them had reached. Between 2008 and 2019, Ronaldo and Messi won every Ballon d\'Or. Between them, they scored over 1,700 goals. The debate over which man was greater became football\'s defining philosophical question.',
      'The 2018 Juventus overhead kick stands as one of the most technically brilliant goals ever scored. Ronaldo, standing metres from goal, leapt into the air and volleyed an arcing cross into the top corner. The Juventus fans gave him a standing ovation — in their own stadium, against their own team, in the Champions League. Three months later, Ronaldo signed for Juventus.',
    ],
  },
  {
    id: 'later-career',
    title: 'Juventus, Return & the Saudi Chapter',
    photo: photoAlNassr2023,
    photoPosition: 'top' as const,
    content: [
      'His two-and-a-half seasons at Juventus produced 101 goals in 134 games and two Serie A titles, making him the first player to win league titles in England, Spain, and Italy. He returned to Manchester United in August 2021 in an emotional homecoming, but the club had declined since his departure and his time there ended acrimoniously. His contract was terminated in November 2022 following a controversial interview.',
      'In January 2023, Ronaldo signed for Al Nassr in Saudi Arabia on a reported €200 million per year deal — the richest contract in the history of sport. Critics called it a retirement tour. Instead, he scored 50+ goals in his debut season and triggered a migration of global stars — Karim Benzema, Sadio Mané, N\'Golo Kanté, Neymar — to the Saudi Pro League. Where Ronaldo went, football followed.',
      'For Portugal, his record transcends all else. In 2021, he surpassed Iranian Ali Daei\'s long-standing record to become the all-time international top scorer. He has now scored over 130 international goals in more than 200 caps. In 2016, he captained Portugal to their first ever major tournament trophy — the UEFA European Championship. In 2022 in Qatar, he became the only player in history to score at five consecutive World Cups.',
    ],
  },
]

export default function Biography() {
  return (
    <section id="biography" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent2/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="accent-line mb-4" />
          <h2 className="section-heading">Biography</h2>
          <p className="section-subheading">
            From the streets of Madeira to the pinnacle of world football — the complete story of Cristiano Ronaldo dos Santos Aveiro.
          </p>
        </div>

        {/* Key info card */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-16 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Full Name', value: 'Cristiano Ronaldo dos Santos Aveiro' },
              { label: 'Date of Birth', value: 'February 5, 1985' },
              { label: 'Birthplace', value: 'Funchal, Madeira, Portugal' },
              { label: 'Father', value: 'José Dinis Aveiro (1954–2005)' },
              { label: 'Mother', value: 'Maria Dolores dos Santos' },
              { label: 'Height', value: '187 cm (6 ft 2 in)' },
              { label: 'Position', value: 'Forward / Winger' },
              { label: 'Shirt Number', value: '#7 throughout career' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">{item.label}</p>
                <p className="text-textPrimary font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Biography sections */}
        <div className="space-y-20">
          {biographySections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-start`}
            >
              {/* Visual side */}
              <div className={`w-full md:w-2/5 flex-shrink-0 reveal-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="relative">
                  {/* Main visual */}
                  <div className="aspect-square bg-surface2 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center relative">
                    {section.photo ? (
                      <>
                        <img
                          src={section.photo.url}
                          alt={section.photo.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: section.photoPosition === 'top' ? 'center top' : 'center center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <p className="text-white/50 text-xs leading-snug">{section.photo.caption}</p>
                          <p className="text-white/30 text-xs mt-0.5">© {section.photo.author} · {section.photo.license}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface2" />
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <span className="text-accent font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="relative z-10 text-center px-8">
                          {index === 0 && (
                            <div className="space-y-4">
                              <div className="text-6xl font-black text-accent/10 select-none">🇵🇹</div>
                              <div className="text-7xl font-black text-textPrimary/5 select-none leading-none">1985</div>
                              <div className="w-16 h-1 bg-gradient-to-r from-accent2 to-accent mx-auto rounded-full" />
                              <p className="text-muted text-sm">Funchal, Madeira</p>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="space-y-4">
                              <div className="text-6xl font-black text-accent/10 select-none">⚽</div>
                              <div className="text-5xl font-black text-textPrimary/5 select-none leading-none">2003</div>
                              <div className="w-16 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto rounded-full" />
                              <p className="text-muted text-sm">Sporting CP → Man Utd</p>
                            </div>
                          )}
                        </div>
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/20 rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/20 rounded-bl-2xl" />
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`flex-1 reveal-${index % 2 === 0 ? 'right' : 'left'}`}>
                <h3 className="text-2xl md:text-3xl font-black text-textPrimary mb-6 leading-tight">
                  {section.title}
                </h3>
                <div className="space-y-5">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-muted leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

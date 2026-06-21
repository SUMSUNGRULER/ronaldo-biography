import { timelineData } from '../data/timeline'

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="accent-line mb-4 mx-auto" />
          <h2 className="section-heading">Club Career Timeline</h2>
          <p className="section-subheading mx-auto">
            Six clubs. Four countries. One legendary number.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 md:space-y-0">
          {timelineData.map((entry, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={entry.id}
                className={`relative md:flex items-start gap-8 md:gap-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } mb-12 md:mb-16`}
              >
                {/* Card */}
                <div className={`w-full md:w-[45%] reveal-${isEven ? 'left' : 'right'}`}>
                  <div className="card-base hover:border-white/15 group transition-all duration-300">
                    {/* Club header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{entry.flag}</span>
                          <span className="text-xs text-muted uppercase tracking-widest font-medium">
                            {entry.league}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-textPrimary leading-tight">
                          {entry.club}
                        </h3>
                        <p className="text-sm text-muted mt-0.5">{entry.years}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${entry.color} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                        7
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: 'Goals', value: entry.goals },
                        { label: 'Apps', value: entry.apps },
                        { label: 'Period', value: entry.period.split(' ')[0] },
                      ].map((s) => (
                        <div key={s.label} className="bg-surface rounded-lg p-3 text-center">
                          <div className="text-lg font-black text-gold stat-counter">{s.value}</div>
                          <div className="text-xs text-muted mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {entry.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Trophies */}
                    {entry.trophies.length > 0 && (
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider font-medium mb-2">Trophies Won</p>
                        <div className="flex flex-wrap gap-2">
                          {entry.trophies.map((trophy) => (
                            <span
                              key={trophy}
                              className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-md font-medium border border-gold/15"
                            >
                              🏆 {trophy}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {entry.trophies.length === 0 && (
                      <div className="text-xs text-muted/60 italic">
                        {entry.id === 'sporting-cp' && 'First pro contract; springboard to global stardom'}
                        {entry.id === 'man-utd-return' && 'Contract ended Nov 2022; left as all-time top scorer'}
                        {entry.id === 'al-nassr' && 'Ongoing — records continue to be broken'}
                        {entry.id === 'portugal' && 'International career still active'}
                      </div>
                    )}
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex w-[10%] justify-center items-center flex-col gap-2 pt-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-black text-white text-sm z-10 shadow-lg shadow-accent/30 ring-4 ring-background">
                    {index + 1}
                  </div>
                  <div className="text-xs text-muted text-center font-medium leading-tight">
                    {entry.years.split('–')[0]}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { eventsData } from '../data/events'

export default function MajorEvents() {
  return (
    <section id="events" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-gold/4 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="accent-line mb-4" />
          <h2 className="section-heading">Defining Moments</h2>
          <p className="section-subheading">
            Eight chapters that wrote the legend of Cristiano Ronaldo.
          </p>
        </div>

        {/* Events grid */}
        <div className="space-y-6">
          {eventsData.map((event, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={event.id}
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} gap-6 reveal`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Year column */}
                <div className={`md:w-32 flex-shrink-0 flex ${isEven ? 'md:justify-end' : 'md:justify-start'} items-start`}>
                  <div className="flex md:flex-col items-center gap-3 md:gap-2">
                    <div className="text-4xl font-black text-accent/20 leading-none">{event.year}</div>
                    <div className="text-2xl">{event.icon}</div>
                  </div>
                </div>

                {/* Connector (desktop) */}
                <div className="hidden md:flex flex-col items-center gap-0 flex-shrink-0">
                  <div className={`w-px flex-1 bg-gradient-to-b ${index === 0 ? 'from-transparent' : 'from-white/10'} to-white/10`} />
                  <div className={`w-3 h-3 rounded-full border-2 ${event.accentColor.replace('border-', 'border-')} bg-background flex-shrink-0`} />
                  <div className={`w-px flex-1 bg-gradient-to-b from-white/10 ${index === eventsData.length - 1 ? 'to-transparent' : 'to-white/10'}`} />
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <div className={`card-base border-l-2 ${event.accentColor} hover:shadow-lg transition-all duration-300 group`}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-black text-textPrimary leading-tight group-hover:text-accent transition-colors duration-200">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted mt-1">{event.subtitle}</p>
                      </div>
                      <div className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg flex-shrink-0">
                        {event.year}
                      </div>
                    </div>

                    <p className="text-muted leading-relaxed text-sm mb-4">
                      {event.description}
                    </p>

                    <div className="border-t border-white/5 pt-4">
                      <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Impact</p>
                      <p className="text-sm text-textPrimary/70 italic leading-relaxed">
                        "{event.impact}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

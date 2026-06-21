import { honorsData } from '../data/honors'

export default function Honors() {
  return (
    <section id="honors" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="gold-accent-line mb-4" />
          <h2 className="section-heading">Honours &amp; Records</h2>
          <p className="section-subheading">
            A trophy cabinet that spans four decades, four countries, and every competition that matters.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {honorsData.map((category) => (
            <div key={category.id} className="reveal">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-black text-textPrimary">{category.category}</h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-sm text-muted">{category.honors.length} awards</span>
              </div>

              {/* Honors grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.honors.map((honor, index) => (
                  <div
                    key={honor.id}
                    className={`relative rounded-2xl p-5 border transition-all duration-300 hover:scale-105 reveal ${
                      honor.isGold
                        ? 'bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border-gold/25 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10'
                        : 'bg-surface2 border-white/5 hover:border-white/15'
                    }`}
                    style={{ transitionDelay: `${index * 0.04}s` }}
                  >
                    {/* Gold glow for special awards */}
                    {honor.isGold && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-full blur-xl pointer-events-none" />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className={`font-bold text-sm leading-tight ${honor.isGold ? 'text-gold' : 'text-textPrimary'}`}>
                          {honor.title}
                        </h4>
                        {honor.isGold && <span className="text-sm flex-shrink-0">🏆</span>}
                      </div>

                      {honor.year && (
                        <p className={`text-xs font-semibold mb-2 ${honor.isGold ? 'text-gold/70' : 'text-accent'}`}>
                          {honor.year}
                        </p>
                      )}

                      <p className="text-xs text-muted leading-relaxed">{honor.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

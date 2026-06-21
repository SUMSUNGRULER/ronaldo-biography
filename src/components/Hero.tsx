import { useEffect, useRef } from 'react'
import HeroImageMontage from './HeroImageMontage'

interface HeroStat {
  label: string
  value: string
}

const heroStats: HeroStat[] = [
  { label: 'Career Goals',  value: '900+'  },
  { label: 'UCL Goals',     value: '140+'  },
  { label: "Ballon d'Or",   value: '5×'    },
  { label: "Int'l Caps",    value: '200+'  },
]

export default function Hero() {
  const sevenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sevenRef.current) return
      const deltaX = (e.clientX / window.innerWidth  - 0.5) * 14
      const deltaY = (e.clientY / window.innerHeight - 0.5) * 10
      sevenRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* ─── MOBILE: montage as full-bleed background ─── */}
      <div className="absolute inset-0 lg:hidden">
        <HeroImageMontage />
        {/* stronger overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50 pointer-events-none" />
      </div>

      {/* ─── DESKTOP: montage on right 50% ─── */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block overflow-hidden">
        <HeroImageMontage />
        {/* left-to-right fade: blends image into text side */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-10" />
        {/* bottom fade into stats strip */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        {/* subtle top fade */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* ─── Background gradients / glow ─── */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent2/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/10 pointer-events-none glow-pulse hidden lg:block" style={{ filter: 'blur(80px)' }} />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none scan-line" />

      {/* ─── Large "7" watermark — left half only, behind text ─── */}
      <div
        ref={sevenRef}
        className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center pointer-events-none select-none hidden lg:flex"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      >
        <span
          className="font-black text-white animate-breathe"
          style={{
            fontSize: 'clamp(240px, 32vw, 520px)',
            opacity: 0.05,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            userSelect: 'none',
          }}
        >
          7
        </span>
      </div>

      {/* Floating "7" particles */}
      <div className="absolute pointer-events-none select-none hidden lg:block" aria-hidden="true" style={{ top: '15%', left: '8%' }}>
        <span className="font-black text-white particle-1" style={{ fontSize: '3rem', opacity: 0.06 }}>7</span>
      </div>
      <div className="absolute pointer-events-none select-none hidden lg:block" aria-hidden="true" style={{ top: '70%', left: '6%' }}>
        <span className="font-black text-accent particle-2" style={{ fontSize: '1.8rem', opacity: 0.08 }}>7</span>
      </div>
      <div className="absolute pointer-events-none select-none hidden lg:block" aria-hidden="true" style={{ top: '40%', left: '42%' }}>
        <span className="font-black text-gold particle-3" style={{ fontSize: '1.4rem', opacity: 0.05 }}>7</span>
      </div>
      <div className="absolute pointer-events-none select-none hidden lg:block" aria-hidden="true" style={{ top: '85%', left: '22%' }}>
        <span className="font-black text-accent2 particle-4" style={{ fontSize: '1.2rem', opacity: 0.06 }}>7</span>
      </div>

      {/* ─── Main content ─── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Portugal flag accent */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded-sm bg-accent2" />
              <div className="w-4 h-4 rounded-sm bg-accent"  />
            </div>
            <span className="text-muted text-sm font-medium uppercase tracking-widest">
              Funchal, Madeira, Portugal · Born February 5, 1985
            </span>
          </div>

          {/* Name */}
          <div className="mb-4 reveal" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-black tracking-tight leading-none text-textPrimary" style={{ fontSize: 'clamp(42px, 8vw, 108px)' }}>
              CRISTIANO
            </h1>
            <div className="flex items-end gap-4">
              <h1 className="font-black tracking-tight leading-none" style={{ fontSize: 'clamp(42px, 8vw, 108px)', color: '#dc2626' }}>
                RONALDO
              </h1>
              <div className="mb-2 md:mb-4 flex items-center gap-2">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center font-black text-white text-xl md:text-2xl">
                  7
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted font-light max-w-lg mb-12 reveal" style={{ transitionDelay: '0.2s' }}>
            The greatest footballer of his generation. Five Ballon d'Or awards. 900+ career goals. One relentless pursuit of greatness.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 reveal" style={{ transitionDelay: '0.3s' }}>
            <button
              onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Read the Story
            </button>
            <button
              onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/10 hover:border-white/20 text-textPrimary font-semibold rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              View Stats
            </button>
          </div>
        </div>
      </div>

      {/* ─── Stats strip ─── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-surface/80 backdrop-blur-md border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
              {heroStats.map((stat, i) => (
                <div key={stat.label} className="py-5 px-6 reveal" style={{ transitionDelay: `${0.4 + i * 0.1}s` }}>
                  <div className="text-2xl md:text-3xl font-black text-gold stat-counter">{stat.value}</div>
                  <div className="text-xs text-muted font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

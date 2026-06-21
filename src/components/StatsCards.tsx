import { useEffect, useRef, useState } from 'react'
import { statsData, keyFacts } from '../data/stats'

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!shouldStart) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration, shouldStart])

  return count
}

interface StatCardProps {
  label: string
  value: number
  suffix: string
  description: string
  color: string
  index: number
  shouldAnimate: boolean
}

function StatCard({ label, value, suffix, description, color, index, shouldAnimate }: StatCardProps) {
  const count = useCountUp(value, 1800 + index * 100, shouldAnimate)

  return (
    <div className="card-base group hover:scale-105 hover:shadow-xl transition-all duration-300 reveal" style={{ transitionDelay: `${index * 0.06}s` }}>
      <div className={`text-4xl md:text-5xl font-black stat-counter mb-2 ${color}`}>
        {shouldAnimate ? count : 0}{suffix}
      </div>
      <div className="text-textPrimary font-semibold text-sm mb-2">{label}</div>
      <div className="text-muted text-xs leading-relaxed">{description}</div>
      <div className={`mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full ${
        color.includes('gold') ? 'bg-gold' : color.includes('accent2') ? 'bg-accent2' : color.includes('accent') ? 'bg-accent' : 'bg-muted'
      }`} />
    </div>
  )
}

export default function StatsCards() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-gold/3 pointer-events-none" />

      {/* Giant number decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.015] select-none pointer-events-none leading-none">
        CR7
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="gold-accent-line mb-4" />
          <h2 className="section-heading">By the Numbers</h2>
          <p className="section-subheading">
            A career defined by records. Statistics that may never be matched.
          </p>
        </div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-16">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
              color={stat.color}
              index={index}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>

        {/* Key facts */}
        <div className="reveal">
          <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-accent rounded-full" />
            Quick Facts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyFacts.map((fact) => (
              <div key={fact.id} className="glass rounded-xl p-4">
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">{fact.label}</p>
                <p className="text-textPrimary font-semibold text-sm">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

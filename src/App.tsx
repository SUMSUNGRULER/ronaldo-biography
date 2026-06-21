import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Timeline from './components/Timeline'
import MajorEvents from './components/MajorEvents'
import Honors from './components/Honors'
import StatsCards from './components/StatsCards'
import Legacy from './components/Legacy'
import Sources from './components/Sources'

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    reveals.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-textPrimary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <StatsCards />
        <Timeline />
        <MajorEvents />
        <Honors />
        <Legacy />
        <Sources />
      </main>
      <footer className="bg-surface border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-black text-white text-lg">
                7
              </div>
              <div>
                <p className="font-bold text-textPrimary">CR7 Biography</p>
                <p className="text-sm text-muted">The Complete Story of Cristiano Ronaldo</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted">
                All statistics and records accurate as of 2024. Data sourced from UEFA, FIFA, and official club records.
              </p>
              <p className="text-sm text-muted mt-1">
                No copyrighted images used. All visuals are original CSS designs.
              </p>
            </div>
            <div className="text-right">
              <p className="text-textPrimary font-semibold">Made by Wei Wu</p>
              <p className="text-sm text-muted">NYU Mathematics &amp; Economics</p>
              <p className="text-xs text-muted mt-1">© 2024 Portfolio Project</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <div className="flex items-center justify-center gap-2 text-muted text-sm">
              <span>Built with</span>
              <span className="text-accent font-semibold">React</span>
              <span>+</span>
              <span className="text-accent font-semibold">TypeScript</span>
              <span>+</span>
              <span className="text-accent font-semibold">Vite</span>
              <span>+</span>
              <span className="text-accent font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

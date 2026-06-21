import { useEffect, useState } from 'react'
import { heroGallery } from '../data/gallery'

const SLIDE_DURATION = 5500  // ms each image is shown
const FADE_DURATION  = 1200  // ms for opacity crossfade (must match CSS transition)

export default function HeroImageMontage() {
  const [activeIndex, setActiveIndex] = useState(0)
  // Per-slide animation keys — incrementing a slide's key forces React to remount
  // its <img>, which restarts the Ken Burns CSS animation from frame 0.
  const [animKeys, setAnimKeys] = useState<number[]>(heroGallery.map((_, i) => i))

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % heroGallery.length
        setAnimKeys(keys => {
          const updated = [...keys]
          updated[next] = updated[next] + heroGallery.length  // force remount of next img
          return updated
        })
        return next
      })
    }, SLIDE_DURATION)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {heroGallery.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === activeIndex ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            zIndex: i === activeIndex ? 2 : 1,
          }}
        >
          {/* key change on img restarts the Ken Burns animation */}
          <img
            key={animKeys[i]}
            src={img.imageUrl}
            alt={img.alt}
            className={`w-full h-full object-cover ${img.kenBurns}`}
            style={{ objectPosition: img.objectPosition }}
            loading="lazy"
          />
        </div>
      ))}

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroGallery.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimKeys(keys => {
                const updated = [...keys]
                updated[i] = updated[i] + heroGallery.length
                return updated
              })
              setActiveIndex(i)
            }}
            className="transition-all duration-300 rounded-full bg-white"
            style={{
              width:   i === activeIndex ? '20px' : '6px',
              height:  '6px',
              opacity: i === activeIndex ? 0.8 : 0.3,
            }}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Photo credit */}
      <div className="absolute bottom-3 right-3 z-10 text-right">
        <p className="text-white/30 text-[10px] leading-tight">
          © {heroGallery[activeIndex].author}
        </p>
        <p className="text-white/20 text-[10px]">
          {heroGallery[activeIndex].license}
        </p>
      </div>
    </div>
  )
}

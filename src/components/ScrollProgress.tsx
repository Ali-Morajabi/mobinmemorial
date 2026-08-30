'use client'

import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const sections = [
  { label: 'آغاز', id: 'hero' },
  { label: 'دوستان', id: 'friends' },
  { label: 'خاطرات', id: 'timeline' },
  { label: 'گالری', id: 'gallery' },
  { label: 'پیام‌ها', id: 'messages' },
  { label: 'شعر', id: 'poetry' },
  { label: 'خداحافظی', id: 'farewell' },
]

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDotClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-turquoise-400 to-gold-400 origin-left z-50"
      />

      {/* Side dot indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleDotClick(e, section.id)}
                className="group relative block"
                whileHover={{ scale: 1.3 }}
              >
                {/* Dot */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.4 : 1,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'bg-gold-400 shadow-lg shadow-gold-400/50'
                      : 'bg-gold-400/40 group-hover:bg-gold-400/70'
                  }`}
                />

                {/* Active ring */}
                {isActive && (
                  <motion.div
                    layoutId="activeRing"
                    className="absolute -inset-1.5 rounded-full border border-gold-400/40"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Tooltip */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="glass-card rounded-lg px-3 py-1.5 whitespace-nowrap">
                    <span className="text-beige-200/80 text-xs font-persian">{section.label}</span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </>
  )
}

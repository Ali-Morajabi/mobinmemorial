'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxDivider({ variant = 'default' }: { variant?: 'default' | 'poetic' | 'geometric' }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const patterns = {
    default: (
      <svg width="100%" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0 50H1200" stroke="#d4a520" strokeWidth="0.5" opacity="0.3" />
        <circle cx="600" cy="50" r="20" fill="none" stroke="#d4a520" strokeWidth="0.3" opacity="0.4" />
        <circle cx="600" cy="50" r="10" fill="none" stroke="#00c8a8" strokeWidth="0.3" opacity="0.3" />
        <path d="M580 50L600 30L620 50L600 70Z" fill="none" stroke="#d4a520" strokeWidth="0.3" opacity="0.3" />
      </svg>
    ),
    poetic: (
      <svg width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0 60H500" stroke="#d4a520" strokeWidth="0.3" opacity="0.3" />
        <path d="M700 60H1200" stroke="#d4a520" strokeWidth="0.3" opacity="0.3" />
        <text x="600" y="70" textAnchor="middle" fontSize="24" fill="#d4a520" opacity="0.15" fontFamily="serif">
          ❋
        </text>
        <circle cx="600" cy="60" r="30" fill="none" stroke="#00c8a8" strokeWidth="0.2" opacity="0.2" />
        <circle cx="600" cy="60" r="15" fill="none" stroke="#d4a520" strokeWidth="0.2" opacity="0.2" />
      </svg>
    ),
    geometric: (
      <svg width="100%" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`translate(${i * 100 + 50}, 50)`}>
            <path d="M-20 0L0 -20L20 0L0 20Z" fill="none" stroke="#d4a520" strokeWidth="0.3" opacity="0.2" />
            <circle r="5" fill="none" stroke="#00c8a8" strokeWidth="0.2" opacity="0.15" />
          </g>
        ))}
      </svg>
    ),
  }

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      <motion.div style={{ y, opacity }} className="w-full">
        {patterns[variant]}
      </motion.div>
    </div>
  )
}

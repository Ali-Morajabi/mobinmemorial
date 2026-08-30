'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function IntroTransition() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/20 to-navy-950" />

      {/* Decorative Persian arch element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 200 200" className="w-[600px] h-[600px]">
          <path d="M100 10 Q150 50 150 100 Q150 150 100 190 Q50 150 50 100 Q50 50 100 10Z" fill="none" stroke="#d4a520" strokeWidth="0.5" />
          <path d="M100 30 Q130 60 130 100 Q130 140 100 170 Q70 140 70 100 Q70 60 100 30Z" fill="none" stroke="#00c8a8" strokeWidth="0.3" />
          <path d="M100 50 Q115 70 115 100 Q115 130 100 150 Q85 130 85 100 Q85 70 100 50Z" fill="none" stroke="#d4a520" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <svg width="200" height="40" viewBox="0 0 200 40" className="mx-auto">
            <path d="M0 20H80" stroke="#d4a520" strokeWidth="0.5" opacity="0.5" />
            <path d="M120 20H200" stroke="#d4a520" strokeWidth="0.5" opacity="0.5" />
            <circle cx="100" cy="20" r="8" fill="none" stroke="#d4a520" strokeWidth="0.5" opacity="0.5" />
            <circle cx="100" cy="20" r="3" fill="#d4a520" opacity="0.5" />
            <path d="M90 20L100 10L110 20L100 30Z" fill="none" stroke="#00c8a8" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <blockquote className="mb-8">
            <p className="text-3xl md:text-4xl lg:text-5xl text-beige-200/80 font-display leading-relaxed mb-6">
              رفاقت مثل یک مُسند است:
              <br />
              <span className="text-gradient-gold">نمی‌شود آن را فقط خواند،</span>
              <br />
              <span className="text-beige-200/60">باید زیست.</span>
            </p>
          </blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="text-gold-400/50 text-sm italic font-display">
              Friendship is not a story to be read, but a life to be lived.
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
          </motion.div>
        </motion.div>

        {/* Decorative stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" className="text-gold-400">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

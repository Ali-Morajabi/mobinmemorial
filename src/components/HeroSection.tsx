'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background layers with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        
        {/* Atmospheric glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-turquoise-500/8 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[120px]" />
      </motion.div>

      {/* Persian geometric pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="persianPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0L100 50L50 100L0 50L50 0z" fill="none" stroke="#d4a520" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#d4a520" strokeWidth="0.3" />
              <path d="M50 25L75 50L50 75L25 50L50 25z" fill="none" stroke="#00c8a8" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="12" fill="none" stroke="#00c8a8" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#persianPattern)" />
        </svg>
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-200/80 text-sm font-light tracking-widest uppercase">
              دانشگاه تهران | University of Tehran
            </span>
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient-gold">یادگاری‌های</span>
          <br />
          <span className="text-beige-100">ماندگار</span>
        </motion.h1>

        {/* English subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="font-display text-2xl md:text-3xl text-beige-300/70 italic mb-8"
        >
          Memories That Stay Forever
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/50" />
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold-400">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" opacity="0.8" />
          </svg>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/50" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-lg md:text-xl text-beige-200/60 max-w-2xl mx-auto leading-relaxed font-light"
        >
          روزهایی که با هم گذراندیم، خاطراتی هستند که هرگز از دل نمی‌روند.
          <br />
          <span className="text-beige-300/40 text-base mt-2 block">
            The days we spent together are memories that never fade from the heart.
          </span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-beige-300/40 text-xs tracking-widest uppercase">
              سفر را شروع کنید
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-gold-400/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-gold-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent z-20" />
    </section>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.5 + 0.2,
  }))

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

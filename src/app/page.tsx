'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import HeroSection from '@/components/HeroSection'
import FriendsSection from '@/components/FriendsSection'
import IntroTransition from '@/components/IntroTransition'
import TimelineSection from '@/components/TimelineSection'
import MemoryGallery from '@/components/MemoryGallery'
import MemoryCards from '@/components/MemoryCards'
import PoetrySection from '@/components/PoetrySection'
import FarewellSection from '@/components/FarewellSection'
import ParticleField from '@/components/ParticleField'
import ScrollProgress from '@/components/ScrollProgress'
import ParallaxDivider from '@/components/ParallaxDivider'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative bg-navy-950 min-h-screen overflow-x-hidden">
      {/* Loading screen */}
      <LoadingScreen isLoaded={isLoaded} />

      {/* Fixed background image that fades on scroll */}
      <motion.div
        style={{ opacity: backgroundOpacity, scale: backgroundScale }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/friends/images.webp')" }}
        />
        {/* Navy tint overlay - subtle so the image shows through */}
        <div className="absolute inset-0 bg-navy-950/40" />
        {/* Gradient fade at the bottom to blend into the page */}
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
      </motion.div>

      {/* Fixed particle background */}
      <ParticleField />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        <ParallaxDivider variant="poetic" />

        {/* Friends Section */}
        <div id="friends">
          <FriendsSection />
        </div>

        <ParallaxDivider variant="geometric" />

        {/* Intro Quote */}
        <IntroTransition />

        <ParallaxDivider variant="geometric" />

        {/* Timeline of Memories */}
        <div id="timeline">
          <TimelineSection />
        </div>

        <ParallaxDivider variant="default" />

        {/* Memory Gallery */}
        <div id="gallery">
          <MemoryGallery />
        </div>

        <ParallaxDivider variant="poetic" />

        {/* Audio & Written Messages */}
        <div id="messages">
          <MemoryCards />
        </div>

        <ParallaxDivider variant="geometric" />

        {/* Poetry & Wisdom */}
        {/* <div id="poetry">
          <PoetrySection />
        </div> */}

        <ParallaxDivider variant="default" />

        {/* Farewell Section */}
        <div id="farewell">
          <FarewellSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

function LoadingScreen({ isLoaded }: { isLoaded: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed inset-0 z-[100] bg-navy-950 flex items-center justify-center pointer-events-none ${
        isLoaded ? 'pointer-events-none' : ''
      }`}
    >
      <div className="text-center">
        {/* Animated Persian pattern */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 mx-auto mb-6"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#d4a520" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#d4a520" strokeWidth="0.3" opacity="0.3" />
            <path d="M50 5L95 50L50 95L5 50Z" fill="none" stroke="#00c8a8" strokeWidth="0.3" opacity="0.4" />
            <path d="M50 15L85 50L50 85L15 50Z" fill="none" stroke="#d4a520" strokeWidth="0.2" opacity="0.3" />
            <circle cx="50" cy="50" r="8" fill="#d4a520" opacity="0.3" />
          </svg>
        </motion.div>

        <motion.p
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gold-400/60 text-sm font-persian tracking-widest"
        >
          در حال بارگذاری خاطرات...
        </motion.p>
      </div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="relative py-16 bg-navy-950 border-t border-gold-400/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-display text-2xl text-gradient-gold mb-2">
            یادگاری‌های ماندگار
          </h3>
          <p className="text-beige-300/40 text-sm font-display italic">
            Memories That Stay Forever
          </p>
        </motion.div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/30" />
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-gold-400/40">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-beige-300/30 text-sm font-persian mb-2">
            ساخته شده توسط علی با عشق
          </p>
          <p className="text-beige-300/20 text-xs italic">
            Made with love for a dear friend
          </p>
        </motion.div>

        {/* University mention */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-beige-300/20 text-xs">
            دانشگاه تهران | University of Tehran
          </p>
          <p className="text-gold-400/20 text-xs mt-1">
            1400 - 1405 | 2021 - 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

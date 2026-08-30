'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface MemoryPhoto {
  id: number
  src: string
  alt: string
  caption: string
  rotation: number
  scale: number
  zIndex: number
}

const memoryPhotos: MemoryPhoto[] = [
  { id: 1, src: '/api/placeholder/600/400', alt: 'University gates', caption: 'اولین روز دانشگاه', rotation: -3, scale: 1, zIndex: 1 },
  { id: 2, src: '/api/placeholder/500/350', alt: 'Library study', caption: 'شب‌های کتابخانه', rotation: 2, scale: 0.95, zIndex: 2 },
  { id: 3, src: '/api/placeholder/450/300', alt: 'Campus walk', caption: 'راه رفتن در محوطه', rotation: -1, scale: 1.05, zIndex: 3 },
  { id: 4, src: '/api/placeholder/550/400', alt: 'Group lunch', caption: 'ناهار گروهی', rotation: 4, scale: 0.9, zIndex: 1 },
  { id: 5, src: '/api/placeholder/500/350', alt: 'Celebration', caption: 'جشن پایان ترم', rotation: -2, scale: 1, zIndex: 2 },
  { id: 6, src: '/api/placeholder/480/320', alt: 'Mountain trip', caption: 'سفر به دربند', rotation: 1, scale: 0.95, zIndex: 3 },
  { id: 7, src: '/api/placeholder/520/380', alt: 'Rooftop view', caption: 'پشت‌بام تهران', rotation: -4, scale: 1.02, zIndex: 1 },
  { id: 8, src: '/api/placeholder/460/300', alt: 'Study group', caption: 'گروه درسی', rotation: 3, scale: 0.98, zIndex: 2 },
]

export default function MemoryGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      
      {/* Decorative Persian pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="galleryPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 0L120 60L60 120L0 60Z" fill="none" stroke="#d4a520" strokeWidth="0.3" />
              <circle cx="60" cy="60" r="30" fill="none" stroke="#d4a520" strokeWidth="0.2" />
              <path d="M60 30L90 60L60 90L30 60Z" fill="none" stroke="#00c8a8" strokeWidth="0.2" />
              <path d="M0 60L30 60M90 60L120 60M60 0L60 30M60 90L60 120" stroke="#d4a520" strokeWidth="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#galleryPattern)" />
        </svg>
      </div>

      {/* Section header */}
      <div className="relative z-10 text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-turquoise-400/60 text-sm tracking-[0.3em] uppercase block mb-4">
            گالری خاطرات
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-turquoise mb-4">
            لحظه‌های ماندگار
          </h2>
          <p className="text-beige-300/50 text-lg font-display italic">
            Frozen Moments, Eternal Memories
          </p>
        </motion.div>
      </div>

      {/* Floating photos gallery */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="relative min-h-[600px] md:min-h-[800px]">
          {memoryPhotos.map((photo, index) => (
            <FloatingPhoto key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-turquoise-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-[60px]" />
    </section>
  )
}

function FloatingPhoto({ photo, index }: { photo: MemoryPhoto; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Position photos in a scattered layout
  const positions = [
    { top: '0%', left: '5%' },
    { top: '5%', left: '55%' },
    { top: '20%', left: '15%' },
    { top: '25%', left: '60%' },
    { top: '40%', left: '0%' },
    { top: '45%', left: '40%' },
    { top: '60%', left: '10%' },
    { top: '65%', left: '55%' },
  ]

  const position = positions[index] || { top: '50%', left: '50%' }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: photo.scale, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      className="absolute w-48 md:w-64 lg:w-72"
      style={{
        top: position.top,
        left: position.left,
        transform: `rotate(${photo.rotation}deg)`,
        zIndex: photo.zIndex,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
        transition={{ duration: 0.4 }}
        className="group cursor-pointer"
      >
        {/* Photo frame */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/40 bg-navy-900/80 border border-gold-400/10 group-hover:border-gold-400/30 transition-all duration-500">
          {/* Image placeholder */}
          <div className="aspect-[4/3] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800/90 to-navy-900 flex items-center justify-center">
              <div className="text-center p-4">
                <svg className="w-12 h-12 mx-auto text-gold-400/20 mb-3 group-hover:text-gold-400/40 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-beige-300/30 text-xs group-hover:text-beige-300/50 transition-colors duration-300">
                  {photo.alt}
                </span>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-beige-100 text-sm font-persian transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="p-3 bg-navy-900/90">
            <p className="text-beige-200/60 text-xs font-persian text-center group-hover:text-beige-200/80 transition-colors duration-300">
              {photo.caption}
            </p>
          </div>
        </div>

        {/* Polaroid shadow effect */}
        <div className="absolute -inset-2 bg-black/20 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  )
}

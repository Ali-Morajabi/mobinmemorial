'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const persianPoems = [
  {
    text: 'مایه حُسن و جمالت دیده بدهیم',
    translation: 'Let us offer the essence of your beauty and grace',
    author: 'حافظ',
  },
  {
    text: 'هر که آزاد شد از دنیا و دین مرد است',
    translation: 'Whoever is freed from world and faith is a true person',
    author: 'مولانا',
  },
  {
    text: 'سفر کن تا بینی جمال خود را',
    translation: 'Travel, so you may see your own beauty',
    author: 'پیام خدا',
  },
]

const wishes = [
  {
    id: 1,
    author: 'دانشگاه تهران',
    message: 'افتخار می‌کنیم که بخشی از مسیر تو بودیم. موفق باشی در راه جدیدت.',
    role: 'مهد آموزش',
  },
  {
    id: 2,
    author: 'همکلاسی‌ها',
    message: 'کلاس‌ها بدون تو خلوت‌تر می‌شوند. اما یادت باشه همینجا منتظریم.',
    role: 'همراهان تحصیل',
  },
  {
    id: 3,
    author: 'دوستان خوابگاه',
    message: 'شب‌های بیداری و شیرینی‌های پایان هفته یادگاری می‌مونن.',
    role: 'هم‌نشینان',
  },
  {
    id: 4,
    author: 'اعضای انجمن علمی',
    message: 'پروژه‌ها که کامل بشه، جای تو توی تیم خالیمونه.',
    role: 'همکاران',
  },
]

export default function PoetrySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      
      {/* Large decorative calligraphy silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" className="w-[800px] h-[800px]">
          <text x="100" y="120" textAnchor="middle" fontSize="80" fill="#d4a520" fontFamily="serif">
            شعر
          </text>
        </svg>
      </div>

      {/* Section header */}
      <div className="relative z-10 text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-400/60 text-sm tracking-[0.3em] uppercase block mb-4">
            حکمت و شعر
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-4">
            کلام‌های روشن
          </h2>
          <p className="text-beige-300/50 text-lg font-display italic">
            Words of Wisdom
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Persian poems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {persianPoems.map((poem, index) => (
            <PoemCard key={index} poem={poem} index={index} />
          ))}
        </div>

        {/* Wishes from groups */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl text-beige-200/80 font-display text-center mb-12">
            آروهای دوستان
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <WishCard key={wish.id} wish={wish} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PoemCard({ poem, index }: { poem: typeof persianPoems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden glass-card p-8 text-center hover:border-gold-400/30 transition-all duration-500">
        {/* Decorative top ornament */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        
        {/* Persian text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="text-2xl md:text-3xl text-gold-300/80 font-persian leading-relaxed mb-4"
        >
          {poem.text}
        </motion.p>

        {/* Translation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-beige-300/50 text-sm italic mb-4"
        >
          {poem.translation}
        </motion.p>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="inline-flex items-center gap-2"
        >
          <div className="w-8 h-px bg-gold-400/30" />
          <span className="text-gold-400/70 text-sm font-persian">{poem.author}</span>
          <div className="w-8 h-px bg-gold-400/30" />
        </motion.div>

        {/* Decorative bottom ornament */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </div>
    </motion.div>
  )
}

function WishCard({ wish, index }: { wish: typeof wishes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 border border-white/5 hover:border-gold-400/20 transition-all duration-500">
        {/* Author badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400/20 to-turquoise-400/20 flex items-center justify-center">
            <span className="text-gold-400 text-sm font-bold">
              {wish.author.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-beige-100 text-sm font-medium">{wish.author}</h4>
            <p className="text-beige-300/40 text-xs">{wish.role}</p>
          </div>
        </div>

        {/* Message */}
        <p className="text-beige-200/70 font-persian text-sm leading-relaxed">
          {wish.message}
        </p>

        {/* Decorative corner */}
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-gold-400/10 rounded-bl-lg" />
      </div>
    </motion.div>
  )
}

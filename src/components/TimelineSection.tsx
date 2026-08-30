'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface TimelineChapter {
  id: number
  titleFa: string
  titleEn: string
  year: string
  description: string
  quote?: { text: string; author?: string }
  color: 'gold' | 'turquoise' | 'navy'
  images: { src: string; alt: string; rotation: number }[]
}

const chapters: TimelineChapter[] = [
  {
    id: 1,
    titleFa: 'روزهای اول',
    titleEn: 'First Days',
    year: '۱۳۹۸ - ۲۰۱۹',
    description: 'اولین روزهای ورودی جدید؛ چهره‌های ناآشنا، دانشگاه بزرگ، و حسی تازه که هنوز نمی‌دانستیم قرار است چه اتفاقی بیفتد.',
    quote: {
      text: 'هر آغاز، نیمای از یک داستان است که هنوز نوشته نشده.',
    },
    color: 'navy',
    images: [
      { src: '/api/placeholder/400/300', alt: 'University entrance', rotation: -3 },
      { src: '/api/placeholder/400/300', alt: 'Campus view', rotation: 2 },
      { src: '/api/placeholder/400/300', alt: 'First day excitement', rotation: -1 },
    ],
  },
  {
    id: 2,
    titleFa: 'آشنایی',
    titleEn: 'Becoming Friends',
    year: '۱۳۹۸ - ۲۰۱۹',
    description: 'از همکلاسی‌های ساده تا دوستانی که بدون آن‌ها هیچ خاطره‌ای کامل نبود. همان لحظه‌ای که فهمیدیم این رفاقت قرار است ماندگار باشد.',
    quote: {
      text: 'دوستی مثل یک درخت است؛ باید آن را آب داد تا رشد کند.',
      author: 'مثل فارسی',
    },
    color: 'turquoise',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Study group', rotation: 2 },
      { src: '/api/placeholder/400/300', alt: 'Library moments', rotation: -2 },
      { src: '/api/placeholder/400/300', alt: 'Coffee breaks', rotation: 1 },
    ],
  },
  {
    id: 3,
    titleFa: 'زندگی دانشجویی',
    titleEn: 'Campus Life',
    year: '۱۳۹۹ - ۲۰۲۰',
    description: 'کلاس‌ها، کافه‌های اطراف دانشگاه، ناهارهای گروهی، و شب‌های درس خواندن. روزهایی که ساده به نظر می‌رسید اما حالا قیمتی‌ترین خاطرات ماست.',
    color: 'gold',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Campus cafeteria', rotation: -2 },
      { src: '/api/placeholder/400/300', alt: 'Study sessions', rotation: 3 },
      { src: '/api/placeholder/400/300', alt: 'Evening walks', rotation: -1 },
    ],
  },
  {
    id: 4,
    titleFa: 'سفرها و ماجراجویی‌ها',
    titleEn: 'Trips & Adventures',
    year: '۱۴۰۰ - ۲۰۲۱',
    description: 'سفرهایی که با هم کردیم؛ از کوه‌های البرز تا کوچه‌های اصفهان. هر سفر یک فصل از کتاب خاطرات ماست.',
    quote: {
      text: 'سفر، تنها فاصله نیست؛ کشف است.',
    },
    color: 'turquoise',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Mountain trip', rotation: 1 },
      { src: '/api/placeholder/400/300', alt: 'City exploration', rotation: -3 },
      { src: '/api/placeholder/400/300', alt: 'Group photo', rotation: 2 },
    ],
  },
  {
    id: 5,
    titleFa: 'خنده‌ها و شوخی‌ها',
    titleEn: 'Laughter & Inside Jokes',
    year: '۱۴۰۰ - ۲۰۲۲',
    description: 'آن شوخی‌هایی که فقط ما می‌فهمیدم، خنده‌هایی که در سکوت کلاس می‌گرفتیم، و لحظه‌هایی که فقط بین ما معنا داشت.',
    color: 'gold',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Funny moments', rotation: -1 },
      { src: '/api/placeholder/400/300', alt: 'Inside jokes', rotation: 2 },
      { src: '/api/placeholder/400/300', alt: 'Laughing together', rotation: -2 },
    ],
  },
  {
    id: 6,
    titleFa: 'چالش‌ها',
    titleEn: 'Overcoming Challenges',
    year: '۱۴۰۱ - ۲۰۲۳',
    description: 'سخت‌ترین روزها؛ امتحان‌های سخت، پروژه‌های چالش‌برانگیز، و روزهایی که خسته بودیم اما کنار هم ایستادیم.',
    quote: {
      text: 'الماس بدون فشار نمی‌نشیند.',
      author: 'ضرب‌المثل',
    },
    color: 'navy',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Late night study', rotation: 2 },
      { src: '/api/placeholder/400/300', alt: 'Project work', rotation: -3 },
      { src: '/api/placeholder/400/300', alt: 'Supporting each other', rotation: 1 },
    ],
  },
  {
    id: 7,
    titleFa: 'خداحافظی و آرزو',
    titleEn: 'Farewell & Wishes',
    year: '۱۴۰۳ - ۲۰۲۴',
    description: 'وقتی یکی از ما راهی سفری جدید می‌شود. دلتنگی و شادی در هم تنیده: دلتنگی برای خاطرات، شادی برای آینده‌ای که منتظر اوست.',
    quote: {
      text: 'خداحافظی معنای فراموشی نیست؛ معنای آن است که همیشه در قلب می‌مانی.',
    },
    color: 'gold',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Final gathering', rotation: -2 },
      { src: '/api/placeholder/400/300', alt: 'Goodbye hugs', rotation: 3 },
      { src: '/api/placeholder/400/300', alt: 'Looking forward', rotation: -1 },
    ],
  },
]

export default function TimelineSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      
      {/* Section header */}
      <div className="relative z-10 text-center mb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-400/60 text-sm tracking-[0.3em] uppercase block mb-4">
            سفر خاطرات
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-4">
            فصل‌های دوستی
          </h2>
          <p className="text-beige-300/50 text-lg font-display italic">
            Chapters of Friendship
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative z-10">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block" />
        
        {/* Mobile line */}
        <div className="absolute left-8 top-0 bottom-0 w-px timeline-line md:hidden" />

        {chapters.map((chapter, index) => (
          <TimelineCard key={chapter.id} chapter={chapter} index={index} />
        ))}
      </div>
    </section>
  )
}

function TimelineCard({ chapter, index }: { chapter: TimelineChapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isEven = index % 2 === 0

  const colorClasses = {
    gold: 'from-gold-500/20 to-gold-600/5 border-gold-500/20',
    turquoise: 'from-turquoise-500/20 to-turquoise-600/5 border-turquoise-500/20',
    navy: 'from-navy-500/20 to-navy-600/5 border-navy-400/20',
  }

  const accentColors = {
    gold: 'text-gold-400',
    turquoise: 'text-turquoise-400',
    navy: 'text-navy-300',
  }

  return (
    <div
      ref={ref}
      className={`relative mb-24 md:mb-32 px-6 md:px-0 ${
        isEven ? 'md:pr-[55%]' : 'md:pl-[55%]'
      }`}
    >
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`absolute top-8 w-4 h-4 rounded-full bg-gold-400 shadow-lg shadow-gold-400/50 z-10 hidden md:block ${
          isEven ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
        }`}
      />
      
      {/* Mobile node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-8 left-8 w-3 h-3 rounded-full bg-gold-400 shadow-lg shadow-gold-400/50 z-10 md:hidden -translate-x-1/2"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className={`relative rounded-2xl overflow-hidden border bg-gradient-to-br ${colorClasses[chapter.color]} backdrop-blur-sm`}
      >
        {/* Ornamental corner */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <path d="M80 0L80 80L0 80Z" fill="currentColor" className={accentColors[chapter.color]} />
            <path d="M60 0L60 60L0 60Z" fill="currentColor" className={accentColors[chapter.color]} opacity="0.5" />
          </svg>
        </div>

        <div className="p-6 md:p-8">
          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-persian mb-4 ${accentColors[chapter.color]} bg-white/5`}
          >
            {chapter.year}
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="font-display text-2xl md:text-3xl text-beige-100 mb-2"
          >
            {chapter.titleFa}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            className={`text-sm ${accentColors[chapter.color]} font-display italic mb-4`}
          >
            {chapter.titleEn}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-beige-200/70 leading-relaxed font-persan text-sm md:text-base mb-6"
          >
            {chapter.description}
          </motion.p>

          {/* Quote */}
          {chapter.quote && (
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="border-r-2 border-gold-400/30 pr-4 mb-6"
            >
              <p className="text-beige-300/60 italic text-sm font-persian">
                «{chapter.quote.text}»
              </p>
              {chapter.quote.author && (
                <cite className="text-gold-400/50 text-xs mt-1 block not-italic">
                  — {chapter.quote.author}
                </cite>
              )}
            </motion.blockquote>
          )}

          {/* Photo placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-3 gap-2 md:gap-3"
          >
            {chapter.images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                style={{ transform: `rotate(${img.rotation}deg)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/80 to-navy-900/90 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto text-gold-400/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-beige-300/30 text-xs">{img.alt}</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-gold-400/10 rounded-lg group-hover:border-gold-400/30 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

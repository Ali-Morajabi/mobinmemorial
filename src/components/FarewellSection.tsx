'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FriendMessage {
  id: number
  name: string
  message: string
  emoji: string
}

const friendMessages: FriendMessage[] = [
  { id: 1, name: 'آقا ترابی (کتاب نخون ترین)', message: 'رفیق عزیز، هر جای دنیا باشی خوشبخت باشی. می‌ترسم یادت بره ولی می‌دونم نمی‌ره.', emoji: '🌸' },
  { id: 2, name: 'آرزو (مرد ستیز)', message: 'موفق باشی داداش. منتظر خبرای خوبت هستیم.', emoji: '🌟' },
  { id: 3, name: 'مریم (دراماکوئین)', message: 'یه روز برمی‌گردی و این صندلی منتظرته!', emoji: '💫' },
  { id: 4, name: 'آقا دلیر (بزرگترین آشتی کننده تاریخ)', message: 'سفرت خوش، روزگارت درخشان. خدا نگه‌دار.', emoji: '✨' },
  { id: 5, name: 'آقا دست (غیرمنطقی ترین)', message: 'عشق ما کمتر نمی‌شه. فقط فاصله میاد وسط.', emoji: '🌙' },
  { id: 6, name: 'رجب (صلح آمیز ترین هم اتاقی)', message: 'بهترین‌ها رو برات آرزو می‌کنم. قلب ما با توئه.', emoji: '💝' },
  { id: 7, name: 'انتظاری (میمر اعظم)', message: 'هر کجا باشی، یادت باشه یه جایی هست که دوستت دارن.', emoji: '🦋' },
  { id: 8, name: 'علی (بی صبر ترین رفیق)', message: 'میو میو میو', emoji: '🌷' },
  { id: 8, name: 'جواد (غیراصیل ترین گرگانی)', message: 'میو میو میو', emoji: '🌷' },
]

export default function FarewellSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 min-h-screen flex items-center overflow-hidden">
      {/* Deep background with emotional gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/60 to-navy-950" />
      
      {/* Warm glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-turquoise-500/8 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

      {/* Persian pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="farewellPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="#d4a520" strokeWidth="0.3" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#00c8a8" strokeWidth="0.2" />
              <path d="M40 20L60 40L40 60L20 40Z" fill="none" stroke="#d4a520" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#farewellPattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Main farewell message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400/20 to-turquoise-400/20 flex items-center justify-center border border-gold-400/20">
              <svg className="w-10 h-10 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-6">
            به امید دیدار
          </h2>
          
          <p className="font-display text-2xl md:text-3xl text-beige-200/60 italic mb-8">
            Until We Meet Again
          </p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500/50" />
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-gold-400">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" opacity="0.6" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500/50" />
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-beige-200/70 font-persian leading-loose mb-6">
              رفیق عزیزم، تو که می‌روی اما خاطرات می‌مونن.
              <br />
              دانشگاه تهران، کوچه‌هایش، کافه‌هایش، و ما — همه منتظرتیم.
            </p>
            <p className="text-lg text-beige-300/50 italic">
              Dear friend, you leave but the memories stay.
              <br />
              The University of Tehran, its streets, its cafes, and us — we all wait for you.
            </p>
          </motion.div>
        </motion.div>

        {/* Friend messages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {friendMessages.map((friend, index) => (
            <FriendMessageCard key={friend.id} friend={friend} index={index} />
          ))}
        </div>

        {/* Final poetic line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-gold-300/80 font-persian leading-relaxed mb-4">
              «دوری منزل نیست، یاد است که می‌ماند»
            </p>
            <p className="text-beige-300/50 italic">
              Distance is not separation; it is memory that remains.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}

function FriendMessageCard({ friend, index }: { friend: FriendMessage; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  const rotations = [-1.5, 1, -0.5, 2, -2, 0.5, 1.5, -1]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotate: rotations[index] }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotations[index] } : {}}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
      className="group"
    >
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 border border-white/5 hover:border-gold-400/25 transition-all duration-500 h-full">
        {/* Emoji */}
        <div className="text-2xl mb-3">{friend.emoji}</div>

        {/* Name */}
        <h4 className="text-beige-100 text-sm font-medium mb-2">{friend.name}</h4>

        {/* Message */}
        <p className="text-beige-200/60 text-xs font-persian leading-relaxed">
          {friend.message}
        </p>

        {/* Decorative corner */}
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-400/10 rounded-tr-sm" />
      </div>
    </motion.div>
  )
}

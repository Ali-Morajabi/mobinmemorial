'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FriendProfile {
  id: number
  name: string
  nickname: string
  emoji: string
  image?: string
  memory: string
  color: 'gold' | 'turquoise' | 'navy'
}

const friends: FriendProfile[] = [
  {
    id: 1,
    name: 'علی',
    nickname: 'بی صبر ترین رفیق',
    emoji: '🌷',
    image: '/friends/ali.webp',
    memory: 'عجله داشت به هر جا، اما وقتی رسید، وفادارترین دوست بود.',
    color: 'turquoise',
  },
  {
    id: 2,
    name: 'جواد',
    nickname: 'غیراصیل ترین گرگانی',
    emoji: '🎭',
    image: '/friends/javad.webp',
    memory: 'لهجه گرگانیش شیرین بود، اما اصالتش شیرین‌تر. همیشه ما را می‌پراند.',
    color: 'gold',
  },
  {
    id: 3,
    name: 'رجب',
    nickname: 'صلح آمیز ترین هم اتاقی',
    emoji: '💝',
    image: '/friends/rajab.webp',
    memory: 'آرامش او مثل یک سپر مقابل طوفان بود. بدون او همه‌چیز پراکنده می‌شد.',
    color: 'navy',
  },
  {
    id: 4,
    name: 'آقا ترابی',
    nickname: 'کتاب نخون ترین',
    emoji: '🌸',
    image: '/friends/torabi.webp',
    memory: 'همیشه بهانه‌ای برای نخواندن کتاب داشت، اما همیشه با حضورش کلاس را رنگی می‌کرد.',
    color: 'gold',
  },
  {
    id: 5,
    name: 'مهدی',
    nickname: 'آقا سامع مشاور اعظم',
    emoji: '🌟',
    image: '/friends/same.webp',
    memory: 'عقاید قوی‌ای داشت، اما رفاقتش قوی‌تر بود. هیچ‌وقت از حرف زدن دست نمی‌کشید.',
    color: 'turquoise',
  },
  {
    id: 6,
    name: 'آرزو',
    nickname: 'مرد ستیز گربه ای',
    emoji: '🌟',
    image: '/friends/arezoo.webp',
    memory: 'عقاید قوی‌ای داشت، اما رفاقتش قوی‌تر بود. هیچ‌وقت از حرف زدن دست نمی‌کشید.',
    color: 'turquoise',
  },
  {
    id: 7,
    name: 'آقا دست',
    nickname: 'غیرمنطقی ترین',
    emoji: '🌙',
    image: 'friends/dast.webp',
    memory: 'حرف‌هایش غیرمنطقی بود، اما در نهایت همیشه درست از آب درمی‌آمد.',
    color: 'turquoise',
  },
  {
    id: 8,
    name: 'ابوالفضل',
    nickname: 'کارراه ننداز ترین',
    emoji: '🌙',
    image: 'friends/abolfazl.webp',
    memory: 'حرف‌هایش غیرمنطقی بود، اما در نهایت همیشه درست از آب درمی‌آمد.',
    color: 'turquoise',
  },
  {
    id: 9,
    name: 'آقا دلیر',
    nickname: 'بزرگترین آشتی کننده تاریخ',
    emoji: '✨',
    image: 'friends/dalir.webp',
    memory: 'با یک حرکت می‌توانست دشمنی‌های ساله را تمام کند. صلح او معجزه بود.',
    color: 'gold',
  },
  {
    id: 10,
    name: 'مریم',
    nickname: 'دراماکوئین',
    emoji: '💫',
    image: 'friends/maryam.webp',
    memory: 'هر دورهمی با حضورش به یک فیلم تبدیل می‌شد. با او هر لحظه به یک داستان تبدیل می‌شد.',
    color: 'navy',
  },
  {
    id: 11,
    name: 'انتظاری',
    nickname: 'میمر اعظم',
    emoji: '🦋',
    image: 'friends/entezari.webp',
    memory: 'بی‌صبرانه منتظر همه بود، اما وقتی رسیدیم، همیشه لبخند می‌زد.',
    color: 'gold',
  },
]

export default function FriendsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950" />

      {/* Decorative Persian pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="friendsPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#d4a520" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#00c8a8" strokeWidth="0.2" />
              <path d="M50 10L90 50L50 90L10 50Z" fill="none" stroke="#d4a520" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#friendsPattern)" />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-turquoise-500/5 rounded-full blur-[80px]" />

      {/* Section header */}
      <div className="relative z-10 text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-4">
            بَچّاااا
          </h2>
          <p className="text-beige-300/50 text-lg font-display italic">
            The Ones Who Made It Unforgettable
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/40" />
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-gold-400/50">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/40" />
          </div>
        </motion.div>
      </div>

      {/* Friends grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend, index) => (
            <FriendCard key={friend.id} friend={friend} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FriendCard({ friend, index }: { friend: FriendProfile; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const colorClasses = {
    gold: 'from-gold-500/20 to-gold-600/5 border-gold-500/20 hover:border-gold-400/40',
    turquoise: 'from-turquoise-500/20 to-turquoise-600/5 border-turquoise-500/20 hover:border-turquoise-400/40',
    navy: 'from-navy-500/20 to-navy-600/5 border-navy-400/20 hover:border-navy-300/40',
  }

  const imageGradients = {
    gold: 'from-gold-600/80 via-gold-500/40 to-gold-400/20',
    turquoise: 'from-turquoise-600/80 via-turquoise-500/40 to-turquoise-400/20',
    navy: 'from-navy-500/80 via-navy-400/40 to-navy-300/20',
  }

  const rotations = [-1.5, 1, -0.5, 2, -2, 0.5, 1.5, -1, 1]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotate: rotations[index] }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotations[index] } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
      className="group"
    >
      <div className={`rounded-3xl overflow-hidden bg-gradient-to-br ${colorClasses[friend.color]} border backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow duration-500`}>
        {/* Image area */}
        <div className="relative overflow-hidden">
          {/* Image or placeholder */}
          <div className="w-full aspect-square relative overflow-hidden">
            {friend.image ? (
              <img
                src={friend.image}
                alt={friend.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${imageGradients[friend.color]}`} />

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`cardPattern-${friend.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="8" fill="none" stroke="white" strokeWidth="0.3" />
                        <path d="M20 12L28 20L20 28L12 20Z" fill="none" stroke="white" strokeWidth="0.2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#cardPattern-${friend.id})`} />
                  </svg>
                </div>

                {/* Emoji centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl opacity-80 drop-shadow-lg group-hover:scale-110 transition-transform duration-700 ease-out">
                    {friend.emoji}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Name on image */}
          <div className="absolute top-4 left-4 right-4">
            <h3 className="text-xl font-medium text-white truncate bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block">
              {friend.name}
            </h3>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4">
          <div className="text-sm text-white font-persian truncate group-hover:translate-x-1 transition-transform duration-500 ease-out">
            {friend.nickname}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

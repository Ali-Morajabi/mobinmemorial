'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface AudioMemory {
  id: number
  title: string
  duration: string
  sender: string
  message: string
}

interface HandwrittenNote {
  id: number
  text: string
  author: string
  color: string
}

const audioMemories: AudioMemory[] = [
  {
    id: 1,
    title: 'پیام صوتی از سارا',
    duration: '۰:۴۵',
    sender: 'سارا',
    message: 'یادت نمی‌رم اولین روزی که با هم ناهار خوردیم...',
  },
  {
    id: 2,
    title: 'خاطره علی',
    duration: '۱:۱۲',
    sender: 'علی',
    message: 'اون شب که تا صبح درس خوندیم و بعد رفیدم دربند...',
  },
  {
    id: 3,
    title: 'نوشته مریم',
    duration: '۰:۳۸',
    sender: 'مریم',
    message: 'همیشه ممنونم که توی سخت‌ترین روزهام کنارم بودی...',
  },
]

const handwrittenNotes: HandwrittenNote[] = [
  {
    id: 1,
    text: 'رفیق، هر کجای دنیا باشی، یادت باشه اینجا یه خونه داری که منتظرته.',
    author: 'امیر',
    color: 'from-gold-400/10 to-gold-500/5',
  },
  {
    id: 2,
    text: 'موفق باشی دوست عزیز. آرزوی بهترین‌ها رو دارم.',
    author: 'نیلوفر',
    color: 'from-turquoise-400/10 to-turquoise-500/5',
  },
  {
    id: 3,
    text: 'تا دیدار بعدی، لبخند فراموش نشه.',
    author: 'رضا',
    color: 'from-navy-400/10 to-navy-500/5',
  },
  {
    id: 4,
    text: 'دانشگاه تهران بدون تو نمی‌شه. ولی می‌دونی که همیشه برمی‌گردی.',
    author: 'فاطمه',
    color: 'from-gold-400/10 to-turquoise-400/5',
  },
]

export default function MemoryCards() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950" />

      {/* Section header */}
      <div className="relative z-10 text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-400/60 text-sm tracking-[0.3em] uppercase block mb-4">
            پیام‌ها و خاطرات
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-4">
            حرف‌های ماندگار
          </h2>
          <p className="text-beige-300/50 text-lg font-display italic">
            Words That Echo Forever
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Audio memories */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-beige-200/80 font-display mb-8 text-center"
          >
            🎙️ پیام‌های صوتی از دوستان
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audioMemories.map((audio, index) => (
              <AudioMemoryCard key={audio.id} audio={audio} index={index} />
            ))}
          </div>
        </div>

        {/* Handwritten notes */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-beige-200/80 font-display mb-8 text-center"
          >
            ✍️ نوشته‌های دستی دوستان
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {handwrittenNotes.map((note, index) => (
              <HandwrittenNoteCard key={note.id} note={note} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AudioMemoryCard({ audio, index }: { audio: AudioMemory; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden glass-card p-6 hover:border-gold-400/30 transition-all duration-500">
        {/* Decorative wave pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0 50 Q25 30 50 50 T100 50" fill="none" stroke="#d4a520" strokeWidth="2" />
            <path d="M0 60 Q25 40 50 60 T100 60" fill="none" stroke="#d4a520" strokeWidth="2" />
            <path d="M0 70 Q25 50 50 70 T100 70" fill="none" stroke="#d4a520" strokeWidth="2" />
          </svg>
        </div>

        {/* Play button */}
        <div className="flex items-start gap-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 group-hover:shadow-gold-500/50 transition-shadow duration-300"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-navy-950" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-navy-950 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            
            {/* Ripple effect when playing */}
            {isPlaying && (
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-gold-400"
              />
            )}
          </motion.button>

          <div className="flex-1">
            <h4 className="text-beige-100 font-medium mb-1">{audio.title}</h4>
            <p className="text-beige-300/50 text-sm">از {audio.sender}</p>
          </div>
        </div>

        {/* Waveform visualization */}
        <div className="flex items-center gap-1 h-8 mb-4">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              animate={isPlaying ? {
                height: [4, Math.random() * 24 + 4, 4],
              } : { height: 4 }}
              transition={{
                duration: 0.5,
                delay: i * 0.02,
                repeat: isPlaying ? Infinity : 0,
                repeatType: 'reverse',
              }}
              className="flex-1 rounded-full bg-gold-400/30"
              style={{ minWidth: '2px' }}
            />
          ))}
        </div>

        {/* Message preview */}
        <p className="text-beige-300/60 text-sm font-persian italic">
          «{audio.message}»
        </p>

        {/* Duration */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <span className="text-gold-400/60 text-xs">{audio.duration}</span>
          <span className="text-beige-300/30 text-xs">MP3</span>
        </div>
      </div>
    </motion.div>
  )
}

function HandwrittenNoteCard({ note, index }: { note: HandwrittenNote; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const rotations = [-2, 1.5, -1, 2.5]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotate: rotations[index] }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotations[index] } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="group"
    >
      <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${note.color} p-6 border border-white/5 hover:border-gold-400/20 transition-all duration-500`}>
        {/* Paper texture effect */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />

        {/* Quote mark */}
        <div className="absolute top-3 right-3 text-4xl text-gold-400/10 font-display">
          &ldquo;
        </div>

        {/* Note content */}
        <div className="relative">
          <p className="text-beige-200/80 font-persian text-base md:text-lg leading-relaxed mb-4">
            {note.text}
          </p>

          {/* Author signature */}
          <div className="flex items-center gap-2 pt-3 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400/20 to-turquoise-400/20 flex items-center justify-center">
              <span className="text-gold-400 text-xs font-bold">
                {note.author.charAt(0)}
              </span>
            </div>
            <span className="text-beige-300/50 text-sm font-persian">
              — {note.author}
            </span>
          </div>
        </div>

        {/* Decorative tape */}
        <div className="absolute -top-2 left-8 w-12 h-4 bg-gold-400/10 rounded-sm transform -rotate-3" />
      </div>
    </motion.div>
  )
}

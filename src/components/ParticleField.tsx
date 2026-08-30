'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const particleCount = 50
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    speed: number
    opacity: number
    color: string
  }>>([])

  useEffect(() => {
    const colors = ['#d4a520', '#00c8a8', '#e8bc44', '#1ae4c2']
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.4 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}

function Particle({
  particle,
  scrollYProgress,
}: {
  particle: {
    id: number
    x: number
    y: number
    size: number
    speed: number
    opacity: number
    color: string
  }
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -300 * particle.speed]
  )

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.5]
  )

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        borderRadius: '50%',
        y: yTransform,
        opacity: opacityTransform,
      }}
      animate={{
        x: [0, Math.random() * 30 - 15, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

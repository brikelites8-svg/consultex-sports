'use client'

import { motion, type Variants } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
type Point = { x: number; y: number }

interface WaveConfig {
  offset: number
  amplitude: number
  frequency: number
  color: string
  opacity: number
}

// ─── Consultex wave palette ───────────────────────────────────────────────────
const WAVE_PALETTE: WaveConfig[] = [
  { offset: 0,             amplitude: 72,  frequency: 0.003,  color: 'rgba(30,112,160,0.9)',    opacity: 0.48 },
  { offset: Math.PI / 2,   amplitude: 88,  frequency: 0.0026, color: 'rgba(35,56,73,0.95)',     opacity: 0.42 },
  { offset: Math.PI,       amplitude: 58,  frequency: 0.0034, color: 'rgba(255,255,255,0.55)',  opacity: 0.26 },
  { offset: Math.PI * 1.5, amplitude: 78,  frequency: 0.0022, color: 'rgba(35,148,174,0.65)',   opacity: 0.32 },
  { offset: Math.PI * 2,   amplitude: 52,  frequency: 0.004,  color: 'rgba(35,56,73,0.85)',     opacity: 0.22 },
]

// ─── Sam® stats bar content ───────────────────────────────────────────────────
const SAM_STATS = [
  { label: 'Success Pillars', value: '5'    },
  { label: 'Per Month',       value: '$25'  },
  { label: 'Min Consulting',  value: '60'   },
  { label: 'Always On',       value: '24/7' },
]

const PILLARS = ['Athletic Development', 'NIL Strategy', 'Academic Success', 'Financial Literacy', 'Career Pathway']

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const statsVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 } },
}

// ─── Component ────────────────────────────────────────────────────────────────
export function GlowyWavesHero() {
  const canvasRef      = useRef<HTMLCanvasElement | null>(null)
  const mouseRef       = useRef<Point>({ x: 0, y: 0 })
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouseInfluence  = prefersReducedMotion ? 10  : 70
    const influenceRadius = prefersReducedMotion ? 160 : 320
    const smoothing       = prefersReducedMotion ? 0.04 : 0.1

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    const recenter = () => {
      const c = { x: canvas.width / 2, y: canvas.height / 2 }
      mouseRef.current       = c
      targetMouseRef.current = c
    }

    const onResize     = () => { resize(); recenter() }
    const onMouseMove  = (e: MouseEvent) => { targetMouseRef.current = { x: e.clientX, y: e.clientY } }
    const onMouseLeave = () => recenter()

    resize()
    recenter()
    window.addEventListener('resize',      onResize)
    window.addEventListener('mousemove',   onMouseMove)
    window.addEventListener('mouseleave',  onMouseLeave)

    const drawWave = (wave: WaveConfig) => {
      ctx.save()
      ctx.beginPath()
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx       = x - mouseRef.current.x
        const dy       = canvas.height / 2 - mouseRef.current.y
        const dist     = Math.sqrt(dx * dx + dy * dy)
        const influence  = Math.max(0, 1 - dist / influenceRadius)
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset)
        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.lineWidth   = 2.5
      ctx.strokeStyle = wave.color
      ctx.globalAlpha = wave.opacity
      ctx.shadowBlur  = 35
      ctx.shadowColor = wave.color
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      time++
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing

      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, '#233849')
      grad.addColorStop(1, '#1b2c3a')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalAlpha = 1
      ctx.shadowBlur  = 0
      WAVE_PALETTE.forEach(drawWave)

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize',     onResize)
      window.removeEventListener('mousemove',  onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden"
      role="region"
      aria-label="Sam® hero section"
    >
      {/* Canvas waves */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div style={{ position: 'absolute', left: '50%', top: 0, width: 520, height: 520, transform: 'translateX(-50%)', borderRadius: '50%', background: 'rgba(30,112,160,0.05)', filter: 'blur(140px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 360, height: 360, borderRadius: '50%', background: 'rgba(35,56,73,0.1)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '25%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(30,112,160,0.04)', filter: 'blur(150px)' }} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Entry badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem',
              borderRadius: 9999, border: '1px solid rgba(30,112,160,0.3)',
              background: 'rgba(35,56,73,0.65)', padding: '0.5rem 1.25rem',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Sparkles style={{ width: 14, height: 14, color: '#1e70a0' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)' }}>
              The Student-Athlete Success Platform
            </span>
          </motion.div>

          {/* Product name */}
          <motion.div variants={itemVariants} style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.06em' }}>
              Introducing
            </span>
            {' '}
            <span style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 600, color: '#1e70a0', letterSpacing: '0.03em' }}>
              Sam®
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-hero)',
              lineHeight: 1.08,
              color: '#FFFFFF',
              fontWeight: 300,
              marginBottom: '1.5rem',
            }}
          >
            Every student-athlete&apos;s personal strategist,{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 600 }}>coach, and advisor</span>
            {' '}— on call, 24/7.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 680,
              margin: '0 auto 2.5rem',
            }}
          >
            Sam® is the first AI-powered platform built for the whole student-athlete — athletic
            development, NIL strategy, academic success, financial literacy, and career pathway.
            Five dimensions. One platform. Delivered in the voice of Sam Mitchell, NBA Coach of
            the Year.{' '}
            <span style={{ color: '#1e70a0', fontWeight: 500 }}>Starting at $25/month.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}
          >
            <motion.a
              href="#pricing"
              className="btn-primary"
              whileHover={{ opacity: 0.88, y: -1 }}
              transition={{ duration: 0.22 }}
            >
              Get Your Playbook
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="btn-ghost"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.22 }}
            >
              See how it works
            </motion.a>
          </motion.div>

          {/* Five Pillars pills */}
          <motion.ul
            variants={itemVariants}
            style={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
              gap: '0.6rem', listStyle: 'none', padding: 0, margin: '0 0 3rem',
            }}
          >
            {PILLARS.map(pill => (
              <li
                key={pill}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.52)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 9999,
                  padding: '0.4rem 1rem',
                  background: 'rgba(35,56,73,0.45)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {pill}
              </li>
            ))}
          </motion.ul>

          {/* Stats bar */}
          <motion.div
            variants={statsVariants}
            className="stats-responsive"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid rgba(30,112,160,0.18)',
              background: 'rgba(30,112,160,0.18)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {SAM_STATS.map(stat => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                style={{
                  background: 'rgba(35,56,73,0.78)',
                  padding: 'clamp(1.25rem, 2vw, 1.75rem) 1rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: '0.4rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 300, color: '#1e70a0', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 639px) { .stats-responsive { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}

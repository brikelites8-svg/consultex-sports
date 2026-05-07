'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useCallback } from 'react'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'
import { useInView } from 'react-intersection-observer'

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  const setRefs = useCallback((node: HTMLSpanElement | null) => {
    ;(ref as any).current = node
    inViewRef(node)
  }, [inViewRef])

  useEffect(() => {
    if (!inView || !ref.current) return

    let current = 0
    const increment = value / 20
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        ref.current!.textContent = String(Math.round(value))
        clearInterval(timer)
      } else {
        ref.current!.textContent = String(Math.round(current))
      }
    }, 40)
  }, [inView, value])

  return <span ref={setRefs} />
}

const STATS = [
  { value: '5',    label: 'Success Pillars' },
  { value: '$25',  label: 'Per Month' },
  { value: '60',   label: 'Min Consulting / Mo.' },
  { value: '24/7', label: 'Always On' },
]

export default function HeroStats() {
  return (
    <section style={{ backgroundColor: '#003F74' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          className="stats-grid"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem) 1.5rem',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {i < STATS.length - 1 && (
                <div style={{ position: 'absolute', right: 0, top: '20%', height: '60%', width: 1, background: 'rgba(255,255,255,0.1)' }} />
              )}
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#F5A623', lineHeight: 1, marginBottom: '0.5rem', fontVariantNumeric: 'tabular-nums' }}>
                {stat.value === '24/7' ? '24/7' : (
                  <>
                    {stat.value.startsWith('$') && '$'}
                    <Counter value={parseInt(stat.value.replace('$', ''))} />
                  </>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 639px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}

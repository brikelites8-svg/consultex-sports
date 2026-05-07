'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from '@/lib/animations'

const STATS = [
  { value: '5',    label: 'Success Pillars' },
  { value: '$25',  label: 'Per Month' },
  { value: '60',   label: 'Min Consulting / Mo.' },
  { value: '24/7', label: 'Always On' },
]

export default function HeroStats() {
  return (
    <section style={{ backgroundColor: '#233849' }}>
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
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1e70a0', lineHeight: 1, marginBottom: '0.5rem', fontVariantNumeric: 'tabular-nums' }}>
                {stat.value}
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

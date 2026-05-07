'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const KPIS = [
  { value: 127,  prefix: '',  suffix: '',  decimals: 0, label: 'Client Engagements' },
  { value: 4.2,  prefix: '$', suffix: 'B', decimals: 1, label: 'In Deal Value Advised' },
  { value: 19,   prefix: '',  suffix: '',  decimals: 0, label: 'Sports Organizations' },
]

function AnimatedCounter({
  value, prefix, suffix, decimals,
}: { value: number; prefix: string; suffix: string; decimals: number }) {
  const ref   = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count  = useMotionValue(0)
  const display = useTransform(count, v =>
    decimals > 0 ? v.toFixed(decimals) : String(Math.round(v))
  )

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.2, ease: 'easeOut' })
    }
  }, [inView, count, value])

  return (
    <span ref={ref}>
      {prefix}<motion.span>{display}</motion.span>{suffix}
    </span>
  )
}

export default function KpiTiles() {
  return (
    <section id="kpi" style={{ backgroundColor: '#233849', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)', textAlign: 'center' }}
        >
          <motion.p variants={fadeUp} className="section-label-light">
            Why Consultex Sports
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#fefefe' }}
          >
            Results speak in specifics.
          </motion.h2>
        </motion.div>

        {/* KPI row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', position: 'relative' }}
          className="kpi-grid"
        >
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              variants={fadeUp}
              style={{
                padding: 'clamp(2rem, 4vw, 3.5rem) 2rem',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Vertical divider (not on last) */}
              {i < KPIS.length - 1 && (
                <div style={{ position: 'absolute', right: 0, top: '15%', height: '70%', width: 1, background: 'rgba(254,254,254,0.12)' }} />
              )}

              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(4rem, 7vw, 7rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: '#fefefe',
                  fontVariantNumeric: 'tabular-nums',
                  marginBottom: '1rem',
                }}
              >
                <AnimatedCounter
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  decimals={kpi.decimals}
                />
              </div>

              {/* Label */}
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(254,254,254,0.55)',
                }}
              >
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 639px) { .kpi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

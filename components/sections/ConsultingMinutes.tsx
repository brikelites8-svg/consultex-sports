'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

export default function ConsultingMinutes() {
  return (
    <section style={{ backgroundColor: '#233849', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="minutes-grid"
        >
          {/* Left: copy */}
          <div>
            <motion.p variants={fadeUp} className="section-label-light">
              Consulting Minutes · Included Every Month
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#FFFFFF', marginBottom: '1.5rem' }}>
              Every plan includes monthly consulting minutes with Robi®
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
              Robi® delivers a live Strategic Briefing in Sam Mitchell's voice — takes questions,
              adjusts recommendations in real time. The same experience a $500/hr consultant
              delivers, included in every plan.
            </motion.p>
          </div>

          {/* Right: stat */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(30,112,160,0.25)', borderRadius: 6, background: 'rgba(0,0,0,0.12)', textAlign: 'center' }}
          >
            <div style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(4.5rem, 8vw, 7rem)', fontWeight: 300, color: '#1e70a0', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              60
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
              Min / Month Included
            </div>
            <div style={{ width: 40, height: 1, background: 'rgba(30,112,160,0.35)', margin: '0.5rem 0' }} />
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
              Additional: $5 / minute
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) { .minutes-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

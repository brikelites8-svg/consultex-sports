'use client'

import { motion } from 'framer-motion'
import { fadeUp, slideInRight, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

export default function SamMitchell() {
  return (
    <section id="sam-mitchell" style={{ backgroundColor: '#003F74', padding: 'var(--space-section) 0', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.018 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }} className="sam-grid">

          {/* Left: identity */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '2rem' }}>
              Powered by Sam Mitchell
            </motion.p>

            {/* Name block */}
            <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 2, backgroundColor: '#F5A623', marginBottom: '1.5rem' }} />
              <h2 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h1)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '0.02em', marginBottom: '0.75rem' }}>
                Sam Mitchell
              </h2>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                NBA Coach of the Year · Head of Sports Practice
              </p>
            </motion.div>

            {/* Credential tiles */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
              {[
                'NBA Coach of the Year',
                'Head of Sports Practice, Consultex',
                'Voice of the Sam® Platform',
              ].map(cred => (
                <div key={cred} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: '#F5A623', fontSize: '0.6rem' }}>◆</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}>
                    {cred}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: quote */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: -12, left: -8, fontFamily: 'var(--font-editorial)', fontSize: '8rem', lineHeight: 1, color: 'rgba(30,112,160,0.12)', fontWeight: 300, userSelect: 'none', pointerEvents: 'none' }}>
              "
            </div>
            <blockquote style={{ position: 'relative', margin: 0 }}>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.55, color: '#FFFFFF', marginBottom: '2rem' }}>
                "Every kid who opens this app gets me as their coach, their strategist, and their advisor. Not a training video — me, on call, 24/7."
              </p>
              <footer style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                — Sam Mitchell
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .sam-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

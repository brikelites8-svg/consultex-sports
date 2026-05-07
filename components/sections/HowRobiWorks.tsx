'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const STEPS = [
  {
    num: '01',
    title: 'You Bring the Challenge',
    body: 'Submit your brief — whether it\'s a strategic decision, a talent assessment, or a commercial opportunity. Robi® builds a complete picture before recommending anything.',
  },
  {
    num: '02',
    title: 'Robi® Applies Fused Intelligence™',
    body: 'Robi® runs your challenge through the same consulting-grade process our senior advisors use — market intelligence, pattern analysis, and executive judgment synthesized in real time.',
  },
  {
    num: '03',
    title: 'Executive-Grade Strategy, Delivered',
    body: 'A structured Strategic Briefing: situation assessment, options with trade-offs, and a recommended course of action. Specific, defensible, actionable.',
  },
]

export default function HowRobiWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#EEF2F7', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5rem)' }}
        >
          <motion.p variants={fadeUp} className="section-label">
            How Robi® Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#001E3A', maxWidth: 480 }}
          >
            Meet Robi®, Your Consultant.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A', maxWidth: 520, marginTop: '1rem' }}
          >
            Robi® is not an AI assistant. Robi® is a consultant — the intelligence behind
            every engagement is Fused Intelligence™.
          </motion.p>
        </motion.div>

        {/* Steps container */}
        <div style={{ position: 'relative' }}>

          {/* Animated connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 28,
              left: '16.66%',
              right: '16.66%',
              height: 1,
              background: 'linear-gradient(to right, rgba(35,56,73,0.15), rgba(35,56,73,0.5), rgba(35,56,73,0.15))',
              transformOrigin: 'left',
            }}
            className="connector-line"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}
            className="steps-grid"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Step number bubble */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      border: '1px solid rgba(35,56,73,0.2)',
                      backgroundColor: '#EEF2F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-editorial)',
                        fontSize: '1.25rem',
                        fontWeight: 300,
                        color: '#001E3A',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 600,
                    color: '#001E3A',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'var(--text-body)',
                    lineHeight: 1.75,
                    color: '#5A6A7A',
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom call-out */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{
            marginTop: 'clamp(3rem, 5vw, 4rem)',
            padding: '1.75rem 2rem',
            borderLeft: '3px solid #f3a31e',
            backgroundColor: 'rgba(243,163,30,0.06)',
            borderRadius: '0 6px 6px 0',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontStyle: 'italic',
              color: '#001E3A',
              lineHeight: 1.6,
            }}
          >
            Fused Intelligence™ combines the institutional knowledge of Consultex advisors
            with agentic execution — so every brief benefits from both human expertise
            and the speed of a system that never sleeps.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .steps-grid   { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}

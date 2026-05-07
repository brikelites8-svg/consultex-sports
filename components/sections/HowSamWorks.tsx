'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.35,
      duration: 0.9,
    },
  }),
}

const STEPS = [
  {
    label: 'Step 1 · Insights',
    title: 'Sam® examines the athlete',
    body: 'Sam® builds a complete picture — skill assessments, academic standing, NIL baseline, competitive level, and goals — delivering an honest assessment before recommending what to do next. No guessing. No generics.',
  },
  {
    label: 'Step 2 · Strategy',
    title: 'Sam® presents the plan',
    body: 'Robi® delivers a live Strategic Briefing in Sam Mitchell\'s voice — not a static PDF. Takes questions in real time. Adjusts recommendations on the spot. The same experience a $500/hr consultant delivers, included in every plan.',
  },
  {
    label: 'Step 3 · Execution',
    title: 'The athlete acts on it',
    body: '90-day training blocks, NIL action plans, academic milestones, and career pathway steps — tracked through the Sam® dashboard with weekly coaching prompts and a full playbook refresh every quarter.',
  },
]

export default function HowSamWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#F7F9FB', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5rem)' }}
        >
          <motion.p variants={fadeUp} className="section-label">How Sam® Works</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, color: '#003F74', marginBottom: '1rem' }}>
            Insights → Strategy → Execution.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A', maxWidth: 520 }}>
            Sam® runs the same consulting-grade process that Robi® delivers to businesses — applied to the student-athlete's career.
          </motion.p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Animated connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', top: 25, left: '16.66%', right: '16.66%', height: 1, background: 'linear-gradient(to right, rgba(35,56,73,0.1), rgba(35,56,73,0.45), rgba(35,56,73,0.1))', transformOrigin: 'left', zIndex: 0 }}
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
            {STEPS.map((step, i) => (
              <motion.div key={step.label} variants={fadeInFromLeft} custom={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Step bubble */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(35,56,73,0.18)', backgroundColor: '#EEF2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 2 }}>
                    <span style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', fontWeight: 300, color: '#003F74' }}>
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F5A623' }}>
                  {step.label}
                </p>
                <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: '#003F74', lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.75, color: '#5A6A7A' }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .steps-grid    { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}

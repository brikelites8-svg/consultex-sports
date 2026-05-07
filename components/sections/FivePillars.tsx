'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const PILLARS = [
  {
    num: '01',
    title: 'Athletic Development',
    body: 'Personalized 90-day training plans, skill assessment across 7 dimensions, position-specific coaching focus, and nutrition protocols — all built on Sam Mitchell\'s proven framework.',
  },
  {
    num: '02',
    title: 'NIL Strategy',
    body: 'Consulting-grade briefings, deal evaluation scorecards, brand positioning plans, financial roadmaps, and 30-day action plans. Robi® walks each athlete through via live voice Q&A.',
  },
  {
    num: '03',
    title: 'Academic Success',
    body: 'NCAA eligibility monitoring, core course tracking, and 24/7 tutoring support built around demanding practice and travel schedules. Help when you need it — not during office hours.',
  },
  {
    num: '04',
    title: 'Financial Literacy',
    body: 'NIL earnings management, tax basics, agent evaluation, deal structures, and financial roadmaps that grow with the athlete\'s income. The money conversation every athlete needs.',
  },
  {
    num: '05',
    title: 'Career Pathway',
    body: 'Life beyond athletics — degree alignment, industry pathways, network building while still competing, and post-sport transition planning. The 50 years after the sport end, prepared.',
  },
]

export default function FivePillars() {
  return (
    <section id="pillars" style={{ backgroundColor: '#EEF2F7', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)', maxWidth: 640 }}
        >
          <motion.p variants={fadeUp} className="section-label">The Five Pillars</motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, color: '#003F74', lineHeight: 1.2, marginBottom: '1rem' }}
          >
            Everything the student-athlete needs. In one place.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A' }}
          >
            Every competitor owns one dimension. Sam® owns all five — giving every athlete access
            to the level of support that used to require a six-figure family budget.
          </motion.p>
        </motion.div>

        {/* Pillars: 3-2 layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Row 1: 01 02 03 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="pillars-row-1">
            {PILLARS.slice(0, 3).map(pillar => (
              <PillarCard key={pillar.num} pillar={pillar} />
            ))}
          </div>
          {/* Row 2: 04 05 (centered) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: 'calc((100% - 1.5rem) * 2/3 + 1.5rem)', margin: '0 auto', width: '100%' }} className="pillars-row-2">
            {PILLARS.slice(3).map(pillar => (
              <PillarCard key={pillar.num} pillar={pillar} />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .pillars-row-1 { grid-template-columns: repeat(2, 1fr) !important; }
          .pillars-row-2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 100% !important; }
        }
        @media (max-width: 639px) {
          .pillars-row-1 { grid-template-columns: 1fr !important; }
          .pillars-row-2 { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}

function PillarCard({ pillar }: { pillar: typeof PILLARS[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: '0 12px 48px rgba(35,56,73,0.14)' }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="service-card"
      style={{ backgroundColor: '#FFFFFF', borderRadius: 6, padding: '2rem', boxShadow: '0 4px 32px rgba(35,56,73,0.07)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="service-card-accent" />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: '1.25rem' }}>
        <span style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: 'rgba(35,56,73,0.12)', lineHeight: 1 }}>
          {pillar.num}
        </span>
        <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: '#003F74', lineHeight: 1.25 }}>
          {pillar.title}
        </h3>
      </div>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.75, color: '#5A6A7A' }}>
        {pillar.body}
      </p>
    </motion.div>
  )
}

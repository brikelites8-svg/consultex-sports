'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const NIL_TILES = [
  { num: '01', title: 'Brand Positioning',   desc: '3-pillar personal brand strategy tied to story, platform, and local market' },
  { num: '02', title: 'Deal Scorecard',       desc: 'Rate every NIL opportunity on brand fit, financial value, and risk profile' },
  { num: '03', title: 'Financial Roadmap',    desc: 'Earnings projections, tax obligations, agent fees, and savings targets' },
  { num: '04', title: '30-Day Action Plan',   desc: 'Robi® walks through it live in Sam\'s voice using consulting minutes.' },
]

const SERVICES = [
  {
    label: 'Student Athlete',
    title: '90-Day Training Playbook',
    desc: 'Personalized to position, level, and primary skill gap. Built on Sam Mitchell\'s framework for developing players who get recruited at the next level.',
    bullets: [
      '7-dimension skill assessment and gap analysis',
      '3-phase training block with weekly on-court and off-court targets',
      'Game-day nutrition protocol and recovery standards',
      'Coaching focus — what college coaches actually watch beyond stats',
    ],
  },
  {
    label: 'College Pathway',
    title: 'The Honest Roadmap',
    desc: 'Division-level match scoring, scholarship value projections, and a grade-by-grade recruiting timeline through signing day. No sugarcoating — just the truth about where you stand and what it takes to get where you want to go.',
    bullets: [
      'D1 / D2 / D3 / NAIA pathway match with Sam® development score',
      'September 1 junior year contact window preparation',
      'NCAA eligibility monitoring and core course tracking',
      'Camp and showcase calendar by season and geography',
    ],
  },
  {
    label: 'Academic Success',
    title: '24/7 Academic Support',
    desc: 'Tutoring and advising built around practice schedules and travel. When a 15-year-old gets back from an AAU tournament at midnight and has a chemistry test Tuesday morning — Robi® is there.',
    bullets: [
      '24/7 tutoring around practice, games, and travel schedules',
      'GPA monitoring with proactive alerts before problems become crises',
      'NCAA Clearinghouse registration guidance and timeline',
      'Test prep timeline and score benchmarks by division',
    ],
  },
  {
    label: 'Financial Literacy',
    title: 'The Money Playbook',
    desc: '78% of professional athletes are broke within 5 years of retirement. Sam® gives student-athletes the financial framework they need before they need it — not after.',
    bullets: [
      'NIL earnings management from first dollar earned',
      'Tax basics, agent fees, and deal structure literacy',
      'Savings and investment roadmap that grows with income',
      'Agent evaluation framework — before you sign anything',
    ],
  },
]

export default function ServicesInDepth() {
  return (
    <section id="services" style={{ backgroundColor: '#EEF2F7', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
          <motion.p variants={fadeUp} className="section-label">Services In Depth</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#003F74', maxWidth: 480 }}>
            What Sam® actually delivers.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A', maxWidth: 560, marginTop: '0.75rem' }}>
            Sam® delivers consulting-grade resources across every dimension of the student-athlete's career — from your first NIL deal to signing day and beyond.
          </motion.p>
        </motion.div>

        {/* Feature 1: NIL Strategy Briefings (full-width featured) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ backgroundColor: '#FFFFFF', borderRadius: 6, padding: 'clamp(2rem, 4vw, 3rem)', boxShadow: '0 4px 32px rgba(35,56,73,0.08)', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#003F74' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="nil-grid">
            {/* Left */}
            <div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '0.75rem' }}>
                Signature Services
              </p>
              <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 600, color: '#003F74', lineHeight: 1.2, marginBottom: '1rem' }}>
                NIL Strategy Briefings
              </h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.75, color: '#5A6A7A', marginBottom: '1.5rem' }}>
                Consulting-grade NIL strategy delivered in Sam's voice. Not a blog post — a personalized strategic briefing with a deal scorecard, brand positioning plan, financial roadmap, and 30-day action plan. Robi® walks the athlete through it live, takes questions, and adjusts recommendations in real time.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Personal brand positioning — 3-pillar strategy tied to the athlete\'s story and market',
                  'Deal evaluation scorecard — rate every inbound NIL opportunity against brand fit and risk',
                  'Financial roadmap — earnings projections, tax obligations, agent fees, savings targets',
                  '30-day action plan — specific steps, deadlines, and owners with Robi® live walkthrough',
                ].map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#F5A623', flexShrink: 0, marginTop: 4, fontSize: '0.6rem' }}>◆</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', lineHeight: 1.6, color: '#5A6A7A' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: 2x2 tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {NIL_TILES.map(tile => (
                <div key={tile.num} style={{ padding: '1.25rem', backgroundColor: '#EEF2F7', borderRadius: 4, border: '1px solid rgba(35,56,73,0.07)' }}>
                  <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', fontWeight: 300, color: 'rgba(35,56,73,0.2)', lineHeight: 1, marginBottom: '0.5rem' }}>{tile.num}</div>
                  <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', fontWeight: 600, color: '#003F74', marginBottom: '0.5rem' }}>{tile.title}</div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', lineHeight: 1.55, color: '#5A6A7A' }}>{tile.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services 2–5: 2-column grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
          className="services-sub-grid"
        >
          {SERVICES.map(svc => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 12px 48px rgba(35,56,73,0.14)' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="service-card"
              style={{ backgroundColor: '#FFFFFF', borderRadius: 6, padding: '2rem', boxShadow: '0 4px 32px rgba(35,56,73,0.07)', position: 'relative', overflow: 'hidden' }}
            >
              <div className="service-card-accent" />
              {svc.label && (
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(35,56,73,0.4)', marginBottom: '0.5rem' }}>
                  {svc.label}
                </p>
              )}
              <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: '#003F74', marginBottom: '0.875rem', lineHeight: 1.25 }}>
                {svc.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', lineHeight: 1.7, color: '#5A6A7A', marginBottom: '1.25rem' }}>
                {svc.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {svc.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#F5A623', flexShrink: 0, marginTop: 3, fontSize: '0.6rem' }}>◆</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', lineHeight: 1.55, color: '#5A6A7A' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .nil-grid           { grid-template-columns: 1fr !important; }
          .services-sub-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

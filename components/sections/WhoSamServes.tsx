'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const TIERS = [
  {
    label: 'For Athletes & Families',
    product: 'Sam® Athlete Passport',
    stat: '60 min',
    statLabel: 'Consulting Included',
    price: '$25/month',
    desc: 'Every student-athlete gets a personal coach, strategist, and advisor in Sam Mitchell. Quarterly briefings, weekly coaching prompts, 60 consulting minutes per month, 24/7 tutoring, NIL strategy, and college pathway monitoring. Coach input option included.',
    highlight: false,
  },
  {
    label: 'For Coaches & Trainers',
    product: 'Sam® Team Dashboard',
    stat: '20',
    statLabel: 'Athletes Max',
    price: 'Pricing TBD',
    desc: 'Run up to 20 athletes through the Sam® platform. Individual playbooks per player. Consulting minutes per athlete per month. Parent-facing reports. Roster analytics. Pre-season, mid-season, and post-season editions. Sam Mitchell branding throughout your program.',
    highlight: true,
  },
  {
    label: 'For Leagues & Organizations',
    product: 'Sam® League Intelligence',
    stat: 'Org',
    statLabel: 'Wide Access',
    price: 'Pricing TBD',
    desc: 'GRPA counties, YMCA, AAU programs, and rec departments. Every registered athlete receives a Sam® Passport with consulting minutes as part of league registration. Aggregate analytics, co-branded activation, and full Sam Mitchell branded experience across your entire program.',
    highlight: false,
  },
]

export default function WhoSamServes() {
  return (
    <section style={{ backgroundColor: '#F7F9FB', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}
        >
          <motion.p variants={fadeUp} className="section-label">Who Sam® Serves</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#003F74', marginBottom: '0.75rem' }}>
            Three buyers. One platform.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A', maxWidth: 560 }}>
            Sam® delivers different experiences for the athlete, the family, the coach, and the organization — all under one platform and one brand.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
          className="tiers-grid"
        >
          {TIERS.map(tier => (
            <motion.div
              key={tier.product}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: tier.highlight ? '0 20px 60px rgba(35,56,73,0.2)' : '0 12px 48px rgba(35,56,73,0.13)' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: tier.highlight ? '#003F74' : '#FFFFFF',
                borderRadius: 6,
                padding: '2.25rem 2rem',
                boxShadow: tier.highlight ? '0 8px 40px rgba(35,56,73,0.2)' : '0 4px 32px rgba(35,56,73,0.07)',
                border: tier.highlight ? '1px solid rgba(30,112,160,0.3)' : '1px solid rgba(35,56,73,0.06)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: tier.highlight ? '#F5A623' : '#003F74' }} />

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: tier.highlight ? '#F5A623' : 'rgba(35,56,73,0.45)', marginBottom: '0.75rem' }}>
                {tier.label}
              </p>
              <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: tier.highlight ? '#FFFFFF' : '#003F74', marginBottom: '1rem', lineHeight: 1.25 }}>
                {tier.product}
              </h3>

              {/* Stat */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: `1px solid ${tier.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(35,56,73,0.08)'}` }}>
                <span style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, color: '#F5A623', lineHeight: 1 }}>
                  {tier.stat}
                </span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: tier.highlight ? 'rgba(255,255,255,0.45)' : 'rgba(35,56,73,0.4)' }}>
                  {tier.statLabel}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', lineHeight: 1.7, color: tier.highlight ? 'rgba(255,255,255,0.65)' : '#5A6A7A', flex: 1, marginBottom: '1.75rem' }}>
                {tier.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', fontWeight: 300, color: tier.highlight ? '#F5A623' : '#003F74' }}>
                  {tier.price}
                </span>
                <a
                  href="#pricing"
                  style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: tier.highlight ? '#F5A623' : '#003F74', textDecoration: 'none', borderBottom: `1px solid ${tier.highlight ? 'rgba(30,112,160,0.4)' : 'rgba(35,56,73,0.3)'}`, paddingBottom: 1 }}
                >
                  See plan →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .tiers-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
      `}</style>
    </section>
  )
}

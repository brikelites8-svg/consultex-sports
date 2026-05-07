'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const PLANS = [
  {
    label: 'Athlete & Family',
    product: 'Sam® Athlete Passport',
    price: '25',
    priceSuffix: '/user/month',
    status: 'Available Now',
    statusColor: '#F5A623',
    highlight: false,
    features: [
      'Quarterly 21-section Strategic Briefing',
      'Sam\'s personal coaching note every quarter',
      '60 consulting minutes with Robi® per month',
      'Weekly coaching prompt from Sam',
      '24/7 academic tutoring',
      'NIL strategy and deal evaluation',
      'College pathway monitoring and eligibility alerts',
      '"Ask Sam" voice — 24/7',
    ],
    cta: 'Get Your Playbook',
  },
  {
    label: 'Coaches & Trainers',
    product: 'Sam® Team Dashboard',
    price: 'TBD',
    priceSuffix: '/program/month',
    status: 'Pricing TBD',
    statusColor: 'rgba(255,255,255,0.4)',
    highlight: true,
    features: [
      'Up to 20 athletes on the platform',
      'Individual quarterly briefings per player',
      'Consulting minutes per athlete per month',
      'Parent-facing reports and progress summaries',
      'Roster analytics dashboard',
      'Pre, mid, and post-season editions',
      'Sam Mitchell branding for your program',
    ],
    cta: 'Join the Waitlist',
  },
  {
    label: 'Leagues & Organizations',
    product: 'Sam® League Intelligence',
    price: 'TBD',
    priceSuffix: '/organization/month',
    status: 'Pricing TBD',
    statusColor: 'rgba(35,56,73,0.4)',
    highlight: false,
    features: [
      'Every registered athlete gets a Sam® Passport',
      'Consulting minutes included per athlete',
      'Aggregate league analytics and reporting',
      'Co-branded Sam Mitchell activation',
      'Customized for GRPA, YMCA, AAU structure',
      'Live event activation support',
      'Dedicated account management',
    ],
    cta: 'Schedule a Conversation',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ backgroundColor: '#EEF2F7', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)', maxWidth: 600 }}
        >
          <motion.p variants={fadeUp} className="section-label">Pricing</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, color: '#003F74', marginBottom: '1rem' }}>
            Access Sam®.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A' }}>
            Every tier includes consulting minutes with Robi® and a quarterly Strategic Briefing from Sam. Pricing is being finalized — get early access by getting started today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'stretch' }}
          className="pricing-grid"
        >
          {PLANS.map(plan => (
            <motion.div
              key={plan.product}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: plan.highlight ? '0 20px 60px rgba(35,56,73,0.22)' : '0 12px 48px rgba(35,56,73,0.14)' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex', flexDirection: 'column',
                backgroundColor: plan.highlight ? '#003F74' : '#FFFFFF',
                borderRadius: 6, padding: '2.5rem 2rem',
                boxShadow: plan.highlight ? '0 8px 48px rgba(35,56,73,0.22)' : '0 4px 32px rgba(35,56,73,0.08)',
                border: plan.highlight ? '1px solid rgba(30,112,160,0.3)' : '1px solid rgba(35,56,73,0.07)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: plan.highlight ? '#F5A623' : '#003F74' }} />

              {/* Status badge */}
              <div style={{ display: 'inline-block', alignSelf: 'flex-start', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.statusColor, marginBottom: '0.75rem', border: `1px solid ${plan.statusColor}`, padding: '0.2rem 0.6rem', borderRadius: 2 }}>
                {plan.status}
              </div>

              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: plan.highlight ? 'rgba(255,255,255,0.4)' : 'rgba(35,56,73,0.45)', marginBottom: '0.4rem' }}>
                {plan.label}
              </p>
              <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: plan.highlight ? '#FFFFFF' : '#003F74', marginBottom: '1rem', lineHeight: 1.25 }}>
                {plan.product}
              </h3>

              {/* Price */}
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: `1px solid ${plan.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(35,56,73,0.08)'}` }}>
                <span style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2.25rem, 3.5vw, 3rem)', fontWeight: 300, color: plan.highlight ? '#FFFFFF' : '#003F74', lineHeight: 1 }}>
                  {plan.price === 'TBD' ? '' : '$'}{plan.price}
                </span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: plan.highlight ? 'rgba(255,255,255,0.45)' : '#5A6A7A', marginLeft: 4 }}>
                  {plan.priceSuffix}
                </span>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#F5A623', flexShrink: 0, marginTop: 3, fontSize: '0.6rem' }}>◆</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', lineHeight: 1.55, color: plan.highlight ? 'rgba(255,255,255,0.75)' : '#5A6A7A' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                style={{ display: 'block', textAlign: 'center', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.875rem', borderRadius: 3, textDecoration: 'none', backgroundColor: plan.highlight ? '#F5A623' : 'transparent', color: plan.highlight ? '#FFFFFF' : '#003F74', border: plan.highlight ? 'none' : '1px solid rgba(35,56,73,0.3)', transition: 'opacity 220ms, transform 220ms' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1';    e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginTop: 'clamp(3rem, 5vw, 4rem)', textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.1rem, 1.75vw, 1.4rem)', fontStyle: 'italic', color: '#003F74', marginBottom: '0.75rem' }}>
            "Every athlete deserves access to the best — not just the ones whose families can afford it."
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(35,56,73,0.4)' }}>
            Sam Mitchell · NBA Coach of the Year
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
      `}</style>
    </section>
  )
}

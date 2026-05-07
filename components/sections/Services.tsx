'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const SERVICES = [
  {
    icon: '◈',
    title: 'Performance Analytics & Intelligence',
    description: 'Data-driven performance assessment across 7 dimensions. Position-specific gap analysis, competitive benchmarking, and evidence-based development roadmaps.',
  },
  {
    icon: '◉',
    title: 'Sports Organization Advisory',
    description: 'Governance structure, leadership alignment, and operational strategy for sports organizations at every level — from emerging programs to institutional franchises.',
  },
  {
    icon: '◎',
    title: 'Athlete & Executive Talent Strategy',
    description: 'End-to-end talent lifecycle management: identification, development, transition, and post-career positioning for athletes and sports executives alike.',
  },
  {
    icon: '◇',
    title: 'Commercial Rights & Revenue Optimization',
    description: 'Sponsorship valuation, NIL strategy, broadcast rights structuring, and partnership frameworks that turn athletic assets into durable revenue streams.',
  },
  {
    icon: '◈',
    title: 'Sports Media & Brand Positioning',
    description: 'Brand architecture, media rights strategy, and narrative development for organizations building long-term market presence and institutional authority.',
  },
  {
    icon: '◉',
    title: 'Governance & Compliance Advisory',
    description: 'NCAA, NAIA, and professional league compliance frameworks. Policy design, eligibility monitoring, and risk mitigation for programs operating at the highest levels.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#EEF2F7', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}
        >
          <motion.p variants={fadeUp} className="section-label">
            Sports Department Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#003F74', maxWidth: 520 }}
          >
            Advisory built for the business of sport.
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
          className="services-grid"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 12px 48px rgba(35, 56, 73, 0.16)' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="service-card"
              style={{
                position: 'relative',
                backgroundColor: '#FFFFFF',
                borderRadius: 6,
                padding: '2rem',
                boxShadow: '0 4px 32px rgba(35, 56, 73, 0.08)',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Top accent line — expands from center on hover via CSS */}
              <div className="service-card-accent" />

              {/* Icon */}
              <div style={{ fontSize: '1.25rem', color: '#003F74', marginBottom: '1rem', opacity: 0.7 }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 600,
                  color: '#003F74',
                  marginBottom: '0.75rem',
                  lineHeight: 1.25,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.7,
                  color: '#5A6A7A',
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 639px)  { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

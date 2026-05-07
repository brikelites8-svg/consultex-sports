'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const INTERESTS = [
  'Athletic Development',
  'NIL Strategy',
  'Academic Success',
  'Financial Literacy',
  'Career Pathway',
  'Sam® Team Dashboard (Coaches)',
  'Sam® League Intelligence (Orgs)',
  'General Inquiry',
]

const fieldBase: React.CSSProperties = {
  width: '100%',
  fontFamily: 'var(--font-ui)',
  fontSize: 'var(--text-body)',
  color: '#001E3A',
  backgroundColor: '#EEF2F7',
  border: '1px solid rgba(35,56,73,0.22)',
  borderRadius: 3,
  padding: '0.875rem 1rem',
  outline: 'none',
  transition: 'border-color 200ms',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-ui)',
  fontSize: 'var(--text-label)',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '0.45rem',
}

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null)

  function fp(name: string) {
    return {
      onFocus: () => setFocused(name),
      onBlur:  () => setFocused(null),
      style: { ...fieldBase, ...(focused === name ? { borderColor: '#F5A623' } : {}) },
    }
  }

  return (
    <section id="contact" style={{ backgroundColor: '#001E3A', padding: 'var(--space-section) 0', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.015 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)', textAlign: 'center' }}
        >
          <motion.p variants={fadeUp} className="section-label-light">Ready to Talk? Book a Demo</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#FFFFFF', marginBottom: '1rem' }}>
            Where will your career take you?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
            Book a demo and start your journey towards the athlete you're built to become.
          </motion.p>
        </motion.div>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          onSubmit={e => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {/* Name row */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
            <div>
              <label style={labelStyle}>First Name</label>
              <input type="text" placeholder="First name" {...fp('first')} />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input type="text" placeholder="Last name" {...fp('last')} />
            </div>
          </motion.div>

          {/* Email + Phone */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="your@email.com" {...fp('email')} />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input type="tel" placeholder="(555) 000-0000" {...fp('phone')} />
            </div>
          </motion.div>

          {/* Company + Zip */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
            <div>
              <label style={labelStyle}>Company / Organization</label>
              <input type="text" placeholder="Organization name" {...fp('company')} />
            </div>
            <div>
              <label style={labelStyle}>Business Zip Code</label>
              <input type="text" placeholder="30101" {...fp('zip')} />
            </div>
          </motion.div>

          {/* Job Title + Employee Count */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
            <div>
              <label style={labelStyle}>Job Title</label>
              <input type="text" placeholder="Your role" {...fp('title')} />
            </div>
            <div>
              <label style={labelStyle}>
                Employee Count
                <span className="tooltip-wrapper" style={{ marginLeft: 5 }}>
                  <span className="tooltip-trigger" tabIndex={0}>(i)</span>
                  <span className="tooltip-content">For leagues and organizations, this is the approximate number of athletes in your program.</span>
                </span>
              </label>
              <input type="number" placeholder="e.g. 50" min="1" {...fp('count')} />
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={fadeUp}>
            <label style={labelStyle}>What Are Your Interests</label>
            <select {...fp('interests')} style={{ ...fieldBase, ...(focused === 'interests' ? { borderColor: '#F5A623' } : {}), cursor: 'pointer' }}>
              <option value="">Select an area</option>
              {INTERESTS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </motion.div>

          {/* Biggest problem */}
          <motion.div variants={fadeUp}>
            <label style={labelStyle}>What's the biggest problem that keeps you up at night?</label>
            <textarea
              rows={4}
              placeholder="Describe your situation in plain English — no jargon required."
              {...fp('problem')}
              style={{ ...fieldBase, ...(focused === 'problem' ? { borderColor: '#F5A623' } : {}), resize: 'vertical', minHeight: 96 }}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
            <motion.button
              type="submit"
              whileHover={{ opacity: 0.88, y: -1 }}
              transition={{ duration: 0.22 }}
              style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: '#F5A623', color: '#FFFFFF', border: 'none', borderRadius: 3, padding: '1rem', cursor: 'pointer' }}
            >
              What can we help you achieve? — Take Action
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF', y: -1 }}
              transition={{ duration: 0.22 }}
              style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 3, padding: '1rem', cursor: 'pointer' }}
            >
              Where will your career take you? — Take Action
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 639px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

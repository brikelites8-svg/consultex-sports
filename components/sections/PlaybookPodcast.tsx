'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const TOPICS = [
  'What college coaches really look for in a recruit',
  'NIL — what athletes get right and what costs them',
  'Financial literacy when the money starts coming in',
  'Life after the sport — the transition nobody prepares for',
  'How to balance academics and athletics at every level',
]

const EPISODES = [
  { topic: 'Recruiting',         title: '"The 10 things that eliminate a recruit before we watch a single film clip"', guest: 'D1 Head Coach' },
  { topic: 'NIL Strategy',       title: '"The NIL mistakes that end careers before they start"',                       guest: 'Sports NIL Attorney' },
  { topic: 'Financial Literacy', title: '"78% of NFL players are broke within 5 years — here\'s why"',                guest: 'Sports Financial Advisor' },
  { topic: 'Life After Sports',  title: '"What nobody told me about going pro — and what I wish they had"',           guest: 'Former NBA Player' },
]

export default function PlaybookPodcast() {
  return (
    <section id="podcast" style={{ backgroundColor: '#fefefe', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }} className="podcast-grid">

          {/* Left: intro */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <motion.p variants={fadeUp} className="section-label">Now Launching</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#233849', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              The Playbook with Sam Mitchell
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', fontWeight: 400, color: '#233849', marginBottom: '1.25rem', lineHeight: 1.4 }}>
              The show every athlete family needs — and has never had.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.75, color: '#5A6A7A', marginBottom: '2rem' }}>
              Sam Mitchell sits down weekly with the people who hold the keys to every young
              athlete's future — coaches, college recruiters, NIL attorneys, financial advisors,
              and athletes themselves. Every episode ends with Sam's direct coaching note to the
              listener. Long-form. Honest. Actionable.
            </motion.p>

            {/* Topics */}
            <motion.ul variants={staggerContainer} style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {TOPICS.map(topic => (
                <motion.li key={topic} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#1e70a0', flexShrink: 0, marginTop: 4, fontSize: '0.6rem' }}>◆</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', lineHeight: 1.6, color: '#5A6A7A' }}>{topic}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <motion.a
                href="#contact"
                whileHover={{ opacity: 0.88, y: -1 }}
                transition={{ duration: 0.22 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#233849', textDecoration: 'none', borderBottom: '1px solid rgba(35,56,73,0.3)', paddingBottom: 2 }}
              >
                Subscribe to the Playbook →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: episodes */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(35,56,73,0.45)', marginBottom: '1.25rem' }}>
              Upcoming Episodes
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(35,56,73,0.08)', borderRadius: 6, overflow: 'hidden' }}>
              {EPISODES.map((ep) => (
                <motion.div
                  key={ep.topic}
                  variants={fadeUp}
                  whileHover={{ backgroundColor: '#FFFFFF' }}
                  transition={{ duration: 0.22 }}
                  style={{ backgroundColor: '#f0f0f4', padding: '1.5rem', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1.25rem', alignItems: 'start', cursor: 'default' }}
                >
                  <div>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1e70a0', marginBottom: '0.25rem' }}>
                      {ep.topic}
                    </p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'rgba(35,56,73,0.4)', letterSpacing: '0.04em' }}>
                      {ep.guest}
                    </p>
                  </div>
                  <p style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', fontStyle: 'italic', color: '#233849', lineHeight: 1.45 }}>
                    {ep.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .podcast-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

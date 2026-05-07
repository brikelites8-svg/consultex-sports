'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const CAPABILITIES = [
  {
    id: 'player',
    label: 'Player',
    image: '/sports/player.jpg',
    content: "At Culturefy, we prioritize the personal and professional development of every player. Our AI-driven platform offers personalized recommendations to enhance skills based on shot chart analysis, physical conditioning, and historical performance trends. Players can log training sessions and receive alerts on potential injury risks, ensuring optimal performance with minimal downtime. Additionally, our AI-driven OKR (Objectives and Key Results) tracking aligns individual performance goals with team strategies, motivating and rewarding players for their contributions to overall success."
  },
  {
    id: 'coaching',
    label: 'Coaching Staff',
    image: '/sports/coaching.jpg',
    content: "Our solutions empower coaching staff with data-driven strategies to develop effective offensive and defensive game plans. By analyzing shot charts and matchup data, coaches can tailor their strategies to leverage each player's strengths and exploit opposition weaknesses. Culturefy's platform also optimizes starting lineups and rotations based on real-time player health, fatigue levels, and matchup data. Coaches can monitor player compliance with training programs, adapt drills to address specific weaknesses, and track fitness improvements over time, ensuring that every player performs at their best."
  },
  {
    id: 'executive',
    label: 'Executive Team',
    image: '/sports/executive.jpg',
    content: "Culturefy supports the executive team in making informed decisions that drive team success. Our AI tools analyze prospective players to identify those who align with team needs and culture, uncovering undervalued opportunities in the talent market. Executive teams can evaluate contracts and salaries against performance metrics, ensuring competitiveness while managing budgets effectively. Moreover, our \"Fused Intelligence\" strategies foster a collaborative organizational culture, where continuous feedback loops help align staff at all levels with the team's shared vision."
  }
]

export default function SportsCapabilities() {
  const [activeTab, setActiveTab] = useState('player')
  const active = CAPABILITIES.find(c => c.id === activeTab)!

  return (
    <section style={{ backgroundColor: '#EEF2F7', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#003F74', marginBottom: '1rem' }}>
            CAPABILITIES
          </p>
          <h2 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#003F74', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Sports Capabilities.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: '#3A4754', maxWidth: 680, lineHeight: 1.6 }}>
            Culturefy delivers tailored experiences for athletes, coaches, and organizations — all through one platform built to develop performance, strengthen decision-making, and support every stage of the journey.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(0,63,116,0.1)' }}>
          {CAPABILITIES.map(cap => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '1rem 0',
                cursor: 'pointer',
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-label)',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: activeTab === cap.id ? '#003F74' : '#3A4754',
                borderBottom: activeTab === cap.id ? '2px solid #003F74' : 'none',
                transition: 'all 200ms'
              }}
            >
              {cap.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'flex-start' }}
          className="capabilities-grid"
        >
          <div style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img src={active.image} alt={active.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: '#3A4754', lineHeight: 1.8 }}>
            {active.content}
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

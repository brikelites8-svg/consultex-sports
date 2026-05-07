'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE, EASE_OUT } from '@/lib/animations'

const FAQS = [
  {
    q: 'What is Fused Intelligence™?',
    a: 'Fused Intelligence™ is Consultex\'s proprietary methodology — the combination of senior human advisor judgment and agentic execution capacity. Every Robi® engagement draws on both institutional knowledge and real-time analytical capability. It is not AI-powered consulting. It is consulting, executed with greater speed and precision than any traditional model.',
  },
  {
    q: 'Who is Robi®?',
    a: 'Robi® is a consultant — the client-facing intelligence that delivers Consultex\'s advisory output. Every Strategic Briefing, deal review, and engagement runs through Robi®. Think of Robi® as your senior advisor on call: not a chatbot, not a dashboard, but a structured consulting intelligence that delivers specific, defensible recommendations.',
  },
  {
    q: 'What makes Consultex Sports different from a traditional sports consultancy?',
    a: 'Traditional firms deliver findings six weeks after the decision window closes. Consultex Sports delivers a Strategic Briefing within hours of brief submission — with the same rigor, specificity, and defensibility you\'d expect from a Fortune 500 engagement. We combine the institutional depth of a tier-one advisory firm with the responsiveness of a system that never sleeps.',
  },
  {
    q: 'What types of organizations does Consultex Sports serve?',
    a: 'Sports organizations at every stage: emerging programs building their first governance structure, established teams navigating commercial rights negotiations, leagues designing compliance frameworks, and institutional investors evaluating sports assets. Our advisory covers the full lifecycle of the business of sport.',
  },
  {
    q: 'How does the engagement process work?',
    a: 'Every engagement begins with a Strategic Discovery session — a structured intake where we assess your situation, objectives, and immediate priorities. From there, you receive a tailored brief, a proposed scope, and a clear timeline. Most initial Strategic Briefings are delivered within 48 hours of complete brief submission.',
  },
  {
    q: 'Is Consultex Sports available for one-off advisory engagements?',
    a: 'Yes. In addition to retainer arrangements, Consultex Sports takes project-based mandates — specific deal reviews, governance audits, transaction support, and strategic assessments. Contact us to discuss scope and timeline for your specific situation.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(35,56,73,0.1)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: '#001E3A', lineHeight: 1.3 }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          style={{ flexShrink: 0, fontSize: '1.25rem', color: '#001E3A', lineHeight: 1, display: 'flex', alignItems: 'center' }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.75, color: '#5A6A7A', paddingBottom: '1.5rem' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  return (
    <section style={{ backgroundColor: '#EEF2F7', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}
        >
          <motion.p variants={fadeUp} className="section-label">FAQ</motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, fontStyle: 'italic', color: '#001E3A' }}
          >
            Questions worth asking.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {FAQS.map(({ q, a }) => (
            <motion.div key={q} variants={fadeUp}>
              <FaqItem q={q} a={a} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

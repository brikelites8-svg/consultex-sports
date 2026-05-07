'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid'
import { Zap, TrendingUp, BookOpen, DollarSign, Compass } from 'lucide-react'

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

const PILLAR_ICONS = [
  <Zap className="w-4 h-4 text-blue-500" />,
  <TrendingUp className="w-4 h-4 text-emerald-500" />,
  <BookOpen className="w-4 h-4 text-purple-500" />,
  <DollarSign className="w-4 h-4 text-sky-500" />,
  <Compass className="w-4 h-4 text-orange-500" />,
]

const bentoItems: BentoItem[] = PILLARS.map((pillar, index) => ({
  title: pillar.title,
  description: pillar.body,
  icon: PILLAR_ICONS[index],
  meta: `Pillar ${pillar.num}`,
  status: 'Essential',
  tags: index === 0 ? ['Training', 'Skills'] :
        index === 1 ? ['Strategy', 'Deals'] :
        index === 2 ? ['Education', 'Support'] :
        index === 3 ? ['Finance', 'Planning'] :
        ['Career', 'Growth'],
  colSpan: index < 3 ? 1 : 1,
}))

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

        {/* Bento Grid Pillars */}
        <BentoGrid items={bentoItems} />
      </div>
    </section>
  )
}

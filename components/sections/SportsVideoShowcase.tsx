'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'
import { VideoPlayer } from '@/components/ui/video-thumbnail-player'
import { BarChart3, Target, Zap } from 'lucide-react'

const BENEFITS = [
  {
    icon: BarChart3,
    title: 'Data-Driven Strategies',
    body: 'Leverage advanced analytics to optimize team performance and athlete development.'
  },
  {
    icon: Target,
    title: 'Proven Results',
    body: 'Demonstrated success in improving team dynamics, athlete retention, and competitive outcomes.'
  },
  {
    icon: Zap,
    title: 'Scalable Solutions',
    body: 'Tailor our approaches to your specific program needs, from youth to professional levels.'
  },
]

export default function SportsVideoShowcase() {
  return (
    <section style={{ backgroundColor: '#F7F9FB', padding: 'var(--space-section) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)', maxWidth: 640 }}
        >
          <motion.p variants={fadeUp} className="section-label">Sports Excellence</motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h2)', fontWeight: 400, color: '#003F74', lineHeight: 1.2, marginBottom: '1rem' }}
          >
            Watch Transformation in Action
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.7, color: '#5A6A7A' }}
          >
            Experience how our consulting transforms athletic programs through strategic excellence and innovative coaching methodologies.
          </motion.p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ maxWidth: 900, margin: '0 auto 4rem' }}
        >
          <VideoPlayer
            thumbnailUrl="/sports_thumbnail.png"
            videoUrl="/sports_video.mp4"
            title="Culturefy Sports Transformation"
            description="See how our sports consulting drives real results"
            aspectRatio="16/9"
            style={{ boxShadow: '0 4px 32px rgba(35,56,73,0.07)' }}
          />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
          className="benefits-grid"
        >
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 12px 48px rgba(35,56,73,0.14)' }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 6,
                  padding: '2rem',
                  boxShadow: '0 4px 32px rgba(35,56,73,0.07)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                  <Icon
                    size={28}
                    style={{ color: '#003F74', flexShrink: 0, marginTop: 2 }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-h3)', fontWeight: 600, color: '#003F74', lineHeight: 1.25, marginBottom: '0.75rem' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', lineHeight: 1.75, color: '#5A6A7A' }}>
                  {benefit.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

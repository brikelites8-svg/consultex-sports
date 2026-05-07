'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function SamQuote() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef     = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video     = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const onScroll = () => {
      if (!video.duration) return
      const rect     = container.getBoundingClientRect()
      const maxScroll = container.offsetHeight - window.innerHeight
      if (maxScroll <= 0) return
      // progress: 0 when section enters, 1 when section exits
      const progress = Math.max(0, Math.min(1, -rect.top / maxScroll))
      video.currentTime = progress * video.duration
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // run once on mount to set frame 0
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    // Outer container is 3× viewport tall — provides the scroll distance to scrub through
    <div ref={containerRef} style={{ position: 'relative', height: '300vh' }}>

      {/* Sticky viewport-height panel */}
      <div style={{ position: 'sticky', top: 0, height: '100svh', overflow: 'hidden' }}>

        {/* Video background */}
        <video
          ref={videoRef}
          src="/vidbg.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />

        {/* Navy overlay — keeps legibility, honors brand deep navy */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(35,56,73,0.72) 0%, rgba(35,56,73,0.62) 50%, rgba(35,56,73,0.78) 100%)',
        }} />

        {/* Decorative quote mark */}
        <div style={{
          position: 'absolute', top: '-2rem', left: '3%',
          fontFamily: 'var(--font-editorial)',
          fontSize: 'clamp(12rem, 20vw, 22rem)',
          lineHeight: 1,
          color: 'rgba(30,112,160,0.08)',
          fontWeight: 300,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 1,
        }}>
          "
        </div>

        {/* Quote content */}
        <div style={{
          position: 'relative', zIndex: 2,
          height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          maxWidth: 960, margin: '0 auto', padding: '0 2rem',
          textAlign: 'center',
        }}>

          <motion.blockquote
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, margin: '0px 0px -100px 0px' }}
            style={{ margin: 0 }}>
            <p style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.5,
              color: '#FFFFFF',
              marginBottom: '2.5rem',
            }}>
              "I've seen thousands of talented kids never get their shot — not because they
              weren't good enough, but because nobody ever gave them a real plan. Sam® is that
              plan. And I'm that someone. For every athlete."
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, margin: '0px 0px -100px 0px' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: false, margin: '0px 0px -100px 0px' }}
              style={{ width: 40, height: 1, background: '#F5A623', margin: '0 auto 1.5rem', originX: 0.5 }} />
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-label)',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}>
              Sam Mitchell · NBA Coach of the Year · Head of Sports Practice, Consultex
            </p>
          </motion.div>
        </div>

        {/* Subtle scroll hint — fades as user scrolls */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          zIndex: 2,
        }}>
          <span style={{
            fontFamily: 'var(--font-ui)', fontSize: '0.6rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)',
          }}>
            Scroll
          </span>
          <div style={{
            width: 1, height: 36,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)',
          }} />
        </div>
      </div>
    </div>
  )
}

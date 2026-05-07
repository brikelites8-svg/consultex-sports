'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/animations'

const LINKS = {
  'Product': ['Home', 'Solutions', 'Pricing', 'Integrations'],
  'Company': ['About', 'Events', 'Our Team', 'Insights', 'Blog'],
  'Support': ['Contact', 'Support', 'FAQs', 'Privacy Policy', 'Security', 'Terms of Service'],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#003F74', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem 2.5rem' }}>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}
          className="footer-grid"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <div style={{ marginBottom: '1.5rem' }}>
              <img src="/Consultex_LogoWhite.png" alt="Consultex Sports" style={{ height: 50, width: 'auto' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '1.5rem' }}>
              Human Expertise, Agentic Execution
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:info@consultexai.com" style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
                info@consultexai.com
              </a>
              <a href="tel:8662616030" style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
                866-261-6030
              </a>
            </div>

            {/* Quick hire CTA */}
            <div style={{ marginTop: '1.75rem' }}>
              <a
                href="#how-it-works"
                style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.2rem', border: '1px solid rgba(30,112,160,0.4)', color: '#F5A623', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}
              >
                Hire Robi® →
              </a>
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <motion.div key={heading} variants={fadeUp}>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '1.25rem' }}>
                {heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 200ms' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '1.75rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', color: 'rgba(255,255,255,0.25)' }}>
            © 2026 Consultex All Rights Reserved. Various trademarks held by their respective owners.
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', color: 'rgba(255,255,255,0.25)' }}>
            2487 Cedarcrest Rd. Ste 712, Acworth, GA 30101, United States
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 639px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}

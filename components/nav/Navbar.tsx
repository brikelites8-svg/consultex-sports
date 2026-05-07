'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE_OUT } from '@/lib/animations'

const NAV_LINKS = [
  { label: 'Home',       href: '#' },
  { label: 'Solutions',  href: '#pillars' },
  { label: 'Pricing',    href: '#pricing' },
  { label: 'Hire Robi®', href: '#how-it-works' },
  { label: 'Insights',   href: '#podcast' },
  { label: 'About',      href: '#sam-mitchell' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'backdrop-filter 300ms, background 300ms',
        background: scrolled ? 'rgba(35,56,73,0.9)' : '#003F74',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Top bar: phone + label */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.35rem 2rem', display: 'flex', justifyContent: 'space-between', maxWidth: 1280, margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          Expertise, Executed.
        </span>
        <a href="tel:8662616030" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          866-261-6030 · Sales US
        </a>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.4rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.03em' }}>
            Consultex
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
            Sports
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden-mobile">
          <motion.a
            href="#pricing"
            whileHover={{ backgroundColor: '#F5A623', color: '#003F74' }}
            transition={{ duration: 0.22 }}
            style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.4rem', border: '1px solid #F5A623', color: '#F5A623', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}
          >
            Get Your Playbook
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={mobileOpen ? (i === 0 ? { rotate: 45, y: 10 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -10 }) : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: 'block', width: 22, height: 1.5, backgroundColor: '#FFFFFF', borderRadius: 1 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div style={{ padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#003F74' }}>
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                  {link.label}
                </a>
              ))}
              <a href="#pricing" onClick={() => setMobileOpen(false)}
                style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.7rem', border: '1px solid #F5A623', color: '#F5A623', borderRadius: 3, textDecoration: 'none', textAlign: 'center', marginTop: 8 }}>
                Get Your Playbook
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) { .show-mobile  { display: none !important; } }
        @media (max-width: 1023px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </motion.nav>
  )
}

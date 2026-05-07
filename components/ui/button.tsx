'use client'

import { forwardRef } from 'react'

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'ai'
type ButtonSize    = 'sm' | 'md' | 'lg'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const BASE: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  fontFamily: 'var(--font-ui)', fontWeight: 600, cursor: 'pointer',
  borderRadius: 6, transition: 'all 220ms ease',
  letterSpacing: '0.08em', textTransform: 'uppercase',
  textDecoration: 'none', border: 'none',
}

const SIZES: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '0.45rem 1.1rem', fontSize: '0.75rem' },
  md: { padding: '0.7rem 1.6rem',  fontSize: '0.8rem' },
  lg: { padding: '0.875rem 2rem',  fontSize: '0.875rem' },
}

const VARIANTS: Record<ButtonVariant, React.CSSProperties> = {
  default: { background: '#F5A623', color: '#FFFFFF' },
  outline: {
    background: 'transparent', color: '#F5A623',
    border: '1px solid #F5A623',
  },
  ghost: { background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.25)' },
  ai:    { background: '#003F74', color: '#FFFFFF' },
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', style, ...props }, ref) => (
    <button
      ref={ref}
      style={{ ...BASE, ...SIZES[size], ...VARIANTS[variant], ...style }}
      {...props}
    />
  )
)
Button.displayName = 'Button'

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-akton-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-akton-950/50'
          : 'bg-akton-950/80 backdrop-blur-xl border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* ---- Logo ---- */}
          <a href="#" className="group flex items-center gap-2 shrink-0">
            {/* Lightning bolt icon */}
            <svg
              viewBox="0 0 28 28"
              fill="none"
              className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3366ff" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path
                d="M16.5 2L6 16h7l-1.5 10L22 12h-7l1.5-10z"
                fill="url(#bolt-grad)"
                stroke="url(#bolt-grad)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-akton-400 to-cyber-400 bg-clip-text text-transparent">
                Akton
              </span>
              <span className="text-white">AI</span>
            </span>
          </a>

          {/* ---- Desktop links (centered) ---- */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-akton-400 rounded-lg hover:bg-white/5"
              >
                {label}
              </a>
            ))}
          </div>

          {/* ---- Desktop CTA ---- */}
          <div className="hidden md:block shrink-0">
            <a
              href="#book-a-call"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-akton-500 to-cyber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-akton-500/25 transition-all duration-300 hover:shadow-akton-500/40 hover:brightness-110 active:scale-[0.97]"
            >
              Book a Call
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* ---- Mobile toggle ---- */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative z-50 rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ---- Mobile menu ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-akton-950/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-1">
                {navLinks.map(({ label, href }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-akton-400"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                className="mt-4 pt-4 border-t border-white/10"
              >
                <a
                  href="#book-a-call"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-akton-500 to-cyber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-akton-500/25 transition-all duration-300 hover:shadow-akton-500/40 hover:brightness-110 active:scale-[0.97]"
                >
                  Book a Call
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

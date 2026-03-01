'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-akton-950 via-akton-900 to-akton-950 py-28 sm:py-36">
      {/* ---- Floating gradient orb ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[480px] w-[480px] rounded-full bg-gradient-to-br from-akton-500/25 via-cyber-500/15 to-akton-600/20 blur-[120px] animate-pulse-slow" />
      </div>

      {/* ---- Subtle dot pattern overlay ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
        >
          Ready to <span className="gradient-text">10x</span> Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          Join 50+ companies already transforming their operations with AI
          agents. Get a free consultation and see how AktonAI can work for you.
        </motion.p>

        {/* ---- Buttons ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Primary button */}
          <a
            href="#book-a-call"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-akton-500 to-cyber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-akton-500/25 transition-all duration-300 hover:shadow-akton-500/50 hover:shadow-xl hover:brightness-110 active:scale-[0.97]"
          >
            Book a Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary button */}
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white/80 transition-all duration-300 glass hover:bg-white/10 hover:text-white active:scale-[0.97]"
          >
            See Pricing
          </a>
        </motion.div>

        {/* ---- Disclaimer ---- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-8 text-sm text-white/40"
        >
          No commitment required. Free 30-minute strategy session.
        </motion.p>
      </div>
    </section>
  )
}

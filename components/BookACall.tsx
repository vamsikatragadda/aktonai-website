'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'
import { CALENDLY_EMBED_URL } from '@/lib/constants'

export default function BookACall() {
  return (
    <section
      id="book-a-call"
      className="relative w-full overflow-hidden bg-[#050505] py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Book a <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Pick a 30-minute slot that works for you. No commitment required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 sm:mt-12 -mx-4 sm:mx-0"
        >
          <div className="calendly-embed-shell overflow-hidden sm:rounded-2xl sm:border sm:border-white/10">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_EMBED_URL}
              data-resize="true"
            />
          </div>
        </motion.div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  )
}

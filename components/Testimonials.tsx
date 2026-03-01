'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    quote:
      "AktonAI transformed our customer service. Their AI agents handle 80% of inquiries autonomously, and our customers can't tell the difference.",
    name: 'Sarah Chen',
    title: 'VP Operations',
    company: 'TechScale Inc.',
    initials: 'SC',
    gradientFrom: 'from-akton-500',
    gradientTo: 'to-cyber-500',
  },
  {
    quote:
      'The ROI was immediate. Within 30 days, we saw a 5x return on our investment. The team at AktonAI truly understands business automation.',
    name: 'Marcus Rivera',
    title: 'CEO',
    company: 'DataFlow Solutions',
    initials: 'MR',
    gradientFrom: 'from-cyber-400',
    gradientTo: 'to-akton-400',
  },
  {
    quote:
      "What sets AktonAI apart is their approach\u2014they don't just build AI, they build AI that actually works for your specific business needs.",
    name: 'Emily Watson',
    title: 'COO',
    company: 'Meridian Health',
    initials: 'EW',
    gradientFrom: 'from-akton-400',
    gradientTo: 'to-cyber-500',
  },
]

/* ------------------------------------------------------------------ */
/*  Star rating                                                        */
/* ------------------------------------------------------------------ */
function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Testimonial card                                                   */
/* ------------------------------------------------------------------ */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      {/* Hover glow ring */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
        aria-hidden
      />

      <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden flex flex-col">
        {/* Top accent line */}
        <div
          className={`h-[2px] bg-gradient-to-r ${testimonial.gradientFrom} ${testimonial.gradientTo}`}
        />

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          {/* Large quote mark */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="h-10 w-10 mb-4 opacity-20"
            aria-hidden="true"
          >
            <path
              d="M12.5 20H7.5C7.5 14.477 11.977 10 17.5 10V15C14.738 15 12.5 17.238 12.5 20ZM12.5 20V30H2.5V20"
              stroke="url(#quote-grad-a)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.5 20H27.5C27.5 14.477 31.977 10 37.5 10V15C34.738 15 32.5 17.238 32.5 20ZM32.5 20V30H22.5V20"
              stroke="url(#quote-grad-b)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="quote-grad-a" x1="2.5" y1="10" x2="17.5" y2="30">
                <stop stopColor="#3366ff" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="quote-grad-b" x1="22.5" y1="10" x2="37.5" y2="30">
                <stop stopColor="#3366ff" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Star rating */}
          <StarRating />

          {/* Quote */}
          <blockquote className="mt-5 flex-1">
            <p className="text-base sm:text-lg leading-relaxed text-white/70">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Author */}
          <div className="flex items-center gap-4">
            {/* Avatar – gradient circle with initials */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} ring-2 ring-white/10`}
            >
              <span className="text-sm font-bold text-white select-none">
                {testimonial.initials}
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs text-white/40">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-akton-950 via-akton-950/95 to-akton-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(6,182,212,0.12), transparent)',
        }}
      />
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-cyber-500/30 bg-cyber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyber-400 mb-4"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-akton-400 to-cyber-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/50"
          >
            Trusted by forward-thinking companies to deliver real business outcomes.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

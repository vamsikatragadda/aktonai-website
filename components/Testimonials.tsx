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
      "AktonAI didn't just automate our support\u2014they made our entire customer experience AI-native. 80% of inquiries are handled autonomously, and satisfaction is at an all-time high.",
    name: 'Sarah Chen',
    title: 'VP Operations',
    company: 'TechScale Inc.',
    initials: 'SC',
    gradientFrom: 'from-white',
    gradientTo: 'to-gray-400',
  },
  {
    quote:
      "Within 30 days we saw 5x ROI. AktonAI's approach to making businesses AI-native is unlike anything else in the market.",
    name: 'Marcus Rivera',
    title: 'CEO',
    company: 'DataFlow Solutions',
    initials: 'MR',
    gradientFrom: 'from-gray-400',
    gradientTo: 'to-white',
  },
  {
    quote:
      "What makes AktonAI different is they don't bolt on AI\u2014they weave it into your operations so deeply it becomes part of your company's DNA.",
    name: 'Emily Watson',
    title: 'COO',
    company: 'Meridian Health',
    initials: 'EW',
    gradientFrom: 'from-white/80',
    gradientTo: 'to-gray-400',
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

      <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] shadow-sm overflow-hidden flex flex-col">
        {/* Top accent line */}
        <div
          className={`h-[2px] bg-gradient-to-r ${testimonial.gradientFrom} ${testimonial.gradientTo}`}
        />

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          {/* Large quote mark – gradient */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="h-10 w-10 mb-4 opacity-30"
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
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#A3A3A3" />
              </linearGradient>
              <linearGradient id="quote-grad-b" x1="22.5" y1="10" x2="37.5" y2="30">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#A3A3A3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Star rating */}
          <StarRating />

          {/* Quote */}
          <blockquote className="mt-5 flex-1">
            <p className="text-base sm:text-lg leading-relaxed text-white/50">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Author */}
          <div className="flex items-center gap-4">
            {/* Avatar – gradient circle with initials */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} ring-2 ring-white/[0.06]`}
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
      className="relative py-24 sm:py-32 overflow-hidden bg-white/[0.03]"
    >
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
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
            className="inline-block rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 mb-4"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span className="text-white">Trusted by </span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/50"
          >
            Hear from the leaders who made their businesses AI-native with AktonAI.
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

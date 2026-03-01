'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, HeartPulse, FileCheck } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animated counter – counts from 0 to `target` when in view         */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  inView,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = target / (duration * 60) // ~60 fps
    let raf: number

    const step = () => {
      start += increment
      if (start >= target) {
        setCount(target)
        return
      }
      setCount(Math.floor(start))
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const caseStudies = [
  {
    icon: ShoppingCart,
    category: 'E-Commerce Brand',
    description: 'Automated customer support and order management',
    results: [
      '73% reduction in support tickets',
      '40% increase in customer satisfaction',
      '$2M+ saved annually',
    ],
    keyMetric: { value: 73, suffix: '%', label: 'Reduction in Support Tickets' },
    gradient: 'from-akton-500 to-akton-400',
    glowColor: 'shadow-akton-500/20',
    iconBg: 'bg-akton-500/10',
    iconColor: 'text-akton-400',
  },
  {
    icon: HeartPulse,
    category: 'Healthcare Provider',
    description: 'AI-powered patient scheduling and follow-up',
    results: [
      '60% reduction in no-shows',
      '45% less admin overhead',
      '3x faster patient onboarding',
    ],
    keyMetric: { value: 60, suffix: '%', label: 'Reduction in No-Shows' },
    gradient: 'from-cyber-500 to-cyber-400',
    glowColor: 'shadow-cyber-500/20',
    iconBg: 'bg-cyber-500/10',
    iconColor: 'text-cyber-400',
  },
  {
    icon: FileCheck,
    category: 'Financial Services',
    description: 'Intelligent document processing and compliance',
    results: [
      '90% faster document review',
      '99.2% accuracy rate',
      '50% reduction in compliance costs',
    ],
    keyMetric: { value: 90, suffix: '%', label: 'Faster Document Review' },
    gradient: 'from-akton-400 to-cyber-400',
    glowColor: 'shadow-akton-400/20',
    iconBg: 'bg-akton-400/10',
    iconColor: 'text-akton-300',
  },
]

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */
function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = study.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      {/* Gradient top border */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
        aria-hidden
      />
      <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden">
        {/* Top accent line */}
        <div className={`h-[2px] bg-gradient-to-r ${study.gradient}`} />

        <div className="p-6 sm:p-8 flex flex-col h-full">
          {/* Icon + Category */}
          <div className="flex items-center gap-4 mb-5">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${study.iconBg} ring-1 ring-white/[0.06]`}
            >
              <Icon className={`h-6 w-6 ${study.iconColor}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{study.category}</h3>
              <p className="text-sm text-white/50 mt-0.5">{study.description}</p>
            </div>
          </div>

          {/* Key metric – animated counter */}
          <div className="mb-6 flex flex-col items-center py-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span
              className={`text-5xl sm:text-6xl font-extrabold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent leading-none`}
            >
              <AnimatedCounter
                target={study.keyMetric.value}
                suffix={study.keyMetric.suffix}
                inView={inView}
              />
            </span>
            <span className="mt-2 text-sm font-medium text-white/40 tracking-wide uppercase">
              {study.keyMetric.label}
            </span>
          </div>

          {/* Results list */}
          <ul className="space-y-3 mt-auto">
            {study.results.map((result, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 + i * 0.1 }}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`h-5 w-5 shrink-0 ${study.iconColor}`}
                  aria-hidden="true"
                >
                  <path
                    d="M16.25 5.75L7.75 14.25L3.75 10.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {result}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Results() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="results"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-akton-950 via-akton-950/95 to-akton-950" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(51,102,255,0.15), transparent)',
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-akton-500/30 bg-akton-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-akton-400 mb-4"
          >
            Results
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span className="text-white">Real Impact, </span>
            <span className="bg-gradient-to-r from-akton-400 to-cyber-400 bg-clip-text text-transparent">
              Real Numbers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/50"
          >
            See how businesses across industries are achieving measurable results with AktonAI.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.category} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

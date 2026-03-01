'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Cpu, Rocket, TrendingUp, type LucideIcon } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description:
      'We dive deep into your business processes, identify automation opportunities, and define the perfect AI agent strategy.',
  },
  {
    number: '02',
    title: 'Design & Build',
    icon: Cpu,
    description:
      'Our team architects and develops custom AI agents using cutting-edge models, trained specifically on your data and workflows.',
  },
  {
    number: '03',
    title: 'Deploy & Integrate',
    icon: Rocket,
    description:
      'We seamlessly integrate your AI agents with existing tools\u2014CRMs, ERPs, communication platforms\u2014and launch them into production.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    icon: TrendingUp,
    description:
      'Continuous monitoring, fine-tuning, and scaling ensures your AI agents keep delivering exceptional results as your business grows.',
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Step number circle with gradient border */}
      <div className="relative mb-6">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-akton-500 to-cyber-500 opacity-20 blur-xl scale-150 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Gradient border ring */}
        <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-akton-500 via-cyber-400 to-akton-500">
          <div className="w-full h-full rounded-full bg-akton-950 flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-r from-akton-400 to-cyber-400 bg-clip-text text-transparent">
              {step.number}
            </span>
          </div>
        </div>

        {/* Icon badge */}
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-akton-500 to-cyber-500 flex items-center justify-center shadow-lg shadow-akton-500/30">
          <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-akton-300 transition-colors duration-300">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/50 max-w-[260px] group-hover:text-white/70 transition-colors duration-300">
        {step.description}
      </p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-akton-950" />
      <div className="absolute inset-0 dot-pattern" />

      {/* Subtle radial glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-akton-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-akton-400 uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            From Idea to Deployment in{' '}
            <span className="bg-gradient-to-r from-akton-400 to-cyber-400 bg-clip-text text-transparent">
              Weeks, Not Months
            </span>
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* -------- Desktop connecting line (horizontal) -------- */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-[2px]">
            {/* Track background */}
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            {/* Animated gradient fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-akton-500 via-cyber-500 to-akton-500"
            />
            {/* Shimmering highlight */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={isInView ? { x: '200%' } : { x: '-100%' }}
              transition={{ duration: 2, delay: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            />
          </div>

          {/* -------- Tablet connecting line (horizontal) -------- */}
          <div className="hidden md:block lg:hidden absolute top-10 left-[calc(25%+10px)] right-[calc(25%+10px)] h-[2px]">
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-akton-500 via-cyber-500 to-akton-500"
            />
          </div>

          {/* -------- Mobile connecting line (vertical) -------- */}
          <div className="md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px]">
            {/* Track background */}
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            {/* Animated gradient fill */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-akton-500 via-cyber-500 to-akton-500"
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

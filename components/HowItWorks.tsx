'use client'

import { motion } from 'framer-motion'
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
    title: 'Discovery & Strategy',
    icon: Search,
    description:
      'We audit your operations, identify high-impact AI opportunities, and design a roadmap to make your business AI-native.',
  },
  {
    number: '02',
    title: 'Design & Build',
    icon: Cpu,
    description:
      'Our team builds custom AI agents using state-of-the-art models, fine-tuned on your data and integrated with your tech stack.',
  },
  {
    number: '03',
    title: 'Deploy & Integrate',
    icon: Rocket,
    description:
      'Seamless deployment across your CRM, ERP, helpdesk, and communication tools—zero disruption to your existing workflows.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    icon: TrendingUp,
    description:
      'Continuous monitoring, performance tuning, and scaling ensures your AI agents improve over time as your business evolves.',
  },
]

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */

/** Container orchestrates staggered children */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

/** Individual step card: fade-up + subtle scale */
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Step number circle: scale-up + fade */
const numberVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Section heading: fade-up */
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ------------------------------------------------------------------ */
/*  StepCard                                                           */
/* ------------------------------------------------------------------ */

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Step number circle with gradient border */}
      <div className="relative mb-6">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-400 opacity-20 blur-xl scale-150 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Gradient border ring — animated scale-up */}
        <motion.div
          variants={numberVariants}
          className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-white/60 via-white to-white/60"
        >
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {step.number}
            </span>
          </div>
        </motion.div>

        {/* Icon badge — pulse on reveal */}
        <motion.div
          whileInView={{ scale: [0.8, 1.05, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg shadow-white/10"
        >
          <Icon className="w-4 h-4 text-black" strokeWidth={2.5} />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/50 max-w-[260px] group-hover:text-white/60 transition-colors duration-300">
        {step.description}
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  HowItWorks                                                         */
/* ------------------------------------------------------------------ */

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Fade-in from top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />
      {/* Fade-out to bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />

      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 dot-pattern" />

      {/* Subtle radial glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header — fade-up on scroll */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/80 uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Go AI-Native in{' '}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Weeks, Not Months
            </span>
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* -------- Desktop connecting line (horizontal) -------- */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-[2px]">
            {/* Track background */}
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            {/* Animated gradient fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-white/60 via-white to-white/60"
            />
            {/* Shimmering highlight */}
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '200%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"
            />
          </div>

          {/* -------- Tablet connecting line (horizontal) -------- */}
          <div className="hidden md:block lg:hidden absolute top-10 left-[calc(25%+10px)] right-[calc(25%+10px)] h-[2px]">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-white/60 via-white to-white/60"
            />
          </div>

          {/* -------- Mobile connecting line (vertical) -------- */}
          <div className="md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px]">
            {/* Track background */}
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            {/* Animated gradient fill */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              style={{ transformOrigin: 'top' }}
              className="absolute inset-0 rounded-full bg-gradient-to-b from-white/60 via-white to-white/60"
            />
          </div>

          {/* Steps grid — staggered card reveals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 lg:gap-6"
          >
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

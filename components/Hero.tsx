"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Floating particles data – scattered across the viewport
const particles = [
  { size: 3, x: "12%", y: "18%", duration: 7, delay: 0 },
  { size: 2, x: "87%", y: "25%", duration: 9, delay: 1.2 },
  { size: 4, x: "70%", y: "70%", duration: 8, delay: 0.5 },
  { size: 2, x: "25%", y: "80%", duration: 10, delay: 2 },
  { size: 3, x: "50%", y: "10%", duration: 6, delay: 0.8 },
  { size: 2, x: "92%", y: "60%", duration: 11, delay: 1.5 },
  { size: 3, x: "8%", y: "55%", duration: 7.5, delay: 0.3 },
  { size: 2, x: "38%", y: "92%", duration: 9.5, delay: 2.5 },
  { size: 4, x: "62%", y: "40%", duration: 8.5, delay: 1 },
  { size: 2, x: "78%", y: "88%", duration: 10, delay: 0.7 },
  { size: 3, x: "18%", y: "38%", duration: 6.5, delay: 1.8 },
  { size: 2, x: "45%", y: "55%", duration: 8, delay: 3 },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-akton-950">
      {/* ----------------------------------------------------------------- */}
      {/* Background layers                                                  */}
      {/* ----------------------------------------------------------------- */}

      {/* Radial light source from top-center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(51,102,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-100" />

      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(51,102,255,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(51,102,255,0.18) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small accent orb */}
      <motion.div
        className="pointer-events-none absolute top-[15%] right-[20%] h-[200px] w-[200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white/20"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ----------------------------------------------------------------- */}
      {/* Content                                                            */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pill / badge */}
        <motion.div variants={fadeUp}>
          <span className="glass gradient-border inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-medium text-white/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-akton-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-akton-500" />
            </span>
            AI-Powered Business Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mt-8 font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          10x Your Business
          <br />
          <span className="gradient-text">with AI Agents</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          We build, deploy, and manage custom AI agents that automate your
          workflows, engage your customers, and drive revenue growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-akton-500 to-cyber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-akton-500/25 transition-all duration-300 hover:shadow-akton-500/40 hover:shadow-xl hover:brightness-110 active:scale-[0.98]">
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            {/* Hover glow overlay */}
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-akton-400 to-cyber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          {/* Secondary CTA */}
          <button className="glass gradient-border group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-[0.98]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            Watch Demo
          </button>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2.5">
            {[
              "from-akton-400 to-akton-600",
              "from-cyber-400 to-cyber-500",
              "from-akton-300 to-cyber-400",
              "from-akton-500 to-akton-700",
              "from-cyber-400 to-akton-400",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded-full border-2 border-akton-950 bg-gradient-to-br ${gradient} flex items-center justify-center text-[10px] font-bold text-white/80`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span className="text-sm text-white/40">
            Trusted by{" "}
            <span className="font-semibold text-white/60">50+</span>{" "}
            businesses worldwide
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom fade-out gradient for seamless transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-akton-950 to-transparent" />
    </section>
  );
}

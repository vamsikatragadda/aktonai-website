"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Particles from "./Particles";

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


// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* ----------------------------------------------------------------- */}
      {/* Background layers                                                  */}
      {/* ----------------------------------------------------------------- */}

      {/* Particles WebGL background */}
      <div className="pointer-events-none absolute inset-0">
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.05}
          particleColors={["#ffffff", "#aaaaaa", "#666666"]}
          moveParticlesOnHover
          particleHoverFactor={0.4}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.5}
          cameraDistance={25}
          className="opacity-60"
        />
      </div>

      {/* Radial light source from top-center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

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
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm px-5 py-2 text-sm font-medium text-white/70 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            AI-Powered Business Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mt-8 font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          We Make Businesses
          <br />
          <span className="relative inline-block bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
            AI-Native
            <span className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent blur-2xl opacity-50" aria-hidden="true">AI-Native</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
        >
          From intelligent automation to custom AI agents, we help companies
          embed AI into every layer of their operations—turning traditional
          businesses into AI-native organizations.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-white to-gray-200 px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-white/15 hover:shadow-xl hover:brightness-110 active:scale-[0.98]">
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            {/* Hover glow overlay */}
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/35">
            Built by engineers from{" "}
            <span className="font-semibold text-white/50">Tesla</span>,{" "}
            <span className="font-semibold text-white/50">Meta</span> &{" "}
            <span className="font-semibold text-white/50">Google</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom fade-out gradient for seamless transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}

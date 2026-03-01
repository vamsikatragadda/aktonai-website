"use client";

import { motion } from "framer-motion";
import { Brain, Database, GitMerge, Bot, Activity } from "lucide-react";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ---------------------------------------------------------------------------
// Card component
// ---------------------------------------------------------------------------

interface TechCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  /** Use gradient accent color for the icon background */
  accent?: "green" | "mint";
  /** Whether this is the large hero card */
  hero?: boolean;
}

function TechCard({
  icon,
  title,
  description,
  className = "",
  accent = "green",
  hero = false,
}: TechCardProps) {
  const accentGradient =
    accent === "mint"
      ? "from-white/[0.06] to-white/[0.02]"
      : "from-white/[0.06] to-white/[0.02]";

  const accentBorder =
    accent === "mint"
      ? "group-hover:border-white/20"
      : "group-hover:border-white/20";

  const iconBg =
    accent === "mint"
      ? "bg-white/[0.05] text-white/70"
      : "bg-white/[0.05] text-white/80";

  return (
    <motion.div
      variants={scaleIn}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${accentBorder} transition-all duration-500 ${className}`}
    >
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accentGradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Dot pattern background */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div
        className={`relative z-10 flex h-full flex-col ${
          hero ? "items-center justify-center p-8 text-center sm:p-12" : "p-6 sm:p-7"
        }`}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center rounded-xl ${iconBg} transition-all duration-300 group-hover:scale-110 ${
            hero ? "mb-6 h-16 w-16" : "mb-4 h-11 w-11"
          }`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold text-white ${
            hero ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`leading-relaxed text-white/50 ${
            hero
              ? "mt-4 max-w-md text-base sm:text-lg"
              : "mt-2 text-sm sm:text-[15px]"
          }`}
        >
          {description}
        </p>

        {/* Decorative animated line for hero card */}
        {hero && (
          <div className="mt-8 flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full bg-gradient-to-r from-white to-gray-400"
                animate={{
                  width: [12, 24, 12],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function TechStack() {
  return (
    <section id="tech" className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
      {/* Fade-in from top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />
      {/* Fade-out to bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />

      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section header */}
        <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Technology
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Powered by{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/50">
            Our platform combines the most advanced AI technologies into a
            seamless, production-ready architecture.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-16 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Row 1 — two small cards + large hero card spanning 2 cols */}

          {/* Small card: Vector Databases */}
          <TechCard
            icon={<Database className="h-5 w-5" />}
            title="Vector Databases"
            description="Lightning-fast semantic search across your entire business data landscape."
            accent="mint"
          />

          {/* Large center card — spans 2 cols and 2 rows */}
          <TechCard
            icon={<Brain className="h-8 w-8" />}
            title="Large Language Models"
            description="Powered by GPT-4, Claude, and custom fine-tuned models for maximum accuracy and reliability."
            accent="green"
            hero
            className="sm:col-span-2 sm:row-span-2"
          />

          {/* Small card: RAG Pipeline */}
          <TechCard
            icon={<GitMerge className="h-5 w-5" />}
            title="RAG Pipeline"
            description="Retrieval-augmented generation for accurate, grounded responses every time."
            accent="green"
          />

          {/* Row 2 — two small cards fill the remaining slots */}

          {/* Small card: Multi-Agent Systems */}
          <TechCard
            icon={<Bot className="h-5 w-5" />}
            title="Multi-Agent Systems"
            description="Coordinated AI agents that collaborate to solve complex tasks autonomously."
            accent="mint"
          />

          {/* Small card: Real-Time Analytics */}
          <TechCard
            icon={<Activity className="h-5 w-5" />}
            title="Real-Time Analytics"
            description="Live monitoring and optimization of agent performance metrics."
            accent="green"
          />
        </div>
      </motion.div>
    </section>
  );
}

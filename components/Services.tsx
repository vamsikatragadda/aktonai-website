"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, MessageSquare, BarChart3, LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  glowColor: string;
}

const services: Service[] = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Purpose-built AI agents trained on your data that handle customer inquiries, process orders, and manage workflows autonomously.",
    accentColor: "from-white/60 to-white",
    glowColor: "rgba(255, 255, 255, 0.04)",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Streamline operations with AI that learns your processes, eliminates bottlenecks, and continuously optimizes for efficiency.",
    accentColor: "from-gray-400 to-white/80",
    glowColor: "rgba(255, 255, 255, 0.04)",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Deploy AI across chat, email, voice, and SMS that engages customers naturally and drives conversions 24/7.",
    accentColor: "from-gray-300 to-gray-500",
    glowColor: "rgba(255, 255, 255, 0.03)",
  },
  {
    icon: BarChart3,
    title: "AI Analytics & Insights",
    description:
      "Real-time dashboards and predictive analytics powered by AI agents that monitor, analyze, and surface what matters most.",
    accentColor: "from-gray-400 to-white/70",
    glowColor: "rgba(255, 255, 255, 0.03)",
  },
];

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "500+", label: "AI Agents Deployed" },
  { value: "10x", label: "Average ROI" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Always On" },
];

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 1.02, 0.73, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect behind card on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl"
        style={{ background: service.glowColor }}
      />

      {/* Card */}
      <div className="relative h-full rounded-2xl bg-white/[0.03] border border-white/10 shadow-sm p-8 transition-all duration-500 hover:border-white/20 group-hover:shadow-white/5 group-hover:shadow-md overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.05] via-transparent to-transparent rounded-tr-2xl" />
        </div>

        {/* Icon container */}
        <div className="relative mb-6">
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.accentColor} p-[1px]`}
          >
            <div className="flex items-center justify-center w-full h-full rounded-[11px] bg-[#0A0A0A] group-hover:bg-white/[0.05] transition-colors duration-500">
              <Icon className="w-6 h-6 text-white/90" strokeWidth={1.5} />
            </div>
          </div>

          {/* Floating dot accent */}
          <motion.div
            className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-80`}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
            {service.title}
          </h3>
          <p className="text-white/50 leading-relaxed text-[15px] group-hover:text-white/60 transition-colors duration-500">
            {service.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-8 right-8 h-[1px] overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${service.accentColor} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out opacity-50`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-32 lg:py-40 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Fade-in from top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />
      {/* Fade-out to bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4"
          >
            What We Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            End-to-End{" "}
            <span className="gradient-text">AI Solutions</span>{" "}
            for Your Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 leading-relaxed text-balance"
          >
            We embed AI into every layer of your operations—from customer-facing
            agents to back-office automation—making your business truly AI-native.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-sm" />

          {/* Banner container */}
          <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 shadow-sm overflow-hidden">
            {/* Inner shimmer line at top */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  className={`relative flex flex-col items-center justify-center py-10 px-6 ${
                    index < stats.length - 1
                      ? "border-r border-white/10"
                      : ""
                  } ${index < 2 ? "lg:border-b-0 border-b border-white/10" : ""} ${
                    index === 2 ? "border-r border-white/10 lg:border-b-0" : ""
                  }`}
                >
                  <span className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/40 tracking-wide font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

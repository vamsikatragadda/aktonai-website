"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Tesla", style: "font-extrabold tracking-tight" },
  { name: "Meta", style: "font-bold" },
  { name: "Google", style: "font-medium tracking-wide" },
];

export default function LogoCloud() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16">
      {/* Fade-in from top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />

      {/* Subtle top divider line */}
      <div className="mx-auto mb-10 h-px w-2/3 max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35 mb-8">
          Built by engineers from
        </p>

        <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-20">
          {companies.map((company) => (
            <span
              key={company.name}
              className={`text-2xl sm:text-3xl text-white/50 select-none ${company.style}`}
            >
              {company.name}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/35">
          who scaled AI to millions of users
        </p>
      </motion.div>

      {/* Subtle bottom divider line */}
      <div className="mx-auto mt-10 h-px w-2/3 max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Fade-out to bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
}

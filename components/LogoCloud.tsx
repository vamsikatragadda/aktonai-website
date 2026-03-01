"use client";

// ---------------------------------------------------------------------------
// LogoCloud – "Trusted By" social-proof marquee
// ---------------------------------------------------------------------------

const companies = [
  { name: "TechScale", style: "font-extrabold tracking-tight" },
  { name: "DataFlow", style: "font-light tracking-[0.25em] uppercase" },
  {
    name: "Meridian Health",
    style: "font-semibold italic",
  },
  { name: "NovaPay", style: "font-black tracking-tighter" },
  { name: "CloudBase", style: "font-medium tracking-widest uppercase text-[15px]" },
  { name: "Synthetix", style: "font-extrabold tracking-tight" },
  { name: "PulseAI", style: "font-bold" },
  { name: "Quantum Corp", style: "font-light tracking-[0.3em] uppercase text-[14px]" },
];

// Small decorative elements that make each "logo" feel distinct
function LogoDecorator({ index }: { index: number }) {
  const variant = index % 4;
  if (variant === 0) {
    // Small square before text
    return (
      <span className="mr-2 inline-block h-2 w-2 rounded-sm bg-gradient-to-br from-akton-400/60 to-cyber-400/60" />
    );
  }
  if (variant === 1) {
    // Dot separator
    return (
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
    );
  }
  if (variant === 2) {
    // Two small bars
    return (
      <span className="mr-2 inline-flex items-center gap-0.5">
        <span className="inline-block h-3 w-[3px] rounded-full bg-akton-400/50" />
        <span className="inline-block h-2 w-[3px] rounded-full bg-cyber-400/40" />
      </span>
    );
  }
  // Diamond
  return (
    <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-[1px] border border-white/25" />
  );
}

export default function LogoCloud() {
  return (
    <section className="relative overflow-hidden bg-akton-950 py-16">
      {/* Subtle top divider line */}
      <div className="mx-auto mb-10 h-px w-2/3 max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Heading */}
      <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        Trusted by innovative companies
      </p>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-akton-950 to-transparent sm:w-40" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-akton-950 to-transparent sm:w-40" />

        {/* Scrolling track — duplicated for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className={`mx-8 inline-flex flex-shrink-0 items-center text-lg text-white/40 select-none sm:mx-12 sm:text-xl ${company.style}`}
            >
              <LogoDecorator index={i} />
              {company.name}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle bottom divider line */}
      <div className="mx-auto mt-10 h-px w-2/3 max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

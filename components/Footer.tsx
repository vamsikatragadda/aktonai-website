import { Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Custom AI Agents', href: '#' },
    { label: 'Workflow Automation', href: '#' },
    { label: 'Customer Engagement', href: '#' },
    { label: 'Data Intelligence', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Support', href: '#' },
  ],
}

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'GitHub', href: '#', icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-akton-950 border-t border-white/10">
      {/* ---- Top section ---- */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ---- Brand column ---- */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="group inline-flex items-center gap-2">
              {/* Lightning bolt icon */}
              <svg
                viewBox="0 0 28 28"
                fill="none"
                className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footer-bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3366ff" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M16.5 2L6 16h7l-1.5 10L22 12h-7l1.5-10z"
                  fill="url(#footer-bolt-grad)"
                  stroke="url(#footer-bolt-grad)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-akton-400 to-cyber-400 bg-clip-text text-transparent">
                  Akton
                </span>
                <span className="text-white">AI</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              AI agents that transform how businesses operate.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 transition-all duration-200 hover:bg-white/5 hover:text-akton-400"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ---- Link columns ---- */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-akton-400"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/40">
            &copy; 2026 AktonAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-white/40 transition-colors duration-200 hover:text-white/70"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/40 transition-colors duration-200 hover:text-white/70"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

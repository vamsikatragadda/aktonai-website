import { Linkedin, Twitter, Github } from 'lucide-react'
import Logo from './Logo'

const footerLinks = {
  Services: [
    { label: 'Custom AI Agents', href: '#' },
    { label: 'Workflow Automation', href: '#' },
    { label: 'Customer Engagement', href: '#' },
    { label: 'Data Intelligence', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#book-a-call' },
  ],
}

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Twitter', icon: Twitter },
  { label: 'GitHub', icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      {/* ---- Top section ---- */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* ---- Brand column ---- */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="group inline-flex items-center gap-2">
              <Logo size={32} className="text-white" />
              <span className="text-xl font-bold tracking-tight text-white">
                AktonAI
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Making businesses AI-native, one agent at a time.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 cursor-default"
                >
                  <Icon className="h-4.5 w-4.5" />
                </span>
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
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
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
      <div className="border-t border-white/10">
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

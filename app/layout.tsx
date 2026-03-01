import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AktonAI - 10x Your Business with AI Agents',
  description: 'We build, deploy, and manage custom AI agents that automate your workflows, engage your customers, and drive revenue. Transform your business with intelligent automation.',
  keywords: ['AI agents', 'business automation', 'artificial intelligence', 'workflow automation', 'custom AI solutions'],
  openGraph: {
    title: 'AktonAI - 10x Your Business with AI Agents',
    description: 'Custom AI agents that automate your workflows, engage your customers, and drive revenue.',
    url: 'https://aktonai.com',
    siteName: 'AktonAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AktonAI - 10x Your Business with AI Agents',
    description: 'Custom AI agents that automate your workflows, engage your customers, and drive revenue.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-akton-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

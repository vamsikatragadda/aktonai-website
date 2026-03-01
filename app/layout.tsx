import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AktonAI - We Make Businesses AI-Native',
  description: 'AktonAI helps businesses become AI-native with custom AI agents, intelligent automation, and seamless integrations that transform operations.',
  keywords: ['AI agents', 'business automation', 'artificial intelligence', 'workflow automation', 'custom AI solutions', 'AI-native'],
  themeColor: '#0A0A0A',
  openGraph: {
    title: 'AktonAI - We Make Businesses AI-Native',
    description: 'AktonAI helps businesses become AI-native with custom AI agents, intelligent automation, and seamless integrations that transform operations.',
    url: 'https://aktonai.com',
    siteName: 'AktonAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AktonAI - We Make Businesses AI-Native',
    description: 'AktonAI helps businesses become AI-native with custom AI agents, intelligent automation, and seamless integrations that transform operations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

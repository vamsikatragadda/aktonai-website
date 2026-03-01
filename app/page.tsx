import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Services />
      <TechStack />
      <HowItWorks />
      <Results />
      <CTA />
      <Footer />
    </main>
  )
}

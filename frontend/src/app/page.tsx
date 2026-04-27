'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import InsiderTrades from '@/components/InsiderTrades'
import PoliticianTrades from '@/components/PoliticianTrades'
import TrumpTracker from '@/components/TrumpTracker'
import VoxAI from '@/components/VoxAI'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import AIChatBot from '@/components/AIChatBot'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <InsiderTrades />
      <PoliticianTrades />
      <TrumpTracker />
      <VoxAI />
      <Pricing />
      <Testimonials />
      <DownloadCTA />
      <FAQ />
      <Newsletter />
      <Footer />
      <AIChatBot />
    </main>
  )
}

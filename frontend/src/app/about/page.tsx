'use client'

import { motion } from 'framer-motion'
import { Target, Users, Shield, Zap, Award, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe retail investors deserve access to the same information as Wall Street professionals.',
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'All our data comes from official sources like SEC filings and public disclosures.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We build features based on what our community of traders actually needs.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage AI and real-time data processing to deliver insights faster than anyone.',
    },
  ]

  const team = [
    {
      name: 'Brendan Elman',
      role: 'Founder & CEO',
      bio: 'Former quantitative analyst with a passion for democratizing market intelligence.',
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Leveling the Playing Field for
              <br />
              <span className="gradient-text">Retail Investors</span>
            </h1>
            <p className="text-xl text-gray-400">
              VoxTrade was founded with a simple mission: give everyday investors 
              the same market intelligence that hedge funds and institutions have 
              enjoyed for decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  VoxTrade started in 2024 when our founder noticed something troubling: 
                  while institutional investors had real-time access to insider trading data 
                  and political trade disclosures, retail investors were left in the dark.
                </p>
                <p>
                  The information was technically public, but scattered across multiple 
                  government websites, buried in PDFs, and released with significant delays. 
                  By the time regular investors could find and interpret this data, the 
                  market had already moved.
                </p>
                <p>
                  We built VoxTrade to change that. Our platform aggregates data from the 
                  SEC, congressional disclosures, social media, and news sources, then 
                  delivers it to your phone in real-time with AI-powered insights.
                </p>
                <p>
                  Today, VoxTrade serves a growing community of traders who use our platform to 
                  make smarter investment decisions. And we're just getting started.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Globe, label: 'Global Coverage' },
                    { icon: Zap, label: 'Real-Time Data' },
                    { icon: Shield, label: 'SEC Compliant' },
                    { icon: Award, label: 'Top Rated App' },
                  ].map((item, index) => (
                    <div key={item.label} className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at VoxTrade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Download VoxTrade today and start trading with the same intelligence as the pros.
            </p>
            <a href="/#download" className="btn-primary inline-flex items-center gap-2">
              Download Free
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Bell,
  Bot,
  BarChart3,
  Shield,
  Newspaper,
  PieChart,
  Calendar,
  Activity,
  Star,
  Zap,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  const featureGroups = [
    {
      title: 'Smart Money Intelligence',
      description: 'Follow the trades that move markets.',
      features: [
        {
          icon: TrendingUp,
          title: 'Insider Trades',
          description: 'Track real-time stock purchases and sales by company executives, directors, and 10% owners - sourced directly from SEC Form 4 filings.',
          href: '/insider-trades',
          color: 'from-green-500 to-emerald-500',
        },
        {
          icon: Users,
          title: 'Politician Trades',
          description: 'Monitor every Congress member trade via STOCK Act filings, with party affiliation, committee membership, and trade context.',
          href: '/politician-trades',
          color: 'from-blue-500 to-cyan-500',
        },
        {
          icon: Activity,
          title: 'Trump Tracker',
          description: 'Get instant alerts on market-moving statements from Trump\'s Truth Social posts with sentiment analysis.',
          href: '/trump-tracker',
          color: 'from-red-500 to-orange-500',
        },
      ],
    },
    {
      title: 'AI & Automation',
      description: 'Let AI do the heavy lifting.',
      features: [
        {
          icon: Bot,
          title: 'VoxAI Assistant',
          description: 'A personal AI market analyst trained on financial data - answers natural language questions in seconds.',
          href: '/vox-ai',
          color: 'from-primary to-emerald-400',
        },
        {
          icon: Bell,
          title: 'Smart Alerts',
          description: 'Custom push notifications for insider buys, price targets, news events, and politician trades.',
          color: 'from-yellow-500 to-amber-500',
        },
        {
          icon: Zap,
          title: 'Real-Time Signals',
          description: 'Momentum signals computed from order flow, social sentiment, and unusual options activity.',
          color: 'from-purple-500 to-pink-500',
        },
      ],
    },
    {
      title: 'Market Data & Discovery',
      description: 'Never miss a market-moving event.',
      features: [
        {
          icon: BarChart3,
          title: 'Trending Tickers',
          description: 'See which stocks are trending on Reddit, Twitter, and StockTwits with cross-platform momentum scores.',
          color: 'from-purple-500 to-pink-500',
        },
        {
          icon: Newspaper,
          title: 'Market News',
          description: 'Aggregated, filtered news from Bloomberg, Reuters, and 50+ trusted sources, ranked by relevance.',
          color: 'from-indigo-500 to-violet-500',
        },
        {
          icon: Calendar,
          title: 'Earnings & IPO Calendar',
          description: 'Track every earnings report, IPO date, and macro event so you\'re always ahead.',
          color: 'from-teal-500 to-cyan-500',
        },
        {
          icon: PieChart,
          title: 'Biopharma Catalysts',
          description: 'FDA decisions, clinical trial readouts, and drug approval timelines for the entire biotech sector.',
          color: 'from-rose-500 to-pink-500',
        },
        {
          icon: Activity,
          title: 'Volatility Scanner',
          description: 'Identify unusual volume, top gainers and losers, and the most active names in real time.',
          color: 'from-orange-500 to-red-500',
        },
        {
          icon: Star,
          title: 'Watchlists',
          description: 'Build unlimited watchlists with custom alerts, notes, and instant cross-device sync.',
          color: 'from-amber-500 to-yellow-500',
        },
      ],
    },
    {
      title: 'Security & Trust',
      description: 'Your data is safe with us.',
      features: [
        {
          icon: Shield,
          title: 'Bank-Level Security',
          description: 'AES-256 encryption at rest, TLS 1.3 in transit, and zero-knowledge architecture.',
          color: 'from-gray-500 to-slate-500',
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Features</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Everything You Need to
              <br />
              <span className="gradient-text">Trade Smarter</span>
            </h1>
            <p className="text-xl text-gray-400">
              Twelve powerful tools, one app. The complete edge for retail investors who want to trade like the pros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group, gIdx) => (
        <section
          key={group.title}
          className={`section-padding ${gIdx % 2 === 1 ? 'bg-dark-100' : ''}`}
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{group.title}</h2>
              <p className="text-lg text-gray-400">{group.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.features.map((feature, idx) => {
                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="card h-full group cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
                      <div className="w-full h-full bg-dark-100 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{feature.description}</p>
                    {'href' in feature && feature.href && (
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </motion.div>
                )
                return 'href' in feature && feature.href ? (
                  <Link key={feature.title} href={feature.href}>{Card}</Link>
                ) : (
                  <div key={feature.title}>{Card}</div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">See it for yourself</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Download VoxTrade free and explore every feature. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
                Download App <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/help" className="btn-secondary inline-flex items-center justify-center">
                Get Help
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

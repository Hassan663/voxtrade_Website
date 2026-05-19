'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  ArrowRight,
  FileText,
  Clock,
  Filter,
  Bell,
  Eye,
  CheckCircle2,
  ArrowDownRight,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function InsiderTradesPage() {
  const sampleTrades = [
    { ticker: 'NVDA', insider: 'Jensen Huang', role: 'CEO', type: 'Sell', shares: '120,000', value: '$15.2M', date: '2h ago' },
    { ticker: 'TSLA', insider: 'Elon Musk', role: 'CEO', type: 'Buy', shares: '85,000', value: '$22.4M', date: '6h ago' },
    { ticker: 'META', insider: 'Mark Zuckerberg', role: 'CEO', type: 'Sell', shares: '45,000', value: '$23.1M', date: '1d ago' },
    { ticker: 'AAPL', insider: 'Tim Cook', role: 'CEO', type: 'Sell', shares: '32,000', value: '$5.9M', date: '2d ago' },
  ]

  const benefits = [
    { icon: Clock, title: 'Real-Time Alerts', desc: 'Form 4 filings parsed within 60 seconds of being filed with the SEC.' },
    { icon: Filter, title: 'Smart Filtering', desc: 'Filter by sector, transaction size, role (CEO, CFO, Director), or specific tickers.' },
    { icon: Eye, title: 'Cluster Detection', desc: 'Automatic flagging when multiple insiders at the same company trade in the same direction.' },
    { icon: FileText, title: 'Full Filing Context', desc: 'See the original Form 4 filing, transaction history, and pricing context.' },
    { icon: Bell, title: 'Custom Watchlists', desc: 'Get notified only when insiders at companies you care about make a move.' },
    { icon: TrendingUp, title: 'Historical Performance', desc: 'See how well each insider\'s past trades have performed against the S&P 500.' },
  ]

  const howItWorks = [
    { step: '01', title: 'SEC Form 4 Filed', desc: 'Insiders are legally required to disclose trades within 2 business days.' },
    { step: '02', title: 'VoxTrade Parses', desc: 'Our system ingests the filing within 60 seconds of submission.' },
    { step: '03', title: 'Alert Sent', desc: 'You get a push notification with full transaction context.' },
    { step: '04', title: 'You Decide', desc: 'Review, analyze, and decide whether to act on the signal.' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Insider Trades</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                Follow the
                <br />
                <span className="gradient-text">Smart Money</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Track every Form 4 filing in real time. When CEOs, CFOs, and directors buy or sell their own
                company&apos;s stock, you&apos;ll know within 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/features" className="btn-secondary inline-flex items-center justify-center">
                  All Features
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">Live Feed</span>
                </div>
                <span className="text-xs text-gray-500">Updated just now</span>
              </div>
              <div className="space-y-3">
                {sampleTrades.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-dark-200 rounded-xl border border-dark-400"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${t.type === 'Buy' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-400'}`}>
                        {t.type === 'Buy' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="font-semibold">{t.ticker}</div>
                        <div className="text-xs text-gray-400">{t.insider} · {t.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{t.value}</div>
                      <div className="text-xs text-gray-500">{t.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-gray-400">Tools built specifically for tracking insider activity.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">From SEC filing to your phone in under a minute.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card relative"
              >
                <div className="text-5xl font-bold text-primary/20 mb-3">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/30"
          >
            <h2 className="text-4xl font-bold mb-6">Stop missing the signals.</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get insider trade alerts free, forever. Premium plans unlock historical analytics and custom screeners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
                Download VoxTrade <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/politician-trades" className="btn-secondary inline-flex items-center justify-center">
                See Politician Trades
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Free forever plan</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> No credit card</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Users,
  ArrowRight,
  Building2,
  Shield,
  Bell,
  TrendingUp,
  Scale,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PoliticianTradesPage() {
  const sampleTrades = [
    { ticker: 'NVDA', name: 'Nancy Pelosi', party: 'D', state: 'CA', type: 'Buy', value: '$1M – $5M', date: '3h ago' },
    { ticker: 'MSFT', name: 'Dan Crenshaw', party: 'R', state: 'TX', type: 'Buy', value: '$15K – $50K', date: '8h ago' },
    { ticker: 'XOM', name: 'Tommy Tuberville', party: 'R', state: 'AL', type: 'Sell', value: '$50K – $100K', date: '1d ago' },
    { ticker: 'GOOG', name: 'Josh Gottheimer', party: 'D', state: 'NJ', type: 'Buy', value: '$15K – $50K', date: '2d ago' },
  ]

  const benefits = [
    { icon: Building2, title: 'Full Congress Coverage', desc: 'Every Senator and Representative tracked - all 535 members, both chambers.' },
    { icon: Bell, title: 'STOCK Act Alerts', desc: 'Notifications within hours of new filings, not the 45-day legal grace period.' },
    { icon: Scale, title: 'Committee Context', desc: 'See if a politician trades stocks in industries their committee oversees.' },
    { icon: TrendingUp, title: 'Performance Tracking', desc: 'See which politicians have actually beaten the market over time.' },
    { icon: Shield, title: 'Verified Sources', desc: 'Data sourced directly from House and Senate Periodic Transaction Reports.' },
    { icon: Users, title: 'Party & State Filters', desc: 'Filter by chamber, party, state, or specific politician with one tap.' },
  ]

  const stats = [
    { value: '535', label: 'Politicians tracked' },
    { value: '12k+', label: 'Trades disclosed in 2025' },
    { value: '24h', label: 'Average filing-to-alert time' },
    { value: '100%', label: 'STOCK Act filing coverage' },
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
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Politician Trades</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                See What
                <br />
                <span className="gradient-text">Congress Trades</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Members of Congress hear things you don&apos;t. Track every disclosed stock trade
                from all 535 members - sourced directly from STOCK Act filings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/insider-trades" className="btn-secondary inline-flex items-center justify-center">
                  See Insider Trades
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
                  <span className="text-sm font-medium">Recent Disclosures</span>
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
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${t.party === 'D' ? 'bg-blue-500/10 text-blue-400' : 'bg-red-500/10 text-red-400'}`}>
                        {t.party}-{t.state}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.ticker} · {t.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm flex items-center gap-1 justify-end">
                        {t.type === 'Buy' ? <ArrowUpRight className="w-4 h-4 text-primary" /> : <ArrowDownRight className="w-4 h-4 text-red-400" />}
                        {t.value}
                      </div>
                      <div className="text-xs text-gray-500">{t.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text">{s.value}</div>
                <div className="text-gray-400 mt-2 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Track Politicians?</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Members of Congress sit on briefings about defense contracts, healthcare legislation,
                  pending tariffs, and major regulatory shifts - months before the public sees them.
                </p>
                <p>
                  The STOCK Act of 2012 requires them to disclose stock trades within 45 days, but
                  enforcement is loose and the disclosures are buried in thousands of pages of PDFs.
                </p>
                <p>
                  VoxTrade parses every filing the moment it&apos;s public, surfacing the trades that
                  matter and connecting them to committee assignments and pending legislation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card bg-gradient-to-br from-blue-500/10 to-red-500/10 border-primary/20">
                <h3 className="text-xl font-semibold mb-6">Top Performers (12-Month Returns)</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Nancy Pelosi (D-CA)', return: '+72.4%', color: 'text-primary' },
                    { name: 'Tommy Tuberville (R-AL)', return: '+38.1%', color: 'text-primary' },
                    { name: 'Dan Crenshaw (R-TX)', return: '+24.6%', color: 'text-primary' },
                    { name: 'S&P 500 Benchmark', return: '+18.2%', color: 'text-gray-400' },
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-dark-400 last:border-0">
                      <span className="text-sm">{p.name}</span>
                      <span className={`font-semibold ${p.color}`}>{p.return}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-6">
                  Illustrative returns based on publicly disclosed trades. Past performance does not guarantee future results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Built for Political Trade Tracking</h2>
            <p className="text-xl text-gray-400">Every feature designed to surface what really matters.</p>
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/30"
          >
            <h2 className="text-4xl font-bold mb-6">Trade with the same intel.</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get notified the moment a Congress member files a trade. Free, forever.
            </p>
            <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
              Download VoxTrade <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Free forever plan</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> All 535 members</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

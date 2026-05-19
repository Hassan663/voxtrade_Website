'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  MessageCircle,
  Zap,
  TrendingUp,
  Bell,
  Brain,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TrumpTrackerPage() {
  const samplePosts = [
    {
      time: '12 min ago',
      content: 'Tariffs on China will be increased by 25% effective immediately. Big Tech better take notice!',
      sentiment: 'Negative',
      affected: ['AAPL', 'NVDA', 'TSLA'],
      impact: '-2.4%',
    },
    {
      time: '2h ago',
      content: 'Just signed the largest infrastructure bill in American history. Construction stocks to the moon!',
      sentiment: 'Positive',
      affected: ['CAT', 'URI', 'VMC'],
      impact: '+4.1%',
    },
    {
      time: '5h ago',
      content: 'Pharma companies need to lower prices NOW. Will be signing executive order tomorrow.',
      sentiment: 'Negative',
      affected: ['PFE', 'MRK', 'JNJ'],
      impact: '-3.8%',
    },
  ]

  const features = [
    { icon: Zap, title: 'Sub-Second Detection', desc: 'New Truth Social posts detected within 1 second of being posted.' },
    { icon: Brain, title: 'AI Sentiment Analysis', desc: 'Each post is analyzed for market impact using a model trained on years of presidential statements.' },
    { icon: TrendingUp, title: 'Affected Tickers', desc: 'See which stocks and sectors a post is most likely to move, before the market reacts.' },
    { icon: Bell, title: 'Instant Push Alerts', desc: 'Wake up to a notification the moment a market-moving statement drops.' },
    { icon: MessageCircle, title: 'Full Post Archive', desc: 'Searchable history of every post with attached price impact data.' },
    { icon: AlertTriangle, title: 'Volatility Warnings', desc: 'Alerts ramp up when posts are likely to cause unusual market volatility.' },
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
              <span className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4" /> Trump Tracker
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                Every Post.
                <br />
                <span className="gradient-text">Every Move.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                One Truth Social post can move billions. VoxTrade detects them in under a second,
                analyzes market impact with AI, and tells you exactly which tickers to watch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Alerts Free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/features" className="btn-secondary inline-flex items-center justify-center">
                  See All Features
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
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-medium">Live Tracker</span>
                </div>
                <span className="text-xs text-gray-500">Truth Social</span>
              </div>
              <div className="space-y-4">
                {samplePosts.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 bg-dark-200 rounded-xl border border-dark-400"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">{p.time}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${p.sentiment === 'Positive' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-400'}`}>
                        {p.sentiment}
                      </span>
                    </div>
                    <p className="text-sm mb-3">&ldquo;{p.content}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {p.affected.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded bg-dark-400 font-medium">
                            ${t}
                          </span>
                        ))}
                      </div>
                      <span className={`text-sm font-bold ${p.impact.startsWith('+') ? 'text-primary' : 'text-red-400'}`}>
                        {p.impact}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How Trump Tracker Works</h2>
            <p className="text-xl text-gray-400">Built specifically for the speed of political market signals.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-0.5 mb-4">
                  <div className="w-full h-full bg-dark-100 rounded-xl flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent border-red-500/20"
          >
            <h2 className="text-4xl font-bold mb-6">Don&apos;t miss the next move.</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Markets move in seconds. Get the alert before everyone else does.
            </p>
            <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
              Enable Alerts Free <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Free forever</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Sub-second alerts</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

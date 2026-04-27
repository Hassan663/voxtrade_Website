'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Brain,
  Zap,
  TrendingUp,
  CheckCircle2,
  Send,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function VoxAIPage() {
  const sampleConversation = [
    { role: 'user', content: 'What’s driving NVDA today?' },
    { role: 'ai', content: 'NVDA is up 3.2% today on three catalysts: (1) Morgan Stanley raised its price target to $180, (2) reports of a $5B AI infrastructure deal with Saudi Arabia, and (3) bullish options flow with calls outpacing puts 4:1.' },
    { role: 'user', content: 'Any insider activity?' },
    { role: 'ai', content: 'Jensen Huang sold 120,000 shares ($15.2M) two hours ago - but this is part of his pre-scheduled 10b5-1 plan filed last quarter, so it’s not a directional signal.' },
  ]

  const useCases = [
    { icon: TrendingUp, title: 'Stock Analysis', desc: 'Ask about any ticker. Get fundamentals, recent news, technicals, and analyst ratings in one answer.' },
    { icon: Brain, title: 'Market Context', desc: 'Why is the market moving? VoxAI synthesizes news, flows, and macro into a clear narrative.' },
    { icon: Sparkles, title: 'Trade Ideas', desc: 'Generate trade ideas based on insider buying clusters, unusual options activity, or earnings setups.' },
    { icon: MessageSquare, title: 'Plain English', desc: 'No jargon required. Ask the way you actually think - VoxAI handles the translation.' },
    { icon: Zap, title: 'Real-Time Data', desc: 'Connected to live prices, filings, and news. Answers reflect what’s happening right now.' },
    { icon: Bot, title: 'Personalized', desc: 'Learns your watchlist, risk preferences, and style to give you better answers over time.' },
  ]

  const examples = [
    'What’s driving NVDA today?',
    'Show me politicians buying defense stocks',
    'Why is the S&P down?',
    'Any insider buying clusters this week?',
    'Compare AAPL vs MSFT fundamentals',
    'What earnings are this week?',
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
                <Sparkles className="w-4 h-4" /> VoxAI
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                Your Personal
                <br />
                <span className="gradient-text">Market Analyst</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Ask anything about the market in plain English. VoxAI synthesizes news, filings,
                price action, and insider data into clear, actionable answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
                  Try VoxAI Free <ArrowRight className="w-4 h-4" />
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
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-400">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold">VoxAI</div>
                  <div className="text-xs text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                {sampleConversation.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-black' : 'bg-dark-200 border border-dark-400'}`}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 p-3 bg-dark-200 rounded-xl border border-dark-400">
                <input
                  disabled
                  placeholder="Ask VoxAI anything..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder-gray-500"
                />
                <Send className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ask Anything</h2>
            <p className="text-xl text-gray-400">Real questions VoxAI answers in seconds.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {examples.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="card flex items-center gap-3 cursor-pointer hover:border-primary"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">{q}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What VoxAI Can Do</h2>
            <p className="text-xl text-gray-400">Built for traders, not generic chatbots.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-400 p-0.5 mb-4">
                  <div className="w-full h-full bg-dark-100 rounded-xl flex items-center justify-center">
                    <u.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{u.title}</h3>
                <p className="text-gray-400 text-sm">{u.desc}</p>
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
            className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/30"
          >
            <h2 className="text-4xl font-bold mb-6">Talk to the market.</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              VoxAI is included free with every VoxTrade account. No usage limits on the free plan.
            </p>
            <Link href="/download" className="btn-primary inline-flex items-center justify-center gap-2">
              Get VoxAI Free <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Unlimited questions</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Real-time data</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

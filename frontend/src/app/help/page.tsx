'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle,
  Mail,
  MessageCircle,
  Book,
  Search,
  ChevronDown,
  ArrowRight,
  Shield,
  CreditCard,
  Smartphone,
  Bell,
  Bot,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [query, setQuery] = useState('')

  const categories = [
    { icon: Smartphone, title: 'Getting Started', desc: 'Install, sign up, and set up your first watchlist.', count: 8 },
    { icon: TrendingUp, title: 'Trading Features', desc: 'Insider trades, politician trades, and signals.', count: 12 },
    { icon: Bot, title: 'VoxAI', desc: 'Using the AI assistant effectively.', count: 6 },
    { icon: Bell, title: 'Alerts & Notifications', desc: 'Custom alerts and push notifications.', count: 7 },
    { icon: CreditCard, title: 'Billing & Plans', desc: 'Subscriptions, refunds, and upgrades.', count: 9 },
    { icon: Shield, title: 'Account & Security', desc: 'Login, 2FA, and account recovery.', count: 5 },
  ]

  const faqs = [
    {
      q: 'Is VoxTrade really free?',
      a: 'Yes. Our free plan includes real-time insider trades, politician trades, Trump Tracker, and VoxAI access. Premium plans add historical data, advanced screeners, and unlimited custom alerts - but the free plan is fully functional, forever.',
    },
    {
      q: 'How fast are insider trade alerts?',
      a: 'Our system parses SEC Form 4 filings within 60 seconds of submission. Push notifications typically arrive on your device within 90 seconds total - far faster than any free service.',
    },
    {
      q: 'Where does politician trade data come from?',
      a: 'Directly from official House and Senate Periodic Transaction Reports filed under the STOCK Act of 2012. We do not aggregate from third parties - we parse the original filings.',
    },
    {
      q: 'Can I customize alerts for specific stocks?',
      a: 'Yes. You can create alerts for specific tickers, insider roles (CEO, CFO, etc.), transaction sizes, or specific politicians. Free users get up to 10 custom alerts; Premium is unlimited.',
    },
    {
      q: 'Is my financial data secure?',
      a: 'VoxTrade does not connect to your brokerage accounts and never sees your trades. Account data is encrypted with AES-256, transit is secured with TLS 1.3, and we use a zero-knowledge architecture for sensitive preferences.',
    },
    {
      q: 'How do I cancel my subscription?',
      a: 'Open the app, go to Settings → Subscription, and tap "Manage Subscription." Cancellations take effect at the end of your current billing period and you keep access until then.',
    },
    {
      q: 'Does VoxAI give financial advice?',
      a: 'No. VoxAI provides data, analysis, and context - but it does not give personalized financial advice. Always do your own research and consult a licensed financial advisor before making investment decisions.',
    },
    {
      q: 'Which devices are supported?',
      a: 'iOS 15.0+ (iPhone, iPad, Apple Silicon Mac) and Android 8.0+ (phones, tablets, Chromebooks). A web app is in beta - sign up for early access in Settings.',
    },
  ]

  const filtered = query
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase()),
      )
    : faqs

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Help Center</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              How can we
              <br />
              <span className="gradient-text">help you?</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Search our help articles or browse categories below. Real humans available 24/7 if you need them.
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-dark-100 border border-dark-400 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-400">Find answers organized by topic.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="card cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
                <span className="text-xs text-primary font-medium flex items-center gap-1">
                  {c.count} articles <ArrowRight className="w-3 h-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Quick answers to common questions.</p>
          </motion.div>

          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="card text-center text-gray-400">
                No results for &ldquo;{query}&rdquo;. Try a different search or contact us below.
              </div>
            )}
            {filtered.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Still need help?</h2>
            <p className="text-xl text-gray-400">Choose the support channel that works for you.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.a
              href="mailto:support@voxtradeapp.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-3">Reply within 24 hours.</p>
              <span className="text-primary text-sm">support@voxtradeapp.com</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-3">Available 24/7 in the app.</p>
              <span className="text-primary text-sm">Open in app</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Book className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">User Guide</h3>
              <p className="text-gray-400 text-sm mb-3">In-depth documentation.</p>
              <span className="text-primary text-sm">Read the docs</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Can&apos;t find what you need?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team replies to every message. Most queries resolved in under 4 hours.
            </p>
            <Link href="mailto:support@voxtradeapp.com" className="btn-primary inline-flex items-center gap-2">
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

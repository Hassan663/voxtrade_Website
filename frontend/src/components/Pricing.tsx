'use client'

import { motion } from 'framer-motion'
import { Check, X, Sparkles, Zap, Crown } from 'lucide-react'
import { useState } from 'react'

type Feature = { name: string; description: string; included: boolean }

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  // Master feature list (used to render every plan with the same row order)
  const allFeatures: Omit<Feature, 'included'>[] = [
    { name: 'Stock News', description: 'Real-time market and company news' },
    { name: 'Trending Stocks', description: 'Identify top-performing stocks' },
    { name: 'Trump Tracker', description: 'Track market impact of Trump-related news' },
    { name: 'Market Tracker', description: 'Comprehensive tracking for your portfolio' },
    { name: 'Advanced Watchlist', description: 'Monitor stocks with custom alerts' },
    { name: 'Insider Trades', description: "See what company insiders are buying/selling" },
    { name: 'Politician Trades', description: 'Monitor stock trades by members of Congress' },
    { name: 'Earnings Calendar', description: 'Stay ahead of quarterly financial reports' },
    { name: 'Custom Alerts', description: 'Get notified on price moves and triggers' },
    { name: 'BioPharma Catalysts', description: 'Exclusive data on drug trials and FDA approvals' },
    { name: 'Volatility Analysis', description: 'Advanced technical indicators for market risk' },
    { name: 'AI Insights', description: 'AI-powered analysis and stock predictions' },
  ]

  const includedNames = {
    free: new Set([
      'Stock News',
      'Trending Stocks',
      'Trump Tracker',
      'Market Tracker',
      'Advanced Watchlist',
    ]),
    standard: new Set([
      'Stock News',
      'Trending Stocks',
      'Trump Tracker',
      'Market Tracker',
      'Advanced Watchlist',
      'Insider Trades',
      'Politician Trades',
      'Earnings Calendar',
      'Custom Alerts',
    ]),
    pro: new Set(allFeatures.map((f) => f.name)),
  }

  const buildFeatures = (plan: keyof typeof includedNames): Feature[] =>
    allFeatures.map((f) => ({ ...f, included: includedNames[plan].has(f.name) }))

  const plans = [
    {
      key: 'free' as const,
      name: 'Free',
      icon: Zap,
      price: { monthly: 0, yearly: 0, original: 0, savings: 0 },
      description: 'Get started with essential market data at no cost.',
      features: buildFeatures('free'),
      cta: 'Download Free',
      popular: false,
      color: 'gray',
    },
    {
      key: 'standard' as const,
      name: 'Standard',
      icon: Sparkles,
      price: { monthly: 19, yearly: 205, original: 228, savings: 23 },
      description: 'Everything in Free plus insider trades, politician trades, earnings & alerts.',
      features: buildFeatures('standard'),
      cta: 'Start Standard',
      popular: false,
      color: 'cyan',
    },
    {
      key: 'pro' as const,
      name: 'Pro',
      icon: Crown,
      price: { monthly: 39, yearly: 421, original: 468, savings: 47 },
      description: 'Full access including BioPharma catalysts, volatility tools & AI insights.',
      features: buildFeatures('pro'),
      cta: 'Go Pro',
      popular: true,
      color: 'purple',
    },
  ]

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Start free and upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle yearly pricing"
              className={`w-14 h-8 rounded-full p-1 transition-colors ${
                isYearly ? 'bg-primary' : 'bg-dark-400'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                Save 10%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isFree = plan.price.monthly === 0
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-dark-100 rounded-2xl border p-6 sm:p-8 ${
                  plan.popular
                    ? 'border-primary shadow-2xl shadow-primary/20 lg:scale-[1.03]'
                    : 'border-dark-400'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/40">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                    plan.color === 'cyan'
                      ? 'bg-primary/10 border border-primary/30'
                      : plan.color === 'purple'
                        ? 'bg-secondary/10 border border-secondary/30'
                        : 'bg-gray-500/10 border border-gray-500/30'
                  }`}
                >
                  <plan.icon
                    className={`w-7 h-7 ${
                      plan.color === 'cyan'
                        ? 'text-primary'
                        : plan.color === 'purple'
                          ? 'text-secondary'
                          : 'text-gray-400'
                    }`}
                  />
                </div>

                {/* Plan Name & Description */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                  </div>

                  {/* Yearly: strikethrough original + savings */}
                  {isYearly && !isFree && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-500 line-through">${plan.price.original}/year</span>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full font-semibold">
                        Save ${plan.price.savings} · 10% OFF
                      </span>
                    </div>
                  )}

                  {/* Yearly equivalent */}
                  {isYearly && !isFree && (
                    <p className="text-xs text-gray-500 mt-1">
                      ${(plan.price.yearly / 12).toFixed(0)}/month billed annually
                    </p>
                  )}

                  {isFree && <p className="text-xs text-gray-500 mt-2">Forever. No credit card required.</p>}
                </div>

                {/* CTA Button */}
                <a
                  href="/download"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'bg-primary text-black hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/40'
                      : plan.color === 'purple'
                        ? 'bg-secondary text-white hover:bg-secondary-600'
                        : plan.color === 'cyan'
                          ? 'bg-white/5 border border-primary/40 text-primary hover:bg-primary/10'
                          : 'bg-dark-400 text-white hover:bg-dark-500'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className={`flex gap-3 text-sm ${
                        feature.included ? 'text-gray-200' : 'text-gray-600'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className={`font-medium ${feature.included ? '' : 'line-through opacity-60'}`}>
                          {feature.name}
                        </div>
                        <div className={`text-xs ${feature.included ? 'text-gray-500' : 'text-gray-700'}`}>
                          {feature.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Promo Codes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Have a promo code? Enter it during checkout to unlock special offers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

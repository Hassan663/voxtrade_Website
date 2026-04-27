'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, ArrowRight, Shield, Clock, Filter } from 'lucide-react'

const InsiderTrades = () => {
  const trades = [
    {
      name: 'Tim Cook',
      role: 'CEO',
      company: 'Apple Inc.',
      ticker: 'AAPL',
      action: 'BUY',
      shares: '50,000',
      value: '$8.2M',
      date: '2 hours ago',
    },
    {
      name: 'Jensen Huang',
      role: 'CEO',
      company: 'NVIDIA Corp.',
      ticker: 'NVDA',
      action: 'SELL',
      shares: '25,000',
      value: '$22.5M',
      date: '5 hours ago',
    },
    {
      name: 'Satya Nadella',
      role: 'CEO',
      company: 'Microsoft',
      ticker: 'MSFT',
      action: 'BUY',
      shares: '10,000',
      value: '$4.1M',
      date: '1 day ago',
    },
    {
      name: 'Mark Zuckerberg',
      role: 'CEO',
      company: 'Meta Platforms',
      ticker: 'META',
      action: 'SELL',
      shares: '100,000',
      value: '$48.7M',
      date: '2 days ago',
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Real-Time Data',
      description: 'Get insider trade filings within hours of SEC submission.',
    },
    {
      icon: Filter,
      title: 'Smart Filters',
      description: 'Filter by sector, role, transaction type, and value.',
    },
    {
      icon: Shield,
      title: 'Official Sources',
      description: 'All data sourced directly from SEC Form 4 filings.',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 section-gradient" />
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Insider Trades</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Follow the
              <br />
              <span className="gradient-text">Smart Money</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
              Company executives know their business better than anyone. Track when CEOs, CFOs, and board members buy or sell their own stock.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow"
                  >
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#download" className="btn-primary inline-flex items-center gap-2">
              Track Insider Trades
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Right Content - Trade Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75" />
            
            <div className="relative space-y-4">
              {trades.map((trade, index) => (
                <motion.div
                  key={trade.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`group bg-white/5 backdrop-blur-xl border rounded-xl p-3 sm:p-4 transition-all cursor-pointer ${
                    trade.action === 'BUY'
                      ? 'border-white/10 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20'
                      : 'border-white/10 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-400/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm sm:text-lg font-bold text-primary">
                          {trade.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm sm:text-base truncate">{trade.name}</span>
                          <span className="text-[10px] sm:text-xs text-gray-500 bg-dark-400 px-2 py-0.5 rounded">
                            {trade.role}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 truncate">
                          {trade.company} ({trade.ticker})
                        </div>
                      </div>
                    </div>

                    {/* Trade Info */}
                    <div className="text-right flex-shrink-0">
                      <div className={`flex items-center gap-1 justify-end ${
                        trade.action === 'BUY' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {trade.action === 'BUY' ? (
                          <TrendingUp size={14} />
                        ) : (
                          <TrendingDown size={14} />
                        )}
                        <span className="font-semibold text-xs sm:text-sm">{trade.action}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium">{trade.value}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">{trade.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InsiderTrades

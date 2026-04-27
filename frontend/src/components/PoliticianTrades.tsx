'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, ArrowRight, Scale, Building } from 'lucide-react'

const PoliticianTrades = () => {
  const trades = [
    {
      name: 'Nancy Pelosi',
      party: 'D',
      chamber: 'House',
      ticker: 'NVDA',
      action: 'BUY',
      value: '$1M - $5M',
      date: '3 days ago',
    },
    {
      name: 'Dan Crenshaw',
      party: 'R',
      chamber: 'House',
      ticker: 'MSFT',
      action: 'BUY',
      value: '$100K - $250K',
      date: '1 week ago',
    },
    {
      name: 'Tommy Tuberville',
      party: 'R',
      chamber: 'Senate',
      ticker: 'META',
      action: 'SELL',
      value: '$250K - $500K',
      date: '1 week ago',
    },
    {
      name: 'Mark Kelly',
      party: 'D',
      chamber: 'Senate',
      ticker: 'AAPL',
      action: 'BUY',
      value: '$50K - $100K',
      date: '2 weeks ago',
    },
  ]

  const stats = [
    { value: '535', label: 'Congress Members Tracked' },
    { value: '12,000+', label: 'Trades This Year' },
    { value: '24hrs', label: 'Avg. Reporting Delay' },
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-dark-100">
      {/* Background mesh */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-red-500/10 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Trade Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-75" />
            
            <div className="relative space-y-4">
              {trades.map((trade, index) => (
                <motion.div
                  key={trade.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: -10 }}
                  className={`group bg-white/5 backdrop-blur-xl border rounded-xl p-3 sm:p-4 transition-all cursor-pointer ${
                    trade.party === 'D'
                      ? 'border-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20'
                      : 'border-white/10 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-400/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      {/* Avatar with Party Color */}
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        trade.party === 'D' ? 'bg-blue-500/20' : 'bg-red-500/20'
                      }`}>
                        <span className={`text-sm sm:text-lg font-bold ${
                          trade.party === 'D' ? 'text-blue-400' : 'text-red-400'
                        }`}>
                          {trade.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm sm:text-base truncate">{trade.name}</span>
                          <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded flex-shrink-0 ${
                            trade.party === 'D'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {trade.party}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 truncate">
                          {trade.chamber} • {trade.ticker}
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

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Politician Trades</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Congress Beats
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                The Market
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
              Members of Congress consistently outperform the S&P 500. Now you can see their trades and follow their moves via STOCK Act filings.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/10 transition-all">
                <Scale className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">STOCK Act Compliance</h4>
                  <p className="text-gray-400 text-sm">All trades are reported under the STOCK Act within 45 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/10 transition-all">
                <Building className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Senate & House Coverage</h4>
                  <p className="text-gray-400 text-sm">Track all 100 Senators and 435 Representatives.</p>
                </div>
              </div>
            </div>

            <a href="#download" className="btn-secondary border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black inline-flex items-center gap-2">
              Track Politicians
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PoliticianTrades

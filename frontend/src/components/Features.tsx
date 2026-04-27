'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Bell, 
  BrainCircuit,
  BarChart3, 
  Shield,
  Newspaper,
  PieChart,
  Calendar,
  Activity,
  Star,
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Insider Trades',
      description: 'Track real-time stock purchases and sales by company executives and board members.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Politician Trades',
      description: 'Monitor Congress members\' stock trades via STOCK Act filings before the market reacts.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Activity,
      title: 'Trump Tracker',
      description: 'Get instant alerts on market-moving statements from Trump\'s Truth Social posts.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Trending Tickers',
      description: 'See which stocks are trending on Reddit, Twitter, and social media with momentum scores.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BrainCircuit,
      title: 'VoxAI Assistant',
      description: 'Your personal AI-powered market analyst that answers questions and provides insights.',
      color: 'from-primary to-emerald-400',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get push notifications for insider trades, price changes, and breaking market news.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Newspaper,
      title: 'Market News',
      description: 'Real-time aggregated news from trusted sources, filtered by relevance.',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Calendar,
      title: 'Earnings & IPO Calendar',
      description: 'Never miss important earnings reports, IPO dates, and market events.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: PieChart,
      title: 'Biopharma Catalysts',
      description: 'Track FDA decisions, clinical trials, and drug approval timelines.',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Activity,
      title: 'Volatility Scanner',
      description: 'Identify stocks with unusual volume, top gainers, losers, and most active.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Star,
      title: 'Watchlist',
      description: 'Create and track your favorite stocks with real-time updates in one place.',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data is encrypted and protected with enterprise-grade security.',
      color: 'from-gray-500 to-slate-500',
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mx', `${x}%`)
    card.style.setProperty('--my', `${y}%`)
  }

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      <div className="absolute inset-0 dot-bg opacity-50" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 tracking-super leading-[0.95]">
            Everything You Need to
            <br />
            <span className="gradient-text">Trade Smarter</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful tools and real-time data that give retail investors the same edge as Wall Street professionals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onMouseMove={handleMouseMove}
              className="card tilt-card group cursor-pointer"
            >
              {/* Icon with gradient halo */}
              <div className="relative w-14 h-14 mb-5">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}>
                  <div className="w-full h-full bg-dark-100/95 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:gradient-text-cyan transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

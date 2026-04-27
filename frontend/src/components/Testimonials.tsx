'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Day Trader',
      image: 'MR',
      rating: 5,
      text: 'VoxTrade changed my trading game. Seeing insider buys before the market reacts has given me an incredible edge. The politician trades feature alone is worth the subscription.',
    },
    {
      name: 'Sarah K.',
      role: 'Retail Investor',
      image: 'SK',
      rating: 5,
      text: 'I love the Trump Tracker! It notifies me instantly when there\'s a market-moving post. Saved me from a bad trade more than once. The AI chatbot is super helpful too.',
    },
    {
      name: 'David L.',
      role: 'Swing Trader',
      image: 'DL',
      rating: 5,
      text: 'The biopharma catalyst calendar is a game-changer for biotech trading. I\'ve caught several FDA approval plays thanks to VoxTrade. Highly recommend the Pro plan.',
    },
    {
      name: 'Jennifer M.',
      role: 'Long-term Investor',
      image: 'JM',
      rating: 5,
      text: 'Even as a long-term investor, VoxTrade helps me find good entry points. The insider trade alerts show me when executives are buying their own stock with conviction.',
    },
    {
      name: 'Robert T.',
      role: 'Options Trader',
      image: 'RT',
      rating: 5,
      text: 'The volatility scanner is perfect for options trading. I can quickly find unusual activity and high-momentum plays. VoxAI also helps me analyze potential trades.',
    },
    {
      name: 'Amanda C.',
      role: 'New Investor',
      image: 'AC',
      rating: 5,
      text: 'As a beginner, VoxTrade makes the stock market less intimidating. The trending tickers show me what\'s popular, and VoxAI answers all my questions. Great for learning!',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Loved by
            <br />
            <span className="gradient-text">Traders Everywhere</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of traders who use VoxTrade to make smarter investment decisions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{
                opacity: 0,
                x: index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0,
                y: index % 3 === 1 ? 30 : 10,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/40 mb-4 group-hover:text-primary group-hover:scale-110 transition-all" />

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6">{testimonial.text}</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">{testimonial.image}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-dark-400"
        >
          {[
            { value: '4.9', label: 'App Store Rating' },
            { value: '50K+', label: 'Active Users' },
            { value: '1M+', label: 'Trades Tracked' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

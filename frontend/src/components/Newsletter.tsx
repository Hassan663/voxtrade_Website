'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
          style={{ boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -10px rgba(0,255,200,0.2)' }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5 pointer-events-none" />
          <div className="relative">
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30"
          >
            <Mail className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead of the Market
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get weekly market insights, top insider trades, and exclusive VoxTrade updates delivered to your inbox.
          </p>

          {/* Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-12 py-4 text-white placeholder-gray-500 focus:border-primary/60 focus:bg-white/10 focus:outline-none focus:shadow-lg focus:shadow-primary/20 transition-all"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={20} />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-6 py-4 max-w-md mx-auto"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-green-400 font-medium">You're subscribed! Check your inbox.</span>
            </motion.div>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter

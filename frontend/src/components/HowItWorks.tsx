'use client'

import { motion } from 'framer-motion'
import { Download, UserPlus, Bell, TrendingUp } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      step: '01',
      title: 'Download the App',
      description: 'Get VoxTrade free on iOS or Android. Setup takes less than 2 minutes.',
    },
    {
      icon: UserPlus,
      step: '02',
      title: 'Create Your Account',
      description: 'Sign up with email or use Google/Apple login for instant access.',
    },
    {
      icon: Bell,
      step: '03',
      title: 'Set Your Alerts',
      description: 'Customize notifications for insider trades, price movements, and news.',
    },
    {
      icon: TrendingUp,
      step: '04',
      title: 'Trade Smarter',
      description: 'Use real-time insights to make informed trading decisions.',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get Started in
            <br />
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From download to your first trade insight in under 5 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/30 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center lg:text-left bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all">
                {/* Step Number with glow */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 mb-5 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow"
                >
                  <span className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-3xl font-bold gradient-text-cyan">{step.step}</span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/30 flex items-center justify-center mb-4 mx-auto lg:mx-0"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#download" className="btn-primary inline-flex items-center gap-2">
            Start Free Today
            <TrendingUp size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks

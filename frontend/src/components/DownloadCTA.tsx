'use client'

import { motion } from 'framer-motion'
import { QrCode } from 'lucide-react'
import StoreBadges from './StoreBadges'

const DownloadCTA = () => {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container-custom relative z-10">
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative"
          style={{ boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 80px -10px rgba(0,255,200,0.2)' }}
        >
          {/* Animated glow blobs */}
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Trade
                <br />
                <span className="gradient-text">Smarter?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Download VoxTrade for free and start getting real-time insider trades, politician trades, and AI-powered market insights.
              </p>

              {/* Store badges */}
              <StoreBadges className="mb-8" size="h-14 w-auto" />

              {/* QR Code */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors rounded-xl p-4 inline-flex">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-black" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Scan to Download</div>
                  <div className="text-sm text-gray-400">Point your camera at the QR code</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Phone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Cyan glow halo */}
                <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full scale-90 pointer-events-none" />
                {/* Phone Frame */}
                <div
                  className="relative w-64 h-[520px] bg-[#0a0a0a] rounded-[2.5rem] p-[3px] overflow-hidden shadow-2xl"
                  style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(0,0,0,0.8), 0 0 60px -10px rgba(0,255,200,0.25)' }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-20" />

                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-dark-200 to-black rounded-[2.3rem] p-5 pt-10">
                    {/* App Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <img src="/logo.svg" alt="VoxTrade" className="h-5 w-auto" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                        <div className="text-xs text-gray-400">Latest Alert</div>
                        <div className="text-sm font-medium mt-1">Tim Cook bought $8.2M AAPL</div>
                        <div className="text-primary text-xs mt-1">2 hours ago</div>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                        <div className="text-xs text-gray-400">Trending</div>
                        <div className="flex justify-between mt-2">
                          <span className="text-sm">NVDA</span>
                          <span className="text-sm text-green-400">+4.2%</span>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-sm">TSLA</span>
                          <span className="text-sm text-red-400">-1.8%</span>
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                        <div className="text-xs text-gray-400">Trump Tracker</div>
                        <div className="text-sm mt-1 line-clamp-2">New post about tariffs...</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute -right-4 top-20 bg-gradient-to-br from-primary to-primary-600 text-black px-4 py-2 rounded-xl font-semibold shadow-lg animate-pulse-glow"
                >
                  Free Download!
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadCTA

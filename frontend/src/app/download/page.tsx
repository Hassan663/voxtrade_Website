'use client'

import { motion } from 'framer-motion'
import {
  Apple,
  Smartphone,
  Star,
  CheckCircle2,
  Download as DownloadIcon,
  Shield,
  Zap,
  Bell,
  QrCode,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DownloadPage() {
  const requirements = [
    { platform: 'iOS', detail: 'iOS 15.0 or later · iPhone, iPad, Mac with Apple Silicon' },
    { platform: 'Android', detail: 'Android 8.0 (Oreo) or later · Phone, tablet, Chromebook' },
    { platform: 'Storage', detail: '~85 MB initial install · ~200 MB after data sync' },
    { platform: 'Internet', detail: 'Required for real-time data · works offline for cached views' },
  ]

  const reasons = [
    { icon: Zap, title: 'Real-Time Data', desc: 'SEC filings, news, and price action streamed live to your device.' },
    { icon: Bell, title: 'Push Alerts', desc: 'Be the first to know about every market-moving signal.' },
    { icon: Shield, title: 'Bank-Level Security', desc: 'AES-256 encryption, biometric login, zero-knowledge architecture.' },
  ]

  const reviews = [
    { name: 'Marcus T.', rating: 5, text: 'Caught a 30% move on a politician buy alert. This app pays for itself.' },
    { name: 'Sarah K.', rating: 5, text: 'The AI assistant alone is worth it. Like having a Bloomberg terminal in my pocket.' },
    { name: 'David L.', rating: 5, text: 'Finally - insider trade alerts that actually arrive in real time.' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Download</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Get VoxTrade on
              <br />
              <span className="gradient-text">Every Device</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Free on iOS and Android. No credit card. No trial limits. Just download and start trading smarter.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="https://apps.apple.com/app/voxtrade"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold leading-tight">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.voxtrade"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold leading-tight">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* Ratings */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-gray-400">4.9 on App Store · 50k+ ratings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-gray-400">4.8 on Google Play · 35k+ ratings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QR + Reasons */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/30"
            >
              <div className="w-48 h-48 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6">
                <QrCode className="w-32 h-32 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Scan to Download</h3>
              <p className="text-gray-400">Point your phone&apos;s camera at the QR code to install VoxTrade.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why download?</h2>
              <div className="space-y-4">
                {reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <r.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{r.title}</h3>
                      <p className="text-gray-400 text-sm">{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">System Requirements</h2>
            <p className="text-xl text-gray-400">Works on virtually any modern device.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {requirements.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{r.platform}</h3>
                </div>
                <p className="text-gray-400 text-sm">{r.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-dark-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">From the App Stores</h2>
            <p className="text-xl text-gray-400">Real reviews from real traders.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
              >
                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm text-gray-500">- {r.name}</p>
              </motion.div>
            ))}
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
            <DownloadIcon className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready in 30 seconds.</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Download, sign up, and start tracking the smart money. Your account works across all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/app/voxtrade" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
                <Apple className="w-5 h-5" /> App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.voxtrade" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" /> Google Play
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Need help? <Link href="/help" className="text-primary hover:underline">Visit our help center</Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

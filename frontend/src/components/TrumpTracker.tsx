'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const TrumpTracker = () => {
  const [speakingId, setSpeakingId] = useState<number | null>(null)

  const posts = [
    {
      text: 'Just spoke with Tim Cook about bringing iPhone manufacturing to the USA. Big things coming for American jobs! 🇺🇸',
      time: '2 hours ago',
      impact: 'BULLISH',
      tickers: ['AAPL', 'FOXC'],
      change: '+2.3%',
    },
    {
      text: 'The Federal Reserve is KILLING our economy with high interest rates. They need to CUT NOW!',
      time: '5 hours ago',
      impact: 'BEARISH',
      tickers: ['SPY', 'QQQ'],
      change: '-0.8%',
    },
    {
      text: 'China tariffs are coming. American steel and manufacturing will be PROTECTED!',
      time: '1 day ago',
      impact: 'MIXED',
      tickers: ['X', 'NUE', 'BABA'],
      change: '+1.5%',
    },
  ]

  const handleSpeak = (text: string, postId: number) => {
    // Check if browser supports speech synthesis
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }

    // If clicking the same post that's speaking, stop it (toggle off)
    if (speakingId === postId) {
      window.speechSynthesis.cancel()
      setSpeakingId(null)
      return
    }

    // Cancel any previous speech
    window.speechSynthesis.cancel()

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 1

    // Clear state when speech ends naturally
    utterance.onend = () => {
      setSpeakingId(null)
    }

    // Clear state on error
    utterance.onerror = () => {
      setSpeakingId(null)
    }

    // Start speaking
    window.speechSynthesis.speak(utterance)
    setSpeakingId(postId)
  }

  // Cleanup speech on unmount (e.g. route change)
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-red-500/15 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Trump Tracker</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Track Market-Moving
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Social Posts
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
              Trump&apos;s Truth Social posts can move markets in minutes. Get instant alerts on market-relevant
              statements before they impact stock prices.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-gray-300">AI-powered market relevance filtering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-gray-300">Real-time push notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-gray-300">Tap any post to listen with AI voice</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-gray-300">Automatic ticker detection</span>
              </div>
            </div>

            <a
              href="#download"
              className="btn-secondary border-red-400 text-red-400 hover:bg-red-400 hover:text-white inline-flex items-center gap-2"
            >
              Enable Trump Alerts
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Right Content - Posts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full scale-75" />

            <div className="relative space-y-4">
              {posts.map((post, index) => {
                const isSpeaking = speakingId === index
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className={`bg-white/5 backdrop-blur-xl border rounded-xl p-4 sm:p-5 transition-all ${
                      isSpeaking
                        ? 'border-primary/50 shadow-lg shadow-primary/20'
                        : post.impact === 'BULLISH'
                          ? 'border-white/10 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10'
                          : post.impact === 'BEARISH'
                            ? 'border-white/10 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-400/10'
                            : 'border-white/10 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <MessageSquare className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-400 truncate">Truth Social</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] sm:text-xs text-gray-500">{post.time}</span>

                        {/* Speaker button */}
                        <div className="relative group">
                          <motion.button
                            onClick={() => handleSpeak(post.text, index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.92 }}
                            className={`relative w-9 h-9 rounded-full backdrop-blur-sm border flex items-center justify-center transition-colors ${
                              isSpeaking
                                ? 'bg-primary/20 border-primary/60'
                                : 'bg-white/5 border-white/10 hover:bg-primary/10 hover:border-primary/40'
                            }`}
                            style={
                              isSpeaking
                                ? { boxShadow: '0 0 20px rgba(0,255,200,0.4)' }
                                : undefined
                            }
                            aria-label={isSpeaking ? 'Stop' : 'Listen to post'}
                          >
                            {/* Pulsing ring when speaking */}
                            {isSpeaking && (
                              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                            )}

                            {isSpeaking ? (
                              <VolumeX size={16} className="text-primary relative" />
                            ) : (
                              <Volume2
                                size={16}
                                className="text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all relative"
                              />
                            )}
                          </motion.button>

                          {/* Tooltip */}
                          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 backdrop-blur-sm border border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {isSpeaking ? 'Stop' : 'Listen to post'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Post Text */}
                    <p className="text-sm sm:text-base text-gray-200 mb-4 leading-relaxed">{post.text}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        {post.tickers.map((ticker) => (
                          <span
                            key={ticker}
                            className="text-[10px] sm:text-xs bg-dark-400 px-2 py-1 rounded font-medium"
                          >
                            ${ticker}
                          </span>
                        ))}
                      </div>
                      <div
                        className={`flex items-center gap-1 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full border ${
                          post.impact === 'BULLISH'
                            ? 'text-green-400 bg-green-400/10 border-green-400/30'
                            : post.impact === 'BEARISH'
                              ? 'text-red-400 bg-red-400/10 border-red-400/30'
                              : 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
                        }`}
                      >
                        {post.impact === 'BULLISH' ? (
                          <TrendingUp size={14} />
                        ) : post.impact === 'BEARISH' ? (
                          <TrendingDown size={14} />
                        ) : (
                          <span>⚡</span>
                        )}
                        <span>{post.impact}</span>
                        <span className="text-gray-400 ml-1">{post.change}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrumpTracker

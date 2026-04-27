'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Send, Brain, MessageCircle, Zap } from 'lucide-react'
import { useState } from 'react'

const VoxAI = () => {
  const [inputValue, setInputValue] = useState('')

  const chatMessages = [
    {
      type: 'user',
      message: 'What do you think about NVDA right now?',
    },
    {
      type: 'ai',
      message: 'Based on recent data, NVDA shows strong momentum. Key insights:\n\n• 3 insider buys in the past week totaling $2.1M\n• Trending on Reddit with 85% bullish sentiment\n• Upcoming earnings on Feb 21st\n• Nancy Pelosi recently purchased call options\n\nThe AI chip demand continues to drive growth. Consider monitoring the upcoming earnings for guidance updates.',
    },
    {
      type: 'user',
      message: 'Any risks I should know about?',
    },
    {
      type: 'ai',
      message: 'Key risks to consider:\n\n• High valuation (P/E above sector average)\n• China export restrictions could impact revenue\n• Competition from AMD and custom AI chips\n• Some insider selling at higher price levels\n\nAlways do your own research and consider your risk tolerance.',
    },
  ]

  const capabilities = [
    {
      icon: Brain,
      title: 'Market Analysis',
      description: 'Get instant analysis on any stock, sector, or market trend.',
    },
    {
      icon: BrainCircuit,
      title: 'Trade Ideas',
      description: 'AI-generated insights based on insider activity and sentiment.',
    },
    {
      icon: MessageCircle,
      title: 'Natural Conversation',
      description: 'Ask questions in plain English, get intelligent answers.',
    },
    {
      icon: Zap,
      title: 'Real-Time Data',
      description: 'Powered by live market data, news, and social sentiment.',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-dark-100">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <BrainCircuit className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Powered by AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet Your Personal
            <br />
            <span className="gradient-text">AI Market Analyst</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            VoxAI combines real-time market data, insider trades, and social sentiment to give you intelligent answers to any market question.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -10px rgba(0,255,200,0.15)' }}
            >
              {/* Chat Header */}
              <div className="bg-white/[0.03] px-6 py-4 border-b border-white/10 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-lg shadow-primary/40 animate-pulse-glow">
                  <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  <BrainCircuit className="relative w-6 h-6 text-black" strokeWidth={2.25} />
                </div>
                <div>
                  <div className="font-semibold">VoxAI Assistant</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.type === 'user'
                        ? 'bg-primary text-black rounded-br-md shadow-lg shadow-primary/20'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-bl-md'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 focus-within:border-primary/50 focus-within:shadow-lg focus-within:shadow-primary/10 transition-all">
                  <input
                    type="text"
                    placeholder="Ask VoxAI anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
                  />
                  <button className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <Send className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">What VoxAI Can Do</h3>
            
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow"
                >
                  <cap.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">{cap.title}</h4>
                  <p className="text-gray-400 text-sm">{cap.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                * VoxAI is for informational purposes only and does not provide financial advice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VoxAI

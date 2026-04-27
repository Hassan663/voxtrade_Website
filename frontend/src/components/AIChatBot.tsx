'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BrainCircuit, X, Send, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type Message = { role: 'user' | 'ai'; text: string }

const SAMPLE_QUESTIONS = [
  "What are today's top insider trades?",
  'Show me politician trades',
  "What's trending on Reddit?",
  'Explain options trading',
]

const DUMMY_RESPONSE =
  "I'm currently in demo mode. In the full app, I can analyze stocks, track insider trades, and give you real-time market insights. Download VoxTrade to unlock my full potential! 🚀"

const WELCOME_TEXT = 'Welcome to VoxAI, Ready to help you grow more'

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const hasSpokenRef = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Voice welcome (Web Speech API) on first open
  useEffect(() => {
    if (!isOpen || hasSpokenRef.current || isMuted) return
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const u = new SpeechSynthesisUtterance(WELCOME_TEXT)
    u.rate = 1.0
    u.pitch = 1.0
    u.volume = 0.9
    window.speechSynthesis.speak(u)
    hasSpokenRef.current = true
  }, [isOpen, isMuted])

  // Cancel any speech when chat closes
  useEffect(() => {
    if (isOpen) return
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
  }, [isOpen])

  // Escape key closes chat
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen])

  // Autoscroll to bottom on new content
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Focus input when opening
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((m) => [...m, { role: 'user', text: trimmed }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((m) => [...m, { role: 'ai', text: DUMMY_RESPONSE }])
    }, 1500)
  }

  const toggleMute = () => {
    setIsMuted((m) => !m)
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
  }

  return (
    <>
      {/* === Floating button === */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-2xl group"
        style={{ boxShadow: '0 8px 32px rgba(0,255,200,0.4), 0 0 60px rgba(0,255,200,0.3)' }}
        aria-label={isOpen ? 'Close VoxAI chat' : 'Open VoxAI chat'}
      >
        {/* Pulsing rings (continuous) */}
        <span className="absolute inset-0 rounded-full bg-primary opacity-40 animate-ping" />
        <span
          className="absolute inset-0 rounded-full bg-primary opacity-20"
          style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '0.6s' }}
        />

        {/* Icon */}
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="relative"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="sparkle"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="relative"
            >
              <BrainCircuit className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* === Chat window === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-[59] sm:w-[380px] sm:h-[500px] flex flex-col"
          >
            <div
              className="flex-1 flex flex-col bg-black/80 backdrop-blur-2xl border border-white/10 sm:rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 20px 60px -10px rgba(0,0,0,0.8), 0 0 60px -10px rgba(0,255,200,0.2)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-5 h-5 text-black" strokeWidth={2.25} />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">VoxAI Assistant</div>
                    <div className="flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                    aria-label={isMuted ? 'Unmute voice' : 'Mute voice'}
                    title={isMuted ? 'Unmute voice' : 'Mute voice'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-primary" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
                {messages.length === 0 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-3 text-sm leading-relaxed"
                    >
                      👋 Welcome to VoxAI! I&apos;m here to help you trade smarter. Ask me anything about stocks,
                      insider trades, or market trends.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                        Try asking
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {SAMPLE_QUESTIONS.map((q) => (
                          <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            className="text-xs bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}

                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm leading-snug ${
                        m.role === 'user'
                          ? 'bg-primary text-black rounded-br-md'
                          : 'bg-white/5 border border-white/10 rounded-bl-md'
                      }`}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-bl-md flex gap-1.5">
                      {[0, 150, 300].map((d) => (
                        <span
                          key={d}
                          className="w-2 h-2 rounded-full bg-primary"
                          style={{
                            animation: 'bounce 1s infinite',
                            animationDelay: `${d}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage(input)
                }}
                className="p-3 border-t border-white/10 flex items-center gap-2 flex-shrink-0"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask VoxAI anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-primary hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4 text-black" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChatBot

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  BrainCircuit,
  Activity,
  LayoutDashboard,
  ArrowUpRight,
  ArrowDownRight,
  Send,
  Bell,
  Landmark,
  Sparkles,
  Zap,
  Rocket,
} from 'lucide-react'
import { useEffect, useState, useRef, useCallback } from 'react'
import AnimatedBackground from './AnimatedBackground'
import StoreBadges from './StoreBadges'

/* ---------- screen transition ---------- */
const screenAnim = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
}

/* ---------- mini chart ---------- */
const SparkChart = () => {
  const points = [
    [0, 28], [10, 24], [20, 26], [30, 18], [40, 20],
    [50, 14], [60, 16], [70, 10], [80, 12], [90, 6], [100, 8],
  ]
  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const fill = `${path} L100,40 L0,40 Z`
  return (
    <svg viewBox="0 0 100 40" className="w-full h-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FFC8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00FFC8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#spark)" />
      <path d={path} fill="none" stroke="#00FFC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ---------- screens ---------- */
const DashboardScreen = () => (
  <motion.div key="dashboard" {...screenAnim} className="space-y-3">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Portfolio</div>
          <div className="text-2xl font-bold text-white">$124,832</div>
          <div className="text-primary text-xs flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +12.4% today
          </div>
        </div>
        <span className="text-[9px] text-gray-500">7D</span>
      </div>
      <SparkChart />
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest">Trending</span>
        <span className="text-[10px] text-primary">View All</span>
      </div>
      <div className="space-y-2.5">
        {[
          { ticker: 'NVDA', change: '+4.2%', up: true },
          { ticker: 'TSLA', change: '-2.3%', up: false },
          { ticker: 'META', change: '+1.8%', up: true },
          { ticker: 'AAPL', change: '+0.7%', up: true },
        ].map((t) => (
          <div key={t.ticker} className="flex justify-between items-center">
            <span className="text-xs font-medium">{t.ticker}</span>
            <span className={`text-xs font-semibold ${t.up ? 'text-primary' : 'text-red-400'}`}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
        <div className="text-[9px] text-gray-400 uppercase">24h Vol</div>
        <div className="text-sm font-bold mt-1">$2.4M</div>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
        <div className="text-[9px] text-gray-400 uppercase">Win Rate</div>
        <div className="text-sm font-bold mt-1 text-primary">68%</div>
      </div>
    </div>
  </motion.div>
)

const InsiderScreen = () => (
  <motion.div key="insider" {...screenAnim} className="space-y-2.5">
    <div className="flex items-center gap-2 mb-1">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-[10px] uppercase tracking-widest text-gray-400">Live · Form 4</span>
    </div>
    {[
      { t: 'NVDA', n: 'Jensen Huang', r: 'CEO', v: '$15.2M', up: false, ago: '2h' },
      { t: 'TSLA', n: 'Elon Musk', r: 'CEO', v: '$22.4M', up: true, ago: '6h' },
      { t: 'META', n: 'M. Zuckerberg', r: 'CEO', v: '$23.1M', up: false, ago: '1d' },
      { t: 'AAPL', n: 'Tim Cook', r: 'CEO', v: '$5.9M', up: false, ago: '2d' },
      { t: 'AMZN', n: 'Andy Jassy', r: 'CEO', v: '$8.2M', up: true, ago: '3d' },
      { t: 'GOOG', n: 'Sundar Pichai', r: 'CEO', v: '$11.4M', up: false, ago: '4d' },
    ].map((i, idx) => (
      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i.up ? 'bg-primary/15 text-primary' : 'bg-red-500/15 text-red-400'}`}>
            {i.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          </div>
          <div>
            <div className="text-xs font-semibold">{i.t}</div>
            <div className="text-[10px] text-gray-400">{i.n} · {i.r}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold">{i.v}</div>
          <div className="text-[9px] text-gray-500">{i.ago} ago</div>
        </div>
      </div>
    ))}
  </motion.div>
)

const PoliticianScreen = () => (
  <motion.div key="politician" {...screenAnim} className="space-y-2.5">
    <div className="flex items-center gap-2 mb-1">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-[10px] uppercase tracking-widest text-gray-400">STOCK Act · Live</span>
    </div>
    {[
      { t: 'NVDA', n: 'Nancy Pelosi', p: 'D', s: 'CA', v: '$1M – $5M', up: true },
      { t: 'MSFT', n: 'Dan Crenshaw', p: 'R', s: 'TX', v: '$15K – $50K', up: true },
      { t: 'XOM', n: 'T. Tuberville', p: 'R', s: 'AL', v: '$50K – $100K', up: false },
      { t: 'GOOG', n: 'J. Gottheimer', p: 'D', s: 'NJ', v: '$15K – $50K', up: true },
      { t: 'LMT', n: 'M. McCaul', p: 'R', s: 'TX', v: '$100K – $250K', up: true },
      { t: 'AAPL', n: 'M. Greene', p: 'R', s: 'GA', v: '$15K – $50K', up: false },
    ].map((p, idx) => (
      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[9px] ${p.p === 'D' ? 'bg-blue-500/15 text-blue-400' : 'bg-red-500/15 text-red-400'}`}>
            {p.p}-{p.s}
          </div>
          <div>
            <div className="text-xs font-semibold">{p.n}</div>
            <div className="text-[10px] text-gray-400">{p.t} · {p.up ? 'Buy' : 'Sell'}</div>
          </div>
        </div>
        <div className="text-right text-[10px] font-semibold">{p.v}</div>
      </div>
    ))}
  </motion.div>
)

const TrumpScreen = () => (
  <motion.div key="trump" {...screenAnim} className="space-y-2.5">
    <div className="flex items-center gap-2 mb-1">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      <span className="text-[10px] uppercase tracking-widest text-gray-400">Truth Social · Live</span>
    </div>
    {[
      { time: '12m', text: 'Tariffs on China will be increased by 25% effective immediately!', sentiment: 'Negative', tickers: ['AAPL', 'NVDA'], impact: '-2.4%' },
      { time: '2h', text: 'Just signed the largest infrastructure bill in American history.', sentiment: 'Positive', tickers: ['CAT', 'URI'], impact: '+4.1%' },
      { time: '5h', text: 'Pharma companies need to lower prices NOW.', sentiment: 'Negative', tickers: ['PFE', 'MRK'], impact: '-3.8%' },
      { time: '1d', text: 'Energy independence is back. Drill, baby, drill.', sentiment: 'Positive', tickers: ['XOM', 'CVX'], impact: '+2.6%' },
    ].map((p, idx) => (
      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] text-gray-500">{p.time} ago</span>
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${p.sentiment === 'Positive' ? 'bg-primary/15 text-primary' : 'bg-red-500/15 text-red-400'}`}>
            {p.sentiment}
          </span>
        </div>
        <p className="text-[11px] leading-snug mb-2">&ldquo;{p.text}&rdquo;</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {p.tickers.map((t) => (
              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 font-medium">${t}</span>
            ))}
          </div>
          <span className={`text-[10px] font-bold ${p.impact.startsWith('+') ? 'text-primary' : 'text-red-400'}`}>{p.impact}</span>
        </div>
      </div>
    ))}
  </motion.div>
)

const VoxAIScreen = () => (
  <motion.div key="voxai" {...screenAnim} className="flex flex-col h-full">
    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
        <BrainCircuit className="w-4 h-4 text-black" />
      </div>
      <div>
        <div className="text-xs font-semibold">VoxAI</div>
        <div className="text-[9px] text-primary flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-primary animate-pulse" /> Online
        </div>
      </div>
    </div>
    <div className="space-y-2.5 flex-1">
      {[
        { role: 'user', text: "What's driving NVDA today?" },
        { role: 'ai', text: 'NVDA is up 3.2% on three catalysts: Morgan Stanley raised PT to $180, a $5B Saudi AI deal, and 4:1 bullish call flow.' },
        { role: 'user', text: 'Insider activity?' },
        { role: 'ai', text: 'Jensen Huang sold 120k shares - but it’s a pre-scheduled 10b5-1 plan, so not a directional signal.' },
        { role: 'user', text: 'Should I buy?' },
        { role: 'ai', text: 'Not advice - but momentum + flow look constructive. Watch the $135 support.' },
      ].map((m, i) => (
        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[88%] p-2.5 rounded-2xl text-[11px] leading-snug ${
              m.role === 'user' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 backdrop-blur-sm'
            }`}
          >
            {m.text}
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2 p-2.5 mt-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
      <span className="flex-1 text-[10px] text-gray-500">Ask VoxAI anything…</span>
      <Send className="w-3 h-3 text-primary" />
    </div>
  </motion.div>
)

/* ---------- Floating mini box (satellite) ---------- */
type MiniBoxProps = {
  icon: typeof Bell
  label: string
  style: React.CSSProperties
  bobDuration?: number
  bobOffset?: number
  delay?: number
}
const MiniBox = ({ icon: Icon, label, style, bobDuration = 5, bobOffset = 0, delay = 0 }: MiniBoxProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    style={style}
    className="absolute z-20"
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: bobDuration, repeat: Infinity, ease: 'easeInOut', delay: bobOffset }}
      whileHover={{ scale: 1.06, y: -3 }}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2.5 cursor-default flex items-center gap-2 whitespace-nowrap"
      style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)' }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -inset-px rounded-xl border border-primary/0 group-hover:border-primary/40 transition-colors pointer-events-none"
        style={{ boxShadow: 'inset 0 0 20px rgba(0,255,200,0)' }}
      />
      <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-primary" />
      </div>
      <span className="relative text-xs font-semibold">{label}</span>
    </motion.div>
  </motion.div>
)

/* ---------- Hero ---------- */
const Hero = () => {
  const tabs = [
    { key: 'dashboard', label: 'Home', icon: LayoutDashboard, screen: <DashboardScreen /> },
    { key: 'insider', label: 'Insider', icon: TrendingUp, screen: <InsiderScreen /> },
    { key: 'politicians', label: 'Politics', icon: Users, screen: <PoliticianScreen /> },
    { key: 'trump', label: 'Trump', icon: Activity, screen: <TrumpScreen /> },
    { key: 'voxai', label: 'VoxAI', icon: BrainCircuit, screen: <VoxAIScreen /> },
  ]
  const [activeTab, setActiveTab] = useState(0)
  const pauseUntilRef = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return
      setActiveTab((t) => (t + 1) % tabs.length)
    }, 3000)
    return () => clearInterval(id)
  }, [tabs.length])

  const handleTabClick = useCallback((i: number) => {
    setActiveTab(i)
    pauseUntilRef.current = Date.now() + 10000
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black py-24 lg:py-16">
      <AnimatedBackground variant="hero" showParticles showGrid />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 sm:gap-12 lg:gap-8 items-center">
          {/* LEFT - 40% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 self-start">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-gray-300">Now Available on iOS & Android</span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4 sm:mb-6">
              Trade <span className="gradient-text">Smarter.</span>
              <br />
              Together.
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-md">
              The same edge as Wall Street - distilled into a single app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                href="/download"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary group justify-center"
              >
                Download Free
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary group justify-center"
              >
                <Play size={16} className="mr-2 fill-current" />
                Watch Demo
              </motion.a>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">Free forever. No credit card required.</p>

            {/* Store badges */}
            <StoreBadges className="mt-6" size="h-11 w-auto" />
          </motion.div>

          {/* RIGHT - 60% : Phone with floating satellite boxes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Phone wrapper acts as the positioning anchor for satellites */}
            <div className="relative">
              {/* Floating mini boxes - anchored to phone bounds, hidden on mobile */}
              <div className="hidden lg:block">
                <MiniBox
                  icon={TrendingUp}
                  label="Real-time Insider Trades"
                  style={{ top: 0, left: -180, right: 'auto' }}
                  bobDuration={5}
                  delay={0.5}
                />
                <MiniBox
                  icon={Landmark}
                  label="Congress Trades Tracked"
                  style={{ top: 0, right: -180, left: 'auto' }}
                  bobDuration={5.5}
                  bobOffset={1}
                  delay={0.6}
                />
                <MiniBox
                  icon={Rocket}
                  label="Active Traders"
                  style={{ top: 290, left: -160, right: 'auto' }}
                  bobDuration={6}
                  bobOffset={2}
                  delay={0.7}
                />
                <MiniBox
                  icon={Zap}
                  label="Reliable Uptime"
                  style={{ top: 290, right: -160, left: 'auto' }}
                  bobDuration={5}
                  bobOffset={1.5}
                  delay={0.8}
                />
                <MiniBox
                  icon={Bell}
                  label="Instant Alerts"
                  style={{ bottom: 50, left: -160, right: 'auto' }}
                  bobDuration={5.5}
                  bobOffset={2.5}
                  delay={0.9}
                />
                <MiniBox
                  icon={BrainCircuit}
                  label="AI-Powered Insights"
                  style={{ bottom: 50, right: -180, left: 'auto' }}
                  bobDuration={6}
                  bobOffset={0.5}
                  delay={1}
                />
              </div>

              {/* Phone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full scale-90 pointer-events-none" />
                <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full scale-110 pointer-events-none" />

                <div
                  className="relative w-[260px] sm:w-[280px] lg:w-[320px] h-[560px] sm:h-[600px] lg:h-[650px] bg-[#0a0a0a] rounded-[44px] p-[3px] shadow-2xl"
                  style={{
                    boxShadow:
                      '0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(0,0,0,0.8), 0 0 80px -10px rgba(0,255,200,0.2)',
                  }}
                >
                  <div className="relative w-full h-full bg-black rounded-[41px] overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30" />

                    <div className="flex justify-between items-center px-7 pt-3.5 pb-2 z-20">
                      <span className="text-[11px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 border-[1.5px] border-white rounded-sm" />
                        <div className="w-5 h-2.5 border border-white rounded-[3px] relative">
                          <div className="absolute right-[1px] top-[1px] bottom-[1px] left-[3px] bg-primary rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-5 py-2">
                      <div className="flex items-center gap-1.5">
                        <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <filter id="heroLogoGlow" x="-40%" y="-40%" width="180%" height="180%">
                              <feGaussianBlur stdDeviation="2.2" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          <g filter="url(#heroLogoGlow)">
                            <rect x="17.2" y="30" width="1.6" height="44" rx="0.8" fill="#00C896" />
                            <rect x="33.2" y="18" width="1.6" height="64" rx="0.8" fill="#1CE7C9" />
                            <rect x="49.2" y="10" width="1.6" height="80" rx="0.8" fill="#3DF0DA" />
                            <rect x="65.2" y="18" width="1.6" height="64" rx="0.8" fill="#1CE7C9" />
                            <rect x="81.2" y="30" width="1.6" height="44" rx="0.8" fill="#00C896" />
                            <rect x="12" y="40" width="12" height="24" rx="3" fill="#00C896" />
                            <rect x="28" y="28" width="12" height="44" rx="3" fill="#1CE7C9" />
                            <rect x="44" y="20" width="12" height="56" rx="3" fill="#3DF0DA" />
                            <rect x="60" y="28" width="12" height="44" rx="3" fill="#1CE7C9" />
                            <rect x="76" y="40" width="12" height="24" rx="3" fill="#00C896" />
                          </g>
                        </svg>
                        <span className="text-sm font-bold tracking-tight">
                          Vox<span className="text-primary">Trade</span>
                        </span>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest text-gray-500">
                        {tabs[activeTab].label}
                      </span>
                    </div>

                    <div className="flex-1 px-4 pt-2 pb-2 overflow-hidden relative">
                      <AnimatePresence mode="wait">
                        <motion.div key={tabs[activeTab].key} className="h-full">
                          {tabs[activeTab].screen}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl px-2 py-2 pb-3">
                      <div className="grid grid-cols-5 gap-1">
                        {tabs.map((tab, i) => {
                          const active = activeTab === i
                          return (
                            <button
                              key={tab.key}
                              onClick={() => handleTabClick(i)}
                              className="relative flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition-colors"
                            >
                              {active && (
                                <motion.div
                                  layoutId="hero-active-tab"
                                  className="absolute inset-0 rounded-xl bg-primary"
                                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                />
                              )}
                              <tab.icon className={`w-[18px] h-[18px] relative z-10 ${active ? 'text-black' : 'text-gray-500'}`} />
                              <span className={`text-[9px] font-semibold relative z-10 ${active ? 'text-black' : 'text-gray-500'}`}>
                                {tab.label}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

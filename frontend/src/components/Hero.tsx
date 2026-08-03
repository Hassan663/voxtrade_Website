'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Play,
  TrendingUp,
  TrendingDown,
  BrainCircuit,
  Landmark,
  Sparkles,
  Zap,
  Rocket,
  Bell,
  Home,
  LineChart,
  Star,
  User,
  Search,
  ChevronRight,
  BarChart3,
  Newspaper,
  Hexagon,
  Activity,
  Pencil,
  Shield,
  Settings,
  HelpCircle,
} from 'lucide-react'
import { useEffect, useState, useRef, useCallback } from 'react'
import AnimatedBackground from './AnimatedBackground'
import StoreBadges from './StoreBadges'

/*
  In-phone app demo — illustrative showcase, not live data.
  Visual language mirrors the real VoxTrade app: pure-black bg, dark-gray cards
  with hairline borders, teal (#00FFC8) accent, serif display titles, and the
  4-tab bottom nav (Home / Markets / Watchlist / Profile) with a teal-glow
  active chip.
*/

/* ---------- shared bits ---------- */
const screenAnim = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
}

const CARD = 'bg-dark-300 border border-white/[0.06] rounded-2xl'

const LogoMark = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="heroDemoGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#heroDemoGlow)">
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
)

const LivePill = () => (
  <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-2 py-0.5">
    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    <span className="text-[8px] font-semibold tracking-wider text-primary">LIVE</span>
  </span>
)

/* ---------- Watchlist area chart (smooth line + teal gradient + grid) ---------- */
const AreaChart = () => {
  const line =
    'M0,26 C8,24 12,15 20,13 C28,11 33,20 42,22 C51,24 56,27 64,30 C71,32 75,33 82,27 C88,22 94,21 100,19'
  const area = `${line} L100,40 L0,40 Z`
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="wlFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FFC8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#00FFC8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[8, 16, 24, 32].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="100"
          y2={y}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <path d={area} fill="url(#wlFill)" />
      <motion.path
        d={line}
        fill="none"
        stroke="#00FFC8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  )
}

/* ================= SCREENS ================= */

/* ---- Home / Dashboard ---- */
const HomeScreen = () => {
  const chips = [
    { label: 'Overview', icon: BarChart3, active: true },
    { label: 'Trending', icon: TrendingUp, active: false },
    { label: 'News', icon: Newspaper, active: false },
    { label: 'Trump', icon: Activity, active: false },
  ]
  const ranks = [
    { rank: '#1', ticker: 'SPY', mentions: 92, bull: true },
    { rank: '#2', ticker: 'NVDA', mentions: 78, bull: true },
    { rank: '#3', ticker: 'TSLA', mentions: 51, bull: false },
  ]
  return (
    <motion.div key="home" {...screenAnim} className="space-y-3.5">
      {/* Brand header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-dark-400 border border-white/10 flex items-center justify-center">
            <LogoMark size={16} />
          </div>
          <span className="text-sm font-bold tracking-tight">
            Vox<span className="text-primary">Trade</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-dark-400 border border-white/10 flex items-center justify-center">
            <Bell className="w-3.5 h-3.5 text-gray-300" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-[11px] font-bold text-black">B</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-serif text-xl font-bold leading-none">Dashboard</h3>
        <p className="text-[9px] text-gray-500 mt-1">Monday, Aug 3, 2026</p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 rounded-full bg-dark-400 border border-white/[0.06] px-3 py-2">
        <Search className="w-3.5 h-3.5 text-gray-500" />
        <span className="text-[10px] text-gray-500">Search for a module…</span>
      </div>

      {/* Filter chips */}
      <div className="flex items-center gap-1.5 overflow-hidden">
        {chips.map((c) => (
          <span
            key={c.label}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-semibold whitespace-nowrap ${
              c.active
                ? 'bg-primary text-black'
                : 'bg-dark-400 border border-white/[0.06] text-gray-400'
            }`}
          >
            <c.icon className="w-2.5 h-2.5" />
            {c.label}
          </span>
        ))}
      </div>

      {/* Trending tickers */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-serif text-sm font-bold">Trending Tickers</h4>
          <span className="text-[9px] font-semibold text-primary">View All</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {ranks.map((r) => (
            <div key={r.ticker} className={`${CARD} p-2.5 flex flex-col items-center text-center gap-1`}>
              <span className="w-6 h-6 rounded-full border border-primary/40 flex items-center justify-center text-[9px] font-bold text-primary">
                {r.rank}
              </span>
              <span className="text-xs font-bold">{r.ticker}</span>
              <span className="text-[8px] text-gray-500">{r.mentions} mentions</span>
              <span
                className={`text-[7px] font-bold tracking-wide rounded px-1.5 py-0.5 border ${
                  r.bull ? 'border-primary/50 text-primary' : 'border-red-500/50 text-red-400'
                }`}
              >
                {r.bull ? 'BULLISH' : 'BEARISH'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top news */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-serif text-sm font-bold">Top News</h4>
          <span className="text-[9px] font-semibold text-primary">More</span>
        </div>
        <div className={`${CARD} p-3`}>
          <p className="text-[11px] font-semibold leading-snug">Fed holds rates steady; futures tick higher</p>
          <div className="flex items-center gap-2 mt-1.5 text-[8px] text-gray-500">
            <span>Reuters</span>
            <span>·</span>
            <span>12m ago</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ---- Markets / Overview ---- */
const MarketsScreen = () => {
  const modules = [
    { icon: Newspaper, title: 'News List', desc: 'Breaking macro & stock news' },
    { icon: Hexagon, title: 'Trending Tickers', desc: 'Unusual volume & smart money' },
    { icon: TrendingUp, title: 'Insider Flow', desc: 'Live SEC Form 4 filings' },
    { icon: Landmark, title: 'Congress Trades', desc: 'STOCK Act disclosures' },
  ]
  return (
    <motion.div key="markets" {...screenAnim} className="space-y-3">
      {/* Logo hero */}
      <div className="relative flex flex-col items-center pt-1 pb-1">
        <div className="absolute top-2 w-40 h-16 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
        <div className="relative">
          <LogoMark size={52} />
        </div>
        <h3 className="relative font-serif text-lg font-bold mt-1">
          <span className="text-primary">Markets</span> Overview
        </h3>
        <p className="relative text-[9px] text-gray-500 text-center leading-snug mt-1 px-2">
          All your signals in one place — let the market speak.
        </p>
      </div>

      {/* Module cards */}
      <div className="space-y-2">
        {modules.map((m) => (
          <div
            key={m.title}
            className={`${CARD} p-3 flex items-center gap-3 hover:border-primary/30 transition-colors`}
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center flex-shrink-0">
              <m.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-[13px] font-bold leading-tight">{m.title}</div>
              <div className="text-[9px] text-gray-500 truncate">{m.desc}</div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ---- Watchlist ---- */
const WatchlistScreen = () => {
  const stats = [
    { label: 'Total Stocks', value: '5', active: true },
    { label: 'Gainers', value: '3', active: false },
    { label: 'Losers', value: '2', active: false },
  ]
  const yLabels = ['$186.4', '$184.8', '$181.0', '$178.2']
  return (
    <motion.div key="watchlist" {...screenAnim} className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border border-primary/50 flex items-center justify-center">
            <Star className="w-3.5 h-3.5 text-primary" fill="#00FFC8" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold leading-none">WatchList</h3>
            <p className="text-[8px] text-gray-500 mt-0.5">Track your favorite stocks</p>
          </div>
        </div>
        <div className="w-7 h-7 rounded-lg bg-dark-400 border border-white/10 flex items-center justify-center">
          <Pencil className="w-3 h-3 text-gray-300" />
        </div>
      </div>

      {/* Performance */}
      <div className={`${CARD} p-3`}>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-400">
            Watchlist Performance
          </span>
          <LivePill />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl p-2 flex flex-col items-center gap-1 border ${
                s.active ? 'border-primary/60 bg-primary/[0.04]' : 'border-white/[0.06] bg-dark-400'
              }`}
            >
              <span className="text-[8px] text-gray-400 text-center leading-tight">{s.label}</span>
              <span className="text-lg font-bold text-primary leading-none">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 rounded-full bg-dark-400 border border-white/[0.06] px-3 py-2">
        <Search className="w-3.5 h-3.5 text-gray-500" />
        <span className="text-[10px] text-gray-500">Search watchlist…</span>
      </div>

      {/* Ticker card */}
      <div className="relative rounded-2xl bg-dark-300 border border-white/[0.06] p-3 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl" />
        <div className="flex items-start justify-between mb-2 pl-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/30 rounded-md px-1.5 py-1">
              NVDA
            </span>
            <div>
              <div className="text-sm font-bold leading-none">NVDA</div>
              <div className="text-[8px] text-gray-500 mt-0.5">NVIDIA Corp</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold">$184.20</div>
            <div className="text-[10px] font-semibold text-primary flex items-center justify-end gap-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> 2.14%
            </div>
          </div>
        </div>

        {/* Chart with axes */}
        <div className="flex pl-1.5">
          <div className="flex flex-col justify-between text-[6px] text-gray-600 pr-1 py-0.5 h-16">
            {yLabels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <div className="relative flex-1 h-16">
            <AreaChart />
          </div>
        </div>
        <div className="flex justify-between text-[6px] text-gray-600 mt-1 pl-9 pr-1">
          {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-1 mt-2.5 pt-2.5 border-t border-white/[0.06] pl-1.5">
          {[
            { l: 'Volume', v: '48.2M' },
            { l: 'Day High', v: '185.9' },
            { l: 'Day Low', v: '180.4' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[7px] text-gray-500 uppercase tracking-wide">{s.l}</div>
              <div className="text-[10px] font-semibold mt-0.5">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ---- Profile (no screenshot reference — built from shown design language) ---- */
const ProfileScreen = () => {
  const settings = [
    { icon: Bell, label: 'Notifications' },
    { icon: Shield, label: 'Security' },
    { icon: Settings, label: 'Appearance' },
    { icon: HelpCircle, label: 'Help & Support' },
  ]
  return (
    <motion.div key="profile" {...screenAnim} className="space-y-3.5">
      <h3 className="font-serif text-xl font-bold">Profile</h3>

      {/* Identity */}
      <div className={`${CARD} p-4 flex items-center gap-3`}>
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
          <span className="text-lg font-bold text-black">B</span>
        </div>
        <div>
          <div className="text-sm font-bold">Brendan</div>
          <span className="inline-flex items-center gap-1 mt-1 rounded-full border border-primary/40 px-2 py-0.5 text-[8px] font-semibold text-primary">
            <Sparkles className="w-2.5 h-2.5" /> PRO MEMBER
          </span>
        </div>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Watchlists', v: '5' },
          { l: 'Alerts', v: '12' },
          { l: 'Following', v: '38' },
        ].map((s) => (
          <div key={s.l} className={`${CARD} p-2.5 flex flex-col items-center gap-0.5`}>
            <span className="text-lg font-bold text-primary leading-none">{s.v}</span>
            <span className="text-[8px] text-gray-500">{s.l}</span>
          </div>
        ))}
      </div>

      {/* Settings list */}
      <div className="space-y-2">
        {settings.map((s) => (
          <div
            key={s.label}
            className={`${CARD} p-3 flex items-center gap-3 hover:border-primary/30 transition-colors`}
          >
            <div className="w-8 h-8 rounded-lg bg-dark-400 border border-white/[0.06] flex items-center justify-center flex-shrink-0">
              <s.icon className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="flex-1 text-[11px] font-medium">{s.label}</span>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

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
    { key: 'home', label: 'Home', icon: Home, screen: <HomeScreen /> },
    { key: 'markets', label: 'Markets', icon: LineChart, screen: <MarketsScreen /> },
    { key: 'watchlist', label: 'Watchlist', icon: Star, screen: <WatchlistScreen /> },
    { key: 'profile', label: 'Profile', icon: User, screen: <ProfileScreen /> },
  ]
  const [activeTab, setActiveTab] = useState(0)
  const pauseUntilRef = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return
      setActiveTab((t) => (t + 1) % tabs.length)
    }, 3500)
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

                    {/* Status bar */}
                    <div className="flex justify-between items-center px-7 pt-3.5 pb-2 z-20">
                      <span className="text-[11px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-semibold text-gray-300">5G</span>
                        <div className="w-5 h-2.5 border border-white rounded-[3px] relative">
                          <div className="absolute right-[1px] top-[1px] bottom-[1px] left-[3px] bg-primary rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="flex-1 px-4 pt-2 pb-2 overflow-hidden relative">
                      <AnimatePresence mode="wait">
                        <motion.div key={tabs[activeTab].key} className="h-full">
                          {tabs[activeTab].screen}
                        </motion.div>
                      </AnimatePresence>
                      {/* fade the content into the nav */}
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent" />
                    </div>

                    {/* Bottom nav */}
                    <div className="border-t border-white/[0.06] bg-black px-2 pt-2 pb-3">
                      <div className="grid grid-cols-4 gap-1">
                        {tabs.map((tab, i) => {
                          const active = activeTab === i
                          return (
                            <button
                              key={tab.key}
                              onClick={() => handleTabClick(i)}
                              className="flex flex-col items-center gap-1 py-1"
                              aria-label={tab.label}
                            >
                              <motion.div
                                initial={false}
                                animate={{ scale: active ? 1 : 0.96 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className={`flex items-center justify-center w-11 h-9 rounded-xl border transition-colors ${
                                  active
                                    ? 'bg-primary/[0.12] border-primary/60'
                                    : 'border-transparent'
                                }`}
                                style={active ? { boxShadow: '0 0 16px -2px rgba(0,255,200,0.5)' } : undefined}
                              >
                                <tab.icon
                                  className={`w-[18px] h-[18px] ${active ? 'text-primary' : 'text-gray-500'}`}
                                  strokeWidth={active ? 2.2 : 1.8}
                                />
                              </motion.div>
                              <span
                                className={`text-[9px] ${
                                  active ? 'text-primary font-semibold' : 'text-gray-500'
                                }`}
                              >
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

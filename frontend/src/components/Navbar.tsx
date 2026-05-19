'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, TrendingUp, Users, Activity, Bot } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const productLinks = [
    { name: 'Insider Trades', href: '/insider-trades', icon: TrendingUp, desc: 'Real-time SEC Form 4 alerts' },
    { name: 'Politician Trades', href: '/politician-trades', icon: Users, desc: 'STOCK Act filings, every member' },
    { name: 'Trump Tracker', href: '/trump-tracker', icon: Activity, desc: 'Truth Social market signals' },
    { name: 'VoxAI', href: '/vox-ai', icon: Bot, desc: 'Your personal AI analyst' },
  ]

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Download', href: '/download' },
    { name: 'Help', href: '/help' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <rect x="8" y="45" width="8" height="30" rx="2" fill="#00CB9F"/>
                <rect x="22" y="25" width="10" height="55" rx="2" fill="#00FFEA"/>
                <rect x="38" y="15" width="10" height="70" rx="2" fill="#00FFEA"/>
                <rect x="54" y="25" width="10" height="55" rx="2" fill="#00FFEA"/>
                <rect x="70" y="35" width="10" height="40" rx="2" fill="#00CB9F"/>
                <rect x="84" y="45" width="8" height="30" rx="2" fill="#00CB9F"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Vox<span className="text-primary">Trade</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors font-medium text-sm">
                Products
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80"
                  >
                    <div className="glass-strong rounded-2xl p-2 shadow-2xl" style={{ boxShadow: '0 20px 60px -10px rgba(0, 255, 200, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)' }}>
                      {productLinks.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <p.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm group-hover:text-primary transition-colors">{p.name}</div>
                            <div className="text-xs text-gray-400">{p.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="link-underline text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/download"
              className="btn-primary text-sm"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mt-2 mb-1">Products</div>
              {productLinks.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-dark-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-gray-400">{p.desc}</div>
                  </div>
                </Link>
              ))}

              <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mt-6 mb-1">Company</div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-white hover:text-primary transition-colors p-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/download"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

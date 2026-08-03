'use client'

import { Instagram, Youtube, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import StoreBadges from './StoreBadges'
import type { ComponentType } from 'react'

const XIcon: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const TikTokIcon: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
)

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download', href: '#download' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Help', href: '/help' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks: { icon: ComponentType<{ className?: string }>; href: string; label: string }[] = [
    { icon: XIcon, href: 'https://x.com/VoxTradeAI', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/p/DYfihWwgvGn/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UC_PX5goQV27D3PQnRTxd54w', label: 'YouTube' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@voxtradeapp?lang=en', label: 'TikTok' },
  ]

  return (
    <footer className="bg-dark-100 border-t border-dark-400">
      <div className="container-custom py-12 sm:py-16 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="footerLogoGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="2.2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <g filter="url(#footerLogoGlow)">
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
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Vox<span className="text-primary">Trade</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm text-center md:text-left text-sm sm:text-base">
              Trade Smarter. Together. Get real-time insider trades, politician trades, and AI-powered market insights.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 w-full md:w-auto">
              <a href="mailto:brendan@voxtradeapp.com" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">brendan@voxtradeapp.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Kalispell, Montana, USA</span>
              </div>
            </div>

            {/* Store badges */}
            <StoreBadges className="mt-6 justify-center md:justify-start" size="h-10 w-auto" />

            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-underline text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-underline text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-underline text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-underline text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VoxTrade. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            VoxTrade is for informational purposes only and does not provide financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

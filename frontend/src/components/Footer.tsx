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

const RedditIcon: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.8 11.33c.02.14.03.29.03.44 0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44-.51-.23-.86-.74-.86-1.33 0-.81.66-1.47 1.47-1.47.41 0 .78.17 1.05.44.93-.64 2.17-1.03 3.52-1.06l.72-3.24c.02-.09.07-.17.14-.22s.16-.07.25-.05l2.28.5c.15-.31.47-.53.84-.53.52 0 .94.42.94.94s-.42.94-.94.94-.94-.42-.94-.94l-2.04-.45-.63 2.87c1.32.04 2.53.43 3.45 1.06.27-.27.64-.44 1.05-.44.81 0 1.47.66 1.47 1.47 0 .59-.35 1.1-.86 1.33zM9.5 12.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4.75 3.38c.2.12.45.06.57-.14.34-.58 1.12-.97 2.04-.97s1.7.39 2.04.97c.12.2.37.26.57.14.2-.12.26-.37.14-.57-.47-.8-1.48-1.33-2.75-1.33s-2.28.53-2.75 1.33c-.12.2-.06.45.14.57z" />
  </svg>
)

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download', href: '#download' },
      { name: 'Roadmap', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Docs', href: '#' },
      { name: 'Status', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  }

  const socialLinks: { icon: ComponentType<{ className?: string }>; href: string; label: string }[] = [
    { icon: XIcon, href: 'https://x.com/VoxTradeAI', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/p/DYfihWwgvGn/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UC_PX5goQV27D3PQnRTxd54w', label: 'YouTube' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@voxtradeapp?lang=en', label: 'TikTok' },
    { icon: RedditIcon, href: 'https://www.reddit.com/user/VoxTradeApp/', label: 'Reddit' },
  ]

  return (
    <footer className="bg-dark-100 border-t border-dark-400">
      <div className="container-custom py-12 sm:py-16 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
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
            <p className="text-gray-400 mb-6 max-w-sm text-center md:text-left text-sm sm:text-base">
              Trade Smarter. Together. Get real-time insider trades, politician trades, and AI-powered market insights.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 w-full md:w-auto">
              <a href="mailto:support@voxtradeapp.com" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">support@voxtradeapp.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Denver, Colorado, USA</span>
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

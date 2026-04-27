'use client'

import { Twitter, Instagram, Youtube, Linkedin, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

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

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/voxtradeapp', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/voxtradeapp', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@voxtradeapp', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/voxtrade', label: 'LinkedIn' },
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

import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'VoxTrade | Trade Smarter. Together.',
  description: 'Get real-time insider trades, politician trades, trending stocks, and AI-powered market insights. Your edge in the stock market.',
  keywords: 'stock market, insider trading, politician trades, trading app, market intelligence, AI trading',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'VoxTrade | Trade Smarter. Together.',
    description: 'Get real-time insider trades, politician trades, trending stocks, and AI-powered market insights.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sora">
        {children}
      </body>
    </html>
  )
}

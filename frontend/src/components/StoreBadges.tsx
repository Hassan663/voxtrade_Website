'use client'

import { useEffect, useState } from 'react'

type BadgeProps = {
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export const AppStoreBadge = ({ className = 'h-12 w-auto', onClick, ariaLabel = 'Download on the App Store' }: BadgeProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="inline-block hover:scale-105 hover:shadow-lg hover:shadow-primary/30 rounded-md transition-all"
  >
    <svg viewBox="0 0 120 40" className={className}>
      <rect width="120" height="40" rx="6" fill="black" stroke="white" strokeWidth="0.5" />
      <path
        d="M24.5 20.4c-.1-1.6.7-3.2 2-4.2-.8-1.1-2-1.8-3.3-1.9-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3-.8s1.8.8 3 .8 2.1-1.1 2.9-2.3c.5-.8.9-1.6 1.2-2.5-1.4-.6-2.4-2-2.7-3.1z"
        fill="white"
      />
      <path
        d="M22 12.2c.7-.8 1-1.9.9-3-.9.1-1.9.5-2.5 1.2-.6.7-1.1 1.8-1 2.9 1 .1 2-.3 2.6-1.1z"
        fill="white"
      />
      <text x="42" y="15" fill="white" fontSize="7" fontFamily="Arial">
        Download on the
      </text>
      <text x="42" y="27" fill="white" fontSize="12" fontFamily="Arial" fontWeight="bold">
        App Store
      </text>
    </svg>
  </button>
)

export const GooglePlayBadge = ({ className = 'h-12 w-auto', onClick, ariaLabel = 'Get it on Google Play' }: BadgeProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="inline-block hover:scale-105 hover:shadow-lg hover:shadow-primary/30 rounded-md transition-all"
  >
    <svg viewBox="0 0 135 40" className={className}>
      <rect width="135" height="40" rx="6" fill="black" stroke="white" strokeWidth="0.5" />
      <path d="M13 8.5l9.5 11.5-9.5 11.5V8.5z" fill="#00D9FF" />
      <path d="M13 8.5l12 7-2.5 4.5L13 8.5z" fill="#00F076" />
      <path d="M13 31.5l9.5-11.5 2.5 4.5-12 7z" fill="#FF3A44" />
      <path d="M22.5 20l2.5-4.5 5 3-5 3-2.5-1.5z" fill="#FFB800" />
      <text x="35" y="14" fill="white" fontSize="6" fontFamily="Arial">
        GET IT ON
      </text>
      <text x="35" y="27" fill="white" fontSize="11" fontFamily="Arial" fontWeight="bold">
        Google Play
      </text>
    </svg>
  </button>
)

const StoreBadges = ({ className = '', size = 'h-12 w-auto' }: { className?: string; size?: string }) => {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const open = () => setShowComingSoon(true)
  const close = () => setShowComingSoon(false)

  // ESC to close
  useEffect(() => {
    if (!showComingSoon) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [showComingSoon])

  return (
    <>
      <div className={`flex flex-wrap items-center gap-4 ${className}`}>
        <AppStoreBadge className={size} onClick={open} />
        <GooglePlayBadge className={size} onClick={open} />
      </div>

      {showComingSoon && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <div
            className="bg-dark-100 border border-primary/30 rounded-2xl p-8 max-w-md text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 30px 80px -20px rgba(0,0,0,0.8), 0 0 60px -10px rgba(0,255,200,0.25)' }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 id="coming-soon-title" className="text-2xl font-bold mb-2">Coming Soon!</h3>
            <p className="text-gray-400 mb-6">
              VoxTrade app is launching soon on App Store and Google Play. Stay tuned!
            </p>
            <button onClick={close} className="btn-primary">
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default StoreBadges

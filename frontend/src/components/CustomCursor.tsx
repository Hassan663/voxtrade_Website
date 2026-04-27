'use client'

import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide on touch devices - they don't have a cursor
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
      return
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest(
          'a, button, [role="button"], input, select, textarea, label[for], .clickable, .card, .cursor-pointer',
        )
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div
      className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isVisible ? '' : 'cursor-dot-hidden'}`}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  )
}

export default CustomCursor

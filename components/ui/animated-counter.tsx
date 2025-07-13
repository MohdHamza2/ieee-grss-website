"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  delay?: number
}

export function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "", 
  duration = 2000, 
  className = "",
  delay = 0 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Ensure we're on client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Simple scroll-based visibility detection
  useEffect(() => {
    if (!isClient || hasAnimated) return

    const checkVisibility = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isVisible && !hasAnimated) {
        setHasAnimated(true)
        
        // Start animation after delay
        setTimeout(() => {
          let startTime = Date.now()
          const startValue = 0
          const endValue = value

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
            
            setCount(currentCount)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(endValue)
            }
          }
          
          requestAnimationFrame(animate)
        }, delay)
      }
    }

    // Check immediately
    checkVisibility()
    
    // Add scroll listener
    window.addEventListener('scroll', checkVisibility, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })
    
    // Also check periodically for cases where scroll events might not fire
    const interval = setInterval(checkVisibility, 1000)
    
    return () => {
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
      clearInterval(interval)
    }
  }, [isClient, hasAnimated, value, duration, delay])

  // Show 0 on server, animate on client
  const displayValue = isClient ? count : 0

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
} 
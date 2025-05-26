'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollManager() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Scroll to top on route/page changes
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    let hideTimer: NodeJS.Timeout | null = null
    
    const showScrollbar = () => {
      document.documentElement.classList.remove('scrollbar-hidden')
      document.documentElement.classList.add('scrollbar-visible')
    }
    
    const hideScrollbar = () => {
      document.documentElement.classList.remove('scrollbar-visible')
      document.documentElement.classList.add('scrollbar-hidden')
    }
    
    const handleScrollStart = () => {
      showScrollbar()
      
      if (hideTimer) {
        clearTimeout(hideTimer)
      }
      
      hideTimer = setTimeout(() => {
        hideScrollbar()
      }, 1500)
    }
    
    // Start hidden
    hideScrollbar()
    
    // Show on scroll
    window.addEventListener('scroll', handleScrollStart, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScrollStart)
      if (hideTimer) {
        clearTimeout(hideTimer)
      }
    }
  }, [])
  
  return null
}
'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollManager() {
  const pathname = usePathname()

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

  useEffect(() => {
    // Handle scroll position restoration
    const isMainPage = ['/', '/partners', '/team', '/progress', '/net-zero', '/contact'].includes(pathname)
    // const isPartnerDetail = pathname.startsWith('/partners/') && pathname.split('/').length === 3
    
    if (isMainPage) {
      // Check if we're returning from a partner detail
      const savedScrollPosition = sessionStorage.getItem('scrollPosition')
      const isReturningFromPartner = sessionStorage.getItem('fromPartner') === 'true'
      
      if (isReturningFromPartner && savedScrollPosition) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPosition))
          // Clean up session storage
          sessionStorage.removeItem('scrollPosition')
          sessionStorage.removeItem('fromPartner')
          sessionStorage.removeItem('referrerPage')
        }, 50)
      } else {
        // Normal navigation between main pages - go to top
        window.scrollTo(0, 0)
      }
    }
    // Don't scroll for partner detail pages - preserve position
    
  }, [pathname])
  
  return null
}
'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface EntryAnimationProps {
  onComplete?: () => void
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    const isFromNavigation = sessionStorage.getItem('hasNavigated')
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    const isReload = navigationEntries[0]?.type === 'reload'
    const isDirectAccess = !document.referrer || !document.referrer.includes(window.location.hostname)
    
    if (isReload || isDirectAccess || !isFromNavigation) {
      setShouldShow(true)
      sessionStorage.setItem('hasNavigated', 'true')
      
      const timer = setTimeout(() => {
        setShouldShow(false)
        setTimeout(() => onComplete?.(), 250)
      }, 1000)
      
      return () => clearTimeout(timer)
    } else {
      onComplete?.()
    }
  }, [onComplete])

  if (!shouldShow) return null

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: shouldShow ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <Image
            src="/images/logos/logo.webp"
            alt="Silverstone Revolution Racing"
            width={280}
            height={90}
            className="h-14 w-auto mx-auto"
            priority
          />
        </motion.div>
        
        <div className="w-40 h-0.5 bg-gray-200 mx-auto rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full bg-brand-red rounded-full shadow-sm"
          />
        </div>
      </div>
    </motion.div>
  )
}
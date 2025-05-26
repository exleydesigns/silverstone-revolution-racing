'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  logoPath: string
  textPath: string
  lineWidthMultiplier?: number
  development?: boolean // Add dev mode
}

export default function LoadingScreen({ 
  logoPath, 
  textPath, 
  lineWidthMultiplier = 0.8,
  development = true // Set to false for production
}: LoadingScreenProps) {
  const [showLoading, setShowLoading] = useState(true) // Start true
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [logoWidth, setLogoWidth] = useState(200)

  useEffect(() => {
    // For development, always show. For production, check localStorage
    if (!development) {
      const hasSeenLoading = localStorage.getItem('srr-loading-seen')
      if (hasSeenLoading) {
        setShowLoading(false)
        return
      }
      localStorage.setItem('srr-loading-seen', 'true')
    }

    // Preload images
    const loadImages = () => {
      let loaded = 0
      const images = [logoPath, textPath]
      
      images.forEach(src => {
        const img = new Image()
        img.onload = () => {
          if (src === logoPath) setLogoWidth(img.width)
          loaded++
          if (loaded === images.length) {
            setImagesLoaded(true)
            // Exit timer after animation
            setTimeout(() => setShowLoading(false), 3000)
          }
        }
        img.onerror = () => {
          console.error('Failed to load image:', src)
          loaded++
          if (loaded === images.length) {
            setImagesLoaded(true)
            setTimeout(() => setShowLoading(false), 1000) // Quick exit on error
          }
        }
        img.src = src
      })
    }

    loadImages()

    // Failsafe
    const failsafe = setTimeout(() => {
      console.log('Loading screen failsafe activated')
      setShowLoading(false)
    }, 6000)
    
    return () => clearTimeout(failsafe)
  }, [logoPath, textPath, development])

  // Don't render anything if not showing loading
  if (!showLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black"
      >
        {imagesLoaded ? (
          <div className="text-center flex flex-col items-center">
            {/* 1. Logo appears */}
            <motion.img
              src={logoPath}
              alt=""
              className="h-24 w-auto object-contain mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* 2. Line draws out */}
            <motion.div
              className="h-0.5 bg-brand-red mb-6"
              initial={{ width: 0 }}
              animate={{ width: Math.round(logoWidth * lineWidthMultiplier) }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            />

            {/* 3. STEM text appears - centered */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src={textPath}
                alt=""
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          </div>
        ) : (
          // Simple loading state while images load
          <div className="text-center">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
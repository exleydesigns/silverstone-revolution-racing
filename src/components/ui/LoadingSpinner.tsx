'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingSpinnerProps {
  minDisplayTime?: number
  onComplete?: () => void  
}

export default function LoadingSpinner({
  minDisplayTime = 300, // Reduced from 1500ms to 300ms
  onComplete
}: LoadingSpinnerProps) {
  const [shouldHide, setShouldHide] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldHide(true)
      setTimeout(() => onComplete?.(), 400) // Fade out time
    }, minDisplayTime)

    return () => clearTimeout(timer)
  }, [minDisplayTime, onComplete])

  const containerVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      variants={containerVariants}
      initial="visible"
      animate={shouldHide ? "hidden" : "visible"}
    >
      <div className="text-center">
        {/* Simple rotating circle */}
        <div className="relative w-12 h-12 mx-auto mb-4">
          <motion.div
            className="absolute inset-0 border-4 border-gray-200 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-brand-red border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
       
        {/* Simple text */}
        <motion.p
          className="text-brand-black font-inter text-sm tracking-wider uppercase"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  )
}
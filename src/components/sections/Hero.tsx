'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero({ isLoading = false }) {
  return (
    <section className="relative h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Silverstone Revolution Racing Team"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 text-left text-white px-6 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: isLoading ? 2.5 : 0.3 
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-exo2 mb-6 text-white italic tracking-tight leading-tight">
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: isLoading ? 2.7 : 0.5 
              }}
              style={{
                fontFeatureSettings: '"liga" 1, "kern" 1, "calt" 1',
                fontVariantLigatures: 'common-ligatures contextual'
              }}
            >
              &quot;From the heart of
            </motion.span>
            <motion.span
              className="block ml-6 sm:ml-8 md:ml-12 lg:ml-16 text-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: isLoading ? 2.9 : 0.7 
              }}
              style={{
                fontFeatureSettings: '"liga" 1, "kern" 1, "calt" 1',
                fontVariantLigatures: 'common-ligatures contextual'
              }}
            >
              British Motorsport&quot;
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: isLoading ? 3.1 : 0.9 
          }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-4xl font-inter text-white ml-6 sm:ml-8 md:ml-12 lg:ml-16"
        >
          Professional STEM Racing team competing at the highest level from Silverstone UTC
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: isLoading ? 3.3 : 1.1 
          }}
          className="flex flex-col sm:flex-row gap-4 ml-6 sm:ml-8 md:ml-12 lg:ml-16"
        >
          <button className="btn-primary">
            Our Story
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-brand-black text-white font-semibold rounded-lg transition-all duration-200 font-inter">
            Meet the Team
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: isLoading ? 3.5 : 1.3 
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
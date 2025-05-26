'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero({ isLoading = false }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Silverstone Revolution Racing Team"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Stronger overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: isLoading ? 2.5 : 0.3 
          }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-exo2 text-white mb-6">
            <motion.span
              className="block leading-none drop-shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: isLoading ? 2.7 : 0.5 
              }}
            >
              From the heart of
            </motion.span>
            <motion.span
              className="block text-white leading-none italic mt-2 drop-shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: isLoading ? 2.9 : 0.7 
              }}
            >
              British Motorsport
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: isLoading ? 3.1 : 0.9 
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-3xl mx-auto font-inter text-gray-100 drop-shadow-md"
        >
          Professional STEM Racing team competing at the highest level from Silverstone UTC
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: isLoading ? 3.3 : 1.1 
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            className="btn-primary w-full sm:w-auto shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
          </motion.button>
          <motion.button 
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-brand-black text-white font-semibold rounded-lg transition-all duration-300 font-inter w-full sm:w-auto shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet the Team
          </motion.button>
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
        <motion.div 
          className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
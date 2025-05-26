'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Replace this div with your team photo background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-brand-black" />
        {/* Gradient overlay using your brand colours */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-red/10 to-brand-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-exo2 mb-6">
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              From the heart of
            </motion.span>
            <motion.span 
              className="block ml-8 md:ml-16 text-brand-red"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              British Motorsport
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto font-inter"
        >
          Professional STEM Racing team competing at the highest level from Silverstone UTC
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 4.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">
            Our Story
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-brand-black text-white font-semibold rounded-lg transition-all duration-200 font-inter">
            Meet the Team
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.5 }}
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
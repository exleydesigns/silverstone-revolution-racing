'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2
          }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-exo2 text-white mb-6">
            <motion.span
              className="block leading-none drop-shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3
              }}
            >
              From the heart of
            </motion.span>
            <motion.span
              className="block text-white leading-none italic mt-2 drop-shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4
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
            duration: 0.5, 
            delay: 0.5
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-3xl mx-auto font-inter text-gray-100 drop-shadow-md"
        >
          Professional STEM Racing team competing at the highest level from Silverstone UTC
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.6
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/progress">
            <Button variant="primary" className="w-full sm:w-auto shadow-lg">
              Our Story
            </Button>
          </Link>
          <Link href="/team">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto shadow-lg bg-transparent text-white border-white hover:bg-white hover:text-brand-black"
            >
              Meet the Team
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.7
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
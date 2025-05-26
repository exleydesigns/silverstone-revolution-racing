'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import carData from '@/data/car.json'

interface CarShowcaseProps {
  isLoading?: boolean
}

export default function CarShowcase({ isLoading = false }: CarShowcaseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: isLoading ? 3.2 : 0.5
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const carVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={statsVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-exo2"
          >
            Meet the {carData.modelNumber}
          </motion.h2>
          <motion.div 
            variants={statsVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={statsVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            {carData.description}
          </motion.p>
        </motion.div>

        {/* Large RR3 Text with Car Overlay */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative flex flex-col items-center justify-center mb-20 h-96 md:h-[32rem]"
        >
          
          {/* Background RR3 Text - positioned higher */}
          <motion.h3
            variants={textVariants}
            className="absolute top-0 text-[12rem] md:text-[18rem] lg:text-[24rem] xl:text-[28rem] font-black font-exo2 text-gray-100 select-none leading-none z-0"
          >
            {carData.modelNumber}
          </motion.h3>

          {/* Car Image - Much Larger */}
          <motion.div
            variants={carVariants}
            className="relative z-10 mt-16 md:mt-24 w-full max-w-5xl"
          >
            <Image
              src="/images/car-rr3.png"
              alt={`${carData.modelNumber} Racing Car`}
              width={1600}
              height={800}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
        >
          <motion.h3 
            variants={statsVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-exo2 text-brand-black"
          >
            Performance Data
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {carData.performanceStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                variants={statsVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-brand-red font-exo2 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-inter uppercase tracking-wide">
                  {stat.metric}
                </div>
                <div className="text-xs text-gray-500 font-inter mt-1">
                  {stat.unit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
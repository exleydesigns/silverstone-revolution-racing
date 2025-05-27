'use client'
import { motion } from 'framer-motion'
import { Zap, Target, Users } from 'lucide-react'
import aboutData from '@/data/about.json'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="py-20 bg-white">
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
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-exo2"
          >
            About {aboutData.teamName}
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed"
          >
            {aboutData.tagline}
          </motion.p>
        </motion.div>

        {/* Our Story - Full Width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-8 text-center"
          >
            Our Story
          </motion.h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {aboutData.story.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-lg text-gray-700 font-inter leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Key Stats - 3 Wide */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {aboutData.keyStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-red font-exo2 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-inter uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-2xl p-8 md:p-12"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-exo2 text-brand-black"
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.values.map((value, index) => {
              const icons = [Zap, Target, Users]
              const IconComponent = icons[index]
              
              return (
                <motion.div
                  key={value.name}
                  variants={itemVariants}
                  className="text-center space-y-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold font-exo2 text-brand-black">
                    {value.name}
                  </h4>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
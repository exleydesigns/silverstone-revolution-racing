'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Zap, Recycle, ArrowRight, ExternalLink } from 'lucide-react'
import sustainabilityData from '@/data/sustainability.json'

interface NetZeroProps {
  isLoading?: boolean
}

export default function NetZero({ isLoading = false }: NetZeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: isLoading ? 0.8 : 0.3
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

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const iconMap = {
    transport: ArrowRight,
    materials: Recycle,
    energy: Zap,
    offset: Leaf
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-exo2"
          >
            {sustainabilityData.hero.title}
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed mb-8"
          >
            {sustainabilityData.hero.description}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-inter font-semibold"
          >
            <Leaf size={20} className="mr-2" />
            100% Carbon Neutral Team
          </motion.div>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {sustainabilityData.achievements.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={chartVariants}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center"
            >
              <div className="text-4xl font-bold text-brand-red font-exo2 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-brand-black font-exo2 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 font-inter">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-6">
                {sustainabilityData.partnership.title}
              </h2>
              <div className="text-2xl font-bold text-brand-red font-exo2 mb-4">
                {sustainabilityData.partnership.partner}
              </div>
              <p className="text-gray-700 font-inter leading-relaxed mb-6">
                {sustainabilityData.partnership.description}
              </p>
              <Link
                href={sustainabilityData.partnership.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter"
              >
                <span>Visit TwoEighty</span>
                <ExternalLink size={20} />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={chartVariants}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 text-center"
            >
              <Leaf size={64} className="text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-800 font-exo2 mb-2">
                VCS Gold Standard
              </div>
              <div className="text-green-700 font-inter">
                Verified Carbon Offsetting Programme
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Carbon Footprint Breakdown */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-8"
          >
            {sustainabilityData.carbonFootprint.title}
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="text-5xl font-bold text-brand-red font-exo2 mb-2">
              {sustainabilityData.carbonFootprint.total}
            </div>
            <div className="text-xl text-gray-600 font-inter">
              Total Carbon Emissions Calculated & Offset
            </div>
          </motion.div>

          <div className="space-y-6">
            {sustainabilityData.carbonFootprint.breakdown.map((item, index) => (
              <motion.div
                key={item.scope}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-brand-black font-exo2">
                    {item.scope}
                  </h3>
                  <span className="font-bold text-gray-900 font-inter">
                    {item.amount} {item.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <motion.div 
                    className="h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-sm text-gray-600 font-inter">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sustainability Initiatives */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-12"
          >
            {sustainabilityData.initiatives.title}
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityData.initiatives.actions.map((action) => {
              const IconComponent = iconMap[action.icon as keyof typeof iconMap]
              
              return (
                <motion.div
                  key={action.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-brand-red" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black font-exo2 mb-3">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {action.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-2xl p-8 md:p-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-8"
          >
            {sustainabilityData.future.title}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-700 font-inter leading-relaxed text-center mb-8 max-w-4xl mx-auto"
          >
            {sustainabilityData.future.description}
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sustainabilityData.future.goals.map((goal, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-3 bg-white/50 rounded-lg p-4"
              >
                <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-inter">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
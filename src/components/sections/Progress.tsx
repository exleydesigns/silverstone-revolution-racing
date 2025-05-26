'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Target, Trophy, Calendar } from 'lucide-react'
import progressData from '@/data/progress.json'

interface ProgressProps {
  isLoading?: boolean
}

export default function Progress({ isLoading = false }: ProgressProps) {
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

  const milestoneVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-600" size={24} />
      case 'current':
        return <Clock className="text-brand-red" size={24} />
      case 'upcoming':
        return <Target className="text-brand-blue" size={24} />
      case 'target':
        return <Trophy className="text-yellow-600" size={24} />
      default:
        return <Calendar className="text-gray-400" size={24} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-300 text-green-800'
      case 'current':
        return 'bg-red-100 border-red-300 text-red-800'
      case 'upcoming':
        return 'bg-blue-100 border-blue-300 text-blue-800'
      case 'target':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800'
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800'
    }
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
            {progressData.hero.title}
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed"
          >
            {progressData.hero.description}
          </motion.p>
        </motion.div>

        {/* Timeline for each division */}
        {progressData.divisions.map((division) => (
          <motion.div
            key={division.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-20"
          >
            {/* Division Header */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-12"
            >
              <div 
                className="inline-flex items-center px-6 py-3 rounded-full font-inter font-semibold mb-4"
                style={{ 
                  backgroundColor: `${division.color}20`,
                  border: `2px solid ${division.color}`,
                  color: division.color
                }}
              >
                {division.status === 'completed' && <CheckCircle size={20} className="mr-2" />}
                {division.status === 'current' && <Clock size={20} className="mr-2" />}
                {division.name}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-4">
                {division.subtitle}
              </h2>
              <p className="text-gray-600 font-inter max-w-2xl mx-auto">
                {division.description}
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200" />
              <motion.div 
                className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-brand-blue to-brand-red"
                initial={{ height: 0 }}
                whileInView={{ height: division.status === 'completed' ? '100%' : '60%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Milestones */}
              <div className="space-y-12">
                {division.milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    variants={milestoneVariants}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <motion.div 
                        className="w-8 h-8 bg-white border-4 rounded-full flex items-center justify-center shadow-lg"
                        style={{ borderColor: division.color }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {getStatusIcon(milestone.status)}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <motion.div 
                        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -4 }}
                      >
                        {/* Status Badge */}
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 border ${getStatusColor(milestone.status)}`}>
                          {milestone.achievement}
                        </div>

                        {/* Date */}
                        <div className="text-sm text-gray-500 font-inter mb-2">
                          {milestone.date}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-brand-black font-exo2 mb-3">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 font-inter leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Details */}
                        <ul className="space-y-2">
                          {milestone.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600 font-inter">
                              <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-2xl p-8 md:p-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-6"
          >
            Join Our Journey
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-700 font-inter leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Follow our progress as we compete at the highest level of F1 in Schools and work towards representing Great Britain at the World Finals.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter">
              Follow Our Updates
            </button>
            <button className="px-8 py-3 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold rounded-lg transition-all duration-300 font-inter">
              Become a Partner
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Target, Trophy } from 'lucide-react'
import progressData from '@/data/progress.json'
import Link from 'next/link'
import Button from '@/components/ui/Button'

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
        delayChildren: isLoading ? 0.8 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-600" size={20} />
      case 'current':
        return <Clock className="text-brand-red" size={20} />
      case 'upcoming':
        return <Target className="text-brand-blue" size={20} />
      case 'target':
        return <Trophy className="text-yellow-600" size={20} />
      default:
        return <CheckCircle className="text-gray-400" size={20} />
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
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
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="mb-20"
          >
            {/* Division Header */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-12"
            >
              <div 
                className="inline-flex items-center px-6 py-3 rounded-full font-inter font-semibold mb-4 border-2"
                style={{ 
                  backgroundColor: `${division.color}20`,
                  borderColor: division.color,
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

            {/* Single Side Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline Line - Left side */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
              <motion.div 
                className="absolute left-8 top-0 w-0.5"
                style={{ backgroundColor: division.color }}
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2, delay: 0.3 }}
                viewport={{ once: true }}
              />

              {/* Milestones - All on right side */}
              <div className="space-y-12">
                {division.milestones.map((milestone) => (
                  <motion.div
                    key={milestone.title}
                    variants={cardVariants}
                    className="relative flex items-start"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 transform -translate-x-1/2 z-20 mt-6">
                      <div 
                        className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: division.color }}
                      />
                    </div>

                    {/* Card Content - Always on right */}
                    <div className="ml-16 w-full">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        {/* Header Row */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(milestone.status)}`}>
                            {getStatusIcon(milestone.status)}
                            <span className="ml-2">{milestone.achievement}</span>
                          </div>
                          <div className="text-sm text-gray-500 font-inter">
                            {milestone.date}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-brand-black font-exo2 mb-3">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 font-inter leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Details Grid */}
                        <div className="grid sm:grid-cols-2 gap-2">
                          {milestone.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600 font-inter">
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: division.color }}
                              />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Call to Action - Same Width Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-6">
                Join Our Journey
              </h2>
              <p className="text-xl text-gray-700 font-inter leading-relaxed mb-8">
                Follow our progress as we compete at the highest level of F1 in Schools and work towards representing Great Britain at the World Finals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Follow Our Updates
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
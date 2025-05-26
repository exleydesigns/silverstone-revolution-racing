'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import teamData from '@/data/team.json'

interface TeamProps {
  isLoading?: boolean
}

export default function Team({ isLoading = false }: TeamProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-exo2"
          >
            Meet the Team
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Six dedicated A-Level students united by our passion for engineering, innovation, and motorsport excellence
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamData.teamMembers.map((member) => (
            <motion.div
              key={member.slug}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Member Photo */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 bg-brand-red/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold font-inter">
                    {member.role}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black font-exo2 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-semibold font-inter text-sm mb-4 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-inter leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-2xl p-8 md:p-12">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-8"
            >
              Our Foundation
            </motion.h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="text-3xl md:text-4xl font-bold text-brand-red font-exo2 mb-2">
                  6
                </div>
                <div className="text-gray-600 font-inter text-sm uppercase tracking-wide">
                  Team Members
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-3xl md:text-4xl font-bold text-brand-red font-exo2 mb-2">
                  A-Level
                </div>
                <div className="text-gray-600 font-inter text-sm uppercase tracking-wide">
                  Students
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-3xl md:text-4xl font-bold text-brand-red font-exo2 mb-2">
                  {teamData.teamInfo.founded}
                </div>
                <div className="text-gray-600 font-inter text-sm uppercase tracking-wide">
                  Team Founded
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-3xl md:text-4xl font-bold text-brand-red font-exo2 mb-2">
                  UTC
                </div>
                <div className="text-gray-600 font-inter text-sm uppercase tracking-wide">
                  Silverstone UTC
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
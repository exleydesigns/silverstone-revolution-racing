'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Users, Award, ExternalLink } from 'lucide-react'
import teamData from '@/data/team.json'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const contactReasons = [
    { icon: Award, title: "Partnership Opportunities", description: "Interested in sponsoring our journey to the World Finals?" },
    { icon: Users, title: "Media & Press", description: "Press inquiries and interview requests" },
    { icon: Mail, title: "General Inquiries", description: "Questions about our team, competitions, or STEM Racing" }
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            Get in Touch
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Ready to join our journey to the World Finals? We&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        {/* Main Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 text-center"
          >
            <motion.div 
              variants={itemVariants}
              className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Mail className="text-brand-red" size={40} />
            </motion.div>
            
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-4"
            >
              Let&apos;s Start the Conversation
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 font-inter mb-8 max-w-2xl mx-auto"
            >
              Whether you&apos;re interested in partnerships, media opportunities, or just want to learn more about our team, we&apos;re here to help.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <p className="text-lg font-semibold text-brand-black font-inter mb-2">
                Email us at:
              </p>
              <a 
                href="mailto:hello@silverstonerevolutionracing.com"
                className="text-2xl md:text-3xl font-bold text-brand-red hover:underline font-inter"
              >
                hello@silverstonerevolutionracing.com
              </a>
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              onClick={() => window.location.href = 'mailto:hello@silverstonerevolutionracing.com'}
              className="px-12 py-4 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter inline-flex items-center space-x-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              <span>Send us an Email</span>
              <ExternalLink size={20} />
            </motion.button>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm text-gray-500 font-inter mt-4"
            >
              This will open your default email client
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          
          {/* Location */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <MapPin className="text-brand-red" size={32} />
              </motion.div>
              
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-brand-black font-exo2 mb-4"
              >
                Our Location
              </motion.h3>
              
              <motion.div variants={itemVariants}>
                <p className="text-lg font-semibold text-gray-700 font-inter">{teamData.teamInfo.school}</p>
                <p className="text-gray-600 font-inter">{teamData.teamInfo.location}</p>
                <p className="text-sm text-gray-500 font-inter mt-2">Est. {teamData.teamInfo.founded}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-brand-black font-exo2 mb-6 text-center"
              >
                What can we help with?
              </motion.h3>
              
              <div className="space-y-4">
                {contactReasons.map((reason) => (
                  <motion.div
                    key={reason.title}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <reason.icon className="text-brand-red" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black font-inter text-sm">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600 font-inter text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-6"
            >
              Join Our Journey to the World Finals
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 font-inter leading-relaxed mb-8"
            >
              From the heart of British Motorsport, we&apos;re racing towards excellence. Partner with us and be part of something extraordinary.
            </motion.p>
            <motion.button
              variants={itemVariants}
              onClick={() => window.location.href = 'mailto:hello@silverstonerevolutionracing.com?subject=Partnership Inquiry'}
              className="px-10 py-4 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Get in Touch Today</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
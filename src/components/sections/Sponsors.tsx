'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import sponsorData from '@/data/sponsors.json'

interface SponsorsProps {
  isLoading?: boolean
}

export default function Sponsors({ isLoading = false }: SponsorsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: isLoading ? 3.5 : 0.3
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  // Combine all sponsors with their tier info
  const allSponsors = [
    ...sponsorData.sponsorCategories.primary.sponsors.map(s => ({ ...s, tier: 'primary' })),
    ...sponsorData.sponsorCategories.secondary.sponsors.map(s => ({ ...s, tier: 'secondary' })),
    ...sponsorData.sponsorCategories.supporting.sponsors.map(s => ({ ...s, tier: 'supporting' }))
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            variants={logoVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-exo2"
          >
            Our Partners
          </motion.h2>
          <motion.div 
            variants={logoVariants}
            className="w-24 h-1 bg-brand-red mx-auto"
          />
        </motion.div>

        {/* Sponsor Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {allSponsors.map((sponsor, index) => {
            // Primary sponsors get larger size and full color
            const isPrimary = sponsor.tier === 'primary'
            const isSecondary = sponsor.tier === 'secondary'
            
            return (
              <motion.div
                key={sponsor.id}
                variants={logoVariants}
                className={`
                  ${isPrimary ? 'col-span-2 row-span-2' : ''}
                  ${isSecondary ? 'col-span-1' : ''}
                `}
              >
                <Link href={`/sponsors/${sponsor.id}`}>
                  <motion.div
                    className={`
                      bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer group
                      ${isPrimary ? 'p-8 h-32' : 'p-4 h-20'}
                      ${!isPrimary ? 'grayscale hover:grayscale-0' : ''}
                    `}
                    whileHover={{ 
                      y: isPrimary ? -6 : -3, 
                      scale: isPrimary ? 1.02 : 1.05,
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div
            variants={logoVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-brand-black font-exo2 mb-4">
              Partner with Us
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Join our journey to the World Finals and support the next generation of STEM leaders
            </p>
            <motion.button
              className="px-8 py-3 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
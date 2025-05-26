'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Navbar from '@/components/layout/Navbar'
import sponsorData from '@/data/sponsors.json'

export default function PartnersPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Save scroll position when clicking sponsor
  const handleSponsorClick = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    sessionStorage.setItem('referrerPage', '/partners')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: isLoading ? 0.5 : 0.3
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
    <>
      {isLoading && (
        <LoadingSpinner 
          minDisplayTime={300}
          onComplete={handleLoadingComplete}
        />
      )}
      
      <Navbar isLoading={isLoading} />
      
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Header - Animate immediately, no scroll trigger */}
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
              Our Partners
            </motion.h1>
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-brand-red mx-auto mb-8"
            />
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
            >
              Working with industry leaders who share our vision for excellence in STEM and motorsport
            </motion.p>
          </motion.div>

          {/* Primary Partners */}
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
              {sponsorData.sponsorCategories.primary.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {sponsorData.sponsorCategories.primary.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardVariants}
                >
                  <Link href={`/sponsors/${sponsor.id}`} onClick={handleSponsorClick}>
                    <motion.div
                      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="relative h-20 mb-6">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-brand-black font-exo2 mb-4">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-600 font-inter leading-relaxed text-sm">
                        {sponsor.description}
                      </p>
                      <div className="mt-6 flex items-center text-brand-red font-semibold text-sm font-inter">
                        Learn more
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Supporting Partners */}
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
              {sponsorData.sponsorCategories.secondary.title}
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorData.sponsorCategories.secondary.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardVariants}
                >
                  <Link href={`/sponsors/${sponsor.id}`} onClick={handleSponsorClick}>
                    <motion.div
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full"
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                      <div className="relative h-14 mb-4">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-brand-black font-exo2 mb-3">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-600 font-inter leading-relaxed text-sm line-clamp-3">
                        {sponsor.description}
                      </p>
                      <div className="mt-4 flex items-center text-brand-red font-semibold text-sm font-inter">
                        Learn more
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Associate Partners */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-12"
            >
              {sponsorData.sponsorCategories.supporting.title}
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sponsorData.sponsorCategories.supporting.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardVariants}
                >
                  <Link href={`/sponsors/${sponsor.id}`} onClick={handleSponsorClick}>
                    <motion.div
                      className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group h-full"
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    >
                      <div className="relative h-12 mb-3">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-base font-bold text-brand-black font-exo2 mb-2">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-600 font-inter leading-relaxed text-sm line-clamp-2">
                        {sponsor.description}
                      </p>
                      <div className="mt-3 flex items-center text-brand-red font-semibold text-sm font-inter">
                        Learn more
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
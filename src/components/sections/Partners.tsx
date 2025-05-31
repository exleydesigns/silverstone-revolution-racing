'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import sponsorData from '@/data/sponsors.json'
import Button from '@/components/ui/Button'

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePartnerClick = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    sessionStorage.setItem('referrerPage', '/')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.2
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 font-exo2"
          >
            Our Partners
          </motion.h2>
          <motion.div 
            variants={headerVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p 
            variants={headerVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Working with industry leaders who share our vision for excellence in STEM and motorsport, supporting our journey to the World Finals
          </motion.p>
        </motion.div>

        {/* Partner Matrix Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16"
        >
          
          {/* Primary Partners Row */}
          <div className="grid grid-cols-3 md:grid-cols-2 border-b border-gray-200">
            <div className="col-span-2 md:col-span-1 group cursor-pointer hover:bg-gray-50 transition-colors duration-300 p-6 md:p-12 lg:p-16 border-r border-gray-200 flex items-center justify-center"
                 style={{ minHeight: '120px' }}>
              <Link href="/partners/silverstone" onClick={handlePartnerClick} className="flex items-center justify-center w-full h-full">
                <div className="relative w-full h-16 md:h-24 lg:h-32 flex items-center justify-center">
                  <Image
                    src="/images/logos/silverstone.webp"
                    alt="Silverstone logo"
                    width={400}
                    height={160}
                    className="object-contain group-hover:scale-105 transition-transform duration-300 max-w-[95%] max-h-[95%]"
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-1 group cursor-pointer hover:bg-gray-50 transition-colors duration-300 p-6 md:p-12 lg:p-16 flex items-center justify-center"
                 style={{ minHeight: '120px' }}>
              <Link href="/partners/dla-town-planning" onClick={handlePartnerClick} className="flex items-center justify-center w-full h-full">
                <div className="relative w-full h-16 md:h-24 lg:h-32 flex items-center justify-center">
                  <Image
                    src={isMobile ? "/images/logos/dla-square.webp" : "/images/logos/dla.webp"}
                    alt="DLA Town Planning logo"
                    width={isMobile ? 120 : 400}
                    height={160}
                    className="object-contain group-hover:scale-105 transition-transform duration-300 max-w-[95%] max-h-[95%]"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Supporting Partners Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
            {sponsorData.sponsorCategories.secondary.sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className={`
                  group cursor-pointer hover:bg-gray-50 transition-colors duration-300 p-3 md:p-6 grayscale hover:grayscale-0 flex items-center justify-center
                  ${index < sponsorData.sponsorCategories.secondary.sponsors.length - 1 && (index + 1) % (isMobile ? 2 : 4) !== 0 ? 'border-r border-gray-200' : ''}
                  ${index < 2 && isMobile ? 'border-b border-gray-200' : ''}
                `}
                style={{ minHeight: '80px' }}
              >
                <Link href={`/partners/${sponsor.id}`} onClick={handlePartnerClick} className="flex items-center justify-center w-full h-full">
                  <div className="relative w-full h-10 md:h-12 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={140}
                      height={56}
                      className="object-contain group-hover:scale-105 transition-transform duration-300 max-w-[85%] max-h-[85%]"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Associate Partners Row */}
          <div className="flex flex-wrap justify-center">
            {sponsorData.sponsorCategories.supporting.sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className={`
                  group cursor-pointer hover:bg-gray-50 transition-colors duration-300 p-2 md:p-4 grayscale hover:grayscale-0 flex items-center justify-center
                  ${sponsorData.sponsorCategories.supporting.sponsors.length <= 3 ? 'w-1/3 md:w-1/6' : 'w-1/3 md:w-1/5 lg:w-1/6'}
                  ${index < sponsorData.sponsorCategories.supporting.sponsors.length - 1 ? 'border-r border-gray-200' : ''}
                `}
                style={{ minHeight: '60px' }}
              >
                <Link href={`/partners/${sponsor.id}`} onClick={handlePartnerClick} className="flex items-center justify-center w-full h-full">
                  <div className="relative w-full h-8 md:h-10 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={90}
                      height={45}
                      className="object-contain group-hover:scale-105 transition-transform duration-300 max-w-[80%] max-h-[80%]"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={headerVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-brand-black font-exo2 mb-4">
              Partner with Us
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Join our journey to the World Finals and support the next generation of STEM leaders
            </p>
            <Link href="/contact">
              <Button variant="primary" className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
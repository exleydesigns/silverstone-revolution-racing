'use client'
import { useState, useRef, useEffect, TouchEvent } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import sponsorData from '@/data/sponsors.json'

// TypeScript interfaces
interface Sponsor {
  id: string
  name: string
  website: string | null
  logo: string
  description: string
  tier: string
}

interface CarouselProps {
  items: Sponsor[]
  renderItem: (item: Sponsor) => React.ReactNode
  itemsPerView?: number
  className?: string
  key?: string
}

function Carousel({ items, renderItem, itemsPerView = 2, className = '' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const maxIndex = Math.max(0, items.length - itemsPerView)

  // Reset carousel when items or itemsPerView changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [items.length, itemsPerView])

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className={`flex transition-transform duration-300 ease-out ${className}`}
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`flex-shrink-0`}
            style={{ width: `${100 / itemsPerView}%` }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-brand-red' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function PartnersPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [forceRerender, setForceRerender] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      const wasMobile = isMobile
      const nowMobile = window.innerWidth < 768
      
      setIsMobile(nowMobile)
      
      // Force re-render when switching between mobile/desktop
      if (wasMobile !== nowMobile) {
        setForceRerender(prev => prev + 1)
      }
    }
    
    // Initial check
    checkMobile()
    
    // Add resize listener with debounce
    let timeoutId: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 100)
    }
    
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [isMobile])

  // Save scroll position when clicking partner
  const handlePartnerClick = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    sessionStorage.setItem('referrerPage', '/partners')
  }

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

  // Render functions for carousel items (removed unused index parameter)
  const renderSupportingPartner = (sponsor: Sponsor) => (
    <div className="p-2">
      <Link href={`/partners/${sponsor.id}`} onClick={handlePartnerClick}>
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
    </div>
  )

  const renderAssociatePartner = (sponsor: Sponsor) => (
    <div className="p-2">
      <Link href={`/partners/${sponsor.id}`} onClick={handlePartnerClick}>
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
    </div>
  )

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
            Our Partners
          </motion.h2>
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
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-12"
          >
            {sponsorData.sponsorCategories.primary.title}
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sponsorData.sponsorCategories.primary.sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                variants={cardVariants}
              >
                <Link href={`/partners/${sponsor.id}`} onClick={handlePartnerClick}>
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
                    <h4 className="text-xl font-bold text-brand-black font-exo2 mb-4">
                      {sponsor.name}
                    </h4>
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
          key={`supporting-${forceRerender}-${isMobile}`}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-12"
          >
            {sponsorData.sponsorCategories.secondary.title}
          </motion.h3>
          
          {isMobile ? (
            <Carousel
              key={`supporting-carousel-${forceRerender}`}
              items={sponsorData.sponsorCategories.secondary.sponsors as Sponsor[]}
              renderItem={renderSupportingPartner}
              itemsPerView={2}
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorData.sponsorCategories.secondary.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardVariants}
                >
                  {renderSupportingPartner(sponsor as Sponsor)}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Associate Partners */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          key={`associate-${forceRerender}-${isMobile}`}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 text-center mb-12"
          >
            {sponsorData.sponsorCategories.supporting.title}
          </motion.h3>
          
          {isMobile ? (
            <Carousel
              key={`associate-carousel-${forceRerender}`}
              items={sponsorData.sponsorCategories.supporting.sponsors as Sponsor[]}
              renderItem={renderAssociatePartner}
              itemsPerView={2}
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sponsorData.sponsorCategories.supporting.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardVariants}
                >
                  {renderAssociatePartner(sponsor as Sponsor)}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
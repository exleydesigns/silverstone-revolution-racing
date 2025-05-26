'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import navData from '@/data/navigation.json'
import socialData from '@/data/social.json'
import { SolidInstagram, SolidLinkedIn, SolidTikTok } from '@/components/ui/icons'

const iconMap = {
  Instagram: SolidInstagram,
  Linkedin: SolidLinkedIn,
  TikTok: SolidTikTok
}

interface NavbarProps {
  isLoading?: boolean
}

export default function Navbar({ isLoading = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: isLoading ? 2.2 : 0.5
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Silverstone Revolution Racing"
                width={200}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right - Navigation Only */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center whitespace-nowrap">
              {navData.navItems.map((item, index) => (
                <span key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-black tracking-tight text-brand-black hover:text-brand-red transition-colors duration-200 uppercase font-exo2"
                  >
                    {item.name}
                  </Link>
                  {index < navData.navItems.length - 1 && (
                    <span className="text-gray-300 mx-2">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-black hover:text-brand-red focus:outline-none"
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navData.navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-base font-black tracking-tight text-brand-black hover:text-brand-red hover:bg-gray-50 transition-all duration-200 uppercase font-exo2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-8 pt-4">
                  {socialData.socialLinks.map((social) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-black hover:text-brand-red transition-colors duration-200 p-2"
                      >
                        <IconComponent />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
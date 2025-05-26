import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail } from 'lucide-react'
import teamData from '@/data/team.json'
import socialData from '@/data/social.json'

// Same solid icons as navbar
const SolidInstagram = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const SolidLinkedIn = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const SolidTikTok = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

const iconMap = {
  Instagram: SolidInstagram,
  Linkedin: SolidLinkedIn,
  TikTok: SolidTikTok
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Team Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Silverstone Revolution Racing"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 font-inter text-sm mb-3">
              {teamData.teamInfo.description}
            </p>
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <MapPin size={16} className="mr-2" />
              <span>{teamData.teamInfo.school}, {teamData.teamInfo.location}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Est. {teamData.teamInfo.founded}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-exo2 font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/progress" className="block text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm">
                Our Progress
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm">
                Meet the Team
              </Link>
              <Link href="/partners" className="block text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm">
                Our Partners
              </Link>
              <Link href="/net-zero" className="block text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm">
                Net-Zero Initiative
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-exo2 font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialData.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-red transition-colors duration-200"
                  >
                    <IconComponent />
                  </Link>
                )
              })}
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail size={16} className="mr-2" />
              <span>hello@silverstonerevolutionracing.com</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm font-inter">
            © {currentYear} {teamData.teamInfo.name}. Racing towards the future.
          </p>
        </div>
      </div>
    </footer>
  )
}
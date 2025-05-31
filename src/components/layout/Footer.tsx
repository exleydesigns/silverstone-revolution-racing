import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, FileText, Users, Trophy, Leaf, MessageCircle } from 'lucide-react'
import teamData from '@/data/team.json'
import socialData from '@/data/social.json'
import { SolidInstagram, SolidLinkedIn, SolidTikTok } from '@/components/ui/icons'

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
                src="/images/logos/white-logo.webp"
                alt="Silverstone Revolution Racing"
                width={150}
                height={50}
                className="h-12 w-auto"
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
              <Link href="/progress" className="flex items-center text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm group">
                <Trophy size={16} className="mr-2 group-hover:text-brand-red" />
                Our Journey
              </Link>
              <Link href="/team" className="flex items-center text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm group">
                <Users size={16} className="mr-2 group-hover:text-brand-red" />
                Meet the Team
              </Link>
              <Link href="/partners" className="flex items-center text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm group">
                <FileText size={16} className="mr-2 group-hover:text-brand-red" />
                Our Partners
              </Link>
              <Link href="/net-zero" className="flex items-center text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm group">
                <Leaf size={16} className="mr-2 group-hover:text-brand-red" />
                Net-Zero Initiative
              </Link>
              <Link href="/contact" className="flex items-center text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm group">
                <MessageCircle size={16} className="mr-2 group-hover:text-brand-red" />
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
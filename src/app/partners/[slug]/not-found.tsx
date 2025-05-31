import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function PartnerNotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo.webp"
                alt="Silverstone Revolution Racing"
                width={200}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Partner Not Found */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-brand-red" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-4">
              Partner Not Found
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-inter leading-relaxed">
              The partner you&apos;re looking for doesn&apos;t exist or may have been removed.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/partners">
              <Button variant="primary" className="w-full sm:w-auto">
                <ArrowLeft size={20} className="mr-2" />
                All Partners
              </Button>
            </Link>
            <Link href="/">
              <Button variant="secondary" className="w-full sm:w-auto">
                <Home size={20} className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Partner Suggestions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-brand-black font-exo2 mb-4">
              Explore Our Partners
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              Discover the industry leaders supporting our journey to the World Finals.
            </p>
            <Link href="/partners">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Partners
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
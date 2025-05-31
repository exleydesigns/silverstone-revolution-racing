import Link from 'next/link'
import Image from 'next/image'
import { Home } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
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
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* 404 Display */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black font-exo2 text-gray-200 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-4">
              Page Not Found
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-inter leading-relaxed">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or doesn&apos;t exist.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" className="w-full sm:w-auto">
                <Home size={20} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-brand-black font-exo2 mb-3">
              Looking for something specific?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/progress" className="text-brand-red hover:underline font-inter">
                Our Journey
              </Link>
              <Link href="/team" className="text-brand-red hover:underline font-inter">
                Meet the Team
              </Link>
              <Link href="/partners" className="text-brand-red hover:underline font-inter">
                Our Partners
              </Link>
              <Link href="/net-zero" className="text-brand-red hover:underline font-inter">
                Net-Zero Initiative
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}   
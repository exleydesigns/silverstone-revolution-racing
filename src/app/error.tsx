'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
          
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-brand-red" size={48} />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-exo2 mb-4">
              Something went wrong!
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-inter leading-relaxed mb-4">
              We&apos;re experiencing a technical issue. Our team has been notified and is working to fix it.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 p-4 bg-gray-100 rounded-lg text-left text-sm text-gray-700 font-mono">
                <summary className="cursor-pointer font-bold mb-2">Error Details (Development)</summary>
                <pre className="whitespace-pre-wrap break-words">
                  {error.message}
                  {error.stack && `\n\nStack:\n${error.stack}`}
                </pre>
              </details>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              onClick={reset}
              className="w-full sm:w-auto"
            >
              <RefreshCw size={20} className="mr-2" />
              Try Again
            </Button>
            <Link href="/">
              <Button variant="secondary" className="w-full sm:w-auto">
                <Home size={20} className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-brand-black font-exo2 mb-3">
              Need immediate assistance?
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              If this problem persists, please contact our team.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
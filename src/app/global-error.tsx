'use client'
import Link from 'next/link'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en-GB">
      <body className="bg-gray-50 font-inter">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Error Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="text-red-600" size={48} />
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Error
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
              <p className="text-xl text-gray-600 leading-relaxed">
                A critical error occurred. Please try refreshing the page or return to the homepage.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center h-12 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-150"
              >
                <RefreshCw size={20} className="mr-2" />
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-8 bg-white text-red-600 border-2 border-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-150"
              >
                <Home size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Silverstone Revolution Racing
              </h3>
              <p className="text-gray-600 mb-4">
                If this problem persists, please contact us at:
              </p>
              <a 
                href="mailto:hello@silverstonerevolutionracing.com"
                className="text-red-600 hover:underline font-semibold"
              >
                hello@silverstonerevolutionracing.com
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
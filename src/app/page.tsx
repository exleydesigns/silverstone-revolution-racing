'use client'
import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <LoadingSpinner
          minDisplayTime={1800}
          onComplete={() => setIsLoading(false)}
        />
      )}
     
      <Navbar isLoading={isLoading} />
     
      <div className="pt-20">
        <Hero isLoading={isLoading} />
       
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold font-exo2 text-brand-black mb-6">
              Ready for the next sections!
            </h2>
            <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
              Hero now animates after loading with perfect left alignment and larger mobile text.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
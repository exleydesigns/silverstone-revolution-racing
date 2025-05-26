'use client'
import { useState } from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Navbar from '@/components/layout/Navbar'
import Sponsors from '@/components/sections/Sponsors'

export default function SponsorsPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <LoadingSpinner 
          minDisplayTime={1500}
          onComplete={handleLoadingComplete}
        />
      )}
      
      <Navbar isLoading={isLoading} />
      <div className="pt-20">
        <Sponsors isLoading={isLoading} />
      </div>
    </>
  )
}
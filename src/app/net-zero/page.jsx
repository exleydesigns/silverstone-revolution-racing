'use client'
import { useState } from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Navbar from '@/components/layout/Navbar'
import NetZero from '@/components/sections/NetZero'

export default function NetZeroPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <LoadingSpinner 
          minDisplayTime={300}
          onComplete={handleLoadingComplete}
        />
      )}
      
      <Navbar isLoading={isLoading} />
      
      <div className="pt-20 min-h-screen">
        <NetZero isLoading={isLoading} />
      </div>
    </>
  )
}
'use client'
import { useState} from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import CarShowcase from '@/components/sections/CarShowcase'
import Partners from '@/components/sections/Partners'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <LoadingSpinner 
          minDisplayTime={100}
          onComplete={handleLoadingComplete}
        />
      )}
      
      <Navbar isLoading={isLoading} />
      <Hero isLoading={isLoading} />
      <About isLoading={isLoading} />
      <CarShowcase isLoading={isLoading} />
      <Partners isLoading={isLoading} />
    </>
  )
}
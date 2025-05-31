'use client'
import { useState, useEffect } from 'react'
import EntryAnimation from '@/components/ui/EntryAnimation'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import CarShowcase from '@/components/sections/CarShowcase'
import Partners from '@/components/sections/Partners'

export default function Home() {
  const [showEntryAnimation, setShowEntryAnimation] = useState(true)
  const [animationsKey, setAnimationsKey] = useState(0)

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('hasNavigated', 'true')
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  const handleEntryComplete = () => {
    setShowEntryAnimation(false)
    // Force re-render of animations
    setAnimationsKey(prev => prev + 1)
  }

  return (
    <>
      {showEntryAnimation && (
        <EntryAnimation onComplete={handleEntryComplete} />
      )}
     
      <div className={showEntryAnimation ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        <Navbar />
        <div key={animationsKey}>
          <Hero />
          <About />
          <CarShowcase />
          <Partners />
        </div>
      </div>
    </>
  )
}
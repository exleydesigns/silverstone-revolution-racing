'use client'
import Navbar from '@/components/layout/Navbar'
import NetZero from '@/components/sections/NetZero'

export default function NetZeroPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <NetZero />
      </div>
    </>
  )
}
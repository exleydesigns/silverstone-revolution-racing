'use client'
import Navbar from '@/components/layout/Navbar'
import Contact from '@/components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <Contact />
      </div>
    </>
  )
}
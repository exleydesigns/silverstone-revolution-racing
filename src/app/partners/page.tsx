'use client'
import Navbar from '@/components/layout/Navbar'
import PartnersPage from '@/components/sections/PartnersPage'

export default function Partners() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <PartnersPage />
      </div>
    </>
  )
}
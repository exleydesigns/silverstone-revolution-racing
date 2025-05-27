'use client'
import Navbar from '@/components/layout/Navbar'
import Team from '@/components/sections/Team'

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        <Team />
      </div>
    </>
  )
}
'use client'
import Navbar from '@/components/layout/Navbar'
import Progress from '@/components/sections/Progress'

export default function ProgressPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <Progress />
      </div>
    </>
  )
}
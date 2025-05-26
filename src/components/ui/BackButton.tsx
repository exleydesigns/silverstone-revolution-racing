'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackButton() {
  const [backDestination, setBackDestination] = useState<{ href: string; label: string }>({
    href: '/',
    label: 'Back to Home'
  })

  useEffect(() => {
    // Check where user came from
    const referrerPage = sessionStorage.getItem('referrerPage')
    
    if (referrerPage === '/partners') {
      setBackDestination({
        href: '/partners',
        label: 'Back to Partners'
      })
    } else {
      setBackDestination({
        href: '/',
        label: 'Back to Home'
      })
    }
  }, [])

  const handleBackClick = () => {
    sessionStorage.setItem('fromPartner', 'true')
  }

  return (
    <Link 
      href={backDestination.href}
      onClick={handleBackClick}
      className="inline-flex items-center space-x-2 px-4 py-2 text-brand-black hover:text-brand-red transition-colors duration-200 font-inter hover:bg-white rounded-lg"
    >
      <ArrowLeft size={20} />
      <span>{backDestination.label}</span>
    </Link>
  )
}
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import sponsorData from '@/data/sponsors.json'

// Generate static paths for all sponsors
export async function generateStaticParams() {
  const allSponsors = [
    ...sponsorData.sponsorCategories.primary.sponsors,
    ...sponsorData.sponsorCategories.secondary.sponsors,
    ...sponsorData.sponsorCategories.supporting.sponsors
  ]

  return allSponsors.map((sponsor) => ({
    slug: sponsor.id,
  }))
}

// Find sponsor by slug
function findSponsor(slug: string) {
  const allSponsors = [
    ...sponsorData.sponsorCategories.primary.sponsors,
    ...sponsorData.sponsorCategories.secondary.sponsors,
    ...sponsorData.sponsorCategories.supporting.sponsors
  ]
  
  return allSponsors.find(sponsor => sponsor.id === slug)
}

export default function SponsorPage({ params }: { params: { slug: string } }) {
  const sponsor = findSponsor(params.slug)

  if (!sponsor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Silverstone Revolution Racing"
                width={200}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <Link 
              href="/sponsors"
              className="flex items-center space-x-2 px-4 py-2 text-brand-black hover:text-brand-red transition-colors duration-200 font-inter"
            >
              <ArrowLeft size={20} />
              <span>Back to Partners</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sponsor Header */}
          <div className="text-center mb-12">
            <div className="relative h-32 w-full mb-8 bg-gray-50 rounded-xl p-8">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 font-exo2">
              {sponsor.name}
            </h1>
            
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
            
            <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 text-brand-red rounded-full font-inter text-sm font-semibold mb-8">
              {sponsor.tier === 'primary' && 'Primary Partner'}
              {sponsor.tier === 'secondary' && 'Supporting Partner'}
              {sponsor.tier === 'supporting' && 'Technical Partner'}
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 font-inter leading-relaxed">
              {sponsor.description}
            </p>
          </div>

          {/* Website Link */}
          {sponsor.website && (
            <div className="text-center">
              <Link
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter"
              >
                <span>Visit {sponsor.name}</span>
                <ExternalLink size={20} />
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
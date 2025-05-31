import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import BackButton from '@/components/ui/BackButton'
import sponsorData from '@/data/sponsors.json'

// Generate static paths for all partners
export async function generateStaticParams() {
  const allPartners = [
    ...sponsorData.sponsorCategories.primary.sponsors,
    ...sponsorData.sponsorCategories.secondary.sponsors,
    ...sponsorData.sponsorCategories.supporting.sponsors
  ]
  return allPartners.map((partner) => ({
    slug: partner.id,
  }))
}

// Find partner by slug
function findPartner(slug: string) {
  const allPartners = [
    ...sponsorData.sponsorCategories.primary.sponsors,
    ...sponsorData.sponsorCategories.secondary.sponsors,
    ...sponsorData.sponsorCategories.supporting.sponsors
  ]
 
  return allPartners.find(partner => partner.id === slug)
}

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const partner = findPartner(resolvedParams.slug)

  if (!partner) {
    notFound()
  }

  // Get tier display name
  const getTierName = (tier: string) => {
    switch (tier) {
      case 'primary': return 'Primary Partner'
      case 'secondary': return 'Supporting Partner'
      case 'supporting': return 'Associate Partner'
      default: return 'Partner'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo.webp"
                alt="Silverstone Revolution Racing"
                width={200}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BackButton />
        </div>
      </div>

      {/* Content */}
      <main className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         
          {/* Partner Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 text-brand-red rounded-full font-inter text-sm font-semibold mb-6">
              {getTierName(partner.tier)}
            </div>
           
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-exo2">
              {partner.name}
            </h1>
           
            <div className="w-24 h-1 bg-brand-red mx-auto mb-8" />
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 mb-8">
            <p className="text-xl text-gray-700 font-inter leading-relaxed">
              {partner.description}
            </p>
          </div>

          {/* Website Link */}
          {partner.website && (
            <div className="text-center">
              <Link
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300 font-inter"
              >
                <span>Visit {partner.name}</span>
                <ExternalLink size={20} />
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
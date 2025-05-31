import type { Metadata } from 'next'
import sponsorData from '@/data/sponsors.json'

function findPartner(slug: string) {
  const allPartners = [
    ...sponsorData.sponsorCategories.primary.sponsors,
    ...sponsorData.sponsorCategories.secondary.sponsors,
    ...sponsorData.sponsorCategories.supporting.sponsors
  ]
  return allPartners.find(partner => partner.id === slug)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const partner = findPartner(resolvedParams.slug)
  
  if (!partner) {
    return {
      title: 'Partner Not Found',
    }
  }

  return {
    title: partner.name,
    description: partner.description,
    openGraph: {
      title: `${partner.name} | Silverstone Revolution Racing`,
      description: partner.description,
    },
  }
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
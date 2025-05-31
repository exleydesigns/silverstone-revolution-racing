import type { MetadataRoute } from 'next'
import sponsorData from '@/data/sponsors.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://silverstonerevolutionracing.com'

  // Get all partner slugs
  const allPartners = [
    ...sponsorData.sponsorCategories.primary.sponsors,
    ...sponsorData.sponsorCategories.secondary.sponsors,
    ...sponsorData.sponsorCategories.supporting.sponsors
  ]

  const partnerPages = allPartners.map((partner) => ({
    url: `${baseUrl}/partners/${partner.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/progress`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/net-zero`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...partnerPages,
  ]
}
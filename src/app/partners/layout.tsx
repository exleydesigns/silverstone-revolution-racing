import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'Working with industry leaders who share our vision for excellence in STEM and motorsport, including Silverstone Circuit and DLA Town Planning.',
  openGraph: {
    title: 'Our Partners | Silverstone Revolution Racing',
    description: 'Working with industry leaders who share our vision for excellence in STEM and motorsport, including Silverstone Circuit and DLA Town Planning.',
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
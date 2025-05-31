import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Net Zero Racing',
  description: 'Leading the way in sustainable motorsport. We are proud to be a 100% carbon neutral racing team, demonstrating environmental responsibility.',
  openGraph: {
    title: 'Net Zero Racing | Silverstone Revolution Racing',
    description: 'Leading the way in sustainable motorsport. We are proud to be a 100% carbon neutral racing team, demonstrating environmental responsibility.',
  },
}

export default function NetZeroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
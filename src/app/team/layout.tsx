import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the six dedicated A-Level students behind Silverstone Revolution Racing, each bringing unique skills to our motorsport journey.',
  openGraph: {
    title: 'Meet the Team | Silverstone Revolution Racing',
    description: 'Meet the six dedicated A-Level students behind Silverstone Revolution Racing, each bringing unique skills to our motorsport journey.',
  },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
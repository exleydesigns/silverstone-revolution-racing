import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Journey',
  description: 'Follow our progression from Development Class to Professional Class in F1 in Schools. Track our achievements and milestones.',
  openGraph: {
    title: 'Our Journey | Silverstone Revolution Racing',
    description: 'Follow our progression from Development Class to Professional Class in F1 in Schools. Track our achievements and milestones.',
  },
}

export default function ProgressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
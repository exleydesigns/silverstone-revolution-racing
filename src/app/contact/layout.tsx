import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Silverstone Revolution Racing. Partnership opportunities, media inquiries, and general questions welcome.',
  openGraph: {
    title: 'Contact Us | Silverstone Revolution Racing',
    description: 'Get in touch with Silverstone Revolution Racing. Partnership opportunities, media inquiries, and general questions welcome.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
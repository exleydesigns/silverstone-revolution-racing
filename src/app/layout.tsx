import type { Metadata } from 'next'
import { Inter, Exo_2 } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import ScrollManager from '@/components/ui/ScrollManager'

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://silverstonerevolutionracing.com'),
  title: {
    template: '%s | Silverstone Revolution Racing',
    default: 'Silverstone Revolution Racing | F1 in Schools Team',
  },
  description: 'From the heart of British Motorsport - Professional STEM Racing team based at Silverstone UTC, competing in F1 in Schools.',
  keywords: [
    'STEM Racing',
    'F1 in Schools',
    'Silverstone',
    'Revolution Racing',
    'Formula 1',
    'Motorsport',
    'Engineering',
    'Carbon Neutral',
    'British Motorsport',
    'UTC',
    'Student Racing'
  ],
  authors: [{ name: 'Silverstone Revolution Racing' }],
  creator: 'Silverstone Revolution Racing',
  publisher: 'Silverstone Revolution Racing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://silverstonerevolutionracing.com',
    title: 'Silverstone Revolution Racing | F1 in Schools Team',
    description: 'From the heart of British Motorsport - Professional STEM Racing team based at Silverstone UTC, competing in F1 in Schools.',
    siteName: 'Silverstone Revolution Racing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverstone Revolution Racing Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silverstone Revolution Racing | F1 in Schools Team',
    description: 'From the heart of British Motorsport - Professional STEM Racing team based at Silverstone UTC, competing in F1 in Schools.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`bg-white ${inter.variable} ${exo2.variable}`}>
      <body className="antialiased bg-white">
        <ScrollManager />
        <main className="main-content bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/layout/Footer'
import ScrollManager from '@/components/ui/ScrollManager'

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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://silverstonerevolutionracing.com" />
      </head>
      <body className="antialiased bg-white">
        <ScrollManager />
        <main className="main-content bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
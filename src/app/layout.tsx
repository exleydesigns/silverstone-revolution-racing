import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Silverstone Revolution Racing | F1 in Schools Team',
  description: 'From the heart of British Motorsport - Professional STEM Racing team based at Silverstone UTC, competing in F1 in Schools.',
  keywords: 'STEM Racing, F1 in Schools, Silverstone, Revolution Racing, Formula 1, Motorsport',
  metadataBase: new URL('https://silverstonerevolutionracing.com'),
  openGraph: {
    title: 'Silverstone Revolution Racing',
    description: 'From the heart of British Motorsport',
    url: 'https://silverstonerevolutionracing.com',
    siteName: 'Silverstone Revolution Racing',
    locale: 'en_GB',
    type: 'website',
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
      </head>
      <body className="antialiased bg-white">
        <main className="main-content bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import React, { Suspense } from 'react'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: 'Lux Visionem & Partners - Law Firm Jakarta | Kantor Hukum Indonesia',
  description: 'LV Law (Lux Visionem & Partners) adalah kantor hukum terkemuka di Jakarta, Indonesia. Spesialis hukum korporasi, litigasi, konsultasi bisnis, fintech regulation. Premier law firm with expertise in corporate law, litigation, business consulting.',
  keywords: [
    'lux visionem',
    'lux vision',
    'lv law',
    'lv lawfirm',
    'kantor hukum jakarta',
    'law firm jakarta',
    'pengacara jakarta',
    'lawyer indonesia',
    'kantor hukum indonesia',
    'law firm indonesia',
    'hukum korporasi',
    'corporate law indonesia',
    'litigasi jakarta',
    'litigation lawyer',
    'pengacara bisnis',
    'business lawyer',
    'konsultan hukum',
    'legal consultant',
    'fintech lawyer',
    'hukum teknologi',
    'bankruptcy lawyer',
    'kurator kepailitan',
  ],
  authors: [{ name: 'Lux Visionem & Partners' }],
  creator: 'Lux Visionem & Partners',
  publisher: 'Lux Visionem & Partners',
  metadataBase: new URL('https://lvlaw.id'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/?lang=id',
      'en-US': '/?lang=en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: 'https://lvlaw.id',
    siteName: 'Lux Visionem & Partners',
    title: 'Lux Visionem & Partners - Law Firm Jakarta | Kantor Hukum Indonesia',
    description: 'LV Law adalah kantor hukum terkemuka di Jakarta dengan keahlian dalam hukum korporasi, litigasi, dan konsultasi bisnis berbasis teknologi informasi.',
    images: [
      {
        url: '/images/icon.png',
        width: 1200,
        height: 630,
        alt: 'Lux Visionem & Partners Law Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lux Visionem & Partners - Law Firm Jakarta',
    description: 'Kantor hukum terkemuka di Jakarta dengan keahlian dalam hukum korporasi, litigasi, dan konsultasi bisnis.',
    images: ['/images/icon.png'],
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
  icons: {
    icon: '/images/icon.png',
    apple: '/images/icon.png',
  },
  verification: {
    google: 'O2FiIUskloCuuEjpY5iQ1JE6Q5Dpcrl2xFsIWxf4Ui0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-dark`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <Suspense fallback={null}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  )
} 
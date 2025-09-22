import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import React, { Suspense } from 'react'

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
  title: 'Lux Visionem & Partners',
  description: 'Premier law firm in Indonesia providing expert legal services with integrity and professionalism.',
  icons: {
    icon: '/images/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-dark`}>
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
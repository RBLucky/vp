import React from "react"
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: 'VodaPlug - AI-Powered Business Network',
  description: 'Find trusted partners & clients. The AI-powered business network for South African SMEs.',
  generator: 'VodaPlug',
  icons: {
    icon: [
      {
        url: '/vodacom-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/vodacom-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/vodacom-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/vodacom-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#e60000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

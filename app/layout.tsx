import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/hooks/useLang'
import SmoothScroll from '@/components/providers/SmoothScroll'
import FloatingElements from '@/components/FloatingElements'
import Nav from '@/components/Nav'
import PwaRegister from '@/components/PwaRegister'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'THERMOCORK — The Future of Natural Insulation',
  description: 'Thermocork — Natural projected cork insulation. Thermal, acoustic, ecological. Available worldwide through certified applicators.',
  keywords: ['cork insulation', 'aislamiento corcho', 'thermocork', 'corcho proyectado', 'aislamiento termoacústico', 'natural insulation'],
  authors: [{ name: 'Thermocork' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Thermocork',
  },
  openGraph: {
    title: 'THERMOCORK — The Future of Natural Insulation',
    description: 'Eco-friendly thermoacoustic cork spray insulation. No demolition, no solvents, no compromise.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_GB',
    siteName: 'Thermocork',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERMOCORK — The Future of Natural Insulation',
    description: 'Eco-friendly thermoacoustic cork spray insulation. No demolition, no solvents, no compromise.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C9A045',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <LangProvider>
          <SmoothScroll>
            <Nav />
            {children}
            <FloatingElements />
          </SmoothScroll>
        </LangProvider>
        <PwaRegister />
      </body>
    </html>
  )
}

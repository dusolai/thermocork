import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/hooks/useLang'
import SmoothScroll from '@/components/providers/SmoothScroll'
import FloatingElements from '@/components/FloatingElements'
import Nav from '@/components/Nav'
import Footer from '@/components/sections/Footer'
import PwaRegister from '@/components/PwaRegister'
import JsonLd from '@/components/JsonLd'

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

const SITE = 'https://thermocork.es'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'THERMOCORK — Aislamiento Natural de Corcho Proyectado',
    template: '%s · THERMOCORK',
  },
  description:
    'Aislamiento térmico, acústico e impermeabilizante de corcho natural proyectado. Sin obras, sin disolventes y de baja huella de carbono. Fabricado en España, disponible en todo el mundo.',
  keywords: [
    'corcho proyectado', 'aislamiento corcho', 'thermocork', 'aislamiento termoacústico',
    'cork insulation', 'impermeabilización corcho', 'techo frío', 'cool roof', 'SATE corcho',
    'rehabilitación energética', 'aislamiento ecológico',
  ],
  authors: [{ name: 'Thermocork' }],
  creator: 'Thermocork',
  manifest: '/manifest.json',
  alternates: { canonical: SITE },
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Thermocork' },
  openGraph: {
    title: 'THERMOCORK — Aislamiento Natural de Corcho Proyectado',
    description: 'Termoacústica ecológica de corcho proyectado. Sin obras, sin disolventes, sin compromisos.',
    type: 'website', locale: 'es_ES', alternateLocale: 'en_GB', siteName: 'Thermocork', url: SITE,
    images: [{ url: '/brand/logos/logo-hexagono.png', width: 360, height: 360, alt: 'Thermocork' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERMOCORK — Natural Cork Insulation',
    description: 'Eco-friendly thermoacoustic cork spray insulation. No demolition, no solvents, no compromise.',
    images: ['/brand/logos/logo-hexagono.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }], apple: '/icon.svg' },
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, maximumScale: 5, themeColor: '#0A0806',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`} suppressHydrationWarning>
        <JsonLd />
        <LangProvider>
          <SmoothScroll>
            <Nav />
            {children}
            <Footer />
            <FloatingElements />
          </SmoothScroll>
        </LangProvider>
        <PwaRegister />
      </body>
    </html>
  )
}

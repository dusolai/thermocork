import type { Metadata } from 'next'
import LegalDoc from '@/components/sections/LegalDoc'

export const metadata: Metadata = { title: 'Política de privacidad', robots: { index: false, follow: true } }

export default function Page() {
  return <LegalDoc docKey="privacidad" />
}

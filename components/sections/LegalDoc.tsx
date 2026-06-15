'use client'

import { useLang } from '@/hooks/useLang'
import { LEGAL } from '@/lib/legal'
import PageHero from '@/components/sections/PageHero'
import Section from '@/components/ui/Section'

export default function LegalDoc({ docKey }: { docKey: keyof typeof LEGAL }) {
  const { t: tr } = useLang()
  const doc = LEGAL[docKey]
  if (!doc) return null
  return (
    <main>
      <PageHero tag={doc.tag} title={doc.title} />
      <Section tone="dark" size="narrow">
        <div className="flex flex-col gap-7">
          {doc.blocks.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="font-display text-xl font-semibold text-sand-100 mb-2">{tr(b.h)}</h2>}
              <p className="text-[15px] leading-relaxed text-sand-300 m-0">{tr(b.p)}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}

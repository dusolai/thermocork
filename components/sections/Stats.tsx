'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import Container from '@/components/ui/Container'
import Stat from '@/components/ui/Stat'

export default function Stats() {
  const { t: tr } = useLang()
  return (
    <section className="relative bg-ink-900 border-y" style={{ borderColor: 'var(--border-soft)' }}>
      <Container className="py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 text-center">
          {t.stats.map((s, i) => (
            <Stat key={i} value={tr(s.num)} label={tr(s.label)} className="flex flex-col items-center" />
          ))}
        </div>
      </Container>
    </section>
  )
}

'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import Container from '@/components/ui/Container'
import Stat from '@/components/ui/Stat'

/**
 * 3 · Banda de cifras. Retícula de filete fino: cada dato ocupa su celda y las
 * separa un hilo, no un hueco. Las cifras cuentan al entrar en pantalla.
 */
export default function Stats() {
  const { t: tr } = useLang()
  return (
    <section className="relative bg-ink-900 border-b" style={{ borderColor: 'var(--border-soft)' }}>
      <Container size="wide" className="px-0 sm:px-8 lg:px-14">
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px"
          style={{ background: 'var(--border-soft)' }}
        >
          {t.stats.map((s, i) => (
            <div key={i} className="bg-ink-900 px-6 py-11 sm:py-14 flex flex-col items-start">
              <Stat value={tr(s.num)} label={tr(s.label)} className="flex flex-col items-start" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

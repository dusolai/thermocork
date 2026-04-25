'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import type { Lang } from '@/lib/i18n'

interface LangContextType {
  lang: Lang
  toggle: () => void
  t: <T extends { es: string; en: string }>(obj: T) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  toggle: () => {},
  t: (obj) => obj.es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggle = useCallback(() => {
    setLang(prev => prev === 'es' ? 'en' : 'es')
  }, [])

  const tFn = useCallback(<T extends { es: string; en: string }>(obj: T): string => {
    return obj[lang]
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, toggle, t: tFn }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

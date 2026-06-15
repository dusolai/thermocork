'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import type { Lang } from '@/lib/i18n'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: <T extends { es: string; en: string }>(obj: T) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  toggle: () => {},
  t: (obj) => obj.es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  // Restore persisted preference on mount
  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('tc-lang')) as Lang | null
    if (stored === 'es' || stored === 'en') setLangState(stored)
  }, [])

  // Persist + sync <html lang>
  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang
    if (typeof window !== 'undefined') localStorage.setItem('tc-lang', lang)
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(() => setLangState((p) => (p === 'es' ? 'en' : 'es')), [])
  const tFn = useCallback(
    <T extends { es: string; en: string }>(obj: T): string => obj[lang],
    [lang],
  )

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: tFn }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const langParam = searchParams?.get('lang')?.toLowerCase()
  const initialLang = langParam === 'en' ? 'en' : 'id'
  const [language, setLanguageState] = useState<Language>(initialLang)

  // Sync state with URL param
  React.useEffect(() => {
    if (langParam && langParam !== language) {
      setLanguageState(langParam === 'en' ? 'en' : 'id')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langParam])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    const params = new URLSearchParams(Array.from(searchParams?.entries() || []))
    params.set('lang', lang)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 
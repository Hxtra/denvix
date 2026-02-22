'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'no' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('no')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get saved language from localStorage or use default
    const saved = localStorage.getItem('language') as Language | null
    if (saved) {
      setLanguageState(saved)
    } else {
      setLanguageState('no')
    }
    setIsLoaded(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

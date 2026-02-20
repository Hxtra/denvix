'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'no' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
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
    }
    setIsLoaded(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Prevent rendering until hydrated to avoid hydration mismatch
  if (!isLoaded) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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

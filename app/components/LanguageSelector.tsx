'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'
import { Globe } from 'lucide-react'

export function LanguageSelector() {
  const { language, setLanguage, isLoaded } = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    if (!isLoaded) return
    
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('language')
    if (!hasSelectedLanguage) {
      setShowModal(true)
      setIsFirstVisit(true)
    }
  }, [isLoaded])

  const handleLanguageSelect = (lang: 'no' | 'en') => {
    setLanguage(lang)
    setShowModal(false)
  }

  if (!isLoaded) {
    return null
  }

  return (
    <>
      {/* Modal for first-time language selection */}
      {showModal && isFirstVisit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="liquid-glass-card rounded-2xl p-8 max-w-sm w-full shadow-2xl">
            <div className="flex justify-center mb-6">
              <Globe className="w-12 h-12 text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Velg ditt språk
            </h2>
            <p className="text-center text-gray-600 text-sm mb-8">
              Choose your preferred language
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => handleLanguageSelect('no')}
                className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02]"
              >
                Norsk
              </button>
              <button
                onClick={() => handleLanguageSelect('en')}
                className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-[1.02]"
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Language toggle button in header */}
      <button
        onClick={() => setShowModal(true)}
        className="liquid-glass-button flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-[1.02]"
        title={language === 'no' ? 'Change language' : 'Endre språk'}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </button>
    </>
  )
}

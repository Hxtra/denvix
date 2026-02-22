'use client'

import { useLanguage } from '@/app/context/LanguageContext'
import { translations, TranslationKey } from '@/app/translations/translations'

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['no'][key] || key
  }

  return { t, language }
}

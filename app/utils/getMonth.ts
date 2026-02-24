/**
 * Get the current month name in English
 * Automatically updates based on the current date
 */
export function getCurrentMonth(format: 'long' | 'short' = 'long'): string {
  const now = new Date()
  const monthIndex = now.getMonth()
  
  const monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  return format === 'short' ? monthsShort[monthIndex] : monthsLong[monthIndex]
}

/**
 * Get the current month name in Norwegian
 * Automatically updates based on the current date
 */
export function getCurrentMonthNorwegian(format: 'long' | 'short' = 'long'): string {
  const now = new Date()
  const monthIndex = now.getMonth()
  
  const monthsLong = [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
  ]
  
  const monthsShort = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des']
  
  return format === 'short' ? monthsShort[monthIndex] : monthsLong[monthIndex]
}

/**
 * Get translated month name based on language
 * Automatically updates based on the current date
 */
export function getCurrentMonthTranslated(language: 'en' | 'no' = 'en', format: 'long' | 'short' = 'long'): string {
  return language === 'no' ? getCurrentMonthNorwegian(format) : getCurrentMonth(format)
}

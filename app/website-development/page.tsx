"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Shield, Zap, Check, Users, X, MessageCircle } from "lucide-react"
import { useTranslation } from "@/app/hooks/useTranslation"
import { getCurrentMonth } from "@/app/utils/getMonth"

export default function WebsiteDevelopmentPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  const messengerLink =
    "https://m.me/61585271784479?text=Hi%20Devnix%2C%20I%27m%20interested%20in%20the%20Website%20Development%20offer%20(15%2C000%20NOK).%20I%27d%20like%20to%20discuss%20my%20project."

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Devnix Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg">Devnix</span>
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToHome')}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 mb-8 liquid-glass-badge px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-red-600">{t('only2SlotsLeft')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900">{t('websiteDevelopment')}</h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-300 mb-6">
            {t('forNorwegianBusinesses')}
          </h2>

          <p className="text-xl text-gray-500 mb-4 max-w-2xl leading-relaxed">
            {t('webDevelopmentPageDesc')}
          </p>

          {/* Timeframe */}
          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{t('December')} {t('deliveryWindow')}</span>
          </div>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            {t('requestOffer')}
          </a>
        </div>
      </section>

      {/* Value Imagination Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t('imagineHeading')}
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              {t('imagineP1')}
            </p>
            <p>
              {t('imagineP2')}
            </p>
            <p>
              {t('imagineP3')}
            </p>
          </div>
        </div>
      </section>

      {/* What This Website Does Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {t('whatWebsiteDoes')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('trust')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('trustDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('speed')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('speedDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 3v18M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('clarity')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('clarityDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('growthReadiness')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('growthReadinessDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{t('whatIncluded')}</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              t('customUiUx'),
              t('reactNextjs'),
              t('mobileFirst'),
              t('seoReady'),
              t('gdprFriendly'),
              t('cleanCode'),
              t('postLaunchSupport'),
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 liquid-glass-card rounded-xl">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{t('processTimeline')}</h2>

          <div className="space-y-6">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('week1')}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {t('week1Desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('week2')}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {t('week2Desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('week3')}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {t('week3Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-gray-500 text-center">{t('transparentDelivery')}</p>
        </div>
      </section>

      {/* Pricing Psychology Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('typicalCosts')}</h2>
          <p className="text-gray-500 mb-12">{t('whatBusinessesPay')}</p>

          <div className="space-y-4 mb-16">
            <div className="liquid-glass-card p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-700 font-medium">{t('basicWebsites')}</span>
                <div className="text-left sm:text-right">
                  <span className="text-gray-900 font-semibold">30,000 – 60,000 NOK</span>
                  <span className="text-gray-400 text-sm ml-2">/ {t('weeksDelivery24')}</span>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-700 font-medium">{t('ecommerceStores')}</span>
                <div className="text-left sm:text-right">
                  <span className="text-gray-900 font-semibold">80,000 – 150,000 NOK</span>
                  <span className="text-gray-400 text-sm ml-2">/ {t('weeksDelivery58')}</span>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-700 font-medium">{t('customWebApps')}</span>
                <div className="text-left sm:text-right">
                  <span className="text-gray-900 font-semibold">150,000+ NOK</span>
                  <span className="text-gray-400 text-sm ml-2">/ 8-12+ weeks</span>
                </div>
              </div>
            </div>
          </div>

          {/* The Offer */}
          <div className="liquid-glass-service-card p-6 sm:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-emerald-100 text-emerald-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              {t('limitedOffer')}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 mt-8 sm:mt-0">{t('thisProjectPrice')}</h3>

            <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">15,000 NOK</span>
              <span className="text-gray-400 line-through text-lg sm:text-xl sm:mb-1">35,000 – 60,000 NOK</span>
            </div>

            <p className="text-gray-500 mb-6 leading-relaxed text-sm sm:text-base">
              <strong>{t('reasonForDiscount')}</strong> {t('decemberAvailability')}
            </p>

            <div className="liquid-glass-badge inline-flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></span>
              <span className="text-xs sm:text-sm font-medium text-amber-700">
                {t('onlySlots')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Who This Is For */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-600" />
                {t('whoThisIsFor')}
              </h2>
              <div className="space-y-4">
                {[
                  t('norwegianSmallBusinesses'),
                  t('startups'),
                  t('consultants'),
                  t('brandsWantSerious'),
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Is Not For */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <X className="w-6 h-6 text-red-500" />
                {t('whoThisIsNotFor')}
              </h2>
              <div className="space-y-4">
                {[t('quickFakeWebsites'), t('unlimitedRevisions'), t('rushedBuilds')].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-gray-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">{t('noCalls')}</h2>
          <p className="text-xl text-gray-400 mb-10">{t('justConversation')}</p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-[1.02]"
          >
            {t('requestWebsiteDevelopmentOffer')}
          </a>
        </div>
      </section>

      {/* Cross-Service Navigation Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-3">Need Something Else?</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('exploreOtherServices')}</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Check out our other services to find the perfect solution for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Landing Page Dev */}
            <Link href="/landing-page-dev">
              <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-orange-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-orange-600 font-bold text-lg">-50% OFF</span>
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors group-hover:scale-110 duration-300">
                    <svg className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors">{t('landingPageDevTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t('landingPageDevShort')}</p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                    <span className="text-xs font-semibold text-orange-700">4 SLOTS LEFT</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wide">CLICK →</span>
                </div>
              </div>
            </Link>

            {/* Website Maintenance */}
            <Link href="/website-maintenance">
              <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-amber-600 font-bold text-lg">-50% OFF</span>
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors group-hover:scale-110 duration-300">
                    <svg className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors">{t('websiteMaintenanceTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t('websiteMaintenanceShort')}</p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                    <span className="text-xs font-semibold text-orange-700">5 SLOTS LEFT</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-amber-600 transition-colors uppercase tracking-wide">CLICK →</span>
                </div>
              </div>
            </Link>

            {/* Responsive Redesign */}
            <Link href="/responsive-redesign">
              <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-emerald-600 font-bold text-lg">-50% OFF</span>
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors group-hover:scale-110 duration-300">
                    <svg className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{t('responsiveRedesignTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t('responsiveRedesignShort')}</p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                    <span className="text-xs font-semibold text-orange-700">3 SLOTS LEFT</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-emerald-600 transition-colors uppercase tracking-wide">CLICK →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#111111] border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Devnix Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-white font-semibold">Devnix</span>
            </Link>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('termsOfService')}
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">{t('copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

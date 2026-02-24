"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Clock, ArrowLeft, Smartphone, Zap, Target, BarChart3 } from "lucide-react"
import { useTranslation } from "@/app/hooks/useTranslation"

export default function LandingPageDevOffer() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const messengerLink = `https://m.me/61585271784479?text=${encodeURIComponent("Hi Denvix, I'm interested in: Landing Page Development. 50% OFF.")}`

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo/denvix-logo.png" alt="Denvix Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Denvix</span>
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
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">
              {t('slotsLeftDecember')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('landingPageConversion')}
          </h1>

          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            {t('landingPageDesc')}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>{t('weekDelivery')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Target className="w-4 h-4" />
              <span>{t('conversionOptimized')}</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            {t('requestLandingPageOffer')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            {t('everyVisitorCounts')}
          </h2>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              {t('problemP1')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('problemP2')}
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{t('whyThisMatters')}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('turnsVisitors')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('turnsVisitorsDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('communicatesOffer')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('communicatesOfferDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('worksEverywhere')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('worksEverywhereDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('buildsTrust')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('buildsTrustDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('whatYouGet')}</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            {t('whatYouGetDesc')}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              t('customLandingPage'),
              t('mobileFirstDesign'),
              t('clearCTAPlacement'),
              t('seoFriendlyStructure'),
              t('fastLoading'),
              t('gdprCompliantForms'),
              t('postLaunchSupport14'),
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('processTimeline2')}</h2>
          <p className="text-gray-500 mb-12">{t('transparentDelivery2')}</p>

          <div className="space-y-6">
            <div className="liquid-glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('day1Alignment')}</h3>
                  <p className="text-gray-500 text-sm">
                    {t('day1AlignmentDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('day3Development')}</h3>
                  <p className="text-gray-500 text-sm">
                    {t('day3DevelopmentDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('day8Launch')}</h3>
                  <p className="text-gray-500 text-sm">
                    {t('day8LaunchDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('costsTimelines')}</h2>
          <p className="text-gray-400 uppercase text-xs tracking-wider font-semibold mb-8">
            {t('norwegianMarketRef')}
          </p>

          {/* Market Comparison */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>{t('normalPriceRange')}</strong> {t('normalPriceRangeValue')}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>{t('typicalTimeline')}</strong> {t('typicalTimelineValue')}
            </p>
            <p className="text-gray-500 text-sm">
              {t('mostAgencies')}
            </p>
          </div>

          {/* Current Offer */}
          <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 border-2 border-gray-900">
            <div className="inline-flex items-center gap-2 mb-6 bg-emerald-50 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-emerald-700">{t('decemberOffer')}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl font-bold">{t('landingPagePrice')}</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">{t('landingPagePriceOriginal')}</span>
            </div>

            <p className="text-gray-600 mb-6">
              <strong>{t('timelineCompletion')}</strong>
            </p>

            <p className="text-gray-500 text-sm mb-6">
              <strong>{t('whyDiscountLP')}</strong>
            </p>

            <div className="flex items-start sm:items-center gap-2 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0 mt-1.5 sm:mt-0"></span>
              <span>{t('onlySlots4')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">{t('whoThisForLP')}</h2>
              <ul className="space-y-4">
                {[
                  t('smallBusinessesLeads'),
                  t('startupsLaunching'),
                  t('consultantsAgencies'),
                  t('businessesAdCampaigns'),
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">{t('whoThisNotForLP')}</h2>
              <ul className="space-y-4">
                {[
                  t('anyoneExpectingMultiple'),
                  t('anyoneInstantDelivery'),
                  t('projectsUnlimitedRevisions'),
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs">✕</span>
                    </div>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 bg-amber-500/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-amber-300">{t('limitedAvailability')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">{t('slotsLeftDecemberScarcity')}</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {t('onceGonePrice')}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t('noCalls2')}
            <br />
            {t('justConversation2')}
          </h2>

          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            {t('sendMessageMessenger')}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            {t('requestLandingPageOffer')}
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-gray-400 text-sm mt-6">{t('responseTime')}</p>
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
            {/* Website Development */}
            <Link href="/website-development">
              <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-red-600 font-bold text-lg">-50% OFF</span>
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors group-hover:scale-110 duration-300">
                    <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">{t('websiteDevelopmentTitle')}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t('websiteDevelopmentShort')}</p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                    <span className="text-xs font-semibold text-orange-700">2 SLOTS LEFT</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-red-600 transition-colors uppercase tracking-wide">CLICK →</span>
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
  <Link href="/" className="flex items-center gap-3">
  <img src="/logo/denvix-logo.png" alt="Denvix Logo" className="h-10 w-auto" />
  <span className="text-white font-semibold">Denvix</span>
  </Link>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('termsOfService')}
              </a>
            </div>
            <p className="text-gray-500 text-sm">{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

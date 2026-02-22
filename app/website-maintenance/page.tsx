"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Clock, Shield, Zap, Wrench, RefreshCw, AlertCircle } from "lucide-react"
import { useTranslation } from "@/app/hooks/useTranslation"

export default function WebsiteMaintenancePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  const messengerLink = `https://m.me/61585271784479?text=${encodeURIComponent("Hi, I'm interested in the Website Maintenance offer (50% OFF). I'd like to discuss my website's needs.")}`

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Devnix Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-semibold text-lg">Devnix</span>
            </Link>
          </div>
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
              {t('maintenanceSlots')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            {t('maintenanceHeadline')}
            <br />
            <span className="text-gray-400">{t('weightYouCarry')}</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
            {t('maintenanceDesc')}
          </p>

          {/* Timeframe */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t('immediateAvailability')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{t('ongoingProtection')}</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            {t('requestMaintenanceSupport')}
          </a>
        </div>
      </section>

      {/* The Weight You Carry Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t('builtSomethingValuable')}
            <br />
            <span className="text-gray-400">{t('websiteMaintenance')}</span>
          </h2>

          <div className="prose prose-lg text-gray-600 max-w-none mb-12">
            <p className="leading-relaxed">
              {t('websiteInvestment')}
            </p>
            <p className="leading-relaxed">
              {t('websitesDontStayPerfect')}
            </p>
            <p className="leading-relaxed font-medium text-gray-800">
              {t('quietConcern')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">{t('whatWeHandle')}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {t('technicalWeight')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('bugFixesTroubleshooting')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('bugFixesDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('performanceOptimization')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('performanceOptimizationDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('securityUpdates')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('securityUpdatesDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('contentFeatureUpdates')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('contentFeatureUpdatesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t('whatChanges')}
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('stopCheckingNervously')}</h4>
                <p className="text-gray-500">
                  {t('stopCheckingNervouslyDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('issuesGetFixed')}</h4>
                <p className="text-gray-500">
                  {t('issuesGetFixedDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('someoneToCall')}</h4>
                <p className="text-gray-500">
                  {t('someoneToCallDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{t('websiteAsset')}</h4>
                <p className="text-gray-500">
                  {t('websiteAssetDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">{t('transparentPricing')}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {t('typicalCostsMaintenanceNorway')}
          </h2>

          {/* Market Comparison */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">{t('whatAgenciesCharge')}</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>{t('basicMaintenancePackages')}</span>
                <span className="font-medium">{t('basicMaintenancePrice')}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>{t('oneTimeTroubleshooting')}</span>
                <span className="font-medium">{t('onceTimeTroubleshootingPrice')}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-1">
                <span>{t('performanceOptimizationProjects')}</span>
                <span className="font-medium">{t('performanceOptimizationPrice')}</span>
              </div>
            </div>
          </div>

          {/* Our Offer */}
          <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 border-2 border-gray-900">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="liquid-glass-flash-badge px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                {t('fiftyPercentOff')}
              </span>
              <span className="text-sm text-gray-500">{t('maintenanceSlots')}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('websiteMaintenancePackage')}</h3>
            <p className="text-gray-500 mb-6">{t('completeCareParagraph')}</p>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-4xl font-bold">{t('maintenancePrice')}</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">{t('maintenancePriceOriginal')}</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>{t('fullSiteAudit')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>{t('bugFixesAndTroubleshooting')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>{t('performanceOptimizationService')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>{t('securityUpdatesService')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>{t('postServiceSupport14')}</span>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  {t('fiveSlots')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">{t('thisServiceIsFor')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('businessOwnersNeedingReliable')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('sitesExperiencingIssues')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('tiredWorryingAboutTechnical')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('wantTrustedPartner')}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-400">{t('thisServiceIsNotFor')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>{t('completeRebuild')}</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>{t('unlimitedRevisionsOrScope')}</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>{t('emergencySameDay')}</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>{t('hostingDomainManagement')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('noPressureNoCallsMaintenance')}
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            {t('tellUsWhatsWrong')}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            {t('requestMaintenanceSupport')}
          </a>

          <p className="text-sm text-gray-400 mt-6">{t('responseTimeBusinessHours')}</p>
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
                
                <div className="space-y-3 mt-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                      <span className="text-xs font-semibold text-orange-700">2 SLOTS LEFT</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all group-hover:shadow-lg group-hover:scale-105 active:scale-95">
                    CLICK NOW →
                  </button>
                </div>
              </div>
            </Link>

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
                
                <div className="space-y-3 mt-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                      <span className="text-xs font-semibold text-orange-700">4 SLOTS LEFT</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all group-hover:shadow-lg group-hover:scale-105 active:scale-95">
                    CLICK NOW →
                  </button>
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
                
                <div className="space-y-3 mt-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2">
                      <span className="text-xs font-semibold text-orange-700">3 SLOTS LEFT</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all group-hover:shadow-lg group-hover:scale-105 active:scale-95">
                    CLICK NOW →
                  </button>
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

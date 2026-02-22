"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Clock, Users, XCircle, Smartphone, Monitor, Tablet } from "lucide-react"
import { useTranslation } from "@/app/hooks/useTranslation"

export default function ResponsiveRedesignPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  const messengerLink = `https://m.me/61585271784479?text=${encodeURIComponent("Interested in: Responsive Redesign. 50% OFF.")}`

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">
              3 Slots Left · December Delivery
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('responsiveRedesignHero')}
            <span className="text-gray-300"> {t('readyToLookModern')}</span>
          </h1>

          <p className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
            {t('websiteIsFace')}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] text-lg"
          >
            {t('requestRedesignOffer')}
          </a>
        </div>
      </section>

      {/* Value Imagination Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            {t('imagePerfectEverywhere')}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              {t('transformedIntoFast')}
            </p>
            <p>
              {t('noMorePinching')}
            </p>
            <p>
              {t('competitorsLookModern')}
            </p>
          </div>

          {/* Device Preview */}
          <div className="mt-12 flex items-end justify-center gap-4">
            <div className="liquid-glass-card p-4 rounded-xl">
              <Smartphone className="w-8 h-8 text-gray-600" />
              <p className="text-xs text-gray-500 mt-2">Mobile</p>
            </div>
            <div className="liquid-glass-card p-5 rounded-xl">
              <Tablet className="w-10 h-10 text-gray-600" />
              <p className="text-xs text-gray-500 mt-2">Tablet</p>
            </div>
            <div className="liquid-glass-card p-6 rounded-xl">
              <Monitor className="w-12 h-12 text-gray-600" />
              <p className="text-xs text-gray-500 mt-2">Desktop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{t('whyThisMattersResponsive')}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t('professionalAnyDevice'),
                description: t('siteAdaptsBeautifully'),
              },
              {
                title: t('increasedUserEngagement'),
                description: t('whenVisitorsNavigate'),
              },
              {
                title: t('reducedBounceRates'),
                description: t('mobileUsersLeave'),
              },
              {
                title: t('modernWithoutRebuilding'),
                description: t('updateYourDesign'),
              },
              {
                title: t('worksAcrossAllBrowsers'),
                description: t('chromeFirefox'),
              },
              {
                title: t('betterSearchRankings'),
                description: t('googleMobileFriendly'),
              },
            ].map((item, index) => (
              <div key={index} className="liquid-glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{t('whatYouGetResponsive')}</h2>

          <div className="grid gap-4">
            {[
              t('fullResponsiveRedesign'),
              t('mobileFirstLayoutTablet'),
              t('modernDesignUpdate'),
              t('performancespeedImprovements'),
              t('seoFriendlyStructureResponsive'),
              t('postLaunchSupport14Days'),
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-600" />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('processTimeline')}</h2>
          <p className="text-gray-500 mb-12">{t('transparentStepsClear')}</p>

          <div className="space-y-6">
            {[
              {
                phase: t('day1To2Evaluation'),
                title: '',
                description: t('reviewCurrentSite'),
              },
              {
                phase: t('day3To7Redesign'),
                title: '',
                description: t('siteTransformed'),
              },
              {
                phase: t('day8To10Testing'),
                title: '',
                description: t('rigorousTesting'),
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="liquid-glass-card px-4 py-3 rounded-lg flex-shrink-0">
                  <span className="text-sm font-semibold text-gray-700">{step.phase}</span>
                </div>
                <div className="pt-1">
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 text-gray-500">
            <Clock className="w-5 h-5" />
            <span>{t('weekDelivery')}</span>
          </div>
        </div>
      </section>

      {/* Pricing Psychology Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            {t('costTypicalTimelines')}
            <span className="text-gray-400 block text-2xl mt-2">{t('norwegianMarket')}</span>
          </h2>

          {/* Market Comparison */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">{t('whatOthersCharge')}</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>{t('basicResponsiveUpdates')}</span>
                <span className="font-medium">{t('basicResponsivePrice')}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>{t('fullResponsiveRedesignPrice')}</span>
                <span className="font-medium">{t('fullResponsivePrice')}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-1">
                <span>{t('completeSiteModernization')}</span>
                <span className="font-medium">{t('completeSitePrice')}</span>
              </div>
            </div>
          </div>

          {/* Our Offer */}
          <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 border-2 border-gray-900">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="liquid-glass-flash-badge px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                50% OFF
              </span>
              <span className="text-sm text-gray-500">December Offer</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('responsiveRedesignPackage')}</h3>
            <p className="text-gray-500 mb-6">{t('transformYourSite')}</p>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-4xl font-bold">{t('nok6000')}</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">{t('nok12000')}</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              <strong>{t('whyDiscount')}</strong> {t('limitedDecemberAvailability')}
            </p>

            <div className="flex items-start sm:items-center gap-2 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0 mt-1.5 sm:mt-0"></span>
              <span>{t('threeSlots')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold">{t('whoThisIsForResponsive')}</h2>
              </div>
              <ul className="space-y-4">
                {[
                  t('businessesOutdated'),
                  t('companiesWantingBetter'),
                  t('anyoneWhoWants'),
                  t('brandReadyToStop'),
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-400">{t('whoThisIsNotForResponsive')}</h2>
              </div>
              <ul className="space-y-4">
                {[
                  t('thoseWantingBrand'),
                  t('anyoneExpectingUnlimited'),
                  t('companiesRushing'),
                  t('projectsRequiringComplete'),
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-amber-700">{t('limitedAvailability')}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t('slotsLeftDecemberScarcity')}</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            {t('onceGonePrice')}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t('readyToLookModernCTA')}</h2>

          <p className="text-gray-500 text-lg mb-10">{t('noCalls')}</p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] text-lg"
          >
            {t('requestRedesignOffer')}
          </a>

          <p className="text-gray-400 text-sm mt-6">
            {t('clickToStartConversation')}
          </p>
        </div>
      </section>

      {/* Cross-Service Navigation Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">{t('exploreOtherServices')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Website Development */}
            <Link href="/website-development">
              <div className="liquid-glass-service-card p-8 rounded-2xl h-full hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="mb-4">
                  <span className="text-red-600 font-semibold text-sm">-50% OFF</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('websiteDevelopmentTitle')}</h3>
                <p className="text-gray-500 text-sm mb-6">{t('websiteDevelopmentShort')}</p>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2 w-fit">
                  <span className="text-xs font-semibold text-orange-700">2 SLOTS LEFT</span>
                </div>
              </div>
            </Link>

            {/* Landing Page Dev */}
            <Link href="/landing-page-dev">
              <div className="liquid-glass-service-card p-8 rounded-2xl h-full hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="mb-4">
                  <span className="text-orange-600 font-semibold text-sm">-50% OFF</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('landingPageDevTitle')}</h3>
                <p className="text-gray-500 text-sm mb-6">{t('landingPageDevShort')}</p>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2 w-fit">
                  <span className="text-xs font-semibold text-orange-700">4 SLOTS LEFT</span>
                </div>
              </div>
            </Link>

            {/* Website Maintenance */}
            <Link href="/website-maintenance">
              <div className="liquid-glass-service-card p-8 rounded-2xl h-full hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="mb-4">
                  <span className="text-amber-600 font-semibold text-sm">-50% OFF</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('websiteMaintenanceTitle')}</h3>
                <p className="text-gray-500 text-sm mb-6">{t('websiteMaintenanceShort')}</p>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full px-3 py-2 w-fit">
                  <span className="text-xs font-semibold text-orange-700">5 SLOTS LEFT</span>
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
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Devnix. Built for Norway.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

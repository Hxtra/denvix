"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { LanguageSelector } from "@/app/components/LanguageSelector"
import { useTranslation } from "@/app/hooks/useTranslation"
import {
  Clock,
  Globe,
  Shield,
  FileText,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  Facebook,
} from "lucide-react"

// Utility function to get current month
function getCurrentMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return months[new Date().getMonth()]
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentMonth, setCurrentMonth] = useState("")
  const { t } = useTranslation()

  useEffect(() => {
    setCurrentMonth(getCurrentMonth())
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Devnix Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg">Devnix</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              {t('work')}
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              {t('services')}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              {t('contact')}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <a
              href="#contact"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {t('getInTouch')}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-red-50 border border-red-200">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wider uppercase text-red-600">
                  {t('heroBadge')} {currentMonth}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 leading-[1.2]">
                {t('heroHeadline')}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                {t('heroDescription')}
              </p>

              {/* Primary CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] mb-6 shadow-lg hover:shadow-xl"
              >
                {t('heroButton')}
              </a>

              {/* Trust Text */}
              <p className="text-sm text-gray-500 mb-8">
                {t('heroTrust')}
              </p>

              {/* Rating Display */}
              <div className="flex flex-col items-start gap-3">
                {/* Avatars */}
                <div className="flex items-center">
                  <div className="relative w-20 h-8">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden shadow-md">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260218-190759-o9ISQ3eW0ehJ01yyfSK83FE2Zf5EuL.jpg" alt="Client 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute left-5 w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden shadow-md">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260218-190759-o9ISQ3eW0ehJ01yyfSK83FE2Zf5EuL.jpg" alt="Client 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute left-10 w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden shadow-md">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260218-190759-o9ISQ3eW0ehJ01yyfSK83FE2Zf5EuL.jpg" alt="Client 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Gold Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Rating Text */}
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{t('heroRated')} 4.9</span>
                  <span className="text-gray-400"> {t('heroFrom')}</span>
                  <span className="font-semibold"> {t('heroBusinessOwners')}</span>
                </p>
              </div>
            </div>

            {/* Right: 2x2 Image Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 h-fit">
              {/* Image 1: Client Testimonial */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-gray-50 to-gray-100 aspect-square border border-gray-200">
                <img
                  src="https://via.placeholder.com/250x250?text=Client+Testimonial"
                  alt="Client testimonial screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2: Website Project */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-gray-50 to-gray-100 aspect-square border border-gray-200">
                <img
                  src="https://via.placeholder.com/250x250?text=Website+Project"
                  alt="Real website project screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3: Revenue Dashboard */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-gray-50 to-gray-100 aspect-square border border-gray-200">
                <img
                  src="https://via.placeholder.com/250x250?text=Revenue+Dashboard"
                  alt="Stripe revenue dashboard screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 4: Before/After */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-gray-50 to-gray-100 aspect-square border border-gray-200">
                <img
                  src="https://via.placeholder.com/250x250?text=Before+After"
                  alt="Website before and after comparison"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Technologies */}
      <section className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-6">{t('trustedTechnologies')}</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Wise",
              "Stripe",
              "Next.js",
              "React",
              "Node.js",
              "Vercel",
              "HTML",
              "CSS",
              "JavaScript",
              "PHP",
              "MySQL",
            ].map((tech) => (
              <span
                key={tech}
                className="liquid-glass-tech-badge px-4 py-2 rounded-lg text-sm font-medium text-gray-600 transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Stats Section */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Stat 1 */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {t('trustedHeading')}
              </h3>
              <div className="w-12 h-1 bg-gray-300 rounded-full mb-6"></div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('trustedDescription')}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {t('deliveredHeading')}
              </h3>
              <div className="w-12 h-1 bg-gray-300 rounded-full mb-6"></div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('deliveredDescription')}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {t('pricingHeading')}
              </h3>
              <div className="w-12 h-1 bg-gray-300 rounded-full mb-6"></div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('pricingDescription')}
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-100">
            <div className="flex flex-col">
              <p className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-3">Achievement</p>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">58+</h3>
              <p className="text-gray-600">{t('completedProjects')}</p>
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-3">Speed</p>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">7-14</h3>
              <p className="text-gray-600">{t('deliveryDays')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Payments Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Liquid Glass Label */}
          <div className="liquid-glass-label inline-flex px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">{t('trustPayments')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            {t('trustPaymentsTitle')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Payment Cards */}
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('payInNOK')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('payInNOKDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('coverWiseFees')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('coverWiseFeesDesc')}
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t('fullTransparency')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('fullTransparencyDesc')}
              </p>
            </div>
          </div>

          {/* Wise CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('newToWise')}</h3>
              <p className="text-gray-400 text-sm">
                {t('newToWiseDesc')}
              </p>
            </div>
            <a
              href="https://wise.com/invite/ahpc/ayomideemmanuelo21"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-button-dark inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all hover:scale-[1.02]"
            >
              Get Started with Wise
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Flash Sale Badge */}
          <div className="liquid-glass-flash-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-emerald-700">{t('flashSaleActive')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t('premiumServices')}</h2>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-300 mb-8">{t('limitedPricing')}</h2>

          <p className="text-gray-500 max-w-2xl mb-12">
            {t('servicesDescription')}
          </p>

          {/* Offer Status */}
          <div className="liquid-glass-status inline-flex items-center gap-4 px-6 py-3 rounded-full mb-12">
            <span className="text-sm text-gray-600">{t('offerStatus')}</span>
            <span className="text-sm font-semibold">{currentMonth} Slots</span>
            <span className="text-sm font-semibold text-amber-600">{t('closingSoon')}</span>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/website-development">
              <ServiceCard
                discount={t('discountOff')}
                title={t('websiteDevelopmentTitle')}
                description={t('websiteDevelopmentDesc')}
                originalPrice="NOK 35,000"
                salePrice="NOK 15,000"
                slotsLeft={2}
              />
            </Link>
            <Link href="/landing-page-dev">
              <ServiceCard
                discount={t('discountOff')}
                title={t('landingPageDevTitle')}
                description={t('landingPageDevDesc')}
                originalPrice="NOK 15,000"
                salePrice="NOK 7,500"
                slotsLeft={4}
              />
            </Link>
            <Link href="/website-maintenance">
              <ServiceCard
                discount={t('discountOff')}
                title={t('websiteMaintenanceTitle')}
                description={t('websiteMaintenanceDesc')}
                originalPrice="NOK 5,000"
                salePrice="NOK 2,500"
                slotsLeft={5}
              />
            </Link>
            <Link href="/responsive-redesign">
              <ServiceCard
                discount={t('discountOff')}
                title={t('responsiveRedesignTitle')}
                description={t('responsiveRedesignDesc')}
                originalPrice="NOK 12,000"
                salePrice="NOK 6,000"
                slotsLeft={3}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">{t('howItWorks')}</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
              {t('howItWorksSubtitle')}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="liquid-glass-service-card p-6 rounded-2xl flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('step1Title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('step1Description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="liquid-glass-service-card p-6 rounded-2xl flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('step2Title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('step2Description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="liquid-glass-service-card p-6 rounded-2xl flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('step3Title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('step3Description')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="liquid-glass-service-card p-6 rounded-2xl flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('step4Title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('step4Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">{t('portfolio')}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t('ourWork')}
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              {t('viewAllWork')}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioCard
              image="/restaurant-booking/original-4141fbe08a367d555c3cc66d614554b8.png"
              title="Restaurant Booking Conversion Platform"
              category="Conversion Platform"
              href="/restaurant-booking"
            />
            {/* MINERVA Hair Salon */}
            <Link href="/minerva-hair-salon" className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[4/3] shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <img
                  src="/images/img-20251219-012915-001.jpg"
                  alt="MINERVA Hair Salon"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-gray-600 transition-colors">
                MINERVA Hair Salon
              </h3>
              <p className="text-gray-500 text-sm">Hair Salon</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">{t('letsBuild')}</h2>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">{t('impact')}</h2>

          <p className="text-gray-400 mb-10 max-w-lg">
            {t('contactDescription')}
            <span className="text-white font-semibold">{t('freeAudit')}</span> {t('withProject')}
          </p>

          {/* Contact Links with Liquid Glass Effect */}
          <div className="flex flex-col items-start gap-4">
            {/* WhatsApp - widest */}
            <a
              href="https://wa.me/2348154386607?text=Hi%20Devnix%2C%20I%27m%20interested%20in%20your%20web%20development%20services.%20I%27d%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-contact-link inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full transition-all hover:scale-[1.02] w-auto"
              style={{ minWidth: "320px" }}
            >
              <span className="text-white text-sm font-medium">{t('chatWhatsApp')}</span>
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
            </a>

            {/* Email - medium width */}
            <a
              href="mailto:devnixglobal@gmail.com"
              className="liquid-glass-contact-link inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full transition-all hover:scale-[1.02] w-auto"
              style={{ minWidth: "270px" }}
            >
              <span className="text-white text-sm font-medium">devnixglobal@gmail.com</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gray-900" />
              </div>
            </a>

            {/* Facebook - shortest */}
            <a
              href="https://www.facebook.com/profile.php?id=61585271784479"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-contact-link inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full transition-all hover:scale-[1.02] w-auto"
              style={{ minWidth: "200px" }}
            >
              <span className="text-white text-sm font-medium">{t('devnixGlobal')}</span>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#111111] border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Devnix Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-white font-semibold">Devnix</span>
            </div>
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

function ServiceCard({
  discount,
  title,
  description,
  originalPrice,
  salePrice,
  slotsLeft,
}: {
  discount: string
  title: string
  description: string
  originalPrice: string
  salePrice: string
  slotsLeft: number
}) {
  return (
    <div className="liquid-glass-service-card p-8 rounded-2xl relative overflow-hidden group transition-all hover:scale-[1.01]">
      {/* Discount Badge */}
      <div className="absolute top-6 right-6 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
        {discount}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>

      <div className="flex items-end gap-3 mb-4">
        <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
        <span className="text-2xl font-bold">{salePrice}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-amber-600 text-sm font-medium">{slotsLeft} left</span>
      </div>
    </div>
  )
}

function PortfolioCard({
  image,
  title,
  category,
  href = "#",
}: {
  image: string
  title: string
  category: string
  href?: string
}) {
  return (
    <Link href={href} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[4/3]">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1 group-hover:text-gray-600 transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm">{category}</p>
    </Link>
  )
}

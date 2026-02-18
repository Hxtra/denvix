"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Shield, Zap, Check, Users, X, MessageCircle } from "lucide-react"

export default function WebsiteDevelopmentPage() {
  const [isLoaded, setIsLoaded] = useState(false)

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
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
            We Build High-Converting Websites That Turn Visitors Into Clients.
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
            Premium web design for ambitious Norwegian businesses. Fast delivery. Transparent pricing. Real results.
          </p>

          {/* Primary CTA Button */}
          <a
            href={messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] mb-6"
          >
            <MessageCircle className="w-5 h-5" />
            Book Your Free Strategy Call
          </a>

          {/* Trust Text */}
          <p className="text-sm text-gray-400 mb-8">
            5 Free Revisions Until You're 100% Satisfied
          </p>

          {/* Rating Display */}
          <div className="flex items-center gap-4">
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
            <p className="text-sm text-gray-600">
              Rated 4.9/5 by 37+ Business Owners
            </p>
          </div>
        </div>
      </section>

      {/* Value Imagination Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Imagine your next client visits your website.
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The page loads instantly. No waiting. No spinning icons. Your message is clear from the first second.
              Trust is established before they even scroll.
            </p>
            <p>
              Your business looks serious. Professional. Modern. The kind of company they want to work with. The kind of
              company they can trust with their money.
            </p>
            <p>
              That first impression turns into a conversation. The conversation turns into a client. The client turns
              into revenue. This is what a proper website does for your business.
            </p>
          </div>
        </div>
      </section>

      {/* What This Website Does Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            What this website does for your business.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-gray-500 leading-relaxed">
                Professional design signals credibility. Visitors believe in your business before reading a single word.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Speed</h3>
              <p className="text-gray-500 leading-relaxed">
                Lightning-fast load times keep visitors engaged. No one waits for slow websites anymore.
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
              <h3 className="text-xl font-semibold mb-3">Clarity</h3>
              <p className="text-gray-500 leading-relaxed">
                Clear messaging and intuitive navigation guide visitors to take action. No confusion. No friction.
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
              <h3 className="text-xl font-semibold mb-3">Growth Readiness</h3>
              <p className="text-gray-500 leading-relaxed">
                Built to scale with your business. Add features, pages, and functionality as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">What is included.</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Custom UI and UX design",
              "React and Next.js development",
              "Mobile-first responsive layout",
              "SEO-ready structure",
              "GDPR-friendly setup",
              "Clean maintainable codebase",
              "30 days post-launch support",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Process and timeline.</h2>

          <div className="space-y-6">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Week 1</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Strategy, structure, and design direction. We understand your business and plan the perfect website
                    architecture.
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
                  <h3 className="text-xl font-semibold mb-2">Week 2</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Development and implementation. Your website takes shape with clean code and premium design.
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
                  <h3 className="text-xl font-semibold mb-2">Week 3</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Testing, refinement, and launch. We polish every detail and deploy your website live.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-gray-500 text-center">Transparent delivery. Calm process. No surprises.</p>
        </div>
      </section>

      {/* Pricing Psychology Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Typical Costs and Timelines in Norway.</h2>
          <p className="text-gray-500 mb-12">What Norwegian businesses typically pay for web development.</p>

          <div className="space-y-4 mb-16">
            <div className="liquid-glass-card p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-700 font-medium">Basic business websites</span>
                <div className="text-left sm:text-right">
                  <span className="text-gray-900 font-semibold">30,000 – 60,000 NOK</span>
                  <span className="text-gray-400 text-sm ml-2">/ 2-4 weeks</span>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-700 font-medium">E-commerce stores</span>
                <div className="text-left sm:text-right">
                  <span className="text-gray-900 font-semibold">80,000 – 150,000 NOK</span>
                  <span className="text-gray-400 text-sm ml-2">/ 5-8 weeks</span>
                </div>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-gray-700 font-medium">Custom web applications</span>
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
              Limited Offer
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 mt-8 sm:mt-0">This project price</h3>

            <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">15,000 NOK</span>
              <span className="text-gray-400 line-through text-lg sm:text-xl sm:mb-1">35,000 – 60,000 NOK</span>
            </div>

            <p className="text-gray-500 mb-6 leading-relaxed text-sm sm:text-base">
              <strong>Reason for discount:</strong> Limited December availability and focus on fewer high-quality
              projects.
            </p>

            <div className="liquid-glass-badge inline-flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></span>
              <span className="text-xs sm:text-sm font-medium text-amber-700">
                Only 2 slots available. Once filled, pricing returns to normal.
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
                Who this is for
              </h2>
              <div className="space-y-4">
                {[
                  "Norwegian small businesses",
                  "Startups",
                  "Consultants and service providers",
                  "Brands who want to look serious and modern online",
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
                Who this is not for
              </h2>
              <div className="space-y-4">
                {["Quick fake websites", "Unlimited revisions", "Rushed builds"].map((item, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">No calls. No pressure.</h2>
          <p className="text-xl text-gray-400 mb-10">Just a conversation.</p>

          <a
            href={messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Request Website Development Offer
          </a>
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
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2025 Devnix. Built for Norway.</p>
        </div>
      </footer>
    </div>
  )
}

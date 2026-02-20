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

  const messengerLink = `https://m.me/61585271784479?text=${encodeURIComponent("Hi Devnix, I'm interested in: Landing Page Development. 50% OFF.")}`

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
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">
              4 Slots Left for December
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Landing Page Development for Businesses Ready to Convert Visitors Into Clients
          </h1>

          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Custom high-performance landing page built with React and Next.js. Fast, conversion-focused, GDPR-ready.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>1-2 week delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Target className="w-4 h-4" />
              <span>Conversion optimized</span>
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
            Every visitor counts. Every click matters.
          </h2>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Your current page might be losing potential clients before they even read your message. Slow load times,
              unclear messaging, or a confusing layout can turn interested visitors away in seconds.
            </p>
            <p className="text-lg leading-relaxed">
              Imagine a single-page site that guides your visitors smoothly, explains your value clearly, and leads them
              to action without confusion. That's what this offer delivers.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Why this matters for your business</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Turns Visitors Into Leads Fast</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A focused single page removes distractions and guides every visitor toward one clear action.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Communicates Your Offer Clearly</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your value proposition is presented in seconds, not buried in navigation menus or long pages.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Works Perfectly Everywhere</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Desktop, tablet, and mobile. Your landing page looks professional and performs flawlessly on any device.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Builds Trust Instantly</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A fast, professional landing page signals credibility. First impressions happen in milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What you get</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            Everything needed for a high-converting landing page that represents your business professionally.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Custom high-converting landing page built with React/Next.js",
              "Mobile-first responsive design",
              "Clear CTA placement for maximum conversions",
              "SEO-friendly structure",
              "Fast loading (under 3 seconds)",
              "GDPR-compliant forms",
              "14 days post-launch support",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Process & Timeline</h2>
          <p className="text-gray-500 mb-12">Transparent delivery with clear milestones.</p>

          <div className="space-y-6">
            <div className="liquid-glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Day 1-2: Alignment</h3>
                  <p className="text-gray-500 text-sm">
                    We align on your goal, content structure, and design direction. You share your vision, we map the
                    path.
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
                  <h3 className="font-semibold mb-1">Day 3-7: Development</h3>
                  <p className="text-gray-500 text-sm">
                    Development and design iteration. We build, refine, and keep you updated throughout.
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
                  <h3 className="font-semibold mb-1">Day 8-10: Launch</h3>
                  <p className="text-gray-500 text-sm">
                    Testing, final tweaks, and launch. Your landing page goes live, ready to convert.
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Costs & Typical Timelines</h2>
          <p className="text-gray-400 uppercase text-xs tracking-wider font-semibold mb-8">
            Norwegian Market Reference
          </p>

          {/* Market Comparison */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>Normal price range:</strong> NOK 15,000 – NOK 30,000
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Typical timeline:</strong> 2-4 weeks with agencies
            </p>
            <p className="text-gray-500 text-sm">
              Most Norwegian agencies charge premium rates for landing pages, often bundling unnecessary services.
            </p>
          </div>

          {/* Current Offer */}
          <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 border-2 border-gray-900">
            <div className="inline-flex items-center gap-2 mb-6 bg-emerald-50 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-emerald-700">December Offer</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl font-bold">NOK 7,500</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">NOK 15,000</span>
            </div>

            <p className="text-gray-600 mb-6">
              <strong>Timeline:</strong> 1-2 weeks for completion
            </p>

            <p className="text-gray-500 text-sm mb-6">
              <strong>Why the discount?</strong> Limited December availability and focus on fewer high-quality projects.
            </p>

            <div className="flex items-start sm:items-center gap-2 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0 mt-1.5 sm:mt-0"></span>
              <span>Only 4 slots available. Once filled, pricing returns to standard.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Who this is for</h2>
              <ul className="space-y-4">
                {[
                  "Small businesses wanting leads quickly",
                  "Startups launching a product or service",
                  "Consultants or agencies needing a sales page",
                  "Businesses running ad campaigns needing a conversion destination",
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
              <h2 className="text-2xl font-bold tracking-tight mb-6">Who this is not for</h2>
              <ul className="space-y-4">
                {[
                  "Anyone expecting multiple pages or complex web apps",
                  "Those who want instant delivery without proper planning",
                  "Projects requiring unlimited revisions",
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
            <span className="text-sm font-semibold text-amber-300">Limited Availability</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">4 slots left in December</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Once gone, the price goes back to standard. Don't wait and miss this opportunity.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            No calls. No pressure.
            <br />
            Just a conversation.
          </h2>

          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Send a message on Messenger. We'll discuss your landing page needs and see if this offer is right for you.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            {t('requestLandingPageOffer')}
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-gray-400 text-sm mt-6">Response time: Under 2 hours</p>
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

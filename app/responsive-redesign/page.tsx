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
            Responsive Redesign for Businesses
            <span className="text-gray-300"> Ready to Look Modern</span>
          </h1>

          <p className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
            Your website is the face of your business. If it looks outdated or doesn't work well on mobile, visitors
            leave before they even see your value.
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
            What if your site looked perfect everywhere?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Imagine your old site transformed into a fast, modern, and responsive experience. Visitors on phones,
              tablets, or desktop see perfection every time.
            </p>
            <p>
              No more pinching to zoom. No more sideways scrolling. No more embarrassment when a client visits your site
              on their phone. Just a clean, professional experience that represents your business the way it deserves.
            </p>
            <p>
              Your competitors already look modern. Your clients expect modern. It's time your website caught up—without
              starting from scratch.
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Why this matters for your business</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Professional on Any Device",
                description:
                  "Your site adapts beautifully to phones, tablets, and desktops. First impressions happen everywhere.",
              },
              {
                title: "Increased User Engagement",
                description: "When visitors can navigate easily, they stay longer. Longer stays mean more conversions.",
              },
              {
                title: "Reduced Bounce Rates",
                description:
                  "Mobile users leave broken sites in seconds. A responsive redesign keeps them reading, scrolling, acting.",
              },
              {
                title: "Modern Without Rebuilding",
                description:
                  "We update your design while keeping your brand identity intact. Evolution, not revolution.",
              },
              {
                title: "Works Across All Browsers",
                description: "Chrome, Safari, Firefox, Edge—your site performs consistently for every visitor.",
              },
              {
                title: "Better Search Rankings",
                description: "Google prioritizes mobile-friendly sites. A responsive redesign helps you get found.",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">What you get</h2>

          <div className="grid gap-4">
            {[
              "Full responsive redesign with React/Next.js",
              "Mobile-first layout and tablet optimization",
              "Modern design update while keeping your brand identity",
              "Performance and speed improvements",
              "SEO-friendly structure",
              "14 days post-launch support",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Process & Timeline</h2>
          <p className="text-gray-500 mb-12">Transparent steps. Clear communication. No surprises.</p>

          <div className="space-y-6">
            {[
              {
                phase: "Day 1–2",
                title: "Evaluation & Planning",
                description:
                  "We review your current site, identify what works, and plan the responsive redesign. Content and assets gathered.",
              },
              {
                phase: "Day 3–7",
                title: "Redesign & Development",
                description:
                  "Your site gets transformed. Mobile-first approach, modern aesthetics, your brand preserved. You see progress throughout.",
              },
              {
                phase: "Day 8–10",
                title: "Testing & Launch",
                description:
                  "Rigorous testing across all devices and browsers. Final tweaks based on your feedback. Then we go live.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="liquid-glass-card px-4 py-2 rounded-lg flex-shrink-0">
                  <span className="text-sm font-semibold text-gray-700">{step.phase}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 text-gray-500">
            <Clock className="w-5 h-5" />
            <span>Total timeline: 1–2 weeks</span>
          </div>
        </div>
      </section>

      {/* Pricing Psychology Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Costs & Typical Timelines
            <span className="text-gray-400 block text-2xl mt-2">Norwegian Market</span>
          </h2>

          {/* Market Comparison */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">What others typically charge:</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>Basic responsive updates</span>
                <span className="font-medium">NOK 8,000 – 15,000</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>Full responsive redesign</span>
                <span className="font-medium">NOK 12,000 – 25,000</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-1">
                <span>Complete site modernization</span>
                <span className="font-medium">NOK 25,000 – 50,000+</span>
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

            <h3 className="text-xl sm:text-2xl font-bold mb-2">Responsive Redesign Package</h3>
            <p className="text-gray-500 mb-6">Transform your site for all devices.</p>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-4xl font-bold">NOK 6,000</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">NOK 12,000</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              <strong>Why the discount?</strong> Limited December availability. We're focusing on fewer projects to
              deliver exceptional quality.
            </p>

            <div className="flex items-start sm:items-center gap-2 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0 mt-1.5 sm:mt-0"></span>
              <span>3 slots available. Once filled, pricing returns to normal.</span>
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
                <h2 className="text-2xl font-bold">Who this is for</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Businesses with outdated sites needing modernization",
                  "Companies wanting better mobile experiences for clients",
                  "Anyone who wants a professional, clean look without full redevelopment",
                  "Brands ready to stop losing mobile visitors",
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
                <h2 className="text-2xl font-bold text-gray-400">Who this is not for</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Those wanting a brand new complex website",
                  "Anyone expecting unlimited redesign revisions",
                  "Companies rushing projects in less than a week",
                  "Projects requiring complete rebranding",
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
            <span className="text-sm font-semibold text-amber-700">Limited Availability</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">3 slots left in December</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Once gone, the price goes back to normal. This is a rare opportunity to modernize at half price.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to look modern?</h2>

          <p className="text-gray-500 text-lg mb-10">No calls. No pressure. Just a conversation.</p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] text-lg"
          >
            {t('requestRedesignOffer')}
          </a>

          <p className="text-gray-400 text-sm mt-6">
            Click to start a conversation on Messenger. We'll discuss your current site and how we can help.
          </p>
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

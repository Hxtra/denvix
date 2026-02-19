"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Clock, Shield, Zap, Wrench, RefreshCw, AlertCircle } from "lucide-react"

export default function WebsiteMaintenancePage() {
  const [isLoaded, setIsLoaded] = useState(false)

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
            Back to Home
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
              5 Maintenance Slots Available
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Your Website is Running.
            <br />
            <span className="text-gray-400">Let's Keep It That Way.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
            Expert troubleshooting, performance optimization, and ongoing care for your existing website. So you can
            stop worrying about the technical side.
          </p>

          {/* Timeframe */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Immediate availability</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Ongoing protection</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            Request Maintenance Support
          </a>
        </div>
      </section>

      {/* The Weight You Carry Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            You Built Something Valuable.
            <br />
            <span className="text-gray-400">Now It Needs Care.</span>
          </h2>

          <div className="prose prose-lg text-gray-600 max-w-none mb-12">
            <p className="leading-relaxed">
              Your website was an investment. Time, money, trust. It represents your business to every visitor, every
              potential client, every person searching for what you offer.
            </p>
            <p className="leading-relaxed">
              But websites don't stay perfect on their own. Small issues accumulate. A plugin breaks. Loading slows
              down. A form stops working. You notice something is off, but you're not sure what.
            </p>
            <p className="leading-relaxed font-medium text-gray-800">
              That quiet concern in the back of your mind? We can remove it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">What We Handle</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            The Technical Weight,
            <br />
            Off Your Shoulders.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Bug Fixes & Troubleshooting</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Broken features, display issues, error messages. We diagnose the problem and fix it properly—not with
                temporary patches.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Slow websites lose visitors. We optimize load times, reduce bloat, and ensure your site responds quickly
                on every device.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Security Updates</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Outdated software creates vulnerabilities. We keep your site's core, plugins, and dependencies current
                and secure.
              </p>
            </div>

            <div className="liquid-glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Content & Feature Updates</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Need to change text, update images, or add a small feature? We handle the technical work so you can
                focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            What Changes When Your
            <br />
            Website is Handled.
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">You stop checking nervously.</h4>
                <p className="text-gray-500">
                  No more wondering if that contact form is still working, or if the mobile version looks right.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Issues get fixed before they become problems.</h4>
                <p className="text-gray-500">
                  Small bugs caught early. Security vulnerabilities patched. Performance maintained consistently.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">You have someone to call.</h4>
                <p className="text-gray-500">
                  When something breaks or you need a quick update, you don't have to search for help. We're already
                  here.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Your website stays an asset, not a liability.</h4>
                <p className="text-gray-500">
                  A well-maintained site continues to work for you—building trust, capturing leads, representing your
                  brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Typical Costs for Website
            <br />
            Maintenance in Norway.
          </h2>

          {/* Market Comparison */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">What Agencies Typically Charge</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>Basic maintenance packages</span>
                <span className="font-medium">3,000 - 8,000 NOK/month</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 gap-1">
                <span>One-time troubleshooting sessions</span>
                <span className="font-medium">2,000 - 5,000 NOK</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-1">
                <span>Performance optimization projects</span>
                <span className="font-medium">8,000 - 15,000 NOK</span>
              </div>
            </div>
          </div>

          {/* Our Offer */}
          <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 border-2 border-gray-900">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="liquid-glass-flash-badge px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                50% OFF
              </span>
              <span className="text-sm text-gray-500">Limited availability</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">Website Maintenance Package</h3>
            <p className="text-gray-500 mb-6">Complete care for your existing website.</p>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-4xl font-bold">2,500 NOK</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">5,000 NOK</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>Full site audit and diagnosis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>Bug fixes and troubleshooting</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>Performance optimization</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>Security updates</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-4 h-4 text-gray-900 flex-shrink-0" />
                <span>14 days post-service support</span>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <span className="font-medium">5 slots available.</span> This rate is offered while we have capacity to
                  take on maintenance clients. Once filled, pricing returns to standard rates.
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
              <h3 className="text-xl font-bold mb-6 text-gray-900">This Service Is For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Business owners who need their website working reliably</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Sites experiencing bugs, slowness, or technical issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Anyone tired of worrying about their website's technical health</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Those who want a trusted partner for ongoing support</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-400">This Service Is Not For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>Complete website rebuilds (see our development service)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>Unlimited revisions or scope creep</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>Emergency same-day fixes (we work thoughtfully)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                  <span>Hosting or domain management</span>
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
            No Pressure. No Calls.
            <br />
            <span className="text-gray-400">Just a Conversation.</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Tell us what's going on with your website. We'll let you know if we can help, and what it would take. That's
            it.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            Request Maintenance Support
          </a>

          <p className="text-sm text-gray-400 mt-6">Response time: Under 2 hours during business hours.</p>
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

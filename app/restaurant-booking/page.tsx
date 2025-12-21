"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, ExternalLink, ArrowRight, MessageCircle } from "lucide-react"

// Array of image file names in the public/restaurant-booking directory
const images = [
  "original-0ab35f3a299951f4510ac5b6479f7ad0.png",
  "original-9bd035127e6e93c3c4254af7a92c3d5d.png",
  "original-2b8d8befdd85dd49575776d66992f8ff.png",
  "original-cb68b26bd9c79cb0f47572b262b303ba.png",
  "original-4141fbe08a367d555c3cc66d614554b8.png",
  "original-bf0773a103946b2712c91655c91e5f17.png",
  "original-fcaf63a46ff72ff3deff0077131a0399.png",
  "original-511ca9996927a74bcf5d34602ef9a324.png",
  "original-a7d7321db911035ae34077fe79b2e271.png",
  "original-2970c026e1e653dd0ff43f8572209dd0.png",
  "original-494ac99332876307332499ec74162e0e.png",
  "original-cfcb8d80cc982823a4b2935848494532.png",
  "original-6c640d4fdcccd48be024284644c5c946.png",
]

const contentSections = [
  {
    title: "Project Overview",
    description:
      "A high-conversion, psychologically-driven booking platform for a high-end dining group, built with Next.js and Tailwind CSS.",
    details: [
      { label: "Client", value: "High-end Dining Group" },
      { label: "Goal", value: "Maximize online reservations" },
      { label: "Technology", value: "Next.js, React, TypeScript, Tailwind CSS" },
      { label: "Focus", value: "Behavioral Economics & UX" },
    ],
    imageIndex: 0, // original-0ab35f3a299951f4510ac5b6479f7ad0.png
  },
  {
    title: "Scarcity and Urgency (Loss Aversion)",
    description:
      "We implemented real-time scarcity indicators like 'Only 2 tables left' to trigger loss aversion and compel immediate booking.",
    imageIndex: 1, // original-9bd035127e6e93c3c4254af7a92c3d5d.png
  },
  {
    title: "Social Proof (Conformity)",
    description:
      "Prominent display of genuine customer ratings and real-time activity (e.g., 'Just booked by Sarah') to build trust and validate the user's choice.",
    imageIndex: 2, // original-2b8d8befdd85dd49575776d66992f8ff.png
  },
  {
    title: "Cognitive Fluency (Ease of Use)",
    description:
      "A clean, three-step booking flow (Date/Time, Table/Experience, Confirm) minimizes cognitive load, making the process feel effortless and trustworthy.",
    imageIndex: 3, // original-cb68b26bd9c79cb0f47572b262b303ba.png
  },
  {
    title: "Visual Hierarchy and Desire (Attention Economy)",
    description:
      "High-contrast CTAs and full-bleed, high-resolution photography are used to trigger emotional desire and ensure the 'Book Now' button is the most dominant element.",
    imageIndex: 4, // original-4141fbe08a367d555c3cc66d614554b8.png
  },
  {
    title: "Mobile-First Responsiveness",
    description:
      "A flawless experience on any device, recognizing that the majority of restaurant bookings are initiated on mobile phones.",
    imageIndex: 5, // original-bf0773a103946b2712c91655c91e5f17.png
  },
  {
    title: "Technical Architecture",
    description:
      "Built with Next.js for superior performance (SSR) and seamless, secure integration with the client's reservation management API.",
    imageIndex: 6, // original-fcaf63a46ff72ff3deff0077131a0399.png
  },
]

export default function RestaurantBooking() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Back to Portfolio */}
      <Link
        href="/#work"
        className="fixed top-4 left-4 z-[60] bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Link>

      {/* Hero Section - Project Title */}
      <section className="pt-32 md:pt-40 pb-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">Case Study</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            Restaurant Booking Platform
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl">
            Designing for Desire: A high-conversion platform engineered using behavioral economics to maximize
            reservations and revenue for a high-end dining group.
          </p>
        </div>
      </section>

      {/* Project Details and First Image */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Project Snapshot</h2>
            <div className="space-y-3">
              {contentSections[0].details.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 liquid-glass-button inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-[1.02]"
            >
              Start Your Conversion Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`/restaurant-booking/${images[contentSections[0].imageIndex]}`}
                alt={contentSections[0].title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - Psychology Focus */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {contentSections.slice(1).map((section, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{section.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  View Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Image */}
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={`/restaurant-booking/${images[section.imageIndex]}`}
                    alt={section.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA - Reusing the main page's contact section for consistency */}
      <section id="contact" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">Ready to Build</h2>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">Your Next Success?</h2>

          <p className="text-gray-400 mb-10 max-w-lg">
            Don't lose the opportunity. We combine cutting-edge development with conversion psychology to deliver
            measurable impact.
          </p>

          {/* Facebook Messenger */}
          <div className="flex flex-col items-start gap-4">
            <a
              href="https://m.me/61585271784479?source=qr_link_share"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-contact-link inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full transition-all hover:scale-[1.02] w-auto"
              style={{ minWidth: "300px" }}
            >
              <span className="text-white text-sm font-medium">Message us on Messenger</span>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Simple placeholder for case study page */}
      <footer className="py-8 px-6 bg-[#111111] border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm text-center">© 2025 Devnix. Built for Norway.</p>
        </div>
      </footer>
    </div>
  )
}

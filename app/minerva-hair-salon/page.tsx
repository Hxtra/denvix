"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  ShoppingCart,
  Plus,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  MessageCircle,
} from "lucide-react"

export default function MinervaHairSalon() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 0, 1)) // January 2024
  const [selectedDate, setSelectedDate] = useState(26)

  useEffect(() => {
    setIsLoaded(true)
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      title: "Haircuts",
      image: "/woman-haircut-salon-professional.jpg",
    },
    {
      title: "Hairstyles",
      image: "/woman-elegant-hairstyle-brunette.jpg",
    },
    {
      title: "Coloring",
      image: "/woman-hair-coloring-red-highlights.jpg",
    },
  ]

  const products = [
    {
      name: "Volumise Curls 10",
      price: 95,
      image: "/hair-volumizing-oil-product-bottle.jpg",
    },
    {
      name: "Hot Air Comb",
      price: 235,
      image: "/hot-air-brush-hair-styling-tool-pink.jpg",
    },
    {
      name: "Absolut Repair Loreal",
      price: 48,
      image: "/loreal-hair-repair-treatment-bottle.jpg",
    },
    {
      name: "Volume Conditioner",
      price: 48,
      image: "/hair-conditioner-bottle-professional.jpg",
    },
  ]

  const team = [
    {
      name: "Olivia Smith",
      role: "Hairdresser",
      image: "/woman-hairdresser-professional-portrait-blonde-sci.jpg",
    },
    {
      name: "Amelia Brown",
      role: "Hairdresser",
      image: "/woman-hairdresser-stylist-portrait-brunette.jpg",
    },
    {
      name: "Emily Walker",
      role: "Senior Stylist",
      image: "/woman-senior-hair-stylist-portrait-elegant.jpg",
    },
  ]

  const whyChooseUs = [
    {
      icon: "✨",
      title: "Cutting-Edge Styles",
      description:
        "Our team of highly skilled and experienced stylists is dedicated to staying on the cutting edge of industry trends. Trust us to transform your vision into a stunning reality.",
    },
    {
      icon: "💇",
      title: "Personalized Consultations",
      description:
        "Your unique style is our priority. Enjoy personalized consultations with our stylists, ensuring a haircut that complements your features, lifestyle, and fashion preferences.",
    },
    {
      icon: "🌟",
      title: "Trendsetting Styles",
      description:
        "We're not just following trends; we're setting them. Step into the latest fashion with our trendsetting styles that keep you ahead of the curve.",
    },
    {
      icon: "💎",
      title: "Premium Products",
      description:
        "We believe in using only the best. Our premium hair care and styling products ensure not only a flawless finish but also the long-term health of your hair.",
    },
  ]

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return firstDay === 0 ? 6 : firstDay - 1 // Convert to Monday start
  }

  const monthNames = [
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

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`h-8 w-8 rounded-full text-sm flex items-center justify-center transition-all ${
            isSelected ? "bg-[#8B4513] text-white" : "text-gray-700 hover:bg-[#D2B48C]/30"
          }`}
        >
          {day}
        </button>,
      )
    }

    return days
  }

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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#8B4513] transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-500 hover:text-[#8B4513] transition-colors text-sm">
              About Us
            </a>
            <a href="#team" className="text-gray-500 hover:text-[#8B4513] transition-colors text-sm">
              Our team
            </a>
            <a href="#" className="text-gray-500 hover:text-[#8B4513] transition-colors text-sm">
              Blog
            </a>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-2xl tracking-[0.2em] text-gray-900">MINERVA</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
            <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="pt-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-tight mb-6">
                Get Hair Style
                <br />
                You Deserve
              </h1>

              <button className="bg-[#B22222] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#8B0000] transition-colors mb-8">
                Book appointment
              </button>

              <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-12">
                Discover a world of sophistication and personalized beauty at MINERVA. Our salon is more than just a
                place for haircuts; it's a haven where your unique style takes center stage.
              </p>

              {/* New Arrivals Banner */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#8B4513] text-white p-4 rounded-xl">
                  <p className="text-xs font-medium mb-1">New Arrivals</p>
                  <p className="text-xs opacity-80">+5 products</p>
                  <div className="flex items-center justify-center mt-2">
                    <img src="/hair-dryer-tool-red.jpg" alt="Hair dryer" className="w-12 h-12 object-contain" />
                  </div>
                  <button className="mt-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </button>
                </div>

                <div className="bg-[#D2691E] text-white p-4 rounded-xl">
                  <p className="text-lg font-bold">Only Today</p>
                  <p className="text-3xl font-bold">50% OFF</p>
                  <p className="text-xs opacity-80">for hair styling</p>
                  <button className="mt-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <img
                src="/woman-beautiful-flowing-red-copper-hair-side-profi.jpg"
                alt="Beautiful woman with flowing red hair"
                className="w-full h-auto object-cover rounded-3xl"
              />

              {/* Join Our Team Badge */}
              <div className="absolute bottom-8 right-0 flex items-center gap-3">
                <span className="text-sm text-gray-600">Join our team</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img
                        src={`/woman-stylist-portrait-.jpg?height=40&width=40&query=woman stylist portrait ${i}`}
                        alt={`Team member ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Section Title */}
            <div>
              <h2 className="text-4xl font-serif font-normal text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Beyond haircuts, discover a comprehensive range of services, from coloring to extensions.
              </p>
            </div>

            {/* Service Cards */}
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute top-3 left-3 bg-[#8B4513] text-white px-4 py-1 rounded-lg text-sm font-medium z-10">
                  {service.title}
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Booking Info */}
            <div>
              <h2 className="text-4xl font-serif font-normal text-gray-900 mb-4">Booking</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Ready for a transformative experience? Book your appointment now at skillshiink and let us craft a style
                that defines you.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/modern-hair-salon-interior-elegant.jpg"
                  alt="Salon interior"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <div className="flex gap-1">
                  <button
                    onClick={() =>
                      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
                    }
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
                    }
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Day names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 font-medium">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

              {/* Working Hours */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Working Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Working Days</span>
                    <span className="text-gray-900">9AM - 9PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900">10AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#D2B48C] rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">We will call you</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900"
                  />
                </div>
                <button className="mt-4 border border-gray-900 text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
                  Book appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-4xl font-serif font-normal text-gray-900 mb-2">Our products</h2>
              <p className="text-gray-500 text-sm max-w-md">
                Experience the difference with top-tier products that enhance both the aesthetics and health of your
                hair.
              </p>
            </div>
            <button className="bg-[#8B4513] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#6B3410] transition-colors">
              Open Store
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative bg-[#F5E6D3] rounded-2xl p-4 mb-3">
                  <button className="absolute top-3 right-3 w-8 h-8 bg-[#8B4513] rounded-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 object-contain mx-auto"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-serif font-normal mb-4">Why Choose Us</h2>
              <p className="text-gray-400 text-sm mb-12">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              {/* Stats */}
              <div className="flex gap-12">
                <div>
                  <p className="text-5xl font-bold text-white">30k</p>
                  <p className="text-gray-400 text-sm">Satisfied clients</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-white">15</p>
                  <p className="text-gray-400 text-sm">Salons around the city</p>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-[#2a2a2a] rounded-2xl p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2 text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-4xl font-serif font-normal mb-2">Our Team</h2>
              <p className="text-gray-400 text-sm">Entrust your locks to our team of skilled and creative stylists.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="border border-gray-600 text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-gray-900 transition-colors">
                Join the team
              </button>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="rounded-2xl overflow-hidden mb-4 bg-[#2a2a2a]">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-semibold text-white">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Map */}
            <div className="md:col-span-1">
              <div className="rounded-2xl overflow-hidden h-48 bg-gray-200">
                <img
                  src="/new-york-city-map-streets-minimal.jpg"
                  alt="Location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>(212) 456-7890</p>
                <p>info@minerva.com</p>
                <p>care@minerva.com</p>
              </div>
              <h4 className="font-semibold text-gray-900 mt-6 mb-2">Visit Us</h4>
              <div className="text-sm text-gray-600">
                <p>Visit Us</p>
                <p>200 W 58TH STNEW YORK, NY</p>
                <p>10024-5360 USA</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://wa.me/2348154386607?text=Hi%20MINERVA%2C%20I%27d%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-emerald-600"
                  title="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://m.me/61585271784479?source=qr_link_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                  title="Messenger"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585271784479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Logo and CTA */}
            <div className="md:col-span-2 text-right">
              <span className="font-serif text-3xl tracking-[0.2em] text-gray-900">MINERVA</span>
              <div className="mt-4">
                <button className="border border-gray-900 text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
                  Book Your Consultation
                </button>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-600 mb-2">Subscribe to the newsletter</p>
                <div className="flex items-center justify-end gap-2">
                  <input
                    type="email"
                    placeholder="Email ..."
                    className="border border-gray-300 rounded-full px-4 py-2 text-sm w-48 focus:outline-none focus:border-gray-900"
                  />
                  <button className="w-10 h-10 bg-[#B22222] rounded-full flex items-center justify-center text-white hover:bg-[#8B0000] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Sitemap
              </a>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
            </div>
            <p className="text-sm text-gray-500">Copyright © MINERVA. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

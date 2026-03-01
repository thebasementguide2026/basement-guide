'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [reviewsOpen, setReviewsOpen] = useState(false)

  const reviewsLinks = [
    { href: '/articles/crawl-space-encapsulation-guide', label: 'Crawl Space Encapsulation Guide' },
    { href: '/articles/best-water-leak-detectors', label: 'Best Water Leak Detectors' },
    { href: '/articles/best-vapor-barriers', label: 'Best Vapor Barriers' },
    { href: '/articles/best-basement-dehumidifiers', label: 'Best Basement Dehumidifiers' },
    { href: '/articles/best-sump-pumps-2026', label: 'Best Sump Pumps 2026' },
    { href: '/articles/best-basement-air-purifiers', label: 'Best Air Purifiers for Basements' },
    { href: '/articles/basement-humidity-guide', label: 'Basement Humidity Guide' },
    { href: '/articles/basement-permits-guide', label: 'Basement Permits Guide' },
    { href: '/articles/drylok-vs-radonseal', label: 'Drylok vs RadonSeal' },
    { href: '/articles/french-drain-vs-sump-pump', label: 'French Drain vs Sump Pump' },
    { href: '/articles/submersible-vs-pedestal-sump-pump', label: 'Submersible vs Pedestal Sump Pump' },
  ]

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Logo Centered with Search & CTA */}
      <div className="border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-28">
            {/* Left Spacer for Desktop */}
            <div className="hidden md:flex items-center w-40">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-400 hover:text-brand-teal transition-colors p-2"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Center Logo */}
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/TheBasement%20Guide%20Logo.png"
                alt="The Basement Guide"
                width={600}
                height={150}
                className="h-24 w-auto"
                priority
              />
            </Link>

            {/* Right - CTA & Mobile Menu */}
            <div className="flex items-center gap-2 w-40 justify-end">
              <Link href="/#get-quotes" className="hidden md:inline-block bg-brand-teal hover:bg-brand-navy text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
                Get Free Quotes
              </Link>
              {/* Mobile Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden text-gray-400 hover:text-brand-teal transition-colors p-2"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-gray-600 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Centered */}
      <nav className="hidden md:block border-b border-gray-100 bg-white">
        <div className="container-custom">
          <div className="flex justify-center items-center gap-8 h-12">
            <Link href="/guides" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Waterproofing</Link>
            <Link href="/cost-guides" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Cost Guides</Link>
            <div
              className="relative"
              onMouseEnter={() => setReviewsOpen(true)}
              onMouseLeave={() => setReviewsOpen(false)}
            >
              <Link href="/reviews" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider flex items-center gap-1">
                Reviews & Buying Guides
                <svg className={`w-3.5 h-3.5 transition-transform ${reviewsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {reviewsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {reviewsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-teal hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/#health-safety" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Health & Safety</Link>
            <Link href="/#finishing" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Finishing & Renovation</Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">About</Link>
          </div>
        </div>
      </nav>

      {/* Desktop Search Dropdown */}
      {searchOpen && (
        <div className="hidden md:block border-b border-gray-100 bg-white py-3">
          <div className="container-custom max-w-xl mx-auto">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        </div>
      )}
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-md">
          <div className="container-custom py-3">
            <SearchBar onClose={() => setMenuOpen(false)} />
          </div>
          <nav className="container-custom flex flex-col py-2 space-y-1">
            <Link onClick={() => setMenuOpen(false)} href="/guides" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Waterproofing</Link>
            <Link onClick={() => setMenuOpen(false)} href="/cost-guides" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Cost Guides</Link>
            <Link onClick={() => setMenuOpen(false)} href="/reviews" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Reviews & Buying Guides</Link>
            <div className="pl-4 flex flex-col space-y-1">
              {reviewsLinks.map((link) => (
                <Link
                  key={link.href}
                  onClick={() => setMenuOpen(false)}
                  href={link.href}
                  className="text-gray-500 hover:text-brand-teal py-1.5 text-xs font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link onClick={() => setMenuOpen(false)} href="/#health-safety" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Health & Safety</Link>
            <Link onClick={() => setMenuOpen(false)} href="/#finishing" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Finishing & Renovation</Link>
            <Link onClick={() => setMenuOpen(false)} href="/about" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">About</Link>
            <Link onClick={() => setMenuOpen(false)} href="/#get-quotes" className="bg-brand-teal hover:bg-brand-navy text-white px-4 py-2.5 rounded-lg text-sm font-bold text-center mt-2 transition-colors">Get Free Quotes</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

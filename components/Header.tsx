'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Logo Centered with Search & CTA */}
      <div className="border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Left Spacer for Desktop */}
            <div className="hidden md:flex items-center w-40">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-400 hover:text-brand-teal transition-colors p-2"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Right - CTA & Mobile Menu */}
            <div className="flex items-center gap-3 w-40 justify-end">
              <Link
                href="/get-quotes"
                className="hidden md:inline-flex items-center bg-brand-teal hover:bg-brand-navy text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                Get Free Quotes
              </Link>

              {/* Mobile Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden text-gray-400 hover:text-brand-teal transition-colors p-2"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-gray-500 hover:text-brand-teal p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Centered */}
      <nav className="hidden md:block border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-10 h-12">
            <Link href="/guides" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Guides</Link>
            <Link href="/reviews" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Reviews</Link>
            <Link href="/cost-guides" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">Cost Guides</Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-semibold uppercase tracking-wider">About</Link>
          </div>
        </div>
      </nav>

      {/* Desktop Search Dropdown */}
      {searchOpen && (
        <div className="border-b border-gray-200 bg-gray-50 py-4">
          <div className="container-custom max-w-2xl">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white">
          <div className="container-custom py-4">
            <SearchBar onClose={() => setMenuOpen(false)} />
            <nav className="flex flex-col gap-1 mt-4">
              <Link onClick={() => setMenuOpen(false)} href="/guides" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Guides</Link>
              <Link onClick={() => setMenuOpen(false)} href="/reviews" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Reviews</Link>
              <Link onClick={() => setMenuOpen(false)} href="/cost-guides" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">Cost Guides</Link>
              <Link onClick={() => setMenuOpen(false)} href="/about" className="text-gray-600 hover:text-brand-teal py-2.5 text-sm font-semibold uppercase tracking-wider">About</Link>
              <Link onClick={() => setMenuOpen(false)} href="/get-quotes" className="bg-brand-teal hover:bg-brand-navy text-white px-4 py-2.5 rounded-lg text-sm font-bold text-center mt-2 transition-colors">Get Free Quotes</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

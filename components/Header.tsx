'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Water drop icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3C14 3 5 13 5 18.5C5 23.2 9.1 27 14 27C18.9 27 23 23.2 23 18.5C23 13 14 3 14 3Z"
                fill="#0D9488"
              />
              <path
                d="M14 3C14 3 5 13 5 18.5C5 23.2 9.1 27 14 27C18.9 27 23 23.2 23 18.5C23 13 14 3 14 3Z"
                fill="url(#dropGradient)"
              />
              <ellipse cx="11" cy="18" rx="2" ry="3" fill="white" fillOpacity="0.3" transform="rotate(-20 11 18)" />
              <defs>
                <linearGradient id="dropGradient" x1="14" y1="3" x2="14" y2="27" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#0F766E" />
                </linearGradient>
              </defs>
            </svg>

            {/* Wordmark */}
            <span className="text-xl font-bold tracking-tight">
              <span className="text-slate-800">The Basement </span>
              <span className="text-teal-600">Guide</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/guides" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              Guides
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              Reviews
            </Link>
            <Link href="/cost-guides" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              Cost Guides
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              About
            </Link>
            <Link
              href="/#get-quotes"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-sm"
            >
              Get Free Quotes
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col space-y-3">
            <Link href="/guides" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>Guides</Link>
            <Link href="/reviews" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>Reviews</Link>
            <Link href="/cost-guides" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>Cost Guides</Link>
            <Link href="/about" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/#get-quotes" className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-center mx-2" onClick={() => setMenuOpen(false)}>Get Free Quotes</Link>
          </div>
        )}
      </div>
    </header>
  )
}

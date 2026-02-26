'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/TheBasement%20Guide%20Logo.png"
              alt="The Basement Guide"
              width={400}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/guides" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-medium">Guides</Link>
            <Link href="/reviews" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-medium">Reviews</Link>
            <Link href="/cost-guides" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-medium">Cost Guides</Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-teal transition-colors text-sm font-medium">About</Link>

            {/* Search Toggle Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-500 hover:text-brand-teal transition-colors p-1"
              aria-label="Toggle search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <Link href="/get-quotes" className="bg-brand-teal hover:bg-brand-navy text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
              Get Free Quotes
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>

        </div>
      </div>

      {/* Desktop Search Dropdown */}
      {searchOpen && (
        <div className="hidden md:block pb-4">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
          <SearchBar onClose={() => setMenuOpen(false)} />
          <nav className="flex flex-col space-y-3 mt-4">
            <Link href="/guides" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-brand-teal py-2 text-sm font-medium">Guides</Link>
            <Link href="/reviews" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-brand-teal py-2 text-sm font-medium">Reviews</Link>
            <Link href="/cost-guides" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-brand-teal py-2 text-sm font-medium">Cost Guides</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-brand-teal py-2 text-sm font-medium">About</Link>
            <Link href="/get-quotes" onClick={() => setMenuOpen(false)} className="bg-brand-teal hover:bg-brand-navy text-white px-4 py-2.5 rounded-lg text-sm font-bold text-center mt-2 transition-colors">Get Free Quotes</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'

const navItems = [
  {
    label: 'Guides',
    href: '/guides',
    dropdown: [
      { label: 'Waterproofing', href: '/guides#waterproofing' },
      { label: 'Finishing Your Basement', href: '/guides#finishing' },
      { label: 'Sump Pumps & Drainage', href: '/guides#sump-pumps' },
      { label: 'Crawl Space', href: '/articles/crawl-space-encapsulation-guide' },
      { label: 'Health & Safety', href: '/guides#health-safety' },
      { label: 'Structural Issues', href: '/guides#structural' },
      { label: 'Real Estate & Insurance', href: '/guides#real-estate' },
      { label: 'Seasonal Maintenance', href: '/articles/spring-basement-checklist' },
      { label: 'Insulation', href: '/articles/basement-insulation-guide' },
      { label: 'Hiring a Contractor', href: '/articles/how-to-hire-basement-waterproofing-contractor' },
    ],
  },
  {
    label: 'Cost Guides',
    href: '/cost-guides',
    dropdown: null,
  },
  {
    label: 'Reviews',
    href: '/reviews',
    dropdown: [
      { label: 'Dehumidifiers', href: '/articles/best-basement-dehumidifiers' },
      { label: 'Sump Pumps', href: '/articles/best-sump-pumps-2026' },
      { label: 'Flooring', href: '/articles/best-basement-flooring' },
      { label: 'Paint & Sealers', href: '/articles/waterproof-basement-paint-sealers' },
      { label: 'Vapor Barriers', href: '/articles/best-vapor-barriers' },
      { label: 'Leak Detectors', href: '/articles/best-water-leak-detectors' },
      { label: 'Air Purifiers', href: '/articles/best-basement-air-purifiers' },
      { label: 'Backup Power', href: '/articles/backup-power-sump-pumps' },
    ],
  },
  {
    label: 'Problems',
    href: '/guides#problems',
    dropdown: [
      { label: 'Water in My Basement', href: '/articles/basement-emergency-water-plan' },
      { label: 'Musty Smell', href: '/articles/musty-basement-smell' },
      { label: 'Mold & Mildew', href: '/articles/how-to-prevent-basement-mold' },
      { label: 'Foundation Cracks', href: '/articles/types-of-foundation-cracks' },
      { label: 'Bowing Walls', href: '/articles/bowing-basement-walls' },
      { label: 'Efflorescence', href: '/articles/basement-efflorescence' },
      { label: 'Humidity Issues', href: '/articles/basement-humidity-guide' },
      { label: 'Why Basement Still Floods', href: '/articles/why-basement-floods-with-sump-pump' },
              { label: 'Drying Out After Flooding', href: '/articles/how-to-dry-out-basement-after-flooding' },
    ],
  },
  {
    label: 'Comparisons',
    href: '/guides#comparisons',
    dropdown: [
      { label: 'French Drain vs Sump Pump', href: '/articles/french-drain-vs-sump-pump' },
      { label: 'Drylok vs RadonSeal', href: '/articles/drylok-vs-radonseal' },
      { label: 'Battery vs Water Backup', href: '/articles/battery-vs-water-powered-sump-pumps' },
      { label: 'Submersible vs Pedestal', href: '/articles/submersible-vs-pedestal-sump-pump' },
      { label: 'Interior vs Exterior', href: '/articles/interior-vs-exterior-waterproofing' },
      { label: 'Basement vs Crawl Space', href: '/articles/basement-vs-crawl-space-vs-slab' },
      { label: 'Drop Ceiling vs Drywall', href: '/articles/drop-ceiling-vs-drywall' },
      { label: 'Epoxy vs Polyurethane', href: '/articles/epoxy-vs-polyurethane-floor-coating' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    dropdown: null,
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/TheBasement%20Guide%20Logo.png"
              alt="The Basement Guide"
              width={320}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeDropdown === item.label
                        ? 'text-brand-teal bg-teal-50'
                        : 'text-gray-700 hover:text-brand-teal hover:bg-gray-50'
                    }`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-teal hover:bg-gray-50 rounded-md transition-colors block"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-brand-teal transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Search + CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 text-gray-500 hover:text-brand-teal transition-colors p-2 rounded-lg hover:bg-gray-50"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden md:inline text-sm font-medium">Search</span>
            </button>

            <Link
              href="/#get-quotes"
              className="hidden md:inline-flex items-center bg-brand-teal hover:bg-brand-navy text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Free Quotes
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-brand-teal"
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

        {/* Search bar dropdown */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-100">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-custom py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:text-brand-teal uppercase tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1 mb-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-1.5 text-sm text-gray-500 hover:text-brand-teal"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/#get-quotes"
                className="block bg-brand-teal hover:bg-brand-navy text-white px-4 py-2.5 rounded-lg text-sm font-bold text-center transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Quotes
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

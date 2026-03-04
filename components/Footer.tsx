'use client'
import Link from 'next/link'
import { useState } from 'react'

const footerSections = [
  {
    title: 'GUIDES',
    links: [
      { label: 'Waterproofing', href: '/articles/complete-basement-waterproofing-guide' },
      { label: 'Finishing a Basement', href: '/articles/how-to-finish-a-basement' },
      { label: 'Sump Pump Guide', href: '/articles/sump-pump-buying-guide' },
      { label: 'Crawl Space', href: '/articles/crawl-space-encapsulation-guide' },
      { label: 'Health & Safety', href: '/guides#health-safety' },
      { label: 'Structural', href: '/guides#structural' },
      { label: 'Real Estate', href: '/guides#real-estate' },
    ],
  },
  {
    title: 'COST GUIDES',
    links: [
      { label: 'Finishing Cost', href: '/articles/basement-finishing-cost' },
      { label: 'Waterproofing Cost', href: '/articles/basement-waterproofing-cost' },
      { label: 'Sump Pump Cost', href: '/articles/sump-pump-cost' },
      { label: 'French Drain Cost', href: '/articles/french-drain-cost' },
      { label: 'Foundation Crack Cost', href: '/articles/foundation-crack-repair-cost' },
      { label: 'Egress Window Cost', href: '/articles/egress-window-cost' },
      { label: 'Mold Remediation Cost', href: '/articles/mold-remediation-cost' },
    ],
  },
  {
    title: 'REVIEWS',
    links: [
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
    title: 'COMPARISONS',
    links: [
      { label: 'French Drain vs Sump Pump', href: '/articles/french-drain-vs-sump-pump' },
      { label: 'Drylok vs RadonSeal', href: '/articles/drylok-vs-radonseal' },
      { label: 'Battery vs Water Backup', href: '/articles/battery-vs-water-powered-sump-pumps' },
      { label: 'Submersible vs Pedestal', href: '/articles/submersible-vs-pedestal-sump-pump' },
      { label: 'Interior vs Exterior', href: '/articles/interior-vs-exterior-waterproofing' },
      { label: 'Basement vs Crawl Space', href: '/articles/basement-vs-crawl-space-vs-slab' },
    ],
  },
  {
    title: 'PROBLEMS',
    links: [
      { label: 'Water in Basement', href: '/articles/basement-emergency-water-plan' },
      { label: 'Musty Smell', href: '/articles/musty-basement-smell' },
      { label: 'Mold Prevention', href: '/articles/how-to-prevent-basement-mold' },
      { label: 'Foundation Cracks', href: '/articles/types-of-foundation-cracks' },
      { label: 'Efflorescence', href: '/articles/basement-efflorescence' },
      { label: 'Humidity Guide', href: '/articles/basement-humidity-guide' },
    ],
  },
  {
    title: 'QUICK LINKS',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Start Here', href: '/start-here' },
      { label: 'Contact', href: '/contact' },
      { label: 'Spring Checklist', href: '/articles/spring-basement-checklist' },
      { label: 'Homebuyer Checklist', href: '/articles/homebuyers-basement-inspection-checklist' },
      { label: 'Methodology', href: '/methodology' },
    ],
  },
]

function FooterSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="w-full flex items-center justify-between md:cursor-default text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-0 md:mb-3">{title}</h4>
        <svg
          className={`w-4 h-4 text-gray-400 md:hidden transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul className={`space-y-2 mt-2 ${open ? 'block' : 'hidden'} md:block`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="container-custom py-12">
        {/* Top: Brand + description */}
        <div className="mb-10 max-w-sm">
          <h3 className="text-lg font-bold mb-2">The Basement Guide</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Independent resource for basement waterproofing, finishing, and maintenance advice.
            Written by homeowners for homeowners — no contractor sales pitches, just honest guides.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-gray-700 pt-10">
          {footerSections.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} The Basement Guide. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
          </div>
          <p className="text-gray-600 text-xs text-center">
            This site contains affiliate links. As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}

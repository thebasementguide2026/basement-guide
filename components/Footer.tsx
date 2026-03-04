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
      { label: 'Insulation Guide', href: '/articles/basement-insulation-guide' },
      { label: 'Smart Sump Pumps', href: '/articles/smart-sump-pumps-guide' },
      { label: 'Crystalline Waterproofing', href: '/articles/crystalline-waterproofing' },
      { label: 'Radon & Waterproofing', href: '/articles/radon-and-basement-waterproofing' },
      { label: 'Hiring a Contractor', href: '/articles/how-to-hire-basement-waterproofing-contractor' },
      { label: 'Pre-Finish Audit', href: '/articles/pre-finish-audit' },
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
      { label: 'Drop Ceiling vs Drywall', href: '/articles/drop-ceiling-vs-drywall' },
      { label: 'Epoxy vs Polyurethane', href: '/articles/epoxy-vs-polyurethane-floor-coating' },
      { label: 'DIY vs Hiring a Pro', href: '/articles/diy-vs-hiring-pro-basement-projects' },
      { label: 'Spray Foam vs Rigid Foam', href: '/articles/spray-foam-vs-rigid-foam-insulation' },
    ],
  },
  {
    title: 'PROBLEMS',
    links: [
      { label: 'Water in Basement', href: '/articles/basement-emergency-water-plan' },
      { label: 'Musty Smell', href: '/articles/musty-basement-smell' },
      { label: 'Mold Prevention', href: '/articles/how-to-prevent-basement-mold' },
      { label: 'Foundation Cracks', href: '/articles/types-of-foundation-cracks' },
      { label: 'Bowing Walls', href: '/articles/bowing-basement-walls' },
      { label: 'Efflorescence', href: '/articles/basement-efflorescence' },
      { label: 'Humidity Guide', href: '/articles/basement-humidity-guide' },
      { label: 'Why Basement Still Floods', href: '/articles/why-basement-floods-with-sump-pump' },
      { label: 'Dehumidifier Myths', href: '/articles/dehumidifier-myths' },
    ],
  },
  {
    title: 'FINISHING',
    links: [
      { label: 'Basement ADU & Rental', href: '/articles/basement-adu-rental-suite' },
      { label: 'Basement Bathroom', href: '/articles/basement-bathroom-guide' },
      { label: 'Basement Home Gym', href: '/articles/basement-home-gym' },
      { label: 'Permits Guide', href: '/articles/basement-permits-guide' },
      { label: 'Renovation Mistakes', href: '/articles/basement-renovation-mistakes' },
      { label: 'Old House Basements', href: '/articles/old-house-basements' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Flooding Insurance', href: '/articles/basement-flooding-insurance' },
      { label: 'Home Appraisal Value', href: '/articles/waterproofing-home-appraisal-value' },
      { label: 'Homebuyer Checklist', href: '/articles/homebuyers-basement-inspection-checklist' },
      { label: 'Spring Checklist', href: '/articles/spring-basement-checklist' },
      { label: 'About', href: '/about' },
      { label: 'Start Here', href: '/start-here' },
      { label: 'Contact', href: '/contact' },
      { label: 'Methodology', href: '/methodology' },
    ],
  },
]

function FooterSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="md:hidden flex items-center justify-between w-full py-2 text-sm font-bold text-gray-400 uppercase tracking-wider"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <h4 className="hidden md:block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{title}</h4>
      <ul className={`space-y-2 ${open ? 'block' : 'hidden'} md:block`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
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
    <footer className="bg-slate-900 text-gray-300 mt-16">
      <div className="container-custom py-12">
        {/* Top: Brand + description */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-white mb-2">The Basement Guide</h3>
          <p className="text-sm text-gray-400 max-w-md">
            Independent resource for basement waterproofing, finishing, and maintenance advice. Written by
            homeowners for homeowners &mdash; no contractor sales pitches, just honest guides.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-10">
          {footerSections.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Basement Guide. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/affiliate-disclosure" className="hover:text-gray-300 transition-colors">Affiliate Disclosure</Link>
          </div>
          <p className="text-center md:text-right">
            This site contains affiliate links. As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}

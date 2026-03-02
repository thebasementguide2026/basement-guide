import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Here | The Basement Guide',
  description: 'Not sure where to start? Answer a few quick questions and get directed to the right basement guides for your situation.',
}

const situations = [
  {
    icon: '💧',
    question: 'Is your basement wet or leaking?',
    answer: 'Water problem resources',
    color: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
    links: [
      { label: 'Emergency Water Plan', href: '/articles/basement-emergency-water-plan', badge: 'URGENT' },
      { label: 'Complete Waterproofing Guide', href: '/articles/complete-basement-waterproofing-guide', badge: 'START HERE' },
      { label: 'Interior vs Exterior Waterproofing', href: '/articles/interior-vs-exterior-waterproofing', badge: null },
      { label: 'Waterproofing Cost Guide', href: '/articles/basement-waterproofing-cost', badge: null },
      { label: 'How to Hire a Contractor', href: '/articles/how-to-hire-basement-waterproofing-contractor', badge: null },
    ],
  },
  {
    icon: '🏠',
    question: 'Are you planning to finish your basement?',
    answer: 'Finishing resources',
    color: 'border-teal-200 bg-teal-50',
    iconBg: 'bg-teal-100',
    links: [
      { label: 'Pre-Finish Audit (Do This First)', href: '/articles/pre-finish-audit', badge: 'START HERE' },
      { label: 'How to Finish a Basement', href: '/articles/how-to-finish-a-basement', badge: null },
      { label: 'Basement Finishing Cost', href: '/articles/basement-finishing-cost', badge: null },
      { label: 'Basement Permits Guide', href: '/articles/basement-permits-guide', badge: null },
      { label: 'Drop Ceiling vs Drywall', href: '/articles/drop-ceiling-vs-drywall', badge: null },
    ],
  },
  {
    icon: '🏡',
    question: 'Are you buying or selling a home?',
    answer: 'Real estate resources',
    color: 'border-amber-200 bg-amber-50',
    iconBg: 'bg-amber-100',
    links: [
      { label: "Homebuyer's Basement Checklist", href: '/articles/homebuyers-basement-inspection-checklist', badge: 'START HERE' },
      { label: 'Basement Appraisal Value Guide', href: '/articles/waterproofing-home-appraisal-value', badge: null },
      { label: 'Basement Flooding Insurance', href: '/articles/basement-flooding-insurance', badge: null },
      { label: 'Types of Foundation Cracks', href: '/articles/types-of-foundation-cracks', badge: null },
    ],
  },
  {
    icon: '🦠',
    question: 'Do you smell mold or notice humidity?',
    answer: 'Health & safety resources',
    color: 'border-red-200 bg-red-50',
    iconBg: 'bg-red-100',
    links: [
      { label: 'How to Prevent Basement Mold', href: '/articles/how-to-prevent-basement-mold', badge: 'START HERE' },
      { label: 'Musty Basement Smell Guide', href: '/articles/musty-basement-smell', badge: null },
      { label: 'Basement Humidity Guide', href: '/articles/basement-humidity-guide', badge: null },
      { label: 'Radon & Waterproofing', href: '/articles/radon-and-basement-waterproofing', badge: null },
      { label: 'Mold Remediation Cost', href: '/articles/mold-remediation-cost', badge: null },
    ],
  },
  {
    icon: '💰',
    question: 'Need to know how much something costs?',
    answer: 'Cost guides',
    color: 'border-green-200 bg-green-50',
    iconBg: 'bg-green-100',
    links: [
      { label: 'All Cost Guides', href: '/cost-guides', badge: 'SEE ALL' },
      { label: 'Basement Finishing Cost', href: '/articles/basement-finishing-cost', badge: null },
      { label: 'Waterproofing Cost', href: '/articles/basement-waterproofing-cost', badge: null },
      { label: 'Sump Pump Cost', href: '/articles/sump-pump-cost', badge: null },
    ],
  },
]

export default function StartHerePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-navy text-white py-12">
        <div className="container-custom">
          <nav className="text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Start Here</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Not Sure Where to Start?</h1>
          <p className="text-slate-300 max-w-2xl">
            Find the right guides for your situation. Pick what describes you below — we’ll point you exactly where you need to go.
          </p>
        </div>
      </div>

      {/* Situations */}
      <div className="container-custom py-12">
        <div className="space-y-8">
          {situations.map((situation) => (
            <div
              key={situation.question}
              className={`rounded-xl border-2 ${situation.color} p-6 md:p-8`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 ${situation.iconBg}`}>
                  {situation.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{situation.question}</h2>
                  <p className="text-gray-500 text-sm mt-1">→ {situation.answer}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {situation.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-3 hover:shadow-md border border-white hover:border-brand-teal transition-all group"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-brand-teal">{link.label}</span>
                    {link.badge && (
                      <span className="ml-2 text-xs font-bold bg-brand-teal text-white px-2 py-0.5 rounded-full flex-shrink-0">{link.badge}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-brand-navy text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to get quotes?</h2>
          <p className="text-slate-300 mb-5">Connect with local basement professionals. Free, no-obligation quotes.</p>
          <Link
            href="/#get-quotes"
            className="inline-block bg-brand-teal hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Free Quotes
          </Link>
        </div>
      </div>
    </div>
  )
}

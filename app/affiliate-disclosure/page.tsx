import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | The Basement Guide',
  description: 'The Basement Guide participates in affiliate programs. Read our full disclosure about how we earn commissions and how it affects our editorial content.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-slate-300 text-lg">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <div className="space-y-8 text-gray-600">

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">The Short Version</h2>
              <p className="mb-4">
                Some links on The Basement Guide are affiliate links. If you click one and make a purchase, we may earn a commission — at no extra cost to you. This helps us keep our content free and our site running.
              </p>
              <p>
                We only recommend products and services we genuinely believe are worth your money. Our editorial opinions are never influenced by affiliate relationships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">The Full Disclosure</h2>
              <p className="mb-4">
                The Basement Guide is a participant in affiliate advertising programs, including but not limited to:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Amazon Services LLC Associates Program — an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com',
                  'Home Depot Affiliate Program',
                  'Other home improvement and contractor referral programs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                When you click an affiliate link and complete a purchase or form submission, we may receive a commission. The price you pay is never affected by whether or not we earn a commission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">How We Identify Affiliate Links</h2>
              <p>
                We do our best to clearly identify affiliate links and sponsored content throughout the site. You may see disclosures like "affiliate link," "we may earn a commission," or similar language near product recommendations. This disclosure page applies site-wide as an additional notice in accordance with FTC guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Editorial Independence</h2>
              <p className="mb-4">
                Affiliate relationships never influence our recommendations or editorial content. Here's how we protect that:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'We research products independently before including affiliate links',
                  'We will recommend a non-affiliate product over an affiliate product if it\'s genuinely better',
                  'Negative reviews are published even when we have an affiliate relationship with the brand',
                  'Brands cannot pay for positive editorial coverage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Contractor Lead Referrals</h2>
              <p>
                The Basement Guide also operates a contractor quote request form. When you submit a quote request, your information may be shared with licensed contractors in your area or with our referral network partners. We may receive compensation for these referrals. You are under no obligation to hire any contractor you are connected with. See our <Link href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link> for details on how your data is handled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Questions?</h2>
              <p>
                If you have any questions about our affiliate relationships or editorial practices, please <Link href="/contact" className="text-teal-600 hover:underline">contact us</Link>. We're happy to explain any specific recommendation or relationship.
              </p>
            </div>

          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-teal-600 hover:underline font-medium">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

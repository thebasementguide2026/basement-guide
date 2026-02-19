import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | The Basement Guide',
  description: 'Read the Terms of Use for The Basement Guide website.',
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-slate-300 text-lg">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom max-w-3xl space-y-8 text-gray-600">

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using thebasement.guide ("the Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site. We reserve the right to update these terms at any time — continued use of the Site after changes constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Use of Content</h2>
            <p className="mb-4">
              All content on The Basement Guide — including articles, guides, images, pricing data, and recommendations — is provided for informational purposes only. You may:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Read and use our content for personal, non-commercial purposes',
                'Share links to our articles',
                'Quote brief excerpts with attribution and a link back to the source',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">You may not:</p>
            <ul className="space-y-2">
              {[
                'Copy, reproduce, or republish our content in full without written permission',
                'Use our content for commercial purposes without a license',
                'Scrape or systematically download content from the Site',
                'Remove copyright or attribution notices from our content',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Informational Purposes Only</h2>
            <p>
              The content on The Basement Guide is for general informational purposes only. It is not a substitute for professional advice from a licensed contractor, structural engineer, or other qualified professional. Always consult a qualified professional before undertaking any home improvement project. Costs, techniques, and building codes vary by location and change over time — verify all information with local professionals before making decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Contractor Referrals</h2>
            <p>
              When you submit a quote request through our site, we connect you with third-party contractors and referral network partners. The Basement Guide does not employ, endorse, or guarantee the work of any contractor. We are not a party to any agreement between you and a contractor. Always verify contractor licenses, insurance, and references independently before hiring.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Affiliate Links & Advertising</h2>
            <p>
              The Site contains affiliate links and may display advertising. See our <Link href="/affiliate-disclosure" className="text-teal-600 hover:underline">Affiliate Disclosure</Link> for full details. We are not responsible for the content, products, or practices of third-party sites linked from our Site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided "as is" without any warranty of any kind, express or implied. We do not warrant that the Site will be error-free, uninterrupted, or free of viruses. We do not warrant the accuracy, completeness, or timeliness of any content on the Site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, The Basement Guide shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on any content published here. Our total liability to you for any claim shall not exceed $100.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Suffolk County, New York.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Contact</h2>
            <p>
              Questions about these Terms? <Link href="/contact" className="text-teal-600 hover:underline">Contact us here</Link>.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <Link href="/" className="text-teal-600 hover:underline font-medium">← Back to Home</Link>
          </div>

        </div>
      </section>
    </div>
  )
}

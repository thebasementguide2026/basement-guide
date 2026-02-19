import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Basement Guide',
  description: 'Learn how The Basement Guide collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom max-w-3xl space-y-8 text-gray-600">

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Overview</h2>
            <p>
              The Basement Guide ("we," "us," or "our") operates thebasement.guide. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. By using our site, you agree to the practices described here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Information We Collect</h2>
            <p className="mb-4">We collect information in two ways:</p>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Information You Provide</h3>
            <p className="mb-4">When you submit a quote request through our lead form, we collect your name, email address, phone number, ZIP code, and project type. This information is used to connect you with contractors in your area.</p>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Information Collected Automatically</h3>
            <p>When you visit our site, we automatically collect certain information including your IP address, browser type, pages visited, and time spent on pages. This is collected via cookies and analytics tools (such as Google Analytics) to help us improve our content.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">How We Use Your Information</h2>
            <ul className="space-y-2">
              {[
                'To connect you with licensed contractors in your area when you submit a quote request',
                'To share your lead information with our referral network partners (such as Modernize Home Services) who may contact you about your project',
                'To improve our website content and user experience',
                'To analyze site traffic and performance via analytics tools',
                'To comply with legal obligations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Lead Form Data & Third-Party Sharing</h2>
            <p className="mb-4">
              When you submit a quote request on our site, your information may be shared with up to three licensed contractors and/or our referral network partners. By submitting the form, you consent to being contacted by these parties via phone, email, or text message regarding your project. Standard message and data rates may apply for text messages.
            </p>
            <p>You are under no obligation to hire any contractor you are connected with.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Cookies</h2>
            <p>
              We use cookies to analyze site traffic and improve your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect some site functionality. We use Google Analytics to understand how visitors use our site — Google's privacy policy applies to data collected through this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Affiliate Links</h2>
            <p>
              Our site contains affiliate links. When you click these links, the affiliated company may set cookies on your browser. See our <Link href="/affiliate-disclosure" className="text-teal-600 hover:underline">Affiliate Disclosure</Link> for full details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="space-y-2">
              {[
                'Access the personal information we hold about you',
                'Request correction of inaccurate information',
                'Request deletion of your personal information',
                'Opt out of marketing communications',
                'Lodge a complaint with your local data protection authority',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, <Link href="/contact" className="text-teal-600 hover:underline">contact us</Link>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information. However, no method of internet transmission is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Children's Privacy</h2>
            <p>
              Our site is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the new policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Contact Us</h2>
            <p>
              Questions about this Privacy Policy? <Link href="/contact" className="text-teal-600 hover:underline">Contact us here</Link>.
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

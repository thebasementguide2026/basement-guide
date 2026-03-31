import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | The Basement Guide',
  description: 'Get in touch with The Basement Guide team. Questions about basement waterproofing, article corrections, partnerships, or press inquiries.',
  alternates: { canonical: 'https://thebasement.guide/contact' },
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg">
            We read every message. Typical response time is 1–2 business days.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom max-w-3xl">

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📬</div>
              <h3 className="font-bold text-slate-800 mb-2">General Questions</h3>
              <p className="text-sm text-gray-600">Basement questions, article feedback, corrections</p>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-slate-800 mb-2">Partnerships</h3>
              <p className="text-sm text-gray-600">Advertising, sponsorships, contractor partnerships</p>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="font-bold text-slate-800 mb-2">Press & Media</h3>
              <p className="text-sm text-gray-600">Media inquiries and expert commentary requests</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
            <form
              action="https://formspree.io/f/contact"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select a topic...</option>
                  <option value="question">Basement Question</option>
                  <option value="correction">Article Correction</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="press">Press / Media</option>
                  <option value="contractor">Contractor Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* FAQ shortcuts */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Looking for Quick Answers?</h2>
            <p className="text-gray-600 mb-6">These guides answer the most common questions we receive:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Complete Waterproofing Guide', href: '/articles/complete-basement-waterproofing-guide' },
                { title: 'Pre-Finish Audit Checklist', href: '/articles/pre-finish-audit' },
                { title: 'Best Basement Flooring', href: '/articles/best-basement-flooring' },
                { title: 'Smart Sump Pumps Guide', href: '/articles/smart-sump-pumps-guide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-colors text-slate-700 font-medium"
                >
                  <span className="text-teal-600">→</span>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-teal-600 hover:underline font-medium">← Back to Home</Link>
          </div>

        </div>
      </section>
    </div>
  )
}

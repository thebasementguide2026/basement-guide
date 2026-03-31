'use client'

import { useState } from 'react'
import Link from 'next/link'

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Us | The Basement Guide',
  description: 'Get in touch with The Basement Guide team. Questions about basement waterproofing, article corrections, partnerships, or press inquiries.',
  url: 'https://thebasement.guide/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'The Basement Guide',
    url: 'https://thebasement.guide',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I contact The Basement Guide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach us by filling out the contact form on this page. We typically respond within 1\u20132 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a response?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We aim to respond to all inquiries within 1\u20132 business days.',
      },
    },
  ],
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: `[${subject}] ${message}` }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setSuccess(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

              {success && (
                <div className="mb-6 p-4 rounded-lg border bg-green-50 border-green-200 text-green-800">
                  Thank you for reaching out! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-lg border bg-red-50 border-red-200 text-red-800">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a topic...</option>
                    <option value="Basement Question">Basement Question</option>
                    <option value="Article Correction">Article Correction</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Press / Media">Press / Media</option>
                    <option value="Contractor Partnership">Contractor Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Message →'}
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
              <h2 className="text-xl font-bold text-slate-800 mb-3">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800">How can I contact The Basement Guide?</h3>
                  <p className="text-gray-600 mt-1">You can reach us by filling out the contact form above. We typically respond within 1–2 business days.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">How long does it take to get a response?</h3>
                  <p className="text-gray-600 mt-1">We aim to respond to all inquiries within 1–2 business days.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link href="/" className="text-teal-600 hover:underline font-medium">← Back to Home</Link>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

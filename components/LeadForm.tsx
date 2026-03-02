'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { getTaskIdsForArticle, FALLBACK_TASK_IDS } from '@/lib/taskIdMap'

interface LeadFormProps {
  taskIds?: number[]
}

export default function LeadForm({ taskIds }: LeadFormProps) {
  const pathname = usePathname()

  // Auto-detect task IDs from URL if not explicitly passed
  const resolvedTaskIds = taskIds || (() => {
    const segments = pathname.split('/')
    const slug = segments[segments.length - 1] || segments[segments.length - 2]
    return slug ? getTaskIdsForArticle(slug) : FALLBACK_TASK_IDS
  })()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    // Get TrustedForm cert URL from hidden field injected by TrustedForm script
    const certInput = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement
    const trustedFormCertUrl = certInput?.value || ''

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          taskIds: resolvedTaskIds,
          trustedFormCertUrl,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your information. You'll receive quotes from up to 3 local contractors within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form id="get-quotes" onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code *
          </label>
          <input
            type="text"
            id="zipCode"
            required
            pattern="[0-9]{5}"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Briefly describe your project (optional)
        </label>
        <textarea
          id="description"
          maxLength={500}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          placeholder="Tell us about your project, any specific concerns, timeline, etc."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <p className="text-xs text-gray-400 mt-1 text-right">{formData.description.length}/500</p>
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-brand-teal hover:bg-brand-teal-light text-white font-semibold py-3 rounded-lg mt-6 transition-colors disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Get Free Quotes'}
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
        By clicking "Get Free Quotes," I consent to be contacted by up to 3 home service professionals at the phone number and/or email address I provided, including via automated calls, texts, and prerecorded messages, even if my number is on a Do Not Call list. I understand this consent is not a condition of purchase. I also agree to The Basement Guide's{' '}
        <a href="/terms" className="underline">Terms of Service</a> and{' '}
        <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  )
}

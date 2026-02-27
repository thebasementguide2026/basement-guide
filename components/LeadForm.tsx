'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    projectType: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // In production, this would send to your lead management system
    // For now, we'll just show a success message
    console.log('Lead submitted:', formData)
    
    // TODO: Integrate with your lead management system (Google Sheets, Airtable, etc.)
    // Example: await fetch('/api/submit-lead', { method: 'POST', body: JSON.stringify(formData) })
    
    setSubmitted(true)
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
          Project Type *
        </label>
        <select
          id="projectType"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        >
          <option value="">Select a project type</option>
          <option value="waterproofing">Basement Waterproofing</option>
          <option value="finishing">Basement Finishing</option>
          <option value="foundation-repair">Foundation Repair</option>
          <option value="sump-pump">Sump Pump Installation</option>
          <option value="drainage">Drainage System</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="w-full bg-brand-teal hover:bg-brand-teal-light text-white font-semibold py-3 rounded-lg mt-6 transition-colors"
      >
        Get Free Quotes
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting this form, you agree to be contacted by up to 3 contractors. No obligation to hire.
      </p>
    </form>
  )
}

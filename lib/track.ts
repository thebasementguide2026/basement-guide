'use client'

// Minimal GA4 event helper. Uses the gtag instance loaded in app/layout.tsx.
// Safe in SSR contexts: no-op if window.gtag is undefined.

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function track(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  } catch {
    // never let analytics break the page
  }
}

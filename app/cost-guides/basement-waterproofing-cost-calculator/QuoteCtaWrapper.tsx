'use client'

import { ReactNode, useRef, MouseEvent } from 'react'
import { track } from '@/lib/track'

interface Props {
  ctaLocation: string
  children: ReactNode
}

// Wraps a section that contains a quote/lead CTA (typically the shared LeadForm submit button).
// Uses click delegation so we don't need to modify the shared LeadForm component.
// Fires quote_cta_click when the user clicks a submit-type button or a clearly labeled
// quote CTA inside this section.
export default function QuoteCtaWrapper({ ctaLocation, children }: Props) {
  const fired = useRef(false)

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement | null
    if (!target) return
    const el = target.closest('button, a') as HTMLElement | null
    if (!el) return

    const isSubmit =
      el.tagName === 'BUTTON' && (el as HTMLButtonElement).type === 'submit'
    const text = (el.textContent || '').toLowerCase()
    const looksLikeCta = /quote|get free|get expert help|get matched/.test(text)

    if (!isSubmit && !looksLikeCta) return
    if (fired.current) return
    fired.current = true

    track('quote_cta_click', {
      calculator_name: 'basement_waterproofing_cost',
      cta_location: ctaLocation,
    })
  }

  return <div onClick={handleClick}>{children}</div>
}

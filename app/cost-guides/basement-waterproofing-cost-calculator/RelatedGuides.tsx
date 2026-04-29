'use client'

import Link from 'next/link'
import { track } from '@/lib/track'

interface Related {
  href: string
  title: string
  desc: string
}

export default function RelatedGuides({ items }: { items: Related[] }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {items.map((r) => {
        const slug = r.href.replace(/^\/articles\//, '').replace(/^\//, '')
        return (
          <Link
            key={r.href}
            href={r.href}
            onClick={() =>
              track('related_guide_click', {
                calculator_name: 'basement_waterproofing_cost',
                guide_slug: slug,
                guide_title: r.title,
              })
            }
            className='block rounded-lg border border-slate-200 bg-white hover:border-teal-400 hover:shadow-sm transition-all p-5'
          >
            <p className='font-semibold text-slate-900 mb-1'>{r.title}</p>
            <p className='text-sm text-slate-600 leading-relaxed'>{r.desc}</p>
          </Link>
        )
      })}
    </div>
  )
}

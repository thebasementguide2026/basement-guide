import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | The Basement Guide',
  description: 'Get in touch with The Basement Guide. Send us your questions, feedback, or suggestions.',
  alternates: { canonical: 'https://thebasement.guide/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}

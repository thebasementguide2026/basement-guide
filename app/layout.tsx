import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Basement Guide - Expert Waterproofing Advice for Homeowners',
  description: 'Independent resource for basement waterproofing, finishing, and maintenance. Get expert advice, cost guides, and product reviews.',
  keywords: 'basement waterproofing, basement finishing, sump pump, foundation repair, basement drainage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace G-CKRJCDR3D0 with your actual ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CKRJCDR3D0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CKRJCDR3D0');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Basement Guide \u2014 Expert Waterproofing Advice for Homeowners',
  description: 'Independent resource for basement waterproofing, finishing, and maintenance. Get expert advice, cost guides, and product reviews.',
  keywords: 'basement waterproofing, basement finishing, sump pump, foundation repair, basement drainage',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Basement Guide',
  url: 'https://thebasement.guide',
  logo: 'https://thebasement.guide/logo.png',
  description: 'Independent resource for basement waterproofing, finishing, and maintenance advice for homeowners.',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Basement Guide',
  url: 'https://thebasement.guide',
  description: 'Expert waterproofing advice for homeowners. Cost guides, product reviews, and maintenance tips.',
  publisher: {
    '@type': 'Organization',
    name: 'The Basement Guide',
    logo: {
      '@type': 'ImageObject',
      url: 'https://thebasement.guide/logo.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* TrustedForm Certify Script */}
        <Script
          id="trustedform"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var tf = document.createElement('script');
                tf.type = 'text/javascript';
                tf.async = true;
                tf.src = ("https:" == document.location.protocol ? 'https' : 'http') + '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' + new Date().getTime() + Math.random();
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(tf, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

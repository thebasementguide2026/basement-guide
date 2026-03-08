/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/articles/common-renovation-mistakes',
        destination: '/articles/basement-renovation-mistakes',
        permanent: true,
      },
      {
        source: '/articles/basement-waterproofing-costs',
        destination: '/articles/basement-waterproofing-cost',
        permanent: true,
      },
      {
        source: '/articles/mold-prevention',
        destination: '/articles/how-to-prevent-basement-mold',
        permanent: true,
      },
      {
        source: '/articles/sump-pump-guide',
        destination: '/articles/sump-pump-buying-guide',
        permanent: true,
      },
      {
        source: '/articles/efflorescence-explainer',
        destination: '/articles/basement-efflorescence',
        permanent: true,
      },
      {
        source: '/articles/finishing-a-basement',
        destination: '/articles/basement-finishing-cost',
        permanent: true,
      },
      {
        source: '/articles/basement-mold-prevention',
        destination: '/articles/how-to-prevent-basement-mold',
        permanent: true,
      },
      {
        source: '/articles/sump-pump-installation-guide',
        destination: '/articles/sump-pump-cost',
        permanent: true,
      },
      {
        source: '/articles/how-to-hire-a-basement-contractor',
        destination: '/articles/how-to-hire-basement-waterproofing-contractor',
        permanent: true,
      },
      {
        source: '/articles/sump-pump-installation-cost',
        destination: '/articles/sump-pump-cost',
        permanent: true,
      },
      {
        source: '/articles/why-basement-floods-without-rain',
        destination: '/articles/why-basement-floods-with-sump-pump',
        permanent: true,
      },
      {
        source: '/articles/basement-humidity',
        destination: '/articles/basement-humidity-guide',
        permanent: true,
      },
      {
        source: '/articles/basement-waterproofing-methods',
        destination: '/articles/complete-basement-waterproofing-guide',
        permanent: true,
      },
      {
        source: '/articles/basement-waterproofing-guide',
        destination: '/articles/complete-basement-waterproofing-guide',
        permanent: true,
      },
      {
        source: '/articles/basement-waterproofing-cost-guide',
        destination: '/articles/basement-waterproofing-cost',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

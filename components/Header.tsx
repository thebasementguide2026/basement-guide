import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-brand-navy">
            The Basement Guide
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/guides" className="text-gray-700 hover:text-brand-teal transition-colors">
              Guides
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-brand-teal transition-colors">
              Reviews
            </Link>
            <Link href="/cost-guides" className="text-gray-700 hover:text-brand-teal transition-colors">
              Cost Guides
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-teal transition-colors">
              About
            </Link>
          </nav>
          
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">The Basement Guide</h3>
            <p className="text-gray-400 text-sm">
              Independent resource for basement waterproofing, finishing, and maintenance advice.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Popular Guides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/articles/complete-basement-waterproofing-guide" className="hover:text-brand-teal">Waterproofing Guide</Link></li>
              <li><Link href="/articles/pre-finish-audit" className="hover:text-brand-teal">Pre-Finish Audit</Link></li>
              <li><Link href="/articles/best-basement-flooring" className="hover:text-brand-teal">Best Flooring</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-brand-teal">About Us</Link></li>
              <li><Link href="/methodology" className="hover:text-brand-teal">Our Methodology</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-brand-teal">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-teal">Terms of Use</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-brand-teal">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} The Basement Guide. All rights reserved.</p>
          <p className="mt-2">
            This site contains affiliate links. We may earn a commission when you purchase through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}

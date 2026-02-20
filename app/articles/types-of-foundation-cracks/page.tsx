import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Foundation Cracks: What Each One Means | The Basement Guide',
  description: 'An expert diagnostic guide to foundation cracks. Learn the difference between cosmetic settling and structural failure, including repair costs.',
}

export default function FoundationCracksArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[60vh] min-h-[400px] bg-slate-900'>
        <Image
          src='/foundation-crack-closeup.jpg'
          alt='Close up of a structural foundation crack'
          fill
          className='object-cover opacity-60'
          priority
        />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-custom'>
            <div className='max-w-3xl'>
              <span className='bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block'>
                Diagnostic Guide
              </span>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                Foundation Cracks: The Good, The Bad, & The Ugly
              </h1>
              <p className='text-xl text-slate-200 mb-8 leading-relaxed'>
                Not all cracks are created equal. Use this guide to determine if your foundation crack is a minor cosmetic issue or a major structural red flag.
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold'>BG</div>
                <div className='text-white'>
                  <p className='font-bold'>The Basement Guide Staff</p>
                  <p className='text-sm opacity-80'>Updated February 2026 • 15 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='flex flex-col lg:flex-row gap-12'>
            <div className='lg:w-2/3'>
              <div className='prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6'>
                <p className='text-lg leading-relaxed mb-8'>
                  Finding a crack in your foundation is a stressful experience for any homeowner. However, nearly every concrete structure will crack at some point due to shrinkage, settling, or thermal expansion. The key is knowing <strong>when to worry</strong> and <strong>when to simply patch it</strong>.
                </p>

                <h2>1. Vertical Cracks (The "Good" News)</h2>
                <p>
                  Vertical cracks are the most common type found in basement walls. They usually run straight up and down or slightly diagonal (within 30 degrees of vertical).
                </p>
                <div className='bg-blue-50 p-6 rounded-xl mb-8 border-l-4 border-blue-500'>
                  <h4 className='font-bold mb-2'>Diagnosis:</h4>
                  <p className='m-0'>Usually caused by the natural shrinking of concrete as it cures. If the crack is thinner than a nickel, it is likely cosmetic.</p>
                </div>
                <h3>Scenario: New Construction</h3>
                <p>
                  If your home was built in the last 2-3 years and you see thin vertical cracks, don't panic. This is "settling" or "shrinkage." Monitor them to see if they widen or leak water. If they stay thin, a simple DIY epoxy injection kit is usually enough.
                </p>

                <h2>2. Diagonal Cracks (The "Warning" Sign)</h2>
                <p>
                  These cracks typically run at a 45-degree angle. They are often wider at the top than the bottom.
                </p>
                <h3>Scenario: Differential Settling</h3>
                <p>
                  Imagine one corner of your house is sitting on clay that has expanded, while the rest is on stable soil. This uneven movement puts "shear" stress on the concrete, causing it to snap diagonally. <strong>The Fix:</strong> You may need "piers" installed under the foundation to stabilize the moving section.
                </p>

                <h2>3. Horizontal Cracks (The "Structural" Emergency)</h2>
                <p>
                  Horizontal cracks are the most dangerous. They run side-to-side across the middle of the wall.
                </p>
                <div className='bg-red-50 p-6 rounded-xl mb-8 border-l-4 border-red-500'>
                  <h4 className='font-bold text-red-700 mb-2'>CRITICAL ALERT:</h4>
                  <p className='m-0 text-red-700 font-bold'>Horizontal cracks indicate that the wall is failing under external pressure. This is a structural emergency.</p>
                </div>
                <h3>Scenario: Hydrostatic Pressure</h3>
                <p>
                  If you live in an area with heavy clay soil and poor drainage, rainwater gets trapped against your wall. This water is incredibly heavy. Eventually, it pushes the wall inward, causing it to "bow" and snap horizontally. 
                </p>

                <h2 className='mt-12'>Comparison: What Each Crack Means</h2>
                <table className='w-full border-collapse border border-slate-200'>
                  <thead>
                    <tr className='bg-slate-100'>
                      <th className='border p-3 text-left'>Crack Type</th>
                      <th className='border p-3 text-left'>Severity</th>
                      <th className='border p-3 text-left'>Typical Cause</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border p-3'>Vertical</td>
                      <td className='border p-3 text-green-600 font-bold'>Low</td>
                      <td className='border p-3'>Shrinkage / Settling</td>
                    </tr>
                    <tr>
                      <td className='border p-3'>Diagonal</td>
                      <td className='border p-3 text-yellow-600 font-bold'>Moderate</td>
                      <td className='border p-3'>Differential Settling</td>
                    </tr>
                    <tr>
                      <td className='border p-3'>Horizontal</td>
                      <td className='border p-3 text-red-600 font-bold'>High</td>
                      <td className='border p-3'>Soil Pressure / Bowing</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className='mt-12'>Frequently Asked Questions</h2>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-bold'>When should I call a professional?</h4>
                    <p>If the crack is wider than 1/4 inch, if the wall is leaning inward, or if you see multiple cracks forming in the same area.</p>
                  </div>
                  <div>
                    <h4 className='font-bold'>How much does it cost to fix foundation cracks?</h4>
                    <p>Cosmetic epoxy injections cost $300-$800. Structural stabilization (carbon fiber or piers) can range from $2,000 to $15,000+ depending on the severity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:w-1/3'>
              <div className='sticky top-8 space-y-8'>
                <div className='bg-slate-50 p-8 rounded-2xl border border-slate-200'>
                  <h3 className='font-bold text-xl mb-4'>Related Guides</h3>
                  <div className='space-y-4'>
                    <Link href='/articles/bowing-basement-walls' className='group block'>
                      <span className='text-blue-600 text-xs font-bold uppercase'>Structural Alert</span>
                      <span className='block font-bold text-slate-800 group-hover:text-indigo-600 transition-colors'>Bowing Wall Repair Guide</span>
                    </Link>
                    <Link href='/articles/basement-vs-crawl-space-vs-slab' className='group block'>
                      <span className='text-indigo-600 text-xs font-bold uppercase'>Foundation Choice</span>
                      <span className='block font-bold text-slate-800 group-hover:text-indigo-600 transition-colors'>Slab vs. Crawl vs. Basement</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

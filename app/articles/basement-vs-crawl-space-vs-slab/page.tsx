import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement vs. Crawl Space vs. Slab: Which Foundation is Right for You? | The Basement Guide',
  description: 'A comprehensive comparison of basement, crawl space, and slab foundations. Costs, pros/cons, and how to choose based on your climate and budget.',
}

export default function FoundationComparisonArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[60vh] min-h-[400px] bg-slate-900'>
        <Image
          src='/foundation-types.jpg'
          alt='Comparison of basement, crawl space, and slab foundations'
          fill
          className='object-cover opacity-60'
          priority
        />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-custom'>
            <div className='max-w-3xl'>
              <span className='bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block'>
                Pillar Guide
              </span>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                Basement vs. Crawl Space vs. Slab: Which is Best?
              </h1>
              <p className='text-xl text-slate-200 mb-8 leading-relaxed'>
                Choosing a foundation is the most consequential decision in home construction. We compare the three major types on cost, longevity, and lifestyle.
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold'>BG</div>
                <div className='text-white'>
                  <p className='font-bold'>The Basement Guide Staff</p>
                  <p className='text-sm opacity-80'>Updated February 2026 • 25 min read</p>
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
                  Your home's foundation determines more than just how it sits on the ground. It influences your energy bills, your risk of flood damage, your storage capacity, and even your health. When building or buying a home, the "right" foundation depends heavily on your local climate, soil conditions, and budget.
                </p>

                <h2>1. Concrete Slab Foundations</h2>
                <p>
                  A slab-on-grade foundation is a thick layer of concrete (usually 4-6 inches) poured directly onto the ground. It's the most common foundation for new construction in the Sunbelt.
                </p>
                <div className='bg-slate-50 p-6 rounded-xl mb-8 border-l-4 border-slate-800'>
                  <h4 className='font-bold mb-2'>Best For:</h4>
                  <p className='m-0'>Warm climates, areas with high water tables, and budgets that prioritize construction speed.</p>
                </div>
                <h3>Scenario: The Efficiency Build</h3>
                <p>
                  If you are building in Florida or Texas, a slab is likely your best bet. Because there is no space underneath the home, there's no risk of mold or radon buildup from a crawl space. However, repairs to plumbing embedded in the slab can be incredibly expensive, requiring a jackhammer to reach a leak.
                </p>

                <h2>2. Crawl Space Foundations</h2>
                <p>
                  A crawl space is essentially a shallow basement. The home is elevated on short walls, creating a 2-4 foot gap between the ground and the floor joists.
                </p>
                <h3>Scenario: Damp Soil & Termites</h3>
                <p>
                  Crawl spaces are popular in the Southeast and Northwest. They protect the home from minor flooding and provide easy access to plumbing and HVAC. <strong>The Danger:</strong> If not properly encapsulated, crawl spaces are breeding grounds for mold and wood rot. 
                </p>

                <h2>3. Full Basement Foundations</h2>
                <p>
                  A full basement involves digging deep (usually 8 feet or more) and pouring high walls. It offers the most utility but comes at the highest cost.
                </p>
                <h3>Scenario: Growing Families & Cold Climates</h3>
                <p>
                  In the Northeast and Midwest, the frost line is deep, meaning you have to dig anyway. For a family needing a gym, a home theater, or a playroom, the basement provides the cheapest cost-per-square-foot for living space.
                </p>

                <h2 className='text-teal-700 bg-teal-50 p-4 rounded-lg'>How to Choose: Scenarios</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='border p-6 rounded-xl'>
                    <h4 className='font-bold text-indigo-600'>Pick a Slab If:</h4>
                    <ul className='list-disc pl-5 space-y-2'>
                      <li>You want the lowest possible construction cost</li>
                      <li>You live in a region where the ground doesn't freeze</li>
                      <li>You want to avoid stairs or have mobility issues</li>
                    </ul>
                  </div>
                  <div className='border p-6 rounded-xl'>
                    <h4 className='font-bold text-indigo-600'>Pick a Basement If:</h4>
                    <ul className='list-disc pl-5 space-y-2'>
                      <li>You need extra storage or living space</li>
                      <li>You live in a tornado-prone area (safe room)</li>
                      <li>Your land is sloped (allows for a walk-out basement)</li>
                    </ul>
                  </div>
                </div>

                <h2 className='mt-12'>Frequently Asked Questions</h2>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-bold'>Is a basement or crawl space better for resale value?</h4>
                    <p>Generally, a finished basement adds significantly more value than a crawl space. In cold climates, a home without a basement may actually be harder to sell.</p>
                  </div>
                  <div>
                    <h4 className='font-bold'>Which foundation is the most energy-efficient?</h4>
                    <p>Slabs are efficient because there is no air gap to heat or cool. However, a properly insulated basement can also be very efficient as the earth acts as natural insulation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:w-1/3'>
              <div className='sticky top-8 space-y-8'>
                <div className='bg-slate-50 p-8 rounded-2xl border border-slate-200'>
                  <h3 className='font-bold text-xl mb-4'>Foundation Resources</h3>
                  <div className='space-y-4'>
                    <Link href='/articles/types-of-foundation-cracks' className='group block'>
                      <span className='text-teal-600 text-xs font-bold uppercase'>Diagnosis Guide</span>
                      <span className='block font-bold text-slate-800 group-hover:text-indigo-600 transition-colors'>Foundation Crack Guide</span>
                    </Link>
                    <Link href='/articles/bowing-basement-walls' className='group block'>
                      <span className='text-blue-600 text-xs font-bold uppercase'>Structural Alert</span>
                      <span className='block font-bold text-slate-800 group-hover:text-indigo-600 transition-colors'>Bowing Wall Repair</span>
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

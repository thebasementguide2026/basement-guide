import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radon and Basement Waterproofing: How Sealing Reduces Radon Risks',
  description: 'Learn how basement waterproofing helps reduce radon gas levels. Explore radon entry points, mitigation systems, testing methods, and integrated solutions updated for 2026.',
}

export default function RadonWaterproofingArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/radon-and-basement-waterproofing.jpg'
          alt='Basement waterproofing and radon mitigation system installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-110'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-widest uppercase text-sm'>Expanded Edition</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight max-w-5xl'>
            Radon & Basement Waterproofing<br />
            <span className='text-teal-400'>The Science of Sealing for Health & Safety</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 mt-8'>
            How sealing your home reduces radon risks and prevents water damage — your complete 2026 guide.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 rounded-full px-5 py-2.5 border border-slate-700/50'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>BG</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide</span>
                <div className='flex items-center text-slate-400 text-xs'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>28 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none'>

          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-8'>
            Radon gas poses a serious health threat in many homes while basement water damage can lead to costly repairs and mold growth. These issues often share common entry points through foundation cracks and gaps. Basement waterproofing not only protects against moisture but also plays a key role in radon mitigation by sealing those vulnerabilities.
          </p>

          <p>
            In this comprehensive guide updated for 2026, we explore the science behind radon, its health risks, how waterproofing helps reduce radon levels, best practices for integrated solutions, costs, testing methods, and more. Whether you are dealing with high radon levels in your basement, planning a home renovation, or researching radon-resistant construction, this article provides actionable insights to safeguard your family and property.
          </p>

          <p>
            Understanding radon testing, radon mitigation systems, and basement waterproofing techniques can help you achieve safer indoor air quality and a dry, durable foundation.
          </p>

          {/* What Is Radon Gas Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>What Is Radon Gas? Sources and Health Risks</h2>

            <p>
              Radon is a naturally occurring radioactive gas that forms from the decay of uranium in soil, rock, and water. It is colorless, odorless, and tasteless, making it impossible to detect without testing. Radon seeps into homes through foundations, especially in areas with high uranium content in the soil.
            </p>

            <p>
              According to the EPA, radon is present in all 50 states with higher concentrations in regions like the Midwest, Northeast, and Rocky Mountains.
            </p>

            <div className='bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8 not-prose'>
              <h4 className='text-lg font-bold text-red-900 mb-2'>⚠️ Critical Health Warning</h4>
              <p className='text-red-800'>
                Exposure to radon is the <strong>second leading cause of lung cancer</strong> in the United States, responsible for an estimated 21,000 deaths annually. It is the top cause of lung cancer among non-smokers. Smokers exposed to radon face up to 10 times higher risk.
              </p>
            </div>

            <p>
              The EPA states there is no safe level of radon exposure but recommends action if levels reach 4 picocuries per liter (pCi/L). Even levels between 2 and 4 pCi/L warrant consideration for mitigation, as risks increase with prolonged exposure. Recent studies link low-level radon exposure below EPA guidelines to increased childhood leukemia risk.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 mt-10 mb-4'>Key Health Impacts</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8'>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Lung Tissue</p>
                <p className='text-slate-700'>Damage from radioactive particles that attach to lung tissue during breathing.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Cancer Risk</p>
                <p className='text-slate-700'>Increased cancer risk equivalent to 200 chest X-rays per year at 4 pCi/L.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Children at Risk</p>
                <p className='text-slate-700'>Higher risks for children due to faster breathing rates and developing lungs.</p>
              </div>
            </div>

            <p>
              Testing your home is essential, as radon levels vary by location and home structure.
            </p>
          </div>

          {/* How Radon Enters Homes */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>How Radon Enters Homes: Common Pathways</h2>

            <p>
              Radon enters buildings primarily through soil gas movement driven by air pressure differences. Homes act like vacuums, pulling radon upward through foundations. Moist soil increases radon mobility, as water displaces gas pushing it toward your home. Poor drainage around foundations exacerbates this issue, creating higher pressure that forces radon inside.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 mt-10 mb-4'>Common Entry Points</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8'>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>⚠</span>
                <p className='text-slate-700'>Cracks in concrete floors and walls</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>⚠</span>
                <p className='text-slate-700'>Gaps around pipes, utility lines, and sump pumps</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>⚠</span>
                <p className='text-slate-700'>Construction joints and porous block walls</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>⚠</span>
                <p className='text-slate-700'>Crawl spaces and unfinished basements</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>⚠</span>
                <p className='text-slate-700'>Well water (though airborne entry is more common)</p>
              </div>
            </div>
          </div>

          {/* Understanding Basement Waterproofing Basics */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Understanding Basement Waterproofing Basics</h2>

            <p>
              Basement waterproofing prevents water intrusion that can cause structural damage, mold, and poor indoor air quality. Effective waterproofing maintains dry conditions, reducing hydrostatic pressure that can widen cracks over time.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 mt-10 mb-4'>Waterproofing Methods</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8'>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Interior Drainage</p>
                <p className='text-slate-700'>French drains or sump pumps to collect and redirect water away from the foundation.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Exterior Membranes</p>
                <p className='text-slate-700'>Applied to foundation walls to block moisture from penetrating the structure.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Sealants & Vapor Barriers</p>
                <p className='text-slate-700'>Close cracks and prevent humidity buildup inside the basement.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Grading & Downspouts</p>
                <p className='text-slate-700'>Improve site drainage by directing water away from the foundation perimeter.</p>
              </div>
            </div>
          </div>

          {/* The Link Between Waterproofing and Radon */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>The Link Between Basement Waterproofing and Radon Mitigation</h2>

            <p>
              Waterproofing and radon mitigation are interconnected because both address foundation vulnerabilities. Sealing cracks during waterproofing blocks radon entry points, reducing levels by up to 50 percent in some cases. Waterproofing also lowers moisture, which can otherwise increase soil gas pressure facilitating radon infiltration.
            </p>

            <div className='bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl my-8 not-prose'>
              <h4 className='text-lg font-bold text-teal-900 mb-2'>Key Insight</h4>
              <p className='text-teal-800'>
                However, waterproofing alone is not sufficient for high radon levels. It complements dedicated mitigation systems like sub-slab depressurization, where pipes and fans vent radon outdoors. Integrated approaches ensure compatibility, such as using radon-compatible drains that maintain system seals.
              </p>
            </div>

            <p>
              Case studies show radon reductions after waterproofing, but always combine with testing and mitigation for complete protection.
            </p>
          </div>

          {/* Best Practices Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Best Practices for Integrated Radon Mitigation and Waterproofing</h2>

            <p>Follow EPA guidelines for effective solutions.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-8'>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>🏠 For New Construction</h3>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Install a 4-inch gravel layer under the slab.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Place 6-mil plastic vapor barriers over gravel.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Use vent pipes from sub-slab to roof.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Seal all cracks, joints, and penetrations with polyurethane caulk.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>🛠️ For Existing Homes</h3>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Seal foundation cracks with epoxy or caulk.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Install interior drainage with sealed flanges for radon compatibility.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Add sub-slab depressurization systems with fans.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Encapsulate crawl spaces with vapor barriers and ventilation.</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                    <p className='text-slate-700'>Improve exterior drainage to reduce soil moisture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 not-prose'>
              <h4 className='text-lg font-bold text-amber-900 mb-2'>💡 Professional Tip</h4>
              <p className='text-amber-800'>
                Always use certified professionals for installation to ensure systems work together without compromising air quality.
              </p>
            </div>
          </div>

          {/* Radon Testing Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Radon Testing: When and How to Test Your Home</h2>

            <p>
              Test every home regardless of location, as levels vary. The EPA recommends testing every two years or after major renovations. Test in the lowest lived-in level, like basements. If levels exceed 4 pCi/L, mitigate immediately. Retest after installation to confirm reductions of up to 99 percent.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 mt-10 mb-4'>Testing Methods</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8'>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Short-Term Kits</p>
                <p className='text-2xl font-bold text-slate-900 mb-2'>$20–$50</p>
                <p className='text-slate-600 text-sm'>2 to 7 days for initial screening. Good for a quick baseline reading.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Long-Term Kits</p>
                <p className='text-2xl font-bold text-slate-900 mb-2'>$30–$100</p>
                <p className='text-slate-600 text-sm'>3 to 12 months for accurate averages. Recommended for definitive results.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'>Professional Monitors</p>
                <p className='text-2xl font-bold text-slate-900 mb-2'>$150+</p>
                <p className='text-slate-600 text-sm'>Digital real-time data. Best for ongoing monitoring and verification.</p>
              </div>
            </div>
          </div>

          {/* Costs Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Costs of Radon Mitigation and Basement Waterproofing (2026 Estimates)</h2>

            <p>Costs vary by home size, location, and system complexity.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-8'>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>Radon Mitigation Costs</h3>
                <p className='text-3xl font-bold text-teal-600 mb-4'>$1,200–$1,800 <span className='text-sm font-normal text-slate-500'>average</span></p>
                <div className='space-y-2'>
                  <p className='text-slate-700 text-sm'>Simple slab systems: $800–$1,500</p>
                  <p className='text-slate-700 text-sm'>Complex basement systems: $1,500–$2,500+</p>
                </div>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>Basement Waterproofing Costs</h3>
                <p className='text-3xl font-bold text-teal-600 mb-4'>$5,000–$5,228 <span className='text-sm font-normal text-slate-500'>average</span></p>
                <div className='space-y-2'>
                  <p className='text-slate-700 text-sm'>Interior drainage: $1,500–$7,000</p>
                  <p className='text-slate-700 text-sm'>Exterior membranes: $10,000+ for full excavation</p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 mt-10 mb-4'>Combined Systems Cost Comparison</h3>
            <div className='overflow-x-auto not-prose my-8'>
              <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm'>
                <thead>
                  <tr className='bg-slate-900 text-white'>
                    <th className='px-6 py-4 text-left font-bold'>System Type</th>
                    <th className='px-6 py-4 text-left font-bold'>Average Cost (2026)</th>
                    <th className='px-6 py-4 text-left font-bold'>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-100'>
                    <td className='px-6 py-4 font-medium text-slate-900'>Radon Mitigation Only</td>
                    <td className='px-6 py-4 text-slate-700'>$1,200–$1,800</td>
                    <td className='px-6 py-4 text-slate-600'>Includes fan and venting</td>
                  </tr>
                  <tr className='border-b border-slate-100 bg-slate-50'>
                    <td className='px-6 py-4 font-medium text-slate-900'>Waterproofing Only</td>
                    <td className='px-6 py-4 text-slate-700'>$5,000–$7,000</td>
                    <td className='px-6 py-4 text-slate-600'>Interior methods</td>
                  </tr>
                  <tr className='border-b border-slate-100'>
                    <td className='px-6 py-4 font-medium text-slate-900'>Integrated Radon + Waterproofing</td>
                    <td className='px-6 py-4 text-teal-700 font-bold'>$6,000–$10,000</td>
                    <td className='px-6 py-4 text-slate-600'>Seals both issues</td>
                  </tr>
                  <tr className='bg-slate-50'>
                    <td className='px-6 py-4 font-medium text-slate-900'>Testing Kits</td>
                    <td className='px-6 py-4 text-slate-700'>$20–$100</td>
                    <td className='px-6 py-4 text-slate-600'>DIY options</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ROI includes health benefits, reduced repair costs, and higher home value — up to $5,000 in radon-safe homes.
            </p>
          </div>

          {/* DIY vs Professional */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>DIY Versus Professional Installation</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-8'>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>DIY Approach</h3>
                <p className='text-2xl font-bold text-slate-600 mb-4'>$100–$500</p>
                <div className='space-y-2'>
                  <p className='text-slate-700 text-sm'>Suitable for sealing small cracks only.</p>
                  <p className='text-red-600 text-sm font-medium'>May miss hidden issues and could void warranties.</p>
                </div>
              </div>
              <div className='bg-teal-50 border border-teal-200 rounded-2xl p-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>Professional Services</h3>
                <p className='text-2xl font-bold text-teal-600 mb-4'>Recommended</p>
                <div className='space-y-2'>
                  <p className='text-slate-700 text-sm'>Ensures compliance with codes and proper integration.</p>
                  <p className='text-slate-700 text-sm'>Guarantees often 10 to 25 years.</p>
                  <p className='text-teal-700 text-sm font-medium'>Use certified radon mitigators from EPA or state lists for safety.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regulations Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Regulations and EPA Guidelines for Radon</h2>

            <div className='space-y-4 not-prose my-8'>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                <p className='text-slate-700'>EPA sets the action level at 4 pCi/L but notes risks at lower levels.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                <p className='text-slate-700'>Some states require radon disclosure in real estate transactions.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                <p className='text-slate-700'>New homes in high-risk zones should include radon-resistant features per EPA standards.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>✔</span>
                <p className='text-slate-700'>Check local building codes for specific requirements in your area.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
            <div className='space-y-8 not-prose'>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Does basement waterproofing eliminate radon?</h4>
                <p className='text-slate-600 leading-relaxed'>No, it reduces entry but dedicated mitigation is needed for high levels. Combine both for best results.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Can foundation cracks increase radon levels?</h4>
                <p className='text-slate-600 leading-relaxed'>Yes, even small cracks allow radon infiltration, especially with negative indoor pressure.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>How often should I test for radon?</h4>
                <p className='text-slate-600 leading-relaxed'>Every two years or after waterproofing, renovations, or if you notice musty odors.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Is radon mitigation worth the cost?</h4>
                <p className='text-slate-600 leading-relaxed'>Yes, it prevents lung cancer risks and adds home value, with low ongoing costs of $50–$100 yearly for fan electricity.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>What if my home has a crawl space?</h4>
                <p className='text-slate-600 leading-relaxed'>Encapsulate with vapor barriers and add ventilation or depressurization systems.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Are there eco-friendly options?</h4>
                <p className='text-slate-600 leading-relaxed'>Yes, use low-energy fans and sustainable sealants. Mitigation reduces overall health impacts.</p>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Final Thoughts</h2>
            <p>
              Addressing radon and waterproofing together protects your health, home, and investment. Start with radon testing, then consult professionals for tailored solutions. Proper sealing and mitigation can reduce risks significantly, ensuring peace of mind.
            </p>
            <p>
              For personalized advice, visit EPA.gov or contact local experts. Stay safe and dry.
            </p>
          </div>

          {/* Lead Form CTA */}
          <div className='bg-slate-900 rounded-[2rem] p-12 text-white mt-20 relative overflow-hidden shadow-2xl not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get Expert Radon & Waterproofing Advice</h2>
              <p className='text-teal-100 text-lg mb-10'>
                Connect with certified radon mitigators and waterproofing professionals for a free assessment of your home.
              </p>
              <div className='bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

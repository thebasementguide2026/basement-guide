import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radon and Basement Waterproofing: How Sealing Reduces Radon Risks',
  description: 'Learn how basement waterproofing helps reduce radon gas levels. Explore radon entry points, mitigation systems, testing methods, and integrated solutions updated for 2026.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does basement waterproofing eliminate radon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, basement waterproofing does not eliminate radon on its own. Waterproofing seals foundation cracks, construction joints, and pipe penetrations that serve as radon entry points, and studies show this can reduce radon levels by up to 50 percent in some homes. However, sealing alone cannot address radon that enters through porous concrete or block walls, or through soil gas pressure that finds new pathways over time. For homes with radon levels at or above the EPA action threshold of 4 pCi/L, a dedicated sub-slab depressurization system is required alongside waterproofing. The two approaches work best as an integrated system — waterproofing reduces entry points while active mitigation removes any radon that does enter. See our radon testing and mitigation guide for a full breakdown of mitigation system types.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foundation cracks increase radon levels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, foundation cracks are one of the primary pathways through which radon enters a home. Homes act like low-pressure vacuums relative to the surrounding soil, and radon-laden soil gas is pulled inward through any available opening, including hairline cracks that may not be visible to the naked eye. Even a small crack in a concrete floor or wall can allow significant radon infiltration, particularly in homes with high subsurface uranium concentrations or in wet soil conditions where gas is displaced upward toward the foundation. Hydrostatic pressure from groundwater can widen existing cracks over time, increasing both water intrusion and radon entry simultaneously. Sealing foundation cracks with epoxy or polyurethane is one of the first steps in both a waterproofing and radon mitigation program. See our foundation crack repair cost guide for pricing by crack type and severity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I test for radon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EPA recommends testing your home for radon every two years under normal conditions. You should also test after any waterproofing work, foundation repairs, or major renovations that alter the basement structure, because these changes can affect how soil gas moves into and through the home. If you install or modify a radon mitigation system, retest within 24 hours of installation and again 30 days later to confirm the system is performing correctly. Homes in EPA Zone 1 (high radon potential areas including much of the Midwest, Northeast, and Rocky Mountain regions) should prioritize more frequent testing given the elevated baseline risk. Short-term test kits ($20 to $50) are suitable for a quick screening after renovations, while long-term kits (3 to 12 months) provide the most accurate average reading for ongoing monitoring. See our radon testing and mitigation guide for a full comparison of testing methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is radon mitigation worth the cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, radon mitigation is one of the highest-return health and home investments available to a homeowner. A standard sub-slab depressurization system costs $1,200 to $1,800 installed and can reduce radon levels by up to 99 percent, virtually eliminating the lung cancer risk associated with long-term radon exposure. The EPA estimates radon causes approximately 21,000 lung cancer deaths annually in the United States, making it the second leading cause of lung cancer and the leading cause among non-smokers. Beyond the health benefits, radon mitigation adds measurable resale value — homes with documented mitigation systems sell faster and at higher prices in radon-prone regions because buyers increasingly test for radon during due diligence. Ongoing operating costs are minimal at $50 to $100 per year in fan electricity. See our waterproofing and home appraisal value guide for how mitigation and waterproofing together affect appraisal outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my home has a crawl space?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crawl spaces are high-risk entry points for radon because they sit directly over bare soil and typically lack the concrete barrier that slows radon infiltration in slab or basement foundations. The standard approach for crawl space radon control is full encapsulation — sealing the floor and walls with a heavy-duty vapor barrier (minimum 6-mil, ideally 20-mil reinforced polyethylene) and installing a sub-membrane depressurization system that vents soil gas to the exterior. Ventilation alone is not sufficient in high-radon areas because it does not address the pressure differential that draws soil gas into the living space. Encapsulation also addresses moisture simultaneously, making it the most efficient combined solution for crawl space homes. After encapsulation and depressurization installation, retest radon levels to confirm the system is achieving the target reduction. See our crawl space encapsulation guide for a full breakdown of methods and costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there eco-friendly options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, modern radon mitigation and waterproofing systems offer several lower-impact options. Energy-efficient radon mitigation fans use as little as 20 to 30 watts — comparable to a standard light bulb — and some manufacturers offer Energy Star-rated models that minimize electricity consumption over the system\'s 10 to 20 year lifespan. For waterproofing, crystalline waterproofing compounds are a sustainable alternative to membrane-based systems because they become a permanent part of the concrete structure rather than requiring replacement over time. Low-VOC and water-based sealants and caulks are widely available for sealing cracks and penetrations without introducing additional indoor air quality concerns during installation. Choosing a contractor who installs radon-compatible interior drainage systems with sealed flanges avoids the need to retrofit the drainage system later if radon mitigation is added. See our crystalline waterproofing guide for details on that approach.',
      },
    },
  ],
}

export default function RadonWaterproofingArticle() {
  return (
    <div className='bg-white min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
                    src='/Radon and waterproofing.jpg'
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
            Radon gas poses a serious health threat in many homes while basement water damage can lead to costly repairs and <Link href="/articles/how-to-prevent-basement-mold" className="text-teal-400 underline hover:text-teal-300">mold growth</Link>. These issues often share common entry points through <Link href="/articles/types-of-foundation-cracks" className="text-teal-400 underline hover:text-teal-300">foundation cracks</Link> and gaps. Basement waterproofing not only protects against moisture but also plays a key role in radon mitigation by sealing those vulnerabilities.
          </p>

          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Radon and basement waterproofing are addressed together because they share the same entry points into a home: foundation cracks, construction joints, gaps around pipe penetrations, and porous block walls. Radon is a radioactive gas produced by the natural decay of uranium in soil and rock, and it moves into homes through the same pathways that allow groundwater and soil moisture to infiltrate a foundation. Basement waterproofing reduces radon infiltration by sealing these shared vulnerabilities, but it is not a substitute for a dedicated radon mitigation system when levels exceed the EPA action threshold of 4 picocuries per liter. Understanding where the two systems overlap &mdash; and where waterproofing ends and active mitigation must begin &mdash; is the foundation of an effective integrated approach.
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
                <p className='text-slate-700'><Link href="/articles/basement-vs-crawl-space-vs-slab" className="text-teal-400 underline hover:text-teal-300">Crawl spaces</Link> and unfinished basements</p>
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
                <p className='text-slate-700'><Link href="/articles/french-drain-cost" className="text-teal-400 underline hover:text-teal-300">French drains</Link> or <Link href="/articles/sump-pump-buying-guide" className="text-teal-400 underline hover:text-teal-300">sump pumps</Link> to collect and redirect water away from the foundation.</p>
              </div>
              <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
                <p className='text-teal-700 font-bold text-sm uppercase mb-2'><Link href="/articles/interior-vs-exterior-waterproofing" className="text-teal-400 underline hover:text-teal-300">Exterior Membranes</Link></p>
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
                    <p className='text-slate-700'>Seal <Link href="/articles/foundation-crack-repair-cost" className="text-teal-400 underline hover:text-teal-300">foundation cracks</Link> with epoxy or caulk.</p>
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

                      <div className='bg-teal-50 rounded-xl p-6 border border-teal-200 mt-8'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Our Pick</span>
                <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Home Testing</span>
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Affordable Digital Radon Detector</h3>
              <p className='text-slate-600 mb-4'>For quick peace of mind, a plug-in digital radon detector gives you continuous readings without lab fees. Keep one running in your basement year-round to catch any changes early.</p>
              <a href='https://amzn.to/4rMpXDV' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm'>Check Price on Amazon →</a>
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
              ROI includes health benefits, reduced repair costs, and higher <Link href="/articles/waterproofing-home-appraisal-value" className="text-teal-400 underline hover:text-teal-300">home value</Link> — up to $5,000 in radon-safe homes.
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

          {/* Which Solution Does Your Home Need */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Which Solution Does Your Home Need</h2>
            <div className='overflow-x-auto not-prose'>
              <table className='w-full border-collapse text-sm'>
                <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Your Situation</th><th className='px-4 py-3 text-left font-semibold'>Radon Action Needed</th><th className='px-4 py-3 text-left font-semibold'>Waterproofing Action Needed</th></tr></thead>
                <tbody className='divide-y divide-gray-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Radon below 2 pCi/L, dry basement</td><td className='px-4 py-3 text-slate-600'>Test every 2 years, no mitigation required</td><td className='px-4 py-3 text-slate-600'>Maintain existing waterproofing, inspect annually</td></tr>
                  <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Radon 2 to 4 pCi/L, dry basement</td><td className='px-4 py-3 text-slate-600'>Consider mitigation; retest in 12 months</td><td className='px-4 py-3 text-slate-600'>Seal any visible cracks as a precaution</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Radon at or above 4 pCi/L, dry basement</td><td className='px-4 py-3 text-slate-600'>Install sub-slab depressurization immediately</td><td className='px-4 py-3 text-slate-600'>Seal all cracks and penetrations as part of mitigation prep</td></tr>
                  <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Radon below 2 pCi/L, wet or leaking basement</td><td className='px-4 py-3 text-slate-600'>Retest after waterproofing is complete</td><td className='px-4 py-3 text-slate-600'>Full interior drainage and waterproofing required</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Radon at or above 4 pCi/L, wet or leaking basement</td><td className='px-4 py-3 text-slate-600'>Install integrated mitigation and waterproofing system together</td><td className='px-4 py-3 text-slate-600'>Radon-compatible drainage with sealed flanges required</td></tr>
                  <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Crawl space foundation, any radon level</td><td className='px-4 py-3 text-slate-600'>Sub-membrane depressurization after encapsulation</td><td className='px-4 py-3 text-slate-600'>Full crawl space encapsulation with 20-mil vapor barrier</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>New construction in high-radon zone</td><td className='px-4 py-3 text-slate-600'>Install RRNC features during build</td><td className='px-4 py-3 text-slate-600'>Install vapor barrier and sealed sub-slab vent pipe</td></tr>
                  <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Post-renovation radon spike</td><td className='px-4 py-3 text-slate-600'>Retest immediately; install or extend SSD system</td><td className='px-4 py-3 text-slate-600'>Inspect for new cracks or disturbed seals from renovation work</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Foundation cracks present, untested for radon</td><td className='px-4 py-3 text-slate-600'>Test before and after crack repair</td><td className='px-4 py-3 text-slate-600'>Seal cracks with epoxy or polyurethane injection</td></tr>
                  <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Planning to sell home</td><td className='px-4 py-3 text-slate-600'>Test and mitigate if at or above 4 pCi/L; document results</td><td className='px-4 py-3 text-slate-600'>Document waterproofing work for buyer disclosure package</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Existing mitigation system, radon rising</td><td className='px-4 py-3 text-slate-600'>Service fan, check pipe seals, retest</td><td className='px-4 py-3 text-slate-600'>Inspect for new cracks or drainage changes affecting sub-slab pressure</td></tr>
                  <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>High water table, wet soil conditions</td><td className='px-4 py-3 text-slate-600'>Higher radon risk &mdash; test more frequently</td><td className='px-4 py-3 text-slate-600'>Exterior grading, French drain, and interior drainage system</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Glossary */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Reference</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Glossary</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Glossary</h2>
            <div className='space-y-4 not-prose'>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Radon</h4>
                <p className='text-slate-600'>A naturally occurring radioactive gas produced by the decay of uranium in soil, rock, and groundwater, classified by the EPA as a Group A human carcinogen. Radon is colorless, odorless, and tasteless, making it undetectable without testing equipment. It is the second leading cause of lung cancer in the United States, responsible for an estimated 21,000 deaths annually.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Sub-slab depressurization (SSD)</h4>
                <p className='text-slate-600'>The most effective and widely used active radon mitigation method, in which a pipe is inserted through the concrete slab and connected to a fan that continuously draws soil gas from beneath the foundation and vents it to the exterior. SSD systems reduce radon levels by up to 99 percent in most installations and can be installed in most slab and basement foundations regardless of construction type. See our <Link href='/articles/radon-testing-and-mitigation' className='text-teal-400 underline hover:text-teal-300'>radon testing and mitigation guide</Link> for a full breakdown of system types and costs.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Picocurie per liter (pCi/L)</h4>
                <p className='text-slate-600'>The unit used to measure radon concentration in indoor air, where one picocurie represents approximately 2.2 radioactive decay events per minute per liter of air. The EPA recommends radon mitigation action when levels reach 4 pCi/L and considers levels between 2 and 4 pCi/L worth addressing given the cumulative risk of long-term exposure. The average indoor radon level in the United States is approximately 1.3 pCi/L.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Hydrostatic pressure</h4>
                <p className='text-slate-600'>The force exerted by groundwater in saturated soil against a foundation wall or floor slab. Hydrostatic pressure is the primary driver of both water intrusion and radon infiltration in below-grade spaces, because it creates the pressure differential that pushes soil gas and moisture through foundation cracks and porous concrete. Reducing hydrostatic pressure through <Link href='/articles/french-drain-cost' className='text-teal-400 underline hover:text-teal-300'>exterior grading, drainage improvements</Link>, and waterproofing reduces both water and radon entry simultaneously.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Vapor barrier</h4>
                <p className='text-slate-600'>A sheet of polyethylene film installed over bare soil in crawl spaces or under concrete slabs to block moisture and soil gas from migrating into the living space. Vapor barriers used in radon mitigation applications must be rated at a minimum of 6 mil thickness, though 20-mil reinforced barriers are preferred for crawl space encapsulation because they resist puncture during installation and long-term use. See our <Link href='/articles/best-vapor-barriers' className='text-teal-400 underline hover:text-teal-300'>best vapor barriers guide</Link> for product recommendations by application.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Epoxy injection</h4>
                <p className='text-slate-600'>A crack repair method in which structural epoxy resin is injected under pressure into foundation cracks to bond the crack faces together and restore the structural integrity of the concrete. Epoxy injection is preferred for structural cracks that have compromised the load-bearing capacity of the wall, while polyurethane foam injection is preferred for active water-leaking cracks because it expands on contact with moisture. Both methods seal radon entry points as part of the repair. See our <Link href='/articles/foundation-crack-repair-cost' className='text-teal-400 underline hover:text-teal-300'>foundation crack repair cost guide</Link> for pricing by crack type.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Radon-resistant new construction (RRNC)</h4>
                <p className='text-slate-600'>A set of building practices recommended by the EPA for new homes in high-radon areas, including a 4-inch gravel layer under the slab, a 6-mil polyethylene vapor barrier over the gravel, a vertical vent pipe from the sub-slab through the roof, and sealed joints and penetrations. RRNC features cost approximately $500 to $2,500 to include during construction and make it straightforward to activate an active mitigation system later if testing shows elevated levels. Homes built with RRNC features typically test lower for radon than comparable homes without them.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Soil gas</h4>
                <p className='text-slate-600'>The mixture of gases &mdash; including radon, carbon dioxide, methane, and water vapor &mdash; that occupies the pore spaces between soil particles beneath and around a foundation. Soil gas moves toward lower pressure zones, which means it is continuously drawn toward the interior of a home whenever indoor air pressure is lower than subsurface pressure. Waterproofing and active depressurization systems both work by interrupting the pathways through which soil gas enters the structure.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Integrated mitigation system</h4>
                <p className='text-slate-600'>A combined approach in which basement waterproofing and radon mitigation are designed and installed to work together rather than as independent systems. Integrated systems use radon-compatible interior drainage channels with sealed flanges that maintain the sub-slab pressure field required for effective depressurization, and sealants and vapor barriers that address both moisture and gas entry simultaneously. This approach avoids the common problem of waterproofing installations that inadvertently compromise a previously functioning radon mitigation system by disrupting sub-slab airflow.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
            <div className='space-y-8 not-prose'>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Does basement waterproofing eliminate radon?</h4>
                <p className='text-slate-600 leading-relaxed'>No, basement waterproofing does not eliminate radon on its own. Waterproofing seals foundation cracks, construction joints, and pipe penetrations that serve as radon entry points, and studies show this can reduce radon levels by up to 50 percent in some homes. However, sealing alone cannot address radon that enters through porous concrete or block walls, or through soil gas pressure that finds new pathways over time. For homes with radon levels at or above the EPA action threshold of 4 pCi/L, a dedicated sub-slab depressurization system is required alongside waterproofing. The two approaches work best as an integrated system &mdash; waterproofing reduces entry points while active mitigation removes any radon that does enter. See our <Link href='/articles/radon-testing-and-mitigation' className='text-teal-400 underline hover:text-teal-300'>radon testing and mitigation guide</Link> for a full breakdown of mitigation system types.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Can foundation cracks increase radon levels?</h4>
                <p className='text-slate-600 leading-relaxed'>Yes, foundation cracks are one of the primary pathways through which radon enters a home. Homes act like low-pressure vacuums relative to the surrounding soil, and radon-laden soil gas is pulled inward through any available opening, including hairline cracks that may not be visible to the naked eye. Even a small crack in a concrete floor or wall can allow significant radon infiltration, particularly in homes with high subsurface uranium concentrations or in wet soil conditions where gas is displaced upward toward the foundation. Hydrostatic pressure from groundwater can widen existing cracks over time, increasing both water intrusion and radon entry simultaneously. Sealing foundation cracks with epoxy or polyurethane is one of the first steps in both a waterproofing and radon mitigation program. See our <Link href='/articles/foundation-crack-repair-cost' className='text-teal-400 underline hover:text-teal-300'>foundation crack repair cost guide</Link> for pricing by crack type and severity.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>How often should I test for radon?</h4>
                <p className='text-slate-600 leading-relaxed'>The EPA recommends testing your home for radon every two years under normal conditions. You should also test after any waterproofing work, foundation repairs, or major renovations that alter the basement structure, because these changes can affect how soil gas moves into and through the home. If you install or modify a radon mitigation system, retest within 24 hours of installation and again 30 days later to confirm the system is performing correctly. Homes in EPA Zone 1 (high radon potential areas including much of the Midwest, Northeast, and Rocky Mountain regions) should prioritize more frequent testing given the elevated baseline risk. Short-term test kits ($20 to $50) are suitable for a quick screening after renovations, while long-term kits (3 to 12 months) provide the most accurate average reading for ongoing monitoring. See our <Link href='/articles/radon-testing-and-mitigation' className='text-teal-400 underline hover:text-teal-300'>radon testing and mitigation guide</Link> for a full comparison of testing methods.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Is radon mitigation worth the cost?</h4>
                <p className='text-slate-600 leading-relaxed'>Yes, radon mitigation is one of the highest-return health and home investments available to a homeowner. A standard sub-slab depressurization system costs $1,200 to $1,800 installed and can reduce radon levels by up to 99 percent, virtually eliminating the lung cancer risk associated with long-term radon exposure. The EPA estimates radon causes approximately 21,000 lung cancer deaths annually in the United States, making it the second leading cause of lung cancer and the leading cause among non-smokers. Beyond the health benefits, radon mitigation adds measurable resale value &mdash; homes with documented mitigation systems sell faster and at higher prices in radon-prone regions because buyers increasingly test for radon during due diligence. Ongoing operating costs are minimal at $50 to $100 per year in fan electricity. See our <Link href='/articles/waterproofing-home-appraisal-value' className='text-teal-400 underline hover:text-teal-300'>waterproofing and home appraisal value guide</Link> for how mitigation and waterproofing together affect appraisal outcomes.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>What if my home has a crawl space?</h4>
                <p className='text-slate-600 leading-relaxed'>Crawl spaces are high-risk entry points for radon because they sit directly over bare soil and typically lack the concrete barrier that slows radon infiltration in slab or basement foundations. The standard approach for crawl space radon control is full encapsulation &mdash; sealing the floor and walls with a heavy-duty vapor barrier (minimum 6-mil, ideally 20-mil reinforced polyethylene) and installing a sub-membrane depressurization system that vents soil gas to the exterior. Ventilation alone is not sufficient in high-radon areas because it does not address the pressure differential that draws soil gas into the living space. Encapsulation also addresses moisture simultaneously, making it the most efficient combined solution for crawl space homes. After encapsulation and depressurization installation, retest radon levels to confirm the system is achieving the target reduction. See our <Link href='/articles/crawl-space-encapsulation-guide' className='text-teal-400 underline hover:text-teal-300'>crawl space encapsulation guide</Link> for a full breakdown of methods and costs.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Are there eco-friendly options?</h4>
                <p className='text-slate-600 leading-relaxed'>Yes, modern radon mitigation and waterproofing systems offer several lower-impact options. Energy-efficient radon mitigation fans use as little as 20 to 30 watts &mdash; comparable to a standard light bulb &mdash; and some manufacturers offer Energy Star-rated models that minimize electricity consumption over the system&apos;s 10 to 20 year lifespan. For waterproofing, crystalline waterproofing compounds are a sustainable alternative to membrane-based systems because they become a permanent part of the concrete structure rather than requiring replacement over time. Low-VOC and water-based sealants and caulks are widely available for sealing cracks and penetrations without introducing additional indoor air quality concerns during installation. Choosing a contractor who installs radon-compatible interior drainage systems with sealed flanges avoids the need to retrofit the drainage system later if radon mitigation is added. See our <Link href='/articles/crystalline-waterproofing' className='text-teal-400 underline hover:text-teal-300'>crystalline waterproofing guide</Link> for details on that approach.</p>
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

          {/* Related Guides */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>

            <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>On thebasement.guide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-10'>
              <Link href='/articles/radon-testing-and-mitigation' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Radon Testing and Mitigation Guide</h4>
                <p className='text-slate-600 text-sm'>The dedicated companion to this article covering radon testing methods, mitigation system types, sub-slab depressurization installation, and how to verify your system is performing correctly after installation.</p>
              </Link>
              <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Complete Basement Waterproofing Guide</h4>
                <p className='text-slate-600 text-sm'>The full waterproofing reference covering every method, material, and system type, and how to choose the right approach for your foundation type and water intrusion source.</p>
              </Link>
              <Link href='/articles/basement-waterproofing-cost' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Basement Waterproofing Cost Guide</h4>
                <p className='text-slate-600 text-sm'>What professional waterproofing costs in 2026 by method, basement size, and region, including how to evaluate contractor bids for integrated radon and waterproofing projects.</p>
              </Link>
              <Link href='/articles/interior-vs-exterior-waterproofing' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Interior vs Exterior Waterproofing</h4>
                <p className='text-slate-600 text-sm'>A full comparison of interior drainage systems and exterior membrane approaches, including which is compatible with radon mitigation and which can inadvertently disrupt sub-slab depressurization.</p>
              </Link>
              <Link href='/articles/types-of-foundation-cracks' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Types of Foundation Cracks</h4>
                <p className='text-slate-600 text-sm'>How to identify which cracks are cosmetic and which are structural, and why both types matter equally as radon and water entry points regardless of their structural significance.</p>
              </Link>
              <Link href='/articles/foundation-crack-repair-cost' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Foundation Crack Repair Cost</h4>
                <p className='text-slate-600 text-sm'>Pricing for epoxy injection, polyurethane foam injection, and carbon fiber reinforcement by crack type and severity, relevant for budgeting the crack sealing phase of an integrated mitigation project.</p>
              </Link>
              <Link href='/articles/crawl-space-encapsulation-guide' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Crawl Space Encapsulation Guide</h4>
                <p className='text-slate-600 text-sm'>The complete guide to crawl space vapor barriers, sub-membrane depressurization, and ventilation for homes where the crawl space is the primary radon and moisture entry point.</p>
              </Link>
              <Link href='/articles/how-to-prevent-basement-mold' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h4>
                <p className='text-slate-600 text-sm'>How moisture control and radon mitigation work together to address the two most significant below-grade indoor air quality threats simultaneously.</p>
              </Link>
              <Link href='/articles/basement-humidity-guide' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Basement Humidity Guide</h4>
                <p className='text-slate-600 text-sm'>How to maintain the humidity levels that reduce soil moisture pressure against the foundation, slowing both water intrusion and the soil gas movement that carries radon indoors.</p>
              </Link>
              <Link href='/articles/crystalline-waterproofing' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Crystalline Waterproofing</h4>
                <p className='text-slate-600 text-sm'>A permanent concrete-integrated waterproofing method that seals the porous pathways radon and moisture share through block and poured concrete walls.</p>
              </Link>
              <Link href='/articles/waterproofing-home-appraisal-value' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Waterproofing and Home Appraisal Value</h4>
                <p className='text-slate-600 text-sm'>How documented waterproofing and radon mitigation together affect appraisal outcomes and buyer confidence, particularly in radon-prone regions where buyers routinely test during due diligence.</p>
              </Link>
              <Link href='/articles/basement-flooding-insurance' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Basement Flooding Insurance</h4>
                <p className='text-slate-600 text-sm'>What homeowners insurance covers for water damage and how radon mitigation system damage is treated under standard policies.</p>
              </Link>
              <Link href='/articles/homebuyers-basement-inspection-checklist' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Homebuyer&apos;s Basement Inspection Checklist</h4>
                <p className='text-slate-600 text-sm'>What buyers and inspectors look for in below-grade spaces, including radon test results, mitigation system documentation, and waterproofing warranties.</p>
              </Link>
              <Link href='/articles/interior-basement-drainage-systems' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Interior Basement Drainage Systems</h4>
                <p className='text-slate-600 text-sm'>How to choose and install radon-compatible interior drainage channels with sealed flanges that maintain sub-slab pressure without compromising an active depressurization system.</p>
              </Link>
              <Link href='/articles/best-basement-air-purifiers' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Best Basement Air Purifiers</h4>
                <p className='text-slate-600 text-sm'>Supplemental air quality options for below-grade spaces where radon levels are being actively managed but additional particulate and VOC filtration is desired.</p>
              </Link>
            </div>

            <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>From Our Network</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-10'>
              <a href='https://theseptic.guide/guides/selling-home-with-septic-system' target='_blank' rel='noopener noreferrer' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Selling a Home with a Septic System &middot; theseptic.guide</h4>
                <p className='text-slate-600 text-sm'>Radon mitigation documentation and septic inspection records are the two most commonly requested below-grade disclosures in rural home sales. This guide covers how to prepare the septic side of your disclosure package the same way this article covers the radon and waterproofing side.</p>
              </a>
              <a href='https://theseptic.guide/articles/does-insurance-cover-septic-repair-replacement' target='_blank' rel='noopener noreferrer' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Does Homeowners Insurance Cover Septic Repair? &middot; theseptic.guide</h4>
                <p className='text-slate-600 text-sm'>For homeowners managing multiple below-grade systems, this guide covers how insurance treats septic failures alongside the waterproofing and radon coverage questions covered here.</p>
              </a>
            </div>

            <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>External Resource</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-10'>
              <a href='https://www.epa.gov/radon/citizens-guide-radon-guide-protecting-yourself-and-your-family-radon' target='_blank' rel='noopener noreferrer' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>EPA Radon &mdash; A Citizen&apos;s Guide</h4>
                <p className='text-slate-600 text-sm'>The EPA&apos;s primary consumer resource on radon health risks, testing guidance, action levels, and mitigation options, including the zone maps showing radon potential by county across the United States.</p>
              </a>
            </div>
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

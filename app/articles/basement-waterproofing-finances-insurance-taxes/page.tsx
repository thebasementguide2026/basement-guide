import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Does Homeowners Insurance Cover Basement Waterproofing? Insurance, Taxes & Financing | The Basement Guide',
  description: 'Homeowners insurance rarely covers basement waterproofing. Here is what is covered, whether waterproofing is tax deductible, and financing options when you are paying out of pocket.',
  alternates: { canonical: 'https://thebasement.guide/articles/basement-waterproofing-finances-insurance-taxes' },
}

export default function BasementWaterproofingFinances() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/floodinsurance.jpg'
          alt='Homeowner reviewing basement waterproofing finances and insurance documents'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Financial Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Basement Waterproofing<br />
            <span className='text-teal-400'>& Your Finances</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Insurance coverage, tax deductions, and home value impact — the complete financial picture for 2026.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated March 2026 · 24 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-6 py-16'>

        {/* Back to Guides */}
        <div className='mb-12'>
          <Link href='/guides' className='text-teal-600 hover:text-teal-700 font-medium text-sm'>
            ← Back to Guides
          </Link>
        </div>

        {/* Introduction */}
        <div className='prose prose-lg max-w-none mb-16'>
          <p className='text-xl text-slate-700 leading-relaxed'>
            Basement waterproofing is one of the smartest investments a homeowner can make — but it is also one of the most misunderstood from a financial perspective. Most homeowners assume their insurance covers water damage (it usually does not), that waterproofing is tax-deductible (it depends), and that it adds value to their home (it absolutely does, but the numbers vary widely). This guide breaks down all three financial angles so you can make informed decisions about protecting your home and your wallet.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className='bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16'>
          <h2 className='text-lg font-bold text-slate-900 mb-4'>In This Guide</h2>
          <div className='grid md:grid-cols-3 gap-4'>
            <div>
              <h3 className='font-semibold text-teal-700 mb-2 text-sm uppercase tracking-wide'>Insurance</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li><a href='#what-insurance-covers' className='hover:text-teal-600'>What Insurance Actually Covers</a></li>
                <li><a href='#nfip-flood-insurance' className='hover:text-teal-600'>NFIP Flood Insurance</a></li>
                <li><a href='#water-backup-riders' className='hover:text-teal-600'>Water Backup Riders</a></li>
                <li><a href='#premium-reductions' className='hover:text-teal-600'>Premium Reductions</a></li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-teal-700 mb-2 text-sm uppercase tracking-wide'>Taxes</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li><a href='#capital-improvements' className='hover:text-teal-600'>Capital Improvements vs. Repairs</a></li>
                <li><a href='#home-office-deduction' className='hover:text-teal-600'>Home Office Deductions</a></li>
                <li><a href='#energy-credits' className='hover:text-teal-600'>Energy Efficiency Credits</a></li>
                <li><a href='#rental-property' className='hover:text-teal-600'>Rental Property Rules</a></li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-teal-700 mb-2 text-sm uppercase tracking-wide'>Home Value</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li><a href='#roi-data' className='hover:text-teal-600'>ROI by Project Type</a></li>
                <li><a href='#appraisal-impact' className='hover:text-teal-600'>Appraisal Impact</a></li>
                <li><a href='#buyer-perception' className='hover:text-teal-600'>Buyer Perception</a></li>
                <li><a href='#cost-of-inaction' className='hover:text-teal-600'>Cost of Doing Nothing</a></li>
              </ul>
            </div>
          </div>
        </nav>

                {/* ====== PART 1: INSURANCE ====== */}
        <section id='what-insurance-covers' className='mb-20'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='text-3xl'>🛡️</span>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900'>Part 1: Insurance Coverage</h2>
          </div>
          <p className='text-slate-600 text-lg mb-8'>What your homeowners policy actually covers — and the gaps that leave most basements unprotected.</p>

          {/* What Insurance Covers */}
          <div className='bg-red-50 border border-red-200 rounded-2xl p-8 mb-10'>
            <h3 className='text-xl font-bold text-red-800 mb-3'>The Hard Truth About Standard Homeowners Insurance</h3>
            <p className='text-red-700 mb-4'>Standard homeowners insurance does <strong>not</strong> cover basement waterproofing as preventive maintenance. It also does not cover flooding from groundwater, rising water tables, or surface runoff. These are classified as maintenance responsibilities, not sudden or accidental events.</p>
            <p className='text-red-700'>Your policy typically <strong>does</strong> cover sudden, accidental water damage — such as a burst pipe or a malfunctioning appliance. But the moment water enters from outside (rain, groundwater, overland flooding), you are likely on your own unless you carry additional coverage.</p>
          </div>

          {/* Coverage Matrix */}
          <div className='overflow-x-auto mb-10'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-4 font-bold text-slate-900 border-b-2 border-slate-300'>Scenario</th>
                  <th className='text-center p-4 font-bold text-slate-900 border-b-2 border-slate-300'>Standard Policy</th>
                  <th className='text-center p-4 font-bold text-slate-900 border-b-2 border-slate-300'>With Water Backup Rider</th>
                  <th className='text-center p-4 font-bold text-slate-900 border-b-2 border-slate-300'>With NFIP Flood Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Burst pipe in basement</td>
                  <td className='p-4 text-center text-green-600 font-bold'>✓ Covered</td>
                  <td className='p-4 text-center text-green-600 font-bold'>✓ Covered</td>
                  <td className='p-4 text-center text-slate-400'>N/A</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Sewer/drain backup</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-green-600 font-bold'>✓ Covered</td>
                  <td className='p-4 text-center text-slate-400'>N/A</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Sump pump failure</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-green-600 font-bold'>✓ Covered</td>
                  <td className='p-4 text-center text-slate-400'>N/A</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Storm flooding / rising water</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-green-600 font-bold'>✓ Covered</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Groundwater seepage</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-yellow-600 font-bold'>⚠ Limited</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-4 text-slate-700'>Preventive waterproofing</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                  <td className='p-4 text-center text-red-600 font-bold'>✗ Not Covered</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-600 mb-6'>For a deeper look at what happens when water actually enters your basement and how to file claims, see our <Link href='/articles/basement-flooding-insurance' className='text-teal-600 hover:text-teal-700 font-medium'>basement flooding insurance guide</Link>.</p>
        </section>

                {/* NFIP Flood Insurance */}
        <section id='nfip-flood-insurance' className='mb-16'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>NFIP Flood Insurance: Do You Need It?</h3>
          <p className='text-slate-600 mb-6'>The <a href='https://www.floodsmart.gov/' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:text-teal-700 font-medium'>National Flood Insurance Program (NFIP)</a> is a federal program that provides flood insurance to homeowners in participating communities. If you live in a FEMA-designated flood zone, your mortgage lender may require it. Even if you do not live in a flood zone, NFIP policies are available and increasingly worth considering as weather patterns shift.</p>
          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-blue-50 border border-blue-200 rounded-xl p-6'>
              <h4 className='font-bold text-blue-900 mb-2'>NFIP Building Coverage</h4>
              <p className='text-blue-800 text-sm mb-2'>Up to <strong>$250,000</strong> for residential structures</p>
              <ul className='text-blue-700 text-sm space-y-1'>
                <li>• Foundation walls and anchorage systems</li>
                <li>• Electrical and plumbing systems</li>
                <li>• HVAC, water heaters, and fuel tanks</li>
                <li>• Permanently installed carpeting, cabinets</li>
                <li>• Sump pumps and well water tanks</li>
              </ul>
            </div>
            <div className='bg-blue-50 border border-blue-200 rounded-xl p-6'>
              <h4 className='font-bold text-blue-900 mb-2'>NFIP Contents Coverage</h4>
              <p className='text-blue-800 text-sm mb-2'>Up to <strong>$100,000</strong> for personal property</p>
              <ul className='text-blue-700 text-sm space-y-1'>
                <li>• Clothing, furniture, electronics</li>
                <li>• Portable appliances (microwaves, etc.)</li>
                <li>• Curtains, rugs, and portable AC units</li>
                <li>• Valuables up to $2,500 total</li>
                <li>• Washer and dryer units</li>
              </ul>
            </div>
          </div>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6'>
            <p className='text-amber-800 font-medium'><strong>Important:</strong> NFIP policies have a 30-day waiting period before coverage kicks in. You cannot buy a policy when a storm is already approaching and expect immediate protection. Plan ahead.</p>
          </div>
          <p className='text-slate-600'>Average NFIP premium: <strong>$700–$1,500 per year</strong> depending on flood zone, elevation, and coverage level. Private flood insurance may offer better rates or higher limits in some areas.</p>
        </section>

                {/* Water Backup Riders */}
        <section id='water-backup-riders' className='mb-16'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Water Backup Endorsements: The Most Important Add-On</h3>
          <p className='text-slate-600 mb-6'>A water backup rider (also called sewer and drain endorsement) is an add-on to your homeowners policy that covers damage from backed-up sewers, drains, and failed sump pumps. This is the single most cost-effective insurance upgrade for basement protection.</p>
          <div className='bg-green-50 border border-green-200 rounded-xl p-6 mb-6'>
            <div className='grid md:grid-cols-3 gap-4'>
              <div>
                <p className='text-green-800 font-bold text-lg'>$30–$70/year</p>
                <p className='text-green-700 text-sm'>Typical rider cost</p>
              </div>
              <div>
                <p className='text-green-800 font-bold text-lg'>$5,000–$25,000</p>
                <p className='text-green-700 text-sm'>Typical coverage limit</p>
              </div>
              <div>
                <p className='text-green-800 font-bold text-lg'>Immediate ROI</p>
                <p className='text-green-700 text-sm'>One claim pays for decades of premiums</p>
              </div>
            </div>
          </div>
          <p className='text-slate-600 mb-4'>Ask your insurer about increasing the coverage limit. Many default to $5,000, which may not be enough if you have a finished basement. Upgrading to $25,000–$50,000 in coverage typically costs only $10–$30 more per year.</p>
          <p className='text-slate-600'>If your sump pump is your primary line of defense, pairing this rider with a <Link href='/articles/backup-power-sump-pumps' className='text-teal-600 hover:text-teal-700 font-medium'>battery backup power system</Link> gives you both prevention and financial protection.</p>
        </section>

                {/* Premium Reductions */}
        <section id='premium-reductions' className='mb-20'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>How Waterproofing Can Lower Your Insurance Premiums</h3>
          <p className='text-slate-600 mb-6'>Professional waterproofing installations demonstrate proactive risk reduction to insurers. While not all carriers offer explicit discounts, documented waterproofing systems can help in several ways:</p>
          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='border border-slate-200 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Direct Premium Reductions</h4>
              <ul className='text-slate-600 text-sm space-y-2'>
                <li>• Some insurers offer 5–15% discounts for documented waterproofing systems</li>
                <li>• Installing a <Link href='/articles/smart-sump-pumps-guide' className='text-teal-600 hover:text-teal-700'>smart water leak detection system</Link> may qualify for additional discounts</li>
                <li>• Battery backup sump pumps reduce the risk profile insurers assess</li>
              </ul>
            </div>
            <div className='border border-slate-200 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Indirect Financial Benefits</h4>
              <ul className='text-slate-600 text-sm space-y-2'>
                <li>• Fewer claims means your premiums stay lower over time</li>
                <li>• Avoids non-renewal risk from repeated water damage claims</li>
                <li>• Previous water damage claims can increase premiums 20–40% — waterproofing prevents future claims</li>
              </ul>
            </div>
          </div>
          <p className='text-slate-600'>Keep all receipts, warranties, and installation documentation. Provide copies to your insurer and ask specifically about available discounts for waterproofing and flood mitigation systems.</p>
        </section>

                {/* ====== PART 2: TAXES ====== */}
        <section id='capital-improvements' className='mb-20'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='text-3xl'>💰</span>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900'>Part 2: Tax Implications</h2>
          </div>
          <p className='text-slate-600 text-lg mb-8'>Waterproofing is not directly tax-deductible for most homeowners — but there are important exceptions and strategies that can save you thousands.</p>

          {/* Capital Improvements vs Repairs */}
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Capital Improvements vs. Repairs: Why It Matters</h3>
          <p className='text-slate-600 mb-6'>The IRS distinguishes between repairs (which maintain your home) and capital improvements (which add value, extend its life, or adapt it to new uses). This distinction determines how waterproofing costs affect your taxes when you sell.</p>
          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-slate-50 border border-slate-200 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-3'>🔧 Repairs (Not Deductible)</h4>
              <ul className='text-slate-600 text-sm space-y-2'>
                <li>• Patching a single crack with hydraulic cement</li>
                <li>• Replacing a failed sump pump with same model</li>
                <li>• Reapplying waterproof paint or sealant</li>
                <li>• Clearing a clogged French drain</li>
              </ul>
              <p className='text-slate-500 text-xs mt-3'>These restore the home to its existing condition and are considered maintenance.</p>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-xl p-6'>
              <h4 className='font-bold text-teal-900 mb-3'>🏠 Capital Improvements (Added to Cost Basis)</h4>
              <ul className='text-teal-800 text-sm space-y-2'>
                <li>• Installing a complete interior drainage system</li>
                <li>• Adding exterior waterproofing membrane</li>
                <li>• Installing a new sump pump system where none existed</li>
                <li>• Full <Link href='/articles/crawl-space-encapsulation-guide' className='text-teal-600 hover:text-teal-700'>crawl space encapsulation</Link></li>
              </ul>
              <p className='text-teal-700 text-xs mt-3'>These add value and are added to your cost basis, reducing capital gains tax when you sell.</p>
            </div>
          </div>

          <div className='bg-slate-100 rounded-xl p-6 mb-8'>
            <h4 className='font-bold text-slate-900 mb-2'>How Cost Basis Works: A Quick Example</h4>
            <p className='text-slate-600 text-sm mb-3'>You bought your home for $300,000. Over the years, you spend $12,000 on a full interior waterproofing system (capital improvement). Your adjusted cost basis is now $312,000.</p>
            <p className='text-slate-600 text-sm'>When you sell for $450,000, your taxable gain is $138,000 instead of $150,000 — saving you approximately $3,300 in capital gains tax (at 24% rate). Note: single filers exclude up to $250,000 in gains; married couples exclude up to $500,000.</p>
          </div>
        </section>

                {/* Home Office Deduction */}
        <section id='home-office-deduction' className='mb-16'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Home Office Deduction</h3>
          <p className='text-slate-600 mb-6'>If you use part of your basement regularly and exclusively as your principal place of business, you may be able to deduct a proportional share of waterproofing costs. The IRS allows two methods:</p>
          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div className='border border-slate-200 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Simplified Method</h4>
              <p className='text-slate-600 text-sm'>$5 per square foot of home office space, up to 300 sq ft ($1,500 max deduction). Simple but limited.</p>
            </div>
            <div className='border border-slate-200 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Regular Method</h4>
              <p className='text-slate-600 text-sm'>Calculate the percentage of your home used for business and deduct that percentage of qualifying expenses including waterproofing improvements. More paperwork but potentially larger deduction.</p>
            </div>
          </div>
          <p className='text-slate-500 text-sm'>Example: If your home office occupies 15% of your home and you spend $10,000 on waterproofing, the deductible portion would be $1,500. Consult a tax professional for your specific situation.</p>
        </section>

                {/* Energy Efficiency Credits */}
        <section id='energy-credits' className='mb-16'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Energy Efficiency Tax Credits</h3>
          <p className='text-slate-600 mb-6'>While waterproofing itself does not qualify for energy tax credits, related improvements made during waterproofing projects may. The Inflation Reduction Act extended and expanded residential energy credits through 2032.</p>
          <div className='bg-green-50 border border-green-200 rounded-xl p-6 mb-6'>
            <h4 className='font-bold text-green-900 mb-3'>Qualifying Improvements (Up to $3,200/year in credits)</h4>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <p className='text-green-800 text-sm font-medium mb-1'><a href='https://www.energystar.gov/about/federal-tax-credits/insulation' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:text-teal-700 underline'>Insulation upgrades</a></p>
                <p className='text-green-700 text-xs'>Up to $1,200 credit for adding or upgrading <Link href='/articles/basement-insulation-guide' className='text-teal-600 hover:text-teal-700'>basement insulation</Link> during waterproofing</p>
              </div>
              <div>
                <p className='text-green-800 text-sm font-medium mb-1'><a href='https://www.energystar.gov/' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:text-teal-700 underline'>Energy Star</a> windows and doors</p>
                <p className='text-green-700 text-xs'>Up to $600 credit for upgrading basement egress windows to Energy Star models</p>
              </div>
              <div>
                <p className='text-green-800 text-sm font-medium mb-1'>Heat pump water heaters</p>
                <p className='text-green-700 text-xs'>Up to $2,000 credit if replacing a basement water heater with a heat pump model</p>
              </div>
              <div>
                <p className='text-green-800 text-sm font-medium mb-1'>Electric panel upgrades</p>
                <p className='text-green-700 text-xs'>Up to $600 credit for electrical panel upgrades needed for new equipment</p>
              </div>
            </div>
          </div>
          <p className='text-slate-600'>If you are already opening up walls or floors for waterproofing, it is the ideal time to add <Link href='/articles/spray-foam-vs-rigid-foam-insulation' className='text-teal-600 hover:text-teal-700 font-medium'>spray foam or rigid foam insulation</Link> and capture these credits. File IRS Form 5695 with your annual tax return.</p>
        </section>

                {/* Rental Property */}
        <section id='rental-property' className='mb-20'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Rental Property Tax Rules</h3>
          <p className='text-slate-600 mb-6'>If your basement is a <Link href='/articles/basement-adu-rental-suite' className='text-teal-600 hover:text-teal-700 font-medium'>rental unit or ADU</Link>, the tax rules change significantly in your favor:</p>
          <div className='bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6'>
            <ul className='text-purple-800 text-sm space-y-3'>
              <li><strong>Repairs are deductible immediately</strong> — Fixing a crack, replacing a sump pump, or reapplying sealant on a rental property can be deducted as a business expense in the year incurred.</li>
              <li><strong>Capital improvements are depreciated</strong> — A full waterproofing system on a rental property is depreciated over 27.5 years (residential rental property schedule).</li>
              <li><strong>Proportional deduction</strong> — If only part of your home is rented (e.g., basement apartment), you can deduct the proportional share of whole-house waterproofing costs.</li>
            </ul>
          </div>
          <p className='text-slate-500 text-sm'>Always consult a tax professional. Rental property deductions require proper documentation including receipts, before/after photos, and clear records of business vs. personal use.</p>
        </section>

        {/* ====== PART 3: HOME VALUE ====== */}
        <section id='roi-data' className='mb-20'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='text-3xl'>🏠</span>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900'>Part 3: Home Value Impact</h2>
          </div>
          <p className='text-slate-600 text-lg mb-8'>Waterproofing does not just protect your home — it directly increases its market value. Here is what the data shows.</p>

          {/* ROI Table */}
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>ROI by Waterproofing Project Type</h3>
          <div className='overflow-x-auto mb-10'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-4 font-bold text-slate-900 border-b-2 border-slate-300'>Project</th>
                  <th className='text-center p-4 font-bold text-slate-900 border-b-2 border-slate-300'>Typical Cost</th>
                  <th className='text-center p-4 font-bold text-slate-900 border-b-2 border-slate-300'>Value Added</th>
                  <th className='text-center p-4 font-bold text-slate-900 border-b-2 border-slate-300'>Estimated ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'><Link href='/articles/complete-basement-waterproofing-guide' className='text-teal-600 hover:text-teal-700'>Interior waterproofing system</Link></td>
                  <td className='p-4 text-center text-slate-700'>$3,000–$8,000</td>
                  <td className='p-4 text-center text-slate-700'>$5,000–$15,000</td>
                  <td className='p-4 text-center text-green-600 font-bold'>30–70%</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'><Link href='/articles/interior-vs-exterior-waterproofing' className='text-teal-600 hover:text-teal-700'>Exterior waterproofing</Link></td>
                  <td className='p-4 text-center text-slate-700'>$8,000–$15,000</td>
                  <td className='p-4 text-center text-slate-700'>$10,000–$25,000</td>
                  <td className='p-4 text-center text-green-600 font-bold'>25–65%</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'><Link href='/articles/french-drain-cost' className='text-teal-600 hover:text-teal-700'>French drain system</Link></td>
                  <td className='p-4 text-center text-slate-700'>$1,000–$6,500</td>
                  <td className='p-4 text-center text-slate-700'>$2,000–$8,000</td>
                  <td className='p-4 text-center text-green-600 font-bold'>30–50%</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'><Link href='/articles/sump-pump-cost' className='text-teal-600 hover:text-teal-700'>Sump pump installation</Link></td>
                  <td className='p-4 text-center text-slate-700'>$600–$2,500</td>
                  <td className='p-4 text-center text-slate-700'>$1,000–$3,000</td>
                  <td className='p-4 text-center text-green-600 font-bold'>40–60%</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'><Link href='/articles/foundation-crack-repair-cost' className='text-teal-600 hover:text-teal-700'>Foundation crack repair</Link></td>
                  <td className='p-4 text-center text-slate-700'>$350–$1,500</td>
                  <td className='p-4 text-center text-slate-700'>$500–$2,000</td>
                  <td className='p-4 text-center text-green-600 font-bold'>40–80%</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-4 text-slate-700'>Waterproofing + <Link href='/articles/how-to-finish-a-basement' className='text-teal-600 hover:text-teal-700'>basement finishing</Link></td>
                  <td className='p-4 text-center text-slate-700'>$25,000–$60,000</td>
                  <td className='p-4 text-center text-slate-700'>$30,000–$75,000</td>
                  <td className='p-4 text-center text-green-600 font-bold'>50–100%+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600 mb-6'>For detailed ROI data specific to appraisals, see our <Link href='/articles/waterproofing-home-appraisal-value' className='text-teal-600 hover:text-teal-700 font-medium'>waterproofing and home appraisal value guide</Link>.</p>
        </section>

                {/* Appraisal Impact */}
        <section id='appraisal-impact' className='mb-16'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>How Waterproofing Affects Home Appraisals</h3>
          <p className='text-slate-600 mb-6'>Appraisers evaluate basements on a condition scale. Active water issues or signs of past moisture problems (stains, efflorescence, mold) can reduce your appraised value by $10,000–$30,000 or more. Professional waterproofing flips this dynamic:</p>
          <div className='grid md:grid-cols-3 gap-4 mb-8'>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5 text-center'>
              <p className='text-red-800 font-bold text-lg mb-1'>Wet Basement</p>
              <p className='text-red-600 text-sm'>Value reduction of $10,000–$30,000+</p>
              <p className='text-red-500 text-xs mt-2'>Buyers demand repair credits or walk away</p>
            </div>
            <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-center'>
              <p className='text-yellow-800 font-bold text-lg mb-1'>Signs of Past Water</p>
              <p className='text-yellow-600 text-sm'>Value reduction of $3,000–$10,000</p>
              <p className='text-yellow-500 text-xs mt-2'>Triggers inspection contingencies</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5 text-center'>
              <p className='text-green-800 font-bold text-lg mb-1'>Professionally Waterproofed</p>
              <p className='text-green-600 text-sm'>Value increase of $5,000–$20,000</p>
              <p className='text-green-500 text-xs mt-2'>Transferable warranty boosts buyer confidence</p>
            </div>
          </div>
        </section>

                {/* Buyer Perception */}
        <section id='buyer-perception' className='mb-16'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Buyer Perception: Why Dry Basements Sell Faster</h3>
          <p className='text-slate-600 mb-6'>Beyond the raw numbers, waterproofing transforms how buyers perceive your home. A dry, finished basement is seen as bonus living space. A damp or previously-flooded basement is seen as a liability that triggers requests for repair credits, extended inspections, or lowball offers.</p>
          <div className='border border-slate-200 rounded-xl p-6 mb-6'>
            <h4 className='font-bold text-slate-900 mb-3'>What Sells: Documentation Matters</h4>
            <ul className='text-slate-600 text-sm space-y-2'>
              <li>• Keep all waterproofing warranties — transferable warranties are a major selling point</li>
              <li>• Save before and after photos of waterproofing work</li>
              <li>• Retain invoices and contractor certifications</li>
              <li>• Document any <Link href='/articles/basement-humidity-guide' className='text-teal-600 hover:text-teal-700'>humidity monitoring</Link> data showing consistently dry conditions</li>
              <li>• Include waterproofing details in your <Link href='/articles/homebuyers-basement-inspection-checklist' className='text-teal-600 hover:text-teal-700'>home inspection disclosure</Link></li>
            </ul>
          </div>
        </section>

        {/* Cost of Inaction */}
        <section id='cost-of-inaction' className='mb-20'>
          <h3 className='text-2xl font-bold text-slate-900 mb-4'>The Cost of Doing Nothing</h3>
          <p className='text-slate-600 mb-6'>Ignoring basement water problems does not save money — it compounds losses across insurance, taxes, and home value simultaneously.</p>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-red-50'>
                  <th className='text-left p-4 font-bold text-red-900 border-b-2 border-red-300'>Consequence</th>
                  <th className='text-center p-4 font-bold text-red-900 border-b-2 border-red-300'>Financial Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'><Link href='/articles/mold-remediation-cost' className='text-teal-600 hover:text-teal-700'>Mold remediation</Link></td>
                  <td className='p-4 text-center text-red-600 font-bold'>$500–$10,000+</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'><Link href='/articles/bowing-basement-walls' className='text-teal-600 hover:text-teal-700'>Structural damage</Link> from prolonged moisture</td>
                  <td className='p-4 text-center text-red-600 font-bold'>$5,000–$50,000+</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Insurance premium increases from water claims</td>
                  <td className='p-4 text-center text-red-600 font-bold'>20–40% higher annually</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Home value reduction at sale</td>
                  <td className='p-4 text-center text-red-600 font-bold'>$10,000–$30,000+</td>
                </tr>
                <tr>
                  <td className='p-4 text-slate-700'>Lost usable square footage value</td>
                  <td className='p-4 text-center text-red-600 font-bold'>$20–$50 per sq ft</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600'>Learn how to identify problems before they escalate with our <Link href='/articles/spring-basement-checklist' className='text-teal-600 hover:text-teal-700 font-medium'>spring basement checklist</Link> and <Link href='/articles/how-to-prevent-basement-mold' className='text-teal-600 hover:text-teal-700 font-medium'>mold prevention guide</Link>.</p>
        </section>

                {/* FAQ Section */}
        <section className='mb-20'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <details className='group border border-slate-200 rounded-xl'>
              <summary className='flex items-center justify-between p-6 cursor-pointer'>
                <h3 className='font-bold text-slate-900 pr-4'>Does homeowners insurance cover basement waterproofing?</h3>
                <span className='text-teal-600 group-open:rotate-180 transition-transform'>&#9660;</span>
              </summary>
              <div className='px-6 pb-6 text-slate-600'>
                <p>No. Standard homeowners insurance does not cover preventive waterproofing. It may cover sudden, accidental water damage like burst pipes, but groundwater intrusion, flooding, and sewer backups require separate coverage (NFIP flood policy or water backup rider).</p>
              </div>
            </details>
            <details className='group border border-slate-200 rounded-xl'>
              <summary className='flex items-center justify-between p-6 cursor-pointer'>
                <h3 className='font-bold text-slate-900 pr-4'>Is basement waterproofing tax-deductible?</h3>
                <span className='text-teal-600 group-open:rotate-180 transition-transform'>&#9660;</span>
              </summary>
              <div className='px-6 pb-6 text-slate-600'>
                <p>For most primary residences, waterproofing is not directly deductible. However, it can qualify as a capital improvement that increases your cost basis (reducing capital gains tax when you sell). Exceptions exist for home offices, rental properties, and medical necessity adaptations.</p>
              </div>
            </details>
            <details className='group border border-slate-200 rounded-xl'>
              <summary className='flex items-center justify-between p-6 cursor-pointer'>
                <h3 className='font-bold text-slate-900 pr-4'>How much does waterproofing increase home value?</h3>
                <span className='text-teal-600 group-open:rotate-180 transition-transform'>&#9660;</span>
              </summary>
              <div className='px-6 pb-6 text-slate-600'>
                <p>Professional waterproofing typically returns 30 to 70 percent of its cost in direct home value increase. Combined with basement finishing, the ROI can exceed 100 percent. A dry basement also eliminates the $10,000 to $30,000 or more in value reduction that active water issues cause.</p>
              </div>
            </details>
            <details className='group border border-slate-200 rounded-xl'>
              <summary className='flex items-center justify-between p-6 cursor-pointer'>
                <h3 className='font-bold text-slate-900 pr-4'>Do I need flood insurance if I have waterproofing?</h3>
                <span className='text-teal-600 group-open:rotate-180 transition-transform'>&#9660;</span>
              </summary>
              <div className='px-6 pb-6 text-slate-600'>
                <p>Waterproofing and flood insurance serve different purposes. Waterproofing prevents water from entering your basement. Flood insurance provides financial protection if it does. In flood-prone areas, both are recommended. A water backup rider on your homeowners policy is the minimum additional coverage every basement homeowner should carry.</p>
              </div>
            </details>
            <details className='group border border-slate-200 rounded-xl'>
              <summary className='flex items-center justify-between p-6 cursor-pointer'>
                <h3 className='font-bold text-slate-900 pr-4'>Can I deduct waterproofing costs on a rental property?</h3>
                <span className='text-teal-600 group-open:rotate-180 transition-transform'>&#9660;</span>
              </summary>
              <div className='px-6 pb-6 text-slate-600'>
                <p>Yes, with conditions. Repairs to a rental property (patching, sealant, pump replacement) are deductible in the year incurred. Capital improvements (full systems) must be depreciated over 27.5 years. If the basement is a partial rental (e.g., ADU), you deduct the proportional share.</p>
              </div>
            </details>
            <details className='group border border-slate-200 rounded-xl'>
              <summary className='flex items-center justify-between p-6 cursor-pointer'>
                <h3 className='font-bold text-slate-900 pr-4'>What documentation should I keep for tax and insurance purposes?</h3>
                <span className='text-teal-600 group-open:rotate-180 transition-transform'>&#9660;</span>
              </summary>
              <div className='px-6 pb-6 text-slate-600'>
                <p>Keep all receipts and invoices, contractor licenses and certifications, before and after photos, warranty documents, permits, and inspection reports. These support insurance claims, tax deductions (for qualifying situations), and add value during home sales.</p>
              </div>
            </details>
          </div>
        </section>

                {/* Related Guides */}
        <section className='mb-20'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Related Guides</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/articles/basement-flooding-insurance' className='group block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 group-hover:text-teal-600 mb-2'>Basement Flooding Insurance</h3>
              <p className='text-slate-500 text-sm'>What your policy actually covers when water enters your basement.</p>
            </Link>
            <Link href='/articles/waterproofing-home-appraisal-value' className='group block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 group-hover:text-teal-600 mb-2'>Waterproofing & Home Value</h3>
              <p className='text-slate-500 text-sm'>How much waterproofing adds to your appraisal.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='group block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 group-hover:text-teal-600 mb-2'>Waterproofing Cost Guide</h3>
              <p className='text-slate-500 text-sm'>Full cost breakdown by method for 2026.</p>
            </Link>
            <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='group block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 group-hover:text-teal-600 mb-2'>Hiring a Contractor</h3>
              <p className='text-slate-500 text-sm'>Vet contractors and avoid scams.</p>
            </Link>
            <Link href='/articles/basement-adu-rental-suite' className='group block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 group-hover:text-teal-600 mb-2'>Basement ADU & Rental Suite</h3>
              <p className='text-slate-500 text-sm'>Convert your basement into a legal income-producing unit.</p>
            </Link>
            <Link href='/articles/complete-basement-waterproofing-guide' className='group block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 group-hover:text-teal-600 mb-2'>Complete Waterproofing Guide</h3>
              <p className='text-slate-500 text-sm'>Everything you need to know about keeping your basement dry.</p>
            </Link>
          </div>
        </section>

      </div>

      {/* Lead Form CTA */}
      <div className='bg-slate-900 py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-black text-white mb-4 text-center'>Get Expert Waterproofing Quotes</h2>
          <p className='text-slate-400 text-center mb-8 max-w-2xl mx-auto'>Get free quotes from vetted waterproofing professionals in your area. Protect your home and your investment.</p>
          <LeadForm />
        </div>
      </div>

    </div>
  )
}

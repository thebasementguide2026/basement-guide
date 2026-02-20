import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Finish Audit: 7 Things Before Hanging Basement Drywall | The Basement Guide',
  description: 'Don\'t make costly mistakes. These 7 checkpoints will future-proof your basement before you frame a single wall.',
}

export default function PreFinishAudit() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/unfinished-basement-interior.jpg.jpg'
          alt='Unfinished basement ready for audit before finishing'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />

        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-emerald-500'></div>
            <span className='text-emerald-400 font-bold tracking-[0.3em] text-sm uppercase'>Checklist Guide</span>
          </div>

          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            The Pre-Finish Audit<br />
            <span className='text-emerald-400'>7 Critical Checkpoints</span>
          </h1>

          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            The leaks are stopped and you are ready to finish. But skipping this audit is the single biggest mistake a homeowner can make.
          </p>

          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline'>

          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-emerald-500 pl-8'>
            You have done it. The leaks are stopped, the vision is clear, and you are ready to transform that concrete cavern into a high-end living space. But finishing without a rigorous audit is the single biggest mistake a homeowner can make.
          </p>

          {/* Checklist overview */}
          <div className='bg-slate-900 rounded-3xl p-10 my-16 shadow-2xl'>
            <h2 className='text-white text-2xl font-black mb-8 tracking-tight'>7 Critical Checkpoints</h2>
            <div className='space-y-4'>
              {[
                { num: '01', title: 'The Concrete Breathability Test' },
                { num: '02', title: 'Future-Proofing the Cove Joint' },
                { num: '03', title: 'The Modern Vapor Management System' },
                { num: '04', title: 'No Wood to Concrete Contact' },
                { num: '05', title: 'Plumbing and Electrical Redundancy' },
                { num: '06', title: 'Egress and Emergency Planning' },
                { num: '07', title: 'Final Dry-In Test' },
              ].map((item) => (
                <div key={item.num} className='flex items-center gap-6 py-4 border-b border-slate-800 last:border-0'>
                  <span className='text-emerald-400 font-black text-xl w-10 shrink-0'>{item.num}</span>
                  <span className='text-white font-medium text-lg'>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className='text-4xl mb-6'>01. The Concrete Breathability Test</h2>
          <p>
            Concrete breathes. Moisture vapor constantly moves through the slab from the ground up. Before you lay any flooring or insulation, tape a 12x12 inch square of plastic sheeting to the slab and seal the edges with tape. Wait 24 hours. If condensation forms on the underside, you have a vapor problem that must be addressed first.
          </p>

          <div className='bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-8 my-12'>
            <h4 className='text-amber-900 font-black text-lg mb-3'>Why This Matters</h4>
            <p className='text-amber-800 m-0'>
              Skipping this test is the number one cause of flooring failures in finished basements. Trapped moisture destroys flooring adhesives, breeds mold, and buckles engineered wood within months of installation.
            </p>
          </div>

          <h2 className='text-4xl mb-6'>02. Future-Proofing the Cove Joint</h2>
          <p>
            The cove joint is where your basement wall meets the floor. It's the most common entry point for water. Even if it's dry now, install a dimple mat drainage board along the perimeter so any future water is channeled into a drain rather than under your new flooring.
          </p>

          <h2 className='text-4xl mb-6'>03. The Modern Vapor Management System</h2>
          <p>
            Do not use polyethylene vapor barriers directly against the wall. Modern building science has moved to a vapor management approach: using rigid foam insulation (XPS or EPS) that acts as both insulation and vapor retarder, preventing the cold wall surface from ever touching warm interior air where condensation can form.
          </p>

          <h2 className='text-4xl mb-6'>04. No Wood to Concrete Contact</h2>
          <p>
            Never let wood framing touch the concrete floor or walls directly. Concrete wicks moisture and will rot any wood that touches it, even pressure-treated lumber, over time. Use a pressure-treated sill plate with a foam gasket underneath on the floor, and keep wall studs at least half an inch from the concrete wall.
          </p>

          <h2 className='text-4xl mb-6'>05. Plumbing and Electrical Redundancy</h2>
          <p>
            Before you close the walls, photograph and map every pipe, drain, shutoff valve, and electrical circuit in the space. Label your panel. Run GFCI circuits for the entire basement. Install an additional floor drain if your sump ever overflows. These costs are minimal now and catastrophic to add later.
          </p>

          <h2 className='text-4xl mb-6'>06. Egress and Emergency Planning</h2>
          <p>
            If your basement will be used as a bedroom or habitable space, building codes require a properly sized egress window or door. The opening must be large enough for a person to escape and a firefighter to enter. Verify this before framing in your windows.
          </p>

          <h2 className='text-4xl mb-6'>07. Final Dry-In Test</h2>
          <p>
            After addressing all the above, run your dehumidifier at its highest setting for 72 hours, then measure the relative humidity in the space. You want it below 50% before you start framing. If it can't get below 60%, something is still wrong.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16'>
            <Link href='/articles/complete-basement-waterproofing-guide' className='group block bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 no-underline'>
              <div className='text-emerald-500 text-sm font-bold uppercase tracking-widest mb-3'>Master Guide</div>
              <h4 className='text-slate-900 font-black text-xl mb-3 group-hover:text-emerald-600 transition-colors'>Complete Waterproofing Guide</h4>
              <p className='text-slate-500 text-sm m-0'>Everything you need to know before finishing your basement.</p>
            </Link>
            <Link href='/articles/types-of-foundation-cracks' className='group block bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 no-underline'>
              <div className='text-emerald-500 text-sm font-bold uppercase tracking-widest mb-3'>Diagnostic Guide</div>
              <h4 className='text-slate-900 font-black text-xl mb-3 group-hover:text-emerald-600 transition-colors'>Types of Foundation Cracks</h4>
              <p className='text-slate-500 text-sm m-0'>Identify which cracks are cosmetic and which are structural.</p>
            </Link>
          </div>

          <div className='bg-emerald-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-emerald-100 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Ready to Finish Your Basement?</h2>
              <p className='text-emerald-100 text-lg mb-10'>
                Get connected with top-rated finishing contractors who will do the job right the first time.
              </p>
              <div className='bg-white rounded-2xl p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

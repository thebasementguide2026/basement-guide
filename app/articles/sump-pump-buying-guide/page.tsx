import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sump Pump Buying Guide: How to Choose the Right One (2026)',
  description: 'Complete guide to choosing the right sump pump for your basement. Learn about HP, pedestal vs submersible, and backup systems.',
};

export default function SumpPumpBuyingGuide() {
  return (
    <div className=\"bg-white min-h-screen\">
      {/* Article Hero */}
      <section className=\"relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden\">
        <Image
          src=\"/sump-pump-installation.jpg.png\"
          alt=\"Sump pump installation and selection\"
          fill
          className=\"object-cover opacity-50 scale-105 transition-transform duration-700\"
          priority
        />
        <div className=\"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent\" />
        
        <div className=\"relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24\">
          <div className=\"flex items-center gap-3 mb-8\">
            <div className=\"h-px w-12 bg-indigo-500\" />
            <span className=\"text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase\">Buyer's Guide</span>
          </div>
          
          <h1 className=\"text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl mb-8\">
            Choose the <span className=\"text-indigo-500\">Right</span><br />Sump Pump
          </h1>
          
          <p className=\"text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed\">
            From horsepower to pump types, here is everything you need to know to protect your basement.
          </p>

          <div className=\"mt-12 flex items-center gap-6\">
             <div className=\"flex -space-x-3\">
              <div className=\"w-12 h-12 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-white font-bold\">BG</div>
            </div>
            <div>
              <p className=\"text-white font-bold\">The Basement Guide Staff</p>
              <p className=\"text-slate-400 text-sm\">Updated Feb 2026 • 12 min read</p>
            </div>
          </div>
        </div>
      </section>

      <main className=\"max-w-7xl mx-auto px-6 py-24\">
        <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-24\">
          <div className=\"lg:col-span-8 space-y-16\">
            {/* Intro section */}
            <div className=\"prose prose-xl prose-slate\">
              <p className=\"text-2xl leading-relaxed text-slate-600 border-l-4 border-indigo-500 pl-8 italic\">
                A sump pump is your basement's first line of defense against flooding. But with so many options, choosing the right one can be overwhelming.
              </p>
            </div>

            <section className=\"space-y-8\">
              <h2 className=\"text-4xl font-black text-slate-900 tracking-tight\">1. Pedestal vs. Submersible</h2>
              <p className=\"text-lg text-slate-600 leading-relaxed\">
                There are two primary types of primary sump pumps:
              </p>
              <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">
                <div className=\"bg-slate-50 p-8 rounded-3xl border border-slate-100\">
                  <h3 className=\"text-2xl font-bold mb-4\">Submersible</h3>
                  <p className=\"text-slate-600\">The motor is inside the sump pit and designed to be underwater. They are quieter and generally more powerful.</p>
                </div>
                <div className=\"bg-slate-50 p-8 rounded-3xl border border-slate-100\">
                  <h3 className=\"text-2xl font-bold mb-4\">Pedestal</h3>
                  <p className=\"text-slate-600\">The motor is mounted on a shaft above the water line. They are easier to service but louder and less powerful.</p>
                </div>
              </div>
            </section>

            <section className=\"space-y-8\">
              <h2 className=\"text-4xl font-black text-slate-900 tracking-tight\">2. Horsepower (HP) Requirements</h2>
              <p className=\"text-lg text-slate-600 leading-relaxed\">
                Most residential pumps range from 1/3 HP to 1 HP.
              </p>
              <ul className=\"space-y-4 text-slate-600\">
                <li><strong>1/3 HP:</strong> Standard for most homes with average water levels.</li>
                <li><strong>1/2 HP:</strong> Ideal for high-water areas or if your pump has to push water high up.</li>
                <li><strong>3/4 - 1 HP:</strong> Recommended for commercial use or extreme flood conditions.</li>
              </ul>
            </section>

            <section className=\"space-y-8\">
              <h2 className=\"text-4xl font-black text-slate-900 tracking-tight\">3. Don't Forget the Backup</h2>
              <p className=\"text-lg text-slate-600 leading-relaxed\">
                A primary pump is only good as long as there is power. Consider a battery-backup or water-powered backup system for ultimate reliability.
              </p>
            </section>
          </div>

          {/* Sidebar / CTA */}
          <div className=\"lg:col-span-4\">
            <div className=\"sticky top-12 bg-indigo-600 rounded-[3rem] p-12 text-white\">
              <h2 className=\"text-3xl font-black mb-6\">Get a Professional Installation</h2>
              <p className=\"text-indigo-100 mb-8\">
                Not sure which pump to choose? Connect with local pros for a free quote.
              </p>
              <div className=\"bg-white rounded-3xl p-6\">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

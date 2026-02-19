import Link from 'next/link';

export const metadata = {
  title: 'Sump Pump Installation Cost 2026 | Price Guide',
  description: 'How much does it cost to install a sump pump in 2026? Breakdown of unit prices, labor costs, and backup systems.',
};

export default function SumpPumpCost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-teal-600 hover:underline">← Back to Guides</Link>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Sump Pump Installation Cost Guide (2026)
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          The average cost to install a sump pump ranges from $650 to $2,500, depending on whether you are replacing an existing unit or installing a brand-new system with a pit.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Cost Breakdown by Pump Type</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Pedestal Pumps</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">$400 – $900</p>
            <p className="text-slate-600">More affordable and easier to service, but louder than submersible models.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Submersible Pumps</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">$800 – $2,000</p>
            <p className="text-slate-600">The industry standard. Quiet, powerful, and hidden inside the sump pit.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-teal-50 p-8 rounded-2xl border border-teal-100">
        <h2 className="text-2xl font-bold text-teal-900 mb-4">Key Cost Factors</h2>
        <ul className="space-y-4 text-slate-700">
          <li><strong>Pit Excavation:</strong> No existing pit means $500–$1,000 extra for concrete cutting and digging.</li>
          <li><strong>Horsepower:</strong> Standard 1/3 HP works for most homes. High-water-table areas may need 1/2 HP or 3/4 HP, costing 20-30% more.</li>
          <li><strong>Battery Backup:</strong> Highly recommended addition that costs $600–$1,500 more.</li>
          <li><strong>Labor:</strong> Plumber or waterproofing contractor rates run $75–$150/hr. Most installs take 4–6 hours.</li>
        </ul>
      </section>

      <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Keep Your Basement Dry</h2>
        <p className="mb-8 opacity-90 max-w-lg mx-auto">
          Don't wait for the next big storm. Get a professional quote for a reliable sump pump system today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-free-quotes" className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 transition shadow-lg">
            Find Local Pros →
          </Link>
        </div>
      </div>
    </article>
  );
}

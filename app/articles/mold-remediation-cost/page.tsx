import Link from 'next/link';

export const metadata = {
  title: 'Mold Remediation Cost 2026 | Price Guide',
  description: 'How much does mold remediation cost in 2026? Average prices by area size, mold type, and severity.',
};

export default function MoldRemediationCost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-teal-600 hover:underline">← Back to Guides</Link>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Mold Remediation Cost Guide (2026)
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Professional mold remediation costs $1,500 to $9,000 on average, depending on the size of the affected area, mold type, and whether structural materials must be replaced.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Cost by Affected Area</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Small (under 10 sqft)</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">$500 – $1,500</p>
            <p className="text-slate-600">Surface mold on a small section of wall or ceiling. Often DIY-able but professional testing recommended.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Medium (10–50 sqft)</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">$1,500 – $4,000</p>
            <p className="text-slate-600">Common for basement wall sections or crawl spaces. Requires professional containment and treatment.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Large (50+ sqft)</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">$4,000 – $10,000+</p>
            <p className="text-slate-600">Whole-basement or structural mold requiring full containment, demolition, and post-remediation testing.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-teal-50 p-8 rounded-2xl border border-teal-100">
        <h2 className="text-2xl font-bold text-teal-900 mb-4">Key Cost Factors</h2>
        <ul className="space-y-4 text-slate-700">
          <li><strong>Mold Type:</strong> Black mold (Stachybotrys) is the most expensive to remediate due to health risks and required safety protocols.</li>
          <li><strong>Structural Damage:</strong> If mold has penetrated drywall, insulation, or wood framing, those materials must be removed and replaced, adding $500–$5,000+.</li>
          <li><strong>Mold Testing:</strong> Pre- and post-remediation air quality testing costs $300–$600 but is strongly recommended.</li>
          <li><strong>Root Cause Fix:</strong> Remediation without fixing the moisture source (leak, humidity) means mold will return. Address waterproofing simultaneously.</li>
          <li><strong>Location:</strong> Crawl spaces and HVAC systems cost more to remediate due to access difficulty.</li>
        </ul>
      </section>

      <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stop Mold Before It Spreads</h2>
        <p className="mb-8 opacity-90 max-w-lg mx-auto">
          Don't delay mold remediation. Get quotes from certified professionals in your area today.
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

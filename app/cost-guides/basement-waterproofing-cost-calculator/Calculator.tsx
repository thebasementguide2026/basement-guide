'use client'

import { useState, useMemo } from 'react'

const SEVERITY = [
  { value: 'minor', label: 'Minor dampness', mult: 0.9 },
  { value: 'recurring', label: 'Recurring seepage', mult: 1.0 },
  { value: 'standing', label: 'Standing water', mult: 1.18 },
  { value: 'flooding', label: 'Heavy flooding history', mult: 1.32 },
]

const SCOPE = [
  { value: 'spot', label: 'Spot drainage fix', mult: 1.0 },
  { value: 'tile', label: 'Interior drain tile and sump tie-in', mult: 1.18 },
  { value: 'vapor', label: 'Interior drainage plus wall vapor management', mult: 1.42 },
  { value: 'exterior', label: 'Exterior excavation and full waterproofing', mult: 1.7 },
]

const FINISH = [
  { value: 'unfinished', label: 'Unfinished', mult: 1.0 },
  { value: 'partial', label: 'Partially finished', mult: 1.08 },
  { value: 'finished', label: 'Fully finished', mult: 1.16 },
]

const REGION = [
  { value: 'lower', label: 'Lower-cost market', mult: 0.92 },
  { value: 'average', label: 'Average-cost market', mult: 1.0 },
  { value: 'higher', label: 'Higher-cost market', mult: 1.14 },
]

const URGENCY = [
  { value: 'no-rush', label: 'No rush', mult: 1.0 },
  { value: 'within-30', label: 'Within 30 days', mult: 1.08 },
  { value: 'emergency', label: 'Emergency / ASAP', mult: 1.14 },
]

function roundTo50(n: number) {
  return Math.round(n / 50) * 50
}

function formatUSD(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function WaterproofingCostCalculator() {
  const [sqft, setSqft] = useState<number>(800)
  const [severity, setSeverity] = useState(SEVERITY[1].value)
  const [scope, setScope] = useState(SCOPE[1].value)
  const [finish, setFinish] = useState(FINISH[0].value)
  const [region, setRegion] = useState(REGION[1].value)
  const [urgency, setUrgency] = useState(URGENCY[0].value)
  const [showResults, setShowResults] = useState(false)

  const result = useMemo(() => {
    const sev = SEVERITY.find((s) => s.value === severity)!
    const sc = SCOPE.find((s) => s.value === scope)!
    const fin = FINISH.find((s) => s.value === finish)!
    const reg = REGION.find((s) => s.value === region)!
    const urg = URGENCY.find((s) => s.value === urgency)!

    const safeSqft = Math.max(100, Math.min(5000, Number(sqft) || 0))
    const basePerSqft = 4.8
    const expected = safeSqft * basePerSqft * sev.mult * sc.mult * fin.mult * reg.mult * urg.mult
    const low = roundTo50(expected * 0.82)
    const high = roundTo50(expected * 1.27)

    let nextStep = 'Get 2 to 3 written waterproofing quotes from licensed local contractors so you can compare scope, materials, and warranty terms before committing.'
    if (sc.value === 'exterior') {
      nextStep = 'Schedule an exterior waterproofing inspection. Exterior excavation projects vary widely by site access, soil conditions, and depth, so an on-site evaluation is the only reliable way to firm up cost.'
    } else if (sev.value === 'standing' || sev.value === 'flooding') {
      nextStep = 'Get a drainage evaluation quickly. Standing water and repeat flooding usually point to a failing or missing interior drain system, and delays can lead to mold and structural damage.'
    } else if (safeSqft <= 600 && sev.value === 'minor') {
      nextStep = 'Compare a targeted spot fix against a full perimeter interior drainage quote. A small basement with minor dampness sometimes responds well to a focused fix, but a perimeter system can be more durable long term.'
    }

    let projectSummary = sc.label
    if (sc.value === 'spot') {
      projectSummary = 'Spot drainage fix focused on the area where water is entering, with limited disruption to finished space.'
    } else if (sc.value === 'tile') {
      projectSummary = 'Interior drain tile around the basement perimeter tied into a sump pump pit and discharge line.'
    } else if (sc.value === 'vapor') {
      projectSummary = 'Interior drainage plus wall vapor management, typically combining drain tile, sump pump, and a wall membrane or dimple board system.'
    } else if (sc.value === 'exterior') {
      projectSummary = 'Exterior excavation around the foundation with a waterproof membrane and drainage layer, often the most thorough option for chronic water issues.'
    }

    return { low, high, nextStep, projectSummary, severityLabel: sev.label, scopeLabel: sc.label, regionLabel: reg.label }
  }, [sqft, severity, scope, finish, region, urgency])

  const inputClass = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500'

  return (
    <div className='bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden'>
      <div className='p-6 md:p-8 bg-slate-50 border-b border-slate-200'>
        <h2 className='text-2xl font-bold text-slate-900 mb-2'>Estimate your basement waterproofing cost</h2>
        <p className='text-slate-600 text-sm'>Enter a few details about your basement and project. The calculator will return a planning cost range you can use before requesting contractor quotes.</p>
      </div>

      <form
        className='p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5'
        onSubmit={(e) => {
          e.preventDefault()
          setShowResults(true)
          setTimeout(() => {
            document.getElementById('calculator-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 50)
        }}
      >
        <div>
          <label htmlFor='sqft' className='block text-sm font-semibold text-slate-800 mb-1.5'>Basement square footage</label>
          <input
            id='sqft'
            type='number'
            min={100}
            max={5000}
            step={50}
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className={inputClass}
          />
          <p className='text-xs text-slate-500 mt-1'>Typical residential basements range from 600 to 1,500 sq ft.</p>
        </div>

        <div>
          <label htmlFor='severity' className='block text-sm font-semibold text-slate-800 mb-1.5'>Moisture severity</label>
          <select id='severity' value={severity} onChange={(e) => setSeverity(e.target.value)} className={inputClass}>
            {SEVERITY.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div className='md:col-span-2'>
          <label htmlFor='scope' className='block text-sm font-semibold text-slate-800 mb-1.5'>Likely project scope</label>
          <select id='scope' value={scope} onChange={(e) => setScope(e.target.value)} className={inputClass}>
            {SCOPE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='finish' className='block text-sm font-semibold text-slate-800 mb-1.5'>Basement finish level</label>
          <select id='finish' value={finish} onChange={(e) => setFinish(e.target.value)} className={inputClass}>
            {FINISH.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='region' className='block text-sm font-semibold text-slate-800 mb-1.5'>Regional cost factor</label>
          <select id='region' value={region} onChange={(e) => setRegion(e.target.value)} className={inputClass}>
            {REGION.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div className='md:col-span-2'>
          <label htmlFor='urgency' className='block text-sm font-semibold text-slate-800 mb-1.5'>Project timing</label>
          <select id='urgency' value={urgency} onChange={(e) => setUrgency(e.target.value)} className={inputClass}>
            {URGENCY.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div className='md:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2'>
          <button
            type='submit'
            className='inline-flex items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 text-sm transition-colors'
          >
            Calculate estimate
          </button>
          <button
            type='button'
            onClick={() => {
              setSqft(800); setSeverity(SEVERITY[1].value); setScope(SCOPE[1].value);
              setFinish(FINISH[0].value); setRegion(REGION[1].value); setUrgency(URGENCY[0].value);
              setShowResults(false)
            }}
            className='inline-flex items-center justify-center rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm border border-slate-300 transition-colors'
          >
            Reset
          </button>
        </div>
      </form>

      {showResults && (
        <div id='calculator-results' className='border-t border-slate-200 bg-slate-50 p-6 md:p-8'>
          <p className='text-xs font-semibold uppercase tracking-wide text-teal-700 mb-2'>Planning estimate</p>
          <p className='text-3xl md:text-4xl font-black text-slate-900 mb-1'>
            {formatUSD(result.low)} to {formatUSD(result.high)}
          </p>
          <p className='text-sm text-slate-600 mb-6'>Estimated cost range for your project as configured above.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
            <div className='bg-white rounded-lg border border-slate-200 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1'>Likely project type</p>
              <p className='text-sm text-slate-800 leading-relaxed'>{result.projectSummary}</p>
            </div>
            <div className='bg-white rounded-lg border border-slate-200 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1'>Suggested next step</p>
              <p className='text-sm text-slate-800 leading-relaxed'>{result.nextStep}</p>
            </div>
          </div>

          <div className='rounded-lg bg-amber-50 border border-amber-200 p-4'>
            <p className='text-xs font-semibold uppercase tracking-wide text-amber-800 mb-1'>Planning estimate disclaimer</p>
            <p className='text-sm text-amber-900 leading-relaxed'>
              This range is a planning estimate based on national pricing data, not a contractor bid. Actual basement waterproofing costs vary by site access, soil conditions, code requirements, and the specific materials a contractor recommends. Always request 2 to 3 written quotes from licensed local professionals before committing to a project.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState, useMemo, useRef } from 'react'
import { track } from '@/lib/track'

const PUMP = [
  { value: 'pedestal', label: 'Pedestal pump', low: 400, high: 900 },
  { value: 'standard', label: 'Standard submersible pump', low: 650, high: 1200 },
  { value: 'highcap', label: 'Higher-capacity submersible pump', low: 800, high: 1450 },
] as const

const SCOPE = [
  { value: 'swap', label: 'Simple pump swap', low: 0, high: 100 },
  { value: 'valve', label: 'Pump plus check valve work', low: 50, high: 150 },
  { value: 'discharge', label: 'Pump plus discharge line work', low: 150, high: 350 },
  { value: 'pit', label: 'Pump plus pit cleanup or minor rework', low: 150, high: 300 },
] as const

const BACKUP = [
  { value: 'none', label: 'No backup', low: 0, high: 0 },
  { value: 'keep', label: 'Keep existing backup', low: 0, high: 75 },
  { value: 'add', label: 'Add new battery backup', low: 350, high: 900 },
  { value: 'stronger', label: 'Add stronger backup setup', low: 700, high: 1400 },
] as const

const RISK = [
  { value: 'unfinished', label: 'Unfinished or lower-risk basement', low: 0, high: 0 },
  { value: 'finished', label: 'Finished basement', low: 40, high: 120 },
  { value: 'flood', label: 'Flood-prone or high-water-table basement', low: 90, high: 220 },
] as const

const ELECTRICAL = [
  { value: 'none', label: 'None', low: 0, high: 0 },
  { value: 'minor', label: 'Minor alarm or outlet update', low: 100, high: 250 },
  { value: 'dedicated', label: 'Dedicated electrical or control upgrade', low: 250, high: 600 },
] as const

const REGION = [
  { value: 'lower', label: 'Lower-cost market', mult: 0.93 },
  { value: 'average', label: 'Average-cost market', mult: 1.0 },
  { value: 'higher', label: 'Higher-cost market', mult: 1.12 },
] as const

function roundTo25(n: number) {
  return Math.round(n / 25) * 25
}

function formatUSD(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function SumpPumpReplacementCalculator() {
  const [pump, setPump] = useState<string>(PUMP[1].value)
  const [scope, setScope] = useState<string>(SCOPE[0].value)
  const [backup, setBackup] = useState<string>(BACKUP[0].value)
  const [risk, setRisk] = useState<string>(RISK[0].value)
  const [electrical, setElectrical] = useState<string>(ELECTRICAL[0].value)
  const [region, setRegion] = useState<string>(REGION[1].value)
  const [showResults, setShowResults] = useState(false)

  const startedRef = useRef(false)
  const completedRef = useRef<string>('')

  function handleInteract(next: Partial<Record<string, string>> = {}) {
    if (startedRef.current) return
    startedRef.current = true
    track('calculator_start', {
      calculator_name: 'sump_pump_replacement_cost',
      page_type: 'cost_guide_calculator',
      pump_type: next.pump ?? pump,
      replacement_scope: next.scope ?? scope,
      backup_protection: next.backup ?? backup,
      basement_risk: next.risk ?? risk,
      electrical_scope: next.electrical ?? electrical,
      regional_cost_factor: next.region ?? region,
    })
  }

  const result = useMemo(() => {
    const p = PUMP.find((o) => o.value === pump)!
    const s = SCOPE.find((o) => o.value === scope)!
    const b = BACKUP.find((o) => o.value === backup)!
    const r = RISK.find((o) => o.value === risk)!
    const e = ELECTRICAL.find((o) => o.value === electrical)!
    const reg = REGION.find((o) => o.value === region)!

    const sumLow = p.low + s.low + b.low + r.low + e.low
    const sumHigh = p.high + s.high + b.high + r.high + e.high
    const low = roundTo25(sumLow * reg.mult)
    const high = roundTo25(sumHigh * reg.mult)

    let profile = 'Standard replacement'
    if (high < 1000) profile = 'Basic replacement'
    else if (high <= 1790) profile = 'Standard replacement'
    else if (high <= 2490) profile = 'Upgraded protection system'
    else profile = 'Complex replacement'

    let why = 'Most homeowners replacing a sump pump in an existing pit land in a routine cost range driven by pump type and a few minor add-ons.'
    if (high >= 3000) {
      why = 'This estimate reflects a premium replacement-plus-upgrade scenario. You are not just swapping a pump, you are also adding meaningful backup protection, electrical work, or finished-basement risk handling on top of the base replacement.'
    } else if (profile === 'Upgraded protection system') {
      why = 'You are replacing the pump and meaningfully upgrading protection at the same time, usually a new battery backup, a finished-basement adjustment, or a higher-capacity submersible.'
    } else if (profile === 'Standard replacement') {
      why = 'Pricing reflects a typical submersible replacement with light scope work, the most common scenario homeowners see when they call a plumber.'
    } else if (profile === 'Basic replacement') {
      why = 'You are looking at a straightforward swap with limited extra work. This is what a clean, simple replacement should cost in most homes.'
    }

    const raisers: string[] = []
    if (s.value === 'discharge') raisers.push('Reworking the discharge line, especially if the run is long or freeze-prone')
    if (s.value === 'pit') raisers.push('Cleanup or rework of an old or sediment-heavy sump pit')
    if (s.value === 'valve') raisers.push('Replacing a failed check valve or repiping the connection above the pit')
    if (b.value === 'add' || b.value === 'stronger') raisers.push('Adding battery backup hardware, batteries, and a controller')
    if (e.value === 'minor') raisers.push('A new alarm, GFCI outlet, or basic electrical update at the pit')
    if (e.value === 'dedicated') raisers.push('Running a dedicated circuit or installing a smart pump controller')
    if (r.value === 'finished') raisers.push('Protecting finished flooring, drywall, and trim around the work area')
    if (r.value === 'flood') raisers.push('Flood-prone or high-water-table conditions that justify a stronger setup')
    if (p.value === 'highcap') raisers.push('Higher-capacity pump hardware and the matching plumbing it expects')
    if (raisers.length === 0) {
      raisers.push('Tight pit access, finished flooring near the pit, or after-hours service calls')
      raisers.push('Code requirements that change discharge routing or electrical at the pit')
    }
    const finalRaisers = raisers.slice(0, 4)

    return {
      low,
      high,
      profile,
      why,
      raisers: finalRaisers,
      pumpLabel: p.label,
      scopeLabel: s.label,
      backupLabel: b.label,
      regionLabel: reg.label,
    }
  }, [pump, scope, backup, risk, electrical, region])

  const inputClass = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500'

  function fireComplete() {
    const key = pump + ':' + scope + ':' + backup + ':' + risk + ':' + electrical + ':' + region + ':' + result.low + ':' + result.high
    if (completedRef.current === key) return
    completedRef.current = key
    track('calculator_complete', {
      calculator_name: 'sump_pump_replacement_cost',
      page_type: 'cost_guide_calculator',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      estimate_low: result.low,
      estimate_high: result.high,
      currency: 'USD',
      pump_type: pump,
      replacement_scope: scope,
      backup_protection: backup,
      basement_risk: risk,
      electrical_scope: electrical,
      regional_cost_factor: region,
    })
  }

  return (
    <div className='bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden'>
      <div className='p-6 md:p-8 bg-slate-50 border-b border-slate-200'>
        <h2 className='text-2xl font-bold text-slate-900 mb-2'>Estimate your sump pump replacement cost</h2>
        <p className='text-slate-600 text-sm'>Tuned for replacement in an existing pit, not first-time sump pit installation. Pick a few details and you will get a planning cost range you can use before requesting plumber quotes.</p>
      </div>

      <form
        className='p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5'
        onSubmit={(e) => {
          e.preventDefault()
          setShowResults(true)
          fireComplete()
          setTimeout(() => {
            document.getElementById('calculator-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 50)
        }}
      >
        <div>
          <label htmlFor='pump' className='block text-sm font-semibold text-slate-800 mb-1.5'>Pump type</label>
          <select id='pump' value={pump} onChange={(ev) => { handleInteract({ pump: ev.target.value }); setPump(ev.target.value) }} className={inputClass}>
            {PUMP.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='scope' className='block text-sm font-semibold text-slate-800 mb-1.5'>Replacement scope</label>
          <select id='scope' value={scope} onChange={(ev) => { handleInteract({ scope: ev.target.value }); setScope(ev.target.value) }} className={inputClass}>
            {SCOPE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='backup' className='block text-sm font-semibold text-slate-800 mb-1.5'>Backup protection</label>
          <select id='backup' value={backup} onChange={(ev) => { handleInteract({ backup: ev.target.value }); setBackup(ev.target.value) }} className={inputClass}>
            {BACKUP.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='risk' className='block text-sm font-semibold text-slate-800 mb-1.5'>Basement risk level</label>
          <select id='risk' value={risk} onChange={(ev) => { handleInteract({ risk: ev.target.value }); setRisk(ev.target.value) }} className={inputClass}>
            {RISK.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='electrical' className='block text-sm font-semibold text-slate-800 mb-1.5'>Electrical or alarm work</label>
          <select id='electrical' value={electrical} onChange={(ev) => { handleInteract({ electrical: ev.target.value }); setElectrical(ev.target.value) }} className={inputClass}>
            {ELECTRICAL.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor='region' className='block text-sm font-semibold text-slate-800 mb-1.5'>Region</label>
          <select id='region' value={region} onChange={(ev) => { handleInteract({ region: ev.target.value }); setRegion(ev.target.value) }} className={inputClass}>
            {REGION.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
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
              setPump(PUMP[1].value); setScope(SCOPE[0].value); setBackup(BACKUP[0].value)
              setRisk(RISK[0].value); setElectrical(ELECTRICAL[0].value); setRegion(REGION[1].value)
              setShowResults(false)
              completedRef.current = ''
              track('calculator_reset', { calculator_name: 'sump_pump_replacement_cost' })
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
          <p className='text-sm text-slate-600 mb-6'>Estimated installed cost range for your replacement as configured above.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
            <div className='bg-white rounded-lg border border-slate-200 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1'>Project profile</p>
              <p className='text-sm font-bold text-slate-900 mb-1'>{result.profile}</p>
              <p className='text-sm text-slate-700 leading-relaxed'>{result.why}</p>
            </div>
            <div className='bg-white rounded-lg border border-slate-200 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2'>What may raise the quote</p>
              <ul className='space-y-1.5'>
                {result.raisers.map((item, i) => (
                  <li key={i} className='flex gap-2 text-sm text-slate-700 leading-relaxed'>
                    <span className='mt-1.5 block h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='rounded-lg bg-amber-50 border border-amber-200 p-4'>
            <p className='text-xs font-semibold uppercase tracking-wide text-amber-800 mb-1'>Planning estimate, not a quote</p>
            <p className='text-sm text-amber-900 leading-relaxed'>
              This range is a planning estimate based on national replacement pricing data, not a contractor bid. Actual sump pump replacement cost varies by pit access, age of the existing setup, code requirements, and the specific pump and backup hardware your plumber recommends. Always request 2 to 3 written quotes from licensed local pros before committing.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

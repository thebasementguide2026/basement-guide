/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ArticleSchemaData {
  faq?: { q: string; a: string }[]
  howTo?: { name: string; description: string; steps: { name: string; text: string }[] }
  products?: { name: string; description: string; image?: string; url?: string }[]
}

export const articleSchemas: Record<string, ArticleSchemaData> = {

  // --- BASEMENT HUMIDITY GUIDE ---
  'basement-humidity-guide': {
    faq: [
      { q: 'What causes high basement humidity?', a: 'Groundwater seepage, poor ventilation, concrete moisture wicking, and seasonal temperature changes all contribute to elevated basement humidity levels.' },
      { q: 'How do I know if my basement humidity is too high?', a: 'Use a digital hygrometer. Readings consistently above 50-55% RH indicate excessive moisture that can promote mold growth and structural damage.' },
      { q: 'Can high humidity damage my foundation?', a: 'Yes. Excess moisture accelerates concrete deterioration, promotes efflorescence, and can weaken structural integrity over time.' },
      { q: 'Is a dehumidifier enough to fix high basement humidity?', a: 'A dehumidifier helps manage symptoms but may not address root causes like poor drainage or foundation cracks. A comprehensive approach is best.' },
      { q: 'How often should I check basement humidity?', a: 'Daily monitoring with a digital hygrometer is ideal. At minimum, check weekly and after every heavy rain event.' },
      { q: 'What if I have a crawl space basement?', a: 'Seal it with a vapor barrier and dehumidifier. Encapsulation is the gold standard for crawl space moisture control.' },
    ],
    howTo: {
      name: 'How to Fix High Basement Humidity',
      description: 'Step-by-step guide to measuring and reducing basement humidity to safe levels.',
      steps: [
        { name: 'Measure humidity', text: 'Place a hygrometer in the basement and monitor readings for 48-72 hours to establish a baseline.' },
        { name: 'Improve airflow', text: 'Open windows when outdoor humidity is lower than indoor, and add fans to circulate air.' },
        { name: 'Seal small leaks', text: 'Check walls and floors for cracks or seepage points and seal with hydraulic cement or epoxy.' },
        { name: 'Absorb moisture', text: 'Place silica gel packs, DampRid, or activated charcoal in problem areas as a temporary measure.' },
        { name: 'Run a dehumidifier', text: 'Set a portable dehumidifier to maintain 30-50% RH. Use continuous drain for hands-free operation.' },
        { name: 'Fix exterior drainage', text: 'Clear gutters and extend downspouts at least 10 feet from the foundation. Regrade soil to slope away from the house.' },
      ],
    },
    products: [
      { name: 'ThermoPro TP49 Digital Hygrometer', description: 'Accurate, affordable humidity and temperature monitor for basements.' },
      { name: 'Govee H5051 Wi-Fi Hygrometer', description: 'Smart hygrometer with app alerts when humidity exceeds your set threshold.' },
      { name: 'AcuRite Digital Hygrometer', description: 'Simple and reliable humidity monitoring with large display.' },
    ],
  },

  // --- HOW TO PREVENT BASEMENT MOLD ---
  'how-to-prevent-basement-mold': {
    faq: [
      { q: 'What humidity level causes mold in a basement?', a: 'Mold typically begins growing when relative humidity stays above 60% for extended periods. Keep humidity between 30-50% to prevent growth.' },
      { q: 'Can I prevent basement mold without a dehumidifier?', a: 'Improving ventilation and fixing water intrusion helps, but a dehumidifier is the most reliable tool for maintaining safe humidity levels year-round.' },
      { q: 'How often should I inspect for basement mold?', a: 'At least quarterly, and always after heavy rain or flooding events. Check hidden areas behind stored items and along baseboards.' },
    ],
    howTo: {
      name: 'How to Prevent Basement Mold',
      description: 'The 5 pillars of permanent mold prevention for your basement.',
      steps: [
        { name: 'Control humidity', text: 'Maintain 30-50% relative humidity using a properly sized dehumidifier with continuous drainage.' },
        { name: 'Improve ventilation', text: 'Ensure adequate airflow with exhaust fans, open windows on dry days, and air circulation systems.' },
        { name: 'Fix water intrusion', text: 'Address leaks, cracks, and seepage at their source. Repair foundation cracks and improve exterior drainage.' },
        { name: 'Use mold-resistant materials', text: 'Choose mold-resistant drywall, paint, and insulation for any basement finishing projects.' },
        { name: 'Regular inspection', text: 'Check hidden areas behind stored items, along baseboards, and in corners at least quarterly.' },
      ],
    },
  },

  // --- BEST WATER LEAK DETECTORS ---
  'best-water-leak-detectors': {
    faq: [
      { q: 'Do water leak detectors work in basements?', a: 'Yes, modern leak detectors use Wi-Fi or proprietary protocols to send instant alerts to your phone when water is detected.' },
      { q: 'What is the best smart water leak detector?', a: 'The YoLink Water Leak Sensor offers the longest range and best value. Govee and Ring are also strong choices depending on your smart home ecosystem.' },
    ],
    products: [
      { name: 'YoLink Water Leak Sensor', description: 'Long-range LoRa-based water leak sensor with hub connectivity and smartphone alerts.' },
      { name: 'Govee Water Leak Detector', description: 'Wi-Fi enabled water sensor with loud alarm and app notifications.' },
      { name: 'Ring Alarm Flood & Freeze Sensor', description: 'Integrates with Ring smart home system for water and temperature monitoring.' },
      { name: 'Flo by Moen Smart Water Shutoff', description: 'Whole-home water monitoring system that automatically shuts off water when leaks are detected.' },
    ],
  },

  // --- WATERPROOF BASEMENT PAINT & SEALERS ---
  'waterproof-basement-paint-sealers': {
    faq: [
      { q: 'Does waterproof basement paint really work?', a: 'Yes, products like Drylok and RadonSeal effectively block minor moisture penetration through concrete walls when applied correctly.' },
      { q: 'What is the best waterproof paint for basement walls?', a: 'Drylok Extreme is the industry standard for DIY waterproof paint. For deeper penetration, RadonSeal is a professional-grade option.' },
    ],
    products: [
      { name: 'Drylok Extreme Masonry Waterproofer', description: 'Industry-standard basement wall sealant that withstands 15 PSI of hydrostatic pressure.' },
      { name: 'RadonSeal Deep-Penetrating Concrete Sealer', description: 'Professional-grade penetrating sealer that chemically bonds within concrete pores.' },
      { name: 'KILZ Basement & Masonry Waterproofer', description: 'Budget-friendly waterproof coating for interior basement walls and masonry surfaces.' },
    ],
  },

  // --- BOWING BASEMENT WALLS ---
  'bowing-basement-walls': {
    faq: [
      { q: 'Can I ignore a bowing basement wall?', a: 'No. Once a wall starts bowing, the structural integrity is compromised. It will only get worse and never improves on its own.' },
      { q: 'How long does bowing wall repair take?', a: 'Most strap or beam installations take 1-2 days. Wall anchors may take slightly longer if excavation is required.' },
    ],
    howTo: {
      name: 'How to Repair a Bowing Basement Wall',
      description: 'Overview of the three primary methods for fixing bowing basement walls.',
      steps: [
        { name: 'Diagnose severity', text: 'Measure wall deflection. Under 2 inches is minor, 2-4 inches is moderate, over 4 inches is severe.' },
        { name: 'Carbon fiber straps', text: 'For minor bowing under 2 inches, apply high-strength carbon fiber straps with industrial epoxy.' },
        { name: 'Steel I-beams', text: 'For moderate to severe bowing, install vertical steel beams bolted to floor and joists to prevent further movement.' },
        { name: 'Wall anchors', text: 'Bury an anchor plate in the yard and connect it to a plate on the basement wall via a steel rod to actively straighten the wall.' },
      ],
    },
  },

  // --- TYPES OF FOUNDATION CRACKS ---
  'types-of-foundation-cracks': {
    faq: [
      { q: 'Are vertical foundation cracks serious?', a: 'Most vertical cracks are caused by normal concrete shrinkage and settling. Hairline vertical cracks are usually cosmetic and can be sealed with epoxy.' },
      { q: 'What does a horizontal crack in my foundation mean?', a: 'Horizontal cracks are the most serious type, indicating the wall is bowing inward from hydrostatic pressure. Call a professional immediately.' },
      { q: 'When should I call a professional for a foundation crack?', a: 'Call a pro if cracks are wider than 1/4 inch, horizontal, stair-stepping, growing, or actively leaking water.' },
    ],
    products: [
      { name: 'Emecole Metro DIY Crack Repair Kit', description: 'Popular epoxy injection kit for vertical and settlement cracks up to 1/4 inch wide.' },
      { name: 'Applied Technologies Polyurethane Crack Repair Kit', description: 'Polyurethane foam kit for actively leaking cracks that expands on contact with water.' },
      { name: 'Loctite PL Premium Construction Adhesive', description: 'Flexible adhesive for sealing surfaces after injection or for small non-structural cracks.' },
    ],
  },

  // --- BASEMENT VS CRAWL SPACE VS SLAB ---
  'basement-vs-crawl-space-vs-slab': {
    faq: [
      { q: 'Is a basement or crawl space better for resale value?', a: 'A finished basement typically adds the most value, up to $50,000-$100,000 in ROI, especially in colder markets.' },
      { q: 'Which foundation type is the most energy-efficient?', a: 'Slabs edge out due to direct ground contact and no air leaks, but well-insulated basements use earth temperature for similar efficiency.' },
      { q: 'How do I know if my soil is suitable for a basement?', a: 'Get a geotechnical report ($800-$2,000). Clay soils favor slabs, sandy soils drain well for basements, rocky areas increase excavation costs.' },
      { q: 'Can I convert a crawl space to a basement?', a: 'It is possible but expensive ($50,000+) and disruptive, involving jacking up the house. Better to plan ahead during initial construction.' },
    ],
  },

  // --- COMPLETE BASEMENT WATERPROOFING GUIDE ---
  'complete-basement-waterproofing-guide': {
    faq: [
      { q: 'How much does basement waterproofing cost in 2026?', a: 'Interior systems cost $4,000-$12,000. Exterior membrane and excavation costs $15,000-$35,000. Average full system runs $7,000-$15,000.' },
      { q: 'Can I waterproof my basement myself?', a: 'Minor tasks like sealing cracks and improving grading are DIY-friendly. Full drain systems and exterior excavation require professionals.' },
    ],
    howTo: {
      name: 'How to Waterproof Your Basement',
      description: 'Step-by-step planning guide for basement waterproofing.',
      steps: [
        { name: 'Inspect', text: 'Hire a pro for moisture tests and source identification ($200-$500).' },
        { name: 'Fix exterior basics', text: 'Regrade soil, extend downspouts at least 10 feet, and clean gutters.' },
        { name: 'Choose your system', text: 'Select interior for moderate issues, exterior for severe leaks, or both for maximum protection.' },
        { name: 'Install', text: 'Have professionals add drains, pumps, sealants, and membranes according to your chosen system.' },
        { name: 'Test and monitor', text: 'Run water tests to verify the system works. Add smart sensors for real-time leak detection.' },
        { name: 'Finish', text: 'Include a dehumidifier and vapor barriers. Complete waterproofing before any finishing work.' },
      ],
    },
    products: [
      { name: 'Zoeller M53 Mighty-Mate Sump Pump', description: '1/3 HP submersible sump pump trusted by contractors. Handles up to 43 GPM.' },
      { name: 'Wayne ESP25 Battery Backup Sump Pump', description: 'Reliable battery backup system with up to 10 hours of backup pumping.' },
      { name: 'Frigidaire 50-Pint Dehumidifier', description: 'Energy Star rated dehumidifier ideal for basements up to 1,500 sq ft.' },
      { name: 'RadonSeal Concrete Foundation Crack Repair Kit', description: 'Professional-grade polyurethane injection kit for foundation crack repair.' },
      { name: 'DRYLOK Extreme Masonry Waterproofer', description: 'Industry-standard basement wall sealant withstanding 15 PSI of hydrostatic pressure.' },
      { name: 'Hydraulic Cement by Quikrete', description: 'Fast-setting cement that stops active water leaks in 3 to 5 minutes.' },
    ],
  },

  // --- INTERIOR VS EXTERIOR WATERPROOFING ---
  'interior-vs-exterior-waterproofing': {
    faq: [
      { q: 'Which is better, interior or exterior basement waterproofing?', a: 'Exterior prevents water entry for longer protection, while interior manages water at lower cost. Many homes use both for best results.' },
      { q: 'How long does basement waterproofing last?', a: 'Interior systems last 15 to 30 years with maintenance. Exterior systems last 20 to 50 years depending on materials and conditions.' },
      { q: 'Can I do basement waterproofing as a DIY project?', a: 'Minor crack sealing and sump pump replacement can be DIY. Full interior drain systems or exterior excavation require professionals.' },
      { q: 'Will basement waterproofing stop mold?', a: 'Waterproofing removes the moisture source that causes mold. Combine with proper ventilation and humidity control for full results.' },
      { q: 'Do I need permits for basement waterproofing?', a: 'Often yes, especially for exterior excavation or major interior drain work. Check with your local building department.' },
    ],
    products: [
      { name: 'Zoeller M53 Mighty-Mate Sump Pump', description: '1/3 HP submersible sump pump trusted by contractors nationwide.' },
      { name: 'Govee WiFi Water Leak Detector', description: 'Smart water leak sensors with WiFi alerts for 24/7 basement monitoring.' },
    ],
  },

  // --- BASEMENT INSULATION GUIDE ---
  'basement-insulation-guide': {
    faq: [
      { q: 'What is the best insulation for basement walls?', a: 'Rigid foam board (XPS or EPS) is the most recommended for basement walls. Spray foam is excellent but more expensive.' },
      { q: 'Should I insulate my basement ceiling or walls?', a: 'Insulating walls is generally more effective and energy-efficient than ceiling insulation for conditioned basements.' },
    ],
    howTo: {
      name: 'How to Insulate a Basement',
      description: 'Guide to choosing and installing the right basement insulation.',
      steps: [
        { name: 'Address moisture first', text: 'Fix any water intrusion or humidity issues before insulating. Insulation traps moisture and worsens mold problems.' },
        { name: 'Choose insulation type', text: 'Select rigid foam for DIY, spray foam for professional install, or mineral wool for fire resistance.' },
        { name: 'Install vapor barrier', text: 'Apply a vapor barrier on the warm side of insulation to prevent condensation inside wall cavities.' },
        { name: 'Insulate walls', text: 'Attach rigid foam boards to foundation walls with adhesive or mechanical fasteners. Seal all seams with tape.' },
        { name: 'Frame and finish', text: 'Build stud walls in front of insulation for drywall attachment if finishing the space.' },
      ],
    },
  },

  // --- BASEMENT FINISHING COST ---
  'basement-finishing-cost': {
    faq: [
      { q: 'How much does it cost to finish a basement in 2026?', a: 'Expect to pay $20 to $75 per square foot depending on finishes, layout complexity, and your region. A 1,000 sq ft basement averages $30,000-$50,000.' },
      { q: 'Does finishing a basement increase home value?', a: 'Yes, a finished basement typically returns 70-75% of the investment at resale and adds significant usable living space.' },
      { q: 'How long does it take to finish a basement?', a: 'A typical basement finishing project takes 4-8 weeks for a professional crew, longer for complex layouts with bathrooms.' },
    ],
  },

  // --- EGRESS WINDOW COST ---
  'egress-window-cost': {
    faq: [
      { q: 'How much does an egress window cost in 2026?', a: 'Expect to pay $2,500 to $5,500 per window installed, including excavation, well, window, and finishing.' },
      { q: 'Do I need an egress window in my basement?', a: 'Yes, building codes require egress windows in any basement bedroom or habitable space for emergency escape.' },
    ],
  },

  // --- PRE-FINISH AUDIT ---
  'pre-finish-audit': {
    howTo: {
      name: 'Pre-Finish Basement Audit',
      description: 'Seven critical checkpoints to complete before finishing your basement.',
      steps: [
        { name: 'Check for moisture', text: 'Test walls and floors for active moisture with a moisture meter. Fix any issues before framing.' },
        { name: 'Inspect foundation', text: 'Look for cracks, bowing, or structural concerns that need repair before covering with drywall.' },
        { name: 'Test for radon', text: 'Conduct a radon test. Install mitigation if levels exceed 4 pCi/L before sealing the space.' },
        { name: 'Plan egress', text: 'Ensure code-compliant egress windows are installed for any planned bedrooms.' },
        { name: 'Address plumbing', text: 'Plan bathroom rough-in and verify sewer line capacity before pouring concrete.' },
        { name: 'Check electrical capacity', text: 'Verify your electrical panel can handle additional circuits for the finished space.' },
        { name: 'Plan HVAC', text: 'Ensure your heating and cooling system can condition the additional square footage.' },
      ],
    },
  },

  // --- BEST BASEMENT FLOORING ---
  'best-basement-flooring': {
    faq: [
      { q: 'What is the best flooring for a basement?', a: 'Luxury vinyl plank (LVP) is the top choice for basements due to its waterproof properties, durability, and realistic appearance.' },
      { q: 'Can you put hardwood floors in a basement?', a: 'Engineered hardwood can work in dry basements, but solid hardwood is not recommended due to moisture and humidity concerns below grade.' },
    ],
    products: [
      { name: 'Luxury Vinyl Plank (LVP)', description: '100% waterproof, durable, and available in realistic wood and stone patterns. Best overall basement flooring.' },
      { name: 'Ceramic/Porcelain Tile', description: 'Completely waterproof and extremely durable. Ideal for basement bathrooms and utility areas.' },
      { name: 'Engineered Hardwood', description: 'Real wood appearance with better moisture resistance than solid hardwood. Requires controlled humidity.' },
    ],
  },

  // --- SMART SUMP PUMPS GUIDE ---
  'smart-sump-pumps-guide': {
    faq: [
      { q: 'What is a smart sump pump?', a: 'A smart sump pump connects to Wi-Fi or a smart home hub and sends alerts, tracks pump cycles, and can predict failures before they happen.' },
      { q: 'Are smart sump pumps worth the extra cost?', a: 'Yes, the early warning alerts alone can prevent thousands in flood damage. Most systems add $200-$500 to a standard pump setup.' },
    ],
    products: [
      { name: 'PumpSpy WiFi Sump Pump Monitor', description: 'Retrofit smart monitor that tracks pump cycles and sends alerts for failures or high water.' },
      { name: 'Basement Watchdog WiFi Module', description: 'Add-on WiFi module for existing sump pumps with app-based monitoring and alerts.' },
    ],
  },

  // --- BATTERY VS WATER-POWERED SUMP PUMPS ---
  'battery-vs-water-powered-sump-pumps': {
    faq: [
      { q: 'Which is better, battery or water-powered backup sump pump?', a: 'Battery backup pumps offer higher flow rates and work anywhere. Water-powered pumps never need charging but require municipal water pressure and waste water.' },
      { q: 'How long does a battery backup sump pump last during a power outage?', a: 'Most battery backup systems run 5-12 hours on a full charge, depending on the pump cycle frequency and battery capacity.' },
    ],
  },

  // --- CRYSTALLINE WATERPROOFING ---
  'crystalline-waterproofing': {
    faq: [
      { q: 'What is crystalline waterproofing?', a: 'Crystalline waterproofing uses reactive chemicals that penetrate concrete and form crystals when exposed to water, permanently sealing pores and micro-cracks.' },
      { q: 'Does crystalline waterproofing really heal cracks?', a: 'Yes, crystalline technology can self-heal hairline cracks up to 0.4mm wide when water reactivates the crystalline chemicals in the concrete.' },
    ],
  },

  // --- FOUNDATION CRACK REPAIR COST ---
  'foundation-crack-repair-cost': {
    faq: [
      { q: 'How much does it cost to fix a foundation crack?', a: 'Expect to pay $350-$1,500 per crack depending on severity and method. Epoxy injection averages $350-$600, polyurethane foam $400-$800.' },
      { q: 'Is epoxy or polyurethane better for foundation crack repair?', a: 'Epoxy creates a rigid, structural bond ideal for dry cracks. Polyurethane is flexible and better for actively leaking or moving cracks.' },
    ],
  },

  // --- FRENCH DRAIN COST ---
  'french-drain-cost': {
    faq: [
      { q: 'How much does a French drain cost in 2026?', a: 'Interior French drains cost $2,000-$6,000 for a typical basement. Exterior French drains cost $3,000-$10,000 depending on length and depth.' },
      { q: 'Can I install a French drain myself?', a: 'Exterior yard drains can be DIY. Interior basement French drains require jackhammering concrete and proper slope, so professional installation is recommended.' },
    ],
  },

  // --- SUMP PUMP COST ---
  'sump-pump-cost': {
    faq: [
      { q: 'How much does sump pump installation cost in 2026?', a: 'Sump pump installation costs $600-$2,500 including the pump, pit excavation, and discharge line. Battery backup adds $300-$1,000.' },
      { q: 'How often should you replace a sump pump?', a: 'Replace sump pumps every 7-10 years. Test monthly by pouring water into the pit. Replace sooner if it runs constantly or makes unusual noises.' },
    ],
  },

  // --- MOLD REMEDIATION COST ---
    'mold-remediation-cost': {
    faq: [
      { q: 'Is mold remediation worth the cost?', a: 'Yes. A small problem caught early costs $500 to $1,500. Left for six months, it can grow into a $5,000 to $10,000 project once it spreads behind walls and damages structural materials.' },
      { q: 'How long does mold remediation take?', a: 'Most basement jobs take 1 to 5 days. A small, contained area might be done in a single day. Larger projects involving demolition, structural drying, and reconstruction can take 1 to 2 weeks.' },
      { q: 'Can mold come back after remediation?', a: 'Yes, if the moisture source is not fixed. Mold spores are everywhere. Professional remediation removes the existing colony, but if the basement is still damp, new mold will colonize the same area.' },
      { q: 'What is the difference between mold removal and mold remediation?', a: 'Mold removal means getting rid of all mold, which is impossible. Mold remediation means returning mold levels to normal, safe levels by removing the colony, cleaning surfaces, and addressing the moisture source.' },
      { q: 'Should I leave my home during mold remediation?', a: 'For large jobs with significant demolition and HEPA filtration, yes. For small, well-contained jobs, leaving is not necessary but staying out of the work area is.' },
      { q: 'Does homeowners insurance cover mold remediation?', a: 'Only when mold was caused by a covered peril like a burst pipe. Gradual moisture-related mold is almost never covered. Many policies cap mold coverage at $5,000 to $10,000.' },
    ],
    howTo: {
      name: 'Professional Mold Remediation Process',
      description: 'Step-by-step overview of what professional mold remediation involves.',
      steps: [
        { name: 'Inspection and testing', text: 'Assess visible mold, check moisture levels, and take air or surface samples.' },
        { name: 'Containment', text: 'Seal the work area with plastic sheeting and negative air pressure to prevent spore spread.' },
        { name: 'Removal', text: 'Cut out contaminated porous materials, scrub non-porous surfaces, and apply antimicrobial solutions.' },
        { name: 'Drying and dehumidification', text: 'Thoroughly dry the space with commercial dehumidifiers and air movers.' },
        { name: 'Post-remediation testing', text: 'Independent tester confirms mold spore levels have returned to normal.' },
        { name: 'Reconstruction', text: 'Replace removed drywall, insulation, and other materials.' },
      ],
    },
  },

  // --- BASEMENT WATERPROOFING COST ---
  'basement-waterproofing-cost': {
    faq: [
      { q: 'What is the average cost of basement waterproofing?', a: 'The national average is $5,230. Interior systems run $3,000-$8,000 and exterior systems cost $8,000-$15,000.' },
      { q: 'Is basement waterproofing tax deductible?', a: 'Generally no for personal residences, but it may be deductible for rental properties as a maintenance expense. Consult a tax professional.' },
    ],
  },

  // --- SUMP PUMP BUYING GUIDE ---
  'sump-pump-buying-guide': {
    faq: [
      { q: 'What size sump pump do I need?', a: 'Most homes need a 1/3 HP pump. Homes with high water tables or large basements may need 1/2 HP. Calculate based on your pit fill rate and head height.' },
      { q: 'Do I need a battery backup sump pump?', a: 'Yes, a battery backup is strongly recommended. Power outages during storms are when your sump pump is needed most.' },
    ],
    products: [
      { name: 'Zoeller M53 Mighty-Mate', description: '1/3 HP submersible pump. The most recommended sump pump by contractors nationwide.' },
      { name: 'Wayne CDU980E', description: '3/4 HP submersible pump for high-volume applications and homes with high water tables.' },
      { name: 'Superior Pump 91250', description: 'Budget-friendly 1/4 HP utility pump for light-duty sump applications.' },
    ],
  },

  // --- WHY BASEMENT FLOODS WITH SUMP PUMP ---
  'why-basement-floods-with-sump-pump': {
    faq: [
      { q: 'Why is my basement flooding even though I have a sump pump?', a: 'Common causes include power outages without battery backup, clogged discharge lines, undersized pumps, stuck float switches, or overwhelmed capacity during heavy rain.' },
      { q: 'How do I prevent my sump pump from failing?', a: 'Test monthly, install battery backup, clean the pit annually, replace every 7-10 years, and add a water alarm near the pit.' },
    ],
  },

  // --- HOW TO FINISH A BASEMENT ---
  'how-to-finish-a-basement': {
    faq: [
      { q: 'Do I need a permit to finish my basement?', a: 'Yes, most jurisdictions require building permits for basement finishing that includes framing, electrical, plumbing, or egress modifications.' },
      { q: 'Should I waterproof before finishing my basement?', a: 'Absolutely. Address all moisture issues before framing or installing drywall. Waterproofing after finishing is far more expensive and disruptive.' },
    ],
    howTo: {
      name: 'How to Finish a Basement',
      description: 'Complete step-by-step guide to finishing a basement from permits to final touches.',
      steps: [
        { name: 'Get permits and plan', text: 'Pull building permits and create a detailed floor plan including electrical, plumbing, and egress requirements.' },
        { name: 'Waterproof and insulate', text: 'Fix all moisture issues, install vapor barriers, and add insulation to foundation walls.' },
        { name: 'Frame walls and ceiling', text: 'Build stud walls, frame around obstacles, and install ceiling framing or a drop ceiling grid.' },
        { name: 'Run electrical and plumbing', text: 'Install wiring, outlets, switches, and any plumbing rough-in for bathrooms or wet bars.' },
        { name: 'Install drywall and flooring', text: 'Hang and finish drywall, then install your chosen flooring material.' },
        { name: 'Finish and inspect', text: 'Paint, install trim, fixtures, and lighting. Schedule final building inspection.' },
      ],
    },
  },

  // --- DEHUMIDIFIER MYTHS ---
  'dehumidifier-myths': {
    faq: [
      { q: 'What size dehumidifier do I need for my basement?', a: 'Most basements need a 50-70 pint unit. Measure your space and humidity levels. A 30-pint unit is almost always insufficient for basements over 500 sq ft.' },
      { q: 'Should I run my basement dehumidifier all the time?', a: 'Yes, during humid months. Set it to maintain 45-50% RH and let it cycle automatically. Continuous drainage eliminates the need to empty the tank.' },
    ],
  },

  // --- RADON AND BASEMENT WATERPROOFING ---
  'radon-and-basement-waterproofing': {
    faq: [
      { q: 'Does waterproofing a basement reduce radon?', a: 'Sealing cracks and gaps can reduce radon entry points, but a dedicated radon mitigation system (sub-slab depressurization) is the most effective solution.' },
      { q: 'What radon level is dangerous in a basement?', a: 'The EPA recommends action at 4 pCi/L or above. Any level above 2 pCi/L warrants consideration of mitigation, especially in finished basements.' },
    ],
  },

  // --- WATERPROOFING HOME APPRAISAL VALUE ---
  'waterproofing-home-appraisal-value': {
    faq: [
      { q: 'Does waterproofing increase home value?', a: 'Yes. Professional waterproofing can increase home value by 5-15% and makes the home significantly easier to sell.' },
      { q: 'Do home appraisers check for basement waterproofing?', a: 'Appraisers note signs of water damage or active moisture. A dry, waterproofed basement with documentation positively impacts the appraisal.' },
    ],
  },

  // --- HOMEBUYERS BASEMENT INSPECTION CHECKLIST ---
  'homebuyers-basement-inspection-checklist': {
    howTo: {
      name: 'Basement Inspection Checklist for Homebuyers',
      description: 'Step-by-step inspection guide to spot hidden issues before purchasing a home.',
      steps: [
        { name: 'Check for water stains', text: 'Look for watermarks, tide lines, or discoloration on walls and floors indicating past flooding.' },
        { name: 'Inspect for mold', text: 'Check corners, behind stored items, and along baseboards for visible mold or musty odors.' },
        { name: 'Examine foundation walls', text: 'Look for cracks, bowing, or efflorescence (white mineral deposits) on concrete walls.' },
        { name: 'Test the sump pump', text: 'Pour water into the sump pit to verify the pump activates and drains properly.' },
        { name: 'Check for fresh paint', text: 'Fresh paint on basement walls may be covering water damage, mold, or cracks. Ask questions.' },
        { name: 'Look at the floor', text: 'Check for uneven floors, new concrete patches, or signs of previous flooding and repair.' },
      ],
    },
  },

  // --- HOW TO HIRE BASEMENT WATERPROOFING CONTRACTOR ---
  'how-to-hire-basement-waterproofing-contractor': {
    howTo: {
      name: 'How to Hire a Basement Waterproofing Contractor',
      description: 'Step-by-step guide to vetting and hiring a reliable waterproofing contractor.',
      steps: [
        { name: 'Get multiple quotes', text: 'Get at least 3 written estimates from different contractors. Compare scope of work, not just price.' },
        { name: 'Verify credentials', text: 'Check for proper licensing, insurance, and bonding in your state. Verify with your state licensing board.' },
        { name: 'Check reviews and references', text: 'Read online reviews and ask for at least 3 recent customer references you can contact.' },
        { name: 'Ask the right questions', text: 'Ask about warranty terms, materials used, timeline, and what happens if problems arise after completion.' },
        { name: 'Get everything in writing', text: 'Ensure the contract includes detailed scope, materials, timeline, payment schedule, and warranty terms.' },
      ],
    },
    faq: [
      { q: 'How do I avoid waterproofing scams?', a: 'Watch for high-pressure sales, cash-only demands, no written contract, no references, and companies that want full payment upfront.' },
      { q: 'What should a waterproofing warranty cover?', a: 'A good warranty covers materials and labor for at least 10 years, ideally transferable to the next homeowner.' },
    ],
  },

  // --- BASEMENT EMERGENCY WATER PLAN ---
  'basement-emergency-water-plan': {
    howTo: {
      name: 'Emergency Basement Flooding Action Plan',
      description: 'Step-by-step emergency plan for when water is flooding your basement right now.',
      steps: [
        { name: 'Ensure safety first', text: 'Do not enter standing water if it may contact electrical outlets. Turn off power at the breaker if safe to do so.' },
        { name: 'Stop the water source', text: 'Identify and stop the source if possible: shut off water main for plumbing leaks, or divert exterior water away from foundation.' },
        { name: 'Remove water quickly', text: 'Use a sump pump, wet/dry vacuum, or call a water removal service for large volumes.' },
        { name: 'Document the damage', text: 'Take photos and video of all damage before cleanup for insurance claims.' },
        { name: 'Dry the space', text: 'Run fans, dehumidifiers, and open windows to dry the basement as quickly as possible to prevent mold.' },
        { name: 'Contact your insurance', text: 'File a claim promptly and schedule a professional assessment of any structural damage.' },
      ],
    },
  },

  // --- BASEMENT RENOVATION MISTAKES ---
  'basement-renovation-mistakes': {
    faq: [
      { q: 'What is the biggest mistake in basement renovation?', a: 'Skipping waterproofing before finishing is the most expensive error, often costing $10,000-$25,000 to fix after the fact.' },
      { q: 'Do I need to waterproof before finishing my basement?', a: 'Yes. Every professional recommends addressing all moisture issues before framing, insulating, or installing drywall.' },
    ],
  },

  // --- MUSTY BASEMENT SMELL ---
  'musty-basement-smell': {
    faq: [
      { q: 'What causes a musty smell in a basement?', a: 'Musty odors come from mold, mildew, or bacteria thriving in damp conditions. High humidity, poor ventilation, and hidden moisture are the main culprits.' },
      { q: 'How do I get rid of a musty basement smell permanently?', a: 'Find and fix the moisture source, run a dehumidifier to maintain 40-50% humidity, improve ventilation, and clean affected surfaces with a vinegar solution.' },
    ],
    howTo: {
      name: 'How to Eliminate Musty Basement Smell',
      description: 'Step-by-step guide to finding the source and permanently eliminating musty basement odors.',
      steps: [
        { name: 'Find the source', text: 'Walk the basement and note where the smell is strongest. Check humidity with a hygrometer and inspect hidden areas.' },
        { name: 'Fix moisture issues', text: 'Address the root cause: fix leaks, improve exterior drainage, seal cracks, and extend downspouts.' },
        { name: 'Run a dehumidifier', text: 'Set a 50-pint or larger unit to maintain 40-50% relative humidity. Connect a drain hose for continuous operation.' },
        { name: 'Clean affected surfaces', text: 'Scrub walls and floors with a vinegar-water solution. Use a HEPA vacuum to capture mold spores.' },
        { name: 'Improve ventilation', text: 'Add fans, open windows on dry days, or install an exhaust fan to circulate air and prevent odor buildup.' },
        { name: 'Prevent recurrence', text: 'Store items in sealed bins off the floor. Monitor humidity regularly and inspect after heavy rain.' },
      ],
    },
  },

  // --- BASEMENT EFFLORESCENCE ---
  'basement-efflorescence': {
    faq: [
      { q: 'Is efflorescence on basement walls dangerous?', a: 'Efflorescence itself is not harmful, but it indicates water is moving through your concrete, which can lead to bigger moisture problems over time.' },
      { q: 'How do I remove efflorescence from basement walls?', a: 'Scrub with a stiff brush and white vinegar or a commercial efflorescence remover. Rinse thoroughly and address the moisture source to prevent return.' },
    ],
  },

  // --- BASEMENT ADU & RENTAL SUITE ---
  'basement-adu-rental-suite': {
    faq: [
      { q: 'Is a basement apartment legal?', a: 'Legality depends on local zoning laws and building codes. Most jurisdictions require proper egress, ceiling height, separate entrance, and permits.' },
      { q: 'How much does it cost to build a basement apartment?', a: 'A basic basement ADU conversion costs $50,000-$100,000+ including waterproofing, egress, bathroom, kitchenette, and separate entrance.' },
    ],
    howTo: {
      name: 'How to Create a Basement Rental Suite',
      description: 'Guide to converting your basement into a legal, profitable rental apartment.',
      steps: [
        { name: 'Check local zoning', text: 'Research ADU regulations in your area. Verify that basement apartments are permitted and understand all requirements.' },
        { name: 'Waterproof the space', text: 'Ensure the basement is completely dry. Install drainage systems and waterproofing before any finishing work.' },
        { name: 'Install egress', text: 'Add code-compliant egress windows or a separate entrance for emergency escape and natural light.' },
        { name: 'Build kitchen and bath', text: 'Install plumbing for a kitchenette and bathroom. Verify sewer line capacity for additional fixtures.' },
        { name: 'Finish and furnish', text: 'Complete framing, electrical, insulation, drywall, flooring, and fixtures. Pass all required inspections.' },
      ],
    },
  },

  // --- BASEMENT BATHROOM GUIDE ---
  'basement-bathroom-guide': {
    faq: [
      { q: 'How much does it cost to add a bathroom in a basement?', a: 'A basement bathroom costs $8,000-$25,000 depending on whether plumbing rough-in exists. Up-flush systems can reduce costs for homes without below-grade sewer access.' },
      { q: 'Do I need a special toilet for a basement bathroom?', a: 'If your sewer line is above the basement floor, you will need an up-flush (macerating) toilet system or a sewage ejector pump.' },
    ],
    howTo: {
      name: 'How to Add a Basement Bathroom',
      description: 'Complete guide to planning and building a bathroom in your basement.',
      steps: [
        { name: 'Plan the layout', text: 'Choose a location near existing plumbing if possible. Plan for toilet, sink, and shower or tub placement.' },
        { name: 'Check plumbing options', text: 'Determine if you have below-slab sewer access or need an ejector pump or up-flush system.' },
        { name: 'Get permits', text: 'Pull plumbing and building permits. Basement bathrooms require proper venting and drainage per code.' },
        { name: 'Install plumbing', text: 'Break concrete for drain lines if needed, or install above-floor macerating systems.' },
        { name: 'Waterproof and finish', text: 'Use moisture-resistant materials throughout. Install cement board, waterproof membranes, and mold-resistant drywall.' },
      ],
    },
  },

  // --- BASEMENT HOME GYM ---
  'basement-home-gym': {
    faq: [
      { q: 'Is a basement a good place for a home gym?', a: 'Yes, basements offer stable temperatures, sound isolation, and lower flooring costs. Address moisture and ventilation first for a safe workout environment.' },
      { q: 'What flooring is best for a basement gym?', a: 'Rubber gym tiles or interlocking rubber mats are the best choice. They protect concrete, dampen noise, and provide cushioning for equipment.' },
    ],
    howTo: {
      name: 'How to Build a Basement Home Gym',
      description: 'Guide to converting your basement into a functional workout space.',
      steps: [
        { name: 'Address moisture', text: 'Ensure the basement is dry. Run a dehumidifier and fix any water intrusion before installing equipment.' },
        { name: 'Install flooring', text: 'Lay rubber gym tiles or interlocking mats over the concrete floor for protection and cushioning.' },
        { name: 'Plan ventilation', text: 'Add fans or an exhaust system. Basements need extra airflow during workouts to manage humidity and air quality.' },
        { name: 'Set up equipment', text: 'Position heavy equipment on structural supports. Consider ceiling height for overhead exercises.' },
        { name: 'Add lighting and mirrors', text: 'Install bright LED lighting and wall mirrors to create an open, motivating workout environment.' },
      ],
    },
  },

  // --- OLD HOUSE BASEMENTS ---
  'old-house-basements': {
    faq: [
      { q: 'Can old basement walls be waterproofed?', a: 'Yes, but methods differ from modern homes. Stone and brick foundations require breathable solutions. Interior drainage systems work well for most older homes.' },
      { q: 'Should I insulate an old house basement?', a: 'Yes, but use breathable insulation like mineral wool or rigid foam with an air gap. Avoid trapping moisture against old stone or brick walls.' },
    ],
  },

  // --- SPRING BASEMENT CHECKLIST ---
  'spring-basement-checklist': {
    howTo: {
      name: 'Spring Basement Maintenance Checklist',
      description: 'Complete 13-step spring checklist to prepare your basement for the wet season.',
      steps: [
        { name: 'Clean gutters', text: 'Remove debris from all gutters and ensure downspouts extend at least 10 feet from the foundation.' },
        { name: 'Test sump pump', text: 'Pour water into the pit to verify it activates. Check battery backup charge level.' },
        { name: 'Inspect foundation', text: 'Walk the perimeter looking for new cracks, settling, or signs of water intrusion.' },
        { name: 'Check grading', text: 'Ensure soil slopes away from the house at least 6 inches over the first 10 feet.' },
        { name: 'Start dehumidifier', text: 'Set your dehumidifier to maintain 45-50% humidity as warm weather increases moisture levels.' },
        { name: 'Inspect window wells', text: 'Clear debris from window wells and verify covers are secure and draining properly.' },
        { name: 'Check emergency kit', text: 'Verify your basement emergency supplies including flashlights, batteries, and water removal tools.' },
      ],
    },
  },

  // --- BASEMENT FLOODING INSURANCE ---
  'basement-flooding-insurance': {
    faq: [
      { q: 'Does homeowners insurance cover basement flooding?', a: 'Standard policies typically cover sudden internal water damage like burst pipes, but NOT flood damage from external sources. You need separate flood insurance for that.' },
      { q: 'What is a water backup rider?', a: 'A water backup rider adds coverage for sewer or drain backup damage to your homeowners policy, usually for $40-$100 per year. Highly recommended for homes with basements.' },
      { q: 'How much does flood insurance cost?', a: 'NFIP flood insurance averages $700-$1,500 per year. Private flood insurance may offer lower rates depending on your risk zone and coverage needs.' },
    ],
  },

  // ---- CRYSTALLINE WATERPROOFING ----
  'crystalline-waterproofing': {
    faq: [
      { q: 'How long does crystalline waterproofing last?', a: 'For the life of the concrete. The crystals become a permanent, insoluble part of the concrete matrix and do not break down, peel, or degrade. The active chemicals reactivate when exposed to new moisture, so the system continues working for decades with no reapplication or maintenance needed.' },
      { q: 'Can I apply crystalline waterproofing myself?', a: 'Yes, for topical slurry applications on existing walls. The process involves prepping the surface, dampening the concrete, mixing the powder with water, and brushing or spraying it on in two coats. Major manufacturers like Xypex and Kryton sell products suitable for residential use.' },
      { q: 'Does crystalline waterproofing work from the inside (negative side)?', a: 'Yes. Because the chemicals travel through the concrete via diffusion, a topical application on the interior basement wall will migrate outward toward the water source. This means you can waterproof from inside the basement without excavating the exterior.' },
      { q: 'Will crystalline waterproofing stop a leaking basement?', a: 'It can significantly reduce or stop water transmission through the concrete walls themselves. However, it will not fix water coming through cracks wider than 0.5mm, construction joints, floor-wall junctions, or pipe penetrations. For a leaking basement, combine crystalline treatment with targeted repairs and potentially a drainage system.' },
      { q: 'Is crystalline waterproofing environmentally friendly?', a: 'Yes. Crystalline products are non-toxic, contain no VOCs, and do not leach harmful chemicals into soil or groundwater. The concrete can be fully recycled at end of life without separating any membrane or coating. Several crystalline products contribute to LEED and green building certifications.' },
    ],
  },
};

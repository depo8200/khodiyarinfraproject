export interface FreeResourceItem {
  id: string;
  slug: string;
  route: string;
  title: string;
  badge: string;
  summary: string;
  purpose: string;
  whoItIsFor: string;
  highlights: string[];
  estimatedReadOrAction: string;
  category: 'Guide' | 'Checklist' | 'Glossary';
}

export const FREE_RESOURCES_DIRECTORY: FreeResourceItem[] = [
  {
    id: 'peb-buyer-guide',
    slug: 'peb-buyer-guide',
    route: 'resources/free-resources/peb-buyer-guide',
    title: 'PEB Buyer & Technical Decision Guide',
    badge: 'Procurement Guide',
    summary: 'A structured, practical guide for industrial plant owners, promoters, and procurement heads evaluating Pre-Engineered Building solutions before committing capital.',
    purpose: 'Helps prospective buyers understand engineering parameters, evaluate vendor proposals objectively, verify quality standards, and avoid common procurement pitfalls.',
    whoItIsFor: 'Factory owners, warehouse developers, project heads, industrial promoters, and commercial procurement managers.',
    highlights: [
      'Core PEB components & architectural considerations',
      'Height, span, and bay spacing impact on steel economy',
      'Crucial questions to ask PEB manufacturers before award',
      'Factory fabrication vs. site fabrication quality parameters',
      'Pre-quotation information checklist for accurate bids'
    ],
    estimatedReadOrAction: '12 min comprehensive read',
    category: 'Guide'
  },
  {
    id: 'project-checklist',
    slug: 'project-checklist',
    route: 'resources/free-resources/project-checklist',
    title: 'PEB Project Execution & Site Checklist',
    badge: 'Site Management Checklist',
    summary: 'A field-tested, interactive checklist covering pre-construction verification, civil foundation coordination, trailer site access, and erection safety controls.',
    purpose: 'Assists site engineers and project managers in systematically verifying every stage of project readiness from anchor bolt surveying to final roof weather-tightness.',
    whoItIsFor: 'Site project managers, civil contractors, structural coordinators, and safety supervisors.',
    highlights: [
      'Project basics and intended industrial usage validation',
      'Site accessibility for 40-foot articulated transport trailers',
      'Anchor bolt survey tolerances & civil foundation handover',
      'High-altitude erection safety netting & crane setup zones',
      'Interactive browser check-off with clean printable format'
    ],
    estimatedReadOrAction: 'Interactive 35+ Point Checklist',
    category: 'Checklist'
  },
  {
    id: 'peb-requirement-checklist',
    slug: 'peb-requirement-checklist',
    route: 'resources/free-resources/peb-requirement-checklist',
    title: 'PEB Quotation Requirement Checklist',
    badge: 'Tender & RFQ Preparation',
    summary: 'A 20-category engineering questionnaire designed to help promoters capture all essential technical data needed by a PEB manufacturer to produce an accurate, firm proposal.',
    purpose: 'Eliminates quotation ambiguities, prevents variation claims, and ensures competitive tenders are compared on an exact apples-to-apples technical scope.',
    whoItIsFor: 'Architects, industrial consultants, structural designers, and corporate procurement teams.',
    highlights: [
      '20 structured requirement categories (dimensions, cranes, cladding, loads)',
      'Specific guidance for approximate vs. preliminary vs. firm parameters',
      'Clear span vs. center column structural trade-off parameters',
      'Insulation, ventilation, and rooftop solar load considerations',
      'Interactive progress tracker with print/export support'
    ],
    estimatedReadOrAction: 'Interactive 20-Category Brief',
    category: 'Checklist'
  },
  {
    id: 'peb-terminology-guide',
    slug: 'peb-terminology-guide',
    route: 'resources/free-resources/peb-terminology-guide',
    title: 'PEB & Structural Steel Terminology Guide',
    badge: 'Technical Glossary',
    summary: 'An accurate, accessible glossary defining over 35 essential Pre-Engineered Building and structural steel engineering terms with practical real-world context.',
    purpose: 'Bridges the communication gap between industrial business owners and structural engineering teams during design, estimation, and execution.',
    whoItIsFor: 'Industrial clients, site supervisors, junior engineers, students, and procurement executives.',
    highlights: [
      'Definitions for primary framing, secondary framing, and cladding systems',
      'Clear explanations of cold-formed purlins, HSFG bolts, and bracing types',
      'Searchable terms and category filters for rapid reference',
      'Practical engineering notes on each term without confusing academic jargon'
    ],
    estimatedReadOrAction: '35+ Searchable Definitions',
    category: 'Glossary'
  },
  {
    id: 'planning-guide',
    slug: 'planning-guide',
    route: 'resources/free-resources/planning-guide',
    title: 'Step-by-Step PEB Project Planning Guide',
    badge: 'Execution Framework',
    summary: 'A sequential 15-step planning roadmap for anyone planning an industrial building project from initial concept and site analysis through erection and handover.',
    purpose: 'Provides a clear visual sequence of critical path milestones, design approvals, fabrication lead times, and site readiness prerequisites.',
    whoItIsFor: 'First-time factory builders, expanding manufacturers, warehouse promoters, and project planners.',
    highlights: [
      '15 logical planning stages from building purpose to final handover',
      'Critical dependencies between civil foundations and steel fabrication',
      'How to evaluate and normalize vendor quotation variations',
      'Mitigating schedule delays during transport, monsoon, and crane erection',
      'Actionable checklist milestones for each planning stage'
    ],
    estimatedReadOrAction: '15-Step Roadmap & Milestones',
    category: 'Guide'
  }
];

// PEB Buyer Guide Data
export interface BuyerGuideSection {
  id: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  engineeringTip?: string;
}

export const PEB_BUYER_GUIDE_SECTIONS: BuyerGuideSection[] = [
  {
    id: 'what-is-peb',
    title: '1. What is a Pre-Engineered Building (PEB)?',
    content: 'A Pre-Engineered Building (PEB) is an engineered steel structure manufactured in an off-site factory environment and assembled on-site using bolted connections. Unlike conventional structural steel fabricated in the field with manual cutting and welding, PEB components use custom-tapered built-up members designed in accordance with internal bending moment curves. This delivers maximum strength at high-stress zones while eliminating surplus steel at low-stress areas, reducing total building weight by 20% to 35% compared to conventional truss construction.',
    bulletPoints: [
      'Engineered to Indian standards (IS 800:2007) and international codes (MBMA, AISC)',
      'Primary frames consist of tapered H-section columns and rafters fabricated from high-tensile steel plates (typically Grade 345 / 355 MPa)',
      'Secondary members (purlins and girts) are cold-formed Z or C sections engineered from galvanized steel coils',
      'Fast 100% bolted field assembly without on-site cutting or structural welding'
    ],
    engineeringTip: 'PEB is not a "readymade off-the-shelf shed" — every building is custom engineered for the specific wind zone, seismic zone, soil bearing capacity, and operational footprint of the site.'
  },
  {
    id: 'where-used',
    title: '2. Where PEB Buildings Are Commonly Used',
    content: 'Because of their high structural efficiency, wide clear spans, and rapid construction speed, PEBs have become the dominant choice for modern industrial and commercial facilities across Gujarat and India.',
    bulletPoints: [
      'Logistics Warehouses & Fulfillment Centers: 24m to 60m+ clear spans for high-density pallet racking and automated guided vehicles (AGVs)',
      'Manufacturing & Production Plants: Facilities requiring overhead EOT cranes (3T to 50T+), clear floor workflows, and vibration-isolated equipment foundations',
      'Cold Storage Facilities: Insulated envelopes utilizing PUF sandwich panels with zero thermal bridging',
      'Industrial Workshops & Fabrication Sheds: High clearance spaces with heavy gantry cranes, drive-through sliding doors, and natural ventilation',
      'Commercial Showrooms & Distribution Hubs: Modern architectural facades combined with column-free display floors',
      'Heavy Process Structures & Boiler Houses: Multi-tier industrial frames supporting heavy static and dynamic process equipment'
    ]
  },
  {
    id: 'main-components',
    title: '3. Main Components of a PEB Structure',
    content: 'A typical Pre-Engineered Building consists of four synchronized subsystem categories designed to act as an integrated structural diaphragm:',
    bulletPoints: [
      'Primary Framing: Built-up tapered steel columns and rafters, end-wall frames, crane runway beams, and portal frames that transfer gravity, wind, and seismic loads to foundations',
      'Secondary Framing: Cold-formed Z-sections and C-sections (purlins for roofs, girts for walls) that support the exterior cladding and provide lateral bracing to primary members',
      'Cladding & Sheeting: High-tensile profiled Galvalume steel sheets (bare or pre-painted with 150 GSM zinc-aluminum alloy) or insulated sandwich panels (PUF/Rockwool)',
      'Structural Connections & Bracing: High-Strength Friction Grip (HSFG) Grade 8.8 / 10.9 structural bolts, anchor bolts embedded in concrete pedestals, rod/cable cross bracing, and portal frames'
    ],
    engineeringTip: 'Ensure your quotation clearly specifies whether secondary members are pre-galvanized (e.g., 120 GSM or 275 GSM coating) or painted black steel, as this directly affects rust resistance.'
  },
  {
    id: 'project-planning',
    title: '4. Project Planning & Sequence',
    content: 'Successful PEB delivery relies on strict parallel track execution. Civil foundation construction at the jobsite occurs simultaneously with factory steel fabrication, compressing the overall project schedule by 40% to 50% compared to RCC or site-fabricated steel.',
    bulletPoints: [
      'Stage 1: Requirement definition, architectural layout, and soil geotechnical investigation',
      'Stage 2: Structural engineering, 3D modelling, and anchor bolt setting plan release',
      'Stage 3: Parallel execution — Civil contractor casts pedestals while the PEB plant fabricates steel components',
      'Stage 4: Factory quality inspections, shot blasting (SA 2.5), and protective priming',
      'Stage 5: Staged logistics dispatch matching the erection sequence',
      'Stage 6: Mobile crane erection, torque wrench bolting, cladding installation, and final waterproofing'
    ]
  },
  {
    id: 'building-requirements',
    title: '5. Determining Size, Height, and Usage',
    content: 'Deciding on building dimensions requires balancing internal operational clearances with structural steel economy. Clear height is measured from finished floor level (FFL) to the bottom of the rafter at the eave — not the roof ridge peak.',
    bulletPoints: [
      'Clear Height: For standard warehousing, 8m to 12m clear height allows 5 to 7 tiers of racking. For manufacturing with overhead cranes, clear height must account for hook height + hoist clearance + crane girder depth (typically 9m to 14m)',
      'Building Width & Clear Span: Clear spans from 18m to 35m offer the highest structural economy. Widths exceeding 40m without center columns will experience exponential increases in rafter depth and steel tonnage',
      'Bay Spacing: Longitudinal distance between main frames. An 8-meter or 9-meter bay spacing typically optimizes purlin steel consumption compared to very short (6m) or very long (12m) spans'
    ],
    engineeringTip: 'If your process layout can accommodate a single line of center columns, a multi-span frame (e.g., 2 x 25m) will save 15% to 25% in structural steel compared to an open 50m clear span.'
  },
  {
    id: 'openings-access',
    title: '6. Openings, Doors, and Material Flow',
    content: 'Industrial efficiency depends on unrestricted material handling. Openings must be engineered into the secondary framing during initial design rather than torch-cut at the site.',
    bulletPoints: [
      'Motorized Rolling Shutters: Typical sizes range from 4m x 4.5m for standard trucks to 6m x 6m for large flatbed trailers and container trucks',
      'Dock Levelers: Raised loading platforms (1.2m above grade) with canopy overhangs protecting cargo during monsoon rain',
      'Personnel Emergency Doors: Single and double leaf fire-rated hollow metal doors positioned along statutory exit travel distances',
      'Polycarbonate Skylights: Typically 5% to 8% of roof area to provide 150–200 lux natural daylighting without artificial lighting during daylight hours'
    ]
  },
  {
    id: 'insulation-considerations',
    title: '7. Insulation & Thermal Performance',
    content: 'Uninsulated single-skin metal sheds can reach internal temperatures 6°C to 10°C higher than ambient temperatures due to intense solar radiation on steel roof panels.',
    bulletPoints: [
      'Glasswool with Reinforced Aluminum Foil (50mm / 16 kg/m³ or 24 kg/m³): Economical and standard for dry warehouses and general fabrication sheds',
      'PUF / PIR Sandwich Panels (30mm to 100mm): Factory-injected polyurethane rigid foam offering thermal conductivity (k = 0.022 W/mK) for pharmaceuticals, cold stores, and air-conditioned plants',
      'Rockwool Sandwich Panels: Non-combustible mineral wool cores providing 1 to 2 hour fire ratings required for hazardous chemical storage or fire-prone industrial zones'
    ]
  },
  {
    id: 'ventilation-considerations',
    title: '8. Natural Ventilation & Air Exchanges',
    content: 'Proper air circulation prevents heat buildup, stale air pockets, and under-roof condensation. Passive ventilation solutions operate with zero electricity consumption.',
    bulletPoints: [
      'Continuous Gravity Ridge Ventilators: Throat openings from 600mm to 1200mm installed along the roof ridge with integrated bird mesh and rain gutters, utilizing natural thermal buoyancy',
      'Industrial Wall Louvers: Weather-proof storm louvers installed in the bottom 2.5 meters of sidewalls to supply fresh air while ridge vents exhaust heated air',
      'Power Roof Exhausts: Axial roof exhaust fans for high heat-generating plants (die-casting, forging, heat treatment)'
    ]
  },
  {
    id: 'crane-requirements',
    title: '9. Overhead Crane Provisions (EOT Cranes)',
    content: 'Incorporating an overhead crane has a substantial impact on building design. The structural frame must withstand vertical wheel loads, longitudinal traction forces, and lateral surge forces from the moving trolley.',
    bulletPoints: [
      'Crane Capacity & Class: 5T, 10T, 20T, or 50T+ with operational duty class according to IS 3177 / IS 807 (Class I light, Class II medium, Class III heavy duty)',
      'Crane Runway Brackets: Welded directly onto primary columns during factory fabrication to ensure structural integrity and correct rail alignment',
      'Crane Runway Girders & Rails: Sized for maximum wheel loads and deflection limits (typically L/600 to L/1000 to prevent crane crab binding)',
      'Down-Shop Conductor (DSL): Clear electrical routing zones free of frame interference'
    ],
    engineeringTip: 'Always provide the crane manufacturer’s wheel load diagram and crab dimension envelope to your PEB engineer during initial sizing to prevent costly frame reinforcement later.'
  },
  {
    id: 'future-expansion',
    title: '10. Future Expansion Provisions',
    content: 'Industrial enterprises frequently outgrow their initial floor space within 3 to 5 years. Factoring expansion provisions into the initial structural engineering eliminates disruptive shutdowns later.',
    bulletPoints: [
      'Longitudinal Expansion: Design the endwall with post-and-beam frames that can be easily unbolted and relocated, or incorporate an expandable rigid frame ready for future bays',
      'Transverse Expansion: Planning lean-to canopies or adjoining multi-bay wings along the sidewalls',
      'Mezzanine Provisions: Column connection cleats and foundation capacities designed for future administrative or storage mezzanine floors'
    ]
  },
  {
    id: 'fabrication-erection-quality',
    title: '11. Fabrication & Erection Quality Checkpoints',
    content: 'The durability of a steel structure is determined by the quality of factory manufacturing and site erection. Hand-cut site steel cannot match automated factory tolerances.',
    bulletPoints: [
      'Raw Steel Plate Certification: Insist on Grade 345 / 355 MPa certified steel with original Mill Test Reports (MTRs) according to IS 2062',
      'Submerged Arc Welding (SAW): Full-penetration automatic SAW for column and rafter web-to-flange welds, minimizing internal weld stress and defects',
      'Surface Preparation: Automated shot blasting to SA 2.5 finish before primer application to ensure paint adhesion and prevent premature rust',
      'Torque Tightening: High-strength bolts must be tightened with calibrated torque wrenches or turn-of-nut methods — not uncalibrated site spanners'
    ]
  },
  {
    id: 'questions-to-ask-vendors',
    title: '12. Essential Questions to Ask a PEB Company',
    content: 'Before signing a contract, verify the vendor’s engineering depth, plant capacity, and erection accountability:',
    bulletPoints: [
      'Do you fabricate in an in-house factory, or do you sub-contract fabrication to third-party workshops?',
      'What design software and design standards (IS 800:2007, IS 875 wind codes) are used for your structural calculation report?',
      'Are anchor bolt templates and setting plans provided with total station survey supervision?',
      'What is your in-house quality testing protocol (Ultrasonic weld testing, Dye-penetrant testing, Paint DFT checks)?',
      'Do you provide single-source turnkey erection with your own trained crew and crane rigging supervision?'
    ]
  },
  {
    id: 'info-for-quote',
    title: '13. Information Needed for an Accurate Quotation',
    content: 'Providing incomplete information results in vague budgetary estimates with heavy variation contingencies. Prepare these items for your RFQ:',
    bulletPoints: [
      'Plot boundaries and approximate building footprint (Length x Width x Eave Height in meters)',
      'Geographical project location for wind speed (e.g. 44 m/s in Vadodara) and seismic zone',
      'Clear span requirement (column-free) or acceptable center column locations',
      'Overhead crane requirements: Capacity in metric tons, hook height, crane span, and duty cycle',
      'Cladding preferences: Bare Galvalume vs. color coated vs. insulated sandwich panels',
      'Target commissioning deadline and site readiness status'
    ]
  },
  {
    id: 'cost-factors-decisions',
    title: '14. Critical Factors Affecting PEB Project Cost',
    content: 'Structural steel is priced by weight (tonnage) plus engineering, logistics, and erection. The following decisions have the greatest financial impact on your project:',
    bulletPoints: [
      'Span Width: Spans exceeding 36m without center columns increase steel tonnage per square meter significantly',
      'Bay Spacing: Standardizing bay spacing at 7.5m to 9.0m achieves maximum purlin and rafter weight optimization',
      'Wind & Seismic Classification: High cyclone coastal belts (e.g., Kutch, Jamnagar) require heavier bracing and thicker sheeting',
      'Paint & Protective Coating: Special polyurethane (PU) or epoxy systems for corrosive chemical environments increase finishing costs but protect assets for decades',
      'Single-Source Turnkey Accountability: Eliminates costly finger-pointing between design engineers, fabrication plants, and site erection contractors'
    ]
  }
];

// PEB Project Checklist Data
export interface ChecklistItem {
  id: string;
  label: string;
  subtext?: string;
  critical?: boolean;
}

export interface ChecklistSection {
  id: string;
  title: string;
  iconName: string;
  description: string;
  items: ChecklistItem[];
}

export const PEB_PROJECT_CHECKLIST_DATA: ChecklistSection[] = [
  {
    id: 'project-basics',
    title: 'Section 1: Project Basics & Intended Purpose',
    iconName: 'Building',
    description: 'Establish foundational project definitions and operational constraints.',
    items: [
      { id: 'pb-1', label: 'Project Name and Formal Entity Identified', subtext: 'Client name, operating company, and statutory billing entity.', critical: true },
      { id: 'pb-2', label: 'Primary Building Purpose Defined', subtext: 'Warehouse, manufacturing, assembly, cold storage, workshop, or mixed-use.', critical: true },
      { id: 'pb-3', label: 'Exact Project Geographic Location & Pin Code', subtext: 'Required to extract IS 875 wind velocity and IS 1893 seismic zone data.', critical: true },
      { id: 'pb-4', label: 'Operational Footprint & Workflow Layout Mapped', subtext: 'Internal equipment placements, forklift movement corridors, and storage racks.', critical: false },
      { id: 'pb-5', label: 'Target Completion & Commissioning Date Established', subtext: 'Factory production schedule backwards-mapped from commissioning deadline.', critical: true }
    ]
  },
  {
    id: 'building-requirements',
    title: 'Section 2: Building Geometry & Structural Sizing',
    iconName: 'Ruler',
    description: 'Define approximate physical envelope dimensions and structural spans.',
    items: [
      { id: 'br-1', label: 'Building Length (Meters / Feet)', subtext: 'Total out-to-out distance along the longitudinal sidewalls.', critical: true },
      { id: 'br-2', label: 'Building Width (Meters / Feet)', subtext: 'Out-to-out distance across the transverse gable endwalls.', critical: true },
      { id: 'br-3', label: 'Clear Eave Height Defined', subtext: 'Clearance from finished floor level (FFL) to bottom of rafter flange.', critical: true },
      { id: 'br-4', label: 'Clear Span vs. Center Column Evaluation', subtext: 'Determine if internal columns are acceptable to reduce structural steel tonnage.', critical: true },
      { id: 'br-5', label: 'Optimum Bay Spacing Selected (e.g. 7.5m – 9.0m)', subtext: 'Matches purlin capacity and maximizes steel economy.', critical: false },
      { id: 'br-6', label: 'Roof Slope Configured (Standard 1:10 or 1:12)', subtext: 'Ensures rapid monsoon stormwater discharge across roof sheets.', critical: false },
      { id: 'br-7', label: 'Future Longitudinal or Sidewall Expansion Allowance', subtext: 'Endwall frames designed as expandable rigid frames where planned.', critical: false }
    ]
  },
  {
    id: 'site-information',
    title: 'Section 3: Site Information & Physical Access',
    iconName: 'Compass',
    description: 'Verify jobsite logistics, approach roads, and soil conditions.',
    items: [
      { id: 'si-1', label: 'Geotechnical Soil Investigation Report Available', subtext: 'Safe bearing capacity (SBC) in T/m² and water table depth.', critical: true },
      { id: 'si-2', label: 'Approach Road Clearance for 40-Foot Trailers', subtext: 'Minimum 6-meter turning radius and 4.5-meter overhead wire clearance.', critical: true },
      { id: 'si-3', label: 'Site Unloading & Laydown Staging Area Allocated', subtext: 'Compacted dry ground adjacent to foundation pedestals for sorting steel.', critical: true },
      { id: 'si-4', label: 'Overhead High-Tension Electrical Cable Clearances Verified', subtext: 'Strict safety clearance from 11kV/66kV transmission corridors.', critical: true },
      { id: 'si-5', label: 'Adequate Groundwater Drainage / No Standing Water', subtext: 'Storm runoff prevented from flooding pedestal anchor bolt pockets.', critical: false },
      { id: 'si-6', label: 'Mobile Crane Working Radius & Stabilizer Footing Verified', subtext: 'Compacted soil capacity capable of bearing 25T–50T hydraulic crane outriggers.', critical: true }
    ]
  },
  {
    id: 'functional-requirements',
    title: 'Section 4: Functional Requirements & Accessories',
    iconName: 'Layers',
    description: 'Ensure operational accessories and daylighting elements are accounted for.',
    items: [
      { id: 'fr-1', label: 'Industrial Shutter Openings (Quantity & Dimensions)', subtext: 'Motorized vs. chain-pulley rolling shutters with wind-lock guides.', critical: true },
      { id: 'fr-2', label: 'Loading Canopies / Dock Overhangs Specified', subtext: 'Cantilevered steel canopies extending 3m to 6m over truck loading bays.', critical: false },
      { id: 'fr-3', label: 'Polycarbonate Roof Skylights (5% to 8% Roof Area)', subtext: 'UV-coated non-yellowing daylight sheets matched to metal roof profile.', critical: false },
      { id: 'fr-4', label: 'Continuous Natural Ridge Ventilators Configured', subtext: 'Gravity ventilators (600mm to 1200mm throat) along the roof ridge.', critical: false },
      { id: 'fr-5', label: 'Wall Louvers & Industrial Exhaust Fans Allocated', subtext: 'Bottom perimeter airflow louvers to establish cross ventilation.', critical: false },
      { id: 'fr-6', label: 'Roof / Wall Thermal Insulation Selection Made', subtext: 'Bare sheeting vs. 50mm Glasswool vs. PUF sandwich panels.', critical: true },
      { id: 'fr-7', label: 'Overhead EOT Crane Parameters Confirmed', subtext: 'Capacity (Tons), span, hook height, and bridge rail length.', critical: false }
    ]
  },
  {
    id: 'project-execution',
    title: 'Section 5: Project Execution & Quality Assurance',
    iconName: 'ShieldCheck',
    description: 'Establish fabrication, logistics, and erection compliance standards.',
    items: [
      { id: 'pe-1', label: 'Certified Mill Steel Plates Specified (IS 2062 Gr. E350 / E250)', subtext: 'Raw material accompanied by authentic mill test certificates (MTR).', critical: true },
      { id: 'pe-2', label: 'Automated Submerged Arc Welding (SAW) Mandated', subtext: 'Continuous automated flange-to-web welding on all primary members.', critical: true },
      { id: 'pe-3', label: 'Surface Preparation to SA 2.5 Shot Blasting', subtext: 'Pre-paint abrasive blasting to ensure rust prevention coating bonding.', critical: true },
      { id: 'pe-4', label: 'Anchor Bolt Template & Total Station Survey Verification', subtext: 'Rigid steel templates used during civil casting to maintain 2mm tolerance.', critical: true },
      { id: 'pe-5', label: 'High-Strength Bolt Torque Verification on Site', subtext: 'Calibrated torque wrenches used on all primary moment splice joints.', critical: true },
      { id: 'pe-6', label: 'Erection Safety Protocol (HSE) & Safety Netting Installed', subtext: '100% harness hook-up, perimeter safety lifelines, and certified riggers.', critical: true }
    ]
  },
  {
    id: 'documents-information',
    title: 'Section 6: Drawings & Information Checklist',
    iconName: 'FileText',
    description: 'Prepare documentation prior to releasing technical RFQ tenders.',
    items: [
      { id: 'di-1', label: 'Architectural Layout & Plot Plan Drawing (CAD / PDF)', subtext: 'Shows property lines, setbacks, adjoining roads, and entry gates.', critical: true },
      { id: 'di-2', label: 'Soil Geotechnical Report with SBC Recommendations', subtext: 'Defines isolated vs. pile foundation criteria for civil design.', critical: true },
      { id: 'di-3', label: 'Crane Wheel Load Diagram (from Crane Manufacturer)', subtext: 'If cranes are installed, crane supplier load data sheet is required.', critical: false },
      { id: 'di-4', label: 'Electrical Substation & Utility Entry Locations', subtext: 'Enables proper cable tray and utility pipe hanger placement.', critical: false },
      { id: 'di-5', label: 'Local Municipal / GIDC Building Bylaw Setbacks Confirmed', subtext: 'Ensures roof eaves and canopies respect legal boundary lines.', critical: true }
    ]
  }
];

// PEB Requirement Checklist (20 Categories)
export interface RequirementCategory {
  id: string;
  categoryNumber: number;
  title: string;
  description: string;
  guidanceText: string;
  fields: {
    name: string;
    label: string;
    placeholder: string;
    type: 'text' | 'select' | 'checkbox';
    options?: string[];
    isApproximate?: boolean;
    helper?: string;
  }[];
}

export const PEB_REQUIREMENT_CATEGORIES: RequirementCategory[] = [
  {
    id: 'client-info',
    categoryNumber: 1,
    title: 'Client & Enterprise Information',
    description: 'Basic business and project promoter contact details.',
    guidanceText: 'Provide primary contact information for engineering correspondence.',
    fields: [
      { name: 'companyName', label: 'Company / Enterprise Name', placeholder: 'e.g. Acme Polymers Pvt Ltd', type: 'text' },
      { name: 'contactPerson', label: 'Project Head / Contact Person', placeholder: 'Name and designation', type: 'text' },
      { name: 'phone', label: 'Phone / WhatsApp Number', placeholder: '+91 98765 43210', type: 'text' },
      { name: 'email', label: 'Official Business Email', placeholder: 'projects@company.com', type: 'text' }
    ]
  },
  {
    id: 'project-location',
    categoryNumber: 2,
    title: 'Project Location & Environmental Parameters',
    description: 'Geographic parameters determine wind and seismic design loads.',
    guidanceText: 'Wind speed under IS 875 Part 3 and seismic zone under IS 1893 are directly derived from the site location.',
    fields: [
      { name: 'cityEstate', label: 'City / GIDC Industrial Estate', placeholder: 'e.g. Halol GIDC, Vadodara, Sanand GIDC', type: 'text' },
      { name: 'state', label: 'State / Territory', placeholder: 'Gujarat, India', type: 'text' },
      { name: 'terrainCategory', label: 'Terrain Category (IS 875)', placeholder: 'Select if known', type: 'select', options: ['Category 1 (Exposed Open)', 'Category 2 (Scattered Obstacles - Typical GIDC)', 'Category 3 (Built-up Industrial)', 'Not Known / Standard Engineering'] }
    ]
  },
  {
    id: 'building-purpose',
    categoryNumber: 3,
    title: 'Building Purpose & Operational Sector',
    description: 'Dictates internal environmental design, ventilation, and fire precautions.',
    guidanceText: 'Specify if corrosive chemicals, high heat, food-grade hygiene, or heavy vibration equipment are present.',
    fields: [
      { name: 'industrySector', label: 'Industry Sector', placeholder: 'Select sector', type: 'select', options: ['Logistics & Warehousing', 'Engineering & Machine Shop', 'Chemical & Plastics', 'Pharma & Clean Room', 'Textile & Garments', 'Food Processing & Cold Chain', 'Other Industrial'] },
      { name: 'processDescription', label: 'Internal Operations Brief', placeholder: 'Brief summary of what happens inside the building', type: 'text' }
    ]
  },
  {
    id: 'building-dimensions',
    categoryNumber: 4,
    title: 'Building Dimensions (Approximate or Final)',
    description: 'Primary structural geometry defining square footage and volume.',
    guidanceText: 'Approximate dimensions are completely acceptable at the preliminary inquiry stage.',
    fields: [
      { name: 'buildingLength', label: 'Length (Meters or Feet)', placeholder: 'e.g. 60m (approx.)', type: 'text', isApproximate: true },
      { name: 'buildingWidth', label: 'Width (Meters or Feet)', placeholder: 'e.g. 24m (approx.)', type: 'text', isApproximate: true },
      { name: 'clearHeight', label: 'Clear Eave Height (Meters)', placeholder: 'e.g. 9.0m to bottom of rafter', type: 'text', isApproximate: true },
      { name: 'totalFloorArea', label: 'Total Built-up Area (Sq Ft / Sq M)', placeholder: 'e.g. 15,000 sq ft', type: 'text', isApproximate: true }
    ]
  },
  {
    id: 'structural-requirements',
    categoryNumber: 5,
    title: 'Structural Framing & Column Arrangement',
    description: 'Internal column layout directly dictates structural steel tonnage.',
    guidanceText: 'A clear span offers column-free floor space. A center-column layout can reduce structural steel weight by 15–20%.',
    fields: [
      { name: 'spanType', label: 'Framing Span Arrangement', placeholder: 'Select configuration', type: 'select', options: ['100% Clear Span (No Center Columns)', 'Multi-Span (1 Row Center Columns)', 'Multi-Span (2+ Rows Center Columns)', 'Open to Structural Engineer Recommendation'] },
      { name: 'preferredBaySpacing', label: 'Preferred Bay Spacing', placeholder: 'Standard 7.5m to 9.0m', type: 'select', options: ['Standard 7.5m to 8.5m', 'Long Bay 9.0m to 10.0m', 'Short Bay 6.0m', 'As per PEB Engineer Optimization'] }
    ]
  },
  {
    id: 'architectural-features',
    categoryNumber: 6,
    title: 'Architectural Features, Fascias & Canopies',
    description: 'Exterior visual profiles and loading dock weather canopies.',
    guidanceText: 'Parapet fascias hide roof slopes to create a clean rectangular commercial facade.',
    fields: [
      { name: 'fasciaType', label: 'Building Roofline Facade', placeholder: 'Select fascia style', type: 'select', options: ['Standard Gabled Roof (No Fascia)', 'Straight Parapet Fascia (Hides Gable)', 'Curved Eave Architectural Trim'] },
      { name: 'canopyRequirements', label: 'Truck Loading Canopies', placeholder: 'e.g. 4.5m cantilever canopy along front side', type: 'text', isApproximate: true }
    ]
  },
  {
    id: 'doors-openings',
    categoryNumber: 7,
    title: 'Industrial Doors, Openings & Access Gates',
    description: 'Cutout provisions required in secondary steel wall framing.',
    guidanceText: 'Provide approximate quantities; exact placement can be coordinated in shop drawings.',
    fields: [
      { name: 'rollingShutters', label: 'Rolling Shutters (Size & Quantity)', placeholder: 'e.g. 4 Nos, 4.5m wide x 5.0m high', type: 'text', isApproximate: true },
      { name: 'dockLevelers', label: 'Dock Leveler Openings (If Any)', placeholder: 'e.g. 2 Nos for container docks', type: 'text' },
      { name: 'personnelDoors', label: 'Emergency Exit Doors', placeholder: 'e.g. 4 Nos fire exit single doors', type: 'text' }
    ]
  },
  {
    id: 'roof-requirements',
    categoryNumber: 8,
    title: 'Roof Sheeting & Fastening System',
    description: 'Weather barrier safeguarding capital equipment and raw materials.',
    guidanceText: 'Standing seam roofs offer 100% 360-degree mechanically seamed joints without through-sheet screw punctures.',
    fields: [
      { name: 'roofProfile', label: 'Roof System Preference', placeholder: 'Select system', type: 'select', options: ['Trapezoidal Screw-Down (0.50mm Bare Galvalume)', 'Trapezoidal Screw-Down (0.50mm Color Coated)', 'Standing Seam (Double-Lock Mechanically Seamed)', 'Insulated PUF Sandwich Panel Roof', 'Engineer to Recommend'] },
      { name: 'skylightDaylighting', label: 'Natural Polycarbonate Skylights', placeholder: 'Select percentage', type: 'select', options: ['5% of Roof Area (Standard)', '7% to 8% of Roof Area', 'None / Artificial Lighting Only'] }
    ]
  },
  {
    id: 'wall-requirements',
    categoryNumber: 9,
    title: 'Wall Sheeting & Masonry Wall Heights',
    description: 'Enclosure combination of brickwork/dado walls and steel cladding.',
    guidanceText: 'A 2m to 3m brick wall at the bottom provides forklift impact resistance and site security.',
    fields: [
      { name: 'wallEnclosure', label: 'Wall Cladding Arrangement', placeholder: 'Select configuration', type: 'select', options: ['Full Height Steel Sheeting (from FFL to Eave)', '3.0m Brick Masonry + Steel Sheeting Above', '2.0m Brick Masonry + Steel Sheeting Above', 'PUF Insulated Sandwich Panels Full Height'] },
      { name: 'wallColor', label: 'Color Coated Sheet Preference', placeholder: 'e.g. Off-White, Sky Blue, Caulfield Green', type: 'text' }
    ]
  },
  {
    id: 'insulation-spec',
    categoryNumber: 10,
    title: 'Thermal Insulation Specifications',
    description: 'Controls radiant summer heat and prevents internal condensation.',
    guidanceText: 'Insulation substantially reduces interior ambient heat and cuts HVAC electric bills.',
    fields: [
      { name: 'insulationType', label: 'Roof / Wall Insulation', placeholder: 'Select insulation', type: 'select', options: ['50mm Glasswool with Alupet Foil (Standard)', '50mm Rockwool (Fire-Rated)', 'PUF / PIR Sandwich Panels (High-Efficiency)', 'Uninsulated / Single-Skin Only'] }
    ]
  },
  {
    id: 'ventilation-spec',
    categoryNumber: 11,
    title: 'Natural & Mechanical Ventilation',
    description: 'Exhausts hot air plumes and brings in continuous fresh air exchanges.',
    guidanceText: 'Gravity ridge ventilators have zero operational and electrical maintenance costs.',
    fields: [
      { name: 'ridgeVentilators', label: 'Continuous Ridge Ventilators', placeholder: 'Select option', type: 'select', options: ['Continuous 600mm Throat (Standard)', 'Continuous 900mm–1200mm Throat (High-Heat Shed)', 'None / Standard Ridge Cap'] },
      { name: 'wallLouvers', label: 'Wall Airflow Louvers', placeholder: 'e.g. 1.2m high continuous louvers along side walls', type: 'text', isApproximate: true }
    ]
  },
  {
    id: 'crane-provisions',
    categoryNumber: 12,
    title: 'Overhead EOT Crane Requirements',
    description: 'Crane capacity dictates column sizing, base plates, and foundations.',
    guidanceText: 'State capacity in metric tons. If cranes are future additions, brackets can be pre-welded now.',
    fields: [
      { name: 'craneRequired', label: 'Crane Requirement Status', placeholder: 'Select status', type: 'select', options: ['No Crane Required', 'Active Crane Provision (Immediate)', 'Future Crane Provision (Brackets & Load Allowance Only)'] },
      { name: 'craneTonnage', label: 'Crane Lifting Capacity (Tons)', placeholder: 'e.g. 10 Ton, 20 Ton, 30 Ton (if applicable)', type: 'text', isApproximate: true },
      { name: 'craneHookHeight', label: 'Required Hook Lift Height (Meters)', placeholder: 'e.g. 6.5m clear under hook', type: 'text', isApproximate: true }
    ]
  },
  {
    id: 'utilities-services',
    categoryNumber: 13,
    title: 'Utilities, Solar Loads & Ceiling Suspensions',
    description: 'Extra dead and live loads that must be accounted for in structural calculations.',
    guidanceText: 'Rooftop solar typically adds 15–20 kg/m² of dead load to rafters and purlins.',
    fields: [
      { name: 'solarRoofLoad', label: 'Rooftop Solar PV Panels Planned?', placeholder: 'Select solar status', type: 'select', options: ['Yes - Design for 15-20 kg/m² Solar Load', 'No Solar Panels Anticipated', 'Undecided / Provide Standard Margin'] },
      { name: 'suspendedEquipment', label: 'Heavy Suspended Ducts, Monorails or Piping', placeholder: 'Describe any heavy equipment hung from rafters', type: 'text' }
    ]
  },
  {
    id: 'future-expansion-plans',
    categoryNumber: 14,
    title: 'Future Expansion Intent',
    description: 'Allows expandable frames to be fabricated during Phase 1.',
    guidanceText: 'Expandable endwalls allow extending the building by unbolting panels without downtime.',
    fields: [
      { name: 'expansionIntent', label: 'Future Expansion Direction', placeholder: 'Select plan', type: 'select', options: ['Expandable Lengthwise along Endwall', 'Expandable Widthwise along Sidewall', 'No Future Expansion Planned'] }
    ]
  },
  {
    id: 'site-conditions',
    categoryNumber: 15,
    title: 'Soil Conditions & Foundation Readiness',
    description: 'Determines the footing geometry and anchor bolt embedment depth.',
    guidanceText: 'Safe bearing capacity (SBC) from a soil bore test ensures accurate civil pedestal design.',
    fields: [
      { name: 'soilSbc', label: 'Safe Bearing Capacity (SBC in T/m²)', placeholder: 'e.g. 15 T/m², 20 T/m² (if tested)', type: 'text', isApproximate: true },
      { name: 'civilContractorAssigned', label: 'Civil Foundation Contractor Status', placeholder: 'Select status', type: 'select', options: ['Client has assigned Civil Contractor', 'Civil Foundations in Client Scope', 'Seeking Turnkey Civil + PEB Scope'] }
    ]
  },
  {
    id: 'transportation-access',
    categoryNumber: 16,
    title: 'Transportation & Logistics Access',
    description: 'Ensures long fabricated rafter and column sections can reach the site.',
    guidanceText: 'Standard PEB rafters are 12m to 14m long and require 40-foot articulated trail access.',
    fields: [
      { name: 'trailerAccess', label: '40-Foot Trailer Road Access', placeholder: 'Select access status', type: 'select', options: ['Direct Wide Access Road Available', 'Restricted Turns / Short Trailer Splicing Required', 'City Night-Only Transport Regulations Apply'] }
    ]
  },
  {
    id: 'erection-staging',
    categoryNumber: 17,
    title: 'Erection Prerequisites & Site Power',
    description: 'Prerequisites for mobilization of mobile cranes and erection crews.',
    guidanceText: 'Site electricity and safe laydown space are required before steel arrives.',
    fields: [
      { name: 'sitePowerWater', label: 'Site 3-Phase Power & Water Available?', placeholder: 'Select availability', type: 'select', options: ['Yes, Grid Power Available on Site', 'Temporary Diesel Generator Planned', 'Client will arrange prior to mobilization'] }
    ]
  },
  {
    id: 'special-specifications',
    categoryNumber: 18,
    title: 'Special Coating & Corrosion Protection',
    description: 'Corrosive chemical atmospheres require specialized paint systems.',
    guidanceText: 'Standard specification is red oxide / zinc chromate primer. Chemical plants require epoxy.',
    fields: [
      { name: 'protectiveCoating', label: 'Paint & Surface Coating System', placeholder: 'Select coating', type: 'select', options: ['Standard Red Oxide / Synthetic Primer (50-60 microns)', 'High-Build Epoxy Primer + PU Topcoat (100-120 microns)', 'Hot-Dip Galvanized Structural Steel', 'Engineer to Recommend based on Environment'] }
    ]
  },
  {
    id: 'documents-provided',
    categoryNumber: 19,
    title: 'Documents Available (If Any)',
    description: 'Existing architectural and plot plan assets available for review.',
    guidanceText: 'Mention whatever files are currently available to speed up the quotation.',
    fields: [
      { name: 'availableDocs', label: 'Existing Available Drawings', placeholder: 'e.g. Architectural floor layout, Plot boundaries, Soil test report', type: 'text' }
    ]
  },
  {
    id: 'quotation-expectations',
    categoryNumber: 20,
    title: 'Tender Timeline & Quotation Stage',
    description: 'Helps engineering prioritize budgetary vs. firm contractual estimates.',
    guidanceText: 'State your procurement timeframe and when you anticipate project groundbreaking.',
    fields: [
      { name: 'quoteTypeNeeded', label: 'Estimate Type Required', placeholder: 'Select requirement', type: 'select', options: ['Preliminary Budgetary Estimate (Feasibility)', 'Firm Technical & Commercial Proposal (Immediate Award)', 'Tender BOQ & Tonnage Verification'] },
      { name: 'targetGroundbreaking', label: 'Target Site Groundbreaking Month', placeholder: 'e.g. Next month, Q3, Within 60 days', type: 'text' }
    ]
  }
];

// PEB Terminology Guide Data (35+ Terms)
export interface TerminologyItem {
  id: string;
  term: string;
  category: 'Framing' | 'Components' | 'Cladding' | 'Connections' | 'Engineering';
  shortDefinition: string;
  detailedExplanation: string;
  practicalContext: string;
}

export const PEB_TERMINOLOGY_DATA: TerminologyItem[] = [
  {
    id: 'peb',
    term: 'PEB (Pre-Engineered Building)',
    category: 'Engineering',
    shortDefinition: 'A steel structure engineered and manufactured in a factory, then transported to site in numbered parts and bolted together.',
    detailedExplanation: 'Unlike site-fabricated conventional sheds where hot-rolled steel angles and channels are manually cut and welded, a PEB utilizes computer-designed built-up tapered members. The cross-section dimensions match the internal bending moment curve, saving 25% to 35% in steel weight while delivering higher structural integrity.',
    practicalContext: 'Widely used for factories, warehouses, distribution centers, and high-bay industrial structures across Gujarat and India.'
  },
  {
    id: 'primary-frame',
    term: 'Primary Frame',
    category: 'Framing',
    shortDefinition: 'The main load-bearing skeleton composed of vertical columns and sloping rafters that supports the entire building.',
    detailedExplanation: 'Primary frames carry dead loads, live roof loads, crane thrust, and wind/seismic forces directly to the concrete foundations. They are designed as rigid moment-resisting portal frames spaced longitudinally at standard bay intervals (typically 7.5m to 9m).',
    practicalContext: 'Primary frames represent the majority of structural steel tonnage in an industrial building.'
  },
  {
    id: 'secondary-frame',
    term: 'Secondary Frame',
    category: 'Framing',
    shortDefinition: 'Cold-formed Z-sections and C-sections (purlins and girts) that span between primary frames to support cladding.',
    detailedExplanation: 'Secondary members are roll-formed from galvanized high-tensile steel coils (typically 245 or 345 MPa). They carry surface wind and gravity loads from wall and roof sheets to the primary frames while simultaneously providing lateral torsional bracing to column and rafter flanges.',
    practicalContext: 'Pre-galvanized purlins (120 to 275 GSM) provide long-term rust protection without periodic repainting.'
  },
  {
    id: 'purlin',
    term: 'Purlin',
    category: 'Components',
    shortDefinition: 'A longitudinal horizontal structural beam installed on top of roof rafters to support the roof cladding sheets.',
    detailedExplanation: 'In PEBs, purlins are typically cold-formed Z-sections with nested overlaps at support points to create continuous beams across bays. This continuity significantly reduces mid-span deflection and steel thickness compared to simple-span angles.',
    practicalContext: 'Proper purlin lap lengths (usually 1.0m to 1.5m over frame rafters) are essential for structural continuous beam action.'
  },
  {
    id: 'girt',
    term: 'Girt',
    category: 'Components',
    shortDefinition: 'A horizontal structural member secured along the building perimeter columns to support wall cladding panels.',
    detailedExplanation: 'Girts resist lateral wind loads blowing against exterior wall sheeting and transfer these horizontal forces to the main columns. They are typically Z-shaped or C-shaped cold-formed sections oriented horizontally with pre-punched bolt holes.',
    practicalContext: 'Can be installed flush with column outer flanges or bypassed on the outside to provide continuous perimeter cladding lines.'
  },
  {
    id: 'bracing',
    term: 'Bracing (Cross Bracing / Portal Bracing)',
    category: 'Framing',
    shortDefinition: 'Structural steel cables, rods, or angle sections arranged in X-patterns that provide longitudinal stability against wind and seismic forces.',
    detailedExplanation: 'While primary portal frames provide transverse rigidity across the width of the building, they have minimal resistance along the length. Longitudinal bracing transfers wind forces on gable endwalls and crane surge forces down into the foundation anchor bolts.',
    practicalContext: 'Where wall bays must remain unobstructed for truck access doors, rigid pipe or structural tube portal frames replace cross cables.'
  },
  {
    id: 'eave',
    term: 'Eave (Eave Height)',
    category: 'Components',
    shortDefinition: 'The intersection line where the sidewall meets the roofline; the lowest point of the roof slope.',
    detailedExplanation: 'Clear eave height is measured from the finished concrete floor level (FFL) to the bottom of the rafter-to-column connection at the eave. This is the true usable vertical height for racking, machines, and material handling.',
    practicalContext: 'Do not confuse eave height with ridge height; the ridge is the highest peak of the roof, which rises with the roof slope.'
  },
  {
    id: 'ridge',
    term: 'Ridge',
    category: 'Components',
    shortDefinition: 'The highest horizontal line formed by the junction of the two sloping roof planes.',
    detailedExplanation: 'The ridge is the location where rising hot air naturally collects inside the building. It is sealed with a contoured ridge capping sheet or fitted with a continuous natural gravity ventilator for passive air exhaustion.',
    practicalContext: 'Ridge ventilators installed along this axis provide effective building cooling without electrical power.'
  },
  {
    id: 'bay',
    term: 'Bay (Bay Spacing)',
    category: 'Engineering',
    shortDefinition: 'The longitudinal distance between the centerlines of two adjacent primary building columns.',
    detailedExplanation: 'Standard bay spacing ranges from 7.5 meters to 9.0 meters. Optimizing bay spacing balances the weight of primary frames against the weight of secondary purlins, minimizing overall steel costs.',
    practicalContext: 'Bay spacing can be adjusted locally to accommodate wide 10-meter or 12-meter clear truck loading bays via jack beams.'
  },
  {
    id: 'clear-span',
    term: 'Clear Span',
    category: 'Engineering',
    shortDefinition: 'The open, unobstructed transverse width of a building between exterior sidewall columns without any internal center columns.',
    detailedExplanation: 'Clear-span construction provides 100% unrestricted floor space for manufacturing machinery, logistics movement, and multi-tier racking. Standard clear spans range from 18m to 36m, with heavy industrial applications extending to 60m+.',
    practicalContext: 'Clear spans above 40m result in deeper tapered rafters and higher structural steel consumption than multi-span frames.'
  },
  {
    id: 'roof-panel',
    term: 'Roof Panel',
    category: 'Cladding',
    shortDefinition: 'Cold-roll-formed high-tensile steel sheet with trapezoidal ribs installed to form the waterproof building roof envelope.',
    detailedExplanation: 'Manufactured from 0.47mm to 0.60mm high-tensile steel (550 MPa) with an alloy coating of 55% Aluminum, 43.5% Zinc, and 1.5% Silicon (Alu-Zinc / Galvalume). The coating offers 4 to 6 times longer corrosion resistance than traditional galvanized iron (GI).',
    practicalContext: 'Roof panels feature anti-capillary grooves along sidelaps to prevent rainwater siphoning during high wind and heavy monsoon rain.'
  },
  {
    id: 'wall-panel',
    term: 'Wall Panel',
    category: 'Cladding',
    shortDefinition: 'Pre-painted or bare profiled steel sheeting fastened to perimeter wall girts to enclose the building sides.',
    detailedExplanation: 'Typically features a trapezoidal or architectural box-rib profile with silicone-modified polyester (SMP) or PVDF paint coatings that resist ultraviolet fading, chalking, and environmental weathering.',
    practicalContext: 'Often combined with 2.5m–3.0m of masonry brick dado wall at the bottom for forklift impact protection.'
  },
  {
    id: 'cladding',
    term: 'Cladding',
    category: 'Cladding',
    shortDefinition: 'The complete exterior protective skin of the building, including roof sheeting, wall panels, gutters, and architectural trims.',
    detailedExplanation: 'Cladding serves as the thermal and moisture barrier safeguarding plant equipment. It can consist of single-skin metal profiled sheets, insulated double-skin assemblies with glasswool, or factory-foamed PUF sandwich panels.',
    practicalContext: 'Properly detailed flashings at ridge, eave, corner, and base prevent water entry and pest ingress.'
  },
  {
    id: 'mezzanine',
    term: 'Mezzanine (Structural Steel Mezzanine)',
    category: 'Framing',
    shortDefinition: 'An intermediate raised steel floor erected inside the building to create two vertical levels of space.',
    detailedExplanation: 'Composed of primary mezzanine beams, secondary cold-formed deck joists, galvanized profiled steel decking, and a reinforced concrete slab. Mezzanines are engineered for high live loads (350 to 1,000+ kg/m²).',
    practicalContext: 'Commonly built inside industrial sheds to accommodate supervisory offices, quality labs, raw material stores, or light assembly.'
  },
  {
    id: 'crane-beam',
    term: 'Crane Runway Beam (Gantry Girder)',
    category: 'Framing',
    shortDefinition: 'A heavy longitudinal structural I-beam mounted on column brackets that supports the rails for an overhead traveling EOT crane.',
    detailedExplanation: 'Crane runway beams are designed under strict deflection limits (typically L/600 to L/1000) to carry dynamic wheel loads, longitudinal braking forces, and lateral trolley thrust without binding or wheel slipping.',
    practicalContext: 'Accurate survey alignment of crane beams (within ±2mm rail span tolerance) is essential to prevent premature wheel and motor wear.'
  },
  {
    id: 'end-wall',
    term: 'Endwall (Gable Wall)',
    category: 'Framing',
    shortDefinition: 'The transverse boundary wall of the building located at either end of the longitudinal span.',
    detailedExplanation: 'Can be engineered as an expandable rigid frame (identical to main frames, allowing simple future longitudinal additions) or as a post-and-beam frame using economical lighter columns spaced across the width.',
    practicalContext: 'If future factory expansion is planned, specifying an expandable rigid endwall eliminates the need to demolish framing later.'
  },
  {
    id: 'side-wall',
    term: 'Sidewall',
    category: 'Framing',
    shortDefinition: 'The longitudinal exterior boundary wall running parallel to the roof ridge line.',
    detailedExplanation: 'Houses main columns, crane runway beams, longitudinal cross bracing, truck rolling shutters, personnel exits, and air intake louvers.',
    practicalContext: 'Sidewalls face the primary lateral wind exposure and must be detailed with sturdy wall girts and sag rods.'
  },
  {
    id: 'column',
    term: 'Column (Built-Up Tapered Column)',
    category: 'Components',
    shortDefinition: 'The vertical structural member of the primary frame transferring building loads down to the concrete foundation pedestal.',
    detailedExplanation: 'In PEBs, primary columns are custom fabricated from high-tensile steel plates with a tapered profile — narrow at the base where bending moments are zero (pinned base) and wide at the eave where corner moments are maximum.',
    practicalContext: 'Tapering places steel only where structural stress exists, drastically cutting raw material waste.'
  },
  {
    id: 'rafter',
    term: 'Rafter (Built-Up Tapered Rafter)',
    category: 'Components',
    shortDefinition: 'The sloping structural beam of the primary frame that spans from the column eave to the roof ridge peak.',
    detailedExplanation: 'Rafters are split into multiple fabricated shipping segments (typically 10m to 14m long) and joined at the site using high-strength bolted moment connections. They are engineered to carry roof loads and support crane runway beams where needed.',
    practicalContext: 'Rafter sections are sized to fit onto standard 40-foot articulated flatbed transport trailers.'
  },
  {
    id: 'base-plate',
    term: 'Base Plate',
    category: 'Connections',
    shortDefinition: 'A thick, heavy steel plate welded to the bottom of the column that distributes vertical loads across the concrete pedestal.',
    detailedExplanation: 'Pre-drilled with precision anchor bolt holes. Base plates sit on concrete pedestals with high-strength non-shrink cementitious grout packed underneath to provide 100% bearing contact.',
    practicalContext: 'Base plates can be designed as pinned (smaller, cost-effective foundation) or fixed (resists heavy lateral crane surge moments).'
  },
  {
    id: 'connection',
    term: 'Moment Connection (Splice Joint)',
    category: 'Connections',
    shortDefinition: 'A high-strength bolted structural joint that transfers bending moments, shear forces, and axial loads between members.',
    detailedExplanation: 'Constructed using thick endplates welded to rafter or column sections and joined using High-Strength Friction Grip (HSFG) Grade 8.8 or 10.9 structural bolts. Avoids any risky field welding at elevated heights.',
    practicalContext: 'All splice joints are 100% bolted, allowing rapid erection and predictable quality control.'
  },
  {
    id: 'fabrication',
    term: 'Factory Fabrication',
    category: 'Engineering',
    shortDefinition: 'The off-site industrial process of cutting, CNC drilling, assembling, automated welding, shot blasting, and painting steel components.',
    detailedExplanation: 'Conducted in an ISO-controlled factory environment using automated submerged arc welding (SAW) and CNC plasma cutting tables. Guarantees dimensional accuracy within millimeter tolerances impossible to achieve with manual site fabrication.',
    practicalContext: 'Completed components undergo non-destructive ultrasonic and magnetic particle testing before dispatch.'
  },
  {
    id: 'erection',
    term: 'Erection & Installation',
    category: 'Engineering',
    shortDefinition: 'The on-site assembly, hoisting, bolting, plumbing, alignment, and cladding of fabricated steel parts using mobile hydraulic cranes.',
    detailedExplanation: 'Follows a strict engineering sequence: anchor bolt survey verification, primary frame hoisting, temporary guy-wire securing, purlin/bracing installation, torque tightening, and roof/wall cladding installation.',
    practicalContext: 'Conducted with certified mobile cranes, high-altitude lifelines, safety netting, and calibrated torque wrenches.'
  },
  {
    id: 'galvanizing',
    term: 'Galvanizing (Galvanized Steel)',
    category: 'Engineering',
    shortDefinition: 'The application of a protective metallurgical zinc coating to steel members to prevent atmospheric rust and corrosion.',
    detailedExplanation: 'Secondary purlins and girts are roll-formed from pre-galvanized high-strength steel coils with 120 GSM to 275 GSM zinc coating. Anchor bolts and sag rods are frequently hot-dip galvanized for subterranean moisture resistance.',
    practicalContext: 'Zinc acts as a sacrificial anode — even if scratched, the surrounding zinc oxidizes first, shielding the underlying steel.'
  },
  {
    id: 'corrosion-protection',
    term: 'Corrosion Protection System',
    category: 'Engineering',
    shortDefinition: 'The complete surface treatment sequence applied to steel to resist humidity, industrial fumes, and chemical degradation.',
    detailedExplanation: 'Consists of automated centrifugal shot blasting to SA 2.5 cleanliness, followed by an immediate application of red oxide zinc chromate or zinc phosphate primer (50–60 microns) or high-build epoxy with polyurethane topcoats (100–120 microns).',
    practicalContext: 'Adequate surface preparation (SA 2.5) accounts for over 70% of total coating life expectancy.'
  },
  {
    id: 'insulation',
    term: 'Thermal Insulation',
    category: 'Cladding',
    shortDefinition: 'A low-thermal-conductivity material installed beneath roof and wall cladding to control interior temperature.',
    detailedExplanation: 'Commonly glasswool blankets (50mm, 16–24 kg/m³) with reinforced aluminum foil facing, or rigid polyurethane foam (PUF / PIR) cores in sandwich panels. Prevents under-roof solar radiant heat buildup.',
    practicalContext: 'Reduces internal shed temperature by 5°C to 8°C during peak summer months and stops winter moisture condensation.'
  },
  {
    id: 'ventilation',
    term: 'Ventilation System',
    category: 'Components',
    shortDefinition: 'Engineered hardware and openings that cycle internal hot air and replenish fresh oxygen throughout the industrial building.',
    detailedExplanation: 'Combines continuous natural gravity ridge ventilators along the roof apex with weather-shielded intake wall louvers around the perimeter. Creates a continuous stack effect with zero electrical consumption.',
    practicalContext: 'Maintains comfortable workplace conditions and satisfies statutory industrial factory ventilation norms.'
  },
  {
    id: 'flashing',
    term: 'Flashing & Trims',
    category: 'Cladding',
    shortDefinition: 'Specially formed sheet metal accessories used to weatherproof junctions, corners, ridges, eaves, and window/door openings.',
    detailedExplanation: 'Fabricated from the same pre-painted Galvalume coil material as the wall cladding to ensure color consistency and matching thermal expansion. Folded with drip edges to channel stormwater away from building joints.',
    practicalContext: 'Prevents rain leakage, vermin penetration, and dust ingress at all exterior structural junctions.'
  },
  {
    id: 'canopy',
    term: 'Canopy (Loading Canopy)',
    category: 'Components',
    shortDefinition: 'An overhanging cantilevered roof structure projecting outward from the exterior wall without supporting posts on the outside edge.',
    detailedExplanation: 'Mounted above truck rolling shutters, personnel doorways, or raw material unloading docks. Protects workers, forklifts, and cargo from rain and direct sunlight during logistics operations.',
    practicalContext: 'Standard canopies extend 3.0m to 6.0m outward and are integrated directly into primary column framing.'
  },
  {
    id: 'lean-to',
    term: 'Lean-to Structure',
    category: 'Framing',
    shortDefinition: 'A single-pitch sloping roof addition built adjoining and leaning against the main industrial building sidewall.',
    detailedExplanation: 'Utilizes the main building columns for support on one side, with a secondary row of lighter perimeter columns on the outer edge. Provides economical utility space without requiring heavy moment-frame engineering.',
    practicalContext: 'Commonly used for scrap storage, compressor rooms, maintenance sheds, parking bays, and utility enclosures.'
  },
  {
    id: 'expansion',
    term: 'Expansion Joint',
    category: 'Engineering',
    shortDefinition: 'A designed structural separation gap that permits steel frames to expand and contract thermally without buckling.',
    detailedExplanation: 'In buildings exceeding 120 to 150 meters in continuous longitudinal length, seasonal temperature variations cause substantial thermal expansion. An expansion joint splits the framing with slotted connections to relieve thermal stress.',
    practicalContext: 'Waterproofed with elastomeric flexible flashing assemblies to prevent rain ingress through the joint.'
  },
  {
    id: 'anchor-bolt',
    term: 'Anchor Bolt (Foundation Bolt)',
    category: 'Connections',
    shortDefinition: 'High-tensile steel threaded rods cast directly into the concrete foundation pedestals to anchor the primary columns.',
    detailedExplanation: 'Anchor bolts transfer all primary frame overturning moments, uplift wind forces, and base shears into the reinforced concrete foundations. Manufactured from Grade 4.6 or high-strength Grade 8.8 steel rods with heavy hex nuts.',
    practicalContext: 'Set using precision rigid steel templates during concrete casting to ensure millimetric alignment with column base plate holes.'
  },
  {
    id: 'structural-steel',
    term: 'Structural Steel',
    category: 'Engineering',
    shortDefinition: 'Standardized carbon and micro-alloyed steel fabricated in shapes suitable for construction under national codes (IS 2062).',
    detailedExplanation: 'Features high tensile strength, ductility, and weldability. In PEBs, structural steel plates typically have a minimum yield strength of 345 MPa (E350) or 250 MPa (E250), with tight chemical composition controls on carbon and manganese.',
    practicalContext: 'All structural steel must be accompanied by certified Mill Test Reports (MTR) verifying chemical and physical tensile properties.'
  },
  {
    id: 'industrial-shed',
    term: 'Industrial Shed',
    category: 'Engineering',
    shortDefinition: 'A generic colloquial term referring to single-story utilitarian factory, warehouse, and workshop steel buildings.',
    detailedExplanation: 'Historically referred to site-welded angle-iron truss sheds with asbestos or corrugated iron sheets. In contemporary industrial construction, modern PEB technology has superseded traditional sheds due to certified engineering, speed, and safety.',
    practicalContext: 'Modern PEB industrial sheds deliver certified IS code compliance, clear spans, and 30+ year structural lifespans.'
  },
  {
    id: 'peb-warehouse',
    term: 'PEB Warehouse',
    category: 'Engineering',
    shortDefinition: 'A pre-engineered building customized specifically for high-volume storage, logistics staging, and inventory distribution.',
    detailedExplanation: 'Characterized by high clear eave heights (10m–14m), wide clear spans, heavy floor slab capacity, multiple truck loading docks with mechanical levelers, insulated roofs, and continuous daylight skylights.',
    practicalContext: 'Enables high-density vertical pallet racking and optimizes internal material handling efficiency.'
  }
];

// PEB Planning Guide Data (15 Steps)
export interface PlanningStep {
  stepNumber: number;
  id: string;
  title: string;
  subtitle: string;
  objective: string;
  keyCheckpoints: string[];
  typicalRisks: string;
  engineeringAdvice: string;
}

export const PEB_PLANNING_STEPS: PlanningStep[] = [
  {
    stepNumber: 1,
    id: 'step-define-purpose',
    title: 'Define the Purpose & Operational Function',
    subtitle: 'Clarify what the facility must achieve before drafting steel drawings.',
    objective: 'Establish whether the building serves warehousing, heavy machine manufacturing, cold storage, chemical processing, or assembly operations.',
    keyCheckpoints: [
      'Document primary manufacturing or storage workflow processes',
      'Identify internal traffic routes for forklifts, hand trucks, and overhead cranes',
      'Determine raw material staging, production line, and finished goods zones',
      'Establish administrative office and supervisory mezzanine requirements'
    ],
    typicalRisks: 'Designing without an internal equipment workflow forces structural modifications after steel columns are already erected.',
    engineeringAdvice: 'Always finalize your internal machinery floor layout before freezing structural column centerlines.'
  },
  {
    stepNumber: 2,
    id: 'step-understand-site',
    title: 'Understand the Site & Soil Conditions',
    subtitle: 'Ground characteristics dictate foundation costs and wind loading.',
    objective: 'Obtain precise topographical boundaries and geotechnical soil bearing capacity (SBC) to inform civil foundation engineering.',
    keyCheckpoints: [
      'Commission a certified geotechnical soil bore hole investigation',
      'Determine safe bearing capacity (SBC) in T/m² at various depths',
      'Check seasonal water table elevation and subterranean water drainage',
      'Identify site access constraints for 40-foot articulated transport trailers',
      'Verify municipal / GIDC boundary setbacks and utility easements'
    ],
    typicalRisks: 'Assumed soil capacity can cause foundation pedestal differential settlement or result in costly over-designed concrete footings.',
    engineeringAdvice: 'A ₹25,000 soil test report can easily prevent ₹5,00,000+ in foundation errors or structural settlement cracks.'
  },
  {
    stepNumber: 3,
    id: 'step-building-dimensions',
    title: 'Determine Approximate Building Requirements',
    subtitle: 'Establish the primary length, width, and clear eave height envelope.',
    objective: 'Establish preliminary building footprint dimensions balancing operational volume with structural steel economy.',
    keyCheckpoints: [
      'Calculate clear height from finished floor level (FFL) to bottom of rafter flange',
      'Determine building width and evaluate clear span vs. center column options',
      'Determine building length and preliminary bay spacing (e.g. 7.5m to 9.0m)',
      'Confirm 1:10 or 1:12 roof slope for reliable monsoon stormwater discharge'
    ],
    typicalRisks: 'Measuring height to the roof apex instead of the eave rafter bottom leads to unexpected equipment clearance conflicts.',
    engineeringAdvice: 'If internal columns do not obstruct equipment movement, a center-column frame saves 15% to 25% in steel tonnage over a clear span.'
  },
  {
    stepNumber: 4,
    id: 'step-functional-requirements',
    title: 'Identify Functional Requirements & Daylight',
    subtitle: 'Ensure natural lighting, air exchange, and logistics doors are planned early.',
    objective: 'Incorporate rolling shutters, loading docks, passive ventilation, and daylighting into structural secondary framing.',
    keyCheckpoints: [
      'Map rolling shutter sizes (e.g. 4.5m x 5.0m) and loading dock canopies',
      'Select 5% to 8% roof polycarbonate skylights for daytime natural light',
      'Size continuous gravity ridge ventilators for passive heat exhaust',
      'Position bottom-wall perimeter louvers to enable cross ventilation'
    ],
    typicalRisks: 'Cutting purlins or girts at the site to create unplanned shutter openings weakens structural framing and voids warranties.',
    engineeringAdvice: 'All door and window openings must be engineered into factory shop fabrication drawings with dedicated trimmer frames.'
  },
  {
    stepNumber: 5,
    id: 'step-future-expansion',
    title: 'Consider Future Expansion Provisions',
    subtitle: 'Avoid expensive plant shutdowns when your business outgrows its space.',
    objective: 'Engineer expandable frames into the initial phase so future bays can be added without structural disruption.',
    keyCheckpoints: [
      'Evaluate whether future expansion will occur longitudinally or transversely',
      'Design endwalls with expandable rigid frames rather than post-and-beam columns',
      'Ensure foundation pedestals at expansion lines account for future loads',
      'Leave clear site land free of septic tanks, transformer yards, or borewells'
    ],
    typicalRisks: 'Using non-expandable endwall framing forces total demolition of the endwall when expanding, stopping factory operations.',
    engineeringAdvice: 'Specifying an expandable rigid endwall adds only a minor initial cost increment but saves weeks of downtime later.'
  },
  {
    stepNumber: 6,
    id: 'step-special-requirements',
    title: 'Identify Special Requirements & Heavy Loads',
    subtitle: 'Cranes, mezzanines, solar panels, and chemical atmospheres require special design.',
    objective: 'Account for all static, dynamic, and environmental loads before structural computer calculations begin.',
    keyCheckpoints: [
      'Obtain crane wheel load and clearance diagrams from the crane manufacturer',
      'Calculate mezzanine floor live load requirements (e.g. 500 kg/m² to 1,000 kg/m²)',
      'Allocate 15 to 20 kg/m² dead load allowance for future rooftop solar panels',
      'Specify high-build epoxy or polyurethane coatings for corrosive chemical zones'
    ],
    typicalRisks: 'Adding an overhead crane or rooftop solar to a standard-designed building later causes frame overstress and structural failure.',
    engineeringAdvice: 'Even if solar panels or cranes are installed in Year 3, design the primary frames and purlins for their loads during Year 1.'
  },
  {
    stepNumber: 7,
    id: 'step-prepare-project-info',
    title: 'Prepare Project Information & RFQ Dossier',
    subtitle: 'Compile a comprehensive technical brief before approaching PEB vendors.',
    objective: 'Create a standardized Request for Quotation (RFQ) package so all bidding PEB companies quote on identical terms.',
    keyCheckpoints: [
      'Assemble plot boundary layout, building dimensions, and clear height',
      'Include soil report and geographic site coordinates for wind/seismic codes',
      'Specify preferred sheeting material, thickness (e.g. 0.50mm), and paint system',
      'Include overhead crane parameters, shutter quantities, and skylight requirements'
    ],
    typicalRisks: 'Issuing vague RFQs produces wild quotation price variances because vendors assume different steel weights and scopes.',
    engineeringAdvice: 'Use the PEB Requirement Checklist to build your standardized RFQ brief.'
  },
  {
    stepNumber: 8,
    id: 'step-discuss-technical-reqs',
    title: 'Discuss Technical Requirements with Engineers',
    subtitle: 'Align your requirements with Indian design standards and practical steel sizes.',
    objective: 'Review structural calculations, code compliances (IS 800:2007, IS 875), and frame optimization options with PEB specialists.',
    keyCheckpoints: [
      'Confirm design wind speed (e.g. 44 m/s in Vadodara, 50 m/s in coastal Gujarat)',
      'Review rafter taper depths to ensure internal overhead clearances are maintained',
      'Examine anchor bolt connection details and foundation reaction forces',
      'Review deflection limits under full crane and wind loading'
    ],
    typicalRisks: 'Relying solely on commercial sales reps without structural engineering vetting leads to undersized structural members.',
    engineeringAdvice: 'Request the vendor’s structural design calculation summary and check that IS 800:2007 Limit State Method is used.'
  },
  {
    stepNumber: 9,
    id: 'step-request-quotations',
    title: 'Request Quotations from Qualified Manufacturers',
    subtitle: 'Seek detailed technical proposals from established PEB fabricators.',
    objective: 'Solicit itemized proposals covering engineering design, factory fabrication, logistics, and on-site turnkey erection.',
    keyCheckpoints: [
      'Ensure every quote includes an explicit Bill of Quantities (BOQ) with total steel tonnage',
      'Verify whether logistics and crane unloading are included in the price',
      'Confirm whether anchor bolts and setting templates are supplied ahead of time',
      'Check that turnkey site erection and safety supervision are clearly itemized'
    ],
    typicalRisks: 'Hidden exclusions (e.g., missing anchor bolts, excluded crane hire, unpriced transport) inflate the final invoice by 20% to 30%.',
    engineeringAdvice: 'Insist on a single-source quotation where the vendor takes full legal responsibility for design, fabrication, and erection.'
  },
  {
    stepNumber: 10,
    id: 'step-compare-scope',
    title: 'Compare Project Scope, Tonnage & Specifications',
    subtitle: 'Do not look only at the bottom-line price; compare technical weight and quality.',
    objective: 'Normalize competing proposals on an exact apples-to-apples basis to identify true value and hidden shortcuts.',
    keyCheckpoints: [
      'Compare total structural steel tonnage (heavier steel is not always better, but suspiciously light steel indicates under-design)',
      'Verify raw steel grade (Grade 345 / 355 MPa certified vs. low-grade scrap re-roll)',
      'Compare purlin zinc coating (275 GSM vs. 120 GSM vs. ungalvanized paint)',
      'Check sheeting warranty and base metal thickness (BMT vs. TCT)',
      'Examine erection scope: who provides cranes, scaffolding, and safety gear?'
    ],
    typicalRisks: 'Choosing the lowest bidder who quoted 20% lighter steel by using substandard deflection limits leads to leaking roofs and roof vibration.',
    engineeringAdvice: 'Divide total quotation value by quoted tonnage to check the rate per metric ton, and verify that design codes match.'
  },
  {
    stepNumber: 11,
    id: 'step-finalize-design',
    title: 'Finalize Structural Design & Approval Drawings',
    subtitle: 'Review 3D model, anchor bolt setting plan, and approval prints.',
    objective: 'Review and formally approve General Arrangement (GA) drawings before steel plate cutting begins at the factory.',
    keyCheckpoints: [
      'Approve anchor bolt setting plans and hand over to the civil foundation contractor',
      'Verify coordinates of all door openings, downspouts, and crane runway brackets',
      'Sign off on primary frame centerlines, eave heights, and roof slope',
      'Confirm final cladding colors, flashing trims, and skylight positions'
    ],
    typicalRisks: 'Modifying door positions or heights after approval drawings are released causes severe fabrication rework and project delays.',
    engineeringAdvice: 'Involve your site civil engineer during GA drawing review to ensure absolute coordination with foundation pedestals.'
  },
  {
    stepNumber: 12,
    id: 'step-factory-fabrication',
    title: 'Factory Fabrication & Quality Control',
    subtitle: 'Off-site automated manufacturing while civil foundations are cast on site.',
    objective: 'Manufacture primary frames, cold-formed purlins, and cladding panels under strict factory quality assurance standards.',
    keyCheckpoints: [
      'Verify raw material Mill Test Reports (MTRs) for chemical and physical properties',
      'Inspect automated submerged arc welding (SAW) on primary rafter and column seams',
      'Ensure automated shot blasting to SA 2.5 cleanliness before primer coating',
      'Verify paint Dry Film Thickness (DFT) with digital magnetic thickness gauges',
      'Conduct random non-destructive ultrasonic testing (UT) on full-penetration welds'
    ],
    typicalRisks: 'Uncontrolled workshop welding with manual hand electrodes causes internal weld porosity, slag inclusions, and joint failure.',
    engineeringAdvice: 'Visit or send an independent third-party inspector to the PEB fabrication plant during the mid-fabrication stage.'
  },
  {
    stepNumber: 13,
    id: 'step-transportation-staging',
    title: 'Transportation, Logistics & Site Staging',
    subtitle: 'Sequenced dispatch to match the on-site erection schedule.',
    objective: 'Transport heavy columns, rafters, and delicate cladding sheets to the jobsite without transit damage or sequence mix-ups.',
    keyCheckpoints: [
      'Dispatch steel components in strict erection sequence (anchor bolts first, then columns, rafters, purlins, and sheeting last)',
      'Ensure trailer packing includes timber battens between painted sections to avoid transit scratches',
      'Prepare a clear, level, well-drained laydown yard adjacent to the foundation pedestals',
      'Organize immediate crane unloading to avoid transporter demurrage charges'
    ],
    typicalRisks: 'Delivering roof sheets before primary steel columns clutters the jobsite, causing sheet handling damage and forklift dents.',
    engineeringAdvice: 'Insist on Just-In-Time (JIT) staged dispatch matching your erection contractor’s weekly hoisting plan.'
  },
  {
    stepNumber: 14,
    id: 'step-erection-installation',
    title: 'Erection, Alignment & High-Altitude Installation',
    subtitle: 'Precision assembly using hydraulic cranes, torque wrenches, and safety nets.',
    objective: 'Erect steel framing, align plumb lines, torque-tighten splice bolts, and install weather-tight cladding.',
    keyCheckpoints: [
      'Survey foundation pedestals and verify anchor bolt coordinates with a total station before steel hoisting',
      'Erect the braced bay first to establish a stable structural anchor for subsequent frames',
      'Tighten all high-strength moment splice bolts using calibrated torque wrenches',
      'Enforce strict HSE safety netting, lifelines, and harness hookup at high elevations',
      'Install roof sheets with anti-capillary seals and torque-controlled screw fasteners'
    ],
    typicalRisks: 'Over-tightening self-drilling roof screws crushes the EPDM washer, causing persistent roof leaks during rainstorms.',
    engineeringAdvice: 'Never release crane hoisting cables until the initial braced bay is fully cross-braced and structurally self-supporting.'
  },
  {
    stepNumber: 15,
    id: 'step-final-inspection',
    title: 'Final Inspection, Testing & Project Completion',
    subtitle: 'Water testing, torque auditing, snag rectification, and formal handover.',
    objective: 'Conduct rigorous quality testing, rectify minor punch-list items, and hand over a certified, weather-tight facility.',
    keyCheckpoints: [
      'Conduct a high-pressure water hose test on roof valleys, gutters, and ridge caps to verify 100% weather-tightness',
      'Perform torque verification on random sample of high-strength structural bolts',
      'Check operational alignment of rolling shutters, crane runway beams, and louvers',
      'Touch up any paint scratches with matching epoxy or PU paint',
      'Collect final as-built drawings, warranty documents, and material certificates'
    ],
    typicalRisks: 'Skipping roof water hose testing leaves minor screw sealing oversights undiscovered until the first major monsoon deluge.',
    engineeringAdvice: 'Always conduct water testing under supervision before final payment sign-off and equipment installation.'
  }
];

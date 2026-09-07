import { ProjectCategory } from '../types';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'manufacturing-plants-factories',
    slug: 'manufacturing-plants-factories',
    title: 'Manufacturing Plants & Factory Buildings',
    category: 'Industrial Production',
    summary: 'High-bay production infrastructure featuring wide clear spans, heavy overhead crane runways, and integrated mezzanine offices.',
    typicalSpan: '24m – 48m Clear Span',
    typicalHeight: '8m – 14m Eave Height',
    steelGrade: 'IS 2062 E350 / ASTM A572 Gr 50',
    image: '/regenerated_image_1788753735467.jpg',
    applications: [
      'Automotive component assembly plants',
      'Engineering machinery manufacturing facilities',
      'Plastics & polymers extrusion units',
      'Chemical & pharmaceutical production sheds'
    ],
    technicalSpecs: [
      { label: 'Structural Type', value: 'Tapered Built-Up Rigid Portal Frame' },
      { label: 'Crane Provision', value: '10 Ton to 35 Ton EOT Crane Runways' },
      { label: 'Cladding System', value: '0.50mm Galvalume Color-Coated Sheeting' },
      { label: 'Natural Lighting', value: 'UV-Stabilized Polycarbonate Skylight Strips' }
    ]
  },
  {
    id: 'peb-warehouses',
    slug: 'peb-warehouses',
    title: 'PEB Warehouses & Logistics Hubs',
    category: 'Storage & Supply Chain',
    summary: 'High-volume storage sheds engineered for maximum pallet density, multi-bay expansion, and all-weather loading canopies.',
    typicalSpan: '30m – 60m Multi-Span',
    typicalHeight: '9m – 16m Clear Eave',
    steelGrade: 'High-Tensile Built-Up Steel & Cold-Formed Secondary',
    image: '/pebwarehouse.jpg',
    applications: [
      '3PL central logistics distribution centers',
      'Raw material & bulk inventory warehouses',
      'FMCG distribution hubs with dock levelers',
      'E-commerce fulfillment centers'
    ],
    technicalSpecs: [
      { label: 'Roof Slope', value: '1:10 slope with continuous gravity ventilators' },
      { label: 'Purlin System', value: 'High-strength galvanized Z-purlins with overlap splices' },
      { label: 'Dock Canopies', value: 'Cantilevered steel canopies up to 6m projections' },
      { label: 'Floor Grid', value: 'Optimized internal column spacing for forklift aisles' }
    ]
  },
  {
    id: 'cold-storage-structures',
    slug: 'cold-storage-structures',
    title: 'Cold Storage Structures',
    category: 'Temperature-Controlled',
    summary: 'Thermally isolated superstructures engineered for airtight cold envelope construction, heavy suspended cooling evaporators, and tall racking.',
    typicalSpan: '18m – 36m Clear Span',
    typicalHeight: '10m – 18m High Bay',
    steelGrade: 'High-Strength Steel with High-Build Anti-Corrosive Coating',
    image: '/regenerated_image_1788753953811.jpg',
    applications: [
      'Agricultural & horticulture cold stores',
      'Pharmaceutical cold chain storage',
      'Frozen food & seafood processing units',
      'Controlled Atmosphere (CA) storage facilities'
    ],
    technicalSpecs: [
      { label: 'Insulation Interface', value: '100mm to 150mm PUF panel compatible framing' },
      { label: 'Thermal Isolation', value: 'Engineered non-conductive column base pads' },
      { label: 'Deflection Limit', value: 'Strict L/400 deflection criteria for joint integrity' },
      { label: 'Suspended Loading', value: 'Heavy ceiling grid for industrial cooling units' }
    ]
  },
  {
    id: 'heavy-steel-structures',
    slug: 'heavy-steel-structures',
    title: 'Heavy Steel Structures',
    category: 'Heavy Engineering',
    summary: 'Rugged structural frames capable of handling severe dynamic forces, multi-tier industrial equipment towers, and high-tonnage cranes.',
    typicalSpan: 'Engineered to dynamic equipment footprint',
    typicalHeight: '15m – 32m Multi-Story',
    steelGrade: 'IS 2062 E350 BR/B0 Thick Heavy Plates',
    image: '/regenerated_image_1788753954925.jpg',
    applications: [
      'Foundry & metal processing buildings',
      'Power generation & turbine houses',
      'Multi-tier industrial chemical process towers',
      'Heavy equipment fabrication shops'
    ],
    technicalSpecs: [
      { label: 'Crane Capability', value: 'Designed for 30T to 75T+ heavy duty overhead cranes' },
      { label: 'Welding Standard', value: 'Full penetration SAW welds with 100% ultrasonic testing' },
      { label: 'Connections', value: 'Grade 10.9 HSFG structural bolts with calibrated preloading' },
      { label: 'Section Types', value: 'Heavy plate girders and built-up box columns' }
    ]
  },
  {
    id: 'industrial-buildings',
    slug: 'industrial-buildings',
    title: 'Industrial Buildings & Sheds',
    category: 'Commercial Industrial',
    summary: 'Versatile steel buildings designed for mid-scale manufacturing, packaging, and commercial industrial enterprises.',
    typicalSpan: '15m – 30m Clear Span',
    typicalHeight: '6m – 10m Eave Height',
    steelGrade: 'IS 2062 E250 / E350 Structural Steel',
    image: '/regenerated_image_1788753961229.jpg',
    applications: [
      'Ancillary industrial workshops and sheds',
      'Assembly and packaging halls',
      'Textile and garment processing units',
      'Food & beverage processing sheds'
    ],
    technicalSpecs: [
      { label: 'Erection Speed', value: 'Fast-track completion saving weeks of project timeline' },
      { label: 'Flexibility', value: 'Modular expansion design for future bay additions' },
      { label: 'Ventilation', value: 'Industrial louvers and turbo ventilators' },
      { label: 'Foundation Load', value: 'Optimized anchor reactions lowering civil RCC costs' }
    ]
  },
  {
    id: 'modular-structures',
    slug: 'modular-structures',
    title: 'Modular Structures & Site Cabins',
    category: 'Rapid Deployment',
    summary: 'Prefabricated modular steel pods, supervisory site offices, control rooms, and rapidly relocatable operational units.',
    typicalSpan: 'Custom modular dimensions (3m x 6m up to multi-module)',
    typicalHeight: '3m – 6m',
    steelGrade: 'Structural Hollow Sections (SHS/RHS) & Light Gauge Framing',
    image: '/regenerated_image_1788753960179.jpg',
    applications: [
      'In-plant supervisory & managerial offices',
      'Electrical control room (MCC) enclosures',
      'Site laboratory & testing cabins',
      'Security checkpoints and gate offices'
    ],
    technicalSpecs: [
      { label: 'Installation Time', value: '1 to 3 days on prepared plinths' },
      { label: 'Insulation', value: '50mm – 80mm PUF sandwich walls with thermal resistance' },
      { label: 'Mobility', value: 'Crane-liftable corner castings and base skid channels' },
      { label: 'Finishing', value: 'Pre-fitted electrical conduits, LED fixtures, and UPVC windows' }
    ]
  },
  {
    id: 'workshops-industrial-garages',
    slug: 'workshops-industrial-garages',
    title: 'Workshops & Industrial Garages',
    category: 'Maintenance & Service',
    summary: 'Open-bay technical service buildings featuring wide rolling shutter openings, hoist capabilities, and high-impact resistance.',
    typicalSpan: '12m – 24m Clear Span',
    typicalHeight: '6m – 9m Eave Height',
    steelGrade: 'Standard High-Yield Structural Steel',
    image: '/regenerated_image_1788753963377.jpg',
    applications: [
      'Heavy fleet vehicle repair depots',
      'Machinery overhaul and refurbishment shops',
      'Commercial transport service centers',
      'Plant toolroom and maintenance bays'
    ],
    technicalSpecs: [
      { label: 'Door Openings', value: 'Engineered for up to 8m wide motorized rolling shutters' },
      { label: 'Hoist Systems', value: 'Under-hung monorail hoist tracks up to 5T capacity' },
      { label: 'Impact Protection', value: 'Heavy steel bumper posts and reinforced column bases' },
      { label: 'Lighting', value: 'Daylight polycarbonate roof panels for optimal workbench visibility' }
    ]
  }
];


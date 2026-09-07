import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'in-house-design',
    slug: 'in-house-design',
    title: 'In-House Design',
    category: 'Engineering',
    shortDesc: 'Precision structural analysis, 3D BIM modeling, and Design-for-Manufacture (DFM) optimization tailored for Indian wind and seismic codes.',
    fullDesc: 'Khodiyar Infraproject delivers end-to-end structural engineering design directly from our technical bureau. Rather than outsourcing engineering calculations to detached consultants, our in-house engineering team works side-by-side with our fabrication and erection crews. We specialize in PEB structural optimization, tapered built-up frames, portal rigid frames, truss systems, crane runway beams, and connection detailing. By integrating structural safety with manufacturing efficiency, we optimize steel tonnage, eliminate site fitting errors, and accelerate project delivery times without compromising IS 800 / IS 875 compliance.',
    heroImage: '/regenerated_image_1788754637532.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Direct Design-for-Manufacture (DFM) reducing overall structural tonnage by 8% to 15%',
      'Complete 3D connection detailing and clash detection prior to raw steel cutting',
      'Strict compliance with IS 800 (2007), IS 875 (Part 1-3 wind loads), and IS 1893 seismic standards',
      'Rapid design revisions and immediate shop drawing sign-offs without third-party bottlenecks'
    ],
    capabilities: [
      'Staad.Pro & 3D Tekla Structural Analysis',
      'Pre-Engineered Portal Frame Optimization',
      'Heavy Crane Runway & Gantry Girder Engineering',
      'Seismic Zone III & IV Deflection Calculations',
      'Foundation Anchor Bolt Plans & Reaction Data'
    ],
    processSteps: [
      {
        title: 'Project Parameter Extraction',
        description: 'Analyzing building geometry, eave height, bay spacing, crane capacities, and site wind/seismic zone parameters.'
      },
      {
        title: 'Structural Optimization & Frame Modeling',
        description: 'Creating 3D finite element models to determine optimal web-to-flange ratios for tapered plate sections.'
      },
      {
        title: 'Connection & Shop Drawing Release',
        description: 'Generating bolt-hole templates, gusset plate cuts, and fabrication manifests with zero tolerance discrepancies.'
      }
    ],
    specifications: [
      { label: 'Design Codes', value: 'IS 800:2007, IS 875 (Part 1-3), IS 1893' },
      { label: 'Deliverables', value: 'GA Drawings, Anchor Bolt Layout, 3D Models, Fabrication BOM' },
      { label: 'Software Suite', value: '3D Structural Analysis & Advanced Detailing' },
      { label: 'Turnaround', value: 'Fast-track engineering within project scheduling benchmarks' }
    ]
  },
  {
    id: 'factory-fabrication',
    slug: 'factory-fabrication',
    title: 'Factory Fabrication',
    category: 'Fabrication',
    shortDesc: 'Automated submerged arc welding, CNC cutting, shot blasting, and precision assembly of high-yield structural steel members.',
    fullDesc: 'Our structural steel fabrication operations translate digital engineering files into rugged, millimeter-accurate steel assemblies. Utilizing high-yield structural steel plates (E250, E350, ASTM A572), our fabrication workflow utilizes automatic continuous Submerged Arc Welding (SAW) for built-up H-beams, plasma profiling, multi-spindle drilling, and standardized edge preparation. Every beam, column, rafter, and purlin undergoes rigorous quality inspections—including ultrasonic and dye penetrant testing of critical weld seams—followed by high-grade industrial primer coating to resist weathering during transit.',
    heroImage: '/regenerated_image_1788754638449.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Automated Submerged Arc Welding (SAW) ensuring full-penetration, defect-free continuous welds',
      'Trial assembly of critical splices and portal knees prior to site dispatch',
      'High-yield grade steel sections (E350/E250) certified with mill test reports',
      'Consistent surface preparation and epoxy anti-corrosive primer protection'
    ],
    capabilities: [
      'Tapered Built-Up Primary Frame Fabrication',
      'Heavy Hot-Rolled Column & Girder Modification',
      'CNC Cold-Formed Z & C Purlin Profiling',
      'Plasma Plate Cutting up to 65mm Thickness',
      'In-house Non-Destructive Testing (NDT)'
    ],
    processSteps: [
      {
        title: 'Raw Material Verification',
        description: 'Spectro and ultrasonic checks verifying chemical composition and yield strength against mill test certificates.'
      },
      {
        title: 'Automated Profiling & SAW Welding',
        description: 'Automated beam fabrication lines welding flange-to-web seams with deep, uniform penetration.'
      },
      {
        title: 'Dimensional QA & Surface Coating',
        description: 'Checking camber, sweep, diagonal squareness, hole pitch, followed by airless spray primer application.'
      }
    ],
    specifications: [
      { label: 'Steel Grades', value: 'IS 2062 E250 / E350 BR/B0, ASTM A572 Gr 50' },
      { label: 'Welding Standards', value: 'AWS D1.1, IS 9595, Submerged Arc Welding' },
      { label: 'Testing Protocol', value: 'DPT, Ultrasonic Flaw Detection (UT), Magnetic Particle' },
      { label: 'Surface Finish', value: 'Red oxide / Zinc chromate / Epoxy primer coating' }
    ]
  },
  {
    id: 'turnkey-erection',
    slug: 'turnkey-erection',
    title: 'Turnkey Erection',
    category: 'Execution',
    shortDesc: 'Rapid, safe, crane-assisted structural erection on-site with certified riggers and disciplined HSE protocols across Gujarat.',
    fullDesc: 'Erection is where engineering integrity meets physical reality. Khodiyar Infraproject provides comprehensive turnkey erection managed by seasoned site engineers and heavy-lift rigging specialists. Because our own factory fabricates the members, our erection teams work with components designed with matched bolt-holes and pre-indexed shipping codes. We orchestrate heavy mobile cranes, aerial manlifts, perimeter safety nets, and torque-controlled tensioning for High-Strength Friction Grip (HSFG) bolts. From anchor bolt alignment verification to the final ridge capping, we deliver turnkey structures ready for immediate fit-out.',
    heroImage: '/regenerated_image_1788754639780.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Single-source turnkey accountability eliminates disputes between fabricator and erector',
      'Calibrated torque-wrench tightening of Grade 8.8 / 10.9 HSFG structural bolts',
      'Zero-tolerance crane lifting plans ensuring flawless personnel and structural safety',
      'Rapid structural closure allowing early handover for civil flooring and equipment installation'
    ],
    capabilities: [
      'Multi-Crane Tandem Heavy Structural Lifts',
      'High-Bay Portal Frame Sequential Erection',
      'Roof Sheeting & Cold-Store Insulated Wall Cladding',
      'Canopy, Crane Runway & Mezzanine Assembly',
      'Site Laser-Level Plumbness & Alignment Verification'
    ],
    processSteps: [
      {
        title: 'Foundation Grid & Anchor Bolt Audit',
        description: 'Total station survey verifying civil anchor bolt coordinates, projections, and elevation leveling.'
      },
      {
        title: 'Primary Frame Sequential Erection',
        description: 'Erecting first rigid bay with cross-bracing to establish safe structural anchorage before progressive expansion.'
      },
      {
        title: 'Purlin, Cladding & Torque Audit',
        description: 'Installing secondary framing, roof envelope, downspouts, and conducting 100% torque inspections.'
      }
    ],
    specifications: [
      { label: 'Bolt Grades', value: 'Grade 8.8 / 10.9 HSFG (High Strength Friction Grip)' },
      { label: 'Safety Protocols', value: 'Full PPE, Lifelines, Safety Nets, Tool Tethering' },
      { label: 'Lifting Equipment', value: 'Heavy Hydraulic Telescopic Cranes & Boom Lifts' },
      { label: 'Survey Instruments', value: 'Total Station & Precision Optical Leveling' }
    ]
  },
  {
    id: 'peb-buildings',
    slug: 'peb-buildings',
    title: 'PEB Buildings (Pre-Engineered)',
    category: 'Structures',
    shortDesc: 'Custom-engineered industrial PEB steel structures offering wide clear spans, maximum cubic volume, and 40% faster execution.',
    fullDesc: 'Pre-Engineered Buildings (PEBs) engineered by Khodiyar Infraproject represent the gold standard for industrial warehouses, logistics parks, factories, and clear-span facilities. By tailoring steel taper thicknesses strictly in proportion to internal bending moment diagrams, PEBs achieve optimal structural economy compared to conventional heavy rolled steel. We engineer complete PEB envelopes including primary rigid frames, cold-formed galvanized Z/C purlins, standing seam or screw-down roof cladding, polycarbonate daylight skylights, turbo ventilators, crane brackets, and insulated wall panels.',
    heroImage: '/regenerated_image_1788754641137.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Clear unobstructed spans up to 60+ meters without intermediate load-bearing columns',
      'Up to 40% faster project completion compared to traditional masonry or RCC construction',
      'Lower civil foundation costs due to reduced dead weight of optimized tapered members',
      'High thermal efficiency when integrated with rockwool or PUF sandwich panels'
    ],
    capabilities: [
      'Clear Span & Multi-Span Portal Frames',
      'High-Eave Warehouse Enclosures (up to 18m+)',
      'Heavy Duty Crane-Compatible PEB Sheds',
      'Mezzanine Floors with Metal Deck Composite Slabs',
      'Aesthetic Industrial Facades & Aerofoil Louvers'
    ],
    processSteps: [
      {
        title: 'Architectural & Clearance Brief',
        description: 'Defining column-free internal clear height, bay spacing, wind velocities, and bay expansions.'
      },
      {
        title: 'Computerized Factory Production',
        description: 'Simultaneous fabrication of primary tapered rafters, galvanized purlins, and matching trim systems.'
      },
      {
        title: 'Systematic Site Assembly',
        description: 'Pre-bolted frame assembly on the ground followed by rapid crane erection and envelope sealing.'
      }
    ],
    specifications: [
      { label: 'Clear Span Capacity', value: '15m to 60m+ column-free designs' },
      { label: 'Roof Slope', value: '1:10 standard (customizable from 1:5 to 1:20)' },
      { label: 'Secondary Framing', value: 'High-strength Galvanized Cold-Formed Z & C Purlins (345 MPa)' },
      { label: 'Cladding Material', value: '0.5mm Galvalume AZ150 / Color Coated Steel' }
    ]
  },
  {
    id: 'heavy-structures',
    slug: 'heavy-structures',
    title: 'Heavy Structures',
    category: 'Structures',
    shortDesc: 'Engineering and fabrication for heavy industrial plants, furnace buildings, multi-tier process towers, and high-tonnage crane bays.',
    fullDesc: 'When industrial projects involve severe dynamic loads, high-capacity overhead cranes (20T to 75T+), multi-story process equipment, or intense operational vibrations, Khodiyar Infraproject delivers heavy structural steel engineering. We manufacture built-up box sections, heavy plate girders, pipe racks, heavy truss bents, and vibrating screen support structures. Our fabrication protocols enforce strict joint penetration, pre-heating of thick plates, post-weld stress relief where required, and full traceability of all structural plate batches.',
    heroImage: '/regenerated_image_1788754642347.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'High-capacity load-bearing integrity engineered for intense cyclic dynamic forces',
      'Experience in heavy crane girders with welded rail systems and surge trusses',
      'Heavy built-up plate columns resisting extreme axial and lateral seismic loads',
      'Thorough ultrasonic flaw detection on 100% of major tension and moment welds'
    ],
    capabilities: [
      'Heavy Industrial Process Towers & Multi-Tier Floors',
      'Continuous Crane Runway Girders & Walkways',
      'Chemical & Refining Pipe Racks & Trestles',
      'Heavy Furnace & Boiler House Enclosures',
      'Built-up Box Columns with Internal Diaphragms'
    ],
    processSteps: [
      {
        title: 'Dynamic Load Modeling',
        description: 'Analyzing impact factors, crane surge forces, dynamic machine resonance, and fatigue limitations.'
      },
      {
        title: 'Heavy Plate Cutting & Preheating',
        description: 'Controlled beveling and multi-pass welding with continuous temperature monitoring.'
      },
      {
        title: 'Trial Rig & Bolt Fitment Check',
        description: 'Trial assembling critical heavy joints at the facility to ensure flawless alignment at the job site.'
      }
    ],
    specifications: [
      { label: 'Plate Thicknesses', value: 'Up to 65mm structural high-yield steel' },
      { label: 'Crane Compatibility', value: 'Designed for 10 Ton to 75+ Ton EOT Cranes' },
      { label: 'Weld Quality', value: 'Full Penetration Butt Welds with 100% NDT UT' },
      { label: 'Deflection Ratios', value: 'Strict L/600 to L/1000 deflection control for crane girders' }
    ]
  },
  {
    id: 'modular-structures',
    slug: 'modular-structures',
    title: 'Modular Structures',
    category: 'Structures',
    shortDesc: 'Rapidly deployable modular industrial buildings, plant offices, control rooms, security blocks, and scalable structural pods.',
    fullDesc: 'Modern industrial facilities require agility. Khodiyar Infraproject designs and manufactures modular steel structures that allow industrial plants to deploy operational space in days rather than months. Ideal for in-plant administrative offices, electrical control rooms (MCCs), QA testing laboratories, mezzanine modules, and security gate complexes, our modular structures combine light-gauge structural steel frames, insulated sandwich wall systems, pre-routed conduits, and durable architectural finishes.',
    heroImage: '/regenerated_image_1788754967044.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Pre-assembled or flat-pack delivery enabling 70% reduction in on-site construction time',
      'Easy relocation or vertical/horizontal expansion as plant operations evolve',
      'Superior thermal insulation keeping HVAC power consumption low in industrial settings',
      'Minimal site disruption—can be installed inside operational factory bays without dust or fumes'
    ],
    capabilities: [
      'Plant In-Shed Manager Offices & Supervisory Cabins',
      'Substation & Motor Control Center (MCC) Enclosures',
      'Modular Guard Houses & Checkpoint Cabins',
      'Industrial Cafeteria & Staff Changing Modules',
      'Portable Testing & Calibration Laboratories'
    ],
    processSteps: [
      {
        title: 'Space & Functional Planning',
        description: 'Designing layout, doorway swings, insulation thickness, and electrical/HVAC loading specifications.'
      },
      {
        title: 'Precision Frame Prefabrication',
        description: 'Building welded tubular steel skid bases, structural corner castings, and wall framing.'
      },
      {
        title: 'Rapid Deployment & Anchoring',
        description: 'Offloading directly onto prepared plinths or floor slabs with rapid utility hookups.'
      }
    ],
    specifications: [
      { label: 'Base Structure', value: 'Heavy channel & tubular steel welded sub-frame' },
      { label: 'Wall Panels', value: '50mm - 100mm PUF / EPS / Rockwool insulated panels' },
      { label: 'Flooring', value: 'Heavy cement fiber board / Checker plate / Vinyl finishes' },
      { label: 'Deployment Time', value: '1 to 3 days for standard configurations' }
    ]
  },
  {
    id: 'designing-and-production',
    slug: 'designing-and-production',
    title: 'Designing & Production',
    category: 'Engineering',
    shortDesc: 'Unified engineering-to-shopfloor workflow delivering synchronized cutting schedules, nested steel layouts, and minimal scrap.',
    fullDesc: 'The biggest bottleneck in structural construction occurs when architects and fabricators speak different languages. Khodiyar Infraproject bridges this gap through a unified Designing & Production ecosystem. Engineering algorithms directly drive automated nesting software, minimizing raw steel scrap to under 3%. Production manifests specify exact welding passes, hole diameters, and stiffener orientations before raw steel plates even reach the cutting table. This synchronous loop prevents field rework and guarantees that every component delivered to the site fits precisely without on-site cutting or re-drilling.',
    heroImage: '/regenerated_image_1788754971704.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Complete elimination of discrepancies between engineering drawings and shopfloor fabrication',
      'Advanced CNC plate nesting algorithms reducing material waste and client raw steel costs',
      'Detailed traceability with color-coded part markings matching the erection sequence',
      'Fast-track prototype verification for custom architectural and industrial connections'
    ],
    capabilities: [
      'BIM-Integrated Shop Drawing Production',
      'Automated CNC Multi-Torch Cutting Nesting',
      'Component Sequencing Indexed to Erection Grid',
      'Real-Time Shopfloor Quality Verification',
      'Batch-Wise Material Quality Documentation'
    ],
    processSteps: [
      {
        title: '3D Detailing & Bill of Materials',
        description: 'Generating exact steel part lists with weights, plate grades, and bolt quantities.'
      },
      {
        title: 'Automated Nesting & Cutting Lists',
        description: 'Optimizing parent plate utilization on automated plasma and shear lines.'
      },
      {
        title: 'Synchronous Fabrication Tracking',
        description: 'Tracking components by structural grid line from weld station to painting yard.'
      }
    ],
    specifications: [
      { label: 'Material Yield', value: '>96% utilization via computerized nesting' },
      { label: 'Part Indexing', value: 'Hard-stamped and high-visibility painted piece marks' },
      { label: 'Tolerances', value: 'Strict adherence to IS 7215 structural fabrication tolerances' },
      { label: 'Integration', value: 'Direct digital interface between CAD/CAM & fabrication machinery' }
    ]
  },
  {
    id: 'logistics',
    slug: 'logistics',
    title: 'Logistics Coordination',
    category: 'Execution',
    shortDesc: 'Synchronized Just-in-Time structural dispatch matched to site erection order, eliminating yard clutter and transit damage.',
    fullDesc: 'At Khodiyar Infraproject, logistics is treated as an essential phase of structural engineering rather than a mere transport transaction. Uncoordinated structural deliveries choke job sites, risk coating scratches, and cause expensive crane idle time. We practice Synchronized Just-in-Time (JIT) logistics: dispatches are packaged and scheduled in the exact sequence required by our erection crew. Bay-1 primary columns and anchor plates ship first, followed by portal rafters, roof purlins, and wall cladding in calibrated stages. Custom timber dunnage and heavy strapping prevent transit distortion of slender steel flanges.',
    heroImage: '/regenerated_image_1788754973638.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Zero site congestion—materials arrive precisely when the crane and crew are ready to install',
      'Elimination of double handling and site transit damage to primed steel surfaces',
      'Heavy-haul transport coordination across Vadodara, Halol, and broader Gujarat corridors',
      'Systematic bundling with packing manifests allowing 5-minute site component verification'
    ],
    capabilities: [
      'Long-Length Rafter Multi-Axle Trailer Transport (up to 16m+ single pieces)',
      'Sequential Staging and Dunnage Protection',
      'Site Access & Turning Radius Route Surveys',
      'GPS-Monitored Dispatch Schedules',
      'Coordinated Offloading Rigging Support'
    ],
    processSteps: [
      {
        title: 'Erection Schedule Alignment',
        description: 'Matching factory dispatch lots directly to the site engineer\'s weekly crane schedule.'
      },
      {
        title: 'Protective Bundling & Strapping',
        description: 'Using high-tensile strapping, corner protectors, and timber dunnage to safeguard coatings.'
      },
      {
        title: 'Direct-to-Crane Offloading',
        description: 'Positioning incoming trailers directly within crane swing radii for direct erection from bed where viable.'
      }
    ],
    specifications: [
      { label: 'Coverage Area', value: 'Vadodara, Halol, Savli, Dahej, Bharuch, and Pan-Gujarat' },
      { label: 'Fleet Capability', value: 'Low-bed trailers, 40-foot flatbeds, and heavy multi-axle trucks' },
      { label: 'Tracking', value: 'Real-time transit updates to site supervisory engineers' },
      { label: 'Dispatch Manifest', value: 'Detailed itemized packing list cross-referenced to erection GA drawings' }
    ]
  },
  {
    id: 'erection-and-installation',
    slug: 'erection-and-installation',
    title: 'Erection & Installation',
    category: 'Execution',
    shortDesc: 'Comprehensive on-site structural assembly, alignment verification, torque inspection, and weather-tight building envelope sealing.',
    fullDesc: 'The final milestone in our end-to-end workflow is rigorous Erection & Installation. Our field engineers bring extensive experience in complex industrial steel installations. We deploy heavy mobile cranes, certified rigging equipment, laser alignment tools, and hydraulic torque wrenches to assemble primary frames with microscopic deviation limits. Once the skeleton is erected and cross-braced, our installation crews install cold-formed purlins, sag rods, gutters, flashings, and high-performance roof and wall panels to ensure complete weather-tightness and longevity.',
    heroImage: '/regenerated_image_1788754975455.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    keyBenefits: [
      'Trained and certified rigging specialists adhering strictly to safety life-lines and PPE',
      'Systematic optical plumb checks ensuring perpendicular frame alignment prior to final torquing',
      'Leak-proof roof installation with self-drilling EPDM-washer fasteners and sealant strips',
      'Rapid snag-list clearance and handover documentation for civil and utility contractors'
    ],
    capabilities: [
      'Full Structural Skeleton Assembling',
      'HSFG Bolt Tensioning & Pre-load Auditing',
      'Roof Sheeting, Wall Cladding & Thermal Insulation Installation',
      'Heavy Crane Rail Alignment & Grouting',
      'Industrial Flashings, Gutters, and Downspout Drainage Systems'
    ],
    processSteps: [
      {
        title: 'Rigging & Structural Stability Setup',
        description: 'Erecting columns, tying in portal rafters, and installing permanent cable bracing systems.'
      },
      {
        title: 'Plumbness Verification & Final Torquing',
        description: 'Using total station optics to adjust plumb within IS tolerances followed by calibrated torque application.'
      },
      {
        title: 'Envelope Installation & Water-Tightness Testing',
        description: 'Laying profile sheets, applying mastic sealants at overlaps, and conducting water spray audits.'
      }
    ],
    specifications: [
      { label: 'Erection Tolerance', value: 'Complies with IS 12843: Tolerances for erection of steel structures' },
      { label: 'Bolt Inspection', value: '100% torque inspection using calibrated dial torque wrenches' },
      { label: 'Roof Fasteners', value: 'Class 3 / Class 4 corrosion-resistant self-drilling fasteners with EPDM washers' },
      { label: 'Handover Quality', value: 'Ready for equipment installation and flooring fit-out' }
    ]
  }
];

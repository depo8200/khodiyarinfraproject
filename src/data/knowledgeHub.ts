export interface KnowledgeArticle {
  id: string;
  slug: string;
  type: 'peb-guide' | 'technical-article' | 'cost-planning' | 'comparison' | 'industrial-guide';
  title: string;
  categoryLabel: string;
  summary: string;
  readTime: string;
  targetAudience: string;
  tableOfContents: { id: string; title: string }[];
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: {
      type: 'info' | 'engineering' | 'note';
      title: string;
      text: string;
    };
  }[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export const PEB_GUIDES_DATA: KnowledgeArticle[] = [
  {
    id: 'peb-guide-1',
    slug: 'what-is-peb',
    type: 'peb-guide',
    title: 'What Is a Pre-Engineered Building (PEB)?',
    categoryLabel: 'PEB Fundamentals',
    summary: 'A comprehensive beginner-friendly overview of Pre-Engineered Buildings (PEBs), how they are designed, fabricated off-site, and assembled as high-performance steel structures.',
    readTime: '6 min read',
    targetAudience: 'Factory promoters, industrial planners, warehouse developers',
    tableOfContents: [
      { id: 'definition', title: '1. What Does "Pre-Engineered" Actually Mean?' },
      { id: 'core-concept', title: '2. The Core Concept Behind PEB Technology' },
      { id: 'key-advantages', title: '3. Why Industrial Projects Choose PEB Over Conventional Steel' },
      { id: 'suitability', title: '4. Ideal Industrial Applications' },
      { id: 'conclusion', title: '5. Summary & Next Planning Steps' }
    ],
    sections: [
      {
        id: 'definition',
        heading: '1. What Does "Pre-Engineered" Actually Mean?',
        paragraphs: [
          'A Pre-Engineered Building (PEB) is a steel building system designed and manufactured off-site in a controlled factory environment according to precise architectural and structural specifications. Once fabricated, individual structural members are shipped to the site in sequenced dispatches and assembled with bolted connections.',
          'Unlike conventional structural steel construction—where heavy standard hot-rolled I-beams and channels are delivered to the construction site and manually cut, welded, and aligned in the field—a PEB is completely pre-detailed using 3D structural analysis software before a single plate is cut.'
        ],
        callout: {
          type: 'info',
          title: 'Off-Site Precision',
          text: 'Every primary column, rafter, purlin, and connection cleat is pre-punched, pre-welded, and primed in the factory. No on-site fabrication cutting or field welding of primary structural joints is typically required.'
        }
      },
      {
        id: 'core-concept',
        heading: '2. The Core Concept Behind PEB Technology',
        paragraphs: [
          'The core engineering innovation of a pre-engineered building lies in tapered member profiling. In any portal frame structure, bending moments are highest at the column-rafter knee joint and lowest near the mid-span or base hinge.',
          'Conventional steel construction uses uniform hot-rolled beams across the entire span, resulting in excessive unused steel weight where bending stress is low. In contrast, PEB structural rafters and columns are fabricated as built-up plates with variable web depths that mirror the actual bending moment diagram.'
        ],
        bulletPoints: [
          'Optimal Steel Distribution: Maximum steel depth where internal stresses are greatest, reducing total dead load.',
          'Bolted High-Strength Splices: Shop-welded endplates joined on-site with Grade 8.8 or 10.9 HSFG structural bolts.',
          'Cold-Formed Secondary Steel: High-tensile galvanized Z and C sections providing roofing and wall sheeting support.',
          'Integrated Cladding & Accessories: Color-coated profiling sheets, skylights, gravity ventilators, and gutters designed as a unified system.'
        ]
      },
      {
        id: 'key-advantages',
        heading: '3. Why Industrial Projects Choose PEB Over Conventional Steel',
        paragraphs: [
          'For industrial facilities such as manufacturing plants, chemical processing sheds, and distribution warehouses, timing and clear usable space are critical economic drivers.',
          'Because foundation excavation and factory steel fabrication happen simultaneously rather than sequentially, overall project delivery timelines are typically reduced by 30% to 50% compared to traditional on-site construction methods.'
        ],
        bulletPoints: [
          'Reduced Construction Schedule: Foundations can be poured while structural frames are profiled and welded in the plant.',
          'Material Weight Efficiency: Tapered built-up members save up to 25% to 35% in raw steel weight compared to uniform rolled sections.',
          'Large Column-Free Spans: Easily accommodates unobstructed clear spans of 30 to 60+ meters for continuous forklift maneuvering.',
          'Superior Quality Assurance: Automated submerged arc welding (SAW) and controlled factory priming eliminate weather-related site welding defects.'
        ]
      },
      {
        id: 'suitability',
        heading: '4. Ideal Industrial Applications',
        paragraphs: [
          'PEB technology is not limited to simple rectangular sheds. Today, it serves as the architectural and structural foundation for complex multi-tier industrial ecosystems.',
          'Common applications include heavy machinery manufacturing plants, e-commerce fulfillment hubs, temperature-controlled cold storages, multi-story industrial office mezzanines, and sports arenas.'
        ]
      },
      {
        id: 'conclusion',
        heading: '5. Summary & Next Planning Steps',
        paragraphs: [
          'Understanding PEB basics allows project promoters to define realistic project timelines, select appropriate bay spacing, and structure procurement tenders effectively.',
          'For any industrial facility, structural requirements such as overhead crane wheel loads, wind speed exposure under IS 875, and soil bearing capacity must be analyzed before finalizing member profiles.'
        ]
      }
    ],
    keyTakeaways: [
      'PEBs are factory-fabricated steel systems assembled entirely with bolted field splices.',
      'Tapered built-up profiles match bending moment diagrams, reducing overall steel weight by 25–35%.',
      'Civil foundation works and structural factory fabrication happen in parallel, cutting project schedules significantly.',
      'Clear unobstructed spans up to 60+ meters can be achieved without intermediate center columns.'
    ],
    relatedSlugs: ['how-peb-works', 'main-components-peb', 'primary-secondary-framing', 'peb-manufacturing-fabrication']
  },
  {
    id: 'peb-guide-2',
    slug: 'how-peb-works',
    type: 'peb-guide',
    title: 'How Does a PEB Building Work?',
    categoryLabel: 'PEB Fundamentals',
    summary: 'An engineering explanation of load transfer pathways, structural interaction between primary frames, purlins, bracing, and anchor bolts in a Pre-Engineered Building.',
    readTime: '7 min read',
    targetAudience: 'Civil contractors, industrial building consultants, site supervisors',
    tableOfContents: [
      { id: 'load-pathway', title: '1. The Load Transfer Pathway' },
      { id: 'gravity-lateral', title: '2. Handling Gravity vs. Lateral Environmental Forces' },
      { id: 'framing-interaction', title: '3. How Frame Components Work Together' },
      { id: 'foundation-anchoring', title: '4. Anchor Bolts and Foundation Reaction Transfer' },
      { id: 'practical-takeaways', title: '5. Engineering Considerations' }
    ],
    sections: [
      {
        id: 'load-pathway',
        heading: '1. The Load Transfer Pathway',
        paragraphs: [
          'To understand how a pre-engineered building functions, one must trace how external forces (such as roof dead load, wind suction, seismic acceleration, and moving crane loads) travel from the building surface down to the earth foundation.',
          'Unlike concrete structures where load is carried primarily through rigid floor slabs and heavy columns, a PEB relies on an integrated network of thin-gauge cladding, cold-formed secondary members, heavy primary tapered rigid frames, and diagonal bracing cables.'
        ]
      },
      {
        id: 'gravity-lateral',
        heading: '2. Handling Gravity vs. Lateral Environmental Forces',
        paragraphs: [
          'Gravity loads (weight of sheet metal, insulation, solar panels, and live maintenance loads) act downward on the roof sheeting. The sheeting transfers this pressure to cold-formed Z-purlins spaced at 1.2 to 1.5 meter centers.',
          'The purlins act as continuous longitudinal beams that deliver concentrated point reactions to the primary tapered rafters. The rafters channel the resulting moment and axial forces down through rigid knee joints to the main columns, which finally anchor into reinforced concrete footings.',
          'Lateral forces from high-velocity wind (governed by IS 875 Part 3 in India) create severe uplift suction and side-wall thrust. The building resists these lateral forces through rigid moment frames in the transverse direction and diagonal rod/angle cross-bracing in the longitudinal direction.'
        ],
        callout: {
          type: 'engineering',
          title: 'Transverse vs. Longitudinal Behavior',
          text: 'In the transverse direction (across the building width), stability is achieved through rigid portal action. In the longitudinal direction (along the building length), stability relies on roof and wall bracing trusses.'
        }
      },
      {
        id: 'framing-interaction',
        heading: '3. How Frame Components Work Together',
        paragraphs: [
          'Each structural tier has a specific mechanical responsibility. If any component is undersized or improperly connected, the integrity of the entire building is compromised.'
        ],
        bulletPoints: [
          'Roof Sheeting: Serves as the weather barrier and provides partial diaphragm stabilization to top flanges.',
          'Secondary Purlins & Girts: Transfer distributed surface loads to primary frames and act as lateral restraint against member buckling.',
          'Primary Portal Frames: Resist large bending moments, crane wheel surges, and direct vertical loads.',
          'Cable & Angle Bracing: Create rigid vertical and horizontal planar trusses to resist longitudinal wind forces and seismic shear.'
        ]
      },
      {
        id: 'foundation-anchoring',
        heading: '4. Anchor Bolts and Foundation Reaction Transfer',
        paragraphs: [
          'At the bottom of each primary PEB column, a heavy baseplate is securely anchored to the concrete pedestal using high-strength anchor bolts (often Grade 8.8 or IS 2062 threaded rods).',
          'Depending on whether the engineer designs the frame as a "pinned base" or a "fixed base", the connection will either transfer only vertical compression and horizontal shear, or transfer additional rotational bending moments into the foundation.'
        ]
      },
      {
        id: 'practical-takeaways',
        heading: '5. Engineering Considerations',
        paragraphs: [
          'A pre-engineered building functions efficiently because every element works in synergy. Modifying roof loads (such as adding rooftop solar panels or suspending heavy utility piping) without verifying purlin and rafter capacity can alter the engineered load pathway.',
          'Always review intended secondary equipment loads with structural design consultants before installing heavy rooftop equipment.'
        ]
      }
    ],
    keyTakeaways: [
      'Load transfers progressively: Roof Sheeting → Secondary Purlins → Primary Rafters → Columns → Anchor Bolts → Foundations.',
      'Portal action handles transverse stability; cross-bracing handles longitudinal wind and seismic stability.',
      'Tapered rafters are engineered precisely for combined axial thrust and bending moment envelopes.',
      'Foundation baseplates must be aligned to millimeter tolerances to ensure proper anchor bolt load distribution.'
    ],
    relatedSlugs: ['what-is-peb', 'main-components-peb', 'bracing-systems', 'peb-foundation-considerations']
  },
  {
    id: 'peb-guide-3',
    slug: 'main-components-peb',
    type: 'peb-guide',
    title: 'Main Components of a PEB Structure',
    categoryLabel: 'PEB Fundamentals',
    summary: 'A detailed breakdown of every structural component in a Pre-Engineered Building: primary frames, secondary purlins, sheeting, bracing, and connection hardware.',
    readTime: '8 min read',
    targetAudience: 'Procurement heads, site engineers, architectural draftsmen',
    tableOfContents: [
      { id: 'primary-members', title: '1. Primary Framing Members' },
      { id: 'secondary-members', title: '2. Secondary Framing Members' },
      { id: 'roof-wall-sheeting', title: '3. Sheeting, Cladding & Insulation' },
      { id: 'bracing-accessories', title: '4. Bracing & Structural Hardware' },
      { id: 'building-accessories', title: '5. Architectural Accessories' }
    ],
    sections: [
      {
        id: 'primary-members',
        heading: '1. Primary Framing Members',
        paragraphs: [
          'The primary structural system constitutes the backbone of a PEB. It carries all major gravitational, wind, and seismic forces directly to the foundations.',
          'Primary members are built-up "H" or "I" shaped steel sections fabricated from high-grade steel plates (conforming to IS 2062 Grade E250 / E350 or ASTM A572 Grade 50) using automated submerged arc welding.'
        ],
        bulletPoints: [
          'Built-Up Columns: Tapered or uniform depth columns that support the eaves and absorb wind thrust.',
          'Tapered Rafters: Welded I-beams designed with varying web depths to match roof pitch and bending moment.',
          'Crane Runway Girders: Solid web I-sections with heavy top cap channels designed to support overhead crane bridge wheels.',
          'Mezzanine Beams & Joists: High-capacity rolled or built-up framing carrying industrial floor slabs.'
        ]
      },
      {
        id: 'secondary-members',
        heading: '2. Secondary Framing Members',
        paragraphs: [
          'Secondary members bridge the distance between primary frames. They are typically cold-formed from high-yield galvanized steel coils (minimum 345–450 MPa yield strength) to resist corrosion and minimize dead load.'
        ],
        bulletPoints: [
          'Roof Purlins: Cold-formed "Z" sections designed with overlapped splices to act as continuous beams across bays.',
          'Wall Girts: Cold-formed "Z" or "C" sections mounted horizontally to support exterior wall panels and windows.',
          'Eave Struts: Located at the intersection of roof and sidewalls, acting as both a purlin and a tie member for longitudinal bracing.',
          'Base Channels: Fastened to the masonry or concrete plinth wall to support bottom wall sheeting.'
        ]
      },
      {
        id: 'roof-wall-sheeting',
        heading: '3. Sheeting, Cladding & Insulation',
        paragraphs: [
          'Building cladding protects inventory and personnel from outdoor elements while providing thermal and acoustic control.',
          'Standard PEB profile sheets are manufactured from 0.47mm to 0.60mm bare Galvalume (55% Aluminum, 43.5% Zinc, 1.5% Silicon alloy) or pre-painted color-coated steel. For climate-controlled operations, insulated sandwich panels with Polyurethane Foam (PUF) or Rockwool cores are utilized.'
        ]
      },
      {
        id: 'bracing-accessories',
        heading: '4. Bracing & Structural Hardware',
        paragraphs: [
          'Without bracing, a steel building would sway under longitudinal wind and seismic forces.',
          'Bracing elements include diagonal roof tension rods, double-angle wall cross braces, portal bracing frames (where clear vehicle bay access is required), and sag rods that prevent purlins from twisting under heavy wind suction.'
        ],
        callout: {
          type: 'note',
          title: 'Fastener Reliability',
          text: 'Primary joints use Grade 8.8 or Grade 10.9 High Strength Friction Grip (HSFG) bolts. Secondary members are fastened using electro-galvanized high-tensile machine bolts and self-drilling screws with EPDM washers.'
        }
      },
      {
        id: 'building-accessories',
        heading: '5. Architectural Accessories',
        paragraphs: [
          'Functional accessories integrate smoothly into the primary structural frame: roof ridge ventilators for natural ventilation, poly-carbonate skylight sheets (providing 5% to 8% roof daylight area), industrial rolling shutters, crane brackets, and perimeter gutters with downspouts.'
        ]
      }
    ],
    keyTakeaways: [
      'Primary framing consists of shop-welded tapered I-sections fabricated from high-grade steel plates.',
      'Secondary framing utilizes cold-formed galvanized Z and C purlins to bridge bays and support cladding.',
      'Galvalume and color-coated steel profile sheets provide weather tightness and corrosion resistance.',
      'HSFG bolts (Grade 8.8 / 10.9) are critical for transferring moment and shear across frame splices.'
    ],
    relatedSlugs: ['what-is-peb', 'primary-secondary-framing', 'purlins-and-girts', 'roof-and-wall-systems']
  },
  {
    id: 'peb-guide-4',
    slug: 'peb-construction-process',
    type: 'peb-guide',
    title: 'PEB Building Construction Process',
    categoryLabel: 'Process & Execution',
    summary: 'A complete step-by-step walkthrough of how a Pre-Engineered Building is executed from architectural brief and structural design to site erection and handover.',
    readTime: '7 min read',
    targetAudience: 'Project owners, facility directors, general contractors',
    tableOfContents: [
      { id: 'stage-1', title: 'Stage 1: Brief, Site Surveys & 3D Modeling' },
      { id: 'stage-2', title: 'Stage 2: Anchor Bolt Detailing & Foundation Pour' },
      { id: 'stage-3', title: 'Stage 3: Factory Fabrication & Quality Clearance' },
      { id: 'stage-4', title: 'Stage 4: Sequenced Logistics & Site Staging' },
      { id: 'stage-5', title: 'Stage 5: On-Site Erection, Alignment & Sheeting' }
    ],
    sections: [
      {
        id: 'stage-1',
        heading: 'Stage 1: Brief, Site Surveys & 3D Modeling',
        paragraphs: [
          'The construction process begins with understanding the functional parameters of the building: clear span dimensions, clear eave height, bay spacing, wind category, crane lifting tonnage, and daylighting preferences.',
          'Structural engineers model the building in 3D finite-element software (such as STAAD.Pro or MBS). Loading calculations are performed under IS 800:2007 (General Construction in Steel), IS 875 (Dead, Live, and Wind loads), and IS 1893 (Seismic Criteria). Upon approval, detailed shop fabrication drawings and CNC cutting files are generated.'
        ]
      },
      {
        id: 'stage-2',
        heading: 'Stage 2: Anchor Bolt Detailing & Foundation Pour',
        paragraphs: [
          'Because PEB structural members are fabricated off-site, civil foundation work begins immediately. Detailed anchor bolt setting plans (ABSPs) and rigid steel templates are provided to the civil contractor.',
          'Anchor bolts must be cast with tight survey tolerances (typically within ±2mm to ±3mm). Precise positioning is verified using optical total station equipment before concrete cures.'
        ]
      },
      {
        id: 'stage-3',
        heading: 'Stage 3: Factory Fabrication & Quality Clearance',
        paragraphs: [
          'Simultaneously inside the steel manufacturing plant, structural plates are cut using automated CNC plasma/oxy-fuel profiling torches. Plates are assembled and welded using Submerged Arc Welding (SAW) to produce built-up columns and rafters.',
          'Each member undergoes visual, dimensional, and non-destructive testing (such as ultrasonic testing of flange-to-web welds). Members are then shot-blasted to remove mill scale and coated with high-performance anti-corrosive primer.'
        ]
      },
      {
        id: 'stage-4',
        heading: 'Stage 4: Sequenced Logistics & Site Staging',
        paragraphs: [
          'Steel members cannot simply be dumped on site; they must arrive in the exact order required for crane erection. Anchor bolts and base columns arrive first, followed by roof rafters, purlins, and cladding materials.',
          'Proper site laydown planning prevents double handling and avoids scratching protective factory coatings.'
        ]
      },
      {
        id: 'stage-5',
        heading: 'Stage 5: On-Site Erection, Alignment & Sheeting',
        paragraphs: [
          'Erection begins with raising the primary columns onto the foundation pedestals and tightening baseplate leveling nuts. Next, rafters are assembled on the ground into portal frames and hoisted into place using hydraulic mobile cranes.',
          'Once the primary portal frame and cable bracing are plumbed and torqued, roof purlins and wall girts are installed. Finally, cladding sheets, roof insulation, ridge ventilators, and gutters are fastened using self-drilling screws.'
        ],
        callout: {
          type: 'info',
          title: 'Safety During Erection',
          text: 'Temporary guy cables and safety lifelines are mandatory until the full braced bay is secured. An unbraced portal frame can be vulnerable to sudden high wind gusts during installation.'
        }
      }
    ],
    keyTakeaways: [
      'PEB execution merges parallel tracks: civil foundations on-site and structural fabrication in the factory.',
      'Accurate anchor bolt templates prevent costly re-drilling or alignment delays during column raising.',
      'Sequenced logistics ensure that members arrive matched to crane hoisting schedules.',
      'Torque-calibrated tightening of HSFG bolts guarantees moment-resistant joint performance.'
    ],
    relatedSlugs: ['what-is-peb', 'peb-manufacturing-fabrication', 'peb-erection-installation', 'peb-quality-control-inspection']
  },
  {
    id: 'peb-guide-5',
    slug: 'peb-manufacturing-fabrication',
    type: 'peb-guide',
    title: 'PEB Manufacturing and Fabrication Process',
    categoryLabel: 'Process & Execution',
    summary: 'Inside the factory: automated CNC plate profiling, submerged arc welding (SAW), purlin roll forming, surface shot blasting, and priming of PEB structural steel.',
    readTime: '7 min read',
    targetAudience: 'Quality engineers, steel procurement teams, plant inspectors',
    tableOfContents: [
      { id: 'raw-material', title: '1. Raw Material Sourcing & Mill Test Verification' },
      { id: 'cnc-profiling', title: '2. CNC Cutting & Web-Flange Assembly' },
      { id: 'submerged-arc-welding', title: '3. Automated Submerged Arc Welding (SAW)' },
      { id: 'purlin-forming', title: '4. Cold-Formed Secondary Purlin Roll-Forming' },
      { id: 'surface-treatment', title: '5. Shot Blasting & Protective Paint Systems' }
    ],
    sections: [
      {
        id: 'raw-material',
        heading: '1. Raw Material Sourcing & Mill Test Verification',
        paragraphs: [
          'High-integrity PEB manufacturing begins with verified raw steel plates from certified primary producers (such as SAIL, Tata Steel, or JSW). Plates conform strictly to IS 2062 Grade E250 / E350 or ASTM A572 Grade 50.',
          'Mill Test Reports (MTRs) verify yield strength, ultimate tensile strength, elongation percentage, and chemical composition (including carbon equivalent values for weldability).'
        ]
      },
      {
        id: 'cnc-profiling',
        heading: '2. CNC Cutting & Web-Flange Assembly',
        paragraphs: [
          'Raw steel plates are placed on heavy CNC plasma or multi-head oxy-fuel cutting tables. Automated nestings optimize plate utilization to reduce scrap.',
          'Tapered webs and flanges are cut with precise bevel angles. Web and flange plates are positioned in an automatic H-beam assembly machine where hydraulic clamps hold them tightly perpendicular prior to continuous welding.'
        ]
      },
      {
        id: 'submerged-arc-welding',
        heading: '3. Automated Submerged Arc Welding (SAW)',
        paragraphs: [
          'Primary members are welded using automated dual-torch Submerged Arc Welding (SAW). The arc remains submerged beneath a blanket of granular fusible flux, shielding the weld pool from atmospheric oxygen and nitrogen.',
          'This automated process produces deep, uniform weld penetration along the entire length of the column or rafter flange-to-web connection, minimizing human error and ensuring structural compliance with AWS D1.1 (Structural Welding Code).'
        ],
        callout: {
          type: 'engineering',
          title: 'Weld Distortion Control',
          text: 'Heat input during welding can cause angular distortion in flange plates. Modern PEB fabrication lines include mechanical flange straighteners that restore flanges to exact 90-degree alignment post-welding.'
        }
      },
      {
        id: 'purlin-forming',
        heading: '4. Cold-Formed Secondary Purlin Roll-Forming',
        paragraphs: [
          'Secondary purlins are manufactured from high-yield galvanized steel coils (yielding 345 to 450 MPa). Coils are uncoiled through continuous multi-stand roll-forming lines that shape the steel into Z and C profiles.',
          'Automated hydraulic punching stations punch bolt holes and laps inline before flying shears cut each purlin to millimeter-accurate length.'
        ]
      },
      {
        id: 'surface-treatment',
        heading: '5. Shot Blasting & Protective Paint Systems',
        paragraphs: [
          'Before paint application, steel surfaces undergo automatic centrifugal wheel shot-blasting to achieve surface cleanliness standard Sa 2.5 (Swedish Standard SIS 05 5900).',
          'Shot blasting removes rust, oil, and mill scale while imparting an anchor profile that ensures strong adhesion for red oxide zinc chromate or zinc phosphate epoxy primers.'
        ]
      }
    ],
    keyTakeaways: [
      'Certified steel plates with verified Mill Test Reports form the basis of structural safety.',
      'Automated Submerged Arc Welding (SAW) guarantees continuous, deep-penetration flange-to-web joints.',
      'Inline pre-punched holes in cold-formed purlins eliminate hazardous manual drilling at height.',
      'Sa 2.5 shot blasting is essential for ensuring long-term adhesion of industrial protective coatings.'
    ],
    relatedSlugs: ['peb-construction-process', 'peb-quality-control-inspection', 'structural-steel-fabrication-basics', 'purlins-and-girts']
  },
  {
    id: 'peb-guide-6',
    slug: 'peb-erection-installation',
    type: 'peb-guide',
    title: 'PEB Erection and Installation Process',
    categoryLabel: 'Process & Execution',
    summary: 'A safety and engineering guide on on-site PEB erection: crane planning, column raising, portal assembly, torque bolting, and roofing installation.',
    readTime: '7 min read',
    targetAudience: 'Site engineers, safety managers, crane operators, project consultants',
    tableOfContents: [
      { id: 'pre-erection-checks', title: '1. Pre-Erection Site Readiness & Survey' },
      { id: 'crane-rigging', title: '2. Crane Capacity Planning & Ground Compaction' },
      { id: 'bay-erection', title: '3. Establishing the First Braced Bay' },
      { id: 'torque-bolting', title: '4. Torque-Controlled Fastening (HSFG Bolts)' },
      { id: 'sheeting-installation', title: '5. Roof and Wall Cladding Installation' }
    ],
    sections: [
      {
        id: 'pre-erection-checks',
        heading: '1. Pre-Erection Site Readiness & Survey',
        paragraphs: [
          'On-site steel erection cannot proceed until the civil foundation has attained full design compressive strength (typically 28 days for standard OPC concrete or as certified by test cubes).',
          'A joint survey between the civil contractor and the steel erection engineer verifies column center-to-center distances, pedestal levels, and anchor bolt projections using optical leveling instruments.'
        ]
      },
      {
        id: 'crane-rigging',
        heading: '2. Crane Capacity Planning & Ground Compaction',
        paragraphs: [
          'Hydraulic mobile cranes (typically 20T to 50T depending on rafter span and radius) require compacted, level ground paths along the building erection corridor.',
          'Outrigger pads must rest on solid steel plates or heavy hardwood timbers to prevent outrigger settlement during tandem rafter lifts.'
        ]
      },
      {
        id: 'bay-erection',
        heading: '3. Establishing the First Braced Bay',
        paragraphs: [
          'The most critical phase of PEB erection is creating the initial "anchor bay" or braced bay.',
          'Two adjacent portal frames are hoisted, connected with roof purlins and wall girts, and completely stabilized with cross-bracing rods and cables before the crane unhooks. This creates a self-supporting rigid rectangular box from which subsequent frames are progressively erected.'
        ],
        callout: {
          type: 'note',
          title: 'Never Leave Frames Unbraced',
          text: 'Leaving a single isolated portal frame standing overnight without temporary guy cables poses severe collapse risks under sudden wind gusts.'
        }
      },
      {
        id: 'torque-bolting',
        heading: '4. Torque-Controlled Fastening (HSFG Bolts)',
        paragraphs: [
          'Splice connections in primary frames transfer substantial bending moments. Standard hand wrenches are insufficient for achieving required bolt clamp tensions.',
          'Calibrated torque wrenches or impact wrenches are used on all Grade 8.8 and 10.9 structural bolts. Inspection teams verify bolt tension using torque verification logs.'
        ]
      },
      {
        id: 'sheeting-installation',
        heading: '5. Roof and Wall Cladding Installation',
        paragraphs: [
          'Once framing is plumbed within allowable tolerances, roof sheeting commences from the opposite direction of the prevailing wind to ensure laps shed rainwater naturally.',
          'Fasteners are driven perpendicularly into purlins using torque-limiting screw guns. Over-tightening that crushes the EPDM sealing washer is strictly avoided.'
        ]
      }
    ],
    keyTakeaways: [
      'Site readiness surveys verify anchor bolt projections and pedestal elevations before cranes mobilize.',
      'The initial braced bay must be fully cross-braced and secured before advancing down the building length.',
      'Grade 8.8 / 10.9 HSFG bolts require calibrated torque wrench tightening for moment transfer.',
      'Cladding installation must proceed against prevailing wind directions with controlled screw torque.'
    ],
    relatedSlugs: ['peb-construction-process', 'peb-manufacturing-fabrication', 'bracing-systems', 'roof-and-wall-systems']
  },
  {
    id: 'peb-guide-7',
    slug: 'where-peb-used',
    type: 'peb-guide',
    title: 'Where Are PEB Buildings Used?',
    categoryLabel: 'Applications & Sectors',
    summary: 'An exploration of industrial, commercial, and agricultural sectors that leverage pre-engineered steel buildings: logistics, heavy engineering, cold chains, and modular structures.',
    readTime: '6 min read',
    targetAudience: 'Industrial land investors, business promoters, plant managers',
    tableOfContents: [
      { id: 'logistics-warehouses', title: '1. Logistics, Warehousing & E-Commerce Fulfillment' },
      { id: 'manufacturing-factories', title: '2. Heavy Machinery & Engineering Workshops' },
      { id: 'cold-storage', title: '3. Cold Storage & Temperature-Controlled Facilities' },
      { id: 'chemical-pharma', title: '4. Chemical, Pharmaceutical & Process Industries' },
      { id: 'commercial-utility', title: '5. Commercial, Agricultural & Utility Buildings' }
    ],
    sections: [
      {
        id: 'logistics-warehouses',
        heading: '1. Logistics, Warehousing & E-Commerce Fulfillment',
        paragraphs: [
          'Modern supply chain operations require vast unobstructed floor areas where heavy forklift trucks, automated pallet racking systems, and cross-docking bays can operate seamlessly.',
          'PEB architecture delivers clear spans exceeding 40 to 60 meters without intermediate columns, maximizing floor space utilization and volumetric storage efficiency.'
        ]
      },
      {
        id: 'manufacturing-factories',
        heading: '2. Heavy Machinery & Engineering Workshops',
        paragraphs: [
          'Manufacturing facilities often require overhead traveling (EOT) cranes ranging from 5 tons to 30+ tons. PEB structural frames are engineered with built-in crane brackets that integrate directly with runway beams, avoiding the expense of independent support columns.',
          'High eave clearances (up to 12–16 meters) allow smooth material handling and vertical ventilation for welding and machining fumes.'
        ]
      },
      {
        id: 'cold-storage',
        heading: '3. Cold Storage & Temperature-Controlled Facilities',
        paragraphs: [
          'Cold storage units and pharmaceutical food processing chambers demand airtight enclosures with high thermal insulation.',
          'PEB frames provide rigid envelopes that easily integrate ceiling-hung cooling evaporators and high-density PUF (Polyurethane Foam) insulated wall panels.'
        ]
      },
      {
        id: 'chemical-pharma',
        heading: '4. Chemical, Pharmaceutical & Process Industries',
        paragraphs: [
          'In aggressive environments (such as chemical fertilizer plants or acid-handling zones), PEB buildings utilize specialized protective coating systems (such as high-build epoxy and polyurethane finishes) to resist corrosive fumes and high humidity.'
        ]
      },
      {
        id: 'commercial-utility',
        heading: '5. Commercial, Agricultural & Utility Buildings',
        paragraphs: [
          'Beyond heavy industry, PEB structures are widely utilized for indoor sports complexes, automobile showrooms, agricultural grain silos, aircraft hangars, and railway passenger sheds.'
        ]
      }
    ],
    keyTakeaways: [
      'Logistics warehouses maximize volumetric storage through large column-free spans.',
      'Heavy manufacturing plants utilize integrated PEB crane brackets for 5T to 30T+ EOT cranes.',
      'Cold chain facilities leverage PEBs to support heavy ceiling refrigeration and insulated panels.',
      'Chemical and coastal facilities require specialized epoxy and polyurethane coatings for corrosion protection.'
    ],
    relatedSlugs: ['what-is-peb', 'peb-warehouse-basics', 'peb-factory-basics', 'clear-span-structures']
  },
  {
    id: 'peb-guide-8',
    slug: 'advantages-considerations-peb',
    type: 'peb-guide',
    title: 'Advantages and Considerations of PEB Buildings',
    categoryLabel: 'Evaluation & Planning',
    summary: 'An objective evaluation of Pre-Engineered Buildings: technical and commercial advantages compared against critical project planning considerations and engineering constraints.',
    readTime: '6 min read',
    targetAudience: 'Chief technical officers, procurement managers, financial directors',
    tableOfContents: [
      { id: 'key-advantages', title: '1. Primary Advantages of PEB Construction' },
      { id: 'cost-speed-efficiency', title: '2. Speed, Material Optimization & Flexibility' },
      { id: 'important-considerations', title: '3. Important Planning Considerations' },
      { id: 'maintenance-lifecycle', title: '4. Long-Term Maintenance & Durability' },
      { id: 'decision-checklist', title: '5. Technical Decision Checklist' }
    ],
    sections: [
      {
        id: 'key-advantages',
        heading: '1. Primary Advantages of PEB Construction',
        paragraphs: [
          'Pre-Engineered Buildings have largely replaced traditional on-site fabricated steel sheds for industrial infrastructure. Their advantages stem from computational structural optimization and controlled factory fabrication.',
          'Because each structural member is engineered precisely for internal bending and axial loads, raw steel dead weight is reduced by 25% to 35% compared to uniform hot-rolled sections.'
        ]
      },
      {
        id: 'cost-speed-efficiency',
        heading: '2. Speed, Material Optimization & Flexibility',
        paragraphs: [
          'Project turnaround time is one of the most prominent benefits. In industrial manufacturing, early commissioning delivers substantial commercial returns.',
          'Parallel execution—fabricating steel in the factory while civil foundations cure on-site—can compress overall construction schedules by 4 to 6 months on a typical 5,000 square meter facility.',
          'Furthermore, PEB systems offer future expandability: buildings can be extended longitudinally by adding bays to endwalls with minimal disruption to ongoing operations.'
        ]
      },
      {
        id: 'important-considerations',
        heading: '3. Important Planning Considerations',
        paragraphs: [
          'While PEBs offer extensive advantages, they require disciplined pre-planning. Because members are fabricated to exact millimeter drawings off-site, making field alterations (such as changing overhead crane tonnage or shifting column locations) during erection is expensive.',
          'All mechanical, electrical, and plumbing (MEP) openings, crane wheel loads, and rooftop equipment weights must be frozen during the detailed design stage.'
        ],
        callout: {
          type: 'engineering',
          title: 'Design Freezing',
          text: 'Attempting to flame-cut holes into primary rafter webs on-site to route unplanned piping can degrade member shear capacity and void structural certifications.'
        }
      },
      {
        id: 'maintenance-lifecycle',
        heading: '4. Long-Term Maintenance & Durability',
        paragraphs: [
          'Steel structures require periodic maintenance to guarantee 30+ year service life. Regular inspections should check roof fastener EPDM washers (which degrade under intense solar UV exposure over 7–10 years), gutter debris accumulation, and paint integrity in corrosive environments.'
        ]
      },
      {
        id: 'decision-checklist',
        heading: '5. Technical Decision Checklist',
        paragraphs: [
          'When evaluating PEB for your facility, confirm the following with your engineering team: required clear height beneath crane hooks, future expansion plans, soil bearing capacity for foundation sizing, and environmental corrosive exposure.'
        ]
      }
    ],
    keyTakeaways: [
      'PEBs save 25–35% in raw steel weight through tapered profile engineering.',
      'Schedules compress by 30–50% due to parallel civil foundation and factory fabrication workflows.',
      'Design freezing is essential: field modifications to primary steel are costly and structurally risky.',
      'Periodic inspection of roof fasteners and coastal primer maintenance ensures long service life.'
    ],
    relatedSlugs: ['what-is-peb', 'peb-construction-process', 'clear-span-structures', 'peb-quality-control-inspection']
  },
  {
    id: 'peb-guide-9',
    slug: 'peb-warehouse-basics',
    type: 'peb-guide',
    title: 'PEB Warehouse Basics: Layout, Height & Clear Spans',
    categoryLabel: 'Warehouse Engineering',
    summary: 'Key engineering parameters for planning an industrial PEB warehouse: bay spacing, clear eave height, dock leveler integration, and floor flatness considerations.',
    readTime: '7 min read',
    targetAudience: 'Warehouse developers, logistics planners, supply chain consultants',
    tableOfContents: [
      { id: 'dimensional-planning', title: '1. Dimensional Planning: Width, Length & Bay Spacing' },
      { id: 'clear-eave-height', title: '2. Clear Eave Height vs. Pallet Racking Tiers' },
      { id: 'loading-docks', title: '3. Loading Docks & Canopy Cantilevers' },
      { id: 'flooring-superflat', title: '4. Interaction with Superflat Concrete Flooring' },
      { id: 'ventilation-daylight', title: '5. Daylighting & Ventilation Baselines' }
    ],
    sections: [
      {
        id: 'dimensional-planning',
        heading: '1. Dimensional Planning: Width, Length & Bay Spacing',
        paragraphs: [
          'A successful warehouse layout starts from the inside out: pallet rack spacing and forklift turning radiuses determine optimal column grid layouts, rather than arbitrary architectural dimensions.',
          'Typical PEB warehouse bay spacing (distance between portal frames along building length) ranges from 6 to 9 meters. Wider bays (8–9m) optimize secondary purlin continuous spans and reduce the number of concrete foundation footings.'
        ]
      },
      {
        id: 'clear-eave-height',
        heading: '2. Clear Eave Height vs. Pallet Racking Tiers',
        paragraphs: [
          'Clear eave height is defined as the distance from finished floor level (FFL) to the lowest structural rafter or haunch knee. It is not the apex roof height.',
          'For modern high-bay logistics, clear heights of 10 to 14 meters are standard, accommodating 5 to 7 tiers of vertical pallet racking. Designers must verify that fire sprinkler pipes and high-bay lighting remain clear of the forklift reach envelope.'
        ]
      },
      {
        id: 'loading-docks',
        heading: '3. Loading Docks & Canopy Cantilevers',
        paragraphs: [
          'Loading docks require integrated structural canopies projecting 4 to 6 meters from the building wall to protect goods from monsoon rains during truck unloading.',
          'PEB frames allow cantilevered tapered rafter extensions that eliminate ground-level columns, ensuring unobstructed reversing space for 40-foot container trailers.'
        ]
      },
      {
        id: 'flooring-superflat',
        heading: '4. Interaction with Superflat Concrete Flooring',
        paragraphs: [
          'Very Narrow Aisle (VNA) forklifts require superflat concrete floors (FM2 or DM2 classification under TR34).',
          'While the floor slab is structurally isolated from building column footings to prevent differential settlement cracks, anchor bolt embedments and slab joint layouts must be tightly coordinated during early civil construction.'
        ]
      },
      {
        id: 'ventilation-daylight',
        heading: '5. Daylighting & Ventilation Baselines',
        paragraphs: [
          'Natural daylight polycarbonate sheets covering 5% to 8% of the roof area reduce daytime warehouse electrical lighting consumption significantly.',
          'Continuous aerodynamic gravity ridge ventilators provide 4 to 6 air changes per hour (ACPH) without recurring electrical operational expenditure.'
        ]
      }
    ],
    keyTakeaways: [
      'Warehouse bay spacing of 7.5–9 meters achieves optimal structural steel economy.',
      'Clear height must measure to the lowest rafter haunch or MEP fixture, not the roof apex.',
      'Cantilevered canopies protect loading docks without obstructive ground columns.',
      'Isolated floor slab joints prevent structural column reactions from cracking superflat slab surfaces.'
    ],
    relatedSlugs: ['what-is-peb', 'where-peb-used', 'clear-span-structures', 'industrial-ventilation-considerations']
  },
  {
    id: 'peb-guide-10',
    slug: 'peb-factory-basics',
    type: 'peb-guide',
    title: 'PEB Factory Building Basics: Crane Systems & Heavy Bays',
    categoryLabel: 'Manufacturing Plants',
    summary: 'A technical primer on designing PEB manufacturing plants: overhead EOT crane brackets, surge loads, machinery vibrations, and multi-tier utility mezzanines.',
    readTime: '8 min read',
    targetAudience: 'Factory heads, mechanical project engineers, structural consultants',
    tableOfContents: [
      { id: 'crane-integration', title: '1. Overhead Crane (EOT) System Integration' },
      { id: 'crane-wheel-loads', title: '2. Understanding Vertical and Lateral Wheel Surges' },
      { id: 'utility-mezzanines', title: '3. Industrial Mezzanines & Supervisory Cabins' },
      { id: 'machinery-isolation', title: '4. Machinery Vibration & Dynamic Load Isolation' },
      { id: 'safety-ventilation', title: '5. Environmental & Exhaust Considerations' }
    ],
    sections: [
      {
        id: 'crane-integration',
        heading: '1. Overhead Crane (EOT) System Integration',
        paragraphs: [
          'Industrial manufacturing factories frequently rely on Electric Overhead Traveling (EOT) cranes to maneuver raw materials, heavy dies, and finished goods.',
          'In a PEB factory shed, crane runway beams rest on heavy steel brackets shop-welded directly to the primary tapered columns. This integrated design eliminates the need for separate concrete crane columns, saving interior shop floor area.'
        ]
      },
      {
        id: 'crane-wheel-loads',
        heading: '2. Understanding Vertical and Lateral Wheel Surges',
        paragraphs: [
          'Cranes induce complex dynamic forces beyond simple static dead weights: vertical impact loads, lateral surges (from trolley cross-travel braking), and longitudinal crane traction forces.',
          'Under Indian Standard IS 875 Part 2 and IS 800:2007, structural columns and runway girders must be stiffened with top flange horizontal channels to resist lateral surge deflection without binding crane wheels.'
        ],
        callout: {
          type: 'engineering',
          title: 'Crane Duty Classifications',
          text: 'A light workshop crane (Class M1/M2) has drastically different fatigue design considerations than a continuous 24/7 steel mill crane (Class M7/M8). Specify crane duty cycles clearly during the design brief.'
        }
      },
      {
        id: 'utility-mezzanines',
        heading: '3. Industrial Mezzanines & Supervisory Cabins',
        paragraphs: [
          'Modern manufacturing plants frequently incorporate elevated steel mezzanines for quality testing labs, administrative offices, electrical control panels (MCC rooms), and locker facilities.',
          'PEB mezzanine framing utilizes heavy primary beams and secondary joists topped with metal decking sheets and reinforced concrete slabs designed for 500 to 1,000 kg/m² live loads.'
        ]
      },
      {
        id: 'machinery-isolation',
        heading: '4. Machinery Vibration & Dynamic Load Isolation',
        paragraphs: [
          'Heavy stamping presses, CNC milling centers, and compressors produce cyclic vibrations that must not transmit to the building superstructure.',
          'Heavy machine foundations must be decoupled from building column footings using expansion joint gaps filled with vibration-damping elastomeric filler.'
        ]
      },
      {
        id: 'safety-ventilation',
        heading: '5. Environmental & Exhaust Considerations',
        paragraphs: [
          'Manufacturing operations generate process heat and welding fumes. Building design must incorporate adequate louvered wall openings for fresh air intake and roof monitoring louvers or power exhausts to ensure safe air circulation.'
        ]
      }
    ],
    keyTakeaways: [
      'PEB crane brackets welded to columns avoid redundant civil crane columns.',
      'Lateral and longitudinal crane surges dictate column stiffness and runway girder cap channels.',
      'Industrial mezzanines integrate smoothly into primary columns for supervisory offices.',
      'Heavy dynamic equipment footings must remain physically isolated from PEB structural footings.'
    ],
    relatedSlugs: ['what-is-peb', 'primary-secondary-framing', 'peb-warehouse-basics', 'industrial-ventilation-considerations']
  }
];

export const TECHNICAL_ARTICLES_DATA: KnowledgeArticle[] = [
  {
    id: 'tech-art-1',
    slug: 'primary-secondary-framing',
    type: 'technical-article',
    title: 'Primary and Secondary Framing in PEB Structures',
    categoryLabel: 'Structural Systems',
    summary: 'An in-depth engineering breakdown comparing primary moment-resistant frames with cold-formed secondary framing systems in pre-engineered buildings.',
    readTime: '8 min read',
    targetAudience: 'Structural engineers, steel detailers, project architects',
    tableOfContents: [
      { id: 'primary-framing-mechanics', title: '1. Primary Framing Mechanics & Moment Optimization' },
      { id: 'flange-web-proportions', title: '2. Built-Up Flange & Web Proportions' },
      { id: 'secondary-framing-roles', title: '3. Secondary Framing Functions & Purlin Lapping' },
      { id: 'structural-interaction', title: '4. The Flange Bracing Interaction' },
      { id: 'design-standards', title: '5. Applicable Indian Standards (IS 800 & IS 801)' }
    ],
    sections: [
      {
        id: 'primary-framing-mechanics',
        heading: '1. Primary Framing Mechanics & Moment Optimization',
        paragraphs: [
          'The primary framing system in a PEB comprises the main transverse portal frames—consisting of built-up columns and rafters—responsible for carrying global gravitational, wind, and seismic forces to the foundation pedestals.',
          'Because a rigid portal frame experiences maximum bending moments at the eave knees and apex joints, and relatively low bending moments near the member midpoints, primary members are detailed with tapered webs. Web depths expand where stress demands are greatest and taper down where shear dominates.'
        ]
      },
      {
        id: 'flange-web-proportions',
        heading: '2. Built-Up Flange & Web Proportions',
        paragraphs: [
          'Primary members are fabricated by joining thick flange plates (typically 8mm to 25mm thick) to thinner web plates (typically 5mm to 12mm thick) using continuous automated submerged arc fillet welds.',
          'To prevent premature local buckling of thin webs under combined compression and bending, engineers must adhere to web slenderness limits specified in IS 800:2007 (Section 8) or AISC 360, incorporating intermediate transverse web stiffeners where concentrated loads or high shear stresses occur.'
        ]
      },
      {
        id: 'secondary-framing-roles',
        heading: '3. Secondary Framing Functions & Purlin Lapping',
        paragraphs: [
          'Secondary framing consists of cold-formed Z and C sections mounted longitudinally across primary frames to support roof panels and wall cladding.',
          'In modern PEB engineering, Z-purlins are designed with continuous overlapping nested splices over primary frames. By overlapping the purlins by 10% to 15% across interior frame supports, structural continuity is achieved, significantly reducing mid-span deflection and allowing lighter metal gauges.'
        ]
      },
      {
        id: 'structural-interaction',
        heading: '4. The Flange Bracing Interaction',
        paragraphs: [
          'A primary rafter in a PEB has its top flange continuously restrained against lateral-torsional buckling by attached roof purlins. However, during severe wind uplift events, the bottom flange shifts into compression.',
          'To prevent the unrestrained bottom flange from buckling laterally under wind suction, diagonal steel angles known as "flange braces" connect the bottom flange of the rafter directly to adjacent purlins at calculated intervals.'
        ],
        callout: {
          type: 'engineering',
          title: 'Flange Brace Integrity',
          text: 'Omission of flange braces during site erection is a leading cause of rafter failure under severe storm wind uplift. Every specified flange brace must be torqued tightly.'
        }
      },
      {
        id: 'design-standards',
        heading: '5. Applicable Indian Standards (IS 800 & IS 801)',
        paragraphs: [
          'Primary structural design in India is governed by IS 800:2007 (Limit State Design in General Steel Construction). Secondary cold-formed members are designed under IS 801:1975 (Use of Cold-Formed Light Gauge Steel Structural Members), aligning with AISI S100 international specifications.'
        ]
      }
    ],
    keyTakeaways: [
      'Primary frames utilize variable web depths to match internal bending moment envelopes.',
      'Submerged Arc Welding connects thick flanges to slender webs to prevent local web buckling.',
      'Overlapped Z-purlins create continuous beam spans that lower deflections and raw steel consumption.',
      'Flange braces stabilize compression flanges during severe wind suction reversals.'
    ],
    relatedSlugs: ['purlins-and-girts', 'bracing-systems', 'clear-span-structures', 'structural-steel-fabrication-basics']
  },
  {
    id: 'tech-art-2',
    slug: 'purlins-and-girts',
    type: 'technical-article',
    title: 'Purlins and Girts in PEB Buildings: Z vs. C Sections',
    categoryLabel: 'Secondary Structural',
    summary: 'A detailed technical study comparing cold-formed Z and C sections, nesting continuity, lap geometry, anti-sag rod systems, and galvanized coatings.',
    readTime: '7 min read',
    targetAudience: 'Structural engineers, steel fabricators, site installation leads',
    tableOfContents: [
      { id: 'z-vs-c-profiles', title: '1. Structural Mechanics: Z-Sections vs. C-Sections' },
      { id: 'nesting-lapping', title: '2. Purlin Nesting and Continuous Span Mechanics' },
      { id: 'galvanizing-yield', title: '3. High-Tensile Yield Strength & Galvanized Coating' },
      { id: 'anti-sag-systems', title: '4. Sag Rods and Web Stiffener Functions' },
      { id: 'installation-tolerances', title: '5. Installation Tolerances & Bolt Details' }
    ],
    sections: [
      {
        id: 'z-vs-c-profiles',
        heading: '1. Structural Mechanics: Z-Sections vs. C-Sections',
        paragraphs: [
          'In pre-engineered steel buildings, purlins (roof support beams) and girts (wall cladding beams) are cold-formed from high-yield structural steel coils. The two primary geometric shapes utilized are Z-sections and C-sections.',
          'Z-sections feature flanges bent at slightly different angles or widths (top flange typically 60mm, bottom flange 53mm), allowing one purlin to nest snugly inside another over primary rafters. C-sections are symmetric channel shapes primarily used around door openings, gable end frames, and perimeter eave struts where nesting is not required.'
        ]
      },
      {
        id: 'nesting-lapping',
        heading: '2. Purlin Nesting and Continuous Span Mechanics',
        paragraphs: [
          'The primary structural advantage of Z-purlins is nesting continuity. When two Z-purlins overlap across a support frame, the double section thickness at the support directly resists negative peak bending moments.',
          'This continuous beam behavior reduces mid-span bending moments by nearly 40% compared to simply-supported C-channels of identical thickness, permitting longer bay spacing or lighter sheet gauges.'
        ]
      },
      {
        id: 'galvanizing-yield',
        heading: '3. High-Tensile Yield Strength & Galvanized Coating',
        paragraphs: [
          'Secondary members require high yield strength—typically 345 MPa to 450 MPa (conforming to IS 277 or ASTM A653)—to withstand wind uplift and walking loads.',
          'To prevent atmospheric corrosion in industrial environments, purlin coils are hot-dip galvanized with a zinc coating weight typically ranging from 120 g/m² to 275 g/m² (Z120 to Z275).'
        ],
        callout: {
          type: 'info',
          title: 'Zinc Coating Selection',
          text: 'For standard dry warehouses, Z120 to Z180 galvanization is typical. For coastal Gujarat corridors (such as Dahej or Hazira), Z275 galvanization is recommended to prevent premature white rust.'
        }
      },
      {
        id: 'anti-sag-systems',
        heading: '4. Sag Rods and Web Stiffener Functions',
        paragraphs: [
          'Because Z-purlins possess thin webs (typically 1.5mm to 2.5mm), they are susceptible to lateral torsional twisting about their minor axis on sloped roofs.',
          'Threaded round sag rods (typically 10mm to 12mm diameter) are installed perpendicularly between purlins at mid-span or third-points to maintain flange alignment and prevent purlin roll under severe wind pressure.'
        ]
      },
      {
        id: 'installation-tolerances',
        heading: '5. Installation Tolerances & Bolt Details',
        paragraphs: [
          'Purlins are fastened to rafter cleat plates using Grade 4.6 or 8.8 electro-galvanized machine bolts. Slotted holes are pre-punched in factory lines to accommodate thermal expansion and site alignment variances.'
        ]
      }
    ],
    keyTakeaways: [
      'Z-purlins nest at primary frame supports to act as continuous beams with double section depth.',
      'C-sections are preferred around gable ends, window trims, and framing perimeters.',
      'Galvanized coatings (Z120–Z275) protect high-tensile light-gauge steel from environmental oxidation.',
      'Sag rods prevent minor-axis buckling and twisting on sloped roof structures.'
    ],
    relatedSlugs: ['primary-secondary-framing', 'roof-and-wall-systems', 'structural-steel-fabrication-basics', 'peb-manufacturing-fabrication']
  },
  {
    id: 'tech-art-3',
    slug: 'bracing-systems',
    type: 'technical-article',
    title: 'Bracing Systems in Steel Structures: Rods, Angles & Portals',
    categoryLabel: 'Structural Systems',
    summary: 'Engineering principles of longitudinal stability in PEB structures: tension rod cross-bracing, double-angle systems, portal wind bents, and seismic shear transfer.',
    readTime: '8 min read',
    targetAudience: 'Structural consultants, site erection managers, civil engineers',
    tableOfContents: [
      { id: 'why-bracing-needed', title: '1. Why Longitudinal Stability Demands Bracing' },
      { id: 'tension-rod-systems', title: '2. Tension Rod Cross-Bracing Mechanics' },
      { id: 'rigid-angle-bracing', title: '3. Compression & Tension Double-Angle Systems' },
      { id: 'portal-frames', title: '4. Portal Bracing Frames for Vehicle Access' },
      { id: 'seismic-wind-design', title: '5. IS 875 & IS 1893 Design Principles' }
    ],
    sections: [
      {
        id: 'why-bracing-needed',
        heading: '1. Why Longitudinal Stability Demands Bracing',
        paragraphs: [
          'A pre-engineered building portal frame is inherently rigid in the transverse direction (across the building width). However, in the longitudinal direction (down the length of the building), portal columns are pinned or flexible.',
          'Without dedicated longitudinal bracing systems, wind pressure hitting gable endwalls or seismic ground acceleration would cause the frames to rack longitudinally like a row of falling dominoes.'
        ]
      },
      {
        id: 'tension-rod-systems',
        heading: '2. Tension Rod Cross-Bracing Mechanics',
        paragraphs: [
          'The most economical and common longitudinal bracing system is tension-only rod cross-bracing (X-bracing). High-strength round steel rods (typically 16mm to 32mm diameter) are pinned across column and rafter bays.',
          'When wind strikes one gable end, diagonal rods in tension resist the lateral shear force. Hillside washers and threaded end-nuts allow erection teams to tension the rods symmetrically, removing any initial slack.'
        ]
      },
      {
        id: 'rigid-angle-bracing',
        heading: '3. Compression & Tension Double-Angle Systems',
        paragraphs: [
          'In heavy industrial facilities—such as buildings equipped with high-capacity EOT cranes or located in severe seismic zones (Zone IV/V)—tension-only rods may lack sufficient stiffness.',
          'In these applications, rigid structural angles (such as 2x ISA 75x75x6) or circular hollow sections (CHS) are welded back-to-back. These members resist forces in both tension and compression, limiting lateral building drift to strict tolerances.'
        ],
        callout: {
          type: 'engineering',
          title: 'Crane Longitudinal Surge',
          text: 'When an overhead crane brakes while traveling down the runway, significant longitudinal thrust is generated. Crane bays must have rigid angle bracing located directly beneath the crane girder level.'
        }
      },
      {
        id: 'portal-frames',
        heading: '4. Portal Bracing Frames for Vehicle Access',
        paragraphs: [
          'Cross-bracing creates an "X" shape across the bay, which obstructs doorways, forklift passages, and loading docks.',
          'Where unobstructed access is required along exterior walls, engineers replace rod cross-bracing with a rigid "portal frame bracing" bent (consisting of two intermediate columns and an inverted rafter). This creates a moment frame in the longitudinal wall that resists shear while maintaining clear drive-through access.'
        ]
      },
      {
        id: 'seismic-wind-design',
        heading: '5. IS 875 & IS 1893 Design Principles',
        paragraphs: [
          'Design forces for bracing are computed by evaluating wind pressure against gable walls (IS 875 Part 3) and fundamental seismic horizontal base shear (IS 1893 Part 1:2016).',
          'Bracing bays should be positioned near the center of the building or evenly distributed to minimize thermal expansion stress on anchor bolts.'
        ]
      }
    ],
    keyTakeaways: [
      'Bracing provides longitudinal stability against gable wind pressure and seismic ground shear.',
      'Tension-only rod X-bracing is the most efficient and economical system for standard warehouses.',
      'Rigid double-angle or pipe bracing is essential for dampening crane braking surge loads.',
      'Portal bracing frames preserve vehicle access lanes where X-bracing cannot be installed.'
    ],
    relatedSlugs: ['primary-secondary-framing', 'how-peb-works', 'peb-foundation-considerations', 'clear-span-structures']
  },
  {
    id: 'tech-art-4',
    slug: 'roof-and-wall-systems',
    type: 'technical-article',
    title: 'Roof and Wall Systems in PEB: Materials, Coatings & Fasteners',
    categoryLabel: 'Cladding & Envelopes',
    summary: 'An engineering analysis of metal roofing profiles: bare Galvalume vs. color-coated steel, standing seam vs. screw-down systems, and weatherproofing fastener technologies.',
    readTime: '7 min read',
    targetAudience: 'Cladding contractors, industrial facility engineers, plant developers',
    tableOfContents: [
      { id: 'sheeting-materials', title: '1. Base Materials: Galvalume Alloy vs. Pre-Painted Steel' },
      { id: 'screw-down-vs-standing-seam', title: '2. Screw-Down Panels vs. Standing Seam Roofing' },
      { id: 'fastener-technology', title: '3. Fastener Metallurgy & EPDM Weatherproofing' },
      { id: 'thermal-condensation', title: '4. Thermal Expansion & Condensation Control' },
      { id: 'accessories-gutters', title: '5. Flashings, Gutters & Downspout Sizing' }
    ],
    sections: [
      {
        id: 'sheeting-materials',
        heading: '1. Base Materials: Galvalume Alloy vs. Pre-Painted Steel',
        paragraphs: [
          'The external skin of a pre-engineered building is its first line of defense against monsoons, solar radiation, and industrial atmospheric pollution.',
          'Standard high-performance cladding uses 55% Aluminum-Zinc alloy coated steel (commonly known as bare Galvalume or Aluzinc, conforming to ASTM A792 or AS 1397). The combination of galvanic sacrificial protection from zinc and barrier barrier protection from aluminum provides up to 4 times greater corrosion resistance than standard galvanized steel.'
        ]
      },
      {
        id: 'screw-down-vs-standing-seam',
        heading: '2. Screw-Down Panels vs. Standing Seam Roofing',
        paragraphs: [
          'In traditional screw-down roof profiles (trapezoidal profiles with 28mm to 35mm rib heights), fasteners penetrate through the exterior sheet directly into purlins. While economical, thermal expansion over large roof expanses can cause screw holes to elongate over time.',
          'Standing seam roofing systems eliminate through-roof screw penetrations entirely. Panels are clamped to purlins using concealed movable clips, and adjacent panel seams are mechanically 360-degree double-locked with an electric seaming machine. This accommodates thermal expansion and allows low roof slopes (as low as 1:20 or 1:50).'
        ],
        callout: {
          type: 'info',
          title: 'Slope Suitability',
          text: 'Screw-down trapezoidal roofing requires a minimum slope of 1:10 (approx. 5.7 degrees). Standing seam roofs can safely be installed at slopes as low as 1:50 with zero risk of water ingress.'
        }
      },
      {
        id: 'fastener-technology',
        heading: '3. Fastener Metallurgy & EPDM Weatherproofing',
        paragraphs: [
          'A roof system is only as durable as its fasteners. Standard zinc-plated screws rust rapidly in industrial settings, causing localized sheet corrosion.',
          'Engineered PEB fasteners utilize Class 3 or Class 4 corrosion-resistant coatings (conforming to AS 3566) with bonded vulcanized EPDM rubber washers that remain elastic and UV-resistant over decades.'
        ]
      },
      {
        id: 'thermal-condensation',
        heading: '4. Thermal Expansion & Condensation Control',
        paragraphs: [
          'Steel sheets expand and contract significantly under seasonal temperature swings. Fixed screw attachments on roofs longer than 40 meters must incorporate expansion step joints to prevent sheet tearing.',
          'In uninsulated buildings, humid air contacting cold roof steel causes condensation dripping. Anti-condensation fleece membranes or vapor-barrier underlays installed directly beneath the sheets resolve this issue.'
        ]
      },
      {
        id: 'accessories-gutters',
        heading: '5. Flashings, Gutters & Downspout Sizing',
        paragraphs: [
          'Gutters must be sized according to local maximum rainfall intensity (typically 150–200 mm/hour in Gujarat under IS 1742). Overflows, drop boxes, and downspout pipes must be calculated with adequate hydraulic cross-sections to prevent water backing up into eaves.'
        ]
      }
    ],
    keyTakeaways: [
      '55% Aluminum-Zinc (Galvalume) alloy provides superior longevity compared to conventional galvanized sheeting.',
      'Standing seam roofing eliminates through-sheet fasteners, accommodating large thermal expansion cycles.',
      'AS 3566 Class 3/4 fasteners with EPDM washers are required to match 20+ year sheet service life.',
      'Perimeter gutters must be engineered for regional peak monsoon rainfall intensity to prevent overflow.'
    ],
    relatedSlugs: ['purlins-and-girts', 'insulation-considerations', 'industrial-ventilation-considerations', 'what-is-peb']
  },
  {
    id: 'tech-art-5',
    slug: 'clear-span-structures',
    type: 'technical-article',
    title: 'Clear Span Structures Explained: 30m to 60m+ Engineering',
    categoryLabel: 'Structural Systems',
    summary: 'The structural mechanics of wide clear span PEBs: rafter deflection limits, knee moment stiffening, transport splice divisions, and clear span vs. multi-span cost trade-offs.',
    readTime: '8 min read',
    targetAudience: 'Warehouse developers, logistics architects, structural engineers',
    tableOfContents: [
      { id: 'clear-span-definition', title: '1. What Constitutes a Clear Span Structure?' },
      { id: 'knee-moment-deflection', title: '2. Knee Joint Mechanics & Deflection Constraints' },
      { id: 'transportation-splices', title: '3. Transportation Limits & Field Splice Design' },
      { id: 'clear-vs-multi-span', title: '4. Clear Span vs. Multi-Span (Center Column) Cost Matrix' },
      { id: 'foundation-thrust', title: '5. Foundation Horizontal Thrust Considerations' }
    ],
    sections: [
      {
        id: 'clear-span-definition',
        heading: '1. What Constitutes a Clear Span Structure?',
        paragraphs: [
          'A clear span structure is a building whose entire transverse roof span is supported exclusively by exterior perimeter columns, leaving the entire interior floor completely free of intermediate supporting posts.',
          'In modern industrial PEBs, unobstructed clear spans typically range from 30 meters (approx. 100 feet) to 60+ meters (approx. 200 feet). They are essential for aircraft hangars, automated logistics sortation hubs, heavy manufacturing bays, and indoor sports facilities.'
        ]
      },
      {
        id: 'knee-moment-deflection',
        heading: '2. Knee Joint Mechanics & Deflection Constraints',
        paragraphs: [
          'As clear span width increases, the bending moment at the column-rafter knee joint increases exponentially (proportional to span squared, wL²/8).',
          'To resist this substantial knee moment without excessive steel tonnage, PEB rafters are designed with deep tapered haunches at the knees that taper down toward mid-span. Rafter depth at the haunch can reach 1,200mm to 1,800mm on a 50-meter clear span.',
          'Designers must adhere strictly to vertical deflection limits (typically Span / 180 to Span / 240 under full service live load per IS 800:2007) and lateral eave sway limits.'
        ]
      },
      {
        id: 'transportation-splices',
        heading: '3. Transportation Limits & Field Splice Design',
        paragraphs: [
          'A continuous 50-meter rafter cannot be transported on public roadways. Standard Indian transport trailers accommodate member lengths of 12 to 14 meters and widths up to 2.5 meters.',
          'Consequently, clear span rafters are fabricated in modular segments (typically 4 to 6 sections per portal frame) joined on-site using moment-resistant endplate splices with high-strength HSFG bolts.'
        ],
        callout: {
          type: 'engineering',
          title: 'Splice Placement',
          text: 'Splices are strategically located near points of contra-flexure (inflection points where bending moments are lowest) to minimize flange endplate thickness and bolt quantity.'
        }
      },
      {
        id: 'clear-vs-multi-span',
        heading: '4. Clear Span vs. Multi-Span (Center Column) Cost Matrix',
        paragraphs: [
          'Project owners must evaluate whether a pure clear span is economically necessary.',
          'Introducing a single row of interior center columns (creating a Multi-Span "MS" frame) reduces primary rafter bending moments by up to 60%. This reduces primary steel weight by 15% to 25%, resulting in substantial cost savings. However, if internal columns disrupt automated forklift paths, the clear span premium is commercially justified.'
        ]
      },
      {
        id: 'foundation-thrust',
        heading: '5. Foundation Horizontal Thrust Considerations',
        paragraphs: [
          'Large clear span portal frames subject foundation footings to significant outward horizontal thrust under gravity loading.',
          'Civil foundation designs must incorporate tension tie beams between opposing column pedestals, battered piles, or enlarged eccentric concrete footings to resist overturning and horizontal shear without soil failure.'
        ]
      }
    ],
    keyTakeaways: [
      'Clear span structures provide up to 60+ meters of completely unobstructed floor space.',
      'Deep tapered rafter haunches at knee joints resist exponential bending moment increases.',
      'Modular transport segments are spliced on-site near calculated points of contra-flexure.',
      'Adding center columns (Multi-Span) saves 15–25% in steel weight if operations permit interior posts.'
    ],
    relatedSlugs: ['primary-secondary-framing', 'what-is-peb', 'peb-warehouse-basics', 'peb-foundation-considerations']
  },
  {
    id: 'tech-art-6',
    slug: 'structural-steel-fabrication-basics',
    type: 'technical-article',
    title: 'Structural Steel Fabrication Basics: Tolerances & Standards',
    categoryLabel: 'Manufacturing & QC',
    summary: 'A reference on steel fabrication tolerances: plate bevel preparation, Submerged Arc Welding parameters, hole pitch accuracy, and camber control.',
    readTime: '7 min read',
    targetAudience: 'Fabrication inspectors, structural consultants, quality managers',
    tableOfContents: [
      { id: 'codes-standards', title: '1. Applicable Codes: IS 2062, IS 7215 & AWS D1.1' },
      { id: 'cutting-tolerances', title: '2. CNC Cutting & Edge Beveling Tolerances' },
      { id: 'welding-procedures', title: '3. Welding Procedure Specifications (WPS) & PQR' },
      { id: 'camber-sweep', title: '4. Camber, Sweep & Straightness Tolerances' },
      { id: 'hole-pitching', title: '5. Hole Pitching & Assembly Fit-Up Verification' }
    ],
    sections: [
      {
        id: 'codes-standards',
        heading: '1. Applicable Codes: IS 2062, IS 7215 & AWS D1.1',
        paragraphs: [
          'Structural steel fabrication in a modern PEB plant is governed by standardized manufacturing tolerances to guarantee structural performance and seamless on-site bolt alignment.',
          'Key standards include IS 2062 (Hot Rolled Medium and High Tensile Structural Steel), IS 7215 (Tolerances for Fabrication of Steel Structures), and AWS D1.1 / D1.1M (Structural Welding Code - Steel).'
        ]
      },
      {
        id: 'cutting-tolerances',
        heading: '2. CNC Cutting & Edge Beveling Tolerances',
        paragraphs: [
          'Plates are cut using automated CNC plasma or flame cutting machines. Under IS 7215, member length tolerances for welded built-up sections are maintained within ±2mm to ±3mm.',
          'Edges designated for full-penetration butt welding require mechanical or flame-cut beveling (typically 45-degree V-grooves) with controlled root faces (1.5mm to 2.0mm) to ensure 100% root fusion.'
        ]
      },
      {
        id: 'welding-procedures',
        heading: '3. Welding Procedure Specifications (WPS) & PQR',
        paragraphs: [
          'All welding activities must follow qualified Welding Procedure Specifications (WPS) supported by Procedure Qualification Records (PQR) per AWS D1.1.',
          'Welding parameters—including wire feed speed, arc voltage, travel speed, preheat temperature, and interpass temperature—must remain strictly within qualified limits to prevent hydrogen-induced cracking in high-strength steel.'
        ],
        callout: {
          type: 'engineering',
          title: 'Preheating Requirements',
          text: 'Plates with thickness exceeding 20mm or carbon equivalent (CE) above 0.42% require preheating to a minimum of 100°C–150°C before submerged arc or flux-cored welding.'
        }
      },
      {
        id: 'camber-sweep',
        heading: '4. Camber, Sweep & Straightness Tolerances',
        paragraphs: [
          'Long roof rafters require built-in upward camber during shop fabrication to counteract dead load sagging once erected.',
          'Allowable deviation for rafter camber under IS 7215 is typically ±Span / 1000. Sweep (horizontal lateral deviation) must not exceed Length / 1000 to prevent difficult flange fit-up during field erection.'
        ]
      },
      {
        id: 'hole-pitching',
        heading: '5. Hole Pitching & Assembly Fit-Up Verification',
        paragraphs: [
          'Bolt hole diameter tolerances must not exceed +1.0mm over nominal bolt size for standard clearance holes (e.g., 22mm hole for M20 bolt).',
          'Center-to-center pitch distances across endplate holes are controlled within ±1.0mm using CNC multi-spindle drilling lines to guarantee smooth bolt insertion on-site without torch reaming.'
        ]
      }
    ],
    keyTakeaways: [
      'IS 7215 and AWS D1.1 dictate strict dimensional, cutting, and welding boundaries.',
      'WPS and PQR documentation proves welding parameters produce defect-free joints.',
      'Upward shop camber counteracts gravitational dead load deflections.',
      'CNC drilling guarantees ±1.0mm hole pitch tolerances, eliminating field torch slotting.'
    ],
    relatedSlugs: ['peb-manufacturing-fabrication', 'peb-quality-control-inspection', 'primary-secondary-framing', 'purlins-and-girts']
  },
  {
    id: 'tech-art-7',
    slug: 'peb-quality-control-inspection',
    type: 'technical-article',
    title: 'PEB Quality Control and Inspection: NDT, Welds & Paint',
    categoryLabel: 'Quality & Testing',
    summary: 'A comprehensive quality assurance guide: Non-Destructive Testing (UT, MPI, DPT), visual weld inspection under AWS D1.1, and paint dry film thickness (DFT) verification.',
    readTime: '8 min read',
    targetAudience: 'Third-party inspection agencies (TPIA), QA/QC engineers, project owners',
    tableOfContents: [
      { id: 'raw-material-verification', title: '1. Raw Material Verification & Traceability' },
      { id: 'weld-inspection-ndt', title: '2. Weld Inspection: Visual, DPT & Ultrasonic Testing' },
      { id: 'dimensional-inspection', title: '3. Dimensional & Geometry Verification' },
      { id: 'surface-prep-paint', title: '4. Surface Profile & Dry Film Thickness (DFT)' },
      { id: 'documentation-dossier', title: '5. Pre-Dispatch Manufacturer Test Certificate (MTC)' }
    ],
    sections: [
      {
        id: 'raw-material-verification',
        heading: '1. Raw Material Verification & Traceability',
        paragraphs: [
          'Quality control begins before any steel is cut. Incoming steel plates and coils undergo heat number correlation against primary Mill Test Certificates (MTCs).',
          'Random chemical and mechanical test specimens are extracted and tested at certified NABL-accredited metallurgical laboratories to confirm yield point, tensile strength, and impact toughness.'
        ]
      },
      {
        id: 'weld-inspection-ndt',
        heading: '2. Weld Inspection: Visual, DPT & Ultrasonic Testing',
        paragraphs: [
          'Welded structural joints are inspected by certified ASNT Level II welding inspectors using standardized non-destructive testing (NDT) methodologies.',
          'Visual inspection checks for undercut, porosity, lack of penetration, and uneven weld profile. Liquid Penetrant Testing (DPT) checks for surface micro-cracks on root runs and endplate welds.',
          'Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal discontinuities (such as slag inclusions, lack of fusion, or lamellar tearing) inside full-penetration butt welds.'
        ],
        callout: {
          type: 'note',
          title: 'Mandatory UT Sampling',
          text: 'Tension flange splice butt welds typically require 100% Ultrasonic Testing, while compression webs require 10% to 20% spot UT under AWS D1.1 acceptance criteria.'
        }
      },
      {
        id: 'dimensional-inspection',
        heading: '3. Dimensional & Geometry Verification',
        paragraphs: [
          'Completed members are set on level inspection beds where overall length, web depth, flange tilt, squareness of endplates, and hole group coordinates are verified against approved fabrication shop drawings.'
        ]
      },
      {
        id: 'surface-prep-paint',
        heading: '4. Surface Profile & Dry Film Thickness (DFT)',
        paragraphs: [
          'Post shot-blasting, surface cleanliness is inspected against visual standard Sa 2.5, and surface roughness amplitude (anchor profile) is measured using surface profile gauges (typically 35–50 microns).',
          'After primer application, Dry Film Thickness (DFT) is measured across each member face using calibrated magnetic thickness gauges (such as Elcometer) conforming to SSPC-PA 2 norms.'
        ]
      },
      {
        id: 'documentation-dossier',
        heading: '5. Pre-Dispatch Manufacturer Test Certificate (MTC)',
        paragraphs: [
          'Before any steel dispatches to the project site, a comprehensive Quality Dossier is assembled containing material test certificates, NDT reports, paint inspection logs, and dimensional clearance sign-offs.'
        ]
      }
    ],
    keyTakeaways: [
      'Heat numbers on steel plates must correspond directly to verified Mill Test Certificates.',
      'Ultrasonic Testing (UT) by ASNT Level II technicians verifies internal butt weld soundess.',
      'Surface shot blasting to Sa 2.5 ensures coating adhesion and long-term rust prevention.',
      'Calibrated DFT checks conforming to SSPC-PA 2 guarantee specified primer paint thickness.'
    ],
    relatedSlugs: ['peb-manufacturing-fabrication', 'structural-steel-fabrication-basics', 'peb-construction-process', 'primary-secondary-framing']
  },
  {
    id: 'tech-art-8',
    slug: 'peb-foundation-considerations',
    type: 'technical-article',
    title: 'PEB Foundation Considerations: Anchor Bolts & Pedestals',
    categoryLabel: 'Foundation & Civil',
    summary: 'A civil-structural coordination guide: pinned vs. fixed column bases, anchor bolt embedment depth, pedestal reinforcement, and shear key mechanics.',
    readTime: '8 min read',
    targetAudience: 'Civil contractors, geotechnical engineers, structural consultants',
    tableOfContents: [
      { id: 'pinned-vs-fixed', title: '1. Column Base Design: Pinned vs. Fixed Baseplates' },
      { id: 'anchor-bolt-mechanics', title: '2. Anchor Bolt Sizing & Embedment Depth' },
      { id: 'shear-keys', title: '3. Resisting Horizontal Shear: Anchor Bolts vs. Shear Keys' },
      { id: 'pedestal-reinforcement', title: '4. Pedestal Reinforcement & Bursting Confinement' },
      { id: 'survey-tolerances', title: '5. Setting Tolerances & Grouting Procedures' }
    ],
    sections: [
      {
        id: 'pinned-vs-fixed',
        heading: '1. Column Base Design: Pinned vs. Fixed Baseplates',
        paragraphs: [
          'The interface between the PEB steel superstructure and the concrete foundation footing dictates the cost and behavior of both systems.',
          'Most standard PEB portal frames are engineered with a "pinned base" connection (typically 4 anchor bolts centered near the web). A pinned base transfers vertical downward gravity and upward uplift forces, along with horizontal shear, but transfers zero or negligible rotational bending moment to the footing. This keeps concrete footing sizes compact and economical.',
          'In contrast, buildings with heavy overhead cranes or extreme clear heights require a "fixed base" connection (large baseplates with 8 to 12 anchor bolts spread far apart). A fixed base reduces column lateral sway but requires significantly larger concrete footings and pile caps to resist large overturning moments.'
        ]
      },
      {
        id: 'anchor-bolt-mechanics',
        heading: '2. Anchor Bolt Sizing & Embedment Depth',
        paragraphs: [
          'Anchor bolts must resist heavy wind uplift suction forces that attempt to pull the building out of the ground.',
          'High-strength anchor bolts (conforming to IS 2062 Grade E250 / E350 or ASTM F1554 Grade 55/105) are detailed with hook ends (L-type/J-type) or heavy bottom anchor plates. Embedment depth in the concrete pedestal typically ranges from 600mm to 1,200mm, calculated to prevent concrete breakout failure cones under ACI 318 Appendix D or IS 456.'
        ]
      },
      {
        id: 'shear-keys',
        heading: '3. Resisting Horizontal Shear: Anchor Bolts vs. Shear Keys',
        paragraphs: [
          'Under severe lateral wind or seismic thrust, friction beneath the baseplate may be insufficient to transfer horizontal shear.',
          'While anchor bolts can resist moderate shear in bearing, heavy shear loads are best handled by welding a heavy steel stub (shear key) to the underside of the baseplate. The shear key projects into a pre-formed pocket in the concrete pedestal, directly transferring horizontal forces to mass concrete without bending anchor bolts.'
        ],
        callout: {
          type: 'engineering',
          title: 'Avoid Bending Anchor Bolts',
          text: 'Using anchor bolts alone to carry massive crane lateral surge loads can lead to bolt fatigue shearing. Always specify a welded shear key for heavy crane sheds.'
        }
      },
      {
        id: 'pedestal-reinforcement',
        heading: '4. Pedestal Reinforcement & Bursting Confinement',
        paragraphs: [
          'High-tension anchor bolts exert severe bursting stresses inside the top 300mm of the concrete pedestal.',
          'Structural engineers must detail close-spaced horizontal stirrups (ties) around the anchor bolt group to confine the concrete core and prevent corner spalling during extreme lateral frame drift.'
        ]
      },
      {
        id: 'survey-tolerances',
        heading: '5. Setting Tolerances & Grouting Procedures',
        paragraphs: [
          'Anchor bolts must be cast using rigid steel templates fastened securely to formwork prior to concrete pouring. Alignment tolerance is typically within ±2mm of center-to-center grid lines.',
          'After the steel column is plumbed on leveling nuts, the 25mm to 50mm gap between the baseplate and concrete pedestal is packed with high-strength non-shrink cementitious grout to ensure 100% bearing contact.'
        ]
      }
    ],
    keyTakeaways: [
      'Pinned bases minimize concrete footing volume; fixed bases reduce building lateral sway.',
      'Anchor bolt embedment depth must satisfy concrete breakout cone resistance calculations.',
      'Shear keys welded beneath baseplates transfer high horizontal wind and crane reactions safely.',
      'Non-shrink cementitious grout beneath baseplates is mandatory to transfer vertical compression.'
    ],
    relatedSlugs: ['how-peb-works', 'bracing-systems', 'clear-span-structures', 'peb-factory-basics']
  },
  {
    id: 'tech-art-9',
    slug: 'industrial-ventilation-considerations',
    type: 'technical-article',
    title: 'Industrial Building Ventilation Considerations: Natural vs. Forced',
    categoryLabel: 'HVAC & Comfort',
    summary: 'A guide to optimizing air circulation in industrial steel buildings: thermal stack effect, continuous ridge ventilators, louver placement, and Air Changes per Hour (ACPH).',
    readTime: '7 min read',
    targetAudience: 'Facility managers, industrial architects, environmental health & safety (EHS) officers',
    tableOfContents: [
      { id: 'ventilation-principles', title: '1. Fundamental Principles: The Thermal Stack Effect' },
      { id: 'ridge-ventilators', title: '2. Continuous Gravity Ridge Ventilators' },
      { id: 'wall-louvers', title: '3. Wall Louvers & Fresh Air Inlets' },
      { id: 'acph-calculations', title: '4. Calculating Air Changes Per Hour (ACPH)' },
      { id: 'mechanical-forced', title: '5. When to Combine Natural with Forced Mechanical Exhaust' }
    ],
    sections: [
      {
        id: 'ventilation-principles',
        heading: '1. Fundamental Principles: The Thermal Stack Effect',
        paragraphs: [
          'Industrial manufacturing buildings and large warehouses generate substantial internal heat loads from machinery, lighting, solar radiation on metal roofs, and human activity.',
          'Natural ventilation operates on the thermal stack effect (buoyancy principle): warm air is less dense and naturally rises toward the building apex, while cooler outdoor air enters through lower wall openings, establishing a continuous convection loop without motorized fans.'
        ]
      },
      {
        id: 'ridge-ventilators',
        heading: '2. Continuous Gravity Ridge Ventilators',
        paragraphs: [
          'The most efficient passive ventilation device in a PEB is a continuous aerodynamic gravity ridge ventilator mounted along the entire roof apex.',
          'These ventilators feature internal rain baffles that prevent wind-driven rainwater ingress while providing throat openings typically ranging from 600mm to 1,200mm. Outdoor wind blowing across the aerodynamic cowl creates negative suction (the Venturi effect), drawing warm air out of the building.'
        ]
      },
      {
        id: 'wall-louvers',
        heading: '3. Wall Louvers & Fresh Air Inlets',
        paragraphs: [
          'A ridge ventilator cannot exhaust air if fresh air cannot enter the building.',
          'Architects must provide continuous intake louvers or openable windows in the bottom 2 meters of exterior sidewalls. The inlet louver free-area should equal or exceed the total throat area of the roof ridge ventilator to avoid negative air pressure strangulation.'
        ],
        callout: {
          type: 'info',
          title: 'The Intake Rule',
          text: 'For every square meter of roof ventilator exhaust throat, provide at least 1.2 square meters of low-level wall louver intake area.'
        }
      },
      {
        id: 'acph-calculations',
        heading: '4. Calculating Air Changes Per Hour (ACPH)',
        paragraphs: [
          'Ventilation adequacy is measured in Air Changes per Hour (ACPH).',
          'Standard ambient storage warehouses typically require 3 to 6 ACPH. Heavy manufacturing workshops, welding bays, or injection molding plants require 8 to 15 ACPH to maintain comfortable working temperatures and safe air quality.'
        ]
      },
      {
        id: 'mechanical-forced',
        heading: '5. When to Combine Natural with Forced Mechanical Exhaust',
        paragraphs: [
          'Where severe localized heat sources exist (such as industrial paint baking ovens or plastic extrusion lines), passive natural ventilation must be supplemented with motorized roof exhausters or High-Volume Low-Speed (HVLS) ceiling destratification fans.'
        ]
      }
    ],
    keyTakeaways: [
      'Natural ventilation relies on the thermal stack effect and wind-driven Venturi suction.',
      'Gravity ridge ventilators provide continuous rain-protected air exhaust with zero power cost.',
      'Low-level wall louver intake area must equal or exceed roof exhaust area to ensure air flow.',
      'Manufacturing facilities require 8–15 ACPH to ensure occupational health and thermal comfort.'
    ],
    relatedSlugs: ['insulation-considerations', 'roof-and-wall-systems', 'peb-warehouse-basics', 'peb-factory-basics']
  },
  {
    id: 'tech-art-10',
    slug: 'insulation-considerations',
    type: 'technical-article',
    title: 'Insulation Considerations for Industrial Buildings',
    categoryLabel: 'HVAC & Comfort',
    summary: 'Evaluating thermal insulation systems in steel structures: glass wool with reinforced aluminum foil, rockwool acoustic insulation, and sandwich PUF panels.',
    readTime: '7 min read',
    targetAudience: 'Energy auditors, cold storage developers, HVAC consultants, plant promoters',
    tableOfContents: [
      { id: 'why-insulate', title: '1. Why Industrial Steel Sheds Require Thermal Insulation' },
      { id: 'insulation-materials', title: '2. Common Insulation Types: Glasswool, Rockwool & PUF' },
      { id: 'u-value-r-value', title: '3. Understanding Thermal Resistance: U-Values & R-Values' },
      { id: 'vapor-barrier', title: '4. The Critical Role of the Vapor Barrier' },
      { id: 'fire-safety', title: '5. Fire Safety Classifications (Class A / Class 1)' }
    ],
    sections: [
      {
        id: 'why-insulate',
        heading: '1. Why Industrial Steel Sheds Require Thermal Insulation',
        paragraphs: [
          'Uninsulated metal sheeting has high thermal conductivity. Under intense summer sunlight (where roof surface temperatures in Gujarat regularly exceed 60°C to 70°C), uninsulated roofs radiate immense heat into the interior workspace.',
          'Proper thermal insulation reduces interior ambient temperatures by 5°C to 10°C, dampens heavy monsoon rain noise by up to 20 decibels, prevents winter condensation dripping, and lowers HVAC electrical power consumption by up to 40%.'
        ]
      },
      {
        id: 'insulation-materials',
        heading: '2. Common Insulation Types: Glasswool, Rockwool & PUF',
        paragraphs: [
          'Three primary insulation technologies are specified in industrial steel buildings:'
        ],
        bulletPoints: [
          'Glass Mineral Wool: Flexible rolls (density 16 to 48 kg/m³, thickness 50mm) faced with reinforced aluminum foil (FSK). Economical and widely specified for warehouses.',
          'Rock Mineral Wool: High-density rigid or semi-rigid slabs (density 48 to 100 kg/m³). Outstanding acoustic absorption and superior fire resistance (up to 1,000°C melting point).',
          'Polyurethane Foam (PUF / PIR): Factory-injected rigid cores inside prefabricated sandwich panels (density 40 kg/m³). Highest thermal insulation efficiency, mandatory for cold storages and cleanrooms.'
        ]
      },
      {
        id: 'u-value-r-value',
        heading: '3. Understanding Thermal Resistance: U-Values & R-Values',
        paragraphs: [
          'Thermal performance is quantified by thermal resistance (R-value, in m²·K/W) and thermal transmittance (U-value, in W/m²·K). A higher R-value and lower U-value indicate superior thermal barrier performance.',
          'Under the Energy Conservation Building Code (ECBC) in India, roof assemblies in composite climates should achieve an overall U-value typically below 0.35 to 0.40 W/m²·K.'
        ]
      },
      {
        id: 'vapor-barrier',
        heading: '4. The Critical Role of the Vapor Barrier',
        paragraphs: [
          'Mineral wool insulation loses its insulating value if it absorbs moisture from indoor humidity.',
          'The interior-facing foil backing (Foil-Scrim-Kraft or FSK) acts as a continuous vapor barrier. All foil laps must be sealed with 75mm wide reinforced aluminum tape, and wire mesh supports (galvanized welded wire fabric) must be tightly tensioned over purlins.'
        ],
        callout: {
          type: 'note',
          title: 'Tape Sealing Integrity',
          text: 'Punctured or unsealed vapor barrier laps allow warm humid indoor air to condense against cold roof sheets, causing saturated wet insulation that drops onto plant equipment.'
        }
      },
      {
        id: 'fire-safety',
        heading: '5. Fire Safety Classifications (Class A / Class 1)',
        paragraphs: [
          'Industrial building codes require non-combustible insulation materials.',
          'Glasswool and rockwool are naturally non-combustible (Class 1 / Class A flame spread per BS 476 Part 7 / ASTM E84). Where PUF/PIR sandwich panels are used, fire-retardant polyisocyanurate (PIR) formulations that self-extinguish are strictly specified.'
        ]
      }
    ],
    keyTakeaways: [
      'Thermal insulation reduces internal radiant temperatures by 5°C to 10°C.',
      'Glasswool with reinforced aluminum foil is optimal for standard warehouses.',
      'High-density Rockwool provides supreme fire barrier and acoustic rain noise dampening.',
      'Sealed vapor barrier laps prevent condensation moisture from soaking insulation blankets.'
    ],
    relatedSlugs: ['industrial-ventilation-considerations', 'roof-and-wall-systems', 'peb-warehouse-basics', 'where-peb-used']
  }
];

import { COST_PLANNING_ARTICLES_DATA } from './knowledgeHubCostPlanning';
import { COMPARISONS_ARTICLES_DATA } from './knowledgeHubComparisons';
import { INDUSTRIAL_GUIDES_ARTICLES_DATA } from './knowledgeHubIndustrialGuides';
import { KNOWLEDGE_HUB_FAQS_DATA, KnowledgeHubFaqItem } from './knowledgeHubFaqs';

export {
  COST_PLANNING_ARTICLES_DATA,
  COMPARISONS_ARTICLES_DATA,
  INDUSTRIAL_GUIDES_ARTICLES_DATA,
  KNOWLEDGE_HUB_FAQS_DATA
};
export type { KnowledgeHubFaqItem };

export const ALL_KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  ...PEB_GUIDES_DATA,
  ...TECHNICAL_ARTICLES_DATA,
  ...COST_PLANNING_ARTICLES_DATA,
  ...COMPARISONS_ARTICLES_DATA,
  ...INDUSTRIAL_GUIDES_ARTICLES_DATA
];

export function getKnowledgeArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return ALL_KNOWLEDGE_ARTICLES.find(a => a.slug === slug);
}

export function getRelatedArticles(article: KnowledgeArticle): KnowledgeArticle[] {
  return article.relatedSlugs
    .map(s => ALL_KNOWLEDGE_ARTICLES.find(a => a.slug === s))
    .filter((a): a is KnowledgeArticle => Boolean(a));
}

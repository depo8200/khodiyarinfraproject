export interface KnowledgeHubFaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'planning' | 'construction' | 'applications' | 'technical';
  categoryLabel: string;
  relatedArticleSlug?: string;
  relatedArticleTitle?: string;
}

export const KNOWLEDGE_HUB_FAQS_DATA: KnowledgeHubFaqItem[] = [
  // 1. General PEB Questions
  {
    id: 'faq-gen-1',
    category: 'general',
    categoryLabel: 'General PEB Questions',
    question: 'What is a Pre-Engineered Building (PEB)?',
    answer: 'A Pre-Engineered Building (PEB) is an engineered steel building system where structural columns, rafters, and secondary cold-formed framing members are custom-designed and factory-fabricated off-site using computerized machinery. Components are cut, welded, shot-blasted, primed, and shipped to the jobsite as pre-punched, prefabricated parts assembled entirely with bolted connections on prepared concrete foundations.',
    relatedArticleSlug: 'what-is-peb',
    relatedArticleTitle: 'What Is a Pre-Engineered Building (PEB)?'
  },
  {
    id: 'faq-gen-2',
    category: 'general',
    categoryLabel: 'General PEB Questions',
    question: 'How does PEB technology differ from conventional civil or hot-rolled steel construction?',
    answer: 'Conventional construction uses uniform hot-rolled steel sections (such as standard ISMB beams) or cast-in-place concrete where members have uniform cross-sections along their full length. PEBs use tapered built-up plate members sized to match the actual internal bending moment diagram—thick and deep at high-stress haunches, slender at low-stress mid-spans. This structural optimization saves 20% to 35% in steel weight while enabling clear spans up to 60m+ and 30% to 50% faster commissioning.',
    relatedArticleSlug: 'peb-vs-conventional-steel',
    relatedArticleTitle: 'PEB vs. Conventional Structural Steel Buildings'
  },
  {
    id: 'faq-gen-3',
    category: 'general',
    categoryLabel: 'General PEB Questions',
    question: 'Where are PEB buildings primarily used in modern industry?',
    answer: 'PEBs are used across modern industry—including logistics warehouses, e-commerce fulfillment hubs, heavy engineering plants, automotive assembly factories, cold storage buildings, agricultural storage sheds, commercial showrooms, and aircraft hangars. Their flexibility, clear interior headroom, and rapid commissioning make them the dominant choice for single-story and multi-bay industrial spaces.',
    relatedArticleSlug: 'where-peb-used',
    relatedArticleTitle: 'Where Are Pre-Engineered Buildings Used?'
  },
  {
    id: 'faq-gen-4',
    category: 'general',
    categoryLabel: 'General PEB Questions',
    question: 'What are the main structural components of a pre-engineered building?',
    answer: 'A PEB comprises four interconnected systems: (1) Primary framing: built-up tapered steel columns and rafters forming rigid portal frames; (2) Secondary framing: cold-formed high-tensile galvanized Z and C purlins and girts; (3) Bracing systems: rod, angle, or pipe portal bracing that transfers wind and crane surge loads down to foundations; and (4) Envelope cladding: high-tensile Galvalume roof and wall sheeting with gutters, insulation, and flashings.',
    relatedArticleSlug: 'main-components-peb',
    relatedArticleTitle: 'The Main Components of a Pre-Engineered Building'
  },
  {
    id: 'faq-gen-5',
    category: 'general',
    categoryLabel: 'General PEB Questions',
    question: 'How does the end-to-end PEB construction process work?',
    answer: 'The process operates in synchronized phases: preliminary engineering layout and 3D modeling (STAAD.Pro), client drawing approval, parallel factory fabrication (CNC plasma cutting, SAW welding, shot blasting, primer coating) while the site civil team casts foundations and sets anchor bolts, followed by systematic bay-by-bay crane erection, purlin installation, torque-bolting, and envelope sheeting.',
    relatedArticleSlug: 'peb-construction-process',
    relatedArticleTitle: 'The Pre-Engineered Building Construction Process'
  },

  // 2. Planning Questions
  {
    id: 'faq-plan-1',
    category: 'planning',
    categoryLabel: 'Planning & Commercial Questions',
    question: 'What information is needed to start planning a PEB building project?',
    answer: 'To plan effectively, promoters must define: (1) building length, width (span), and required clear eave height; (2) internal operations and machinery layout; (3) material handling needs such as overhead traveling (EOT) crane capacity and hook height; (4) site location for regional wind and seismic load calculations (IS 875 & IS 1893); and (5) door, dock, and natural ventilation requirements.',
    relatedArticleSlug: 'how-to-plan-peb-project',
    relatedArticleTitle: 'How to Plan a PEB Building Project: Step-by-Step Guide'
  },
  {
    id: 'faq-plan-2',
    category: 'planning',
    categoryLabel: 'Planning & Commercial Questions',
    question: 'What details are required to obtain an accurate PEB quotation?',
    answer: 'Manufacturers require exact centerline or out-to-out dimensions, clear eave height, bay spacing preferences, crane technical data sheets (capacity, wheel loads, hook height), roofing and wall cladding specifications (Galvalume coating class AZ150, thickness, insulation), door opening schedule, and geographic project site location. Providing comprehensive data ensures bids are accurate without unexpected scope variances.',
    relatedArticleSlug: 'information-needed-peb-quotation',
    relatedArticleTitle: 'What Information Is Needed for an Accurate PEB Quotation?'
  },
  {
    id: 'faq-plan-3',
    category: 'planning',
    categoryLabel: 'Planning & Commercial Questions',
    question: 'How is the total cost of a PEB project determined?',
    answer: 'PEB cost is determined primarily by total structural steel consumption (tonnage per square meter), which depends on clear span width, clear height, bay spacing, crane capacity, and regional wind pressures (IS 875). Secondary factors include cladding profiles, thermal insulation (glasswool or PUF panels), doors, accessories, civil foundations, and transportation logistics. Fixed per-sq-ft rates without structural design are inaccurate.',
    relatedArticleSlug: 'peb-building-cost-factors',
    relatedArticleTitle: 'PEB Building Cost: What Factors Affect the Total Cost?'
  },
  {
    id: 'faq-plan-4',
    category: 'planning',
    categoryLabel: 'Planning & Commercial Questions',
    question: 'What site and geotechnical information is required prior to foundation design?',
    answer: 'A geotechnical soil investigation report is mandatory to determine the Safe Bearing Capacity (SBC) of the soil at various depths, groundwater table levels, and soil expansion characteristics. A topographical land contour survey is also required to establish natural ground level (NGL), finished floor level (FFL), site drainage slopes, and trailer access routes.',
    relatedArticleSlug: 'site-conditions-peb-planning',
    relatedArticleTitle: 'How Site Conditions Affect PEB Planning & Foundation Engineering'
  },
  {
    id: 'faq-plan-5',
    category: 'planning',
    categoryLabel: 'Planning & Commercial Questions',
    question: 'Can a PEB building be expanded easily in the future?',
    answer: 'Yes, provided expansion is planned during initial design. By engineering the gable end-wall as an expandable rigid frame (rather than a lightweight post-and-beam wall) and detailing crane runway beams with splice connection plates, the building can be extended longitudinally in future phases simply by unbolting end cladding, adding structural bays, and re-sheeting without halting plant operations.',
    relatedArticleSlug: 'industrial-expansion-planning-guide',
    relatedArticleTitle: 'Industrial Building Expansion Planning Guide'
  },

  // 3. Construction & Quality Questions
  {
    id: 'faq-const-1',
    category: 'construction',
    categoryLabel: 'Fabrication & Erection Questions',
    question: 'How is structural steel fabrication carried out for PEBs?',
    answer: 'Fabrication takes place in an automated manufacturing plant. High-tensile steel plates (IS 2062 Grade E250 / E350) are precision-profiled on CNC plasma cutting beds, fitted into I-sections, and welded along flange-to-web seams using automated Submerged Arc Welding (SAW). Members undergo full centrifugal shot blasting to SA 2.5 cleanliness before protective primer coating is applied in controlled conditions.',
    relatedArticleSlug: 'peb-manufacturing-fabrication',
    relatedArticleTitle: 'PEB Manufacturing & Structural Steel Fabrication'
  },
  {
    id: 'faq-const-2',
    category: 'construction',
    categoryLabel: 'Fabrication & Erection Questions',
    question: 'How is PEB on-site erection safely executed?',
    answer: 'Erection begins with survey verification of cast foundation pedestals and anchor bolt coordinates. Mobile telescopic cranes erect the primary columns and rafters of the designated "braced bay." This initial bay is fully plumbed, bolted, and cross-braced with cable or rod bracing to create a rigid, self-supporting 3D structure before adjacent frames and roof purlins are systematically erected.',
    relatedArticleSlug: 'peb-erection-installation',
    relatedArticleTitle: 'PEB Erection & Site Installation Guidelines'
  },
  {
    id: 'faq-const-3',
    category: 'construction',
    categoryLabel: 'Fabrication & Erection Questions',
    question: 'Why is factory fabrication superior to on-site steel fabrication?',
    answer: 'Factory fabrication provides automated CNC accuracy, twin-arc submerged arc welding (SAW) conforming to AWS D1.1, automated centrifugal shot blasting (SA 2.5) that removes 100% of mill scale, and strict laboratory testing. Site fabrication suffers from weather exposure, manual stick welding porosity, poor surface cleaning with hand wire brushes, and high jobsite safety risks.',
    relatedArticleSlug: 'factory-fabrication-vs-site-fabrication',
    relatedArticleTitle: 'Factory CNC Fabrication vs. On-Site Steel Fabrication'
  },
  {
    id: 'faq-const-4',
    category: 'construction',
    categoryLabel: 'Fabrication & Erection Questions',
    question: 'What quality control and non-destructive testing (NDT) checks are performed?',
    answer: 'Quality assurance encompasses: (1) Raw material verification against mill test certificates (MTCs); (2) Visual and dimensional checks for camber, sweep, and hole centers; (3) Non-destructive ultrasonic testing (UT) and magnetic particle testing (MPT) on critical tension flange welds; (4) Dry film thickness (DFT) paint testing; and (5) On-site calibrated torque wrench checks on all Grade 8.8/10.9 HSFG bolts.',
    relatedArticleSlug: 'peb-quality-control-inspection',
    relatedArticleTitle: 'PEB Quality Control, Welding Standards & Inspection'
  },
  {
    id: 'faq-const-5',
    category: 'construction',
    categoryLabel: 'Fabrication & Erection Questions',
    question: 'How does logistics and transportation of large PEB components work?',
    answer: 'Primary tapered rafters and columns (up to 12m to 14m in length) are planned around standard trailer dimensions and transported on 40-foot flatbed trucks. Secondary purlins and sheeting coils are nested in compact bundles. Components are tagged with distinct erection piece marks matching structural assembly drawings for rapid jobsite offloading and laydown sequencing.',
    relatedArticleSlug: 'peb-erection-installation',
    relatedArticleTitle: 'PEB Erection & Site Installation Guidelines'
  },

  // 4. Application & Facility Questions
  {
    id: 'faq-app-1',
    category: 'applications',
    categoryLabel: 'Facility Application Questions',
    question: 'Why are pre-engineered buildings ideal for logistics warehouses?',
    answer: 'Warehouses require high clear heights (10m to 14m) for vertical pallet racking and wide column-free floor spaces for forklift circulation. PEBs provide these high clearances cost-effectively, allow flexible interior column grid layouts aligned with rack aisles, incorporate cantilevered weather canopies over loading docks, and prevent monsoon roof leaks with continuous Galvalume roof profiles.',
    relatedArticleSlug: 'peb-warehouse-guide',
    relatedArticleTitle: 'PEB Warehouse Guide: Spans, Heights & Logistics Architecture'
  },
  {
    id: 'faq-app-2',
    category: 'applications',
    categoryLabel: 'Facility Application Questions',
    question: 'Can PEBs accommodate heavy industrial overhead traveling (EOT) cranes?',
    answer: 'Yes. PEBs are regularly designed for EOT cranes ranging from 3 tons to 50+ tons. Stepped built-up columns carry heavy crane runway gantry beams, and specialized surge trusses resist lateral braking and acceleration forces per IS 875 Part 2. Multiple cranes can operate in parallel bays with tandem lift engineering.',
    relatedArticleSlug: 'manufacturing-plant-guide',
    relatedArticleTitle: 'Manufacturing Plant Building Guide: Heavy Machinery & Cranes'
  },
  {
    id: 'faq-app-3',
    category: 'applications',
    categoryLabel: 'Facility Application Questions',
    question: 'Are PEB structures suitable for temperature-controlled cold storage facilities?',
    answer: 'Yes, PEBs are the global standard for modern cold storage construction. The external steel frame supports the outer weather envelope, while insulated PUF/PIR sandwich panels (100mm to 150mm thick) are suspended internally to form a continuous thermal box without steel thermal bridging, preventing condensation and lowering refrigeration energy consumption.',
    relatedArticleSlug: 'cold-storage-building-guide',
    relatedArticleTitle: 'Cold Storage Building Guide: Thermal Envelopes & Steel Framing'
  },
  {
    id: 'faq-app-4',
    category: 'applications',
    categoryLabel: 'Facility Application Questions',
    question: 'What are the main advantages of a PEB factory compared to conventional civil construction?',
    answer: 'A PEB factory offers clear unobstructed column grids for Lean production line layout, pre-calculated collateral load capacity for suspending heavy piping and electrical busbars, superior natural ventilation via ridge vents and daylight panels, fast 12 to 16-week commissioning, and straightforward longitudinal expansion flexibility.',
    relatedArticleSlug: 'factory-building-planning-guide',
    relatedArticleTitle: 'Factory Building Planning Guide: Process Flow, Heights & Loads'
  },
  {
    id: 'faq-app-5',
    category: 'applications',
    categoryLabel: 'Facility Application Questions',
    question: 'Can PEB structures be engineered for coastal or corrosive industrial environments?',
    answer: 'Yes. In corrosive or chemical atmospheres, structural steel is coated with high-performance epoxy zinc phosphate primers and aliphatic polyurethane (PU) topcoats, while building envelopes utilize specialized AZ150 or AZ200 Galvalume with PVDF fluoropolymer paint coatings designed to resist salt spray, acid washdown, and chemical vapors.',
    relatedArticleSlug: 'building-size-usage-peb-requirements',
    relatedArticleTitle: 'How Building Size and Usage Affect PEB Structural Requirements'
  },

  // 5. Technical Questions
  {
    id: 'faq-tech-1',
    category: 'technical',
    categoryLabel: 'Structural & Technical Questions',
    question: 'What are purlins and girts, and what role do they play in a PEB?',
    answer: 'Purlins are longitudinal secondary framing members spanning across primary rafters to support roof sheeting. Girts are horizontal members running between perimeter columns to support wall cladding. Typically cold-formed from high-tensile galvanized steel into Z or C profiles, purlins and girts transfer wind and gravity loads from envelope sheeting into primary frames while providing lateral restraint against member buckling.',
    relatedArticleSlug: 'purlins-and-girts',
    relatedArticleTitle: 'Purlins and Girts in PEB: Z vs. C Profiles & Engineering Design'
  },
  {
    id: 'faq-tech-2',
    category: 'technical',
    categoryLabel: 'Structural & Technical Questions',
    question: 'What is the difference between primary framing and secondary framing?',
    answer: 'Primary framing consists of the main load-bearing rigid portal frames (built-up tapered columns and rafters) that carry global gravity, crane, and lateral wind loads down to foundations. Secondary framing consists of cold-formed Z/C purlins, girts, eave struts, and door framing that support the envelope sheets and transfer local loads into primary frames.',
    relatedArticleSlug: 'primary-secondary-framing',
    relatedArticleTitle: 'Primary vs. Secondary Framing in PEB: Structural Systems & Mechanics'
  },
  {
    id: 'faq-tech-3',
    category: 'technical',
    categoryLabel: 'Structural & Technical Questions',
    question: 'Why are structural bracing systems essential in steel buildings?',
    answer: 'Bracing systems provide longitudinal structural stability and create continuous load paths to transfer wind suction, seismic forces, and longitudinal crane braking surge forces down to the ground. Common configurations include diagonal cross-rods with turnbuckles in roof and wall bays, rigid portal frames where access doors prevent diagonal rods, and eave struts connecting frames.',
    relatedArticleSlug: 'bracing-systems',
    relatedArticleTitle: 'Bracing Systems in Pre-Engineered Buildings: Types, Design & Load Paths'
  },
  {
    id: 'faq-tech-4',
    category: 'technical',
    categoryLabel: 'Structural & Technical Questions',
    question: 'What does "clear span" mean, and what clear spans are achievable in PEB?',
    answer: 'A clear span is the unobstructed horizontal distance between building perimeter columns without any intermediate interior supporting columns. In PEB construction, clear spans of 24m to 36m are standard and economical, while wide clear spans of 45m, 60m, or even larger can be custom-engineered using tapered rigid frames for aircraft hangars, sports complexes, or specialized manufacturing plants.',
    relatedArticleSlug: 'clear-span-structures',
    relatedArticleTitle: 'Clear Span Steel Structures: Engineering 30m to 60m+ Spans'
  },
  {
    id: 'faq-tech-5',
    category: 'technical',
    categoryLabel: 'Structural & Technical Questions',
    question: 'What is the role of insulation and ventilation in pre-engineered buildings?',
    answer: 'Single-skin metal roofs absorb solar radiation, elevating indoor temperatures. Installing 50mm glasswool insulation with aluminum foil vapor barriers beneath roof sheets lowers indoor radiant temperatures by 5°C to 10°C, reduces air conditioning loads, and prevents condensation drips. Continuous aerodynamic ridge ventilators evacuate hot rising air through natural stack effect, providing fresh air exchange.',
    relatedArticleSlug: 'insulation-considerations',
    relatedArticleTitle: 'Insulation Considerations for PEB Roof and Wall Systems'
  }
];

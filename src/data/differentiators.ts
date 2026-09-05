export interface Differentiator {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export const DIFFERENTIATORS_DATA: Differentiator[] = [
  {
    id: 'vertical-integration',
    number: '01',
    title: 'Absolute Vertical Integration',
    subtitle: 'Single-Source Accountability from Design to Erection',
    description: 'Traditional structural contracting forces clients to manage fragmented vendors: separate structural consultants, multiple fabrication yards, third-party logistics haulers, and local erection gangs. When site fitment errors or delays arise, each party blames the other.',
    details: [
      'Khodiyar Infraproject acts as your single point of contact throughout the entire project lifecycle',
      'No finger-pointing between drawing designers, fabrication yards, and erection teams',
      'Direct ownership of project milestones, quality standards, and delivery schedules',
      'Lower total cost of ownership through streamlined communication and zero middleman markups'
    ],
    iconName: 'Link'
  },
  {
    id: 'dfm-optimization',
    number: '02',
    title: 'Design-for-Manufacture (DFM) Optimization',
    subtitle: 'Optimizing Steel Tonnage While Ensuring Uncompromised Structural Strength',
    description: 'Our in-house design office works directly inside the fabrication ecosystem. We do not just design for theoretical structural safety—we design for efficient, high-precision manufacturability.',
    details: [
      'Optimizes steel plate sections and flange-to-web ratios, reducing unnecessary steel tonnage by 8% to 15%',
      'Custom tapered built-up frames match exact internal stress contours rather than wasteful uniform sections',
      'Clash-tested 3D connection detailing eliminates shopfloor cutting errors and site delays',
      'Full compliance with IS 800 (2007) and IS 875 wind and seismic parameters'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'jit-logistics',
    number: '03',
    title: 'Synchronized Just-in-Time Logistics',
    subtitle: 'Deliveries Coordinated Directly with Site Erection Sequences',
    description: 'At Khodiyar Infraproject, logistics is treated as an active phase of engineering. Dispatches are chronologically phased to match our site engineer\'s weekly lifting schedule.',
    details: [
      'Materials arrive strictly when the crane and erection crew are ready to install',
      'Drastically reduces job site congestion and storage issues in cramped industrial zones',
      'Minimizes paint coating scratches and structural member damage caused by double-handling',
      'Eliminates expensive mobile crane and labor idle time on site'
    ],
    iconName: 'Truck'
  },
  {
    id: 'structural-versatility',
    number: '04',
    title: 'Cross-Category Structural Versatility',
    subtitle: 'Engineering Across Lightweight Modular Pods to 75T Heavy Cranes',
    description: 'Our technical capability spans the entire structural spectrum. Whether your enterprise requires a rapid modular office or a 32-meter high heavy industrial process facility, we adapt seamlessly.',
    details: [
      'Lightweight modular structures, in-plant supervisory cabins, and electrical control rooms',
      'Standard clear-span PEB warehouses with eave heights from 8m to 18m+',
      'Heavy structural steel buildings with high-capacity EOT cranes (up to 75+ Tons)',
      'Specialized temperature-controlled cold storage facilities with zero thermal bridging'
    ],
    iconName: 'Layers'
  },
  {
    id: 'pre-erection-qc',
    number: '05',
    title: 'Proactive Pre-Erection Quality Control',
    subtitle: 'Trial Assemblies and NDT Verification Before Dispatch',
    description: 'Because our factory fabrication and field erection are tightly unified, critical structural splices and knee joints are trial-assembled at our facility prior to site shipment.',
    details: [
      '100% pre-checked bolt hole alignments ensure effortless site bolting without flame cutting',
      'Non-destructive testing (Ultrasonic & Dye Penetrant) on all critical moment-resisting welds',
      'Total station optical verification of camber, sweep, and dimensional squareness',
      'Guarantees smooth, surprise-free site installation under disciplined safety protocols'
    ],
    iconName: 'CheckCircle2'
  }
];

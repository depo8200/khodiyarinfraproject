import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  Calculator, 
  FileText, 
  Printer, 
  Copy, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Ruler, 
  Layers, 
  Wrench, 
  Sliders, 
  Check, 
  ChevronRight,
  Send,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface PebRequirementEstimatorPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const PebRequirementEstimatorPage: React.FC<PebRequirementEstimatorPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  // Dimension Unit
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet');

  // Project Information
  const [buildingPurpose, setBuildingPurpose] = useState<string>('Raw Material & Finished Goods Storage');
  const [projectLocation, setProjectLocation] = useState<string>('Halol / Vadodara, Gujarat');
  const [industrySector, setIndustrySector] = useState<string>('General Engineering & Manufacturing');
  const [projectType, setProjectType] = useState<string>('New Greenfield Construction');

  // Building Requirements & Dimensions
  const [length, setLength] = useState<string>('150');
  const [width, setWidth] = useState<string>('80');
  const [eaveHeight, setEaveHeight] = useState<string>('26');
  const [numberOfFloors, setNumberOfFloors] = useState<string>('Single Floor (Ground Only)');

  // Primary Usage
  const [primaryUsage, setPrimaryUsage] = useState<string>('Warehouse');

  // Functional Requirements (Multi-select / toggles)
  const [hasLargeDoors, setHasLargeDoors] = useState<boolean>(true);
  const [hasDockLevelers, setHasDockLevelers] = useState<boolean>(false);
  const [ventilationType, setVentilationType] = useState<string>('Ridge Ventilator + Turbo Vents');
  const [insulationType, setInsulationType] = useState<string>('50mm Glasswool / Rockwool Under-Deck');
  const [hasSkylights, setHasSkylights] = useState<boolean>(true);
  const [craneRequirement, setCraneRequirement] = useState<string>('None');
  const [mezzanineRequirement, setMezzanineRequirement] = useState<string>('None');
  const [provisionFutureExpansion, setProvisionFutureExpansion] = useState<string>('Longitudinal Gable End Expansion');

  // Timeline & Site Readiness
  const [projectTimeline, setProjectTimeline] = useState<string>('Within 3–6 Months');
  const [siteReadiness, setSiteReadiness] = useState<string>('Land Acquired & Leveling Underway');

  // Copy Feedback State
  const [copied, setCopied] = useState<boolean>(false);

  // Dimension Calculations
  const numLength = parseFloat(length) || 0;
  const numWidth = parseFloat(width) || 0;
  const numHeight = parseFloat(eaveHeight) || 0;

  const areaSqFt = useMemo(() => {
    if (numLength <= 0 || numWidth <= 0) return 0;
    return unit === 'feet' 
      ? numLength * numWidth 
      : (numLength * numWidth) * 10.7639;
  }, [numLength, numWidth, unit]);

  const areaSqM = useMemo(() => {
    if (numLength <= 0 || numWidth <= 0) return 0;
    return unit === 'meters' 
      ? numLength * numWidth 
      : (numLength * numWidth) / 10.7639;
  }, [numLength, numWidth, unit]);

  const heightM = useMemo(() => {
    if (numHeight <= 0) return 0;
    return unit === 'meters' ? numHeight : numHeight * 0.3048;
  }, [numHeight, unit]);

  // Validation Warnings
  const validationErrors = useMemo(() => {
    const errors: string[] = [];
    if (numLength <= 0) errors.push('Please specify a positive length.');
    if (numWidth <= 0) errors.push('Please specify a positive width.');
    if (numHeight <= 0) errors.push('Please specify a positive clear eave height.');
    if (numHeight > (unit === 'feet' ? 80 : 25)) {
      errors.push(`Clear height of ${numHeight} ${unit} is unusually high for single-story PEB sheds. Multi-tier framing or high-bay modeling will be necessary.`);
    }
    if (numWidth > (unit === 'feet' ? 200 : 60)) {
      errors.push(`Clear span of ${numWidth} ${unit} exceeds typical single clear span benchmarks (~45m/150ft). An internal column line (multi-span framing) is strongly recommended to optimize structural steel tonnage.`);
    }
    return errors;
  }, [numLength, numWidth, numHeight, unit]);

  // Dynamic Planning Considerations based on input
  const planningConsiderations = useMemo(() => {
    const list: string[] = [];

    // Span considerations
    const spanMeters = unit === 'meters' ? numWidth : numWidth * 0.3048;
    if (spanMeters > 30) {
      list.push(`Width of ${Math.round(spanMeters)}m is a large span. Evaluating multi-span framing with 1 or 2 interior portal columns will substantially reduce rafter depth and foundation sizes compared to a 100% unobstructed clear span.`);
    } else {
      list.push(`Width of ${Math.round(spanMeters)}m is well within clear-span standard range, allowing unobstructed interior floor area with zero internal columns.`);
    }

    // Crane considerations
    if (craneRequirement !== 'None' && craneRequirement !== 'Not decided yet') {
      list.push(`Selected crane capacity (${craneRequirement}) introduces heavy vertical wheel loads and lateral surge forces into main building columns. Stepped or bracketed columns will be required, and foundation design must resist overturning moments.`);
    }

    // Clear height considerations
    if (heightM >= 9) {
      list.push(`Clear height of ${heightM.toFixed(1)}m requires enhanced wind column design and side girt spacing verification under IS 875 (Part 3) high-velocity gust pressures.`);
    }

    // Mezzanine considerations
    if (mezzanineRequirement.includes('Office') || mezzanineRequirement.includes('Heavy Storage')) {
      list.push(`Mezzanine integration requires composite deck slab design, primary mezzanine beam load transfer to main PEB columns, and local staircase / fire egress planning.`);
    }

    // Insulation & Ventilation
    if (insulationType !== 'None / Single Skin Sheet') {
      list.push(`Thermal insulation (${insulationType}) improves internal ambient temperature by 4–7°C and reduces condensation dripping; requires wire mesh / PVC foil support during roof panel installation.`);
    }

    // Dock levelers
    if (hasDockLevelers) {
      list.push(`Dock levelers require coordinated civil pit excavation and plinth beam recesses during foundation pouring before structural steel arrives.`);
    }

    // Expansion
    if (provisionFutureExpansion !== 'None') {
      list.push(`Provision for future expansion requires designing expandable rigid gable end frames rather than non-expandable light cold-formed end posts.`);
    }

    return list;
  }, [unit, numWidth, craneRequirement, heightM, mezzanineRequirement, insulationType, hasDockLevelers, provisionFutureExpansion]);

  // Information Still Required
  const informationStillRequired = [
    'Geotechnical Soil Investigation Report: Safe Bearing Capacity (SBC in kN/m²) at 1.5m to 2.5m depth to design isolated column footings.',
    'Basic Wind Velocity Zone per IS 875 (Part 3): Gujarat coastal vs. central plateau wind parameters (39 m/s to 50 m/s).',
    'Preliminary Site Layout & Plot Boundary setbacks under local GIDC / municipal development control regulations.',
    'Crane Wheel Base & Hook Approach Data (from crane manufacturer, if crane is provisioned).',
    'Internal heavy machinery layout and concentrated point load locations.'
  ];

  // Reset form
  const handleReset = () => {
    if (window.confirm('Reset all values to default preliminary settings?')) {
      setUnit('feet');
      setBuildingPurpose('Raw Material & Finished Goods Storage');
      setProjectLocation('Halol / Vadodara, Gujarat');
      setIndustrySector('General Engineering & Manufacturing');
      setProjectType('New Greenfield Construction');
      setLength('150');
      setWidth('80');
      setEaveHeight('26');
      setNumberOfFloors('Single Floor (Ground Only)');
      setPrimaryUsage('Warehouse');
      setHasLargeDoors(true);
      setHasDockLevelers(false);
      setVentilationType('Ridge Ventilator + Turbo Vents');
      setInsulationType('50mm Glasswool / Rockwool Under-Deck');
      setHasSkylights(true);
      setCraneRequirement('None');
      setMezzanineRequirement('None');
      setProvisionFutureExpansion('Longitudinal Gable End Expansion');
      setProjectTimeline('Within 3–6 Months');
      setSiteReadiness('Land Acquired & Leveling Underway');
    }
  };

  // Generate plain text summary for export/copy
  const getSummaryText = () => {
    return `=====================================================
PRELIMINARY PEB REQUIREMENT SUMMARY
Generated via KHODIYAR INFRAPROJECT Planning Tool
=====================================================

1. PROJECT OVERVIEW
-----------------------------------------------------
Building Purpose: ${buildingPurpose}
Location: ${projectLocation}
Industry Sector: ${industrySector}
Project Classification: ${projectType}
Estimated Timeline: ${projectTimeline}
Site Readiness: ${siteReadiness}

2. BUILDING GEOMETRY & SPACE
-----------------------------------------------------
Primary Usage: ${primaryUsage}
Dimensions: ${length} ${unit} (Length) x ${width} ${unit} (Width)
Clear Eave Height: ${eaveHeight} ${unit} (~${heightM.toFixed(1)}m clear)
Approx. Footprint Area: ${Math.round(areaSqFt).toLocaleString()} Sq. Ft. (${Math.round(areaSqM).toLocaleString()} Sq. M.)
Number of Levels: ${numberOfFloors}

3. FUNCTIONAL & SPECIALIZED INFRASTRUCTURE
-----------------------------------------------------
Overhead Crane: ${craneRequirement}
Mezzanine Floor: ${mezzanineRequirement}
Insulation System: ${insulationType}
Ventilation System: ${ventilationType}
Natural Lighting: ${hasSkylights ? '5%–8% Polycarbonate Skylight Roof Panels' : 'None specified'}
Industrial Doors: ${hasLargeDoors ? 'Large Motorized Rolling / Sliding Doors Required' : 'Standard Access Only'}
Dock Levelers / Bays: ${hasDockLevelers ? 'Loading Docks with Pit Levelers Required' : 'Ground Level Loading Only'}
Future Expansion: ${provisionFutureExpansion}

4. KEY PLANNING & ENGINEERING CONSIDERATIONS
-----------------------------------------------------
${planningConsiderations.map((c, i) => `${i + 1}. ${c}`).join('\n')}

5. INFORMATION STILL REQUIRED FOR FINAL DESIGN
-----------------------------------------------------
${informationStillRequired.map((info, i) => `• ${info}`).join('\n')}

=====================================================
DISCLAIMER:
This tool provides a preliminary project overview based on the information entered. It does not replace project-specific structural engineering, architectural design, site assessment, or professional technical evaluation.
=====================================================
Company: KHODIYAR INFRAPROJECT
Office: Office No. A-68, Uma Society, Halol, Gujarat 389350
Phone: ${COMPANY_CONFIG.phoneDisplay}
Email: ${COMPANY_CONFIG.email}
Web: https://khodiyarinfraproject.in`;
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(getSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      alert('Could not copy to clipboard automatically. Please use the Print button.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Tools', route: 'resources/tools' },
          { label: 'PEB Requirement Estimator', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Intro */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            Preliminary Scope &amp; Requirement Estimator
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 text-xs font-medium rounded-lg transition-all cursor-pointer"
              title="Reset fields to defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => onOpenQuote('PEB Requirement Estimator Inquiry')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Discuss With Engineer</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Requirement &amp; Scope Estimator
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          Organize preliminary technical parameters for your proposed Pre-Engineered Building or industrial facility. Define dimensions, clear heights, crane capacities, and operational infrastructure to generate a structured project summary before vendor discussions.
        </p>

        {/* Clear Planning Disclaimer Notice */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-amber-900 leading-relaxed">
            <span className="font-bold uppercase tracking-wider font-mono text-amber-950 block">
              Preliminary Planning Disclaimer:
            </span>
            <p>
              This tool provides a preliminary project overview based on the information entered. It does not replace project-specific structural engineering, architectural design, site assessment, or professional technical evaluation. No final member sizing or guaranteed commercial quotations are provided.
            </p>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout: Inputs (Left 7) + Dynamic Live Summary (Right 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Form Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Project Identity & Location */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                01
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                Project Information &amp; Context
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Building Purpose / Primary Function
                </label>
                <select
                  value={buildingPurpose}
                  onChange={(e) => setBuildingPurpose(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="Raw Material & Finished Goods Storage">Raw Material &amp; Finished Goods Storage</option>
                  <option value="Manufacturing & Heavy Assembly">Manufacturing &amp; Heavy Assembly</option>
                  <option value="Logistics & 3PL Distribution Hub">Logistics &amp; 3PL Distribution Hub</option>
                  <option value="Cold Storage & Controlled Temperature">Cold Storage &amp; Controlled Temperature</option>
                  <option value="Engineering Fabrication Workshop">Engineering Fabrication Workshop</option>
                  <option value="Chemical / Agro Processing Plant">Chemical / Agro Processing Plant</option>
                  <option value="Packaging & Paper Products Unit">Packaging &amp; Paper Products Unit</option>
                  <option value="Other Industrial Application">Other Industrial Application</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Project Location / Industrial Zone
                </label>
                <input
                  type="text"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  placeholder="e.g. Halol GIDC, Vadodara, Savli, Dahej"
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Industry / Application Sector
                </label>
                <select
                  value={industrySector}
                  onChange={(e) => setIndustrySector(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="General Engineering & Manufacturing">General Engineering &amp; Manufacturing</option>
                  <option value="Automotive & Auto Ancillary">Automotive &amp; Auto Ancillary</option>
                  <option value="Chemical & Pharmaceuticals">Chemical &amp; Pharmaceuticals</option>
                  <option value="Plastics, Polymers & Packaging">Plastics, Polymers &amp; Packaging</option>
                  <option value="Food & Agro Processing">Food &amp; Agro Processing</option>
                  <option value="Textiles & Garments">Textiles &amp; Garments</option>
                  <option value="Logistics, Warehousing & Supply Chain">Logistics, Warehousing &amp; Supply Chain</option>
                  <option value="Other Industry">Other Industry</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Project Nature / Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'New Greenfield Construction',
                    'Brownfield Expansion',
                    'Shed Replacement',
                    'Not Decided Yet'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-2.5 py-2 rounded-lg text-xs font-medium text-center transition-colors border cursor-pointer ${
                        projectType === type
                          ? 'bg-sky-600 text-white border-sky-600 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Building Geometry & Dimensions */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                  02
                </span>
                <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                  Building Dimensions &amp; Geometry
                </h2>
              </div>

              {/* Unit Toggle */}
              <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setUnit('feet')}
                  className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                    unit === 'feet' ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Feet (ft)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('meters')}
                  className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                    unit === 'meters' ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Meters (m)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Approx. Length ({unit}) *
                </label>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder={unit === 'feet' ? 'e.g. 150' : 'e.g. 45'}
                />
                <span className="text-[11px] text-slate-400 block font-mono">
                  Longitudinal axis
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Approx. Width / Span ({unit}) *
                </label>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder={unit === 'feet' ? 'e.g. 80' : 'e.g. 24'}
                />
                <span className="text-[11px] text-slate-400 block font-mono">
                  Gable cross section
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Clear Eave Height ({unit}) *
                </label>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={eaveHeight}
                  onChange={(e) => setEaveHeight(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder={unit === 'feet' ? 'e.g. 26' : 'e.g. 8'}
                />
                <span className="text-[11px] text-slate-400 block font-mono">
                  Floor to rafter underside
                </span>
              </div>
            </div>

            {/* Area display bar */}
            <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-sky-600" />
                <span className="text-slate-600">Calculated Footprint Area:</span>
                <span className="font-bold text-slate-900 text-sm">
                  {Math.round(areaSqFt).toLocaleString()} Sq. Ft.
                </span>
                <span className="text-slate-400">({Math.round(areaSqM).toLocaleString()} Sq. M.)</span>
              </div>
              <div className="text-slate-500 text-[11px]">
                Clear Height Metric: ~{heightM.toFixed(1)}m clear
              </div>
            </div>

            {/* Validation Errors Box */}
            {validationErrors.length > 0 && (
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-rose-800">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  Dimensional Warnings:
                </div>
                <ul className="space-y-1 pl-5 list-disc text-xs text-rose-700">
                  {validationErrors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Number of Floors / Level Architecture
              </label>
              <select
                value={numberOfFloors}
                onChange={(e) => setNumberOfFloors(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="Single Floor (Ground Only)">Single Floor (Ground Only — Standard PEB Shed)</option>
                <option value="Ground + Partial Administrative Mezzanine">Ground + Partial Administrative Mezzanine</option>
                <option value="Ground + Heavy Storage Mezzanine">Ground + Heavy Storage Mezzanine</option>
                <option value="Multi-Level Industrial Structure (G+1/G+2)">Multi-Level Industrial Structure (G+1 / G+2)</option>
                <option value="Not Decided Yet">Not Decided Yet</option>
              </select>
            </div>
          </div>

          {/* Section 3: Usage Classification */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                03
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                Primary Facility Usage
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { title: 'Warehouse', desc: 'Storage & Racking' },
                { title: 'Factory', desc: 'Production Machinery' },
                { title: 'Workshop', desc: 'Fabrication & Repair' },
                { title: 'Industrial Shed', desc: 'Multi-Utility Cover' },
                { title: 'Manufacturing Plant', desc: 'Continuous Processing' },
                { title: 'Cold Storage', desc: 'Insulated Controlled' },
                { title: 'Distribution Center', desc: 'Cross-dock Logistics' },
                { title: 'Other Usage', desc: 'Specialized Sizing' }
              ].map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setPrimaryUsage(item.title)}
                  className={`p-3 rounded-lg text-left transition-all border cursor-pointer ${
                    primaryUsage === item.title
                      ? 'bg-sky-50 border-sky-500 ring-1 ring-sky-500'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900">{item.title}</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Functional Requirements & Infrastructure */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                04
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                Functional &amp; Operational Features
              </h2>
            </div>

            <div className="space-y-4">
              {/* Crane */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Overhead EOT Crane Requirement
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['None', '5 Ton', '10 Ton', '15 Ton', '20 Ton+', 'Not Decided Yet'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setCraneRequirement(opt)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-center transition-colors border cursor-pointer ${
                        craneRequirement === opt
                          ? 'bg-sky-600 text-white border-sky-600 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mezzanine */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Mezzanine Floor Integration
                </label>
                <select
                  value={mezzanineRequirement}
                  onChange={(e) => setMezzanineRequirement(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="None">None (Clear Ground Space Only)</option>
                  <option value="Partial Office Mezzanine (Light Live Load: 250-350 kg/m²)">Partial Office Mezzanine (Light Live Load: 250–350 kg/m²)</option>
                  <option value="Heavy Storage Mezzanine (Heavy Live Load: 500-1000 kg/m²)">Heavy Storage Mezzanine (Heavy Live Load: 500–1000 kg/m²)</option>
                  <option value="Full Floor Mezzanine">Full Floor Mezzanine</option>
                  <option value="Not decided yet">Not decided yet</option>
                </select>
              </div>

              {/* Insulation & Ventilation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Thermal Insulation Preference
                  </label>
                  <select
                    value={insulationType}
                    onChange={(e) => setInsulationType(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="50mm Glasswool / Rockwool Under-Deck">50mm Glasswool / Rockwool Under-Deck (Standard)</option>
                    <option value="100mm Heavy Rockwool Insulation">100mm Heavy Rockwool (High Thermal / Cold Chain)</option>
                    <option value="PUF / PIR Insulated Sandwich Panels">PUF / PIR Insulated Sandwich Panels (Premium)</option>
                    <option value="None / Single Skin Sheet">None / Single Bare Sheet (Economical Uninsulated)</option>
                    <option value="Not decided yet">Not decided yet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Roof Ventilation System
                  </label>
                  <select
                    value={ventilationType}
                    onChange={(e) => setVentilationType(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Ridge Ventilator + Turbo Vents">Continuous Ridge Ventilator + Turbo Vents (Optimal)</option>
                    <option value="Continuous Ridge Monitor Only">Continuous Ridge Monitor Only (Natural Gravity Draft)</option>
                    <option value="Roof Turbo Vents Only">Roof Turbo Vents Only</option>
                    <option value="Forced Mechanical Exhaust / Louvers">Forced Mechanical Exhaust / Louvers</option>
                    <option value="Not decided yet">Not decided yet</option>
                  </select>
                </div>
              </div>

              {/* Checkbox Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={hasLargeDoors}
                    onChange={(e) => setHasLargeDoors(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                  />
                  <span className="text-xs font-medium text-slate-800">
                    Large Motorized Rolling Doors
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={hasDockLevelers}
                    onChange={(e) => setHasDockLevelers(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                  />
                  <span className="text-xs font-medium text-slate-800">
                    Loading Bays &amp; Pit Dock Levelers
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={hasSkylights}
                    onChange={(e) => setHasSkylights(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                  />
                  <span className="text-xs font-medium text-slate-800">
                    Polycarbonate Skylights (5–8%)
                  </span>
                </label>
              </div>

              {/* Future Expansion */}
              <div className="space-y-1.5 pt-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Provision for Future Expansion
                </label>
                <select
                  value={provisionFutureExpansion}
                  onChange={(e) => setProvisionFutureExpansion(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="Longitudinal Gable End Expansion">Longitudinal Gable End Expansion (Expandable Rigid Frame at Endwall)</option>
                  <option value="Lateral Side Expansion (Additional Bay)">Lateral Side Expansion (Future Additional Bay or Lean-To)</option>
                  <option value="Both Longitudinal & Lateral">Both Longitudinal &amp; Lateral Expansion Provisions</option>
                  <option value="None / Standalone Final Building">None (Standalone Final Building)</option>
                  <option value="Not decided yet">Not decided yet</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Timeline & Readiness */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                05
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                Project Schedule &amp; Site Readiness
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Target Construction Timeline
                </label>
                <select
                  value={projectTimeline}
                  onChange={(e) => setProjectTimeline(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="Immediate (1–2 Months)">Immediate (Groundbreaking in 1–2 Months)</option>
                  <option value="Within 3–6 Months">Within 3–6 Months</option>
                  <option value="Planning Phase (6+ Months)">Planning Phase (6+ Months Ahead)</option>
                  <option value="Preliminary Budgetary Stage">Preliminary Budgetary Stage / Not Decided</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Current Site Status
                </label>
                <select
                  value={siteReadiness}
                  onChange={(e) => setSiteReadiness(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="Land Acquired & Leveling Underway">Land Acquired &amp; Leveling Underway</option>
                  <option value="Land Acquired (Raw / Unleveled)">Land Acquired (Raw / Unleveled)</option>
                  <option value="Civil Plinth / Foundations Underway">Civil Plinth / Foundations Underway</option>
                  <option value="Land In Acquisition / Finalizing Plot">Land In Acquisition / Finalizing Plot</option>
                  <option value="Not Decided Yet">Not Decided Yet</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preliminary Project Summary Column (5 Cols) */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-6 lg:sticky lg:top-28 shadow-sm">
            {/* Summary Header */}
            <div className="border-b border-slate-200 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase font-bold text-sky-700 tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Preliminary Project Summary
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Dynamic Draft
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                {primaryUsage} Scope Overview
              </h3>
              <p className="text-xs text-slate-500">
                Generated live based on your entered parameters for review.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Est. Footprint Area</span>
                <div className="text-base font-black text-slate-900">
                  {Math.round(areaSqFt).toLocaleString()} <span className="text-xs font-normal">Sq.Ft.</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  ~{Math.round(areaSqM).toLocaleString()} Sq.M.
                </div>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Clear Height</span>
                <div className="text-base font-black text-slate-900">
                  {numHeight} <span className="text-xs font-normal">{unit}</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  ~{heightM.toFixed(1)}m clear
                </div>
              </div>
            </div>

            {/* Structured Project Profile Data */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Location:</span>
                <span className="font-semibold text-slate-900 text-right">{projectLocation || 'Not specified'}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Industry:</span>
                <span className="font-semibold text-slate-900 text-right">{industrySector}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Type:</span>
                <span className="font-semibold text-slate-900 text-right">{projectType}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Dimensions:</span>
                <span className="font-semibold text-slate-900 text-right">
                  {numLength} x {numWidth} {unit}
                </span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Crane Provision:</span>
                <span className={`font-semibold text-right ${craneRequirement !== 'None' ? 'text-sky-700 font-bold' : 'text-slate-900'}`}>
                  {craneRequirement}
                </span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Mezzanine:</span>
                <span className="font-semibold text-slate-900 text-right">{mezzanineRequirement}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Insulation:</span>
                <span className="font-semibold text-slate-900 text-right">{insulationType}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Ventilation:</span>
                <span className="font-semibold text-slate-900 text-right">{ventilationType}</span>
              </div>
            </div>

            {/* Assessment Status Box */}
            <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-lg flex items-start gap-2.5">
              <Info className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-sky-900 leading-snug">
                <span className="font-bold block">Status Assessment:</span>
                Your project may require further technical assessment to establish site-specific anchor bolt reactions and wind speed load cases.
              </div>
            </div>

            {/* Key Planning Considerations Derived from Inputs */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-700 tracking-wider block">
                Preliminary Planning Considerations:
              </span>
              <ul className="space-y-2">
                {planningConsiderations.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary Actions: Copy / Print / Quote */}
            <div className="space-y-2.5 pt-2 border-t border-slate-200 print:hidden">
              <button
                onClick={handleCopySummary}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:border-sky-400 text-slate-700 hover:text-sky-700 font-semibold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Summary Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Summary to Clipboard</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onOpenQuote('PEB Requirement Estimator Inquiry')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss Your Project With Us</span>
              </button>
            </div>

            {/* Contextual Links */}
            <div className="pt-3 border-t border-slate-200 text-xs space-y-1.5 print:hidden">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                Related Resources &amp; Estimators:
              </span>
              <button
                onClick={() => onNavigate('resources/free-resources/peb-requirement-checklist')}
                className="w-full text-left py-1 text-slate-600 hover:text-sky-600 flex items-center justify-between group"
              >
                <span>20-Category PEB Requirement Checklist</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
              </button>
              <button
                onClick={() => onNavigate('resources/tools/structural-estimator')}
                className="w-full text-left py-1 text-slate-600 hover:text-sky-600 flex items-center justify-between group"
              >
                <span>Structural Steel Tonnage Estimator</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
              </button>
              <button
                onClick={() => onNavigate('resources/free-resources/peb-buyer-guide')}
                className="w-full text-left py-1 text-slate-600 hover:text-sky-600 flex items-center justify-between group"
              >
                <span>PEB Buyer &amp; Technical Decision Guide</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Information Still Required Section */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            Engineering Design Completeness
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Information Still Required for Final Structural Engineering
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            While this estimator structures your operational requirements, converting them into certified fabrication drawings (IS 800:2007) requires the following site and statutory data:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {informationStillRequired.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 font-mono text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            Ready to Validate These Parameters with an In-House Engineer?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our engineering team in Halol and Vadodara can evaluate your preliminary building profile against IS 800:2007 standards and provide an itemized Bill of Quantities (BOQ).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpenQuote('PEB Requirement Estimator Project Review')}
            className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
          >
            Request Engineering Review
          </button>
        </div>
      </section>
    </div>
  );
};

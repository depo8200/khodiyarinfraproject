import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  Compass, 
  Printer, 
  Copy, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Building, 
  Ruler, 
  Layers, 
  Wrench, 
  Check, 
  ChevronRight,
  Send,
  Calendar,
  FileCheck,
  MapPin,
  Truck,
  HardHat,
  HelpCircle
} from 'lucide-react';

interface ProjectPlanningToolPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ProjectPlanningToolPage: React.FC<ProjectPlanningToolPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  // Current active step (1 to 12)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Form State for 12 Steps
  // Step 1: Project Purpose
  const [projectPurpose, setProjectPurpose] = useState<string>('Industrial Manufacturing & Warehouse');
  const [projectPriority, setProjectPriority] = useState<string>('Rapid Delivery & Fast Commissioning');

  // Step 2: Project Location
  const [locationCity, setLocationCity] = useState<string>('Halol / Vadodara, Gujarat');
  const [zoneType, setZoneType] = useState<string>('GIDC Industrial Estate (Developed Zone)');
  const [soilKnown, setSoilKnown] = useState<string>('Soil investigation yet to be performed');

  // Step 3: Building Configuration
  const [frameType, setFrameType] = useState<string>('Clear Span (Single Portal Frame)');
  const [roofSlope, setRoofSlope] = useState<string>('1:10 Standard PEB Slope');

  // Step 4: Approximate Dimensions
  const [dimUnit, setDimUnit] = useState<'feet' | 'meters'>('feet');
  const [approxLength, setApproxLength] = useState<string>('160');
  const [approxWidth, setApproxWidth] = useState<string>('80');
  const [approxHeight, setApproxHeight] = useState<string>('28');
  const [baySpacing, setBaySpacing] = useState<string>('7.5 meters / 25 feet (Standard)');

  // Step 5: Usage & Operational Requirements
  const [floorLoadType, setFloorLoadType] = useState<string>('Heavy Machinery & Forklift Traffic (4–6 MT/m²)');
  const [workingShifts, setWorkingShifts] = useState<string>('2–3 Continuous Production Shifts');

  // Step 6: Special Requirements
  const [craneNeed, setCraneNeed] = useState<string>('10 Ton Overhead Traveling Crane');
  const [mezzanineNeed, setMezzanineNeed] = useState<string>('Partial Admin Office Mezzanine (~15–20% Area)');
  const [claddingPreference, setCladdingPreference] = useState<string>('Color Coated Galvalume with 50mm Underdeck Glasswool');

  // Step 7: Site & Logistics Access
  const [trailerAccess, setTrailerAccess] = useState<string>('Clear Access for 40ft Multi-Axle Trailers');
  const [overheadObstacles, setOverheadObstacles] = useState<string>('No Overhead HT Power Lines');
  const [siteTopography, setSiteTopography] = useState<string>('Leveled Plot (Civil Plinth Under Preparation)');

  // Step 8: Future Expansion
  const [expansionPlan, setExpansionPlan] = useState<string>('Planned Longitudinal Extension in Phase 2');

  // Step 9: Available Documents
  const [hasPlotSurvey, setHasPlotSurvey] = useState<boolean>(true);
  const [hasSoilReport, setHasSoilReport] = useState<boolean>(false);
  const [hasArchitecturalDrawings, setHasArchitecturalDrawings] = useState<boolean>(true);
  const [hasEquipmentLayout, setHasEquipmentLayout] = useState<boolean>(false);

  // Step 10: Quotation Preparation
  const [quoteReadiness, setQuoteReadiness] = useState<string>('Ready for Preliminary Technical & Budgetary Estimate');

  // Step 11: Technical Discussion Topics
  const [keyQuestions, setKeyQuestions] = useState<string>(
    'Confirm anchor bolt placement schedule for civil contractor, crane gantry bracket elevation, and erection crane staging space.'
  );

  // Step 12: Next Steps
  const [targetGroundbreaking, setTargetGroundbreaking] = useState<string>('Within 60–90 Days');

  // Calculation helpers
  const numLen = parseFloat(approxLength) || 0;
  const numWid = parseFloat(approxWidth) || 0;
  const totalArea = dimUnit === 'feet' 
    ? Math.round(numLen * numWid) 
    : Math.round((numLen * numWid) * 10.7639);

  // Steps definition
  const stepTitles = [
    { num: 1, label: 'Project Purpose', icon: Building },
    { num: 2, label: 'Location & Site', icon: MapPin },
    { num: 3, label: 'Frame Configuration', icon: Layers },
    { num: 4, label: 'Dimensions & Spans', icon: Ruler },
    { num: 5, label: 'Usage & Loads', icon: HardHat },
    { num: 6, label: 'Special Infrastructure', icon: Wrench },
    { num: 7, label: 'Site Logistics', icon: Truck },
    { num: 8, label: 'Future Expansion', icon: ArrowRight },
    { num: 9, label: 'Document Readiness', icon: FileCheck },
    { num: 10, label: 'Quotation Status', icon: Calendar },
    { num: 11, label: 'Technical Discussion', icon: HelpCircle },
    { num: 12, label: 'Next Steps & Summary', icon: CheckCircle2 }
  ];

  const handleReset = () => {
    if (window.confirm('Reset project planning tool to default entries?')) {
      setCurrentStep(1);
      setProjectPurpose('Industrial Manufacturing & Warehouse');
      setProjectPriority('Rapid Delivery & Fast Commissioning');
      setLocationCity('Halol / Vadodara, Gujarat');
      setZoneType('GIDC Industrial Estate (Developed Zone)');
      setSoilKnown('Soil investigation yet to be performed');
      setFrameType('Clear Span (Single Portal Frame)');
      setRoofSlope('1:10 Standard PEB Slope');
      setDimUnit('feet');
      setApproxLength('160');
      setApproxWidth('80');
      setApproxHeight('28');
      setBaySpacing('7.5 meters / 25 feet (Standard)');
      setFloorLoadType('Heavy Machinery & Forklift Traffic (4–6 MT/m²)');
      setWorkingShifts('2–3 Continuous Production Shifts');
      setCraneNeed('10 Ton Overhead Traveling Crane');
      setMezzanineNeed('Partial Admin Office Mezzanine (~15–20% Area)');
      setCladdingPreference('Color Coated Galvalume with 50mm Underdeck Glasswool');
      setTrailerAccess('Clear Access for 40ft Multi-Axle Trailers');
      setOverheadObstacles('No Overhead HT Power Lines');
      setSiteTopography('Leveled Plot (Civil Plinth Under Preparation)');
      setExpansionPlan('Planned Longitudinal Extension in Phase 2');
      setHasPlotSurvey(true);
      setHasSoilReport(false);
      setHasArchitecturalDrawings(true);
      setHasEquipmentLayout(false);
      setQuoteReadiness('Ready for Preliminary Technical & Budgetary Estimate');
      setKeyQuestions('Confirm anchor bolt placement schedule for civil contractor, crane gantry bracket elevation, and erection crane staging space.');
      setTargetGroundbreaking('Within 60–90 Days');
    }
  };

  const getFullPlanSummaryText = () => {
    return `=====================================================
PEB PROJECT PLANNING & EXECUTION SUMMARY
Generated via KHODIYAR INFRAPROJECT Planning Tool
=====================================================

1. PROJECT OVERVIEW
-----------------------------------------------------
• Primary Purpose: ${projectPurpose}
• Core Strategic Priority: ${projectPriority}
• Target Commissioning / Groundbreaking: ${targetGroundbreaking}

2. SITE & ENVIRONMENTAL CONTEXT
-----------------------------------------------------
• Location: ${locationCity}
• Industrial Zone Classification: ${zoneType}
• Geotechnical / Soil Status: ${soilKnown}
• Site Topography: ${siteTopography}
• Heavy Logistics Access: ${trailerAccess}
• Overhead Obstacles: ${overheadObstacles}

3. BUILDING REQUIREMENTS & GEOMETRY
-----------------------------------------------------
• Structural Framing: ${frameType}
• Roof Slope: ${roofSlope}
• Dimensions: ${approxLength} ${dimUnit} (L) x ${approxWidth} ${dimUnit} (W) x ${approxHeight} ${dimUnit} (H)
• Approximate Footprint: ${totalArea.toLocaleString()} Sq. Ft.
• Longitudinal Bay Spacing: ${baySpacing}

4. OPERATIONAL & FUNCTIONAL PROFILE
-----------------------------------------------------
• Floor Load Category: ${floorLoadType}
• Operational Shifts: ${workingShifts}
• Cladding & Thermal Envelope: ${claddingPreference}

5. SPECIAL & CRANE REQUIREMENTS
-----------------------------------------------------
• Overhead Crane Requirement: ${craneNeed}
• Mezzanine Floor Requirement: ${mezzanineNeed}
• Future Expansion Planning: ${expansionPlan}

6. DOCUMENT & READINESS AUDIT
-----------------------------------------------------
• Plot Boundary & Topo Survey: ${hasPlotSurvey ? 'Available' : 'Pending / Not Done'}
• Geotechnical Soil Report: ${hasSoilReport ? 'Available' : 'Pending / Required for Footing Design'}
• Architectural Concept Layout: ${hasArchitecturalDrawings ? 'Available' : 'Pending'}
• Machinery / Process Layout: ${hasEquipmentLayout ? 'Available' : 'Pending'}

7. QUOTATION & TECHNICAL DISCUSSION ROADMAP
-----------------------------------------------------
• Readiness Stage: ${quoteReadiness}
• Key Engineering Coordination Points:
  ${keyQuestions}

=====================================================
DISCLAIMER:
This planning tool organizes project parameters to facilitate preliminary engineering discussions. It does not constitute a certified structural project management plan or civil engineering approval.
=====================================================
Company: KHODIYAR INFRAPROJECT
Office: Office No. A-68, Uma Society, Halol, Gujarat 389350
Phone: ${COMPANY_CONFIG.phoneDisplay}
Email: ${COMPANY_CONFIG.email}
Web: https://khodiyarinfraproject.in`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullPlanSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      alert('Could not copy to clipboard. Please use the Print option.');
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
          { label: 'Project Planning Tool', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header & Hero */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            12-Step Project Organization &amp; Roadmap Tool
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 text-xs font-medium rounded-lg transition-all cursor-pointer"
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
              onClick={() => onOpenQuote('Project Planning Consultation')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Discuss Planning</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Project Planning &amp; Roadmap Tool
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          A systematic 12-step framework to guide industrial owners, promoters, and site managers from initial concept to vendor negotiations. Organize framing requirements, site logistics, crane clearances, and document readiness in one coherent plan.
        </p>

        {/* Informational Disclaimer */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-0.5">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Planning Tool Scope:
            </span>
            <p>
              This tool provides a structured checklist and planning overview based on your inputs. It is designed to prepare you for technical coordination with structural fabricators and civil contractors. It does not replace certified structural engineering calculations under IS 800:2007.
            </p>
          </div>
        </div>
      </header>

      {/* 12-Step Horizontal Navigation Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 print:hidden overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {stepTitles.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.num;
            const isCompleted = currentStep > step.num;

            return (
              <button
                key={step.num}
                onClick={() => setCurrentStep(step.num)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold shadow-xs'
                    : isCompleted
                    ? 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-100'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  isActive ? 'bg-white text-sky-600' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step.num}
                </span>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Work Area: Form Step (Left 7) + Summary Drawer (Right 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Container (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            {/* Step Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {currentStep < 10 ? `0${currentStep}` : currentStep}
                </span>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-sky-700 tracking-wider">
                    Step {currentStep} of 12
                  </span>
                  <h2 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                    {stepTitles[currentStep - 1].label}
                  </h2>
                </div>
              </div>

              <span className="text-xs font-mono text-slate-400">
                {Math.round((currentStep / 12) * 100)}% Complete
              </span>
            </div>

            {/* STEP 1: Project Purpose */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Primary Building Purpose &amp; Operational Objective
                  </label>
                  <select
                    value={projectPurpose}
                    onChange={(e) => setProjectPurpose(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Industrial Manufacturing & Heavy Assembly">Industrial Manufacturing &amp; Heavy Assembly</option>
                    <option value="Raw Materials & Finished Goods Warehouse">Raw Materials &amp; Finished Goods Warehouse</option>
                    <option value="Logistics Hub & 3PL Distribution Center">Logistics Hub &amp; 3PL Distribution Center</option>
                    <option value="Cold Storage & Reefer Distribution">Cold Storage &amp; Reefer Distribution</option>
                    <option value="Automotive Component Manufacturing">Automotive Component Manufacturing</option>
                    <option value="Chemical / Agro Processing Plant">Chemical / Agro Processing Plant</option>
                    <option value="General Industrial Covered Shed">General Industrial Covered Shed</option>
                    <option value="Other Operational Facility">Other Operational Facility</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Key Project Priority
                  </label>
                  <select
                    value={projectPriority}
                    onChange={(e) => setProjectPriority(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Rapid Delivery & Fast Commissioning">Rapid Delivery &amp; Fast Commissioning (Speed Priority)</option>
                    <option value="Structural Steel Optimization (Capital Budget Priority)">Structural Steel Optimization (Capital Budget Priority)</option>
                    <option value="Unobstructed Clear Span for Flexible Layouts">Unobstructed Clear Span for Flexible Layouts (Functional Priority)</option>
                    <option value="High Load Capacity & Heavy Crane Duty">High Load Capacity &amp; Heavy Crane Duty (Performance Priority)</option>
                    <option value="Not Decided Yet">Not Decided Yet</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2: Project Location */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Project Location / City / District
                  </label>
                  <input
                    type="text"
                    value={locationCity}
                    onChange={(e) => setLocationCity(e.target.value)}
                    placeholder="e.g. Halol GIDC, Vadodara, Savli, Sanand"
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Industrial Zone Classification
                  </label>
                  <select
                    value={zoneType}
                    onChange={(e) => setZoneType(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="GIDC Industrial Estate (Developed Zone)">GIDC Industrial Estate (Developed Zone)</option>
                    <option value="Private Industrial Park / SEZ">Private Industrial Park / SEZ</option>
                    <option value="Non-Agricultural (NA) Private Land">Non-Agricultural (NA) Private Land</option>
                    <option value="Rural / Greenfield Unzoned">Rural / Greenfield Unzoned</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Geotechnical / Soil Knowledge
                  </label>
                  <select
                    value={soilKnown}
                    onChange={(e) => setSoilKnown(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Soil investigation report available with verified SBC">Soil investigation report available with verified SBC</option>
                    <option value="Soil investigation yet to be performed (Assumed standard 150-180 kN/m²)">Soil investigation yet to be performed (Assumed standard 150–180 kN/m²)</option>
                    <option value="Black cotton soil / Low bearing capacity (May need pile foundation)">Black cotton soil / Low bearing capacity (May need pile foundation)</option>
                    <option value="Hard rock / High bearing strata">Hard rock / High bearing strata</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: Building Configuration */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Structural Frame Type
                  </label>
                  <select
                    value={frameType}
                    onChange={(e) => setFrameType(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Clear Span (Single Portal Frame with zero interior columns)">Clear Span (Single Portal Frame with zero interior columns)</option>
                    <option value="Multi-Span (1 Interior Center Column Line)">Multi-Span (1 Interior Center Column Line — Economical for spans &gt; 30m)</option>
                    <option value="Multi-Span (2 or more Interior Column Lines)">Multi-Span (2 or more Interior Column Lines for large warehouses)</option>
                    <option value="Multi-Gable Connected Sheds">Multi-Gable Connected Sheds</option>
                    <option value="Lean-To Side Annex">Lean-To Side Annex</option>
                    <option value="Not Decided Yet">Not Decided Yet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Roof Slope Ratio
                  </label>
                  <select
                    value={roofSlope}
                    onChange={(e) => setRoofSlope(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="1:10 Standard PEB Slope">1:10 (Standard PEB Slope — Optimal drainage & steel economy)</option>
                    <option value="1:12 Low Profile Slope">1:12 (Low Profile Slope)</option>
                    <option value="1:5 Steep Slope">1:5 (Steep Slope — High rainfall or specialized drainage)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 4: Dimensions & Spans */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Measurement Unit:</span>
                  <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setDimUnit('feet')}
                      className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                        dimUnit === 'feet' ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Feet (ft)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDimUnit('meters')}
                      className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                        dimUnit === 'meters' ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Meters (m)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">Length ({dimUnit})</label>
                    <input
                      type="number"
                      value={approxLength}
                      onChange={(e) => setApproxLength(e.target.value)}
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">Width / Span ({dimUnit})</label>
                    <input
                      type="number"
                      value={approxWidth}
                      onChange={(e) => setApproxWidth(e.target.value)}
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">Clear Height ({dimUnit})</label>
                    <input
                      type="number"
                      value={approxHeight}
                      onChange={(e) => setApproxHeight(e.target.value)}
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Longitudinal Bay Spacing
                  </label>
                  <select
                    value={baySpacing}
                    onChange={(e) => setBaySpacing(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="7.5 meters / 25 feet (Standard)">7.5 meters / ~25 feet (Optimal steel economy & purlin spans)</option>
                    <option value="6.0 meters / 20 feet">6.0 meters / ~20 feet (Heavier floor loads or crane brackets)</option>
                    <option value="8.0 - 9.0 meters / 30 feet">8.0 – 9.0 meters (Wider bays for large equipment access)</option>
                    <option value="Not Decided Yet">Not Decided Yet (Let structural engineer optimize)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 5: Usage & Operational Loads */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Flooring Load Capacity Requirements
                  </label>
                  <select
                    value={floorLoadType}
                    onChange={(e) => setFloorLoadType(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Standard Storage & Light Assembly (2–3 MT/m²)">Standard Storage &amp; Light Assembly (2–3 MT/m²)</option>
                    <option value="Heavy Machinery & Forklift Traffic (4–6 MT/m²)">Heavy Machinery &amp; Forklift Traffic (4–6 MT/m²)</option>
                    <option value="Very Heavy Dynamic Press / Die Storage (8–10+ MT/m²)">Very Heavy Dynamic Press / Die Storage (8–10+ MT/m²)</option>
                    <option value="High-Bay Pallet Racking (Point loads up to 8–10 MT per base plate)">High-Bay Pallet Racking (Point loads up to 8–10 MT per base plate)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Production Shifts &amp; Thermal Requirements
                  </label>
                  <select
                    value={workingShifts}
                    onChange={(e) => setWorkingShifts(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="2–3 Continuous Production Shifts (Requires adequate natural light & ventilation)">2–3 Continuous Production Shifts (Requires high thermal comfort &amp; ventilation)</option>
                    <option value="Single General Shift (Daylight only)">Single General Shift (Daylight only)</option>
                    <option value="Passive Storage / Unmanned Warehouse">Passive Storage / Unmanned Warehouse</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 6: Special Infrastructure */}
            {currentStep === 6 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Overhead EOT Crane Provision
                  </label>
                  <select
                    value={craneNeed}
                    onChange={(e) => setCraneNeed(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="None">None (No overhead crane required)</option>
                    <option value="5 Ton Overhead Traveling Crane">5 Ton Overhead Traveling Crane</option>
                    <option value="10 Ton Overhead Traveling Crane">10 Ton Overhead Traveling Crane</option>
                    <option value="15-20 Ton Heavy Duty Crane">15–20 Ton Heavy Duty Crane</option>
                    <option value="Crane Brackets Only (Future Provision)">Crane Brackets Only (For future crane installation)</option>
                    <option value="Not Decided Yet">Not Decided Yet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Mezzanine Floor Integration
                  </label>
                  <select
                    value={mezzanineNeed}
                    onChange={(e) => setMezzanineNeed(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="None">None (Single level ground floor only)</option>
                    <option value="Partial Admin Office Mezzanine (~15–20% Area)">Partial Admin Office Mezzanine (~15–20% Area)</option>
                    <option value="Heavy Storage / Process Mezzanine (High live load)">Heavy Storage / Process Mezzanine (High live load)</option>
                    <option value="Full Floor Mezzanine">Full Floor Mezzanine</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Roof &amp; Wall Cladding System
                  </label>
                  <select
                    value={claddingPreference}
                    onChange={(e) => setCladdingPreference(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Color Coated Galvalume with 50mm Underdeck Glasswool">Color Coated Galvalume with 50mm Underdeck Glasswool (Recommended)</option>
                    <option value="Insulated Sandwich Panels (PUF / Rockwool)">Insulated Sandwich Panels (PUF / Rockwool for cold chain/pharma)</option>
                    <option value="Single Skin Bare Galvalume (Uninsulated budget roof)">Single Skin Bare Galvalume (Uninsulated budget roof)</option>
                    <option value="Bare Galvalume Roof + Brickwork up to 3m with Sheeting above">Bare Galvalume Roof + Brickwork up to 3m with Sheeting above</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 7: Site Logistics & Access */}
            {currentStep === 7 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Trailer &amp; Heavy Transport Access
                  </label>
                  <select
                    value={trailerAccess}
                    onChange={(e) => setTrailerAccess(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Clear Access for 40ft Multi-Axle Trailers">Clear Access for 40ft Multi-Axle Trailers (Direct highway/arterial road)</option>
                    <option value="Access for 20-30ft Medium Commercial Vehicles Only">Access for 20–30ft Medium Commercial Vehicles Only</option>
                    <option value="Narrow Access Road / Restricted Turning Radius">Narrow Access Road / Restricted Turning Radius (Requires short piece delivery)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Overhead &amp; Surrounding Obstacles
                  </label>
                  <select
                    value={overheadObstacles}
                    onChange={(e) => setOverheadObstacles(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="No Overhead HT Power Lines">No Overhead HT Power Lines (Safe crane boom swing zone)</option>
                    <option value="Overhead Power Line Near Boundary (Requires statutory clearance setback)">Overhead Power Line Near Boundary (Requires statutory clearance setback)</option>
                    <option value="Adjacent Operational Factory Wall (Restricted erection swing)">Adjacent Operational Factory Wall (Restricted erection swing)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Site Topography &amp; Levelling
                  </label>
                  <select
                    value={siteTopography}
                    onChange={(e) => setSiteTopography(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Leveled Plot (Civil Plinth Under Preparation)">Leveled Plot (Civil Plinth Under Preparation)</option>
                    <option value="Flat Land (Leveling required before foundation)">Flat Land (Leveling required before foundation)</option>
                    <option value="Sloping / Uneven Terrain (May require stepped foundation)">Sloping / Uneven Terrain (May require stepped foundation)</option>
                    <option value="Waterlogged / High Water Table Area">Waterlogged / High Water Table Area (Needs dewatering during civil works)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 8: Future Expansion */}
            {currentStep === 8 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Future Expansion Provision
                  </label>
                  <select
                    value={expansionPlan}
                    onChange={(e) => setExpansionPlan(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Planned Longitudinal Extension in Phase 2">Planned Longitudinal Extension in Phase 2 (Requires expandable endwall frame)</option>
                    <option value="Planned Lateral Side Bay Extension">Planned Lateral Side Bay Extension (Side column connection brackets)</option>
                    <option value="Standalone Structure (No future expansion required)">Standalone Structure (No future expansion required)</option>
                    <option value="Not Decided Yet">Not Decided Yet</option>
                  </select>
                </div>

                <div className="p-4 bg-sky-50 border border-sky-200 rounded-lg text-xs text-sky-900 leading-relaxed">
                  <span className="font-bold block mb-1">Engineering Note on Expandability:</span>
                  Specifying future longitudinal expansion at design time allows the structural engineer to design an <strong>Expandable Rigid Frame</strong> at the gable end. If not specified, standard economical cold-formed endwall posts are fabricated, which cannot support a future extension without structural replacement.
                </div>
              </div>
            )}

            {/* STEP 9: Documents & Information Available */}
            {currentStep === 9 && (
              <div className="space-y-4">
                <span className="block text-xs font-semibold text-slate-700">
                  Select which technical documents or reports you currently possess:
                </span>

                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPlotSurvey}
                      onChange={(e) => setHasPlotSurvey(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Plot Boundary &amp; Topographical Survey</div>
                      <div className="text-[11px] text-slate-500">Defines exact plot dimensions, road frontage, and legal setbacks.</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasSoilReport}
                      onChange={(e) => setHasSoilReport(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Geotechnical Soil Investigation Report</div>
                      <div className="text-[11px] text-slate-500">Essential for determining Safe Bearing Capacity (SBC) and footing depths.</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasArchitecturalDrawings}
                      onChange={(e) => setHasArchitecturalDrawings(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Architectural Concept / GA Layout Plan</div>
                      <div className="text-[11px] text-slate-500">Shows doors, windows, internal rooms, and dock leveler positions.</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasEquipmentLayout}
                      onChange={(e) => setHasEquipmentLayout(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Machinery &amp; Equipment Footprint Plan</div>
                      <div className="text-[11px] text-slate-500">Identifies concentrated heavy loads, trenches, and foundation pits.</div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* STEP 10: Quotation Preparation Status */}
            {currentStep === 10 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Current Commercial / Quotation Stage
                  </label>
                  <select
                    value={quoteReadiness}
                    onChange={(e) => setQuoteReadiness(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Ready for Preliminary Technical & Budgetary Estimate">Ready for Preliminary Technical &amp; Budgetary Estimate</option>
                    <option value="Final Tender Stage with Approved Drawings">Final Tender Stage with Approved Drawings (Ready for Firm Commercial BOQ)</option>
                    <option value="Early Feasibility & Project Viability Planning">Early Feasibility &amp; Project Viability Planning (3-6 months away)</option>
                    <option value="Evaluating PEB vs RCC Cost-Benefit">Evaluating PEB vs. RCC Cost-Benefit</option>
                  </select>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block font-mono uppercase">
                    Procurement Advice:
                  </span>
                  <p>
                    Avoid comparing PEB quotes solely on per-square-foot rates. Compare the detailed itemized steel tonnage, steel plate grades (IS 2062 E250 / E350), paint DFT thickness, and anchor bolt supply scope.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 11: Technical Discussion Topics */}
            {currentStep === 11 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Key Technical Questions / Points to Discuss with Fabricator
                  </label>
                  <textarea
                    rows={4}
                    value={keyQuestions}
                    onChange={(e) => setKeyQuestions(e.target.value)}
                    placeholder="Enter specific points (e.g. crane delivery date, anchor bolt template supply timeline, foundation reaction data)..."
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                  <span className="text-[11px] text-slate-400 font-mono">
                    Feel free to customize these notes; they will be included in your exported plan.
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-600 block">
                    Recommended Questions for Fabricators:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>Are base plates and anchor bolts dispatched ahead of primary framing to allow civil casting?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>Are primary rafters submerged arc welded (SAW) with factory mill test certificates (MTRs)?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>What crane capacity is assumed for on-site erection, and who provides site crane mobilization?</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* STEP 12: Next Steps & Roadmap */}
            {currentStep === 12 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Target Groundbreaking Timeline
                  </label>
                  <select
                    value={targetGroundbreaking}
                    onChange={(e) => setTargetGroundbreaking(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Within 30 Days (Immediate civil plinth work)">Within 30 Days (Immediate civil plinth work)</option>
                    <option value="Within 60–90 Days">Within 60–90 Days</option>
                    <option value="Within 3–6 Months">Within 3–6 Months</option>
                    <option value="Next Financial Year">Next Financial Year</option>
                  </select>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-4 space-y-2 text-xs text-emerald-950">
                  <div className="flex items-center gap-2 font-bold uppercase font-mono text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Planning Roadmap Complete!
                  </div>
                  <p className="leading-relaxed">
                    You have structured all 12 key project parameters. Review the comprehensive summary on the right, copy or print your plan, and share it with your structural engineer or Khodiyar Infraproject.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons: Previous / Next */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 print:hidden">
              <button
                type="button"
                disabled={currentStep === 1}
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  currentStep === 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:text-sky-700 bg-slate-100 hover:bg-slate-200 cursor-pointer'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <div className="text-xs font-mono text-slate-400">
                Step {currentStep} of 12
              </div>

              {currentStep < 12 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => Math.min(12, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenQuote('12-Step Project Plan Submission')}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <span>Submit Plan for BOQ</span>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Live Project Plan Summary (5 Cols) */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 lg:sticky lg:top-28 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-[11px] font-mono uppercase font-bold text-sky-700 tracking-wider flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5" />
                Compiled Planning Summary
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                12 Dimensions
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-1 text-xs">
              <div className="flex justify-between items-center text-slate-500 font-mono text-[11px]">
                <span>Building Footprint</span>
                <span>Clear Height</span>
              </div>
              <div className="flex justify-between items-center font-bold text-slate-900">
                <span className="text-sm font-black">{totalArea.toLocaleString()} Sq. Ft.</span>
                <span>{approxHeight} {dimUnit} clear</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono pt-0.5">
                {approxLength} x {approxWidth} {dimUnit} ({frameType.split('(')[0].trim()})
              </div>
            </div>

            {/* Structured Summary Blocks */}
            <div className="space-y-3 text-xs max-h-[46vh] overflow-y-auto pr-1">
              {/* Overview */}
              <div className="p-3 bg-white border border-slate-200/80 rounded-lg space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400">1. Project Overview</span>
                <div className="font-semibold text-slate-900">{projectPurpose}</div>
                <div className="text-slate-500 text-[11px]">Priority: {projectPriority}</div>
              </div>

              {/* Site */}
              <div className="p-3 bg-white border border-slate-200/80 rounded-lg space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400">2. Site &amp; Logistics</span>
                <div className="font-semibold text-slate-900">{locationCity} ({zoneType})</div>
                <div className="text-slate-500 text-[11px]">Access: {trailerAccess}</div>
              </div>

              {/* Functional & Special */}
              <div className="p-3 bg-white border border-slate-200/80 rounded-lg space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400">3. Infrastructure &amp; Cranes</span>
                <div className="text-slate-700">Crane: <strong className="text-slate-900">{craneNeed}</strong></div>
                <div className="text-slate-700">Mezzanine: <strong className="text-slate-900">{mezzanineNeed}</strong></div>
                <div className="text-slate-700">Expansion: <strong className="text-slate-900">{expansionPlan}</strong></div>
              </div>

              {/* Document Status */}
              <div className="p-3 bg-white border border-slate-200/80 rounded-lg space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400">4. Documents Available</span>
                <div className="text-[11px] text-slate-600 flex flex-wrap gap-1.5 pt-0.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${hasPlotSurvey ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-400'}`}>
                    {hasPlotSurvey ? '✓ Plot Survey' : '✗ No Survey'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${hasSoilReport ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                    {hasSoilReport ? '✓ Soil Report' : '⚠ Soil Needed'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${hasArchitecturalDrawings ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-400'}`}>
                    {hasArchitecturalDrawings ? '✓ Arch Drawing' : '✗ No Drawings'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-slate-200 print:hidden">
              <button
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:border-sky-400 text-slate-700 hover:text-sky-700 font-semibold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Plan Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Full Planning Text</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onOpenQuote('Project Planning Review Request')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss Plan With Khodiyar Infra</span>
              </button>
            </div>

            {/* Contextual Links */}
            <div className="pt-2 border-t border-slate-200 text-xs space-y-1.5 print:hidden">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                Related Free Resources:
              </span>
              <button
                onClick={() => onNavigate('resources/free-resources/planning-guide')}
                className="w-full text-left py-1 text-slate-600 hover:text-sky-600 flex items-center justify-between group"
              >
                <span>15-Step PEB Planning Guide</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
              </button>
              <button
                onClick={() => onNavigate('resources/free-resources/project-checklist')}
                className="w-full text-left py-1 text-slate-600 hover:text-sky-600 flex items-center justify-between group"
              >
                <span>Interactive Site Execution Checklist</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
              </button>
              <button
                onClick={() => onNavigate('resources/tools/peb-requirement-estimator')}
                className="w-full text-left py-1 text-slate-600 hover:text-sky-600 flex items-center justify-between group"
              >
                <span>PEB Requirement Estimator</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Engineering Assistance Note */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            Ready for Coordinated Civil &amp; Steel Engineering?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Khodiyar Infraproject coordinates anchor bolt delivery, pedestal reactions, and transport dispatch directly with your project architect and civil team to prevent costly site delays.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpenQuote('Project Planning Tool Submission')}
            className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
          >
            Request Project Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

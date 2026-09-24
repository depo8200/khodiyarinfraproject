import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Check, Phone, Layers, Shield } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface StructuralEstimatorProps {
  onOpenQuoteModal?: (prefill: string) => void;
}

export const StructuralEstimator: React.FC<StructuralEstimatorProps> = ({ onOpenQuoteModal }) => {
  const [unit, setUnit] = useState<'meters' | 'feet'>('feet');
  const [buildingType, setBuildingType] = useState('PEB Warehouse');
  const [length, setLength] = useState<number>(150);
  const [width, setWidth] = useState<number>(80);
  const [eaveHeight, setEaveHeight] = useState<number>(28);
  const [craneCapacity, setCraneCapacity] = useState('None');
  const [insulation, setInsulation] = useState('Rockwool 50mm');

  const buildingTypeId = useId();
  const craneCapacityId = useId();
  const insulationId = useId();
  const lengthId = useId();
  const widthId = useId();
  const eaveHeightId = useId();

  // Controlled unit conversion handler to preserve proportional dimensions
  const handleUnitChange = (newUnit: 'meters' | 'feet') => {
    if (newUnit === unit) return;
    if (newUnit === 'meters') {
      setLength(prev => Math.min(150, Math.max(12, Math.round(prev * 0.3048))));
      setWidth(prev => Math.min(75, Math.max(10, Math.round(prev * 0.3048))));
      setEaveHeight(prev => Math.min(18, Math.max(4, Math.round(prev * 0.3048))));
    } else {
      setLength(prev => Math.min(500, Math.max(40, Math.round(prev / 0.3048))));
      setWidth(prev => Math.min(250, Math.max(30, Math.round(prev / 0.3048))));
      setEaveHeight(prev => Math.min(60, Math.max(14, Math.round(prev / 0.3048))));
    }
    setUnit(newUnit);
  };

  // Safe sanitized dimensions (prevents negative, NaN, or non-finite inputs)
  const safeLength = Math.max(0, Number.isFinite(length) ? length : 0);
  const safeWidth = Math.max(0, Number.isFinite(width) ? width : 0);
  const safeEaveHeight = Math.max(0, Number.isFinite(eaveHeight) ? eaveHeight : 0);

  // Calculations
  const areaSqFt = unit === 'feet' ? safeLength * safeWidth : (safeLength * safeWidth) * 10.76391;
  const areaSqM = unit === 'meters' ? safeLength * safeWidth : (safeLength * safeWidth) / 10.76391;
  const heightM = unit === 'meters' ? safeEaveHeight : safeEaveHeight * 0.3048;

  // Approximate kg/sq.m based on building type and crane
  let baseKgPerSqM = 32;
  if (buildingType === 'Factory Shed') baseKgPerSqM = 38;
  if (buildingType === 'Cold Storage') baseKgPerSqM = 44;
  if (buildingType === 'Heavy Industrial') baseKgPerSqM = 62;
  if (buildingType === 'Modular Structure') baseKgPerSqM = 28;

  if (craneCapacity === '5 Ton') baseKgPerSqM += 7;
  if (craneCapacity === '10 Ton') baseKgPerSqM += 12;
  if (craneCapacity === '20 Ton+') baseKgPerSqM += 20;

  const estimatedTonnageLow = Math.max(0, Math.round((areaSqM * baseKgPerSqM * 0.92) / 1000));
  const estimatedTonnageHigh = Math.max(0, Math.round((areaSqM * baseKgPerSqM * 1.08) / 1000));
  const clearVolumeM3 = Math.max(0, Math.round(areaSqM * heightM));

  const handleSendEstimateToWhatsApp = () => {
    const text = `*Structural Estimate Request — KHODIYAR INFRAPROJECT*
Building Type: ${buildingType}
Dimensions: ${length} x ${width} ${unit} (Approx. ${Math.round(areaSqFt).toLocaleString()} Sq. Ft.)
Eave Height: ${eaveHeight} ${unit} (${Math.round(heightM)}m clear)
Crane Required: ${craneCapacity}
Thermal Insulation: ${insulation}
Estimated Tonnage Range: ${estimatedTonnageLow} – ${estimatedTonnageHigh} MT

Please provide a detailed BOQ and structural budget proposal.`;

    const waUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white border border-sky-200 p-6 md:p-10 shadow-xl rounded-xl relative overflow-hidden">
      {/* Background technical accent */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <Layers className="w-80 h-80 text-sky-600" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase tracking-widest font-bold rounded">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Structural Planner
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Estimate Structural Steel Tonnage
            </h3>
            <p className="text-slate-600 text-xs md:text-sm">
              Calculate approximate preliminary steel tonnage for your proposed industrial facility based on IS structural parameters.
            </p>
          </div>

          {/* Unit Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 border border-slate-200 w-fit rounded-lg">
            <span className="text-xs font-mono text-slate-500 px-2 uppercase font-semibold">Units:</span>
            <button
              type="button"
              onClick={() => handleUnitChange('feet')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all rounded-md cursor-pointer ${
                unit === 'feet' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Feet (Ft)
            </button>
            <button
              type="button"
              onClick={() => handleUnitChange('meters')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all rounded-md cursor-pointer ${
                unit === 'meters' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Meters (M)
            </button>
          </div>

          {/* Configuration Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor={buildingTypeId} className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1.5">Building Type</label>
              <select
                id={buildingTypeId}
                value={buildingType}
                onChange={(e) => setBuildingType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-none rounded-lg cursor-pointer"
              >
                <option value="PEB Warehouse">PEB Warehouse</option>
                <option value="Factory Shed">Factory Shed</option>
                <option value="Cold Storage">Cold Storage Facility</option>
                <option value="Heavy Industrial">Heavy Industrial Plant</option>
                <option value="Modular Structure">Modular Structure</option>
              </select>
            </div>

            <div>
              <label htmlFor={craneCapacityId} className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1.5">EOT Crane Load</label>
              <select
                id={craneCapacityId}
                value={craneCapacity}
                onChange={(e) => setCraneCapacity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-none rounded-lg cursor-pointer"
              >
                <option value="None">None (Standard Roof)</option>
                <option value="5 Ton">5 Ton Crane Runway</option>
                <option value="10 Ton">10 Ton Crane Runway</option>
                <option value="20 Ton+">20 Ton+ Heavy Crane</option>
              </select>
            </div>

            <div>
              <label htmlFor={insulationId} className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1.5">Thermal Envelope</label>
              <select
                id={insulationId}
                value={insulation}
                onChange={(e) => setInsulation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-sky-500 focus:bg-white focus:outline-none rounded-lg cursor-pointer"
              >
                <option value="Single Sheet (Non-insulated)">Uninsulated Sheeting</option>
                <option value="Rockwool 50mm">50mm Rockwool Insulation</option>
                <option value="PUF Sandwich Panel 80mm">80mm PUF Sandwich Panel</option>
                <option value="PUF Sandwich Panel 120mm (Cold Store)">120mm PUF (Cold Store)</option>
              </select>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label htmlFor={lengthId} className="text-slate-700 uppercase font-bold">Length ({unit}):</label>
                <span className="text-sky-600 font-bold">{length} {unit}</span>
              </div>
              <input
                id={lengthId}
                type="range"
                min={unit === 'feet' ? 40 : 12}
                max={unit === 'feet' ? 500 : 150}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label htmlFor={widthId} className="text-slate-700 uppercase font-bold">Clear Span Width ({unit}):</label>
                <span className="text-sky-600 font-bold">{width} {unit}</span>
              </div>
              <input
                id={widthId}
                type="range"
                min={unit === 'feet' ? 30 : 10}
                max={unit === 'feet' ? 250 : 75}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <label htmlFor={eaveHeightId} className="text-slate-700 uppercase font-bold">Clear Eave Height ({unit}):</label>
                <span className="text-sky-600 font-bold">{eaveHeight} {unit}</span>
              </div>
              <input
                id={eaveHeightId}
                type="range"
                min={unit === 'feet' ? 14 : 4}
                max={unit === 'feet' ? 60 : 18}
                value={eaveHeight}
                onChange={(e) => setEaveHeight(Number(e.target.value))}
                className="w-full accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Results Card (5 Cols) */}
        <div className="lg:col-span-5 bg-sky-50/70 border border-sky-200 p-6 shadow-md rounded-xl space-y-5">
          <div className="border-b border-sky-200 pb-4">
            <span className="text-xs font-mono uppercase text-sky-700 font-bold tracking-widest">
              Preliminary Structural Output
            </span>
            <div className="text-3xl font-black text-slate-900 mt-1 font-sans">
              {estimatedTonnageLow} – {estimatedTonnageHigh} <span className="text-sky-600 text-xl font-normal">MT</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 font-mono">
              Estimated Metric Tons of Fabricated Steel
            </p>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 font-mono">
            <div className="flex justify-between py-1 border-b border-sky-100">
              <span className="text-slate-500">Total Covered Area:</span>
              <span className="font-bold text-slate-900">{Math.round(areaSqFt).toLocaleString()} Sq. Ft. ({Math.round(areaSqM).toLocaleString()} m²)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-sky-100">
              <span className="text-slate-500">Clear Volume:</span>
              <span className="font-bold text-slate-900">{clearVolumeM3.toLocaleString()} m³</span>
            </div>
            <div className="flex justify-between py-1 border-b border-sky-100">
              <span className="text-slate-500">Structural System:</span>
              <span className="font-bold text-sky-700">Tapered PEB Portal Frame</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Erection Duration:</span>
              <span className="font-bold text-emerald-600">~3 to 6 Weeks</span>
            </div>
          </div>

          {/* Mandatory Engineering Disclaimer Safeguard */}
          <div className="bg-amber-50 border border-amber-200/90 rounded-lg p-3 text-amber-900 flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px] font-sans">
              <strong>Notice:</strong> Results are preliminary estimates for planning purposes only. Actual steel quantities, structural requirements and costs depend on engineering design, site conditions, applicable standards and project specifications. Final values must be verified by a qualified structural engineer.
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <button
              type="button"
              onClick={handleSendEstimateToWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md rounded-lg cursor-pointer"
            >
              Send Estimate to WhatsApp (+91 9099818956)
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 rounded-lg shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              Discuss with Structural Engineer Now
            </a>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-500 border-t border-sky-200 pt-3">
            <Shield className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
            <span>Estimates generated for Indian wind & seismic zones; detailed shop drawing audit required.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

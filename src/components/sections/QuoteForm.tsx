import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../../data/company';
import { Send, CheckCircle, AlertCircle, Phone, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';
import { QuoteFormData } from '../../types';

interface QuoteFormProps {
  initialProjectType?: string;
  className?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  initialProjectType = '', 
  className = '',
  onSuccess
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    city: '',
    projectType: initialProjectType || 'PEB Industrial Warehouse',
    approximateSize: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const projectTypeOptions = [
    'PEB Industrial Warehouse',
    'Manufacturing Plant / Factory Shed',
    'Cold Storage Steel Structure',
    'Heavy Industrial Structure',
    'Modular Building / Office Pod',
    'Turnkey Steel Erection',
    'In-House Structural Design & Detailing',
    'Factory Steel Fabrication',
    'Other Custom Structural Requirement'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g. +91 9876543210)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Business Name is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City / Location is required';
    }
    if (!formData.approximateSize.trim()) {
      newErrors.approximateSize = 'Approximate Size is required (e.g., 25,000 Sq. Ft. or 150 Tons)';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief project specifications or requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message cleanly per specification
    const textLines = [
      `*New Website Enquiry — KHODIYAR INFRAPROJECT*`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phoneNumber}`,
      `*Email:* ${formData.email}`,
      `*Company:* ${formData.companyName}`,
      `*City:* ${formData.city}`,
      `*Project Type:* ${formData.projectType}`,
      `*Approximate Project Size:* ${formData.approximateSize}`,
      `*Project Requirements:*`,
      `${formData.message}`,
      ``,
      `_Sent via Khodiyar Infraproject Official Website Enquiry Form_`
    ];

    const encodedText = encodeURIComponent(textLines.join('\n'));
    const waUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodedText}`;
    setWhatsappLink(waUrl);

    // Simulate verified form validation & dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto-trigger WhatsApp in a new window/tab
      try {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback handled by button in success state
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className={`bg-white border border-sky-200 p-6 md:p-8 shadow-xl rounded-xl relative overflow-hidden ${className}`}>
      {/* Decorative Blueprint Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-industrial-dots pointer-events-none" />

      {isSubmitted ? (
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 bg-sky-50 border border-sky-300 text-sky-600 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Enquiry Transmitted Successfully!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Your project parameters have been formatted for our engineering team at <span className="text-sky-600 font-semibold">{COMPANY_CONFIG.name}</span>.
            </p>
          </div>

          <div className="bg-sky-50/70 border border-sky-200 p-4 max-w-lg mx-auto text-left text-xs text-slate-700 space-y-1 font-mono rounded-lg">
            <div className="text-sky-700 font-bold mb-2 uppercase tracking-wider">WhatsApp Submission Summary:</div>
            <div>• <span className="text-slate-500">Client:</span> {formData.fullName} ({formData.companyName})</div>
            <div>• <span className="text-slate-500">Project Type:</span> {formData.projectType}</div>
            <div>• <span className="text-slate-500">Location:</span> {formData.city}</div>
            <div>• <span className="text-slate-500">Scope/Size:</span> {formData.approximateSize}</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold uppercase tracking-wider text-xs transition-colors rounded-lg shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Open WhatsApp Directly
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase tracking-wider text-xs transition-colors shadow-md rounded-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Now ({COMPANY_CONFIG.phoneDisplay})
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-slate-500 hover:text-sky-600 uppercase tracking-wider font-mono mt-4 underline cursor-pointer"
          >
            Submit another enquiry or edit requirements
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-sky-100 pb-4 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase tracking-widest font-bold mb-2 rounded">
              <ShieldCheck className="w-3.5 h-3.5" />
              Direct WhatsApp Dispatch • Vadodara HQ
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Request a Technical Project Quotation
            </h3>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              Submit your structural dimensions or architectural brief. Dispatches instantly to our technical team at <strong className="text-slate-800">{COMPANY_CONFIG.phoneDisplay}</strong>.
            </p>
          </div>

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                1. Full Name <span className="text-sky-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Patel"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                  errors.fullName ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
                } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors rounded-lg`}
              />
              {errors.fullName && <p className="text-rose-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                2. Phone Number <span className="text-sky-600">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                  errors.phoneNumber ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
                } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors rounded-lg`}
              />
              {errors.phoneNumber && <p className="text-rose-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phoneNumber}</p>}
            </div>
          </div>

          {/* Row 2: Email & Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                3. Email Address <span className="text-sky-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                  errors.email ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
                } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors rounded-lg`}
              />
              {errors.email && <p className="text-rose-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                4. Company Name <span className="text-sky-600">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Apex Engineering Ltd."
                className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                  errors.companyName ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
                } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors rounded-lg`}
              />
              {errors.companyName && <p className="text-rose-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.companyName}</p>}
            </div>
          </div>

          {/* Row 3: City & Project Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                5. City / Site Location <span className="text-sky-600">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Vadodara, Halol, Dahej, Ahmedabad"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                  errors.city ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
                } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors rounded-lg`}
              />
              {errors.city && <p className="text-rose-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.city}</p>}
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                6. Project Type <span className="text-sky-600">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors rounded-lg cursor-pointer"
              >
                {projectTypeOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Approximate Size */}
          <div>
            <label htmlFor="approximateSize" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
              7. Approximate Project Size / Tonnage <span className="text-sky-600">*</span>
            </label>
            <input
              type="text"
              id="approximateSize"
              name="approximateSize"
              value={formData.approximateSize}
              onChange={handleChange}
              placeholder="e.g. 35,000 Sq. Ft. (40m x 80m x 9m clear height) or 180 Tons"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                errors.approximateSize ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
              } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors rounded-lg`}
            />
            {errors.approximateSize && <p className="text-rose-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.approximateSize}</p>}
          </div>

          {/* Row 5: Message / Requirements */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
              8. Message / Specific Project Requirements <span className="text-sky-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide details such as clear span needs, eave height, crane capacity (e.g. 10T EOT), thermal insulation needs, or expected handover date..."
              className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                errors.message ? 'border-rose-500' : 'border-slate-200 focus:border-sky-500'
              } text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none transition-colors resize-y rounded-lg`}
            />
            {errors.message && <p className="text-rose-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-sky-600 hover:bg-sky-700 text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed rounded-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Formatting Enquiry for WhatsApp...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Enquiry to WhatsApp (+91 9099818956)
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2.5 font-mono">
              Instant response guaranteed • Direct connection with senior structural engineers
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

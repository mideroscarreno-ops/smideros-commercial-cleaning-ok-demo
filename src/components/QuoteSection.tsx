import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Edit3,
  Info,
  Mail,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { COMPANY_INFO, INDUSTRIES } from '../data/siteData';

export interface QuotePrefill {
  businessType?: string;
  cityOrZip?: string;
  serviceNeeded?: string;
}

interface QuoteSectionProps {
  prefill?: QuotePrefill;
}

type QuoteMode = 'quick' | 'detailed';

const DETAILED_SERVICES = [
  'General Cleaning',
  'Disinfection',
  'Day Porter Services',
  'Floor Restoration',
  'Specialty Floor Care',
  'Construction Cleanup',
  'Not Sure Yet',
] as const;

const FLOORING_OPTIONS = [
  'Marble',
  'Ceramic',
  'Terrazzo',
  'Vinyl',
  'Hardwood',
  'Commercial Carpet',
  'Sealed Concrete',
];

const FREQUENCIES = [
  'Daily',
  'Weekly',
  'Monthly',
  'One-Time / Post-Construction',
  'Not Sure Yet',
];

const STEP_LABELS = [
  '1. Facility',
  '2. Services',
  '3. Requirements',
  '4. Contact',
  '5. Review',
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

export function QuoteSection({ prefill }: QuoteSectionProps) {
  const [mode, setMode] = useState<QuoteMode>('quick');

  // Option A — Quick Commercial Inquiry state
  const [quickForm, setQuickForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    cityOrZip: prefill?.cityOrZip || '',
    serviceNeeded: prefill?.serviceNeeded || 'General Commercial Cleaning',
    message: '',
  });
  const [quickErrors, setQuickErrors] = useState<Record<string, string>>({});
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  // Option B — Detailed Facility Quote state
  const [step, setStep] = useState(1);
  const [detailedForm, setDetailedForm] = useState({
    businessType: prefill?.businessType || '',
    cityOrZip: prefill?.cityOrZip || '',
    squareFootage: '',
    facilityAddress: '',
    services: prefill?.serviceNeeded ? [prefill.serviceNeeded] : ([] as string[]),
    constructionStage: '',
    floorConditionNote: '',
    frequency: '',
    preferredHours: '',
    priorities: '',
    flooringTypes: [] as string[],
    specialRequirements: '',
    currentBudget: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    bestTime: '',
  });
  const [detailedErrors, setDetailedErrors] = useState<Record<string, string>>({});
  const [detailedSubmitted, setDetailedSubmitted] = useState(false);

  useEffect(() => {
    if (!prefill) return;
    if (prefill.cityOrZip || prefill.serviceNeeded) {
      setQuickForm((prev) => ({
        ...prev,
        cityOrZip: prefill.cityOrZip || prev.cityOrZip,
        serviceNeeded: prefill.serviceNeeded || prev.serviceNeeded,
      }));
      setDetailedForm((prev) => ({
        ...prev,
        businessType: prefill.businessType || prev.businessType,
        cityOrZip: prefill.cityOrZip || prev.cityOrZip,
        services:
          prefill.serviceNeeded && !prev.services.includes(prefill.serviceNeeded)
            ? [...prev.services, prefill.serviceNeeded]
            : prev.services,
      }));
    }
    if (prefill.businessType) {
      setDetailedForm((prev) => ({
        ...prev,
        businessType: prefill.businessType || prev.businessType,
      }));
    }
  }, [prefill]);

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!quickForm.companyName.trim()) errs.companyName = 'Company name is required.';
    if (!quickForm.contactName.trim()) errs.contactName = 'Contact name is required.';
    if (!isValidEmail(quickForm.email)) errs.email = 'Enter a valid business email address.';
    if (!isValidPhone(quickForm.phone)) errs.phone = 'Enter a valid 10-digit phone number.';
    if (!quickForm.cityOrZip.trim()) errs.cityOrZip = 'City or ZIP code is required.';
    if (!quickForm.serviceNeeded.trim()) errs.serviceNeeded = 'Select a commercial service.';

    setQuickErrors(errs);
    if (Object.keys(errs).length === 0) {
      setQuickSubmitted(true);
    }
  };

  const toggleDetailedService = (service: string) => {
    setDetailedForm((prev) => {
      const exists = prev.services.includes(service);
      const next = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: next };
    });
    if (detailedErrors.services) {
      setDetailedErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const toggleFlooringType = (floor: string) => {
    setDetailedForm((prev) => {
      const exists = prev.flooringTypes.includes(floor);
      return {
        ...prev,
        flooringTypes: exists
          ? prev.flooringTypes.filter((f) => f !== floor)
          : [...prev.flooringTypes, floor],
      };
    });
  };

  const validateStep = (targetStep: number): boolean => {
    const errs: Record<string, string> = {};
    if (targetStep === 1) {
      if (!detailedForm.businessType.trim()) errs.businessType = 'Select a business or facility type.';
      if (!detailedForm.cityOrZip.trim()) errs.cityOrZip = 'Enter the facility city or ZIP code.';
    } else if (targetStep === 2) {
      if (detailedForm.services.length === 0) {
        errs.services = 'Select at least one service or choose "Not Sure Yet".';
      }
    } else if (targetStep === 3) {
      if (!detailedForm.frequency.trim()) errs.frequency = 'Select a desired cleaning frequency.';
      if (!detailedForm.priorities.trim()) {
        errs.priorities = 'Share your main facility cleaning priorities.';
      }
    } else if (targetStep === 4) {
      if (!detailedForm.companyName.trim()) errs.companyName = 'Company name is required.';
      if (!detailedForm.contactName.trim()) errs.contactName = 'Contact name is required.';
      if (!isValidEmail(detailedForm.email)) errs.email = 'Enter a valid email address.';
      if (!isValidPhone(detailedForm.phone)) errs.phone = 'Enter a valid 10-digit phone number.';
    }
    setDetailedErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(5, s + 1));
    }
  };

  const handleDetailedSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      setDetailedSubmitted(true);
    }
  };

  const buildMailtoHref = (subject: string, lines: string[]) => {
    const body = encodeURIComponent(lines.join('\n'));
    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const hasFloorSelection =
    detailedForm.services.includes('Floor Restoration') ||
    detailedForm.services.includes('Specialty Floor Care');
  const hasConstructionSelection = detailedForm.services.includes('Construction Cleanup');

  const inputBaseClass =
    'w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#718A95]/40 rounded-lg text-sm text-[#142A3C] placeholder:text-[#718A95]';

  return (
    <div className="space-y-8">
      {/* Pathway Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E9EFF0] pb-6">
        <div
          role="tablist"
          aria-label="Quote Request Pathways"
          className="inline-flex p-1 bg-[#E9EFF0] rounded-lg self-start"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'quick'}
            onClick={() => setMode('quick')}
            className={`min-h-[40px] px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              mode === 'quick'
                ? 'bg-white text-[#142A3C] shadow-xs'
                : 'text-[#27353D] hover:text-[#142A3C]'
            }`}
          >
            Option A: Quick Commercial Inquiry
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'detailed'}
            onClick={() => setMode('detailed')}
            className={`min-h-[40px] px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              mode === 'detailed'
                ? 'bg-white text-[#142A3C] shadow-xs'
                : 'text-[#27353D] hover:text-[#142A3C]'
            }`}
          >
            Option B: Detailed Facility Quote
          </button>
        </div>

        <p className="text-xs text-[#718A95]">
          Interactive Redesign Demonstration · No automated pricing or unverified delivery
        </p>
      </div>

      {/* OPTION A — QUICK COMMERCIAL INQUIRY */}
      {mode === 'quick' && (
        <div className="bg-white border border-[#E9EFF0] rounded-xl p-6 sm:p-8 lg:p-10">
          {!quickSubmitted ? (
            <form onSubmit={handleQuickSubmit} noValidate className="space-y-6">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-bold text-[#142A3C]">
                  Quick Commercial Inquiry
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#27353D]">
                  Share a few essentials about your facility to start a consultation. Required fields are marked with <span className="text-[#147C75] font-semibold">*</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="q-company" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                    Company Name <span className="text-[#147C75]">*</span>
                  </label>
                  <input
                    id="q-company"
                    type="text"
                    required
                    value={quickForm.companyName}
                    onChange={(e) => setQuickForm({ ...quickForm, companyName: e.target.value })}
                    placeholder="e.g., Heartland Commercial Properties"
                    className={inputBaseClass}
                  />
                  {quickErrors.companyName && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {quickErrors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="q-contact" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                    Contact Name <span className="text-[#147C75]">*</span>
                  </label>
                  <input
                    id="q-contact"
                    type="text"
                    required
                    value={quickForm.contactName}
                    onChange={(e) => setQuickForm({ ...quickForm, contactName: e.target.value })}
                    placeholder="Full name"
                    className={inputBaseClass}
                  />
                  {quickErrors.contactName && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {quickErrors.contactName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="q-email" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                    Business Email <span className="text-[#147C75]">*</span>
                  </label>
                  <input
                    id="q-email"
                    type="email"
                    required
                    value={quickForm.email}
                    onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                    placeholder="name@company.com"
                    className={inputBaseClass}
                  />
                  {quickErrors.email && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {quickErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="q-phone" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                    Phone Number <span className="text-[#147C75]">*</span>
                  </label>
                  <input
                    id="q-phone"
                    type="tel"
                    required
                    value={quickForm.phone}
                    onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                    placeholder="(405) 555-0190"
                    className={inputBaseClass}
                  />
                  {quickErrors.phone && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {quickErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="q-location" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                    City or ZIP Code <span className="text-[#147C75]">*</span>
                  </label>
                  <input
                    id="q-location"
                    type="text"
                    required
                    value={quickForm.cityOrZip}
                    onChange={(e) => setQuickForm({ ...quickForm, cityOrZip: e.target.value })}
                    placeholder="Oklahoma City or 73116"
                    className={inputBaseClass}
                  />
                  {quickErrors.cityOrZip && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                      {quickErrors.cityOrZip}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="q-service" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                    Service Needed <span className="text-[#147C75]">*</span>
                  </label>
                  <select
                    id="q-service"
                    value={quickForm.serviceNeeded}
                    onChange={(e) => setQuickForm({ ...quickForm, serviceNeeded: e.target.value })}
                    className={inputBaseClass}
                  >
                    <option value="General Commercial Cleaning">General Commercial Cleaning</option>
                    <option value="Disinfection Services">Disinfection Services</option>
                    <option value="Day Porter Services">Day Porter Services</option>
                    <option value="Floor Restoration">Floor Restoration</option>
                    <option value="Specialty Floor Care">Specialty Floor Care</option>
                    <option value="Construction & Specialty Cleaning">
                      Construction &amp; Specialty Cleaning
                    </option>
                    <option value="Multiple / Not Sure Yet">Multiple / Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="q-message" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                  Short Message <span className="text-[#718A95] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="q-message"
                  rows={3}
                  value={quickForm.message}
                  onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                  placeholder="Share facility type, preferred schedule, or questions..."
                  className="w-full px-4 py-3 bg-white border border-[#718A95]/40 rounded-lg text-sm text-[#142A3C] placeholder:text-[#718A95]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E9EFF0]">
                <p className="text-xs text-[#718A95] max-w-md">
                  Need to add square footage, floor surfaces, or multiple services? Switch to{' '}
                  <button
                    type="button"
                    onClick={() => setMode('detailed')}
                    className="text-[#147C75] font-semibold underline cursor-pointer"
                  >
                    Option B: Detailed Facility Quote
                  </button>
                  .
                </p>
                <button
                  type="submit"
                  className="min-h-[44px] px-6 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request a Cleaning Consultation
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-start gap-3 p-5 bg-[#E9EFF0]/60 border border-[#147C75]/30 rounded-xl">
                <Info className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-2 text-sm text-[#27353D]">
                  <p className="font-display text-base font-bold text-[#142A3C]">
                    Form Validation Complete (Redesign Demonstration)
                  </p>
                  <p>
                    This interactive website concept does not transmit inquiries directly to Commercial Cleaning Services of Oklahoma’s live office inbox. No inquiry was automatically sent or booked.
                  </p>
                  <p>
                    To submit your actual commercial inquiry, call the company directly or open a pre-filled email using your summary below:
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-white border border-[#E9EFF0] rounded-xl text-sm">
                <div>
                  <dt className="text-[#718A95] text-xs">Company</dt>
                  <dd className="font-medium text-[#142A3C] mt-0.5">{quickForm.companyName}</dd>
                </div>
                <div>
                  <dt className="text-[#718A95] text-xs">Contact</dt>
                  <dd className="font-medium text-[#142A3C] mt-0.5">{quickForm.contactName}</dd>
                </div>
                <div>
                  <dt className="text-[#718A95] text-xs">Email / Phone</dt>
                  <dd className="font-medium text-[#142A3C] mt-0.5">
                    {quickForm.email} · {quickForm.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#718A95] text-xs">Location &amp; Service</dt>
                  <dd className="font-medium text-[#142A3C] mt-0.5">
                    {quickForm.cityOrZip} · {quickForm.serviceNeeded}
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildMailtoHref(
                    `Commercial Cleaning Consultation — ${quickForm.companyName}`,
                    [
                      `Company: ${quickForm.companyName}`,
                      `Contact: ${quickForm.contactName}`,
                      `Email: ${quickForm.email}`,
                      `Phone: ${quickForm.phone}`,
                      `City / ZIP: ${quickForm.cityOrZip}`,
                      `Service Needed: ${quickForm.serviceNeeded}`,
                      quickForm.message ? `Message: ${quickForm.message}` : '',
                    ].filter(Boolean)
                  )}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Send Summary via Email</span>
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 border border-[#142A3C]/20 text-[#142A3C] hover:bg-[#E9EFF0]/60 text-sm font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#147C75]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setQuickSubmitted(false)}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#718A95] hover:text-[#142A3C] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Edit Inquiry</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* OPTION B — DETAILED FACILITY QUOTE (5 STEPS) */}
      {mode === 'detailed' && (
        <div className="bg-white border border-[#E9EFF0] rounded-xl p-6 sm:p-8 lg:p-10">
          {/* Progress Indicator */}
          <nav aria-label="Quote Progress" className="mb-8">
            <ol className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {STEP_LABELS.map((label, index) => {
                const stepNum = index + 1;
                const isCurrent = step === stepNum;
                const isCompleted = step > stepNum || detailedSubmitted;
                return (
                  <li key={label}>
                    <button
                      type="button"
                      disabled={stepNum > step && !detailedSubmitted}
                      onClick={() => {
                        if (stepNum <= step || detailedSubmitted) {
                          setDetailedSubmitted(false);
                          setStep(stepNum);
                        }
                      }}
                      className={`w-full min-h-[40px] px-3 py-2 rounded-lg text-left text-xs font-semibold transition-colors border ${
                        isCurrent && !detailedSubmitted
                          ? 'bg-[#142A3C] text-white border-[#142A3C]'
                          : isCompleted
                          ? 'bg-[#E9EFF0] text-[#147C75] border-[#147C75]/30 cursor-pointer'
                          : 'bg-white text-[#718A95] border-[#E9EFF0] cursor-not-allowed'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          {!detailedSubmitted ? (
            <form onSubmit={handleDetailedSubmit} noValidate>
              {/* STEP 1 — FACILITY */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#142A3C]">
                      Step 1 — Facility Details
                    </h3>
                    <p className="mt-1 text-sm text-[#27353D]">
                      Tell us about the commercial property so cleaning plans match your building type and location.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="d-type" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Business Type <span className="text-[#147C75]">*</span>
                      </label>
                      <select
                        id="d-type"
                        value={detailedForm.businessType}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, businessType: e.target.value })
                        }
                        className={inputBaseClass}
                      >
                        <option value="">Select facility industry...</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Other Commercial Property">Other Commercial Property</option>
                      </select>
                      {detailedErrors.businessType && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.businessType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="d-zip" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        City or ZIP Code <span className="text-[#147C75]">*</span>
                      </label>
                      <input
                        id="d-zip"
                        type="text"
                        value={detailedForm.cityOrZip}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, cityOrZip: e.target.value })
                        }
                        placeholder="e.g., Oklahoma City or 73116"
                        className={inputBaseClass}
                      />
                      {detailedErrors.cityOrZip && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.cityOrZip}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="d-sqft" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Approximate Square Footage{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-sqft"
                        type="text"
                        value={detailedForm.squareFootage}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, squareFootage: e.target.value })
                        }
                        placeholder="e.g., 12,500 sq ft"
                        className={inputBaseClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="d-address" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Facility Street Address{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-address"
                        type="text"
                        value={detailedForm.facilityAddress}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, facilityAddress: e.target.value })
                        }
                        placeholder="Street address in Oklahoma City area"
                        className={inputBaseClass}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 — SERVICES */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#142A3C]">
                      Step 2 — Services Needed
                    </h3>
                    <p className="mt-1 text-sm text-[#27353D]">
                      Select all commercial services you would like considered for your facility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {DETAILED_SERVICES.map((svc) => {
                      const selected = detailedForm.services.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleDetailedService(svc)}
                          aria-pressed={selected}
                          className={`min-h-[52px] flex items-center justify-between px-4 py-3 rounded-lg border text-left text-sm font-medium transition-colors cursor-pointer ${
                            selected
                              ? 'bg-[#142A3C] text-white border-[#142A3C]'
                              : 'bg-white text-[#27353D] border-[#E9EFF0] hover:border-[#718A95]'
                          }`}
                        >
                          <span>{svc}</span>
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center border ${
                              selected
                                ? 'bg-[#147C75] border-[#147C75] text-white'
                                : 'border-[#718A95]/50'
                            }`}
                          >
                            {selected && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {detailedErrors.services && (
                    <p role="alert" className="text-xs font-medium text-red-700">
                      {detailedErrors.services}
                    </p>
                  )}

                  {/* Conditional contextual follow-ups */}
                  {hasFloorSelection && (
                    <div className="p-4 bg-[#E9EFF0]/50 border border-[#E9EFF0] rounded-lg">
                      <label
                        htmlFor="d-floor-cond"
                        className="block text-sm font-medium text-[#142A3C] mb-1.5"
                      >
                        Floor Material &amp; Condition Notes{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-floor-cond"
                        type="text"
                        value={detailedForm.floorConditionNote}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, floorConditionNote: e.target.value })
                        }
                        placeholder="e.g., Terrazzo lobby needing polish, or VCT corridor scuffing"
                        className={inputBaseClass}
                      />
                    </div>
                  )}

                  {hasConstructionSelection && (
                    <div className="p-4 bg-[#E9EFF0]/50 border border-[#E9EFF0] rounded-lg">
                      <label
                        htmlFor="d-const-stage"
                        className="block text-sm font-medium text-[#142A3C] mb-1.5"
                      >
                        Construction Phase / Target Handover Date{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-const-stage"
                        type="text"
                        value={detailedForm.constructionStage}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, constructionStage: e.target.value })
                        }
                        placeholder="e.g., Final clean after build-out, target walkthrough next month"
                        className={inputBaseClass}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3 — CLEANING REQUIREMENTS */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#142A3C]">
                      Step 3 — Cleaning Requirements
                    </h3>
                    <p className="mt-1 text-sm text-[#27353D]">
                      Specify your desired cadence, facility priorities, and optional surface details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="d-freq" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Desired Frequency <span className="text-[#147C75]">*</span>
                      </label>
                      <select
                        id="d-freq"
                        value={detailedForm.frequency}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, frequency: e.target.value })
                        }
                        className={inputBaseClass}
                      >
                        <option value="">Select schedule frequency...</option>
                        {FREQUENCIES.map((freq) => (
                          <option key={freq} value={freq}>
                            {freq}
                          </option>
                        ))}
                      </select>
                      {detailedErrors.frequency && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.frequency}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="d-hours" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Preferred Cleaning Hours{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-hours"
                        type="text"
                        value={detailedForm.preferredHours}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, preferredHours: e.target.value })
                        }
                        placeholder="e.g., Daytime porter hours or evening window"
                        className={inputBaseClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="d-priorities" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                      Main Cleaning Priorities <span className="text-[#147C75]">*</span>
                    </label>
                    <textarea
                      id="d-priorities"
                      rows={3}
                      value={detailedForm.priorities}
                      onChange={(e) =>
                        setDetailedForm({ ...detailedForm, priorities: e.target.value })
                      }
                      placeholder="e.g., Lobby presentation, restroom restocking, high-touch disinfection, conference rooms"
                      className="w-full px-4 py-3 bg-white border border-[#718A95]/40 rounded-lg text-sm text-[#142A3C] placeholder:text-[#718A95]"
                    />
                    {detailedErrors.priorities && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {detailedErrors.priorities}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-[#142A3C] mb-2">
                      Flooring Types{' '}
                      <span className="text-[#718A95] font-normal">(Optional)</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {FLOORING_OPTIONS.map((floor) => {
                        const active = detailedForm.flooringTypes.includes(floor);
                        return (
                          <button
                            key={floor}
                            type="button"
                            onClick={() => toggleFlooringType(floor)}
                            aria-pressed={active}
                            className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                              active
                                ? 'bg-[#142A3C] text-white border-[#142A3C]'
                                : 'bg-[#E9EFF0]/45 text-[#27353D] border-[#E9EFF0] hover:border-[#718A95]'
                            }`}
                          >
                            {floor}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="d-special" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Special Requirements{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-special"
                        type="text"
                        value={detailedForm.specialRequirements}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, specialRequirements: e.target.value })
                        }
                        placeholder="e.g., Access coordination, SDS documentation"
                        className={inputBaseClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="d-budget" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Current Cleaning Budget — Optional
                      </label>
                      <input
                        id="d-budget"
                        type="text"
                        value={detailedForm.currentBudget}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, currentBudget: e.target.value })
                        }
                        placeholder="Optional reference amount"
                        className={inputBaseClass}
                      />
                      <p className="mt-1.5 text-xs text-[#718A95]">
                        Share only if you&apos;d like us to consider your existing cleaning budget.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4 — CONTACT */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#142A3C]">
                      Step 4 — Contact Details
                    </h3>
                    <p className="mt-1 text-sm text-[#27353D]">
                      Provide the primary point of contact for walkthrough scheduling and plan review.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="d-company" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Company Name <span className="text-[#147C75]">*</span>
                      </label>
                      <input
                        id="d-company"
                        type="text"
                        value={detailedForm.companyName}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, companyName: e.target.value })
                        }
                        placeholder="Business or organization name"
                        className={inputBaseClass}
                      />
                      {detailedErrors.companyName && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="d-contact" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Contact Name <span className="text-[#147C75]">*</span>
                      </label>
                      <input
                        id="d-contact"
                        type="text"
                        value={detailedForm.contactName}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, contactName: e.target.value })
                        }
                        placeholder="Full name"
                        className={inputBaseClass}
                      />
                      {detailedErrors.contactName && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.contactName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="d-email" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Email <span className="text-[#147C75]">*</span>
                      </label>
                      <input
                        id="d-email"
                        type="email"
                        value={detailedForm.email}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className={inputBaseClass}
                      />
                      {detailedErrors.email && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="d-phone" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Phone <span className="text-[#147C75]">*</span>
                      </label>
                      <input
                        id="d-phone"
                        type="tel"
                        value={detailedForm.phone}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, phone: e.target.value })
                        }
                        placeholder="(405) 555-0190"
                        className={inputBaseClass}
                      />
                      {detailedErrors.phone && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {detailedErrors.phone}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="d-besttime" className="block text-sm font-medium text-[#142A3C] mb-1.5">
                        Best Time to Contact{' '}
                        <span className="text-[#718A95] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="d-besttime"
                        type="text"
                        value={detailedForm.bestTime}
                        onChange={(e) =>
                          setDetailedForm({ ...detailedForm, bestTime: e.target.value })
                        }
                        placeholder="e.g., Weekday mornings 9:00 AM – 11:30 AM"
                        className={inputBaseClass}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5 — REVIEW */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#142A3C]">
                      Step 5 — Review Your Facility Summary
                    </h3>
                    <p className="mt-1 text-sm text-[#27353D]">
                      Verify your information before generating your quote request summary.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#E9EFF0]/40 border border-[#E9EFF0] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-sm font-bold text-[#142A3C]">
                          Facility Details
                        </h4>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#147C75] hover:underline cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm text-[#27353D]">
                        <span className="text-[#718A95]">Type:</span> {detailedForm.businessType}
                      </p>
                      <p className="text-sm text-[#27353D]">
                        <span className="text-[#718A95]">Location:</span> {detailedForm.cityOrZip}
                      </p>
                      {detailedForm.squareFootage && (
                        <p className="text-sm text-[#27353D]">
                          <span className="text-[#718A95]">Size:</span> {detailedForm.squareFootage}
                        </p>
                      )}
                      {detailedForm.facilityAddress && (
                        <p className="text-sm text-[#27353D]">
                          <span className="text-[#718A95]">Address:</span>{' '}
                          {detailedForm.facilityAddress}
                        </p>
                      )}
                    </div>

                    <div className="p-5 bg-[#E9EFF0]/40 border border-[#E9EFF0] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-sm font-bold text-[#142A3C]">
                          Selected Services
                        </h4>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#147C75] hover:underline cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm text-[#27353D]">
                        {detailedForm.services.join(' · ')}
                      </p>
                      {detailedForm.floorConditionNote && (
                        <p className="text-xs text-[#718A95]">
                          Floor note: {detailedForm.floorConditionNote}
                        </p>
                      )}
                      {detailedForm.constructionStage && (
                        <p className="text-xs text-[#718A95]">
                          Construction note: {detailedForm.constructionStage}
                        </p>
                      )}
                    </div>

                    <div className="p-5 bg-[#E9EFF0]/40 border border-[#E9EFF0] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-sm font-bold text-[#142A3C]">
                          Cleaning Requirements
                        </h4>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#147C75] hover:underline cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm text-[#27353D]">
                        <span className="text-[#718A95]">Frequency:</span> {detailedForm.frequency}
                      </p>
                      <p className="text-sm text-[#27353D]">
                        <span className="text-[#718A95]">Priorities:</span> {detailedForm.priorities}
                      </p>
                      {detailedForm.flooringTypes.length > 0 && (
                        <p className="text-sm text-[#27353D]">
                          <span className="text-[#718A95]">Flooring:</span>{' '}
                          {detailedForm.flooringTypes.join(', ')}
                        </p>
                      )}
                      {detailedForm.currentBudget && (
                        <p className="text-sm text-[#27353D]">
                          <span className="text-[#718A95]">Optional Budget Reference:</span>{' '}
                          {detailedForm.currentBudget}
                        </p>
                      )}
                    </div>

                    <div className="p-5 bg-[#E9EFF0]/40 border border-[#E9EFF0] rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-sm font-bold text-[#142A3C]">
                          Contact Information
                        </h4>
                        <button
                          type="button"
                          onClick={() => setStep(4)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#147C75] hover:underline cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <p className="text-sm text-[#27353D]">{detailedForm.companyName}</p>
                      <p className="text-sm text-[#27353D]">{detailedForm.contactName}</p>
                      <p className="text-sm text-[#27353D]">
                        {detailedForm.email} · {detailedForm.phone}
                      </p>
                      {detailedForm.bestTime && (
                        <p className="text-xs text-[#718A95]">
                          Best time: {detailedForm.bestTime}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-8 pt-6 border-t border-[#E9EFF0] flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#142A3C] border border-[#E9EFF0] rounded-lg hover:bg-[#E9EFF0]/60 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <span />
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 bg-[#142A3C] hover:bg-[#1E3B53] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Request My Commercial Cleaning Quote</span>
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-start gap-3 p-5 bg-[#E9EFF0]/60 border border-[#147C75]/30 rounded-xl">
                <Info className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-2 text-sm text-[#27353D]">
                  <p className="font-display text-base font-bold text-[#142A3C]">
                    Quote Scope Prepared (Redesign Demonstration)
                  </p>
                  <p>
                    This multi-step workflow demonstrates the redesigned quote intake experience. Because no live backend is connected to Commercial Cleaning Services of Oklahoma in this preview, your inquiry has not been transmitted or scheduled.
                  </p>
                  <p>
                    Use the buttons below to send this exact facility brief directly via your email client or speak with the Oklahoma City office by phone.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildMailtoHref(
                    `Detailed Commercial Quote Request — ${detailedForm.companyName}`,
                    [
                      `Company: ${detailedForm.companyName}`,
                      `Contact: ${detailedForm.contactName}`,
                      `Email: ${detailedForm.email}`,
                      `Phone: ${detailedForm.phone}`,
                      `Facility Type: ${detailedForm.businessType}`,
                      `Location: ${detailedForm.cityOrZip}`,
                      detailedForm.squareFootage ? `Approx. Sq Ft: ${detailedForm.squareFootage}` : '',
                      detailedForm.facilityAddress ? `Address: ${detailedForm.facilityAddress}` : '',
                      `Services: ${detailedForm.services.join(', ')}`,
                      `Desired Frequency: ${detailedForm.frequency}`,
                      `Priorities: ${detailedForm.priorities}`,
                      detailedForm.flooringTypes.length
                        ? `Flooring: ${detailedForm.flooringTypes.join(', ')}`
                        : '',
                      detailedForm.currentBudget
                        ? `Optional Current Budget Reference: ${detailedForm.currentBudget}`
                        : '',
                    ].filter(Boolean)
                  )}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Send Brief via Email</span>
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 border border-[#142A3C]/20 text-[#142A3C] hover:bg-[#E9EFF0]/60 text-sm font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#147C75]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setDetailedSubmitted(false);
                    setStep(5);
                  }}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#718A95] hover:text-[#142A3C] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Return to Review</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

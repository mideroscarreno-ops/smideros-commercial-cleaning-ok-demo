import { FormEvent, useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface ServiceAreaCheckerProps {
  onConfirmQuote: (locationQuery: string) => void;
}

export function ServiceAreaChecker({ onConfirmQuote }: ServiceAreaCheckerProps) {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleaned = query.trim();
    if (!cleaned) {
      setError('Please enter a city name or 5-digit ZIP code.');
      return;
    }
    setError('');
    setSubmittedQuery(cleaned);
  };

  return (
    <div className="bg-white border border-[#E9EFF0] rounded-xl p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2 text-xs font-medium text-[#718A95]">
            <span>Oklahoma City</span>
            <span aria-hidden="true">·</span>
            <span>Greater Oklahoma City Area</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142A3C] tracking-tight">
            Commercial Cleaning for Oklahoma City Businesses.
          </h3>

          <p className="text-base text-[#27353D] leading-relaxed">
            Oklahoma City is the primary confirmed service location, with coverage extending into the Greater Oklahoma City area. Because exact geographic boundaries are not published as a fixed mileage radius, service availability is confirmed individually for each facility.
          </p>

          <div className="pt-2 space-y-2 text-sm text-[#27353D]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#147C75] shrink-0 mt-1" aria-hidden="true" />
              <span>Office Location: {COMPANY_INFO.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#147C75] shrink-0" aria-hidden="true" />
              <a href={COMPANY_INFO.phoneHref} className="font-medium text-[#142A3C] hover:text-[#147C75]">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#E9EFF0]/45 rounded-xl p-6 sm:p-8 border border-[#E9EFF0]">
          <h4 className="font-display text-lg font-semibold text-[#142A3C]">
            Check Facility Service Availability
          </h4>
          <p className="mt-1.5 text-sm text-[#27353D]">
            Enter your facility’s city or ZIP code to start an availability confirmation inquiry.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="service-area-input"
                className="block text-sm font-medium text-[#142A3C] mb-1.5"
              >
                Facility City or ZIP Code <span className="text-[#147C75]">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="service-area-input"
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g., Oklahoma City or 73116"
                  className="flex-1 min-h-[44px] px-4 py-2.5 bg-white border border-[#718A95]/40 rounded-lg text-sm text-[#142A3C] placeholder:text-[#718A95]"
                />
                <button
                  type="submit"
                  className="min-h-[44px] px-5 py-2.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Confirm Availability
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-2 text-xs font-medium text-red-700">
                  {error}
                </p>
              )}
            </div>
          </form>

          {submittedQuery && (
            <div className="mt-5 p-4 bg-white border border-[#147C75]/30 rounded-lg space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-[#27353D]">
                  <p className="font-semibold text-[#142A3C]">
                    Location noted: {submittedQuery}
                  </p>
                  <p className="mt-1">
                    Demonstration preview: Service coverage for <span className="font-medium">{submittedQuery}</span> is confirmed directly by the company based on facility scope and route fit.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onConfirmQuote(submittedQuery)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147C75] hover:text-[#0F635D] cursor-pointer"
                >
                  <span>Continue to Quote Form with {submittedQuery}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="text-[#718A95]" aria-hidden="true">·</span>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#142A3C] hover:text-[#147C75]"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Email {COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

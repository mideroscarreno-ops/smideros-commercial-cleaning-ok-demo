import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';

interface IndustrySelectorProps {
  onSelectQuote: (industryName: string) => void;
  compact?: boolean;
}

export function IndustrySelector({ onSelectQuote, compact = false }: IndustrySelectorProps) {
  const [selectedId, setSelectedId] = useState<string>(INDUSTRIES[5].id); // Default to General Offices
  const selected = INDUSTRIES.find((item) => item.id === selectedId) || INDUSTRIES[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Selector list */}
      <div
        role="tablist"
        aria-label="Commercial Industries Served"
        className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5"
      >
        {INDUSTRIES.map((industry) => {
          const isActive = industry.id === selected.id;
          return (
            <button
              key={industry.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`industry-panel-${industry.id}`}
              onClick={() => setSelectedId(industry.id)}
              className={`min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#142A3C] text-white font-semibold'
                  : 'bg-[#E9EFF0]/55 text-[#27353D] hover:bg-[#E9EFF0] hover:text-[#142A3C]'
              }`}
            >
              <span className="truncate pr-2">{industry.name}</span>
              <ArrowRight
                className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                  isActive ? 'text-[#147C75] translate-x-0.5' : 'text-[#718A95]'
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Active Industry Detail Panel */}
      <div
        id={`industry-panel-${selected.id}`}
        role="tabpanel"
        className="lg:col-span-7 bg-[#E9EFF0]/45 border border-[#E9EFF0] rounded-xl p-6 sm:p-8 lg:p-10"
      >
        <p className="text-xs font-medium text-[#718A95] mb-3">
          {selected.typicalFocus}
        </p>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142A3C] tracking-tight">
          {selected.name}
        </h3>

        <p className="mt-4 text-base text-[#27353D] leading-relaxed">
          {selected.summary}
        </p>

        <div className="mt-8 pt-6 border-t border-[#142A3C]/10">
          <h4 className="text-sm font-semibold text-[#142A3C] mb-4">
            Typical Facility Cleaning Considerations
          </h4>
          <ul className="space-y-3">
            {selected.considerations.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#27353D]">
                <Check
                  className="w-4 h-4 text-[#147C75] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {!compact && (
          <p className="mt-6 text-xs text-[#718A95] leading-relaxed">
            Cleaning plans are customized around each property’s layout, surface materials, and operational schedule. Confirm specific facility requirements directly during consultation.
          </p>
        )}

        <div className="mt-8 pt-6 border-t border-[#142A3C]/10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onSelectQuote(selected.name)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#147C75] hover:bg-[#0F635D] rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap"
          >
            <span>Discuss Your Facility</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

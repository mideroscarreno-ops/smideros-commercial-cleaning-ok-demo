import { ArrowRight, Phone, Check, ShieldCheck } from 'lucide-react';
import { RouteId } from '../types';
import {
  APPROACH_STEPS,
  COMPANY_INFO,
  CREDIBILITY_CLAIMS,
  FAQS,
  FLOOR_MATERIALS,
  IMAGES,
  SERVICES,
  TESTIMONIALS,
} from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { IndustrySelector } from '../components/IndustrySelector';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { FaqAccordion } from '../components/FaqAccordion';
import { QuotePrefill } from '../components/QuoteSection';

interface HomePageProps {
  onNavigate: (route: RouteId, prefill?: QuotePrefill) => void;
}

const PLAN_VARIABLES = [
  {
    title: 'Facility Type & Traffic',
    detail: 'Medical suites, corporate offices, retail aisles, or industrial breakrooms.',
  },
  {
    title: 'Approximate Size',
    detail: 'Scope structured around square footage, room counts, and shared corridors.',
  },
  {
    title: 'Cleaning Frequency',
    detail: 'Published daily, weekly, and monthly schedules matched to occupancy.',
  },
  {
    title: 'Operational Requirements',
    detail: 'Daytime porter support or scheduled upkeep aligned with your workflow.',
  },
  {
    title: 'Flooring & Surfaces',
    detail: 'Material-appropriate care for marble, terrazzo, ceramic, vinyl, or hardwood.',
  },
  {
    title: 'Specialty Cleaning Needs',
    detail: 'High-touch disinfection, electrostatic fogging, or post-construction cleanup.',
  },
  {
    title: 'Business Priorities',
    detail: 'Lobby presentation, restroom stocking, conference readiness, and inspection focus.',
  },
];

const FREQUENCY_OPTIONS = [
  {
    cadence: 'Daily',
    description:
      'Consistent day-to-day upkeep for high-traffic offices, medical clinics, active lobbies, and shared restrooms.',
  },
  {
    cadence: 'Weekly',
    description:
      'Scheduled recurring janitorial maintenance for moderate-traffic business suites, offices, and religious facilities.',
  },
  {
    cadence: 'Monthly',
    description:
      'Periodic detail cleaning, floor buffing, or supplemental care paired with your facility’s broader maintenance calendar.',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* B. CINEMATIC COMMERCIAL HERO */}
      <section className="relative bg-[#142A3C] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.heroLobby}
            alt="Modern commercial corporate lobby in Oklahoma City with polished terrazzo flooring and floor-to-ceiling glass"
            priority
            width={1376}
            height={768}
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#142A3C]/95 via-[#142A3C]/80 to-[#142A3C]/45"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs sm:text-sm font-medium text-[#E9EFF0]/85 tracking-wide">
              Commercial Cleaning · Oklahoma City · Customized Service Plans
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-white">
              Professional Cleaning That Works as Hard as Your Business.
            </h1>

            <p className="text-base sm:text-lg text-[#E9EFF0]/90 leading-relaxed max-w-2xl">
              Customized commercial janitorial, floor care, and specialty cleaning services for businesses throughout Oklahoma City.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Request a Commercial Cleaning Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('core-services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/18 text-white border border-white/25 text-sm sm:text-base font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                Explore Our Services
              </button>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#E9EFF0]/85">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#E9EFF0] underline-offset-4 hover:underline"
              >
                <Phone className="w-4 h-4 text-[#147C75]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-white/30 hidden sm:inline">
                |
              </span>
              <span>Exclusively Serving Commercial &amp; Institutional Properties</span>
            </div>
          </div>
        </div>
      </section>

      {/* C. CLEANING BUILT AROUND YOUR FACILITY */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold text-[#147C75] tracking-wide">
                Cleaner Facilities. Stronger First Impressions.
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142A3C] tracking-tight leading-tight">
                Every Facility Is Different. Your Cleaning Plan Should Be Too.
              </h2>
              <p className="text-base text-[#27353D] leading-relaxed">
                Commercial Cleaning Services of Oklahoma serves business facilities, not residential homes. Instead of applying a rigid one-size checklist, scopes are tailored to how your building operates day to day.
              </p>

              <div className="pt-4">
                <h3 className="font-display text-sm font-bold text-[#142A3C] mb-4">
                  Published Service Schedules
                </h3>
                <div className="divide-y divide-[#E9EFF0] border-t border-b border-[#E9EFF0]">
                  {FREQUENCY_OPTIONS.map((item) => (
                    <div key={item.cadence} className="py-4">
                      <p className="font-display text-base font-semibold text-[#142A3C]">
                        {item.cadence} Cleaning Plans
                      </p>
                      <p className="mt-1 text-sm text-[#27353D] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#E9EFF0]/45 border border-[#E9EFF0] rounded-xl p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold text-[#142A3C]">
                How Plans Are Adapted to Your Building
              </h3>
              <p className="mt-2 text-sm text-[#27353D]">
                Seven operational factors guide every commercial proposal before service begins:
              </p>

              <dl className="mt-6 divide-y divide-[#142A3C]/10">
                {PLAN_VARIABLES.map((item, idx) => (
                  <div
                    key={item.title}
                    className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                  >
                    <dt className="sm:col-span-5 font-display text-sm font-semibold text-[#142A3C] tabular-nums">
                      0{idx + 1}. {item.title}
                    </dt>
                    <dd className="sm:col-span-7 text-sm text-[#27353D] leading-relaxed">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-6 border-t border-[#142A3C]/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#718A95]">
                  Service hours and schedules are coordinated directly per facility agreement.
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147C75] hover:text-[#0F635D] cursor-pointer"
                >
                  <span>Build Your Facility Scope</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. SIX CORE SERVICES */}
      <section id="core-services" className="py-16 sm:py-24 bg-[#E9EFF0]/35 border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#147C75] tracking-wide">
              Commercial Service Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#142A3C] tracking-tight">
              Six Specialized Services for Commercial Properties
            </h2>
            <p className="mt-3 text-base text-[#27353D] leading-relaxed">
              Select a service area below to review typical facility tasks, scheduling considerations, and planning details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const isFeatured = index === 0;
              return (
                <article
                  key={service.id}
                  className={`bg-white border border-[#E9EFF0] rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-12' : ''
                  }`}
                >
                  <div
                    className={`overflow-hidden bg-[#142A3C] ${
                      isFeatured ? 'lg:col-span-6 h-64 lg:h-full' : 'aspect-[4/3]'
                    }`}
                  >
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      width={1200}
                      height={896}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`p-6 sm:p-7 flex flex-col justify-between ${
                      isFeatured ? 'lg:col-span-6 lg:p-8' : 'flex-1'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-semibold text-[#718A95] tabular-nums">
                        {service.number} · Commercial Service
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold text-[#142A3C]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-[#27353D] leading-relaxed">
                        {service.summary}
                      </p>

                      {isFeatured && (
                        <ul className="mt-5 space-y-2 border-t border-[#E9EFF0] pt-4">
                          {service.scopeItems.slice(0, 3).map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-[#27353D]"
                            >
                              <Check
                                className="w-4 h-4 text-[#147C75] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E9EFF0]">
                      <button
                        type="button"
                        onClick={() => onNavigate(service.id)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#147C75] hover:text-[#0F635D] cursor-pointer"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* E. INDUSTRIES WE SERVE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#147C75] tracking-wide">
              Commercial Sectors
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#142A3C] tracking-tight">
              Industries We Serve Across Oklahoma City
            </h2>
            <p className="mt-3 text-base text-[#27353D] leading-relaxed">
              Select your property category to review typical facility cleaning considerations and priorities.
            </p>
          </div>

          <IndustrySelector
            compact
            onSelectQuote={(industryName) =>
              onNavigate('quote', { businessType: industryName })
            }
          />
        </div>
      </section>

      {/* F. A CLEAR PROFESSIONAL APPROACH */}
      <section className="py-16 sm:py-24 bg-[#142A3C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#E9EFF0]/70 tracking-wide">
                Service Methodology
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                A Clear, Dependable Approach From Walkthrough to Ongoing Care
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('approach')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#E9EFF0] underline underline-offset-4 cursor-pointer shrink-0"
            >
              <span>Read Full Approach</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/15 pt-10">
            {APPROACH_STEPS.map((item) => (
              <div key={item.step} className="space-y-3">
                <p className="font-display text-2xl font-bold text-[#147C75] tabular-nums">
                  {item.step}
                </p>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#E9EFF0]/80 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. TRUST & CREDIBILITY + H. AUTHENTIC TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* G. Trust & Credibility */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold text-[#147C75] tracking-wide">
                Company-Published Commitments
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142A3C] tracking-tight">
                Accountability Built on Established Practices
              </h2>
              <p className="text-base text-[#27353D] leading-relaxed">
                Facility managers depend on clear standards and direct responsiveness. The commitments listed here reflect the company’s published operational practices.
              </p>
              <p className="text-xs text-[#718A95] leading-relaxed">
                All statements reflect claims published by Commercial Cleaning Services of Oklahoma. Ask directly for documentation or specific policy terms during consultation.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {CREDIBILITY_CLAIMS.map((claim) => (
                <div
                  key={claim.title}
                  className="border-t border-[#E9EFF0] pt-4 space-y-1.5"
                >
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck
                      className="w-4 h-4 text-[#147C75] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-base font-semibold text-[#142A3C]">
                      {claim.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#27353D] leading-relaxed pl-6">
                    {claim.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* H. Authentic Testimonials */}
          <div className="pt-16 border-t border-[#E9EFF0]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold text-[#147C75] tracking-wide">
                  Published Client Feedback
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#142A3C] tracking-tight">
                  Perspectives From Commercial Facility Leaders
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('testimonials')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147C75] hover:text-[#0F635D] cursor-pointer"
              >
                <span>View Client Feedback Page</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((item) => (
                <figure
                  key={item.id}
                  className="bg-[#E9EFF0]/40 border border-[#E9EFF0] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <blockquote className="text-sm sm:text-base text-[#27353D] leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 pt-4 border-t border-[#142A3C]/10">
                    <p className="font-display text-sm font-bold text-[#142A3C]">
                      {item.attribution}
                    </p>
                    <p className="text-xs text-[#718A95] mt-0.5">{item.sectorContext}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#718A95]">
              Attributions match the commercial roles published on the company’s website; no personal names or unverified ratings are added.
            </p>
          </div>
        </div>
      </section>

      {/* I. COMMERCIAL FLOOR CARE SPOTLIGHT */}
      <section className="py-16 sm:py-24 bg-[#E9EFF0]/35 border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 rounded-xl overflow-hidden bg-[#142A3C] min-h-[320px]">
              <ResilientImage
                src={IMAGES.floorTerrazzo}
                alt="Polished architectural terrazzo and natural stone commercial building floor"
                width={1376}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#147C75] tracking-wide">
                  Commercial Floor Care Spotlight
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142A3C] tracking-tight">
                  Make Every Floor Part of a Better First Impression.
                </h2>
                <p className="text-base text-[#27353D] leading-relaxed">
                  Lobbies, corridors, and showrooms experience constant wear. Proper floor-care methods—including cleaning, waxing, buffing, stripping, and sealing—depend on each surface’s material and existing condition.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {FLOOR_MATERIALS.map((mat) => (
                  <div
                    key={mat.name}
                    className="bg-white border border-[#E9EFF0] rounded-lg p-4"
                  >
                    <h3 className="font-display text-sm font-bold text-[#142A3C]">
                      {mat.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#27353D] leading-relaxed">
                      {mat.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('quote', { serviceNeeded: 'Specialty Floor Care' })
                  }
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <span>Discuss Your Flooring Needs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('service-floor-restoration')}
                  className="text-sm font-semibold text-[#142A3C] hover:text-[#147C75] cursor-pointer"
                >
                  Compare Floor Restoration &amp; Specialty Care
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* J. OKLAHOMA CITY SERVICE AREAS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreaChecker
            onConfirmQuote={(locationQuery) =>
              onNavigate('quote', { cityOrZip: locationQuery })
            }
          />
        </div>
      </section>

      {/* K. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-[#E9EFF0]/30 border-b border-[#E9EFF0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#147C75] tracking-wide">
              Common Questions
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#142A3C] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#27353D]">
              Straightforward answers based on published company services and planning practices.
            </p>
          </div>

          <div className="bg-white border border-[#E9EFF0] rounded-xl px-6 sm:px-8">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* L. FINAL CONVERSION SECTION */}
      <section className="py-20 sm:py-24 bg-[#142A3C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            A Cleaner Facility Starts With the Right Partner.
          </h2>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business and explore a cleaning plan tailored to your facility.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm sm:text-base font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request Your Commercial Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={COMPANY_INFO.phoneHref}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/18 text-white border border-white/25 text-sm sm:text-base font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

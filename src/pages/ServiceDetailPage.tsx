import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react';
import { RouteId, ServiceItem } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { QuotePrefill } from '../components/QuoteSection';

interface ServicesOverviewPageProps {
  onNavigate: (route: RouteId, prefill?: QuotePrefill) => void;
}

export function ServicesOverviewPage({ onNavigate }: ServicesOverviewPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
              Commercial Facility Services · Oklahoma City
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Commercial Cleaning &amp; Specialty Facility Care
            </h1>
            <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
              Every service program is built exclusively for business and institutional facilities—combining routine janitorial upkeep, daytime porter coverage, targeted disinfection, commercial floor care, and post-construction cleanup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#E9EFF0] last:border-b-0 last:pb-0"
            >
              <div
                className={`lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-[#142A3C] ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  priority={idx === 0}
                  width={1200}
                  height={896}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs font-semibold text-[#147C75] tabular-nums">
                  {service.number} · Commercial Service
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#142A3C]">
                  {service.title}
                </h2>
                <p className="text-base text-[#27353D] leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.scopeItems.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#27353D]">
                      <Check
                        className="w-4 h-4 text-[#147C75] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.id)}
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#142A3C] hover:bg-[#1E3B53] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('quote', { serviceNeeded: service.title })
                    }
                    className="text-sm font-semibold text-[#147C75] hover:text-[#0F635D] cursor-pointer"
                  >
                    Request a Quote for This Service
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (route: RouteId, prefill?: QuotePrefill) => void;
}

export function ServiceDetailPage({ service, onNavigate }: ServiceDetailPageProps) {
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div className="bg-white">
      {/* Breadcrumb & Hero */}
      <section className="bg-[#142A3C] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#E9EFF0]/80 hover:text-white mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to All Commercial Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold text-[#E9EFF0]/75 tabular-nums">
                Service {service.number} · Oklahoma City Commercial Facilities
              </p>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-[#E9EFF0]/90 font-medium">
                {service.headline}
              </p>
              <p className="text-base text-[#E9EFF0]/80 leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('quote', { serviceNeeded: service.title })
                  }
                  className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <span>Request a Quote for {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="min-h-[48px] inline-flex items-center gap-2 px-5 py-3 border border-white/25 text-white hover:bg-white/10 text-sm font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-[#0F2130] border border-white/10">
              <ResilientImage
                src={service.image}
                alt={service.imageAlt}
                priority
                width={1200}
                height={896}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope & Planning */}
      <section className="py-16 sm:py-24 border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#142A3C]">
                What This Commercial Scope Covers
              </h2>
              <ul className="divide-y divide-[#E9EFF0] border-t border-b border-[#E9EFF0]">
                {service.scopeItems.map((item) => (
                  <li key={item} className="py-4 flex items-start gap-3 text-base text-[#27353D]">
                    <Check
                      className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.disclaimer && (
                <p className="text-sm text-[#718A95] bg-[#E9EFF0]/45 border border-[#E9EFF0] rounded-lg p-4">
                  {service.disclaimer}
                </p>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#E9EFF0]/45 border border-[#E9EFF0] rounded-xl p-6 sm:p-8 space-y-5">
                <h2 className="font-display text-xl font-bold text-[#142A3C]">
                  Planning &amp; Scheduling Notes
                </h2>
                <ul className="space-y-3">
                  {service.planningNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5 text-sm text-[#27353D]">
                      <Check
                        className="w-4 h-4 text-[#147C75] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#142A3C]/10">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('quote', { serviceNeeded: service.title })
                    }
                    className="w-full min-h-[44px] px-5 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Discuss {service.shortTitle} for Your Facility
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Services */}
      <section className="py-16 bg-[#E9EFF0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#142A3C] mb-8">
            Related Commercial Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((svc) => (
              <button
                key={svc.id}
                type="button"
                onClick={() => onNavigate(svc.id)}
                className="bg-white border border-[#E9EFF0] hover:border-[#147C75]/50 rounded-xl p-6 text-left transition-colors cursor-pointer group"
              >
                <p className="text-xs font-semibold text-[#718A95] tabular-nums">{svc.number}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-[#142A3C] group-hover:text-[#147C75] transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-[#27353D] line-clamp-2">{svc.summary}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

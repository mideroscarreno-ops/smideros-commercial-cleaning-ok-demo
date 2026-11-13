import { ArrowRight, ArrowUpRight, Briefcase, Check, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { RouteId } from '../types';
import {
  APPROACH_STEPS,
  COMPANY_INFO,
  CREDIBILITY_CLAIMS,
  FAQS,
  IMAGES,
  TESTIMONIALS,
} from '../data/siteData';
import { IndustrySelector } from '../components/IndustrySelector';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { FaqAccordion } from '../components/FaqAccordion';
import { QuotePrefill, QuoteSection } from '../components/QuoteSection';
import { ResilientImage } from '../components/ResilientImage';

interface SubPageProps {
  onNavigate: (route: RouteId, prefill?: QuotePrefill) => void;
  quotePrefill?: QuotePrefill;
}

export function IndustriesPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
            B2B Sector Focus · Commercial Facilities Only
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
            Commercial Cleaning Services of Oklahoma adapts cleaning plans across eleven published commercial and institutional sectors throughout the Oklahoma City market.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustrySelector
            onSelectQuote={(industryName) =>
              onNavigate('quote', { businessType: industryName })
            }
          />
        </div>
      </section>
    </div>
  );
}

export function ApproachPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
            Our Approach · Oklahoma City Commercial Cleaning
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Customized Planning, Inspections &amp; Clear Communication
          </h1>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
            Every commercial property has different traffic flows, floor surfaces, and operational schedules. A four-step process keeps service aligned with your facility’s priorities.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b border-[#E9EFF0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-[#E9EFF0]">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.step}
              className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-4 space-y-1">
                <p className="font-display text-3xl font-bold text-[#147C75] tabular-nums">
                  {step.step}
                </p>
                <h2 className="font-display text-2xl font-bold text-[#142A3C]">
                  {step.title}
                </h2>
              </div>
              <div className="md:col-span-8 space-y-3">
                <p className="font-medium text-[#142A3C] text-base">{step.summary}</p>
                <p className="text-base text-[#27353D] leading-relaxed">{step.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#E9EFF0]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl font-bold text-[#142A3C]">
              Ready to Review Your Facility Requirements?
            </h2>
            <p className="text-base text-[#27353D]">
              Start with either a brief consultation request or a detailed multi-step facility scope.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>Request a Commercial Quote</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}

export function ServiceAreasPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
            Service Coverage
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Oklahoma City &amp; Greater Oklahoma City Area
          </h1>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
            Serving commercial properties from our Oklahoma City office at 7801 N Robinson Avenue, Suite J8. Coverage outside central Oklahoma City is confirmed individually per facility.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreaChecker
            onConfirmQuote={(locationQuery) =>
              onNavigate('quote', { cityOrZip: locationQuery })
            }
          />
        </div>
      </section>
    </div>
  );
}

export function AboutPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
                About Commercial Cleaning Services of Oklahoma
              </p>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Dedicated Commercial Facility Care in Oklahoma City
              </h1>
              <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
                Commercial Cleaning Services of Oklahoma focuses strictly on commercial buildings and business customers. With company-published roots spanning more than 20 years serving the area, the organization builds long-term client relationships through customized service plans and attentive local communication.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-[#0F2130]">
              <ResilientImage
                src={IMAGES.executiveOffice}
                alt="Clean modern corporate boardroom and commercial office space"
                priority
                width={1200}
                height={896}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#142A3C]">
              Built for Long-Term Facility Partnerships
            </h2>
            <p className="text-base text-[#27353D] leading-relaxed">
              Rather than operating as a residential maid service, Commercial Cleaning Services of Oklahoma structures staffing, equipment, and Safety Data Sheets (SDS) practices around commercial work environments—including offices, medical clinics, retail interiors, manufacturing suites, and newly completed build-outs.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                'Oklahoma City office presence at 7801 N Robinson Avenue, Suite J8',
                'Customized service plans across daily, weekly, and monthly schedules',
                'On-site inspections to verify scope alignment',
                'Ongoing employee training focused on commercial facility care',
                'Direct customer communication and rapid response to urgent calls',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-[#27353D]">
                  <Check className="w-4 h-4 text-[#147C75] shrink-0 mt-1" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 bg-[#E9EFF0]/45 border border-[#E9EFF0] rounded-xl p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-[#142A3C]">
              Company-Published Operational Claims
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CREDIBILITY_CLAIMS.map((claim) => (
                <div key={claim.title} className="space-y-1">
                  <div className="flex items-start gap-2">
                    <ShieldCheck
                      className="w-4 h-4 text-[#147C75] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="font-display text-sm font-bold text-[#142A3C]">
                      {claim.title}
                    </p>
                  </div>
                  <p className="text-xs text-[#27353D] leading-relaxed pl-6">
                    {claim.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#718A95] pt-2 border-t border-[#142A3C]/10">
              Note: More than 20 years serving the area and bonded/insured status are presented as published by the company. Contact the office directly for formal documentation or insurance verification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#142A3C]">
              Interested in a Custom Facility Walkthrough?
            </h2>
            <p className="mt-1 text-sm text-[#27353D]">
              Request a commercial quote or reach our Oklahoma City office directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="min-h-[44px] px-6 py-2.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Request a Commercial Quote
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="min-h-[44px] px-5 py-2.5 border border-[#142A3C]/20 text-[#142A3C] hover:bg-[#E9EFF0]/50 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function TestimonialsPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
            Published Client Feedback
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            What Commercial Facility Managers Share
          </h1>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
            Perspectives attributed on the company’s website to commercial operations leaders across distribution, medical services, and production environments.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.id}
                className="bg-[#E9EFF0]/40 border border-[#E9EFF0] rounded-xl p-8 flex flex-col justify-between"
              >
                <blockquote className="text-base text-[#27353D] leading-relaxed">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 pt-4 border-t border-[#142A3C]/10">
                  <p className="font-display text-base font-bold text-[#142A3C]">
                    {item.attribution}
                  </p>
                  <p className="text-xs text-[#718A95] mt-1">{item.sectorContext}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E9EFF0]">
            <p className="text-xs text-[#718A95] max-w-2xl">
              These testimonials reflect role attributions published by Commercial Cleaning Services of Oklahoma and are presented without fabricated personal names, logos, or star ratings.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <span>Request a Commercial Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function FaqsPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
            Facility Planning &amp; Policies
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
            Answers covering commercial property eligibility, cleaning frequencies, floor care, disinfection, and quote preparation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FaqAccordion items={FAQS} />

          <div className="bg-[#E9EFF0]/50 border border-[#E9EFF0] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-lg font-bold text-[#142A3C]">
                Have a Facility-Specific Question?
              </h2>
              <p className="text-sm text-[#27353D] mt-1">
                Confirm details directly at {COMPANY_INFO.phoneDisplay} or start a quote inquiry.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="min-h-[44px] px-5 py-2.5 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Request a Commercial Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function QuotePage({ quotePrefill }: SubPageProps) {
  return (
    <div className="bg-[#E9EFF0]/25">
      <section className="bg-[#142A3C] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
              Commercial Proposals · Oklahoma City
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Request a Commercial Cleaning Quote
            </h1>
            <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
              Choose a quick consultation request or complete the 5-step detailed facility brief. Quotes are tailored per property—no intrusive required pricing disclosures or flat-rate guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteSection prefill={quotePrefill} />
        </div>
      </section>
    </div>
  );
}

export function ContactPage({ onNavigate }: SubPageProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#142A3C] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#E9EFF0]/75 tracking-wide">
            Oklahoma City Office
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Contact {COMPANY_INFO.name}
          </h1>
          <p className="text-base sm:text-lg text-[#E9EFF0]/85 leading-relaxed">
            Reach our Oklahoma City team by phone or email to discuss your commercial facility, confirm service availability, or schedule an on-site walkthrough.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b border-[#E9EFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#142A3C]">
                Direct Commercial Contact
              </h2>
              <p className="text-base text-[#27353D] leading-relaxed">
                For facility cleaning proposals, urgent service calls, or service-area confirmation across Oklahoma City and the Greater Oklahoma City area:
              </p>
            </div>

            <div className="divide-y divide-[#E9EFF0] border-t border-b border-[#E9EFF0]">
              <div className="py-5 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-bold text-[#142A3C]">
                    Office Address
                  </p>
                  <p className="mt-1 text-base text-[#27353D]">
                    {COMPANY_INFO.addressLine1}
                    <br />
                    {COMPANY_INFO.addressLine2}
                    <br />
                    {COMPANY_INFO.cityStateZip}
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-bold text-[#142A3C]">
                    Phone
                  </p>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="mt-1 inline-block text-lg font-semibold text-[#147C75] hover:text-[#0F635D] underline-offset-4 hover:underline"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-bold text-[#142A3C]">
                    Email
                  </p>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="mt-1 inline-block text-base font-semibold text-[#147C75] hover:text-[#0F635D] underline-offset-4 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-base font-bold text-[#142A3C]">
                What Happens Next
              </h3>
              <ol className="space-y-2 text-sm text-[#27353D] list-decimal list-inside">
                <li>Discuss your facility type, location, and cleaning priorities.</li>
                <li>Confirm Oklahoma City / Greater OKC coverage and walkthrough details.</li>
                <li>Receive a customized commercial cleaning scope and schedule proposal.</li>
              </ol>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 bg-[#147C75] hover:bg-[#0F635D] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Open Commercial Quote Builder</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Service Area Check + Separate Employment Notice */}
          <div className="lg:col-span-6 space-y-8">
            <ServiceAreaChecker
              onConfirmQuote={(locationQuery) =>
                onNavigate('quote', { cityOrZip: locationQuery })
              }
            />

            {/* Clearly Separated Employment Section */}
            <div className="bg-[#E9EFF0]/45 border border-[#E9EFF0] rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#142A3C]" aria-hidden="true" />
                <h2 className="font-display text-lg font-bold text-[#142A3C]">
                  Looking for Employment? (Separate Process)
                </h2>
              </div>
              <p className="text-sm text-[#27353D] leading-relaxed">
                Job inquiries are handled separately from commercial customer quote requests. To avoid mixing employment applications with facility proposals, please review official employment information directly on Commercial Cleaning Services of Oklahoma’s website.
              </p>
              <a
                href={COMPANY_INFO.originalWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#142A3C]/20 text-[#142A3C] hover:bg-[#E9EFF0] text-sm font-semibold rounded-lg transition-colors"
              >
                <span>Visit Official Website for Employment Info</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

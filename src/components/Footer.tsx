import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { RouteId } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface FooterProps {
  onNavigate: (route: RouteId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const linkClass =
    'text-sm text-[#E9EFF0]/80 hover:text-white transition-colors duration-150 text-left cursor-pointer';

  return (
    <footer className="bg-[#142A3C] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/15">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <p className="font-display text-lg font-bold tracking-tight text-white">
                {COMPANY_INFO.name}
              </p>
              <p className="mt-2 text-sm text-[#E9EFF0]/75 leading-relaxed max-w-sm">
                B2B commercial janitorial, specialty floor care, day porter, disinfection, and post-construction cleaning tailored to Oklahoma City businesses.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-[#E9EFF0]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#147C75] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {COMPANY_INFO.addressLine1}
                  <br />
                  {COMPANY_INFO.addressLine2}, {COMPANY_INFO.cityStateZip}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#147C75] shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#147C75] shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Commercial Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Commercial Services
            </h2>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className={linkClass}
                >
                  All Commercial Services
                </button>
              </li>
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(svc.id)}
                    className={linkClass}
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Planning Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Planning &amp; Company
            </h2>
            <ul className="space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('industries')} className={linkClass}>
                  Industries We Serve
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('approach')} className={linkClass}>
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-areas')}
                  className={linkClass}
                >
                  Oklahoma City Service Areas
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')} className={linkClass}>
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('testimonials')}
                  className={linkClass}
                >
                  Client Feedback
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('faqs')} className={linkClass}>
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Action & Inquiries Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Next Steps
            </h2>
            <ul className="space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('quote')} className={linkClass}>
                  Request a Commercial Quote
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className={linkClass}>
                  Contact Office
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={COMPANY_INFO.originalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#E9EFF0]/80 hover:text-white transition-colors"
                >
                  <span>Official Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#E9EFF0]/65">
          <div className="space-y-1">
            <p>
              Commercial Facilities Only · Oklahoma City &amp; Greater Oklahoma City Area
            </p>
            <p>
              Employment inquiries are handled separately from client quote requests via the{' '}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="underline hover:text-white cursor-pointer"
              >
                Contact page
              </button>
              .
            </p>
          </div>
          <p className="text-[#E9EFF0]/80 font-medium">{COMPANY_INFO.agencyCredit}</p>
        </div>
      </div>
    </footer>
  );
}

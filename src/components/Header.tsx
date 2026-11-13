import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { RouteId } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface HeaderProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
}

const NAV_ITEMS: { id: RouteId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const isNavActive = (id: RouteId) => {
    if (id === 'services' && currentRoute.startsWith('service-')) return true;
    return currentRoute === id;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9EFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line clean Brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-[#142A3C] whitespace-nowrap shrink-0 hover:text-[#147C75] transition-colors duration-150"
        >
          {COMPANY_INFO.shortName}
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#27353D]"
        >
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(item.id);
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  active
                    ? 'text-[#147C75] font-semibold'
                    : 'text-[#27353D] hover:text-[#142A3C]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0.5 h-0.5 bg-[#147C75] transition-transform duration-150 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action on desktop, menu toggle on mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#147C75] hover:bg-[#0F635D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Commercial Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E9EFF0] text-[#142A3C] hover:bg-[#E9EFF0]/60 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#E9EFF0] bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-6">
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isNavActive(item.id);
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                      setMobileOpen(false);
                    }}
                    className={`min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#E9EFF0] text-[#147C75] font-semibold'
                        : 'text-[#142A3C] hover:bg-[#E9EFF0]/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#718A95]" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#E9EFF0]">
              <p className="px-3 text-xs font-semibold text-[#718A95] mb-2">
                Core Commercial Services
              </p>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES.map((svc) => (
                  <a
                    key={svc.id}
                    href={`#${svc.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(svc.id);
                      setMobileOpen(false);
                    }}
                    className="min-h-[44px] flex items-center px-3 py-2 rounded-lg text-sm text-[#27353D] hover:bg-[#E9EFF0]/50"
                  >
                    {svc.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9EFF0] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onNavigate('quote');
                  setMobileOpen(false);
                }}
                className="w-full min-h-[44px] px-5 py-3 text-sm font-semibold text-white bg-[#147C75] hover:bg-[#0F635D] rounded-lg transition-colors cursor-pointer"
              >
                Request a Commercial Quote
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#142A3C] border border-[#142A3C]/20 rounded-lg hover:bg-[#E9EFF0]/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#147C75]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { RouteId } from './types';
import { COMPANY_INFO, SERVICES } from './data/siteData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage, ServicesOverviewPage } from './pages/ServiceDetailPage';
import {
  AboutPage,
  ApproachPage,
  ContactPage,
  FaqsPage,
  IndustriesPage,
  QuotePage,
  ServiceAreasPage,
  TestimonialsPage,
} from './pages/SubPages';
import { QuotePrefill } from './components/QuoteSection';

const VALID_ROUTES: RouteId[] = [
  'home',
  'services',
  'service-janitorial',
  'service-disinfection',
  'service-porter',
  'service-floor-restoration',
  'service-specialty-floor',
  'service-construction',
  'industries',
  'approach',
  'service-areas',
  'about',
  'testimonials',
  'faqs',
  'quote',
  'contact',
];

function getRouteFromHash(): RouteId {
  const hash = window.location.hash.replace(/^#/, '') as RouteId;
  return VALID_ROUTES.includes(hash) ? hash : 'home';
}

const ROUTE_TITLES: Record<RouteId, string> = {
  home: `${COMPANY_INFO.name} | B2B Janitorial & Facility Care`,
  services: `Commercial Cleaning Services | ${COMPANY_INFO.name}`,
  'service-janitorial': `General Commercial Cleaning | ${COMPANY_INFO.name}`,
  'service-disinfection': `Disinfection Services | ${COMPANY_INFO.name}`,
  'service-porter': `Day Porter Services | ${COMPANY_INFO.name}`,
  'service-floor-restoration': `Floor Restoration | ${COMPANY_INFO.name}`,
  'service-specialty-floor': `Specialty Floor Care | ${COMPANY_INFO.name}`,
  'service-construction': `Construction & Specialty Cleaning | ${COMPANY_INFO.name}`,
  industries: `Industries We Serve | ${COMPANY_INFO.name}`,
  approach: `Our Approach | ${COMPANY_INFO.name}`,
  'service-areas': `Oklahoma City Service Areas | ${COMPANY_INFO.name}`,
  about: `About Us | ${COMPANY_INFO.name}`,
  testimonials: `Client Feedback | ${COMPANY_INFO.name}`,
  faqs: `Frequently Asked Questions | ${COMPANY_INFO.name}`,
  quote: `Request a Commercial Quote | ${COMPANY_INFO.name}`,
  contact: `Contact Us | ${COMPANY_INFO.name}`,
};

export default function App() {
  const [route, setRoute] = useState<RouteId>(() => getRouteFromHash());
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = ROUTE_TITLES[route] || ROUTE_TITLES.home;
  }, [route]);

  const navigate = (nextRoute: RouteId, prefill?: QuotePrefill) => {
    if (prefill) {
      setQuotePrefill(prefill);
    }
    setRoute(nextRoute);
    if (window.location.hash !== `#${nextRoute}`) {
      window.location.hash = nextRoute;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (route === 'home') {
      return <HomePage onNavigate={navigate} />;
    }
    if (route === 'services') {
      return <ServicesOverviewPage onNavigate={navigate} />;
    }
    const matchedService = SERVICES.find((s) => s.id === route);
    if (matchedService) {
      return <ServiceDetailPage service={matchedService} onNavigate={navigate} />;
    }
    switch (route) {
      case 'industries':
        return <IndustriesPage onNavigate={navigate} />;
      case 'approach':
        return <ApproachPage onNavigate={navigate} />;
      case 'service-areas':
        return <ServiceAreasPage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'testimonials':
        return <TestimonialsPage onNavigate={navigate} />;
      case 'faqs':
        return <FaqsPage onNavigate={navigate} />;
      case 'quote':
        return <QuotePage onNavigate={navigate} quotePrefill={quotePrefill} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#27353D]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#142A3C] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        <Header currentRoute={route} onNavigate={(next) => navigate(next)} />

        <main id="main-content" className="flex-1">
          {renderPage()}
        </main>

        <Footer onNavigate={(next) => navigate(next)} />
      </div>
    </MotionConfig>
  );
}

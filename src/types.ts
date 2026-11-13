export type RouteId =
  | 'home'
  | 'services'
  | 'service-janitorial'
  | 'service-disinfection'
  | 'service-porter'
  | 'service-floor-restoration'
  | 'service-specialty-floor'
  | 'service-construction'
  | 'industries'
  | 'approach'
  | 'service-areas'
  | 'about'
  | 'testimonials'
  | 'faqs'
  | 'quote'
  | 'contact';

export interface ServiceItem {
  id:
    | 'service-janitorial'
    | 'service-disinfection'
    | 'service-porter'
    | 'service-floor-restoration'
    | 'service-specialty-floor'
    | 'service-construction';
  number: string;
  title: string;
  shortTitle: string;
  ctaLabel: string;
  summary: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  scopeItems: string[];
  planningNotes: string[];
  disclaimer?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  summary: string;
  considerations: string[];
  typicalFocus: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  summary: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  attribution: string;
  sectorContext: string;
  quote: string;
}

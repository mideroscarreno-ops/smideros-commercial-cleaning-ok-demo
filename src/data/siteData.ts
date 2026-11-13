import { ApproachStep, FaqItem, IndustryItem, ServiceItem, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  name: 'Commercial Cleaning Services of Oklahoma',
  shortName: 'Commercial Cleaning of Oklahoma',
  phoneDisplay: '(405) 767-9049',
  phoneHref: 'tel:+14057679049',
  email: 'info@commercialcleaningok.com',
  emailHref: 'mailto:info@commercialcleaningok.com',
  addressLine1: '7801 N Robinson Avenue',
  addressLine2: 'Suite J8',
  cityStateZip: 'Oklahoma City, OK 73116',
  fullAddress: '7801 N Robinson Avenue, Suite J8, Oklahoma City, OK 73116',
  originalWebsite: 'https://commercialcleaningok.com/',
  agencyCredit: 'Independent website redesign concept by S.Mideros Agency.',
};

export const IMAGES = {
  heroLobby: '/images/hero-corporate-lobby.webp',
  executiveOffice: '/images/service-executive-office.webp',
  floorTerrazzo: '/images/floor-care-terrazzo.webp',
  medicalDisinfection: '/images/service-disinfection-medical.webp',
  postConstruction: '/images/service-post-construction.webp',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-janitorial',
    number: '01',
    title: 'General Commercial Cleaning',
    shortTitle: 'Commercial Janitorial',
    ctaLabel: 'Explore Janitorial Cleaning',
    summary:
      'Consistent commercial cleaning for offices and business facilities on daily, weekly, or monthly schedules.',
    headline: 'Structured Commercial Janitorial Care Built Around Your Operations',
    description:
      'Consistent workplace upkeep supports employee productivity and creates a dependable first impression for clients and visitors. Commercial Cleaning Services of Oklahoma structures general janitorial scopes around each property’s layout, traffic volume, and operating schedule.',
    image: IMAGES.executiveOffice,
    imageAlt: 'Spotless modern corporate conference room and executive office suite',
    scopeItems: [
      'Workstations, conference rooms, lobbies, and reception areas',
      'Restroom cleaning, sanitization, and supply replenishment',
      'Breakrooms, shared kitchens, and common corridors',
      'Trash and recycling collection across office zones',
      'Dusting, glass spot cleaning, vacuuming, and hard-floor mopping',
    ],
    planningNotes: [
      'Available on daily, weekly, or monthly service schedules',
      'Scoped specifically for commercial buildings and business facilities',
      'Supported by on-site inspections and direct customer communication',
    ],
  },
  {
    id: 'service-disinfection',
    number: '02',
    title: 'Disinfection Services',
    shortTitle: 'Disinfection Services',
    ctaLabel: 'Explore Disinfection',
    summary:
      'Facility-specific disinfecting practices including high-touch surface treatment and electrostatic fogging when necessary.',
    headline: 'Targeted High-Touch Surface Treatment & Broader-Area Disinfection',
    description:
      'Shared commercial environments require thoughtful attention to frequently touched fixtures and common spaces. Services focus on facility-specific disinfecting practices tailored to the surfaces and traffic patterns of your property, including electrostatic foggers when necessary.',
    image: IMAGES.medicalDisinfection,
    imageAlt: 'Clean modern medical office reception and clinical corridor',
    scopeItems: [
      'High-touch points including door handles, light switches, railings, and shared counters',
      'Restroom fixtures, breakroom surfaces, and waiting-area seating',
      'Electrostatic fogger application for broader-area coverage when appropriate',
      'Safety Data Sheets (SDS) compliance for products used on site',
    ],
    planningNotes: [
      'Integrated into routine janitorial care or scheduled as a dedicated service',
      'Adapted to office, healthcare, educational, and public-facing properties',
      'Direct communication to align products and procedures with facility needs',
    ],
    disclaimer:
      'Disinfection services follow facility-specific practices and published product guidance; discuss specific clinical or regulatory protocols directly with the company.',
  },
  {
    id: 'service-porter',
    number: '03',
    title: 'Day Porter Services',
    shortTitle: 'Day Porter Services',
    ctaLabel: 'Explore Porter Services',
    summary:
      'On-site daytime support covering lobby upkeep, restroom restocking, trash removal, and meeting-room preparation.',
    headline: 'Attentive Daytime Facility Support During Active Business Hours',
    description:
      'High-traffic buildings often require continuous upkeep while staff, tenants, and guests are on site. Day porter services keep lobbies presentable, restrooms stocked, and shared rooms ready throughout the workday.',
    image: IMAGES.heroLobby,
    imageAlt: 'Modern corporate building lobby with immaculate terrazzo flooring and glass walls',
    scopeItems: [
      'Continuous lobby and main entrance appearance upkeep',
      'Periodic restroom checks, cleaning, and consumable restocking',
      'Ongoing trash removal across high-use common areas',
      'Common-area corridor, elevator, and breakroom tidying',
      'Meeting-room reset and setup assistance between gatherings',
    ],
    planningNotes: [
      'Well suited for multi-tenant offices, dealerships, medical suites, and active lobbies',
      'Coordinates smoothly alongside evening or scheduled janitorial teams',
      'Direct responsiveness to urgent daytime facility calls',
    ],
  },
  {
    id: 'service-floor-restoration',
    number: '04',
    title: 'Floor Restoration',
    shortTitle: 'Floor Restoration',
    ctaLabel: 'Explore Floor Restoration',
    summary:
      'Stripping, refinishing, and sealing services tailored to commercial flooring material and current wear.',
    headline: 'Commercial Floor Stripping, Refinishing & Protective Sealing',
    description:
      'Heavy foot traffic gradually dulls protective coatings and wears down finish layers in commercial hallways, lobbies, and work areas. Floor restoration addresses worn finishes through stripping, sealing, and refinishing methods appropriate for the specific floor substrate.',
    image: IMAGES.floorTerrazzo,
    imageAlt: 'High-gloss polished commercial lobby floor reflecting architectural glass',
    scopeItems: [
      'Removal of aged, scuffed, or yellowed floor finish layers',
      'Thorough base-floor cleaning and preparation prior to recoating',
      'Application of commercial floor sealers and protective finishes',
      'Periodic restoration planning for high-traffic corridors and lobbies',
    ],
    planningNotes: [
      'Methods and expected outcomes depend on floor material and existing condition',
      'Can be scheduled as a standalone project or periodic supplement to janitorial care',
      'Evaluated during an on-site walkthrough prior to quoting',
    ],
    disclaimer:
      'Floor restoration outcomes depend on substrate type, age, and pre-existing wear; an on-site evaluation determines the appropriate treatment.',
  },
  {
    id: 'service-specialty-floor',
    number: '05',
    title: 'Specialty Floor Care',
    shortTitle: 'Specialty Floor Care',
    ctaLabel: 'Explore Floor Care',
    summary:
      'Dedicated maintenance, waxing, and buffing for marble, ceramic, terrazzo, vinyl, and hardwood commercial flooring.',
    headline: 'Surface-Specific Care for Architectural Stone, Tile, Vinyl & Hardwood',
    description:
      'Architectural stone, ceramic tile, terrazzo, vinyl, and hardwood each respond differently to moisture, pH levels, and mechanical agitation. Specialty floor care applies material-appropriate cleaning, waxing, and buffing to preserve appearance and longevity.',
    image: IMAGES.floorTerrazzo,
    imageAlt: 'Architectural detail of polished terrazzo and natural stone commercial flooring',
    scopeItems: [
      'Marble and natural stone surface cleaning and finish care',
      'Terrazzo cleaning, polishing, and protective finish maintenance',
      'Ceramic tile and grout cleaning in lobbies and restrooms',
      'Vinyl composition tile (VCT) waxing, burnishing, and buffing',
      'Commercial hardwood surface cleaning and preservation care',
    ],
    planningNotes: [
      'Product selection aligned with Safety Data Sheets and surface requirements',
      'Preventive buffing schedules reduce the frequency of full stripping cycles',
      'Pairs naturally with routine general janitorial programs',
    ],
  },
  {
    id: 'service-construction',
    number: '06',
    title: 'Construction & Specialty Cleaning',
    shortTitle: 'Construction Cleanup',
    ctaLabel: 'Explore Construction Cleanup',
    summary:
      'Detailed post-construction and renovation cleanup preparing newly finished commercial spaces for occupancy.',
    headline: 'Detailed Post-Construction Cleanup for Commercial Handover',
    description:
      'Once contractors complete build-outs or commercial renovations, fine construction dust, adhesive residue, and surface debris remain across glass, fixtures, and new flooring. Construction and specialty cleaning prepares commercial properties for move-in and client presentation.',
    image: IMAGES.postConstruction,
    imageAlt: 'Newly completed commercial interior atrium following post-construction detailing',
    scopeItems: [
      'Fine particulate dust removal across walls, ledges, vents, and millwork',
      'Interior glass, partition, and window frame detailing',
      'Restroom, breakroom, and fixture final cleanup',
      'Debris clearing and careful initial cleaning of newly installed flooring',
      'Detail work supporting final walkthroughs and tenant turnover',
    ],
    planningNotes: [
      'Ideal for new commercial builds, tenant improvements, and office renovations',
      'Scopes reflect site conditions, build phase, and target handover timeline',
      'Transition smoothly into ongoing janitorial service post-occupancy',
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'auto-dealerships',
    name: 'Auto Dealerships',
    summary:
      'Showroom presentation relies on streak-free floor-to-ceiling glass, spotless display floors, and welcoming customer lounges.',
    considerations: [
      'Showroom tile, polished concrete, or epoxy floor maintenance around display vehicles',
      'High-visibility glass walls, entrance doors, and customer waiting areas',
      'Restroom upkeep and service-drive reception cleanliness during business hours',
    ],
    typicalFocus: 'Showroom Floors · Customer Lounges · Service Reception',
  },
  {
    id: 'banks-financial',
    name: 'Banks & Financial Institutions',
    summary:
      'Branch lobbies, teller counters, and private advisory suites require discreet, dependable cleaning that reflects institutional trust.',
    considerations: [
      'Detailed care for stone, wood, and carpeted client consultation rooms',
      'High-touch sanitization of teller stations, ATM vestibules, and glass partitions',
      'Consistent presentation across member-facing lobbies and back-office work areas',
    ],
    typicalFocus: 'Client Lobbies · Private Offices · ATM Vestibules',
  },
  {
    id: 'construction',
    name: 'Construction',
    summary:
      'General contractors and property developers rely on thorough post-build detailing before handing keys over to commercial tenants.',
    considerations: [
      'Multi-surface dust extraction from trim, cabinetry, ledges, and light fixtures',
      'Removal of stickers, paint specks, and installation residue on interior glass',
      'Careful initial cleaning of newly laid vinyl, tile, terrazzo, or hardwood',
    ],
    typicalFocus: 'Tenant Build-Outs · Final Walkthrough Prep · Newly Installed Surfaces',
  },
  {
    id: 'education-daycare',
    name: 'Education & Daycare',
    summary:
      'Classrooms, hallways, restrooms, and shared activity zones benefit from consistent daily hygiene and floor protection.',
    considerations: [
      'High-touch surface attention on desks, door hardware, and shared tables',
      'Durable floor care for high-traffic corridors, cafeterias, and gymnasiums',
      'Safety Data Sheets compliance and clear product communication with administrators',
    ],
    typicalFocus: 'Classrooms · Common Corridors · Restroom Hygiene',
  },
  {
    id: 'fitness-facilities',
    name: 'Fitness Facilities',
    summary:
      'High-moisture locker rooms, training floors, and shared equipment areas demand disciplined daily upkeep and odor control.',
    considerations: [
      'Thorough locker room, shower, and restroom cleaning and restocking',
      'Rubber, turf, and hard-surface training floor maintenance',
      'Frequent disinfecting attention on reception desks, railings, and shared zones',
    ],
    typicalFocus: 'Locker Rooms · Training Floors · Member Reception',
  },
  {
    id: 'general-offices',
    name: 'General Offices',
    summary:
      'Multi-suite commercial buildings and corporate headquarters depend on reliable schedules customized to staff density and workspace layout.',
    considerations: [
      'Workstations, executive suites, boardrooms, and shared breakrooms',
      'Day porter support for high-traffic lobbies and conference room turnovers',
      'Daily, weekly, or monthly schedules aligned with tenant operations',
    ],
    typicalFocus: 'Corporate Suites · Conference Rooms · Breakrooms',
  },
  {
    id: 'government-facilities',
    name: 'Government Facilities',
    summary:
      'Public-serving administrative buildings and civic offices require structured cleaning plans, reliable staffing, and accountable inspections.',
    considerations: [
      'Consistent upkeep of public waiting areas, service counters, and corridors',
      'Routine restroom sanitization and high-traffic floor maintenance',
      'On-site supervisory checks and responsive point-of-contact communication',
    ],
    typicalFocus: 'Public Lobbies · Administrative Suites · High-Traffic Floors',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    summary:
      'Medical offices, outpatient clinics, and professional care suites demand careful attention to reception areas, exam corridors, and surface disinfection.',
    considerations: [
      'High-touch disinfecting practices across waiting rooms, doors, and counters',
      'Clean, streak-free hard flooring throughout clinical hallways and lobbies',
      'Electrostatic fogging availability when requested for broader-area disinfecting',
    ],
    typicalFocus: 'Medical Reception · Clinical Corridors · High-Touch Surfaces',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    summary:
      'Industrial offices, breakrooms, locker areas, and facility corridors require practical cleaning that accounts for dust, grit, and shift traffic.',
    considerations: [
      'Separating office/administrative upkeep from shop-adjacent entryways',
      'Heavy-duty floor scrubbing and dust control in transition corridors',
      'Breakroom, locker room, and restroom sanitization for multi-shift teams',
    ],
    typicalFocus: 'Facility Offices · Shift Breakrooms · Entry Corridors',
  },
  {
    id: 'retail',
    name: 'Retail',
    summary:
      'Storefronts, fitting areas, and polished aisles shape customer perception from the moment shoppers step inside.',
    considerations: [
      'Entrance glass, display counters, and high-gloss floor presentation',
      'Consistent floor buffing and restoration for vinyl, tile, or concrete aisles',
      'Back-of-house breakroom and restroom cleanliness for retail staff',
    ],
    typicalFocus: 'Sales Floors · Storefront Glass · Customer Restrooms',
  },
  {
    id: 'religious-facilities',
    name: 'Religious Facilities',
    summary:
      'Sanctuaries, fellowship halls, classrooms, and administrative offices host varied weekly gatherings requiring adaptable scheduling.',
    considerations: [
      'Preparation and post-gathering cleanup for sanctuaries and fellowship spaces',
      'Careful maintenance of hardwood, stone, carpet, and multi-use flooring',
      'Flexible weekly or multi-day plans tailored around ministry calendars',
    ],
    typicalFocus: 'Sanctuaries · Fellowship Halls · Multi-Use Classrooms',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand Your Facility',
    summary: 'Discuss the property, business type, and cleaning priorities.',
    details:
      'Every commercial engagement starts by learning how your building operates—who uses the space, what areas carry the most visibility or foot traffic, and which priorities matter most to your management team.',
  },
  {
    step: '02',
    title: 'Evaluate Cleaning Requirements',
    summary: 'Review the facility’s surfaces, size, frequency, and specialty needs.',
    details:
      'We evaluate room types, approximate square footage, flooring materials such as terrazzo, vinyl, ceramic, marble, or hardwood, and whether daily, weekly, monthly, day porter, or disinfection services fit best.',
  },
  {
    step: '03',
    title: 'Prepare a Customized Plan',
    summary: 'Develop a proposed scope and schedule appropriate to the facility.',
    details:
      'Rather than forcing a rigid checklist onto every business, your cleaning plan outlines specific tasks, scheduling cadence, and any periodic floor restoration or specialty detailing required.',
  },
  {
    step: '04',
    title: 'Maintain Communication',
    summary: 'Coordinate ongoing service and address customer concerns.',
    details:
      'Consistent service depends on follow-through. On-site inspections, ongoing employee training, Safety Data Sheets compliance, and rapid response to urgent calls keep your facility team informed and supported.',
  },
];

export const CREDIBILITY_CLAIMS = [
  {
    title: 'More Than 20 Years Serving the Area',
    detail: 'Company-published tenure serving commercial properties across the Oklahoma City market.',
  },
  {
    title: 'Bonded & Insured',
    detail: 'Company-published bonded and insured status for commercial facility engagements.',
  },
  {
    title: 'Ongoing Employee Training',
    detail: 'Staff training focused on commercial cleaning procedures, equipment use, and facility care.',
  },
  {
    title: 'On-Site Inspections',
    detail: 'Routine on-site quality walkthroughs to verify cleaning scope alignment.',
  },
  {
    title: 'Direct Customer Communication',
    detail: 'Accessible local coordination so facility managers can adjust priorities easily.',
  },
  {
    title: 'Safety Data Sheets Compliance',
    detail: 'Published commitment to Safety Data Sheets (SDS) documentation for cleaning agents.',
  },
  {
    title: 'Rapid Response to Urgent Calls',
    detail: 'Responsive attention when unexpected spills, urgent cleanups, or schedule shifts arise.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'distribution-center',
    attribution: 'Distribution Center Manager',
    sectorContext: 'Industrial & Logistics Operations · Oklahoma City',
    quote:
      'Consistent attention across our administrative offices, breakrooms, and high-traffic entryways—combined with responsive communication whenever our facility schedule shifts.',
  },
  {
    id: 'medical-provider',
    attribution: 'Medical Service Provider',
    sectorContext: 'Healthcare Facility · Oklahoma City',
    quote:
      'Dependable, thorough care across patient waiting areas, clinical corridors, and restrooms, giving our staff confidence in how our facility presents every morning.',
  },
  {
    id: 'print-shop',
    attribution: 'Print Shop Manager',
    sectorContext: 'Commercial Production & Office · Oklahoma City',
    quote:
      'Reliable floor upkeep and detailed cleaning around busy production and office spaces without disrupting our daily workflow.',
  },
];

export const FLOOR_MATERIALS = [
  {
    name: 'Marble',
    note: 'Neutral-pH care and surface-appropriate polishing to protect natural veining and finish clarity.',
  },
  {
    name: 'Ceramic',
    note: 'Deep cleaning of tile faces and grout lines in lobbies, restrooms, and commercial kitchens.',
  },
  {
    name: 'Terrazzo',
    note: 'Architectural floor maintenance and finish upkeep tailored to high-traffic lobbies and atriums.',
  },
  {
    name: 'Vinyl',
    note: 'Stripping, sealing, waxing, and high-speed buffing schedules for resilient commercial corridors.',
  },
  {
    name: 'Hardwood',
    note: 'Low-moisture cleaning and protective care suited to executive suites and hospitality interiors.',
  },
  {
    name: 'Commercial Floor Finishes',
    note: 'Periodic recoating and restoration methods selected based on floor material and wear condition.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'properties-served',
    question: 'What types of commercial properties are served?',
    answer:
      'Commercial Cleaning Services of Oklahoma serves business and institutional properties exclusively, including general offices, medical facilities, auto dealerships, banks, retail stores, manufacturing offices, schools and daycares, fitness centers, religious facilities, government buildings, and post-construction sites. Residential house cleaning is not advertised or included in this commercial scope.',
  },
  {
    id: 'schedules-available',
    question: 'Are daily, weekly, and monthly cleaning plans available?',
    answer:
      'Yes. Published service frequencies include daily, weekly, and monthly cleaning schedules. Frequency is matched to your building’s foot traffic, staffing levels, and operational priorities, and details can be confirmed during your consultation.',
  },
  {
    id: 'how-quotes-prepared',
    question: 'How are cleaning quotes prepared?',
    answer:
      'Quotes are customized rather than generated from a flat price sheet. A plan is prepared after reviewing your facility type, approximate square footage, flooring and surface materials, desired cleaning frequency, and any specialty needs such as floor restoration or day porter coverage.',
  },
  {
    id: 'day-porter-includes',
    question: 'What does day porter service include?',
    answer:
      'Published day porter responsibilities include daytime lobby maintenance, restroom restocking and checks, ongoing trash removal, common-area cleaning, and meeting-room setup assistance.',
  },
  {
    id: 'floor-care-added',
    question: 'Can floor care be added to a janitorial plan?',
    answer:
      'Yes. Specialty floor care (for marble, ceramic, terrazzo, vinyl, and hardwood) and periodic floor restoration (stripping, refinishing, and sealing) can be coordinated alongside routine janitorial cleaning or requested as a standalone service.',
  },
  {
    id: 'disinfection-offered',
    question: 'What disinfection services are offered?',
    answer:
      'Services include facility-specific disinfecting practices covering high-touch surfaces and broader areas when appropriate, including the use of electrostatic foggers when necessary. Specific product and procedural questions can be confirmed directly with the team.',
  },
  {
    id: 'post-construction',
    question: 'Is post-construction cleaning available?',
    answer:
      'Yes. Construction and specialty cleaning is available following commercial build-outs, remodels, and renovations to prepare interior spaces for handover and occupancy.',
  },
  {
    id: 'on-site-inspections',
    question: 'Are on-site inspections offered?',
    answer:
      'Yes. The company publishes on-site inspections and ongoing customer communication as part of its service approach to help maintain alignment with each facility’s agreed scope.',
  },
  {
    id: 'areas-served',
    question: 'What areas are served?',
    answer:
      'Primary confirmed coverage is Oklahoma City and the Greater Oklahoma City area. Because exact coverage boundaries are not listed as a fixed radius, service availability is confirmed individually for each facility.',
  },
  {
    id: 'request-quote',
    question: 'How can customers request a quote?',
    answer:
      'You can complete either the Quick Commercial Inquiry or the Detailed Facility Quote walkthrough on this site (demonstration mode), or contact the office directly by phone at (405) 767-9049 or by email at info@commercialcleaningok.com.',
  },
];

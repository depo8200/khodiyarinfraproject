import { COMPANY_CONFIG } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { PROJECT_CATEGORIES } from '../data/projects';
import { FAQS_DATA } from '../data/faqs';

export const BASE_URL = 'https://khodiyarinfraproject.in';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/logoinfra.png`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageSEOData {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  breadcrumbs: BreadcrumbItem[];
  schemaMarkup: Record<string, any>[];
}

// Core business JSON-LD schemas
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: COMPANY_CONFIG.name,
  legalName: COMPANY_CONFIG.name,
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logoinfra.png`,
    caption: `${COMPANY_CONFIG.name} Logo`
  },
  image: `${BASE_URL}/logoinfra.png`,
  description: 'Industrial steel and pre-engineered building (PEB) solutions in Vadodara, Gujarat. Turnkey structural engineering, fabrication, and erection.',
  email: COMPANY_CONFIG.email,
  telephone: COMPANY_CONFIG.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_CONFIG.officeAddress.line1,
    addressLocality: COMPANY_CONFIG.officeAddress.city,
    addressRegion: COMPANY_CONFIG.officeAddress.state,
    postalCode: COMPANY_CONFIG.officeAddress.pincode,
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_CONFIG.phone,
    contactType: 'sales and technical support',
    areaServed: ['IN', 'Gujarat', 'Vadodara'],
    availableLanguage: ['en', 'hi', 'gu']
  },
  sameAs: []
});

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GeneralContractor'],
  '@id': `${BASE_URL}/#localbusiness`,
  name: COMPANY_CONFIG.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logoinfra.png`,
  image: `${BASE_URL}/logoinfra.png`,
  telephone: COMPANY_CONFIG.phone,
  email: COMPANY_CONFIG.email,
  priceRange: '$$$',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, Cheque',
  foundingDate: '2022',
  description: 'Specialist pre-engineered building (PEB) manufacturer and structural steel fabricator based in Halol and serving Vadodara, Gujarat, and across India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_CONFIG.officeAddress.line1,
    addressLocality: COMPANY_CONFIG.officeAddress.city,
    addressRegion: COMPANY_CONFIG.officeAddress.state,
    postalCode: COMPANY_CONFIG.officeAddress.pincode,
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.5029,
    longitude: 73.4719
  },
  areaServed: [
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Halol' },
    { '@type': 'City', name: 'Savli' },
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Structural Steel & PEB Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pre-Engineered Buildings (PEB)',
          description: 'Design, fabrication, and erection of industrial PEB buildings and sheds.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Structural Steel Fabrication',
          description: 'Automated factory steel fabrication using submerged arc welding and CNC plasma profiling.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Heavy Steel Structures',
          description: 'Heavy industrial frameworks, EOT crane girders, and high-bay process plant structures.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Turnkey Erection & Installation',
          description: 'On-site rigging, crane-assisted assembly, laser alignment, and torque bolting.'
        }
      }
    ]
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:30',
      closes: '19:30'
    }
  ]
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: COMPANY_CONFIG.name,
  description: 'Official website of Khodiyar Infraproject, industrial steel and PEB structural solutions in Vadodara, Gujarat.',
  publisher: {
    '@id': `${BASE_URL}/#organization`
  }
});

export const getBreadcrumbsSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const getFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

// Primary route-to-SEO mapper
export function getPageSEO(route: string, slug?: string): PageSEOData {
  switch (route) {
    case 'home':
      return {
        title: 'PEB Manufacturer in Vadodara | Structural Steel Fabrication | KHODIYAR INFRAPROJECT',
        description: 'Leading PEB manufacturer and structural steel fabrication company in Vadodara, Gujarat. Turnkey pre-engineered buildings, heavy steel structures, and erection.',
        canonical: `${BASE_URL}/`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB manufacturer in Vadodara, PEB structure manufacturer Vadodara, PEB company Vadodara, Structural steel fabrication Vadodara, Industrial shed manufacturer Vadodara, Heavy steel structure fabrication Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          getWebSiteSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/#webpage`,
            url: `${BASE_URL}/`,
            name: 'PEB Manufacturer in Vadodara | Structural Steel Fabrication | KHODIYAR INFRAPROJECT',
            isPartOf: { '@id': `${BASE_URL}/#website` },
            about: { '@id': `${BASE_URL}/#organization` }
          }
        ]
      };

    case 'about':
      return {
        title: 'About Khodiyar Infraproject | Industrial Steel Fabricator Gujarat',
        description: 'Established in 2022 in Halol & Vadodara, Gujarat. 7+ years of engineering experience and 2,000+ tons of executed structural steel work with single-source accountability.',
        canonical: `${BASE_URL}/about`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'About Khodiyar Infraproject, PEB company Vadodara history, structural steel company Gujarat, industrial fabricator Halol',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'About Us', url: `${BASE_URL}/about` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            url: `${BASE_URL}/about`,
            name: 'About Khodiyar Infraproject',
            description: 'Established in 2022 with 7+ years of expertise and 2,000+ tons of completed structural steel work in Gujarat, India.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'About Us', url: `${BASE_URL}/about` }
          ])
        ]
      };

    case 'services':
      return {
        title: 'PEB & Structural Steel Services in Vadodara | KHODIYAR INFRAPROJECT',
        description: 'Comprehensive industrial steel services in Vadodara, Gujarat: In-house design, factory fabrication, PEB buildings, heavy structures, logistics, and turnkey erection.',
        canonical: `${BASE_URL}/services`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB services Vadodara, structural steel services Gujarat, steel fabrication Halol, industrial shed erection, turnkey PEB solutions',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Services', url: `${BASE_URL}/services` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/services`,
            name: 'Industrial Structural Steel & PEB Services'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Services', url: `${BASE_URL}/services` }
          ])
        ]
      };

    case 'service-detail': {
      const service = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[0];
      const serviceCanonical = `${BASE_URL}/service/${service.slug}`;

      let specificTitle = `${service.title} in Vadodara, Gujarat | KHODIYAR INFRAPROJECT`;
      let specificDesc = service.shortDesc;

      if (service.slug === 'peb-buildings') {
        specificTitle = 'PEB Building Manufacturer in Vadodara, Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Turnkey pre-engineered building (PEB) manufacturer in Vadodara & Gujarat. Custom industrial sheds, factory buildings, and warehouses engineered to IS 800 standards.';
      } else if (service.slug === 'factory-fabrication') {
        specificTitle = 'Structural Steel Fabrication in Vadodara & Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'High-precision structural steel fabrication in Vadodara, Gujarat. Automated submerged arc welding (SAW), CNC plasma profiling, and heavy steel fabrication.';
      } else if (service.slug === 'heavy-structures') {
        specificTitle = 'Heavy Steel Structure Fabrication Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Heavy steel structure fabrication and erection in Gujarat. High-capacity EOT crane girders, built-up columns, and industrial process plant frameworks.';
      } else if (service.slug === 'turnkey-erection') {
        specificTitle = 'Turnkey PEB & Steel Structure Erection Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Turnkey structural steel and PEB erection services in Vadodara & Gujarat. Certified rigging crews, crane-assisted assembly, and safety-first execution.';
      } else if (service.slug === 'modular-structures') {
        specificTitle = 'Industrial Modular Steel Structures Vadodara | KHODIYAR INFRAPROJECT';
        specificDesc = 'Industrial modular steel structures, site offices, and control cabins in Vadodara, Gujarat. Rapid fabrication, scalable layouts, and fast on-site assembly.';
      } else if (service.slug === 'in-house-design') {
        specificTitle = 'PEB Design & Structural Engineering Detailing | KHODIYAR INFRAPROJECT';
        specificDesc = 'In-house 3D BIM structural analysis, Staad.Pro engineering, and Design-for-Manufacture (DFM) optimization complying with IS 800, IS 875, and IS 1893 codes.';
      } else if (service.slug === 'logistics') {
        specificTitle = 'Synchronized PEB Material Logistics Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Sequenced Just-in-Time (JIT) steel logistics coordinated directly with site erection schedules. Eliminates job-site clutter, double handling, and project delays.';
      } else if (service.slug === 'erection-and-installation') {
        specificTitle = 'Steel Structure Erection & PEB Installation | KHODIYAR INFRAPROJECT';
        specificDesc = 'Precision on-site steel structure erection and PEB installation across Gujarat. Laser alignment, calibrated torque bolting, and strict safety compliance.';
      }

      return {
        title: specificTitle,
        description: specificDesc,
        canonical: serviceCanonical,
        ogType: 'article',
        ogImage: service.heroImage?.startsWith('http') ? service.heroImage : `${BASE_URL}${service.heroImage}`,
        keywords: `${service.title} Vadodara, ${service.title} Gujarat, PEB ${service.title}, steel ${service.title}`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Services', url: `${BASE_URL}/services` },
          { name: service.title, url: serviceCanonical }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            serviceType: service.category,
            description: service.shortDesc,
            provider: {
              '@id': `${BASE_URL}/#organization`
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Gujarat'
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Services', url: `${BASE_URL}/services` },
            { name: service.title, url: serviceCanonical }
          ])
        ]
      };
    }

    case 'industries':
      return {
        title: 'Industrial Sectors & Steel Building Solutions | KHODIYAR INFRAPROJECT',
        description: 'Engineered structural steel and PEB solutions for manufacturing plants, PEB warehouses, cold storage facilities, workshops, and heavy industrial buildings across Gujarat.',
        canonical: `${BASE_URL}/industries`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Industrial sectors Gujarat, cold storage steel structures Vadodara, manufacturing plant shed, PEB warehouse Gujarat, workshop steel structures',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Industries', url: `${BASE_URL}/industries` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: `${BASE_URL}/industries`,
            name: 'Industrial Sectors & Building Solutions'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Industries', url: `${BASE_URL}/industries` }
          ])
        ]
      };

    case 'projects':
      return {
        title: 'Industrial Steel & PEB Projects Gujarat | KHODIYAR INFRAPROJECT',
        description: 'Explore structural steel and PEB project capabilities including manufacturing plants, high-bay warehouses, cold storages, and heavy structures in Gujarat.',
        canonical: `${BASE_URL}/projects`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB projects Gujarat, steel structure projects Vadodara, industrial shed portfolio, warehouse construction Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Projects', url: `${BASE_URL}/projects` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/projects`,
            name: 'Industrial Steel & PEB Project Categories'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Projects', url: `${BASE_URL}/projects` }
          ])
        ]
      };

    case 'project-detail': {
      const project = PROJECT_CATEGORIES.find(p => p.slug === slug) || PROJECT_CATEGORIES[0];
      const projectCanonical = `${BASE_URL}/project/${project.slug}`;

      let specificTitle = `${project.title} in Gujarat | KHODIYAR INFRAPROJECT`;
      let specificDesc = project.summary;

      if (project.slug === 'manufacturing-plants-factories') {
        specificTitle = 'Manufacturing Plants & Factory Buildings Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'High-bay manufacturing plants and industrial factory buildings engineered with heavy EOT crane provisions and wide clear spans in Vadodara, Gujarat.';
      } else if (project.slug === 'peb-warehouses') {
        specificTitle = 'PEB Warehouses & Logistics Hubs Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Clear-span PEB warehouses and logistics distribution centers in Gujarat. High-volume storage design, loading canopies, and rapid erection.';
      } else if (project.slug === 'cold-storage-structures') {
        specificTitle = 'Cold Storage Steel Structures in Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Specialized structural steel frames for cold storage facilities in Gujarat. Zero thermal bridging, high-bay racking, and insulated PUF panel integration.';
      } else if (project.slug === 'heavy-steel-structures') {
        specificTitle = 'Heavy Industrial Steel Structures Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Heavy industrial steel building design and fabrication. Heavy crane gantries, process towers, and high-load structural frameworks in Gujarat.';
      } else if (project.slug === 'industrial-buildings') {
        specificTitle = 'Turnkey Industrial Building Construction Gujarat | KHODIYAR INFRAPROJECT';
        specificDesc = 'Industrial building construction and structural steel engineering in Vadodara & Gujarat. Single-source design, fabrication, and erection.';
      } else if (project.slug === 'modular-structures') {
        specificTitle = 'Modular Industrial Steel Structures | KHODIYAR INFRAPROJECT';
        specificDesc = 'Prefabricated modular steel buildings, site offices, and supervisory cabins in Gujarat. Scalable, durable, and rapidly deployable.';
      } else if (project.slug === 'workshops-industrial-garages') {
        specificTitle = 'Industrial Workshops & Steel Sheds Vadodara | KHODIYAR INFRAPROJECT';
        specificDesc = 'Durable steel workshop sheds, utility buildings, and industrial garages in Vadodara, Halol, and Gujarat. High clearance and optimal equipment layouts.';
      }

      return {
        title: specificTitle,
        description: specificDesc,
        canonical: projectCanonical,
        ogType: 'article',
        ogImage: project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`,
        keywords: `${project.title} Gujarat, ${project.category} steel structure, PEB ${project.title}`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Projects', url: `${BASE_URL}/projects` },
          { name: project.title, url: projectCanonical }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: projectCanonical,
            name: specificTitle,
            description: specificDesc
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Projects', url: `${BASE_URL}/projects` },
            { name: project.title, url: projectCanonical }
          ])
        ]
      };
    }

    case 'why-choose-us':
      return {
        title: 'Why Choose Khodiyar Infraproject | PEB Contractor Vadodara',
        description: 'Single-source structural accountability: 7+ years of experience, 2,000+ tons executed, in-house design, factory fabrication, synchronized JIT logistics, and erection.',
        canonical: `${BASE_URL}/why-choose-us`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Why choose Khodiyar Infraproject, single-source PEB contractor, steel contractor Vadodara, PEB benefits Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Why Choose Us', url: `${BASE_URL}/why-choose-us` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            url: `${BASE_URL}/why-choose-us`,
            name: 'Why Choose Khodiyar Infraproject'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Why Choose Us', url: `${BASE_URL}/why-choose-us` }
          ])
        ]
      };

    case 'faqs':
      return {
        title: 'PEB & Structural Steel FAQs | Questions Answered | KHODIYAR INFRAPROJECT',
        description: 'Frequently asked questions on pre-engineered buildings (PEB), cost estimation, EOT crane capacity, cold storage structures, and timelines in Gujarat.',
        canonical: `${BASE_URL}/faqs`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB FAQ, pre-engineered building questions, industrial shed costs Vadodara, steel structure erection FAQ',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'FAQs', url: `${BASE_URL}/faqs` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          getFAQSchema(),
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'FAQs', url: `${BASE_URL}/faqs` }
          ])
        ]
      };

    case 'contact':
      return {
        title: 'Contact Khodiyar Infraproject | PEB Manufacturer Vadodara',
        description: 'Get in touch for industrial PEB buildings, fabrication, or tender quotes. Office in Halol / Vadodara, Gujarat. Phone: +91 9099818956, Email: khodiyarinfraproject@gmail.com.',
        canonical: `${BASE_URL}/contact`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Contact Khodiyar Infraproject, PEB inquiry Vadodara, structural steel quotation Gujarat, industrial shed tender Halol',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Contact Us', url: `${BASE_URL}/contact` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: `${BASE_URL}/contact`,
            name: 'Contact Khodiyar Infraproject',
            telephone: COMPANY_CONFIG.phone,
            email: COMPANY_CONFIG.email
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Contact Us', url: `${BASE_URL}/contact` }
          ])
        ]
      };

    default:
      return getPageSEO('home');
  }
}

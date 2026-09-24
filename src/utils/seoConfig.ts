import { COMPANY_CONFIG } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { PROJECT_CATEGORIES } from '../data/projects';
import { FAQS_DATA } from '../data/faqs';
import { getKnowledgeArticleBySlug } from '../data/knowledgeHub';
import { getIndustryInsightBySlug } from '../data/industryInsights';

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

    case 'resources':
      return {
        title: 'PEB & Structural Steel Resources | KHODIYAR INFRAPROJECT',
        description: 'Comprehensive engineering resources, technical PEB guides, structural planning tools, checklists, and industrial steel insights from Khodiyar Infraproject in Vadodara, Gujarat.',
        canonical: `${BASE_URL}/resources`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB resources, structural steel guide, pre-engineered buildings knowledge hub, industrial shed planning tools, Vadodara, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources`,
            name: 'Khodiyar Infraproject Resource Ecosystem',
            description: 'Engineering and technical resource foundation for pre-engineered buildings, steel fabrication, and industrial construction.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` }
          ])
        ]
      };

    case 'resources/knowledge-hub':
      return {
        title: 'PEB Knowledge Hub & Technical Guides | KHODIYAR INFRAPROJECT',
        description: 'In-depth engineering articles on Pre-Engineered Buildings, IS 800:2007 steel design, industrial warehouse planning, crane load calculation, and erection standards in Gujarat.',
        canonical: `${BASE_URL}/resources/knowledge-hub`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB knowledge hub, structural engineering guides, IS 800 2007 steel design, industrial warehouse planning, crane load calculation',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/knowledge-hub`,
            name: 'PEB Knowledge Hub & Technical Guides',
            description: 'Technical education and engineering foundation for industrial structural steel and pre-engineered buildings.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` }
          ])
        ]
      };

    case 'resources/free-resources':
      return {
        title: 'Free PEB Planning Resources, Guides & Checklists | KHODIYAR INFRAPROJECT',
        description: 'Downloadable procurement guides, PEB tender scope checklists, site execution standards, and structural steel glossary for industrial builders in Vadodara, Gujarat.',
        canonical: `${BASE_URL}/resources/free-resources`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB buyer guide, industrial construction checklist, tender scope checklist, structural steel glossary, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/free-resources`,
            name: 'Free PEB Planning Resources & Checklists',
            description: 'Practical engineering toolkits, procurement guides, site checklists, and terminology references.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` }
          ])
        ]
      };

    case 'resources/free-resources/peb-buyer-guide':
    case 'resources/free-resources/buyer-guide':
      return {
        title: 'PEB Buyer & Technical Decision Guide | Free Resources | KHODIYAR INFRAPROJECT',
        description: 'Comprehensive procurement reference for factory owners & project heads: structural parameters, clear spans, crane planning, IS 2062 mill tests, and vendor evaluation.',
        canonical: `${BASE_URL}/resources/free-resources/peb-buyer-guide`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB buyer guide, pre engineered building procurement, buy industrial shed Gujarat, PEB quotation evaluation, Vadodara steel',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
          { name: 'PEB Buyer Guide', url: `${BASE_URL}/resources/free-resources/peb-buyer-guide` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'PEB Buyer & Technical Decision Guide',
            description: 'Engineering and procurement reference guide for industrial promoters and factory owners evaluating Pre-Engineered Building solutions.',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/free-resources/peb-buyer-guide`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
            { name: 'PEB Buyer Guide', url: `${BASE_URL}/resources/free-resources/peb-buyer-guide` }
          ])
        ]
      };

    case 'resources/free-resources/project-checklist':
      return {
        title: 'PEB Project Execution & Site Checklist | Free Resources | KHODIYAR INFRAPROJECT',
        description: 'Field-tested 35+ point checklist for industrial site readiness: civil foundation pedestals, trailer access roads, anchor bolt surveys, and crane erection safety.',
        canonical: `${BASE_URL}/resources/free-resources/project-checklist`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB project checklist, industrial site readiness, anchor bolt survey tolerance, trailer access clearance, Gujarat PEB erection',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
          { name: 'PEB Project Checklist', url: `${BASE_URL}/resources/free-resources/project-checklist` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemPage',
            name: 'PEB Project Execution & Site Checklist',
            description: 'Field-tested checklist covering pre-construction verification, civil foundation coordination, and erection safety controls.',
            url: `${BASE_URL}/resources/free-resources/project-checklist`
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
            { name: 'PEB Project Checklist', url: `${BASE_URL}/resources/free-resources/project-checklist` }
          ])
        ]
      };

    case 'resources/free-resources/peb-requirement-checklist':
    case 'resources/free-resources/requirement-checklist':
      return {
        title: 'PEB Quotation Requirement Checklist (20 Categories) | KHODIYAR INFRAPROJECT',
        description: 'Structured 20-category questionnaire for preparing RFQ tenders: building dimensions, crane capacities, wind parameters, roof profiles, and insulation.',
        canonical: `${BASE_URL}/resources/free-resources/peb-requirement-checklist`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB requirement checklist, PEB RFQ questionnaire, pre engineered building tender data, steel quotation brief, Vadodara',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
          { name: 'PEB Requirement Checklist', url: `${BASE_URL}/resources/free-resources/peb-requirement-checklist` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemPage',
            name: 'PEB Quotation Requirement Checklist',
            description: 'Standardized technical questionnaire helping project architects articulate precise structural requirements.',
            url: `${BASE_URL}/resources/free-resources/peb-requirement-checklist`
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
            { name: 'PEB Requirement Checklist', url: `${BASE_URL}/resources/free-resources/peb-requirement-checklist` }
          ])
        ]
      };

    case 'resources/free-resources/peb-terminology-guide':
      return {
        title: 'PEB & Structural Steel Terminology Guide (35+ Terms) | KHODIYAR INFRAPROJECT',
        description: 'Comprehensive engineering glossary defining primary framing, secondary purlins, HSFG bolts, sag rods, clear spans, and erection terminology in plain language.',
        canonical: `${BASE_URL}/resources/free-resources/peb-terminology-guide`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB terminology, structural steel glossary, purlin definition, girt steel, HSFG bolt, eave height, Gujarat steel terms',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
          { name: 'PEB Terminology Guide', url: `${BASE_URL}/resources/free-resources/peb-terminology-guide` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'Pre-Engineered Building & Structural Steel Terminology Guide',
            description: 'Glossary demystifying technical steel terminology for industrial promoters and project engineers.',
            url: `${BASE_URL}/resources/free-resources/peb-terminology-guide`
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
            { name: 'PEB Terminology Guide', url: `${BASE_URL}/resources/free-resources/peb-terminology-guide` }
          ])
        ]
      };

    case 'resources/free-resources/planning-guide':
      return {
        title: '15-Step PEB Project Planning Guide | Free Resources | KHODIYAR INFRAPROJECT',
        description: 'Sequential roadmap for industrial building projects: site investigation, clear heights, quotation comparison, factory fabrication, logistics, and erection.',
        canonical: `${BASE_URL}/resources/free-resources/planning-guide`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB project planning, industrial building step by step, warehouse construction sequence, PEB erection stages, Vadodara, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
          { name: 'Planning Guide', url: `${BASE_URL}/resources/free-resources/planning-guide` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Step-by-Step PEB Project Planning Guide',
            description: 'Sequential 15-step planning framework for industrial building construction.',
            totalTime: 'P90D',
            url: `${BASE_URL}/resources/free-resources/planning-guide`
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Free Resources', url: `${BASE_URL}/resources/free-resources` },
            { name: 'Planning Guide', url: `${BASE_URL}/resources/free-resources/planning-guide` }
          ])
        ]
      };

    case 'resources/tools':
      return {
        title: 'Structural Steel & PEB Planning Tools | KHODIYAR INFRAPROJECT',
        description: 'Interactive engineering calculators and steel tonnage estimators for industrial warehouses, factory sheds, and heavy structures in Vadodara and Gujarat.',
        canonical: `${BASE_URL}/resources/tools`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB planning tools, structural steel calculator, steel tonnage estimator, warehouse dimension planner, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Tools', url: `${BASE_URL}/resources/tools` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/tools`,
            name: 'Structural Steel & PEB Planning Tools',
            description: 'Interactive calculators and preliminary sizing tools for structural steel projects.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Tools', url: `${BASE_URL}/resources/tools` }
          ])
        ]
      };

    case 'resources/tools/structural-estimator':
      return {
        title: 'Structural Steel & PEB Tonnage Estimator | KHODIYAR INFRAPROJECT',
        description: 'Calculate preliminary structural steel tonnage for your warehouse, factory shed, or industrial facility based on IS 800:2007 loading norms in Gujarat.',
        canonical: `${BASE_URL}/resources/tools/structural-estimator`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Structural estimator, PEB tonnage calculator, industrial shed steel weight calculator, warehouse steel estimator',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Tools', url: `${BASE_URL}/resources/tools` },
          { name: 'Structural Estimator', url: `${BASE_URL}/resources/tools/structural-estimator` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            url: `${BASE_URL}/resources/tools/structural-estimator`,
            name: 'Structural Steel & PEB Tonnage Estimator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'All'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Tools', url: `${BASE_URL}/resources/tools` },
            { name: 'Structural Estimator', url: `${BASE_URL}/resources/tools/structural-estimator` }
          ])
        ]
      };

    case 'resources/tools/peb-requirement-estimator':
      return {
        title: 'PEB Requirement Estimator | Interactive Planning Tools | KHODIYAR INFRAPROJECT',
        description: 'Organize preliminary technical parameters, clear spans, eave heights, overhead cranes, and operational features for your industrial warehouse or factory in Gujarat.',
        canonical: `${BASE_URL}/resources/tools/peb-requirement-estimator`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB requirement estimator, industrial building requirements, warehouse clear span calculator, factory shed scoping tool, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Tools', url: `${BASE_URL}/resources/tools` },
          { name: 'PEB Requirement Estimator', url: `${BASE_URL}/resources/tools/peb-requirement-estimator` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            url: `${BASE_URL}/resources/tools/peb-requirement-estimator`,
            name: 'PEB Requirement & Scope Estimator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'All'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Tools', url: `${BASE_URL}/resources/tools` },
            { name: 'PEB Requirement Estimator', url: `${BASE_URL}/resources/tools/peb-requirement-estimator` }
          ])
        ]
      };

    case 'resources/tools/project-planning-tool':
      return {
        title: 'PEB Project Planning Tool | 12-Step Execution Roadmap | KHODIYAR INFRAPROJECT',
        description: 'Interactive 12-step planning framework covering building geometry, site logistics, trailer access, document readiness, and fabricator procurement synchronization.',
        canonical: `${BASE_URL}/resources/tools/project-planning-tool`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB project planning tool, industrial shed roadmap, warehouse execution checklist, PEB procurement steps, Vadodara, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Tools', url: `${BASE_URL}/resources/tools` },
          { name: 'Project Planning Tool', url: `${BASE_URL}/resources/tools/project-planning-tool` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            url: `${BASE_URL}/resources/tools/project-planning-tool`,
            name: 'PEB Project Planning & Roadmap Tool',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'All'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Tools', url: `${BASE_URL}/resources/tools` },
            { name: 'Project Planning Tool', url: `${BASE_URL}/resources/tools/project-planning-tool` }
          ])
        ]
      };

    case 'resources/company-industry-insights':
      return {
        title: 'Company & Industry Insights | KHODIYAR INFRAPROJECT',
        description: 'Authoritative perspectives on industrial steel fabrication, Pre-Engineered Building (PEB) advancements, regional infrastructure corridors in Gujarat, and verified milestones.',
        canonical: `${BASE_URL}/resources/company-industry-insights`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Company insights, industrial steel market Gujarat, PEB advancements Vadodara, industrial infrastructure Halol',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Company Insights', url: `${BASE_URL}/resources/company-industry-insights` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/company-industry-insights`,
            name: 'Company & Industry Insights',
            description: 'Perspectives on industrial steel fabrication, Pre-Engineered Building advancements, and verified company milestones.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` }
          ])
        ]
      };

    case 'resources/company-industry-insights/company-updates':
      return {
        title: 'Company Updates & Announcements | KHODIYAR INFRAPROJECT',
        description: 'Official corporate developments, fabrication equipment additions, quality certifications, and facility milestones from Khodiyar Infraproject in Gujarat.',
        canonical: `${BASE_URL}/resources/company-industry-insights/company-updates`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Khodiyar Infraproject company updates, corporate announcements, steel fabrication milestones, Halol Vadodara',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
          { name: 'Company Updates', url: `${BASE_URL}/resources/company-industry-insights/company-updates` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/company-industry-insights/company-updates`,
            name: 'Company Updates & Announcements',
            description: 'Verified corporate updates and official announcements from Khodiyar Infraproject.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
            { name: 'Company Updates', url: `${BASE_URL}/resources/company-industry-insights/company-updates` }
          ])
        ]
      };

    case 'resources/company-industry-insights/industry-insights':
      return {
        title: 'PEB & Industrial Construction Insights (20 Articles) | KHODIYAR INFRAPROJECT',
        description: 'Field-tested perspectives on structural steel fabrication, warehouse planning, crane load design, quotation audits, and quality control in Gujarat.',
        canonical: `${BASE_URL}/resources/company-industry-insights/industry-insights`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Industry insights, PEB construction articles, warehouse planning guide, structural steel fabrication insights, Gujarat industrial construction',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
          { name: 'Industry Insights', url: `${BASE_URL}/resources/company-industry-insights/industry-insights` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/company-industry-insights/industry-insights`,
            name: 'PEB & Industrial Construction Insights',
            description: 'Educational articles and technical perspectives on pre-engineered steel buildings.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
            { name: 'Industry Insights', url: `${BASE_URL}/resources/company-industry-insights/industry-insights` }
          ])
        ]
      };

    case 'resources/company-industry-insights/industry-insights-article': {
      const insight = getIndustryInsightBySlug(slug);
      if (!insight) {
        return getPageSEO('resources/company-industry-insights/industry-insights');
      }
      return {
        title: `${insight.title} | KHODIYAR INFRAPROJECT`,
        description: insight.summary,
        canonical: `${BASE_URL}/resources/company-industry-insights/industry-insights/${insight.slug}`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: `${insight.title}, ${insight.category}, PEB industrial insights, pre-engineered buildings, Vadodara, Halol`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
          { name: 'Industry Insights', url: `${BASE_URL}/resources/company-industry-insights/industry-insights` },
          { name: insight.title, url: `${BASE_URL}/resources/company-industry-insights/industry-insights/${insight.slug}` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: insight.title,
            description: insight.summary,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/company-industry-insights/industry-insights/${insight.slug}`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
            { name: 'Industry Insights', url: `${BASE_URL}/resources/company-industry-insights/industry-insights` },
            { name: insight.title, url: `${BASE_URL}/resources/company-industry-insights/industry-insights/${insight.slug}` }
          ])
        ]
      };
    }

    case 'resources/company-industry-insights/case-studies':
    case 'resources/company-industry-insights/case-studies-article':
      return {
        title: 'Verified Project Case Studies | KHODIYAR INFRAPROJECT',
        description: 'Audited structural engineering retrospectives detailing span calculations, steel tonnage, connection engineering, and erection milestones in Gujarat.',
        canonical: `${BASE_URL}/resources/company-industry-insights/case-studies`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB case studies, structural steel project records, warehouse case study, factory shed execution, Gujarat steel projects',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
          { name: 'Case Studies', url: `${BASE_URL}/resources/company-industry-insights/case-studies` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/company-industry-insights/case-studies`,
            name: 'Verified Project Case Studies',
            description: 'Audited project execution records and structural engineering retrospectives.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Company & Industry Insights', url: `${BASE_URL}/resources/company-industry-insights` },
            { name: 'Case Studies', url: `${BASE_URL}/resources/company-industry-insights/case-studies` }
          ])
        ]
      };

    case 'resources/knowledge-hub/peb-guides':
      return {
        title: 'PEB Guides & Fundamentals | Knowledge Hub | KHODIYAR INFRAPROJECT',
        description: 'Explore 10 foundational guides on Pre-Engineered Buildings (PEBs): structural design, tapered members, warehouse planning, fabrication, and erection.',
        canonical: `${BASE_URL}/resources/knowledge-hub/peb-guides`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB guides, what is PEB, pre-engineered buildings fundamentals, PEB construction process, warehouse planning',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'PEB Guides', url: `${BASE_URL}/resources/knowledge-hub/peb-guides` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/knowledge-hub/peb-guides`,
            name: 'PEB Guides & Fundamentals',
            description: 'Educational resources and guides explaining pre-engineered steel buildings, structural components, and construction stages.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'PEB Guides', url: `${BASE_URL}/resources/knowledge-hub/peb-guides` }
          ])
        ]
      };

    case 'resources/knowledge-hub/peb-guides-article': {
      const article = getKnowledgeArticleBySlug(slug || '');
      if (!article) return getPageSEO('resources/knowledge-hub/peb-guides');
      return {
        title: `${article.title} | PEB Knowledge Hub | KHODIYAR INFRAPROJECT`,
        description: article.summary,
        canonical: `${BASE_URL}/resources/knowledge-hub/peb-guides/${article.slug}`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: `${article.title}, PEB guide, pre-engineered buildings, steel construction, Gujarat`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'PEB Guides', url: `${BASE_URL}/resources/knowledge-hub/peb-guides` },
          { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/peb-guides/${article.slug}` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/knowledge-hub/peb-guides/${article.slug}`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'PEB Guides', url: `${BASE_URL}/resources/knowledge-hub/peb-guides` },
            { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/peb-guides/${article.slug}` }
          ])
        ]
      };
    }

    case 'resources/knowledge-hub/technical-articles':
      return {
        title: 'Structural Steel Technical Articles | Knowledge Hub | KHODIYAR INFRAPROJECT',
        description: 'In-depth engineering papers on Indian Standard steel codes (IS 800:2007), Submerged Arc Welding (AWS D1.1), purlin continuous nesting, and bracing mechanics.',
        canonical: `${BASE_URL}/resources/knowledge-hub/technical-articles`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Structural steel technical articles, IS 800:2007, purlins and girts, SAW welding, crane surge loads, clear span engineering',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Technical Articles', url: `${BASE_URL}/resources/knowledge-hub/technical-articles` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/knowledge-hub/technical-articles`,
            name: 'Structural Steel Technical Articles',
            description: 'Engineering-focused articles on structural steel framing, fabrication standards, and quality testing.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Technical Articles', url: `${BASE_URL}/resources/knowledge-hub/technical-articles` }
          ])
        ]
      };

    case 'resources/knowledge-hub/technical-articles-article': {
      const article = getKnowledgeArticleBySlug(slug || '');
      if (!article) return getPageSEO('resources/knowledge-hub/technical-articles');
      return {
        title: `${article.title} | Technical Articles | KHODIYAR INFRAPROJECT`,
        description: article.summary,
        canonical: `${BASE_URL}/resources/knowledge-hub/technical-articles/${article.slug}`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: `${article.title}, structural engineering, IS 800, steel fabrication, PEB quality control`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Technical Articles', url: `${BASE_URL}/resources/knowledge-hub/technical-articles` },
          { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/technical-articles/${article.slug}` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: article.title,
            description: article.summary,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/knowledge-hub/technical-articles/${article.slug}`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Technical Articles', url: `${BASE_URL}/resources/knowledge-hub/technical-articles` },
            { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/technical-articles/${article.slug}` }
          ])
        ]
      };
    }

    case 'resources/knowledge-hub/cost-planning':
      return {
        title: 'PEB Cost, Budgeting & Project Planning | Knowledge Hub | KHODIYAR INFRAPROJECT',
        description: 'Comprehensive guides on PEB cost factors, structural steel tonnage, quotation checklists, foundation requirements, and project planning in Gujarat.',
        canonical: `${BASE_URL}/resources/knowledge-hub/cost-planning`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB cost factors, PEB building budget, industrial shed quotation checklist, PEB project planning, steel building cost Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Cost & Planning', url: `${BASE_URL}/resources/knowledge-hub/cost-planning` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/knowledge-hub/cost-planning`,
            name: 'PEB Cost, Budgeting & Project Planning',
            description: 'Educational resources and guides explaining pre-engineered building cost factors, quotation planning, and engineering parameters.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Cost & Planning', url: `${BASE_URL}/resources/knowledge-hub/cost-planning` }
          ])
        ]
      };

    case 'resources/knowledge-hub/cost-planning-article': {
      const article = getKnowledgeArticleBySlug(slug || '');
      if (!article) return getPageSEO('resources/knowledge-hub/cost-planning');
      return {
        title: `${article.title} | Cost & Planning | KHODIYAR INFRAPROJECT`,
        description: article.summary,
        canonical: `${BASE_URL}/resources/knowledge-hub/cost-planning/${article.slug}`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: `${article.title}, PEB cost, structural planning, steel tonnage, RFQ requirements, Gujarat`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Cost & Planning', url: `${BASE_URL}/resources/knowledge-hub/cost-planning` },
          { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/cost-planning/${article.slug}` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/knowledge-hub/cost-planning/${article.slug}`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Cost & Planning', url: `${BASE_URL}/resources/knowledge-hub/cost-planning` },
            { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/cost-planning/${article.slug}` }
          ])
        ]
      };
    }

    case 'resources/knowledge-hub/comparisons':
      return {
        title: 'PEB Structural & Construction Comparisons | Knowledge Hub | KHODIYAR INFRAPROJECT',
        description: 'Objective comparative engineering analyses: PEB vs. RCC, PEB vs. Conventional Steel, Single-Source vs. Multi-Vendor, and Factory vs. Site Fabrication.',
        canonical: `${BASE_URL}/resources/knowledge-hub/comparisons`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB vs RCC, PEB vs conventional steel, factory vs site fabrication, structural comparisons, steel building vs concrete, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Comparisons', url: `${BASE_URL}/resources/knowledge-hub/comparisons` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/knowledge-hub/comparisons`,
            name: 'PEB Structural & Construction Comparisons',
            description: 'Engineering comparisons between pre-engineered buildings and traditional construction methodologies.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Comparisons', url: `${BASE_URL}/resources/knowledge-hub/comparisons` }
          ])
        ]
      };

    case 'resources/knowledge-hub/comparisons-article': {
      const article = getKnowledgeArticleBySlug(slug || '');
      if (!article) return getPageSEO('resources/knowledge-hub/comparisons');
      return {
        title: `${article.title} | Comparisons | KHODIYAR INFRAPROJECT`,
        description: article.summary,
        canonical: `${BASE_URL}/resources/knowledge-hub/comparisons/${article.slug}`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: `${article.title}, structural comparison, PEB vs RCC, steel vs concrete, construction analysis`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Comparisons', url: `${BASE_URL}/resources/knowledge-hub/comparisons` },
          { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/comparisons/${article.slug}` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/knowledge-hub/comparisons/${article.slug}`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Comparisons', url: `${BASE_URL}/resources/knowledge-hub/comparisons` },
            { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/comparisons/${article.slug}` }
          ])
        ]
      };
    }

    case 'resources/knowledge-hub/industrial-building-guides':
      return {
        title: 'Industrial Building Guides | Warehouses & Factories | KHODIYAR INFRAPROJECT',
        description: 'Sector application guides for logistics warehouses, manufacturing plants, cold stores, workshops, distribution centers, and industrial building expansions.',
        canonical: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'Industrial building guide, PEB warehouse guide, manufacturing plant planning, cold storage building, distribution center design, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Industrial Building Guides', url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides`,
            name: 'Industrial Building Application Guides',
            description: 'Application-specific engineering guides for warehouses, factories, workshops, and cold stores.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Industrial Building Guides', url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides` }
          ])
        ]
      };

    case 'resources/knowledge-hub/industrial-building-guides-article': {
      const article = getKnowledgeArticleBySlug(slug || '');
      if (!article) return getPageSEO('resources/knowledge-hub/industrial-building-guides');
      return {
        title: `${article.title} | Industrial Guides | KHODIYAR INFRAPROJECT`,
        description: article.summary,
        canonical: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides/${article.slug}`,
        ogType: 'article',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: `${article.title}, industrial building planning, warehouse design, factory shed, crane bays, Gujarat`,
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'Industrial Building Guides', url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides` },
          { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides/${article.slug}` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${BASE_URL}/resources/knowledge-hub/industrial-building-guides/${article.slug}`
            },
            author: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              url: BASE_URL
            },
            publisher: {
              '@type': 'Organization',
              name: COMPANY_CONFIG.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logoinfra.png`
              }
            }
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'Industrial Building Guides', url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides` },
            { name: article.title, url: `${BASE_URL}/resources/knowledge-hub/industrial-building-guides/${article.slug}` }
          ])
        ]
      };
    }

    case 'resources/knowledge-hub/faqs':
      return {
        title: 'PEB Knowledge & Technical FAQs | Knowledge Hub | KHODIYAR INFRAPROJECT',
        description: 'Comprehensive technical Q&A on Pre-Engineered Buildings: spans, quotation requirements, cost factors, factory fabrication, cranes, and IS codes.',
        canonical: `${BASE_URL}/resources/knowledge-hub/faqs`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        keywords: 'PEB FAQs, pre-engineered buildings questions, steel building cost FAQ, crane PEB shed, clear span FAQ, Gujarat',
        breadcrumbs: [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Resources', url: `${BASE_URL}/resources` },
          { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
          { name: 'FAQs', url: `${BASE_URL}/resources/knowledge-hub/faqs` }
        ],
        schemaMarkup: [
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            name: 'Pre-Engineered Buildings (PEB) Technical FAQs',
            description: 'Answers to frequent technical and commercial questions on pre-engineered steel buildings.'
          },
          getBreadcrumbsSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Resources', url: `${BASE_URL}/resources` },
            { name: 'Knowledge Hub', url: `${BASE_URL}/resources/knowledge-hub` },
            { name: 'FAQs', url: `${BASE_URL}/resources/knowledge-hub/faqs` }
          ])
        ]
      };

    default:
      return getPageSEO('home');
  }
}

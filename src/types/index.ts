export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Engineering' | 'Fabrication' | 'Execution' | 'Structures';
  heroImage: string;
  galleryImages: string[];
  keyBenefits: string[];
  capabilities: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications?: string[];
  suitableProjects?: string[];
  industriesServed?: string[];
  whyChooseThis?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
  image: string;
  keyRequirements: string[];
  solutionsProvided: string[];
  structuralHighlights: string[];
}

export interface ProjectCategory {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  typicalSpan: string;
  typicalHeight: string;
  steelGrade: string;
  image: string;
  applications: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'PEB' | 'Fabrication' | 'Logistics' | 'General' | 'Execution';
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  city: string;
  projectType: string;
  approximateSize: string;
  message: string;
}

export type PageRoute = 
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'services' }
  | { name: 'service-detail'; slug: string }
  | { name: 'industries' }
  | { name: 'projects' }
  | { name: 'project-detail'; slug: string }
  | { name: 'why-choose-us' }
  | { name: 'faqs' }
  | { name: 'contact' };

export interface CompanyUpdate {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
}

export interface IndustryInsight {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  practicalChecklist?: string[];
  relatedResources?: {
    title: string;
    route: string;
    badge: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client?: string;
  location?: string;
  projectType: string;
  date?: string;
  projectSize?: string;
  scope?: string;
  requirements?: string;
  solution?: string;
  execution?: string;
  outcome?: string;
  images?: string[];
  relatedResources?: {
    title: string;
    route: string;
  }[];
}


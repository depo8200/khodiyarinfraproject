import React, { useEffect } from 'react';
import { getPageSEO, DEFAULT_OG_IMAGE } from '../../utils/seoConfig';

interface SEOHeadProps {
  route: string;
  slug?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ route, slug }) => {
  const seo = getPageSEO(route, slug);

  useEffect(() => {
    // 1. Update Document Title
    document.title = seo.title;

    // Helper to safely set or update a meta tag
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', seo.description);
    if (seo.keywords) {
      setMeta('name', 'keywords', seo.keywords);
    }
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Open Graph Metadata
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:type', seo.ogType || 'website');
    setMeta('property', 'og:image', seo.ogImage || DEFAULT_OG_IMAGE);
    setMeta('property', 'og:site_name', 'KHODIYAR INFRAPROJECT');
    setMeta('property', 'og:locale', 'en_IN');

    // 4. Twitter / X Card Metadata
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', seo.ogImage || DEFAULT_OG_IMAGE);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // 6. Schema.org JSON-LD Structured Data
    const scriptId = 'schema-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(seo.schemaMarkup);

  }, [seo.title, seo.description, seo.canonical, seo.ogType, seo.ogImage, seo.keywords, seo.schemaMarkup]);

  return null;
};

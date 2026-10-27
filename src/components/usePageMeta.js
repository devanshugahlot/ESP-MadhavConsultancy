import { useEffect } from 'react';

export default function usePageMeta(title, description, schema) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to find or create meta tag
    const updateMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description
    updateMetaTag('name', 'description', description);

    // 3. Canonical URL
    const canonicalUrl = `https://themadhavconsultancy.com${window.location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Open Graph Meta Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', 'https://themadhavconsultancy.com/logo.jpg');
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', 'Madhav Consultancy');

    // 5. Twitter Card Meta Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', 'https://themadhavconsultancy.com/logo.jpg');

    // 6. Schema JSON-LD Script tag
    let schemaScript = document.getElementById('jsonld-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('id', 'jsonld-schema');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    return () => {
      const scriptToClean = document.getElementById('jsonld-schema');
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [title, description, JSON.stringify(schema)]);
}


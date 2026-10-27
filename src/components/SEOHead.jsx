import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brand } from '../assets/siteData';

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = 'https://themadhavconsultancy.com/logo.jpg',
  ogType = 'website',
  schema,
}) {
  const siteUrl = brand.websiteUrl || 'https://themadhavconsultancy.com';
  const cleanCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
    : siteUrl;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Helmet>
      {/* 1. Primary Page Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={cleanCanonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* 2. Open Graph Protocol */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="en_IN" />

      {/* 3. Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* 4. Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

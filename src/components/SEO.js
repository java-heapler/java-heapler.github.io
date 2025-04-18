import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced SEO component that manages meta tags and structured data
 * This improves SEO, search result appearance, and social media sharing
 */
const SEO = ({ 
  title = 'Joseph Heupler | Software Engineer', 
  description = 'Full-stack developer and UC Berkeley graduate specializing in scalable applications, cloud architecture, and data-driven solutions.',
  image = '/profile-optimized.jpg',
  pathname = '',
  article = false,
  datePublished = '',
  dateModified = '',
  // Schema.org structured data
  schemaType = 'WebPage', // WebPage, Article, etc.
  keywords = 'software engineer, full stack developer, machine learning, cloud architecture, UC Berkeley, portfolio',
  sameAs = [
    'https://github.com/java-heapler',
    'https://linkedin.com/in/joe-heupler'
  ]
}) => {
  const { hash } = useLocation();
  const siteUrl = 'https://java-heapler.github.io/portfolio';
  const url = pathname ? `${siteUrl}${pathname}` : siteUrl;
  const canonical = url + (hash || '');
  const metaImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Schema.org structured data
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': schemaType
  };
  
  // Add appropriate properties based on schema type
  if (schemaType === 'WebPage') {
    Object.assign(ldJson, {
      'name': title,
      'description': description,
      'url': canonical,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonical
      }
    });
  } else if (schemaType === 'Person') {
    Object.assign(ldJson, {
      'name': 'Joseph Heupler',
      'jobTitle': 'Software Engineer',
      'description': description,
      'url': siteUrl,
      'sameAs': sameAs,
      'alumniOf': {
        '@type': 'CollegeOrUniversity',
        'name': 'UC Berkeley'
      },
      'knowsAbout': [
        'Full Stack Development',
        'Machine Learning',
        'Augmented Reality',
        'Cloud Infrastructure'
      ],
      'image': metaImage
    });
  } else if (schemaType === 'Article' && article) {
    Object.assign(ldJson, {
      'headline': title,
      'description': description,
      'image': metaImage,
      'datePublished': datePublished,
      'dateModified': dateModified || datePublished,
      'author': {
        '@type': 'Person',
        'name': 'Joseph Heupler'
      },
      'publisher': {
        '@type': 'Person',
        'name': 'Joseph Heupler',
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}/logo192.png`
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonical
      }
    });
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Joseph Heupler" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={`Image for ${title}`} />
      <meta property="og:site_name" content="Joseph Heupler Portfolio" />
      <meta property="og:locale" content="en_US" />
      {article && datePublished && (
        <meta property="article:published_time" content={datePublished} />
      )}
      {article && dateModified && (
        <meta property="article:modified_time" content={dateModified} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={`Image for ${title}`} />
      <meta name="twitter:creator" content="@java_heapler" />
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Performance & Mobile */}
      <meta name="theme-color" content="#0a1929" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      
      {/* Sitemap Reference */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};

export default SEO; 
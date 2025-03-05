import React from 'react';

/**
 * SEO component that manages meta tags
 * Note: For this to be fully functional, you'll need to install react-helmet-async
 * Run: npm install react-helmet-async --save
 * Then uncomment the Helmet imports and usage below
 */
const SEO = ({ 
  title = 'Joseph Heupler | Software Engineer', 
  description = 'Full-stack developer and UC Berkeley graduate specializing in scalable applications, cloud architecture, and data-driven solutions.',
  image = '/meta-image.jpg',
  pathname = '',
  article = false 
}) => {
  const siteUrl = 'https://java-heapler.github.io/portfolio';
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;
  const metaImage = `${siteUrl}${image}`;

  // This would use react-helmet-async if installed
  /*
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook *\/}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      
      {/* Twitter *\/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Web App Manifest *\/}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Performance *\/}
      <meta name="theme-color" content="#0a192f" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
  */
  
  // This is a fallback that returns null, since we can't use Helmet without installing it
  return null;
};

export default SEO; 
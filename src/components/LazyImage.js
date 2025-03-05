import React, { useState } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  width,
  height,
  className = '',
  priority = false,
  onLoad = () => {},
  onError = () => {},
  ...rest 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Generate sources for different formats
  const basePath = src.replace(/\.(jpg|jpeg|png|gif)$/i, '');
  const avifSrc = `${basePath}.avif`;
  const webpSrc = `${basePath}.webp`;
  
  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad(e);
  };
  
  const handleError = (e) => {
    setHasError(true);
    onError(e);
  };
  
  return (
    <picture>
      {!hasError && <source srcSet={avifSrc} type="image/avif" />}
      {!hasError && <source srcSet={webpSrc} type="image/webp" />}
      <img 
        src={src} 
        alt={alt} 
        loading={priority ? "eager" : "lazy"}
        width={width}
        height={height}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={handleLoad}
        onError={handleError}
        {...rest} 
      />
    </picture>
  );
};

export default LazyImage; 
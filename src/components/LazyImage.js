import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, fallbackSrc, alt, className, width, height, ...rest }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
    
    img.onerror = () => {
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
      setError(true);
      setLoading(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className={`lazy-image-container ${loading ? 'loading' : ''} ${className || ''}`}>
      {loading && <div className="image-placeholder" style={{ width, height }} />}
      {!loading && imageSrc && (
        <img 
          src={imageSrc} 
          alt={alt} 
          width={width}
          height={height}
          className={`lazy-image ${error ? 'error' : ''}`}
          {...rest}
        />
      )}
    </div>
  );
};

export default LazyImage; 
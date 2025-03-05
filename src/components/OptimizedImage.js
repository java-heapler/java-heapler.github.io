import React, { useState, useEffect, useRef } from 'react';
import '../styles/OptimizedImage.css';

/**
 * OptimizedImage Component
 * 
 * A high-performance image component with:
 * - Responsive sizing
 * - Modern format (WebP/AVIF) with fallbacks
 * - Progressive loading with blur-up effect
 * - Lazy loading using Intersection Observer
 * - Network-aware quality selection
 * 
 * @param {Object} props
 * @param {string} props.src - Base image source without extension
 * @param {string} props.alt - Alt text for accessibility
 * @param {number} props.width - Natural width of the image
 * @param {number} props.height - Natural height of the image
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.sizes - Responsive sizes attribute
 * @param {string} props.priority - If "true", loads immediately without lazy loading
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  sizes = '100vw', 
  priority = false,
  ...rest 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const [effectiveConnection, setEffectiveConnection] = useState('4g');
  const imageRef = useRef(null);

  // Detect network conditions
  useEffect(() => {
    // Check if the Network Information API is available
    if ('connection' in navigator && navigator.connection.effectiveType) {
      setEffectiveConnection(navigator.connection.effectiveType);
      
      // Update when the network information changes
      const handleNetworkChange = () => {
        setEffectiveConnection(navigator.connection.effectiveType);
      };
      
      navigator.connection.addEventListener('change', handleNetworkChange);
      return () => {
        navigator.connection.removeEventListener('change', handleNetworkChange);
      };
    }
  }, []);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    if (!priority && imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '200px',
          threshold: 0.01
        }
      );
      
      observer.observe(imageRef.current);
      
      return () => {
        if (imageRef.current) {
          observer.disconnect();
        }
      };
    }
  }, [priority]);

  // Determine image quality based on network conditions
  const getQualityParam = () => {
    switch (effectiveConnection) {
      case 'slow-2g':
      case '2g':
        return '?q=60'; // Lower quality for slow connections
      case '3g':
        return '?q=75';
      default:
        return '?q=90'; // High quality for fast connections
    }
  };

  // Get file extension from path
  const getExtension = (path) => {
    const parts = path.split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : '';
  };

  // Determine base path without extension
  const getBasePath = (path) => {
    const extension = getExtension(path);
    return extension ? path.slice(0, -(extension.length + 1)) : path;
  };

  const basePath = getBasePath(src);
  const originalExtension = getExtension(src) || 'jpg';
  const qualityParam = getQualityParam();

  // Create srcset for different device pixel ratios
  const getSrcSet = (format) => {
    return [1, 2, 3]
      .map(dpr => `${basePath}.${format}${qualityParam}&dpr=${dpr} ${dpr}x`)
      .join(', ');
  };

  // Placeholder with aspect ratio
  const placeholderStyle = {
    paddingBottom: `${(height / width) * 100}%`
  };

  return (
    <div 
      className={`optimized-image-container ${isLoaded ? 'loaded' : ''} ${className}`}
      ref={imageRef}
      style={{ aspectRatio: `${width} / ${height}` }}
      {...rest}
    >
      {/* Show loading skeleton until image is visible */}
      {!isVisible && (
        <div className="image-placeholder" style={placeholderStyle}>
          <div className="loading-shimmer"></div>
        </div>
      )}
      
      {/* Only load the actual image when it becomes visible */}
      {isVisible && (
        <picture>
          {/* AVIF format for browsers that support it */}
          <source
            type="image/avif"
            srcSet={getSrcSet('avif')}
            sizes={sizes}
          />
          
          {/* WebP format as first fallback */}
          <source
            type="image/webp"
            srcSet={getSrcSet('webp')}
            sizes={sizes}
          />
          
          {/* Original format (JPEG/PNG) as final fallback */}
          <img
            src={`${basePath}.${originalExtension}${qualityParam}`}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            className={`optimized-image ${isLoaded ? 'visible' : ''}`}
          />
        </picture>
      )}
      
      {/* Optional debug information - visible only in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="image-debug">
          <span className="debug-network">{effectiveConnection}</span>
          <span className="debug-loaded">{isLoaded ? '✓' : '...'}</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 
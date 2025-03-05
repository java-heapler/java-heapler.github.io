import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Throttle scroll event for better performance
  const throttledScrollHandler = useCallback(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = throttledScrollHandler();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [throttledScrollHandler]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    // Focus on the first focusable element at the top
    setTimeout(() => {
      const firstFocusable = document.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <>
      {isVisible && (
        <button
          className={`back-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          onKeyPress={handleKeyPress}
          aria-label="Back to top"
          tabIndex="0"
          role="button"
        >
          <FaArrowUp aria-hidden="true" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </>
  );
}

export default BackToTop; 
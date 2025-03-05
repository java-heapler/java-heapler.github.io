import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CookieConsent.css';
import PrivacyPolicy from './PrivacyPolicy';
import useStorage from '../hooks/useStorage';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  
  // Use our custom storage hook with a 1-year expiry
  const [cookieConsent, setCookieConsent, removeCookieConsent, storageStatus] = useStorage(
    'cookieConsent', 
    null, 
    { 
      strategy: 'local', // Force local storage for better browser support
      expiry: 365 * 24 * 60 * 60 * 1000 // 1 year in milliseconds
    }
  );

  // Debug logging in development mode
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Cookie consent value:', cookieConsent);
      console.log('Storage status:', storageStatus);
    }
  }, [cookieConsent, storageStatus]);

  useEffect(() => {
    // Only show consent dialog if explicitly no consent is stored AND we're not loading
    if (!cookieConsent && !storageStatus.loading) {
      setShowConsent(true);
    } else if (cookieConsent && cookieConsent.analytics) {
      enableAnalytics();
    }
  }, [cookieConsent, storageStatus.loading]);

  // Log storage errors in development 
  useEffect(() => {
    if (storageStatus.error) {
      console.error('Storage error:', storageStatus.error);
      // Fallback: If storage fails, use in-memory state at least for the current session
      setShowConsent(false);
    }
  }, [storageStatus.error]);

  const enableAnalytics = () => {
    // Enable GA4
    window['ga-disable-G-P1RC04G662'] = false;
    // Enable IP anonymization
    if (window.gtag) {
      window.gtag('config', 'G-P1RC04G662', {
        'anonymize_ip': true
      });
    }
  };

  const disableAnalytics = () => {
    // Disable GA4
    window['ga-disable-G-P1RC04G662'] = true;
  };

  const handleAcceptAll = () => {
    const consentData = { 
      essential: true, 
      analytics: true,
      timestamp: new Date().toISOString()
    };
    
    // Set consent in storage
    setCookieConsent(consentData);
    
    // Even if storage might fail, update UI immediately
    enableAnalytics();
    setShowConsent(false);
  };

  const handleAcceptEssential = () => {
    const consentData = { 
      essential: true, 
      analytics: false,
      timestamp: new Date().toISOString()
    };
    
    // Set consent in storage
    setCookieConsent(consentData);
    
    // Even if storage might fail, update UI immediately
    disableAnalytics();
    setShowConsent(false);
  };

  const handleCustomize = () => {
    setShowPrivacyPolicy(true);
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  // For testing storage functionality
  const handleResetConsent = () => {
    if (process.env.NODE_ENV !== 'production') {
      removeCookieConsent();
      setShowConsent(true);
    }
  };

  // Don't render anything if both consent and privacy policy are not showing
  if (!showConsent && !showPrivacyPolicy) return null;

  return (
    <>
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={handleClosePrivacyPolicy} />
      )}
      {showConsent && (
        <motion.div 
          className="cookie-consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="cookie-content">
            <p>
              This website uses cookies to enhance your experience and analyze site usage. 
              We use essential cookies for basic functionality and optional analytics cookies to understand how you use our site.
              <button className="link-button" onClick={handleCustomize}>Learn more</button>
            </p>
            <div className="cookie-buttons">
              <button onClick={handleAcceptEssential} className="secondary-button">
                Essential Only
              </button>
              <button onClick={handleAcceptAll} className="primary-button">
                Accept All
              </button>
              {process.env.NODE_ENV !== 'production' && (
                <button onClick={handleResetConsent} className="debug-button" style={{ fontSize: '0.8rem', padding: '0.3rem' }}>
                  Reset (Debug)
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CookieConsent; 
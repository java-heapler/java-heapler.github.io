import React, { useEffect } from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = ({ onClose }) => {
  // Add/remove privacy-open class to body when component mounts/unmounts
  useEffect(() => {
    // Add class when component mounts
    document.body.classList.add('privacy-open');
    
    // Remove class when component unmounts
    return () => {
      document.body.classList.remove('privacy-open');
    };
  }, []);

  return (
    <div className="privacy-policy-modal">
      <div className="privacy-policy-content">
        <h2>Privacy Policy</h2>
        <div className="policy-text">
          <h3>Analytics and Cookies</h3>
          <p>This website uses Google Analytics 4 (GA4) to analyze website traffic and improve user experience. GA4 may collect:</p>
          <ul>
            <li>Pages visited and time spent</li>
            <li>Device and browser information</li>
            <li>Geographic location (country/city level)</li>
            <li>Interaction with site features</li>
          </ul>

          <h3>Data Collection</h3>
          <p>We implement IP anonymization to protect your privacy. No personally identifiable information is collected or stored. Data collected is processed by Google Analytics in accordance with their privacy policy.</p>

          <h3>Cookie Usage</h3>
          <p>This website uses essential cookies and analytics cookies. You can control analytics cookies through the cookie consent banner.</p>

          <h3>Your Rights</h3>
          <p>Under GDPR and other privacy laws, you have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of analytics tracking</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </ul>

          <h3>Contact</h3>
          <p>For any privacy-related questions, please contact: jheupler@berkeley.edu</p>
        </div>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
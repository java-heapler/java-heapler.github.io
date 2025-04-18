import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Privacy from './components/Privacy';
import SEO from './components/SEO';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';
import { initGA, logTiming } from './utils/analytics';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './components/ErrorBoundary';

// Critical components loaded immediately (not lazy)
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';

// Lazy-loaded components with prefetch hints
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

// Prefetch secondary content (below the fold)
const SecondaryContent = lazy(() => import('./components/SecondaryContent'));

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Fallback loading component with skeleton UI
const LoadingFallback = () => (
  <div className="loading-skeleton">
    <div className="skeleton-header"></div>
    <div className="skeleton-content">
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
    </div>
  </div>
);

// Route-specific SEO component
const PageSEO = () => {
  const location = useLocation();
  const { pathname, hash } = location;
  
  // Set default SEO props
  let seoProps = {
    schemaType: 'WebPage'
  };
  
  // Home page
  if (pathname === '/' && !hash) {
    seoProps = {
      schemaType: 'Person',
      title: 'Joseph Heupler | Software Engineer Portfolio',
      description: 'Full-stack developer and UC Berkeley graduate specializing in scalable applications, cloud architecture, and modern web development.',
      image: '/profile-optimized.jpg'
    };
  }
  
  // Projects section
  else if (hash === '#projects') {
    seoProps = {
      title: 'Projects | Joseph Heupler',
      description: 'View my latest software projects, including full-stack applications, cloud solutions, and data-driven implementations.',
      pathname: '/',
      image: '/profile-optimized.jpg'
    };
  }
  
  // About section
  else if (hash === '#about') {
    seoProps = {
      title: 'About | Joseph Heupler',
      description: 'UC Berkeley graduate with expertise in software engineering, cloud technologies, and modern development frameworks.',
      pathname: '/',
      image: '/profile-optimized.jpg'
    };
  }
  
  // Contact section
  else if (hash === '#contact') {
    seoProps = {
      title: 'Contact | Joseph Heupler',
      description: 'Get in touch with me for collaboration, job opportunities, or questions about my portfolio.',
      pathname: '/'
    };
  }
  
  // Privacy page
  else if (pathname === '/privacy') {
    seoProps = {
      title: 'Privacy Policy | Joseph Heupler',
      description: 'Privacy policy and data handling information for Joseph Heupler\'s portfolio website.',
      pathname: '/privacy'
    };
  }
  
  return <SEO {...seoProps} />;
};

function App() {
  useEffect(() => {
    // Initialize analytics when the app loads
    initGA();
    
    // Add performance tracking
    if ('performance' in window && 'timing' in window.performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navTiming = performance.getEntriesByType('navigation')[0];
          if (navTiming) {
            const loadTime = navTiming.loadEventEnd - navTiming.startTime;
            // send real user timing to analytics
            logTiming('Performance', 'page_load', loadTime, 'Page Load Time');
          }
        }, 0);
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ErrorBoundary>
            <div className="app">
              <PageSEO />
              <Navigation />
              
              <Routes>
                <Route path="/" element={
                  <main id="mainContent" role="main" className="container">
                    <ErrorBoundary>
                      {/* Critical above-the-fold content loads immediately */}
                      <Header />
                      
                      {/* Secondary content loads immediately without Suspense */}
                      <SecondaryContent />
                    </ErrorBoundary>
                  </main>
                } />
                <Route path="/privacy" element={
                  <ErrorBoundary>
                    <Privacy />
                  </ErrorBoundary>
                } />
              </Routes>
              
              <ErrorBoundary>
                <Suspense fallback={<div></div>}>
                  <Footer />
                </Suspense>
              </ErrorBoundary>
              
              <ThemeToggle />
              <BackToTop />
              
              <Suspense fallback={<div></div>}>
                <CookieConsent />
              </Suspense>
            </div>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 
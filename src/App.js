import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Privacy from './components/Privacy';
import SEO from './components/SEO';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';
import { initGA, logTiming } from './utils/analytics';
import ErrorBoundary from './components/ErrorBoundary';

// Critical components loaded immediately (not lazy)
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';

// Lazy-loaded components with prefetch hints
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

// Prefetch secondary content (below the fold)
const SecondaryContent = lazy(() => 
  import(/* webpackPrefetch: true */ './components/SecondaryContent')
);

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

function App() {
  useEffect(() => {
    // Initialize analytics when the app loads
    initGA();
    
    // Dynamic import GSAP only when needed
    import('./utils/animation-setup').then(module => {
      // GSAP and ScrollTrigger are now registered via the imported module
    });
    
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
              <SEO />
              <Navigation />
              
              <Routes>
                <Route path="/" element={
                  <main id="mainContent" role="main" className="container">
                    <ErrorBoundary>
                      {/* Critical above-the-fold content loads immediately */}
                      <Header />
                      
                      {/* Secondary content loads after primary content */}
                      <Suspense fallback={<LoadingFallback />}>
                        <SecondaryContent />
                      </Suspense>
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
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
import { initGA } from './utils/analytics';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './components/ErrorBoundary';

// Performance optimization with code splitting
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ThemeToggle = lazy(() => import('./components/ThemeToggle'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

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
            console.log(`Page loaded in ${loadTime}ms`);
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
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={
                    <main className="container">
                      <ErrorBoundary>
                        <Suspense fallback={<LoadingFallback />}>
                          <Header />
                        </Suspense>
                      </ErrorBoundary>
                      
                      <ErrorBoundary>
                        <Suspense fallback={<LoadingFallback />}>
                          <About />
                        </Suspense>
                      </ErrorBoundary>
                      
                      <ErrorBoundary>
                        <Suspense fallback={<LoadingFallback />}>
                          <Projects />
                        </Suspense>
                      </ErrorBoundary>
                      
                      <ErrorBoundary>
                        <Suspense fallback={<LoadingFallback />}>
                          <Contact />
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
                
                <Suspense fallback={<div></div>}>
                  <ThemeToggle />
                </Suspense>
                
                <Suspense fallback={<div></div>}>
                  <BackToTop />
                </Suspense>
                
                <Suspense fallback={<div></div>}>
                  <CookieConsent />
                </Suspense>
              </Suspense>
            </div>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 
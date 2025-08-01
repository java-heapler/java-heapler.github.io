import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';
import { initGA } from './utils/analytics';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './components/ErrorBoundary';

// Enhanced components
const EnhancedNavigation = lazy(() => import('./components/EnhancedNavigation'));
const EnhancedHeader = lazy(() => import('./components/EnhancedHeader'));
const EnhancedDemo = lazy(() => import('./components/EnhancedDemo'));

// Original components (keeping for fallback)
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ThemeToggle = lazy(() => import('./components/ThemeToggle'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const PerformanceOptimizations = lazy(() => import('./components/PerformanceOptimizations'));
const Privacy = lazy(() => import('./components/Privacy'));

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
            <div className="app min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
              <SEO />
              
              {/* Enhanced Navigation */}
              <ErrorBoundary>
                <Suspense fallback={<div className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"></div>}>
                  <EnhancedNavigation />
                </Suspense>
              </ErrorBoundary>

              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={
                    <main className="relative">
                      {/* Animated Background Elements */}
                      <div className="fixed inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                      </div>

                      <div className="relative z-10">
                        {/* Enhanced Header */}
                        <ErrorBoundary>
                          <Suspense fallback={<LoadingFallback />}>
                            <EnhancedHeader />
                          </Suspense>
                        </ErrorBoundary>
                        
                        {/* Enhanced Demo Section */}
                        <ErrorBoundary>
                          <Suspense fallback={<LoadingFallback />}>
                            <EnhancedDemo />
                          </Suspense>
                        </ErrorBoundary>
                        
                        {/* Original Sections (keeping for now) */}
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
                            <PerformanceOptimizations />
                          </Suspense>
                        </ErrorBoundary>
                        
                        <ErrorBoundary>
                          <Suspense fallback={<LoadingFallback />}>
                            <Contact />
                          </Suspense>
                        </ErrorBoundary>
                      </div>
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
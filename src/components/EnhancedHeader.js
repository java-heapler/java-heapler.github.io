import React, { useEffect, useState, lazy, Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScreenSize } from '../hooks/useScreenSize';
import '../styles/Header.css';
import { gsap } from 'gsap';

// Lazy load the animated gradient component
const AnimatedGradient = lazy(() => import('./AnimatedGradient'));

function EnhancedHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isDesktop } = useScreenSize();
  const headerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1.2 });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageRef.current && imageRef.current.complete) {
        setImageLoaded(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const renderSocialLinks = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ delay: 1.0, duration: 0.5 }}
      className="flex space-x-4 mt-6"
    >
      <a 
        href="https://github.com/java-heapler" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a 
        href="https://www.linkedin.com/in/joseph-heupler/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <a 
        href="mailto:jheupler@berkeley.edu" 
        aria-label="Email"
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </motion.div>
  );

  return (
    <header ref={headerRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse group-hover:animate-spin transition-all duration-1000"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse animation-delay-1000 group-hover:animate-ping"></div>
              <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/profile-optimized.avif`} type="image/avif" />
                <source srcSet={`${process.env.PUBLIC_URL}/profile-optimized.jpg`} type="image/jpeg" />
                <img 
                  ref={imageRef}
                  src={`${process.env.PUBLIC_URL}/profile.jpg`} 
                  alt="Joseph Heupler" 
                  className="w-44 h-44 rounded-full mx-auto object-cover object-top border-4 border-white dark:border-gray-800 shadow-2xl relative z-10 top-2 left-2 hover:scale-110 transition-all duration-500 group-hover:rotate-6 hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
                  loading="eager"
                  width="300"
                  height="300"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    setImageLoaded(true);
                  }}
                />
              </picture>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-pulse group-hover:scale-125 transition-all duration-500"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
              Joseph Heupler
            </h1>

            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 animate-slide-up">
                UC Berkeley Data & Cognitive Science Graduate
              </p>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
            </div>

            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delayed">
              Software Engineer specializing in scalable back-end systems, AI/ML solutions, and data-driven
              applications. Passionate about creating technology that makes a meaningful impact.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block text-center hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 inline-block text-center hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>

            {isDesktop && renderSocialLinks()}
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="particle absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animation-delay-1000"></div>
        <div className="particle absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60 animation-delay-2000"></div>
      </div>
    </header>
  );
}

export default EnhancedHeader; 
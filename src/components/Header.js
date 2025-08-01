import React, { useEffect, useState, lazy, Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScreenSize } from '../hooks/useScreenSize';
import '../styles/Header.css';
import { gsap } from 'gsap';

// Lazy load the animated gradient component
const AnimatedGradient = lazy(() => import('./AnimatedGradient'));

function Header() {
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
      className="social-links flex space-x-4 mt-6"
    >
      <a 
        href="https://github.com/java-heapler" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
        className="text-text-secondary hover:text-secondary transition-colors duration-300"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a 
        href="https://www.linkedin.com/in/joseph-heupler/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
        className="text-text-secondary hover:text-secondary transition-colors duration-300"
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <a 
        href="mailto:jheupler@berkeley.edu" 
        aria-label="Email"
        className="text-text-secondary hover:text-secondary transition-colors duration-300"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </motion.div>
  );

  return (
    <header ref={headerRef} className="header min-h-screen flex items-center justify-center">
      <div className="header-content max-w-6xl mx-auto px-4">
        <div className="header-main flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="header-text flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="mb-4">
                <span className="greeting block text-secondary text-lg font-medium">Hello, I'm</span>
                <span className="name block text-text-primary text-4xl lg:text-6xl font-bold">Joseph Heupler</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h2 className="title text-text-secondary text-2xl lg:text-3xl font-medium mb-6">Software Engineer</h2>
            </motion.div>
            
            {/* Prioritize description rendering */}
            {isDesktop ? (
              <p className="description text-text-secondary text-lg leading-relaxed mb-8" data-priority="high">
                Full-stack developer and UC Berkeley graduate specializing in scalable 
                applications, cloud architecture, and data-driven solutions. 
                Experienced in building robust backend systems and deploying 
                production-ready applications with modern DevOps practices.
              </p>
            ) : (
              <p className="description description-mobile text-text-secondary text-base leading-relaxed mb-8" data-priority="high">
                Full-stack developer and UC Berkeley graduate specializing in scalable 
                applications and cloud solutions.
              </p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#projects" 
                className="primary-btn bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 inline-block text-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="secondary-btn border-2 border-secondary text-secondary px-8 py-3 rounded-md font-medium hover:bg-secondary hover:text-primary transition-all duration-300 inline-block text-center"
              >
                Get in Touch
              </a>
            </motion.div>

            {isDesktop && renderSocialLinks()}
          </div>

          <div className={`header-image ${!imageLoaded ? 'loading' : ''} flex-shrink-0`}>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: imageLoaded ? 1 : 0 }} 
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/profile-optimized.avif`} type="image/avif" />
                <source srcSet={`${process.env.PUBLIC_URL}/profile-optimized.jpg`} type="image/jpeg" />
                <img 
                  ref={imageRef}
                  src={`${process.env.PUBLIC_URL}/profile-fallback.jpg`} 
                  alt="Joseph Heupler" 
                  className="profile-image rounded-full shadow-2xl"
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
            </motion.div>
          </div>
        </div>
      </div>
      
      {isDesktop && (
        <div className="header-background absolute inset-0 -z-10">
          <Suspense fallback={<div className="gradient-placeholder" />}>
            <AnimatedGradient />
          </Suspense>
        </div>
      )}
    </header>
  );
}

export default Header;

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
      className="social-links"
    >
      <a href="https://github.com/java-heapler" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/joseph-heupler/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="mailto:jheupler@berkeley.edu" aria-label="Email">
        <FaEnvelope />
      </a>
    </motion.div>
  );

  return (
    <header ref={headerRef} className="header">
      <div className="header-content">
        <div className="header-main">
          <div className="header-text">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <h1>
                <span className="greeting">Hello, I'm</span>
                <span className="name">Joseph Heupler</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h2 className="title">Software Engineer</h2>
            </motion.div>
            
            {/* Prioritize description rendering */}
            {isDesktop ? (
              <p className="description" data-priority="high">
                Full-stack developer and UC Berkeley graduate specializing in scalable 
                applications, cloud architecture, and data-driven solutions. 
                Experienced in building robust backend systems and deploying 
                production-ready applications with modern DevOps practices.
              </p>
            ) : (
              <p className="description description-mobile" data-priority="high">
                Full-stack developer and UC Berkeley graduate specializing in scalable 
                applications and cloud solutions.
              </p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="cta-buttons"
            >
              <a href="#projects" className="primary-btn">View Projects</a>
              <a href="#contact" className="secondary-btn">Get in Touch</a>
            </motion.div>

            {isDesktop && renderSocialLinks()}
          </div>

          <div className={`header-image ${!imageLoaded ? 'loading' : ''}`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: imageLoaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
              <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/profile-optimized.avif`} type="image/avif" />
                <source srcSet={`${process.env.PUBLIC_URL}/profile-optimized.jpg`} type="image/jpeg" />
                <img 
                  ref={imageRef}
                  src={`${process.env.PUBLIC_URL}/profile-fallback.jpg`} 
                  alt="Joseph Heupler" 
                  className="profile-image"
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
        <div className="header-background">
          <Suspense fallback={<div className="gradient-placeholder" />}>
            <AnimatedGradient />
          </Suspense>
        </div>
      )}
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { logEvent } from '../utils/analytics';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize smooth scroll
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add throttling to scroll event
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerHeight = document.querySelector('.navigation')?.offsetHeight || 0;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = document.querySelector('.navigation')?.offsetHeight || 0;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const trackResumeClick = () => {
    logEvent('Navigation', 'Clicked Resume', 'Header Resume Button');
  };

  return (
    <nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-container">
        <a 
          href="#top" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          aria-label="Back to top"
        >
          JH
        </a>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          onKeyPress={(e) => handleKeyPress(e, toggleMenu)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="menu-icon"></span>
        </button>

        <div 
          className={`nav-links ${isOpen ? 'active' : ''}`} 
          role="menubar"
          onClick={(e) => {
            // Close menu when clicking outside on mobile
            if (e.target === e.currentTarget) {
              setIsOpen(false);
              document.body.style.overflow = '';
            }
          }}
        >
          {['about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              role="menuitem"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, () => scrollToSection(section))}
              aria-label={`Navigate to ${section} section`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume/softwareEngineeringResume.pdf`}
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackResumeClick}
            role="menuitem"
            aria-label="Open Resume PDF in new tab"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
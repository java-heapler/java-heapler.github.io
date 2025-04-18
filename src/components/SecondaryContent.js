import React from 'react';
import About from './About';
import Projects from './Projects';
import PerformanceOptimizations from './PerformanceOptimizations';
import Contact from './Contact';

/**
 * SecondaryContent bundles all below-the-fold sections into a single chunk
 * This reduces the number of network requests and improves load time of the main content
 */
const SecondaryContent = () => {
  return (
    <>
      <About />
      <Projects />
      <PerformanceOptimizations />
      <Contact />
    </>
  );
};

export default SecondaryContent; 
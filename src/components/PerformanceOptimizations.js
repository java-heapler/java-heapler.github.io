import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PerformanceOptimizations.css';
import PerformanceMetrics from './PerformanceMetrics';
import CodeSplittingDemo from './CodeSplittingDemo';
import OptimizedImage from './OptimizedImage';

const PerformanceOptimizations = () => {
  const [activeTab, setActiveTab] = useState('metrics');
  
  return (
    <motion.section 
      className="performance-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Performance Optimizations</h2>
          <p>
            This portfolio demonstrates several performance optimizations that enhance user experience.
            These techniques showcase modern web development practices that I apply in my work.
          </p>
          
          <div className="optimization-tabs">
            <button 
              className={activeTab === 'metrics' ? 'active' : ''}
              onClick={() => setActiveTab('metrics')}
            >
              <span className="tab-icon">📊</span>
              Performance Metrics
            </button>
            <button 
              className={activeTab === 'code-splitting' ? 'active' : ''}
              onClick={() => setActiveTab('code-splitting')}
            >
              <span className="tab-icon">⚡</span>
              Code Splitting
            </button>
            <button 
              className={activeTab === 'image-optimization' ? 'active' : ''}
              onClick={() => setActiveTab('image-optimization')}
            >
              <span className="tab-icon">🖼️</span>
              Image Optimization
            </button>
          </div>
        </motion.div>
        
        <div className="optimization-content">
          {activeTab === 'metrics' && <PerformanceMetrics />}
          {activeTab === 'code-splitting' && <CodeSplittingDemo />}
          {activeTab === 'image-optimization' && (
            <div className="image-optimization-demo">
              <div className="demo-description">
                <h3>Optimized Image Loading</h3>
                <p>
                  The images below demonstrate advanced image optimization techniques:
                </p>
                <ul>
                  <li><strong>Format Optimization:</strong> Serving AVIF or WebP with JPG fallback</li>
                  <li><strong>Resolution Switching:</strong> Different sizes based on viewport</li>
                  <li><strong>Network-Aware Loading:</strong> Quality adjusts to connection speed</li>
                  <li><strong>Lazy Loading:</strong> Images only load when they enter viewport</li>
                </ul>
              </div>
              
              <div className="optimization-comparison">
                <div className="comparison-column">
                  <h4>Without Optimization</h4>
                  <div className="comparison-metrics">
                    <div className="metric">
                      <span className="metric-label">Format:</span>
                      <span className="metric-value">JPEG only</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Size:</span>
                      <span className="metric-value">843 KB</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Loading:</span>
                      <span className="metric-value">Eager</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Quality:</span>
                      <span className="metric-value">Fixed (100%)</span>
                    </div>
                  </div>
                  <div className="image-container">
                    <img 
                      src="/assets/sample/unoptimized-image.jpg" 
                      alt="Unoptimized mountain landscape" 
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
                
                <div className="comparison-column">
                  <h4>With Optimization</h4>
                  <div className="comparison-metrics">
                    <div className="metric">
                      <span className="metric-label">Format:</span>
                      <span className="metric-value highlight">AVIF/WebP/JPEG</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Size:</span>
                      <span className="metric-value highlight">187 KB (78% smaller)</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Loading:</span>
                      <span className="metric-value highlight">Lazy + Progressive</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Quality:</span>
                      <span className="metric-value highlight">Network-aware</span>
                    </div>
                  </div>
                  <div className="image-container">
                    <OptimizedImage 
                      src="/assets/sample/optimized-image.jpg" 
                      alt="Optimized mountain landscape" 
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              
              <div className="optimization-explanation">
                <h4>Image Optimization Benefits</h4>
                <p>
                  The optimized image uses modern techniques to load faster and provide a better user experience:
                </p>
                <ul>
                  <li>Reduced data usage by 78% (essential for mobile users)</li>
                  <li>Progressive loading shows a preview while the full image loads</li>
                  <li>Automatically selects the best format based on browser support</li>
                  <li>Adjusts quality based on network conditions</li>
                </ul>
                <p>
                  This approach dramatically improves page loading time and Core Web Vitals metrics,
                  particularly Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PerformanceOptimizations; 
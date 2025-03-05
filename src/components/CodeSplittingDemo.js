import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import '../styles/CodeSplittingDemo.css';

// Simulated "heavy" components that would be costly to load
// In a real scenario, these would be actual components with significant size
const HeavyComponent1 = lazy(() => {
  // Simulate network delay to demonstrate the loading state
  return new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./codeSplitComponents/HeavyComponent1')), 
      1000
    )
  );
});

const HeavyComponent2 = lazy(() => {
  return new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./codeSplitComponents/HeavyComponent2')), 
      1500
    )
  );
});

const HeavyComponent3 = lazy(() => {
  return new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./codeSplitComponents/HeavyComponent3')), 
      2000
    )
  );
});

// Fallback loading component with UI skeleton
const LoadingSkeleton = () => (
  <div className="loading-skeleton">
    <div className="skeleton-header"></div>
    <div className="skeleton-content">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
    <div className="skeleton-footer"></div>
  </div>
);

const CodeSplittingDemo = () => {
  const [loadedComponents, setLoadedComponents] = useState([]);
  const bundleData = {
    original: '524KB',
    split: '142KB',
    savings: '73%'
  };

  const toggleComponent = (id) => {
    if (loadedComponents.includes(id)) {
      setLoadedComponents(loadedComponents.filter(cid => cid !== id));
    } else {
      setLoadedComponents([...loadedComponents, id]);
    }
  };

  return (
    <motion.div 
      className="code-splitting-demo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="demo-header">
        <h3>Code Splitting Demonstration</h3>
        <div className="bundle-info">
          <div className="bundle-stats">
            <div className="bundle-stat">
              <span className="stat-label">Original Bundle:</span>
              <span className="stat-value">{bundleData.original}</span>
            </div>
            <div className="bundle-stat">
              <span className="stat-label">Initial Load:</span>
              <span className="stat-value highlight">{bundleData.split}</span>
            </div>
            <div className="bundle-stat">
              <span className="stat-label">Reduction:</span>
              <span className="stat-value reduction">{bundleData.savings}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="components-container">
        <p className="demo-instruction">
          Click on each feature below to dynamically load only the code you need.
          This demonstrates how code-splitting reduces initial load time for users.
        </p>
        
        <div className="component-buttons">
          <button 
            className={`component-button ${loadedComponents.includes(1) ? 'active' : ''}`}
            onClick={() => toggleComponent(1)}
          >
            Feature 1
            <span className="component-size">+128KB</span>
          </button>
          
          <button 
            className={`component-button ${loadedComponents.includes(2) ? 'active' : ''}`}
            onClick={() => toggleComponent(2)}
          >
            Feature 2
            <span className="component-size">+96KB</span>
          </button>
          
          <button 
            className={`component-button ${loadedComponents.includes(3) ? 'active' : ''}`}
            onClick={() => toggleComponent(3)}
          >
            Feature 3
            <span className="component-size">+158KB</span>
          </button>
        </div>
        
        <div className="loaded-components">
          {loadedComponents.includes(1) && (
            <div className="component-wrapper">
              <h4>Feature 1</h4>
              <Suspense fallback={<LoadingSkeleton />}>
                <HeavyComponent1 />
              </Suspense>
            </div>
          )}
          
          {loadedComponents.includes(2) && (
            <div className="component-wrapper">
              <h4>Feature 2</h4>
              <Suspense fallback={<LoadingSkeleton />}>
                <HeavyComponent2 />
              </Suspense>
            </div>
          )}
          
          {loadedComponents.includes(3) && (
            <div className="component-wrapper">
              <h4>Feature 3</h4>
              <Suspense fallback={<LoadingSkeleton />}>
                <HeavyComponent3 />
              </Suspense>
            </div>
          )}
          
          {loadedComponents.length === 0 && (
            <div className="empty-state">
              <p>No features loaded yet. Click on a feature button above to load it.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="network-info">
        <div className="network-panel">
          <h4>How Code Splitting Works</h4>
          <p>
            Instead of loading your entire application at once, code splitting allows you to:
          </p>
          <ul>
            <li>Load only the critical code needed for initial render</li>
            <li>Defer loading of non-critical components until they're needed</li>
            <li>Reduce initial load time and improve Time to Interactive</li>
            <li>Dynamically import components based on user interactions</li>
          </ul>
          <p>
            This portfolio uses React.lazy() and Suspense with dynamic imports to implement code splitting,
            ensuring a fast initial load even as the application grows.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSplittingDemo; 
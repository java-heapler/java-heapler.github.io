import React from 'react';
import '../../styles/HeavyComponents.css';

// This would be a more complex component in a real app
const HeavyComponent1 = () => {
  return (
    <div className="heavy-component">
      <div className="component-content">
        <h4>Data Visualization Dashboard</h4>
        <p>This component would typically include heavy charting libraries and data processing.</p>
        <div className="mock-visualization">
          <div className="mock-chart">
            <div className="chart-bar" style={{height: '60%'}}></div>
            <div className="chart-bar" style={{height: '80%'}}></div>
            <div className="chart-bar" style={{height: '40%'}}></div>
            <div className="chart-bar" style={{height: '90%'}}></div>
            <div className="chart-bar" style={{height: '50%'}}></div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-color"></span>
              <span className="legend-label">Q1 2023</span>
            </div>
            <div className="legend-item">
              <span className="legend-color"></span>
              <span className="legend-label">Q2 2023</span>
            </div>
            <div className="legend-item">
              <span className="legend-color"></span>
              <span className="legend-label">Q3 2023</span>
            </div>
          </div>
        </div>
        <div className="component-footer">
          <p>✅ Component loaded successfully</p>
          <p className="code-note">Note: In a real application, this would include ~128KB of JS libraries</p>
        </div>
      </div>
    </div>
  );
};

export default HeavyComponent1; 